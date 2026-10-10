/* ============================================================================
   SoloFoundry — template catalogue (single source of truth)
   ----------------------------------------------------------------------------
   Add a new template by copying one object below and filling in the fields.
   - type:      "free" | "paid"
   - price:     "Free" for free templates, e.g. "$39" for paid (Standard tier;
                the Lemon Squeezy overlay offers Standard $39 / Pro $79)
   - preview:   the live Framer URL, or null if it's not published yet
   - checkout:  paid = the Lemon Squeezy buy URL. free = the framer.link remix
                (public on purpose — the template is free, nothing to protect).
   ★ PAID REMIX LINKS ARE NOT IN THIS FILE. This file is loaded by every public
     page, so the paid framer.links — the thing a bundle buyer pays for — live
     in delivery.js, which only the post-purchase delivery page loads. Adding a
     paid template? Its remix link goes in delivery.js, keyed by `name`.
   - accent:    the template's signature color (hex) — used to tint its card
   - image:     path to a real homepage screenshot (images/[slug].jpg), or null
   - featured:  true to surface it in the homepage "Featured casts" teaser
   The catalogue index (01, 02, …) is generated automatically from array order.
   The homepage teases the featured few; templates.html renders the whole list.
   Card images are fresh 1440x900 homepage captures of each live site, so the
   grid reads as one consistent set (see images/ and .capture.mjs).
============================================================================ */

