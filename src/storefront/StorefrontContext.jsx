import React,{createContext,useContext,useEffect,useState} from 'react'

const CART_KEY='lagom-beverage-cart-v1'
const DRINK_PACKS=[
  {id:'single',label:'Single',detail:'Single 12 fl oz can',price:6.99},
  {id:'4-pack',label:'4-pack',detail:'Four 12 fl oz cans',price:19.99},
]

export const productVariants=product=>product.variants?.length
  ?product.variants
  :product.category==='Seltzers'
    ?DRINK_PACKS.map(pack=>({...pack,image:product.image}))
    :[{id:'default',label:product.weight||'Each',detail:product.weight||'Single item',price:product.price,image:product.image}]

export const configuredProduct=(product,variant)=>({
  ...product,
  brand:product.brand||'Lagom Naturals',
  category:product.category||'Beverages',
  variantId:variant.id,
  weight:variant.detail||variant.label,
  pack:variant.label,
  price:variant.price,
  image:variant.image||product.image,
  cartKey:`${product.id}:${variant.id}`,
})

const CartContext=createContext(null)
export const useCart=()=>useContext(CartContext)

function readCart(){
  try{
    const saved=JSON.parse(localStorage.getItem(CART_KEY)||'[]')
    return Array.isArray(saved)?saved:[]
  }catch{return[]}
}

export function CartProvider({children}){
  const[items,setItems]=useState(readCart)
  useEffect(()=>{try{localStorage.setItem(CART_KEY,JSON.stringify(items))}catch{};window.dispatchEvent(new CustomEvent('lagom:cart-updated',{detail:{count:items.reduce((sum,item)=>sum+item.qty,0)}}))},[items])
  const add=(item,quantity=1)=>setItems(current=>{
    const key=item.cartKey||item.id
    const existing=current.find(entry=>entry.cartKey===key)
    return existing
      ?current.map(entry=>entry.cartKey===key?{...entry,qty:entry.qty+quantity}:entry)
      :[...current,{...item,cartKey:key,qty:quantity}]
  })
  const change=(key,qty)=>setItems(current=>qty<1?current.filter(item=>item.cartKey!==key):current.map(item=>item.cartKey===key?{...item,qty}:item))
  const remove=key=>setItems(current=>current.filter(item=>item.cartKey!==key))
  const count=items.reduce((sum,item)=>sum+item.qty,0)
  const subtotal=items.reduce((sum,item)=>sum+item.price*item.qty,0)
  return <CartContext.Provider value={{items,add,change,remove,count,subtotal}}>{children}</CartContext.Provider>
}
