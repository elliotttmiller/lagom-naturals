import React,{useEffect,useMemo,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {ChevronDown,Minus,Plus} from 'lucide-react'
import {m,Presence,motionTokens,motionVariants} from '@/motionSystem'
import {products} from '@/catalogData'
import Shell from '@/storefront/StorefrontShell'
import {configuredProduct,productVariants,useCart} from '@/storefront/StorefrontContext'
import useSwipeGallery from '@/storefront/useSwipeGallery'
import ResponsiveImage from '@/storefront/ResponsiveImage'
import '@/styles/mobile/50-pdp.css'
import '@/styles/product-page-redesign.css'

const brandLogo = `${import.meta.env.BASE_URL}lagom-logo.svg`

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
          <m.div variants={motionVariants.item} className="pdp-product-heading">
            <img className="pdp-brand" src={brandLogo} alt={product.brand || 'Lagom Naturals'} width="2048" height="682" />
            <h1>{product.name}</h1>
            <div className="pdp-facts" aria-label="Product facts">
              {product.thcMgPerCan && <span>{product.thcMgPerCan} mg THC per can</span>}
              {product.thcMgPerPiece && <span>{product.thcMgPerPiece} mg THC per gummy</span>}
              {product.cbdMgPerPiece && <span>{product.cbdMgPerPiece} mg CBD per gummy</span>}
              {product.canVolume && <span>{product.canVolume}</span>}
              {product.piecesPerPackage && <span>{product.piecesPerPackage} gummies</span>}
              {product.sugar && <span>{product.sugar}</span>}
            </div>
          </m.div>
          <m.p variants={motionVariants.item} className="pdp-desc">
            {product.description}
          </m.p>
          <m.div variants={motionVariants.item} className="pdp-purchase">
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
  const isSeltzer = product.category === "Seltzers";

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
            <small>{isSeltzer ? "THC Beverages" : "THC Gummies"}</small>
          </span>
          <span>
            <b>Format</b>
            <small>{product.type}</small>
          </span>
          <span>
            <b>Package Size</b>
            <small>{selected.detail || selected.label}</small>
          </span>
          {product.flavor && (
            <span>
              <b>Flavor</b>
              <small>{product.flavor}</small>
            </span>
          )}
          {product.collectionName && (
            <span>
              <b>Collection</b>
              <small>{product.collectionName}</small>
            </span>
          )}
          {product.strainType && (
            <span>
              <b>Type</b>
              <small>{product.strainType}</small>
            </span>
          )}
        </div>
      ),
    },
    {
      id: "potency",
      label: "Potency & Cannabinoids",
      content: (
        <div className="pdp-detail-grid">
          {product.thcMgPerCan && (
            <span>
              <b>THC</b>
              <small>{product.thcMgPerCan} mg per can</small>
            </span>
          )}
          {product.thcMgPerPiece && (
            <span>
              <b>THC</b>
              <small>{product.thcMgPerPiece} mg per gummy</small>
            </span>
          )}
          {product.thcMgPerPackage && (
            <span>
              <b>Total THC</b>
              <small>{product.thcMgPerPackage} mg per pouch</small>
            </span>
          )}
          {product.cbdMgPerPiece && (
            <span>
              <b>CBD</b>
              <small>{product.cbdMgPerPiece} mg per gummy</small>
            </span>
          )}
        </div>
      ),
    },
    isSeltzer && {
      id: "nutrition",
      label: "Nutrition & Dietary",
      content: (
        <div className="pdp-detail-copy">
          <ul>
            {product.nutritionFacts?.map((fact) => <li key={fact}>{fact}</li>)}
            {product.dietary?.map((fact) => <li key={fact}>{fact}</li>)}
            {product.formulationHighlights?.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
      ),
    },
    !isSeltzer && product.productDetails?.length > 0 && {
      id: "gummy-facts",
      label: "Gummy Details",
      content: (
        <div className="pdp-detail-copy">
          <ul>
            {product.productDetails.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
      ),
    },
    !isSeltzer && product.testingAndPackaging?.length > 0 && {
      id: "testing",
      label: "Testing & Packaging",
      content: (
        <div className="pdp-detail-copy">
          <ul>
            {product.testingAndPackaging.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
      ),
    },
    {
      id: "responsible",
      label: "Responsible Use",
      content: (
        <p>
          {product.responsibleUse ||
            (product.thcMgPerPiece
              ? `Each gummy contains ${product.thcMgPerPiece} mg THC. If you are new to THC or prefer a lower amount, start with less and allow adequate time before consuming more. Do not drive or operate machinery after consuming THC. Keep away from children and pets.`
              : "Use responsibly. Do not drive or operate machinery after consuming THC. Keep away from children and pets.")}
        </p>
      ),
    },
  ].filter(Boolean);

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
