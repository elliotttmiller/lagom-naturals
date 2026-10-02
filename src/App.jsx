import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Leaf,
  Package,
  Sparkles,
  Plus,
} from "lucide-react";
import "./sky-home.css";
import {
  AtmosphericSceneSection,
} from "@/AtmosphericScrollExperience";
import HomeScrollSnap from "@/HomeScrollSnap";
import {
  m,
  Presence,
  Reveal,
  Stagger,
  StaggerItem,
  motionTokens,
  motionVariants,
} from "./motionSystem";
import {
  products,
  categoryCards,
  categoryImages,
  gummyCollections,
} from "./catalogData";
import Shell from "@/storefront/StorefrontShell";
import HomeHero from "@/HomeHeroPortal";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import AddToCartButton from "@/AddToCartButton";
import ResponsiveImage from "@/storefront/ResponsiveImage";
import { responsiveImages } from "@/generated/responsiveImages";
import lemonadeHomePackshot from "./assets/products/24k-lemonade.webp";
import blackberryHomePackshot from "./assets/products/blackberry-breeze.webp";
import strawberryLimeHomePackshot from "./assets/products/strawberry-lime-fusion.webp";
import watermelonHomePackshot from "./assets/products/watermelon-refresher.webp";
import lemonadeFourPackHomePackshot from "./assets/products/24k-lemonade-4pk.webp";
import blackberryFourPackHomePackshot from "./assets/products/blackberry-breeze-4pk.webp";
import strawberryLimeFourPackHomePackshot from "./assets/products/strawberry-lime-fusion-4pk.webp";
import watermelonFourPackHomePackshot from "./assets/products/watermelon-refresher-4pk.webp";
import {
  CartProvider,
  configuredProduct,
  productVariants,
  useCart,
} from "@/storefront/StorefrontContext";

const loadVisitPage=()=>import("./routes/VisitPage");
const loadAboutPage=()=>import("./routes/AboutPage");
const loadLearnPage=()=>import("./routes/LearnPage");
const loadMerchRoutes=()=>import("./routes/MerchRoutes");
const loadCommerceRoutes=()=>import("./routes/CommerceRoutes");
const loadProductPage=()=>import("./routes/ProductPage");
const VisitPage=React.lazy(loadVisitPage);
const AboutPage=React.lazy(loadAboutPage);
const LearnPage=React.lazy(loadLearnPage);
const MerchPage=React.lazy(()=>loadMerchRoutes().then(module=>({default:module.MerchPage})));
const MerchDetailPage=React.lazy(()=>loadMerchRoutes().then(module=>({default:module.MerchDetailPage})));
const CartPage=React.lazy(()=>loadCommerceRoutes().then(module=>({default:module.CartPage})));
const CheckoutPage=React.lazy(()=>loadCommerceRoutes().then(module=>({default:module.CheckoutPage})));
const ProductPage=React.lazy(loadProductPage);

export function preloadStorefrontRoute(pathname){
  if(pathname.startsWith('/product/'))return loadProductPage();
  if(pathname==='/visit')return loadVisitPage();
  if(pathname==='/about')return loadAboutPage();
  if(pathname==='/learn')return loadLearnPage();
  if(pathname==='/merch'||pathname.startsWith('/merch/'))return loadMerchRoutes();
  if(pathname==='/cart'||pathname==='/checkout')return loadCommerceRoutes();
  return Promise.resolve();
}

function RouteChunkFallback(){
  return <Shell><div className="route-chunk-fallback" role="status" aria-live="polite" aria-busy="true"><span className="route-chunk-fallback__mark" aria-hidden="true"><i/></span><span className="sr-only">Loading page…</span></div></Shell>
}
function ArrowLink({ to, children }) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight />
    </Link>
  );
}
function SectionTitle({ title, to = "/shop" }) {
  return (
    <m.div className="section-title" variants={motionVariants.item}>
      <h2>{title}</h2>
      <Link to={to}>
        View All <ArrowRight />
      </Link>
    </m.div>
  );
}
function CategoryCard({ name, label, description }) {
  const img = categoryImages[name];
  const categoryPath = name === "Seltzers" ? "/shop/seltzers" : name === "Gummies" ? "/shop/gummies" : "/shop";
  return (
    <m.div
      className="motion-card-shell"
      variants={motionVariants.item}
      layout
      whileHover={motionTokens.hover}
      whileTap={motionTokens.tap}
      transition={motionTokens.spring}
    >
      <Link
        className={`category-card shop-category-card${img ? " has-image" : ""}`}
        to={categoryPath}
        aria-label={`Explore ${label}`}
      >
        {img ? (
          <span className="category-card__media shop-category-card__media">
            <ResponsiveImage
              src={img}
              alt=""
              sizes="(max-width: 899px) 50vw, 33vw"
              loading="eager"
              decoding="async"
            />
          </span>
        ) : (
          <div className="category-symbol">{label.slice(0, 2).toUpperCase()}</div>
        )}
        <span className="shop-category-card__shade" aria-hidden="true" />
        <span className="category-card__content shop-category-card__content">
          <span className="category-card__copy shop-category-card__copy">
            <span className="shop-category-card__eyebrow">Explore</span>
            <strong>{label}</strong>
            <small>{description}</small>
          </span>
          <span className="category-card__action shop-category-card__action" aria-hidden="true">
            <ArrowRight />
          </span>
        </span>
      </Link>
    </m.div>
  );
}
function productCardFacts(product) {
  if (product.category === "Gummies" || product.category === "Seltzers") return [];
  const facts = [];
  if (product.productLine && product.productLine !== "Classic") facts.push(product.productLine);
  if (product.weight) facts.push(product.weight);
  if (facts.length < 2 && product.type) facts.push(product.type);
  return [...new Set(facts.filter(Boolean))];
}

