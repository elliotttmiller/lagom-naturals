import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react'
import App from './App'
import './styles.css'
import './responsive.css'
import './production.css'

class AppErrorBoundary extends React.Component {
  constructor(props){super(props);this.state={hasError:false}}
  static getDerivedStateFromError(){return{hasError:true}}
  componentDidCatch(error,info){console.error('Lagom storefront render error',error,info)}
  render(){if(this.state.hasError)return <main className="fatal-error"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><h1>Something went wrong.</h1><p>Please refresh the page to continue.</p><button onClick={()=>window.location.reload()}>Refresh</button></main>;return this.props.children}
}

function AgeGate(){
  const[verified,setVerified]=React.useState(()=>{try{return sessionStorage.getItem('lagom-age-verified')==='true'}catch{return false}})
  React.useEffect(()=>{document.body.classList.toggle('age-gate-open',!verified);return()=>document.body.classList.remove('age-gate-open')},[verified])
  if(verified)return null
  const enter=()=>{try{sessionStorage.setItem('lagom-age-verified','true')}catch{}setVerified(true)}
  return <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title"><div className="age-gate__panel"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><p className="age-gate__eyebrow">MINNEAPOLIS, MINNESOTA</p><h1 id="age-gate-title">Are you 21 or older?</h1><p>You must be 21+ to enter this cannabis storefront. Please enjoy responsibly.</p><button autoFocus onClick={enter}>YES, I’M 21+</button><button className="age-gate__exit" onClick={()=>window.location.replace('https://www.google.com/')}>NO, EXIT SITE</button></div></div>
}

function SiteFooter(){return <footer className="site-footer"><div className="site-footer__inner"><div className="site-footer__brand"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><p>Premium cannabis from trusted brands, thoughtfully curated for a more balanced you.</p></div><div><h4>Shop</h4><Link to="/shop">All products</Link><Link to="/shop?category=Beverages">Beverages</Link><Link to="/shop?category=Edibles">Edibles</Link><Link to="/merch">Apparel & merch</Link></div><div><h4>Visit</h4><Link to="/visit">North Loop store</Link><span>730 N Washington Ave</span><span>Minneapolis, MN 55401</span></div><div><h4>Lagom</h4><Link to="/about">About us</Link><Link to="/account">Rewards</Link><Link to="/account">My account</Link></div></div><div className="site-footer__bottom"><span>© 2026 Lagom Naturals</span><span>For adults 21+. Please enjoy responsibly.</span></div></footer>}

const premiumSpring={type:'spring',stiffness:360,damping:34,mass:.78}
const pageEase=[.22,1,.36,1]

function AnimatedStorefront(){
  const location=useLocation()
  const reduceMotion=useReducedMotion()
  const routeKey=`${location.pathname}${location.search}`

  React.useEffect(()=>{
    window.scrollTo({top:0,left:0,behavior:'instant'})
  },[routeKey])

  const initial=reduceMotion?{opacity:1}:{opacity:0,y:10,scale:.997,filter:'blur(2px)'}
  const animate={opacity:1,y:0,scale:1,filter:'blur(0px)'}
  const exit=reduceMotion?{opacity:1}:{opacity:0,y:-5,scale:1.001,filter:'blur(1px)'}

  return <MotionConfig reducedMotion="user" transition={premiumSpring}>
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={routeKey}
        className="route-stage"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={reduceMotion?{duration:0}:{duration:.42,ease:pageEase}}
      >
        <App />
      </m.div>
    </AnimatePresence>
  </MotionConfig>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <LazyMotion features={domAnimation} strict>
          <AgeGate />
          <AnimatedStorefront />
          <SiteFooter />
        </LazyMotion>
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
)
