var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/aL97JmFRt3Qwa9nnhRJn/nZGfhLVafLI0GEler4Du/CyiBnaMHN.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/9RE3UwKMrzR5Uk8JwEAu/jj8DRRpzN8dGaqFsgluQ/b6iDS5iO0.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Noto Sans-regular", "GF;Noto Sans-700", "GF;Noto Sans-700italic", "GF;Noto Sans-italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Noto Sans", openType: true, source: "google", style: "normal", uiFamilyName: "Noto Sans", url: "https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99Y41P6zHtY.woff2", weight: "400" }, { cssFamilyName: "Noto Sans", openType: true, source: "google", style: "normal", uiFamilyName: "Noto Sans", url: "https://fonts.gstatic.com/s/notosans/v42/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAaBN9Y41P6zHtY.woff2", weight: "700" }, { cssFamilyName: "Noto Sans", openType: true, source: "google", style: "italic", uiFamilyName: "Noto Sans", url: "https://fonts.gstatic.com/s/notosans/v42/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QNAZ6VLYyWtY1rI.woff2", weight: "700" }, { cssFamilyName: "Noto Sans", openType: true, source: "google", style: "italic", uiFamilyName: "Noto Sans", url: "https://fonts.gstatic.com/s/notosans/v42/o-0kIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevHtVtX57DGjDU1QDce6VLYyWtY1rI.woff2", weight: "400" }] }];
var css = [`.framer-QH7e7 .framer-styles-preset-13kmfap:not(.rich-text-wrapper), .framer-QH7e7 .framer-styles-preset-13kmfap.rich-text-wrapper p { --framer-font-family: "Noto Sans", "Noto Sans Placeholder", sans-serif; --framer-font-family-bold: "Noto Sans", "Noto Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Noto Sans", "Noto Sans Placeholder", sans-serif; --framer-font-family-italic: "Noto Sans", "Noto Sans Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-72e3be62-71c0-4798-aa5d-6ef480f0c8b7); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-QH7e7";

// http-url:https://framerusercontent.com/modules/aL97JmFRt3Qwa9nnhRJn/nZGfhLVafLI0GEler4Du/CyiBnaMHN.js
var enabledGestures = { x5yO__DIe: { hover: true } };
var cycleOrder = ["x5yO__DIe", "pYQL1ycAY", "HJAoh6a53", "iDeifxDv4"];
var serializationHash = "framer-nhzYK";
var variantClassNames = { HJAoh6a53: "framer-v-1yhn3sp", iDeifxDv4: "framer-v-oeqnaf", pYQL1ycAY: "framer-v-1rhkqsc", x5yO__DIe: "framer-v-7m0vcy" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Default: "x5yO__DIe", Error: "iDeifxDv4", Sending: "pYQL1ycAY", Success: "HJAoh6a53" };
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "x5yO__DIe" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "x5yO__DIe", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.button, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-7m0vcy", className2, classNames), "data-framer-name": "Default", "data-reset": "button", layoutDependency, layoutId: "WaitlistButton__x5yO__DIe", ref: refBinding, style: { backgroundColor: "var(--token-e3c422f9-baf0-4516-a5ed-d75535787a97)", borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4, ...style }, variants: { "x5yO__DIe-hover": { backgroundColor: "var(--token-ba345a4f-9d71-4f8f-959d-dfdad63873f1)" } }, ...addPropertyOverrides({ "x5yO__DIe-hover": { "data-framer-name": "Hover" }, HJAoh6a53: { "data-framer-name": "Success" }, iDeifxDv4: { "data-framer-name": "Error" }, pYQL1ycAY: { "data-framer-name": "Sending" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-13kmfap", "data-styles-preset": "b6iDS5iO0", dir: "auto", style: { "--framer-text-alignment": "center" }, children: "Join the waitlist" }) }), className: "framer-1c43kgz", "data-framer-name": "Label", fonts: ["Inter"], layoutDependency, layoutId: "WaitlistButton__i1z61Yvr2", variants: { "x5yO__DIe-hover": { "--extracted-r6o4lv": "var(--token-e3c422f9-baf0-4516-a5ed-d75535787a97)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ "x5yO__DIe-hover": { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-13kmfap", "data-styles-preset": "b6iDS5iO0", dir: "auto", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e3c422f9-baf0-4516-a5ed-d75535787a97))" }, children: "Join the waitlist" }) }) }, HJAoh6a53: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-13kmfap", "data-styles-preset": "b6iDS5iO0", dir: "auto", style: { "--framer-text-alignment": "center" }, children: "You\u2019re on the list" }) }) }, iDeifxDv4: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-13kmfap", "data-styles-preset": "b6iDS5iO0", dir: "auto", style: { "--framer-text-alignment": "center" }, children: "Try again" }) }) }, pYQL1ycAY: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-13kmfap", "data-styles-preset": "b6iDS5iO0", dir: "auto", style: { "--framer-text-alignment": "center" }, children: "Joining\u2026" }) }) } }, baseVariant, gestureVariant) }) }) }) }) });
});
var css2 = [".framer-nhzYK.framer-1vymn92, .framer-nhzYK .framer-1vymn92 { display: block; }", ".framer-nhzYK.framer-7m0vcy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 15px 26px 15px 26px; position: relative; width: min-content; }", ".framer-nhzYK .framer-1c43kgz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-nhzYK.framer-v-1rhkqsc.framer-7m0vcy { cursor: progress; }", ...css];
var FramerCyiBnaMHN = withCSS(Component, css2, "framer-nhzYK");
var CyiBnaMHN_default = FramerCyiBnaMHN;
FramerCyiBnaMHN.displayName = "Waitlist Button";
FramerCyiBnaMHN.defaultProps = { height: 47, width: 152 };
addPropertyControls(FramerCyiBnaMHN, { variant: { options: ["x5yO__DIe", "pYQL1ycAY", "HJAoh6a53", "iDeifxDv4"], optionTitles: ["Default", "Sending", "Success", "Error"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerCyiBnaMHN, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerCyiBnaMHN", "slots": [], "annotations": { "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"pYQL1ycAY":{"layout":["auto","auto"]},"HJAoh6a53":{"layout":["auto","auto"]},"iDeifxDv4":{"layout":["auto","auto"]},"wZvAqdnIV":{"layout":["auto","auto"]}}}', "framerDisplayContentsDiv": "false", "framerColorSyntax": "true", "framerIntrinsicWidth": "152", "framerImmutableVariables": "true", "framerComponentViewportWidth": "true", "framerContractVersion": "1", "framerIntrinsicHeight": "47" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  CyiBnaMHN_default as default
};
