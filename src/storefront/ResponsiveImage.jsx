import React from "react";
import { responsiveImageBySrc } from "@/generated/responsiveImages";

export default function ResponsiveImage({ src, alt, sizes = "100vw", ...imageProps }) {
  const media = responsiveImageBySrc.get(src);
  if (!media) return <img src={src} alt={alt} {...imageProps} />;
  return (
    <picture>
      <source type="image/avif" srcSet={media.avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={media.webpSrcSet} sizes={sizes} />
      <img src={media.src} alt={alt} sizes={sizes} {...imageProps} />
    </picture>
  );
}
