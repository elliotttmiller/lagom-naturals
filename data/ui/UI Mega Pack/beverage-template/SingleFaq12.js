var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/0bC8AipVySCR7MVujChM/Rkj1OgsnWD4MovADlwgY/pWBexSYo6.js
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, CycleVariantState, getFonts, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion3, MotionConfigContext } from "framer-motion";
import * as React3 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/DM4CBxWAqRE2j93Y1otx/wtxD9CXpBCD2rfjOGZWg/a76Y2H1jb.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ _jsx("svg", { ...props, ref, children: props.children });
});
var MotionSVG = motion.create(Base);
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(MotionSVG, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx("svg", { ...rest, ref, children });
});
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 0 15" fill="transparent" height="15px" id="CQRro7JsO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(12 4.5)" width="1px"/><path d="M 15 0 L 0 0" fill="transparent" height="1px" id="Dq52FGJ45" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(4.5 12)" width="15px"/></svg>';
var getProps = ({ color, height, id, width, width1, ...props }) => {
  return { ...props, htQyJXMKW: width1 ?? props.htQyJXMKW ?? 1.5, jDue3c8Jy: color ?? props.jDue3c8Jy ?? "rgb(0, 0, 0)" };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className2, layoutId, variant, jDue3c8Jy, htQyJXMKW, ...restProps } = getProps(props);
  const href = useSVGTemplate("2516564908", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-gHJQk", className2), layoutId, ref, role: "presentation", style: { "--34440n": jDue3c8Jy, "--fbr8zx": htQyJXMKW, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-gHJQk { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-gHJQk");
Icon.displayName = "Plus";
var a76Y2H1jb_default = Icon;
addPropertyControls(Icon, { jDue3c8Jy: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType.Color }, htQyJXMKW: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 8, min: 1, title: "Width", type: ControlType.Number } });

// http-url:https://framerusercontent.com/modules/TF9Tn9o1QxCSRo9yNQ00/chAizOjhCTcUgszDONT6/EI160oNGB.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, useSVGTemplate as useSVGTemplate2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = "var(--framer-icon-mask)";
var Base2 = /* @__PURE__ */ forwardRef4(function(props, ref) {
  return /* @__PURE__ */ _jsx2("svg", { ...props, ref, children: props.children });
});
var MotionSVG2 = motion2.create(Base2);
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(MotionSVG2, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx2("svg", { ...rest, ref, children });
});
var svg2 = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 15 0 L 0 0" fill="transparent" height="1px" id="ZhjgRHdcX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--fbr8zx, 1.5)" stroke="var(--34440n, rgb(0, 0, 0))" transform="translate(4.5 12)" width="15px"/></svg>';
var getProps2 = ({ color, height, id, width, width1, ...props }) => {
  return { ...props, htQyJXMKW: width1 ?? props.htQyJXMKW ?? 1.5, jDue3c8Jy: color ?? props.jDue3c8Jy ?? "rgb(0, 0, 0)" };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className: className2, layoutId, variant, jDue3c8Jy, htQyJXMKW, ...restProps } = getProps2(props);
  const href = useSVGTemplate2("1590476497", svg2);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-mGvAG", className2), layoutId, ref, role: "presentation", style: { "--34440n": jDue3c8Jy, "--fbr8zx": htQyJXMKW, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx2("use", { href }) });
});
var css2 = [`.framer-mGvAG { -webkit-mask: ${mask2}; aspect-ratio: 1; display: block; mask: ${mask2}; width: 24px; }`];
var Icon2 = withCSS2(Component2, css2, "framer-mGvAG");
Icon2.displayName = "Minus";
var EI160oNGB_default = Icon2;
addPropertyControls2(Icon2, { jDue3c8Jy: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType2.Color }, htQyJXMKW: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 8, min: 1, title: "Width", type: ControlType2.Number } });

