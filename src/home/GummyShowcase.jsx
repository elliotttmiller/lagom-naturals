import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Package, Sparkles, X } from "lucide-react";
import {
  m,
  Presence,
  motionTokens,
  useReducedMotion,
} from "@/motionSystem";
import { products } from "@/catalogData";
import { responsiveImages } from "@/generated/responsiveImages";
import classic960Avif from "../assets/optimized/gummyShowcase/classic-960.avif";
import classic1200Avif from "../assets/optimized/gummyShowcase/classic-1200.avif";
import classic1806Avif from "../assets/optimized/gummyShowcase/classic-1806.avif";
import classic960Webp from "../assets/optimized/gummyShowcase/classic-960.webp";
import classic1200Webp from "../assets/optimized/gummyShowcase/classic-1200.webp";
import classic1806Webp from "../assets/optimized/gummyShowcase/classic-1806.webp";
import organic960Avif from "../assets/optimized/gummyShowcase/organic-960.avif";
import organic1200Avif from "../assets/optimized/gummyShowcase/organic-1200.avif";
import organic1806Avif from "../assets/optimized/gummyShowcase/organic-1806.avif";
import organic960Webp from "../assets/optimized/gummyShowcase/organic-960.webp";
import organic1200Webp from "../assets/optimized/gummyShowcase/organic-1200.webp";
import organic1806Webp from "../assets/optimized/gummyShowcase/organic-1806.webp";
import midnight960Avif from "../assets/optimized/gummyShowcase/midnight-drift-960.avif";
import midnight1200Avif from "../assets/optimized/gummyShowcase/midnight-drift-1200.avif";
import midnight1806Avif from "../assets/optimized/gummyShowcase/midnight-drift-1806.avif";
import midnight960Webp from "../assets/optimized/gummyShowcase/midnight-drift-960.webp";
import midnight1200Webp from "../assets/optimized/gummyShowcase/midnight-drift-1200.webp";
import midnight1806Webp from "../assets/optimized/gummyShowcase/midnight-drift-1806.webp";

const COLLECTIONS = [
  {
    name: "Classic",
    tone: "classic",
    productIds: ["push-pop", "strawberry-banana", "blueberry-yum-yum", "green-apple"],
  },
  {
    name: "Organic",
    tone: "organic",
    productIds: ["berry-melon-bliss-organic", "blue-razz-organic", "cherry-bliss-organic", "push-pop-organic"],
  },
  {
    name: "Midnight Drift",
    tone: "midnight",
    productIds: [
      "strawberry-midnight-drift",
      "blueberry-yum-yum-midnight-drift",
      "peach-midnight-drift",
      "pink-lemonade-midnight-drift",
    ],
  },
];

const desktopHero = (avif, webp, fallback) => ({ avif, webp, fallback });

const DESKTOP_HEROES = {
  Classic: desktopHero(
    `${classic960Avif} 960w, ${classic1200Avif} 1200w, ${classic1806Avif} 1806w`,
    `${classic960Webp} 960w, ${classic1200Webp} 1200w, ${classic1806Webp} 1806w`,
    classic1806Webp,
  ),
  Organic: desktopHero(
    `${organic960Avif} 960w, ${organic1200Avif} 1200w, ${organic1806Avif} 1806w`,
    `${organic960Webp} 960w, ${organic1200Webp} 1200w, ${organic1806Webp} 1806w`,
    organic1806Webp,
  ),
  "Midnight Drift": desktopHero(
    `${midnight960Avif} 960w, ${midnight1200Avif} 1200w, ${midnight1806Avif} 1806w`,
    `${midnight960Webp} 960w, ${midnight1200Webp} 1200w, ${midnight1806Webp} 1806w`,
    midnight1806Webp,
  ),
};

const DESKTOP_COLLECTIONS = [
  { name: "Classic", description: "Fruit-forward favorites for everyday moments.", accent: "#d55f86", background: "#b9e5fa" },
  { name: "Organic", description: "Organic fruit flavors with full-spectrum live resin.", accent: "#5f956c", background: "#c9e7c1" },
  { name: "Midnight Drift", description: "A full-spectrum collection for slower evenings.", accent: "#6260a2", background: "#bdc7ee" },
];

