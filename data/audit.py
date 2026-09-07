from __future__ import annotations

import argparse
import csv
import hashlib
import json
import logging
import re
import sys
import time
import urllib.parse
import urllib.robotparser
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Any, Iterable

import pandas as pd
import requests
import yaml
from bs4 import BeautifulSoup
from pypdf import PdfReader
from rapidfuzz import fuzz

USER_AGENT = (
    "LagomMNLicenseAudit/1.0 "
    "(public-record research; contact the operator of this script for questions)"
)

SUPPORTED_EXTS = {".html", ".htm", ".pdf", ".csv", ".xlsx", ".xls", ".txt"}
FILE_EXTS = {".pdf", ".csv", ".xlsx", ".xls"}
DEFAULT_DELAY_SECONDS = 1.0
MAX_DISCOVERED_PER_SOURCE = 80

STATUS_PRIORITY = [
    "issued license",
    "preliminary approval",
    "qualified applicant",
    "pending",
    "denied",
    "withdrawn",
    "applicant",
    "historical",
    "unresolved",
    "unrelated",
]

STATUS_PATTERNS = {
    "issued license": [
        r"\blicense(?:s)? issued\b",
        r"\blicense holder\b",
        r"\blicensed business(?:es)?\b",
        r"\bissued license\b",
        r"\blicense number\b",
    ],
    "preliminary approval": [
        r"\bpreliminar(?:y|ily) approved\b",
        r"\bpreliminary approval\b",
    ],
    "qualified applicant": [
        r"\bqualified applicant\b",
        r"\bqualified applicants\b",
        r"\bqualified status\b",
    ],
    "pending": [
        r"\bunder review\b",
        r"\bawaiting\b",
        r"\bpending\b",
        r"\bfinal plans\b",
        r"\bpre[- ]license inspection\b",
        r"\bprelicensure inspection\b",
    ],
    "denied": [
        r"\bdenied\b",
        r"\blicense denied\b",
        r"\bapplication denied\b",
    ],
    "withdrawn": [
        r"\bwithdrawn\b",
        r"\bapplication withdrawn\b",
    ],
    "applicant": [
        r"\bapplicant\b",
        r"\bapplication number\b",
        r"\blicense application\b",
    ],
}

HISTORICAL_HINTS = [
    "tax delinquency",
    "taxpayer",
    "non-delivery",
    "department of revenue",
    "historical",
]

ADULT_USE_LICENSE_HINTS = [
    "cannabis retailer",
    "cannabis microbusiness",
    "cannabis mezzobusiness",
    "cannabis manufacturer",
    "cannabis cultivator",
    "cannabis wholesaler",
    "cannabis transporter",
    "cannabis delivery service",
    "medical cannabis combination",
]

LPHE_HINTS = [
    "lower-potency hemp edible",
    "lphe retailer",
    "lphe manufacturer",
    "lphe wholesaler",
]

def norm_space(s: str) -> str:
    return re.sub(r"\s+", " ", s or "").strip()

def normalize_text(s: str) -> str:
    s = (s or "").upper()
    s = s.replace("&", " AND ")
    s = re.sub(r"[^A-Z0-9]+", " ", s)
    replacements = {
        r"\bNORTH\b": "N",
        r"\bSOUTH\b": "S",
        r"\bEAST\b": "E",
        r"\bWEST\b": "W",
        r"\bSTREET\b": "ST",
        r"\bAVENUE\b": "AVE",
        r"\bROAD\b": "RD",
        r"\bSUITE\b": "STE",
        r"\bLIMITED LIABILITY COMPANY\b": "LLC",
    }
    for pat, repl in replacements.items():
        s = re.sub(pat, repl, s)
    return norm_space(s)

def normalize_phone(s: str) -> str:
    return re.sub(r"\D+", "", s or "")

def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

@dataclass
class Evidence:
    source_id: str
    agency: str
    source_url: str
    source_file: str
    source_sha256: str
    source_date: str
    location: str
    raw_text: str
    matched_term: str
    matched_kind: str
    match_score: float
    automated_classification: str
    adult_use_signal: str
    lphe_signal: str
    human_classification: str = ""
    human_notes: str = ""

