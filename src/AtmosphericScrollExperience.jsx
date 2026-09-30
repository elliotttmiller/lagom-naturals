import { useRef } from "react";
import cloudSeventeen from "./assets/atmosphere/clouds/cloud-17.webp";
import cloudTwentyOne from "./assets/atmosphere/clouds/cloud-21.webp";
import cloudFourteen from "./assets/atmosphere/clouds/cloud-14.webp";
import cloudNineteen from "./assets/atmosphere/clouds/cloud-19.webp";

const sceneCloudSources = {
  flavors: cloudSeventeen,
  craft: cloudTwentyOne,
  gummies: cloudFourteen,
  balance: cloudNineteen,
};

/**
 * A stable scene shell for the homepage's native scroll-snap journey.
 * Animation state is owned by HomeScrollSnap; this component owns only the
 * semantic scene boundary and its existing decorative media.
 */
export function AtmosphericSceneSection({ id, className, labelledBy, children }) {
  const ref = useRef(null);
  const sceneCloudPlacement = id === "craft" ? "editorial" : id;

  return (
    <section
      ref={ref}
      id={`home-scene-${id}`}
      className={`${className} atmospheric-scene-section`}
      data-home-snap-scene
      aria-labelledby={labelledBy}
    >
      <span
        className={`atmospheric-scene-section__cloud atmospheric-scene-section__cloud--${sceneCloudPlacement}`}
        aria-hidden="true"
      >
        <img src={sceneCloudSources[id] || cloudSeventeen} alt="" />
      </span>
      <div className="atmospheric-scene-section__content" data-home-snap-content>{children}</div>
    </section>
  );
}
