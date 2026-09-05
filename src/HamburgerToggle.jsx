import React,{forwardRef}from'react'
import'./hamburger-toggle.css'

const HamburgerToggle=forwardRef(function HamburgerToggle({checked=false,onChange,controls,label='Menu',className=''},ref){
  return <label
    ref={ref}
    className={`header-mobile-toggle hamburger${className?` ${className}`:''}`}
    aria-label={label}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={event=>onChange?.(event.target.checked)}
      aria-label={label}
      aria-expanded={checked}
      aria-controls={controls}
    />
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"/>
      <path className="line" d="M7 16 27 16"/>
    </svg>
  </label>
})

export default HamburgerToggle
