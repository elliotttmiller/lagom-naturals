import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronDown, X } from "lucide-react";
import { m, Presence, motionTokens, useReducedMotion } from "@/motionSystem";
import { products } from "@/catalogData";
import AddToCartButton from "@/AddToCartButton";
import { configuredProduct, productVariants, useCart } from "@/storefront/StorefrontContext";
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

export const showcaseProducts = PRODUCT_ORDER
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);
const showcaseCarouselStep = 360 / showcaseProducts.length;
const showcaseSlideTransition = {
  delay: 0.3,
  duration: 0.7,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
};

export const labelMedia = {
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

export function ShowcaseCan({ label, product, reducedMotion, compact = false, interactive = false, mediaSizes }) {
  const responsiveSizes = mediaSizes || (compact ? "68px" : "(max-width: 899px) 45vw, 21rem");
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: motionTokens.duration.base, ease: motionTokens.easeSoft };

  return (
    <span
      className={"seltzer-showcase__can" + (compact ? " seltzer-showcase__can--compact" : "")}
      aria-label={compact || interactive ? undefined : product.name + " THC seltzer can"}
      aria-hidden={compact || interactive ? "true" : undefined}
      role={compact || interactive ? undefined : "img"}
    >
      <picture className="seltzer-showcase__can-base">
        <source
          type="image/avif"
          srcSet={canBase480Avif + " 480w, " + canBase889Avif + " 889w"}
          sizes={responsiveSizes}
        />
        <source
          type="image/webp"
          srcSet={canBase480Webp + " 480w, " + canBase889Webp + " 889w"}
          sizes={responsiveSizes}
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
              <source type="image/avif" srcSet={label.avif} sizes={responsiveSizes} />
              <source type="image/webp" srcSet={label.webp} sizes={responsiveSizes} />
              <img src={label.src} alt="" />
            </m.picture>
          </Presence>
        )}
      </span>
    </span>
  );
}

