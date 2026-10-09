import React from "react";
import {Link} from "react-router-dom";

function TileMedia({media,alt="",sizes="(max-width: 899px) 100vw, 50vw"}){
  if(!media)return null;
  return <picture className="editorial-tile__media">
    {media.avifSrcSet&&<source type="image/avif" srcSet={media.avifSrcSet} sizes={sizes}/>}
    {media.webpSrcSet&&<source type="image/webp" srcSet={media.webpSrcSet} sizes={sizes}/>}
    <img src={media.src} alt={alt} loading="lazy" decoding="async"/>
  </picture>;
}

export default function EditorialTile({eyebrow,title,body,to,media,alt="",className="",children}){
  const content=<>
    <TileMedia media={media} alt={alt}/>
    <span className="editorial-tile__shade" aria-hidden="true"/>
    <span className="editorial-tile__copy">
      {eyebrow&&<small>{eyebrow}</small>}
      <b>{title}</b>
      {body&&<em>{body}</em>}
    </span>
    {children}
  </>;
  return to?<Link className={"editorial-tile "+className} to={to}>{content}</Link>:<article className={"editorial-tile "+className}>{content}</article>;
}
