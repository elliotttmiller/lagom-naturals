import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
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
  MapPin,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Store,
  User,
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
import { products, merch, categoryCards, categoryImages } from "./catalogData";
import HamburgerToggle from "./HamburgerToggle";
import storefront from "@/assets/store/storefront-day.webp";
import hospitality from "@/assets/store/extra-store2.webp";

const MENU_DURATION = 600,
  MENU_EASE = [0.4, 0, 0.2, 1];
const CART_KEY = "lagom-beverage-cart-v1";
const DRINK_PACKS = [
  {
    id: "single",
    label: "Single",
    detail: "Single 12 fl oz can",
    price: 6.99,
  },
  { id: "4-pack", label: "4-pack", detail: "Four 12 fl oz cans", price: 19.99 },
];
const productVariants = (product) =>
  product.variants?.length
    ? product.variants
    : product.category === "Seltzers"
      ? DRINK_PACKS.map((pack) => ({
          id: pack.id,
          label: pack.label,
          detail: pack.detail,
          price: pack.price,
          image: product.image,
        }))
      : [
          {
            id: "default",
            label: product.weight || "Each",
            detail: product.weight || "Single item",
            price: product.price,
            image: product.image,
          },
        ];
const configuredProduct = (product, variant) => ({
  ...product,
  brand: product.brand || "Lagom Naturals",
  category: product.category || "Beverages",
  variantId: variant.id,
  weight: variant.detail || variant.label,
  pack: variant.label,
  price: variant.price,
  image: variant.image || product.image,
  cartKey: `${product.id}:${variant.id}`,
});
const CartContext = createContext(null);
const useCart = () => useContext(CartContext);
function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}
function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);
  const add = (item, quantity = 1) =>
    setItems((current) => {
      const key = item.cartKey || item.id;
      const existing = current.find((entry) => entry.cartKey === key);
      return existing
        ? current.map((entry) =>
            entry.cartKey === key
              ? { ...entry, qty: entry.qty + quantity }
              : entry,
          )
        : [...current, { ...item, cartKey: key, qty: quantity }];
    });
  const change = (key, qty) =>
    setItems((current) =>
      qty < 1
        ? current.filter((item) => item.cartKey !== key)
        : current.map((item) =>
            item.cartKey === key ? { ...item, qty } : item,
          ),
    );
  const remove = (key) =>
    setItems((current) => current.filter((item) => item.cartKey !== key));
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <CartContext.Provider
      value={{ items, add, change, remove, count, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
function Logo({ onClick, className = "" }) {
  return (
    <Link to="/" className={`brand ${className}`} onClick={onClick}>
      <img src="/lagom-logo.svg" alt="Lagom Naturals" />
    </Link>
  );
}
function Header({ detail = false }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false),
    [visible, setVisible] = useState(false);
  const nav = useNavigate(),
    drawerRef = useRef(null),
    closeRef = useRef(null),
    timerRef = useRef(null);
  const close = () => {
    setOpen(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), MENU_DURATION);
  };
  const toggle = (next) => {
    if (next) {
      clearTimeout(timerRef.current);
      setVisible(true);
      requestAnimationFrame(() => setOpen(true));
    } else close();
  };
  useEffect(() => () => clearTimeout(timerRef.current), []);
  useEffect(() => {
    if (!visible) return;
    const previous = document.activeElement,
      overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    const key = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const list = drawerRef.current?.querySelectorAll(
        "a[href],button:not([disabled])",
      );
      if (!list?.length) return;
      const first = list[0],
        last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [visible]);
  const links = [
    ["Shop", "/shop"],
    ["Merch", "/merch"],
    ["Find Us", "/visit"],
    ["Our Story", "/about"],
  ];
  return (
    <>
      <m.header
        className={`site-header ${detail ? "site-header--commerce" : ""}`}
        layout="position"
      >
        <div className="header-inner">
          {detail ? (
            <m.button
              type="button"
              className="icon-btn"
              whileTap={{ scale: 0.9 }}
              onClick={() => nav(-1)}
              aria-label="Back"
            >
              <ArrowLeft />
            </m.button>
          ) : (
            <HamburgerToggle
              checked={open}
              onChange={toggle}
              controls="site-navigation-drawer"
              label={open ? "Close menu" : "Open menu"}
            />
          )}
          <Logo className="header-mobile-brand" />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <div className="desktop-nav__group desktop-nav__group--left">
              {links.slice(0, 2).map(([label, to]) => (
                <NavLink key={label} to={to}>
                  {label}
                </NavLink>
              ))}
            </div>
            <Logo className="desktop-nav__brand" />
            <div className="desktop-nav__group desktop-nav__group--right">
              {links.slice(2).map(([label, to]) => (
                <NavLink key={label} to={to}>
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="header-tools">
            <Link className="icon-btn" to="/shop" aria-label="Search drinks">
              <Search />
            </Link>
            <Link className="icon-btn header-account" to="/account" aria-label="Account">
              <User />
            </Link>
            <Link
              className="icon-btn cart-icon"
              to="/cart"
              aria-label={`Cart, ${count} items`}
            >
              <ShoppingBag />
              {count > 0 && <b>{count}</b>}
            </Link>
          </div>
        </div>
      </m.header>
      {visible && (
        <m.div
          className="drawer-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.6, ease: MENU_EASE }}
          onClick={close}
        >
          <m.aside
            ref={drawerRef}
            id="site-navigation-drawer"
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: "-102%" }}
            animate={{ x: open ? 0 : "-102%" }}
            transition={{ duration: 0.6, ease: MENU_EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-top">
              <Logo onClick={close} />
              <HamburgerToggle
                ref={closeRef}
                checked={open}
                onChange={toggle}
                controls="site-navigation-drawer"
                label="Close menu"
              />
            </div>
            <m.nav
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              variants={motionVariants.stagger}
            >
              {links.map(([label, to]) => (
                <m.div key={label} variants={motionVariants.item}>
                  <Link to={to} onClick={close}>
                    {label}
                    <ChevronRight />
                  </Link>
                </m.div>
              ))}
            </m.nav>
          </m.aside>
        </m.div>
      )}
    </>
  );
}
function Shell({ children, detail = false }) {
  return (
    <div className="app-shell">
      <div className="announcement">
        HEMP-DERIVED THC · FOR ADULTS 21+ · ENJOY RESPONSIBLY
      </div>
      <Header detail={detail} />
      <main>{children}</main>
    </div>
  );
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
            alt={`${product.name} THC seltzer can`}
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
        <small>
          {product.type}
          {product.thcMgPerCan ? ` · ${product.thcMgPerCan} mg THC` : ""}
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
function MerchCard({ item }) {
  return (
    <m.div
      className="merch-card"
      layout
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.992 }}
      transition={motionTokens.springSoft}
    >
      <Link to={`/merch/${item.id}`}>
        <div className="merch-media">
          <m.img
            layoutId={`catalog-image-${item.id}`}
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
          />
          <Heart />
        </div>
        <div className="merch-copy">
          <p>Lagom Naturals</p>
          <h3>{item.name}</h3>
          <b>${item.price.toFixed(2)}</b>
          <div className="swatches" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      </Link>
    </m.div>
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
  const category = params.get("category") || "All",
    categories = ["All", "Seltzers", "Gummies"];
  const visible = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          `${p.name} ${p.flavor} ${p.category}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
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
              placeholder="Search by drink or flavor"
              aria-label="Search drinks"
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
                onClick={() => setParams(f === "All" ? {} : { category: f })}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <Stagger className="product-grid listing-grid">
          {visible.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
        {!visible.length && (
          <p className="empty-copy">No drinks match that search.</p>
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
        <m.div className="pdp-media">
          <m.img
            layoutId={`catalog-image-${product.id}`}
            src={selected.image || product.image}
            alt={`${product.name} THC seltzer can`}
            fetchPriority="high"
            decoding="async"
            transition={motionTokens.springSoft}
          />
          <div className="pdp-dots">
            <i className="active" />
          </div>
        </m.div>
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
function VisitPage() {
  return (
    <Shell>
      <section className="find-page">
        <div>
          <p>FIND LAGOM</p>
          <h1>Out in the world.</h1>
          <p>
            Verified retailer data has not been connected yet. Availability
            varies; contact retailers before making a trip.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="location">ZIP or city</label>
            <div>
              <input id="location" placeholder="Minneapolis, MN" />
              <button type="submit">SEARCH</button>
            </div>
          </form>
          <div className="availability-empty">
            <MapPin />
            <h2>Retail locator coming soon.</h2>
            <p>
              We’ll show confirmed retailers here when distribution data is
              available.
            </p>
          </div>
        </div>
        <img src={storefront} alt="Lagom Naturals storefront in Minneapolis" />
      </section>
    </Shell>
  );
}
function AboutPage() {
  return (
    <Shell>
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero__copy"><p>OUR STORY</p><h1>A little more balance in the everyday.</h1></div>
          <div className="about-hero__media"><img src={hospitality} alt="Lagom Naturals in a considered social setting" /></div>
        </section>
        <Reveal className="about-story">
          <div className="about-story__heading"><span>LAGOM / LAH-GOM</span><h2>Not too much,<br />not too little—<br /><em>just right.</em></h2></div>
          <div className="about-story__body">
            <p>Lagom is a Swedish idea about having enough: the right measure for the moment. It shapes how we think about flavor, product design, hospitality, and responsible THC use.</p>
            <p>We make drinks for adults who want another option at the table. Clear information belongs beside good taste, so the amount of THC stays visible wherever a drink appears.</p>
          </div>
        </Reveal>
        <section className="about-image"><img src={storefront} alt="Lagom Naturals storefront in Minneapolis" /></section>
        <section className="about-principles" aria-label="What guides Lagom Naturals">
          <article><span>01</span><h3>Taste leads</h3><p>Bright flavor and a crisp finish give every can its own point of view.</p></article>
          <article><span>02</span><h3>Clarity matters</h3><p>Potency and format should be easy to understand before you choose.</p></article>
          <article><span>03</span><h3>Culture lives here</h3><p>Food, music, art, and hospitality shape the occasions we design for.</p></article>
        </section>
      </main>
    </Shell>
  );
}
function LearnPage() {
  return (
    <Shell>
      <div className="editorial-page">
        <p>THC, EXPLAINED</p>
        <h1>A considered place to start.</h1>
        <section>
          <h2>What is a THC beverage?</h2>
          <p>
            Lagom is a sparkling beverage infused with hemp-derived THC. It
            contains no alcohol. Individual experiences with THC vary.
          </p>
        </section>
        <section>
          <h2>Read the can</h2>
          <p>
            Every current Lagom can image states 10 mg THC per can and 12 fl oz
            (355 mL). A verified serving size is not available in the current
            source, so this site does not infer one.
          </p>
        </section>
        <section id="responsible-use">
          <h2>Take your time</h2>
          <p>
            If you are unfamiliar with THC, begin with a lower serving and allow
            adequate time before consuming more. Effects vary based on the
            individual, dose, food intake, and other factors.
          </p>
          <p>
            Do not drive or operate machinery after consuming THC. Keep products
            away from children and pets. Follow local law and product labeling.
          </p>
        </section>
      </div>
    </Shell>
  );
}
function MerchPage() {
  return (
    <Shell>
      <div className="editorial-page">
        <p>LAGOM GOODS</p>
        <h1>Things to wear between plans.</h1>
        <Stagger className="merch-grid">
          {merch.map((item) => (
            <StaggerItem key={item.id}>
              <MerchCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Shell>
  );
}
function MerchDetailPage() {
  const { id } = useParams();
  const item = merch.find((entry) => entry.id === id);
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  if (!item)
    return (
      <Shell detail>
        <div className="merch-detail">
          <EmptyState
            title="Item not found."
            body="This apparel item may no longer be available."
            to="/merch"
            action="Browse merch"
          />
        </div>
      </Shell>
    );
  return (
    <Shell detail>
      <m.div className="merch-detail">
        <m.div className="merch-detail-media">
          <m.img
            layoutId={`catalog-image-${item.id}`}
            src={item.image}
            alt={item.name}
            transition={motionTokens.springSoft}
          />
        </m.div>
        <m.div
          initial="hidden"
          animate="visible"
          variants={motionVariants.stagger}
        >
          <m.p variants={motionVariants.item}>Lagom Naturals</m.p>
          <m.h1 variants={motionVariants.item}>{item.name}</m.h1>
          <m.h2 variants={motionVariants.item}>${item.price.toFixed(2)}</m.h2>
          <m.div variants={motionVariants.item} className="option-line">
            <b>Color: {item.color}</b>
            <div className="swatches large">
              <i />
              <i />
              <i />
              <i />
            </div>
          </m.div>
          <m.div variants={motionVariants.item}>
            <b className="option-label">Size</b>
            <div className="size-row apparel">
              {["S", "M", "L", "XL", "XXL"].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={size === option ? "active" : ""}
                  onClick={() => setSize(option)}
                >
                  {option}
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
              onClick={() =>
                add(
                  {
                    ...item,
                    brand: "Lagom Naturals",
                    category: "Merch",
                    weight: `${size} · ${item.color}`,
                    cartKey: `${item.id}:${size}:${item.color}`,
                  },
                  qty,
                )
              }
            >
              ADD TO CART
            </m.button>
          </m.div>
          {["Product Details", "Materials", "Fit", "Care", "Shipping / Pickup"].map(
            (label) => (
              <m.div variants={motionVariants.item} className="detail-row" key={label}>
                <span>{label}</span>
                <ChevronDown />
              </m.div>
            ),
          )}
        </m.div>
      </m.div>
    </Shell>
  );
}
function QuantityControl({ item }) {
  const { change } = useCart();
  return (
    <div className="quantity-control">
      <button
        type="button"
        onClick={() => change(item.cartKey, item.qty - 1)}
        aria-label={`Decrease ${item.name} quantity`}
      >
        <Minus />
      </button>
      <span aria-live="polite">{item.qty}</span>
      <button
        type="button"
        onClick={() => change(item.cartKey, item.qty + 1)}
        aria-label={`Increase ${item.name} quantity`}
      >
        <Plus />
      </button>
    </div>
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
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/merch/:id" element={<MerchDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
  );
}