export default function SeltzerShowcase() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const reducedMotion = useReducedMotion();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewClosing, setQuickViewClosing] = useState(false);
  const [quickViewProductId, setQuickViewProductId] = useState(showcaseProducts[0]?.id);
  const quickViewRef = useRef(null);
  const quickViewCloseRef = useRef(null);
  const quickViewTriggerRef = useRef(null);
  const variantPickerRef = useRef(null);
  const variantTriggerRef = useRef(null);
  const [variantOpen, setVariantOpen] = useState(false);
  const [carouselRotation, setCarouselRotation] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const { add } = useCart();
  const product = showcaseProducts[index];
  const touchStart = useRef(null);
  const quickViewProduct = showcaseProducts.find((item) => item.id === quickViewProductId) || product;
  const variants = useMemo(() => productVariants(quickViewProduct), [quickViewProduct]);
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId) || variants[0];
  const cartItem = selectedVariant ? configuredProduct(quickViewProduct, selectedVariant) : null;

  useEffect(() => {
    setSelectedVariantId(variants[0]?.id ?? null);
    setVariantOpen(false);
  }, [quickViewProduct.id, variants]);

  useEffect(() => {
    const onQuickViewRequest = (event) => {
      const { productId, trigger } = event.detail || {};
      if (!showcaseProducts.some((item) => item.id === productId)) return;
      quickViewTriggerRef.current = trigger instanceof HTMLElement ? trigger : null;
      setQuickViewProductId(productId);
      setQuickViewClosing(false);
      setQuickViewOpen(true);
    };
    window.addEventListener("lagom:seltzer-quick-view", onQuickViewRequest);
    return () => window.removeEventListener("lagom:seltzer-quick-view", onQuickViewRequest);
  }, []);

  useEffect(() => {
    if (!variantOpen) return undefined;
    const dismissOutside = (event) => {
      if (!variantPickerRef.current?.contains(event.target)) setVariantOpen(false);
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [variantOpen]);

  const change = useCallback((delta) => {
    const currentIndex = indexRef.current;
    const nextIndex = (currentIndex + delta + showcaseProducts.length) % showcaseProducts.length;
    setCarouselRotation((rotation) => rotation + delta * showcaseCarouselStep);
    indexRef.current = nextIndex;
    setIndex(nextIndex);
  }, []);

  const selectProduct = useCallback((nextIndex) => {
    const currentIndex = indexRef.current;
    if (nextIndex === currentIndex) return;
    const forwardDistance = (nextIndex - currentIndex + showcaseProducts.length) % showcaseProducts.length;
    const backwardDistance = (currentIndex - nextIndex + showcaseProducts.length) % showcaseProducts.length;
    const selectedDirection = forwardDistance <= backwardDistance ? 1 : -1;
    setCarouselRotation((rotation) => rotation + selectedDirection * Math.min(forwardDistance, backwardDistance) * showcaseCarouselStep);
    indexRef.current = nextIndex;
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
    setVariantOpen(false);
  };

  return (
    <section
      className="seltzer-showcase"
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

      <div className="seltzer-showcase__card">

        <div className="seltzer-showcase__layout">
          <div className="seltzer-showcase__content">
          <Presence initial={false} mode="sync">
            <m.div
              key={product.id}
              className="seltzer-showcase__copy"
              style={{ "--product-accent": product.accent || "#fff8ed" }}
              initial={reducedMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={reducedMotion ? { duration: 0 } : { delay: 0.5, duration: 0.7, ease: [0.44, 0, 0.56, 1], type: "tween" }}
            >
              <p className="seltzer-showcase__eyebrow">Premium THC infused seltzer</p>
              <h3 className="seltzer-showcase__product-name">{product.name}</h3>
              <p className="seltzer-showcase__description">{product.description}</p>
              <div className="seltzer-showcase__facts" aria-label={`${product.name} product details`}>
                {Number.isFinite(product.thcMgPerCan) ? (
                  <span><strong>{product.thcMgPerCan} mg</strong> THC per can</span>
                ) : null}
                {product.canVolume ? <span>{product.canVolume}</span> : null}
              </div>
              <Link className="seltzer-showcase__shop-link" to={`/product/${product.id}`}>
                <span>Explore flavor</span><ArrowRight aria-hidden="true" />
              </Link>
            </m.div>
          </Presence>
          </div>

          <div className="seltzer-showcase__product-stage">
            <m.div
              className="seltzer-showcase__carousel-track"
              initial={false}
              animate={{ rotate: carouselRotation }}
              transition={reducedMotion ? { duration: 0 } : showcaseSlideTransition}
            >
              {showcaseProducts.map((slide, slideIndex) => {
                const slideIsActive = slide.id === product.id;
                const slotAngle = -slideIndex * showcaseCarouselStep;
                return (
                  <m.div
                    key={slide.id}
                    className="seltzer-showcase__can-layer"
                    aria-hidden={!slideIsActive}
                    style={{ pointerEvents: slideIsActive ? "auto" : "none" }}
                    initial={false}
                    animate={{ opacity: slideIsActive ? 1 : 0, rotate: slotAngle }}
                    transition={reducedMotion ? { duration: 0 } : showcaseSlideTransition}
                  >
                    <div className="seltzer-showcase__can-orbit-position">
                      <m.div
                        className="seltzer-showcase__can-stage"
                        initial={false}
                        animate={{ scale: slideIsActive ? 1 : 0.8, rotate: -(carouselRotation + slotAngle) }}
                        transition={reducedMotion ? { duration: 0 } : showcaseSlideTransition}
                      >
                        <m.button
                          ref={slideIsActive ? quickViewTriggerRef : null}
                          className="seltzer-showcase__can-quick-view"
                          type="button"
                          aria-label={`Quick view ${slide.name}`}
                          aria-haspopup="dialog"
                          aria-expanded={slideIsActive && quickViewOpen}
                          tabIndex={slideIsActive ? 0 : -1}
                          disabled={!slideIsActive}
                          onClick={() => {
                            setQuickViewProductId(slide.id);
                            setQuickViewClosing(false);
                            setQuickViewOpen(true);
                          }}
                          whileHover={reducedMotion ? undefined : { scale: 1.018, y: -3 }}
                          whileTap={reducedMotion ? undefined : { scale: 0.99 }}
                          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 24 }}
                        >
                          <ShowcaseCan
                            label={labelMedia[slide.id]}
                            product={slide}
                            reducedMotion={reducedMotion}
                            interactive
                          />
                        </m.button>
                      </m.div>
                    </div>
                  </m.div>
                );
              })}
            </m.div>
            <button className="seltzer-showcase__nav seltzer-showcase__nav--previous" type="button" onClick={() => change(-1)} aria-label="Previous seltzer">
              <m.span whileHover={reducedMotion ? undefined : { x: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.9 }}><ArrowLeft /></m.span>
            </button>
            <button className="seltzer-showcase__nav seltzer-showcase__nav--next" type="button" onClick={() => change(1)} aria-label="Next seltzer">
              <m.span whileHover={reducedMotion ? undefined : { x: 3 }} whileTap={reducedMotion ? undefined : { scale: 0.9 }}><ArrowRight /></m.span>
            </button>
          </div>

          <div className="seltzer-showcase__desktop-progress" aria-label="Seltzer flavor position">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="seltzer-showcase__progress-track" role="tablist" aria-label="Seltzer flavors">
              {showcaseProducts.map((item, itemIndex) => (
                <button key={item.id} type="button" role="tab" aria-selected={itemIndex === index} aria-label={`Show ${item.name}`} className={itemIndex === index ? "is-active" : ""} onClick={() => selectProduct(itemIndex)} />
              ))}
            </div>
            <span>{String(showcaseProducts.length).padStart(2, "0")}</span>
          </div>
        </div>

      <Presence>
        {quickViewOpen ? (
          <m.dialog
            ref={quickViewRef}
            className="seltzer-quick-view"
            aria-labelledby="seltzer-quick-view-title"
            style={{ "--product-accent": quickViewProduct.accent || "#20221e" }}
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
              if (variantOpen) {
                setVariantOpen(false);
                variantTriggerRef.current?.focus();
              } else {
                closeQuickView();
              }
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeQuickView();
            }}
          >
            <div className="seltzer-quick-view__scene" aria-hidden="true">
              <ShowcaseCan label={labelMedia[quickViewProduct.id]} product={quickViewProduct} reducedMotion={reducedMotion} />
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
              <h2 id="seltzer-quick-view-title">{quickViewProduct.name}</h2>
              <p className="seltzer-quick-view__description">{quickViewProduct.description}</p>

              <div className="seltzer-quick-view__facts" aria-label={`${quickViewProduct.name} product details`}>
                {Number.isFinite(quickViewProduct.thcMgPerCan) ? (
                  <div><strong>{quickViewProduct.thcMgPerCan} mg</strong><span>THC per can</span></div>
                ) : null}
                {quickViewProduct.canVolume ? <div><strong>{quickViewProduct.canVolume}</strong><span>Can volume</span></div> : null}
              </div>

              <div className="seltzer-quick-view__purchase">
                {variants.length > 1 && selectedVariant ? (
                  <div className="variant-picker shop-card-variant-picker seltzer-quick-view__variant-picker" ref={variantPickerRef}>
                    <m.button
                      ref={variantTriggerRef}
                      type="button"
                      className="variant-trigger shop-card-variant-trigger seltzer-quick-view__variant-trigger"
                      whileTap={reducedMotion ? undefined : motionTokens.tap}
                      aria-haspopup="listbox"
                      aria-expanded={variantOpen}
                      aria-label={`Pack size: ${selectedVariant.label}, $${selectedVariant.price.toFixed(2)}`}
                      onClick={() => setVariantOpen((open) => !open)}
                    >
                      <span className="shop-card-variant-copy">
                        <span className="shop-card-variant-label">{selectedVariant.label}</span>
                        <span className="shop-card-variant-price"> · ${selectedVariant.price.toFixed(2)}</span>
                      </span>
                      <m.span
                        className="shop-card-variant-chevron"
                        animate={{ rotate: reducedMotion ? 0 : variantOpen ? 180 : 0 }}
                        transition={reducedMotion ? { duration: 0 } : motionTokens.springSnappy}
                        aria-hidden="true"
                      ><ChevronDown /></m.span>
                    </m.button>
                    <Presence>
                      {variantOpen ? (
                        <m.div
                          className="variant-menu shop-card-variant-menu seltzer-quick-view__variant-menu"
                          role="listbox"
                          aria-label={`${quickViewProduct.name} size options`}
                          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: .98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: .98 }}
                          transition={reducedMotion ? { duration: 0 } : motionTokens.springSoft}
                        >
                          {variants.map((variant) => (
                            <button
                              type="button"
                              key={variant.id}
                              role="option"
                              aria-selected={variant.id === selectedVariant.id}
                              className={variant.id === selectedVariant.id ? "active" : ""}
                              onClick={() => {
                                setSelectedVariantId(variant.id);
                                setVariantOpen(false);
                                variantTriggerRef.current?.focus();
                              }}
                            >
                              <span>{variant.label}</span><b>${variant.price.toFixed(2)}</b>
                            </button>
                          ))}
                        </m.div>
                      ) : null}
                    </Presence>
                  </div>
                ) : null}
                {cartItem ? (
                  <AddToCartButton
                    size="wide"
                    className="shop-card-add seltzer-quick-view__add"
                    productId={quickViewProduct.id}
                    onClick={() => add(cartItem)}
                    aria-label={`Add ${quickViewProduct.name}, ${selectedVariant.label} to cart`}
                  />
                ) : null}
              </div>

              <p className="seltzer-quick-view__responsible-use">{quickViewProduct.responsibleUse}</p>
              <Link className="seltzer-quick-view__pdp-link" to={`/product/${quickViewProduct.id}`} onClick={closeQuickView}>
                <span>View product details</span><ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </m.dialog>
        ) : null}
      </Presence>

      </div>

      <p className="sr-only" aria-live="polite">
        {product.name}. {product.description}. {product.thcMgPerCan} milligrams THC per can.
      </p>
    </section>
  );
}
