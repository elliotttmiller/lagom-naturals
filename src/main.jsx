import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, useLocation } from 'react-router-dom'
import App from './App'
import { AppMotionProvider, Presence, RouteMotion, m, motionTokens, useReducedMotion } from './motionSystem'
import './styles.css'
import './responsive.css'
import './production.css'
import './motion.css'

class AppErrorBoundary extends React.Component {
  constructor(props){super(props);this.state={hasError:false}}
  static getDerivedStateFromError(){return{hasError:true}}
  componentDidCatch(error,info){console.error('Lagom storefront render error',error,info)}
  render(){if(this.state.hasError)return <main className="fatal-error"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><h1>Something went wrong.</h1><p>Please refresh the page to continue.</p><button onClick={()=>window.location.reload()}>Refresh</button></main>;return this.props.children}
}

function AgeGate(){
  const[verified,setVerified]=React.useState(()=>{try{return sessionStorage.getItem('lagom-age-verified')==='true'}catch{return false}})
  const reduceMotion=useReducedMotion()
  React.useEffect(()=>{document.body.classList.toggle('age-gate-open',!verified);return()=>document.body.classList.remove('age-gate-open')},[verified])
  const enter=()=>{try{sessionStorage.setItem('lagom-age-verified','true')}catch{}setVerified(true)}
  return <Presence>
    {!verified&&<m.div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title" initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduceMotion?0:motionTokens.duration.fast}}>
      <m.div className="age-gate__panel" initial={reduceMotion?false:{opacity:0,y:14,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:8,scale:.99}} transition={reduceMotion?{duration:0}:motionTokens.springSnappy}>
        <img src="/lagom-logo.svg" alt="Lagom Naturals"/><p className="age-gate__eyebrow">MINNEAPOLIS, MINNESOTA</p><h1 id="age-gate-title">Are you 21 or older?</h1><p>You must be 21+ to enter this cannabis storefront. Please enjoy responsibly.</p><button autoFocus onClick={enter}>YES, I’M 21+</button><button className="age-gate__exit" onClick={()=>window.location.replace('https://www.google.com/')}>NO, EXIT SITE</button>
      </m.div>
    </m.div>}
  </Presence>
}

function SiteFooter(){const reduceMotion=useReducedMotion();return <m.footer className="site-footer" initial={reduceMotion?false:{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.slow,ease:motionTokens.ease}}><div className="site-footer__inner"><div className="site-footer__brand"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><p>Premium cannabis from trusted brands, thoughtfully curated for a more balanced you.</p></div><div><h4>Shop</h4><Link to="/shop">All products</Link><Link to="/shop?category=Beverages">Beverages</Link><Link to="/shop?category=Edibles">Edibles</Link><Link to="/merch">Apparel & merch</Link></div><div><h4>Visit</h4><Link to="/visit">North Loop store</Link><span>730 N Washington Ave</span><span>Minneapolis, MN 55401</span></div><div><h4>Lagom</h4><Link to="/about">About us</Link><Link to="/account">Rewards</Link><Link to="/account">My account</Link></div></div><div className="site-footer__bottom"><span>© 2026 Lagom Naturals</span><span>For adults 21+. Please enjoy responsibly.</span></div></m.footer>}

function AnimatedStorefront(){
  const location=useLocation()
  const routeKey=`${location.pathname}${location.search}`
  React.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'instant'})},[routeKey])
  return <RouteMotion routeKey={routeKey}><App /></RouteMotion>
}

function StorefrontExperience(){
  return <AppMotionProvider>
    <AgeGate />
    <AnimatedStorefront />
    <SiteFooter />
  </AppMotionProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <StorefrontExperience />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
)
