import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { m, Presence, motionTokens, useReducedMotion } from "./motionSystem";

import mobileSeltzer from "@/assets/mobile/hero.webp";
import mobileGummies from "@/assets/mobile/gummies-hero.webp";
import mobileMidnight from "@/assets/mobile/midnight-gummies-hero.webp";
import mobileOrganic from "@/assets/mobile/organic-gummies-hero.webp";
import desktopSeltzer from "@/assets/desktop/hero.webp";
import desktopGummies from "@/assets/desktop/gummies-hero.webp";
import desktopMidnight from "@/assets/desktop/midnight-gummies-hero.webp";
import desktopOrganic from "@/assets/desktop/organic-gummies-hero.webp";

const SLIDES = [
  {id:"seltzer",eyebrow:"LAGOM THC SELTZER",title:"Find your just right.",body:"Crisp, zero-sugar THC seltzers made for a more measured social ritual.",primary:"SHOP SELTZERS",primaryTo:"/shop?category=Seltzers",secondary:"OUR STORY",secondaryTo:"/about",mobile:mobileSeltzer,desktop:desktopSeltzer,position:"center center"},
  {id:"gummies",eyebrow:"LAGOM GUMMIES",title:"A softer way to settle in.",body:"Thoughtfully made THC gummies for nights that call for less noise and more ease.",primary:"SHOP GUMMIES",primaryTo:"/shop?category=Gummies",secondary:"EXPLORE ALL",secondaryTo:"/shop",mobile:mobileGummies,desktop:desktopGummies,position:"center center"},
  {id:"organic",eyebrow:"ORGANIC GUMMIES",title:"Keep the ritual simple.",body:"Organic gummies designed around an intentional, uncomplicated adult experience.",primary:"DISCOVER ORGANIC",primaryTo:"/shop?category=Gummies",secondary:"LEARN MORE",secondaryTo:"/learn",mobile:mobileOrganic,desktop:desktopOrganic,position:"center center"},
  {id:"midnight",eyebrow:"MIDNIGHT GUMMIES",title:"For the quieter hours.",body:"A night-minded gummy ritual for winding down, switching off, and letting the evening land.",primary:"SHOP MIDNIGHT",primaryTo:"/shop?category=Gummies",secondary:"THC, EXPLAINED",secondaryTo:"/learn",mobile:mobileMidnight,desktop:desktopMidnight,position:"center center"},
];

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 52;
const SWIPE_VELOCITY = .34;

