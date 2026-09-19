import {useDeferredValue,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react'
import {ArrowRight,ChevronRight,Search,X} from 'lucide-react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {products} from './catalogData'
import {Presence,m,motionTokens,useReducedMotion} from './motionSystem'

const normalize=value=>String(value??'').trim().toLocaleLowerCase()
const searchableText=product=>[
  product.brand,product.name,product.category,product.type,product.flavor,
  product.flavorFamily,product.productLine,product.strength,product.weight,
  product.canVolume,product.sugar,product.carbs,
  product.thcMgPerCan?`${product.thcMgPerCan} mg thc`:null,
  ...(product.variants||[]).flatMap(variant=>[variant.label,variant.detail])
].filter(Boolean).join(' ').toLocaleLowerCase()

const POPULAR=[...new Set(products.flatMap(product=>[product.flavor,product.category,product.productLine]).filter(Boolean))].slice(0,6)

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
  const[headerGeometry,setHeaderGeometry]=useState({top:0,height:72})
  const inputRef=useRef(null)
  const returnFocusRef=useRef(null)
  const location=useLocation()
  const navigate=useNavigate()
  const reduceMotion=useReducedMotion()
  const deferredQuery=useDeferredValue(query)
  const normalized=normalize(deferredQuery)
  const searching=normalized.length>0
  const results=useMemo(()=>normalized?products.filter(product=>searchableText(product).includes(normalized)):[],[normalized])
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
  useLayoutEffect(()=>{
    if(!open)return
    let frame
    const measure=()=>{
      window.cancelAnimationFrame(frame)
      frame=window.requestAnimationFrame(()=>{
        const trigger=returnFocusRef.current instanceof Element?returnFocusRef.current:null
        const header=trigger?.closest('.site-header,.mobile-reference-header,.account-site-header')
          ||document.querySelector(window.innerWidth<900?'.mobile-reference-header':'.site-header,.account-site-header')
        const rect=header?.getBoundingClientRect()
        if(rect)setHeaderGeometry({top:Math.max(0,Math.round(rect.top)),height:Math.round(rect.height)})
      })
    }
    measure()
    window.addEventListener('resize',measure,{passive:true})
    window.addEventListener('scroll',measure,{passive:true})
    return()=>{window.cancelAnimationFrame(frame);window.removeEventListener('resize',measure);window.removeEventListener('scroll',measure)}
  },[open])

  useEffect(()=>{
    document.body.classList.toggle('global-search-open',open)
    return()=>document.body.classList.remove('global-search-open')
  },[open])

  useEffect(()=>{
    document.querySelectorAll('a[aria-label^="Search"],button[aria-label^="Search"]').forEach(trigger=>{
      trigger.setAttribute('aria-expanded',open?'true':'false')
      trigger.setAttribute('aria-controls','global-search-surface')
    })
    if(!open)return
    const timer=window.setTimeout(()=>inputRef.current?.focus({preventScroll:true}),60)
    const onKeyDown=event=>{if(event.key==='Escape'){event.preventDefault();close()}}
    document.addEventListener('keydown',onKeyDown)
    return()=>{
      window.clearTimeout(timer)
      document.removeEventListener('keydown',onKeyDown)
      window.setTimeout(()=>returnFocusRef.current?.focus?.({preventScroll:true}),0)
    }
  },[open])

  const goProduct=id=>{close();navigate(`/product/${id}`)}
  const goAll=()=>{close();navigate(searching?`/shop?search=${encodeURIComponent(query.trim())}`:'/shop')}
  const submit=event=>{event.preventDefault();if(searching)goAll()}

  return <Presence>{open&&<m.div
    className="global-search-layer"
    style={{'--search-header-top':`${headerGeometry.top}px`,'--search-header-height':`${headerGeometry.height}px`}}
    initial={reduceMotion?false:{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={transition}
    onPointerDown={event=>{if(event.target===event.currentTarget)close()}}
  >
    <m.section
      id="global-search-surface"
      className={`global-search${searching?' global-search--searching':''}`}
      role="search"
      aria-label="Search Lagom products"
      initial={reduceMotion?false:{y:-10}}
      animate={{y:0}}
      exit={reduceMotion?undefined:{y:-8}}
      transition={transition}
    >
      <div className="global-search__bar">
        <Link className="global-search__brand" to="/" aria-label="Lagom Naturals home" onClick={close}><img src={`${import.meta.env.BASE_URL}lagom-logo.svg`} alt="Lagom Naturals"/></Link>
        <form className="global-search__form" onSubmit={submit}>
          <Search aria-hidden="true"/>
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={searching}
            aria-controls="global-search-results"
            value={query}
            onChange={event=>setQuery(event.target.value)}
            placeholder="Search drinks, gummies, flavors, or potency"
            aria-label="Search Lagom products"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {query&&<button type="button" className="global-search__clear" onClick={()=>{setQuery('');inputRef.current?.focus()}} aria-label="Clear search"><X/></button>}
        </form>
        <button type="button" className="global-search__close" onClick={close} aria-label="Close search"><X/><span>Close</span></button>
      </div>

      <div className="global-search__panel">
        {!searching?<div className="global-search__suggestions">
          <span>Popular searches</span>
          <div className="global-search__chips">{POPULAR.map(term=><button type="button" key={term} onClick={()=>setQuery(term)}>{term}</button>)}</div>
        </div>:<>
          <div className="global-search__summary"><span aria-live="polite">{results.length} {results.length===1?'match':'matches'}</span>{results.length>6&&<button type="button" onClick={goAll}>View all results <ArrowRight/></button>}</div>
          <Presence mode="popLayout" initial={false}>{topResults.length?<m.div id="global-search-results" role="listbox" className="global-search__result-list" key="results">{topResults.map((product,index)=><m.button
            layout
            type="button"
            role="option"
            aria-selected="false"
            className="global-search__result"
            key={product.id}
            initial={reduceMotion?false:{opacity:0,y:6}}
            animate={{opacity:1,y:0}}
            transition={reduceMotion?{duration:0}:{duration:.18,delay:Math.min(index*.02,.08)}}
            onClick={()=>goProduct(product.id)}
          >
            <span className="global-search__result-media"><img src={product.image} alt=""/></span>
            <span className="global-search__result-copy"><small>{product.category}</small><strong>{product.name}</strong><span>{facts(product).join(' · ')}</span></span>
            {price(product)&&<span className="global-search__result-price">{price(product)}</span>}
            <ChevronRight aria-hidden="true"/>
          </m.button>)}</m.div>:<m.div id="global-search-results" className="global-search__empty" key="empty" role="status" aria-live="polite"><strong>No matching products</strong><p>Try another flavor, product, category, or potency.</p></m.div>}</Presence>
        </>}
      </div>
    </m.section>
  </m.div>}</Presence>
}
