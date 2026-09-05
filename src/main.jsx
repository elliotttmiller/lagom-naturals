import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import './responsive.css'

function SiteFooter(){return <footer className="site-footer"><div className="site-footer__inner"><div className="site-footer__brand"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><p>Premium cannabis from trusted brands, thoughtfully curated for a more balanced you.</p></div><div><h4>Shop</h4><a href="/shop">All products</a><a href="/shop?category=Beverages">Beverages</a><a href="/shop?category=Edibles">Edibles</a><a href="/merch">Apparel & merch</a></div><div><h4>Visit</h4><a href="/visit">North Loop store</a><span>730 N Washington Ave</span><span>Minneapolis, MN 55401</span></div><div><h4>Lagom</h4><a href="/about">About us</a><a href="/account">Rewards</a><a href="/account">My account</a></div></div><div className="site-footer__bottom"><span>© 2026 Lagom Naturals</span><span>For adults 21+. Please enjoy responsibly.</span></div></footer>}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <SiteFooter />
    </BrowserRouter>
  </React.StrictMode>,
)
