import React from "react";
import { Link } from "react-router-dom";
import { m, motionTokens } from "@/motionSystem";
import ResponsiveImage from "@/storefront/ResponsiveImage";

export default function CatalogProductCard({
  id,
  to,
  image,
  imageAlt,
  contextLabel,
  name,
  price,
  className = "",
  mediaClassName = "",
  copyClassName = "",
  children,
  meta,
  metaBeforePrice = false,
  reviewStatus = "No reviews",
  motionProps = {},
  ctaLabel = "View",
  showPrice = true,
  ribbonLabel = null,
  compactPurchase = false,
}) {
  return (
    <m.article
      className={`catalog-card cpc-13 ${className}`.trim()}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.992 }}
      transition={motionTokens.springSoft}
      {...motionProps}
    >
      <div className="cpc-13__card">
        {ribbonLabel ? <span className="cpc-13__ribbon">{ribbonLabel}</span> : null}
        {contextLabel ? <span className="cpc-13__pill">{contextLabel}</span> : null}
        <div className={`cpc-13__img ${mediaClassName}`.trim()}>
          <Link to={to} aria-label={`View ${name}`}>
            <ResponsiveImage
              src={image}
              alt={imageAlt || name}
              sizes="(max-width: 899px) 50vw, 25vw"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>
        <div className={`cpc-13__body ${copyClassName}`.trim()}>
          <h3 className="cpc-13__name"><Link to={to}>{name}</Link></h3>
          {reviewStatus ? <p className="cpc-13__rating">{reviewStatus}</p> : null}
          {metaBeforePrice && meta ? <div className="cpc-13__meta">{meta}</div> : null}
          {compactPurchase ? <div className="cpc-13__compact-purchase">
            {showPrice ? <div className="cpc-13__prices"><span className="cpc-13__now">{Number.isFinite(price) ? `$${price.toFixed(2)}` : "Pricing coming soon"}</span></div> : null}
            {children ? <div className="cpc-13__footer">{children}</div> : <Link className="cpc-13__cta" to={to}>{ctaLabel}</Link>}
          </div> : <>
            {showPrice ? <div className="cpc-13__prices"><span className="cpc-13__now">{Number.isFinite(price) ? `$${price.toFixed(2)}` : "Pricing coming soon"}</span></div> : null}
            {!metaBeforePrice && meta ? <div className="cpc-13__meta">{meta}</div> : null}
            {children ? <div className="cpc-13__footer">{children}</div> : <Link className="cpc-13__cta" to={to}>{ctaLabel}</Link>}
          </>}
        </div>
      </div>
    </m.article>
  );
}
