import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

const PUBLIC_BASE = import.meta.env.BASE_URL;
const publicAsset = (name) => `${PUBLIC_BASE}${name.replace(/^\//, "")}`;
const PRODUCT_ORDER = ["24k-lemonade", "strawberry-lime-fusion", "watermelon-refresher", "blackberry-breeze"];
const showcaseProducts = PRODUCT_ORDER.map((id) => products.find((product) => product.id === id)).filter(Boolean);
const desktopArtworkFiles = {
  "watermelon-refresher": "watermelon",
  "strawberry-lime-fusion": "Strawberry Lime Splash Seltzer Ad (1)",
  "blackberry-breeze": "blackberry",
  "24k-lemonade": "24k",
};
const blackberryIndex = showcaseProducts.findIndex((product) => product.id === "blackberry-breeze");
const showcaseThemes = {
  "24k-lemonade": { accent: "#c79300", color: "#f3d875", mobileMedia: responsiveImages.showcaseMobile["flavor-24k-lemonade-mobile"] },
  "blackberry-breeze": { accent: "#5b3a88", color: "#c8b8eb", mobileMedia: responsiveImages.showcaseMobile["flavor-blackberry-breeze-mobile"] },
  "strawberry-lime-fusion": { accent: "#d76491", color: "#ffb7c7", mobileMedia: responsiveImages.showcaseMobile["flavor-strawberry-lime-fusion-mobile"] },
  "watermelon-refresher": { accent: "#d84b4b", color: "#ffb4b4", mobileMedia: responsiveImages.showcaseMobile["flavor-watermelon-refresher-mobile"] },
};
const labelMedia = {
  "24k-lemonade": { avif: `${lemonade480Avif} 480w, ${lemonade889Avif} 889w`, webp: `${lemonade480Webp} 480w, ${lemonade889Webp} 889w`, src: lemonade889Webp },
  "blackberry-breeze": { avif: `${blackberry480Avif} 480w, ${blackberry889Avif} 889w`, webp: `${blackberry480Webp} 480w, ${blackberry889Webp} 889w`, src: blackberry889Webp },
  "strawberry-lime-fusion": { avif: `${strawberry480Avif} 480w, ${strawberry889Avif} 889w`, webp: `${strawberry480Webp} 480w, ${strawberry889Webp} 889w`, src: strawberry889Webp },
  "watermelon-refresher": { avif: `${watermelon480Avif} 480w, ${watermelon889Avif} 889w`, webp: `${watermelon480Webp} 480w, ${watermelon889Webp} 889w`, src: watermelon889Webp },
};

function ShowcaseCan({ label, product, reducedMotion }) {
  const transition = reducedMotion ? { duration: 0 } : { duration: motionTokens.duration.base, ease: motionTokens.easeSoft };

  return <span className="seltzer-showcase__can" aria-label={`${product.name} THC seltzer can`} role="img">
    <picture className="seltzer-showcase__can-base">
      <source type="image/avif" srcSet={`${canBase480Avif} 480w, ${canBase889Avif} 889w`} sizes="(max-width: 899px) 53vw, 21rem" />
      <source type="image/webp" srcSet={`${canBase480Webp} 480w, ${canBase889Webp} 889w`} sizes="(max-width: 899px) 53vw, 21rem" />
      <img src={canBase889Webp} alt="" />
    </picture>
    <span className="seltzer-showcase__label-viewport">
      <Presence initial={false} mode="sync">
        <m.picture key={product.id} className="seltzer-showcase__can-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
          <source type="image/avif" srcSet={label.avif} sizes="(max-width: 899px) 53vw, 21rem" />
          <source type="image/webp" srcSet={label.webp} sizes="(max-width: 899px) 53vw, 21rem" />
          <img src={label.src} alt="" />
        </m.picture>
      </Presence>
    </span>
  </span>;
}

function ShowcaseColorTrack({ background, desktopMedia, mobileMedia, direction, productId, reducedMotion }) {
  const enterOffset = direction > 0 ? "100%" : "-100%";
  const exitOffset = direction > 0 ? "-100%" : "100%";
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: motionTokens.duration.slow, ease: motionTokens.easeSoft };

  return (
    <Presence initial={false} custom={direction} mode="sync">
      <m.div
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
      </m.div>
    </Presence>
  );
}

export default function SeltzerShowcase() {
  const [index, setIndex] = useState(Math.max(0, blackberryIndex));
  const indexRef = useRef(index);
  indexRef.current = index;
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const product = showcaseProducts[index];
  const theme = showcaseThemes[product.id] ?? showcaseThemes["24k-lemonade"];
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
    indexRef.current = nextIndex;
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setIndex(nextIndex);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.defaultPrevented || event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement || event.target?.isContentEditable) return;
      if (event.key === "ArrowLeft") { event.preventDefault(); change(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); change(1); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [change]);

  const label = labelMedia[product.id];
  const desktopArtwork = responsiveImages.seltzerDesktopFlavors[desktopArtworkFiles[product.id]];
  return <section
    className="seltzer-showcase"
    style={{ "--seltzer-accent": theme.accent, "--seltzer-slide-background": theme.color }}
    aria-labelledby="seltzer-showcase-title"
    onPointerDown={(event) => {
      if (event.pointerType !== "touch") return;
      touchStart.current = { x: event.clientX, y: event.clientY };
    }}
    onPointerUp={(event) => {
      if (!touchStart.current) return;
      const dx = event.clientX - touchStart.current.x;
      const dy = event.clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(dx) < 48 || Math.abs(dx) <= Math.abs(dy) * 1.2) return;
      change(dx > 0 ? -1 : 1);
    }}
    onPointerCancel={() => { touchStart.current = null; }}
  >
    <h2 id="seltzer-showcase-title" className="sr-only">Lagom Naturals seltzer showcase</h2>
    <ShowcaseColorTrack background={theme.color} desktopMedia={desktopArtwork} mobileMedia={theme.mobileMedia} direction={direction} productId={product.id} reducedMotion={reducedMotion} />
    <div className="seltzer-showcase__topline" aria-hidden="true"><img className="seltzer-showcase__brand-logo" src={publicAsset("enhanced-lagom-naturals-logo-white.webp")} alt="" /></div>
    <ShowcaseCan label={label} product={product} reducedMotion={reducedMotion} />
    <Link className="seltzer-showcase__desktop-product-link" to={`/product/${product.id}`} aria-label={`Shop ${product.name}`} />
    <button className="seltzer-showcase__nav seltzer-showcase__nav--previous" type="button" onClick={() => change(-1)} aria-label="Previous seltzer"><ArrowLeft /></button>
    <button className="seltzer-showcase__nav seltzer-showcase__nav--next" type="button" onClick={() => change(1)} aria-label="Next seltzer"><ArrowRight /></button>
    <Link className="seltzer-showcase__shop-now" to={`/product/${product.id}`} aria-label={`Shop ${product.name}`}>
      <span>Shop now</span><ArrowRight aria-hidden="true" />
    </Link>
    <div className="seltzer-showcase__progress" role="tablist" aria-label="Seltzer flavors"><span>{String(index + 1).padStart(2, "0")} / {String(showcaseProducts.length).padStart(2, "0")}</span>{showcaseProducts.map((item, itemIndex) => <button type="button" role="tab" key={item.id} aria-selected={itemIndex === index} aria-label={`Show ${item.name}`} className={itemIndex === index ? "is-active" : ""} onClick={() => selectProduct(itemIndex)} />)}</div>
  </section>;
}
