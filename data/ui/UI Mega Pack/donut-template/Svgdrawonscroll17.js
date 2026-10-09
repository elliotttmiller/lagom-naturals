var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/Sqzrpis870M3xknA8zVO/iAYXeyse4t3LNEslFLIe/SvgDrawOnScroll_1.js
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState, startTransition } from "react";
import { addPropertyControls, ControlType, useIsStaticRenderer } from "./_framer-runtime.js";
function SvgDrawOnScroll(props) {
  const { sectionId, svgPath, color, strokeWidth, viewBox, style } = props;
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const isStatic = useIsStaticRenderer();
  const pathData = svgPath || "M1262.5 257.5C2024.33 551.666 3503.3 982.2 3324.5 351C3101 -438 2293 525 1424 1195.5C555 1866 -562.5 90.4996 468 351C1292.4 559.4 2529.5 1451.83 3045 1872";
  useEffect(() => {
    if (isStatic) {
      setProgress(0);
      return;
    }
    function onScroll() {
      if (!sectionId)
        return;
      const section = document.getElementById(sectionId);
      if (!section)
        return;
      const rect = section.getBoundingClientRect();
      const windowHeight = __dai_window.innerHeight || document.documentElement.clientHeight;
      const sectionHeight = rect.height;
      let pct = 0;
      if (rect.top > windowHeight) {
        pct = 0;
      } else if (rect.bottom < windowHeight) {
        pct = 1;
      } else {
        const scrollY = windowHeight - rect.top;
        const scrollRange = sectionHeight;
        pct = Math.min(1, Math.max(0, scrollY / scrollRange));
      }
      startTransition(() => setProgress(pct));
    }
    __dai_window.addEventListener("scroll", onScroll, { passive: true });
    __dai_window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      __dai_window.removeEventListener("scroll", onScroll);
      __dai_window.removeEventListener("resize", onScroll);
    };
  }, [sectionId, isStatic]);
  const [pathLength, setPathLength] = useState(1);
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [svgPath, strokeWidth]);
  const dashoffset = pathLength * (1 - (isStatic ? 0 : progress));
  const dashoffsetPreview = pathLength * (1 - progress);
  return /* @__PURE__ */ _jsx("svg", { width: "100%", height: "100%", viewBox: viewBox || "0 0 3394 1915", fill: "none", style: { display: "block", width: "100%", height: "100%", overflow: "visible", ...style }, "aria-hidden": "true", preserveAspectRatio: "none", children: /* @__PURE__ */ _jsx("path", { ref: pathRef, d: pathData, stroke: color, strokeWidth, fill: "none", strokeDasharray: pathLength, strokeDashoffset: isStatic ? 0 : dashoffsetPreview, strokeLinecap: "round", strokeLinejoin: "round" }) });
}
addPropertyControls(SvgDrawOnScroll, { sectionId: { type: ControlType.String, title: "Section ID", defaultValue: "section1", placeholder: "section1" }, svgPath: { type: ControlType.String, title: "SVG Path", defaultValue: "M1262.5 257.5C2024.33 551.666 3503.3 982.2 3324.5 351C3101 -438 2293 525 1424 1195.5C555 1866 -562.5 90.4996 468 351C1292.4 559.4 2529.5 1451.83 3045 1872", displayTextArea: true, placeholder: "Paste SVG path data here..." }, color: { type: ControlType.Color, title: "Stroke Color", defaultValue: "#000000" }, strokeWidth: { type: ControlType.Number, title: "Stroke Width", defaultValue: 109, min: 1, max: 200, step: 1, unit: "px" }, viewBox: { type: ControlType.String, title: "ViewBox", defaultValue: "0 0 3394 1915", placeholder: "0 0 3394 1915" } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "SvgDrawOnScroll", "slots": [], "annotations": { "framerContractVersion": "1", "framerSupportedLayoutWidth": "fixed", "framerSupportedLayoutHeight": "fixed" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  SvgDrawOnScroll as default
};
