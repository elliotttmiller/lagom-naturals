import React,{useEffect,useRef,useState} from 'react'
import {Link,NavLink,useLocation,useNavigate} from 'react-router-dom'
import {ArrowLeft,ChevronDown,ChevronRight,Search,ShoppingBag,User} from 'lucide-react'
import HamburgerToggle from '@/HamburgerToggle'
import {Presence,m,motionTokens,motionVariants,useReducedMotion} from '@/motionSystem'
import {useCart} from './StorefrontContext'

const PUBLIC_BASE=import.meta.env.BASE_URL
const publicAsset=name=>`${PUBLIC_BASE}${name.replace(/^\//,'')}`

function Logo({onClick,className=''}){return <Link to="/" className={`brand ${className}`} onClick={onClick}><img src={publicAsset("enhanced-lagom-logo.webp")} alt="Lagom Naturals"/></Link>}

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
    const onPointerDown=event=>{if(!event.target.closest('.desktop-nav__shop'))setShopOpen(false)}
    document.addEventListener('keydown',onKeyDown)
    document.addEventListener('pointerdown',onPointerDown)
    return()=>{document.removeEventListener('keydown',onKeyDown);document.removeEventListener('pointerdown',onPointerDown)}
  },[shopOpen])
  const drawerLinks=[['All Products','/shop'],['Seltzers','/shop/seltzers'],['Gummies','/shop/gummies'],['Merch','/merch'],['Our Story','/about'],['Find Us','/visit']]
  const backdropTransition=reduceMotion?{duration:0}:{duration:motionTokens.duration.control,ease:motionTokens.ease}
  const drawerTransition=reduceMotion?{duration:0}:motionTokens.springDrawer

  return <>
    <m.header className={`site-header ${detail?'site-header--commerce site-header--detail':''} ${isShopRoute?'site-header--shop-all':''}`} layout="position">
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
          <m.button type="button" className="icon-btn header-search" aria-label="Search products" aria-controls="global-search-surface" aria-expanded="false" whileTap={motionTokens.tap} onClick={()=>window.dispatchEvent(new CustomEvent('lagom:open-global-search'))}><Search aria-hidden="true"/><span>Search products…</span></m.button>
          <Link className="icon-btn header-account" to="/account" aria-label="Account"><User/><span>Account</span></Link>
          <Link className="icon-btn cart-icon" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/><span>Cart ({count})</span>{count>0&&<b>{count}</b>}</Link>
        </div>
      </div>
      <Presence initial={false}>
        {shopOpen&&<m.div id="desktop-shop-panel" className="desktop-shop-panel" role="region" aria-label="Shop products" initial={reduceMotion?false:{opacity:0,y:-12,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={reduceMotion?{opacity:0}:{opacity:0,y:-8,scale:.99}} transition={reduceMotion?{duration:0}:{duration:.26,ease:[.22,1,.36,1]}}>
          <div className="desktop-shop-panel__inner">
            <div className="desktop-shop-panel__intro"><span>Shop Lagom</span><p>Find your kind of balance.</p></div>
            <div className="desktop-shop-panel__links">
              <NavLink to="/shop" end onClick={()=>setShopOpen(false)}><span>01</span><b>All Products</b><small>Explore the full collection</small><ChevronRight aria-hidden="true"/></NavLink>
              <NavLink to="/shop/seltzers" onClick={()=>setShopOpen(false)}><span>02</span><b>Seltzers</b><small>Bright, sparkling THC drinks</small><ChevronRight aria-hidden="true"/></NavLink>
              <NavLink to="/shop/gummies" onClick={()=>setShopOpen(false)}><span>03</span><b>Gummies</b><small>Flavorful, easygoing favorites</small><ChevronRight aria-hidden="true"/></NavLink>
            </div>
          </div>
        </m.div>}
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
