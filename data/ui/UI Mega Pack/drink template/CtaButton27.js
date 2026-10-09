var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/gq5Gn8JqYIyxrnW9o3zH/KQ4n9hyT2FyMJHEuH0es/btK1Wf1HE.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, Link, RichText, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var enabledGestures = { aI8rc6wQb: { hover: true } };
var cycleOrder = ["aI8rc6wQb", "oXt4z2TtE"];
var serializationHash = "framer-CvHHh";
var variantClassNames = { aI8rc6wQb: "framer-v-gkk6du", oXt4z2TtE: "framer-v-ymtupb" };
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
var humanReadableVariantMap = { "Variant 1": "aI8rc6wQb", "Variant 2": "oXt4z2TtE" };
var Variants = motion.create(React.Fragment);
var getProps = ({ color, fill, height, id, link, title, width, ...props }) => {
  return { ...props, GzTg5iix6: link ?? props.GzTg5iix6, HQ1XM1D3R: fill ?? props.HQ1XM1D3R ?? "rgb(42, 105, 0)", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "aI8rc6wQb", VhPxwB2HL: color ?? props.VhPxwB2HL ?? "rgb(255, 255, 255)", VT28YoIIe: title ?? props.VT28YoIIe ?? "SHOP NOW" };
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
  const { style, className, layoutId, variant, HQ1XM1D3R, VhPxwB2HL, VT28YoIIe, GzTg5iix6, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "aI8rc6wQb", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: GzTg5iix6, motionChild: true, nodeId: "aI8rc6wQb", openInNewTab: false, scopeId: "btK1Wf1HE", children: /* @__PURE__ */ _jsxs(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-gkk6du", className, classNames)} framer-d8a8kj`, "data-framer-name": "Variant 1", layoutDependency, layoutId: "CtaButton2__aI8rc6wQb", ref: refBinding, style: { backgroundColor: HQ1XM1D3R, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, ...style }, ...addPropertyOverrides({ "aI8rc6wQb-hover": { "data-framer-name": void 0 }, oXt4z2TtE: { "data-framer-name": "Variant 2" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(SVG, { className: "framer-dsl7fa", layoutDependency, layoutId: "CtaButton2__BnU8OlXIE", requiresOverflowVisible: false, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 397 397" overflow="visible"><path d="M 198.5 0 C 308.129 0 397 88.871 397 198.5 C 397 308.129 308.129 397 198.5 397 C 88.871 397 0 308.129 0 198.5 C 0 88.871 88.871 0 198.5 0 Z" fill="var(--token-a87a1b5b-5ffb-4186-aa38-97c8281399f0, rgb(255, 249, 224)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>', withExternalLayout: true }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk", "--framer-font-family": '"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif', "--framer-font-size": "28px", "--framer-font-weight": "700", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-VhPxwB2HL-btK1Wf1HE))" }, children: "SHOP NOW" }) }), className: "framer-7k2xfa", fonts: ["CUSTOMV2;Mona Sans Condensed Bold"], layoutDependency, layoutId: "CtaButton2__DvJdz2FqK", style: { "--extracted-r6o4lv": "var(--variable-reference-VhPxwB2HL-btK1Wf1HE)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-VhPxwB2HL-btK1Wf1HE": VhPxwB2HL }, text: VT28YoIIe, variants: { "aI8rc6wQb-hover": { "--extracted-r6o4lv": "rgb(26, 26, 26)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ "aI8rc6wQb-hover": { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk", "--framer-font-family": '"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif', "--framer-font-size": "28px", "--framer-font-weight": "700", "--framer-text-color": "var(--extracted-r6o4lv, rgb(26, 26, 26))" }, children: "SHOP NOW" }) }) }, oXt4z2TtE: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk", "--framer-font-family": '"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif', "--framer-font-size": "18px", "--framer-font-weight": "700", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-VhPxwB2HL-btK1Wf1HE))" }, children: "SHOP NOW" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-CvHHh.framer-d8a8kj, .framer-CvHHh .framer-d8a8kj { display: block; }", ".framer-CvHHh.framer-gkk6du { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 36px 18px 36px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-CvHHh .framer-dsl7fa { height: 397px; left: -84px; position: absolute; top: 75px; width: 397px; }", ".framer-CvHHh .framer-7k2xfa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-CvHHh.framer-v-ymtupb.framer-gkk6du { cursor: unset; padding: 12px 32px 12px 32px; }", ".framer-CvHHh.framer-v-gkk6du.hover .framer-dsl7fa { left: -104px; top: -55px; }"];
var FramerbtK1Wf1HE = withCSS(Component, css, "framer-CvHHh");
var btK1Wf1HE_default = FramerbtK1Wf1HE;
FramerbtK1Wf1HE.displayName = "Cta Button 2";
FramerbtK1Wf1HE.defaultProps = { height: 69.5, width: 173 };
addPropertyControls(FramerbtK1Wf1HE, { variant: { options: ["aI8rc6wQb", "oXt4z2TtE"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType.Enum }, HQ1XM1D3R: { defaultValue: "rgb(42, 105, 0)", title: "Fill", type: ControlType.Color }, VhPxwB2HL: { defaultValue: "rgb(255, 255, 255)", title: "Color", type: ControlType.Color }, VT28YoIIe: { defaultValue: "SHOP NOW", displayTextArea: false, title: "Title", type: ControlType.String }, onVT28YoIIeChange: { changes: "VT28YoIIe", type: ControlType.ChangeHandler }, GzTg5iix6: { title: "Link", type: ControlType.Link } });
addFonts(FramerbtK1Wf1HE, [{ explicitInter: true, fonts: [{ cssFamilyName: "Mona Sans Condensed Bold", source: "custom", style: "normal", uiFamilyName: "Mona Sans Condensed", url: "https://framerusercontent.com/assets/6iwC6STWvic4aW9ENkaXYx1Abto.woff2", weight: "700" }] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerbtK1Wf1HE", "slots": [], "annotations": { "framerContractVersion": "1", "framerIntrinsicWidth": "173", "framerIntrinsicHeight": "69.5", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"oXt4z2TtE":{"layout":["auto","auto"]},"JzIbGTbzj":{"layout":["auto","auto"]}}}', "framerColorSyntax": "true", "framerImmutableVariables": "true", "framerDisplayContentsDiv": "false", "framerVariables": '{"HQ1XM1D3R":"fill","VhPxwB2HL":"color","VT28YoIIe":"title","GzTg5iix6":"link"}', "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  btK1Wf1HE_default as default
};
