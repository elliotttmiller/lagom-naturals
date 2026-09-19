import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { m, motionTokens } from "@/motionSystem";

export default function CatalogProductCard({
  id,
  to,
  image,
  imageAlt,
  brand = "Lagom Naturals",
  name,
  price,
  className = "",
  mediaClassName = "",
  copyClassName = "",
  children,
  meta,
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
          <m.img
            layoutId={`catalog-image-${id}`}
            src={image}
            alt={imageAlt || name}
            loading="lazy"
            decoding="async"
            transition={motionTokens.springSoft}
          />
        </Link>
        <m.button type="button" whileTap={{ scale: 0.82 }} className="heart-btn" aria-label={`Save ${name}`}>
          <Heart />
        </m.button>
      </div>
      <div className={`unified-product-card__copy ${copyClassName}`.trim()}>
        <p>{brand}</p>
        <h3><Link to={to}>{name}</Link></h3>
        <b>{Number.isFinite(price) ? `$${price.toFixed(2)}` : "Pricing coming soon"}</b>
        {meta ? <small className="unified-product-card__meta">{meta}</small> : null}
        {children}
      </div>
    </m.article>
  );
}
