import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { HOMEPAGE_ATMOSPHERE } from "./homepageAtmosphereConfig.js";

const LiveCloudsTemplate = lazy(() => import("./LiveCloudsTemplate.js"));
const CLOUD_LAYER_STYLE = {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  background: "transparent",
};

export default function HomepageAtmosphere() {
  const [activated, setActivated] = useState(false);
  const atmosphereRef = useRef(null);

  useEffect(() => {
    const atmosphere = atmosphereRef.current;
    if (!atmosphere) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setActivated(true);
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setActivated(true);
      observer.disconnect();
    }, { rootMargin: "240px 0px" });
    observer.observe(atmosphere);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={atmosphereRef} className="sky-home__page-atmosphere" aria-hidden="true">
      {activated ? (
        <Suspense fallback={null}>
          <LiveCloudsTemplate
            {...HOMEPAGE_ATMOSPHERE}
            style={CLOUD_LAYER_STYLE}
          />
        </Suspense>
      ) : null}
    </div>
  );
}
