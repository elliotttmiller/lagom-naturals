import React,{useMemo} from "react";
import {products} from "@/catalogData";
import ProductStage from "@/home/ProductStage";
import CampaignHero from "@/home/CampaignHero";
import CampaignMeta from "@/home/CampaignMeta";
import FlavorSelector from "@/home/FlavorSelector";
import FlavorArtworkScene from "@/home/FlavorArtworkScene";
import SeltzerCan from "@/products/SeltzerCan";
import {getFlavorScene} from "@/products/flavorScenes";

const PRODUCT_ORDER=[
  "watermelon-refresher",
  "strawberry-lime-fusion",
  "blackberry-breeze",
  "24k-lemonade",
];

export default function SeltzerShowcase(){
  const items=useMemo(()=>PRODUCT_ORDER.map(id=>products.find(product=>product.id===id)).filter(Boolean),[]);

  return <div className="editorial-seltzer-showcase" data-home-snap-content>
    <ProductStage
      items={items}
      ariaLabel="Lagom THC seltzer flavors"
      renderScene={(product,index)=>{
        const scene=getFlavorScene(product.id);
        return <CampaignHero scene={scene} product={product}>
          <FlavorArtworkScene scene={scene} eager={index===0}>
            <SeltzerCan product={product} className="campaign-hero__can" eager={index===0}/>
          </FlavorArtworkScene>
        </CampaignHero>;
      }}
      renderMeta={product=><CampaignMeta product={product}/>}
      renderSelector={({items:selectorItems,activeIndex,select})=><FlavorSelector items={selectorItems} activeIndex={activeIndex} onSelect={select}/>}
    />
  </div>;
}
