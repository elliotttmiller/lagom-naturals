import React from 'react'
import {ShoppingCart} from 'lucide-react'
import './add-to-cart-button.css'

const SIZE_CLASSES={compact:'lagom-atc--compact',card:'lagom-atc--card',default:'lagom-atc--default',wide:'lagom-atc--wide'}

export default function AddToCartButton({label='Add to Cart',pendingLabel='Adding…',state='idle',size='default',productId,feedbackMode='controlled',className='',children,disabled,type='button',...props}){
  const normalizedState=['adding','added'].includes(state)?state:'idle'
  const visibleLabel=normalizedState==='adding'?pendingLabel:label
  return <button {...props} type={type} disabled={disabled} className={['lagom-atc',SIZE_CLASSES[size]||SIZE_CLASSES.default,className].filter(Boolean).join(' ')} data-state={normalizedState} data-cart-action="add" data-cart-product-id={productId!=null?String(productId):undefined} data-cart-feedback-mode={feedbackMode} aria-busy={normalizedState==='adding'||undefined}>
    <span className="lagom-atc__surface" aria-hidden="true"/>
    <span className="lagom-atc__content"><ShoppingCart className="lagom-atc__cart" aria-hidden="true"/><span className="lagom-atc__label">{children||visibleLabel}</span></span>
    <span className="lagom-atc__spinner" aria-hidden="true"/>
    <span className="lagom-atc__success" aria-hidden="true"><svg viewBox="0 0 24 24"><circle className="lagom-atc__success-ring" cx="12" cy="12" r="10" fill="none"/><path className="lagom-atc__success-check" fill="none" d="m5.5 12.5 4.2 4.2 8.8-9.4"/></svg></span>
    {normalizedState==='added'?<span className="sr-only" role="status" aria-live="polite">Added to cart</span>:null}
  </button>
}
