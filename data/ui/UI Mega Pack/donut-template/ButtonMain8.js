var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/DiUePttSqM4yWMgkVJXE/gEe0Ggl63uVZxzckOVix/u6sZbq51Z.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFonts, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React2 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/gGXLFANbZFKf2qU8bbVL/uQjjbN7Yn6nBRqTZdwzU/HoKrrnQcM.js
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
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>';
var getProps = ({ dots, height, id, stroke, width, width1, ...props }) => {
  return { ...props, BKVe8Pgvw: dots ?? props.BKVe8Pgvw ?? 1, fICyAUQY1: stroke ?? props.fICyAUQY1 ?? "rgb(0, 0, 0)", lKf_CQTz5: width1 ?? props.lKf_CQTz5 ?? 1.5 };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className2, layoutId, variant, fICyAUQY1, lKf_CQTz5, BKVe8Pgvw, ...restProps } = getProps(props);
  const href = useSVGTemplate("1173457374", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-EcgqK", className2), layoutId, ref, role: "presentation", style: { "--1335ju": lKf_CQTz5, "--18mrqx2": fICyAUQY1, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-EcgqK { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-EcgqK");
Icon.displayName = "Arrow Right";
var HoKrrnQcM_default = Icon;
addPropertyControls(Icon, { fICyAUQY1: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType.Color }, lKf_CQTz5: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 4, min: 0, step: 0.5, title: "Width", type: ControlType.Number }, BKVe8Pgvw: { defaultValue: 1, displayStepper: true, hidden: true, max: 4, min: 1, title: "Dots", type: ControlType.Number } });