const TEMPLATES = [
  {
    name: "Millwright",
    category: "Industrial Factory",
    type: "paid",
    price: "$39",
    tagline:
      "The manufacturing template that walks a buyer through the floor. A loader that counts the stations, then a dark full-screen hero whose photographs change behind an amber wipe as five numbered keys step through your capabilities — then proof figures that count up, capabilities as numbered stations, a process pinned panel by panel from drawing to dock, a machine list buyers can filter, industries, projects that lead with the number, a machined part with tolerance pins that fill in an inspection report, client quotes, insights, FAQ and a quote request that arrives already started. 34 pages, 8 CMS collections.",
    preview: "https://fancy-mindset-208002.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/d66c9a19-dfe6-4edc-af9b-09b41cccaf3d?embed=1",
    accent: "#FFB000",
    image: "images/millwright.jpg",
    featured: true,
  },

  {
    name: "Little Oak",
    category: "Kindergarten",
    type: "free",
    price: "Free",
    tagline:
      "The kindergarten template that opens on a child in front of a cream wall you can draw on. A crayon-line loader, then three marks that draw themselves and a crayon the visitor picks up — then a whole day told hour by hour in a strip that moves as you scroll, four programs with ages, ratio and a monthly fee, rooms whose picture swaps as you hover, every teacher with her room, notes from parents pinned to the wall, fees by days a week, enrolment in four steps, a blog, FAQ and a visit form that arrives filled in. 34 pages, 9 CMS collections, free.",
    preview: "https://concerned-apps-472098.framer.app",
    checkout:
      "https://framer.link/xaW954Z" /* ★ PLACEHOLDER — replace with Little Oak's real framer.link remix before deploy */,
    accent: "#D9502C",
    image: "images/little-oak.jpg",
    featured: true,
  },

  {
    name: "Brightwork",
    category: "Cleaning Service",
    type: "free",
    price: "Free",
    tagline:
      "The cleaning service template that opens on a sunlit room behind a hazy pane. A wordmark loader, then one pass that wipes the glass clear and a cursor that polishes the rest — then a price that changes as you pick bedrooms, bathrooms and frequency, eight services with a picture that is wiped to the next, a 38-point checklist you tick room by room, before and after frames you drag, plans that follow the frequency, a zip code check, the crew, client reviews, guides, FAQ and a booking form that arrives filled in. 42 pages, 9 CMS collections, free.",
    preview: "https://smiling-company-014109.framer.app",
    checkout: "https://framer.link/EB8BMrt",
    accent: "#0E5B4A",
    image: "images/brightwork.jpg",
    featured: true,
  },

  {
    name: "Citeable",
    category: "AEO, GEO & SEO",
    type: "paid",
    price: "$39",
    tagline:
      "The AI search agency template whose hero writes the answer. A loader that types a buyer's question, then one full-screen photograph with the AI answer written over it and the client's name marked — then six assistants whose share of answers counts up, a statement that lights up as you scroll, six services that each answer a sample question, a before and after answer visitors flip themselves, results with the number first, a four step method, client quotes set like cited answers, pricing with a monthly and quarterly switch, insights, FAQ and an audit request that arrives filled in. 33 pages, 8 CMS collections.",
    preview: "https://responsible-purpose-148466.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/21fa6dd3-cf1b-4ee6-8ef2-4fc153ecc380?embed=1",
    accent: "#B9C4FF",
    image: "images/citeable.jpg",
    featured: true,
  },

  {
    name: "Soren Hale",
    category: "Frontend Developer",
    type: "free",
    price: "Free",
    tagline:
      "The dark developer portfolio that reads like well-kept source. A loader that compiles one line, then a portrait you can decompile: press View source and the photograph turns into type — then a deck of projects that stack as you scroll with the number before and after, scores on one lime band, your stack on keycaps, services that open in place, a career drawn as a commit graph, a lab rail, reviews set as code review, writing with code blocks, a CV page that prints and a brief that travels to the form. 42 pages, 9 CMS collections, free.",
    preview: "https://wild-hours-611915.framer.app",
    checkout: "https://framer.link/faaV1j6",
    accent: "#C6FF3D",
    image: "images/soren-hale.jpg",
    featured: true,
  },

  {
    name: "Overstory",
    category: "Climate Consultants",
    type: "paid",
    price: "$39",
    tagline:
      "The sustainability consulting template that opens on one forest photograph lit by the cursor. A wordmark loader, then a pool of sunlight that follows the pointer across the trees — then client names that bring up their sector picture, six services with a picture that follows the hover, a net zero pathway visitors drag year by year, case studies on a rail with the number first, five sectors that open under the cursor, a four step approach, an impact band, team, client quotes, insights, FAQ and a baseline call brief that arrives filled in. 43 pages, 9 CMS collections.",
    preview: "https://zany-championship-527668.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/107652c9-a249-4b24-9389-4e347a06a151?embed=1",
    accent: "#F2A33A",
    image: "images/overstory.jpg",
    featured: true,
  },

  {
    name: "Goldhour",
    category: "Influencer Shop",
    type: "free",
    price: "Free",
    tagline:
      "The influencer and creator template that opens like your stories. A story-bar loader, then a first screen that plays your stories: hold to pause, tap to skip, and each one carries one thing — the new drop, your numbers, the latest video. Then a shop of presets, guides and favourites, a video rail that drifts as you scroll, a media kit brands can read in a minute, brand deal case pages, a real link in bio page on your own domain, discount codes that copy, a journal, reviews, a newsletter and a brand brief that travels to the form. 54 pages, 10 CMS collections, free.",
    preview: "https://dandy-collection-275484.framer.app",
    checkout: "https://framer.link/rXQonjC",
    accent: "#F0553A",
    image: "images/goldhour.jpg",
    featured: true,
  },
  {
    name: "Palisade",
    category: "Cyber Security",
    type: "paid",
    price: "$39",
    tagline:
      "The cybersecurity template that is light where every other one is dark, and opens on the product doing its job. A beam loader, then a sweep across a real photograph: exposed accounts and devices surface as findings and one key closes them while the risk score falls from 82 to 4 — then a live findings feed, four surfaces you scroll through, product spec cards, one incident on two tracks, integrations that connect, plans with a seats slider, a trust centre and a demo request that arrives filled in. 47 pages, 10 CMS collections.",
    preview: "https://inventive-room-446385.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/a49b85fd-39fc-415e-ac0e-321742478043?embed=1",
    accent: "#E5432A",
    image: "images/palisade.jpg",
    featured: true,
  },
  {
    name: "Snapgrid",
    category: "Website Designer",
    type: "free",
    price: "Free",
    tagline:
      "The web design and UX studio template where the first screen is the work. A counting loader, then a wall of finished websites drifting edge to edge: the one under the cursor comes forward with its client and its result — then case studies that pile up as you scroll, six services with a picture that follows the hover, a four-week process, a before and after slider, fixed-scope pricing with a pay-once or monthly switch, reviews, team, FAQ and a project brief that travels to the form. 61 pages, 9 CMS collections, free.",
    preview: "https://humorous-guava-532955.framer.app",
    checkout: "https://framer.link/jFpAj0n",
    accent: "#3D5AFE",
    image: "images/snapgrid.jpg",
    featured: true,
  },

  {
    name: "Roughcut",
    category: "Short Form Editor",
    type: "paid",
    price: "$39",
    tagline:
      "The video editing studio template where the visitor scrubs a real timeline. A timecode loader, then a playhead running across your projects: drag it and the frame, the timecode and the caption follow, hover a clip to preview it, click to cut — then a before and after you wipe by hand, a bin of clips that play, six services as tracks, a retention curve that draws as you scroll, the process from raw footage to upload, editors, plans with a videos per month slider, client quotes as captions and a four step project brief that arrives filled in. 41 pages, 8 CMS collections.",
    preview: "https://many-managers-534799.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/106e024d-b098-439d-a246-252ff3705c29?embed=1",
    accent: "#2BC8B6",
    image: "images/roughcut.jpg",
    featured: true,
  },

  {
    name: "Halyard",
    category: "Crypto Exchange",
    type: "free",
    price: "Free",
    tagline:
      "The crypto exchange and Web3 wallet template where the price is the first thing a visitor touches. A first-tick loader, then a live price tape ticking across the hero with a crosshair that reads it and a swap card that quotes as you type — then live markets with a follow-along chart, a trade terminal with an order book and a demo ticket, a wallet drawn in the page, earn products with a returns calculator, a launchpad with live sales, proof of reserves, readable fees, a learn hub, blog, help center, status page and a sign-up that hands off to your own app. 76 pages, 9 CMS collections, free.",
    preview: "https://convex-motivation-500539.framer.app",
    checkout: "https://framer.link/kPJmGiu",
    accent: "#5CE1FF",
    image: "images/halyard.jpg",
    featured: true,
  },

  {
    name: "Wellspring",
    category: "Charity Foundation",
    type: "free",
    price: "Free",
    tagline:
      "The charity, nonprofit and NGO template where a gift lights a village. A first-light loader, then a full-screen mountain village at blue hour: pick an amount and that many homes light up in the photo, with a line that says what the gift pays for — then six programs, a dollar bar that splits to show where the money goes, campaigns with live progress, one family's story in three steps, a map that lights village by village, monthly giving tiers, a three-step donation page that hands off to your own payment link, annual reports, volunteer sign-up and events. 46 pages, 9 CMS collections, free.",
    preview: "https://interactive-channel-508354.framer.app",
    checkout: "https://framer.link/f6Avpiy",
    accent: "#F2A33A",
    image: "images/wellspring.jpg",
    featured: true,
  },

  {
    name: "Tallow",
    category: "Dining & Reservation",
    type: "paid",
    price: "$39",
    tagline:
      "The restaurant template with a floor plan you book from. A pass loader, then the dining room drawn over the kitchen pass: pick a night, a time and a party size, the free tables light up, hover one for its spot and click to keep it with a prefilled booking — then the service runs plate by plate on a clock you can drag, a linen menu with a pass window, five rooms that open wide, the chef, three evenings, reviews, a journal and a candle-lit FAQ. 44 pages, 8 CMS collections.",
    preview: "https://yummy-minimalist-077919.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/5ade8b1c-19d2-4e04-bc0c-e6eb6417678d?embed=1",
    accent: "#E0A33A",
    image: "images/tallow.jpg",
    featured: true,
  },

  {
    name: "Fika",
    category: "Coffee Shop & Bakery",
    type: "paid",
    price: "$39",
    tagline:
      "The coffee shop, bakery and cafe template with a hero you can bite. An oven loader, then a giant croissant in front of the headline: it leans with the cursor and every click takes a bite, six bites and it is gone by noon and the next bake drops in — then a sell-out timeline that shows what is left when you come, the baker's morning from four to seven, a paper menu board, a coffee section with a brew guide, a cake order builder, three shops with live open chips, napkin notes from guests and a pre-order box that carries the order to the order page. 49 pages, 8 CMS collections.",
    preview: "https://primary-ferret-749912.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/e704e0d3-764d-4adf-9028-9ac3c19e56bc?embed=1",
    accent: "#F2C230",
    image: "images/fika.jpg",
    featured: true,
  },

  {
    name: "Kinema",
    category: "Image Generator",
    type: "paid",
    price: "$39",
    tagline:
      "The AI image and video generator template with a hero that generates. A resolve loader, then a full-screen generated picture with a working prompt bar: press Generate and the next picture resolves out of noise with its model, ratio and seed — then a gallery wall that shows every prompt, four tools in one pinned demo (text to image, a video timeline, a brush edit, an upscale slider), one picture in six styles, model spec cards, use cases, an API demo that streams its response, pricing with a credit calculator and a prompt box that carries the visitor's prompt into signup. 52 pages, 10 CMS collections.",
    preview: "https://frequent-cause-309575.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/1be5faef-1ea7-43c8-b3d0-badf89367286?embed=1",
    accent: "#C6FF3A",
    image: "images/kinema.jpg",
    featured: true,
  },

  {
    name: "Quiver",
    category: "Agent Studio",
    type: "paid",
    price: "$39",
    tagline:
      "The AI agency, consulting and automation template with a robot you light. A booting-agents loader, then a humanoid robot in front of a giant serif headline, relit in real time by the cursor: each agent has its own light colour, point at one and the light and the result card change to it — then services on lit plinths, a floor plan you walk through for the process, an agents hall, a case book that turns its pages, numbers on a vermilion band, signed client notes, pricing as access passes and a four-step booking form that fills an access pass. 32 pages, 10 CMS collections.",
    preview: "https://angelic-whoever-656956.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/b4828196-015d-450a-aea3-fe84d877108e?embed=1",
    accent: "#FF5A36",
    image: "images/quiver.jpg",
    featured: true,
  },

  {
    name: "Mainstage",
    category: "Event Summit Website",
    type: "free",
    price: "Free",
    tagline:
      "The event and conference template that opens on the room itself. A house-lights loader, then a full-screen photo of the main stage with your event's name across it and light that follows the cursor — then a lineup of speakers that light up on hover, a schedule you can filter by day, track and room, tracks that swap as you scroll, workshops with seats left, three passes on an orange band with a comparison table, a three-step registration form, venue, travel and past editions. 53 pages, 9 CMS collections, free.",
    preview: "https://gifted-attributes-102830.framer.app",
    checkout: "https://framer.link/R1tne6I",
    accent: "#FF5A1F",
    image: "images/mainstage.jpg",
    featured: true,
  },

  {
    name: "Lanai",
    category: "Hotel & Resort",
    type: "free",
    price: "Free",
    tagline:
      "The hotel and resort template that runs on the sun. A sunrise loader, then one resort photographed through a whole day: drag the time-of-day dial from sunrise to night and the pool, the spa and the lantern-lit dinner change with it, while a stay planner totals your nights live — then villas with to-scale floor plans, offers on a coral band, four restaurants on a 24-hour clock, a spa that breathes, a day of experiences on a sliding timeline and a four-step booking page. 43 pages, 9 CMS collections, free.",
    preview: "https://appreciative-satisfaction-753435.framer.app",
    checkout: "https://framer.link/CQFP9CO",
    accent: "#F2704E",
    image: "images/lanai.jpg",
    featured: true,
  },

  {
    name: "Latchkey",
    category: "Property Manager",
    type: "free",
    price: "Free",
    tagline:
      "The property management template for rental apartments and residential homes, built on one idea: lights on. A loader of windows switching on, then an apartment building at dusk where every window is a rental from the CMS, leased homes lit, and the scroll steps through a window into the room and the owner's statement — then a floor directory of services, a rent estimate with a dimmer, a window that goes from keys to first rent in 14 days, rentals behind roller blinds, a skyline of the areas you manage, an owner portal, one clear fee and a wall switch that lights the last room. 37 pages, 8 CMS collections.",
    preview: "https://funky-aside-761823.framer.app",
    checkout: "https://framer.link/oA9TTHT",
    accent: "#F5B642",
    image: "images/latchkey.jpg",
    featured: true,
  },

  {
    name: "Primer",
    category: "Online Course",
    type: "free",
    price: "Free",
    tagline:
      "The online course and academy template drawn like a school notebook. A pencil loader, then every course opens as a sketch your cursor draws into the real photo while a meter counts what you have learned — then courses you flip through sideways, a method marked in red pen, a free lesson player with its syllabus, teachers on a contact sheet, report-card pricing and a three-step enroll page. 34 pages, 8 CMS collections.",
    preview: "https://nuanced-screenshot-385541.framer.app",
    checkout: "https://framer.link/hOEdIlt",
    accent: "#F0532B",
    image: "images/primer.jpg",
    featured: true,
  },

  {
    name: "Mara Voss",
    category: "Product Designer",
    type: "free",
    price: "Free",
    tagline:
      "The designer and developer portfolio template shot like a studio photo set. A film-leader countdown, then a live portrait shoot: your cursor is the key light on a giant name, click for a new backdrop — then a darkroom print that develops, a 35mm contact sheet of your work, colour gels for services, a call sheet for your process, credits for your résumé and a clapperboard that calls the wrap. 36 pages, 7 CMS collections, a printable résumé.",
    preview: "https://diligent-tetragon-837366.framer.app",
    checkout: "https://framer.link/FNpkBYm",
    accent: "#FF5B2E",
    image: "images/mara-voss.jpg",
    featured: true,
  },

  {
    name: "Reachwise",
    category: "Social Media Studio",
    type: "free",
    price: "Free",
    tagline:
      "The digital marketing agency template for SEO, social media and paid ads. A first-ping loader, then a crowd seen from above that your cursor reaches, lighting people up and popping notifications — then a radar that pings your clients, a crowd that sorts itself into buyers, a channel switcher with live mini-screens, before-and-after case studies, a funnel from reach to clients, a client report, a content wall, a team reached by a signal ring and reviews that land on a lock screen.",
    preview: "https://joyful-studies-761814.framer.app",
    checkout: "https://framer.link/Lu41yg0",
    accent: "#D4FF3A",
    image: "images/reachwise.jpg",
    featured: true,
  },

  {
    name: "Outrank",
    category: "SEO & Paid Ads",
    type: "paid",
    price: "$39",
    tagline:
      "The SEO and paid ads agency template that proves the offer. A glass lens over a night street reveals live searches with your clients at #1, and the hero scrolls into a results page where they own the ad, the top result and the map panel — then six services shown as the part of page one they win, a rank ladder, an A/B ad test, a lead flow to revenue and a free audit that pre-fills from the link.",
    preview: "https://shining-three-588967.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/c78a8cfa-cf53-4042-b68c-94468a36dcda?embed=1",
    accent: "#F2E33A",
    image: "images/outrank.jpg",
    featured: true,
  },
  {
    name: "Girder",
    category: "Contractor & Builder",
    type: "paid",
    price: "$39",
    tagline:
      "The construction, renovation and roofing contractor template that builds the tower. A building rises floor by floor in front of the headline while a tower crane lowers each floor into place: move the cursor up and the visitor builds it, leave it and it tops out and moves to the next project — then a site board lowered on slings, services stacked like steel beams, projects in a lift, a schedule chart with a moving today line, a rough budget calculator and a four-step bid request that fills in a bid sheet.",
    preview: "https://weekly-places-327521.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/d993d5ca-4af8-4207-b2dc-2a3c1b8da1aa?embed=1",
    accent: "#FFC31F",
    image: "images/girder.jpg",
    featured: true,
  },
  {
    name: "Keyline",
    category: "Property Agent",
    type: "paid",
    price: "$39",
    tagline:
      "The realtor and real estate agency template that finds the house. A dusk drone view of the neighbourhood has a price pin on every roof: point at one and the roof lights up while the listing card swaps to it, and the hero scrolls down onto the roof and opens the house full screen — then homes behind front doors that swing open, a town map that draws itself, an instant home value estimate, listed to sold in 18 days on a flipping sign and viewings booked in four steps.",
    preview: "https://fun-share-856243.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/010c2005-b59b-41ad-a104-45a8a78f6c8a?embed=1",
    accent: "#D8452E",
    image: "images/keyline.jpg",
    featured: true,
  },
  {
    name: "Delegate",
    category: "Agent Platform",
    type: "paid",
    price: "$39",
    tagline:
      "The AI agent platform template that shows the agents working. A runner at golden hour hands off tasks from her phone along a live wire to an agent desk where each one gets done — then a homepage held together by that wire: a to-do list handed to agents, staff badges that swing and flip, a plain-English brief that builds a workflow, an approvals inbox you can click, a receipt of hours saved and a signup that reads the link.",
    preview: "https://large-situation-555069.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/edc116c4-3a15-4b63-a425-2e57b3c4bc76?embed=1",
    accent: "#3D4BFF",
    image: "images/delegate.jpg",
    featured: true,
  },

  {
    name: "Vernissage",
    category: "Artist Gallery",
    type: "free",
    price: "Free",
    tagline:
      "The art gallery and artist portfolio template. A loader that switches the gallery lights on, then the current exhibition painted in brush stroke by brush stroke with its wall labels — then a walk through the room, the artists you represent, a salon hang of available works, exhibition posters, a wire the collector steps hang from, a floor plan, and every artwork shown to scale on a wall.",
    preview: "https://predictable-area-438002.framer.app",
    checkout: "https://framer.link/AwnGW6L",
    accent: "#1236C4",
    image: "images/vernissage.jpg",
    featured: true,
  },

  {
    name: "Nudgely",
    category: "Mobile App",
    type: "paid",
    price: "$39",
    tagline:
      "The mobile app landing template that shows the app working. One person's day in four photos with a phone built in code that plays along — notifications fly out of the Dynamic Island, habits tick themselves done — then a homepage that runs from morning to midnight: widgets that snap into place, a pinned phone for how it works, activity rings, stories, pricing dealt from a deck and an FAQ as a chat. One switch turns every download button into a waitlist.",
    preview: "https://slight-train-797942.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/c7eb1c9e-7b6f-4dfd-a971-97c5efd49fd8?embed=1",
    accent: "#FF6B3D",
    image: "images/nudgely.jpg",
    featured: true,
  },
  {
    name: "Overprint",
    category: "Branding Studio",
    type: "paid",
    price: "$39",
    tagline:
      "The creative agency and design studio template that shows the work the way a print studio proofs it. A registration loader, then a showreel of your cases that flows from one to the next through a liquid, colour-split switch — then work as printed proofs, services as paper swatches, four passes through the press, a magenta manifesto, the studio behind the plates, reviews signed off on press and a brief form beside a floating ink drop.",
    preview: "https://imaginative-research-013391.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/c6d19846-2e45-4f18-9560-c7d0060a3fa3?embed=1",
    accent: "#EC1A92",
    image: "images/overprint.jpg",
    featured: true,
  },

  {
    name: "Shelfline",
    category: "Creator Store",
    type: "free",
    price: "Free",
    tagline:
      "The creator store template for selling digital products and courses. A shelf-stocking loader, then your products on a 3D shelf that lift with their price tags — then a receipt ticker, six product aisles, a shop window that opens to full bleed, a course box that unboxes, stacked bundles with the saving worked out, a syllabus that plays, a working cart and checkout, and a free-download page that collects emails.",
    preview: "https://helpful-instance-487483.framer.app",
    checkout: "https://framer.link/npGKn9l",
    accent: "#FF6A2B",
    image: "images/shelfline.jpg",
    featured: true,
  },

  {
    name: "Fulcrum",
    category: "Strategy Consultants",
    type: "paid",
    price: "$39",
    tagline:
      "The strategy and management consulting template that shows the thinking. A balance loader, then a partner's table with the brief, the memo and the plan under a window on the city — then ledger stamps, a memo that zooms open, practices on a filing stack, cases cut along a copper line, a roadmap, a torn results ledger, sector tiles, partners as CV sheets and minutes that part like drapes.",
    preview: "https://exhilarated-methodologies-709714.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/a7803292-bf25-49e1-bc01-e18641f9acc7?embed=1",
    accent: "#C9712C",
    image: "images/fulcrum.jpg",
    featured: true,
  },

  {
    name: "Hookline",
    category: "UGC Ads",
    type: "paid",
    price: "$39",
    tagline:
      "The UGC and video ads agency template that feels like the feed. An upload loader, then a 3D tunnel of your ads streaming toward the visitor with the centre one playing — then a hook lab on a 3-second timer, services as a card deck, your process as a DM thread, creators on a 3D ring, reviews as a comment sheet and pricing as a fan of phones.",
    preview: "https://basic-convention-325205.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/4e919093-9aeb-4116-a64a-e565e58b80f2?embed=1",
    accent: "#7A5CFF",
    image: "images/hookline.jpg",
    featured: true,
  },

  {
    name: "Longtake",
    category: "Filmmaker Studio",
    type: "paid",
    price: "$39",
    tagline:
      "The film production studio template that opens like a film. A film-leader countdown, a full-screen still with grain and a running timecode, a film index that cuts on hover and a reel player \u2014 then a 35 mm film strip, clapperboard services, an edit timeline, directors on a contact sheet and packages as cinema tickets.",
    preview: "https://friendly-pizza-355708.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/c8bfdb0e-6743-4800-9d12-fcfd908a60b5?embed=1",
    accent: "#E03C31",
    image: "images/longtake.jpg",
    featured: true,
  },
  {
    name: "Codeforge",
    category: "Tech Developers",
    type: "paid",
    price: "$39",
    tagline:
      "The software development company template that looks like it ships. A real-time 3D cube on the hero whose orange module flies in and snaps into place \u2014 services as an exploded 3D stack, a work grid the camera zooms into, a sprint board, a commit heatmap, reviews as an approved pull request \u2014 plus a pricing calculator that fills in the contact form.",
    preview: "https://enchanting-concept-819846.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/1e4c69d4-7a4a-4aaf-8690-d6c5439c10d3?embed=1",
    accent: "#FF5A1F",
    image: "images/codeforge.jpg",
    featured: true,
  },
  {
    name: "Flowcraft",
    category: "Automation Studio",
    type: "paid",
    price: "$39",
    tagline:
      "The AI agency template that feels like the agents are already running. A living particle core you can morph on the hero \u2014 a scroll that flies inside the AI, five service panels opening sideways, ten agents orbiting one core, a before / after week wiped by a curtain \u2014 plus a four-step audit booking that prices the busywork.",
    preview: "https://tender-celery-477359.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/719f937f-2a87-4c79-a9fd-272a66f50bfa?embed=1",
    accent: "#19D98B",
    image: "images/flowcraft.jpg",
    featured: true,
  },

  {
    name: "Metrio",
    category: "B2B Tech Platform",
    type: "paid",
    price: "$39",
    tagline:
      "The SaaS template that shows the product working. A cursor lens turns the office-photo hero into the live data layer \u2014 a scroll zoom into the product, features as stacked cards, integrations cabled into a patch bay, pricing on a hardware rack \u2014 plus a three-step free-trial signup filled in from every button, sixteen page types and nine CMS collections.",
    preview: "https://pioneering-staple-489681.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/e8fe7aeb-3ef0-4627-afd2-ed5b558102e8?embed=1",
    accent: "#FFB300",
    image: "images/metrio.jpg",
    featured: true,
  },

  {
    name: "Stridewell",
    category: "Physiotherapy Clinic",
    type: "paid",
    price: "$39",
    tagline:
      "The physiotherapy template that asks where it hurts. A body map on the hero shows each condition's sessions, pain drop and next free slot \u2014 a goniometer that sweeps through the first session, outcomes as live instruments, treatments as stretching resistance bands, a recovery-plan chart for every condition \u2014 plus a three-step booking form filled in from every button, fifteen page types and nine CMS collections.",
    preview: "https://gleaming-galaxy-812468.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/473ff2ed-2164-47f6-89b9-a0e638bfd401?embed=1",
    accent: "#F2457E",
    image: "images/stridewell.jpg",
    featured: true,
  },

  {
    name: "Movora",
    category: "Moving Company",
    type: "paid",
    price: "$39",
    tagline:
      "The moving-company template that quotes the move before anyone picks up the phone. A kraft-and-packing-tape look \u2014 an instant quote label on the crate hero, services as boxes whose flaps open, a truck driving the move-day route, a conveyor of recent moves stamped DONE \u2014 plus a four-step quote form with a live estimate, a priced page for every town, thirteen page types and nine CMS collections.",
    preview: "https://fluffy-routine-928403.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/0c530af0-e859-49ff-b6aa-235e1b58f6c6?embed=1",
    accent: "#C4222F",
    image: "images/movora.jpg",
    featured: true,
  },

  {
    name: "Tutorwell",
    category: "Tutoring Center",
    type: "paid",
    price: "$49",
    tagline:
      "The tutoring template that turns a worried parent into a booked free lesson. A marked-homework look \u2014 ruled paper, a red pen, highlighter \u2014 subject flashcards that flip, report cards re-marked in red, a deck of real tutors with their next free slots, worksheets dealt from a pile \u2014 plus a tutor directory with filters, a profile and slot picker for every tutor, fourteen pages and eight CMS collections.",
    preview: "https://willing-mermaid-107553.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/fadf4e04-33a1-4c37-b7dd-d9feb6cb35c2?embed=1",
    accent: "#FFD93D",
    image: "images/tutorwell.jpg",
    featured: true,
  },

  {
    name: "Staffora",
    category: "Recruitment Agency",
    type: "paid",
    price: "$49",
    tagline:
      "The recruitment-agency template where the jobs are the first thing people see. A split-flap board of open roles in the hero, employer and candidate doors that meet on a diagonal, a Monday-to-Friday shortlist line, a salary booklet that turns its pages \u2014 plus a real job board with filters, a page and apply form for every role, fourteen pages and nine CMS collections.",
    preview: "https://forceful-variations-474566.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/be60de52-bf14-48da-87cb-7b0c3804ca32?embed=1",
    accent: "#2447F5",
    image: "images/staffora.jpg",
    featured: true,
  },

  {
    name: "Wealthora",
    category: "Financial Advisor",
    type: "free",
    price: "Free",
    tagline:
      "The financial-advisor template built around the question every client asks \u2014 will my money last? A live retirement plan in the hero that visitors drag themselves, thirty years drawn in one scroll, plan folders that flip, case files with before-and-after charts, a fee calculator and a booking card that picks the slot \u2014 sixteen pages, eight CMS collections.",
    preview: "https://confident-skills-748945.framer.app",
    checkout: "https://framer.link/J9iLhtC",
    accent: "#C8F04A",
    image: "images/wealthora.jpg",
    featured: true,
  },

  {
    name: "Furnora",
    category: "Furniture Store",
    type: "paid",
    price: "$49",
    tagline:
      "The furniture-store template where visitors shop the room. A bright living room with live hotspots and price tags on every piece, a gallery wall that zooms into one room, product cards that deal out of a pile, lookbook pages that turn as you scroll \u2014 plus a working bag, filters, a shop-the-room builder, seventeen pages and nine CMS collections.",
    preview: "https://necessary-strengthening-266958.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/b55ae250-04ad-4418-8f36-92ee7335a33c?embed=1",
    accent: "#C43E17",
    image: "images/furnora.jpg",
    featured: true,
  },

  {
    name: "PRINCIPAL",
    category: "Executive / Leadership Coach",
    type: "paid",
    price: "$39",
    tagline:
      "The executive-coach template that sells the first conversation. One portrait seen through six staggered panels, a statement that lights up word by word, programme cards that flip, full-screen panels that pin and stack, and a portrait that unmasks to the whole screen \u2014 twelve pages, a booking form, and nine CMS collections that edit every page from one place.",
    preview: "https://easier-spots-537272.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/8e6b4c84-8c0b-4b4a-ad48-da4df0ca5425?embed=1",
    accent: "#C9A064",
    image: "images/principal.jpg",
    featured: true,
  },

  {
    name: "SUKHA",
    category: "Yoga / Pilates Studio",
    type: "paid",
    price: "$49",
    tagline:
      "The yoga and pilates template that answers the only two questions a new student has \u2014 when can I come, and is this class for me. A cursor-poured hero opens onto the studio film, a live timetable puts the real week on the page with today open and the next class counting down, and six class pages and five teacher pages build themselves from nine CMS collections.",
    preview: "https://innovative-sphinx-487895.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/a91d20a9-beb9-4520-ad6f-971a2f25c89f?embed=1",
    accent: "#647053",
    image: "images/sukha.jpg",
    featured: true,
  },

  {
    name: "VERGE",
    category: "Landscaping / Lawn Care",
    type: "paid",
    price: "$49",
    tagline:
      "The landscaping template that answers the two questions every caller asks \u2014 what will it cost and when can you come. The Season Dial hero turns the year over full-bleed media, the Ballpark instrument prices the yard live from lawn size, frequency and extras, and a ZIP checker draws the route \u2014 every price, month and photo edited from ten CMS collections.",
    preview: "https://considerate-train-900205.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/073cd373-c591-498f-8205-ea7b6f55f269?embed=1",
    accent: "#F5C542",
    image: "images/verge.jpg",
    featured: true,
  },

  {
    name: "TORQUE",
    category: "Auto Repair / Detailing",
    type: "free",
    price: "Free",
    tagline:
      "The auto repair & detailing template that answers the two questions every caller asks \u2014 what will it cost and when can you take the car. THE JOB CARD estimator prices any job for any car from your own CMS, a four-tap booking sheet fills the bay, and the roller-shutter hero rolls up on a workshop lit by a lamp that follows the pointer.",
    preview: "https://content-designs-454950.framer.app",
    checkout: "https://framer.link/blpFl0A",
    accent: "#C6F53A",
    image: "images/torque.jpg",
    featured: true,
  },

  {
    name: "VERRIN",
    category: "Cardiology / Medical",
    type: "free",
    price: "Free",
    tagline:
      "The consultant-led cardiology template built around one promise \u2014 one specialist, your whole heart, the same day. A light-room hero with the echo probe and the next open slot turning on a disc, a triage instrument that turns what is worrying you into the right test, and every condition, price and opening hour in the CMS.",
    preview: "https://healthy-times-412731.framer.app",
    checkout: "https://framer.link/m7Lmayo",
    accent: "#C4303C",
    image: "images/verrin.jpg",
  },

  {
    name: "FADE ROOM",
    category: "Salon / Barbershop",
    type: "free",
    price: "Free",
    tagline:
      "The barbershop template with a real booking ledger — pick a barber, pick a cut, live slots appear from the shop's own hours — plus a walk-in board that reads the actual clock and a halftone fade that follows the cursor.",
    preview: "https://methodical-performance-821893.framer.app",
    checkout: "https://framer.link/SBrht0J",
    accent: "#D7262A",
    image: "images/fade-room.jpg",
    featured: true,
  },

  {
    name: "BRACKET SMILE",
    category: "Orthodontics",
    type: "free",
    price: "Free",
    tagline:
      "The orthodontics template that says the number first — THE STICKER BOOK hero, a cost estimator that turns who + concern into real CMS ranges and a monthly line, and an insurance checker that answers in ten seconds.",
    preview: "https://busy-apartment-484506.framer.app",
    checkout: "https://framer.link/dDF0ZSz",
    accent: "#FF5A3C",
    image: "images/bracket-smile.jpg",
    featured: true,
  },

  {
    name: "MAINLINE",
    category: "HVAC / Plumbing",
    type: "free",
    price: "Free",
    tagline:
      "The HVAC & plumbing template that answers the 2 a.m. call — THE PRESSURE SYSTEM schematic draws itself on load, an emergency triage sorts now / this week / can wait, and a ZIP checker confirms the service area before anyone dials.",
    preview: "https://rejuvenated-statuses-696554.framer.app",
    checkout: "https://framer.link/JzGw4tS",
    accent: "#B87333",
    image: "images/mainline.jpg",
    featured: true,
  },

  {
    name: "HALF-LIGHT",
    category: "Conference / Events",
    type: "free",
    price: "Free",
    tagline:
      "The conference template with a working agenda builder — THE CALL SHEET filters three days by track and room, stars sessions into a personal day that lives in the link, flags clashes and exports .ics.",
    preview: "https://gentle-design-888431.framer.app",
    checkout: "https://framer.link/yXse4ve",
    accent: "#FF4D00",
    image: "images/half-light.jpg",
    featured: true,
  },

  {
    name: "QUARTO",
    category: "Author / Novelist",
    type: "paid",
    price: "$39",
    tagline:
      "The author template that lets visitors actually read the book — paste a chapter and THE GALLEY typesets it into turnable pages, while the hero hides the author's typescript under a lens.",
    preview: "https://brilliant-investment-010270.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/9d84a7b6-6aa7-4fba-a188-1a57947f156f?embed=1",
    accent: "#A9301C",
    image: "images/quarto.jpg",
    featured: true,
  },

  {
    name: "SUMMA",
    category: "Accounting / CPA",
    type: "paid",
    price: "$39",
    tagline:
      "The accounting template that actually does the math — a bracket-true tax estimator, a fee estimator that prints an engagement letter, and a ledger hero that reconciles to zero on load.",
    preview: "https://violet-months-448736.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/15fa7eba-a09d-45c9-9451-43cb8ac482b8?embed=1",
    accent: "#1E6E4E",
    image: "images/summa.jpg",
    featured: true,
  },
  {
    name: "HALIDE",
    category: "Portfolio / Photography",
    type: "paid",
    price: "$39",
    tagline:
      "The photography portfolio where every commission is its own case study — one CMS row builds the page, its frames, its captions and the print spec. Archival colour, not a lightbox.",
    preview: "https://main-onboarding-287327.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/e795cfa7-4cf4-41ac-b9f1-fab4da6daeae?embed=1",
    accent: "#FF3D18",
    image: "images/halide.jpg",
    featured: true,
  },
  {
    name: "EMBERJACK",
    category: "Restaurant",
    type: "paid",
    price: "$39",
    tagline:
      "The fast-casual burger site where the menu is a machine, not a poster — one collection drives every card, a dietary filter narrows the board, and ordering ahead actually works.",
    preview: "https://tasty-spinach-226445.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/d07c79c4-00fc-4a6b-a225-142295ba626a?embed=1",
    accent: "#FF4D00",
    image: "images/emberjack.jpg",
    featured: true,
  },
  {
    name: "SEXTANT",
    category: "Consulting",
    type: "paid",
    price: "$39",
    tagline:
      "The consulting site that asks instead of tells — a quadrant instrument that turns a visitor's problem into a named engagement and a fee band.",
    preview: "https://plum-sphinx-924866.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/df40b72e-f0d6-4dbc-989a-5c1252227d04?embed=1",
    accent: "#5D5FEF",
    image: "images/sextant.jpg",
    featured: true,
  },
  {
    name: "BALLAST",
    category: "Wellness",
    type: "paid",
    price: "$39",
    tagline: "A therapy practice site that answers the five questions clients actually have.",
    preview: "https://bright-flows-283982.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/4bc4b4ce-04b4-493a-ac93-8f888d1f59ba?embed=1",
    accent: "#7A4A55",
    image: "images/ballast.jpg",
    featured: true,
  },
  {
    name: "PLINTH",
    category: "Ecommerce",
    type: "paid",
    price: "$39",
    tagline:
      "Launch one product as a cinematic film, grow into a full catalogue. The lamplight turn plus a real working store — single or multi-product ecommerce.",
    preview: "https://traditional-fox-573409.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/5c4aad6f-ce8f-4790-8811-e2f945dcb5b3?embed=1",
    accent: "#B87333",
    image: "images/plinth.jpg",
    featured: true,
  },
  {
    name: "TURBINE",
    category: "AI SaaS",
    type: "paid",
    price: "$39",
    tagline:
      "Press Run and the product executes in front of you — stages light, the log typesets, the output lands. An AI SaaS template that runs, not screenshots.",
    preview: "https://breezy-united-402200.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/9ab7f957-6a12-4c1d-98cb-210049b84c16?embed=1",
    accent: "#2440D8",
    image: "images/turbine.jpg",
    featured: true,
  },
  {
    name: "COLOPHON",
    category: "Portfolio / Creative Studio",
    type: "paid",
    price: "$39",
    tagline:
      "Your whole body of work as a monograph you can riffle through — each project in its own Riso ink, the room flooding with colour. A portfolio for designers & studios.",
    preview: "https://attractive-studies-060798.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/165b28f4-13ff-4c94-be93-9a881ae7a688?embed=1",
    accent: "#FF5A1F",
    image: "images/colophon.jpg",
    featured: true,
  },
  {
    name: "DORMIE",
    category: "Golf / Country Club",
    type: "paid",
    price: "$39",
    tagline:
      "The scorecard as a playable instrument — pick a hole, switch tees, watch the whole card re-measure live. The first premium private-club template.",
    preview: "https://clean-porcupine-229272.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/ba165f15-cad8-4c4b-ae8f-910be857290b?embed=1",
    accent: "#2F5D3D",
    image: "images/dormie.jpg",
    featured: true,
  },
  {
    name: "CAIRN",
    category: "Glamping / Nature Retreat",
    type: "paid",
    price: "$39",
    tagline:
      "Stand at the doorstep and drag to turn — the landscape moves around you, waypoints rising at their true bearing. Glamping's product isn't a room. It's a coordinate.",
    preview: "https://involved-focus-501463.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/a412f7cb-c075-42f1-bc19-f55846bf1efc?embed=1",
    accent: "#6E8A5E",
    image: "images/cairn.jpg",
    featured: true,
  },
  {
    name: "REDLINE",
    category: "Renovation",
    type: "paid",
    price: "$39",
    tagline:
      "Scroll through the wall. Hold to X-ray any room to the studs. Watch the estimate compute live. The first genuinely crafted renovation template.",
    preview: "https://triumphant-permission-612801.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/b4788a14-4591-436c-b4c1-a16790d1e667?embed=1",
    accent: "#E8500F",
    image: "images/redline.jpg",
    featured: true,
  },
  {
    name: "ORANGERY",
    category: "Wedding / Event Venue",
    type: "paid",
    price: "$39",
    tagline:
      "One day at the estate, in one scroll. A wedding-venue template where you scroll through a whole wedding day, the light grading dawn to candlelight.",
    preview: "https://driving-palette-457249.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/c96d2b79-2cf8-4d70-98fa-5bc3f27e5655?embed=1",
    accent: "#D9A441",
    image: "images/orangery.jpg",
    featured: true,
  },
  {
    name: "BASIS",
    category: "Fintech",
    type: "paid",
    price: "$39",
    tagline:
      "Fintech where the proof is alive — a treasury dashboard that recomputes under your cursor, and the best pricing section on the marketplace.",
    preview: "https://pioneering-fade-423848.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/b7865bc4-70b4-4b65-8ffd-4bbbc10360b9?embed=1",
    accent: "#0E9A6A",
    image: "images/basis.jpg",
    featured: true,
  },
  {
    name: "ORVELLE",
    category: "Jewelry",
    type: "paid",
    price: "$39",
    tagline:
      "Cinematic fine-jewelry maison template — a code-built diamond hero lit by your cursor, a Nocturne vault, and spec-grade product pages.",
    preview: "https://super-deck-332152.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/4a8fe99b-28d8-4053-83e6-c4f467d0f78e?embed=1",
    accent: "#C8B37E",
    image: "images/orvelle.jpg",
    featured: true,
  },
  {
    name: "FETCH",
    category: "Pet Care",
    type: "paid",
    price: "$39",
    tagline:
      "One flip, two worlds — a veterinary template where the whole site changes dog⟷cat, hero to booking.",
    preview: "https://unlimited-panther-767063.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/0492d075-8ebd-4338-b256-14c31795eec1?embed=1",
    accent: "#C2653C",
    image: "images/fetch.jpg",
    featured: true,
  },
  {
    name: "MOTIF",
    category: "Agency",
    type: "free",
    price: "Free",
    tagline:
      "Warm editorial design-agency template — live reel hero, cinematic case studies, CMS journal, built-in buyer's guide.",
    preview: "https://kind-mission-313361.framer.app",
    checkout: "https://framer.link/CAh9101",
    accent: "#2745E0",
    image: "images/motif.jpg",
    featured: true,
  },
  {
    name: "LUMEN",
    category: "Dental",
    type: "paid",
    price: "$39",
    tagline:
      "THE ARCH — an interactive porcelain smile; before/afters that transform under your cursor; scrolls like a film, not a form. A cosmetic dental studio, reimagined.",
    preview: "https://gracious-happen-865579.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/321149d8-11d8-4b5c-909a-0678bb360354?embed=1",
    accent: "#C79A45",
    image: "images/lumen.jpg",
    featured: true,
  },
  {
    name: "PRECEDENT",
    category: "Law",
    type: "free",
    price: "Free",
    tagline:
      "A law firm est. 1948 — anti-brochure editorial with drawn timelines and real archival depth.",
    preview: "https://delightful-listening-859231.framer.app",
    checkout: "https://framer.link/ilh6bXL",
    accent: "#96341F",
    image: "images/precedent.jpg",
    featured: true,
  },
  {
    name: "ASHLAR",
    category: "Architecture",
    type: "paid",
    price: "$39",
    tagline:
      "Design–build atelier — self-drawing blueprint hero, before/after reveals, title-block detailing.",
    preview: "https://distinct-works-031711.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/e19c5568-1cc9-400f-bb8f-7e18ae6e0d15?embed=1",
    accent: "#B99B5F",
    image: "images/ashlar.jpg",
    featured: true,
  },
  {
    name: "SOLENNE",
    category: "Weddings",
    type: "paid",
    price: "$39",
    tagline:
      "Two complete sites in one — the couple's cinematic invitation and the planner's studio behind it.",
    preview: "https://cultural-network-786308.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/db8f5d78-f7d1-4ed5-865e-aaa2aab7c297?embed=1",
    accent: "#7E8F6E",
    image: "images/solenne.jpg",
    featured: true,
  },
  {
    name: "SRIFUL",
    category: "Ecommerce",
    type: "paid",
    price: "$39",
    tagline:
      "A full working sneaker store — 22 routes, box-reveal hero, walking cursor, physics footer, real checkout.",
    preview: "https://exact-plans-842680.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/a5229c31-e1b1-4888-a378-933350e205cd?embed=1",
    accent: "#C9EF3D",
    image: "images/sriful.jpg",
    featured: true,
  },
  {
    name: "MERIDIAN",
    category: "Real Estate",
    type: "free",
    price: "Free",
    tagline: "Luxury property development",
    preview: "https://obedient-direction-881139.framer.app",
    checkout: "https://framer.link/CrItyHZ",
    accent: "#9C8466",
    image: "images/meridian.jpg",
  },
  {
    name: "LEDGER",
    category: "SaaS",
    type: "free",
    price: "Free",
    tagline: "Editorial SaaS & fintech",
    preview: "https://crowded-combination-044452.framer.app",
    checkout: "https://framer.link/60ZSr9r",
    accent: "#4C6EA5",
    image: "images/ledger.jpg",
  },
  {
    name: "SRIGEN",
    category: "Ecommerce",
    type: "paid",
    price: "$39",
    tagline:
      "Single-drop sneaker launch template — box-reveal hero, 17-section scroll film, living lace cursor, countdown drop page & CMS lookbook.",
    preview: "https://easy-travel-481469.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/9829dfca-df78-4dc1-aafe-56b43b9f7191?embed=1",
    accent: "#D6FB51",
    image: "images/srigen.jpg",
    featured: true,
  },
  {
    name: "SILLAGE",
    category: "Beauty",
    type: "free",
    price: "Free",
    tagline: "Cinematic luxury fragrance",
    preview: "https://shy-perspective-949475.framer.app",
    checkout: "https://framer.link/z0vHCRs",
    accent: "#A6704E",
    image: "images/sillage.jpg",
  },
  {
    name: "Maison Lumière",
    category: "Fashion",
    type: "free",
    price: "Free",
    tagline: "Luxury fashion editorial",
    preview: "https://stormy-products-794021.framer.app",
    checkout: "https://framer.link/sbK7Ow1",
    accent: "#C9A24B",
    image: "images/maison-lumiere.jpg",
  },
  {
    name: "Nimbus Studio",
    category: "SaaS",
    type: "free",
    price: "Free",
    tagline: "Futuristic dark SaaS",
    preview: "https://jazzed-culture-655528.framer.app",
    checkout: "https://framer.link/K773Z1D",
    accent: "#5B8DEF",
    image: "images/nimbus-studio.jpg",
  },
  {
    name: "SÉRA",
    category: "Wellness",
    type: "paid",
    price: "$39",
    tagline:
      "A 'Living Light' cursor-reactive hero, a drag-to-reveal before/after slider, and a concern-based treatment finder — a boutique sanctuary for aesthetic clinics.",
    preview: "https://tidy-aspects-941929.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/80aae82f-bdd7-4b0d-8459-dda180308608?embed=1",
    accent: "#C6A092",
    image: "images/sera.jpg",
  },
  {
    name: "KINDRED",
    category: "Coaching",
    type: "paid",
    price: "$39",
    tagline: "A coaching and personal-brand site led by a living, cursor-reactive fluid hero.",
    preview: "https://blue-toggle-035738.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/b31ea147-2ae6-401c-a6d8-1d1edd17b9d9?embed=1",
    accent: "#C99A5B",
    image: "images/kindred.jpg",
  },
  {
    name: "Vesper Studio",
    category: "Agency",
    type: "free",
    price: "Free",
    tagline: "Dark cinematic agency",
    preview: "https://flowing-porcupine-450501.framer.app",
    checkout: "https://framer.link/S45ULoP",
    accent: "#8B7BE8",
    image: "images/vesper-studio.jpg",
  },
  {
    name: "KAODÉ Eyewear",
    category: "Ecommerce",
    type: "paid",
    price: "$39",
    tagline: "Modern eyewear store",
    preview: "https://unreal-autonomy-221777.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/c0bbda34-c4f6-47c0-b5a6-368ac8c8d82f?embed=1",
    accent: "#C9A24B",
    image: "images/kaode-eyewear.jpg",
  },
  {
    name: "Manor Studio",
    category: "Real Estate",
    type: "free",
    price: "Free",
    tagline: "Luxury real estate",
    preview: "https://cute-challenge-815768.framer.app",
    checkout: "https://framer.link/LRqw7rz",
    accent: "#7A8B6F",
    image: "images/manor-studio.jpg",
  },
  {
    name: "Halcyon Stay",
    category: "Hospitality",
    type: "free",
    price: "Free",
    tagline: "Hospitality & travel",
    preview: "https://violet-happen-396964.framer.app",
    checkout: "https://framer.link/8Hexqai",
    accent: "#5B9E9E",
    image: "images/halcyon-stay.jpg",
  },
  {
    name: "CALIBRE Atelier",
    category: "Luxury",
    type: "free",
    price: "Free",
    tagline: "Luxury watches",
    preview: "https://violet-marketplaces-467162.framer.app",
    checkout: "https://framer.link/U9yh64i",
    accent: "#B8926A",
    image: "images/calibre-atelier.jpg",
  },
  {
    name: "Aurelle Studio",
    category: "Ecommerce",
    type: "paid",
    price: "$39",
    tagline: "Luxury fashion ecommerce",
    preview: "https://extended-nectarine-998439.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/4ea29b90-974e-491d-af16-8760a6df5278?embed=1",
    accent: "#B08D57",
    image: "images/aurelle-studio.jpg",
  },
  {
    name: "EMBER DINING",
    category: "Restaurant",
    type: "free",
    price: "Free",
    tagline: "Fine dining & restaurant",
    preview: "https://shiny-experiences-134401.framer.app",
    checkout: "https://framer.link/MuZbRX2",
    accent: "#C56A3E",
    image: "images/ember-dining.jpg",
  },
  {
    name: "Aureum Atelier",
    category: "Jewelry",
    type: "free",
    price: "Free",
    tagline: "Fine jewelry",
    preview: "https://graceful-software-688894.framer.app",
    checkout: "https://framer.link/6WvIyPg",
    accent: "#C9A24B",
    image: "images/aureum-atelier.jpg",
  },
  {
    name: "VOLT Studio",
    category: "Ecommerce",
    type: "paid",
    price: "$39",
    tagline: "Bold streetwear ecommerce",
    preview: "https://collaborative-selfie-377873.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/ecaadf29-1f23-4379-ba85-12edb9f1bc10?embed=1",
    accent: "#C6FF33",
    image: "images/volt-studio.jpg",
  },
  {
    name: "Séraphine",
    category: "Fashion",
    type: "paid",
    price: "$39",
    tagline: "Bold women's fashion",
    preview: "https://nutty-replacement-842074.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/e310cb8c-ef87-49a9-abcf-d929f2bd6e87?embed=1",
    accent: "#C0C0C0",
    image: "images/seraphine.jpg",
  },
  {
    name: "HAVEN & Co",
    category: "Real Estate",
    type: "paid",
    price: "$39",
    tagline:
      "Editorial real estate template with CMS listings, filters & a viewing-enquiry flow — built to look like a $20K agency site.",
    preview: "https://inspired-windows-383938.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/620b6a04-03d3-4c84-9036-b9f732dab2c9?embed=1",
    accent: "#A8895C",
    image: "images/haven-co.jpg",
    featured: true,
  },
  {
    name: "FORMA Interiors",
    category: "Interiors",
    type: "paid",
    price: "$39",
    tagline:
      "A cinematic template for interior design & architecture studios — fluid WebGL hero, CMS case studies, and considered motion throughout.",
    preview: "https://encouraging-designer-478504.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/405a5aaf-61d6-45c7-85a8-3a51fc771373?embed=1",
    accent: "#B07A57",
    image: "images/forma-interiors.jpg",
    featured: true,
  },
  {
    name: "FORGE Athletic",
    category: "Fitness",
    type: "paid",
    price: "$39",
    tagline:
      "Athletic-luxury gym & fitness club template — dark, cinematic, with CMS classes, trainers & a booking flow.",
    preview: "https://elegant-diplodocus-787502.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/88294bd6-1888-42cc-89b3-7ddd2149efad?embed=1",
    accent: "#E5531F",
    image: "images/forge-athletic.jpg",
    featured: true,
  },
];

