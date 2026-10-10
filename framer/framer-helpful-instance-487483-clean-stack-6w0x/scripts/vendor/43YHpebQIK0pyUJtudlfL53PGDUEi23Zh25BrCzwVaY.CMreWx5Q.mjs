import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  R as a,
  _ as o,
  b as s,
  j as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m,
} from "./react.iNMCLRE-.mjs";
import { a as h, k as g, r as ee, t as te } from "./motion.dK94hszq.mjs";
import {
  $ as _,
  A as ne,
  B as v,
  C as re,
  H as y,
  J as ie,
  P as b,
  Q as x,
  X as S,
  Z as ae,
  a as C,
  at as w,
  b as oe,
  c as T,
  et as se,
  f as E,
  g as D,
  i as O,
  k,
  nt as ce,
  o as A,
  q as j,
  tt as le,
  v as M,
  y as N,
} from "./framer.BNAppio8.mjs";
import { a as P, r as F } from "./paMgNvbm8.Cwioci5V.mjs";
import { n as ue, t as I } from "./DsFree.D__mpTpn.mjs";
import de, { t as fe } from "./44RYcVRsH6I-vhGiuX5R5aJSP04ykx90YDRk2blsdk0.DLXoLGtD.mjs";
function pe() {
  m(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = R), document.head.appendChild(e));
  }, []);
}
function me() {
  let e = _(),
    t = null;
  try {
    t = M.current();
  } catch {}
  return e || (t !== null && t !== M.preview);
}
function he() {
  let e = _(),
    [t, n] = o(!1);
  return (
    m(() => {
      !e && M.current() !== M.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ge(e, t) {
  let n = String(t || ``).toLowerCase(),
    [i, s] = o(n === `phone` ? 390 : n === `tablet` ? 810 : 1440),
    [c, l] = o(n === `phone` ? 844 : n === `tablet` ? 1080 : 900);
  return (
    r(() => {
      let t = e.current;
      if (!t) return;
      let n = new ResizeObserver(([e]) => {
        let n = Math.round(
          (e.borderBoxSize && e.borderBoxSize[0] ? e.borderBoxSize[0].inlineSize : 0) ||
            t.offsetWidth
        );
        n > 0 && s(n);
      });
      n.observe(t);
      let r = () => l(a.innerHeight);
      r();
      let i = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && s(e);
        },
        o = a.setTimeout(i, 150),
        c = a.setTimeout(i, 700),
        u = a.setTimeout(i, 1600);
      return (
        a.addEventListener(`resize`, r),
        a.addEventListener(`load`, i),
        () => {
          (n.disconnect(),
            a.clearTimeout(o),
            a.clearTimeout(c),
            a.clearTimeout(u),
            a.removeEventListener(`resize`, r),
            a.removeEventListener(`load`, i));
        }
      );
    }, []),
    { w: i, vh: c }
  );
}
function _e(e, t, n) {
  if (a === void 0) return () => {};
  let r = a;
  if (!r.__dsTick) {
    r.__dsTick = { pre: new Set(), subs: new Set(), reads: new Set(), raf: 0 };
    let e = (t) => {
      let n = r.__dsTick;
      (n.pre.forEach((e) => e(t)),
        n.reads.forEach((e) => e(t)),
        n.subs.forEach((e) => e(t)),
        (n.raf = requestAnimationFrame(e)));
    };
    r.__dsTick.raf = requestAnimationFrame(e);
  }
  return (
    r.__dsTick.subs.add(e),
    t && r.__dsTick.reads.add(t),
    n && r.__dsTick.pre.add(n),
    () => {
      (r.__dsTick.subs.delete(e), t && r.__dsTick.reads.delete(t), n && r.__dsTick.pre.delete(n));
    }
  );
}
function ve(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: U(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? H(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: U(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? H(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: U(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? H(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function ye(e, t) {
  m(() => {
    if (!t || !e.current || !a.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
    let n = e.current,
      r = () => Array.from(n.querySelectorAll(`[data-mag]`)),
      i = (e) => {
        for (let t of r()) {
          let n = t.getBoundingClientRect(),
            r = e.clientX - (n.left + n.width / 2),
            i = e.clientY - (n.top + n.height / 2),
            a = Math.hypot(r, i),
            o = a < 150 ? (1 - a / 150) * 9 : 0;
          (t.style.setProperty(`--mx`, `${(r / (a || 1)) * o}px`),
            t.style.setProperty(`--my`, `${(i / (a || 1)) * o}px`));
        }
      },
      o = () => {
        for (let e of r()) (e.style.setProperty(`--mx`, `0px`), e.style.setProperty(`--my`, `0px`));
      };
    return (
      n.addEventListener(`pointermove`, i),
      n.addEventListener(`pointerleave`, o),
      () => {
        (n.removeEventListener(`pointermove`, i), n.removeEventListener(`pointerleave`, o));
      }
    );
  }, [t]);
}
function be(e) {
  let [t, n] = o([]);
  return (
    m(() => {
      if (!e) return;
      n(q());
      let t = () => n(q());
      return (
        a.addEventListener(`ds-cart`, t),
        a.addEventListener(`storage`, t),
        () => {
          (a.removeEventListener(`ds-cart`, t), a.removeEventListener(`storage`, t));
        }
      );
    }, [e]),
    t
  );
}
function xe(e) {
  try {
    let t = new IntersectionObserver(
      (n) => {
        n[0].isIntersecting &&
          (t.disconnect(),
          e.querySelectorAll(`img`).forEach((e) => {
            try {
              ((e.loading = `eager`), e.decode().catch(() => {}));
            } catch {}
          }));
      },
      { rootMargin: `150% 0px 150% 0px` }
    );
    t.observe(e);
  } catch {}
}
function Se(e, t, n, r) {
  m(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      o = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    xe(i);
    let d = new IntersectionObserver(
      (e) => {
        o = e[0].isIntersecting;
      },
      { rootMargin: `25% 0px 25% 0px` }
    );
    d.observe(i);
    let f = 0,
      p = 0,
      m = 1,
      h = !1,
      g = _e(
        () => {
          if (!h) return;
          let e = W((m - f) / (m + p)),
            t = p > m * 1.05 ? W(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * Ue),
              (l += (t - l) * Ue),
              Math.abs(e - c) < 5e-4 && (c = e),
              Math.abs(t - l) < 5e-4 && (l = t)),
            (u = c === e && l === t),
            !(Math.abs(c + l - s) < 3e-4) &&
              ((s = c + l),
              i.style.setProperty(`--sp`, c.toFixed(4)),
              i.style.setProperty(`--pp`, l.toFixed(4)),
              r && r(c, l)));
        },
        () => {
          if (!o && u) {
            h = !1;
            return;
          }
          let e = i.getBoundingClientRect();
          ((f = e.top), (p = e.height), (m = a.innerHeight || 1), (h = !0));
        }
      );
    return () => {
      (g(), d.disconnect());
    };
  }, [t, n]);
}
function Ce(e) {
  let [t, n] = o(!1);
  return (
    m(() => {
      if (!e) return;
      let t = document.documentElement,
        r = () => !/(^|\s)ds-hold/.test(t.className);
      if (r()) {
        n(!0);
        return;
      }
      let i = new MutationObserver(() => {
        r() && (i.disconnect(), n(!0));
      });
      i.observe(t, { attributes: !0, attributeFilter: [`class`] });
      let o = a.setTimeout(() => {
        (i.disconnect(), n(!0));
      }, 9e3);
      return () => {
        (i.disconnect(), a.clearTimeout(o));
      };
    }, [e]),
    t
  );
}
function we(e) {
  if (typeof document > `u` || !document.querySelector(`[data-ds-row="bridge"]`)) return null;
  let t = new Set(),
    n = [];
  return (
    document.querySelectorAll(`[data-ds-row="${e}"]`).forEach((e) => {
      let r = {};
      for (let t of Array.from(e.attributes))
        t.name.startsWith(`data-`) && (r[t.name.slice(5)] = t.value);
      let i = r.slug || JSON.stringify(r);
      t.has(i) || (t.add(i), n.push(r));
    }),
    n.sort((e, t) => (parseFloat(e.n1) || 0) - (parseFloat(t.n1) || 0))
  );
}
function Te(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Ye(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Je] = 1));
      } catch {}
      let s = () => {
          let t = we(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        c = new MutationObserver(() => {
          s() && (o++, o > 2 && c.disconnect());
        });
      (c.observe(document.body, { childList: !0, subtree: !0 }), s() && o++);
      let l = () => {
        t++ < 30 && (s(), (n = a.setTimeout(l, 150)));
      };
      return (
        (n = a.setTimeout(l, 150)),
        () => {
          (c.disconnect(), a.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function Ee(e, t, n) {
  let r = Te(e, t),
    [i, s] = o(``);
  m(() => {
    try {
      s(decodeURIComponent(a.location.pathname.split(`/`).filter(Boolean).pop() || ``));
    } catch {}
  }, []);
  let c = String(n || ``).trim() || i;
  return { row: r.find((e) => e.slug === c) || r[0] || {}, rows: r };
}
function L(e) {
  let {
      slug: t = ``,
      title: n = ``,
      count: r = ``,
      blurb: i = ``,
      crumbHome: c = `Home`,
      crumbList: d = `Products`,
      listLink: f = `/products`,
      aisleLabel: p = `Aisle`,
      othersLabel: h = `Other aisles`,
      addLabel: g = `Add`,
      hoverLabel: ee = `Pick up`,
      emptyText: te = `Nothing on this shelf yet.`,
      productBase: _ = `/products/`,
      typeBase: ne = `/types/`,
      bpHint: v = `auto`,
    } = e,
    re = Ne(e),
    { D: y, B: ie, M: b } = ve(e);
  pe();
  let x = he(),
    S = Me(),
    ae = me(),
    C = s(null),
    { w } = ge(C, v);
  (ye(C, x), Se(C, x, S));
  let oe = Ce(x),
    [T, se] = o(!1);
  m(() => {
    if (!x || !oe) return;
    let e = a.setTimeout(() => se(!0), 100);
    return () => a.clearTimeout(e);
  }, [x, oe]);
  let E = T || ae || S,
    D = w < 810,
    O = w >= 810 && w < 1100,
    { row: k, rows: ce } = Ee(`types`, qe.types, t),
    A = Te(`products`, qe.products),
    j = { n: X(n, k.f1 || ``), c: X(r, k.f2 || ``), b: X(i, k.f3 || ``), img: De(e.cover, Z(k)) },
    le = String(k.f4 || ``)
      .split(`;`)
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean),
    M = A.filter((e) => le.includes(String(e.f2 || ``).toLowerCase())),
    N = Math.max(
      0,
      ce.findIndex((e) => e.slug === k.slug)
    ),
    P = ce.filter((e) => e.slug !== k.slug),
    F = be(x),
    ue = (e, t) => {
      (e.preventDefault(), e.stopPropagation(), Be(Ve(t)));
    },
    I = `ds ds-sec dstp${E ? ` is-in` : ``}${D ? ` is-ph` : O ? ` is-tab` : ``}${ae ? ` is-still` : ``}${S ? ` is-rm` : ``}`,
    de = (e, t) => {
      let n = String(e.f13 || `book`).toLowerCase(),
        [r, i, a] = Q[n] || Q.book,
        o = e.f12 || `#5B4BFF`;
      return l(
        `a`,
        {
          className: `dstp-card is-${n}`,
          href: `${_}${e.slug || ``}`,
          style: {
            ...Y(E, 500 + (t % 6) * 70, 26),
            "--w": `${r}px`,
            "--h": `${i}px`,
            "--d": `${a}px`,
            "--col": o,
            "--fg": Oe(o),
          },
          "aria-label": `${e.f1}, ${e.f2}, ${e.f3}${e.f4 ? `, was ` + e.f4 : ``}`,
          children: [
            l(`span`, {
              className: `dstp-stage`,
              "aria-hidden": !0,
              children: [
                l(`span`, {
                  className: `dstp-obj`,
                  children: [
                    l(`span`, {
                      className: `dstp-face f`,
                      children: [
                        u(`span`, {
                          className: `dstp-cov`,
                          children:
                            Z(e) &&
                            u(`img`, {
                              ...V(Z(e), `180px`),
                              alt: ``,
                              loading: `lazy`,
                              decoding: `async`,
                            }),
                        }),
                        l(`span`, {
                          className: `dstp-print`,
                          children: [
                            u(`b`, { style: y, children: e.f1 }),
                            u(`i`, { style: b, children: e.f2 }),
                          ],
                        }),
                        e.f9 && u(`span`, { className: `dstp-badge`, style: b, children: e.f9 }),
                        u(`span`, {
                          className: `dstp-bc`,
                          children: [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2].map((e, t) =>
                            u(`i`, { style: { width: e } }, t)
                          ),
                        }),
                      ],
                    }),
                    u(`span`, {
                      className: `dstp-face l`,
                      children: u(`b`, { style: y, children: e.f1 }),
                    }),
                    u(`span`, { className: `dstp-face t` }),
                    u(`span`, { className: `dstp-shadow` }),
                  ],
                }),
                l(`span`, {
                  className: `dstp-ptag`,
                  children: [
                    u(`span`, { className: `dstp-thole` }),
                    u(`b`, { style: y, children: e.f1 }),
                    u(`i`, { style: b, children: e.f5 }),
                    l(`span`, {
                      className: `dstp-pr`,
                      children: [
                        u(`em`, { style: y, children: e.f3 }),
                        e.f4 && u(`s`, { style: b, children: e.f4 }),
                        u(`button`, {
                          type: `button`,
                          tabIndex: -1,
                          className: `dstp-add`,
                          style: b,
                          onClick: (t) => ue(t, e),
                          children: g,
                        }),
                      ],
                    }),
                  ],
                }),
                u(`span`, { className: `dstp-hover`, style: b, children: ee }),
              ],
            }),
            l(`span`, {
              className: `dstp-cap`,
              children: [
                l(`span`, {
                  children: [
                    u(`b`, { style: y, children: e.f1 }),
                    l(`small`, { style: b, children: [e.f2, e.f5 ? ` \xb7 ${e.f5}` : ``] }),
                  ],
                }),
                u(`em`, { style: y, children: e.f3 }),
              ],
            }),
          ],
        },
        e.slug || t
      );
    };
  return l(`section`, {
    ref: C,
    className: I,
    style: { ...Pe(re), ...ie, ...e.style },
    "aria-label": j.n,
    children: [
      u(`link`, { rel: `stylesheet`, href: R }),
      u(`style`, { dangerouslySetInnerHTML: { __html: Re + Ke + Xe } }),
      u(`div`, {
        className: `dstp-band ds-dark`,
        children: l(`div`, {
          className: `ds-wrap dstp-hero`,
          children: [
            l(`div`, {
              className: `dstp-copy`,
              children: [
                l(`nav`, {
                  className: `dstp-crumbs`,
                  "aria-label": `Breadcrumb`,
                  style: { ...b, ...Y(E, 0) },
                  children: [
                    u(`a`, { href: `/`, children: c }),
                    u(`i`, {}),
                    u(`a`, { href: f, children: d }),
                    u(`i`, {}),
                    u(`span`, { children: j.n }),
                  ],
                }),
                l(`p`, {
                  className: `dstp-eb`,
                  style: { ...b, ...Y(E, 80) },
                  children: [u(`i`, { "aria-hidden": !0 }), p, ` `, String(N + 1).padStart(2, `0`)],
                }),
                u(`h1`, { className: `dstp-h1`, style: { ...y, ...Y(E, 140) }, children: j.n }),
                u(`p`, { className: `dstp-count`, style: { ...b, ...Y(E, 200) }, children: j.c }),
                j.b && u(`p`, { className: `dstp-blurb`, style: Y(E, 260), children: j.b }),
                F.length > 0 &&
                  l(`button`, {
                    type: `button`,
                    className: `dstp-cart`,
                    style: b,
                    onClick: J,
                    children: [g, ` · `, u(`b`, { children: F.length })],
                  }),
              ],
            }),
            u(`div`, {
              className: `dstp-media`,
              children: u(Ge, {
                src: j.img,
                alt: ``,
                on: E,
                shape: `arch`,
                ratio: `4/5`,
                par: 1.1,
                radius: 0,
                sizes: `(max-width: 809px) 100vw, 40vw`,
                className: `dstp-um`,
                eager: !0,
              }),
            }),
          ],
        }),
      }),
      l(`div`, {
        className: `ds-wrap dstp-body`,
        children: [
          M.length
            ? u(`div`, { className: `dstp-grid`, children: M.map(de) })
            : u(`p`, { className: `dstp-empty`, style: y, children: te }),
          P.length > 0 &&
            l(`div`, {
              className: `dstp-others`,
              style: Y(E, 700),
              children: [
                u(`span`, { className: `dstp-ol`, style: b, children: h }),
                u(`div`, {
                  className: `dstp-chips`,
                  children: P.map((e, t) =>
                    l(
                      `a`,
                      {
                        className: `dstp-chip`,
                        href: `${ne}${e.slug || ``}`,
                        style: b,
                        children: [e.f1, u(`small`, { children: e.f2 }), u(He, { s: 12 })],
                      },
                      e.slug || t
                    )
                  ),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
var R,
  De,
  Oe,
  ke,
  z,
  B,
  V,
  Ae,
  H,
  je,
  U,
  Me,
  W,
  G,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  K,
  q,
  ze,
  J,
  Be,
  Ve,
  He,
  Ue,
  Y,
  We,
  Ge,
  Ke,
  qe,
  Je,
  X,
  Z,
  Ye,
  Q,
  Xe,
  Ze = e(() => {
    (i(),
      f(),
      p(),
      b(),
      (R = `../../styles/css2-a59a76.css`),
      (De = (e, t) =>
        e && typeof e == `object` && e.src
          ? String(e.src).split(`?`)[0]
          : typeof e == `string` && e.trim()
            ? e.trim().split(`?`)[0]
            : t),
      (Oe = (e) => {
        let t = String(e || ``)
          .replace(`#`, ``)
          .match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (!t) return `var(--ds-cloud)`;
        let [n, r, i] = [t[1], t[2], t[3]].map((e) => {
          let t = parseInt(e, 16) / 255;
          return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * n + 0.7152 * r + 0.0722 * i > 0.2 ? `var(--ds-ink)` : `var(--ds-cloud)`;
      }),
      (ke = `clamp(1280px, 92vw, 1520px)`),
      (z = [160, 320, 480, 800, 1200, 1600]),
      (B = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return z.find((e) => e >= i) || 1600;
      }),
      (V = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = B(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = B(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: z
              .filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (Ae = (e) => {
        if (!e) return ``;
        if (typeof e == `string`) return e.includes(`;`) ? `` : e;
        if (e.fontFamily && !String(e.fontFamily).includes(`;`)) return String(e.fontFamily);
        let t = String(e.fontSelector || ``);
        return t
          ? (t.split(`;`).pop() || ``)
              .replace(/-(regular|italic|bold|\d{3}(italic)?)$/i, ``)
              .replace(/-/g, ` `)
          : ``;
      }),
      (H = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (je = (e) => {
        let t = Ae(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (U = (e, t, n, r) => {
        let i = e ? je(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (Me = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (W = (e) => Math.min(1, Math.max(0, e))),
      (G = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Ne = (e) => ({
        bone: e.bone || G.bone,
        ink: e.ink || G.ink,
        brass: e.brass || G.brass,
        pine: e.pine || G.pine,
        fog: e.fog || G.fog,
        stone: e.stone || G.stone,
        cloud: e.cloud || G.cloud,
        night: e.night || G.night,
      })),
      (Pe = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Fe = {
        bone: { type: A.Color, title: `Paper`, defaultValue: G.bone },
        ink: { type: A.Color, title: `Ink`, defaultValue: G.ink },
        brass: { type: A.Color, title: `Accent`, defaultValue: G.brass },
        pine: { type: A.Color, title: `Deep`, defaultValue: G.pine },
        fog: { type: A.Color, title: `Line`, defaultValue: G.fog },
        stone: { type: A.Color, title: `Muted`, defaultValue: G.stone },
        cloud: { type: A.Color, title: `White`, defaultValue: G.cloud },
        night: { type: A.Color, title: `Dark`, defaultValue: G.night },
      }),
      (Ie = {
        customFonts: {
          type: A.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: A.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: A.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: A.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Le = {
        bpHint: {
          type: A.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Re = `
:where(.hk){position:relative;z-index:10} .hk,.ds *{box-sizing:border-box;min-width:0} .ds-sr{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important;padding:0!important;margin:-1px!important;border:0!important} :where(.hk) a{color:inherit} html,body{overflow-x:clip}
:where(a[href],button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"]),[role="button"]):focus-visible{outline:3px solid var(--ds-ink,#1D1830)!important;outline-offset:2px!important;box-shadow:0 0 0 2px var(--ds-bone,#EDE3D1)!important} :where(.ds-dark) :where(a[href],button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"])):focus-visible{outline-color:var(--ds-cloud,#FFFFFF)!important;box-shadow:0 0 0 2px var(--ds-night,#0F1113)!important} :where(.ds-inring) :where(a[href],button):focus-visible{outline-offset:-4px!important;box-shadow:none!important} :where(.hk) :is(input:not([type=range]):not([type=checkbox]):not([type=radio]),textarea,select):focus-visible{outline:2px solid var(--ds-ink,#17100C)!important;outline-offset:-2px!important;box-shadow:none!important} :where(.ds-dark) :is(input,textarea,select):focus-visible{outline-color:var(--ds-bone,#F3EBDD)!important} :where(.hk) textarea{resize:none} .ds-inring:focus-visible{outline-offset:-3px!important;box-shadow:none!important} html{scroll-padding-top:96px;scroll-padding-bottom:88px}
.ds-btn{position:relative;display:inline-flex;padding:0;min-height:50px;text-decoration:none;cursor:pointer;isolation:isolate;white-space:nowrap;font-size:14px;font-weight:700;letter-spacing:.01em;text-transform:none;border:0;color:var(--fg);filter:drop-shadow(0 6px 14px rgba(0,0,0,.18));transition:color .35s,transform .35s cubic-bezier(.34,1.56,.64,1)}
.ds-tag{position:relative;display:inline-flex;align-items:center;gap:12px;width:100%;min-height:inherit;padding:0 8px 0 30px;background:var(--face);overflow:hidden;isolation:isolate;clip-path:polygon(16px 0,100% 0,100% 100%,16px 100%,0 50%);transform-origin:8px 50%;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}
.ds-tag::after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1.5px var(--rim);clip-path:inherit}
.ds-hole{position:absolute;left:11px;top:50%;width:7px;height:7px;margin-top:-3.5px;border-radius:50%;background:var(--holefill);box-shadow:0 0 0 1.5px var(--rim2);z-index:2}
.ds-fill{position:absolute;z-index:-1;inset:0;background:var(--fill);clip-path:circle(0% at 14px 50%);transition:clip-path .6s cubic-bezier(.7,0,.2,1)}
.ds-btn:hover .ds-fill,.ds-btn:focus-visible .ds-fill{clip-path:circle(160% at 14px 50%)}
.ds-btn:hover .ds-tag,.ds-btn:focus-visible .ds-tag{animation:ds-swing .9s cubic-bezier(.34,1.56,.64,1) 1}
@keyframes ds-swing{0%{transform:rotate(0)}25%{transform:rotate(-4deg)}60%{transform:rotate(2.5deg)}100%{transform:rotate(0)}}
.ds-btn:hover,.ds-btn:focus-visible{color:var(--fg2)}
.ds-btn.ds-noarr .ds-tag{padding-right:26px}
.ds-port{width:7px;height:7px;flex:none;border-radius:50%;background:var(--ds-brass);animation:ds-blink 1.4s ease-in-out infinite}
@keyframes ds-blink{50%{opacity:.25}}
.ds-arr{display:grid;place-items:center;width:34px;height:34px;flex:none;background:var(--chip);color:var(--chipfg);transition:background .3s,color .3s,transform .5s cubic-bezier(.34,1.56,.64,1)} .ds-arr svg{width:14px;height:14px} .ds-btn:hover .ds-arr{transform:translateY(-2px) rotate(-8deg)}
.ds-lbl{position:relative;display:inline-block;height:1.2em;overflow:hidden;line-height:1.2} .ds-l1,.ds-l2{display:block;transition:translate .45s cubic-bezier(.7,0,.2,1)} .ds-btn:hover .ds-l1,.ds-btn:hover .ds-l2{translate:0 -100%}
.ds-btn.ds-solid{--face:var(--ds-brass);--rim:transparent;--rim2:color-mix(in srgb,var(--ds-ink) 35%,transparent);--holefill:var(--ds-bone);--fill:var(--ds-ink);--fg:var(--ds-ink);--fg2:var(--ds-cloud);--chip:var(--ds-ink);--chipfg:var(--ds-cloud);--sa:var(--ds-cloud);--sb:var(--ds-ink)}
.ds-btn.ds-solid:hover{--chip:var(--ds-brass);--chipfg:var(--ds-ink);--holefill:var(--ds-bone)}
.ds-btn.ds-ghost{--face:var(--ds-bone);--rim:color-mix(in srgb,var(--ds-ink) 28%,transparent);--rim2:color-mix(in srgb,var(--ds-ink) 35%,transparent);--holefill:var(--ds-bone);--fill:var(--ds-ink);--fg:var(--ds-ink);--fg2:var(--ds-cloud);--chip:var(--ds-ink);--chipfg:var(--ds-cloud);--sa:var(--ds-brass);--sb:var(--ds-ink)}
.ds-btn.ds-ghost:hover{--chip:var(--ds-brass);--chipfg:var(--ds-ink)}
.ds-btn.ds-quiet{--face:color-mix(in srgb,var(--ds-cloud) 10%,transparent);--rim:color-mix(in srgb,var(--ds-cloud) 34%,transparent);--rim2:color-mix(in srgb,var(--ds-cloud) 45%,transparent);--holefill:var(--ds-night);--fill:var(--ds-cloud);--fg:var(--ds-cloud);--fg2:var(--ds-ink);--chip:var(--ds-cloud);--chipfg:var(--ds-ink);--sa:var(--ds-ink);--sb:var(--ds-cloud)}
@media (max-width:600px),(hover:none){.ds .ds-btn{white-space:normal;text-align:left;line-height:1.25;min-height:50px;max-width:100%} .ds .ds-lbl{height:auto} .ds .ds-l2{display:none}}
.ds-btn:hover{transform:translate(var(--mx,0px),var(--my,0px))} .ds-btn:active{transform:translate(var(--mx,0px),var(--my,0px)) scale(.97)!important}
.ds-dark .ds-btn.ds-ghost{--face:color-mix(in srgb,var(--ds-cloud) 7%,transparent);--rim:color-mix(in srgb,var(--ds-cloud) 36%,transparent);--rim2:color-mix(in srgb,var(--ds-cloud) 45%,transparent);--holefill:var(--ds-night);--fill:var(--ds-cloud);--fg:var(--ds-cloud);--fg2:var(--ds-ink);--chip:var(--ds-cloud);--chipfg:var(--ds-ink);--sa:var(--ds-ink);--sb:var(--ds-cloud)} .ds-dark .ds-btn.ds-ghost:hover{--chip:var(--ds-brass);--chipfg:var(--ds-ink)}
.ds-dark .ds-btn.ds-solid{--fill:var(--ds-cloud);--fg2:var(--ds-ink);--sa:var(--ds-ink);--sb:var(--ds-cloud);--holefill:var(--ds-night)}
/* TEXT-SAFE accents: tangerine reads as large text on paper only — small accent text uses the darker --ds-acc; on walnut a lighter tangerine. */
.hk{--ds-acc:color-mix(in srgb,var(--ds-brass) 66%,var(--ds-ink));--ds-acc-lg:var(--ds-brass);--ds-mut:color-mix(in srgb,var(--ds-stone) 60%,var(--ds-ink));--ds-acc-d:color-mix(in srgb,var(--ds-brass) 80%,var(--ds-cloud))}
.ds-lt,.ds .ds-lt{--ds-acc:color-mix(in srgb,var(--ds-brass) 66%,var(--ds-ink));--ds-acc-lg:var(--ds-brass);--ds-mut:color-mix(in srgb,var(--ds-stone) 60%,var(--ds-ink))}
.ds-dark,.ds.ds-dark{--ds-acc:color-mix(in srgb,var(--ds-brass) 80%,var(--ds-cloud));--ds-acc-lg:color-mix(in srgb,var(--ds-brass) 85%,var(--ds-cloud));--ds-mut:color-mix(in srgb,var(--ds-stone) 55%,var(--ds-cloud))}
/* LED segment strip (status rows) */
.ds-bar{width:26px;height:10px;flex:none;display:inline-block;background:repeating-linear-gradient(90deg,currentColor 0 1px,transparent 1px 3px,currentColor 3px 5px,transparent 5px 6px,currentColor 6px 7px,transparent 7px 9px,currentColor 9px 10px,transparent 10px 12px)}
@media (prefers-reduced-motion:reduce){.ds *,.sth *{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.dscs-next:focus-visible,.dspo-next:focus-visible,.dsw-row a:focus-visible,.dso-band:focus-visible,.dso-mq a:focus-visible{outline-offset:-4px!important;box-shadow:none!important}`),
      (K = `ds-cart`),
      (q = () => {
        try {
          let e = JSON.parse(localStorage.getItem(K) || `[]`);
          return Array.isArray(e) ? e : [];
        } catch {
          return [];
        }
      }),
      (ze = (e) => {
        try {
          localStorage.setItem(K, JSON.stringify(e));
        } catch {}
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart`, { detail: { items: e } }));
        } catch {}
      }),
      (J = () => {
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart-open`));
        } catch {}
      }),
      (Be = (e, t = !0) => {
        if (a === void 0 || !e.slug) return;
        let n = q();
        (n.find((t) => t.slug === e.slug) || n.push(e), ze(n), t && J());
      }),
      (Ve = (e) => ({
        slug: e.slug || ``,
        name: e.f1 || ``,
        price: e.f3 || ``,
        kind: e.f2 || ``,
        cover: String(e.img || ``).split(`?`)[0],
        href: `/products/${e.slug || ``}`,
      })),
      (He = ({ s: e = 15 }) =>
        u(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: u(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      (Ue = 0.18),
      A.Boolean,
      A.Number,
      (Y = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (We = {
        up: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`],
        down: [`inset(0 0 100% 0)`, `inset(0 0 0 0)`],
        left: [`inset(0 100% 0 0)`, `inset(0 0 0 0)`],
        right: [`inset(0 0 0 100%)`, `inset(0 0 0 0)`],
        diag: [`polygon(0 100%,0 100%,0 100%,0 100%)`, `polygon(0 -160%,260% 100%,0 100%,0 100%)`],
        iris: [`circle(0% at 50% 55%)`, `circle(85% at 50% 55%)`],
        arch: [`inset(100% 0 0 0 round 999px 999px 0 0)`, `inset(0 0 0 0 round 999px 999px 0 0)`],
        slit: [`inset(0 50% 0 50%)`, `inset(0 0 0 0)`],
      }),
      (Ge = ({
        src: e,
        alt: t = ``,
        on: n,
        shape: r = `up`,
        ratio: i = `4/5`,
        delay: a = 0,
        par: o = 1,
        focus: s = `50% 40%`,
        radius: c = 4,
        sizes: l = `(max-width: 809px) 100vw, 50vw`,
        style: d,
        className: f,
        eager: p = !1,
      }) => {
        let m = We[r] || We.up,
          h = V(e, l);
        return u(`div`, {
          className: `ds-um${n ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          style: {
            aspectRatio: i,
            borderRadius: c,
            clipPath: n ? m[1] : m[0],
            WebkitClipPath: n ? m[1] : m[0],
            transitionDelay: `${a}ms`,
            "--par": o,
            ...(d || {}),
          },
          children: u(`img`, {
            src: h.src,
            srcSet: h.srcSet,
            sizes: h.sizes,
            alt: t,
            loading: p ? `eager` : `lazy`,
            decoding: `async`,
            draggable: !1,
            style: { objectPosition: s, transitionDelay: `${a}ms` },
          }),
        });
      }),
      (Ke = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${ke} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
.ds-eb{display:inline-flex;align-items:center;gap:10px;width:max-content;max-width:100%;margin:0;padding:0;background:none;color:var(--ds-ink);font-size:11.5px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;opacity:0;translate:0 10px;transition:opacity .8s ease,translate .9s cubic-bezier(.2,.8,.2,1)} .ds-eb.is-on{opacity:1;translate:0 0} .ds-eb::before{content:"[";opacity:.5} .ds-eb::after{content:"]";opacity:.5}
.ds-eb i{width:7px;height:7px;display:block;flex:none;background:var(--ds-brass);order:-1;margin-right:2px}
.ds-dark .ds-eb{color:var(--ds-cloud)}
.ds-hd{margin:0;letter-spacing:.005em;text-wrap:balance;text-transform:uppercase;font-weight:400!important} .ds-hd-l{display:block}
.ds-hd-w{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .05em .17em;margin:0 -.05em -.17em;white-space:pre}
.ds-hd-i{position:relative;display:inline-block;translate:0 108%;transition:translate 1s cubic-bezier(.2,.75,.2,1)}
.ds-hd.is-on .ds-hd-i{translate:0 0}
.ds-hd-w.is-accw{overflow:visible;clip-path:inset(-.6em -.6em .02em -.2em)}
.ds-it{position:relative;color:var(--ds-acc-lg)} .ds-dark .ds-it{color:var(--ds-brass)}
.ds-spark{display:none}

.ds-um{position:relative;overflow:hidden;transition:clip-path 1.35s cubic-bezier(.7,0,.2,1);background:color-mix(in srgb,var(--ds-stone) 22%,transparent)}
.ds-um img{position:absolute;left:0;top:-9%;width:100%;height:118%;display:block;object-fit:cover;scale:1.28;translate:0 calc((var(--sp,.5) - .5)*var(--par,1)*-7%);transition:scale 1.9s cubic-bezier(.16,.84,.24,1);user-select:none}
.ds-um.is-on img{scale:1}
/* diagonal cuts: the section hangs over its neighbour and is cut on a slope (clip-path, so the neighbour shows through) */
.ds-cut-t{margin-top:calc(var(--cut,7vw)*-1);clip-path:polygon(0 var(--cut,7vw),100% 0,100% 100%,0 100%);padding-top:var(--cut,7vw)}
.ds-cut-b{margin-bottom:calc(var(--cut,7vw)*-1);padding-bottom:var(--cut,7vw)}
.ds-cut-t.ds-cut-b{clip-path:polygon(0 var(--cut,7vw),100% 0,100% calc(100% - var(--cut,7vw)),0 100%)}
.ds-cut-b:not(.ds-cut-t){clip-path:polygon(0 0,100% 0,100% calc(100% - var(--cut,7vw)),0 100%)}
@media (max-width:1099px){.ds-wrap{--pad:32px}}
@media (max-width:699px){.ds-wrap{--pad:20px}}
@media (prefers-reduced-motion:reduce){.ds-hd-i{translate:0 0!important} .ds-spark{scale:1!important;rotate:0deg!important;animation:none!important} .ds-um{clip-path:none!important} .ds-um img{scale:1!important;translate:0 0!important}}
`),
      (qe = {
        site: [
          {
            slug: `site`,
            f1: `Shelfline`,
            f2: `Creator store`,
            f3: `Templates, ebooks, presets and courses by one studio, sold from one shelf. Instant download, lifetime updates.`,
            f4: `hello@shelfline.co`,
            f5: ``,
            f6: `Lisbon`,
            f7: `Europe/Lisbon`,
            f8: `/free`,
            f9: `X:https://x.com,Instagram:https://instagram.com,YouTube:https://youtube.com,Threads:https://threads.net`,
            f10: `Autumn bundle: 4 products for $79 until Oct 5`,
            f11: ``,
            f12: ``,
            f13: ``,
            n1: `1`,
          },
        ],
        products: [
          {
            slug: `figma-ui-kit`,
            f1: `Aurora UI Kit`,
            f2: `UI kit`,
            f3: `$49`,
            f4: `$79`,
            f5: `Figma · 320 components`,
            f6: `A dark-first product UI kit with 320 components, 40 screens and a token system that swaps in one click.`,
            f7: `320 components;40 finished screens;Colour + type tokens;Auto-layout everywhere;Free updates`,
            f8: `/checkout?product=figma-ui-kit`,
            f9: `Bestseller`,
            f10: `2,140 sold`,
            f11: `4.9`,
            f12: `#5B4BFF`,
            f13: `kit`,
            img: `https://framerusercontent.com/images/FMCKS6vZzYYsMTZ7E94PJ6hbVP0.webp`,
            n1: `1`,
          },
          {
            slug: `pricing-playbook`,
            f1: `The Pricing Playbook`,
            f2: `Ebook`,
            f3: `$29`,
            f4: ``,
            f5: `PDF + EPUB · 212 pages`,
            f6: `How to price digital products without guessing: 14 tested price ladders, the maths behind bundles and the emails that sold them.`,
            f7: `212 pages;14 price ladders;Bundle calculator sheet;Email swipe file`,
            f8: `/checkout?product=pricing-playbook`,
            f9: `New`,
            f10: `860 sold`,
            f11: `4.8`,
            f12: `#FF6A2B`,
            f13: `book`,
            img: `https://framerusercontent.com/images/rjS1i3AIxe5To4K3Imy1L0JVMQ8.webp`,
            n1: `2`,
          },
          {
            slug: `film-presets`,
            f1: `Film Look Presets`,
            f2: `Preset pack`,
            f3: `$24`,
            f4: `$39`,
            f5: `Lightroom + Camera Raw · 40 presets`,
            f6: `Forty presets built from real film stock scans: Portra warmth, Tri-X grain and two clean commercial looks.`,
            f7: `40 presets;Mobile + desktop;Before/after gallery;Install guide`,
            f8: `/checkout?product=film-presets`,
            f9: ``,
            f10: `3,410 sold`,
            f11: `4.9`,
            f12: `#2E6B5A`,
            f13: `tin`,
            img: `https://framerusercontent.com/images/JFsvHcnPMNXuRO44fhSUbQXbM.webp`,
            n1: `3`,
          },
          {
            slug: `launch-course`,
            f1: `Launch in 30 Days`,
            f2: `Course`,
            f3: `$149`,
            f4: `$199`,
            f5: `14 lessons · 6 h 20 min`,
            f6: `A day-by-day course that takes a product from idea to first sale: positioning, the page, the price, the launch emails.`,
            f7: `14 video lessons;6 worksheets;Launch email templates;Private community`,
            f8: `/checkout?product=launch-course`,
            f9: `Bestseller`,
            f10: `1,280 students`,
            f11: `5.0`,
            f12: `#1B2A6B`,
            f13: `box`,
            img: `https://framerusercontent.com/images/1l4w12Eo8dKpSAn3W1KGfIEsfAc.webp`,
            n1: `4`,
          },
          {
            slug: `notion-studio-os`,
            f1: `Studio OS for Notion`,
            f2: `Notion template`,
            f3: `$39`,
            f4: ``,
            f5: `Notion · 12 databases`,
            f6: `Clients, projects, invoices and content in one Notion workspace, with dashboards that read from every table.`,
            f7: `12 linked databases;5 dashboards;Client portal page;Video walkthrough`,
            f8: `/checkout?product=notion-studio-os`,
            f9: ``,
            f10: `1,920 sold`,
            f11: `4.8`,
            f12: `#111111`,
            f13: `notebook`,
            img: `https://framerusercontent.com/images/buLqBiEuvi3rUfG8vTFqfMlevTI.webp`,
            n1: `5`,
          },
          {
            slug: `brand-fonts`,
            f1: `Ledger Sans`,
            f2: `Font`,
            f3: `$59`,
            f4: ``,
            f5: `OTF + WOFF2 · 8 weights`,
            f6: `A quiet grotesk with a mono sibling, eight weights, tabular numbers and a desktop + web licence in one price.`,
            f7: `8 weights + italics;Mono sibling;Desktop + web licence;Variable file`,
            f8: `/checkout?product=brand-fonts`,
            f9: `New`,
            f10: `540 sold`,
            f11: `4.7`,
            f12: `#C9B79C`,
            f13: `folder`,
            img: `https://framerusercontent.com/images/T8p6CmZKZX9AL48UOBtfUFkRmU.webp`,
            n1: `6`,
          },
          {
            slug: `canva-social-kit`,
            f1: `Social Kit for Canva`,
            f2: `Template pack`,
            f3: `$19`,
            f4: `$29`,
            f5: `Canva · 180 templates`,
            f6: `Posts, stories, carousels and covers in one editable Canva kit, with a colour system that changes everything at once.`,
            f7: `180 templates;9:16, 4:5, 1:1;Colour + font system;Monthly additions`,
            f8: `/checkout?product=canva-social-kit`,
            f9: ``,
            f10: `4,050 sold`,
            f11: `4.8`,
            f12: `#FFC83D`,
            f13: `cards`,
            img: `https://framerusercontent.com/images/oClZkOJd7UXQOXNMLLeqKUBBjZk.webp`,
            n1: `7`,
          },
          {
            slug: `email-swipes`,
            f1: `100 Launch Emails`,
            f2: `Guide`,
            f3: `$19`,
            f4: ``,
            f5: `PDF + Notion · 100 emails`,
            f6: `The exact emails behind eleven launches, sorted by day, with the numbers each one made.`,
            f7: `100 emails;Sorted by launch day;Subject line bank;Notion database`,
            f8: `/checkout?product=email-swipes`,
            f9: ``,
            f10: `2,760 sold`,
            f11: `4.9`,
            f12: `#E9573F`,
            f13: `book`,
            img: `https://framerusercontent.com/images/laJnW6OsrSCp9UzASb4LjDkze8.webp`,
            n1: `8`,
          },
          {
            slug: `icon-set`,
            f1: `Outline Icons 1.0`,
            f2: `Icon set`,
            f3: `$34`,
            f4: `$49`,
            f5: `SVG + Figma · 1,200 icons`,
            f6: `Twelve hundred outline icons on a 24 px grid, matched strokes, every one a component in Figma.`,
            f7: `1,200 icons;24 px grid;Figma components;SVG + React`,
            f8: `/checkout?product=icon-set`,
            f9: ``,
            f10: `1,110 sold`,
            f11: `4.8`,
            f12: `#0F8B8D`,
            f13: `tin`,
            img: `https://framerusercontent.com/images/2Ks15Xzbhh8HfcYecsBUI3Dzhvo.webp`,
            n1: `9`,
          },
        ],
        types: [
          {
            slug: `templates`,
            f1: `Templates`,
            f2: `24 products`,
            f3: `Notion, Canva and Figma templates that swap colours and fonts in one place.`,
            f4: `Template pack;Notion template;UI kit`,
            img: `https://framerusercontent.com/images/xF4ZWJhwOlDmKnEJ7o38BRVftmM.webp`,
            n1: `1`,
          },
          {
            slug: `ebooks`,
            f1: `Ebooks & guides`,
            f2: `11 products`,
            f3: `Short, worked-example books: pricing, launches, the emails behind them.`,
            f4: `Ebook;Guide`,
            img: `https://framerusercontent.com/images/BD9yLWb5qMKb4v02bMykF61kRj4.webp`,
            n1: `2`,
          },
          {
            slug: `presets`,
            f1: `Presets & LUTs`,
            f2: `9 products`,
            f3: `Film-stock looks for Lightroom, Camera Raw and DaVinci, with install guides.`,
            f4: `Preset pack`,
            img: `https://framerusercontent.com/images/fk512pFY41jFysKn4vzr4WuciX4.webp`,
            n1: `3`,
          },
          {
            slug: `courses`,
            f1: `Courses`,
            f2: `4 products`,
            f3: `Day-by-day video courses with worksheets and a private community.`,
            f4: `Course`,
            img: `https://framerusercontent.com/images/FKWCPeLHSzmJzDoLjxPFBS87d8I.webp`,
            n1: `4`,
          },
          {
            slug: `fonts`,
            f1: `Fonts`,
            f2: `6 products`,
            f3: `Quiet grotesks and mono siblings, desktop + web licence in one price.`,
            f4: `Font`,
            img: `https://framerusercontent.com/images/SiQAgSaYyCaWF8j6NDZdMD0gOw.webp`,
            n1: `5`,
          },
          {
            slug: `icons`,
            f1: `Icons & assets`,
            f2: `7 products`,
            f3: `Icon sets, illustration packs and mockups, every one a component.`,
            f4: `Icon set`,
            img: `https://framerusercontent.com/images/eVvUGROnovaUQGYRG5m3DFNo.webp`,
            n1: `6`,
          },
        ],
      }),
      (Je = `DsTypePage@cms1`),
      (X = (e, t) => (e != null && String(e).trim() ? String(e).trim() : t)),
      (Z = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Ye = a === void 0 ? m : r),
      (Q = {
        book: [130, 182, 24],
        box: [140, 164, 46],
        tin: [124, 124, 70],
        folder: [156, 118, 16],
        notebook: [128, 174, 18],
        cards: [138, 138, 28],
        kit: [166, 114, 32],
      }),
      (Xe = `
.dstp{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:0 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dstp-band{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:calc(72px + clamp(24px,3vw,48px)) 0 0;overflow:hidden}
.dstp-band::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 60% at 20% 30%,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),transparent 70%),repeating-linear-gradient(90deg,transparent 0 118px,color-mix(in srgb,var(--ds-cloud) 3%,transparent) 118px 119px);pointer-events:none}
.dstp-hero{position:relative;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(30px,5vw,80px);align-items:end}
.dstp-copy{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding-bottom:clamp(40px,5vw,72px)}
.dstp-crumbs{display:flex;align-items:center;gap:10px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dstp-crumbs a{text-decoration:none;color:inherit;transition:color .3s} .dstp-crumbs a:hover{color:var(--ds-brass)} .dstp-crumbs i{width:4px;height:4px;border-radius:50%;background:var(--ds-brass)} .dstp-crumbs span{color:var(--ds-bone)}
.dstp-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dstp-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dstp-h1{margin:0;font-size:clamp(44px,6vw,92px);line-height:.94;letter-spacing:-.035em;font-weight:800;text-wrap:balance}
.dstp-count{margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)}
.dstp-blurb{margin:0;max-width:520px;font-size:17px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dstp-cart{border:0;cursor:pointer;font:inherit;color:inherit;display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:999px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-cloud) 22%,transparent)} .dstp-cart b{font-weight:500;color:var(--ds-brass)}
.dstp-media{position:relative;align-self:end} .dstp-um{width:100%;translate:0 1px}
/* grid of objects */
.dstp-body{position:relative;padding-top:clamp(50px,6vw,90px)}
.dstp-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px 26px;perspective:1600px}
.dstp-empty{margin:40px 0;font-size:28px;font-weight:800;letter-spacing:-.03em;color:var(--ds-mut)}
.dstp-card{position:relative;display:flex;flex-direction:column;gap:14px;text-decoration:none;color:var(--ds-ink);isolation:isolate}
.dstp-stage{position:relative;display:grid;place-items:end center;height:calc(var(--h) + 90px);padding-bottom:16px;border-radius:12px;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-cloud) 60%,transparent),color-mix(in srgb,var(--ds-fog) 50%,transparent));perspective:1200px;transform-style:preserve-3d}
.dstp-stage::after{content:"";position:absolute;left:8%;right:8%;bottom:14px;height:6px;border-radius:3px;background:color-mix(in srgb,var(--ds-pine) 80%,var(--ds-night));box-shadow:0 10px 24px -8px rgba(0,0,0,.5)}
.dstp-obj{position:relative;z-index:2;width:var(--w);height:var(--h);transform-style:preserve-3d;transform:rotateX(6deg) rotateY(-16deg);transition:transform .6s cubic-bezier(.34,1.56,.64,1);color:var(--fg)}
.dstp-card:hover .dstp-obj,.dstp-card:focus-visible .dstp-obj{transform:rotateX(4deg) rotateY(-22deg) translate3d(0,-14px,50px)}
.dstp-face{position:absolute;left:50%;top:50%;translate:-50% -50%;width:var(--w);height:var(--h);background:var(--col);backface-visibility:hidden}
.dstp-face.f{transform:translateZ(calc(var(--d)/2));overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:12px;border-radius:2px 6px 6px 2px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.dstp-face.f::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,color-mix(in srgb,var(--col) 70%,#000) 100%)}
.dstp-face.l{width:var(--d);transform:rotateY(-90deg) translateZ(calc(var(--w)/2));background:color-mix(in srgb,var(--col) 62%,#000);display:flex;align-items:center;justify-content:center;overflow:hidden} .dstp-face.l b{writing-mode:vertical-rl;transform:rotate(180deg);font-size:9.5px;letter-spacing:.06em;white-space:nowrap;color:var(--fg);opacity:.85;max-height:90%;overflow:hidden}
.dstp-face.t{height:var(--d);transform:rotateX(90deg) translateZ(calc(var(--h)/2));background:color-mix(in srgb,var(--col) 82%,#fff)}
.dstp-cov{position:absolute;inset:0;opacity:.55;mix-blend-mode:luminosity} .dstp-cov img{width:100%;height:100%;object-fit:cover;display:block}
.dstp-print{position:relative;display:flex;flex-direction:column;gap:3px} .dstp-print b{font-size:14px;line-height:1.05;font-weight:800;letter-spacing:-.01em;text-wrap:balance} .dstp-print i{font-style:normal;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75}
.dstp-badge{position:absolute;top:10px;left:-4px;padding:3px 7px;background:var(--ds-brass);color:var(--ds-ink);font-size:8px;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg;border-radius:2px}
.dstp-bc{position:absolute;right:10px;top:10px;display:flex;gap:1px;height:10px;opacity:.5} .dstp-bc i{display:block;height:100%;background:var(--fg)}
.dstp-shadow{position:absolute;left:-6%;right:-6%;bottom:-2px;height:14px;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.5),transparent 70%);transform:rotateX(90deg) translateZ(-4px);transform-origin:50% 100%;pointer-events:none}
.dstp-card.is-book .dstp-face.f{border-left:3px solid color-mix(in srgb,var(--col) 55%,#000)} .dstp-card.is-notebook .dstp-face.f{border-left:6px double color-mix(in srgb,var(--col) 55%,#000)}
.dstp-card.is-tin .dstp-face.f{border-radius:50% 50% 6px 6px/16% 16% 6px 6px;justify-content:center;border:4px solid color-mix(in srgb,var(--col) 35%,#fff)} .dstp-card.is-tin .dstp-print{align-items:center;text-align:center} .dstp-card.is-tin .dstp-face.t{background:linear-gradient(90deg,#8A8A90,#E8E8EC 50%,#8A8A90)}
.dstp-card.is-folder .dstp-face.f{border-radius:8px 4px 4px 4px} .dstp-card.is-folder .dstp-face.f::after{content:"";position:absolute;left:0;top:0;width:44%;height:14px;background:color-mix(in srgb,var(--col) 82%,#fff);border-radius:0 6px 0 0}
.dstp-card.is-cards .dstp-face.f{box-shadow:4px 4px 0 -1px color-mix(in srgb,var(--col) 60%,#000),8px 8px 0 -2px color-mix(in srgb,var(--col) 40%,#000)}
.dstp-card.is-box .dstp-face.f::after{content:"";position:absolute;left:0;right:0;top:34%;height:1px;background:rgba(0,0,0,.35)}
.dstp-ptag{position:absolute;right:6%;top:10%;z-index:6;width:168px;padding:12px 14px 12px 22px;background:var(--ds-bone);color:var(--ds-ink);display:flex;flex-direction:column;gap:3px;transform-origin:8px 8px;clip-path:polygon(14px 0,100% 0,100% 100%,14px 100%,0 12px);opacity:0;transform:rotate(-16deg) translateY(10px) scale(.92);transition:opacity .25s,transform .5s cubic-bezier(.34,1.56,.64,1);pointer-events:none;box-shadow:0 14px 30px -10px rgba(0,0,0,.5)}
.dstp-card:hover .dstp-ptag,.dstp-card:focus-visible .dstp-ptag{opacity:1;transform:rotate(0) translateY(0) scale(1);pointer-events:auto;animation:dstp-sw .9s cubic-bezier(.34,1.56,.64,1) 1}
@keyframes dstp-sw{0%{rotate:-14deg}45%{rotate:5deg}100%{rotate:0deg}}
.dstp-thole{position:absolute;left:7px;top:6px;width:6px;height:6px;border-radius:50%;background:var(--ds-night);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 30%,transparent)}
.dstp-ptag b{font-size:13px;line-height:1.1;font-weight:800;letter-spacing:-.01em} .dstp-ptag i{font-style:normal;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-ink) 65%,transparent)}
.dstp-pr{display:flex;align-items:center;gap:8px;margin-top:4px} .dstp-pr em{font-style:normal;font-size:17px;font-weight:800} .dstp-pr s{font-size:10px;color:color-mix(in srgb,var(--ds-ink) 55%,transparent)}
.dstp-add{margin-left:auto;padding:6px 10px;border:0;border-radius:999px;background:var(--ds-brass);color:var(--ds-ink);font-size:10px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .3s} .dstp-add:hover{transform:scale(1.08);background:var(--ds-ink);color:var(--ds-bone)}
.dstp-hover{position:absolute;left:14px;top:12px;padding:5px 10px;border-radius:999px;background:var(--ds-ink);color:var(--ds-bone);font-size:9px;letter-spacing:.12em;text-transform:uppercase;opacity:0;translate:0 -6px;transition:opacity .3s,translate .4s} .dstp-card:hover .dstp-hover{opacity:1;translate:0 0}
.dstp-cap{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding:0 4px} .dstp-cap b{display:block;font-size:17px;font-weight:800;letter-spacing:-.02em;line-height:1.1} .dstp-cap small{display:block;margin-top:4px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dstp-cap em{font-style:normal;font-size:17px;font-weight:800;color:var(--ds-acc);flex:none}
.dstp-card:focus-visible{outline-offset:6px!important}
/* other aisles */
.dstp-others{display:flex;flex-direction:column;gap:14px;margin-top:clamp(50px,6vw,90px);padding-top:22px;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dstp-ol{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)}
.dstp-chips{display:flex;flex-wrap:wrap;gap:10px}
.dstp-chip{display:inline-flex;align-items:center;gap:10px;padding:10px 14px 10px 16px;border-radius:999px;background:var(--ds-cloud);color:var(--ds-ink);text-decoration:none;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 16%,transparent);transition:background .3s,color .3s,transform .4s cubic-bezier(.34,1.56,.64,1)}
.dstp-chip small{font-size:9.5px;color:var(--ds-mut)} .dstp-chip svg{color:var(--ds-brass);transition:translate .3s} .dstp-chip:hover{background:var(--ds-ink);color:var(--ds-bone);transform:translateY(-2px)} .dstp-chip:hover small{color:var(--ds-brass)} .dstp-chip:hover svg{translate:3px 0}
/* tablet + phone */
.dstp.is-tab .dstp-hero{grid-template-columns:1fr;gap:20px} .dstp.is-tab .dstp-media{max-width:520px} .dstp.is-tab .dstp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.dstp.is-ph .dstp-hero{grid-template-columns:1fr;gap:16px} .dstp.is-ph .dstp-copy{padding-bottom:20px} .dstp.is-ph .dstp-h1{font-size:clamp(36px,11vw,48px)} .dstp.is-ph .dstp-grid{grid-template-columns:1fr;gap:26px} .dstp.is-ph .dstp-band{padding-top:calc(64px + 28px)} .dstp.is-tab .dstp-band{padding-top:calc(72px + 32px)}
.dstp.is-ph .dstp-obj{transform:rotateX(4deg) rotateY(-14deg)} .dstp.is-ph .dstp-ptag{opacity:1;transform:none;pointer-events:auto;animation:none;right:4%;top:6%;width:150px;padding:10px 12px 10px 20px} .dstp.is-ph .dstp-hover{display:none}
.dstp.is-rm .dstp-obj,.dstp.is-rm .dstp-ptag{transition:none;animation:none}
@media (prefers-reduced-motion:reduce){.dstp-obj{transition:none} .dstp-ptag{animation:none!important}}`),
      oe(L, {
        ...Le,
        slug: {
          type: A.String,
          title: `Slug`,
          description: `Bind to the Types slug on the CMS page`,
          defaultValue: ``,
        },
        title: { type: A.String, title: `Name override`, defaultValue: `` },
        count: { type: A.String, title: `Count override`, defaultValue: `` },
        blurb: { type: A.String, title: `Blurb override`, displayTextArea: !0, defaultValue: `` },
        cover: { type: A.ResponsiveImage, title: `Cover override` },
        crumbHome: { type: A.String, title: `Crumb home`, defaultValue: `Home` },
        crumbList: { type: A.String, title: `Crumb list`, defaultValue: `Products` },
        listLink: { type: A.Link, title: `List link`, defaultValue: `/products` },
        aisleLabel: { type: A.String, title: `Aisle label`, defaultValue: `Aisle` },
        othersLabel: { type: A.String, title: `Other aisles label`, defaultValue: `Other aisles` },
        addLabel: { type: A.String, title: `Add label`, defaultValue: `Add` },
        hoverLabel: { type: A.String, title: `Hover label`, defaultValue: `Pick up` },
        emptyText: {
          type: A.String,
          title: `Empty text`,
          defaultValue: `Nothing on this shelf yet.`,
        },
        productBase: { type: A.String, title: `Product link base`, defaultValue: `/products/` },
        typeBase: { type: A.String, title: `Aisle link base`, defaultValue: `/types/` },
        ...Fe,
        ...Ie,
      }));
  }),
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  $,
  lt;
e(() => {
  (f(),
    b(),
    te(),
    p(),
    ue(),
    Ze(),
    F(),
    fe(),
    (Qe = k(L)),
    ($e = k(I)),
    (et = {
      xbFghWKlF: `(min-width: 1200px)`,
      ye5RWMWvH: `(min-width: 810px) and (max-width: 1199.98px)`,
      yEKUw2rwz: `(max-width: 809.98px)`,
    }),
    (tt = []),
    (nt = `framer-bmIWl`),
    (rt = {
      xbFghWKlF: `framer-v-1mfs0fc`,
      ye5RWMWvH: `framer-v-oi48un`,
      yEKUw2rwz: `framer-v-2rra5r`,
    }),
    (it = (e, t, n) => (e && t ? `position` : n)),
    (at = { Desktop: `xbFghWKlF`, Phone: `yEKUw2rwz`, Tablet: `ye5RWMWvH` }),
    (ot = ({ value: e }) =>
      x()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (st = (e) => ({
      from: { alias: `Mtq3fVICC`, data: P, type: `Collection` },
      select: [{ collection: `Mtq3fVICC`, name: `AP6SQ8Q5U`, type: `Identifier` }],
      where: e,
    })),
    (ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: at[r.variant] ?? r.variant ?? `xbFghWKlF`,
    })),
    ($ = w(
      d(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: d, setLocale: f } = se();
        j();
        let p = ie(),
          [m] = ce(st(ne(p, `Mtq3fVICC`)));
        if (!m) throw new E(`No data matches path variables: ${JSON.stringify(p)}`);
        let {
          style: te,
          className: _,
          layoutId: v,
          variant: y,
          AP6SQ8Q5U: b = m.AP6SQ8Q5U ?? ``,
          ...x
        } = ct(e);
        le(c(() => de({}, d), [d]));
        let [w, oe] = ae(y, et, !1),
          k = re(nt),
          A = t(T)?.isLayoutTemplate,
          M = !!t(h)?.transition?.layout,
          N = it(A, M);
        return (
          S({}),
          u(T.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: at,
              primaryVariantId: `xbFghWKlF`,
              variantClassNames: rt,
            },
            children: l(ee, {
              id: v ?? o,
              children: [
                u(ot, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(g.div, {
                  ...x,
                  className: re(k, `framer-1mfs0fc`, _),
                  ref: a,
                  style: { ...te },
                  children: [
                    u(g.div, {
                      className: `framer-4v2yb1`,
                      "data-framer-name": `S0 DsTypePage`,
                      layout: N,
                      children: u(O, {
                        children: u(C, {
                          className: `framer-vstke3-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsTypePage`,
                          isAuthoredByUser: !0,
                          name: `DsTypePage`,
                          nodeId: `CQptymIg_`,
                          scopeId: `Mtq3fVICC`,
                          children: u(D, {
                            breakpoint: w,
                            overrides: {
                              ye5RWMWvH: { bpHint: `tablet` },
                              yEKUw2rwz: { bpHint: `phone` },
                            },
                            children: u(L, {
                              addLabel: `Add`,
                              aisleLabel: `Aisle`,
                              blurb: ``,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              count: ``,
                              crumbHome: `Home`,
                              crumbList: `Products`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              emptyText: `Nothing on this shelf yet.`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              hoverLabel: `Pick up`,
                              id: `CQptymIg_`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `CQptymIg_`,
                              listLink: `/products`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsTypePage`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              othersLabel: `Other aisles`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              productBase: `/products/`,
                              slug: b,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              title: ``,
                              typeBase: `/types/`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    u(g.div, {
                      className: `framer-12ozd49`,
                      "data-framer-name": `S1 DsFree`,
                      layout: N,
                      children: u(O, {
                        children: u(C, {
                          className: `framer-xqerku-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFree`,
                          isAuthoredByUser: !0,
                          name: `DsFree`,
                          nodeId: `Rr0B5RMi0`,
                          scopeId: `Mtq3fVICC`,
                          children: u(D, {
                            breakpoint: w,
                            overrides: {
                              ye5RWMWvH: { bpHint: `tablet` },
                              yEKUw2rwz: { bpHint: `phone` },
                            },
                            children: u(I, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bookKind: `Free guide`,
                              bookSub: `40 pages · PDF + EPUB`,
                              bookTitle: `Pricing Digital Products`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Send me the guide`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Free download`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              formAction: `/thank-you`,
                              freeLabel: `Free`,
                              heading: `The pricing guide,|*on the house.*`,
                              height: `100%`,
                              id: `Rr0B5RMi0`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `Rr0B5RMi0`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFree`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              note: `No spam. One email with the file.`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              placeholder: `you@studio.com`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Forty pages on pricing digital products: ladders, anchors, bundles and the emails that sold them. One email, the file, no drip.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-bmIWl.framer-17om7yu, .framer-bmIWl .framer-17om7yu { display: block; }`,
        `.framer-bmIWl.framer-1mfs0fc { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-bmIWl .framer-4v2yb1, .framer-bmIWl .framer-12ozd49 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bmIWl .framer-vstke3-container, .framer-bmIWl .framer-xqerku-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bmIWl.framer-1mfs0fc { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-bmIWl.framer-1mfs0fc { width: 390px; }}`,
      ],
      `framer-bmIWl`
    )),
    ($.displayName = `Aisle`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    N(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fragment Mono`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Qe,
        ...$e,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return y([() => v.get(st(ne(t.pathVariables, `Mtq3fVICC`)), n, r).preload()], t);
      },
    }),
    (lt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerMtq3fVICC`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `1080`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ye5RWMWvH":{"layout":["fixed","auto"]},"yEKUw2rwz":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { lt as __FramerMetadata__, $ as default, tt as queryParamNames };
//# sourceMappingURL=43YHpebQIK0pyUJtudlfL53PGDUEi23Zh25BrCzwVaY.CMreWx5Q.mjs.map