const PRODUCT_MEDIA_KEYS = {
  "push-pop": "Push-Pop-Photoroom-900x900",
  "strawberry-banana": "Strawberry-Banana-Photoroom-900x900",
  "blueberry-yum-yum": "Blueberry-Yum-Yum-1-Photoroom-900x900",
  "green-apple": "Green-Apple-Photoroom-900x900",
  "berry-melon-bliss-organic": "Berry-Melon-Bliss-Photoroom-900x900",
  "blue-razz-organic": "Blue-Razz-Photoroom-Photoroom-1-900x900",
  "cherry-bliss-organic": "Cherry-Bliss-Photoroom-900x900",
  "push-pop-organic": "Push-Pop-1-Photoroom-900x900",
  "strawberry-midnight-drift": "Strawberry-Photoroom-900x900",
  "blueberry-yum-yum-midnight-drift": "Blueberry-Yum-Yum-3-Photoroom-900x900",
  "peach-midnight-drift": "Peach-Photoroom-900x900",
  "pink-lemonade-midnight-drift": "Pink-Lemonade-Photoroom-900x900",
};

const PRODUCT_THEMES = {
  "push-pop": { surface: "linear-gradient(145deg,#ffcc8d 0%,#ffaf75 48%,#ffd5aa 100%)", accent: "#e66018" },
  "strawberry-banana": { surface: "linear-gradient(145deg,#f4adb8 0%,#f58c9d 46%,#ffd0c6 100%)", accent: "#ca334d" },
  "blueberry-yum-yum": { surface: "linear-gradient(145deg,#c2c5ff 0%,#989cf1 48%,#d7d4ff 100%)", accent: "#2454c7" },
  "green-apple": { surface: "linear-gradient(145deg,#d9ef9c 0%,#b6d95d 48%,#ecf8c0 100%)", accent: "#3c8a27" },
  "berry-melon-bliss-organic": { surface: "linear-gradient(145deg,#f58ab2 0%,#d94b86 48%,#ffc0d2 100%)", accent: "#8e164f" },
  "blue-razz-organic": { surface: "linear-gradient(145deg,#73baf3 0%,#2e8bd6 48%,#b8ddfb 100%)", accent: "#0d5f9f" },
  "cherry-bliss-organic": { surface: "linear-gradient(145deg,#f16672 0%,#c93348 48%,#ffadb2 100%)", accent: "#8f1526" },
  "push-pop-organic": { surface: "linear-gradient(145deg,#ffb36d 0%,#ee7a2d 48%,#ffd1a1 100%)", accent: "#a94b15" },
  "strawberry-midnight-drift": { surface: "linear-gradient(155deg,#4b6085 0%,#7384a8 44%,#ddb0ba 100%)", accent: "#ef758e" },
  "blueberry-yum-yum-midnight-drift": { surface: "linear-gradient(155deg,#41577f 0%,#6077a3 44%,#9fb6db 100%)", accent: "#7bbfff" },
  "peach-midnight-drift": { surface: "linear-gradient(155deg,#52617e 0%,#8a7a80 43%,#e8a574 100%)", accent: "#f0a15c" },
  "pink-lemonade-midnight-drift": { surface: "linear-gradient(155deg,#4d5879 0%,#876d86 44%,#dfa4b4 100%)", accent: "#f38ba9" },
};

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function getProductMedia(productId) {
  const key = PRODUCT_MEDIA_KEYS[productId];
  return key ? responsiveImages.homeGummies[key] : null;
}

function ProductPicture({ product, className, sizes = "(max-width: 899px) 46vw, 20vw", eager = false, layoutId }) {
  const media = getProductMedia(product.id);
  if (!media) return null;

  return (
    <m.picture className={className} layoutId={layoutId}>
      {media.avifSrcSet ? <source type="image/avif" srcSet={media.avifSrcSet} sizes={sizes} /> : null}
      {media.webpSrcSet ? <source type="image/webp" srcSet={media.webpSrcSet} sizes={sizes} /> : null}
      <img src={media.src} alt="" loading={eager ? "eager" : "lazy"} decoding="async" draggable="false" />
    </m.picture>
  );
}

function collectionLabel(product) {
  if (product.productLine === "Classic") return "Gummies";
  return `${product.productLine} Gummies`;
}