function useAnchoredVariantMenu(isOpen, triggerRef, optionCount) {
  const [position, setPosition] = useState(null);

  useLayoutEffect(() => {
    if (!isOpen) {
      setPosition(null);
      return undefined;
    }

    const updatePosition = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const viewportPadding = 10;
      const preferredWidth = 196;
      const maxWidth = window.innerWidth - viewportPadding * 2;
      const estimatedMenuHeight = Math.min(optionCount, 5) * 46 + 10;
      const width = Math.min(Math.max(rect.width, preferredWidth), maxWidth);
      const fitsToRight = rect.left + width <= window.innerWidth - viewportPadding;
      const desiredLeft = fitsToRight ? rect.left : rect.right - width;
      const left = Math.min(
        Math.max(viewportPadding, desiredLeft),
        window.innerWidth - width - viewportPadding,
      );
      const fitsBelow = rect.bottom + 8 + estimatedMenuHeight <= window.innerHeight - viewportPadding;
      const top = fitsBelow || rect.top < estimatedMenuHeight + viewportPadding
        ? rect.bottom + 8
        : rect.top - estimatedMenuHeight - 8;
      setPosition({
        "--variant-menu-top": `${top}px`,
        "--variant-menu-left": `${left}px`,
        "--variant-menu-width": `${width}px`,
        "--variant-menu-origin": fitsBelow ? "top" : "bottom",
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, optionCount, triggerRef]);

  return position;
}

function AnchoredVariantMenu({ productName, variants, selectedId, onSelect, menuRef, position }) {
  if (typeof document === "undefined" || !position) return null;

  return createPortal(
    <m.div
      ref={menuRef}
      className="variant-menu shop-card-variant-menu shop-card-variant-menu--portal"
      role="listbox"
      aria-label={`${productName} size options`}
      style={position}
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -4, scale: 0.98 }}
      transition={motionTokens.springSoft}
    >
      {variants.map((variant) => (
        <button type="button" key={variant.id} role="option" aria-selected={variant.id === selectedId} className={variant.id === selectedId ? "active" : ""} onClick={() => onSelect(variant)}>
          <span>{variant.label}</span><b>${variant.price.toFixed(2)}</b>
        </button>
      ))}
    </m.div>,
    document.body,
  );
}

