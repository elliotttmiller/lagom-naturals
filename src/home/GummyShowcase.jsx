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

function ProductPicture({ product, className, sizes = "(max-width: 1099px) 48vw, (max-width: 1400px) 44vw, 39rem", eager = false, layoutId }) {
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
          tabIndex={index === activeIndex ? 0 : -1}
          onClick={() => onSelect(index)}
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const nextIndex =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? COLLECTIONS.length - 1
                  : (index + (event.key === "ArrowRight" ? 1 : -1) + COLLECTIONS.length) % COLLECTIONS.length;
            onSelect(nextIndex);
            event.currentTarget.parentElement?.querySelectorAll("button")[nextIndex]?.focus();
          }}
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
      transition={motionTokens.springProduct}
    >
      <button
        type="button"
        ref={buttonRef}
        className="gummy-tile__button"
        aria-label={`Open ${product.name} quick view`}
        onClick={() => onOpen(product.id)}
      >
        <span className="gummy-tile__art" aria-hidden="true">
          <ProductPicture
            product={product}
            className="gummy-tile__product"
            sizes="(max-width: 1099px) 48vw, (max-width: 1400px) 44vw, 39rem"
            eager={index < 2}
            layoutId={reduceMotion ? undefined : `gummy-media-${product.id}`}
          />
        </span>
        <span className="gummy-tile__arrow" aria-hidden="true"><ArrowRight /></span>
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
        <button type="button" className="gummy-quick-view__control gummy-quick-view__control--back" onClick={onClose} aria-label="Back to gummy grid"><ArrowLeft /></button>
        <button type="button" className="gummy-quick-view__control gummy-quick-view__control--close" onClick={onClose} aria-label="Close product quick view"><X /></button>

        <ProductPicture
          product={product}
          className="gummy-quick-view__product"
          sizes="(max-width: 699px) 100vw, (max-width: 1099px) 56vw, 45rem"
          eager
          layoutId={reduceMotion ? undefined : `gummy-media-${product.id}`}
        />
      </div>

      <m.div
        className="gummy-quick-view__info"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { delay: motionTokens.duration.instant, duration: motionTokens.duration.base, ease: motionTokens.easeSoft }}
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

function ResponsiveGummyExperience() {
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
      className="gummy-showcase__experience gummy-mobile"
      onPointerDown={(event) => {
        if (selectedId || event.pointerType !== "touch") return;
        pointerStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        if (selectedId || !pointerStart.current) return;
        const dx = event.clientX - pointerStart.current.x;
        const dy = event.clientY - pointerStart.current.y;
        pointerStart.current = null;
        if (Math.abs(dx) < 56 || Math.abs(dx) <= Math.abs(dy) * 1.2) return;
        selectCollection(collectionIndex + (dx < 0 ? 1 : -1));
      }}
      onPointerCancel={() => { pointerStart.current = null; }}
    >
      <Presence mode="sync" initial={false}>
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
            transition={reduceMotion ? { duration: motionTokens.duration.instant } : { duration: motionTokens.duration.control, ease: motionTokens.easeSoft }}
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

export default function GummyShowcase() {
  return (
    <section className="gummy-showcase-shell" data-home-snap-content aria-label="Lagom gummy showcase">
      <ResponsiveGummyExperience />
    </section>
  );
}
