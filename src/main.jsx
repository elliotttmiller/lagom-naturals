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
import { AppMotionProvider, Presence, RouteMotion, m, motionTokens, useMotionValue, useReducedMotion, useSpring, useTransform } from '@/motionSystem'
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
  const reduceMotion=useReducedMotion();
  const gateRef=React.useRef(null);
  const pointerX=useMotionValue(0);
  const pointerY=useMotionValue(0);
  const parallaxX=useSpring(pointerX,{stiffness:90,damping:24,mass:.9});
  const parallaxY=useSpring(pointerY,{stiffness:90,damping:24,mass:.9});
  const farX=useTransform(parallaxX,value=>value*.28);
  const farY=useTransform(parallaxY,value=>value*.2);
  const midX=useTransform(parallaxX,value=>value*.55);
  const midY=useTransform(parallaxY,value=>value*.42);
  const nearX=useTransform(parallaxX,value=>value*.88);
  const nearY=useTransform(parallaxY,value=>value*.72);
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

  const cloudEase=motionTokens.easeSoft;
  const cloudDuration=1.58;
  const cloudTransition=(delay=0,duration=cloudDuration)=>reduceMotion?{duration:0}:{duration,delay,ease:cloudEase};
  const handleAtmospherePointer=event=>{
    if(entering||reduceMotion||event.pointerType!=='mouse')return;
    const rect=event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX-rect.left)/rect.width-.5)*18);
    pointerY.set(((event.clientY-rect.top)/rect.height-.5)*12);
  };
  const resetAtmospherePointer=()=>{pointerX.set(0);pointerY.set(0)};

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
          :{delay:1.06,duration:.5,ease:motionTokens.easeExit})
        :{duration:0}}
      onPointerMove={handleAtmospherePointer}
      onPointerLeave={resetAtmospherePointer}
      onAnimationComplete={()=>{if(entering)finishTransition()}}
    >
      <div className="age-gate__prepare-surface" aria-hidden="true"/>
      {ready&&<>
        <m.div
          className="age-gate__scene"
          aria-hidden="true"
          initial={reduceMotion?false:{opacity:0,scale:1.008}}
          animate={entering&&!reduceMotion
            ?{opacity:0,scale:1.085,y:'2.4vh'}
            :{opacity:1,scale:1,y:0}}
          transition={entering
            ?cloudTransition(.42,.9)
            :(reduceMotion?{duration:0}:{duration:.48,ease:cloudEase})}
        />
        <m.div
          className="age-gate__atmosphere-glow"
          aria-hidden="true"
          initial={false}
          animate={entering&&!reduceMotion
            ?{opacity:.3,scale:1.18,y:'-4vh'}
            :{opacity:.18,scale:1,y:0}}
          transition={cloudTransition(.12,1.08)}
        />
        <m.div
          className="age-gate__mist-sweep age-gate__mist-sweep--left"
          aria-hidden="true"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'118vw',y:'-20vh',opacity:[0,.34,0],rotate:-7,scale:1.16}
            :{x:'-34vw',y:'18vh',opacity:0,rotate:-7,scale:.92}}
          transition={cloudTransition(.18,1.08)}
        />
        <m.div
          className="age-gate__mist-sweep age-gate__mist-sweep--right"
          aria-hidden="true"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'-116vw',y:'-16vh',opacity:[0,.3,0],rotate:6,scale:1.14}
            :{x:'36vw',y:'22vh',opacity:0,rotate:6,scale:.94}}
          transition={cloudTransition(.24,1.05)}
        />

        <m.div className="age-gate__cloud-depth age-gate__cloud-depth--far" style={{x:farX,y:farY}} aria-hidden="true">
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--far-left"
            initial={false}
            animate={entering&&!reduceMotion?{x:'-13vw',y:'-9vh',scale:1.1,opacity:.12,rotate:-2}:{x:0,y:0,scale:1,opacity:.28,rotate:0}}
            transition={cloudTransition(.02,1.5)}
          />
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--far-right"
            initial={false}
            animate={entering&&!reduceMotion?{x:'14vw',y:'-7vh',scale:1.11,opacity:.12,rotate:2}:{x:0,y:0,scale:1,opacity:.3,rotate:0}}
            transition={cloudTransition(.04,1.48)}
          />
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--far-top"
            initial={false}
            animate={entering&&!reduceMotion?{x:'6vw',y:'-18vh',scale:1.12,opacity:.06,rotate:1}:{x:0,y:0,scale:1,opacity:.26,rotate:0}}
            transition={cloudTransition(.06,1.46)}
          />
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--far-low"
            initial={false}
            animate={entering&&!reduceMotion?{x:'-8vw',y:'18vh',scale:1.14,opacity:.07,rotate:-1}:{x:0,y:0,scale:1,opacity:.24,rotate:0}}
            transition={cloudTransition(.08,1.44)}
          />
        </m.div>

        <m.div className="age-gate__cloud-depth age-gate__cloud-depth--mid" style={{x:midX,y:midY}} aria-hidden="true">
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--left"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'-42vw',y:'-15vh',scale:1.16,opacity:.2,rotate:-5}
            :{x:0,y:0,scale:1,opacity:.68,rotate:0}}
          transition={cloudTransition(.1,1.34)}
        />
        <m.div
          className="age-gate__cloud-frame age-gate__cloud-frame--right"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'42vw',y:'-13vh',scale:1.17,opacity:.2,rotate:5}
            :{x:0,y:0,scale:1,opacity:.68,rotate:0}}
          transition={cloudTransition(.12,1.32)}
        />
        <m.div
          className="age-gate__cloud-frame age-gate__cloud-frame--center"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'-3vw',y:'-31vh',scale:1.18,opacity:.08}
            :{x:0,y:0,scale:1,opacity:.42}}
          transition={cloudTransition(.16,1.2)}
        />
        <m.div
          className="age-gate__cloud-frame age-gate__cloud-frame--bottom"
          initial={false}
          animate={entering&&!reduceMotion
            ?{y:'25vh',scale:1.15,opacity:.2}
            :{y:0,scale:1,opacity:.56}}
          transition={cloudTransition(.14,1.24)}
        />
        <m.div
          className="age-gate__cloud-frame age-gate__cloud-frame--mid-lower-left"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'-52vw',y:'6vh',scale:1.2,opacity:.08,rotate:-7}
            :{x:0,y:0,scale:1,opacity:.38,rotate:0}}
          transition={cloudTransition(.16,1.22)}
        />
        <m.div
          className="age-gate__cloud-frame age-gate__cloud-frame--mid-lower-right"
          initial={false}
          animate={entering&&!reduceMotion
            ?{x:'52vw',y:'8vh',scale:1.18,opacity:.08,rotate:7}
            :{x:0,y:0,scale:1,opacity:.36,rotate:0}}
          transition={cloudTransition(.18,1.2)}
        />
        </m.div>

        <m.div className="age-gate__cloud-depth age-gate__cloud-depth--near" style={{x:nearX,y:nearY}} aria-hidden="true">
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--near-left"
            initial={false}
            animate={entering&&!reduceMotion
              ?{x:'118vw',y:'-86vh',scale:1.42,opacity:0,rotate:7}
              :{x:0,y:0,scale:1,opacity:.16,rotate:0}}
            transition={cloudTransition(.2,1.18)}
          />
          <m.div
            className="age-gate__cloud-frame age-gate__cloud-frame--near-right"
            initial={false}
            animate={entering&&!reduceMotion
              ?{x:'-118vw',y:'-82vh',scale:1.4,opacity:0,rotate:-7}
              :{x:0,y:0,scale:1,opacity:.14,rotate:0}}
            transition={cloudTransition(.24,1.16)}
          />
        </m.div>
        <m.div
          className="age-gate__panel"
          initial={reduceMotion?false:{opacity:0,y:10,scale:.994}}
          animate={{opacity:1,y:0,scale:1}}
          transition={reduceMotion?{duration:0}:{delay:.04,duration:.5,ease:cloudEase}}
          aria-hidden={entering?'true':undefined}
        >
          <m.div
            className="age-gate__brand"
            animate={entering&&!reduceMotion?{opacity:0,y:-20,scale:.94}:{opacity:1,y:0,scale:1}}
            transition={reduceMotion?{duration:0}:{duration:.3,ease:motionTokens.easeExit}}
          >
            <img src={publicAsset("enhanced-lagom-naturals-icon.webp")} alt="Lagom Naturals"/>
          </m.div>
          <div className="age-gate__content">
            <m.h1
              id="age-gate-title"
              animate={entering&&!reduceMotion?{opacity:0,y:-15,scale:.985}:{opacity:1,y:0,scale:1}}
              transition={reduceMotion?{duration:0}:{delay:.03,duration:.32,ease:motionTokens.easeExit}}
            >Are you 21<br/>or older?</m.h1>
            <m.p
              id="age-gate-description"
              className="age-gate__copy"
              animate={entering&&!reduceMotion?{opacity:0,y:-8}:{opacity:1,y:0}}
              transition={reduceMotion?{duration:0}:{delay:.06,duration:.3,ease:motionTokens.easeExit}}
            >You must be 21 or older to enter. Passing this gate does not establish legal purchase eligibility.</m.p>
            <m.div
              className="age-gate__actions"
              animate={entering&&!reduceMotion?{opacity:0,y:18,scale:.985}:{opacity:1,y:0,scale:1}}
              transition={reduceMotion?{duration:0}:{delay:.08,duration:.3,ease:motionTokens.easeExit}}
            >
              <button type="button" className="age-gate__action age-gate__action--primary" autoFocus disabled={entering} onClick={enter}>
                <span>YES, I’M 21+</span><ArrowRight aria-hidden="true"/>
              </button>
              <button type="button" className="age-gate__action age-gate__action--secondary" disabled={entering} onClick={()=>window.location.replace('https://www.google.com/')}>
                <span>NO, EXIT SITE</span>
              </button>
            </m.div>
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
