import {useEffect} from 'react'

const FILTER_ICON='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h10"/><path d="M18 7h2"/><circle cx="16" cy="7" r="2"/><path d="M4 17h2"/><path d="M10 17h10"/><circle cx="8" cy="17" r="2"/></svg>'
const SORT_ICON='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14"/><path d="m5 8 3-3 3 3"/><path d="M16 19V5"/><path d="m13 16 3 3 3-3"/></svg>'

function decorate(){
  if(window.matchMedia('(min-width:700px)').matches)return
  document.querySelectorAll('.listing-page .filter-row').forEach(row=>{
    const buttons=row.querySelectorAll(':scope > button')
    const filter=buttons[0]
    const sort=buttons[1]
    if(filter instanceof HTMLButtonElement){
      const icon=filter.querySelector('svg')
      if(icon){icon.outerHTML=FILTER_ICON}else if(!filter.querySelector('.listing-control-icon'))filter.insertAdjacentHTML('afterbegin',`<span class="listing-control-icon">${FILTER_ICON}</span>`)
    }
    if(sort instanceof HTMLButtonElement&&!sort.querySelector('.listing-control-icon--sort')){
      const text=[...sort.childNodes].find(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim())
      if(text)text.textContent=text.textContent.replace(/^\s*↕\s*/,' ')
      sort.insertAdjacentHTML('afterbegin',`<span class="listing-control-icon listing-control-icon--sort">${SORT_ICON}</span>`)
    }
  })
}

export default function MobileListingControlIcons(){
  useEffect(()=>{
    let frame=0
    const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(decorate)}
    decorate()
    const observer=new MutationObserver(schedule)
    observer.observe(document.getElementById('root')||document.body,{childList:true,subtree:true,characterData:true})
    window.addEventListener('resize',schedule,{passive:true})
    return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('resize',schedule)}
  },[])
  return null
}