function ProductCard({ product }) {
  const { add } = useCart();
  const variants = useMemo(() => productVariants(product), [product]);
  const [selectedId, setSelectedId] = useState(variants[0]?.id);
  const [variantOpen, setVariantOpen] = useState(false);
  const pickerRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const selected = variants.find((variant) => variant.id === selectedId) || variants[0];
  const item = configuredProduct(product, selected);
  const facts = productCardFacts(product);
  const contextLabel = product.category === "Gummies" ? product.productLine : null;
  const hasVariantPicker = product.category === "Seltzers" && variants.length > 1;
  const menuPosition = useAnchoredVariantMenu(variantOpen && hasVariantPicker, triggerRef, variants.length);

  useEffect(() => {
    setSelectedId(variants[0]?.id);
    setVariantOpen(false);
  }, [product.id, variants]);

  useEffect(() => {
    if (!variantOpen) return undefined;
    const close = (event) => {
      if (!pickerRef.current?.contains(event.target) && !menuRef.current?.contains(event.target)) setVariantOpen(false);
    };
    const key = (event) => {
      if (event.key === "Escape") setVariantOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", key);
    };
  }, [variantOpen]);

  const selectVariant = (variant) => {
    setSelectedId(variant.id);
    setVariantOpen(false);
  };

  return (
    <CatalogProductCard
      id={product.id}
      to={`/product/${product.id}`}
      image={selected.image || product.image}
      imageAlt={`${product.name} ${product.type}`}
      contextLabel={contextLabel}
      name={product.name}
      price={selected.price}
      className={`product-card product-card--shop-reference ${product.category === "Gummies" ? "product-card--gummy" : ""} ${!hasVariantPicker ? "product-card--single-purchase" : ""} ${variantOpen ? "is-variant-open" : ""}`}
      mediaClassName="product-media"
      copyClassName="product-copy"
      showPrice
      compactPurchase={!hasVariantPicker}
      metaBeforePrice
      meta={facts.length ? (
        <span className="product-facts" aria-label={facts.join(", ")}>
          {facts.map((fact) => <span key={fact}>{fact}</span>)}
        </span>
      ) : null}
      motionProps={{ variants: motionVariants.item, layout: "position", style: { "--accent": product.accent } }}
    >
      <div className={`shop-card-commerce ${hasVariantPicker ? "shop-card-commerce--variant" : "shop-card-commerce--single"}`.trim()}>
        {hasVariantPicker ? <div className="variant-picker shop-card-variant-picker" ref={pickerRef}>
          <m.button ref={triggerRef} type="button" className="variant-trigger shop-card-variant-trigger" whileTap={motionTokens.tap} aria-haspopup="listbox" aria-expanded={variantOpen} onClick={() => setVariantOpen((open) => !open)}>
            <span>{selected.label}</span>
            <m.span animate={{ rotate: variantOpen ? 180 : 0 }} transition={motionTokens.springSnappy} aria-hidden="true"><ChevronDown /></m.span>
          </m.button>
          <Presence>
            {variantOpen ? <AnchoredVariantMenu productName={product.name} variants={variants} selectedId={selected.id} onSelect={selectVariant} menuRef={menuRef} position={menuPosition} /> : null}
          </Presence>
        </div> : null}
        <AddToCartButton
          size="card"
          className="shop-card-add"
          productId={product.id}
          onClick={() => add(item)}
          aria-label={`Add ${product.name}, ${selected.label} to cart`}
        />
      </div>
    </CatalogProductCard>
  );
}

const CATEGORY_HERO_MEDIA = {
  Seltzers: {
    desktop: responsiveImages.heroDesktop.hero,
    mobile: responsiveImages.heroMobile.hero,
    eyebrow: "GOOD DAYS IN BALANCE",
    title: "THC Seltzers",
    description: "Crisp, hemp-derived THC seltzers by flavor and pack format. Each current Lagom can contains 10 mg THC in a 12 fl oz serving.",
    note: "FLAVOR · BALANCE · RITUAL",
    features: [
      { icon: Leaf, label: "HEMP-DERIVED THC" },
      { icon: Sparkles, label: "ZERO SUGAR · ZERO CARBS" },
      { icon: Package, label: "SINGLE CANS · 4-PACKS" },
    ],
  },
  Gummies: {
    desktop: responsiveImages.heroDesktop["gummies-hero"],
    mobile: responsiveImages.heroMobile["gummies-hero"],
    eyebrow: "GOOD PLANTS · CONSIDERED FORMATS",
    title: "THC Gummies",
    description: "Explore Lagom THC gummies across Classic, Organic, and Midnight Drift collections, with flavor-led formats and clearly labeled cannabinoid content.",
    note: "THREE COLLECTIONS · MULTIPLE FLAVORS",
    features: [
      { icon: Leaf, label: "HEMP-DERIVED THC" },
      { icon: Sparkles, label: "5 MG THC PER GUMMY" },
      { icon: Package, label: "10-PIECE POUCHES" },
    ],
  },
};

