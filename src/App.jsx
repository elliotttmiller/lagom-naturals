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
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Droplet,
  Flower2,
  Heart,
  Leaf,
  Minus,
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
function ProductPage() {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const { id } = useParams(),
    product = products.find((p) => p.id === id);
  const variants = useMemo(() => (product ? productVariants(product) : []), [product]);
  const [selectedId, setSelectedId] = useState(variants[0]?.id);
  useEffect(() => {
    setSelectedId(variants[0]?.id);
  }, [product?.id, variants]);
  if (!product)
    return (
      <Shell detail>
        <div className="pdp">
          <EmptyState title="Drink not found." body="This drink may no longer be available." />
        </div>
      </Shell>
    );
  const selected = variants.find((variant) => variant.id === selectedId) || variants[0];
  const item = configuredProduct(product, selected);
  return (
    <Shell detail>
      <m.div className="pdp" style={{ "--accent": product.accent }}>
        <m.div
          className="pdp-media"
          style={{ "--pdp-image": `url("${selected.image || product.image}")` }}
        >
          <m.img
            key={selected.image || product.image}
            layoutId={`catalog-image-${product.id}`}
            src={selected.image || product.image}
            alt={`${product.name} THC seltzer can`}
            fetchPriority="high"
            decoding="async"
            transition={motionTokens.springSoft}
          />
        </m.div>
        {variants.length > 1 && (
          <div className="product-gallery" aria-label={`${product.name} product images`}>
            {variants.map((variant) => (
              <button
                type="button"
                key={variant.id}
                className={variant.id === selected.id ? "active" : ""}
                onClick={() => setSelectedId(variant.id)}
                aria-label={`Show ${variant.label.toLowerCase()} image`}
                aria-pressed={variant.id === selected.id}
              >
                <img src={variant.image || product.image} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}
        <m.div
          className="pdp-copy"
          initial="hidden"
          animate="visible"
          variants={motionVariants.stagger}
        >
          <m.p variants={motionVariants.item}>
            {product.brand}
          </m.p>
          <m.h1 variants={motionVariants.item}>{product.name}</m.h1>
          <m.h2 variants={motionVariants.item}>${selected.price.toFixed(2)}</m.h2>
          <m.div variants={motionVariants.item} className="meta-pills">
            <span>{product.type}</span>
            {product.thcMgPerCan && <span>{product.thcMgPerCan} mg THC per can</span>}
            {product.canVolume && <span>{product.canVolume}</span>}
            {product.sugar && <span>{product.sugar}</span>}
          </m.div>
          <m.p variants={motionVariants.item} className="pdp-desc">
            {product.category === "Seltzers"
              ? "Bright, sparkling, and designed around a more considered pace. Each current Lagom can shows 10 mg THC, 12 fl oz, zero sugar, and zero carbs."
              : "Lagom gummies are shown from the current product image source. Potency, ingredients, and batch details are not connected in the current catalog data."}
          </m.p>
          <m.div variants={motionVariants.item}>
            <label>Pack Size</label>
            <div className="size-row">
              {variants.map((variant) => (
                <button
                  type="button"
                  key={variant.id}
                  className={variant.id === selected.id ? "active" : ""}
                  onClick={() => setSelectedId(variant.id)}
                >
                  <span>{variant.label}</span>
                  <small>${variant.price.toFixed(2)}</small>
                </button>
              ))}
            </div>
            <div className="qty-row">
              <b>Quantity</b>
              <div>
                <m.button
                  type="button"
                  aria-label="Decrease quantity"
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <Minus />
                </m.button>
                <Presence mode="popLayout">
                  <m.span
                    key={qty}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {qty}
                  </m.span>
                </Presence>
                <m.button
                  type="button"
                  aria-label="Increase quantity"
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setQty((current) => current + 1)}
                >
                  <Plus />
                </m.button>
              </div>
            </div>
            <m.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={motionTokens.tap}
              className="primary-bar"
              onClick={() => add(item, qty)}
            >
              ADD TO CART
            </m.button>
          </m.div>
          <ProductDetailsAccordion product={product} selected={selected} />
        </m.div>
      </m.div>
    </Shell>
  );
}
function ProductDetailsAccordion({ product, selected }) {
  const [open, setOpen] = useState("details");
  const rows = [
    {
      id: "details",
      label: "Product Details",
      content: (
        <div className="pdp-detail-grid">
          <span>
            <b>Brand</b>
            <small>{product.brand}</small>
          </span>
          <span>
            <b>Category</b>
            <small>THC Beverages</small>
          </span>
          <span>
            <b>Format</b>
            <small>{product.type}</small>
          </span>
          <span>
            <b>Package Size</b>
            <small>{selected.detail || selected.label}</small>
          </span>
        </div>
      ),
    },
    {
      id: "potency",
      label: "Potency & Cannabinoids",
      content: (
        <p>
          {product.thcMgPerCan
            ? `${product.thcMgPerCan} mg THC per can.`
            : "Potency details are not connected in the current catalog data."}
        </p>
      ),
    },
    {
      id: "nutrition",
      label: "Nutrition",
      content: (
        <p>
          {product.sugar && product.carbs
            ? `Current product imagery states ${product.sugar.toLowerCase()} and ${product.carbs.toLowerCase()}. `
            : ""}
          Full ingredients and nutrition facts are not connected in the current
          product source.
        </p>
      ),
    },
    {
      id: "responsible",
      label: "Responsible Use",
      content: (
        <p>
          Start with a lower serving if you are unfamiliar with THC. Allow
          adequate time before consuming more. Do not drive or operate
          machinery. Keep away from children and pets.
        </p>
      ),
    },
  ];
  return (
    <m.div className="pdp-details" variants={motionVariants.item}>
      {rows.map((row) => {
        const expanded = open === row.id;
        return (
          <div
            className={`pdp-detail-item${expanded ? " is-open" : ""}`}
            key={row.id}
          >
            <button
              type="button"
              className="pdp-detail-trigger"
              aria-expanded={expanded}
              aria-controls={`pdp-detail-${row.id}`}
              onClick={() => setOpen(expanded ? null : row.id)}
            >
              <span>{row.label}</span>
              <m.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={motionTokens.springSnappy}
              >
                <ChevronDown />
              </m.span>
            </button>
            <Presence initial={false}>
              {expanded && (
                <m.div
                  id={`pdp-detail-${row.id}`}
                  className="pdp-detail-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: motionTokens.duration.base,
                    ease: motionTokens.ease,
                  }}
                >
                  <div>{row.content}</div>
                </m.div>
              )}
            </Presence>
          </div>
        );
      })}
    </m.div>
  );
}
function CartPage() {
  const { items, change, remove, subtotal } = useCart();
  return (
    <Shell>
      <div className="cart-page">
        <Reveal>
          <h1>
            Your Cart <span>({items.length})</span>
          </h1>
        </Reveal>
        {!items.length ? (
          <EmptyState
            title="Your cart is empty."
            body="Browse the current selection and add something that feels just right."
          />
        ) : (
          <>
            <m.div className="cart-list" layout>
              <Presence mode="popLayout">
                {items.map((item) => (
                  <m.div
                    className="cart-row"
                    key={item.cartKey}
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -18, scale: 0.97 }}
                    transition={motionTokens.springSoft}
                  >
                  <img src={item.image} alt="" />
                  <div className="cart-item-copy">
                    <p>{item.brand || "Lagom Naturals"}</p>
                    <b>{item.name}</b>
                    <small>{item.weight || item.pack || item.color}</small>
                  </div>
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                  <div className="cart-qty">
                    <m.button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => change(item.cartKey, item.qty - 1)}
                    >
                      <Minus />
                    </m.button>
                    <Presence mode="popLayout">
                      <m.span
                        key={item.qty}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                      >
                        {item.qty}
                      </m.span>
                    </Presence>
                    <m.button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => change(item.cartKey, item.qty + 1)}
                    >
                      <Plus />
                    </m.button>
                  </div>
                  <m.button
                    type="button"
                    whileTap={{ scale: 0.8 }}
                    className="remove"
                    onClick={() => remove(item.cartKey)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ×
                  </m.button>
                </m.div>
                ))}
              </Presence>
            </m.div>
            <Reveal>
              <textarea aria-label="Order note" placeholder="Add a note (optional)" />
              <m.div className="totals" layout>
                <p>
                  <span>Subtotal</span>
                  <b>${subtotal.toFixed(2)}</b>
                </p>
                <p>
                  <span>Estimated taxes</span>
                  <b>${(subtotal * 0.08).toFixed(2)}</b>
                </p>
              </m.div>
              <div className="pickup-row">
                <span>
                  <b>Lagom online ordering</b>
                  <small>
                    Availability, eligibility, and fulfillment are confirmed
                    before completion.
                  </small>
                </span>
                <button type="button">Change</button>
              </div>
              <m.div whileHover={{ y: -2 }} whileTap={motionTokens.tap}>
                <Link className="primary-bar linkbar" to="/checkout">
                  CONTINUE
                </Link>
              </m.div>
            </Reveal>
          </>
        )}
      </div>
    </Shell>
  );
}
function CheckoutPage() {
  const { items } = useCart();
  const [step, setStep] = useState(1);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (!items.length)
    return (
      <Shell>
        <div className="checkout-page">
          <h1>Checkout</h1>
          <EmptyState title="Your cart is empty." body="Add products before continuing." />
        </div>
      </Shell>
    );
  return (
    <Shell>
      <div className="checkout-page">
        <Link className="checkout-back" to="/cart">
          <ArrowLeft /> Back to cart
        </Link>
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <span className={step >= 1 ? "active" : ""}>
            1 <b>DETAILS</b>
          </span>
          <i />
          <span className={step >= 2 ? "active" : ""}>
            2 <b>REVIEW</b>
          </span>
        </div>
        <div className="checkout-layout">
          <div className="checkout-workflow">
            <Presence mode="wait">
              <m.div
                key={step}
                className="checkout-step"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{
                  duration: motionTokens.duration.base,
                  ease: motionTokens.ease,
                }}
              >
                {step === 1 && (
                  <>
                    <section className="checkout-section">
                      <div className="checkout-section__heading">
                        <span>01</span>
                        <div>
                          <h2>Contact information</h2>
                          <p>We’ll use this email for order communication.</p>
                        </div>
                      </div>
                      <label className="checkout-field">
                        Email address
                        <input
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                        />
                      </label>
                      <label className="checkbox">
                        <input type="checkbox" /> Send me order updates
                      </label>
                    </section>

                    <section className="checkout-section">
                      <div className="checkout-section__heading">
                        <span>02</span>
                        <div>
                          <h2>Fulfillment</h2>
                          <p>Final options are confirmed before completion.</p>
                        </div>
                      </div>
                      <m.div layout className="method-card active">
                        <Store />
                        <span>
                          <b>Online order</b>
                          <small>Fulfillment details confirmed before completion</small>
                        </span>
                      </m.div>
                      <div className="pickup-card">
                        <span>
                          <b>Availability</b>
                          <small>
                            Shipping, pickup, and age eligibility require backend
                            connection.
                          </small>
                        </span>
                        <Link to="/visit">View locations <ChevronRight /></Link>
                      </div>
                    </section>

                    <m.button
                      type="button"
                      whileHover={{ y: -2 }}
                      whileTap={motionTokens.tap}
                      className="primary-bar"
                      onClick={() => setStep(2)}
                    >
                      Review order <ArrowRight />
                    </m.button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <section className="checkout-section checkout-section--review">
                      <div className="checkout-section__heading">
                        <span>02</span>
                        <div>
                          <h2>Review your order</h2>
                          <p>Confirm the available details before continuing.</p>
                        </div>
                      </div>
                      <div className="pickup-card">
                        <span>
                          <b>Payment connection required</b>
                          <small>
                            Current payment processing is not connected in this
                            frontend build.
                          </small>
                        </span>
                      </div>
                      <p className="muted">
                        Final inventory, taxes, shipping eligibility, age checks,
                        and payment are confirmed by the commerce backend before
                        any order can be submitted.
                      </p>
                    </section>
                    <div className="checkout-review-actions">
                      <button type="button" onClick={() => setStep(1)}>
                        <ArrowLeft /> Edit details
                      </button>
                      <m.button
                        type="button"
                        whileTap={motionTokens.tap}
                        className="primary-bar"
                        disabled
                      >
                        Payment required
                      </m.button>
                    </div>
                  </>
                )}
              </m.div>
            </Presence>
          </div>

          <aside className="checkout-summary" aria-labelledby="checkout-summary-title">
            <div className="checkout-summary__heading">
              <h2 id="checkout-summary-title">Order summary</h2>
              <Link to="/cart">Edit cart</Link>
            </div>
            <div className="checkout-summary__items">
              {items.map((item) => (
                <article className="checkout-summary__item" key={item.cartKey || item.id}>
                  <div className="checkout-summary__media">
                    <img src={item.image} alt="" />
                    <span>{item.qty}</span>
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.weight || item.pack || item.category}</small>
                  </div>
                  <b>${(item.price * item.qty).toFixed(2)}</b>
                </article>
              ))}
            </div>
            <div className="checkout-summary__totals">
              <p><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></p>
              <p><span>Shipping and taxes</span><small>Calculated at confirmation</small></p>
            </div>
            <p className="checkout-summary__notice">
              Must be 21+ to purchase. Final eligibility and availability are
              confirmed before completion.
            </p>
          </aside>
        </div>
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
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/visit" element={<React.Suspense fallback={<RouteChunkFallback/>}><VisitPage /></React.Suspense>} />
        <Route path="/about" element={<React.Suspense fallback={<RouteChunkFallback/>}><AboutPage /></React.Suspense>} />
        <Route path="/learn" element={<React.Suspense fallback={<RouteChunkFallback/>}><LearnPage /></React.Suspense>} />
        <Route path="/merch" element={<React.Suspense fallback={<RouteChunkFallback/>}><MerchPage /></React.Suspense>} />
        <Route path="/merch/:id" element={<React.Suspense fallback={<RouteChunkFallback/>}><MerchDetailPage /></React.Suspense>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
  );
}
