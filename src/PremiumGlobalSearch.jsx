import {useDeferredValue,useEffect,useMemo,useRef,useState} from 'react'
import {ArrowRight,ChevronRight,Search,X} from 'lucide-react'
import {useLocation,useNavigate} from 'react-router-dom'
import {categoryCards,categoryImages,products} from './catalogData'
import {Presence,m,motionTokens,useReducedMotion} from './motionSystem'

const normalize=value=>String(value??'').trim().toLocaleLowerCase()
const searchableText=product=>[
  product.brand,product.name,product.category,product.type,product.flavor,
  product.flavorFamily,product.productLine,product.strength,product.weight,
  product.canVolume,product.sugar,product.carbs,
  product.thcMgPerCan?`${product.thcMgPerCan} mg thc`:null,
  ...(product.variants||[]).flatMap(variant=>[variant.label,variant.detail])
].filter(Boolean).join(' ').toLocaleLowerCase()

const catalogTerms=products.flatMap(product=>[product.flavor,product.category,product.productLine]).filter(Boolean)
const POPULAR=[...new Set(catalogTerms)].slice(0,6)

function price(product){
  const value=product.price??product.variants?.[0]?.price
  return Number.isFinite(Number(value))?`$${Number(value).toFixed(2)}`:null
}
function facts(product){
  if(product.category==='Seltzers')return [product.flavor,product.thcMgPerCan?`${product.thcMgPerCan} mg THC / can`:null,product.canVolume].filter(Boolean)
  return [product.flavor,product.productLine,product.weight].filter(Boolean)
}

