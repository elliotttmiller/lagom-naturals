import React from 'react'

const iconSrc=`${import.meta.env.BASE_URL}enhanced-lagom-naturals-icon.webp`

/**
 * Brand-native loading mark shared by deferred route states.
 * The base icon never rotates or deforms. Low-opacity clipped duplicates of the
 * same canonical asset create optical motion across the bird and four current
 * bars while preserving the approved artwork.
 */
export default function LagomLoadingMark({className=''}) {
  return <span className={`lagom-loading-mark ${className}`.trim()} aria-hidden="true">
    <span className="lagom-loading-mark__visual">
      <img className="lagom-loading-mark__image lagom-loading-mark__base" src={iconSrc} alt="" width="1254" height="1254" decoding="async"/>
      <img className="lagom-loading-mark__image lagom-loading-mark__motion lagom-loading-mark__bird" src={iconSrc} alt="" width="1254" height="1254" decoding="async"/>
      <img className="lagom-loading-mark__image lagom-loading-mark__motion lagom-loading-mark__wave lagom-loading-mark__wave--1" src={iconSrc} alt="" width="1254" height="1254" decoding="async"/>
      <img className="lagom-loading-mark__image lagom-loading-mark__motion lagom-loading-mark__wave lagom-loading-mark__wave--2" src={iconSrc} alt="" width="1254" height="1254" decoding="async"/>
      <img className="lagom-loading-mark__image lagom-loading-mark__motion lagom-loading-mark__wave lagom-loading-mark__wave--3" src={iconSrc} alt="" width="1254" height="1254" decoding="async"/>
      <img className="lagom-loading-mark__image lagom-loading-mark__motion lagom-loading-mark__wave lagom-loading-mark__wave--4" src={iconSrc} alt="" width="1254" height="1254" decoding="async"/>
    </span>
  </span>
}
