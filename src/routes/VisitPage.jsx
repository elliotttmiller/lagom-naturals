import Shell from '@/storefront/StorefrontShell'
import {MapPin} from 'lucide-react'
import {responsiveImages} from '@/generated/responsiveImages'
import ResponsiveImage from '@/storefront/ResponsiveImage'

const storefront=responsiveImages.store['storefront-day'].src

export default function VisitPage(){
  return <Shell>
    <section className="find-page">
      <div>
        <p>FIND LAGOM</p>
        <h1>Out in the world.</h1>
        <p>Verified retailer data has not been connected yet. Availability varies; contact retailers before making a trip.</p>
        <form onSubmit={event=>event.preventDefault()}>
          <label htmlFor="location">ZIP or city</label>
          <div><input id="location" placeholder="Minneapolis, MN"/><button type="submit">SEARCH</button></div>
        </form>
        <div className="availability-empty"><MapPin/><h2>Retail locator coming soon.</h2><p>We’ll show confirmed retailers here when distribution data is available.</p></div>
      </div>
      <ResponsiveImage src={storefront} alt="Lagom Naturals storefront in Minneapolis" sizes="(max-width: 899px) 100vw, 50vw" loading="lazy" decoding="async"/>
    </section>
  </Shell>
}
