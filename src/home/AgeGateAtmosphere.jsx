import { lazy, Suspense } from "react";
import { HOMEPAGE_ATMOSPHERE } from "./homepageAtmosphereConfig.js";

const LiveCloudsTemplate = lazy(() => import("./LiveCloudsTemplate.js"));
const CLOUD_LAYER_STYLE = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  background: "transparent",
};

export default function AgeGateAtmosphere() {
  return (
    <div className="age-gate__live-clouds" aria-hidden="true">
      <Suspense fallback={null}>
        <LiveCloudsTemplate
          {...HOMEPAGE_ATMOSPHERE}
          style={CLOUD_LAYER_STYLE}
        />
      </Suspense>
    </div>
  );
}
