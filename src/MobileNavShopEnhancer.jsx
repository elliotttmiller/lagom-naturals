import React,{useEffect,useState}from'react'
import{createPortal}from'react-dom'
import{Link,useLocation}from'react-router-dom'
import{ChevronDown}from'lucide-react'
import{categoryCards}from'./catalogData'
import{Presence,m,motionTokens}from'./motionSystem'

function closeGlobalDrawer(){
  const input=document.querySelector('.site-header .hamburger input')
  if(input instanceof HTMLInputElement&&input.checked)input.click()
}

function ShopMenu(){
  const[expanded,setExpanded]=useState(false)
  const location=useLocation()

  useEffect(()=>{
    if(!location.pathname.startsWith('/shop'))setExpanded(false)
  },[location.pathname,location.search])

  return <div className="drawer-shop-menu">
    <button
      type="button"
      className="drawer-shop-trigger"
      aria-expanded={expanded}
      aria-controls="drawer-shop-categories"
      onClick={()=>setExpanded(value=>!value)}
    >
      <span>Shop</span>
      <m.span
        className="drawer-shop-trigger__icon"
        animate={{rotate:expanded?180:0}}
        transition={motionTokens.springSnappy}
        aria-hidden="true"
      ><ChevronDown/></m.span>
    </button>
    <Presence initial={false}>
      {expanded&&<m.div
        id="drawer-shop-categories"
        className="drawer-shop-categories"
        initial={{height:0,opacity:0}}
        animate={{height:'auto',opacity:1}}
        exit={{height:0,opacity:0}}
        transition={{height:{duration:motionTokens.duration.slow,ease:motionTokens.easeSoft},opacity:{duration:motionTokens.duration.base,ease:motionTokens.ease}}}
      >
        <m.div
          className="drawer-shop-categories__inner"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{hidden:{},visible:{transition:{staggerChildren:.035,delayChildren:.035}}}}
        >
          <m.div variants={{hidden:{opacity:0,y:-4},visible:{opacity:1,y:0,transition:motionTokens.springSoft}}}>
            <Link to="/shop" onClick={closeGlobalDrawer}>All Products</Link>
          </m.div>
          {categoryCards.map(([name,label])=><m.div key={name} variants={{hidden:{opacity:0,y:-4},visible:{opacity:1,y:0,transition:motionTokens.springSoft}}}>
            <Link to={`/shop?category=${encodeURIComponent(name)}`} onClick={closeGlobalDrawer}>{label}</Link>
          </m.div>)}
        </m.div>
      </m.div>}
    </Presence>
  </div>
}

export default function MobileNavShopEnhancer(){
  const[host,setHost]=useState(null)

  useEffect(()=>{
    let currentHost=null
    const sync=()=>{
      const firstRow=document.querySelector('#site-navigation-drawer nav>div:first-child')
      if(!firstRow){setHost(null);return}
      let mount=firstRow.querySelector(':scope > .drawer-shop-enhancer-host')
      if(!mount){
        mount=document.createElement('div')
        mount.className='drawer-shop-enhancer-host'
        firstRow.appendChild(mount)
      }
      currentHost=mount
      setHost(mount)
    }
    sync()
    const observer=new MutationObserver(sync)
    observer.observe(document.body,{childList:true,subtree:true})
    return()=>{
      observer.disconnect()
      if(currentHost?.isConnected)currentHost.remove()
    }
  },[])

  return host?createPortal(<ShopMenu/>,host):null
}
