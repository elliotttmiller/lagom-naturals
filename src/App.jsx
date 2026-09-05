import React,{createContext,useContext,useDeferredValue,useEffect,useMemo,useRef,useState}from'react'
import{Link,NavLink,Route,Routes,useLocation,useNavigate,useParams}from'react-router-dom'
import{ArrowLeft,ArrowRight,ChevronDown,ChevronRight,CircleHelp,CircleUserRound,CreditCard,Gift,Heart,Home,MapPin,Menu,Minus,Navigation,PackageCheck,Phone,Plus,Search,Settings,Share2,ShoppingBag,SlidersHorizontal,Star,Store,UsersRound,X}from'lucide-react'
import{m,Presence,Reveal,Stagger,StaggerItem,motionTokens,motionVariants}from'./motionSystem'
import mainStore from'@/assets/mobile/main-store.webp'
import mainStoreDesktop from'@/assets/desktop/main-store-desktop.webp'
import mainStore2 from'@/assets/store/main-store2.webp'
import extraStore from'@/assets/store/extra-store.webp'
import extraStore2 from'@/assets/store/extra-store2.webp'
import storefrontDay from'@/assets/store/storefront-day.webp'
import storefrontNight from'@/assets/store/storefront-night.webp'
import lemonade24k from'@/assets/products/24K-Lemonade-1.png'
import blackberryBreeze from'@/assets/products/Blackberry-Breeze-Photoroom-1-900x900.png'
import blueberryYumYum from'@/assets/products/Blueberry-Yum-Yum-1-Photoroom-900x900.png'
import spaceCadet from'@/assets/products/Moonlight-Space-Cadet-5mg-THC-Live-Resin-1024x1024.png'
import pushPop from'@/assets/products/Push-Pop-Photoroom-900x900.png'
import strawberryBanana from'@/assets/products/Strawberry-Banana-Photoroom-900x900.png'
import strawberryLime from'@/assets/products/Strawberry-Lime-Fusion-Photoroom-900x900.png'
import watermelonRefresher from'@/assets/products/Watermelon-Refresher-Photoroom-900x900.png'
import mainstreetHoodie from'@/assets/merch/Lagom-Mainstreet-Hooded-Sweatshirt-900x900.png'
import midweightCrewneck from'@/assets/merch/Lagom-Midweight-Crewneck-Sweatshirt-Front-900x900.png'

const products=[
{id:'24k-lemonade',brand:'Lagom Naturals',name:'24K Lemonade',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.9,reviews:124,weight:'12 oz',image:lemonade24k},
{id:'blackberry-breeze',brand:'Lagom Naturals',name:'Blackberry Breeze',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.8,reviews:98,weight:'12 oz',image:blackberryBreeze},
{id:'strawberry-lime-fusion',brand:'Lagom Naturals',name:'Strawberry Lime Fusion',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.8,reviews:83,weight:'12 oz',image:strawberryLime},
{id:'watermelon-refresher',brand:'Lagom Naturals',name:'Watermelon Refresher',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.7,reviews:76,weight:'12 oz',image:watermelonRefresher},
{id:'blueberry-yum-yum',brand:'Lagom Naturals',name:'Blueberry Yum Yum',category:'Edibles',price:24.99,strength:'5mg THC + 20mg CBD',type:'Indica gummies',rating:4.9,reviews:151,weight:'10 pc',image:blueberryYumYum},
{id:'push-pop',brand:'Lagom Naturals',name:'Push Pop',category:'Edibles',price:24.99,strength:'5mg THC',type:'Hybrid gummies',rating:4.8,reviews:91,weight:'10 pc',image:pushPop},
{id:'space-cadet',brand:'Moonlight Cannabis',name:'Space Cadet',category:'Edibles',price:null,strength:'5mg THC',type:'Live resin',rating:4.8,reviews:64,weight:'See package',image:spaceCadet},
{id:'strawberry-banana',brand:'In-store selection',name:'Strawberry Banana',category:'Edibles',price:null,strength:'See package',type:'Cannabis edible',rating:4.7,reviews:64,weight:'See package',image:strawberryBanana}]

const merch=[
{id:'mainstreet-hoodie',name:'Mainstreet Hooded Sweatshirt',price:68,type:'Hoodies',color:'Black',image:mainstreetHoodie},
{id:'midweight-crewneck',name:'Midweight Crewneck Sweatshirt',price:58,type:'Crewnecks',color:'Sand',image:midweightCrewneck}]

