import Shell from '@/storefront/StorefrontShell'
import EditorialPageHeader from '@/editorial/EditorialPageHeader'
import Accordion from '@/editorial/Accordion'
import '@/styles/mobile/70-editorial.css'
import '@/styles/editorial-routes.css'

const ITEMS=[
  {
    id:'what-is-thc-beverage',
    title:'What is a THC beverage?',
    content:<p>Lagom is a sparkling beverage infused with hemp-derived THC. It contains no alcohol. Individual experiences with THC vary.</p>,
  },
  {
    id:'read-the-can',
    title:'Read the can',
    content:<p>Current Lagom seltzers are labeled with 10 mg THC per can and 12 fl oz (355 mL). Read product labeling before consuming and do not assume that THC affects everyone the same way.</p>,
  },
  {
    id:'take-your-time',
    title:'Take your time',
    content:<><p>If you are unfamiliar with THC, begin with a lower amount and allow adequate time before consuming more. Effects vary based on the individual, amount consumed, food intake, and other factors.</p><p>Do not drive or operate machinery after consuming THC. Keep products away from children and pets. Follow local law and product labeling.</p></>,
  },
]

export default function LearnPage(){
  return <Shell>
    <div className="editorial-route editorial-learn">
      <EditorialPageHeader
        eyebrow="THC, explained"
        title="A considered place to start."
        lede={<p>Clear product information and responsible-use guidance without pretending there is one universal THC experience.</p>}
      />
      <section className="editorial-route__content" aria-label="THC education">
        <div className="editorial-route__aside"><span>01—03</span><p>Product information</p></div>
        <Accordion items={ITEMS}/>
      </section>
    </div>
  </Shell>
}
