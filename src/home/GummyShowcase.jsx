import React,{useMemo,useState} from "react";
import {products} from "@/catalogData";
import ProductRail from "@/storefront/ProductRail";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import { HomepageGummyMedia } from "@/home/HomepageProductMedia";

export default function GummyShowcase(){
  const gummies=useMemo(()=>products.filter(product=>product.category==="Gummies"),[]);
  const collections=useMemo(()=>Array.from(new Set(gummies.map(product=>product.productLine).filter(Boolean))),[gummies]);
  const [active,setActive]=useState(collections[0]||"");
  const visible=gummies.filter(product=>!active||product.productLine===active).slice(0,4);

  return <div className="editorial-gummy-showcase">
    <ProductRail
      eyebrow="Gummy collections"
      title="A different format, the same clarity."
      intro="Browse Lagom gummy collections by flavor and clearly labeled cannabinoid content."
      to="/shop/gummies"
      linkLabel="Shop gummies"
    >
      <div className="gummy-collection-tabs" role="group" aria-label="Gummy collections">
        {collections.map(collection=><button key={collection} type="button" aria-pressed={active===collection} className={active===collection?"is-active":""} onClick={()=>setActive(collection)}>{collection}</button>)}
      </div>
      <div className="gummy-collection-grid">
        {visible.map(product=><CatalogProductCard
          key={product.id}
          id={product.id}
          to={"/product/"+product.id}
          mediaNode={<HomepageGummyMedia product={product}/>}
          contextLabel={product.productLine}
          name={product.name}
          price={product.price}
          reviewStatus={product.cardDescription||product.description}
          meta={<span className="product-facts"><span>{product.strength}</span><span>{product.piecesPerPackage+" gummies"}</span></span>}
        />)}
      </div>
    </ProductRail>
  </div>;
}