function productFacts(product) {
  const facts = [];
  if (Number.isFinite(product.piecesPerPackage)) facts.push({ value: String(product.piecesPerPackage), label: "Count" });

  if (Number.isFinite(product.thcMgPerPackage)) {
    facts.push({ value: `${product.thcMgPerPackage} MG`, label: "THC total" });
  } else if (Number.isFinite(product.thcMgPerPiece)) {
    facts.push({ value: `${product.thcMgPerPiece} MG`, label: "THC / gummy" });
  }

  if (Number.isFinite(product.cbdMgPerPiece) && product.cbdMgPerPiece > 0) {
    facts.push({ value: `${product.cbdMgPerPiece} MG`, label: "CBD / gummy" });
  } else if (Number.isFinite(product.thcMgPerPiece)) {
    facts.push({ value: `${product.thcMgPerPiece} MG`, label: "Per gummy" });
  }

  return facts.slice(0, 3);
}

function productHighlights(product) {
  const highlights = [];
  if (product.flavor) highlights.push({ icon: Sparkles, label: `${product.flavor} flavor` });
  if (Number.isFinite(product.piecesPerPackage)) highlights.push({ icon: Package, label: `${product.piecesPerPackage}-piece pouch` });
  const tested = product.testingAndPackaging?.find((item) => /tested/i.test(item));
  if (tested) highlights.push({ icon: Check, label: tested });
  return highlights.slice(0, 3);
}

function CollectionRail({ activeIndex, onSelect }) {
  return (
    <div className="gummy-mobile__collection-rail" role="tablist" aria-label="Gummy collections">
      {COLLECTIONS.map((collection, index) => (
        <button
          type="button"
          role="tab"
          key={collection.name}
          aria-selected={index === activeIndex}
          aria-label={`Show ${collection.name} gummies`}
          className={index === activeIndex ? "is-active" : ""}
          onClick={() => onSelect(index)}
        >
          <span>{collection.name}</span>
        </button>
      ))}
    </div>
  );
}

function ProductTile({ product, collectionTone, index, onOpen, buttonRef, reduceMotion }) {
  const theme = PRODUCT_THEMES[product.id] || PRODUCT_THEMES["push-pop"];

  return (
    <m.article
      className={`gummy-tile gummy-tile--${collectionTone}`}
      style={{ "--gummy-tile-surface": theme.surface, "--gummy-tile-accent": theme.accent }}
      layout={!reduceMotion}
      layoutId={reduceMotion ? undefined : `gummy-surface-${product.id}`}
      transition={motionTokens.springSoft}
    >
      <button
        type="button"
        ref={buttonRef}
        className="gummy-tile__button"
        aria-label={`Open ${product.name} quick view`}
        onClick={() => onOpen(product.id)}
      >
        <span className="gummy-tile__art" aria-hidden="true">
          <span className="gummy-tile__orb gummy-tile__orb--one" />
          <span className="gummy-tile__orb gummy-tile__orb--two" />
          <ProductPicture
            product={product}
            className="gummy-tile__product"
            sizes="(max-width: 899px) 46vw, 20vw"
            eager={index < 2}
            layoutId={reduceMotion ? undefined : `gummy-media-${product.id}`}
          />
        </span>

        <span className="gummy-tile__footer">
          <span className="gummy-tile__identity">
            <m.strong layoutId={reduceMotion ? undefined : `gummy-title-${product.id}`}>
              {product.name}
            </m.strong>
            <small>{collectionLabel(product)}</small>
          </span>
          <span className="gummy-tile__arrow" aria-hidden="true"><ArrowRight /></span>
        </span>
      </button>
    </m.article>
  );
}

