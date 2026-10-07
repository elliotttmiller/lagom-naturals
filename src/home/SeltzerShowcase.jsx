import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { m, Presence, motionTokens, useReducedMotion } from "@/motionSystem";
import { products } from "@/catalogData";
import { responsiveImages } from "@/generated/responsiveImages";
import canBase480Avif from "../assets/seltzers/lagom-seltzer-can-base-480.avif";
import canBase480Webp from "../assets/seltzers/lagom-seltzer-can-base-480.webp";
import canBase889Avif from "../assets/seltzers/lagom-seltzer-can-base-889.avif";
import canBase889Webp from "../assets/seltzers/lagom-seltzer-can-base-889.webp";
import lemonade480Avif from "../assets/seltzers/24k-lemonade-label-480.avif";
import lemonade480Webp from "../assets/seltzers/24k-lemonade-label-480.webp";
import lemonade889Avif from "../assets/seltzers/24k-lemonade-label-889.avif";
import lemonade889Webp from "../assets/seltzers/24k-lemonade-label-889.webp";
import blackberry480Avif from "../assets/seltzers/blackberry-breeze-label-480.avif";
import blackberry480Webp from "../assets/seltzers/blackberry-breeze-label-480.webp";
import blackberry889Avif from "../assets/seltzers/blackberry-breeze-label-889.avif";
import blackberry889Webp from "../assets/seltzers/blackberry-breeze-label-889.webp";
import strawberry480Avif from "../assets/seltzers/strawberry-lime-label-aligned-480.avif";
import strawberry480Webp from "../assets/seltzers/strawberry-lime-label-aligned-480.webp";
import strawberry889Avif from "../assets/seltzers/strawberry-lime-label-aligned-889.avif";
import strawberry889Webp from "../assets/seltzers/strawberry-lime-label-aligned-889.webp";
import watermelon480Avif from "../assets/seltzers/watermelon-label-480.avif";
import watermelon480Webp from "../assets/seltzers/watermelon-label-480.webp";
import watermelon889Avif from "../assets/seltzers/watermelon-label-889.avif";
import watermelon889Webp from "../assets/seltzers/watermelon-label-889.webp";

const PRODUCT_ORDER = [
  "watermelon-refresher",
  "strawberry-lime-fusion",
  "blackberry-breeze",
  "24k-lemonade",
];

const showcaseProducts = PRODUCT_ORDER
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

const desktopArtworkFiles = {
  "watermelon-refresher": "watermelon",
  "strawberry-lime-fusion": "Strawberry Lime Splash Seltzer Ad (1)",
  "blackberry-breeze": "blackberry",
  "24k-lemonade": "24k",
};

const showcaseThemes = {
  "watermelon-refresher": {
    accent: "#e7463f",
    color: "#ef7770",
    mobileMedia: responsiveImages.showcaseMobile["flavor-watermelon-refresher-mobile"],
  },
  "strawberry-lime-fusion": {
    accent: "#e73577",
    color: "#ee7678",
    mobileMedia: responsiveImages.showcaseMobile["flavor-strawberry-lime-fusion-mobile"],
  },
  "blackberry-breeze": {
    accent: "#7f38b7",
    color: "#73368c",
    mobileMedia: responsiveImages.showcaseMobile["flavor-blackberry-breeze-mobile"],
  },
  "24k-lemonade": {
    accent: "#d99a00",
    color: "#e3ac19",
    mobileMedia: responsiveImages.showcaseMobile["flavor-24k-lemonade-mobile"],
  },
};

const labelMedia = {
  "24k-lemonade": {
    avif: lemonade480Avif + " 480w, " + lemonade889Avif + " 889w",
    webp: lemonade480Webp + " 480w, " + lemonade889Webp + " 889w",
    src: lemonade889Webp,
  },
  "blackberry-breeze": {
    avif: blackberry480Avif + " 480w, " + blackberry889Avif + " 889w",
    webp: blackberry480Webp + " 480w, " + blackberry889Webp + " 889w",
    src: blackberry889Webp,
  },
  "strawberry-lime-fusion": {
    avif: strawberry480Avif + " 480w, " + strawberry889Avif + " 889w",
    webp: strawberry480Webp + " 480w, " + strawberry889Webp + " 889w",
    src: strawberry889Webp,
  },
  "watermelon-refresher": {
    avif: watermelon480Avif + " 480w, " + watermelon889Avif + " 889w",
    webp: watermelon480Webp + " 480w, " + watermelon889Webp + " 889w",
    src: watermelon889Webp,
  },
};

