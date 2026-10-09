import React,{useEffect,useRef,useState} from 'react'
import {Link,NavLink,useLocation,useNavigate} from 'react-router-dom'
import {ArrowLeft,ArrowRight,ChevronDown,ChevronRight,Search,ShoppingBag,User} from 'lucide-react'
import HamburgerToggle from '@/HamburgerToggle'
import {Presence,m,motionTokens,motionVariants,useReducedMotion} from '@/motionSystem'
import {responsiveImages} from '@/generated/responsiveImages'
import {useCart} from './StorefrontContext'
import {openCartDrawer} from './cartDrawerEvents'

const PUBLIC_BASE=import.meta.env.BASE_URL
const publicAsset=name=>`${PUBLIC_BASE}${name.replace(/^\//,'')}`

const SHOP_PANEL_MEDIA={
  watermelon:responsiveImages.seltzerDesktopFlavors['watermelon'],
  blackberry:responsiveImages.seltzerDesktopFlavors['blackberry'],
  seltzersThumbnail:responsiveImages.categories['seltzers-thumbnail'],
  gummiesThumbnail:responsiveImages.categories['gummies-thumbnail'],
  berryMelon:responsiveImages.homeGummies['Berry-Melon-Bliss-Photoroom-900x900'],
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
    media:SHOP_PANEL_MEDIA.seltzersThumbnail,
    mediaClass:'seltzers',
    accent:'#8650a9',
  },
  {
    index:'03',
    title:'Gummies',
    description:'Flavorful, easygoing favorites.',
    to:'/shop/gummies',
    media:SHOP_PANEL_MEDIA.gummiesThumbnail,
    mediaClass:'gummies',
    accent:'#d74d7b',
  },
]

function Logo({onClick,className=''}){return <Link to="/" className={`brand ${className}`} onClick={onClick}>
  <img className="brand__logo brand__logo--dark" src={publicAsset("enhanced-lagom-logo.webp")} alt="Lagom Naturals"/>
  <img className="brand__logo brand__logo--light" src={publicAsset("enhanced-lagom-naturals-logo-white.webp")} alt="" aria-hidden="true"/>
</Link>}

function MenuPicture({media,className='',sizes='(min-width:900px) 22vw, 100vw'}) {
  if(!media)return null
  return <picture className={className} aria-hidden="true">
    {media.avifSrcSet?<source type="image/avif" srcSet={media.avifSrcSet} sizes={sizes}/>:null}
    {media.webpSrcSet?<source type="image/webp" srcSet={media.webpSrcSet} sizes={sizes}/>:null}
    <img src={media.src} alt="" loading="lazy" decoding="async" draggable="false"/>
  </picture>
}

function MenuMedia({items,className=''}) {
  const mediaItems=Array.isArray(items)?items:[items]
  const isSingleImage=mediaItems.length===1
  const imageSizes=isSingleImage?'(min-width:900px) 64vw, 100vw':undefined
  return <div className={`desktop-shop-panel__media-grid${isSingleImage?' desktop-shop-panel__media-grid--single':''} ${className}`} aria-hidden="true">
    {mediaItems.filter(Boolean).map((media,index)=>(
      <MenuPicture key={index} media={media} sizes={imageSizes} className={`desktop-shop-panel__media-piece desktop-shop-panel__media-piece--${index+1}`}/>
    ))}
  </div>
}

