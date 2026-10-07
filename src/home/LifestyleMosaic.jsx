import React from "react";
import EditorialTile from "@/editorial/EditorialTile";
import {responsiveImages} from "@/generated/responsiveImages";

export default function LifestyleMosaic(){
  const story=responsiveImages.story;
  const store=responsiveImages.store;
  return <section className="lifestyle-mosaic" aria-labelledby="lifestyle-mosaic-title">
    <header className="lifestyle-mosaic__header">
      <p>Occasion, ritual, culture</p>
      <h2 id="lifestyle-mosaic-title">Made for the moments around the drink.</h2>
    </header>
    <div className="lifestyle-mosaic__grid">
      <EditorialTile eyebrow="01" title="Golden hour" media={story["just-enough-desktop"]} alt="Minnesota lakeshore at sunset" to="/about"/>
      <EditorialTile eyebrow="02" title="Together" media={story["cheers-desktop"]} alt="Friends sharing Lagom seltzers outdoors" to="/about"/>
      <EditorialTile eyebrow="03" title="The Lagom way" media={story["hero-desktop"]} alt="" to="/about"/>
      <EditorialTile eyebrow="04" title="Find Lagom" media={store["storefront-day"]} alt="Lagom Naturals storefront in Minneapolis" to="/visit"/>
    </div>
  </section>;
}