function ShowcaseCan({ label, product, reducedMotion, compact = false }) {
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: motionTokens.duration.base, ease: motionTokens.easeSoft };

  return (
    <span
      className={"seltzer-showcase__can" + (compact ? " seltzer-showcase__can--compact" : "")}
      aria-label={compact ? undefined : product.name + " THC seltzer can"}
      aria-hidden={compact ? "true" : undefined}
      role={compact ? undefined : "img"}
    >
      <picture className="seltzer-showcase__can-base">
        <source
          type="image/avif"
          srcSet={canBase480Avif + " 480w, " + canBase889Avif + " 889w"}
          sizes={compact ? "68px" : "(max-width: 899px) 45vw, 21rem"}
        />
        <source
          type="image/webp"
          srcSet={canBase480Webp + " 480w, " + canBase889Webp + " 889w"}
          sizes={compact ? "68px" : "(max-width: 899px) 45vw, 21rem"}
        />
        <img src={canBase889Webp} alt="" />
      </picture>
      <span className="seltzer-showcase__label-viewport">
        {compact ? (
          <picture className="seltzer-showcase__can-label">
            <source type="image/avif" srcSet={label.avif} sizes="68px" />
            <source type="image/webp" srcSet={label.webp} sizes="68px" />
            <img src={label.src} alt="" />
          </picture>
        ) : (
          <Presence initial={false} mode="sync">
            <m.picture
              key={product.id}
              className="seltzer-showcase__can-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <source type="image/avif" srcSet={label.avif} sizes="(max-width: 899px) 45vw, 21rem" />
              <source type="image/webp" srcSet={label.webp} sizes="(max-width: 899px) 45vw, 21rem" />
              <img src={label.src} alt="" />
            </m.picture>
          </Presence>
        )}
      </span>
    </span>
  );
}

