import {useEffect,useMemo,useRef,useState} from 'react'
import {Check,ChevronDown} from 'lucide-react'
import {Presence,m,motionTokens,useReducedMotion} from './motionSystem'

const OPTIONS=[
  {key:'featured',label:'Featured',match:value=>value.includes('featured')},
  {key:'low',label:'Price: Low to High',match:value=>value.includes('low')},
  {key:'high',label:'Price: High to Low',match:value=>value.includes('high')},
]

function readSort(button){return (button?.getAttribute('aria-label')||'Sort, Featured').replace(/^Sort,\s*/i,'').trim()||'Featured'}

export default function MobileSortMenuBridge(){
  const[open,setOpen]=useState(false)
  const[current,setCurrent]=useState('Featured')
  const[anchor,setAnchor]=useState({top:0,left:16,width:0})
  const bypassRef=useRef(false)
  const reduceMotion=useReducedMotion()

  const active=useMemo(()=>OPTIONS.find(option=>option.match(current.toLowerCase()))||OPTIONS[0],[current])

  useEffect(()=>{
    const onClick=event=>{
      if(bypassRef.current||window.matchMedia('(min-width:700px)').matches)return
      const button=event.target instanceof Element?event.target.closest('.listing-page .filter-row button:nth-child(2)'):null
      if(!(button instanceof HTMLButtonElement))return
      event.preventDefault()
      event.stopPropagation()
      const rect=button.getBoundingClientRect()
      const width=Math.min(286,Math.max(238,rect.width+56))
      const left=Math.min(window.innerWidth-width-14,Math.max(14,rect.right-width))
      setAnchor({top:rect.bottom+8,left,width})
      setCurrent(readSort(button))
      setOpen(value=>!value)
    }
    document.addEventListener('click',onClick,true)
    return()=>document.removeEventListener('click',onClick,true)
  },[])

  useEffect(()=>{
    if(!open)return
    const close=()=>setOpen(false)
    const onKey=event=>{if(event.key==='Escape')close()}
    window.addEventListener('resize',close)
    window.addEventListener('scroll',close,{passive:true})
    document.addEventListener('keydown',onKey)
    return()=>{
      window.removeEventListener('resize',close)
      window.removeEventListener('scroll',close)
      document.removeEventListener('keydown',onKey)
    }
  },[open])

  const choose=async option=>{
    const matches=value=>option.match(value.toLowerCase())
    setOpen(false)
    for(let index=0;index<4;index+=1){
      const button=document.querySelector('.listing-page .filter-row button:nth-child(2)')
      if(!(button instanceof HTMLButtonElement))break
      const value=readSort(button)
      if(matches(value)){setCurrent(value);return}
      bypassRef.current=true
      button.click()
      bypassRef.current=false
      await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))
    }
    const button=document.querySelector('.listing-page .filter-row button:nth-child(2)')
    setCurrent(readSort(button))
  }

  return <Presence>
    {open&&<>
      <m.button
        key="sort-scrim"
        type="button"
        className="mobile-sort-scrim"
        aria-label="Close sort menu"
        onClick={()=>setOpen(false)}
        initial={reduceMotion?false:{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:reduceMotion?0:motionTokens.duration.fast,ease:motionTokens.easeSoft}}
      />
      <m.div
        key="sort-menu"
        className="mobile-sort-menu"
        role="menu"
        aria-label="Sort products"
        style={{top:anchor.top,left:anchor.left,width:anchor.width}}
        initial={reduceMotion?false:{opacity:0,y:-8,scale:.975}}
        animate={{opacity:1,y:0,scale:1}}
        exit={{opacity:0,y:-5,scale:.985}}
        transition={reduceMotion?{duration:0}:motionTokens.springSoft}
      >
        <div className="mobile-sort-menu__label">Sort Products <ChevronDown aria-hidden="true"/></div>
        {OPTIONS.map(option=>{
          const selected=option.key===active.key
          return <button type="button" role="menuitemradio" aria-checked={selected} key={option.key} className={selected?'is-selected':''} onClick={()=>choose(option)}>
            <span>{option.label}</span>
            <span className="mobile-sort-menu__check" aria-hidden="true">{selected&&<Check/>}</span>
          </button>
        })}
      </m.div>
    </>}
  </Presence>
}