// http-url:https://framerusercontent.com/modules/xI5k5X3nbECYbZCF6TDx/ObfycWcpGADvT1zi32qo/cRhro8yAF.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Boldonse-regular"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Boldonse", openType: true, source: "google", style: "normal", uiFamilyName: "Boldonse", url: "https://fonts.gstatic.com/s/boldonse/v1/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2", weight: "400" }] }];
var css2 = [`.framer-e8j6y .framer-styles-preset-653p1z:not(.rich-text-wrapper), .framer-e8j6y .framer-styles-preset-653p1z.rich-text-wrapper p { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-padding: 2px 0px 0px 0px; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-e8j6y .framer-styles-preset-653p1z:not(.rich-text-wrapper), .framer-e8j6y .framer-styles-preset-653p1z.rich-text-wrapper p { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-padding: 2px 0px 0px 0px; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-e8j6y .framer-styles-preset-653p1z:not(.rich-text-wrapper), .framer-e8j6y .framer-styles-preset-653p1z.rich-text-wrapper p { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-padding: 2px 0px 0px 0px; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className = "framer-e8j6y";

// http-url:https://framerusercontent.com/modules/DiUePttSqM4yWMgkVJXE/gEe0Ggl63uVZxzckOVix/u6sZbq51Z.js
var ArrowRightFonts = getFonts(HoKrrnQcM_default);
var enabledGestures = { jgw04tyIQ: { hover: true } };
var cycleOrder = ["jgw04tyIQ", "tJuAPrFeT"];
var serializationHash = "framer-cXo6S";
var variantClassNames = { jgw04tyIQ: "framer-v-iuo8nz", tJuAPrFeT: "framer-v-1opb2xk" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.6, ease: [0.12, 0.23, 0, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { "Tablet/Phone": "tJuAPrFeT", Desktop: "jgw04tyIQ" };
var Variants = motion2.create(React2.Fragment);
var getProps2 = ({ fill, height, id, link, newTab, textColor, title, width, ...props }) => {
  return { ...props, Hd9QGxOtK: link ?? props.Hd9QGxOtK, k6v4IaiQz: newTab ?? props.k6v4IaiQz, suovcfe8I: title ?? props.suovcfe8I ?? "Button", TGw4ZKdXt: fill ?? props.TGw4ZKdXt ?? "var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "jgw04tyIQ", vGze8YVfr: textColor ?? props.vGze8YVfr ?? "var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 236, 229))" };
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
  const { style, className: className2, layoutId, variant, suovcfe8I, TGw4ZKdXt, vGze8YVfr, k6v4IaiQz, Hd9QGxOtK, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "jgw04tyIQ", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(Link, { href: Hd9QGxOtK, motionChild: true, nodeId: "jgw04tyIQ", openInNewTab: k6v4IaiQz, scopeId: "u6sZbq51Z", smoothScroll: true, children: /* @__PURE__ */ _jsx2(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-iuo8nz", className2, classNames)} framer-152fd7j`, "data-framer-name": "Desktop", layoutDependency, layoutId: "ButtonMain__jgw04tyIQ", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ "jgw04tyIQ-hover": { "data-framer-name": void 0 }, tJuAPrFeT: { "data-framer-name": "Tablet/Phone" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion2.div, { className: "framer-11abo5p", "data-framer-name": "Container", layoutDependency, layoutId: "ButtonMain__J1BOMNKH4", style: { backgroundColor: TGw4ZKdXt, borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3, boxShadow: "inset -2px -2px 4px 0px rgba(0, 0, 0, 0.35)" }, children: [/* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1mm4i2c", "data-framer-name": "Icon Base", layoutDependency, layoutId: "ButtonMain__ceDzGrEyh", style: { backgroundColor: "var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(246, 184, 208))", borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3, rotate: 0 }, variants: { "jgw04tyIQ-hover": { rotate: 540 } }, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(HoKrrnQcM_default, { animated: true, className: "framer-f8evde", layoutDependency, layoutId: "ButtonMain__BjXcoUuqj", style: { "--1335ju": 2.5, "--18mrqx2": "var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))", "--3it368": 1 } }) }) }) }), /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-653p1z", "data-styles-preset": "cRhro8yAF", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-vGze8YVfr-u6sZbq51Z))" }, children: "Button" }) }), className: "framer-e6tceo", fonts: ["Inter"], layoutDependency, layoutId: "ButtonMain__lYNVr8iy_", style: { "--extracted-r6o4lv": "var(--variable-reference-vGze8YVfr-u6sZbq51Z)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-vGze8YVfr-u6sZbq51Z": vGze8YVfr }, text: suovcfe8I, verticalAlignment: "top", withExternalLayout: true }) })] }) }) }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cXo6S.framer-152fd7j, .framer-cXo6S .framer-152fd7j { display: block; }", ".framer-cXo6S.framer-iuo8nz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-cXo6S .framer-11abo5p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 20px 4px 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-cXo6S .framer-1mm4i2c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-cXo6S .framer-f8evde { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 20px; }", ".framer-cXo6S .framer-e6tceo { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }", ".framer-cXo6S.framer-v-1opb2xk .framer-11abo5p { padding: 4px 16px 4px 4px; }", ".framer-cXo6S.framer-v-1opb2xk .framer-f8evde { height: var(--framer-aspect-ratio-supported, 16px); width: 16px; }", ".framer-cXo6S.framer-v-iuo8nz.hover .framer-11abo5p { padding: 4px 4px 4px 20px; }", ".framer-cXo6S.framer-v-iuo8nz.hover .framer-1mm4i2c { order: 1; }", ".framer-cXo6S.framer-v-iuo8nz.hover .framer-e6tceo { order: 0; }", ...css2];
var Frameru6sZbq51Z = withCSS2(Component2, css3, "framer-cXo6S");
var u6sZbq51Z_default = Frameru6sZbq51Z;
Frameru6sZbq51Z.displayName = "Button Main";
Frameru6sZbq51Z.defaultProps = { height: 52, width: 156 };
addPropertyControls2(Frameru6sZbq51Z, { variant: { options: ["jgw04tyIQ", "tJuAPrFeT"], optionTitles: ["Desktop", "Tablet/Phone"], title: "Variant", type: ControlType2.Enum }, suovcfe8I: { defaultValue: "Button", displayTextArea: false, title: "Title", type: ControlType2.String }, onsuovcfe8IChange: { changes: "suovcfe8I", type: ControlType2.ChangeHandler }, TGw4ZKdXt: { defaultValue: 'var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)) /* {"name":"Primary"} */', title: "Fill", type: ControlType2.Color }, vGze8YVfr: { defaultValue: "var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 236, 229))", title: "Text Color", type: ControlType2.Color }, k6v4IaiQz: { defaultValue: false, title: "New Tab", type: ControlType2.Boolean }, onk6v4IaiQzChange: { changes: "k6v4IaiQz", type: ControlType2.ChangeHandler }, Hd9QGxOtK: { title: "Link", type: ControlType2.Link } });
addFonts(Frameru6sZbq51Z, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...ArrowRightFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "Frameru6sZbq51Z", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"tJuAPrFeT":{"layout":["auto","auto"]},"GmgDut6DX":{"layout":["auto","auto"]}}}', "framerAutoSizeImages": "true", "framerDisplayContentsDiv": "false", "framerIntrinsicWidth": "156", "framerVariables": '{"suovcfe8I":"title","TGw4ZKdXt":"fill","vGze8YVfr":"textColor","k6v4IaiQz":"newTab","Hd9QGxOtK":"link"}', "framerColorSyntax": "true", "framerIntrinsicHeight": "52", "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  u6sZbq51Z_default as default
};