function ProductQuickView({ product, collectionTone, onClose, reduceMotion, detailHeadingRef }) {
  const theme = PRODUCT_THEMES[product.id] || PRODUCT_THEMES["push-pop"];
  const facts = productFacts(product);
  const highlights = productHighlights(product);

  return (
    <m.article
      className={`gummy-quick-view gummy-quick-view--${collectionTone}`}
      style={{ "--gummy-tile-surface": theme.surface, "--gummy-tile-accent": theme.accent }}
      layout={!reduceMotion}
      layoutId={reduceMotion ? undefined : `gummy-surface-${product.id}`}
      initial={reduceMotion ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={reduceMotion ? { duration: 0.14 } : motionTokens.springSoft}
      aria-labelledby={`gummy-quick-title-${product.id}`}
    >
      <div className="gummy-quick-view__hero">
        <span className="gummy-quick-view__orb gummy-quick-view__orb--one" aria-hidden="true" />
        <span className="gummy-quick-view__orb gummy-quick-view__orb--two" aria-hidden="true" />

        <button type="button" className="gummy-quick-view__control gummy-quick-view__control--back" onClick={onClose} aria-label="Back to gummy grid"><ArrowLeft /></button>
        <button type="button" className="gummy-quick-view__control gummy-quick-view__control--close" onClick={onClose} aria-label="Close product quick view"><X /></button>

        <ProductPicture
          product={product}
          className="gummy-quick-view__product"
          sizes="(max-width: 899px) 78vw, 34vw"
          eager
          layoutId={reduceMotion ? undefined : `gummy-media-${product.id}`}
        />
      </div>

      <m.div
        className="gummy-quick-view__info"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { delay: 0.12, duration: 0.38, ease: motionTokens.easeSoft }}
      >
        <p className="gummy-quick-view__eyebrow">Lagom Gummies · {product.productLine}</p>
        <m.h3 id={`gummy-quick-title-${product.id}`} ref={detailHeadingRef} tabIndex={-1} layoutId={reduceMotion ? undefined : `gummy-title-${product.id}`}>
          {product.name}
        </m.h3>
        <p className="gummy-quick-view__description">{product.description}</p>

        {highlights.length ? (
          <div className="gummy-quick-view__highlights" aria-label={`${product.name} highlights`}>
            {highlights.map(({ icon: Icon, label }) => (
              <span key={label}><Icon aria-hidden="true" /><b>{label}</b></span>
            ))}
          </div>
        ) : null}

        {facts.length ? (
          <div className="gummy-quick-view__facts" aria-label={`${product.name} product facts`}>
            {facts.map((fact) => (
              <span key={`${fact.value}-${fact.label}`}><b>{fact.value}</b><small>{fact.label}</small></span>
            ))}
          </div>
        ) : null}

        <Link className="gummy-quick-view__cta" to={`/product/${product.id}`}>
          <span>View Product</span><ArrowRight aria-hidden="true" />
        </Link>
      </m.div>
    </m.article>
  );
}

function MobileGummyExperience() {
  const reduceMotion = useReducedMotion();
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const tileRefs = useRef(new Map());
  const detailHeadingRef = useRef(null);
  const pointerStart = useRef(null);

  const collection = COLLECTIONS[collectionIndex];
  const collectionProducts = useMemo(() => collection.productIds.map(getProduct).filter(Boolean), [collection]);
  const selectedProduct = selectedId ? getProduct(selectedId) : null;

  const closeQuickView = () => {
    const returnTarget = selectedId;
    setSelectedId(null);
    window.requestAnimationFrame(() => tileRefs.current.get(returnTarget)?.focus());
  };

  const openQuickView = (productId) => {
    setSelectedId(productId);
    window.requestAnimationFrame(() => detailHeadingRef.current?.focus());
  };

  const selectCollection = (nextIndex) => {
    if (selectedId) return;
    setCollectionIndex((nextIndex + COLLECTIONS.length) % COLLECTIONS.length);
  };

  useEffect(() => {
    if (!selectedId) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeQuickView();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedId]);

  return (
    <div
      className="gummy-showcase__mobile gummy-mobile"
      onPointerDown={(event) => {
        if (selectedId || event.pointerType !== "touch") return;
        pointerStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        if (selectedId || !pointerStart.current) return;
        const dx = event.clientX - pointerStart.current.x;
        const dy = event.clientY - pointerStart.current.y;
        pointerStart.current = null;
        if (Math.abs(dx) < 56 || Math.abs(dx) <= Math.abs(dy) * 1.15) return;
        selectCollection(collectionIndex + (dx < 0 ? 1 : -1));
      }}
    >
      <Presence mode="popLayout" initial={false}>
        {selectedProduct ? (
          <ProductQuickView
            key={`quick-${selectedProduct.id}`}
            product={selectedProduct}
            collectionTone={collection.tone}
            onClose={closeQuickView}
            reduceMotion={reduceMotion}
            detailHeadingRef={detailHeadingRef}
          />
        ) : (
          <m.div
            key={`grid-${collection.name}`}
            className="gummy-mobile__grid-state"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -14 }}
            transition={reduceMotion ? { duration: 0.14 } : { duration: 0.34, ease: motionTokens.easeSoft }}
          >
            <CollectionRail activeIndex={collectionIndex} onSelect={selectCollection} />

            <div className={`gummy-mobile__grid gummy-mobile__grid--${collection.tone}`} aria-label={`${collection.name} gummy flavors`}>
              {collectionProducts.map((product, index) => (
                <ProductTile
                  key={product.id}
                  product={product}
                  collectionTone={collection.tone}
                  index={index}
                  reduceMotion={reduceMotion}
                  onOpen={openQuickView}
                  buttonRef={(node) => {
                    if (node) tileRefs.current.set(product.id, node);
                    else tileRefs.current.delete(product.id);
                  }}
                />
              ))}
            </div>

            <p className="sr-only" aria-live="polite">{collection.name} gummy collection, {collectionProducts.length} products</p>
          </m.div>
        )}
      </Presence>
    </div>
  );
}