function HeroCarousel() {
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const [dragX,setDragX]=useState(0);
  const [swiping,setSwiping]=useState(false);
  const [direction,setDirection]=useState(1);
  const gesture=useRef(null);
  const reduceMotion=useReducedMotion();
  const slide=SLIDES[active];

  useEffect(()=>{
    if(paused||reduceMotion||swiping)return undefined;
    const timer=window.setInterval(()=>{setDirection(1);setActive(current=>(current+1)%SLIDES.length)},AUTOPLAY_MS);
    return()=>window.clearInterval(timer);
  },[paused,reduceMotion,swiping]);

  const go=(amount)=>{setDirection(amount>0?1:-1);setActive(current=>(current+amount+SLIDES.length)%SLIDES.length)};
  const select=index=>{setDirection(index>=active?1:-1);setActive(index)};

  const onPointerDown=event=>{
    if(event.pointerType==='mouse')return;
    gesture.current={id:event.pointerId,x:event.clientX,y:event.clientY,time:performance.now(),axis:null};
    setPaused(true);setSwiping(true);setDragX(0);
  };
  const onPointerMove=event=>{
    const g=gesture.current;
    if(!g||g.id!==event.pointerId)return;
    const dx=event.clientX-g.x,dy=event.clientY-g.y;
    if(!g.axis&&Math.hypot(dx,dy)>8)g.axis=Math.abs(dx)>Math.abs(dy)*1.15?'x':'y';
    if(g.axis==='y'){setDragX(0);return;}
    if(g.axis==='x')setDragX(Math.max(-110,Math.min(110,dx*.72)));
  };
  const finishSwipe=event=>{
    const g=gesture.current;
    if(!g||g.id!==event.pointerId)return;
    const dx=event.clientX-g.x;
    const elapsed=Math.max(1,performance.now()-g.time);
    const velocity=Math.abs(dx)/elapsed;
    if(g.axis==='x'&&(Math.abs(dx)>=SWIPE_THRESHOLD||velocity>=SWIPE_VELOCITY))go(dx<0?1:-1);
    gesture.current=null;setDragX(0);setSwiping(false);setPaused(false);
  };
  const cancelSwipe=()=>{gesture.current=null;setDragX(0);setSwiping(false);setPaused(false)};

  const transition=reduceMotion?{duration:0}:{duration:.68,ease:motionTokens.ease};
  const enterX=reduceMotion?0:direction*34;
  const exitX=reduceMotion?0:direction*-26;

  return <div className="home-hero-carousel" data-swiping={swiping?'true':'false'}
    onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={finishSwipe} onPointerCancel={cancelSwipe}
    onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}
    onFocusCapture={()=>setPaused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setPaused(false)}}
    aria-roledescription="carousel" aria-label="Lagom Naturals featured products">
    <div className="home-hero-carousel__media" aria-hidden="true" style={{'--hero-drag':`${dragX}px`}}>
      <Presence initial={false} mode="sync">
        <m.picture key={slide.id} className="home-hero-carousel__picture"
          initial={reduceMotion?false:{opacity:0,scale:1.018,x:enterX}}
          animate={{opacity:1,scale:1,x:0}}
          exit={reduceMotion?undefined:{opacity:0,scale:1.006,x:exitX}}
          transition={transition}>
          <source media="(max-width: 699px)" srcSet={slide.mobile}/>
          <img src={slide.desktop} alt="" fetchPriority={active===0?'high':'auto'} decoding="async" style={{objectPosition:slide.position}}/>
        </m.picture>
      </Presence>
    </div>
    <div className="home-hero-carousel__veil" aria-hidden="true"/>
    <div className="home-hero-carousel__content">
      <Presence initial={false} mode="wait">
        <m.div key={slide.id} className="home-hero-carousel__copy" initial={reduceMotion?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={reduceMotion?undefined:{opacity:0,y:-10}} transition={reduceMotion?{duration:0}:motionTokens.springSoft}>
          <p className="home-hero-carousel__eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p className="home-hero-carousel__body">{slide.body}</p>
          <div className="home-hero-carousel__actions"><Link className="home-hero-carousel__primary" to={slide.primaryTo}>{slide.primary}<ArrowRight aria-hidden="true"/></Link><Link className="home-hero-carousel__secondary" to={slide.secondaryTo}>{slide.secondary}</Link></div>
        </m.div>
      </Presence>
    </div>
    <div className="home-hero-carousel__controls">
      <div className="home-hero-carousel__arrows"><button type="button" onClick={()=>go(-1)} aria-label="Previous hero slide"><ArrowLeft aria-hidden="true"/></button><button type="button" onClick={()=>go(1)} aria-label="Next hero slide"><ArrowRight aria-hidden="true"/></button></div>
      <div className="home-hero-carousel__pagination" role="tablist" aria-label="Choose featured slide">{SLIDES.map((item,index)=><button key={item.id} type="button" role="tab" aria-selected={index===active} aria-label={`Show slide ${index+1}: ${item.eyebrow}`} className={index===active?'is-active':''} onClick={()=>select(index)}><span>{String(index+1).padStart(2,'0')}</span><i aria-hidden="true"><b/></i></button>)}</div>
      <span className="home-hero-carousel__count" aria-hidden="true">{String(active+1).padStart(2,'0')} / {String(SLIDES.length).padStart(2,'0')}</span>
    </div>
  </div>;
}

export default function HomeHeroPortal(){
  const location=useLocation();const[target,setTarget]=useState(null);const isHome=location.pathname==='/';
  useLayoutEffect(()=>{if(!isHome){setTarget(null);return undefined}let frame=0;const resolveTarget=()=>{const node=document.querySelector('.beverage-hero');if(node)setTarget(node);else frame=window.requestAnimationFrame(resolveTarget)};resolveTarget();return()=>window.cancelAnimationFrame(frame)},[isHome,location.key]);
  return useMemo(()=>!isHome||!target?null:createPortal(<HeroCarousel/>,target),[isHome,target]);
}