const categoryCards=[['Flower','Flower'],['Vapes','Vapes'],['Edibles','Edibles'],['Pre-Rolls','Pre-Rolls'],['Concentrates','Concentrates'],['Beverages','Beverages'],['Topicals','Topicals'],['Tinctures','Tinctures'],['Accessories','Accessories'],['Apparel & Merch','Merch'],['Brands','Brands'],['Deals','Deals']]
const categoryImages={Edibles:blueberryYumYum,Beverages:lemonade24k,'Apparel & Merch':mainstreetHoodie}
const CART_KEY='lagom-cart-v1'

function readCart(){
  try{
    const stored=JSON.parse(localStorage.getItem(CART_KEY)||'[]')
    if(!Array.isArray(stored))return[]
    return stored.flatMap(entry=>{
      const base=products.find(x=>x.id===entry.id)||merch.find(x=>x.id===entry.id)
      if(!base||base.price==null)return[]
      return[{...base,brand:entry.brand||base.brand||'Lagom Naturals',category:entry.category||base.category||'Merch',weight:entry.weight||base.weight||base.color,qty:Math.max(1,Number(entry.qty)||1)}]
    })
  }catch{return[]}
}

const Cart=createContext(null)
const useCart=()=>useContext(Cart)

function CartProvider({children}){
  const[items,setItems]=useState(readCart)

  useEffect(()=>{
    try{localStorage.setItem(CART_KEY,JSON.stringify(items.map(({id,qty,weight,brand,category})=>({id,qty,weight,brand,category}))))}catch{}
  },[items])

  const add=(item,quantity=1)=>{
    if(item.price==null)return
    const amount=Math.max(1,Number(quantity)||1)
    setItems(current=>{
      const existing=current.find(x=>x.id===item.id)
      return existing
        ?current.map(x=>x.id===item.id?{...x,...item,qty:x.qty+amount}:x)
        :[...current,{...item,qty:amount}]
    })
  }

  const change=(id,qty)=>setItems(current=>qty<=0?current.filter(x=>x.id!==id):current.map(x=>x.id===id?{...x,qty}:x))
  const remove=id=>setItems(current=>current.filter(x=>x.id!==id))
  const count=items.reduce((total,item)=>total+item.qty,0)
  const subtotal=items.reduce((total,item)=>total+(item.price||0)*item.qty,0)

  return <Cart.Provider value={{items,add,change,remove,count,subtotal}}>{children}</Cart.Provider>
}

function Logo({onClick}){return <Link to="/" className="brand" onClick={onClick}><img src="/lagom-logo.svg" alt="Lagom Naturals"/></Link>}

