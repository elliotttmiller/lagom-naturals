import React from "react";
import { responsiveImageBySrc } from "@/generated/responsiveImages";

export default function ResponsiveImage({ src, alt, sizes = "100vw", className = "", width, height, onLoad, onError, ...imageProps }) {
  const [ready, setReady] = React.useState(false);
  const imageRef = React.useRef(null);
  const media = responsiveImageBySrc.get(src);

  React.useEffect(() => {
    setReady(false);
    if (imageRef.current?.complete) setReady(true);
  }, [src]);

  const handleLoad = (event) => {
    setReady(true);
    onLoad?.(event);
  };

  const handleError = (event) => {
    setReady(true);
    onError?.(event);
  };

  const imageClassName = ["responsive-image", ready ? "is-ready" : "is-loading", className].filter(Boolean).join(" ");
  const image = (
    <img
      ref={imageRef}
      src={media?.src || src}
      alt={alt}
      width={width ?? media?.width}
      height={height ?? media?.height}
      sizes={sizes}
      className={imageClassName}
      data-image-state={ready ? "ready" : "loading"}
      onLoad={handleLoad}
      onError={handleError}
      {...imageProps}
    />
  );

  if (!media) return image;

  return (
    <picture className="responsive-picture" data-image-state={ready ? "ready" : "loading"}>
      <source type="image/avif" srcSet={media.avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={media.webpSrcSet} sizes={sizes} />
      {image}
    </picture>
  );
}
