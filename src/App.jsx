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
  useSearchParams,
} from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Droplet,
  Flower2,
  Heart,
  Leaf,
  Plus,
  Search,
  Store,
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
import {
  CartProvider,
  configuredProduct,
  productVariants,
  useCart,
} from "@/storefront/StorefrontContext";

const VisitPage=React.lazy(()=>import("./routes/VisitPage"));
const AboutPage=React.lazy(()=>import("./routes/AboutPage"));
const LearnPage=React.lazy(()=>import("./routes/LearnPage"));
const MerchPage=React.lazy(()=>import("./routes/MerchRoutes").then(module=>({default:module.MerchPage})));
const MerchDetailPage=React.lazy(()=>import("./routes/MerchRoutes").then(module=>({default:module.MerchDetailPage})));
const CartPage=React.lazy(()=>import("./routes/CommerceRoutes").then(module=>({default:module.CartPage})));
const CheckoutPage=React.lazy(()=>import("./routes/CommerceRoutes").then(module=>({default:module.CheckoutPage})));
const ProductPage=React.lazy(()=>import("./routes/ProductPage"));

function RouteChunkFallback(){
  return <Shell><div className="route-chunk-fallback" role="status" aria-live="polite" aria-busy="true"><span>Loading…</span></div></Shell>
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
  const to = `/shop?category=${encodeURIComponent(name)}`;
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
        className={`category-card${img ? " has-image" : ""}`}
        to={to}
        aria-label={`Shop ${label}`}
      >
        {img ? (
          <span className="category-card__media">
            <m.img
              src={img}
              alt=""
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.025 }}
              transition={motionTokens.springSoft}
            />
          </span>
        ) : (
          <div className="category-symbol">{label.slice(0, 2).toUpperCase()}</div>
        )}
        <span className="category-card__content">
          <span className="category-card__copy">
            <strong>{label}</strong>
            <small>{description}</small>
          </span>
          <span className="category-card__action" aria-hidden="true">
            <ArrowRight />
          </span>
        </span>
      </Link>
    </m.div>
  );
}
function productCardFacts(product) {
  const facts = [];

  if (product.flavor) facts.push(product.flavor);

  if (product.category === "Seltzers") {
    if (product.canVolume) facts.push(product.canVolume.replace(/\s*\([^)]*\)$/, ""));
    if (product.thcMgPerCan) facts.push(`${product.thcMgPerCan} mg THC / can`);
  } else {
    if (product.productLine && product.productLine !== "Classic") facts.push(product.productLine);
    if (product.weight) facts.push(product.weight);
  }

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
  return (
    <m.article
      className={`product-card ${variantOpen ? "is-variant-open" : ""}`}
      variants={motionVariants.item}
      layout="position"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.992 }}
      transition={motionTokens.springSoft}
      style={{ "--accent": product.accent }}
    >
      <div className="product-media">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <m.img
            layoutId={`catalog-image-${product.id}`}
            src={selected.image || product.image}
            alt={`${product.name} ${product.type}`}
            loading="lazy"
            decoding="async"
            transition={motionTokens.springSoft}
          />
        </Link>
        <m.button
          type="button"
          whileTap={{ scale: 0.82 }}
          className="heart-btn"
          aria-label={`Save ${product.name}`}
        >
          <Heart />
        </m.button>
      </div>
      <div className="product-copy">
        <p>{product.brand}</p>
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <small className="product-facts" aria-label={facts.join(", ")}>
          {facts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </small>
        <b>${selected.price.toFixed(2)}</b>
        <div className="card-actions">
          <div className="variant-picker" ref={pickerRef}>
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
          </div>
          <m.button
            type="button"
            whileTap={{ scale: 0.86 }}
            className="add-square"
            onClick={() => add(item)}
            aria-label={`Add ${product.name}, ${selected.label}`}
          >
            <Plus />
          </m.button>
        </div>
      </div>
    </m.article>
  );
}
function EmptyState({
  title = "Nothing here yet.",
  body = "Check back soon for updated availability.",
  to = "/shop",
  action = "Browse products",
}) {
  return (
    <m.div
      className="empty-state"
      initial="hidden"
      animate="visible"
      variants={motionVariants.softScale}
    >
      <h2>{title}</h2>
      <p>{body}</p>
      {to && (
        <Link className="primary-bar" to={to}>
          {action}
        </Link>
      )}
    </m.div>
  );
}
function HomePage() {
  return (
    <Shell>
      <section className="beverage-hero">
        <div className="beverage-hero__copy">
          <m.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionTokens.springSoft}
          >
            Find your
            <br />
            <em>just right.</em>
          </m.h1>
          <m.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Crisp, zero-sugar THC seltzers for a more measured social ritual.
          </m.p>
          <m.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/shop">
              SHOP THE DRINKS <ArrowRight />
            </Link>
            <Link to="/about">OUR STORY</Link>
          </m.div>
        </div>
        <div className="beverage-hero__proof" aria-label="Product highlights">
          <span>
            <Heart aria-hidden="true" />
            ZERO<br />SUGAR
          </span>
          <span>
            <Leaf aria-hidden="true" />
            REAL<br />FLAVOR
          </span>
          <span>
            <Flower2 aria-hidden="true" />
            10MG<br />THC
          </span>
          <span>
            <Droplet aria-hidden="true" />
            GOOD<br />VIBES
          </span>
        </div>
        <m.div
          className="beverage-hero__cans"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.68, ease: motionTokens.ease }}
        >
          {products.map((p, i) => (
            <img
              key={p.id}
              src={p.image}
              alt=""
              aria-hidden="true"
              style={{ "--i": i, "--accent": p.accent }}
            />
          ))}
        </m.div>
        <p className="beverage-hero__note">10 mg THC per can · 12 fl oz</p>
      </section>
      <section className="lineup">
        <Reveal className="section-head">
          <div>
            <p>THE LINEUP</p>
            <h2>Four ways to find your flavor.</h2>
          </div>
          <ArrowLink to="/shop">View all drinks</ArrowLink>
        </Reveal>
        <Stagger className="drink-grid">
          {products.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="occasion">
        <img src={hospitality} alt="A warm, contemporary hospitality setting" />
        <Reveal>
          <p>THE OCCASION</p>
          <h2>Made for the space between plans.</h2>
          <p>
            A zero-alcohol option for dinners, listening sessions, long
            conversations, and wherever the evening settles in.
          </p>
        </Reveal>
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
  const [params, setParams] = useSearchParams(),
    [query, setQuery] = useState("");
  const requestedCategory = params.get("category") || "All";
  const requestedCollection = params.get("collection") || "All";
  const categories = ["All", "Seltzers", "Gummies"];
  const category = categories.includes(requestedCategory) ? requestedCategory : "All";
  const collection = gummyCollections.some(({ name }) => name === requestedCollection)
    ? requestedCollection
    : "All";
  const showGummyCollections = category === "Gummies";
  const updateFilters = (nextCategory, nextCollection = "All") => {
    const next = new URLSearchParams();
    if (nextCategory !== "All") next.set("category", nextCategory);
    if (nextCategory === "Gummies" && nextCollection !== "All") {
      next.set("collection", nextCollection);
    }
    setParams(next);
  };
  const visible = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (collection === "All" || p.productLine === collection) &&
          `${p.name} ${p.flavor} ${p.category} ${p.productLine || ""}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, collection, query],
  );
  return (
    <Shell>
      <div className="shop-page">
        <Reveal>
          <label className="shop-search">
            <Search />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search seltzers, gummies, or flavor"
              aria-label="Search products"
            />
          </label>
        </Reveal>
        {!query.trim() && category === "All" && (
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
        <Reveal>
          <SectionTitle
            title={
              query.trim()
                ? `Search Results (${visible.length})`
                : collection !== "All"
                  ? `${collection} Gummies`
                  : category === "All"
                    ? "Featured Products"
                    : category
            }
          />
          <div className="chips" aria-label="Filter by category">
            {categories.map((f) => (
              <button
                type="button"
                key={f}
                className={category === f ? "active" : ""}
                onClick={() => updateFilters(f)}
              >
                {f}
              </button>
            ))}
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
