import React,{useEffect,useState} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import {m,Presence,motionTokens,useMotionValue,useReducedMotion} from "@/motionSystem";

const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));

export default function ProductStage({
  items,
  ariaLabel,
  getKey=item=>item.id||item.name,
  renderScene,
  renderMeta,
  renderSelector,
  initialIndex=0,
  onChange,
  className="",
}){
  const reducedMotion=useReducedMotion();
  const [activeIndex,setActiveIndex]=useState(()=>clamp(initialIndex,0,Math.max(0,items.length-1)));
  const [direction,setDirection]=useState(1);
  const dragX=useMotionValue(0);
  const activeItem=items[activeIndex];

  useEffect(()=>{onChange?.(activeItem,activeIndex)},[activeIndex,activeItem,onChange]);
  useEffect(()=>{dragX.set(0)},[activeIndex,dragX]);

  const goTo=(index,nextDirection)=>{
    const next=clamp(index,0,items.length-1);
    if(next===activeIndex)return;
    setDirection(nextDirection);
    setActiveIndex(next);
  };
  const previous=()=>goTo(activeIndex-1,-1);
  const next=()=>goTo(activeIndex+1,1);
  const select=index=>goTo(index,index>=activeIndex?1:-1);

  const onKeyDown=event=>{
    if(event.key==="ArrowLeft"){event.preventDefault();previous()}
    if(event.key==="ArrowRight"){event.preventDefault();next()}
    if(event.key==="Home"){event.preventDefault();select(0)}
    if(event.key==="End"){event.preventDefault();select(items.length-1)}
  };
  const onDragEnd=(_,info)=>{
    const distance=Math.abs(info.offset.x),velocity=Math.abs(info.velocity.x);
    if(distance<46&&velocity<430)return;
    const signal=distance>=46?info.offset.x:info.velocity.x;
    signal<0?next():previous();
  };

  if(!activeItem)return null;
  const key=getKey(activeItem);
  const sceneTransition=reducedMotion?{duration:0}:{duration:motionTokens.duration.cinematic,ease:motionTokens.easeSoft};

  return <div className={`product-stage ${className}`.trim()} role="group" aria-roledescription="product carousel" aria-label={ariaLabel} tabIndex={0} onKeyDown={onKeyDown}>
    <div className="product-stage__viewport">
      <m.div className="product-stage__drag-layer" drag="x" dragConstraints={{left:0,right:0}} dragElastic={.07} dragMomentum={false} style={{x:dragX,touchAction:"pan-y"}} onDragEnd={onDragEnd} aria-hidden="true"/>
      <Presence initial={false} mode="sync">
        <m.div key={`scene-${key}`} className="product-stage__scene" initial={reducedMotion?false:{opacity:0,x:direction*32,scale:1.012}} animate={{opacity:1,x:0,scale:1}} exit={reducedMotion?{opacity:0}:{opacity:0,x:direction*-24,scale:1.008}} transition={sceneTransition}>
          {renderScene(activeItem,activeIndex,{direction,reducedMotion})}
        </m.div>
      </Presence>
      <div className="product-stage__controls" aria-label={`${ariaLabel} controls`}>
        <m.button type="button" onClick={previous} disabled={activeIndex===0} aria-label="Previous flavor" whileTap={reducedMotion?undefined:motionTokens.tap}><ArrowLeft aria-hidden="true"/></m.button>
        <span>{String(activeIndex+1).padStart(2,"0")} <i>/</i> {String(items.length).padStart(2,"0")}</span>
        <m.button type="button" onClick={next} disabled={activeIndex===items.length-1} aria-label="Next flavor" whileTap={reducedMotion?undefined:motionTokens.tap}><ArrowRight aria-hidden="true"/></m.button>
      </div>
    </div>

    <Presence initial={false} mode="popLayout">
      <m.div key={`meta-${key}`} className="product-stage__meta" initial={reducedMotion?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={reducedMotion?{opacity:0}:{opacity:0,y:-6}} transition={reducedMotion?{duration:0}:motionTokens.springSoft}>
        {renderMeta?.(activeItem,activeIndex)}
      </m.div>
    </Presence>

    {renderSelector?.({items,activeIndex,select})}
    <span className="sr-only" aria-live="polite">Item {activeIndex+1} of {items.length}</span>
  </div>;
}
