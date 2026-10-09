var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/OPVBREwi8SfHp9xz86yv/KGsQ6pVc4v5znJkMbWBv/xWWc7G4Cn.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/JrKv662lPm9i3wE4EbLu/gB6tGwVG4fuZnp33MEce/l0ECWJj32.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Geist-regular", "GF;Geist-700", "GF;Geist-700italic", "GF;Geist-italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Geist", source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2", weight: "400" }, { cssFamilyName: "Geist", source: "google", style: "normal", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2", weight: "700" }, { cssFamilyName: "Geist", source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKA32Zna6VEdtKCL.woff2", weight: "700" }, { cssFamilyName: "Geist", source: "google", style: "italic", uiFamilyName: "Geist", url: "https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKDQ3pna6VEdtKCL.woff2", weight: "400" }] }];
var css = ['.framer-nmCUx .framer-styles-preset-lp4weu:not(.rich-text-wrapper), .framer-nmCUx .framer-styles-preset-lp4weu.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-60155c11-6325-4b07-bb67-1bea6ff39584, #020202); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-nmCUx";

// http-url:https://framerusercontent.com/modules/OPVBREwi8SfHp9xz86yv/KGsQ6pVc4v5znJkMbWBv/xWWc7G4Cn.js
var enabledGestures = { bGbkJitlN: { hover: true }, E4_Mu6A3Z: { hover: true } };
var cycleOrder = ["bGbkJitlN", "E4_Mu6A3Z"];
var serializationHash = "framer-hhaiF";
var variantClassNames = { bGbkJitlN: "framer-v-1nu9s8c", E4_Mu6A3Z: "framer-v-g2e6w7" };
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
var humanReadableVariantMap = { "Variant 1": "bGbkJitlN", "Variant 2": "E4_Mu6A3Z" };
var Variants = motion.create(React.Fragment);
var getProps = ({ border, click, color, fill, height, id, link, title, width, ...props }) => {
  return { ...props, DTquDQqw7: fill ?? props.DTquDQqw7 ?? "var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0))", fPQ_aT0Ft: link ?? props.fPQ_aT0Ft, lINCMPVvZ: title ?? props.lINCMPVvZ ?? "Pre-Order Now", lPoNh4JD0: border ?? props.lPoNh4JD0 ?? { borderColor: 'var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0)) /* {"name":"Black"} */', borderStyle: "solid", borderWidth: 1 }, p2EaXZzmW: click ?? props.p2EaXZzmW, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "bGbkJitlN", xRnKhBfLD: color ?? props.xRnKhBfLD ?? "var(--token-939fee8e-14e2-447c-8374-670413a3fbee, rgb(255, 255, 255))" };
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
  const { style, className: className2, layoutId, variant, lINCMPVvZ, DTquDQqw7, lPoNh4JD0, xRnKhBfLD, p2EaXZzmW, fPQ_aT0Ft, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "bGbkJitlN", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapb12egi = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (p2EaXZzmW) {
      const res = await p2EaXZzmW(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: fPQ_aT0Ft, motionChild: true, nodeId: "bGbkJitlN", openInNewTab: false, scopeId: "xWWc7G4Cn", smoothScroll: true, children: /* @__PURE__ */ _jsx(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-1nu9s8c", className2, classNames)} framer-1gqe7ft`, "data-border": true, "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "Button__bGbkJitlN", onTap: onTapb12egi, ref: refBinding, style: { "--border-bottom-width": (lPoNh4JD0?.borderBottomWidth ?? lPoNh4JD0?.borderWidth) + "px", "--border-color": lPoNh4JD0?.borderColor, "--border-left-width": (lPoNh4JD0?.borderLeftWidth ?? lPoNh4JD0?.borderWidth) + "px", "--border-right-width": (lPoNh4JD0?.borderRightWidth ?? lPoNh4JD0?.borderWidth) + "px", "--border-style": lPoNh4JD0?.borderStyle, "--border-top-width": (lPoNh4JD0?.borderTopWidth ?? lPoNh4JD0?.borderWidth) + "px", backgroundColor: DTquDQqw7, borderBottomLeftRadius: 999, borderBottomRightRadius: 999, borderTopLeftRadius: 999, borderTopRightRadius: 999, ...style }, variants: { "bGbkJitlN-hover": { "--border-bottom-width": "1px", "--border-color": "var(--token-3cc4fd69-098d-405a-bf98-1ec55a21b869, rgb(255, 141, 40))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-3cc4fd69-098d-405a-bf98-1ec55a21b869, rgb(255, 141, 40))" }, "E4_Mu6A3Z-hover": { "--border-bottom-width": "1px", "--border-color": "var(--token-3cc4fd69-098d-405a-bf98-1ec55a21b869, rgb(255, 141, 40))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-3cc4fd69-098d-405a-bf98-1ec55a21b869, rgb(255, 141, 40))" }, E4_Mu6A3Z: { backgroundColor: "rgba(0, 0, 0, 0)" } }, ...addPropertyOverrides({ "bGbkJitlN-hover": { "data-framer-name": void 0 }, "E4_Mu6A3Z-hover": { "data-framer-name": void 0 }, E4_Mu6A3Z: { "data-framer-name": "Variant 2" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-lp4weu", "data-styles-preset": "l0ECWJj32", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-xRnKhBfLD-xWWc7G4Cn))" }, children: "Pre-Order Now" }) }), className: "framer-11y1obz", fonts: ["Inter"], layoutDependency, layoutId: "Button__UB2KdmWBU", style: { "--extracted-r6o4lv": "var(--variable-reference-xRnKhBfLD-xWWc7G4Cn)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-xRnKhBfLD-xWWc7G4Cn": xRnKhBfLD }, text: lINCMPVvZ, variants: { "E4_Mu6A3Z-hover": { "--extracted-r6o4lv": "var(--token-939fee8e-14e2-447c-8374-670413a3fbee, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ "E4_Mu6A3Z-hover": { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-lp4weu", "data-styles-preset": "l0ECWJj32", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-939fee8e-14e2-447c-8374-670413a3fbee, rgb(255, 255, 255)))" }, children: "Pre-Order Now" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hhaiF.framer-1gqe7ft, .framer-hhaiF .framer-1gqe7ft { display: block; }", ".framer-hhaiF.framer-1nu9s8c { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 20px 12px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-hhaiF .framer-11y1obz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css, '.framer-hhaiF[data-border="true"]::after, .framer-hhaiF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerxWWc7G4Cn = withCSS(Component, css2, "framer-hhaiF");
var xWWc7G4Cn_default = FramerxWWc7G4Cn;
FramerxWWc7G4Cn.displayName = "Button";
FramerxWWc7G4Cn.defaultProps = { height: 51, width: 162 };
addPropertyControls(FramerxWWc7G4Cn, { variant: { options: ["bGbkJitlN", "E4_Mu6A3Z"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType.Enum }, lINCMPVvZ: { defaultValue: "Pre-Order Now", displayTextArea: false, title: "Title", type: ControlType.String }, onlINCMPVvZChange: { changes: "lINCMPVvZ", type: ControlType.ChangeHandler }, DTquDQqw7: { defaultValue: 'var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0)) /* {"name":"Black"} */', title: "Fill", type: ControlType.Color }, lPoNh4JD0: { defaultValue: { borderColor: 'var(--token-3a08ac96-d2cc-4452-8d9c-b605c4ff9f14, rgb(0, 0, 0)) /* {"name":"Black"} */', borderStyle: "solid", borderWidth: 1 }, title: "Border", type: ControlType.Border }, xRnKhBfLD: { defaultValue: "var(--token-939fee8e-14e2-447c-8374-670413a3fbee, rgb(255, 255, 255))", title: "Color", type: ControlType.Color }, p2EaXZzmW: { title: "Click", type: ControlType.EventHandler }, fPQ_aT0Ft: { title: "Link", type: ControlType.Link } });
addFonts(FramerxWWc7G4Cn, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerxWWc7G4Cn", "slots": [], "annotations": { "framerContractVersion": "1", "framerIntrinsicHeight": "51", "framerIntrinsicWidth": "162", "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true", "framerVariables": '{"lINCMPVvZ":"title","DTquDQqw7":"fill","lPoNh4JD0":"border","xRnKhBfLD":"color","p2EaXZzmW":"click","fPQ_aT0Ft":"link"}', "framerDisplayContentsDiv": "false", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"E4_Mu6A3Z":{"layout":["auto","auto"]},"bM4NoQF2C":{"layout":["auto","auto"]},"Vlp_vHT20":{"layout":["auto","auto"]}}}', "framerImmutableVariables": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  xWWc7G4Cn_default as default
};