/* ============================================================================
   The Interaction Series — components (Nº 01–03). Same idea as TEMPLATES:
   one object per product, rendered wherever components appear. `checkout` is
   the Lemon Squeezy buy URL (?embed=1 → overlay, same as paid templates).
============================================================================ */
const COMPONENTS = [
  {
    no: "01",
    name: "COMPANION",
    kind: "Cursor companion",
    price: "$5",
    tagline:
      "A characterful little companion that follows your cursor on a spring — facing where it's headed, dropping a fading trail.",
    preview: "https://essential-star-992164.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/4806496d-8532-467c-89e2-53fe138a07b8?embed=1",
    accent: "#E8A33D",
  },
  {
    no: "02",
    name: "SKETCH",
    kind: "Sketch reveal",
    price: "$7",
    tagline:
      "Photographs arrive as hand-drawn sketches — a pencil line-drawing derived from the real photo — then develop into the finished image.",
    preview: "https://popular-times-254132.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/b1b7c019-b9b6-4250-8493-af49648d0938?embed=1",
    accent: "#8FA0B5",
  },
  {
    no: "03",
    name: "VEIL",
    kind: "Site entrance",
    price: "$9",
    tagline:
      "A first-paint loader with matching route transitions — your site never flashes unstyled, ever.",
    preview: "https://grey-site-547257.framer.app",
    checkout:
      "https://solofoundryhq.lemonsqueezy.com/checkout/buy/67214010-80cc-4a5e-bd88-a3627def6fc5?embed=1",
    accent: "#E4E1DA",
  },
];

