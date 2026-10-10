import { a as m } from "./chunk-QFU6OGL3.mjs";
import { Ff as u, lf as l, rf as g } from "./chunk-EQXTYSGC.mjs";
import { c as a } from "./chunk-AYNVEX5D.mjs";
import { a as c } from "./chunk-2FCXHKEL.mjs";
import { a as y } from "./chunk-SWYZG2NI.mjs";
import { e as s } from "./chunk-WLHSDIGQ.mjs";
var o = s(y());
var f = "plyku67",
  d = "h1sx89rv",
  b = "wrexw9";
var w = s(c());
function F({ className: x, value: r, startFromZero: k, max: v = 1, tint: h, ...P }) {
  let n = (0, o.useRef)(null),
    e = g(k ? 0 : r),
    t = e.get();
  return (
    (0, o.useEffect)(() => {
      u(e, r, { type: "tween" });
    }, [r, e]),
    l(e, "change", (p) => {
      if (!a(p)) return;
      let i = n.current;
      i && (i.value = p);
    }),
    (0, w.jsx)("progress", {
      ref: n,
      className: m(f, r > 0 && d, h === "warning" && b, x),
      value: a(t) ? t : 0,
      max: v,
      ...P,
    })
  );
}
export { F as a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-WNINOZIC.mjs.map
