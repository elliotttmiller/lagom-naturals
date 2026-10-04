import React,{useEffect,useRef,useState} from 'react'
import {Link,NavLink,useLocation,useNavigate} from 'react-router-dom'
import {ArrowLeft,ChevronRight,Search,ShoppingBag,User} from 'lucide-react'
import HamburgerToggle from '@/HamburgerToggle'
import {Presence,m,motionTokens,motionVariants,useReducedMotion} from '@/motionSystem'
import {useCart} from './StorefrontContext'

const PUBLIC_BASE=import.meta.env.BASE_URL
const publicAsset=name=>`${PUBLIC_BASE}${name.replace(/^\//,'')}`

function Logo({onClick,className=''}){return <Link to="/" className={`brand ${className}`} onClick={onClick}><img src={publicAsset("enhanced-lagom-logo.webp")} alt="Lagom Naturals"/></Link>}

function Header({detail=false}){
  const{count}=useCart()
  const location=useLocation()
  const[open,setOpen]=useState(false)
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

  const isAllProducts=location.pathname==='/shop'
  const desktopLinks=isAllProducts
    ? [['Shop','/shop'],['About','/about'],['Our Story','/about'],['FAQ','/learn']]
    : [['Shop','/shop'],['Collections','/shop'],['About','/about'],['Learn','/learn']]
  const [desktopLeftLinks,desktopRightLinks]=[desktopLinks.slice(0,2),desktopLinks.slice(2)]
  const drawerLinks=[['Shop','/shop'],['Merch','/merch'],['Find Us','/visit'],['Our Story','/about']]
  const backdropTransition=reduceMotion?{duration:0}:{duration:motionTokens.duration.control,ease:motionTokens.ease}
  const drawerTransition=reduceMotion?{duration:0}:motionTokens.springDrawer

  return <>
    <m.header className={`site-header ${detail?'site-header--commerce':''} ${isAllProducts?'site-header--shop-all':''}`} layout="position">
      <div className="header-inner">
        {detail?<m.button type="button" className="icon-btn" whileTap={motionTokens.tap} onClick={()=>nav(-1)} aria-label="Back"><ArrowLeft/></m.button>:<HamburgerToggle checked={open} onChange={toggle} controls="site-navigation-drawer" label={open?'Close menu':'Open menu'}/>}
        <Logo className="header-mobile-brand"/>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="desktop-nav__group desktop-nav__group--left">{desktopLeftLinks.map(([label,to])=><NavLink key={label} to={to}>{label}</NavLink>)}</div>
          <Logo className="desktop-nav__brand"/>
          <div className="desktop-nav__group desktop-nav__group--right">{desktopRightLinks.map(([label,to])=><NavLink key={label} to={to}>{label}</NavLink>)}</div>
        </nav>
        <div className="header-tools">
          <m.button type="button" className="icon-btn header-search" aria-label="Search products" aria-controls="global-search-surface" aria-expanded="false" whileTap={motionTokens.tap} onClick={()=>window.dispatchEvent(new CustomEvent('lagom:open-global-search'))}><Search aria-hidden="true"/><span>Search products…</span></m.button>
          <Link className="icon-btn header-account" to="/account" aria-label="Account"><User/><span>Account</span></Link>
          <Link className="icon-btn cart-icon" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/><span>Cart ({count})</span>{count>0&&<b>{count}</b>}</Link>
        </div>
      </div>
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

export default function Shell({children,detail=false}){return <div className="app-shell"><div className="announcement">HEMP-DERIVED THC · FOR ADULTS 21+ · ENJOY RESPONSIBLY</div><Header detail={detail}/><main>{children}</main></div>}