export default function PremiumGlobalSearch(){
  const[open,setOpen]=useState(false)
  const[query,setQuery]=useState('')
  const inputRef=useRef(null)
  const dialogRef=useRef(null)
  const returnFocusRef=useRef(null)
  const location=useLocation()
  const navigate=useNavigate()
  const reduceMotion=useReducedMotion()
  const deferredQuery=useDeferredValue(query)
  const normalized=normalize(deferredQuery)
  const searching=normalized.length>0
  const results=useMemo(()=>normalized?products.filter(product=>searchableText(product).includes(normalized)):products,[normalized])
  const topResults=results.slice(0,6)
  const transition=reduceMotion?{duration:0}:{duration:motionTokens.duration.base,ease:motionTokens.easeSoft}

  const close=()=>setOpen(false)
  useEffect(()=>{
    const onOpen=()=>{returnFocusRef.current=document.activeElement;setOpen(true)}
    const onClose=()=>setOpen(false)
    const onToggle=event=>{returnFocusRef.current=document.activeElement;setOpen(current=>typeof event.detail?.open==='boolean'?event.detail.open:!current)}
    window.addEventListener('lagom:open-global-search',onOpen)
    window.addEventListener('lagom:close-global-search',onClose)
    window.addEventListener('lagom:toggle-global-search',onToggle)
    return()=>{window.removeEventListener('lagom:open-global-search',onOpen);window.removeEventListener('lagom:close-global-search',onClose);window.removeEventListener('lagom:toggle-global-search',onToggle)}
  },[])

  useEffect(()=>{if(open)setOpen(false)},[location.pathname,location.search])
  useEffect(()=>{
    document.body.classList.toggle('global-search-open',open)
    document.querySelectorAll('a[aria-label^="Search"],button[aria-label^="Search"]').forEach(trigger=>{
      trigger.setAttribute('aria-expanded',open?'true':'false')
      trigger.setAttribute('aria-controls','global-search-surface')
    })
    if(!open)return
    const timer=window.setTimeout(()=>inputRef.current?.focus({preventScroll:true}),80)
    const onKeyDown=event=>{
      if(event.key==='Escape'){event.preventDefault();close();return}
      if(event.key!=='Tab')return
      const focusable=[...dialogRef.current?.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href]')||[]]
      if(!focusable.length)return
      const first=focusable[0],last=focusable[focusable.length-1]
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }
    document.addEventListener('keydown',onKeyDown)
    return()=>{window.clearTimeout(timer);document.removeEventListener('keydown',onKeyDown);document.body.classList.remove('global-search-open');window.setTimeout(()=>returnFocusRef.current?.focus?.({preventScroll:true}),0)}
  },[open])

  const goProduct=id=>navigate(`/product/${id}`)
  const goCategory=name=>navigate(`/shop?category=${encodeURIComponent(name)}`)
  const goAll=()=>navigate(searching?`/shop?search=${encodeURIComponent(query.trim())}`:'/shop')
  if(!open)return null

  return <m.div className="global-search-backdrop" role="presentation" initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition} onPointerDown={event=>{if(event.target===event.currentTarget)close()}}>
    <m.section ref={dialogRef} id="global-search-surface" className={`global-search${searching?' global-search--searching':''}`} role="dialog" aria-modal="true" aria-labelledby="global-search-title" initial={reduceMotion?false:{opacity:0,x:28,scale:.99}} animate={{opacity:1,x:0,scale:1}} transition={transition}>
      <div className="global-search__head"><div><h1 id="global-search-title">Search</h1><p>Search the current Lagom product catalog.</p></div><button type="button" className="global-search__close" onClick={close} aria-label="Close search"><X/></button></div>
      <label className="global-search__input-wrap"><Search aria-hidden="true"/><input ref={inputRef} type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search flavor, product, category, or potency" aria-label="Search Lagom products" autoComplete="off" autoCorrect="off" spellCheck="false"/>{query?<button type="button" onClick={()=>{setQuery('');inputRef.current?.focus()}} aria-label="Clear search"><X/></button>:<span/>}</label>
      <m.div className="global-search__live-content" layout transition={transition}>
        {!searching&&<section className="global-search__section global-search__popular"><div className="global-search__section-head"><h2>Popular searches</h2></div><div className="global-search__chips">{POPULAR.map(term=><button type="button" key={term} onClick={()=>setQuery(term)}>{term}</button>)}</div></section>}
        {!searching&&<section className="global-search__section"><div className="global-search__section-head"><h2>Browse by category</h2></div><div className="global-search__categories">{categoryCards.map(([name,label])=><button type="button" key={name} onClick={()=>goCategory(name)}><span>{categoryImages[name]&&<img src={categoryImages[name]} alt="" loading="lazy"/>}</span><b>{label}</b></button>)}</div></section>}
        <m.section layout className="global-search__section global-search__results" transition={transition}>
          <div className="global-search__section-head"><h2>{searching?`${results.length} ${results.length===1?'result':'results'}`:'Featured products'}</h2>{searching&&results.length>6&&<button type="button" onClick={goAll}>View all <ArrowRight/></button>}</div>
          <Presence mode="popLayout" initial={false}>{topResults.length?<m.div key="results" className="global-search__result-list" aria-live="polite">{topResults.map((product,index)=><m.article layout className="global-search__result" key={product.id} initial={reduceMotion?false:{opacity:0,y:7}} animate={{opacity:1,y:0}} transition={reduceMotion?{duration:0}:{duration:.22,delay:Math.min(index*.025,.1)}}><button type="button" className="global-search__result-main" onClick={()=>goProduct(product.id)}><span className="global-search__result-media"><img src={product.image} alt=""/></span><span className="global-search__result-copy"><small>{product.category}</small><strong>{product.name}</strong><span>{facts(product).join(' · ')}</span></span>{price(product)&&<span className="global-search__result-price">{price(product)}</span>}<ChevronRight className="global-search__result-arrow" aria-hidden="true"/></button></m.article>)}</m.div>:<m.div key="empty" className="global-search__empty" role="status" aria-live="polite"><strong>No matching products</strong><p>Try a flavor, product name, category, or potency shown in the current catalog.</p></m.div>}</Presence>
        </m.section>
        {searching&&results.length>0&&<m.button layout type="button" className="global-search__all" onClick={goAll}><Search/>View all results for “{query.trim()}”<ChevronRight/></m.button>}
      </m.div>
    </m.section>
  </m.div>
}
