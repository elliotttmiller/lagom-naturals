import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronDown, Search, ShoppingBag, Menu } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import AddToCartButton from "@/AddToCartButton";
import { products } from "@/catalogData";
import { responsiveImages } from "@/generated/responsiveImages";
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

const PUBLIC_BASE = import.meta.env.BASE_URL;
const publicAsset = (name) => `${PUBLIC_BASE}${name.replace(/^\//, "")}`;
const PRODUCT_ORDER = ["24k-lemonade", "strawberry-lime-fusion", "watermelon-refresher", "blackberry-breeze"];
const showcaseProducts = PRODUCT_ORDER.map((id) => products.find((product) => product.id === id)).filter(Boolean);
const desktopCompositeFiles = [
  "ChatGPT Image Oct 3, 2026, 08_32_07 PM-1",
  "ChatGPT Image Oct 3, 2026, 08_32_08 PM-2",
  "ChatGPT Image Oct 3, 2026, 08_32_10 PM-3",
  "ChatGPT Image Oct 3, 2026, 08_32_11 PM-4",
];
const desktopCompositeProducts = ["watermelon-refresher", "strawberry-lime-fusion", "blackberry-breeze", "24k-lemonade"];
const blackberryIndex = showcaseProducts.findIndex((product) => product.id === "blackberry-breeze");
const showcaseBackground = responsiveImages.showcaseDesktop["seltzer-background"];
const showcaseMobileBackground = responsiveImages.showcaseMobile["seltzer-background-mobile"];
const showcaseSplash = responsiveImages.showcaseDesktop["seltzer-splash"];
const showcaseThemes = {
  "24k-lemonade": { accent: "#c79300", color: "#f3d875", desktopMedia: responsiveImages.showcaseDesktop["flavor-24k-lemonade"], mobileMedia: responsiveImages.showcaseMobile["flavor-24k-lemonade-mobile"] },
  "blackberry-breeze": { accent: "#5b3a88", color: "#c8b8eb", desktopMedia: responsiveImages.showcaseDesktop["flavor-blackberry-breeze"], mobileMedia: responsiveImages.showcaseMobile["flavor-blackberry-breeze-mobile"] },
  "strawberry-lime-fusion": { accent: "#d76491", color: "#ffb7c7", desktopMedia: responsiveImages.showcaseDesktop["flavor-strawberry-lime-fusion"], mobileMedia: responsiveImages.showcaseMobile["flavor-strawberry-lime-fusion-mobile"] },
  "watermelon-refresher": { accent: "#d84b4b", color: "#ffb4b4", desktopMedia: responsiveImages.showcaseDesktop["flavor-watermelon-refresher"], mobileMedia: responsiveImages.showcaseMobile["flavor-watermelon-refresher-mobile"] },
};
const labelMedia = {
  "24k-lemonade": { avif: `${lemonade480Avif} 480w, ${lemonade889Avif} 889w`, webp: `${lemonade480Webp} 480w, ${lemonade889Webp} 889w`, src: lemonade889Webp },
  "blackberry-breeze": { avif: `${blackberry480Avif} 480w, ${blackberry889Avif} 889w`, webp: `${blackberry480Webp} 480w, ${blackberry889Webp} 889w`, src: blackberry889Webp },
  "strawberry-lime-fusion": { avif: `${strawberry480Avif} 480w, ${strawberry889Avif} 889w`, webp: `${strawberry480Webp} 480w, ${strawberry889Webp} 889w`, src: strawberry889Webp },
  "watermelon-refresher": { avif: `${watermelon480Avif} 480w, ${watermelon889Avif} 889w`, webp: `${watermelon480Webp} 480w, ${watermelon889Webp} 889w`, src: watermelon889Webp },
};

function ShowcaseBackdrop() {
  return <div className="seltzer-showcase__backdrop" aria-hidden="true">
    <picture className="seltzer-showcase__background-layer">
      <source media="(max-width: 899px)" type="image/avif" srcSet={showcaseMobileBackground.avifSrcSet} sizes="100vw" />
      <source media="(max-width: 899px)" type="image/webp" srcSet={showcaseMobileBackground.webpSrcSet} sizes="100vw" />
      <source type="image/avif" srcSet={showcaseBackground.avifSrcSet} sizes="100vw" />
      <source type="image/webp" srcSet={showcaseBackground.webpSrcSet} sizes="100vw" />
      <img src={showcaseBackground.src} alt="" decoding="async" />
    </picture>
    <span className="seltzer-showcase__arc" />
    <picture className="seltzer-showcase__splash-layer">
      <source type="image/avif" srcSet={showcaseSplash.avifSrcSet} sizes="100vw" />
      <source type="image/webp" srcSet={showcaseSplash.webpSrcSet} sizes="100vw" />
      <img src={showcaseSplash.src} alt="" decoding="async" />
    </picture>
  </div>;
}

