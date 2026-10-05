import React,{useEffect,useRef,useState} from 'react'
import {Link,NavLink,useLocation,useNavigate} from 'react-router-dom'
import {ArrowLeft,ArrowRight,ChevronDown,ChevronRight,Search,ShoppingBag,User} from 'lucide-react'
import HamburgerToggle from '@/HamburgerToggle'
import {Presence,m,motionTokens,motionVariants,useReducedMotion} from '@/motionSystem'
import {responsiveImages} from '@/generated/responsiveImages'
import {useCart} from './StorefrontContext'

const PUBLIC_BASE=import.meta.env.BASE_URL
const publicAsset=name=>`${PUBLIC_BASE}${name.replace(/^\//,'')}`

const SHOP_PANEL_MEDIA={
  watermelon:responsiveImages.seltzerDesktopFlavors['watermelon'],
  blackberry:responsiveImages.seltzerDesktopFlavors['blackberry'],
  lemonade:responsiveImages.seltzerDesktopFlavors['24k'],
  strawberryLime:responsiveImages.seltzerDesktopFlavors['Strawberry Lime Splash Seltzer Ad (1)'],
  berryMelon:responsiveImages.homeGummies['Berry-Melon-Bliss-Photoroom-900x900'],
  blueRazz:responsiveImages.homeGummies['Blue-Razz-Photoroom-Photoroom-1-900x900'],
  cherry:responsiveImages.homeGummies['Cherry-Bliss-Photoroom-900x900'],
}

const SHOP_PANEL_CARDS=[
  {
    index:'01',
    title:'All Products',
    description:'Explore the full collection.',
    to:'/shop',
    media:[SHOP_PANEL_MEDIA.watermelon,SHOP_PANEL_MEDIA.berryMelon,SHOP_PANEL_MEDIA.blackberry],
    mediaClass:'all-products',
    accent:'#d95f63',
  },
  {
    index:'02',
    title:'Seltzers',
    description:'Bright, sparkling THC drinks.',
    to:'/shop/seltzers',
    media:[SHOP_PANEL_MEDIA.strawberryLime,SHOP_PANEL_MEDIA.blackberry,SHOP_PANEL_MEDIA.lemonade],
    mediaClass:'seltzers',
    accent:'#8650a9',
  },
  {
    index:'03',
    title:'Gummies',
    description:'Flavorful, easygoing favorites.',
    to:'/shop/gummies',
    media:[SHOP_PANEL_MEDIA.berryMelon,SHOP_PANEL_MEDIA.blueRazz,SHOP_PANEL_MEDIA.cherry],
    mediaClass:'gummies',
    accent:'#d74d7b',
  },
]

function Logo({onClick,className=''}){return <Link to="/" className={`brand ${className}`} onClick={onClick}><img src={publicAsset("enhanced-lagom-logo.webp")} alt="Lagom Naturals"/></Link>}

function MenuPicture({media,className=''}) {
  if(!media)return null
  return <picture className={className} aria-hidden="true">
    {media.avifSrcSet?<source type="image/avif" srcSet={media.avifSrcSet} sizes="(min-width:1100px) 12vw, 180px"/>:null}
    {media.webpSrcSet?<source type="image/webp" srcSet={media.webpSrcSet} sizes="(min-width:1100px) 12vw, 180px"/>:null}
    <img src={media.src} alt="" loading="lazy" decoding="async" draggable="false"/>
  </picture>
}

function MenuMedia({items}) {
  const mediaItems=Array.isArray(items)?items:[items]
  return <div className="desktop-shop-panel__media-grid" aria-hidden="true">
    {mediaItems.filter(Boolean).map((media,index)=>(
      <MenuPicture key={index} media={media} className={`desktop-shop-panel__media-piece desktop-shop-panel__media-piece--${index+1}`}/>
    ))}
  </div>
}

