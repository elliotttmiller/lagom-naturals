import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { products } from "@/catalogData";
import classic960Avif from "../assets/optimized/gummyShowcase/classic-960.avif";
import classic1200Avif from "../assets/optimized/gummyShowcase/classic-1200.avif";
import classic1806Avif from "../assets/optimized/gummyShowcase/classic-1806.avif";
import classic480Avif from "../assets/optimized/gummyShowcase/classic-480.avif";
import classic800Avif from "../assets/optimized/gummyShowcase/classic-800.avif";
import classic960Webp from "../assets/optimized/gummyShowcase/classic-960.webp";
import classic1200Webp from "../assets/optimized/gummyShowcase/classic-1200.webp";
import classic1806Webp from "../assets/optimized/gummyShowcase/classic-1806.webp";
import classic480Webp from "../assets/optimized/gummyShowcase/classic-480.webp";
import classic800Webp from "../assets/optimized/gummyShowcase/classic-800.webp";
import organic960Avif from "../assets/optimized/gummyShowcase/organic-960.avif";
import organic1200Avif from "../assets/optimized/gummyShowcase/organic-1200.avif";
import organic1806Avif from "../assets/optimized/gummyShowcase/organic-1806.avif";
import organic480Avif from "../assets/optimized/gummyShowcase/organic-480.avif";
import organic800Avif from "../assets/optimized/gummyShowcase/organic-800.avif";
import organic960Webp from "../assets/optimized/gummyShowcase/organic-960.webp";
import organic1200Webp from "../assets/optimized/gummyShowcase/organic-1200.webp";
import organic1806Webp from "../assets/optimized/gummyShowcase/organic-1806.webp";
import organic480Webp from "../assets/optimized/gummyShowcase/organic-480.webp";
import organic800Webp from "../assets/optimized/gummyShowcase/organic-800.webp";
import midnight960Avif from "../assets/optimized/gummyShowcase/midnight-drift-960.avif";
import midnight1200Avif from "../assets/optimized/gummyShowcase/midnight-drift-1200.avif";
import midnight1806Avif from "../assets/optimized/gummyShowcase/midnight-drift-1806.avif";
import midnight480Avif from "../assets/optimized/gummyShowcase/midnight-drift-480.avif";
import midnight800Avif from "../assets/optimized/gummyShowcase/midnight-drift-800.avif";
import midnight960Webp from "../assets/optimized/gummyShowcase/midnight-drift-960.webp";
import midnight1200Webp from "../assets/optimized/gummyShowcase/midnight-drift-1200.webp";
import midnight1806Webp from "../assets/optimized/gummyShowcase/midnight-drift-1806.webp";
import midnight480Webp from "../assets/optimized/gummyShowcase/midnight-drift-480.webp";
import midnight800Webp from "../assets/optimized/gummyShowcase/midnight-drift-800.webp";

const hero = (desktopAvif, mobileAvif, desktopWebp, mobileWebp, fallback) => ({ desktopAvif, mobileAvif, desktopWebp, mobileWebp, fallback });

const HEROES = {
  Classic: hero(
    `${classic960Avif} 960w, ${classic1200Avif} 1200w, ${classic1806Avif} 1806w`, `${classic480Avif} 480w, ${classic800Avif} 800w`, `${classic960Webp} 960w, ${classic1200Webp} 1200w, ${classic1806Webp} 1806w`, `${classic480Webp} 480w, ${classic800Webp} 800w`, classic1806Webp,
  ),
  Organic: hero(
    `${organic960Avif} 960w, ${organic1200Avif} 1200w, ${organic1806Avif} 1806w`, `${organic480Avif} 480w, ${organic800Avif} 800w`, `${organic960Webp} 960w, ${organic1200Webp} 1200w, ${organic1806Webp} 1806w`, `${organic480Webp} 480w, ${organic800Webp} 800w`, organic1806Webp,
  ),
  "Midnight Drift": hero(
    `${midnight960Avif} 960w, ${midnight1200Avif} 1200w, ${midnight1806Avif} 1806w`, `${midnight480Avif} 480w, ${midnight800Avif} 800w`, `${midnight960Webp} 960w, ${midnight1200Webp} 1200w, ${midnight1806Webp} 1806w`, `${midnight480Webp} 480w, ${midnight800Webp} 800w`, midnight1806Webp,
  ),
};