function Header({detail=false}){
  const{count}=useCart()
  const[open,setOpen]=useState(false)
  const nav=useNavigate()
  const triggerRef=useRef(null)
  const drawerRef=useRef(null)
  const closeRef=useRef(null)

  const closeDrawer=()=>setOpen(false)

  useEffect(()=>{
    if(!open)return
    const previous=document.activeElement
    const previousOverflow=document.body.style.overflow
    document.body.style.overflow='hidden'
    requestAnimationFrame(()=>closeRef.current?.focus())

    const onKeyDown=event=>{
      if(event.key==='Escape'){event.preventDefault();closeDrawer();return}
      if(event.key!=='Tab')return
      const focusable=drawerRef.current?.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])')
      if(!focusable?.length)return
      const first=focusable[0]
      const last=focusable[focusable.length-1]
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }

    document.addEventListener('keydown',onKeyDown)
    return()=>{
      document.removeEventListener('keydown',onKeyDown)
      document.body.style.overflow=previousOverflow
      previous?.focus?.()
    }
  },[open])

  const sharePage=async()=>{
    const shareData={title:document.title,url:window.location.href}
    try{
      if(navigator.share)await navigator.share(shareData)
      else if(navigator.clipboard)await navigator.clipboard.writeText(window.location.href)
    }catch{}
  }

  return <>
    <m.header className="site-header" layout="position">
      <div className="header-inner">
        {detail
          ?<m.button type="button" whileTap={{scale:.9}} className="icon-btn" onClick={()=>nav(-1)} aria-label="Back"><ArrowLeft/></m.button>
          :<m.button ref={triggerRef} type="button" whileTap={{scale:.9}} className="icon-btn" onClick={()=>setOpen(true)} aria-label="Menu" aria-expanded={open} aria-controls="site-navigation-drawer"><Menu/></m.button>}
        <Logo/>
        {!detail&&<nav className="desktop-nav" aria-label="Primary navigation">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/merch">Merch</NavLink>
          <NavLink to="/visit">Visit</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>}
        <div className="header-tools">
          {detail&&<m.button type="button" whileTap={{scale:.9}} className="icon-btn" onClick={sharePage} aria-label="Share"><Share2/></m.button>}
          <m.div whileTap={{scale:.92}}><Link className="icon-btn" to="/shop" aria-label="Search"><Search/></Link></m.div>
          {!detail&&<m.div whileTap={{scale:.92}}><Link className="icon-btn cart-icon" to="/cart" aria-label={`Cart, ${count} item${count===1?'':'s'}`}><ShoppingBag/><Presence>{count>0&&<m.b key={count} initial={{scale:.4,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.5,opacity:0}} transition={motionTokens.springSnappy}>{count}</m.b>}</Presence></Link></m.div>}
          {detail&&<m.button type="button" whileTap={{scale:.9}} className="icon-btn" aria-label="Save"><Heart/></m.button>}
        </div>
      </div>
    </m.header>

    <Presence>
      {open&&<m.div key="drawer" className="drawer-bg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:motionTokens.duration.fast}} onClick={closeDrawer}>
        <m.aside ref={drawerRef} id="site-navigation-drawer" className="drawer" role="dialog" aria-modal="true" aria-label="Site navigation" initial={{x:'-102%'}} animate={{x:0}} exit={{x:'-102%'}} transition={motionTokens.springSoft} onClick={event=>event.stopPropagation()}>
          <div className="drawer-top"><Logo onClick={closeDrawer}/><m.button ref={closeRef} type="button" whileTap={{scale:.9}} className="icon-btn" onClick={closeDrawer} aria-label="Close menu"><X/></m.button></div>
          <m.nav initial="hidden" animate="visible" variants={motionVariants.stagger}>
            {[['Shop','/shop'],['Apparel & Merch','/merch'],['Visit Our Store','/visit'],['About Lagom','/about'],['My Account','/account']].map(([label,to])=><m.div key={to} variants={motionVariants.item}><Link to={to} onClick={closeDrawer}>{label}<ChevronRight/></Link></m.div>)}
          </m.nav>
        </m.aside>
      </m.div>}
    </Presence>
  </>
}

function MobileNav(){return <m.nav className="mobile-nav" layout="position" aria-label="Primary">{[[Home,'Home','/'],[ShoppingBag,'Shop','/shop'],[CircleUserRound,'Account','/account']].map(([Icon,label,to])=><m.div key={to} whileTap={{scale:.94,y:1}}><NavLink to={to}><Icon/><span>{label}</span></NavLink></m.div>)}</m.nav>}
function Shell({children,detail=false,noNav=false}){return <div className="app-shell"><Header detail={detail}/><main>{children}</main>{!noNav&&<MobileNav/>}</div>}

function SectionTitle({title,to='/shop'}){return <m.div className="section-title" variants={motionVariants.item}><h2>{title}</h2><Link to={to}>View All <ArrowRight/></Link></m.div>}

function CategoryCard({name,label}){
  const img=categoryImages[name]
  const to=name==='Apparel & Merch'?'/merch':`/shop?category=${encodeURIComponent(name)}`
  return <m.div className="motion-card-shell" variants={motionVariants.item} layout whileHover={motionTokens.hover} whileTap={motionTokens.tap} transition={motionTokens.spring}>
    <Link className="category-card" to={to}>{img?<m.img src={img} alt="" loading="lazy" decoding="async" whileHover={{scale:1.04,y:-2}} transition={motionTokens.springSoft}/>:<div className="category-symbol">{label.slice(0,2).toUpperCase()}</div>}<span>{label}</span></Link>
  </m.div>
}

