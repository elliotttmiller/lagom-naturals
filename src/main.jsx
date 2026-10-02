import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation, useNavigationType } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import App,{preloadStorefrontRoute} from '@/App'
import CartInteractionFeedback from '@/CartInteractionFeedback'
import MobileReferenceChrome from '@/MobileReferenceChrome'
import SiteFooter from '@/SiteFooter'
import SearchOnIntent from '@/SearchOnIntent'
import GlobalSearchTriggerBridge from '@/GlobalSearchTriggerBridge'
import { gummyCollections, merch, products } from '@/catalogData'
import { AppMotionProvider, RouteMotion } from '@/motionSystem'
import ageGateSky from '@/assets/atmosphere/home-hero-sky.png'
import cloudMidField from '@/assets/atmosphere/clouds/cloud-mid-field.webp'
import cloudLeftFragment from '@/assets/atmosphere/clouds/cloud-left-fragment.webp'
import cloudRightFragment from '@/assets/atmosphere/clouds/cloud-right-fragment.webp'
import cloudNearMass from '@/assets/atmosphere/clouds/cloud-near-mass.webp'
import cloudFarLeft from '@/assets/atmosphere/clouds/cloud-16.webp'
import cloudFarRight from '@/assets/atmosphere/clouds/cloud-09.webp'
import cloudCenterMass from '@/assets/atmosphere/clouds/cloud-21.webp'
import cloudUpperCenter from '@/assets/atmosphere/clouds/cloud-10.webp'
import cloudFarLow from '@/assets/atmosphere/clouds/cloud-14.webp'
import cloudMidSecondary from '@/assets/atmosphere/clouds/cloud-19.webp'
import cloudNatural from '@/assets/atmosphere/clouds/natural-white-cumulus-cloud-floating-on-transparent-background-png.webp'
import './styles/index.css'

