import {useDeferredValue,useEffect,useLayoutEffect,useMemo,useRef,useState} from 'react'
import {ArrowRight,ChevronRight,Search,X} from 'lucide-react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {products} from './catalogData'
import {Presence,m,motionTokens,useReducedMotion} from './motionSystem'
import './global-search.css'

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
  const variants=Array.isArray(product.variants)?product.variants:[]
  const single=variants.find(variant=>String(variant.label??'').toLocaleLowerCase().includes('single'))
  const value=single?.price??product.price??variants[0]?.price
  if(!Number.isFinite(Number(value)))return null
  const formatted=`${Number(value).toFixed(2)}`
  return variants.length>1?`Starting at ${formatted}`:formatted
}
function facts(product){
  if(product.category==='Seltzers')return [product.flavor,product.thcMgPerCan?`${product.thcMgPerCan} mg THC / can`:null,product.canVolume].filter(Boolean)
  return [product.flavor,product.productLine,product.weight].filter(Boolean)
}

export default function PremiumGlobalSearch({openRequest=0,initialTrigger=null}){
  const[open,setOpen]=useState(false)
  const[query,setQuery]=useState('')
  const[fieldFocused,setFieldFocused]=useState(false)
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
  useEffect(()=>{if(openRequest>0){if(initialTrigger)returnFocusRef.current=initialTrigger;setOpen(true)}},[openRequest,initialTrigger])
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
    transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.control,ease:motionTokens.ease}}
    onPointerDown={event=>{if(event.target===event.currentTarget)close()}}
  >
    <m.section
      id="global-search-surface"
      className={`global-search${searching?' global-search--searching':''}`}
      role="search"
      aria-label="Search Lagom products"
      initial={reduceMotion?false:{opacity:.94,y:-10}}
      animate={{opacity:1,y:0}}
      exit={reduceMotion?undefined:{opacity:.9,y:-7}}
      transition={reduceMotion?{duration:0}:motionTokens.springSoft}
    >
      <m.div
        className="global-search__bar"
        initial={reduceMotion?false:{opacity:.86,y:-5}}
        animate={{opacity:1,y:0}}
        transition={reduceMotion?{duration:0}:{delay:.035,...motionTokens.springSoft}}
      >
        <m.div initial={reduceMotion?false:{opacity:0,x:-6}} animate={{opacity:1,x:0}} transition={reduceMotion?{duration:0}:{delay:.08,...motionTokens.springSoft}}>
          <Link className="global-search__brand" to="/" aria-label="Lagom Naturals home" onClick={close}><img src={`${import.meta.env.BASE_URL}lagom-logo.svg`} alt="Lagom Naturals"/></Link>
        </m.div>
        <m.form
          className="global-search__form"
          onSubmit={submit}
          onFocusCapture={()=>setFieldFocused(true)}
          onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFieldFocused(false)}}
          initial={reduceMotion?false:{opacity:.78,x:10,scale:.992,y:0}}
          animate={{opacity:1,x:0,scale:1,y:fieldFocused?-1:0}}
          transition={reduceMotion?{duration:0}:{delay:.04,...motionTokens.springSoft}}
        >
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
          <Presence initial={false}>
            {query&&<m.button
              type="button"
              className="global-search__clear"
              onClick={()=>{setQuery('');inputRef.current?.focus()}}
              aria-label="Clear search"
              initial={reduceMotion?false:{opacity:0,scale:.88}}
              animate={{opacity:1,scale:1}}
              exit={{opacity:0,scale:.9}}
              transition={reduceMotion?{duration:0}:motionTokens.springSnappy}
              whileHover={reduceMotion?undefined:{scale:1.035}}
              whileTap={motionTokens.tap}
            ><X/></m.button>}
          </Presence>
        </m.form>
        <m.button
          type="button"
          className="global-search__close"
          onClick={close}
          aria-label="Close search"
          initial={reduceMotion?false:{opacity:0,x:6}}
          animate={{opacity:1,x:0}}
          transition={reduceMotion?{duration:0}:{delay:.1,...motionTokens.springSoft}}
          whileHover={reduceMotion?undefined:{scale:1.025}}
          whileTap={motionTokens.tap}
        ><X/><span>Close</span></m.button>
      </m.div>

      <m.div
        className="global-search__panel"
        initial={reduceMotion?false:{opacity:0,y:-6}}
        animate={{opacity:1,y:0}}
        transition={reduceMotion?{duration:0}:{delay:.075,duration:motionTokens.duration.slow,ease:motionTokens.easeSoft}}
      >
        <Presence mode="popLayout" initial={false}>
          {!searching
            ?<m.div
              key="suggestions"
              className="global-search__suggestions"
              initial={reduceMotion?false:{opacity:0,y:-5}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-3}}
              transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.base,ease:motionTokens.easeSoft}}
            >
              <span>Popular searches</span>
              <m.div className="global-search__chips" initial={reduceMotion?false:'hidden'} animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.035,delayChildren:.02}}}}>
                {POPULAR.map(term=><m.button
                  type="button"
                  key={term}
                  onClick={()=>setQuery(term)}
                  variants={{hidden:{opacity:0,y:4},visible:{opacity:1,y:0,transition:motionTokens.springSoft}}}
                  whileHover={reduceMotion?undefined:{y:-1}}
                  whileTap={motionTokens.tap}
                >{term}</m.button>)}
              </m.div>
            </m.div>
            :<m.div
              key="searching"
              initial={reduceMotion?false:{opacity:0,y:4}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-3}}
              transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.base,ease:motionTokens.easeSoft}}
            >
              <div className="global-search__summary"><span aria-live="polite">{results.length} {results.length===1?'match':'matches'}</span>{results.length>6&&<m.button type="button" onClick={goAll} whileTap={motionTokens.tap}>View all results <ArrowRight/></m.button>}</div>
              <Presence mode="popLayout" initial={false}>
                {topResults.length
                  ?<m.div id="global-search-results" role="listbox" className="global-search__result-list" key="results" layout>
                    {topResults.map((product,index)=><m.button
                      layout
                      type="button"
                      role="option"
                      aria-selected="false"
                      className="global-search__result"
                      key={product.id}
                      initial={reduceMotion?false:{opacity:0,y:8,scale:.995}}
                      animate={{opacity:1,y:0,scale:1}}
                      exit={{opacity:0,y:-4,scale:.997}}
                      transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.control,delay:Math.min(index*.025,.1),ease:motionTokens.easeSoft}}
                      onClick={()=>goProduct(product.id)}
                      whileHover={reduceMotion?undefined:{y:-2}}
                      whileTap={motionTokens.tap}
                    >
                      <span className="global-search__result-media"><img src={product.image} alt=""/></span>
                      <span className="global-search__result-body">
                        <span className="global-search__result-copy"><small>{product.category}</small><strong>{product.name}</strong><span>{facts(product).join(' · ')}</span></span>
                        {price(product)&&<span className="global-search__result-price">{price(product)}</span>}
                      </span>
                      <span className="global-search__result-action" aria-hidden="true"><ChevronRight/></span>
                    </m.button>)}
                  </m.div>
                  :<m.div id="global-search-results" className="global-search__empty" key="empty" role="status" aria-live="polite" initial={reduceMotion?false:{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-3}} transition={reduceMotion?{duration:0}:motionTokens.springSoft}><strong>No matching products</strong><p>Try another flavor, product, category, or potency.</p></m.div>}
              </Presence>
            </m.div>}
        </Presence>
      </m.div>
    </m.section>
  </m.div>}</Presence>
}
