import React,{useEffect,useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {ChevronDown,Minus,Plus} from 'lucide-react'
import {m,Presence,Stagger,StaggerItem,motionTokens,motionVariants} from '@/motionSystem'
import {merch} from '@/catalogData'
import Shell from '@/storefront/StorefrontShell'
import {useCart} from '@/storefront/StorefrontContext'
import useSwipeGallery from '@/storefront/useSwipeGallery'
import CatalogProductCard from '@/storefront/CatalogProductCard'
import ResponsiveImage from '@/storefront/ResponsiveImage'
import '@/styles/mobile/70-editorial.css'
import '@/styles/merch-page-redesign.css'

const brandLogo = `${import.meta.env.BASE_URL}lagom-logo.svg`

function EmptyState({title="Nothing here yet.",body="Check back soon for updated availability.",to="/shop",action="Browse products"}){return <m.div className="empty-state" initial="hidden" animate="visible" variants={motionVariants.softScale}><h2>{title}</h2><p>{body}</p>{to&&<Link className="primary-bar" to={to}>{action}</Link>}</m.div>}

function MerchCard({ item }) {
  const meta = [item.color, item.sizeType || (item.sizes?.length ? `${item.sizes[0]}–${item.sizes[item.sizes.length - 1]}` : null)].filter(Boolean).join(" · ");
  return (
    <CatalogProductCard id={item.id} to={`/merch/${item.id}`} image={item.image} imageAlt={item.name} name={item.name} price={item.price} meta={meta} className="merch-card" mediaClassName="merch-media" copyClassName="merch-copy" motionProps={{ layout: true }} />
  );
}

function MerchPage() {
  return (
    <Shell>
      <div className="editorial-page">
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
  const gallery = item?.gallery?.length
    ? item.gallery
    : item
      ? [{ src: item.image, label: "Product view", alt: item.name }]
      : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const swipeHandlers = useSwipeGallery({
    activeIndex: activeImageIndex,
    itemCount: gallery.length,
    onIndexChange: setActiveImageIndex,
  });
  useEffect(() => {
    setActiveImageIndex(0);
    setSize(item?.sizes?.includes("M") ? "M" : item?.sizes?.[0] ?? null);
  }, [item?.id]);
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
  const activeImage = gallery[activeImageIndex] ?? gallery[0];
  const hasPrice = Number.isFinite(item.price);
  const hasSizes = item.sizes?.length > 0;
  return (
    <Shell detail>
      <m.div className="merch-detail">
        <div className="merch-detail-visual">
          <m.div
            className="merch-detail-media"
            aria-label={`${item.name} image ${activeImageIndex + 1} of ${gallery.length}`}
            aria-live="polite"
            aria-roledescription="carousel"
            {...swipeHandlers}
          >
            <ResponsiveImage
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              sizes="(max-width: 899px) 100vw, 50vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </m.div>
          <m.div variants={motionVariants.item} className="merch-gallery" aria-label="Product images">
            {gallery.map((image, index) => (
              <button
                type="button"
                key={image.src}
                className={activeImageIndex === index ? "active" : ""}
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Show ${image.label.toLowerCase()}`}
                aria-pressed={activeImageIndex === index}
              >
                <ResponsiveImage src={image.src} alt="" sizes="96px" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              </button>
            ))}
          </m.div>
        </div>
        <m.div
          className="merch-detail-copy"
          initial="hidden"
          animate="visible"
          variants={motionVariants.stagger}
        >
          <m.img variants={motionVariants.item} className="merch-brand" src={brandLogo} alt="Lagom Naturals" width="2048" height="682" />
          <m.h1 variants={motionVariants.item}>{item.name}</m.h1>
          <m.h2 variants={motionVariants.item}>
            {hasPrice ? `$${item.price.toFixed(2)}` : "Pricing coming soon"}
          </m.h2>
          <m.div variants={motionVariants.item} className="option-line">
            <b>Color: {item.color}</b>
            <div className="swatches large">
              <i style={{ backgroundColor: "#111" }} />
            </div>
          </m.div>
          {hasSizes && <m.div variants={motionVariants.item}>
            <b className="option-label">Size</b>
            <div className="size-row apparel">
              {item.sizes.map((option) => (
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
          </m.div>}
          {hasPrice ? <m.div variants={motionVariants.item}>
            <div className="qty-row merch-quantity">
              <b>Quantity</b>
              <div role="group" aria-label="Product quantity">
              <m.button
                type="button"
                aria-label="Decrease quantity"
                disabled={qty <= 1}
                whileTap={{ scale: 0.88 }}
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                <Minus />
              </m.button>
              <Presence mode="popLayout">
                <m.span
                  key={qty}
                  aria-live="polite"
                  aria-atomic="true"
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
                    weight: [size, item.color].filter(Boolean).join(" · "),
                    cartKey: `${item.id}:${size ?? "standard"}:${item.color}`,
                  },
                  qty,
                )
              }
            >
              ADD TO CART
            </m.button>
          </m.div> : <m.p variants={motionVariants.item} className="merch-unavailable">
            Price and purchase availability have not been provided for this item.
          </m.p>}
          {[
            {
              label: "Product Details",
              body: item.description,
              items: item.construction,
            },
            {
              label: "Materials",
              items: item.materials,
            },
            {
              label: "Fit",
              items: item.fit,
            },
            {
              label: "Manufacturing",
              items: item.manufacturing,
            },
          ]
            .filter((section) => section.body || section.items?.length)
            .map((section) => (
              <m.details variants={motionVariants.item} className="merch-detail-section" key={section.label}>
                <summary>
                  <span>{section.label}</span>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <div className="merch-detail-section__content">
                  {section.body && <p>{section.body}</p>}
                  {section.items?.length > 0 && (
                    <ul>
                      {section.items.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              </m.details>
            ))}
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

export {MerchPage,MerchDetailPage}