function CategoryShopHero({ category }) {
  const config = CATEGORY_HERO_MEDIA[category];
  if (!config) return null;
  const { desktop, mobile } = config;

  return (
    <Reveal className={`category-shop-hero category-shop-hero--${category.toLowerCase()}`}>
      <div className="category-shop-hero__copy">
        <div className="category-shop-hero__eyebrow">
          <span aria-hidden="true" />
          <p>{config.eyebrow}</p>
          <span aria-hidden="true" />
        </div>
        <h1>{config.title}</h1>
        <p className="category-shop-hero__description">{config.description}</p>
        <div className="category-shop-hero__features" aria-label={`${category} highlights`}>
          {config.features.map(({ icon: Icon, label }) => (
            <div className="category-shop-hero__feature" key={label}>
              <span className="category-shop-hero__feature-icon" aria-hidden="true"><Icon /></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <a className="category-shop-hero__cta" href="#shop-products">
          <span>Explore {category}</span>
          <ArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="category-shop-hero__visual">
        <picture>
          {desktop.avifSrcSet ? <source media="(min-width: 700px)" type="image/avif" srcSet={desktop.avifSrcSet} /> : null}
          {desktop.webpSrcSet ? <source media="(min-width: 700px)" type="image/webp" srcSet={desktop.webpSrcSet} /> : null}
          {mobile.avifSrcSet ? <source media="(max-width: 699px)" type="image/avif" srcSet={mobile.avifSrcSet} /> : null}
          {mobile.webpSrcSet ? <source media="(max-width: 699px)" type="image/webp" srcSet={mobile.webpSrcSet} /> : null}
          <img
            src={desktop.src}
            alt={category === "Seltzers"
              ? "Lagom THC seltzer cans arranged in a bright outdoor lifestyle setting"
              : "Lagom THC gummy products arranged in a bright outdoor lifestyle setting"}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="category-shop-hero__visual-shade" aria-hidden="true" />
        <div className="category-shop-hero__note" aria-hidden="true">
          <span>{config.note}</span>
          <i />
        </div>
      </div>
    </Reveal>
  );
}

const homeSeltzers = products.filter((product) => product.category === "Seltzers").slice(0, 4);
const HOME_GUMMY_COLLECTIONS = [
  {
    name: "Classic",
    description: "Fruit-forward favorites for everyday moments.",
    tone: "classic",
    productIds: ["blueberry-yum-yum", "green-apple"],
  },
  {
    name: "Organic",
    description: "Organic fruit flavors with full-spectrum live resin.",
    tone: "organic",
    productIds: ["berry-melon-bliss-organic", "blue-razz-organic"],
  },
  {
    name: "Midnight Drift",
    description: "A full-spectrum collection for slower evenings.",
    tone: "midnight",
    productIds: ["blueberry-yum-yum-midnight-drift", "peach-midnight-drift"],
  },
];

const HOME_FLAVOR_PACKSHOTS = {
  "24k-lemonade": lemonadeHomePackshot,
  "blackberry-breeze": blackberryHomePackshot,
  "strawberry-lime-fusion": strawberryLimeHomePackshot,
  "watermelon-refresher": watermelonHomePackshot,
};

const HOME_GUMMY_PACKSHOTS = {
  "blueberry-yum-yum": responsiveImages.homeGummies["Blueberry-Yum-Yum-1-Photoroom-900x900"].src,
  "green-apple": responsiveImages.homeGummies["Green-Apple-Photoroom-900x900"].src,
  "strawberry-banana": responsiveImages.homeGummies["Strawberry-Banana-Photoroom-900x900"].src,
  "berry-melon-bliss-organic": responsiveImages.homeGummies["Berry-Melon-Bliss-Photoroom-900x900"].src,
  "blue-razz-organic": responsiveImages.homeGummies["Blue-Razz-Photoroom-Photoroom-1-900x900"].src,
  "cherry-bliss-organic": responsiveImages.homeGummies["Cherry-Bliss-Photoroom-900x900"].src,
  "push-pop-organic": responsiveImages.homeGummies["Push-Pop-1-Photoroom-900x900"].src,
  "blueberry-yum-yum-midnight-drift": responsiveImages.homeGummies["Blueberry-Yum-Yum-3-Photoroom-900x900"].src,
  "peach-midnight-drift": responsiveImages.homeGummies["Peach-Photoroom-900x900"].src,
  "pink-lemonade-midnight-drift": responsiveImages.homeGummies["Pink-Lemonade-Photoroom-900x900"].src,
  "strawberry-midnight-drift": responsiveImages.homeGummies["Strawberry-Photoroom-900x900"].src,
};

const HOME_FLAVOR_DESCRIPTIONS = {
  "24k-lemonade": "Sicilian lemon and juicy tangerine with a crisp, clean finish.",
  "blackberry-breeze": "Blackberry flavor with a clean, sparkling finish.",
  "strawberry-lime-fusion": "Ripe strawberry flavor with a bright lime edge.",
  "watermelon-refresher": "Light watermelon flavor designed for crisp refreshment.",
};

const HOME_FLAVOR_FOUR_PACK_PACKSHOTS = {
  "24k-lemonade": lemonadeFourPackHomePackshot,
  "blackberry-breeze": blackberryFourPackHomePackshot,
  "strawberry-lime-fusion": strawberryLimeFourPackHomePackshot,
  "watermelon-refresher": watermelonFourPackHomePackshot,
};

function HomePackSelector({ productId, variants, selectedId, onChange }) {
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);
  const triggerRef = useRef(null);
  const optionRefs = useRef([]);
  const selectedIndex = Math.max(0, variants.findIndex((variant) => variant.id === selectedId));
  const selectedVariant = variants[selectedIndex];
  const labelId = `home-product-pack-label-${productId}`;
  const listboxId = `home-product-pack-listbox-${productId}`;

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsidePress = (event) => {
      if (!selectorRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    window.addEventListener("pointerdown", closeOnOutsidePress);
    window.addEventListener("keydown", closeOnEscape);
    optionRefs.current[selectedIndex]?.focus();
    return () => {
      window.removeEventListener("pointerdown", closeOnOutsidePress);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, selectedIndex]);

  const chooseVariant = (variantId) => {
    onChange(variantId);
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const moveFocus = (event, index) => {
    const nextIndex = event.key === "ArrowDown"
      ? (index + 1) % variants.length
      : event.key === "ArrowUp"
        ? (index - 1 + variants.length) % variants.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? variants.length - 1
            : null;
    if (nextIndex === null) return;
    event.preventDefault();
    optionRefs.current[nextIndex]?.focus();
  };

  return <div className={`sky-home-product__variant${open ? " is-open" : ""}`} ref={selectorRef}>
    <span className="sky-home-product__variant-label" id={labelId}>Pack size</span>
    <button
      ref={triggerRef}
      type="button"
      className="sky-home-product__variant-trigger"
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-controls={listboxId}
      aria-label={`Pack size: ${selectedVariant.label}, $${selectedVariant.price.toFixed(2)}`}
      onClick={() => setOpen((current) => !current)}
    >
      <span><strong>{selectedVariant.label}</strong></span>
      <b>${selectedVariant.price.toFixed(2)}</b>
      <ChevronDown aria-hidden="true" />
    </button>
    <Presence>
      {open ? <m.div
        id={listboxId}
        className="sky-home-product__variant-sheet"
        role="listbox"
        aria-labelledby={labelId}
        initial={{ opacity: 0, y: -7, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -5, scale: 0.985 }}
        transition={motionTokens.springSoft}
      >
        {variants.map((variant, index) => <button
          ref={(element) => { optionRefs.current[index] = element; }}
          type="button"
          key={variant.id}
          role="option"
          aria-selected={variant.id === selectedId}
          className={variant.id === selectedId ? "is-selected" : ""}
          onClick={() => chooseVariant(variant.id)}
          onKeyDown={(event) => moveFocus(event, index)}
        >
          <span className="sky-home-product__variant-option-copy"><strong>{variant.label}</strong></span>
          <b className="sky-home-product__variant-option-price">${variant.price.toFixed(2)}</b>
          <span className="sky-home-product__variant-option-indicator" aria-hidden="true">{variant.id === selectedId ? <Check /> : null}</span>
        </button>)}
      </m.div> : null}
    </Presence>
  </div>;
}

function HomeProductCard({ product }) {
  const isGummy = product.category === "Gummies";
  const variants = productVariants(product);
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const [cartState, setCartState] = useState("idle");
  const cartFeedbackTimeout = useRef(null);
  const { add } = useCart();
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId) || variants[0];
  const basePackshot = isGummy
    ? HOME_GUMMY_PACKSHOTS[product.id]
    : HOME_FLAVOR_PACKSHOTS[product.id];
  const homePackshot = selectedVariant?.id === "4-pack"
    ? HOME_FLAVOR_FOUR_PACK_PACKSHOTS[product.id] || selectedVariant.image || basePackshot
    : basePackshot;
  const potency = product.category === "Seltzers"
    ? `${product.thcMgPerCan} MG THC · ${product.canVolume}`
    : product.strength;
  const flavorDescription = HOME_FLAVOR_DESCRIPTIONS[product.id];

  useEffect(() => () => window.clearTimeout(cartFeedbackTimeout.current), []);

  const handleAddToCart = () => {
    add(configuredProduct(product, selectedVariant));
    setCartState("added");
    window.clearTimeout(cartFeedbackTimeout.current);
    cartFeedbackTimeout.current = window.setTimeout(() => setCartState("idle"), 1400);
  };

  return (
    <article className={`sky-home-product${isGummy ? " sky-home-product--gummy-packshot" : ""}`} data-variant={selectedVariant.id} style={{ "--product-accent": product.accent }}>
      <Link className="sky-home-product__image" to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        <m.span
          key={selectedVariant?.id}
          className="sky-home-product__image-swap"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={motionTokens.springMedia}
        >
          <ResponsiveImage src={homePackshot} alt={`${product.name} ${selectedVariant?.label || "product"}`} sizes="(max-width: 699px) 78vw, 32vw" loading="lazy" decoding="async" />
        </m.span>
      </Link>
      <div className="sky-home-product__copy">
        <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        {flavorDescription ? <p className="sky-home-product__description">{flavorDescription}</p> : <p className="sky-home-product__line">{product.productLine && product.productLine !== "Classic" ? product.productLine : product.flavor}</p>}
        <p className="sky-home-product__mobile-facts" aria-hidden="true"><span>${selectedVariant.price.toFixed(2)}</span><span>{potency}</span></p>
        {variants.length > 1 ? <div className="sky-home-product__purchase-row">
          <HomePackSelector productId={product.id} variants={variants} selectedId={selectedVariant.id} onChange={(variantId) => { setSelectedVariantId(variantId); setCartState("idle"); }} />
          <AddToCartButton className="sky-home-product__action sky-home-product__add-to-cart" label="Add to cart" productId={product.id} state={cartState} onClick={handleAddToCart} aria-label={`Add ${product.name}, ${selectedVariant.label}, to cart`} />
        </div> : <>
          <p className="sky-home-product__facts"><span>${selectedVariant.price.toFixed(2)}</span><span>{potency}</span></p>
          <div className="sky-home-product__purchase-row sky-home-product__purchase-row--solo">
            <AddToCartButton className="sky-home-product__action sky-home-product__add-to-cart" label="Add to cart" productId={product.id} state={cartState} onClick={handleAddToCart} aria-label={`Add ${product.name}, ${selectedVariant.label}, to cart`} />
          </div>
        </>}
      </div>
    </article>
  );
}

function HomeGummyCollectionCard({ collection }) {
  const productsInCollection = products.filter((product) => (
    product.category === "Gummies" && product.productLine === collection.name
  ));
  const packshots = collection.productIds
    .map((id) => HOME_GUMMY_PACKSHOTS[id])
    .filter(Boolean);
  const collectionUrl = `/shop/gummies?collection=${encodeURIComponent(collection.name)}`;

  return (
    <Link
      className={`gummy-collection-card gummy-collection-card--${collection.tone}`}
      to={collectionUrl}
      aria-label={`Explore the ${collection.name} gummy collection, ${productsInCollection.length} products`}
    >
      <span className="gummy-collection-card__media" aria-hidden="true">
        {packshots.map((packshot) => (
          <ResponsiveImage key={packshot} src={packshot} alt="" sizes="(max-width: 699px) 42vw, 18vw" loading="lazy" decoding="async" />
        ))}
      </span>
      <span className="gummy-collection-card__content">
        <span className="gummy-collection-card__eyebrow">{productsInCollection.length} flavors</span>
        <strong>{collection.name}</strong>
        <span className="gummy-collection-card__description">{collection.description}</span>
        <span className="gummy-collection-card__cta">Explore collection <ArrowRight aria-hidden="true" /></span>
      </span>
    </Link>
  );
}

function HomeHorizontalProductRail({ className, children, label }) {
  const railRef = useRef(null);
  const metaRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = React.Children.count(children);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || typeof window === "undefined") return undefined;

    const mobileViewport = window.matchMedia("(max-width: 899px)");
    let observer;
    let motionFrame = 0;
    let items = [];

    const updateMotion = () => {
      motionFrame = 0;
      if (!mobileViewport.matches || !items.length) return;

      const railRect = rail.getBoundingClientRect();
      const railCenter = railRect.left + railRect.width / 2;
      const influence = Math.max(1, railRect.width * 0.78);

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.min(1, Math.abs(center - railCenter) / influence);
        const proximity = 1 - distance;
        item.style.setProperty("--home-rail-opacity", (0.64 + proximity * 0.36).toFixed(3));
        item.style.setProperty("--home-rail-scale", (0.965 + proximity * 0.035).toFixed(4));
        item.style.setProperty("--home-rail-y", `${((1 - proximity) * 8).toFixed(2)}px`);
      });

      const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
      const normalized = maxScroll > 0 ? Math.min(1, Math.max(0, rail.scrollLeft / maxScroll)) : 0;
      const baseProgress = itemCount ? 100 / itemCount : 100;
      const progress = baseProgress + normalized * (100 - baseProgress);
      metaRef.current?.style.setProperty("--home-rail-progress", `${progress}%`);
    };

    const scheduleMotion = () => {
      if (!motionFrame) motionFrame = requestAnimationFrame(updateMotion);
    };

    const configure = () => {
      observer?.disconnect();
      items = Array.from(rail.children);
      items.forEach((item) => item.classList.remove("is-home-rail-active"));

      if (!mobileViewport.matches || !items.length) {
        setActiveIndex(0);
        return;
      }

      items[0].classList.add("is-home-rail-active");
      setActiveIndex(0);
      scheduleMotion();

      if (!("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible || visible.intersectionRatio < 0.52) return;

          const nextIndex = items.indexOf(visible.target);
          if (nextIndex < 0) return;
          items.forEach((item, index) => item.classList.toggle("is-home-rail-active", index === nextIndex));
          setActiveIndex(nextIndex);
        },
        {
          root: rail,
          rootMargin: "0px -10% 0px -10%",
          threshold: [0.34, 0.52, 0.7, 0.86],
        },
      );

      items.forEach((item) => observer.observe(item));
    };

    configure();
    rail.addEventListener("scroll", scheduleMotion, { passive: true });
    window.addEventListener("resize", scheduleMotion, { passive: true });
    if (mobileViewport.addEventListener) mobileViewport.addEventListener("change", configure);
    else mobileViewport.addListener(configure);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(motionFrame);
      rail.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", scheduleMotion);
      if (mobileViewport.removeEventListener) mobileViewport.removeEventListener("change", configure);
      else mobileViewport.removeListener(configure);
    };
  }, [itemCount]);

  const formatIndex = (value) => String(value).padStart(2, "0");

  return (
    <>
      <div
        ref={railRef}
        className={`${className} home-product-rail`}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${label}. Swipe horizontally or use the left and right arrow keys to browse.`}
      >
        {children}
      </div>
      <div
        ref={metaRef}
        className="home-product-rail__meta"
        style={{ "--home-rail-progress": `${itemCount ? 100 / itemCount : 100}%` }}
        aria-hidden="true"
      >
        <span className="home-product-rail__index">
          {formatIndex(activeIndex + 1)} <i>/</i> {formatIndex(itemCount)}
        </span>
        <span className="home-product-rail__progress"><span /></span>
        <span className="home-product-rail__cue">
          {activeIndex < itemCount - 1 ? "Swipe" : "End"}
          <ArrowRight aria-hidden="true" />
        </span>
      </div>
    </>
  );
}

function HomePage() {
  const homeRef = useRef(null);
  return (
    <Shell>
      <div className="sky-home" ref={homeRef}>
        <HomeScrollSnap rootRef={homeRef} />
        <section id="home-scene-hero" className="beverage-hero atmospheric-scene-hero" data-home-snap-scene aria-label="Featured Lagom Naturals products"><HomeHero /></section>

        <AtmosphericSceneSection id="flavors" className="sky-home__section sky-home__section--flavors" labelledBy="home-flavors-title">
          <div className="sky-home__heading">
            <p>MEET THE SELTZER LINE</p>
            <h2 id="home-flavors-title">Thoughtfully made.<br/>Simply enjoyed.</h2>
            <p className="sky-home__body-copy">Meet the Lagom seltzer line—zero sugar, zero carbs, and zero calories, with hydrating electrolytes and no artificial flavors.</p>
          </div>
          <HomeHorizontalProductRail className="sky-home__product-grid" label="Lagom seltzer flavors">
            {homeSeltzers.map((product) => <HomeProductCard key={product.id} product={product} />)}
          </HomeHorizontalProductRail>
        </AtmosphericSceneSection>

        <AtmosphericSceneSection id="gummies" className="sky-home__section sky-home__section--gummies" labelledBy="home-gummies-title">
          <div className="sky-home__heading">
            <p>MEET THE GUMMIE LINE</p>
            <h2 id="home-gummies-title">Three collections.<br/>One elevated standard.</h2>
            <p className="sky-home__body-copy">Meet the Lagom gummy line—three distinct collections, made to suit the rhythm of your day or evening.</p>
          </div>
          <HomeHorizontalProductRail className="sky-home__gummy-grid" label="Lagom gummy collections">
            {HOME_GUMMY_COLLECTIONS.map((collection) => <HomeGummyCollectionCard key={collection.name} collection={collection} />)}
          </HomeHorizontalProductRail>
        </AtmosphericSceneSection>

      </div>
    </Shell>
  );
}
function ShopPage() {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const pathCategory =
    location.pathname === "/shop/seltzers"
      ? "Seltzers"
      : location.pathname === "/shop/gummies"
        ? "Gummies"
        : null;
  const requestedCategory = pathCategory || params.get("category") || "All";
  const requestedCollection = params.get("collection") || "All";
  const categories = ["All", "Seltzers", "Gummies"];
  const category = categories.includes(requestedCategory) ? requestedCategory : "All";
  const collection = gummyCollections.some(({ name }) => name === requestedCollection)
    ? requestedCollection
    : "All";
  const showGummyCollections = category === "Gummies";
  const updateFilters = (nextCategory, nextCollection = "All") => {
    const next = new URLSearchParams();
    const pathname =
      nextCategory === "Seltzers"
        ? "/shop/seltzers"
        : nextCategory === "Gummies"
          ? "/shop/gummies"
          : "/shop";
    if (nextCategory === "Gummies" && nextCollection !== "All") {
      next.set("collection", nextCollection);
    }
    const query = next.toString();
    navigate(query ? `${pathname}?${query}` : pathname);
  };
  const visible = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (collection === "All" || p.productLine === collection),
      ),
    [category, collection],
  );
  return (
    <Shell>
      <div className="shop-page shop-page--reference">
        {category === "All" ? (
          <Reveal className="shop-intro">
            <div className="shop-intro__copy">
              <h1>Shop</h1>
              <p>Premium THC beverages and gummies for every occasion.</p>
            </div>
            <div className="shop-intro__aside" aria-hidden="true">
              <span>Good</span>
              <span>Things</span>
              <span>In Balance</span>
              <i />
            </div>
          </Reveal>
        ) : (
          <CategoryShopHero category={category} />
        )}
        {category === "All" && (
          <Stagger className="category-grid">
            {categoryCards.map(([name, label, description]) => (
              <CategoryCard
                key={name}
                name={name}
                label={label}
                description={description}
              />
            ))}
          </Stagger>
        )}
        <Reveal className="shop-catalog" id="shop-products">
          <div className="shop-catalog__toolbar">
            <div className="shop-catalog__heading">
              <h2>
                {collection !== "All"
                  ? `${collection} Gummies`
                  : category === "All"
                    ? "All products"
                    : category}
              </h2>
              <span>{visible.length} {visible.length === 1 ? "product" : "products"}</span>
            </div>
            <div className="chips" aria-label="Filter by category">
              {categories.map((f) => (
                <button
                  type="button"
                  key={f}
                  className={category === f ? "active" : ""}
                  aria-pressed={category === f}
                  onClick={() => updateFilters(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          {showGummyCollections && (
            <div className="collection-filter" aria-labelledby="gummy-collection-filter-label">
              <span id="gummy-collection-filter-label">Gummy collection</span>
              <div className="chips collection-chips" aria-label="Filter gummies by collection">
                <button
                  type="button"
                  className={collection === "All" ? "active" : ""}
                  onClick={() => updateFilters("Gummies")}
                >
                  All gummies
                </button>
                {gummyCollections.map(({ name }) => (
                  <button
                    type="button"
                    key={name}
                    className={collection === name ? "active" : ""}
                    onClick={() => updateFilters("Gummies", name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Reveal>
        <Stagger className="product-grid listing-grid">
          {visible.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
        {!visible.length && (
          <p className="empty-copy">No products match those filters.</p>
        )}
      </div>
    </Shell>
  );
}
function NotFoundPage() {
  return (
    <Shell>
      <div className="not-found">
        <h1>That page wandered off.</h1>
        <ArrowLink to="/">Return home</ArrowLink>
      </div>
    </Shell>
  );
}
export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/seltzers" element={<ShopPage />} />
        <Route path="/shop/gummies" element={<ShopPage />} />
        <Route path="/product/:id" element={<React.Suspense fallback={<RouteChunkFallback/>}><ProductPage /></React.Suspense>} />
        <Route path="/visit" element={<React.Suspense fallback={<RouteChunkFallback/>}><VisitPage /></React.Suspense>} />
        <Route path="/about" element={<React.Suspense fallback={<RouteChunkFallback/>}><AboutPage /></React.Suspense>} />
        <Route path="/learn" element={<React.Suspense fallback={<RouteChunkFallback/>}><LearnPage /></React.Suspense>} />
        <Route path="/merch" element={<React.Suspense fallback={<RouteChunkFallback/>}><MerchPage /></React.Suspense>} />
        <Route path="/merch/:id" element={<React.Suspense fallback={<RouteChunkFallback/>}><MerchDetailPage /></React.Suspense>} />
        <Route path="/cart" element={<React.Suspense fallback={<RouteChunkFallback/>}><CartPage /></React.Suspense>} />
        <Route path="/checkout" element={<React.Suspense fallback={<RouteChunkFallback/>}><CheckoutPage /></React.Suspense>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
  );
}
