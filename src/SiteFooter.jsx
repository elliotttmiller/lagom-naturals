import {Link} from 'react-router-dom'

function InstagramIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.6" r="1" className="social-fill"/></svg>}
function FacebookIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.8l.45-3.2H14.2V7.75c0-.93.3-1.56 1.63-1.56h1.73V3.33A23.2 23.2 0 0 0 15.03 3c-2.5 0-4.21 1.52-4.21 4.32V9.8H8v3.2h2.82v8h3.38Z" className="social-fill"/></svg>}
function XIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4l14 16M19 4 5 20"/></svg>}

export default function SiteFooter(){
  return <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__brand">
        <Link to="/" aria-label="Lagom Naturals home"><img src="/lagom-logo.svg" alt="Lagom Naturals"/></Link>
      </div>
      <nav className="site-footer__group" aria-label="Shop"><h4>Shop</h4><Link to="/shop">All Products</Link><Link to="/shop?category=Seltzers">Drinks</Link><Link to="/shop?category=Gummies">Gummies</Link></nav>
      <nav className="site-footer__group" aria-label="Explore"><h4>Explore</h4><Link to="/visit">Find Us</Link><Link to="/about">Our Story</Link><Link to="/merch">Merch</Link></nav>
      <nav className="site-footer__group" aria-label="Help"><h4>Help</h4><Link to="/account">Account</Link><Link to="/learn">FAQ</Link><Link to="/visit">Contact Us</Link></nav>
      <div className="site-footer__bottom">
        <div className="site-footer__socials" aria-label="Lagom Naturals social media">
          <span className="site-footer__social" role="img" aria-label="Instagram"><InstagramIcon/></span>
          <span className="site-footer__social" role="img" aria-label="Facebook"><FacebookIcon/></span>
          <span className="site-footer__social" role="img" aria-label="X"><XIcon/></span>
        </div>
        <div className="site-footer__legal"><span>© 2026 Lagom Naturals</span><span>For adults 21+. Please enjoy responsibly.</span></div>
      </div>
    </div>
  </footer>
}
