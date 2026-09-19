import Shell from '@/storefront/StorefrontShell'
import '@/styles/mobile/70-editorial.css'

export default function LearnPage(){
  return <Shell>
    <div className="editorial-page">
      <p>THC, EXPLAINED</p>
      <h1>A considered place to start.</h1>
      <section><h2>What is a THC beverage?</h2><p>Lagom is a sparkling beverage infused with hemp-derived THC. It contains no alcohol. Individual experiences with THC vary.</p></section>
      <section><h2>Read the can</h2><p>Every current Lagom can image states 10 mg THC per can and 12 fl oz (355 mL). A verified serving size is not available in the current source, so this site does not infer one.</p></section>
      <section id="responsible-use"><h2>Take your time</h2><p>If you are unfamiliar with THC, begin with a lower serving and allow adequate time before consuming more. Effects vary based on the individual, dose, food intake, and other factors.</p><p>Do not drive or operate machinery after consuming THC. Keep products away from children and pets. Follow local law and product labeling.</p></section>
    </div>
  </Shell>
}