function ProductCard({p}){
  const{add}=useCart()
  return <m.article className="product-card" variants={motionVariants.item} layout="position" whileHover={{y:-4}} whileTap={{scale:.992}} transition={motionTokens.springSoft}>
    <div className="product-media">
      <Link to={`/product/${p.id}`} aria-label={`View ${p.name}`}><m.img layoutId={`catalog-image-${p.id}`} src={p.image} alt={`${p.brand} ${p.name}`} loading="lazy" decoding="async" transition={motionTokens.springSoft}/></Link>
      <m.button type="button" whileTap={{scale:.82}} className="heart-btn" aria-label={`Save ${p.name}`}><Heart/></m.button>
    </div>
    <div className="product-copy">
      <p>{p.brand}</p><Link to={`/product/${p.id}`}><h3>{p.name}</h3></Link><small>{p.type} · {p.strength}</small>
      <div className="stars"><Star fill="currentColor"/><span>{p.rating}</span><em>({p.reviews})</em></div>
      <b>{p.price==null?'In-store':`$${p.price.toFixed(2)}`}</b>
      {p.price!=null&&<div className="card-actions"><button type="button" aria-label={`Selected size ${p.weight}`}>{p.weight}<ChevronDown/></button><m.button type="button" whileTap={{scale:.86}} className="add-square" onClick={()=>add(p)} aria-label={`Add ${p.name}`}><Plus/></m.button></div>}
    </div>
  </m.article>
}

function EmptyState({title='Nothing here yet.',body='Check back soon for updated availability.',to='/shop',action='Browse products'}){
  return <m.div className="empty-state" initial="hidden" animate="visible" variants={motionVariants.softScale}><h2>{title}</h2><p>{body}</p>{to&&<Link className="primary-bar" to={to}>{action}</Link>}</m.div>
}

function HomePage(){return <Shell noNav>
  <m.section className="home-hero" initial="hidden" animate="visible">
    <picture>
      <source media="(min-width:900px)" srcSet={mainStoreDesktop}/>
      <m.img src={mainStore} alt="Lagom Naturals dispensary interior" fetchPriority="high" decoding="async" initial={{scale:1.04}} animate={{scale:1}} transition={{duration:1.1,ease:motionTokens.ease}}/>
    </picture>
    <div className="hero-gradient"/>
    <div className="hero-surface-fade"/>
    <m.div className="hero-copy" variants={motionVariants.stagger}>
      <m.p variants={motionVariants.item}>MINNEAPOLIS CANNABIS DISPENSARY</m.p>
      <m.h1 variants={motionVariants.item}>Find Your<br/>Just Right.</m.h1>
      <m.span variants={motionVariants.item}>Premium cannabis products from trusted brands. Thoughtfully curated for a more balanced you — right here in Minneapolis.</m.span>
      <m.div className="hero-actions" variants={motionVariants.item}><m.div whileHover={{y:-1}} whileTap={motionTokens.tap}><Link to="/shop">SHOP PRODUCTS <ArrowRight/></Link></m.div><m.div whileHover={{y:-1}} whileTap={motionTokens.tap}><Link to="/visit">VISIT OUR STORE</Link></m.div></m.div>
    </m.div>
  </m.section>
  <Stagger className="trust-strip">{[[Store,'LOCALLY','OWNED'],[UsersRound,'KNOWLEDGEABLE','STAFF'],[Heart,'COMMUNITY','FOCUSED']].map(([Icon,a,b])=><StaggerItem key={a}><div><Icon/><span>{a}<br/>{b}</span></div></StaggerItem>)}</Stagger>
  <Reveal className="mobile-section"><Stagger><SectionTitle title="Shop by Category"/><div className="home-category-row">{categoryCards.slice(0,4).map(([a,b])=><CategoryCard key={a} name={a} label={b}/>)}</div></Stagger></Reveal>
  <Reveal className="mobile-section"><Stagger><SectionTitle title="Featured Products"/><div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} p={p}/>)}</div></Stagger></Reveal>
</Shell>}

function ShopPage(){
  const loc=useLocation()
  const category=new URLSearchParams(loc.search).get('category')
  const[query,setQuery]=useState('')
  const deferredQuery=useDeferredValue(query.trim().toLowerCase())

  const searchResults=useMemo(()=>deferredQuery?products.filter(p=>`${p.brand} ${p.name} ${p.category} ${p.type} ${p.strength}`.toLowerCase().includes(deferredQuery)):[],[deferredQuery])
  if(category)return <ListingPage category={category}/>

  return <Shell><div className="shop-page">
    <Reveal><label className="shop-search"><Search/><input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search products, brands, or effects..." aria-label="Search products"/></label></Reveal>
    {deferredQuery
      ? (<Reveal><SectionTitle title={`Search Results (${searchResults.length})`}/>{searchResults.length?<Stagger className="product-grid">{searchResults.map(p=><ProductCard key={p.id} p={p}/>)}</Stagger>:<EmptyState title="No matching products." body="Try another product name, brand, category, or effect." to={null}/>}</Reveal>)
      : (<><Stagger className="category-grid">{categoryCards.map(([a,b])=><CategoryCard key={a} name={a} label={b}/>)}</Stagger><Reveal><m.div whileHover={{y:-2}} whileTap={motionTokens.tap}><Link className="originals-banner" to="/merch"><img src={midweightCrewneck} alt="Lagom Originals"/><span>Lagom Originals</span><ChevronRight/></Link></m.div></Reveal><Reveal><SectionTitle title="Featured Products"/><Stagger className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} p={p}/>)}</Stagger></Reveal></>
      )}
  </div></Shell>
}

