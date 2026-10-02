import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/catalogData";
import AddToCartButton from "@/AddToCartButton";
import { configuredProduct, productVariants, useCart } from "@/storefront/StorefrontContext";
import { responsiveImages } from "@/generated/responsiveImages";
import seltzerCanBase480Avif from "./assets/seltzers/lagom-seltzer-can-base-480.avif";
import seltzerCanBase480Webp from "./assets/seltzers/lagom-seltzer-can-base-480.webp";
import seltzerCanBase889Avif from "./assets/seltzers/lagom-seltzer-can-base-889.avif";
import seltzerCanBase889Webp from "./assets/seltzers/lagom-seltzer-can-base-889.webp";
import blackberryLabel480Avif from "./assets/seltzers/blackberry-breeze-label-480.avif";
import blackberryLabel480Webp from "./assets/seltzers/blackberry-breeze-label-480.webp";
import blackberryLabel889Avif from "./assets/seltzers/blackberry-breeze-label-889.avif";
import blackberryLabel889Webp from "./assets/seltzers/blackberry-breeze-label-889.webp";
import lemonadeLabel480Avif from "./assets/seltzers/24k-lemonade-label-480.avif";
import lemonadeLabel480Webp from "./assets/seltzers/24k-lemonade-label-480.webp";
import lemonadeLabel889Avif from "./assets/seltzers/24k-lemonade-label-889.avif";
import lemonadeLabel889Webp from "./assets/seltzers/24k-lemonade-label-889.webp";
import strawberryLabel480Avif from "./assets/seltzers/strawberry-lime-label-aligned-480.avif";
import strawberryLabel480Webp from "./assets/seltzers/strawberry-lime-label-aligned-480.webp";
import strawberryLabel889Avif from "./assets/seltzers/strawberry-lime-label-aligned-889.avif";
import strawberryLabel889Webp from "./assets/seltzers/strawberry-lime-label-aligned-889.webp";
import watermelonLabel480Avif from "./assets/seltzers/watermelon-label-480.avif";
import watermelonLabel480Webp from "./assets/seltzers/watermelon-label-480.webp";
import watermelonLabel889Avif from "./assets/seltzers/watermelon-label-889.avif";
import watermelonLabel889Webp from "./assets/seltzers/watermelon-label-889.webp";

const SHOWCASE_PRODUCTS = products.filter((product) => product.category === "Seltzers");
const DESKTOP_BACKGROUND = responsiveImages.showcaseDesktop["seltzer-background"];
const DESKTOP_SPLASH = responsiveImages.showcaseDesktop["seltzer-splash"];
const MOBILE_BACKGROUND = responsiveImages.showcaseMobile["seltzer-background-mobile"];

const LABELS = {
  "24k-lemonade": { avif: `${lemonadeLabel480Avif} 480w, ${lemonadeLabel889Avif} 889w`, webp: `${lemonadeLabel480Webp} 480w, ${lemonadeLabel889Webp} 889w`, fallback: lemonadeLabel889Webp },
  "blackberry-breeze": { avif: `${blackberryLabel480Avif} 480w, ${blackberryLabel889Avif} 889w`, webp: `${blackberryLabel480Webp} 480w, ${blackberryLabel889Webp} 889w`, fallback: blackberryLabel889Webp },
  "strawberry-lime-fusion": { avif: `${strawberryLabel480Avif} 480w, ${strawberryLabel889Avif} 889w`, webp: `${strawberryLabel480Webp} 480w, ${strawberryLabel889Webp} 889w`, fallback: strawberryLabel889Webp },
  "watermelon-refresher": { avif: `${watermelonLabel480Avif} 480w, ${watermelonLabel889Avif} 889w`, webp: `${watermelonLabel480Webp} 480w, ${watermelonLabel889Webp} 889w`, fallback: watermelonLabel889Webp },
};

function ResponsiveLayer({ media, className }) {
  return <picture className={className} aria-hidden="true"><source type="image/avif" srcSet={media.avifSrcSet} sizes="100vw" /><source type="image/webp" srcSet={media.webpSrcSet} sizes="100vw" /><img src={media.src} alt="" decoding="async" /></picture>;
}

