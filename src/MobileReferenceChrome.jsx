import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {ShoppingBag,Search,ChevronRight} from 'lucide-react'
import HamburgerToggle from './HamburgerToggle'
import mobileHero from '@/assets/mobile/hero.png'

const drawerItems=[
  ['Shop','/shop'],['Find Us','/visit'],['Our Story','/about'],['Account','/about'],['Recipes','/recipes'],['Merch','/merch'],['Blog','/learn'],['FAQs','/learn'],['Contact','/visit']
]

function cartCount(){
  try{return (JSON.parse(localStorage.getItem('lagom-beverage-cart-v1')||'[]')||[]).reduce((sum,item)=>sum+(item.qty||0),0)}catch{return 0}
}

function SocialGlyph({label,children}){
  return <span className="mobile-reference-menu__social-glyph" aria-label={label} role="img">{children}</span>
}

export default function MobileReferenceChrome(){
  const location=useLocation()
  const navigate=useNavigate()
  const[menuOpen,setMenuOpen]=React.useState(false)
  const[menuVisible,setMenuVisible]=React.useState(false)
  const[count,setCount]=React.useState(cartCount)
  const isHome=location.pathname==='/'
  const isDetail=location.pathname.startsWith('/product/')||location.pathname.startsWith('/merch/')
  const isRecipes=location.pathname==='/recipes'

  React.useEffect(()=>{
    setMenuOpen(false)
    document.body.classList.toggle('mobile-recipes-route',isRecipes)
    const update=()=>setCount(cartCount())
    update()
    window.addEventListener('storage',update)
    const timer=window.setInterval(update,700)
    return()=>{document.body.classList.remove('mobile-recipes-route');window.removeEventListener('storage',update);window.clearInterval(timer)}
  },[location.pathname,isRecipes])

  React.useEffect(()=>{
    document.body.classList.toggle('mobile-menu-open',menuOpen)
    return()=>document.body.classList.remove('mobile-menu-open')
  },[menuOpen])

  React.useEffect(()=>{
    if(menuOpen){
      setMenuVisible(true)
      return
    }
    const timer=window.setTimeout(()=>setMenuVisible(false),560)
    return()=>window.clearTimeout(timer)
  },[menuOpen])

  return <>
    <header className={`mobile-reference-header${isHome?' is-home':''}`}>
      {isDetail
        ? <button type="button" className="mobile-reference-header__left" aria-label="Go back" onClick={()=>navigate(-1)}><span className="mobile-back-glyph">‹</span></button>
        : <HamburgerToggle className="mobile-reference-header__left" checked={menuOpen} onChange={setMenuOpen} controls="mobile-reference-menu" label={menuOpen?'Close menu':'Open menu'}/>}
      <Link className="mobile-reference-header__brand" to="/" aria-label="Lagom Naturals home"><img src="/lagom-logo.svg" alt="Lagom Naturals"/></Link>
      <div className="mobile-reference-header__tools">
        {!isDetail&&<Link to="/shop" aria-label="Search"><Search/></Link>}
        <Link className="mobile-reference-cart" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/>{count>0&&<b>{count}</b>}</Link>
      </div>
    </header>

    {menuVisible&&<div className={`mobile-reference-menu-backdrop${menuOpen?' is-open':''}`} onClick={()=>setMenuOpen(false)}>
      <aside id="mobile-reference-menu" className="mobile-reference-menu" role="dialog" aria-modal="true" aria-label="Site navigation" onClick={e=>e.stopPropagation()}>
        <nav>
          {drawerItems.map(([label,to])=><Link key={label} to={to} onClick={()=>setMenuOpen(false)}><span>{label}</span><ChevronRight/></Link>)}
        </nav>
        <div className="mobile-reference-menu__social" aria-label="Social links">
          <SocialGlyph label="Instagram">◎</SocialGlyph>
          <SocialGlyph label="TikTok">♪</SocialGlyph>
          <SocialGlyph label="Facebook">f</SocialGlyph>
          <SocialGlyph label="YouTube">▶</SocialGlyph>
        </div>
        <div className="mobile-reference-menu__tag">GOOD DRINKS<br/>BRIGHTER DAYS</div>
      </aside>
    </div>}

    {isRecipes&&<main className="mobile-recipes-page">
      <section className="mobile-recipes-hero">
        <div className="mobile-recipes-copy">
          <p>RECIPES &amp; RITUALS</p>
          <h1>Simple<br/>Moments.<br/><em>Elevated.</em></h1>
          <span>Drink recipes, pairing ideas, and lifestyle inspiration for a more balanced you.</span>
        </div>
        <div className="mobile-recipes-image" style={{backgroundImage:`url(${mobileHero})`}}><b>Good Drinks<br/>Brighter Days.</b></div>
      </section>
      <article className="mobile-recipe-card">
        <div className="mobile-recipe-card__media" style={{backgroundImage:`url(${mobileHero})`}}/>
        <div><h2>The Blush Spritz</h2><p>A light, refreshing mocktail and a touch of lemon.</p><b>VIEW RECIPE →</b></div>
      </article>
      <div className="mobile-recipe-dots"><span>‹</span><i/><i className="is-active"/><i/><i/><span>›</span></div>
    </main>}
  </>
}
