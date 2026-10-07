import Shell from '@/storefront/StorefrontShell'
import {MapPin} from 'lucide-react'
import {responsiveImages} from '@/generated/responsiveImages'
import ResponsiveImage from '@/storefront/ResponsiveImage'
import EditorialPageHeader from '@/editorial/EditorialPageHeader'
import '@/styles/editorial-routes.css'

const storefront=responsiveImages.store['storefront-day']

export default function VisitPage(){
  return <Shell>
    <div className="editorial-route editorial-visit">
      <EditorialPageHeader
        eyebrow="Find Lagom"
        title="Out in the world."
        lede={<p>Verified retailer data has not been connected yet. Availability varies; contact retailers before making a trip.</p>}
      />
      <section className="editorial-visit__stage">
        <div className="editorial-visit__utility">
          <form onSubmit={event=>event.preventDefault()}>
            <label htmlFor="location">ZIP or city</label>
            <div><input id="location" placeholder="Minneapolis, MN"/><button type="submit">Search</button></div>
          </form>
          <div className="availability-empty">
            <MapPin aria-hidden="true"/>
            <h2>Retail locator coming soon.</h2>
            <p>Confirmed retailers will appear here when distribution data is available.</p>
          </div>
        </div>
        <ResponsiveImage src={storefront.src} alt="Lagom Naturals storefront in Minneapolis" sizes="(max-width: 899px) 100vw, 60vw" loading="eager" fetchPriority="high" decoding="async"/>
      </section>
    </div>
  </Shell>
}