function ShowcaseFrame({ direction, label, product, reducedMotion }) {
  const displayName = product.name;
  const offset = reducedMotion ? 0 : direction * 88;
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.56, ease: [0.16, 1, 0.3, 1] };

  return (
    <motion.div
      className="seltzer-showcase__frame"
      custom={direction}
      initial={{ opacity: 0, x: direction * offset, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: direction * -offset, scale: 0.99 }}
      transition={transition}
    >
      <div className="seltzer-showcase__product">
        <p className="seltzer-showcase__flavor-name" aria-hidden="true">
          {displayName}
        </p>
      </div>
    </motion.div>
  );
}

function ShowcaseCan({ label, product, reducedMotion }) {
  const transition = reducedMotion ? { duration: 0 } : { duration: 0.38, ease: [0.16, 1, 0.3, 1] };

  return <span className="seltzer-showcase__can" aria-label={`${product.name} THC seltzer can`} role="img">
    <picture className="seltzer-showcase__can-base">
      <source type="image/avif" srcSet={`${canBase480Avif} 480w, ${canBase889Avif} 889w`} sizes="(max-width: 899px) 53vw, 21rem" />
      <source type="image/webp" srcSet={`${canBase480Webp} 480w, ${canBase889Webp} 889w`} sizes="(max-width: 899px) 53vw, 21rem" />
      <img src={canBase889Webp} alt="" />
    </picture>
    <span className="seltzer-showcase__label-viewport">
      <AnimatePresence initial={false} mode="sync">
        <motion.picture key={product.id} className="seltzer-showcase__can-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
          <source type="image/avif" srcSet={label.avif} sizes="(max-width: 899px) 53vw, 21rem" />
          <source type="image/webp" srcSet={label.webp} sizes="(max-width: 899px) 53vw, 21rem" />
          <img src={label.src} alt="" />
        </motion.picture>
      </AnimatePresence>
    </span>
  </span>;
}

function ShowcaseColorTrack({ background, desktopMedia, mobileMedia, direction, productId, reducedMotion }) {
  const enterOffset = direction > 0 ? "100%" : "-100%";
  const exitOffset = direction > 0 ? "-100%" : "100%";
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.68, ease: [0.77, 0, 0.18, 1] };

  return (
    <AnimatePresence initial={false} custom={direction} mode="sync">
      <motion.div
        key={productId}
        className="seltzer-showcase__color-slide"
        style={{ backgroundColor: background }}
        initial={{ x: reducedMotion ? 0 : enterOffset }}
        animate={{ x: 0 }}
        exit={{ x: reducedMotion ? 0 : exitOffset }}
        transition={transition}
      >
        <picture className="seltzer-showcase__flavor-background">
          <source media="(max-width: 899px)" type="image/avif" srcSet={mobileMedia.avifSrcSet} sizes="100vw" />
          <source media="(max-width: 899px)" type="image/webp" srcSet={mobileMedia.webpSrcSet} sizes="100vw" />
          <source type="image/avif" srcSet={desktopMedia.avifSrcSet} sizes="100vw" />
          <source type="image/webp" srcSet={desktopMedia.webpSrcSet} sizes="100vw" />
          <img src={desktopMedia.src} alt="" decoding="async" />
        </picture>
      </motion.div>
    </AnimatePresence>
  );
}