function ListingPage({category}){
  const[filter,setFilter]=useState('All')
  const[filtersOpen,setFiltersOpen]=useState(true)
  const[sort,setSort]=useState('Featured')
  const base=useMemo(()=>products.filter(p=>category==='All'||p.category===category),[category])
  const visible=useMemo(()=>filter==='All'?base:base.filter(p=>p.type.toLowerCase().includes(filter.toLowerCase())),[base,filter])
  const rendered=useMemo(()=>{
    const next=[...visible]
    if(sort==='Price low')next.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity))
    if(sort==='Price high')next.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity))
    return next
  },[visible,sort])
  const cycleSort=()=>setSort(current=>current==='Featured'?'Price low':current==='Price low'?'Price high':'Featured')

  return <Shell><div className="listing-page">
    <Reveal>
      <h1>{category} <span>({base.length})</span></h1>
      <div className="filter-row"><m.button type="button" whileTap={motionTokens.tap} onClick={()=>setFiltersOpen(open=>!open)} aria-expanded={filtersOpen}><SlidersHorizontal/> Filter</m.button><m.button type="button" whileTap={motionTokens.tap} onClick={cycleSort} aria-label={`Sort, ${sort}`}>↕ {sort==='Featured'?'Sort':sort}</m.button></div>
      <Presence>{filtersOpen&&<m.div className="chips" initial={{opacity:0,y:-4}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}}>{['All','Indica','Sativa','Hybrid'].map(name=><m.button type="button" layout key={name} className={filter===name?'active':''} onClick={()=>setFilter(name)} whileTap={{scale:.96}}>{name}</m.button>)}</m.div>}</Presence>
    </Reveal>
    <Presence mode="popLayout"><m.div key={`${category}-${filter}-${sort}`} className="product-grid listing-grid" layout initial="hidden" animate="visible" exit={{opacity:0,y:4}} variants={motionVariants.stagger}>{rendered.map(p=><ProductCard key={p.id} p={p}/>)}</m.div></Presence>
    {!rendered.length&&<EmptyState title={base.length?'No products match this filter.':'No products loaded in this category yet.'} body={base.length?'Try another filter.':'Availability will appear here when products are connected to the live catalog.'}/>}
  </div></Shell>
}

function ProductPage(){
  const{id}=useParams()
  const p=products.find(x=>x.id===id)
  const{add}=useCart()
  const[qty,setQty]=useState(1)
  if(!p)return <Shell detail><div className="pdp"><EmptyState title="Product not found." body="This product may no longer be available."/></div></Shell>

  return <Shell detail><m.div className="pdp">
    <m.div className="pdp-media"><m.img layoutId={`catalog-image-${p.id}`} src={p.image} alt={`${p.brand} ${p.name}`} fetchPriority="high" decoding="async" transition={motionTokens.springSoft}/><div className="pdp-dots"><i className="active"/></div></m.div>
    <m.div className="pdp-copy" initial="hidden" animate="visible" variants={motionVariants.stagger}>
      <m.p variants={motionVariants.item}>{p.brand}</m.p><m.h1 variants={motionVariants.item}>{p.name}</m.h1>
      <m.div variants={motionVariants.item} className="review-line"><span>★★★★★</span> <small>({p.reviews} reviews)</small></m.div>
      <m.h2 variants={motionVariants.item}>{p.price==null?'Available in store':`$${p.price.toFixed(2)}`}</m.h2>
      <m.div variants={motionVariants.item} className="meta-pills"><span>{p.type}</span><span>{p.strength}</span></m.div>
      <m.p variants={motionVariants.item} className="pdp-desc">Product details, potency, batch information, and availability can vary. Review current package information before purchase.</m.p>
      {p.price!=null&&<m.div variants={motionVariants.item}>
        <label>Size</label><div className="size-row single-option"><button type="button" className="active">{p.weight}</button></div>
        <div className="qty-row"><b>Quantity</b><div><m.button type="button" aria-label="Decrease quantity" whileTap={{scale:.88}} onClick={()=>setQty(Math.max(1,qty-1))}><Minus/></m.button><Presence mode="popLayout"><m.span key={qty} initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}}>{qty}</m.span></Presence><m.button type="button" aria-label="Increase quantity" whileTap={{scale:.88}} onClick={()=>setQty(current=>current+1)}><Plus/></m.button></div></div>
        <m.button type="button" whileHover={{y:-2}} whileTap={motionTokens.tap} className="primary-bar" onClick={()=>add(p,qty)}>ADD TO CART</m.button>
      </m.div>}
    </m.div>
  </m.div></Shell>
}

