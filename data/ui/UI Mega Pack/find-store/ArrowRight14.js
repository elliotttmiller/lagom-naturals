var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/Fs5VQrVyKoruA9COVjYx/V45WQoTRvnjjKwxyThBd/wggGXhZaC.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 39.757 L 38.539 1.218 C 39.317 0.438 40.373 0 41.475 0 C 42.577 0 43.633 0.438 44.411 1.218 L 82.95 39.757 M 41.475 14.872 L 41.475 81.232" fill="transparent" height="81.23205219268812px" id="jOHsmej4_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.59" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(8.5 9.51) rotate(90 41.475 40.616)" width="82.95000000000005px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(motion.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx("div", { ...rest, ref });
});
var getProps = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, GaDHsaDms, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-ZtDxP", className), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css = [`.framer-ZtDxP { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask}; width: 100px; }`];
var Icon = withCSS(Component, css, "framer-ZtDxP");
Icon.displayName = "Arrow Right";
var wggGXhZaC_default = Icon;
addPropertyControls(Icon, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType.Color } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Icon", "slots": [], "annotations": { "framerContractVersion": "1", "framerImmutableVariables": "true", "framerVariables": '{"GaDHsaDms":"color"}', "framerSupportedLayoutWidth": "any-prefer-fixed", "framerSupportedLayoutHeight": "any-prefer-fixed", "framerVector": '{"name":"Arrow Right","color":{"type":"variable","value":"118a55"},"set":{"localId":"vectorSet/Ecw86DlA2","id":"Ecw86DlA2","moduleId":"v49rTnsQ31Y5gd6DySlU"}}', "framerIntrinsicHeight": "100", "framerIntrinsicWidth": "100" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  wggGXhZaC_default as default
};