function ShowcaseColorTrack({
  background,
  desktopMedia,
  mobileMedia,
  direction,
  productId,
  reducedMotion,
}) {
  const enterOffset = direction > 0 ? "12%" : "-12%";
  const exitOffset = direction > 0 ? "-8%" : "8%";
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.62, ease: motionTokens.easeSoft };

  return (
    <Presence initial={false} custom={direction} mode="sync">
      <m.div
        key={productId}
        className="seltzer-showcase__color-slide"
        style={{ backgroundColor: background }}
        initial={reducedMotion ? { opacity: 1 } : { x: enterOffset, opacity: 0.45, scale: 1.045 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={reducedMotion ? { opacity: 0 } : { x: exitOffset, opacity: 0.35, scale: 1.025 }}
        transition={transition}
      >
        <picture className="seltzer-showcase__flavor-background">
          <source media="(max-width: 899px)" type="image/avif" srcSet={mobileMedia.avifSrcSet} sizes="100vw" />
          <source media="(max-width: 899px)" type="image/webp" srcSet={mobileMedia.webpSrcSet} sizes="100vw" />
          <source type="image/avif" srcSet={desktopMedia.avifSrcSet} sizes="100vw" />
          <source type="image/webp" srcSet={desktopMedia.webpSrcSet} sizes="100vw" />
          <img
            src={desktopMedia.src}
            alt=""
            width={desktopMedia.width || 1723}
            height={desktopMedia.height || 913}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </m.div>
    </Presence>
  );
}

function FlavorThumbnail({
  item,
  itemIndex,
  selected,
  onSelect,
  reducedMotion,
}) {
  const theme = showcaseThemes[item.id];
  const label = labelMedia[item.id];

  return (
    <m.button
      type="button"
      role="tab"
      aria-selected={selected}
      aria-label={"Show " + item.name}
      className={"seltzer-showcase__flavor-card" + (selected ? " is-active" : "")}
      onClick={() => onSelect(itemIndex)}
      whileTap={reducedMotion ? undefined : { scale: 0.975 }}
    >
      <span className="seltzer-showcase__flavor-card-media">
        <picture aria-hidden="true">
          <source type="image/avif" srcSet={theme.mobileMedia.avifSrcSet} sizes="25vw" />
          <source type="image/webp" srcSet={theme.mobileMedia.webpSrcSet} sizes="25vw" />
          <img
            src={theme.mobileMedia.src}
            alt=""
            loading={itemIndex === 0 ? "eager" : undefined}
            fetchPriority={itemIndex === 0 ? "high" : "auto"}
            decoding="async"
          />
        </picture>
        <ShowcaseCan label={label} product={item} reducedMotion={reducedMotion} compact />
      </span>
      <span className="seltzer-showcase__flavor-card-label">{item.name}</span>
    </m.button>
  );
}

export default function SeltzerShowcase() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewClosing, setQuickViewClosing] = useState(false);
  const quickViewRef = useRef(null);
  const quickViewCloseRef = useRef(null);
  const quickViewTriggerRef = useRef(null);
  const product = showcaseProducts[index];
  const theme = showcaseThemes[product.id] || showcaseThemes["watermelon-refresher"];
  const touchStart = useRef(null);

  const change = useCallback((delta) => {
    const nextIndex = (indexRef.current + delta + showcaseProducts.length) % showcaseProducts.length;
    indexRef.current = nextIndex;
    setDirection(delta < 0 ? -1 : 1);
    setIndex(nextIndex);
  }, []);

  const selectProduct = useCallback((nextIndex) => {
    const currentIndex = indexRef.current;
    if (nextIndex === currentIndex) return;
    const forwardDistance = (nextIndex - currentIndex + showcaseProducts.length) % showcaseProducts.length;
    const backwardDistance = (currentIndex - nextIndex + showcaseProducts.length) % showcaseProducts.length;
    indexRef.current = nextIndex;
    setDirection(forwardDistance <= backwardDistance ? 1 : -1);
    setIndex(nextIndex);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        event.defaultPrevented ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        event.target?.isContentEditable
      ) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        change(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        change(1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [change]);

  const label = labelMedia[product.id];
  const desktopArtwork = responsiveImages.seltzerDesktopFlavors[desktopArtworkFiles[product.id]];
  const canEnterX = direction > 0 ? 26 : -26;

  useEffect(() => {
    const dialog = quickViewRef.current;
    if (!quickViewOpen || !dialog) return undefined;
    if (!dialog.open) dialog.showModal();
    quickViewCloseRef.current?.focus();
    return () => {
      if (dialog.open) dialog.close();
      quickViewTriggerRef.current?.focus();
    };
  }, [quickViewOpen]);

  const closeQuickView = () => {
    if (quickViewClosing) return;
    setQuickViewClosing(true);
  };

  return (
    <section
      className="seltzer-showcase"
      style={{
        "--seltzer-accent": theme.accent,
        "--seltzer-slide-background": theme.color,
      }}
      aria-labelledby="seltzer-showcase-title"
      tabIndex={0}
      onPointerDown={(event) => {
        if (event.pointerType !== "touch") return;
        touchStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        if (!touchStart.current) return;
        const dx = event.clientX - touchStart.current.x;
        const dy = event.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) < 42 || Math.abs(dx) <= Math.abs(dy) * 1.15) return;
        change(dx > 0 ? -1 : 1);
      }}
      onPointerCancel={() => {
        touchStart.current = null;
      }}
    >
      <h2 id="seltzer-showcase-title" className="sr-only">
        Lagom Naturals seltzer showcase
      </h2>

      <ShowcaseColorTrack
        background={theme.color}
        desktopMedia={desktopArtwork}
        mobileMedia={theme.mobileMedia}
        direction={direction}
        productId={product.id}
        reducedMotion={reducedMotion}
      />

      <div className="seltzer-showcase__topline" aria-hidden="true" />

      <Presence initial={false} mode="sync">
        <m.div
          key={product.id}
          className="seltzer-showcase__can-stage"
          initial={reducedMotion ? false : { x: canEnterX, y: 10, rotate: direction > 0 ? 1.8 : -1.8, opacity: 0, scale: 0.965 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { x: -canEnterX * 0.55, y: -4, rotate: direction > 0 ? -1.2 : 1.2, opacity: 0, scale: 0.98 }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 26, mass: 0.88 }}
        >
          <ShowcaseCan label={label} product={product} reducedMotion={reducedMotion} />
        </m.div>
      </Presence>

      <button
        ref={quickViewTriggerRef}
        className="seltzer-showcase__desktop-product-link"
        type="button"
        aria-label={`Quick view ${product.name}`}
        aria-haspopup="dialog"
        aria-expanded={quickViewOpen}
        onClick={() => {
          setQuickViewClosing(false);
          setQuickViewOpen(true);
        }}
      />

      <Presence>
        {quickViewOpen ? (
          <m.dialog
            ref={quickViewRef}
            className="seltzer-quick-view"
            style={{ "--seltzer-quick-accent": theme.accent, "--seltzer-quick-surface": theme.color }}
            aria-labelledby="seltzer-quick-view-title"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: .975 }}
            animate={quickViewClosing
              ? (reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: .985 })
              : { opacity: 1, y: 0, scale: 1 }}
            transition={reducedMotion
              ? { duration: 0 }
              : { duration: quickViewClosing ? .2 : .48, ease: quickViewClosing ? motionTokens.ease : [.16, 1, .3, 1] }}
            onAnimationComplete={() => {
              if (quickViewClosing) {
                setQuickViewOpen(false);
                setQuickViewClosing(false);
              }
            }}
            onCancel={(event) => {
              event.preventDefault();
              closeQuickView();
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeQuickView();
            }}
          >
            <div className="seltzer-quick-view__scene" aria-hidden="true">
              <span className="seltzer-quick-view__scene-kicker">Lagom Naturals · Seltzer</span>
              <ShowcaseCan label={label} product={product} reducedMotion={reducedMotion} />
              <span className="seltzer-quick-view__scene-note">A considered pour, wherever the day takes you.</span>
            </div>
            <div className="seltzer-quick-view__details">
              <button
                ref={quickViewCloseRef}
                className="seltzer-quick-view__close"
                type="button"
                aria-label="Close product quick view"
                onClick={closeQuickView}
              >
                <X aria-hidden="true" />
              </button>
              <p className="seltzer-quick-view__eyebrow">{product.flavorFamily || "Seltzer"} · THC infused</p>
              <h2 id="seltzer-quick-view-title">{product.name}</h2>
              <p className="seltzer-quick-view__flavor">{product.flavor}</p>
              <p className="seltzer-quick-view__description">{product.description}</p>

              <div className="seltzer-quick-view__facts" aria-label={`${product.name} product details`}>
                {Number.isFinite(product.thcMgPerCan) ? (
                  <div><strong>{product.thcMgPerCan} mg</strong><span>THC per can</span></div>
                ) : null}
                {product.canVolume ? <div><strong>{product.canVolume}</strong><span>Can volume</span></div> : null}
                {product.sugar ? <div><strong>{product.sugar}</strong><span>Sugar</span></div> : null}
              </div>

              {product.formulationHighlights?.length ? (
                <ul className="seltzer-quick-view__highlights" aria-label="Product highlights">
                  {product.formulationHighlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}><Check aria-hidden="true" />{highlight}</li>
                  ))}
                </ul>
              ) : null}

              {Number.isFinite(product.price) ? (
                <p className="seltzer-quick-view__price">Single can <strong>${product.price.toFixed(2)}</strong>
                  {product.variants?.some((variant) => variant.label?.toLowerCase().includes("4-pack")) ? <span> · 4-pack also available</span> : null}
                </p>
              ) : null}

              <p className="seltzer-quick-view__responsible-use">{product.responsibleUse}</p>
              <Link className="seltzer-quick-view__cta" to={`/product/${product.id}`} onClick={closeQuickView}>
                <span>Explore this seltzer</span><ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </m.dialog>
        ) : null}
      </Presence>

      <button
        className="seltzer-showcase__nav seltzer-showcase__nav--previous"
        type="button"
        onClick={() => change(-1)}
        aria-label="Previous seltzer"
      >
        <ArrowLeft />
      </button>
      <button
        className="seltzer-showcase__nav seltzer-showcase__nav--next"
        type="button"
        onClick={() => change(1)}
        aria-label="Next seltzer"
      >
        <ArrowRight />
      </button>

      <div className="seltzer-showcase__mobile-controls">
        <Link
          className="seltzer-showcase__shop-now"
          to={"/product/" + product.id}
          aria-label={"Shop " + product.name}
        >
          <span>Shop now</span>
          <span className="seltzer-showcase__shop-arrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </Link>

        <div className="seltzer-showcase__progress" aria-label="Seltzer flavor position">
          <span>{index + 1} / {showcaseProducts.length}</span>
          <div className="seltzer-showcase__progress-track" aria-hidden="true">
            {showcaseProducts.map((item, itemIndex) => (
              <i key={item.id} className={itemIndex === index ? "is-active" : ""} />
            ))}
          </div>
        </div>

        <div className="seltzer-showcase__flavor-rail" role="tablist" aria-label="Seltzer flavors">
          {showcaseProducts.map((item, itemIndex) => (
            <FlavorThumbnail
              key={item.id}
              item={item}
              itemIndex={itemIndex}
              selected={itemIndex === index}
              onSelect={selectProduct}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>

      <div className="seltzer-showcase__desktop-progress" role="tablist" aria-label="Seltzer flavors">
        <span>{String(index + 1).padStart(2, "0")} / {String(showcaseProducts.length).padStart(2, "0")}</span>
        {showcaseProducts.map((item, itemIndex) => (
          <button
            type="button"
            role="tab"
            key={item.id}
            aria-selected={itemIndex === index}
            aria-label={"Show " + item.name}
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => selectProduct(itemIndex)}
          />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {product.name}. {product.description}. {product.thcMgPerCan} milligrams THC per can.
      </p>
    </section>
  );
}
