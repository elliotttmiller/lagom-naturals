import React,{useEffect,useMemo,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {ChevronDown,Minus,Plus} from 'lucide-react'
import {m,Presence,motionTokens,motionVariants} from '@/motionSystem'
import {products} from '@/catalogData'
import Shell from '@/storefront/StorefrontShell'
import {configuredProduct,productVariants,useCart} from '@/storefront/StorefrontContext'
import useSwipeGallery from '@/storefront/useSwipeGallery'
import ResponsiveImage from '@/storefront/ResponsiveImage'

function EmptyState({title="Nothing here yet.",body="Check back soon for updated availability.",to="/shop",action="Browse products"}){return <m.div className="empty-state" initial="hidden" animate="visible" variants={motionVariants.softScale}><h2>{title}</h2><p>{body}</p>{to&&<Link className="primary-bar" to={to}>{action}</Link>}</m.div>}

function ProductPage() {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const { id } = useParams(),
    product = products.find((p) => p.id === id);
  const variants = useMemo(() => (product ? productVariants(product) : []), [product]);
  const [selectedId, setSelectedId] = useState(variants[0]?.id);
  const selectedIndex = Math.max(0, variants.findIndex((variant) => variant.id === selectedId));
  const swipeHandlers = useSwipeGallery({
    activeIndex: selectedIndex,
    itemCount: variants.length,
    onIndexChange: (index) => setSelectedId(variants[index]?.id),
  });
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
          aria-label={`${product.name} image ${selectedIndex + 1} of ${variants.length}`}
          aria-live="polite"
          aria-roledescription="carousel"
          {...swipeHandlers}
        >
          <ResponsiveImage
            key={selected.image || product.image}
            src={selected.image || product.image}
            alt={`${product.name} THC seltzer can`}
            sizes="(max-width: 899px) 100vw, 50vw"
            loading="eager"
            fetchPriority="high"
            decoding="async"
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
                <ResponsiveImage src={variant.image || product.image} alt="" sizes="96px" loading="lazy" decoding="async" />
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

export default ProductPage
