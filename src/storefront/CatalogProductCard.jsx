import React from "react";
import {Link} from "react-router-dom";
import {m,motionTokens} from "@/motionSystem";
import ResponsiveImage from "@/storefront/ResponsiveImage";

export default function CatalogProductCard({
  id,
  to,
  image,
  imageAlt,
  mediaNode,
  contextLabel,
  name,
  price,
  className="",
  mediaClassName="",
  copyClassName="",
  children,
  meta,
  metaBeforePrice=false,
  reviewStatus="No reviews",
  motionProps={},
  ctaLabel="View",
  showPrice=true,
  ribbonLabel=null,
  compactPurchase=false,
}){
  const priceNode=showPrice?<div className="cpc-13__prices editorial-product-card__price"><span className="cpc-13__now">{Number.isFinite(price)?"$"+price.toFixed(2):"Pricing coming soon"}</span></div>:null;

  return <m.article
    className={"catalog-card cpc-13 editorial-product-card "+className}
    transition={motionTokens.springSoft}
    {...motionProps}
  >
    <div className="cpc-13__card editorial-product-card__card">
      <div className={"cpc-13__img editorial-product-card__media "+mediaClassName}>
        {ribbonLabel?<span className="cpc-13__ribbon editorial-product-card__ribbon">{ribbonLabel}</span>:null}
        <Link to={to} aria-label={"View "+name}>
          {mediaNode || <ResponsiveImage src={image} alt={imageAlt||name} sizes="(max-width: 899px) 50vw, 25vw" loading="lazy" decoding="async"/>}
        </Link>
      </div>

      <div className={"cpc-13__body editorial-product-card__body "+copyClassName}>
        <div className="editorial-product-card__heading">
          {contextLabel?<span className="cpc-13__pill editorial-product-card__eyebrow">{contextLabel}</span>:null}
          <h3 className="cpc-13__name editorial-product-card__name"><Link to={to}>{name}</Link></h3>
        </div>

        {reviewStatus?<p className="cpc-13__rating editorial-product-card__description">{reviewStatus}</p>:null}
        {metaBeforePrice&&meta?<div className="cpc-13__meta editorial-product-card__meta">{meta}</div>:null}

        {compactPurchase?<div className="cpc-13__compact-purchase editorial-product-card__commerce">
          {priceNode}
          {children?<div className="cpc-13__footer">{children}</div>:<Link className="cpc-13__cta editorial-product-card__cta" to={to}>{ctaLabel}</Link>}
        </div>:<>
          {priceNode}
          {!metaBeforePrice&&meta?<div className="cpc-13__meta editorial-product-card__meta">{meta}</div>:null}
          {children?<div className="cpc-13__footer editorial-product-card__footer">{children}</div>:<Link className="cpc-13__cta editorial-product-card__cta" to={to}>{ctaLabel}</Link>}
        </>}
      </div>
    </div>
  </m.article>;
}
