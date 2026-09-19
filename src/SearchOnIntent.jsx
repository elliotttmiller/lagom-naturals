import React from 'react'

const loadSearch=()=>import('./PremiumGlobalSearch')
const LazySearch=React.lazy(loadSearch)
const SEARCH_SELECTOR='a[aria-label^="Search"],button[aria-label^="Search"]'

export default function SearchOnIntent(){
  const[mounted,setMounted]=React.useState(false)
  const[openRequest,setOpenRequest]=React.useState(0)

  React.useEffect(()=>{
    const warm=event=>{
      if(event.target.closest?.(SEARCH_SELECTOR))loadSearch()
    }
    const open=()=>{
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
  return <React.Suspense fallback={null}><LazySearch openRequest={openRequest}/></React.Suspense>
}