function MerchPage(){
  const[filter,setFilter]=useState('All')
  const filters=useMemo(()=>['All',...new Set(merch.map(item=>item.type))],[])
  const visible=filter==='All'?merch:merch.filter(item=>item.type===filter)
  return <Shell><div className="merch-page">
    <Reveal className="merch-head"><h1>APPAREL & MERCH</h1><p>Wear the balance.</p></Reveal>
    <Reveal><div className="chips merch-chips">{filters.map(name=><m.button type="button" whileTap={{scale:.96}} className={filter===name?'active':''} onClick={()=>setFilter(name)} key={name}>{name}</m.button>)}</div></Reveal>
    <Presence mode="popLayout"><Stagger key={filter} className="merch-grid">{visible.map(item=><StaggerItem key={item.id}><m.div className="merch-card" layout whileHover={{y:-4}} whileTap={{scale:.992}} transition={motionTokens.springSoft}><Link to={`/merch/${item.id}`}><div className="merch-media"><m.img layoutId={`catalog-image-${item.id}`} src={item.image} alt={item.name} loading="lazy" decoding="async"/><Heart/></div><p>Lagom Naturals</p><h3>{item.name}</h3><b>${item.price.toFixed(2)}</b><div className="swatches"><i/><i/><i/></div></Link></m.div></StaggerItem>)}</Stagger></Presence>
  </div></Shell>
}

function MerchDetailPage(){
  const{id}=useParams()
  const item=merch.find(x=>x.id===id)
  const{add}=useCart()
  const[qty,setQty]=useState(1)
  const[size,setSize]=useState('M')
  if(!item)return <Shell detail><div className="merch-detail"><EmptyState title="Item not found." body="This apparel item may no longer be available." to="/merch" action="Browse merch"/></div></Shell>

  return <Shell detail><m.div className="merch-detail">
    <m.div className="merch-detail-media"><m.img layoutId={`catalog-image-${item.id}`} src={item.image} alt={item.name} transition={motionTokens.springSoft}/></m.div>
    <m.div initial="hidden" animate="visible" variants={motionVariants.stagger}>
      <m.p variants={motionVariants.item}>Lagom Naturals</m.p><m.h1 variants={motionVariants.item}>{item.name}</m.h1><m.h2 variants={motionVariants.item}>${item.price.toFixed(2)}</m.h2>
      <m.div variants={motionVariants.item} className="option-line"><b>Color: {item.color}</b><div className="swatches large"><i/><i/><i/><i/></div></m.div>
      <m.div variants={motionVariants.item}><b className="option-label">Size</b><div className="size-row apparel">{['S','M','L','XL','XXL'].map(option=><button type="button" key={option} className={size===option?'active':''} onClick={()=>setSize(option)}>{option}</button>)}</div>
        <div className="qty-row"><b>Quantity</b><div><m.button type="button" aria-label="Decrease quantity" whileTap={{scale:.88}} onClick={()=>setQty(Math.max(1,qty-1))}><Minus/></m.button><Presence mode="popLayout"><m.span key={qty} initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}}>{qty}</m.span></Presence><m.button type="button" aria-label="Increase quantity" whileTap={{scale:.88}} onClick={()=>setQty(current=>current+1)}><Plus/></m.button></div></div>
        <m.button type="button" whileHover={{y:-2}} whileTap={motionTokens.tap} className="primary-bar" onClick={()=>add({...item,brand:'Lagom Naturals',weight:`${size} · ${item.color}`,category:'Merch'},qty)}>ADD TO CART</m.button>
      </m.div>
      {['Product Details','Materials','Fit','Care','Shipping / Pickup'].map(label=><m.div variants={motionVariants.item} className="detail-row" key={label}><span>{label}</span><ChevronDown/></m.div>)}
    </m.div>
  </m.div></Shell>
}

