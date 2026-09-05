import {useEffect,useMemo,useRef,useState} from 'react'
import {ArrowRight,ChevronRight,Search,X} from 'lucide-react'
import {useLocation,useNavigate} from 'react-router-dom'
import {categoryCards,categoryImages,products} from './catalogData'

const POPULAR=['Lemon','Flower','Edibles','Pre-Rolls','Concentrates']

function normalize(value=''){return value.trim().toLowerCase()}

function matchProduct(product,query){
  if(!query)return true
  return `${product.brand||''} ${product.name||''} ${product.category||''} ${product.type||''} ${product.strength||''}`.toLowerCase().includes(query)
}

export default function GlobalSearchOverlay(){
  const[open,setOpen]=useState(false)
  const[query,setQuery]=useState('')
  const inputRef=useRef(null)
  const location=useLocation()
  const navigate=useNavigate()
  const normalized=normalize(query)

  const results=useMemo(()=>products.filter(product=>matchProduct(product,normalized)),[normalized])
  const topResults=(normalized?results:products).slice(0,4)

  const close=()=>setOpen(false)
  const openSearch=()=>setOpen(true)

  useEffect(()=>{
    const handleToggle=event=>{
      const requested=event.detail?.open
      setOpen(current=>typeof requested==='boolean'?requested:!current)
    }
    const handleOpen=()=>openSearch()
    const handleClose=()=>close()
    window.addEventListener('lagom:toggle-global-search',handleToggle)
    window.addEventListener('lagom:open-global-search',handleOpen)
    window.addEventListener('lagom:close-global-search',handleClose)
    return()=>{
      window.removeEventListener('lagom:toggle-global-search',handleToggle)
      window.removeEventListener('lagom:open-global-search',handleOpen)
      window.removeEventListener('lagom:close-global-search',handleClose)
    }
  },[])

  useEffect(()=>{if(open)close()},[location.pathname,location.search])

  useEffect(()=>{
    const trigger=document.querySelector('.site-header .header-tools a[aria-label="Search"]')
    if(trigger){
      trigger.setAttribute('aria-expanded',open?'true':'false')
      trigger.setAttribute('aria-controls','global-search-surface')
    }
    document.body.classList.toggle('global-search-open',open)
    if(!open)return
    const previousOverflow=document.body.style.overflow
    document.body.style.overflow='hidden'
    const focusTimer=window.setTimeout(()=>inputRef.current?.focus({preventScroll:true}),90)
    const onKeyDown=event=>{if(event.key==='Escape'){event.preventDefault();close()}}
    document.addEventListener('keydown',onKeyDown)
    return()=>{
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown',onKeyDown)
      document.body.style.overflow=previousOverflow
      document.body.classList.remove('global-search-open')
    }
  },[open])

  const goProduct=id=>{close();navigate(`/product/${id}`)}
  const goCategory=name=>{close();navigate(`/shop?category=${encodeURIComponent(name)}`)}
  const goAll=()=>{close();navigate(normalized?`/shop?search=${encodeURIComponent(query.trim())}`:'/shop')}

  if(!open)return null

  return <div className="global-search-backdrop" role="presentation" onPointerDown={event=>{if(event.target===event.currentTarget)close()}}>
    <section id="global-search-surface" className="global-search" role="dialog" aria-modal="true" aria-labelledby="global-search-title">
      <div className="global-search__head">
        <div><h1 id="global-search-title">Search</h1><p>Find products, brands, or effects...</p></div>
        <button type="button" className="global-search__close" onClick={close} aria-label="Close search"><X/></button>
      </div>

      <label className="global-search__input-wrap">
        <Search aria-hidden="true"/>
        <input ref={inputRef} type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search products, brands, or effects..." aria-label="Search products, brands, or effects"/>
        {query&&<button type="button" onClick={()=>{setQuery('');inputRef.current?.focus()}} aria-label="Clear search"><X/></button>}
      </label>

      <section className="global-search__section global-search__popular" aria-labelledby="popular-searches-title">
        <div className="global-search__section-head"><h2 id="popular-searches-title">Popular Searches</h2><button type="button" onClick={()=>{setQuery('');inputRef.current?.focus()}}>View All <ArrowRight/></button></div>
        <div className="global-search__chips">{POPULAR.map(term=><button type="button" key={term} onClick={()=>setQuery(term)}>{term}</button>)}</div>
      </section>

      <section className="global-search__section" aria-labelledby="browse-search-title">
        <div className="global-search__section-head"><h2 id="browse-search-title">Browse by Category</h2></div>
        <div className="global-search__categories">{categoryCards.map(([name,label])=><button type="button" key={name} onClick={()=>goCategory(name)}><span>{categoryImages[name]&&<img src={categoryImages[name]} alt=""/>}</span><b>{label}</b></button>)}</div>
      </section>

      <section className="global-search__section global-search__results" aria-labelledby="top-results-title">
        <div className="global-search__section-head"><h2 id="top-results-title">{normalized?`Top Results (${results.length})`:'Top Results'}</h2>{results.length>4&&<button type="button" onClick={goAll}>View All Results <ArrowRight/></button>}</div>
        {topResults.length?<div className="global-search__result-list">{topResults.map(product=><article className="global-search__result" key={product.id}>
          <button type="button" className="global-search__result-main" onClick={()=>goProduct(product.id)}>
            <span className="global-search__result-media"><img src={product.image} alt=""/></span>
            <span className="global-search__result-copy"><small>{product.brand}</small><strong>{product.name}</strong><span>{[product.type,product.strength].filter(Boolean).join(' · ')}</span>{product.rating!=null&&<em>★ {product.rating}{product.reviews!=null?` (${product.reviews})`:''}</em>}</span>
            <span className="global-search__result-price">${Number(product.price??product.variants?.[0]?.price??0).toFixed(2)}</span>
            <ChevronRight className="global-search__result-arrow" aria-hidden="true"/>
          </button>
        </article>)}</div>:<div className="global-search__empty"><strong>No matching products</strong><p>Try a product name, brand, category, effect, or potency.</p></div>}
      </section>

      {normalized&&<button type="button" className="global-search__all" onClick={goAll}><Search/>View all results for “{query.trim()}”<ChevronRight/></button>}
    </section>
  </div>
}