function DesktopShopPanel({onClose,reduceMotion}){
  const itemTransition=reduceMotion?{duration:0}:motionTokens.springSoft
  return <m.div
    id="desktop-shop-panel"
    className="desktop-shop-panel"
    role="region"
    aria-label="Shop products"
    initial={reduceMotion?false:{opacity:0,y:-8,scale:.998,clipPath:'inset(0 0 9% 0 round 26px)'}}
    animate={{opacity:1,y:0,scale:1,clipPath:'inset(0 0 0% 0 round 26px)'}}
    exit={reduceMotion?{opacity:0}:{opacity:0,y:-6,scale:.999,clipPath:'inset(0 0 7% 0 round 26px)'}}
    transition={reduceMotion?{duration:0}:{duration:.42,ease:[.16,1,.3,1]}}
  >
    <div className="desktop-shop-panel__inner">
      <m.div
        className="desktop-shop-panel__intro"
        initial={reduceMotion?false:{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        transition={reduceMotion?{duration:0}:{delay:.06,duration:.38,ease:[.16,1,.3,1]}}
      >
        <span className="desktop-shop-panel__eyebrow">Shop Lagom</span>
        <h2>Find your kind<br/>of balance.</h2>
        <i className="desktop-shop-panel__accent" aria-hidden="true"/>
        <p>Functional THC beverages and gummies for a brighter, more balanced you.</p>
        <Link className="desktop-shop-panel__explore" to="/shop" onClick={onClose}>
          <span>Explore collection</span>
          <ArrowRight aria-hidden="true"/>
        </Link>
        <span className="desktop-shop-panel__botanical" aria-hidden="true"><i/><i/><i/></span>
      </m.div>

      <div className="desktop-shop-panel__cards desktop-shop-panel__cards--full-width-nav">
        {SHOP_PANEL_CARDS.map((card,index)=>(
          <m.div
            className="desktop-shop-panel__card-shell"
            key={card.title}
            initial={reduceMotion?false:{opacity:0,y:12,scale:.99}}
            animate={{opacity:1,y:0,scale:1}}
            transition={reduceMotion?{duration:0}:{...itemTransition,delay:.08+index*.045}}
          >
            <NavLink className="desktop-shop-panel__card desktop-shop-panel__card--glass-stack" style={{'--menu-accent':card.accent}} to={card.to} end={card.to==='/shop'} onClick={onClose}>
              <div className={`desktop-shop-panel__media desktop-shop-panel__media--${card.mediaClass}`}>
                <span className="desktop-shop-panel__number">{card.index}</span>
                <MenuMedia items={card.media}/>
              </div>
              <div className="desktop-shop-panel__card-copy">
                <strong>{card.title}</strong>
                <small>{card.description}</small>
                <span className="desktop-shop-panel__card-arrow" aria-hidden="true"><ArrowRight/></span>
              </div>
            </NavLink>
          </m.div>
        ))}
      </div>
    </div>
  </m.div>
}

export function StorefrontHeader({detail=false}){
  const{count}=useCart()
  const location=useLocation()
  const[open,setOpen]=useState(false)
  const[shopOpen,setShopOpen]=useState(false)
  const reduceMotion=useReducedMotion()
  const nav=useNavigate(),drawerRef=useRef(null),closeRef=useRef(null)
  const close=()=>setOpen(false)
  const toggle=next=>setOpen(next)

  useEffect(()=>{const openMenu=()=>setOpen(true);window.addEventListener('lagom:open-site-menu',openMenu);return()=>window.removeEventListener('lagom:open-site-menu',openMenu)},[])

  useEffect(()=>{
    if(!open)return undefined
    const previous=document.activeElement,overflow=document.body.style.overflow
    document.body.style.overflow='hidden'
    requestAnimationFrame(()=>closeRef.current?.focus())
    const key=e=>{
      if(e.key==='Escape'){e.preventDefault();close();return}
      if(e.key!=='Tab')return
      const list=drawerRef.current?.querySelectorAll('a[href],button:not([disabled])')
      if(!list?.length)return
      const first=list[0],last=list[list.length-1]
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
    document.addEventListener('keydown',key)
    return()=>{document.removeEventListener('keydown',key);document.body.style.overflow=overflow;previous?.focus?.()}
  },[open])

  const isShopRoute=location.pathname==='/shop'||location.pathname.startsWith('/shop/')
  useEffect(()=>{setShopOpen(false)},[location.pathname])
  useEffect(()=>{
    if(!shopOpen)return undefined
    const onKeyDown=event=>{if(event.key==='Escape'){setShopOpen(false);document.querySelector('.desktop-nav__shop-trigger')?.focus()}}
    const onPointerDown=event=>{if(!event.target.closest('.desktop-nav__shop,.desktop-shop-panel'))setShopOpen(false)}
    document.addEventListener('keydown',onKeyDown)
    document.addEventListener('pointerdown',onPointerDown)
    return()=>{document.removeEventListener('keydown',onKeyDown);document.removeEventListener('pointerdown',onPointerDown)}
  },[shopOpen])
  const drawerLinks=[['All Products','/shop'],['Seltzers','/shop/seltzers'],['Gummies','/shop/gummies'],['Merch','/merch'],['Our Story','/about'],['Find Us','/visit']]
  const backdropTransition=reduceMotion?{duration:0}:{duration:motionTokens.duration.control,ease:motionTokens.ease}
  const drawerTransition=reduceMotion?{duration:0}:motionTokens.springDrawer

  return <>
    <m.header className={`site-header ${detail?'site-header--commerce site-header--detail':''} ${isShopRoute?'site-header--shop-all':''} ${shopOpen?'site-header--shop-open':''}`} layout="position">
      <div className="header-inner">
        {detail?<m.button type="button" className="icon-btn" whileTap={motionTokens.tap} onClick={()=>nav(-1)} aria-label="Back"><ArrowLeft/></m.button>:<HamburgerToggle checked={open} onChange={toggle} controls="site-navigation-drawer" label={open?'Close menu':'Open menu'}/>}
        <Logo className="header-mobile-brand"/>
        <Logo className="desktop-header-brand"/>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="desktop-nav__links">
            <div className={`desktop-nav__shop ${shopOpen?'is-open':''}`}>
              <button type="button" className={`desktop-nav__shop-trigger ${isShopRoute?'active':''}`} aria-haspopup="true" aria-expanded={shopOpen} aria-controls="desktop-shop-panel" onClick={()=>setShopOpen(value=>!value)} onMouseEnter={()=>setShopOpen(true)}>Shop<ChevronDown aria-hidden="true"/></button>
            </div>
            <NavLink to="/merch">Merch</NavLink>
            <NavLink to="/about">Our Story</NavLink>
            <NavLink to="/visit">Find Us</NavLink>
          </div>
        </nav>
        <div className="header-tools">
          <m.button type="button" className="icon-btn header-search" aria-label="Search products" aria-controls="global-search-surface" aria-expanded="false" whileTap={motionTokens.tap} onClick={()=>window.dispatchEvent(new CustomEvent('lagom:open-global-search'))}><Search aria-hidden="true"/><span>Search</span></m.button>
          <Link className="icon-btn header-account" to="/account" aria-label="Account"><User/><span>Account</span></Link>
          <Link className="icon-btn cart-icon" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/><span>Cart ({count})</span>{count>0&&<b>{count}</b>}</Link>
        </div>
      </div>
      <Presence initial={false}>
        {shopOpen&&<DesktopShopPanel onClose={()=>setShopOpen(false)} reduceMotion={reduceMotion}/>}
      </Presence>
    </m.header>
    <Presence initial={false}>
      {open&&<m.div
        key="site-drawer"
        className="drawer-bg"
        initial={reduceMotion?false:{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={backdropTransition}
        onClick={close}
      >
        <m.aside
          ref={drawerRef}
          id="site-navigation-drawer"
          className="drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={reduceMotion?false:{x:'-100%',opacity:.92}}
          animate={{x:0,opacity:1}}
          exit={reduceMotion?{x:0}:{x:'-100%',opacity:.94}}
          transition={drawerTransition}
          onClick={e=>e.stopPropagation()}
        >
          <div className="drawer-top"><Logo onClick={close}/><HamburgerToggle ref={closeRef} checked={open} onChange={toggle} controls="site-navigation-drawer" label="Close menu"/></div>
          <m.nav initial={reduceMotion?false:'hidden'} animate="visible" exit="exit" variants={motionVariants.stagger}>
            {drawerLinks.map(([label,to])=><m.div key={label} variants={motionVariants.drawerItem}><Link to={to} onClick={close}>{label}<ChevronRight/></Link></m.div>)}
          </m.nav>
        </m.aside>
      </m.div>}
    </Presence>
  </>
}

export default function Shell({children,detail=false}){return <div className="app-shell"><div className="announcement">HEMP-DERIVED THC · FOR ADULTS 21+ · ENJOY RESPONSIBLY</div><StorefrontHeader detail={detail}/><main>{children}</main></div>}
