import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { m, motionTokens } from "@/motionSystem";
import ResponsiveImage from "@/storefront/ResponsiveImage";

export default function CatalogProductCard({
  id,
  to,
  image,
  imageAlt,
  brand = "Lagom Naturals",
  contextLabel,
  name,
  price,
  className = "",
  mediaClassName = "",
  copyClassName = "",
  children,
  meta,
  metaBeforePrice = false,
  reviewStatus = null,
  motionProps = {},
}) {
  return (
    <m.article
      className={`catalog-card unified-product-card ${className}`.trim()}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.992 }}
      transition={motionTokens.springSoft}
      {...motionProps}
    >
      <div className={`catalog-card__media unified-product-card__media ${mediaClassName}`.trim()}>
        <Link to={to} aria-label={`View ${name}`}>
          <ResponsiveImage
            src={image}
            alt={imageAlt || name}
            sizes="(max-width: 899px) 50vw, 25vw"
            loading="lazy"
            decoding="async"
          />
        </Link>
        <m.button type="button" whileTap={{ scale: 0.82 }} className="heart-btn" aria-label={`Save ${name}`}>
          <Heart />
        </m.button>
      </div>
      <div className={`unified-product-card__copy ${copyClassName}`.trim()}>
        {contextLabel ? (
          <span className="unified-product-card__context">{contextLabel}</span>
        ) : (
          <p>{brand}</p>
        )}
        <div className="unified-product-card__title-row">
          <h3><Link to={to}>{name}</Link></h3>
          {reviewStatus ? <span className="review-line product-card__review">{reviewStatus}</span> : null}
        </div>
        <div className="unified-product-card__pricing">
          {metaBeforePrice && meta ? <small className="unified-product-card__meta">{meta}</small> : null}
          <b>{Number.isFinite(price) ? `$${price.toFixed(2)}` : "Pricing coming soon"}</b>
          {!metaBeforePrice && meta ? <small className="unified-product-card__meta">{meta}</small> : null}
        </div>
        {children ? <div className="unified-product-card__footer">{children}</div> : null}
      </div>
    </m.article>
  );
}
