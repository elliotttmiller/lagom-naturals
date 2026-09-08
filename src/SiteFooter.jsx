import {Link} from 'react-router-dom'

export default function SiteFooter(){return <footer className="site-footer"><div className="site-footer__inner">
  <div className="site-footer__brand"><img src="/lagom-logo.svg" alt="Lagom Naturals"/><p>A measured alternative for adult occasions.</p></div>
  <div className="site-footer__group"><h4>Explore</h4><Link to="/shop">Drinks</Link><Link to="/visit">Find Lagom</Link><Link to="/about">Our Story</Link><Link to="/journal">Journal</Link></div>
  <div className="site-footer__group"><h4>Learn</h4><Link to="/learn">THC beverages</Link><Link to="/learn#responsible-use">Responsible use</Link><span>Lab results unavailable</span><span>FAQ coming soon</span></div>
  <div className="site-footer__group"><h4>Connect</h4><span>Wholesale inquiries coming soon</span><span>Retail availability varies</span><span>Minneapolis, Minnesota</span></div>
  <div className="site-footer__bottom"><div className="site-footer__legal"><span>© 2026 Lagom Naturals</span><span>For adults 21+. Do not drive after consuming THC. Keep away from children and pets.</span></div></div>
</div></footer>}
