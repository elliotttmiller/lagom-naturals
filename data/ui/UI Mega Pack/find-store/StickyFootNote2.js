var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/57JNMMyS4ZAOikmYAFMG/svSDNSEFmq0laiKdmiNC/xpf5TMhJU.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React2 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/pViJj926CBy444h3AYfq/yXDe2VVQ9pDsXbJlmrXJ/CT_DBbR5R.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw"]);
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }] }];
var css = ['.framer-fQ51O .framer-styles-preset-5rfdkx:not(.rich-text-wrapper), .framer-fQ51O .framer-styles-preset-5rfdkx.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 550; --framer-font-variation-axes-italic: "opsz" 14, "wght" 550; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-fQ51O";

// http-url:https://framerusercontent.com/modules/vKUQ9jgoaCoSzRCYebu9/WM5MUKRu4qgOcFa1EDTJ/MZSquWyWE.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 82.11 3.069 C 86.203 -1.023 92.838 -1.023 96.931 3.069 C 101.023 7.162 101.023 13.797 96.931 17.89 L 17.89 96.931 C 13.797 101.023 7.162 101.023 3.069 96.931 C -1.023 92.838 -1.023 86.203 3.069 82.11 Z M 3.069 3.069 C 7.162 -1.023 13.797 -1.023 17.89 3.069 L 96.931 82.11 C 101.023 86.203 101.023 92.838 96.931 96.931 C 92.838 101.023 86.203 101.023 82.11 96.931 L 3.069 17.89 C -1.023 13.797 -1.023 7.162 3.069 3.069 Z" fill="transparent" height="100.00000071340011px" id="MTwjZpzhV" transform="translate(0 0)" width="99.99999843289923px"><path d="M 0 10.479 C 0 4.692 4.692 0 10.479 0 C 16.267 0 20.959 4.692 20.959 10.479 L 20.959 122.26 C 20.959 128.048 16.267 132.74 10.479 132.74 C 4.692 132.74 0 128.048 0 122.26 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="132.73988081941218px" id="QcTqe9I3M" transform="translate(39.521 -16.37) rotate(45 10.479 66.37)" width="20.958928550433313px"/><path d="M 0 10.479 C 0 4.692 4.692 0 10.479 0 L 122.26 0 C 128.048 0 132.74 4.692 132.74 10.479 C 132.74 16.267 128.048 20.959 122.26 20.959 L 10.479 20.959 C 4.692 20.959 0 16.267 0 10.479 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="20.958928550433455px" id="H0aXdZDtK" transform="translate(-16.37 39.521) rotate(45 66.37 10.479)" width="132.73988081941212px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(motion.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx("div", { ...rest, ref });
});
var getProps = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className2, layoutId, variant, GaDHsaDms, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-UHDOa", className2), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css2 = [`.framer-UHDOa { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask}; width: 100px; }`];
var Icon = withCSS(Component, css2, "framer-UHDOa");
Icon.displayName = "X Close";
var MZSquWyWE_default = Icon;
addPropertyControls(Icon, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType.Color } });

// http-url:https://framerusercontent.com/modules/57JNMMyS4ZAOikmYAFMG/svSDNSEFmq0laiKdmiNC/xpf5TMhJU.js
var XCloseFonts = getFonts(MZSquWyWE_default);
var cycleOrder = ["gndt8Odsu", "XRBWMRqaj"];
var serializationHash = "framer-SkZxX";
var variantClassNames = { gndt8Odsu: "framer-v-vbsatf", XRBWMRqaj: "framer-v-1hku28l" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Base: "gndt8Odsu", Hidden: "XRBWMRqaj" };
var Variants = motion2.create(React2.Fragment);
var getProps2 = ({ height, id, note, width, ...props }) => {
  return { ...props, B85HEv4Ke: note ?? props.B85HEv4Ke ?? "Get a 10% discount when buying from the store.", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "gndt8Odsu" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, B85HEv4Ke, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "gndt8Odsu", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap13dlcse = activeVariantCallback(async (...args) => {
    setVariant("XRBWMRqaj");
  });
  const sharedStyleClassNames = [className];
  const isDisplayed = () => {
    if (baseVariant === "XRBWMRqaj")
      return false;
    return true;
  };
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: isDisplayed() && /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-vbsatf", className2, classNames), "data-framer-name": "Base", layoutDependency, layoutId: "StickyFootNote__gndt8Odsu", ref: refBinding, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))", ...style }, children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))" }, children: "Get a 10% discount when buying from the store." }) }), className: "framer-1w7m0pu", fonts: ["Inter"], layoutDependency, layoutId: "StickyFootNote__TFddYXDZD", style: { "--extracted-r6o4lv": "var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))" }, text: B85HEv4Ke, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1sk5wfl", "data-framer-name": "Close Button", "data-highlight": true, layoutDependency, layoutId: "StickyFootNote__boQMaF3Qr", onTap: onTap13dlcse, children: /* @__PURE__ */ _jsx2(MZSquWyWE_default, { animated: true, className: "framer-t131oc", layoutDependency, layoutId: "StickyFootNote__uxy3dvlDH", style: { "--118a55": "var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))" } }) })] }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SkZxX.framer-k7timv, .framer-SkZxX .framer-k7timv { display: block; }", ".framer-SkZxX.framer-vbsatf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 12px 8px 12px; position: relative; width: 100%; }", '.framer-SkZxX .framer-1w7m0pu { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }', ".framer-SkZxX .framer-1sk5wfl { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }", ".framer-SkZxX .framer-t131oc { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }", ...css];
var Framerxpf5TMhJU = withCSS2(Component2, css3, "framer-SkZxX");
var xpf5TMhJU_default = Framerxpf5TMhJU;
Framerxpf5TMhJU.displayName = "Sticky Foot Note";
Framerxpf5TMhJU.defaultProps = { height: 37, width: 800 };
addPropertyControls2(Framerxpf5TMhJU, { variant: { options: ["gndt8Odsu", "XRBWMRqaj"], optionTitles: ["Base", "Hidden"], title: "Variant", type: ControlType2.Enum }, B85HEv4Ke: { defaultValue: "Get a 10% discount when buying from the store.", displayTextArea: true, title: "Note", type: ControlType2.String }, onB85HEv4KeChange: { changes: "B85HEv4Ke", type: ControlType2.ChangeHandler } });
addFonts(Framerxpf5TMhJU, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...XCloseFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Framerxpf5TMhJU", "slots": [], "annotations": { "framerIntrinsicHeight": "37", "framerImmutableVariables": "true", "framerColorSyntax": "true", "framerContractVersion": "1", "framerVariables": '{"B85HEv4Ke":"note"}', "framerIntrinsicWidth": "800", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"XRBWMRqaj":{"layout":["fixed","auto"]}}}', "framerComponentViewportWidth": "true", "framerDisplayContentsDiv": "false", "framerAutoSizeImages": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  xpf5TMhJU_default as default
};