class Audit:
    def __init__(
        self,
        root: Path,
        source_manifest: Path,
        entity_manifest: Path,
        min_score: int = 78,
        discovery: bool = True,
        delay: float = DEFAULT_DELAY_SECONDS,
        verbose: bool = False,
    ):
        self.root = root
        self.raw_dir = root / "raw"
        self.raw_dir.mkdir(parents=True, exist_ok=True)
        self.min_score = min_score
        self.discovery = discovery
        self.delay = delay
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": USER_AGENT})
        self.robots_cache: dict[str, urllib.robotparser.RobotFileParser] = {}
        self.download_rows: list[dict[str, Any]] = []
        self.evidence: list[Evidence] = []
        self.unresolved: list[dict[str, Any]] = []

        logging.basicConfig(
            level=logging.DEBUG if verbose else logging.INFO,
            format="%(levelname)s %(message)s",
        )

        with open(source_manifest, "r", encoding="utf-8") as f:
            self.sources = yaml.safe_load(f)["sources"]

        with open(entity_manifest, "r", encoding="utf-8") as f:
            raw_entities = yaml.safe_load(f)["entities"]

        self.entities: list[tuple[str, str, str]] = []
        for kind, vals in raw_entities.items():
            for val in vals or []:
                if not val:
                    continue
                if kind == "phones":
                    norm = normalize_phone(str(val))
                else:
                    norm = normalize_text(str(val))
                self.entities.append((kind, str(val), norm))

    def robots_allowed(self, url: str) -> bool:
        p = urllib.parse.urlparse(url)
        root = f"{p.scheme}://{p.netloc}"
        rp = self.robots_cache.get(root)
        if rp is None:
            rp = urllib.robotparser.RobotFileParser()
            rp.set_url(root + "/robots.txt")
            try:
                rp.read()
            except Exception:
                # If robots.txt cannot be retrieved, do not aggressively crawl;
                # allow only explicitly configured source URLs.
                self.robots_cache[root] = rp
                return True
            self.robots_cache[root] = rp
        try:
            return rp.can_fetch(USER_AGENT, url)
        except Exception:
            return True

    def fetch(self, url: str, source_id: str) -> tuple[bytes | None, str, str]:
        if not self.robots_allowed(url):
            self.unresolved.append({
                "source_id": source_id,
                "url": url,
                "reason": "robots.txt disallows automated retrieval",
            })
            return None, "", ""

        last_err = None
        for attempt in range(3):
            try:
                r = self.session.get(url, timeout=45, allow_redirects=True)
                r.raise_for_status()
                time.sleep(self.delay)
                ctype = r.headers.get("content-type", "")
                return r.content, r.url, ctype
            except Exception as e:
                last_err = repr(e)
                time.sleep(1.5 * (attempt + 1))

        self.unresolved.append({
            "source_id": source_id,
            "url": url,
            "reason": f"download failed: {last_err}",
        })
        return None, "", ""

    def safe_filename(self, source_id: str, url: str, ctype: str) -> str:
        p = urllib.parse.urlparse(url)
        name = Path(p.path).name or source_id
        if "." not in name:
            if "pdf" in ctype:
                name += ".pdf"
            elif "spreadsheet" in ctype or "excel" in ctype:
                name += ".xlsx"
            elif "csv" in ctype:
                name += ".csv"
            else:
                name += ".html"
        name = re.sub(r"[^A-Za-z0-9._-]+", "_", name)
        return f"{source_id}__{name}"[:220]

    def save_download(
        self, source: dict[str, Any], url: str, data: bytes, final_url: str, ctype: str
    ) -> Path:
        name = self.safe_filename(source["id"], final_url or url, ctype)
        path = self.raw_dir / name
        path.write_bytes(data)
        digest = sha256_bytes(data)
        self.download_rows.append({
            "source_id": source["id"],
            "agency": source["agency"],
            "configured_url": url,
            "final_url": final_url,
            "content_type": ctype,
            "local_file": str(path),
            "bytes": len(data),
            "sha256": digest,
            "expected_date": str(source.get("expected_date", "")),
        })
        return path

    def discover_links(self, source: dict[str, Any], base_url: str, html: bytes) -> list[str]:
        if not self.discovery or not source.get("discover_files"):
            return []
        soup = BeautifulSoup(html, "html.parser")
        out = []
        configured_host = urllib.parse.urlparse(base_url).netloc.lower()
        keywords = [k.lower() for k in source.get("keywords", [])]
        for a in soup.find_all("a", href=True):
            href = urllib.parse.urljoin(base_url, a["href"])
            p = urllib.parse.urlparse(href)
            if p.scheme not in {"http", "https"}:
                continue
            # Only configured official host/subdomains.
            if not (p.netloc.lower() == configured_host or p.netloc.lower().endswith("." + configured_host)):
                continue
            ext = Path(p.path).suffix.lower()
            anchor = norm_space(a.get_text(" ", strip=True)).lower()
            blob = (anchor + " " + href.lower())
            if ext in FILE_EXTS or any(k in blob for k in keywords):
                out.append(href)
            if len(out) >= MAX_DISCOVERED_PER_SOURCE:
                break
        # dedupe while preserving order
        seen = set()
        deduped = []
        for u in out:
            if u not in seen:
                seen.add(u)
                deduped.append(u)
        return deduped

    def classify_text(self, text: str, source_id: str, kind: str) -> tuple[str, str, str]:
        t = text.lower()

        # The official OCM license-holder dataset itself is strong issued-license evidence.
        if source_id in {"ocm_public_licensing_download", "ocm_license_holder_data"} and kind in {"xlsx", "xls", "csv"}:
            classification = "issued license"
        elif any(h in t for h in HISTORICAL_HINTS) and "license issued" not in t:
            classification = "historical"
        else:
            hits = []
            for status, pats in STATUS_PATTERNS.items():
                for pat in pats:
                    if re.search(pat, t, flags=re.I):
                        hits.append(status)
                        break
            classification = "unresolved"
            for candidate in STATUS_PRIORITY:
                if candidate in hits:
                    classification = candidate
                    break

        adult = "yes" if any(h in t for h in ADULT_USE_LICENSE_HINTS) else ""
        lphe = "yes" if any(h in t for h in LPHE_HINTS) else ""
        return classification, adult, lphe

    def match_blob(
        self,
        source: dict[str, Any],
        source_url: str,
        source_file: Path,
        source_date: str,
        location: str,
        blob: str,
        kind: str,
    ):
        blob = norm_space(blob)
        if not blob:
            return
        nblob = normalize_text(blob)
        digits = normalize_phone(blob)
        digest = sha256_bytes(source_file.read_bytes())

        best = None
        for ekind, raw, norm in self.entities:
            if ekind == "phones":
                score = 100 if norm and norm in digits else 0
            else:
                if norm and norm in nblob:
                    score = 100
                else:
                    # Partial ratio catches rows where a legal name/address is embedded in a larger record.
                    score = fuzz.partial_ratio(norm, nblob) if norm and nblob else 0
            if best is None or score > best[0]:
                best = (score, ekind, raw)

        if not best or best[0] < self.min_score:
            return

        cls, adult, lphe = self.classify_text(blob, source["id"], kind)

        self.evidence.append(Evidence(
            source_id=source["id"],
            agency=source["agency"],
            source_url=source_url,
            source_file=str(source_file),
            source_sha256=digest,
            source_date=source_date,
            location=location,
            raw_text=blob[:12000],
            matched_term=best[2],
            matched_kind=best[1],
            match_score=round(float(best[0]), 1),
            automated_classification=cls,
            adult_use_signal=adult,
            lphe_signal=lphe,
        ))

    def parse_html(self, source, source_url, path: Path, source_date: str):
        html = path.read_bytes()
        soup = BeautifulSoup(html, "html.parser")

        # Full text is useful for addresses/names in unstructured pages.
        text = soup.get_text(" ", strip=True)
        self.match_blob(source, source_url, path, source_date, "HTML full text", text, "html")

        # Tables preserve row-level context.
        for ti, table in enumerate(soup.find_all("table"), start=1):
            for ri, tr in enumerate(table.find_all("tr"), start=1):
                row = " | ".join(norm_space(x.get_text(" ", strip=True)) for x in tr.find_all(["th", "td"]))
                self.match_blob(
                    source, source_url, path, source_date,
                    f"HTML table {ti}, row {ri}", row, "html"
                )

    def parse_pdf(self, source, source_url, path: Path, source_date: str):
        try:
            reader = PdfReader(str(path))
        except Exception as e:
            self.unresolved.append({
                "source_id": source["id"],
                "url": source_url,
                "reason": f"PDF open failed: {e!r}",
            })
            return

        for pi, page in enumerate(reader.pages, start=1):
            try:
                text = page.extract_text() or ""
            except Exception:
                text = ""
            # Match page text and then line windows for better provenance.
            self.match_blob(source, source_url, path, source_date, f"PDF page {pi}", text, "pdf")
            lines = [norm_space(x) for x in text.splitlines() if norm_space(x)]
            for i in range(len(lines)):
                window = " | ".join(lines[max(0, i-3):min(len(lines), i+5)])
                self.match_blob(
                    source, source_url, path, source_date,
                    f"PDF page {pi}, lines {max(1,i-2)}-{min(len(lines),i+5)}",
                    window, "pdf"
                )

    def parse_csv(self, source, source_url, path: Path, source_date: str):
        try:
            df = pd.read_csv(path, dtype=str, keep_default_na=False)
        except Exception:
            try:
                df = pd.read_csv(path, dtype=str, keep_default_na=False, encoding="latin-1")
            except Exception as e:
                self.unresolved.append({
                    "source_id": source["id"],
                    "url": source_url,
                    "reason": f"CSV parse failed: {e!r}",
                })
                return
        for idx, row in df.iterrows():
            blob = " | ".join(f"{c}={row[c]}" for c in df.columns)
            self.match_blob(
                source, source_url, path, source_date,
                f"CSV row {idx+2}", blob, "csv"
            )

    def parse_excel(self, source, source_url, path: Path, source_date: str):
        try:
            sheets = pd.read_excel(
                path,
                sheet_name=None,
                dtype=str,
                keep_default_na=False,
                engine="calamine",
            )
        except Exception as e:
            self.unresolved.append({
                "source_id": source["id"],
                "url": source_url,
                "reason": f"Excel parse failed: {e!r}",
            })
            return

        for sheet_name, df in sheets.items():
            # Search every row in every sheet, preserving column names.
            for idx, row in df.iterrows():
                blob = " | ".join(f"{c}={row[c]}" for c in df.columns)
                self.match_blob(
                    source, source_url, path, source_date,
                    f"sheet={sheet_name}, row={idx+2}", blob, path.suffix.lower().lstrip(".")
                )

    def parse_text(self, source, source_url, path: Path, source_date: str):
        text = path.read_text("utf-8", errors="replace")
        self.match_blob(source, source_url, path, source_date, "text", text, "txt")

    def parse_file(self, source, source_url, path: Path, source_date: str):
        ext = path.suffix.lower()
        if ext in {".html", ".htm"}:
            self.parse_html(source, source_url, path, source_date)
        elif ext == ".pdf":
            self.parse_pdf(source, source_url, path, source_date)
        elif ext == ".csv":
            self.parse_csv(source, source_url, path, source_date)
        elif ext in {".xlsx", ".xls"}:
            self.parse_excel(source, source_url, path, source_date)
        elif ext == ".txt":
            self.parse_text(source, source_url, path, source_date)

    def ingest_url(self, source: dict[str, Any], url: str, source_date: str = ""):
        data, final_url, ctype = self.fetch(url, source["id"])
        if data is None:
            return
        path = self.save_download(source, url, data, final_url, ctype)

        # Correct extension using content type if server returns generic URL names.
        ext = path.suffix.lower()
        if "text/html" in ctype and ext not in {".html", ".htm"}:
            new_path = path.with_suffix(".html")
            path.rename(new_path)
            path = new_path
        elif "pdf" in ctype and ext != ".pdf":
            new_path = path.with_suffix(".pdf")
            path.rename(new_path)
            path = new_path
        elif ("spreadsheet" in ctype or "excel" in ctype) and ext not in {".xlsx", ".xls"}:
            new_path = path.with_suffix(".xlsx")
            path.rename(new_path)
            path = new_path

        self.parse_file(source, final_url or url, path, source_date)

        if path.suffix.lower() in {".html", ".htm"}:
            for discovered in self.discover_links(source, final_url or url, data):
                self.ingest_url(source, discovered, source_date)

    def ingest_manual(self, manual_dir: Path):
        if not manual_dir.exists():
            return
        pseudo = {
            "id": "manual_official_input",
            "agency": "Manual official-source input",
            "authority": "primary",
        }
        for path in manual_dir.rglob("*"):
            if path.is_file() and path.suffix.lower() in SUPPORTED_EXTS:
                url = f"manual://{path.relative_to(manual_dir)}"
                self.parse_file(pseudo, url, path, "")

    def run(self, manual_dir: Path | None = None):
        for source in self.sources:
            logging.info("Source: %s", source["id"])
            self.ingest_url(source, source["url"], str(source.get("expected_date", "")))

        if manual_dir:
            self.ingest_manual(manual_dir)

        # De-duplicate identical evidence snippets.
        uniq = {}
        for ev in self.evidence:
            key = (
                ev.source_id, ev.location, ev.raw_text,
                ev.matched_term, ev.automated_classification
            )
            if key not in uniq or ev.match_score > uniq[key].match_score:
                uniq[key] = ev
        self.evidence = sorted(
            uniq.values(),
            key=lambda e: (
                STATUS_PRIORITY.index(e.automated_classification)
                if e.automated_classification in STATUS_PRIORITY else 999,
                -e.match_score,
                e.agency,
            ),
        )

        self.write_outputs()

    def write_outputs(self):
        self.root.mkdir(parents=True, exist_ok=True)

        evidence_csv = self.root / "evidence.csv"
        fields = list(Evidence.__dataclass_fields__.keys())
        with evidence_csv.open("w", newline="", encoding="utf-8-sig") as f:
            w = csv.DictWriter(f, fieldnames=fields)
            w.writeheader()
            for ev in self.evidence:
                w.writerow(asdict(ev))

        with (self.root / "evidence.json").open("w", encoding="utf-8") as f:
            json.dump([asdict(x) for x in self.evidence], f, indent=2, ensure_ascii=False)

        inventory_fields = [
            "id", "agency", "jurisdiction", "kind", "url", "domain",
            "authority", "discover_files", "expected_date"
        ]
        with (self.root / "source_inventory.csv").open("w", newline="", encoding="utf-8-sig") as f:
            w = csv.DictWriter(f, fieldnames=inventory_fields)
            w.writeheader()
            for s in self.sources:
                w.writerow({k: s.get(k, "") for k in inventory_fields})

        if self.download_rows:
            with (self.root / "download_log.csv").open("w", newline="", encoding="utf-8-sig") as f:
                fields2 = list(self.download_rows[0].keys())
                w = csv.DictWriter(f, fieldnames=fields2)
                w.writeheader()
                w.writerows(self.download_rows)

        with (self.root / "unresolved_sources.csv").open("w", newline="", encoding="utf-8-sig") as f:
            fields3 = ["source_id", "url", "reason"]
            w = csv.DictWriter(f, fieldnames=fields3)
            w.writeheader()
            for row in self.unresolved:
                w.writerow({k: row.get(k, "") for k in fields3})

        logging.info("Wrote %d evidence candidates to %s", len(self.evidence), evidence_csv)

def main():
    ap = argparse.ArgumentParser(
        description="Official-source Minnesota cannabis/hemp licensing audit for Lagom Naturals."
    )
    here = Path(__file__).resolve().parent
    ap.add_argument("--sources", type=Path, default=here / "sources.yaml")
    ap.add_argument("--entities", type=Path, default=here / "entities.yaml")
    ap.add_argument("--output", type=Path, default=here / "audit_output")
    ap.add_argument("--manual-inputs", type=Path, default=None)
    ap.add_argument("--min-score", type=int, default=78)
    ap.add_argument("--no-discovery", action="store_true")
    ap.add_argument("--delay", type=float, default=DEFAULT_DELAY_SECONDS)
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()

    audit = Audit(
        root=args.output,
        source_manifest=args.sources,
        entity_manifest=args.entities,
        min_score=args.min_score,
        discovery=not args.no_discovery,
        delay=max(args.delay, 0.5),
        verbose=args.verbose,
    )
    audit.run(args.manual_inputs)

if __name__ == "__main__":
    main()
