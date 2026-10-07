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
import EditorialHomePage from "@/routes/HomePage";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import AddToCartButton from "@/AddToCartButton";
import { responsiveImages } from "@/generated/responsiveImages";
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
        <Route path="/" element={<EditorialHomePage />} />
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