function CartPage(){
  const{items,change,remove,subtotal}=useCart()
  return <Shell><div className="cart-page">
    <Reveal><h1>Your Cart <span>({items.length})</span></h1></Reveal>
    {!items.length?<EmptyState title="Your cart is empty." body="Browse the current selection and add something that feels just right."/>:<>
      <m.div className="cart-list" layout><Presence mode="popLayout">{items.map(item=><m.div className="cart-row" key={item.id} layout initial={{opacity:0,y:10,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,x:-18,scale:.97}} transition={motionTokens.springSoft}>
        <m.img layoutId={`catalog-image-${item.id}`} src={item.image} alt={item.name}/><div className="cart-item-copy"><p>{item.brand||'Lagom Naturals'}</p><b>{item.name}</b><small>{item.weight}</small></div><strong>${((item.price||0)*item.qty).toFixed(2)}</strong>
        <div className="cart-qty"><m.button type="button" aria-label={`Decrease ${item.name} quantity`} whileTap={{scale:.85}} onClick={()=>change(item.id,item.qty-1)}><Minus/></m.button><Presence mode="popLayout"><m.span key={item.qty} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}}>{item.qty}</m.span></Presence><m.button type="button" aria-label={`Increase ${item.name} quantity`} whileTap={{scale:.85}} onClick={()=>change(item.id,item.qty+1)}><Plus/></m.button></div>
        <m.button type="button" whileTap={{scale:.8}} className="remove" onClick={()=>remove(item.id)} aria-label={`Remove ${item.name}`}>×</m.button>
      </m.div>)}</Presence></m.div>
      <Reveal><textarea aria-label="Order note" placeholder="Add a note (optional)"/><m.div className="totals" layout><p><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></p><p><span>Estimated taxes</span><b>${(subtotal*.08).toFixed(2)}</b></p></m.div><div className="pickup-row"><span><b>Pickup at Lagom Naturals</b><small>Pickup timing is confirmed with current inventory.</small></span><button type="button">Change</button></div><m.div whileHover={{y:-2}} whileTap={motionTokens.tap}><Link className="primary-bar linkbar" to="/checkout">CONTINUE</Link></m.div></Reveal>
    </>}
  </div></Shell>
}

function CheckoutPage(){
  const{items}=useCart()
  const[step,setStep]=useState(1)
  if(!items.length)return <Shell><div className="checkout-page"><h1>Checkout</h1><EmptyState title="Your cart is empty." body="Add products before continuing."/></div></Shell>

  return <Shell><div className="checkout-page">
    <h1>Checkout</h1>
    <div className="checkout-steps"><span className={step>=1?'active':''}>1 <b>DETAILS</b></span><i/><span className={step>=2?'active':''}>2 <b>REVIEW</b></span></div>
    <Presence mode="wait"><m.div key={step} className="checkout-step" initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-8}} transition={{duration:motionTokens.duration.base,ease:motionTokens.ease}}>
      {step===1&&<><h2>Contact information</h2><label>Email address<input type="email" autoComplete="email" placeholder="you@example.com"/></label><label className="checkbox"><input type="checkbox"/> Send me order updates</label><h2>Fulfillment method</h2><m.div layout className="method-card active"><Store/><span><b>Store Pickup</b><small>Pickup at our Minneapolis location</small></span></m.div><h2>Pickup location</h2><div className="pickup-card"><span><b>Lagom Naturals</b><small>730 N Washington Ave<br/>Minneapolis, MN 55401</small></span><Link to="/visit">View</Link></div><m.button type="button" whileHover={{y:-2}} whileTap={motionTokens.tap} className="primary-bar" onClick={()=>setStep(2)}>Review Pickup</m.button></>}
      {step===2&&<><h2>Review</h2><div className="pickup-card"><span><b>Store Pickup</b><small>Lagom Naturals · North Loop</small></span></div><p className="muted">Current inventory, pickup timing, and any required in-store verification are confirmed before fulfillment.</p><m.div whileHover={{y:-2}} whileTap={motionTokens.tap}><Link className="primary-bar linkbar" to="/account">DONE</Link></m.div></>}
    </m.div></Presence>
  </div></Shell>
}

