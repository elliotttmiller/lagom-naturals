import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation, useNavigationType } from 'react-router-dom'
import App from '@/App'
import SiteFooter from '@/SiteFooter'
import { AppMotionProvider, Presence, RouteMotion, m, motionTokens, useReducedMotion } from '@/motionSystem'
import './app.css'
import './motion.css'
import './production.css'
import './pdp-polish.css'
import './catalog-polish.css'
import './variant-polish.css'
import './mobile-cart.css'
import './mobile-visit.css'
import './mobile-visit-hero.css'
import './mobile-checkout-account.css'
import './mobile-merch.css'
import './mobile-product-pdp.css'
import './mobile-shop.css'
import './mobile-home.css'
import './mobile-home-category-polish.css'
import './mobile-about.css'
import './global-search.css'
import './mobile-category-surface-polish.css'
import './mobile-nav-shop.css'
import './mobile-product-media-polish.css'
import './mobile-sort-menu.css'
import './mobile-listing-control-icons.css'
import './desktop-responsive.css'
import './mobile-shell.css'
import './beverage-brand.css'

const routeMeta={
  '/':{title:'Lagom Naturals | Premium THC Seltzer',label:'Home',description:'Premium hemp-derived THC seltzers made for considered adult occasions.'},
  '/shop':{title:'Drinks | Lagom Naturals',label:'Drinks',description:'Explore the Lagom Naturals THC seltzer lineup by flavor.'},
  '/merch':{title:'Apparel & Merch | Lagom Naturals',label:'Apparel and merch',description:'Shop Lagom Naturals apparel and merchandise.'},
  '/visit':{title:'Find Lagom | Lagom Naturals',label:'Find Lagom',description:'Find current Lagom Naturals retailer availability.'},
  '/about':{title:'Our Story | Lagom Naturals',label:'Our Story',description:'The idea of balance behind Lagom Naturals.'},
  '/learn':{title:'THC, Explained | Lagom Naturals',label:'Learn',description:'Clear guidance for enjoying Lagom THC seltzer responsibly.'},
  '/journal':{title:'Journal | Lagom Naturals',label:'Journal',description:'Stories from flavor, food, music, art, design, and hospitality.'},
}

const routerBase=import.meta.env.BASE_URL==='/'?undefined:import.meta.env.BASE_URL.replace(/\/$/,'')

class AppErrorBoundary extends React.Component {
  constructor(props){super(props);this.state={hasError:false}}
  static getDerivedStateFromError(){return{hasError:true}}
  componentDidCatch(error,info){console.error('Lagom storefront render error',error,info)}
  render(){if(this.state.hasError)return <main className="fatal-error"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><h1>Something went wrong.</h1><p>Please refresh the page to continue.</p><button type="button" onClick={()=>window.location.reload()}>Refresh</button></main>;return this.props.children}
}

function AgeGate(){
  const[verified,setVerified]=React.useState(()=>{try{return sessionStorage.getItem('lagom-age-verified')==='true'}catch{return false}})
  const reduceMotion=useReducedMotion()
  React.useEffect(()=>{document.body.classList.toggle('age-gate-open',!verified);return()=>document.body.classList.remove('age-gate-open')},[verified])
  const enter=()=>{try{sessionStorage.setItem('lagom-age-verified','true')}catch{}setVerified(true)}
  return <Presence>
    {!verified&&<m.div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title" initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduceMotion?0:motionTokens.duration.fast}}>
      <m.div className="age-gate__panel" initial={reduceMotion?false:{opacity:0,y:14,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:8,scale:.99}} transition={reduceMotion?{duration:0}:motionTokens.springSnappy}>
        <img src="/lagom-logo.svg" alt="Lagom Naturals"/>
        <p className="age-gate__eyebrow">THC SELTZER · FOR ADULTS</p>
        <h1 id="age-gate-title">Are you 21 or older?</h1>
        <p>You must be 21 or older to enter. Passing this gate does not establish legal purchase eligibility.</p>
        <button type="button" autoFocus onClick={enter}>YES, I’M 21+</button>
        <button type="button" className="age-gate__exit" onClick={()=>window.location.replace('https://www.google.com/')}>NO, EXIT SITE</button>
      </m.div>
    </m.div>}
  </Presence>
}

function getRouteMeta(pathname){
  if(pathname.startsWith('/product/'))return{title:'THC Seltzer | Lagom Naturals',label:'Drink details',description:'Explore flavor, format, and responsible-use information for Lagom THC seltzer.'}
  if(pathname.startsWith('/merch/'))return{title:'Apparel | Lagom Naturals',label:'Apparel details',description:'Review Lagom Naturals apparel details and availability.'}
  return routeMeta[pathname]||{title:'Lagom Naturals',label:'Lagom Naturals',description:'Premium hemp-derived THC seltzer.'}
}

function AnimatedStorefront(){
  const location=useLocation()
  const navigationType=useNavigationType()
  const routeKey=`${location.pathname}${location.search}`
  const meta=getRouteMeta(location.pathname)
  const scrollPositions=React.useRef(new Map())
  const previousLocation=React.useRef(null)

  React.useLayoutEffect(()=>{
    if('scrollRestoration' in window.history)window.history.scrollRestoration='manual'
    return()=>{if('scrollRestoration' in window.history)window.history.scrollRestoration='auto'}
  },[])

  React.useLayoutEffect(()=>{
    const previous=previousLocation.current
    if(previous)scrollPositions.current.set(previous.key,previous.scrollY)

    const destination=scrollPositions.current.get(location.key)
    const nextY=navigationType==='POP'&&destination!=null?destination:0
    window.scrollTo({top:nextY,left:0,behavior:'auto'})
    previousLocation.current={key:location.key,scrollY:nextY}

    const capture=()=>{
      if(previousLocation.current?.key===location.key)previousLocation.current.scrollY=window.scrollY
    }
    window.addEventListener('scroll',capture,{passive:true})
    return()=>{
      window.removeEventListener('scroll',capture)
      if(previousLocation.current?.key===location.key)previousLocation.current.scrollY=window.scrollY
    }
  },[location.key,navigationType,routeKey])

  React.useEffect(()=>{
    document.title=meta.title
    const description=document.querySelector('meta[name="description"]')
    const ogTitle=document.querySelector('meta[property="og:title"]')
    const ogDescription=document.querySelector('meta[property="og:description"]')
    if(description)description.setAttribute('content',meta.description)
    if(ogTitle)ogTitle.setAttribute('content',meta.title)
    if(ogDescription)ogDescription.setAttribute('content',meta.description)
  },[routeKey,meta.title,meta.description])

  return <>
    <div className="route-announcer" role="status" aria-live="polite" aria-atomic="true">{meta.label}</div>
    <RouteMotion routeKey={routeKey} navigationType={navigationType}><App /></RouteMotion>
  </>
}

function StorefrontExperience(){return <AppMotionProvider><AgeGate/><AnimatedStorefront/><SiteFooter/></AppMotionProvider>}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter basename={routerBase}>
        <StorefrontExperience />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
)
