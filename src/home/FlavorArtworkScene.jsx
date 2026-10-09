import React from "react";
import {m,useReducedMotion} from "@/motionSystem";

function ArtPicture({media,className="",eager=false}){
  if(!media?.desktop&&!media?.mobile)return null;
  const desktop=media.desktop||media.mobile;
  const mobile=media.mobile||media.desktop;
  return <picture className={className} aria-hidden="true">
    {mobile?.avifSrcSet&&<source media="(max-width: 899px)" type="image/avif" srcSet={mobile.avifSrcSet} sizes="100vw"/>}
    {mobile?.webpSrcSet&&<source media="(max-width: 899px)" type="image/webp" srcSet={mobile.webpSrcSet} sizes="100vw"/>}
    {desktop?.avifSrcSet&&<source type="image/avif" srcSet={desktop.avifSrcSet} sizes="100vw"/>}
    {desktop?.webpSrcSet&&<source type="image/webp" srcSet={desktop.webpSrcSet} sizes="100vw"/>}
    <img src={desktop?.src||mobile?.src} alt="" loading={eager?"eager":"lazy"} fetchPriority={eager?"high":"auto"} decoding="async"/>
  </picture>;
}

function SceneLayer({layer,reducedMotion}){
  const style={
    "--layer-x":layer.x??50,
    "--layer-y":layer.y??50,
    "--layer-scale":layer.scale??1,
    "--layer-depth":layer.depth??0,
    zIndex:layer.zIndex??Math.round((layer.depth??0)+10),
  };
  if(layer.media)return <m.div className={`flavor-artwork-scene__layer flavor-artwork-scene__layer--${layer.id||"asset"}`} style={style} animate={reducedMotion?undefined:{y:[0,(layer.float??4),0]}} transition={reducedMotion?undefined:{duration:layer.duration??8,repeat:Infinity,ease:"easeInOut"}}><ArtPicture media={layer.media}/></m.div>;
  if(layer.src)return <m.img className={`flavor-artwork-scene__layer flavor-artwork-scene__layer--${layer.id||"asset"}`} style={style} src={layer.src} alt="" aria-hidden="true" draggable="false" animate={reducedMotion?undefined:{y:[0,(layer.float??4),0]}} transition={reducedMotion?undefined:{duration:layer.duration??8,repeat:Infinity,ease:"easeInOut"}}/>;
  return null;
}

export default function FlavorArtworkScene({scene,children,className="",eager=false}){
  const reducedMotion=useReducedMotion();
  if(!scene)return null;
  const hasLayers=Array.isArray(scene.layers)&&scene.layers.length>0;
  return <div className={`flavor-artwork-scene ${className}`.trim()} data-flavor={scene.id}>
    {!hasLayers&&<>
      <ArtPicture media={scene.media} className="flavor-artwork-scene__fallback flavor-artwork-scene__fallback--bleed" eager={eager}/>
      <ArtPicture media={scene.media} className="flavor-artwork-scene__fallback flavor-artwork-scene__fallback--primary" eager={eager}/>
    </>}
    {hasLayers&&<div className="flavor-artwork-scene__layers" aria-hidden="true">{scene.layers.map(layer=><SceneLayer key={layer.id} layer={layer} reducedMotion={reducedMotion}/>)}</div>}
    {children&&<div className="flavor-artwork-scene__product">{children}</div>}
  </div>;
}