// http-url:https://framerusercontent.com/modules/JrKv662lPm9i3wE4EbLu/gB6tGwVG4fuZnp33MEce/l0ECWJj32.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Geist-regular", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2", weight: "400" }, { cssFamilyName: "Geist", source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDQ3pna6VEdtKCL.woff2", weight: "400" }] }];
var css3 = ['.framer-nmCUx .framer-styles-preset-lp4weu:not(.rich-text-wrapper), .framer-nmCUx .framer-styles-preset-lp4weu.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-60155c11-6325-4b07-bb67-1bea6ff39584, #020202); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-nmCUx";

// http-url:https://framerusercontent.com/modules/0bC8AipVySCR7MVujChM/Rkj1OgsnWD4MovADlwgY/pWBexSYo6.js
var MinusFonts = getFonts(EI160oNGB_default);
var PlusFonts = getFonts(a76Y2H1jb_default);
var cycleOrder = ["uBxACbOVl", "JvYeiyGgx"];
var serializationHash = "framer-RguCj";
var variantClassNames = { JvYeiyGgx: "framer-v-1yvc9vj", uBxACbOVl: "framer-v-1knw8ps" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0, delay: 0, duration: 0.6, type: "spring" };
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Closed: "JvYeiyGgx", Open: "uBxACbOVl" };
var Variants = motion3.create(React3.Fragment);
var getProps3 = ({ answer, height, id, question, width, ...props }) => {
  return { ...props, DMVNB_5NU: answer ?? props.DMVNB_5NU ?? "Yes, but built around smoother functional support instead of overload.  Does it contain alcohol?", luq3uZp5T: question ?? props.luq3uZp5T ?? "Is it an energy drink?", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "uBxACbOVl" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, luq3uZp5T, DMVNB_5NU, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "uBxACbOVl", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapgnqhaj = activeVariantCallback(async (...args) => {
    setVariant(CycleVariantState);
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx3(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "JvYeiyGgx")
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "JvYeiyGgx")
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-1knw8ps", className2, classNames), "data-framer-name": "Open", layoutDependency, layoutId: "SingleFAQ__uBxACbOVl", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ JvYeiyGgx: { "data-framer-name": "Closed" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs(motion3.div, { className: "framer-1b05ogp", "data-framer-name": "Question", "data-highlight": true, layoutDependency, layoutId: "SingleFAQ__GvsIY3UJ7", onTap: onTapgnqhaj, children: [/* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-lp4weu", "data-styles-preset": "l0ECWJj32", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0)))" }, children: "Is it an energy drink?" }) }), className: "framer-117jz5m", fonts: ["Inter"], layoutDependency, layoutId: "SingleFAQ__pY1ctyL3k", style: { "--extracted-r6o4lv": "var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0))" }, text: luq3uZp5T, verticalAlignment: "top", withExternalLayout: true }), isDisplayed() && /* @__PURE__ */ _jsx3(EI160oNGB_default, { animated: true, className: "framer-1rviwv1", layoutDependency, layoutId: "SingleFAQ__ufziErW0i", style: { "--34440n": "var(--token-3cc4fd69-098d-405a-bf98-1ec55a21b869, rgb(255, 141, 40))", "--fbr8zx": 1.5 } }), isDisplayed1() && /* @__PURE__ */ _jsx3(a76Y2H1jb_default, { animated: true, className: "framer-17plxb9", layoutDependency, layoutId: "SingleFAQ__UIg0N23ZB", style: { "--34440n": "var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0))", "--fbr8zx": 1.5 } })] }), /* @__PURE__ */ _jsx3(motion3.div, { className: "framer-1quwl3d", "data-framer-name": "Answer", layoutDependency, layoutId: "SingleFAQ__c8XbLXql3", style: { opacity: 1 }, variants: { JvYeiyGgx: { opacity: 0 } }, ...addPropertyOverrides({ JvYeiyGgx: { transformTemplate: transformTemplate1 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-lp4weu", "data-styles-preset": "l0ECWJj32", dir: "auto", style: { "--framer-text-alignment": "left" }, children: "Yes, but built around smoother functional support instead of overload.  Does it contain alcohol?" }) }), className: "framer-zkbwmo", fonts: ["Inter"], layoutDependency, layoutId: "SingleFAQ__VnxNJbxbT", text: DMVNB_5NU, verticalAlignment: "top", withExternalLayout: true }) })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-RguCj.framer-1yimm1w, .framer-RguCj .framer-1yimm1w { display: block; }", ".framer-RguCj.framer-1knw8ps { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; }", ".framer-RguCj .framer-1b05ogp { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }", ".framer-RguCj .framer-117jz5m { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-RguCj .framer-1rviwv1, .framer-RguCj .framer-17plxb9 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", ".framer-RguCj .framer-1quwl3d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-RguCj .framer-zkbwmo { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-RguCj.framer-v-1yvc9vj .framer-1quwl3d { bottom: -100px; left: 50%; position: absolute; width: 452px; z-index: 1; }", ...css3];
var FramerpWBexSYo6 = withCSS3(Component3, css4, "framer-RguCj");
var pWBexSYo6_default = FramerpWBexSYo6;
FramerpWBexSYo6.displayName = "Single FAQ";
FramerpWBexSYo6.defaultProps = { height: 141, width: 500 };
addPropertyControls3(FramerpWBexSYo6, { variant: { options: ["uBxACbOVl", "JvYeiyGgx"], optionTitles: ["Open", "Closed"], title: "Variant", type: ControlType3.Enum }, luq3uZp5T: { defaultValue: "Is it an energy drink?", title: "Question", type: ControlType3.String }, onluq3uZp5TChange: { changes: "luq3uZp5T", type: ControlType3.ChangeHandler }, DMVNB_5NU: { defaultValue: "Yes, but built around smoother functional support instead of overload.  Does it contain alcohol?", title: "Answer", type: ControlType3.String }, onDMVNB_5NUChange: { changes: "DMVNB_5NU", type: ControlType3.ChangeHandler } });
addFonts(FramerpWBexSYo6, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...MinusFonts, ...PlusFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerpWBexSYo6", "slots": [], "annotations": { "framerAutoSizeImages": "true", "framerColorSyntax": "true", "framerImmutableVariables": "true", "framerIntrinsicHeight": "141", "framerVariables": '{"luq3uZp5T":"question","DMVNB_5NU":"answer"}', "framerDisplayContentsDiv": "false", "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerIntrinsicWidth": "500", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JvYeiyGgx":{"layout":["fixed","auto"]}}}' } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  pWBexSYo6_default as default
};