function DesktopShopPanel({onClose,reduceMotion,currentPath}){
  const routeIndex=SHOP_PANEL_CARDS.findIndex(card=>card.to===currentPath)
  const [activeIndex,setActiveIndex]=useState(routeIndex>=0?routeIndex:0)
  const tabRefs=useRef([])
  const activeCard=SHOP_PANEL_CARDS[activeIndex]
  const focusTab=index=>{
    const next=(index+SHOP_PANEL_CARDS.length)%SHOP_PANEL_CARDS.length
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }
  return <m.div
    id="desktop-shop-panel"
    className="desktop-shop-panel"
    role="region"
    aria-label="Shop collections"
    initial={reduceMotion?false:{opacity:0,y:-5}}
    animate={{opacity:1,y:0}}
    exit={reduceMotion?{opacity:0}:{opacity:0,y:-3}}
    transition={reduceMotion?{duration:0}:{duration:.24,ease:motionTokens.ease}}
  >
    <div className="desktop-shop-panel__inner">
      <div className="desktop-shop-panel__navigation">
        <span className="desktop-shop-panel__eyebrow">Shop Lagom</span>
        <div className="desktop-shop-panel__tabs" role="tablist" aria-label="Shop categories">
          {SHOP_PANEL_CARDS.map((card,index)=><button
            key={card.title}
            ref={element=>{tabRefs.current[index]=element}}
            type="button"
            role="tab"
            id={`desktop-shop-tab-${index}`}
            aria-selected={activeIndex===index}
            aria-controls="desktop-shop-collection"
            tabIndex={activeIndex===index?0:-1}
            className={`desktop-shop-panel__tab${activeIndex===index?' is-active':''}`}
            style={{'--menu-accent':card.accent}}
            onClick={()=>setActiveIndex(index)}
            onMouseEnter={()=>setActiveIndex(index)}
            onKeyDown={event=>{
              if(event.key==='ArrowDown'||event.key==='ArrowRight'){event.preventDefault();focusTab(index+1)}
              else if(event.key==='ArrowUp'||event.key==='ArrowLeft'){event.preventDefault();focusTab(index-1)}
              else if(event.key==='Home'){event.preventDefault();focusTab(0)}
              else if(event.key==='End'){event.preventDefault();focusTab(SHOP_PANEL_CARDS.length-1)}
            }}
          >
            <span className="desktop-shop-panel__tab-index">{card.index}</span>
            <span className="desktop-shop-panel__tab-label">{card.title}</span>
            <ArrowRight aria-hidden="true"/>
          </button>)}
        </div>
        <NavLink className="desktop-shop-panel__all-link" to="/shop" end onClick={onClose}>Explore all products <ArrowRight aria-hidden="true"/></NavLink>
      </div>
      <div className="desktop-shop-panel__feature" role="tabpanel" id="desktop-shop-collection" aria-labelledby={`desktop-shop-tab-${activeIndex}`}>
        <Presence initial={false} mode="wait">
          <m.div
            className={`desktop-shop-panel__feature-content desktop-shop-panel__feature-content--${activeCard.mediaClass}`}
            key={activeCard.title}
            initial={reduceMotion?false:{opacity:0,scale:1.015}}
            animate={{opacity:1,scale:1}}
            exit={reduceMotion?{opacity:0}:{opacity:0,scale:1.01}}
            transition={reduceMotion?{duration:0}:{duration:.22,ease:motionTokens.ease}}
          >
            <MenuMedia items={activeCard.media} className={`desktop-shop-panel__media desktop-shop-panel__media--${activeCard.mediaClass} desktop-shop-panel__feature-media`}/>
            <div className="desktop-shop-panel__feature-shade" aria-hidden="true"/>
            <div className="desktop-shop-panel__feature-copy">
              <span className="desktop-shop-panel__feature-kicker">Lagom Naturals · {activeCard.index}</span>
              <h2>{activeCard.title}</h2>
              <p>{activeCard.description}</p>
              <NavLink to={activeCard.to} end={activeCard.to==='/shop'} onClick={onClose} className="desktop-shop-panel__feature-link">Discover {activeCard.title.toLowerCase()} <ArrowRight aria-hidden="true"/></NavLink>
            </div>
          </m.div>
        </Presence>
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
  const shopBackdropTransition=reduceMotion?{duration:0}:{duration:.2,ease:motionTokens.ease}
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
          <m.button type="button" className="icon-btn cart-icon" aria-label={`Open cart, ${count} items`} aria-haspopup="dialog" onClick={event=>openCartDrawer(event.currentTarget)} whileTap={motionTokens.tap}><ShoppingBag/><span>Cart ({count})</span>{count>0&&<b>{count}</b>}</m.button>
        </div>
      </div>
      <Presence initial={false}>
        {shopOpen&&<DesktopShopPanel onClose={()=>setShopOpen(false)} reduceMotion={reduceMotion} currentPath={location.pathname}/>}
      </Presence>
    </m.header>
    <Presence initial={false}>
      {shopOpen&&<m.div
        className="desktop-shop-backdrop"
        aria-hidden="true"
        initial={reduceMotion?false:{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={shopBackdropTransition}
        onClick={()=>setShopOpen(false)}
      />}
    </Presence>
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