/* ============================================================================
   BUNDLE 1 — "25 Templates, $299".
   Defined by NAME against TEMPLATES above so the catalogue stays the single
   source of truth: change a template's image or category and both bundle pages
   follow automatically. Two pages, two jobs — never mixed:
     bundle.html        PUBLIC sales page      — PREVIEW links only, no remix.
     bundle-access.html POST-PURCHASE delivery — loads delivery.js, noindex.
   `checkout` is the live Lemon Squeezy buy URL, carrying ?embed=1 so lemon.js
   opens it as an overlay; utm() appends the channel tag with "&".
============================================================================ */
const BUNDLE = {
  id: "bundle-1",
  name: "Bundle 1",
  price: "$299",
  amount: 299,
  /* The Lemon Squeezy Bundle 1 checkout. ?embed=1 makes lemon.js open it as an
     overlay instead of navigating away; utm() appends the channel tag with "&"
     at render time, giving ?embed=1&utm_source=storefront&utm_medium=bundle_page. */
  checkout:
    "https://solofoundryhq.lemonsqueezy.com/checkout/buy/d0dc8d4e-d37f-497f-a8ac-362b4356e91b?embed=1",
  /* Curated display order — strongest-first. Both bundle pages render straight
     down BUNDLE.items, so this one list sets the order on the sales page and the
     delivery page at once. Reordering is safe: every card reads its image, link
     and category off the resolved template object, never off the position. */
  names: [
    "COLOPHON",
    "ORANGERY",
    "FETCH",
    "LUMEN",
    "SÉRA",
    "HAVEN & Co",
    "FORMA Interiors",
    "FORGE Athletic",
    "Séraphine",
    "SRIFUL",
    "SRIGEN",
    "KAODÉ Eyewear",
    "SILLAGE",
    "Maison Lumière",
    "Halcyon Stay",
    "ASHLAR",
    "BASIS",
    "REDLINE",
    "DORMIE",
    "CAIRN",
    "MOTIF",
    "PRECEDENT",
    "CALIBRE Atelier",
    "EMBER DINING",
    "SOLENNE",
  ],
};

