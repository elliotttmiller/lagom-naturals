import {useEffect} from 'react'

const SEARCH_SELECTOR='a[aria-label^="Search"],button[aria-label^="Search"]'

export default function GlobalSearchTriggerBridge(){
  useEffect(()=>{
    const openSearch=event=>{
      const trigger=event.target.closest?.(SEARCH_SELECTOR)
      if(!trigger)return
      event.preventDefault()
      event.stopPropagation()
      window.dispatchEvent(new CustomEvent('lagom:open-global-search'))
    }
    document.addEventListener('click',openSearch,true)
    return()=>document.removeEventListener('click',openSearch,true)
  },[])
  return null
}
