import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, useLocation, useNavigationType } from 'react-router-dom'
import App from '@/App'
import CartInteractionFeedback from '@/CartInteractionFeedback'
import { AppMotionProvider, Presence, RouteMotion, m, motionTokens, useReducedMotion } from '@/motionSystem'
import './app.css'
import './motion.css'
import './production.css'
import './pdp-polish.css'
import './catalog-polish.css'
import './variant-polish.css'

const routeMeta={
  '/':{title:'Lagom Naturals | Minneapolis Cannabis Dispensary',label:'Home',description:'Premium cannabis products from trusted brands, thoughtfully curated in Minneapolis.'},
  '/shop':{title:'Shop Cannabis | Lagom Naturals',label:'Shop',description:'Browse the current Lagom Naturals cannabis selection by product, brand, and category.'},
  '/merch':{title:'Apparel & Merch | Lagom Naturals',label:'Apparel and merch',description:'Shop Lagom Naturals apparel and merchandise.'},
  '/cart':{title:'Your Cart | Lagom Naturals',label:'Cart',description:'Review your Lagom Naturals cart and pickup selection.'},
  '/checkout':{title:'Pickup Details | Lagom Naturals',label:'Pickup details',description:'Review contact and pickup details for your Lagom Naturals selection.'},
  '/account':{title:'Account | Lagom Naturals',label:'Account',description:'Access Lagom Naturals account, favorites, orders, and rewards.'},
  '/visit':{title:'Visit Lagom Naturals | Minneapolis',label:'Visit our store',description:'Store location, hours, directions, and accessibility information for Lagom Naturals in Minneapolis.'},
  '/about':{title:'About Lagom Naturals',label:'About Lagom Naturals',description:'Learn about the Lagom approach to a clearer, more balanced cannabis retail experience.'},
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
        <p className="age-gate__eyebrow">MINNEAPOLIS, MINNESOTA</p>
        <h1 id="age-gate-title">Are you 21 or older?</h1>
        <p>You must be 21+ to enter this cannabis storefront. Please enjoy responsibly.</p>
        <button type="button" autoFocus onClick={enter}>YES, I’M 21+</button>
        <button type="button" className="age-gate__exit" onClick={()=>window.location.replace('https://www.google.com/')}>NO, EXIT SITE</button>
      </m.div>
    </m.div>}
  </Presence>
}

function SiteFooter(){
  const reduceMotion=useReducedMotion()
  return <m.footer className="site-footer" initial={reduceMotion?false:{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.slow,ease:motionTokens.ease}}>
    <div className="site-footer__inner">
      <div className="site-footer__brand"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><p>Premium cannabis from trusted brands, thoughtfully curated for a more balanced you.</p></div>
      <div><h4>Shop</h4><Link to="/shop">All products</Link><Link to="/shop?category=Beverages">Beverages</Link><Link to="/shop?category=Edibles">Edibles</Link><Link to="/merch">Apparel & merch</Link></div>
      <div><h4>Visit</h4><Link to="/visit">North Loop store</Link><span>730 N Washington Ave</span><span>Minneapolis, MN 55401</span></div>
      <div><h4>Lagom</h4><Link to="/about">About us</Link><Link to="/account">Rewards</Link><Link to="/account">My account</Link></div>
    </div>
    <div className="site-footer__bottom"><span>© 2026 Lagom Naturals</span><span>For adults 21+. Please enjoy responsibly.</span></div>
  </m.footer>
}

function getRouteMeta(pathname){
  if(pathname.startsWith('/product/'))return{title:'Product | Lagom Naturals',label:'Product details',description:'Review product information and current Lagom Naturals availability.'}
  if(pathname.startsWith('/merch/'))return{title:'Apparel | Lagom Naturals',label:'Apparel details',description:'Review Lagom Naturals apparel details and availability.'}
  return routeMeta[pathname]||{title:'Lagom Naturals',label:'Lagom Naturals',description:'Premium cannabis retail in Minneapolis.'}
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

function StorefrontExperience(){return <AppMotionProvider><AgeGate/><CartInteractionFeedback/><AnimatedStorefront/><SiteFooter/></AppMotionProvider>}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter basename={routerBase}>
        <StorefrontExperience />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
)
