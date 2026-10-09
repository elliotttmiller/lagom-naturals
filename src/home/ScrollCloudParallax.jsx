import { useEffect, useRef } from "react";

/**
 * Scroll-reactive atmospheric planes layered above the shared WebGL sky.
 * Window scroll remains native; no React state writes or scroll interception.
 * Damped RAF runs only while the target scroll position is changing.
 */
export default function ScrollCloudParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === "undefined") return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current = window.scrollY || 0;
    let target = current;
    let previousWidth = window.innerWidth;

    const render = () => {
      frame = 0;
      const difference = target - current;
      current += difference * 0.16;
      if (Math.abs(difference) < 0.4) current = target;

      // Smooth cyclic offsets maintain continuity across multiple full-height
      // scenes without large cumulative transforms or abrupt scene resets.
      const depth = Math.max(420, window.innerHeight * 0.9);
      const phase = current / depth;
      const near = Math.sin(phase * 0.84) * 46 + Math.sin(phase * 0.36) * 20;
      const middle = Math.sin(phase * 0.47 + 1.2) * 24;
      const drift = Math.sin(phase * 0.25) * 18;
      element.style.setProperty("--cloud-scroll-near-y", `${near.toFixed(2)}px`);
      element.style.setProperty("--cloud-scroll-mid-y", `${middle.toFixed(2)}px`);
      element.style.setProperty("--cloud-scroll-drift-x", `${drift.toFixed(2)}px`);
      element.style.setProperty("--cloud-scroll-mid-x", `${(-drift * 0.55).toFixed(2)}px`);

      if (Math.abs(target - current) >= 0.4) frame = window.requestAnimationFrame(render);
    };
    const schedule = () => {
      if (reduceMotion.matches) return;
      target = window.scrollY || 0;
      if (!frame) frame = window.requestAnimationFrame(render);
    };
    const onResize = () => {
      if (window.innerWidth !== previousWidth) previousWidth = window.innerWidth;
      schedule();
    };
    const onPreferenceChange = () => {
      if (reduceMotion.matches) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        element.style.removeProperty("--cloud-scroll-near-y");
        element.style.removeProperty("--cloud-scroll-mid-y");
        element.style.removeProperty("--cloud-scroll-drift-x");
        element.style.removeProperty("--cloud-scroll-mid-x");
      } else schedule();
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", onPreferenceChange);
    else reduceMotion.addListener(onPreferenceChange);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      if (reduceMotion.removeEventListener) reduceMotion.removeEventListener("change", onPreferenceChange);
      else reduceMotion.removeListener(onPreferenceChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="sky-home__scroll-clouds" aria-hidden="true">
      <div className="sky-home__scroll-clouds-mid" />
      <div className="sky-home__scroll-clouds-near" />
    </div>
  );
}