function DesktopGummyShowcase() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  const collection = DESKTOP_COLLECTIONS[index];
  const image = DESKTOP_HEROES[collection.name];
  const flavorCount = products.filter((product) => product.category === "Gummies" && product.productLine === collection.name).length;
  const collectionUrl = `/shop/gummies?collection=${encodeURIComponent(collection.name)}`;
  const change = (delta) => setIndex((current) => (current + delta + DESKTOP_COLLECTIONS.length) % DESKTOP_COLLECTIONS.length);

  return (
    <div className="gummy-showcase__desktop">
      <section
        className="seltzer-showcase gummy-showcase gummy-showcase--desktop"
        style={{ "--seltzer-accent": collection.accent, "--seltzer-slide-background": collection.background }}
        aria-labelledby="gummy-showcase-desktop-title"
        onPointerDown={(event) => {
          if (event.pointerType === "touch") touchStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (touchStart.current === null) return;
          const distance = event.clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(distance) > 48) change(distance > 0 ? -1 : 1);
        }}
      >
        <h2 id="gummy-showcase-desktop-title" className="sr-only">Lagom gummy collections</h2>

        <Presence mode="sync" initial={false}>
          <m.div
            key={collection.name}
            className="gummy-showcase__hero"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.42, ease: motionTokens.easeSoft }}
          >
            <picture>
              <source type="image/avif" srcSet={image.avif} sizes="100vw" />
              <source type="image/webp" srcSet={image.webp} sizes="100vw" />
              <img src={image.fallback} alt="" decoding="async" />
            </picture>
          </m.div>
        </Presence>

        <div className="seltzer-showcase__topline" aria-hidden="true">
          <img className="seltzer-showcase__brand-logo" src="/enhanced-lagom-naturals-logo-white.webp" alt="" />
        </div>

        <button className="seltzer-showcase__nav seltzer-showcase__nav--previous" type="button" onClick={() => change(-1)} aria-label="Previous gummy collection"><ArrowLeft /></button>
        <button className="seltzer-showcase__nav seltzer-showcase__nav--next" type="button" onClick={() => change(1)} aria-label="Next gummy collection"><ArrowRight /></button>

        <div className="gummy-showcase__details">
          <div>
            <p>{collection.description}</p>
            <span>{flavorCount} flavors · Gummy collection</span>
          </div>
          <Link to={collectionUrl}>Explore collection <ArrowRight aria-hidden="true" /></Link>
        </div>

        <div className="seltzer-showcase__progress gummy-showcase__progress" role="tablist" aria-label="Gummy collections">
          <span>{String(index + 1).padStart(2, "0")} / {String(DESKTOP_COLLECTIONS.length).padStart(2, "0")}</span>
          {DESKTOP_COLLECTIONS.map((item, itemIndex) => (
            <button
              type="button"
              role="tab"
              key={item.name}
              aria-selected={itemIndex === index}
              aria-label={`Show ${item.name} gummy collection`}
              className={itemIndex === index ? "is-active" : ""}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function GummyShowcase() {
  return (
    <section className="gummy-showcase-shell" data-home-snap-content aria-label="Lagom gummy showcase">
      <MobileGummyExperience />
      <DesktopGummyShowcase />
    </section>
  );
}