function SeltzerCan({ product }) {
  const label = LABELS[product.id];
  return <div className="seltzer-showcase__can">
    <picture className="seltzer-showcase__can-base"><source type="image/avif" srcSet={`${seltzerCanBase480Avif} 480w, ${seltzerCanBase889Avif} 889w`} sizes="(max-width: 899px) 46vw, 18rem" /><source type="image/webp" srcSet={`${seltzerCanBase480Webp} 480w, ${seltzerCanBase889Webp} 889w`} sizes="(max-width: 899px) 46vw, 18rem" /><img src={seltzerCanBase889Webp} alt={`${product.name} THC seltzer can`} fetchPriority="high" decoding="async" /></picture>
    <picture className="seltzer-showcase__can-label" aria-hidden="true"><source type="image/avif" srcSet={label.avif} sizes="(max-width: 899px) 46vw, 18rem" /><source type="image/webp" srcSet={label.webp} sizes="(max-width: 899px) 46vw, 18rem" /><img src={label.fallback} alt="" decoding="async" /></picture>
  </div>;
}

export default function HomeHero() {
  const { add } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [cartState, setCartState] = useState("idle");
  const feedbackTimer = useRef(null);
  const product = SHOWCASE_PRODUCTS[activeIndex];
  const variants = useMemo(() => productVariants(product), [product]);
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId) || variants[0];

  useEffect(() => { setSelectedVariantId(variants[0]?.id ?? null); setCartState("idle"); }, [product.id, variants]);
  useEffect(() => () => window.clearTimeout(feedbackTimer.current), []);

  const selectProduct = (index) => setActiveIndex((index + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length);
  const addSelectedProduct = () => {
    add(configuredProduct(product, selectedVariant));
    setCartState("added");
    window.clearTimeout(feedbackTimer.current);
    feedbackTimer.current = window.setTimeout(() => setCartState("idle"), 1400);
  };
  const handleKeyDown = (event) => {
    if (event.target.tagName === "SELECT") return;
    if (event.key === "ArrowLeft") { event.preventDefault(); selectProduct(activeIndex - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); selectProduct(activeIndex + 1); }
  };

  return <section className="seltzer-showcase" aria-labelledby="seltzer-showcase-title" tabIndex={0} onKeyDown={handleKeyDown}>
    <ResponsiveLayer media={DESKTOP_BACKGROUND} className="seltzer-showcase__background seltzer-showcase__background--desktop" />
    <ResponsiveLayer media={MOBILE_BACKGROUND} className="seltzer-showcase__background seltzer-showcase__background--mobile" />
    <ResponsiveLayer media={DESKTOP_SPLASH} className="seltzer-showcase__splash" />
    <div className="seltzer-showcase__topline" data-home-snap-content><p>Meet the seltzer line</p><span>Thoughtfully made. Simply enjoyed.</span></div>
    <div className="seltzer-showcase__stage" aria-live="polite"><p className="seltzer-showcase__flavor" aria-hidden="true">{product.flavor.replaceAll(" + ", " ")}</p><SeltzerCan product={product} /></div>
    <button type="button" className="seltzer-showcase__nav seltzer-showcase__nav--previous" onClick={() => selectProduct(activeIndex - 1)} aria-label="Previous seltzer"><ArrowLeft aria-hidden="true" /></button>
    <button type="button" className="seltzer-showcase__nav seltzer-showcase__nav--next" onClick={() => selectProduct(activeIndex + 1)} aria-label="Next seltzer"><ArrowRight aria-hidden="true" /></button>
    <div className="seltzer-showcase__commerce" data-home-snap-content>
      <div className="seltzer-showcase__details"><p>{product.description}</p><div><span>${selectedVariant.price.toFixed(2)}</span><span>{product.thcMgPerCan} mg THC · {product.canVolume}</span><Link to={`/product/${product.id}`}>View details <ArrowRight aria-hidden="true" /></Link></div></div>
      <div className="seltzer-showcase__purchase"><label>Pack size<select value={selectedVariant.id} onChange={(event) => { setSelectedVariantId(event.target.value); setCartState("idle"); }} aria-label="Pack size">{variants.map((variant) => <option key={variant.id} value={variant.id}>{variant.label} — ${variant.price.toFixed(2)}</option>)}</select></label><AddToCartButton className="seltzer-showcase__add" label="Add to cart" productId={product.id} state={cartState} onClick={addSelectedProduct} aria-label={`Add ${product.name}, ${selectedVariant.label}, to cart`} /></div>
    </div>
    <div className="seltzer-showcase__progress" aria-label="Seltzer selection">{SHOWCASE_PRODUCTS.map((item, index) => <button type="button" key={item.id} className={index === activeIndex ? "is-active" : ""} onClick={() => selectProduct(index)} aria-label={`Show ${item.name}`} aria-current={index === activeIndex ? "true" : undefined} />)}</div>
    <h1 id="seltzer-showcase-title" className="sr-only">Lagom Naturals seltzers</h1>
  </section>;
}
