import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  ChevronDown,
  Leaf,
  Package,
  ShoppingCart,
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
  categoryCards,
  categoryImages,
  gummyCollections,
} from "./catalogData";
import Shell from "@/storefront/StorefrontShell";
import HomeHero from "@/HomeHeroPortal";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import ResponsiveImage from "@/storefront/ResponsiveImage";
import { responsiveImages } from "@/generated/responsiveImages";
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

function ProductCard({ product }) {
  const { add } = useCart();
  const variants = useMemo(() => productVariants(product), [product]);
  const [selectedId, setSelectedId] = useState(variants[0]?.id);
  const [variantOpen, setVariantOpen] = useState(false);
  const pickerRef = useRef(null);
  const selected = variants.find((variant) => variant.id === selectedId) || variants[0];
  useEffect(() => {
    setSelectedId(variants[0]?.id);
  }, [product.id, variants]);
  useEffect(() => {
    if (!variantOpen) return;
    const close = (event) => {
      if (!pickerRef.current?.contains(event.target)) setVariantOpen(false);
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
  const item = configuredProduct(product, selected);
  const facts = productCardFacts(product);
  const collectionLabel = product.category === "Gummies" ? product.productLine : null;
  const hasVariantPicker = product.category !== "Gummies" && variants.length > 1;
  return (
    <CatalogProductCard
      id={product.id}
      to={`/product/${product.id}`}
      image={selected.image || product.image}
      imageAlt={`${product.name} ${product.type}`}
      brand={product.brand}
      contextLabel={collectionLabel}
      name={product.name}
      price={selected.price}
      className={`product-card ${product.category === "Gummies" ? "product-card--gummy" : ""} ${variantOpen ? "is-variant-open" : ""}`}
      mediaClassName="product-media"
      copyClassName="product-copy"
      metaBeforePrice={product.category === "Seltzers"}
      meta={facts.length ? (
        <span className="product-facts" aria-label={facts.join(", ")}>
          {facts.map((fact) => <span key={fact}>{fact}</span>)}
        </span>
      ) : null}
      presentation="liquidGlass"
      motionProps={{ variants: motionVariants.item, layout: "position", style: { "--accent": product.accent } }}
    >
        <div className={`card-actions ${hasVariantPicker ? "" : "card-actions--single"}`.trim()}>
          {hasVariantPicker ? <div className="variant-picker" ref={pickerRef}>
            <m.button
              type="button"
              className="variant-trigger"
              whileTap={{ scale: 0.985 }}
              aria-haspopup="listbox"
              aria-expanded={variantOpen}
              onClick={() => setVariantOpen((open) => !open)}
            >
              <span>{selected.label}</span>
              <m.span
                animate={{ rotate: variantOpen ? 180 : 0 }}
                transition={motionTokens.springSnappy}
              >
                <ChevronDown />
              </m.span>
            </m.button>
            <Presence>
              {variantOpen && (
                <m.div
                  className="variant-menu"
                  role="listbox"
                  aria-label={`${product.name} pack size`}
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.985 }}
                  transition={{
                    duration: motionTokens.duration.fast,
                    ease: motionTokens.ease,
                  }}
                >
                  {variants.map((variant) => (
                    <button
                      type="button"
                      key={variant.id}
                      role="option"
                      aria-selected={variant.id === selected.id}
                      className={variant.id === selected.id ? "active" : ""}
                      onClick={() => {
                        setSelectedId(variant.id);
                        setVariantOpen(false);
                      }}
                    >
                      <span>{variant.label}</span>
                      <b>${variant.price.toFixed(2)}</b>
                    </button>
                  ))}
                </m.div>
              )}
            </Presence>
          </div> : null}
          <m.button
            type="button"
            whileTap={{ scale: 0.86 }}
            className="add-square"
            onClick={() => add(item)}
            aria-label={`Add ${product.name}, ${selected.label}`}
          >
            <Plus />
            {!hasVariantPicker ? <span className="add-square__label">Add to cart</span> : null}
          </m.button>
        </div>
    </CatalogProductCard>
  );
}

function shopProductCardFacts(product) {
  if (product.category === "Seltzers") {
    return [];
  }
  if (product.category === "Gummies") {
    return [
      "THC Gummies",
      product.thcMgPerPiece ? `${product.thcMgPerPiece} mg THC` : null,
      product.piecesPerPackage ? `${product.piecesPerPackage} pieces` : null,
    ].filter(Boolean);
  }
  return [product.type, product.weight].filter(Boolean);
}

function ShopProductCard({ product }) {
  const { add } = useCart();
  const variants = useMemo(() => productVariants(product), [product]);
  const [selectedId, setSelectedId] = useState(variants[0]?.id);
  const [variantOpen, setVariantOpen] = useState(false);
  const pickerRef = useRef(null);
  const selected = variants.find((variant) => variant.id === selectedId) || variants[0];
  const item = configuredProduct(product, selected);
  const facts = shopProductCardFacts(product);
  const hasVariantPicker = product.category === "Seltzers" && variants.length > 1;

  useEffect(() => {
    setSelectedId(variants[0]?.id);
    setVariantOpen(false);
  }, [product.id, variants]);

  useEffect(() => {
    if (!variantOpen) return undefined;
    const close = (event) => {
      if (!pickerRef.current?.contains(event.target)) setVariantOpen(false);
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

  return (
    <CatalogProductCard
      id={product.id}
      to={`/product/${product.id}`}
      image={selected.image || product.image}
      imageAlt={`${product.name} ${product.type}`}
      brand={product.brand}
      contextLabel={null}
      name={product.name}
      price={selected.price}
      className={`product-card product-card--shop-reference ${product.category === "Gummies" ? "product-card--gummy" : ""} ${variantOpen ? "is-variant-open" : ""}`}
      mediaClassName="product-media"
      copyClassName="product-copy"
      presentation="liquidGlass"
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
          <m.button type="button" className="variant-trigger shop-card-variant-trigger" whileTap={{ scale: 0.985 }} aria-haspopup="listbox" aria-expanded={variantOpen} onClick={() => setVariantOpen((open) => !open)}>
            <span>{selected.label}</span>
            <m.span animate={{ rotate: variantOpen ? 180 : 0 }} transition={motionTokens.springSnappy} aria-hidden="true"><ChevronDown /></m.span>
          </m.button>
          <Presence>
            {variantOpen ? <m.div className="variant-menu shop-card-variant-menu" role="listbox" aria-label={`${product.name} size options`} initial={{ opacity: 0, y: -6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4, scale: 0.985 }} transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}>
              {variants.map((variant) => <button type="button" key={variant.id} role="option" aria-selected={variant.id === selected.id} className={variant.id === selected.id ? "active" : ""} onClick={() => { setSelectedId(variant.id); setVariantOpen(false); }}><span>{variant.label}</span><b>${variant.price.toFixed(2)}</b></button>)}
            </m.div> : null}
          </Presence>
        </div> : null}
        <m.button
          type="button"
          whileTap={{ scale: 0.985 }}
          className="shop-card-add"
          onClick={() => add(item)}
          aria-label={`Add ${product.name}, ${selected.label} to cart`}
        >
          <ShoppingCart className="shop-card-add__icon" aria-hidden="true" />
          <span className="shop-card-add__label">Add to cart</span>
        </m.button>
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

function HomePage() {
  return (
    <Shell>
      <section className="beverage-hero" aria-label="Featured Lagom Naturals products"><HomeHero /></section>
      <section className="lineup">
        <Reveal className="section-head">
          <div>
            <p>THE LINEUP</p>
            <h2>Four ways to find your flavor.</h2>
          </div>
          <ArrowLink to="/shop">View all drinks</ArrowLink>
        </Reveal>
        <Stagger className="drink-grid">
          {products.slice(0, 4).map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <Reveal className="find-band">
        <div>
          <p>FIND LAGOM</p>
          <h2>Meet us out in the world.</h2>
        </div>
        <p>
          Retail distribution details are being assembled. Check availability
          directly with your local retailer.
        </p>
        <ArrowLink to="/visit">Explore availability</ArrowLink>
      </Reveal>
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
              <ShopProductCard product={p} />
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