/* The delivery link for a template.
   Paid → the private window.SF_DELIVERY map, which ONLY bundle-access.html
   loads. On a public page that global is undefined, so every paid template
   resolves to null and no amount of devtools poking turns up a paid remix.
   Free → their public `checkout`, which is the framer.link itself.
   Returns null when there's nothing to hand over; the delivery page refuses to
   ship a row it can't deliver rather than showing a dead button. */
function remixOf(t) {
  if (!t) return null;
  const priv = typeof window !== "undefined" ? window.SF_DELIVERY : null;
  if (priv && priv[t.name]) return priv[t.name];
  return t.type === "free" ? t.checkout || null : null;
}

/* Channel tagging. Appends utm_source/utm_medium without ever producing a
   second "?" and without double-tagging a URL that already carries one. */
function utm(url, medium) {
  if (!url || !medium) return url;
  if (/[?&]utm_source=/.test(url)) return url;
  return url + (url.indexOf("?") > -1 ? "&" : "?") + "utm_source=storefront&utm_medium=" + medium;
}

/* ============================================================================
   ALL-ACCESS — the whole catalogue, one payment, lifetime.
   ----------------------------------------------------------------------------
   Unlike BUNDLE (a fixed, curated list of 25 names), All-Access is defined as
   "every template in TEMPLATES". Ship a new cast and it joins All-Access the
   moment it lands in data.js — no list to maintain, and the promise on the
   sales page ("every template, including the ones not made yet") stays true by
   construction rather than by remembering.

   ★ checkout: replace LS_PLACEHOLDER with the real Lemon Squeezy buy URL for
   the All-Access product once it exists. Keep the ?embed=1 — lemon.js opens it
   as an overlay instead of navigating the buyer off the page. Until it's real,
   isLive stays false and every buy button on the page renders as a waitlist
   mailto instead of a dead checkout.
============================================================================ */
const ALLACCESS = {
  id: "all-access",
  name: "All-Access",
  amount: 199,
  price: "$199",
  fullAmount: 249,
  fullPrice: "$249",
  /* ★ This is the SAME Lemon Squeezy variant that used to be Bundle 1 — Naveen
     edited that product into All-Access rather than making a new one, so the
     UUID carries over. Consequence: bundle.html can no longer sell Bundle 1
     through it and has been retired to a redirect notice. BUNDLE.checkout below
     still holds the same id purely so bundle-access.html keeps resolving for
     people who already bought; nothing links to it as a buy button any more. */
  checkout:
    "https://solofoundryhq.lemonsqueezy.com/checkout/buy/d0dc8d4e-d37f-497f-a8ac-362b4356e91b?embed=1",
  waitlist:
    "mailto:solofoundryhq@gmail.com?subject=All-Access%20%E2%80%94%20tell%20me%20when%20it%20opens" +
    "&body=Send%20me%20the%20link%20when%20All-Access%20opens%20at%20%24199.",
};

