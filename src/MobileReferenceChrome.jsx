import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {ShoppingBag,Search,User,ChevronDown,ChevronRight,PackageCheck,Gift,Settings,Bell,CircleHelp,X} from 'lucide-react'
import HamburgerToggle from './HamburgerToggle'
import {Presence,m,motionTokens,motionVariants,useReducedMotion} from './motionSystem'
import {responsiveImages} from '@/generated/responsiveImages'

const mobileHero=responsiveImages.heroMobile.hero.src

const drawerItems=[['Merch','/merch'],['Our Story','/about'],['Find Us','/visit'],['Account','account'],['FAQ','/learn'],['Contact Us','/visit']]
const shopDrawerItems=[['All Products','/shop'],['Seltzers','/shop/seltzers'],['Gummies','/shop/gummies']]
const socialLinks=[['Instagram','https://www.instagram.com/lagomnaturalsmn?stkn=MXc1cnEyY2s2OTh2aQ==',InstagramIcon],['X','https://x.com/lagomnaturalsmn?s=21&t=o19JKEqucRv55S5u6wBKXQ',XSocialIcon],['Facebook','https://www.facebook.com/share/19fFEcDKpR/?mibextid=wwXIfr',FacebookIcon]]
const accountRows=[[PackageCheck,'My Orders','orders']]
const accountLower=[[Settings,'Account Settings','settings'],[Bell,'Notifications','notifications'],[CircleHelp,'Help & Support','support']]
const logoIcon=`${import.meta.env.BASE_URL}lagom-logo-icon.svg`
const headerLogo=`${import.meta.env.BASE_URL}enhanced-lagom-logo.webp`

function InstagramIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.6" r="1" className="social-fill"/></svg>}
function FacebookIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.8l.45-3.2H14.2V7.75c0-.93.3-1.56 1.63-1.56h1.73V3.33A23.2 23.2 0 0 0 15.03 3c-2.5 0-4.21 1.52-4.21 4.32V9.8H8v3.2h2.82v8h3.38Z" className="social-fill"/></svg>}
function XSocialIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4l14 16M19 4 5 20"/></svg>}

function DrawerTop({label,onClose,menu=false}){
  if(menu){
    return <div className="mobile-drawer-top mobile-drawer-top--menu">
      <HamburgerToggle
        className="mobile-drawer-top__hamburger"
        checked
        onChange={()=>onClose()}
        controls="mobile-reference-menu"
        label="Close menu"
      />
      <Link className="mobile-drawer-top__center-brand" to="/" aria-label="Lagom Naturals home" onClick={onClose}>
        <img src={logoIcon} alt="" aria-hidden="true"/>
      </Link>
      <span className="mobile-drawer-top__spacer" aria-hidden="true"/>
    </div>
  }

  return <div className="mobile-drawer-top">
    <Link className="mobile-drawer-top__brand" to="/" aria-label="Lagom Naturals home" onClick={onClose}><img src={logoIcon} alt="" aria-hidden="true"/></Link>
    <span>{label}</span>
    <m.button type="button" aria-label={`Close ${label.toLowerCase()}`} onClick={onClose} whileTap={motionTokens.tap}><X/></m.button>
  </div>
}

function cartCount(){try{return (JSON.parse(localStorage.getItem('lagom-beverage-cart-v1')||'[]')||[]).reduce((sum,item)=>sum+(item.qty||0),0)}catch{return 0}}

