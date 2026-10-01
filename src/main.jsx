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
import { AppMotionProvider, Presence, RouteMotion, m, motionTokens, useReducedMotion } from '@/motionSystem'
import ageGateSky from '@/assets/atmosphere/home-hero-sky.png'
import cloudMidField from '@/assets/atmosphere/clouds/cloud-mid-field.webp'
import cloudLeftFragment from '@/assets/atmosphere/clouds/cloud-left-fragment.webp'
import cloudRightFragment from '@/assets/atmosphere/clouds/cloud-right-fragment.webp'
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
  const reduceMotion=useReducedMotion();
  const gateRef=React.useRef(null);
  const entering=phase==='entering';
  const finished=phase==='complete';
  React.useEffect(()=>{
    if(verified){
      setReady(true);
      return undefined;
    }
    let cancelled=false;
    const critical=[
      publicAsset('enhanced-lagom-naturals-icon.webp'),
      ageGateSky,
      cloudMidField,
      cloudLeftFragment,
      cloudRightFragment,
    ];
    const preload=src=>new Promise(resolve=>{
      const image=new Image();
      let settled=false;
      const done=()=>{if(settled)return;settled=true;resolve()};
      image.onload=done;
      image.onerror=done;
      image.src=src;
      if(image.complete)done();
      else if(typeof image.decode==='function')image.decode().then(done).catch(()=>{});
    });
    const timeout=window.setTimeout(()=>{if(!cancelled)setReady(true)},1400);
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
      if(event.key==='Escape'){
        event.preventDefault();
        return;
      }
      if(event.key!=='Tab')return;
      const focusable=[...gate.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')]
        .filter(node=>!node.hasAttribute('hidden')&&node.getAttribute('aria-hidden')!=='true');
      if(!focusable.length){
        event.preventDefault();
        return;
      }
      const first=focusable[0];
      const last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){
        event.preventDefault();
        last.focus();
      }else if(!event.shiftKey&&document.activeElement===last){
        event.preventDefault();
        first.focus();
      }
    };
    gate.addEventListener('keydown',handleKeyDown);
    return()=>gate.removeEventListener('keydown',handleKeyDown);
  },[entering,finished,ready]);

  const finishTransition=React.useCallback(()=>{
    setVerified(true);
    setPhase('complete');
    requestAnimationFrame(()=>{
      const main=document.querySelector('.route-stage main, main');
      if(!main)return;
      const hadTabIndex=main.hasAttribute('tabindex');
      if(!hadTabIndex)main.setAttribute('tabindex','-1');
      main.focus?.({preventScroll:true});
      if(!hadTabIndex)requestAnimationFrame(()=>main.removeAttribute('tabindex'));
    });
  },[]);

  const enter=()=>{
    if(entering||finished||!ready)return;
    try{sessionStorage.setItem('lagom-age-verified','true')}catch{}
    if(reduceMotion){
      setPhase('entering');
      window.setTimeout(finishTransition,240);
      return;
    }
    setPhase('entering');
  };

  if(finished)return null;

  const cloudEase=[.16,1,.3,1];
  const cloudDuration=1.34;

  return <Presence>
    <m.div
      ref={gateRef}
      className={`age-gate${ready?' is-ready':' is-preparing'}${entering?' is-transitioning':''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-description"
      initial={false}
      animate={{opacity:entering?0:1}}
      transition={entering
        ?(reduceMotion
          ?{duration:.14,ease:'linear'}
          :{delay:.54,duration:.72,ease:cloudEase})
        :{duration:0}}
      onAnimationComplete={()=>{if(entering)finishTransition()}}
    >
      <div className="age-gate__prepare-surface" aria-hidden="true"/>
      {ready&&<>
        <m.div
          className="age-gate__scene"
          aria-hidden="true"
          initial={reduceMotion?false:{opacity:0,scale:1.008}}
          animate={entering&&!reduceMotion
            ?{opacity:1,scale:1.022}
            :{opacity:1,scale:1}}
          transition={entering
            ?{duration:cloudDuration,ease:cloudEase}
            :(reduceMotion?{duration:0}:{duration:.48,ease:cloudEase})}
        />
        <div className="age-gate__cloud-frame age-gate__cloud-frame--left" aria-hidden="true"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--right" aria-hidden="true"/>
        <div className="age-gate__cloud-frame age-gate__cloud-frame--bottom" aria-hidden="true"/>
        <m.div
          className="age-gate__panel"
          initial={reduceMotion?false:{opacity:0,y:10,scale:.994}}
          animate={entering
            ?(reduceMotion?{opacity:0}:{opacity:0,y:5,scale:.996})
            :{opacity:1,y:0,scale:1}}
          transition={entering
            ?{duration:reduceMotion?.14:.24,ease:[.4,0,.2,1]}
            :(reduceMotion?{duration:0}:{delay:.04,duration:.5,ease:cloudEase})}
          aria-hidden={entering?'true':undefined}
        >
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
        </m.div>
      </>}
    </m.div>

  </Presence>;
}
function getRouteMeta(pathname,search=''){if(pathname==='/shop'){const params=new URLSearchParams(search);const category=params.get('category');const collection=params.get('collection');const knownCollection=gummyCollections.some(({name})=>name===collection);if(category==='Gummies'&&knownCollection)return{title:`${collection} Gummies | Lagom Naturals`,label:`${collection} gummies`,description:`Explore the ${collection} Lagom Naturals THC gummy collection.`};if(category==='Gummies')return{title:'THC Gummies | Lagom Naturals',label:'Gummies',description:'Explore Lagom Naturals THC gummy collections by flavor and collection.'};if(category==='Seltzers')return{title:'THC Seltzers | Lagom Naturals',label:'Seltzers',description:'Explore the Lagom Naturals THC seltzer lineup by flavor.'};return routeMeta['/shop']}if(pathname.startsWith('/product/')){const id=decodeURIComponent(pathname.split('/').filter(Boolean).pop()||'');const product=products.find(item=>String(item.id)===id);if(product){const detail=[product.flavor,product.category==='Seltzers'&&product.thcMgPerCan?`${product.thcMgPerCan} mg THC per can`:null,product.canVolume].filter(Boolean).join(' · ');return{title:`${product.name} | Lagom Naturals`,label:product.name,description:[product.name,detail].filter(Boolean).join(' — ')}}return{title:'THC Product | Lagom Naturals',label:'Product details',description:'Explore product flavor, format, and responsible-use information from Lagom Naturals.'}}if(pathname.startsWith('/merch/')){const id=decodeURIComponent(pathname.split('/').filter(Boolean).pop()||'');const item=merch.find(entry=>String(entry.id)===id);if(item)return{title:`${item.name} | Lagom Naturals`,label:item.name,description:item.description||`Review ${item.name} details and availability from Lagom Naturals.`};return{title:'Apparel | Lagom Naturals',label:'Apparel details',description:'Review Lagom Naturals apparel details and availability.'}}return routeMeta[pathname]||{title:'Lagom Naturals',label:'Lagom Naturals',description:'Premium hemp-derived THC seltzers and gummies.'}}
function AnimatedStorefront(){const location=useLocation();const navigationType=useNavigationType();const routeKey=`${location.pathname}${location.search}`;const meta=getRouteMeta(location.pathname,location.search);const scrollPositions=React.useRef(new Map());const previousLocation=React.useRef(null);React.useLayoutEffect(()=>{if('scrollRestoration'in window.history)window.history.scrollRestoration='manual';return()=>{if('scrollRestoration'in window.history)window.history.scrollRestoration='auto'}},[]);React.useLayoutEffect(()=>{const previous=previousLocation.current;if(previous)scrollPositions.current.set(previous.key,previous.scrollY);const destination=scrollPositions.current.get(location.key);const nextY=navigationType==='POP'&&destination!=null?destination:0;window.scrollTo({top:nextY,left:0,behavior:'auto'});previousLocation.current={key:location.key,scrollY:nextY};const capture=()=>{if(previousLocation.current?.key===location.key)previousLocation.current.scrollY=window.scrollY};window.addEventListener('scroll',capture,{passive:true});return()=>{window.removeEventListener('scroll',capture);if(previousLocation.current?.key===location.key)previousLocation.current.scrollY=window.scrollY}},[location.key,navigationType,routeKey]);React.useEffect(()=>{document.title=meta.title;const cleanPath=location.pathname==='/'?'/':location.pathname.replace(/\/$/,'');const canonicalUrl=`${SITE_ORIGIN}${cleanPath}`;const shouldNoindex=['/cart','/checkout','/account'].includes(cleanPath)||location.search.length>0;const setMeta=(selector,value)=>{const node=document.querySelector(selector);if(node)node.setAttribute('content',value)};setMeta('meta[name="description"]',meta.description);setMeta('meta[property="og:title"]',meta.title);setMeta('meta[property="og:description"]',meta.description);setMeta('meta[property="og:url"]',canonicalUrl);setMeta('meta[name="twitter:title"]',meta.title);setMeta('meta[name="twitter:description"]',meta.description);setMeta('meta[name="robots"]',shouldNoindex?'noindex, follow':'index, follow, max-image-preview:large');const canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.setAttribute('href',canonicalUrl)},[routeKey,location.pathname,location.search,meta.title,meta.description]);const page=location.pathname==='/account'?<React.Suspense fallback={<div className="route-chunk-fallback" role="status" aria-live="polite" aria-busy="true"><span className="route-chunk-fallback__mark" aria-hidden="true"><i/></span><span className="sr-only">Loading page…</span></div>}><AccountPage/></React.Suspense>:<App/>;return <><div className="route-announcer" role="status" aria-live="polite" aria-atomic="true">{meta.label}</div><RouteMotion routeKey={routeKey} navigationType={navigationType}>{page}</RouteMotion></>}
function StorefrontExperience(){const location=useLocation();return <AppMotionProvider><InitialRenderHandoff/><NavigationIntentPreloader/><AgeGate/><CartInteractionFeedback/><AnimatedStorefront/><MobileReferenceChrome/>{location.pathname==='/visit'&&<React.Suspense fallback={null}><VerifiedFindUsExperience/></React.Suspense>}<GlobalSearchTriggerBridge/><SearchOnIntent/><SiteFooter/></AppMotionProvider>}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AppErrorBoundary><BrowserRouter basename={routerBase}><StorefrontExperience/></BrowserRouter></AppErrorBoundary></React.StrictMode>)
