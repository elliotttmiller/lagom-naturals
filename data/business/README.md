# Lagom Naturals — Minnesota Cannabis/Hemp Licensing Audit

This package is a reproducible, official-source research pipeline for determining whether Lagom Naturals / Lagom Naturals LLC:

- holds an issued Minnesota adult-use cannabis license;
- is an applicant;
- is a qualified applicant;
- has preliminary approval;
- is pending;
- was denied or withdrawn;
- appears only in historical/non-licensing records;
- or remains unresolved from public data.

## Evidence rule

The tool does **not** infer licensure from branding, product assortment, media reports, tax registration, lottery participation, or local registration.

A finding is only classified as **issued license** when an official Minnesota Office of Cannabis Management (OCM) license-holder record or other equally authoritative OCM record shows an issued license.

Likewise, a company is only classified as **in process** when an official OCM applicant-level record, application-status record, lottery/preapproval record tied to the entity/application number, or OCM public-data response supports that status.

"No match located" is never automatically converted to "unlicensed."

## Entity universe

The default search set includes:

- Lagom Naturals
- Lagom Naturals LLC
- LAGOM NATURALS LLC
- Lagom
- 707 N 3rd St
- 707 3rd St N
- 707 North 3rd Street
- 707 N 3rd St Ste 101
- 707 N 3rd St Suite 101
- Minneapolis MN 55401
- 612-930-7643

Add any newly verified related entity names, application numbers, license numbers, owner/control-person names, or addresses to `entities.yaml`.

## What the script does

1. Loads a curated manifest of official Minnesota government sources.
2. Checks robots.txt before crawling HTML.
3. Downloads public HTML/PDF/XLSX/CSV files with retry, delay, caching, provenance metadata, and SHA-256 hashes.
4. Discovers linked public PDFs/XLSX/CSV files from configured government landing pages.
5. Parses:
   - HTML tables/text
   - PDF text
   - CSV rows
   - every sheet of XLSX/XLS files
6. Normalizes legal names, DBAs, addresses, phone numbers, and free text.
7. Runs exact + fuzzy entity matching.
8. Extracts candidate evidence.
9. Assigns a conservative automated classification.
10. Produces:
   - `evidence.csv`
   - `source_inventory.csv`
   - `download_log.csv`
   - `unresolved_sources.csv`
   - raw downloaded source files
   - a machine-readable `evidence.json`

## Run locally

Python 3.11+ recommended.

```bash
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
python audit.py
```

Useful options:

```bash
python audit.py --output ./audit_output
python audit.py --min-score 78
python audit.py --no-discovery
python audit.py --verbose
```

## Critical manual step: OCM public-data request

OCM's public web tables show aggregate application statuses, not all applicant-level names. If the downloadable license-holder workbook does not resolve Lagom's adult-use status, submit the included `OCM_PUBLIC_DATA_REQUEST.txt`.

When OCM returns the response, place the response files in:

```text
manual_inputs/ocm_data_request/
```

Then rerun:

```bash
python audit.py --manual-inputs ./manual_inputs
```

The script will ingest supported PDF, CSV, XLSX, XLS, TXT, and HTML files placed there.

## Classification meanings

- `issued license` — official OCM evidence of a license actually issued.
- `applicant` — official evidence the entity/application exists, without stronger status evidence.
- `qualified applicant` — OCM says initial application requirements were met.
- `preliminary approval` — OCM preliminary approval is documented.
- `pending` — application is under review or awaiting required next action.
- `denied` — official denial.
- `withdrawn` — official withdrawal.
- `historical` — authoritative historical/regulatory record not establishing current licensure.
- `unrelated` — candidate was reviewed and does not resolve to Lagom.
- `unresolved` — evidence is potentially relevant but insufficient to assign a stronger status.

## Required human review

Automated matching is only candidate generation. Before making a public claim:

1. Open the original source.
2. Confirm the legal entity/DBA/address/application/license number.
3. Confirm the source date.
4. Confirm the record is current rather than historical.
5. Confirm the status language is explicit.
6. Record the human-reviewed classification in `evidence.csv`.

The final conclusion should be evidence-based and should explicitly distinguish "no public record located" from "official evidence that no license exists."