export default function MobileReferenceChrome(){
  const location=useLocation()
  const navigate=useNavigate()
  const reduceMotion=useReducedMotion()
  const[menuOpen,setMenuOpen]=React.useState(false)
  const[shopExpanded,setShopExpanded]=React.useState(false)
  const[accountOpen,setAccountOpen]=React.useState(false)
  const[count,setCount]=React.useState(cartCount)
  const[homeScrolled,setHomeScrolled]=React.useState(false)
  const accountTimerRef=React.useRef(null)

  const isHome=location.pathname==='/',isAbout=location.pathname==='/about',isDetail=location.pathname.startsWith('/product/')||location.pathname.startsWith('/merch/'),isRecipes=location.pathname==='/recipes'

  React.useEffect(()=>{
    setMenuOpen(false)
    setShopExpanded(false)
    setAccountOpen(false)
    document.body.classList.toggle('mobile-recipes-route',isRecipes)
    const update=()=>setCount(cartCount())
    const onCartUpdated=event=>{const nextCount=Number(event.detail?.count);setCount(Number.isFinite(nextCount)?nextCount:cartCount())}
    update()
    window.addEventListener('storage',update)
    window.addEventListener('lagom:cart-updated',onCartUpdated)
    return()=>{document.body.classList.remove('mobile-recipes-route');window.removeEventListener('storage',update);window.removeEventListener('lagom:cart-updated',onCartUpdated)}
  },[location.pathname,isRecipes])

  React.useEffect(()=>{
    document.body.classList.toggle('mobile-menu-open',menuOpen||accountOpen)
    return()=>document.body.classList.remove('mobile-menu-open')
  },[menuOpen,accountOpen])

  React.useEffect(()=>{
    if(!isHome){setHomeScrolled(false);return undefined}
    const media=window.matchMedia('(max-width: 899px)')
    if(!media.matches)return undefined
    let frame=0
    const update=()=>{
      if(frame)cancelAnimationFrame(frame)
      frame=requestAnimationFrame(()=>{
        const hero=document.querySelector('.sky-home .beverage-hero')
        if(!(hero instanceof HTMLElement)){setHomeScrolled(window.scrollY>72);return}
        const headerHeight=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mobile-header-row-h'))||72
        setHomeScrolled(hero.getBoundingClientRect().bottom<=headerHeight+8)
      })
    }
    update()
    window.addEventListener('scroll',update,{passive:true})
    window.addEventListener('resize',update,{passive:true})
    return()=>{if(frame)cancelAnimationFrame(frame);window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}
  },[isHome])

  React.useEffect(()=>()=>window.clearTimeout(accountTimerRef.current),[])

  const openAccount=()=>{
    window.clearTimeout(accountTimerRef.current)
    if(menuOpen){
      setMenuOpen(false)
      accountTimerRef.current=window.setTimeout(()=>setAccountOpen(true),reduceMotion?0:130)
    }else setAccountOpen(true)
  }
  const goAccount=view=>{setAccountOpen(false);navigate(`/account?view=${view}`)}

  const backdropTransition=reduceMotion?{duration:0}:{duration:motionTokens.duration.control,ease:motionTokens.ease}
  const accountPanelTransition=reduceMotion?{duration:0}:motionTokens.springDrawer

  return <>
    <header className={`mobile-reference-header${isHome?' is-home':''}${isHome&&homeScrolled?' is-home-scrolled':''}${isAbout?' is-about':''}`}>
      {isAbout&&<p className="mobile-reference-header__notice">HEMP-DERIVED THC · FOR ADULTS 21+ · ENJOY RESPONSIBLY</p>}
      {isDetail
        ?<m.button type="button" className="mobile-reference-header__left" aria-label="Go back" onClick={()=>navigate(-1)} whileTap={motionTokens.tap}><span className="mobile-back-glyph">‹</span></m.button>
        :<HamburgerToggle className="mobile-reference-header__left" checked={menuOpen} onChange={setMenuOpen} controls="mobile-reference-menu" label={menuOpen?'Close menu':'Open menu'}/>}
      <Link className="mobile-reference-header__brand" to="/" aria-label="Lagom Naturals home" onClick={()=>setMenuOpen(false)}><img src={headerLogo} alt="Lagom Naturals"/></Link>
      <div className="mobile-reference-header__tools">
        {!isDetail&&<Link to="/shop" aria-label="Search"><Search/></Link>}
        {isAbout&&<m.button type="button" aria-label="Open account" onClick={openAccount} whileTap={motionTokens.tap}><User/></m.button>}
        <Link className="mobile-reference-cart" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/>{count>0&&<b>{count}</b>}</Link>
      </div>
    </header>

    <Presence initial={false}>
      {menuOpen&&<m.div
        key="mobile-menu"
        className="mobile-reference-menu-backdrop is-open"
        initial={reduceMotion?false:{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={backdropTransition}
        onClick={()=>setMenuOpen(false)}
      >
        <m.aside
          id="mobile-reference-menu"
          className="mobile-reference-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={reduceMotion?false:{opacity:0,y:-14,scale:.997}}
          animate={{opacity:1,y:0,scale:1}}
          exit={reduceMotion?{opacity:0}:{opacity:0,y:-8,scale:.998}}
          transition={reduceMotion?{duration:0}:{type:'spring',stiffness:190,damping:25,mass:.92}}
          onClick={e=>e.stopPropagation()}
        >
          <DrawerTop label="Menu" menu onClose={()=>setMenuOpen(false)}/>
          <m.nav initial={reduceMotion?false:'hidden'} animate="visible" exit="exit" variants={motionVariants.stagger}>
            <m.div className="mobile-menu-shop-group" variants={motionVariants.drawerItem}>
              <button
                type="button"
                className={`mobile-reference-menu__link mobile-menu-shop-trigger${shopExpanded?' is-open':''}`}
                aria-expanded={shopExpanded}
                aria-controls="mobile-shop-categories"
                onClick={()=>setShopExpanded(value=>!value)}
              >
                <span>Shop</span>
                <ChevronDown aria-hidden="true"/>
              </button>
              <Presence initial={false}>
                {shopExpanded&&<m.div
                  id="mobile-shop-categories"
                  className="mobile-menu-shop-categories"
                  initial={reduceMotion?false:{height:0,opacity:0,y:-6}}
                  animate={{height:'auto',opacity:1,y:0}}
                  exit={reduceMotion?{height:0,opacity:0}:{height:0,opacity:0,y:-4}}
                  transition={reduceMotion?{duration:0}:{height:{duration:.38,ease:[.16,1,.3,1]},opacity:{duration:.24,ease:'easeOut'},y:{duration:.32,ease:[.16,1,.3,1]}}}
                >
                  {shopDrawerItems.map(([label,to],index)=><m.div
                    key={label}
                    initial={reduceMotion?false:{opacity:0,x:-8}}
                    animate={{opacity:1,x:0}}
                    transition={reduceMotion?{duration:0}:{delay:.045*index,duration:.28,ease:[.16,1,.3,1]}}
                  >
                    <Link to={to} onClick={()=>setMenuOpen(false)}>
                      <span>{label}</span>
                      <ChevronRight aria-hidden="true"/>
                    </Link>
                  </m.div>)}
                </m.div>}
              </Presence>
            </m.div>
            {drawerItems.map(([label,to])=><m.div key={label} variants={motionVariants.drawerItem}>
              {to==='account'
                ?<button type="button" className="mobile-reference-menu__link" onClick={openAccount}><span>{label}</span><ChevronRight/></button>
                :<Link to={to} onClick={()=>setMenuOpen(false)}><span>{label}</span><ChevronRight/></Link>}
            </m.div>)}
          </m.nav>
          <m.div className="mobile-reference-menu__footer" initial={reduceMotion?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={reduceMotion?{duration:0}:{delay:.18,...motionTokens.springSoft}}>
            <p>Follow Lagom</p>
            <div className="mobile-reference-menu__social" aria-label="Lagom Naturals social media">
              {socialLinks.map(([label,href,Icon])=><m.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — Lagom Naturals`} whileTap={motionTokens.tap}><Icon/></m.a>)}
            </div>
          </m.div>
        </m.aside>
      </m.div>}
    </Presence>

    <Presence initial={false}>
      {accountOpen&&<m.div
        key="mobile-account"
        className="mobile-account-backdrop is-open"
        initial={reduceMotion?false:{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={backdropTransition}
        onClick={()=>setAccountOpen(false)}
      >
        <m.aside
          className="mobile-account-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Account"
          initial={reduceMotion?false:{x:'100%'}}
          animate={{x:0}}
          exit={reduceMotion?{x:0}:{x:'100%'}}
          transition={accountPanelTransition}
          onClick={e=>e.stopPropagation()}
        >
          <DrawerTop label="Account" onClose={()=>setAccountOpen(false)}/>
          <m.div className="mobile-account-welcome" initial={reduceMotion?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={reduceMotion?{duration:0}:motionTokens.springSoft}><span><p>Welcome to</p><h2>Lagom</h2></span></m.div>
          <m.div className="mobile-account-rows" initial={reduceMotion?false:'hidden'} animate="visible" exit="exit" variants={motionVariants.stagger}>
            {accountRows.map(([Icon,label,view])=><m.button variants={motionVariants.drawerItem} type="button" key={label} onClick={()=>goAccount(view)} whileTap={motionTokens.tap}><Icon/><span>{label}</span><ChevronRight/></m.button>)}
            <m.button variants={motionVariants.drawerItem} type="button" className="mobile-account-reward" onClick={()=>goAccount('rewards')} whileTap={motionTokens.tap}><Gift/><span><b>Rewards</b><small>Shop. Earn. Get more.</small></span><ChevronRight/></m.button>
            {accountLower.map(([Icon,label,view])=><m.button variants={motionVariants.drawerItem} type="button" key={label} onClick={()=>goAccount(view)} whileTap={motionTokens.tap}><Icon/><span>{label}</span><ChevronRight/></m.button>)}
          </m.div>
          <m.p className="mobile-account-drawer__note" initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} transition={reduceMotion?{duration:0}:{delay:.2,duration:motionTokens.duration.base,ease:motionTokens.ease}}>Customer-specific account data requires connection to the commerce and customer account backend.</m.p>
        </m.aside>
      </m.div>}
    </Presence>

    {isRecipes&&<main className="mobile-recipes-page"><section className="mobile-recipes-hero"><div className="mobile-recipes-copy"><p>RECIPES &amp; RITUALS</p><h1>Simple<br/>Moments.<br/><em>Elevated.</em></h1><span>Drink recipes, pairing ideas, and lifestyle inspiration for a more balanced you.</span></div><div className="mobile-recipes-image" style={{backgroundImage:`url(${mobileHero})`}}><b>Good Drinks<br/>Brighter Days.</b></div></section><article className="mobile-recipe-card"><div className="mobile-recipe-card__media" style={{backgroundImage:`url(${mobileHero})`}}/><div><h2>The Blush Spritz</h2><p>A light, refreshing mocktail and a touch of lemon.</p><b>VIEW RECIPE →</b></div></article><div className="mobile-recipe-dots"><span>‹</span><i/><i className="is-active"/><i/><i/><span>›</span></div></main>}
  </>
}