export default function SeltzerShowcase() {
  const { add } = useCart();
  const [index, setIndex] = useState(Math.max(0, blackberryIndex));
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const product = showcaseProducts[index];
  const theme = showcaseThemes[product.id] ?? showcaseThemes["24k-lemonade"];
  const variants = useMemo(() => productVariants(product), [product]);
  const [variantId, setVariantId] = useState(variants[0]?.id);
  const [added, setAdded] = useState(false);
  const touchStart = useRef(null);

  useEffect(() => setVariantId(productVariants(product)[0]?.id), [product]);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLSelectElement) return;
      if (event.key === "ArrowLeft") change(-1);
      if (event.key === "ArrowRight") change(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedVariant = variants.find((variant) => variant.id === variantId) ?? variants[0];
  const label = labelMedia[product.id];
  const desktopComposite = responsiveImages.seltzerDesktopFlavors[desktopCompositeFiles[desktopCompositeProducts.indexOf(product.id)]];
  const change = (delta) => {
    const nextIndex = (index + delta + showcaseProducts.length) % showcaseProducts.length;
    setDirection(delta < 0 ? -1 : 1);
    setIndex(nextIndex);
  };
  const selectProduct = (nextIndex) => {
    if (nextIndex === index) return;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };
  const addCurrent = () => {
    add(configuredProduct(product, selectedVariant));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };
  return <section className="seltzer-showcase" style={{ "--seltzer-accent": theme.accent, "--seltzer-slide-background": theme.color }} aria-labelledby="seltzer-showcase-title" onPointerDown={(event) => { if (event.pointerType === "touch") touchStart.current = event.clientX; }} onPointerUp={(event) => { if (touchStart.current === null) return; const distance = event.clientX - touchStart.current; touchStart.current = null; if (Math.abs(distance) > 48) change(distance > 0 ? -1 : 1); }}>
    <h2 id="seltzer-showcase-title" className="sr-only">Lagom Naturals seltzer showcase</h2>
    <div className="seltzer-showcase__desktop" aria-label={`${product.name} premium THC seltzer`}>
      <AnimatePresence initial={false} mode="sync">
        <motion.picture key={product.id} className="seltzer-showcase__desktop-art" initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.012 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.42, ease: [0.16, 1, 0.3, 1] }}>
          <source type="image/avif" srcSet={desktopComposite.avifSrcSet} sizes="100vw" />
          <source type="image/webp" srcSet={desktopComposite.webpSrcSet} sizes="100vw" />
          <img src={desktopComposite.src} alt="" fetchPriority="high" decoding="async" />
        </motion.picture>
      </AnimatePresence>
      <button className="seltzer-showcase__desktop-menu" type="button" aria-label="Open navigation menu" onClick={() => window.dispatchEvent(new CustomEvent("lagom:open-site-menu"))}><Menu aria-hidden="true" /></button>
      <Link className="seltzer-showcase__desktop-logo" to="/" aria-label="Lagom Naturals home"><img src={publicAsset("enhanced-lagom-naturals-logo-white.webp")} alt="" /></Link>
      <button className="seltzer-showcase__desktop-search" type="button" aria-label="Search products" onClick={() => window.dispatchEvent(new CustomEvent("lagom:open-global-search"))}><Search aria-hidden="true" /></button>
      <Link className="seltzer-showcase__desktop-cart" to="/cart" aria-label="View cart"><ShoppingBag aria-hidden="true" /></Link>
      <Link className="seltzer-showcase__desktop-product-link" to={`/product/${product.id}`} aria-label={`Shop ${product.name}`} />
    </div>
    <ShowcaseColorTrack background={theme.color} desktopMedia={theme.desktopMedia} mobileMedia={theme.mobileMedia} direction={direction} productId={product.id} reducedMotion={reducedMotion} />
    <ShowcaseBackdrop />
    <div className="seltzer-showcase__topline" aria-hidden="true"><img className="seltzer-showcase__brand-logo" src={publicAsset("enhanced-lagom-naturals-logo-white.webp")} alt="" /></div>
    <ShowcaseCan label={label} product={product} reducedMotion={reducedMotion} />
    <button className="seltzer-showcase__nav seltzer-showcase__nav--previous" type="button" onClick={() => change(-1)} aria-label="Previous seltzer"><ArrowLeft /></button>
    <button className="seltzer-showcase__nav seltzer-showcase__nav--next" type="button" onClick={() => change(1)} aria-label="Next seltzer"><ArrowRight /></button>
    <div className="seltzer-showcase__commerce">
      <AnimatePresence initial={false} mode="sync">
        <motion.div key={product.id} className="seltzer-showcase__details" initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.32, ease: [0.16, 1, 0.3, 1] }}><p>{product.description}</p><div><span>${selectedVariant.price.toFixed(2)}</span><span>{product.thcMgPerCan} mg THC</span><span>{product.canVolume}</span><Link to={`/product/${product.id}`}>View details <ArrowRight /></Link></div></motion.div>
      </AnimatePresence>
      <div className="seltzer-showcase__purchase"><label>Pack size<span className="seltzer-showcase__select"><select value={selectedVariant.id} onChange={(event) => setVariantId(event.target.value)} aria-label={`${product.name} pack size`}>{variants.map((variant) => <option key={variant.id} value={variant.id}>{variant.label} — ${variant.price.toFixed(2)}</option>)}</select><ChevronDown aria-hidden="true" /></span></label><AddToCartButton className="seltzer-showcase__add" state={added ? "added" : "idle"} onClick={addCurrent} productId={product.id} /></div>
    </div>
    <div className="seltzer-showcase__progress" role="tablist" aria-label="Seltzer flavors"><span>{String(index + 1).padStart(2, "0")} / {String(showcaseProducts.length).padStart(2, "0")}</span>{showcaseProducts.map((item, itemIndex) => <button type="button" role="tab" key={item.id} aria-selected={itemIndex === index} aria-label={`Show ${item.name}`} className={itemIndex === index ? "is-active" : ""} onClick={() => selectProduct(itemIndex)} />)}</div>
  </section>;
}
