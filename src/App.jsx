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
import LagomScrollIndicator from "@/LagomScrollIndicator";
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
  gummyCollections,
} from "./catalogData";
import Shell from "@/storefront/StorefrontShell";
import HomeHero from "@/HomeHeroPortal";
import HomepageAtmosphere from "@/home/HomepageAtmosphere";
import SeltzerShowcase from "@/home/SeltzerShowcase";
import GummyShowcase from "@/home/GummyShowcase";
import { HomeBrandEditorial, HomeCollectionDiscovery } from "@/home/HomeCampaignScenes";
import SceneTransitionArtwork from "@/home/SceneTransitionArtwork";
import HomeProductStage from "@/HomeProductStage";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import AddToCartButton from "@/AddToCartButton";
import ResponsiveImage from "@/storefront/ResponsiveImage";
import { responsiveImages } from "@/generated/responsiveImages";
import seltzerCanBase480Avif from "./assets/seltzers/lagom-seltzer-can-base-480.avif";
import seltzerCanBase480Webp from "./assets/seltzers/lagom-seltzer-can-base-480.webp";
import seltzerCanBase889Avif from "./assets/seltzers/lagom-seltzer-can-base-889.avif";
import seltzerCanBase889Webp from "./assets/seltzers/lagom-seltzer-can-base-889.webp";
import blackberryBreezeLabel480Avif from "./assets/seltzers/blackberry-breeze-label-480.avif";
import blackberryBreezeLabel480Webp from "./assets/seltzers/blackberry-breeze-label-480.webp";
import blackberryBreezeLabel889Avif from "./assets/seltzers/blackberry-breeze-label-889.avif";
import blackberryBreezeLabel889Webp from "./assets/seltzers/blackberry-breeze-label-889.webp";
import lemonadeLabel480Avif from "./assets/seltzers/24k-lemonade-label-480.avif";
import lemonadeLabel480Webp from "./assets/seltzers/24k-lemonade-label-480.webp";
import lemonadeLabel889Avif from "./assets/seltzers/24k-lemonade-label-889.avif";
import lemonadeLabel889Webp from "./assets/seltzers/24k-lemonade-label-889.webp";
import strawberryLimeLabel480Avif from "./assets/seltzers/strawberry-lime-label-aligned-480.avif";
import strawberryLimeLabel480Webp from "./assets/seltzers/strawberry-lime-label-aligned-480.webp";
import strawberryLimeLabel889Avif from "./assets/seltzers/strawberry-lime-label-aligned-889.avif";
import strawberryLimeLabel889Webp from "./assets/seltzers/strawberry-lime-label-aligned-889.webp";
import watermelonLabel480Avif from "./assets/seltzers/watermelon-label-480.avif";
import watermelonLabel480Webp from "./assets/seltzers/watermelon-label-480.webp";
import watermelonLabel889Avif from "./assets/seltzers/watermelon-label-889.avif";
import watermelonLabel889Webp from "./assets/seltzers/watermelon-label-889.webp";
import {
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
function productCardFacts(product) {
  if (product.category === "Seltzers") return [`${product.thcMgPerCan} mg THC`, product.canVolume];
  if (product.category === "Gummies") return [product.strength, `${product.piecesPerPackage} gummies`];
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

function ProductCard({ product, showDescription = false }) {
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
  const hasVariantPicker = variants.length > 1;
  const hasSingleSizeControl = product.category === "Gummies" && variants.length === 1;
  const hasPurchaseControl = hasVariantPicker || hasSingleSizeControl;
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
      showPrice={!hasPurchaseControl}
      compactPurchase={!hasVariantPicker}
      metaBeforePrice
      meta={facts.length ? (
        <span className="product-facts" aria-label={facts.join(", ")}>
          {facts.map((fact) => <span key={fact}>{fact}</span>)}
        </span>
      ) : null}
      reviewStatus={showDescription ? (product.cardDescription || product.description) : null}
      motionProps={{ variants: motionVariants.item, layout: "position", style: { "--accent": product.accent } }}
    >
      <div className={`shop-card-commerce ${hasPurchaseControl ? "shop-card-commerce--variant" : "shop-card-commerce--single"}`.trim()}>
        {hasVariantPicker ? <div className="variant-picker shop-card-variant-picker" ref={pickerRef}>
          <m.button ref={triggerRef} type="button" className="variant-trigger shop-card-variant-trigger" whileTap={motionTokens.tap} aria-haspopup="listbox" aria-expanded={variantOpen} onClick={() => setVariantOpen((open) => !open)}>
            <span className="shop-card-variant-copy">
              <span className="shop-card-variant-label">{selected.label}</span>
              <span className="shop-card-variant-price"> · ${selected.price.toFixed(2)}</span>
            </span>
            <m.span className="shop-card-variant-chevron" animate={{ rotate: variantOpen ? 180 : 0 }} transition={motionTokens.springSnappy} aria-hidden="true"><ChevronDown /></m.span>
          </m.button>
          <Presence>
            {variantOpen ? <AnchoredVariantMenu productName={product.name} variants={variants} selectedId={selected.id} onSelect={selectVariant} menuRef={menuRef} position={menuPosition} /> : null}
          </Presence>
        </div> : hasSingleSizeControl ? <div className="variant-picker shop-card-variant-picker">
          <div className="variant-trigger shop-card-variant-trigger shop-card-variant-trigger--static" role="group" aria-label={`${product.name}: ${selected.label}, $${selected.price.toFixed(2)}`}>
            <span className="shop-card-variant-copy">
              <span className="shop-card-variant-label">{product.piecesPerPackage ? `${product.piecesPerPackage}-piece pouch` : selected.label}</span>
              <span className="shop-card-variant-price"> · ${selected.price.toFixed(2)}</span>
            </span>
          </div>
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

function HomePackSelector({ productId, variants, selectedId, onChange }) {
  const selected = variants.find((variant) => variant.id === selectedId) || variants[0];
  return <label className="sky-home-product__variant"><span className="sky-home-product__variant-label">Pack size</span><select className="sky-home-product__variant-trigger" value={selected.id} onChange={(event) => onChange(event.target.value)} aria-label={`Pack size for ${productId}`}>{variants.map((variant) => <option key={variant.id} value={variant.id}>{variant.label} — ${variant.price.toFixed(2)}</option>)}</select></label>;
}

const HOME_GUMMY_STAGE_ACCENTS = {
  Classic: "#df6d86",
  Organic: "#75996b",
  "Midnight Drift": "#6763a6",
};

const SELTZER_LABEL_SOURCES = {
  "24k-lemonade": {
    avif: `${lemonadeLabel480Avif} 480w, ${lemonadeLabel889Avif} 889w`,
    webp: `${lemonadeLabel480Webp} 480w, ${lemonadeLabel889Webp} 889w`,
    fallback: lemonadeLabel889Webp,
  },
  "blackberry-breeze": {
    avif: `${blackberryBreezeLabel480Avif} 480w, ${blackberryBreezeLabel889Avif} 889w`,
    webp: `${blackberryBreezeLabel480Webp} 480w, ${blackberryBreezeLabel889Webp} 889w`,
    fallback: blackberryBreezeLabel889Webp,
  },
  "strawberry-lime-fusion": {
    avif: `${strawberryLimeLabel480Avif} 480w, ${strawberryLimeLabel889Avif} 889w`,
    webp: `${strawberryLimeLabel480Webp} 480w, ${strawberryLimeLabel889Webp} 889w`,
    fallback: strawberryLimeLabel889Webp,
  },
  "watermelon-refresher": {
    avif: `${watermelonLabel480Avif} 480w, ${watermelonLabel889Avif} 889w`,
    webp: `${watermelonLabel480Webp} 480w, ${watermelonLabel889Webp} 889w`,
    fallback: watermelonLabel889Webp,
  },
};

function HomeSeltzerStageMedia({ product, reduceMotion = false }) {
  const labelSource = SELTZER_LABEL_SOURCES[product.id];
  return (
    <div className="home-product-stage__seltzer-media">
      <div className="home-product-stage__seltzer-can">
        <picture className="home-product-stage__seltzer-base">
          <source type="image/avif" srcSet={`${seltzerCanBase480Avif} 480w, ${seltzerCanBase889Avif} 889w`} sizes="(max-width: 899px) 50vw, 18rem" />
          <source type="image/webp" srcSet={`${seltzerCanBase480Webp} 480w, ${seltzerCanBase889Webp} 889w`} sizes="(max-width: 899px) 50vw, 18rem" />
          <img src={seltzerCanBase889Webp} alt={`${product.name} THC seltzer can`} decoding="async" />
        </picture>
        <Presence mode="sync" initial={false}>
          {labelSource ? <m.picture
            key={product.id}
            className="home-product-stage__seltzer-label-image"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.34, ease: motionTokens.easeSoft }}
            aria-hidden="true"
          >
            <source type="image/avif" srcSet={labelSource.avif} sizes="(max-width: 899px) 50vw, 18rem" />
            <source type="image/webp" srcSet={labelSource.webp} sizes="(max-width: 899px) 50vw, 18rem" />
            <img src={labelSource.fallback} alt="" decoding="async" />
          </m.picture> : null}
        </Presence>
      </div>
    </div>
  );
}

function HomeSeltzerStageDetails({ product }) {
  const variants = productVariants(product);
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const [cartState, setCartState] = useState("idle");
  const cartFeedbackTimeout = useRef(null);
  const { add } = useCart();
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId) || variants[0];
  const potency = `${product.thcMgPerCan} MG THC · ${product.canVolume}`;
  const description = HOME_FLAVOR_DESCRIPTIONS[product.id] || product.description;

  useEffect(() => {
    setSelectedVariantId(variants[0]?.id);
    setCartState("idle");
  }, [product.id]);

  useEffect(() => () => window.clearTimeout(cartFeedbackTimeout.current), []);

  const handleAddToCart = () => {
    add(configuredProduct(product, selectedVariant));
    setCartState("added");
    window.clearTimeout(cartFeedbackTimeout.current);
    cartFeedbackTimeout.current = window.setTimeout(() => setCartState("idle"), 1400);
  };

  return (
    <>
      <div className="home-product-stage__detail-copy">
        <p>{description}</p>
        <div className="home-product-stage__facts">
          <span>${selectedVariant.price.toFixed(2)}</span>
          <span>{potency}</span>
          <Link to={`/product/${product.id}`}>View details <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="home-product-stage__purchase">
        {variants.length > 1 && (
          <HomePackSelector
            productId={product.id}
            variants={variants}
            selectedId={selectedVariant.id}
            onChange={(variantId) => {
              setSelectedVariantId(variantId);
              setCartState("idle");
            }}
          />
        )}
        <AddToCartButton
          className="home-product-stage__add-to-cart"
          label="Add to cart"
          productId={product.id}
          state={cartState}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name}, ${selectedVariant.label}, to cart`}
        />
      </div>
    </>
  );
}

function HomeGummyStageMedia({ collection }) {
  const packshots = collection.productIds
    .map((id) => HOME_GUMMY_PACKSHOTS[id])
    .filter(Boolean)
    .slice(0, 2);

  return (
    <div className="home-product-stage__gummy-media" aria-label={`${collection.name} gummy collection`}>
      {packshots.map((packshot, index) => (
        <ResponsiveImage
          key={packshot}
          className={`home-product-stage__gummy-pouch home-product-stage__gummy-pouch--${index + 1}`}
          src={packshot}
          alt=""
          sizes="(max-width: 899px) 42vw, 20vw"
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
}

function HomeGummyStageDetails({ collection }) {
  const productsInCollection = products.filter((product) => (
    product.category === "Gummies" && product.productLine === collection.name
  ));
  const collectionUrl = `/shop/gummies?collection=${encodeURIComponent(collection.name)}`;

  return (
    <>
      <div className="home-product-stage__detail-copy">
        <p>{collection.description}</p>
        <div className="home-product-stage__facts">
          <span>{productsInCollection.length} flavors</span>
          <span>Gummy collection</span>
        </div>
      </div>
      <div className="home-product-stage__purchase home-product-stage__purchase--collection">
        <Link className="home-product-stage__collection-link" to={collectionUrl}>
          Explore collection <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}

function HomePage() {
  const homeRef = useRef(null);
  return (
    <Shell>
      <div className="sky-home" ref={homeRef}>
        <HomepageAtmosphere />
        <HomeScrollSnap rootRef={homeRef} />
        <LagomScrollIndicator/>
        <section id="home-scene-hero" className="beverage-hero atmospheric-scene-hero" data-home-snap-scene aria-label="Featured Lagom Naturals products"><HomeHero /><SceneTransitionArtwork index={1} word="BALANCE" /></section>

        <section
          id="home-scene-flavors"
          className="seltzer-showcase-section"
          data-home-snap-scene
          aria-label="Lagom seltzer flavors"
        >
          <SeltzerShowcase />
          <SceneTransitionArtwork index={2} word="FLAVOR" />
        </section>

        <HomeBrandEditorial />

        <section
          id="gummies"
          className="seltzer-showcase-section gummy-showcase-section"
          data-home-snap-scene
          data-home-snap-fixed
          aria-label="Lagom gummy collections"
        >
          <GummyShowcase />
          <SceneTransitionArtwork index={4} word="DISCOVER" />
        </section>

        <HomeCollectionDiscovery />

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
      <div className={`shop-page shop-page--reference shop-page--${category.toLowerCase()} ${category === "All" ? "shop-page--all-products" : ""} shop-page--flavor-cards`}>
        <div className="shop-mobile-reference-heading">
          <h1>{category === "All" ? "All Products" : category}</h1>
          <span>{visible.length} {visible.length === 1 ? "product" : "products"}</span>
        </div>
        {category === "All" && (
          <picture className="shop-page__hero-media" aria-hidden="true">
            <source media="(max-width: 899px)" type="image/avif" srcSet={responsiveImages.shopHeader["shop-header-image"].avifSrcSet} sizes="100vw" />
            <source media="(max-width: 899px)" type="image/webp" srcSet={responsiveImages.shopHeader["shop-header-image"].webpSrcSet} sizes="100vw" />
            <source type="image/avif" srcSet={responsiveImages.shopHeader["shop-header-image-desktop"].avifSrcSet} sizes="100vw" />
            <source type="image/webp" srcSet={responsiveImages.shopHeader["shop-header-image-desktop"].webpSrcSet} sizes="100vw" />
            <img src={responsiveImages.shopHeader["shop-header-image-desktop"].src} alt="" fetchPriority="high" decoding="async" />
          </picture>
        )}
        {category === "All" ? (
          <Reveal className="shop-intro">
            <div className="shop-intro__copy">
              <h1>All Products</h1>
              <p>Premium THC seltzers and gummies. Real flavors. A better state of mind.</p>
            </div>
            <span className="shop-intro__count">{visible.length} {visible.length === 1 ? "product" : "products"}</span>
          </Reveal>
        ) : (
          <CategoryShopHero category={category} />
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
              <ProductCard product={p} showDescription />
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
  );
}
