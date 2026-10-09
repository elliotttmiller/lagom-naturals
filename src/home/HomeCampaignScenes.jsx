import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SceneTransitionArtwork from "@/home/SceneTransitionArtwork";
import { useReducedMotion } from "@/motionSystem";
import { ShowcaseCan, labelMedia, showcaseProducts } from "@/home/SeltzerShowcase";
import { responsiveImages } from "@/generated/responsiveImages";

/**
 * Two native React homepage scenes, adapted from the Happipops merchandising
 * structure and Sweet Morels editorial rhythm. No Framer runtime is imported.
 *
 * The scroll container and shared animated atmosphere remain owned by the
 * existing homepage architecture. Product values/media come from catalogData
 * and the existing responsive media manifest.
 */
const FLAVOR_NAMES = showcaseProducts.map((item) => item.name);

function FlavorTicker() {
  if (!FLAVOR_NAMES.length) return null;
  return (
    <div className="home-flavor-ticker" aria-hidden="true">
      <div className="home-flavor-ticker__track">
        {Array.from({ length: 2 }, (_, copy) => (
          <span className="home-flavor-ticker__group" key={copy}>
            {FLAVOR_NAMES.map((name) => (
              <span className="home-flavor-ticker__item" key={name}>
                {name}<span className="home-flavor-ticker__spark">✳</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

const CATEGORY_CARDS = [
  {
    id: "seltzers",
    index: "01",
    eyebrow: "Bright by nature",
    title: "Seltzers",
    description: "Crisp flavor. Easy company.",
    href: "/shop/seltzers",
    action: "Explore seltzers",
    mediaKey: "seltzers-thumbnail",
  },
  {
    id: "gummies",
    index: "02",
    eyebrow: "A little something sweet",
    title: "Gummies",
    description: "Discover the rest of Lagom.",
    href: "/shop/gummies",
    action: "Explore gummies",
    mediaKey: "gummies-thumbnail",
  },
];

function CategoryMedia({ mediaKey }) {
  const media = responsiveImages.categories?.[mediaKey];
  if (!media) return null;
  return (
    <picture className="home-collection-card__media" aria-hidden="true">
      {media.avifSrcSet ? <source type="image/avif" srcSet={media.avifSrcSet} sizes="(min-width:900px) 43vw, 92vw" /> : null}
      {media.webpSrcSet ? <source type="image/webp" srcSet={media.webpSrcSet} sizes="(min-width:900px) 43vw, 92vw" /> : null}
      <img src={media.src} alt="" loading="lazy" decoding="async" draggable="false" />
    </picture>
  );
}

export function HomeBrandEditorial() {
  const featured = showcaseProducts[0];
  const reducedMotion = useReducedMotion();
  if (!featured) return null;

  return (
    <section
      id="home-scene-editorial"
      className="home-editorial-scene"
      data-home-snap-scene
      aria-labelledby="home-editorial-title"
    >
      <FlavorTicker />
      <SceneTransitionArtwork index={3} word="LIVING" variant="editorial" />
      <div className="home-editorial-scene__layout" data-home-snap-content>
        <div className="home-editorial-scene__copy">
          <span className="home-campaign-kicker">The Lagom perspective <span aria-hidden="true">/</span> 01</span>
          <h2 id="home-editorial-title"><span className="home-editorial-scene__headline-line">More flavor.</span><span className="home-editorial-scene__headline-line home-editorial-scene__headline-line--soft"><em>More living.</em></span></h2>
          <p>A bright new perspective on sparkling drinks. Made for the moments worth sharing.</p>
          <Link className="home-campaign-link" to="/about">
            Discover Lagom <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="home-editorial-scene__stage" aria-hidden="true">
          <span className="home-editorial-scene__stage-halo" />
          <span className="home-editorial-scene__orbit-word">FIND YOUR BALANCE · FIND YOUR BALANCE ·</span>
          <span className="home-editorial-scene__stage-ring home-editorial-scene__stage-ring--one" />
          <span className="home-editorial-scene__stage-ring home-editorial-scene__stage-ring--two" />
          <div className="home-editorial-scene__can">
            <ShowcaseCan
              label={labelMedia[featured.id]}
              product={featured}
              reducedMotion={reducedMotion}
              mediaSizes="(max-width: 599px) 44vw, (max-width: 899px) 36vw, 22vw"
            />
          </div>
          <span className="home-editorial-scene__stage-caption">Made for your moment.</span>
        </div>
      </div>
    </section>
  );
}

export function HomeCollectionDiscovery() {
  return (
    <section
      id="home-scene-collections"
      className="home-collections-scene"
      data-home-snap-scene
      aria-labelledby="home-collections-title"
    >
      <SceneTransitionArtwork index={5} word="EXPLORE" variant="editorial" />
      <div className="home-collections-scene__layout" data-home-snap-content>
        <header className="home-collections-scene__heading">
          <span className="home-campaign-kicker">Find your favorite <span aria-hidden="true">/</span> 02</span>
          <h2 id="home-collections-title"><span>Your kind of</span> <em>good.</em></h2>
          <p>Two ways to discover Lagom. Always led by flavor.</p>
        </header>
        <div className="home-collections-scene__grid">
          {CATEGORY_CARDS.map((card) => (
            <Link key={card.id} to={card.href} className={`home-collection-card home-collection-card--${card.id}`} aria-label={card.action}>
              <div className="home-collection-card__topline">
                <span>{card.index} / {card.eyebrow}</span>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <CategoryMedia mediaKey={card.mediaKey} />
              <div className="home-collection-card__body">
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <span className="home-collection-card__action">{card.action}<ArrowUpRight aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