function AccountPage(){
  const rows=[[PackageCheck,'My Orders'],[Heart,'Favorites'],[MapPin,'Addresses'],[CreditCard,'Payment Methods']]
  const lower=[[Settings,'Account Settings'],[Gift,'Notifications'],[CircleHelp,'Help & Support']]
  return <Shell><div className="account-page"><Reveal><div className="account-welcome"><div className="leaf-mark">⌁</div><span><p>Welcome to</p><h1>Lagom</h1></span></div></Reveal><Stagger className="account-rows">{rows.map(([Icon,label])=><StaggerItem key={label}><m.button type="button" whileHover={{x:2}} whileTap={motionTokens.tap}><Icon/><span>{label}</span><ChevronRight/></m.button></StaggerItem>)}<StaggerItem><m.button type="button" whileHover={{x:2}} whileTap={motionTokens.tap} className="reward-row"><Gift/><span><b>Rewards</b><small>Shop. Earn. Get more.</small></span><ChevronRight/></m.button></StaggerItem>{lower.map(([Icon,label])=><StaggerItem key={label}><m.button type="button" whileHover={{x:2}} whileTap={motionTokens.tap}><Icon/><span>{label}</span><ChevronRight/></m.button></StaggerItem>)}</Stagger></div></Shell>
}

function VisitPage(){return <Shell><div className="visit-page"><m.div className="visit-photo" initial={{opacity:0,scale:1.01}} animate={{opacity:1,scale:1}} transition={{duration:motionTokens.duration.cinematic,ease:motionTokens.ease}}><img src={storefrontDay} alt="Lagom Naturals storefront" loading="lazy" decoding="async"/></m.div><m.div className="visit-card" initial="hidden" animate="visible" variants={motionVariants.softScale}><p>VISIT OUR STORE</p><h1>North Loop<br/>Minneapolis</h1><span>730 N Washington Ave<br/>Minneapolis, MN 55401</span><div className="visit-actions"><m.a whileHover={{y:-2}} whileTap={motionTokens.tap} href="https://maps.google.com/?q=730+N+Washington+Ave+Minneapolis+MN+55401" target="_blank" rel="noreferrer"><Navigation/> GET DIRECTIONS</m.a><m.a whileHover={{y:-2}} whileTap={motionTokens.tap} href="tel:+16125550101"><Phone/> CALL STORE</m.a></div><div className="hours"><b>Store Hours</b><p><span>Mon – Sat</span><strong>10:00 AM – 9:00 PM</strong></p><p><span>Sunday</span><strong>11:00 AM – 6:00 PM</strong></p></div><div className="amenities"><span>Parking<br/>Available</span><span>In-Store<br/>Pickup</span><span>Accessible<br/>Entrance</span></div></m.div></div></Shell>}

function AboutPage(){return <Shell><div className="about-page"><Reveal><img src={mainStore2} alt="Inside Lagom Naturals" loading="lazy" decoding="async"/></Reveal><Reveal><h1>Enough choice.<br/>More clarity.<br/>Better balance.</h1><p>Lagom is a Swedish idea meaning "not too much, not too little—just right." We bring that standard to a multi-brand dispensary experience built around clear choices and thoughtful guidance.</p></Reveal><Stagger className="about-grid"><StaggerItem><m.img whileHover={{scale:1.01}} transition={motionTokens.springSoft} src={extraStore} alt="Lagom Naturals interior" loading="lazy" decoding="async"/></StaggerItem><StaggerItem><m.img whileHover={{scale:1.01}} transition={motionTokens.springSoft} src={extraStore2} alt="Lagom Naturals interior" loading="lazy" decoding="async"/></StaggerItem></Stagger><Reveal><img src={storefrontNight} alt="Lagom Naturals at night" loading="lazy" decoding="async"/></Reveal></div></Shell>}

function NotFoundPage(){return <Shell><div className="listing-page"><EmptyState title="Page not found." body="The page you requested does not exist." to="/" action="Back home"/></div></Shell>}

export default function App(){return <CartProvider><Routes><Route path="/" element={<HomePage/>}/><Route path="/shop" element={<ShopPage/>}/><Route path="/product/:id" element={<ProductPage/>}/><Route path="/merch" element={<MerchPage/>}/><Route path="/merch/:id" element={<MerchDetailPage/>}/><Route path="/cart" element={<CartPage/>}/><Route path="/checkout" element={<CheckoutPage/>}/><Route path="/account" element={<AccountPage/>}/><Route path="/visit" element={<VisitPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></CartProvider>}
