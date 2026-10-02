import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import AddToCartButton from "@/AddToCartButton";
import { products } from "@/catalogData";
import { responsiveImages } from "@/generated/responsiveImages";
import { configuredProduct, productVariants, useCart } from "@/storefront/StorefrontContext";

const PRODUCT_ORDER = ["24k-lemonade", "strawberry-lime-fusion", "watermelon-refresher", "blackberry-breeze"];
const showcaseProducts = PRODUCT_ORDER.map((id) => products.find((product) => product.id === id)).filter(Boolean);
const blackberryIndex = showcaseProducts.findIndex((product) => product.id === "blackberry-breeze");

function SceneImage({ desktop, mobile }) {
  return <picture className="seltzer-showcase__scene" aria-hidden="true">
    <source media="(max-width: 899px)" type="image/avif" srcSet={mobile.avifSrcSet} sizes="100vw" />
    <source media="(max-width: 899px)" type="image/webp" srcSet={mobile.webpSrcSet} sizes="100vw" />
    <source type="image/avif" srcSet={desktop.avifSrcSet} sizes="100vw" />
    <source type="image/webp" srcSet={desktop.webpSrcSet} sizes="100vw" />
    <img src={desktop.src} alt="" fetchPriority="high" decoding="async" />
  </picture>;
}

export default function SeltzerShowcase() {
  const { add } = useCart();
  const [index, setIndex] = useState(Math.max(0, blackberryIndex));
  const product = showcaseProducts[index];
  const variants = useMemo(() => productVariants(product), [product]);
  const [variantId, setVariantId] = useState(variants[0]?.id);
  const [added, setAdded] = useState(false);
  const touchStart = useRef(null);

  useEffect(() => setVariantId(productVariants(product)[0]?.id), [product]);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLSelectElement) return;
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + showcaseProducts.length) % showcaseProducts.length);
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % showcaseProducts.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedVariant = variants.find((variant) => variant.id === variantId) ?? variants[0];
  const media = product.id === "blackberry-breeze"
    ? { desktop: responsiveImages.showcaseDesktop["seltzer-background"], mobile: responsiveImages.showcaseMobile["blackberry-breeze-mobile"] }
    : { desktop: responsiveImages.showcaseDesktop["seltzer-background"], mobile: responsiveImages.showcaseMobile["seltzer-background-mobile"] };
  const change = (delta) => setIndex((value) => (value + delta + showcaseProducts.length) % showcaseProducts.length);
  const addCurrent = () => {
    add(configuredProduct(product, selectedVariant));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };
  const displayName = product.name.replace(" ", "\n");

  return <section className="seltzer-showcase" aria-labelledby="seltzer-showcase-title" onPointerDown={(event) => { if (event.pointerType === "touch") touchStart.current = event.clientX; }} onPointerUp={(event) => { if (touchStart.current === null) return; const distance = event.clientX - touchStart.current; touchStart.current = null; if (Math.abs(distance) > 48) change(distance > 0 ? -1 : 1); }}>
    <SceneImage {...media} />
    <div className="seltzer-showcase__topline" aria-hidden="true"><span>Meet the seltzer line</span><span>Thoughtfully made. Simply enjoyed.</span></div>
    <div className="seltzer-showcase__product" key={product.id}>
      <h1 id="seltzer-showcase-title">{displayName.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
      <img src={selectedVariant.image || product.image} alt={`${product.name}, ${selectedVariant.label}`} />
    </div>
    <button className="seltzer-showcase__nav seltzer-showcase__nav--previous" type="button" onClick={() => change(-1)} aria-label="Previous seltzer"><ArrowLeft /></button>
    <button className="seltzer-showcase__nav seltzer-showcase__nav--next" type="button" onClick={() => change(1)} aria-label="Next seltzer"><ArrowRight /></button>
    <div className="seltzer-showcase__commerce">
      <div className="seltzer-showcase__details"><p>{product.description}</p><div><span>${selectedVariant.price.toFixed(2)}</span><span>{product.thcMgPerCan} mg THC</span><span>{product.canVolume}</span><Link to={`/product/${product.id}`}>View details <ArrowRight /></Link></div></div>
      <div className="seltzer-showcase__purchase"><label>Pack size<span className="seltzer-showcase__select"><select value={selectedVariant.id} onChange={(event) => setVariantId(event.target.value)} aria-label={`${product.name} pack size`}>{variants.map((variant) => <option key={variant.id} value={variant.id}>{variant.label} — ${variant.price.toFixed(2)}</option>)}</select><ChevronDown aria-hidden="true" /></span></label><AddToCartButton className="seltzer-showcase__add" state={added ? "added" : "idle"} onClick={addCurrent} productId={product.id} /></div>
    </div>
    <div className="seltzer-showcase__progress" role="tablist" aria-label="Seltzer flavors"><span>{String(index + 1).padStart(2, "0")} / {String(showcaseProducts.length).padStart(2, "0")}</span>{showcaseProducts.map((item, itemIndex) => <button type="button" role="tab" key={item.id} aria-selected={itemIndex === index} aria-label={`Show ${item.name}`} className={itemIndex === index ? "is-active" : ""} onClick={() => setIndex(itemIndex)} />)}</div>
  </section>;
}
