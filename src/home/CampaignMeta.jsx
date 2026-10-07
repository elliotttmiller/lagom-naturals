import React,{useEffect,useMemo,useRef,useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import AddToCartButton from "@/AddToCartButton";
import {configuredProduct,productVariants,useCart} from "@/storefront/StorefrontContext";

export default function CampaignMeta({product}){
  const {add}=useCart();
  const variants=useMemo(()=>productVariants(product),[product]);
  const [selectedId,setSelectedId]=useState(variants[0]?.id);
  const [state,setState]=useState("idle");
  const timer=useRef(null);

  useEffect(()=>{
    setSelectedId(variants[0]?.id);
    setState("idle");
  },[product.id,variants]);

  useEffect(()=>()=>window.clearTimeout(timer.current),[]);

  const selected=variants.find(variant=>variant.id===selectedId)||variants[0];
  if(!selected)return null;

  const facts=[
    product.thcMgPerCan?product.thcMgPerCan+" mg THC / can":null,
    product.canVolume||null,
  ].filter(Boolean);

  const addItem=()=>{
    add(configuredProduct(product,selected));
    setState("added");
    window.clearTimeout(timer.current);
    timer.current=window.setTimeout(()=>setState("idle"),1400);
  };

  return <div className="campaign-meta">
    <div className="campaign-meta__copy">
      {product.flavor&&<p className="campaign-meta__flavor">{product.flavor}</p>}
      <p className="campaign-meta__description">{product.description}</p>
      <div className="campaign-meta__facts" aria-label="Product facts">
        {facts.map(fact=><span key={fact}>{fact}</span>)}
      </div>
      <Link className="campaign-meta__details" to={"/product/"+product.id}>Product details <ArrowRight aria-hidden="true"/></Link>
    </div>
    <div className="campaign-meta__commerce">
      {variants.length>1?<label className="campaign-meta__variant">
        <span>Pack size</span>
        <select value={selected.id} onChange={event=>{setSelectedId(event.target.value);setState("idle")}} aria-label={"Pack size for "+product.name}>
          {variants.map(variant=><option key={variant.id} value={variant.id}>{variant.label+" — $"+variant.price.toFixed(2)}</option>)}
        </select>
      </label>:<div className="campaign-meta__single"><span>{selected.label}</span><b>{"$"+selected.price.toFixed(2)}</b></div>}
      <AddToCartButton className="campaign-meta__add" productId={product.id} label="Add to cart" state={state} onClick={addItem} aria-label={"Add "+product.name+", "+selected.label+", to cart"}/>
    </div>
  </div>;
}