const COLLECTIONS = [
  { name: "Classic", description: "Fruit-forward favorites for everyday moments.", accent: "#d55f86", background: "#b9e5fa" },
  { name: "Organic", description: "Organic fruit flavors with full-spectrum live resin.", accent: "#5f956c", background: "#c9e7c1" },
  { name: "Midnight Drift", description: "A full-spectrum collection for slower evenings.", accent: "#6260a2", background: "#bdc7ee" },
];

function GummyHero({ collection, reducedMotion }) {
  const image = HEROES[collection.name];
  return <AnimatePresence initial={false} mode="sync"><motion.div key={collection.name} className="gummy-showcase__hero" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.42, ease: [0.16, 1, 0.3, 1] }}><picture><source media="(max-width: 899px)" type="image/avif" srcSet={image.mobileAvif} sizes="100vw" /><source media="(max-width: 899px)" type="image/webp" srcSet={image.mobileWebp} sizes="100vw" /><source type="image/avif" srcSet={image.desktopAvif} sizes="100vw" /><source type="image/webp" srcSet={image.desktopWebp} sizes="100vw" /><img src={image.fallback} alt="" decoding="async" /></picture></motion.div></AnimatePresence>;
}

export default function GummyShowcase() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  const reducedMotion = useReducedMotion();
  const collection = COLLECTIONS[index];
  const flavorCount = useMemo(() => products.filter((product) => product.category === "Gummies" && product.productLine === collection.name).length, [collection.name]);
  const collectionUrl = `/shop/gummies?collection=${encodeURIComponent(collection.name)}`;
  const change = (delta) => setIndex((current) => (current + delta + COLLECTIONS.length) % COLLECTIONS.length);
  const selectCollection = (nextIndex) => { if (nextIndex !== index) setIndex(nextIndex); };

  useEffect(() => {
    const onKeyDown = (event) => { if (!(event.target instanceof HTMLAnchorElement) && event.key === "ArrowLeft") change(-1); if (!(event.target instanceof HTMLAnchorElement) && event.key === "ArrowRight") change(1); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return <section className="seltzer-showcase gummy-showcase" style={{ "--seltzer-accent": collection.accent, "--seltzer-slide-background": collection.background }} aria-labelledby="gummy-showcase-title" onPointerDown={(event) => { if (event.pointerType === "touch") touchStart.current = event.clientX; }} onPointerUp={(event) => { if (touchStart.current === null) return; const distance = event.clientX - touchStart.current; touchStart.current = null; if (Math.abs(distance) > 48) change(distance > 0 ? -1 : 1); }}>
    <h2 id="gummy-showcase-title" className="sr-only">Lagom gummy collections</h2>
    <GummyHero collection={collection} reducedMotion={reducedMotion} />
    <div className="seltzer-showcase__topline" aria-hidden="true"><img className="seltzer-showcase__brand-logo" src="/enhanced-lagom-naturals-logo-white.webp" alt="" /></div>
    <button className="seltzer-showcase__nav seltzer-showcase__nav--previous" type="button" onClick={() => change(-1)} aria-label="Previous gummy collection"><ArrowLeft /></button>
    <button className="seltzer-showcase__nav seltzer-showcase__nav--next" type="button" onClick={() => change(1)} aria-label="Next gummy collection"><ArrowRight /></button>
    <div className="gummy-showcase__details"><div><p>{collection.description}</p><span>{flavorCount} flavors · Gummy collection</span></div><Link to={collectionUrl}>Explore collection <ArrowRight aria-hidden="true" /></Link></div>
    <div className="seltzer-showcase__progress gummy-showcase__progress" role="tablist" aria-label="Gummy collections"><span>{String(index + 1).padStart(2, "0")} / {String(COLLECTIONS.length).padStart(2, "0")}</span>{COLLECTIONS.map((item, itemIndex) => <button type="button" role="tab" key={item.name} aria-selected={itemIndex === index} aria-label={`Show ${item.name} gummy collection`} className={itemIndex === index ? "is-active" : ""} onClick={() => selectCollection(itemIndex)} />)}</div>
  </section>;
}
