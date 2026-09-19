import React from 'react'

let searchModulePromise
const loadSearch=()=>{
  if(!searchModulePromise){
    searchModulePromise=import('./PremiumGlobalSearch').catch(error=>{
      searchModulePromise=undefined
      throw error
    })
  }
  return searchModulePromise
}
const LazySearch=React.lazy(loadSearch)
const SEARCH_SELECTOR='a[aria-label^="Search"],button[aria-label^="Search"]'

export default function SearchOnIntent(){
  const[mounted,setMounted]=React.useState(false)
  const[openRequest,setOpenRequest]=React.useState(0)
  const[trigger,setTrigger]=React.useState(null)

  React.useEffect(()=>{
    const warm=event=>{
      if(event.target.closest?.(SEARCH_SELECTOR))void loadSearch().catch(()=>{})
    }
    const open=event=>{
      const active=document.activeElement instanceof HTMLElement?document.activeElement:null
      setTrigger(active?.matches?.(SEARCH_SELECTOR)?active:null)
      setMounted(true)
      setOpenRequest(value=>value+1)
    }
    document.addEventListener('pointerover',warm,{passive:true,capture:true})
    document.addEventListener('focusin',warm,true)
    window.addEventListener('lagom:open-global-search',open)
    return()=>{
      document.removeEventListener('pointerover',warm,true)
      document.removeEventListener('focusin',warm,true)
      window.removeEventListener('lagom:open-global-search',open)
    }
  },[])

  if(!mounted)return null
  return <React.Suspense fallback={null}><LazySearch openRequest={openRequest} initialTrigger={trigger}/></React.Suspense>
}