/* Derived automatically, in catalogue order. */
const CATEGORIES = [...new Set(TEMPLATES.map((t) => t.category))];
const FEATURED = TEMPLATES.filter((t) => t.featured);

/* Resolve the bundle once, here, so every page renders the same 25 and any
   gap is loud rather than silent. */
BUNDLE.items = BUNDLE.names.map((n) => TEMPLATES.find((t) => t.name === n)).filter(Boolean);
BUNDLE.unresolved = BUNDLE.names.filter((n) => !TEMPLATES.some((t) => t.name === n));
/* No load-time remix audit here: on a public page delivery.js isn't loaded, so
   every paid template would "fail". bundle-access.html does that check itself,
   after delivery.js is in, and shows a visible alert if anything is missing. */
BUNDLE.count = BUNDLE.items.length;
BUNDLE.has = new Set(BUNDLE.items.map((t) => t.name));
/* Anchor price. Bundle 1 grants UNLIMITED-SITES rights on all 25, so the honest
   like-for-like comparable is the Pro (unlimited-sites) tier at $79 each, not
   Standard's single-site $39. Derived from the paid casts actually in the
   bundle, so the claim can never drift from the list. */
const UNLIMITED_PRICE = 79;
BUNDLE.paidCount = BUNDLE.items.filter((t) => t.type === "paid").length;
BUNDLE.unlimitedPrice = UNLIMITED_PRICE;
BUNDLE.value = BUNDLE.paidCount * UNLIMITED_PRICE;
BUNDLE.valueLabel = "$" + BUNDLE.value.toLocaleString("en-US");
BUNDLE.each = Math.round(BUNDLE.amount / (BUNDLE.count || 1));

/* All-Access resolves against the live catalogue, so these numbers can never
   drift from what's actually on the shelf. `value` is the honest like-for-like:
   what the paid casts alone would cost at the Standard $39 licence. */
ALLACCESS.items = TEMPLATES;
ALLACCESS.count = TEMPLATES.length;
ALLACCESS.paidCount = TEMPLATES.filter((t) => t.type === "paid").length;
ALLACCESS.freeCount = TEMPLATES.filter((t) => t.type === "free").length;
ALLACCESS.value = ALLACCESS.paidCount * 39;
ALLACCESS.valueLabel = "$" + ALLACCESS.value.toLocaleString("en-US");
ALLACCESS.each = Math.round(ALLACCESS.amount / (ALLACCESS.count || 1));
ALLACCESS.isLive = ALLACCESS.checkout !== "LS_PLACEHOLDER";
ALLACCESS.saving = ALLACCESS.value - ALLACCESS.amount;
ALLACCESS.savingLabel = "$" + ALLACCESS.saving.toLocaleString("en-US");

/* Expose for app.js (no build step / no modules). */
window.SF = { TEMPLATES, CATEGORIES, FEATURED, COMPONENTS, BUNDLE, ALLACCESS, remixOf, utm };
