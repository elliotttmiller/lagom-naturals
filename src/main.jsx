import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import App from './App'
import './styles.css'
import './responsive.css'

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

if(import.meta.env.PROD&&'serviceWorker'in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(error=>console.error('Service worker registration failed',error)))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <AgeGate />
        <App />
        <SiteFooter />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>,
)
