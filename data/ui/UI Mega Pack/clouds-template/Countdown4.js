var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/BIYlaMuJyN1sFoibyAH4/wCpyRG2AaE1Gw9oztyEw/Countdown.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { addPropertyControls, ControlType, useIsStaticRenderer } from "./_framer-runtime.js";
function remainingFrom(target, now) {
  const diff = target - now;
  if (diff <= 0)
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const total = Math.floor(diff / 1e3);
  return { expired: false, days: Math.floor(total / 86400), hours: Math.floor(total % 86400 / 3600), minutes: Math.floor(total % 3600 / 60), seconds: total % 60 };
}
function pad(value) {
  return value < 10 ? `0${value}` : String(value);
}
function Countdown(props) {
  const { targetDate, labels = { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }, numberFont, labelFont, numberColor, labelColor, separatorColor, showSeparators, gap, labelGap, expiredText, style } = props;
  const isStatic = useIsStaticRenderer();
  const target = useMemo(() => {
    const parsed = targetDate ? new Date(targetDate).getTime() : Number.NaN;
    return Number.isNaN(parsed) ? Date.now() : parsed;
  }, [targetDate]);
  const [time, setTime] = useState(() => remainingFrom(target, Date.now()));
  useEffect(() => {
    if (isStatic)
      return;
    setTime(remainingFrom(target, Date.now()));
    const id = __dai_window.setInterval(() => {
      setTime(remainingFrom(target, Date.now()));
    }, 1e3);
    return () => __dai_window.clearInterval(id);
  }, [target, isStatic]);
  const units = [{ value: String(time.days), label: labels.days }, { value: pad(time.hours), label: labels.hours }, { value: pad(time.minutes), label: labels.minutes }, { value: pad(time.seconds), label: labels.seconds }];
  const rootStyle = { ...style, position: "relative", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center", minWidth: "max-content", gap };
  if (time.expired && expiredText) {
    return /* @__PURE__ */ _jsx("div", { style: { ...rootStyle, ...numberFont, color: numberColor }, children: expiredText });
  }
  const separator = /* @__PURE__ */ _jsxs("div", { "aria-hidden": "true", style: { fontSize: numberFont?.fontSize, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.22em", height: "1em" }, children: [/* @__PURE__ */ _jsx("span", { style: { width: "0.1em", height: "0.1em", borderRadius: "50%", background: separatorColor } }), /* @__PURE__ */ _jsx("span", { style: { width: "0.1em", height: "0.1em", borderRadius: "50%", background: separatorColor } })] });
  return /* @__PURE__ */ _jsx("div", { style: rootStyle, role: "timer", "aria-live": "off", children: units.map((unit, index) => /* @__PURE__ */ _jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap }, children: [/* @__PURE__ */ _jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: labelGap }, children: [/* @__PURE__ */ _jsx("span", {
    // Server and client read the clock at different
    // moments, so the first paint legitimately differs.
    suppressHydrationWarning: true,
    style: { ...numberFont, color: numberColor, lineHeight: 1, fontVariantNumeric: "tabular-nums", fontFeatureSettings: '"tnum"' },
    children: unit.value
  }), /* @__PURE__ */ _jsx("span", { style: { ...labelFont, color: labelColor, lineHeight: 1 }, children: unit.label })] }), showSeparators && index < units.length - 1 ? separator : null] }, unit.label)) });
}
addPropertyControls(Countdown, { targetDate: { type: ControlType.Date, title: "Opens", displayTime: true, defaultValue: "2026-11-01T19:00:00.000Z" }, numberFont: { type: ControlType.Font, title: "Numbers", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: "64px", variant: "Light", letterSpacing: "-0.02em", lineHeight: "1em", textAlign: "center" } }, labelFont: { type: ControlType.Font, title: "Labels", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: "13px", variant: "Regular", letterSpacing: "0.02em", lineHeight: "1em", textAlign: "center" } }, numberColor: { type: ControlType.Color, title: "Number", defaultValue: "#FFFFFF" }, labelColor: { type: ControlType.Color, title: "Label", defaultValue: "rgba(255, 255, 255, 0.6)" }, separatorColor: { type: ControlType.Color, title: "Separator", defaultValue: "rgba(255, 255, 255, 0.4)", hidden: (props) => !props.showSeparators }, showSeparators: { type: ControlType.Boolean, title: "Separators", defaultValue: true }, gap: { type: ControlType.Number, title: "Gap", defaultValue: 28, min: 0, max: 120, step: 1, unit: "px" }, labelGap: { type: ControlType.Number, title: "Label Gap", defaultValue: 12, min: 0, max: 48, step: 1, unit: "px" }, labels: { type: ControlType.Object, title: "Labels", controls: { days: { type: ControlType.String, defaultValue: "Days" }, hours: { type: ControlType.String, defaultValue: "Hours" }, minutes: { type: ControlType.String, defaultValue: "Minutes" }, seconds: { type: ControlType.String, defaultValue: "Seconds" } }, defaultValue: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" } }, expiredText: { type: ControlType.String, title: "When Over", defaultValue: "Now open.", placeholder: "Leave empty to show zeros" } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Countdown", "slots": [], "annotations": { "framerIntrinsicHeight": "110", "framerContractVersion": "1", "framerIntrinsicWidth": "520", "framerSupportedLayoutHeight": "auto", "framerSupportedLayoutWidth": "auto" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Countdown as default
};