const loadAccountPage=()=>import('@/AccountPage')
const AccountPage=React.lazy(loadAccountPage)
const VerifiedFindUsExperience=React.lazy(()=>import('@/VerifiedFindUsExperience'))
const SITE_ORIGIN=(import.meta.env.VITE_SITE_ORIGIN||'https://lagomnaturals.com').replace(/\/$/,'')
const routeMeta={
  '/':{title:'Lagom Naturals | Premium THC Seltzer',label:'Home',description:'Premium hemp-derived THC seltzers made for considered adult occasions.'},
  '/shop':{title:'Shop THC Seltzers & Gummies | Lagom Naturals',label:'Shop',description:'Explore Lagom Naturals THC seltzers and gummy collections by flavor and format.'},
  '/shop/seltzers':{title:'THC Seltzers | Lagom Naturals',label:'THC Seltzers',description:'Explore Lagom Naturals hemp-derived THC seltzers by flavor and pack format.'},
  '/shop/gummies':{title:'THC Gummies | Lagom Naturals',label:'THC Gummies',description:'Explore Lagom Naturals THC gummy collections by flavor and collection.'},
  '/merch':{title:'Apparel & Merch | Lagom Naturals',label:'Apparel and merch',description:'Shop Lagom Naturals apparel and merchandise.'},
  '/cart':{title:'Your Cart | Lagom Naturals',label:'Cart',description:'Review your Lagom Naturals drinks and apparel.'},
  '/checkout':{title:'Checkout | Lagom Naturals',label:'Checkout',description:'Enter fulfillment details and review your Lagom Naturals order.'},
  '/account':{title:'My Account | Lagom Naturals',label:'Account',description:'Manage your Lagom Naturals orders, rewards and account preferences.'},
  '/visit':{title:'Find Us | Lagom Naturals',label:'Find Us',description:'Visit Lagom Naturals at 707 N 3rd St, Ste 101 in Minneapolis, Minnesota.'},
  '/about':{title:'Our Story | Lagom Naturals',label:'Our Story',description:'The idea of balance behind Lagom Naturals.'},
  '/learn':{title:'THC, Explained | Lagom Naturals',label:'Learn',description:'Clear guidance for enjoying Lagom THC seltzer responsibly.'},
  '/recipes':{title:'Recipes & Rituals | Lagom Naturals',label:'Recipes',description:'Lagom Naturals drink recipes, pairings, and balanced occasion ideas.'},
}
const publicAsset=name=>`${import.meta.env.BASE_URL}${name.replace(/^\//,'')}`
const routerBase=import.meta.env.BASE_URL==='/'?undefined:import.meta.env.BASE_URL.replace(/\/$/,'')
class AppErrorBoundary extends React.Component{constructor(props){super(props);this.state={hasError:false}}static getDerivedStateFromError(){return{hasError:true}}componentDidCatch(error,info){console.error('Lagom storefront render error',error,info)}render(){if(this.state.hasError)return <main className="fatal-error"><img src={publicAsset("lagom-logo.svg")} alt="Lagom Naturals"/><h1>Something went wrong.</h1><p>Please refresh the page to continue.</p><button type="button" onClick={()=>window.location.reload()}>Refresh</button></main>;return this.props.children}}
function InitialRenderHandoff(){React.useEffect(()=>{const shell=document.getElementById('lagom-boot-shell');if(!shell)return;let removeTimer;let frameOne;let frameTwo;const reveal=()=>{frameOne=requestAnimationFrame(()=>{frameTwo=requestAnimationFrame(()=>{document.documentElement.classList.add('lagom-app-ready');removeTimer=window.setTimeout(()=>shell.remove(),480)})})};const inspect=()=>{if(!document.querySelector('.route-chunk-fallback')){observer.disconnect();reveal()}};const observer=new MutationObserver(inspect);observer.observe(document.getElementById('root'),{childList:true,subtree:true});inspect();return()=>{observer.disconnect();cancelAnimationFrame(frameOne);cancelAnimationFrame(frameTwo);clearTimeout(removeTimer)}},[]);return null}
function NavigationIntentPreloader(){React.useEffect(()=>{const preload=event=>{const anchor=event.target.closest?.('a[href]');if(!anchor)return;let url;try{url=new URL(anchor.href,window.location.href)}catch{return}if(url.origin!==window.location.origin)return;let pathname=url.pathname;if(routerBase&&pathname.startsWith(routerBase))pathname=pathname.slice(routerBase.length)||'/';if(pathname==='/account')loadAccountPage().catch(()=>{});else preloadStorefrontRoute(pathname).catch(()=>{})};document.addEventListener('pointerover',preload,{passive:true,capture:true});document.addEventListener('focusin',preload,true);document.addEventListener('pointerdown',preload,{passive:true,capture:true});return()=>{document.removeEventListener('pointerover',preload,true);document.removeEventListener('focusin',preload,true);document.removeEventListener('pointerdown',preload,true)}},[]);return null}
function AgeGate(){
  const [verified,setVerified]=React.useState(()=>{try{return sessionStorage.getItem('lagom-age-verified')==='true'}catch{return false}});
  const [phase,setPhase]=React.useState(()=>verified?'complete':'idle');
  const [ready,setReady]=React.useState(verified);
  const gateRef=React.useRef(null);
  const animationRef=React.useRef([]);
  const finishTimerRef=React.useRef(0);
  const pointerFrameRef=React.useRef(0);
  const entering=phase==='entering';
  const finished=phase==='complete';

  React.useEffect(()=>{
    if(verified){setReady(true);return undefined}
    let cancelled=false;
    const critical=[
      publicAsset('enhanced-lagom-naturals-icon.webp'),
      ageGateSky,
      cloudMidField,
      cloudLeftFragment,
      cloudRightFragment,
      cloudNearMass,
      cloudFarLeft,
      cloudFarRight,
      cloudCenterMass,
      cloudUpperCenter,
      cloudFarLow,
      cloudMidSecondary,
      cloudNatural,
    ];
    const preload=src=>new Promise(resolve=>{
      const image=new Image();
      let settled=false;
      const done=()=>{if(settled)return;settled=true;resolve()};
      image.onload=done;
      image.onerror=done;
      image.src=src;
      if(image.complete)done();
      else image.decode?.().then(done).catch(()=>{});
    });
    const timeout=window.setTimeout(()=>{if(!cancelled)setReady(true)},1200);
    Promise.all(critical.map(preload)).then(()=>{
      if(cancelled)return;
      window.clearTimeout(timeout);
      requestAnimationFrame(()=>requestAnimationFrame(()=>setReady(true)));
    });
    return()=>{cancelled=true;window.clearTimeout(timeout)};
  },[verified]);

  React.useEffect(()=>{
    document.body.classList.toggle('age-gate-open',!finished);
    document.body.classList.toggle('age-gate-transitioning',entering);
    return()=>{
      document.body.classList.remove('age-gate-open');
      document.body.classList.remove('age-gate-transitioning');
    };
  },[entering,finished]);

  React.useEffect(()=>{
    if(finished||entering||!ready)return undefined;
    const gate=gateRef.current;
    if(!gate)return undefined;
    const handleKeyDown=event=>{
      if(event.key==='Escape'){event.preventDefault();return}
      if(event.key!=='Tab')return;
      const focusable=[...gate.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')]
        .filter(node=>!node.hasAttribute('hidden')&&node.getAttribute('aria-hidden')!=='true');
      if(!focusable.length){event.preventDefault();return}
      const first=focusable[0];
      const last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    };
    gate.addEventListener('keydown',handleKeyDown);
    return()=>gate.removeEventListener('keydown',handleKeyDown);
  },[entering,finished,ready]);

  React.useEffect(()=>()=> {
    animationRef.current.forEach(animation=>animation?.cancel?.());
    window.clearTimeout(finishTimerRef.current);
    cancelAnimationFrame(pointerFrameRef.current);
  },[]);

  const finishTransition=React.useCallback(()=>{
    animationRef.current=[];
    setVerified(true);
    setPhase('complete');
    requestAnimationFrame(()=>{
      const mainNode=document.querySelector('.route-stage main, main');
      if(!mainNode)return;
      const hadTabIndex=mainNode.hasAttribute('tabindex');
      if(!hadTabIndex)mainNode.setAttribute('tabindex','-1');
      mainNode.focus?.({preventScroll:true});
      if(!hadTabIndex)requestAnimationFrame(()=>mainNode.removeAttribute('tabindex'));
    });
  },[]);

  const animateNode=(node,keyframes,options)=>{
    if(!node?.animate)return null;
    const animation=node.animate(keyframes,{fill:'forwards',...options});
    animationRef.current.push(animation);
    return animation;
  };

  const runNativeEnter=React.useCallback(()=>{
    const gate=gateRef.current;
    if(!gate)return;
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    animationRef.current.forEach(animation=>animation?.cancel?.());
    animationRef.current=[];

    if(reduceMotion){
      animateNode(gate,[{opacity:1},{opacity:0}],{duration:160,easing:'linear'});
      finishTimerRef.current=window.setTimeout(finishTransition,180);
      return;
    }

    const ease='cubic-bezier(.16,1,.3,1)';
    const exitEase='cubic-bezier(.4,0,.2,1)';
    const cloudMotion={
      'far-left':       {t:'translate3d(-12vw,-8vh,0) rotate(-2deg) scale(1.08)',o:.10,d:1180,l:0},
      'far-right':      {t:'translate3d(13vw,-7vh,0) rotate(2deg) scale(1.09)',o:.10,d:1160,l:20},
      'far-top':        {t:'translate3d(5vw,-18vh,0) rotate(1deg) scale(1.10)',o:.05,d:1140,l:35},
      'far-low':        {t:'translate3d(-7vw,16vh,0) rotate(-1deg) scale(1.11)',o:.06,d:1120,l:50},
      'left':           {t:'translate3d(-44vw,-13vh,0) rotate(-5deg) scale(1.13)',o:.12,d:1030,l:70},
      'right':          {t:'translate3d(44vw,-12vh,0) rotate(5deg) scale(1.14)',o:.12,d:1010,l:85},
      'center':         {t:'translate3d(-2vw,-30vh,0) scale(1.14)',o:.05,d:940,l:105},
      'bottom':         {t:'translate3d(0,24vh,0) scale(1.12)',o:.12,d:960,l:95},
      'mid-lower-left': {t:'translate3d(-52vw,5vh,0) rotate(-6deg) scale(1.16)',o:.06,d:980,l:120},
      'mid-lower-right':{t:'translate3d(52vw,6vh,0) rotate(6deg) scale(1.15)',o:.06,d:960,l:135},
      'near-left':      {t:'translate3d(102vw,-70vh,0) rotate(6deg) scale(1.30)',o:0,d:900,l:150},
      'near-right':     {t:'translate3d(-102vw,-68vh,0) rotate(-6deg) scale(1.28)',o:0,d:880,l:175},
    };

    gate.querySelectorAll('[data-age-cloud]').forEach(node=>{
      const config=cloudMotion[node.dataset.ageCloud];
      if(!config)return;
      animateNode(node,[
        {transform:'translate3d(0,0,0) rotate(0deg) scale(1)',opacity:getComputedStyle(node).opacity},
        {transform:config.t,opacity:config.o},
      ],{duration:config.d,delay:config.l,easing:ease});
    });

    const scene=gate.querySelector('.age-gate__scene');
    animateNode(scene,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:.72,offset:.46,transform:'translate3d(0,-.5vh,0) scale(1.012)'},
      {opacity:0,transform:'translate3d(0,-1.2vh,0) scale(1.026)'},
    ],{duration:930,delay:170,easing:ease});

    const glow=gate.querySelector('.age-gate__atmosphere-glow');
    animateNode(glow,[
      {opacity:.18,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:.28,offset:.42,transform:'translate3d(0,-1vh,0) scale(1.04)'},
      {opacity:0,transform:'translate3d(0,-4vh,0) scale(1.1)'},
    ],{duration:820,delay:90,easing:ease});

    [
      ['.age-gate__brand','translate3d(0,-18px,0) scale(.95)',0],
      ['#age-gate-title','translate3d(0,-14px,0) scale(.988)',25],
      ['#age-gate-description','translate3d(0,-8px,0)',55],
      ['.age-gate__actions','translate3d(0,16px,0) scale(.988)',80],
    ].forEach(([selector,transform,delay])=>{
      const node=gate.querySelector(selector);
      animateNode(node,[
        {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
        {opacity:0,transform},
      ],{duration:260,delay,easing:exitEase});
    });

    animateNode(gate,[
      {backgroundColor:'rgba(176,227,253,1)'},
      {backgroundColor:'rgba(176,227,253,1)',offset:.34},
      {backgroundColor:'rgba(176,227,253,0)'},
    ],{duration:900,delay:260,easing:ease});

    finishTimerRef.current=window.setTimeout(finishTransition,1320);
  },[finishTransition]);

  const enter=()=>{
    if(entering||finished||!ready)return;
    try{sessionStorage.setItem('lagom-age-verified','true')}catch{}
    setPhase('entering');
    requestAnimationFrame(runNativeEnter);
  };

  const handleAtmospherePointer=event=>{
    if(entering||event.pointerType!=='mouse')return;
    const gate=gateRef.current;
    if(!gate)return;
    cancelAnimationFrame(pointerFrameRef.current);
    pointerFrameRef.current=requestAnimationFrame(()=>{
      const rect=gate.getBoundingClientRect();
      const x=((event.clientX-rect.left)/rect.width-.5);
      const y=((event.clientY-rect.top)/rect.height-.5);
      gate.style.setProperty('--age-pointer-x',`${(x*14).toFixed(2)}px`);
      gate.style.setProperty('--age-pointer-y',`${(y*9).toFixed(2)}px`);
    });
  };

  const resetAtmospherePointer=()=>{
    const gate=gateRef.current;
    if(!gate)return;
    gate.style.setProperty('--age-pointer-x','0px');
    gate.style.setProperty('--age-pointer-y','0px');
  };

  if(finished)return null;

  return <div
    ref={gateRef}
    className={`age-gate${ready?' is-ready':' is-preparing'}${entering?' is-transitioning':''}`}
    role="dialog"
    aria-modal="true"
    aria-labelledby="age-gate-title"
    aria-describedby="age-gate-description"
    onPointerMove={handleAtmospherePointer}
    onPointerLeave={resetAtmospherePointer}
  >
    <div className="age-gate__prepare-surface" aria-hidden="true"/>
    {ready&&<>
      <div className="age-gate__scene" aria-hidden="true"/>
      <div className="age-gate__atmosphere-glow" aria-hidden="true"/>

      <div className="age-gate__cloud-depth age-gate__cloud-depth--far" aria-hidden="true">
        <div className="age-gate__cloud-frame age-gate__cloud-frame--far-left" data-age-cloud="far-left"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--far-right" data-age-cloud="far-right"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--far-top" data-age-cloud="far-top"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--far-low" data-age-cloud="far-low"/>
      </div>

      <div className="age-gate__cloud-depth age-gate__cloud-depth--mid" aria-hidden="true">
        <div className="age-gate__cloud-frame age-gate__cloud-frame--left" data-age-cloud="left"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--right" data-age-cloud="right"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--center" data-age-cloud="center"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--bottom" data-age-cloud="bottom"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--mid-lower-left" data-age-cloud="mid-lower-left"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--mid-lower-right" data-age-cloud="mid-lower-right"/>
      </div>

      <div className="age-gate__cloud-depth age-gate__cloud-depth--near" aria-hidden="true">
        <div className="age-gate__cloud-frame age-gate__cloud-frame--near-left" data-age-cloud="near-left"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--near-right" data-age-cloud="near-right"/>
      </div>

      <div className="age-gate__panel" aria-hidden={entering?'true':undefined}>
        <div className="age-gate__brand">
          <img src={publicAsset("enhanced-lagom-naturals-icon.webp")} alt="Lagom Naturals"/>
        </div>
        <div className="age-gate__content">
          <h1 id="age-gate-title">Are you 21<br/>or older?</h1>
          <p id="age-gate-description" className="age-gate__copy">You must be 21 or older to enter. Passing this gate does not establish legal purchase eligibility.</p>
          <div className="age-gate__actions">
            <button type="button" className="age-gate__action age-gate__action--primary" autoFocus disabled={entering} onClick={enter}>
              <span>YES, I’M 21+</span><ArrowRight aria-hidden="true"/>
            </button>
            <button type="button" className="age-gate__action age-gate__action--secondary" disabled={entering} onClick={()=>window.location.replace('https://www.google.com/')}>
              <span>NO, EXIT SITE</span>
            </button>
          </div>
        </div>
      </div>
    </>}
  </div>;
}
function getRouteMeta(pathname,search=''){if(pathname==='/shop'){const params=new URLSearchParams(search);const category=params.get('category');const collection=params.get('collection');const knownCollection=gummyCollections.some(({name})=>name===collection);if(category==='Gummies'&&knownCollection)return{title:`${collection} Gummies | Lagom Naturals`,label:`${collection} gummies`,description:`Explore the ${collection} Lagom Naturals THC gummy collection.`};if(category==='Gummies')return{title:'THC Gummies | Lagom Naturals',label:'Gummies',description:'Explore Lagom Naturals THC gummy collections by flavor and collection.'};if(category==='Seltzers')return{title:'THC Seltzers | Lagom Naturals',label:'Seltzers',description:'Explore the Lagom Naturals THC seltzer lineup by flavor.'};return routeMeta['/shop']}if(pathname.startsWith('/product/')){const id=decodeURIComponent(pathname.split('/').filter(Boolean).pop()||'');const product=products.find(item=>String(item.id)===id);if(product){const detail=[product.flavor,product.category==='Seltzers'&&product.thcMgPerCan?`${product.thcMgPerCan} mg THC per can`:null,product.canVolume].filter(Boolean).join(' · ');return{title:`${product.name} | Lagom Naturals`,label:product.name,description:[product.name,detail].filter(Boolean).join(' — ')}}return{title:'THC Product | Lagom Naturals',label:'Product details',description:'Explore product flavor, format, and responsible-use information from Lagom Naturals.'}}if(pathname.startsWith('/merch/')){const id=decodeURIComponent(pathname.split('/').filter(Boolean).pop()||'');const item=merch.find(entry=>String(entry.id)===id);if(item)return{title:`${item.name} | Lagom Naturals`,label:item.name,description:item.description||`Review ${item.name} details and availability from Lagom Naturals.`};return{title:'Apparel | Lagom Naturals',label:'Apparel details',description:'Review Lagom Naturals apparel details and availability.'}}return routeMeta[pathname]||{title:'Lagom Naturals',label:'Lagom Naturals',description:'Premium hemp-derived THC seltzers and gummies.'}}
function AnimatedStorefront(){const location=useLocation();const navigationType=useNavigationType();const routeKey=`${location.pathname}${location.search}`;const meta=getRouteMeta(location.pathname,location.search);const scrollPositions=React.useRef(new Map());const previousLocation=React.useRef(null);React.useLayoutEffect(()=>{if('scrollRestoration'in window.history)window.history.scrollRestoration='manual';return()=>{if('scrollRestoration'in window.history)window.history.scrollRestoration='auto'}},[]);React.useLayoutEffect(()=>{const previous=previousLocation.current;if(previous)scrollPositions.current.set(previous.key,previous.scrollY);const destination=scrollPositions.current.get(location.key);const nextY=navigationType==='POP'&&destination!=null?destination:0;window.scrollTo({top:nextY,left:0,behavior:'auto'});previousLocation.current={key:location.key,scrollY:nextY};const capture=()=>{if(previousLocation.current?.key===location.key)previousLocation.current.scrollY=window.scrollY};window.addEventListener('scroll',capture,{passive:true});return()=>{window.removeEventListener('scroll',capture);if(previousLocation.current?.key===location.key)previousLocation.current.scrollY=window.scrollY}},[location.key,navigationType,routeKey]);React.useEffect(()=>{document.title=meta.title;const cleanPath=location.pathname==='/'?'/':location.pathname.replace(/\/$/,'');const canonicalUrl=`${SITE_ORIGIN}${cleanPath}`;const shouldNoindex=['/cart','/checkout','/account'].includes(cleanPath)||location.search.length>0;const setMeta=(selector,value)=>{const node=document.querySelector(selector);if(node)node.setAttribute('content',value)};setMeta('meta[name="description"]',meta.description);setMeta('meta[property="og:title"]',meta.title);setMeta('meta[property="og:description"]',meta.description);setMeta('meta[property="og:url"]',canonicalUrl);setMeta('meta[name="twitter:title"]',meta.title);setMeta('meta[name="twitter:description"]',meta.description);setMeta('meta[name="robots"]',shouldNoindex?'noindex, follow':'index, follow, max-image-preview:large');const canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.setAttribute('href',canonicalUrl)},[routeKey,location.pathname,location.search,meta.title,meta.description]);const page=location.pathname==='/account'?<React.Suspense fallback={<div className="route-chunk-fallback" role="status" aria-live="polite" aria-busy="true"><span className="route-chunk-fallback__mark" aria-hidden="true"><i/></span><span className="sr-only">Loading page…</span></div>}><AccountPage/></React.Suspense>:<App/>;return <><div className="route-announcer" role="status" aria-live="polite" aria-atomic="true">{meta.label}</div><RouteMotion routeKey={routeKey} navigationType={navigationType}>{page}</RouteMotion></>}
function StorefrontExperience(){const location=useLocation();return <AppMotionProvider><InitialRenderHandoff/><NavigationIntentPreloader/><AgeGate/><CartInteractionFeedback/><AnimatedStorefront/><MobileReferenceChrome/>{location.pathname==='/visit'&&<React.Suspense fallback={null}><VerifiedFindUsExperience/></React.Suspense>}<GlobalSearchTriggerBridge/><SearchOnIntent/><SiteFooter/></AppMotionProvider>}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AppErrorBoundary><BrowserRouter basename={routerBase}><StorefrontExperience/></BrowserRouter></AppErrorBoundary></React.StrictMode>)
