import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  R as a,
  _ as o,
  b as s,
  c,
  j as l,
  l as u,
  o as d,
  p as f,
  s as p,
  w as m,
  y as h,
} from "./react.iNMCLRE-.mjs";
import { a as g, k as _, r as v, t as y } from "./motion.dK94hszq.mjs";
import {
  $ as b,
  C as x,
  P as S,
  Q as C,
  X as w,
  Z as T,
  a as E,
  at as D,
  b as O,
  c as k,
  et as A,
  g as j,
  i as M,
  k as N,
  o as P,
  q as ee,
  tt as te,
  v as F,
  y as ne,
} from "./framer.BNAppio8.mjs";
import { n as re, t as ie } from "./DsCourse.BKvnXIHp.mjs";
import { n as I, t as L } from "./DsCta.iOw7KJfv.mjs";
import { n as ae, t as R } from "./DsFaq.BS2R3ms-.mjs";
import { n as z, t as B } from "./DsFree.D__mpTpn.mjs";
import { n as oe, t as V } from "./DsNotes.C-HWWnLQ.mjs";
import { n as se, t as ce } from "./DsReviews.Do5b3KPj.mjs";
import le, { t as ue } from "./E3gtImCEo-ExWBxhMxBMFYipNA6NIiB8cWtpbx4QUPc.DAlG-DPs.mjs";
function de() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Se), document.head.appendChild(e));
  }, []);
}
function H() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function fe() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function pe(e, t) {
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
function me(e, t, n) {
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
function he(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: Ae(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Oe(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: Ae(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Oe(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: Ae(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? Oe(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function ge(e, t) {
  h(() => {
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
function _e(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function ve(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = H(),
    l = _e(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = me(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function ye(e) {
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
function be(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Ye(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[qe] = 1));
      } catch {}
      let s = () => {
          let t = ye(e);
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
function xe(e) {
  let {
      eyebrow: t = `Bundles`,
      heading: n = `Buy the shelf,|*not the item.*`,
      subCopy: r = `Three sets that go together. The maths is on the receipt.`,
      subtotalLabel: i = `Subtotal`,
      bundleLabel: a = `Bundle price`,
      totalLabel: o = `You pay`,
      saveLabel: c = `You save`,
      allLabel: l = `All bundles`,
      allLink: f = `/bundles`,
      bpHint: p = `auto`,
    } = e,
    m = Ne(e),
    { D: g, B: _, M: v } = he(e);
  de();
  let y = fe(),
    b = je(),
    x = H(),
    S = s(null),
    C = s(null),
    { w } = pe(S, p),
    T = ve(S, y, b, 0.08);
  ge(S, y);
  let E = w < 810,
    D = w >= 810 && w < 1100,
    O = be(`bundles`, Ke.bundles),
    k = be(`products`, Ke.products),
    A = (e) => k.find((t) => t.slug === e.trim());
  return (
    h(() => {
      if (!y || b || E || !C.current) return;
      let e = Array.from(C.current.querySelectorAll(`.dsb-card`)),
        t = !0,
        n = !1,
        r = [],
        i = new IntersectionObserver(
          (e) => {
            t = e[0].isIntersecting;
          },
          { rootMargin: `30% 0px 30% 0px` }
        );
      i.observe(C.current);
      let a = me(
        () => {
          if (n)
            for (let t = 0; t < e.length - 1; t++) {
              let n = e[t].offsetHeight || 1,
                i = Me((r[t] + n - r[t + 1]) / n);
              e[t].style.setProperty(`--c`, i.toFixed(3));
            }
        },
        () => {
          if (!t) {
            n = !1;
            return;
          }
          for (let t = 0; t < e.length; t++) r[t] = e[t].getBoundingClientRect().top;
          n = !0;
        }
      );
      return () => {
        (a(), i.disconnect());
      };
    }, [y, b, E, O.length]),
    u(`section`, {
      ref: S,
      className: `ds ds-sec ds-dark dsb${T ? ` is-on` : ``}${E ? ` is-ph` : D ? ` is-tab` : ``}${x ? ` is-still` : ``}`,
      style: { ...Pe(m), ..._, ...e.style },
      "aria-label": He(n),
      children: [
        d(`link`, { rel: `stylesheet`, href: Se }),
        d(`style`, { dangerouslySetInnerHTML: { __html: ze + Ge + Xe } }),
        u(`div`, {
          className: `ds-wrap`,
          children: [
            u(`div`, {
              className: `dsb-head`,
              children: [
                u(`div`, {
                  children: [
                    u(`p`, {
                      className: `dsb-eb`,
                      style: { ...v, ...We(T, 0) },
                      children: [d(`i`, { "aria-hidden": !0 }), t],
                    }),
                    d(Ue, {
                      text: n,
                      on: T,
                      D: g,
                      size: E ? `clamp(40px,12vw,56px)` : `clamp(46px,5vw,80px)`,
                      lh: 0.94,
                      delay: 80,
                    }),
                  ],
                }),
                u(`div`, {
                  className: `dsb-side`,
                  style: We(T, 260),
                  children: [
                    d(`p`, { className: `dsb-sub`, children: r }),
                    u(`a`, {
                      className: `dsb-all`,
                      href: f,
                      style: v,
                      children: [l, d(Be, { s: 13 })],
                    }),
                  ],
                }),
              ],
            }),
            d(`div`, {
              className: `dsb-list`,
              ref: C,
              children: O.map((e, t) => {
                let n = String(e.f5 || ``)
                  .split(`;`)
                  .map(A)
                  .filter(Boolean);
                return d(
                  `article`,
                  {
                    className: `dsb-card`,
                    style: { "--i": t, "--col": e.f7 || `#1B2A6B`, "--top": `${88 + t * 26}px` },
                    children: u(`div`, {
                      className: `dsb-in`,
                      children: [
                        u(`div`, {
                          className: `dsb-l`,
                          children: [
                            u(`span`, {
                              className: `dsb-n`,
                              style: v,
                              children: [
                                String(t + 1).padStart(2, `0`),
                                ` / `,
                                String(O.length).padStart(2, `0`),
                              ],
                            }),
                            d(`h3`, { className: `dsb-name`, style: g, children: e.f1 }),
                            d(`p`, { className: `dsb-bl`, children: e.f6 }),
                            d(`div`, {
                              className: `dsb-items`,
                              children: n.map((e, t) =>
                                u(
                                  `a`,
                                  {
                                    className: `dsb-it`,
                                    href: `/products/${e.slug}`,
                                    style: { "--pc": e.f12 || `#5B4BFF` },
                                    "aria-label": `${e.f1}, ${e.f3}`,
                                    children: [
                                      d(`span`, {
                                        className: `dsb-ic`,
                                        children: d(`img`, {
                                          ...Ee(Je(e), `120px`),
                                          alt: ``,
                                          loading: `lazy`,
                                          decoding: `async`,
                                        }),
                                      }),
                                      u(`span`, {
                                        className: `dsb-it-t`,
                                        children: [
                                          d(`b`, { style: g, children: e.f1 }),
                                          d(`small`, { style: v, children: e.f2 }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.slug || t
                                )
                              ),
                            }),
                            d(Re, {
                              href: `/bundles/${e.slug || ``}`,
                              label: e.f8 || `Get the bundle`,
                              kind: `solid`,
                              className: `dsb-btn`,
                            }),
                          ],
                        }),
                        u(`div`, {
                          className: `dsb-r ds-lt`,
                          style: v,
                          "aria-label": `${e.f1} receipt`,
                          children: [
                            u(`span`, {
                              className: `dsb-rh`,
                              children: [
                                d(`b`, { children: e.f1 }),
                                u(`span`, { children: [n.length, ` items`] }),
                              ],
                            }),
                            n.map((e, t) =>
                              u(
                                `span`,
                                {
                                  className: `dsb-rl`,
                                  children: [
                                    d(`span`, { children: e.f1 }),
                                    d(`i`, { "aria-hidden": !0 }),
                                    d(`b`, { children: e.f3 }),
                                  ],
                                },
                                t
                              )
                            ),
                            u(`span`, {
                              className: `dsb-rl dsb-sum`,
                              children: [
                                d(`span`, { children: i }),
                                d(`i`, { "aria-hidden": !0 }),
                                d(`b`, { children: e.f3 }),
                              ],
                            }),
                            u(`span`, {
                              className: `dsb-rl`,
                              children: [
                                d(`span`, { children: a }),
                                d(`i`, { "aria-hidden": !0 }),
                                d(`b`, { children: e.f2 }),
                              ],
                            }),
                            u(`span`, {
                              className: `dsb-tot`,
                              children: [
                                d(`span`, { children: o }),
                                d(`em`, { style: g, children: e.f2 }),
                              ],
                            }),
                            u(`span`, {
                              className: `dsb-save`,
                              style: g,
                              children: [c, ` `, e.f4],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.slug || t
                );
              }),
            }),
          ],
        }),
      ],
    })
  );
}
var Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  U,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (Se = `../../styles/css2-a59a76.css`),
      (Ce = `clamp(1280px, 92vw, 1520px)`),
      (we = [160, 320, 480, 800, 1200, 1600]),
      (Te = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return we.find((e) => e >= i) || 1600;
      }),
      (Ee = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = Te(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = Te(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: we
              .filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (De = (e) => {
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
      (Oe = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (ke = (e) => {
        let t = De(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (Ae = (e, t, n, r) => {
        let i = e ? ke(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (je = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (Me = (e) => Math.min(1, Math.max(0, e))),
      (U = {
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
        bone: e.bone || U.bone,
        ink: e.ink || U.ink,
        brass: e.brass || U.brass,
        pine: e.pine || U.pine,
        fog: e.fog || U.fog,
        stone: e.stone || U.stone,
        cloud: e.cloud || U.cloud,
        night: e.night || U.night,
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
        bone: { type: P.Color, title: `Paper`, defaultValue: U.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: U.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: U.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: U.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: U.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: U.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: U.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: U.night },
      }),
      (Ie = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Le = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Re = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: l,
      }) =>
        d(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: u(`span`, {
            className: `ds-tag`,
            children: [
              d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              u(`span`, {
                className: `ds-lbl`,
                children: [
                  d(`span`, { className: `ds-l1`, children: t }),
                  d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                d(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: u(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      d(`path`, { d: `M6 8h12l-1 12H7z` }),
                      d(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (ze = `
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
      (Be = ({ s: e = 15 }) =>
        d(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: d(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      P.Boolean,
      P.Number,
      (Ve = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (He = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Ue = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: o = 0,
        step: s = 55,
        style: l,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return d(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": He(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Ve(e).map((e, t) => {
                    let n = o + m++ * s;
                    return u(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          d(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? u(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    d(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: d(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : u(c, { children: [e.t, e.tail] }),
                          }),
                          ` `,
                        ],
                      },
                      t
                    );
                  }),
                },
                t
              )
            ),
        });
      }),
      (We = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Ge = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${Ce} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Ke = {
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
        bundles: [
          {
            slug: `launch-stack`,
            f1: `The Launch Stack`,
            f2: `$179`,
            f3: `$247`,
            f4: `$68`,
            f5: `launch-course;pricing-playbook;email-swipes`,
            f6: `The course, the pricing book and the launch emails. Everything between an idea and the first sale.`,
            f7: `#1B2A6B`,
            f8: `Get the stack`,
            img: `https://framerusercontent.com/images/zaaqlh0So2UAYYmiayF4jjTYrw.webp`,
            n1: `1`,
          },
          {
            slug: `designer-kit`,
            f1: `The Designer Kit`,
            f2: `$99`,
            f3: `$142`,
            f4: `$43`,
            f5: `figma-ui-kit;icon-set;brand-fonts`,
            f6: `UI kit, icon set and the Ledger Sans family. One licence, every screen.`,
            f7: `#5B4BFF`,
            f8: `Get the kit`,
            img: `https://framerusercontent.com/images/3L0U5KQFYJB7qYSFgPEtUdu3ynU.webp`,
            n1: `2`,
          },
          {
            slug: `creator-pack`,
            f1: `The Creator Pack`,
            f2: `$59`,
            f3: `$82`,
            f4: `$23`,
            f5: `canva-social-kit;film-presets;notion-studio-os`,
            f6: `Post, edit and plan: the social kit, the presets and the Notion studio, together.`,
            f7: `#2E6B5A`,
            f8: `Get the pack`,
            img: `https://framerusercontent.com/images/zuYkIFCmggCHn4ZIYIBeCHr6iXg.webp`,
            n1: `3`,
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
      }),
      (qe = `DsBundles@cms1`),
      (Je = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Ye = a === void 0 ? h : r),
      (Xe = `
.dsb{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(90px,10vw,150px) 0 clamp(60px,7vw,110px);overflow:clip;z-index:11}
.dsb-head{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:26px clamp(32px,5vw,80px);align-items:end;margin-bottom:clamp(36px,4vw,60px)}
.dsb-eb{display:inline-flex;align-items:center;gap:10px;margin:0 0 18px;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsb-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsb .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsb .ds-it{color:var(--ds-brass)}
.dsb-side{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding-bottom:8px} .dsb-sub{margin:0;font-size:16.5px;line-height:1.6;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);max-width:380px}
.dsb-all{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-bone);text-decoration:none} .dsb-all svg{color:var(--ds-brass);transition:translate .3s} .dsb-all:hover svg{translate:4px 0}
/* stacked cards */
.dsb-list{display:flex;flex-direction:column;gap:26px}
.dsb-card{position:sticky;top:var(--top);--c:0;transform:scale(calc(1 - var(--c)*.06)) translateY(calc(var(--c)*-14px));transform-origin:50% 0;filter:brightness(calc(1 - var(--c)*.45))}
.dsb-in{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:clamp(24px,4vw,64px);padding:clamp(24px,3vw,44px);border-radius:24px;background:var(--col);box-shadow:0 -20px 60px -30px rgba(0,0,0,.9),inset 0 0 0 1px rgba(255,255,255,.1);min-height:440px;overflow:hidden;position:relative}
.dsb-in::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 80% at 100% 0,rgba(255,255,255,.14),transparent 60%),linear-gradient(180deg,transparent,rgba(0,0,0,.25));pointer-events:none}
.dsb-l{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:16px;color:#fff}
.dsb-n{font-size:11px;letter-spacing:.14em;opacity:.92} .dsb-name{margin:0;font-size:clamp(30px,3.4vw,50px);line-height:1;font-weight:800;letter-spacing:-.03em} .dsb-bl{margin:0;max-width:460px;font-size:15.5px;line-height:1.55;opacity:.96}
.dsb-items{display:flex;flex-wrap:wrap;gap:10px;margin:6px 0 8px}
.dsb-it{display:flex;align-items:center;gap:10px;padding:6px 12px 6px 6px;border-radius:999px;background:rgba(0,0,0,.28);color:#fff;text-decoration:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14);transition:background .3s,transform .4s cubic-bezier(.34,1.56,.64,1)} .dsb-it:hover{background:rgba(0,0,0,.45);transform:translateY(-2px)}
.dsb-ic{width:34px;height:34px;border-radius:50%;overflow:hidden;background:var(--pc);flex:none} .dsb-ic img{width:100%;height:100%;object-fit:cover;display:block;opacity:.7;mix-blend-mode:luminosity}
.dsb-it-t{display:flex;flex-direction:column;line-height:1.1} .dsb-it-t b{font-size:12.5px;font-weight:700} .dsb-it-t small{font-size:9px;letter-spacing:.1em;text-transform:uppercase;opacity:.95}
.dsb-btn{margin-top:auto}
/* receipt */
.dsb-r{position:relative;align-self:start;display:flex;flex-direction:column;gap:6px;padding:18px 18px 26px;background:var(--ds-bone);color:var(--ds-ink);font-size:12px;letter-spacing:.02em;rotate:1.2deg;box-shadow:0 30px 60px -30px rgba(0,0,0,.8);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsb-rh{display:flex;justify-content:space-between;gap:10px;padding-bottom:8px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsb-rh b{font-weight:500}
.dsb-rl{display:flex;align-items:baseline;gap:8px;color:color-mix(in srgb,var(--ds-ink) 75%,transparent)} .dsb-rl i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px} .dsb-rl b{font-weight:500;color:var(--ds-ink)}
.dsb-sum{margin-top:6px;padding-top:8px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent)} .dsb-sum b{text-decoration:line-through;color:var(--ds-mut)}
.dsb-tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:8px;padding-top:10px;border-top:2px solid var(--ds-ink);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsb-tot em{font-style:normal;font-size:28px;font-weight:800;letter-spacing:-.02em}
.dsb-save{align-self:flex-end;margin-top:4px;padding:4px 10px;border:2px solid var(--ds-acc);border-radius:4px;color:var(--ds-acc);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg}
/* tablet + phone */
.dsb.is-tab .dsb-head{grid-template-columns:1fr} .dsb.is-tab .dsb-in{grid-template-columns:1fr;min-height:0} .dsb.is-tab .dsb-r{rotate:0deg}
.dsb.is-ph .dsb-head{grid-template-columns:1fr;gap:18px;margin-bottom:28px} .dsb.is-ph .dsb-list{gap:18px} .dsb.is-ph .dsb-card{position:relative;top:auto;transform:none;filter:none} .dsb.is-ph .dsb-in{grid-template-columns:1fr;min-height:0;padding:20px;border-radius:18px;gap:20px}
.dsb.is-ph .dsb-name{font-size:30px} .dsb.is-ph .dsb-r{rotate:0deg;font-size:11.5px}
@media (prefers-reduced-motion:reduce){.dsb-card{position:relative;top:auto;transform:none;filter:none}}`),
      O(xe, {
        ...Le,
        eyebrow: { type: P.String, title: `Eyebrow`, defaultValue: `Bundles` },
        heading: {
          type: P.String,
          title: `Heading`,
          defaultValue: `Buy the shelf,|*not the item.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: P.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Three sets that go together. The maths is on the receipt.`,
        },
        subtotalLabel: { type: P.String, title: `Subtotal label`, defaultValue: `Subtotal` },
        bundleLabel: { type: P.String, title: `Bundle label`, defaultValue: `Bundle price` },
        totalLabel: { type: P.String, title: `Total label`, defaultValue: `You pay` },
        saveLabel: { type: P.String, title: `Save label`, defaultValue: `You save` },
        allLabel: { type: P.String, title: `All link label`, defaultValue: `All bundles` },
        allLink: { type: P.Link, title: `All link`, defaultValue: `/bundles` },
        ...Fe,
        ...Ie,
      }));
  });
function Qe() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = pt), document.head.appendChild(e));
  }, []);
}
function $e() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function et() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function tt(e, t) {
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
function nt(e, t, n) {
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
function rt(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: St(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? bt(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: St(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? bt(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: St(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? bt(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function it(e, t) {
  h(() => {
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
function at(e) {
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
function ot(e, t, n, r) {
  h(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      o = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    at(i);
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
      g = nt(
        () => {
          if (!h) return;
          let e = wt((m - f) / (m + p)),
            t = p > m * 1.05 ? wt(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * Mt),
              (l += (t - l) * Mt),
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
function st(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function ct(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = $e(),
    l = st(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = nt(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function lt(e) {
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
function ut(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Vt(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Bt] = 1));
      } catch {}
      let s = () => {
          let t = lt(e);
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
function dt() {
  let e = ut(`site`, zt.site || [])[0] || (zt.site || [])[0] || {},
    t = (t) => String(e[t] ?? ``).trim();
  return {
    name: t(`f1`),
    role: t(`f2`),
    tagline: t(`f3`),
    email: t(`f4`),
    phone: t(`f5`),
    city: t(`f6`),
    tz: t(`f7`) || `Europe/London`,
    booking: t(`f8`) || `/book`,
    socials: t(`f9`),
    intake: t(`f10`),
    address: t(`f11`),
    hours: t(`f12`),
    openHours: t(`f13`),
  };
}
function ft(e) {
  let {
      eyebrow: t = `Behind the counter`,
      heading: n = `Made in a studio|*that ships.*`,
      story:
        r = `Shelfline started as a folder of files we kept re-using on client work: a UI kit, a pricing sheet, a set of presets. We cleaned them up, wrote the guides, and put them on a shelf. Every product here is something we use ourselves, updated when our own work moves on.`,
      facts:
        i = `Founded|2021, Lisbon; Products|31 and counting; Updates|Free, for life; Support|Real replies, same day`,
      button: a = `About the studio`,
      buttonLink: o = `/about`,
      captionLabel: c = `The studio, 2026`,
      signoff: l = `— the Shelfline studio`,
      bpHint: f = `auto`,
    } = e,
    p = Tt(e),
    { D: m, B: h, M: g } = rt(e);
  Qe();
  let _ = et(),
    v = Ct(),
    y = $e(),
    b = dt(),
    x = s(null),
    { w: S } = tt(x, f),
    C = ct(x, _, v);
  (it(x, _), ot(x, _, v));
  let w = S < 810,
    T = S >= 810 && S < 1100,
    E = mt(e.photo, Ut(`1497215728101-856f4ea42174`) + `?w=1200&q=70&fm=jpg&auto=format`),
    D = mt(e.photo2, Ut(`1524758631624-e2822e304c36`) + `?w=600&q=70&fm=jpg&auto=format`),
    O = String(r || ``)
      .split(/\s+/)
      .filter(Boolean),
    k = Ht(i)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { k: (t || ``).trim(), v: (n || ``).trim() };
      })
      .filter((e) => e.k);
  return u(`section`, {
    ref: x,
    className: `ds ds-sec dscr${C ? ` is-on` : ``}${w ? ` is-ph` : T ? ` is-tab` : ``}${y ? ` is-still` : ``}${v ? ` is-rm` : ``}`,
    style: { ...Et(p), ...h, ...e.style, "--n": O.length },
    "aria-label": Pt(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: pt }),
      d(`style`, { dangerouslySetInnerHTML: { __html: jt + Rt + Wt } }),
      u(`div`, {
        className: `ds-wrap dscr-wrap`,
        children: [
          u(`div`, {
            className: `dscr-media`,
            children: [
              d(Lt, {
                src: E,
                alt: ``,
                on: C,
                shape: `arch`,
                ratio: `4/5`,
                par: 1.2,
                radius: 0,
                sizes: `(max-width: 809px) 100vw, 44vw`,
                className: `dscr-um`,
              }),
              u(`span`, {
                className: `dscr-pol`,
                style: G(C, 500, 30),
                children: [
                  d(`img`, { ...vt(D, `220px`), alt: ``, loading: `lazy`, decoding: `async` }),
                  d(`b`, { style: g, children: c }),
                ],
              }),
            ],
          }),
          u(`div`, {
            className: `dscr-copy`,
            children: [
              u(`p`, {
                className: `dscr-eb`,
                style: { ...g, ...G(C, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(Ft, {
                text: n,
                on: C,
                D: m,
                size: w ? `clamp(38px,11vw,52px)` : `clamp(42px,4.4vw,70px)`,
                lh: 0.96,
                delay: 80,
              }),
              d(`p`, {
                className: `dscr-story`,
                "aria-label": r,
                children: O.map((e, t) =>
                  u(`span`, { "aria-hidden": !0, style: { "--i": t }, children: [e, ` `] }, t)
                ),
              }),
              d(`ul`, {
                className: `dscr-facts`,
                style: G(C, 300),
                children: k.map((e, t) =>
                  u(
                    `li`,
                    {
                      children: [
                        d(`span`, { style: g, children: e.k }),
                        d(`i`, { "aria-hidden": !0 }),
                        d(`b`, { children: e.v }),
                      ],
                    },
                    t
                  )
                ),
              }),
              u(`div`, {
                className: `dscr-foot`,
                style: G(C, 400),
                children: [
                  d(`span`, {
                    className: `dscr-sign`,
                    style: m,
                    children: l.replace(`Shelfline`, b.name || `Shelfline`),
                  }),
                  d(At, { href: o, label: a, kind: `ghost` }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  W,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  G,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (pt = `../../styles/css2-a59a76.css`),
      (mt = (e, t) =>
        e && typeof e == `object` && e.src
          ? String(e.src).split(`?`)[0]
          : typeof e == `string` && e.trim()
            ? e.trim().split(`?`)[0]
            : t),
      (ht = `clamp(1280px, 92vw, 1520px)`),
      (gt = [160, 320, 480, 800, 1200, 1600]),
      (_t = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return gt.find((e) => e >= i) || 1600;
      }),
      (vt = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = _t(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = _t(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: gt
              .filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (yt = (e) => {
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
      (bt = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (xt = (e) => {
        let t = yt(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (St = (e, t, n, r) => {
        let i = e ? xt(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (Ct = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (wt = (e) => Math.min(1, Math.max(0, e))),
      (W = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Tt = (e) => ({
        bone: e.bone || W.bone,
        ink: e.ink || W.ink,
        brass: e.brass || W.brass,
        pine: e.pine || W.pine,
        fog: e.fog || W.fog,
        stone: e.stone || W.stone,
        cloud: e.cloud || W.cloud,
        night: e.night || W.night,
      })),
      (Et = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Dt = {
        bone: { type: P.Color, title: `Paper`, defaultValue: W.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: W.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: W.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: W.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: W.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: W.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: W.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: W.night },
      }),
      (Ot = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (kt = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (At = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: l,
      }) =>
        d(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: u(`span`, {
            className: `ds-tag`,
            children: [
              d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              u(`span`, {
                className: `ds-lbl`,
                children: [
                  d(`span`, { className: `ds-l1`, children: t }),
                  d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                d(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: u(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      d(`path`, { d: `M6 8h12l-1 12H7z` }),
                      d(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (jt = `
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
      (Mt = 0.18),
      P.Boolean,
      P.Number,
      (Nt = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (Pt = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Ft = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: o = 0,
        step: s = 55,
        style: l,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return d(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": Pt(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Nt(e).map((e, t) => {
                    let n = o + m++ * s;
                    return u(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          d(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? u(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    d(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: d(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : u(c, { children: [e.t, e.tail] }),
                          }),
                          ` `,
                        ],
                      },
                      t
                    );
                  }),
                },
                t
              )
            ),
        });
      }),
      (G = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (It = {
        up: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`],
        down: [`inset(0 0 100% 0)`, `inset(0 0 0 0)`],
        left: [`inset(0 100% 0 0)`, `inset(0 0 0 0)`],
        right: [`inset(0 0 0 100%)`, `inset(0 0 0 0)`],
        diag: [`polygon(0 100%,0 100%,0 100%,0 100%)`, `polygon(0 -160%,260% 100%,0 100%,0 100%)`],
        iris: [`circle(0% at 50% 55%)`, `circle(85% at 50% 55%)`],
        arch: [`inset(100% 0 0 0 round 999px 999px 0 0)`, `inset(0 0 0 0 round 999px 999px 0 0)`],
        slit: [`inset(0 50% 0 50%)`, `inset(0 0 0 0)`],
      }),
      (Lt = ({
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
        style: u,
        className: f,
        eager: p = !1,
      }) => {
        let m = It[r] || It.up,
          h = vt(e, l);
        return d(`div`, {
          className: `ds-um${n ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          style: {
            aspectRatio: i,
            borderRadius: c,
            clipPath: n ? m[1] : m[0],
            WebkitClipPath: n ? m[1] : m[0],
            transitionDelay: `${a}ms`,
            "--par": o,
            ...(u || {}),
          },
          children: d(`img`, {
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
      (Rt = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${ht} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (zt = {
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
      }),
      (Bt = `DsCreator@cms1`),
      (Vt = a === void 0 ? h : r),
      (Ht = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Ut = (e) => `https://images.unsplash.com/photo-${e}`),
      (Wt = `
.dscr{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(90px,10vw,150px) 0;overflow:clip;z-index:12}
.dscr-wrap{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(40px,6vw,100px);align-items:center}
.dscr-media{position:relative} .dscr-um{width:100%} .dscr-um img{filter:saturate(.85)}
.dscr-pol{position:absolute;right:-6%;bottom:8%;width:34%;padding:8px 8px 30px;background:var(--ds-cloud);color:var(--ds-ink);box-shadow:0 30px 60px -24px rgba(0,0,0,.5);rotate:5deg;transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dscr-pol:hover{rotate:0deg}
.dscr-pol img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;filter:saturate(.9)} .dscr-pol b{position:absolute;left:10px;bottom:9px;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:500;color:var(--ds-mut)}
.dscr-copy{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
.dscr-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dscr-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dscr .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dscr .ds-it{color:var(--ds-acc)}
/* word-by-word scroll light: word i lights up as --sp passes its slot between .2 and .62 */
.dscr-story{margin:0;max-width:560px;font-size:clamp(18px,1.5vw,22px);line-height:1.5;letter-spacing:-.01em;font-weight:500;color:var(--ds-ink)}
.dscr-story span{opacity:clamp(.18,calc((var(--sp,.5) - .18 - var(--i)*(.42/var(--n,60)))/.06),1)}
.dscr-facts{list-style:none;margin:0;padding:0;width:100%;max-width:460px;display:flex;flex-direction:column}
.dscr-facts li{display:flex;align-items:baseline;gap:12px;padding:11px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent);font-size:14.5px} .dscr-facts li:first-child{border-top:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dscr-facts span{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut);flex:none} .dscr-facts i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 30%,transparent);translate:0 -4px} .dscr-facts b{font-weight:600;text-align:right}
.dscr-foot{display:flex;align-items:center;gap:22px;flex-wrap:wrap} .dscr-sign{font-size:15px;font-weight:700;letter-spacing:-.01em;color:var(--ds-mut)}
.dscr.is-tab .dscr-wrap{grid-template-columns:1fr;gap:40px} .dscr.is-tab .dscr-media{max-width:560px}
.dscr.is-ph .dscr-wrap{grid-template-columns:1fr;gap:30px} .dscr.is-ph .dscr-pol{right:-4px;width:38%} .dscr.is-ph .dscr-story{font-size:17px}
.dscr.is-rm .dscr-story span,.dscr.is-still .dscr-story span,.dscr.is-ph .dscr-story span{opacity:1}`),
      O(ft, {
        ...kt,
        eyebrow: { type: P.String, title: `Eyebrow`, defaultValue: `Behind the counter` },
        heading: {
          type: P.String,
          title: `Heading`,
          defaultValue: `Made in a studio|*that ships.*`,
          description: `*word* = accent, | = line break`,
        },
        story: {
          type: P.String,
          title: `Story`,
          displayTextArea: !0,
          defaultValue: `Shelfline started as a folder of files we kept re-using on client work: a UI kit, a pricing sheet, a set of presets. We cleaned them up, wrote the guides, and put them on a shelf. Every product here is something we use ourselves, updated when our own work moves on.`,
        },
        facts: {
          type: P.String,
          title: `Facts`,
          description: `Label|Value; …`,
          displayTextArea: !0,
          defaultValue: `Founded|2021, Lisbon; Products|31 and counting; Updates|Free, for life; Support|Real replies, same day`,
        },
        photo: { type: P.ResponsiveImage, title: `Portrait` },
        photo2: { type: P.ResponsiveImage, title: `Polaroid` },
        captionLabel: {
          type: P.String,
          title: `Polaroid caption`,
          defaultValue: `The studio, 2026`,
        },
        signoff: { type: P.String, title: `Sign-off`, defaultValue: `— the Shelfline studio` },
        button: { type: P.String, title: `Button`, defaultValue: `About the studio` },
        buttonLink: { type: P.Link, title: `Button link`, defaultValue: `/about` },
        ...Dt,
        ...Ot,
      }));
  });
function Kt() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = sn), document.head.appendChild(e));
  }, []);
}
function qt() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function Jt() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Yt(e, t) {
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
function Xt(e, t, n) {
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
function Zt(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: hn(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? pn(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: hn(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? pn(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: hn(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? pn(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Qt(e, t) {
  h(() => {
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
function $t(e) {
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
function en(e, t, n, r) {
  h(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      o = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    $t(i);
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
      g = Xt(
        () => {
          if (!h) return;
          let e = _n((m - f) / (m + p)),
            t = p > m * 1.05 ? _n(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * Tn),
              (l += (t - l) * Tn),
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
function tn(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function nn(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = qt(),
    l = tn(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = Xt(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function rn(e) {
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
function an(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Pn(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Mn] = 1));
      } catch {}
      let s = () => {
          let t = rn(e);
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
function on(e) {
  let {
      eyebrow: t = `This week in the window`,
      heading: n = `The window|*display.*`,
      subCopy: r = `One product gets the spotlight every week. Scroll in.`,
      featured: i = ``,
      button: a = `View product`,
      moreLabel: o = `More bestsellers`,
      moreLink: c = `/products`,
      badgeLabel: l = `Featured`,
      bpHint: f = `auto`,
    } = e,
    p = vn(e),
    { D: m, B: h, M: g } = Zt(e);
  Kt();
  let _ = Jt(),
    v = gn(),
    y = qt(),
    b = s(null),
    x = s(null),
    { w: S } = Yt(b, f),
    C = nn(b, _, v, 0.08);
  (Qt(b, _), en(b, _, v));
  let w = S < 810,
    T = S >= 810 && S < 1100,
    E = an(`products`, jn.products),
    D =
      E.find((e) => i && e.slug === i.trim()) ||
      E.find((e) => /bestseller/i.test(e.f9 || ``)) ||
      E[0] ||
      {},
    O = E.filter((e) => e.slug !== D.slug)
      .sort((e, t) => !!/bestseller/i.test(t.f9 || ``) - +!!/bestseller/i.test(e.f9 || ``))
      .slice(0, 3),
    k = Fn(D.f7 || ``).slice(0, 4);
  return u(`section`, {
    ref: b,
    className: `ds ds-sec ds-dark dsf${C ? ` is-on` : ``}${w ? ` is-ph` : T ? ` is-tab` : ``}${y ? ` is-still` : ``}${v ? ` is-rm` : ``}`,
    style: { ...yn(p), ...h, ...e.style },
    "aria-label": Dn(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: sn }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Cn + An + In } }),
      d(`div`, {
        className: `dsf-pin`,
        children: u(`div`, {
          className: `dsf-stage`,
          ref: x,
          children: [
            u(`div`, {
              className: `dsf-copy`,
              children: [
                u(`p`, {
                  className: `dsf-eb`,
                  style: { ...g, ...kn(C, 0) },
                  children: [d(`i`, { "aria-hidden": !0 }), t],
                }),
                d(On, {
                  text: n,
                  on: C,
                  D: m,
                  size: w ? `clamp(40px,12vw,56px)` : `clamp(48px,6vw,96px)`,
                  lh: 0.92,
                  delay: 80,
                }),
                d(`p`, { className: `dsf-sub`, style: kn(C, 260), children: r }),
              ],
            }),
            u(`a`, {
              className: `dsf-win`,
              href: `/products/${D.slug || ``}`,
              "aria-label": `${D.f1 || ``}, ${D.f3 || ``}`,
              style: { "--col": D.f12 || `#5B4BFF` },
              children: [
                u(`span`, {
                  className: `dsf-frame`,
                  "aria-hidden": !0,
                  children: [
                    d(`i`, { className: `l` }),
                    d(`i`, { className: `r` }),
                    d(`i`, { className: `t` }),
                    d(`i`, { className: `b` }),
                  ],
                }),
                d(`span`, {
                  className: `dsf-cov`,
                  children: d(`img`, {
                    ...dn(Nn(D), `(max-width: 809px) 100vw, 100vw`),
                    alt: ``,
                    loading: `lazy`,
                    decoding: `async`,
                  }),
                }),
                d(`span`, { className: `dsf-glow`, "aria-hidden": !0 }),
                d(`span`, { className: `dsf-badge`, style: g, children: l }),
              ],
            }),
            u(`a`, {
              className: `dsf-card ds-lt`,
              onFocus: () => x.current?.classList.add(`is-kb`),
              onBlur: () => x.current?.classList.remove(`is-kb`),
              href: `/products/${D.slug || ``}`,
              "aria-label": `${D.f1 || ``}, ${D.f3 || ``}, ${a}`,
              children: [
                u(`span`, {
                  className: `dsf-kind`,
                  style: g,
                  children: [D.f2, D.f5 ? ` \xb7 ${D.f5}` : ``],
                }),
                d(`b`, { className: `dsf-name`, style: m, children: D.f1 }),
                d(`span`, {
                  className: `dsf-inc`,
                  children: k.map((e, t) => d(`span`, { style: g, children: e }, t)),
                }),
                u(`span`, {
                  className: `dsf-row`,
                  children: [
                    u(`em`, {
                      className: `dsf-pr`,
                      style: m,
                      children: [D.f3, D.f4 && d(`s`, { style: g, children: D.f4 })],
                    }),
                    d(`span`, {
                      className: `ds-btn ds-solid dsf-btn`,
                      "data-cur": `go`,
                      children: u(`span`, {
                        className: `ds-tag`,
                        children: [
                          d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
                          d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
                          u(`span`, {
                            className: `ds-lbl`,
                            children: [
                              d(`span`, { className: `ds-l1`, children: a }),
                              d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: a }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                D.f10 &&
                  u(`span`, {
                    className: `dsf-sold`,
                    style: g,
                    children: [D.f10, D.f11 ? ` \xb7 ★ ${D.f11}` : ``],
                  }),
              ],
            }),
          ],
        }),
      }),
      u(`div`, {
        className: `ds-wrap dsf-more`,
        children: [
          u(`div`, {
            className: `dsf-mh`,
            children: [
              d(`span`, { style: g, className: `dsf-ml`, children: o }),
              u(`a`, {
                href: c,
                className: `dsf-all`,
                style: g,
                children: [c === `/products` ? `All products` : o, d(wn, { s: 13 })],
              }),
            ],
          }),
          d(`div`, {
            className: `dsf-grid`,
            children: O.map((e, t) =>
              u(
                `a`,
                {
                  className: `dsf-item`,
                  href: `/products/${e.slug || ``}`,
                  style: { "--col": e.f12 || `#5B4BFF` },
                  children: [
                    u(`span`, {
                      className: `dsf-ic`,
                      children: [
                        d(`img`, {
                          ...dn(Nn(e), `(max-width: 809px) 100vw, 33vw`),
                          alt: ``,
                          loading: `lazy`,
                          decoding: `async`,
                        }),
                        e.f9 && d(`span`, { className: `dsf-ib`, style: g, children: e.f9 }),
                      ],
                    }),
                    u(`span`, {
                      className: `dsf-it`,
                      children: [
                        u(`span`, {
                          children: [
                            d(`b`, { style: m, children: e.f1 }),
                            d(`small`, { style: g, children: e.f2 }),
                          ],
                        }),
                        d(`em`, { style: m, children: e.f3 }),
                      ],
                    }),
                  ],
                },
                e.slug || t
              )
            ),
          }),
        ],
      }),
    ],
  });
}
var sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  K,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (sn = `../../styles/css2-a59a76.css`),
      (cn = `clamp(1280px, 92vw, 1520px)`),
      (ln = [160, 320, 480, 800, 1200, 1600]),
      (un = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return ln.find((e) => e >= i) || 1600;
      }),
      (dn = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = un(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = un(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: ln
              .filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (fn = (e) => {
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
      (pn = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (mn = (e) => {
        let t = fn(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (hn = (e, t, n, r) => {
        let i = e ? mn(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (gn = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (_n = (e) => Math.min(1, Math.max(0, e))),
      (K = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (vn = (e) => ({
        bone: e.bone || K.bone,
        ink: e.ink || K.ink,
        brass: e.brass || K.brass,
        pine: e.pine || K.pine,
        fog: e.fog || K.fog,
        stone: e.stone || K.stone,
        cloud: e.cloud || K.cloud,
        night: e.night || K.night,
      })),
      (yn = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (bn = {
        bone: { type: P.Color, title: `Paper`, defaultValue: K.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: K.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: K.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: K.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: K.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: K.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: K.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: K.night },
      }),
      (xn = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Sn = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Cn = `
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
      (wn = ({ s: e = 15 }) =>
        d(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: d(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      (Tn = 0.18),
      P.Boolean,
      P.Number,
      (En = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (Dn = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (On = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: o = 0,
        step: s = 55,
        style: l,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return d(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": Dn(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: En(e).map((e, t) => {
                    let n = o + m++ * s;
                    return u(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          d(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? u(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    d(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: d(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : u(c, { children: [e.t, e.tail] }),
                          }),
                          ` `,
                        ],
                      },
                      t
                    );
                  }),
                },
                t
              )
            ),
        });
      }),
      (kn = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (An = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${cn} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (jn = {
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
      }),
      (Mn = `DsFeatured@cms1`),
      (Nn = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Pn = a === void 0 ? h : r),
      (Fn = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (In = `
.dsf{position:relative;background:var(--ds-night);color:var(--ds-bone);overflow:clip;z-index:11}
.dsf-pin{position:relative;height:230vh;height:230svh}
.dsf-stage{position:sticky;top:0;height:100vh;height:100svh;display:grid;place-items:center;overflow:hidden;--k:clamp(0,calc(var(--pp,0)*1.35),1)}
.dsf-stage::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 50% at 50% 55%,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night) 70%)}
.dsf-copy{position:absolute;left:50%;top:14%;translate:-50% 0;z-index:2;text-align:center;display:flex;flex-direction:column;align-items:center;gap:18px;max-width:760px;padding:0 20px;opacity:calc(1 - var(--k)*1.6);translate:-50% calc(var(--k)*-60px)}
.dsf-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsf-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsf .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsf .ds-it{color:var(--ds-brass)}
.dsf-sub{margin:0;font-size:16.5px;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)}
/* the window grows with --k */
.dsf-win{position:relative;display:block;width:min(46vw,560px);aspect-ratio:4/3;text-decoration:none;color:var(--ds-ink);translate:0 calc(8vh*(1 - var(--k)));
  transform:scale(calc(1 + var(--k)*1.75));transform-origin:50% 50%;border-radius:calc(22px - var(--k)*16px);overflow:hidden;background:var(--col);box-shadow:0 60px 120px -40px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.06)}
.dsf-cov{position:absolute;inset:0} .dsf-cov img{width:100%;height:100%;object-fit:cover;display:block;opacity:.7;mix-blend-mode:luminosity;transform:scale(calc(1.15 - var(--k)*.15))}
.dsf-cov::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),color-mix(in srgb,var(--col) 60%,#000) 100%)}
.dsf-glow{position:absolute;inset:-20%;background:radial-gradient(40% 30% at 50% 20%,rgba(255,255,255,.28),transparent 70%);opacity:calc(1 - var(--k))}
.dsf-frame i{position:absolute;background:var(--ds-pine);z-index:3;opacity:calc(1 - var(--k)*1.4)} .dsf-frame .l,.dsf-frame .r{top:0;bottom:0;width:14px} .dsf-frame .l{left:0} .dsf-frame .r{right:0} .dsf-frame .t,.dsf-frame .b{left:0;right:0;height:14px} .dsf-frame .t{top:0} .dsf-frame .b{bottom:0}
.dsf-badge{position:absolute;left:24px;top:22px;z-index:4;padding:5px 10px;background:var(--ds-brass);color:var(--ds-ink);font-size:9px;letter-spacing:.16em;text-transform:uppercase;rotate:-5deg;transform:scale(calc(1/(1 + var(--k)*1.75)));transform-origin:0 0}
/* the card slides up when the window is full */
.dsf-card{position:absolute;left:50%;bottom:6%;z-index:5;width:min(92vw,520px);translate:-50% 0;display:flex;flex-direction:column;gap:6px;padding:16px 18px 18px;background:var(--ds-bone);color:var(--ds-ink);text-decoration:none;border-radius:4px;box-shadow:0 30px 60px -20px rgba(0,0,0,.7);clip-path:polygon(0 0,100% 0,100% calc(100% - 6px),98% 100%,96% calc(100% - 6px),94% 100%,92% calc(100% - 6px),90% 100%,88% calc(100% - 6px),86% 100%,84% calc(100% - 6px),82% 100%,80% calc(100% - 6px),78% 100%,76% calc(100% - 6px),74% 100%,72% calc(100% - 6px),70% 100%,68% calc(100% - 6px),66% 100%,64% calc(100% - 6px),62% 100%,60% calc(100% - 6px),58% 100%,56% calc(100% - 6px),54% 100%,52% calc(100% - 6px),50% 100%,48% calc(100% - 6px),46% 100%,44% calc(100% - 6px),42% 100%,40% calc(100% - 6px),38% 100%,36% calc(100% - 6px),34% 100%,32% calc(100% - 6px),30% 100%,28% calc(100% - 6px),26% 100%,24% calc(100% - 6px),22% 100%,20% calc(100% - 6px),18% 100%,16% calc(100% - 6px),14% 100%,12% calc(100% - 6px),10% 100%,8% calc(100% - 6px),6% 100%,4% calc(100% - 6px),2% 100%,0 calc(100% - 6px));
  transform:translateY(calc((1 - clamp(0,calc((var(--k) - .55)/.35),1))*140%));opacity:clamp(0,calc((var(--k) - .5)/.25),1)}
.dsf-kind{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsf-name{font-size:clamp(18px,1.6vw,22px);line-height:1.05;font-weight:800;letter-spacing:-.02em}
.dsf-inc{display:flex;flex-wrap:wrap;gap:5px;margin-top:2px} .dsf-inc span{padding:3px 7px;border-radius:999px;background:color-mix(in srgb,var(--ds-ink) 7%,transparent);font-size:8.5px;letter-spacing:.06em}
.dsf-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:6px} .dsf-pr{font-style:normal;font-size:20px;font-weight:800;display:inline-flex;align-items:baseline;gap:8px} .dsf-pr s{font-size:10px;color:var(--ds-mut)}
.dsf-btn{font-size:10px;min-height:34px;filter:none} .dsf-btn .ds-tag{padding:0 14px 0 20px}
.dsf-sold{font-size:9px;letter-spacing:.08em;color:var(--ds-mut)}
/* bestsellers row */
.dsf-more{position:relative;padding:clamp(40px,5vw,72px) var(--pad) clamp(90px,10vw,150px)}
.dsf-mh{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid color-mix(in srgb,var(--ds-bone) 16%,transparent)} .dsf-ml{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)}
.dsf-all{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-bone);text-decoration:none} .dsf-all svg{color:var(--ds-brass);transition:translate .3s} .dsf-all:hover svg{translate:4px 0}
.dsf-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.dsf-item{display:flex;flex-direction:column;gap:14px;text-decoration:none;color:inherit}
.dsf-ic{position:relative;aspect-ratio:4/3;border-radius:6px;overflow:hidden;background:var(--col);box-shadow:0 30px 60px -30px rgba(0,0,0,.8);transition:transform .6s cubic-bezier(.34,1.56,.64,1)} .dsf-item:hover .dsf-ic{transform:translateY(-8px) rotate(-1deg)}
.dsf-ic img{width:100%;height:100%;object-fit:cover;display:block;opacity:.65;mix-blend-mode:luminosity;transition:scale 1.2s cubic-bezier(.16,.84,.24,1)} .dsf-item:hover .dsf-ic img{scale:1.06}
.dsf-ic::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,color-mix(in srgb,var(--col) 55%,#000))}
.dsf-ib{position:absolute;left:14px;top:14px;padding:4px 8px;background:var(--ds-brass);color:var(--ds-ink);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;rotate:-5deg}
.dsf-it{display:flex;justify-content:space-between;align-items:flex-start;gap:14px} .dsf-it b{display:block;font-size:18px;font-weight:800;letter-spacing:-.02em;line-height:1.1} .dsf-it small{display:block;margin-top:4px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)} .dsf-it em{font-style:normal;font-size:18px;font-weight:800;color:var(--ds-brass)}
/* tablet + phone: no pin, everything stacked */
.dsf.is-tab .dsf-win{width:min(70vw,640px)}
.dsf.is-ph .dsf-pin{height:auto} .dsf.is-ph .dsf-stage{position:relative;height:auto;display:flex;flex-direction:column;gap:26px;padding:70px 16px 40px;--k:1}
.dsf.is-ph .dsf-copy{position:relative;left:auto;top:auto;translate:0 0;opacity:1;text-align:left;align-items:flex-start;padding:0}
.dsf.is-ph .dsf-win{width:100%;translate:0 0!important;transform:none;border-radius:8px;aspect-ratio:4/5} .dsf.is-ph .dsf-card{position:relative;left:auto;bottom:auto;translate:0 0;width:calc(100% - 24px);margin:-60px auto 0;transform:none;opacity:1} .dsf.is-ph .dsf-badge{transform:none} .dsf.is-ph .dsf-frame{display:none}
.dsf.is-ph .dsf-more{padding-top:20px} .dsf.is-ph .dsf-grid{grid-template-columns:1fr;gap:26px}
.dsf.is-rm .dsf-stage{--k:1} .dsf.is-still .dsf-stage{--k:1} .dsf-stage.is-kb{--k:1} .dsf-card:focus-visible{outline-offset:-4px!important}
@media (prefers-reduced-motion:reduce){.dsf-pin{height:auto} .dsf-stage{position:relative;height:auto;padding:80px 0 40px} .dsf-copy{position:relative;translate:0 0}}`),
      O(on, {
        ...Sn,
        eyebrow: { type: P.String, title: `Eyebrow`, defaultValue: `This week in the window` },
        heading: {
          type: P.String,
          title: `Heading`,
          defaultValue: `The window|*display.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: P.String,
          title: `Sub copy`,
          defaultValue: `One product gets the spotlight every week. Scroll in.`,
        },
        featured: {
          type: P.String,
          title: `Featured slug`,
          description: `A Products slug (empty = the first Bestseller)`,
          defaultValue: ``,
        },
        badgeLabel: { type: P.String, title: `Badge`, defaultValue: `Featured` },
        button: { type: P.String, title: `Button`, defaultValue: `View product` },
        moreLabel: { type: P.String, title: `Row label`, defaultValue: `More bestsellers` },
        moreLink: { type: P.Link, title: `Row link`, defaultValue: `/products` },
        ...bn,
        ...xn,
      }));
  });
function Rn() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Qn), document.head.appendChild(e));
  }, []);
}
function zn() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function Bn() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Vn(e, t) {
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
function Hn(e, t, n) {
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
function Un(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: sr(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ar(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: sr(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ar(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: sr(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? ar(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Wn(e, t) {
  h(() => {
    if (!t || !e.current) return;
    let n = e.current,
      r = (e) => {
        let t = e.target;
        if (t.closest?.(`.ds-inring`))
          try {
            t.scrollIntoView({ block: `nearest`, inline: `nearest` });
          } catch {}
      };
    return (n.addEventListener(`focusin`, r), () => n.removeEventListener(`focusin`, r));
  }, [t]);
}
function Gn(e, t) {
  h(() => {
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
function Kn(e) {
  let [t, n] = o([]);
  return (
    h(() => {
      if (!e) return;
      n(_r());
      let t = () => n(_r());
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
function qn(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function Jn(e) {
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
function Yn(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Tr(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Cr] = 1));
      } catch {}
      let s = () => {
          let t = Jn(e);
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
function Xn() {
  let e = Yn(`site`, Sr.site || [])[0] || (Sr.site || [])[0] || {},
    t = (t) => String(e[t] ?? ``).trim();
  return {
    name: t(`f1`),
    role: t(`f2`),
    tagline: t(`f3`),
    email: t(`f4`),
    phone: t(`f5`),
    city: t(`f6`),
    tz: t(`f7`) || `Europe/London`,
    booking: t(`f8`) || `/book`,
    socials: t(`f9`),
    intake: t(`f10`),
    address: t(`f11`),
    hours: t(`f12`),
    openHours: t(`f13`),
  };
}
function Zn(e) {
  let {
      eyebrow: t = `Creator store · Templates · Ebooks · Courses`,
      heading: n = `Everything you make, *on one shelf.*`,
      subCopy:
        r = `Shelfline is a creator store: templates, ebooks, presets and courses sold from one shelf. Instant download, lifetime updates, and checkout links that go straight to Lemon Squeezy, Gumroad or Stripe.`,
      button1: i = `Browse the shelf`,
      button1Link: l = `/products`,
      button2: f = `Get the free guide`,
      button2Link: p = `/free`,
      cursorLabel: m = `Pick up`,
      cartLabel: g = `Cart`,
      addLabel: _ = `Add`,
      receiptTitle: v = `Recent orders`,
      soldLine: y = `2,140 orders this month · 4.9 average`,
      tilt: b = 1,
      showNav: x = !0,
      navLinks:
        S = `Products:/products, Bundles:/bundles, Courses:/courses, Reviews:/reviews, Notes:/notes`,
      navCta: C = `Free guide`,
      bpHint: w = `auto`,
    } = e,
    T = lr(e),
    { D: E, B: D, M: O } = Un(e);
  Rn();
  let k = Bn(),
    A = cr(),
    j = zn(),
    M = Xn(),
    N = s(null),
    P = s(null),
    ee = s(null),
    te = s(null),
    { w: F } = Vn(N, w),
    ne = qn(k),
    [re, ie] = o(!1);
  h(() => {
    if (!k || !ne) return;
    let e = a.setTimeout(() => ie(!0), 120);
    return () => a.clearTimeout(e);
  }, [k, ne]);
  let I = re || j;
  (Gn(N, k),
    Wn(N, k),
    h(() => {
      if (!k || !N.current) return;
      let e = N.current,
        t = (e) => {
          let t = e.target?.closest?.(`.dsh-row-ph .dsh-obj`);
          if (t)
            try {
              t.scrollIntoView({ inline: `center`, block: `nearest` });
            } catch {}
        };
      return (e.addEventListener(`focusin`, t), () => e.removeEventListener(`focusin`, t));
    }, [k]));
  let L = F < 810,
    ae = F >= 810 && F < 1100,
    R = Yn(`products`, Sr.products)
      .map(Er)
      .filter((e) => e.name)
      .slice(0, 9),
    z = R.length;
  h(() => {
    if (!k || L || !P.current || !ee.current) return;
    let e = P.current,
      t = ee.current,
      n = 0,
      r = 0,
      i = 0,
      a = 0,
      o = !0,
      s = (e) => {
        let i = t.getBoundingClientRect();
        ((n = (e.clientX - i.left) / i.width - 0.5), (r = (e.clientY - i.top) / i.height - 0.5));
      },
      c = () => {
        ((n = 0), (r = 0));
      },
      l = new IntersectionObserver((e) => {
        o = e[0].isIntersecting;
      });
    l.observe(t);
    let u = N.current;
    (u.addEventListener(`pointermove`, s), u.addEventListener(`pointerleave`, c));
    let d = Hn(() => {
      if (!o || document.hidden) return;
      ((i += (n - i) * 0.07), (a += (r - a) * 0.07));
      let s = A ? 0 : b;
      ((e.style.transform = `rotateX(${(7 - a * 6 * s).toFixed(2)}deg) rotateY(${(-16 + i * 14 * s).toFixed(2)}deg)`),
        t.style.setProperty(`--sx`, `${(50 + i * 60).toFixed(1)}%`),
        t.style.setProperty(`--sy`, `${(42 + a * 50).toFixed(1)}%`));
    });
    return () => {
      (d(),
        l.disconnect(),
        u.removeEventListener(`pointermove`, s),
        u.removeEventListener(`pointerleave`, c));
    };
  }, [k, L, A, b]);
  let [B, oe] = o(0);
  h(() => {
    if (!k || !I || A || z < 2) return;
    let e = a.setInterval(() => {
      document.hidden || oe((e) => e + 1);
    }, 2800);
    return () => a.clearInterval(e);
  }, [k, I, A, z]);
  let V = Kn(k),
    se = (e, t) => {
      (e.preventDefault(),
        e.stopPropagation(),
        br({
          slug: t.slug,
          name: t.name,
          price: t.price,
          kind: t.kind,
          cover: t.cover,
          href: `/products/${t.slug}`,
        }));
    },
    [ce, le] = o(!1);
  h(() => {
    if (!k || L || !N.current || !a.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
    let e = N.current,
      t = te.current;
    if (!t) return;
    le(!0);
    let n = -99,
      r = -99,
      i = -99,
      o = -99,
      s = ``,
      c = !1,
      l = (e) => {
        ((n = e.clientX), (r = e.clientY), (c = !0));
        let i = e.target,
          a = i.closest?.(`.dsh-obj`) ? `obj` : i.closest?.(`.ds-btn, a, button`) ? `btn` : `dot`;
        a !== s && ((s = a), (t.dataset.m = a));
      },
      u = () => {
        ((c = !1), (s = `out`), (t.dataset.m = `out`));
      };
    (e.addEventListener(`pointermove`, l), e.addEventListener(`pointerleave`, u));
    let d = Hn(() => {
      (!c && i < -50) ||
        ((i += (n - i) * 0.22),
        (o += (r - o) * 0.22),
        (t.style.transform = `translate3d(${i.toFixed(1)}px,${o.toFixed(1)}px,0)`));
    });
    return () => {
      (d(), e.removeEventListener(`pointermove`, l), e.removeEventListener(`pointerleave`, u));
    };
  }, [k, L]);
  let ue = String(S || ``)
      .split(`,`)
      .map((e) => {
        let [t, n] = e.split(`:`);
        return { a: (t || ``).trim(), b: (n || ``).trim() };
      })
      .filter((e) => e.a),
    de = M.name || `Shelfline`,
    H = String(n).match(/^(.*?)\*(.+?)\*(.*)$/),
    fe = H ? H[1] : n,
    pe = H ? H[2] : ``,
    me = H ? H[3] : ``,
    he = `ds ds-dark dsh${I ? ` is-in` : ``}${ce ? ` has-cur` : ``}${L ? ` is-ph` : ae ? ` is-tab` : ``}${j ? ` is-still` : ``}${A ? ` is-rm` : ``}`,
    ge = L ? [R] : [R.slice(0, 3), R.slice(3, 6), R.slice(6, 9)].filter((e) => e.length),
    _e = [
      `Berlin`,
      `Austin`,
      `Lagos`,
      `Toronto`,
      `Jaipur`,
      `Lisbon`,
      `Osaka`,
      `Denver`,
      `Manchester`,
    ],
    ve = (e) => {
      let t = R[(B + e) % Math.max(1, z)],
        n = 11 + (((B + e) * 7) % 49);
      return {
        t: `${String(Math.max(0, n)).padStart(2, `0`)} min ago`,
        p: t,
        city: _e[(B + e) % _e.length],
      };
    },
    ye = (e, t) => {
      let [n, r, i] = Or(e.shape),
        a = {
          "--w": `${n}px`,
          "--h": `${r}px`,
          "--d": `${i}px`,
          "--col": e.colour,
          "--i": t,
          "--fg": $n(e.colour),
        },
        o = L;
      return u(
        `a`,
        {
          className: `dsh-obj is-${e.shape}`,
          href: `/products/${e.slug}`,
          style: a,
          "aria-label": `${e.name}, ${e.kind}, ${e.price}${e.was ? `, was ` + e.was : ``}`,
          children: [
            u(`span`, {
              className: `dsh-box`,
              "aria-hidden": !0,
              children: [
                u(`span`, {
                  className: `dsh-face f`,
                  children: [
                    d(`span`, {
                      className: `dsh-cov`,
                      children:
                        e.cover &&
                        d(`img`, {
                          ...rr(e.cover, o ? `140px` : `160px`),
                          alt: ``,
                          loading: `eager`,
                          decoding: `async`,
                        }),
                    }),
                    u(`span`, {
                      className: `dsh-print`,
                      children: [
                        d(`b`, { style: E, children: e.name }),
                        d(`i`, { style: O, children: e.kind }),
                      ],
                    }),
                    e.badge && d(`span`, { className: `dsh-badge`, style: O, children: e.badge }),
                    d(jr, {}),
                  ],
                }),
                !o &&
                  u(c, {
                    children: [
                      d(`span`, {
                        className: `dsh-face l`,
                        children: d(`b`, { style: E, children: e.name }),
                      }),
                      d(`span`, { className: `dsh-face r` }),
                      d(`span`, { className: `dsh-face t` }),
                      d(`span`, { className: `dsh-face b` }),
                      d(`span`, { className: `dsh-face k` }),
                    ],
                  }),
                d(`span`, { className: `dsh-shadow` }),
              ],
            }),
            u(`span`, {
              className: `dsh-ptag ds-lt`,
              "aria-hidden": !0,
              children: [
                d(`span`, { className: `dsh-string` }),
                d(`span`, { className: `dsh-thole` }),
                d(`b`, { style: E, children: e.name }),
                d(`i`, { style: O, children: e.format }),
                u(`span`, {
                  className: `dsh-pr`,
                  children: [
                    d(`em`, { style: E, children: e.price }),
                    e.was && d(`s`, { style: O, children: e.was }),
                    d(`button`, {
                      type: `button`,
                      tabIndex: -1,
                      className: `dsh-add`,
                      style: O,
                      onClick: (t) => se(t, e),
                      children: _,
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
        e.slug || t
      );
    },
    be = ve(0),
    xe = ve(1),
    Se = ve(2);
  return u(`section`, {
    ref: N,
    className: he,
    "data-ds-w": F,
    style: { ...ur(T), ...D, ...e.style },
    "aria-label": `Intro`,
    children: [
      d(`link`, { rel: `stylesheet`, href: Qn }),
      d(`style`, { dangerouslySetInnerHTML: { __html: hr + xr + Mr } }),
      u(`div`, {
        className: `dsh-wall`,
        "aria-hidden": !0,
        children: [d(`i`, { className: `dsh-spot` }), d(`i`, { className: `dsh-vig` })],
      }),
      u(`div`, {
        className: `dsh-in`,
        children: [
          x &&
            u(`nav`, {
              className: `dsh-nav`,
              "aria-label": `Main`,
              style: J(I, 0, -12),
              children: [
                u(`a`, { className: `dsh-logo`, href: `/`, style: E, children: [d(kr, {}), de] }),
                d(`div`, {
                  className: `dsh-links`,
                  children: ue.map((e, t) => d(`a`, { href: e.b, children: e.a }, t)),
                }),
                d(mr, { href: p, label: C, kind: `quiet`, className: `dsh-navcta`, arrow: !1 }),
              ],
            }),
          !x && d(`div`, { className: `dsh-navsp`, "aria-hidden": !0 }),
          u(`div`, {
            className: `dsh-grid`,
            children: [
              u(`div`, {
                className: `dsh-copy`,
                children: [
                  u(`p`, {
                    className: `dsh-eb`,
                    style: { ...O, ...J(I, 120) },
                    children: [d(`i`, { "aria-hidden": !0 }), t],
                  }),
                  u(`h1`, {
                    className: `dsh-h1`,
                    style: { ...E, ...J(I, 200) },
                    children: [fe, pe && d(`em`, { className: `dsh-acc`, children: pe }), me],
                  }),
                  d(`p`, { className: `dsh-sub`, style: J(I, 300), children: r }),
                  u(`div`, {
                    className: `dsh-btns`,
                    style: J(I, 380),
                    children: [
                      d(mr, { href: l, label: i, kind: `solid` }),
                      d(mr, { href: p, label: f, kind: `ghost` }),
                    ],
                  }),
                  u(`div`, {
                    className: `dsh-rcpt ds-lt`,
                    style: { ...O, ...J(I, 520, 30) },
                    "aria-live": `off`,
                    children: [
                      u(`span`, {
                        className: `dsh-rhd`,
                        children: [
                          d(`b`, { children: de.toUpperCase() }),
                          u(`span`, { children: [`· `, v] }),
                        ],
                      }),
                      [be, xe, Se].map((e, t) =>
                        e.p
                          ? u(
                              `span`,
                              {
                                className: `dsh-rl${t === 0 ? ` is-new` : ``}`,
                                children: [
                                  d(`span`, { children: e.t }),
                                  d(`span`, { className: `dsh-rn`, children: e.p.name }),
                                  d(`span`, { children: e.city }),
                                  d(`b`, { children: e.p.price }),
                                ],
                              },
                              t + `-` + ((B + t) % Math.max(1, z))
                            )
                          : null
                      ),
                      d(`span`, { className: `dsh-rt`, children: d(`span`, { children: y }) }),
                      d(`span`, {
                        className: `dsh-stamp`,
                        style: E,
                        "aria-hidden": !0,
                        children: `Sold`,
                      }),
                    ],
                  }),
                ],
              }),
              u(`div`, {
                className: `dsh-scene`,
                ref: ee,
                children: [
                  u(
                    `button`,
                    {
                      type: `button`,
                      className: `dsh-cart${V.length ? ` is-bump` : ``}`,
                      style: O,
                      onClick: yr,
                      "aria-label": `${g}, ${V.length}`,
                      children: [d(Ar, {}), g, ` · `, d(`b`, { children: V.length })],
                    },
                    V.length
                  ),
                  L
                    ? d(`div`, {
                        className: `dsh-row-ph ds-inring`,
                        children: R.map((e, t) => ye(e, t)),
                      })
                    : d(`div`, {
                        className: `dsh-unit`,
                        ref: P,
                        children: ge.map((e, t) =>
                          u(
                            `div`,
                            {
                              className: `dsh-row`,
                              style: { "--p": t },
                              children: [
                                d(`div`, {
                                  className: `dsh-objs`,
                                  children: e.map((e, n) => ye(e, t * 3 + n)),
                                }),
                                u(`div`, {
                                  className: `dsh-plank`,
                                  "aria-hidden": !0,
                                  children: [
                                    d(`i`, { className: `pt` }),
                                    d(`i`, { className: `pf` }),
                                    d(`i`, { className: `pl` }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                ],
              }),
            ],
          }),
        ],
      }),
      d(`div`, {
        ref: te,
        className: `dsh-cur`,
        "aria-hidden": !0,
        "data-m": `out`,
        children: u(`span`, { className: `dsh-puck`, style: E, children: [d(kr, { s: 12 }), m] }),
      }),
    ],
  });
}
var Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  q,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  J,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (Qn = `../../styles/css2-a59a76.css`),
      ($n = (e) => {
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
      (er = `clamp(1280px, 92vw, 1520px)`),
      (tr = [160, 320, 480, 800, 1200, 1600]),
      (nr = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return tr.find((e) => e >= i) || 1600;
      }),
      (rr = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = nr(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = nr(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: tr
              .filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (ir = (e) => {
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
      (ar = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (or = (e) => {
        let t = ir(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (sr = (e, t, n, r) => {
        let i = e ? or(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (cr = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (q = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (lr = (e) => ({
        bone: e.bone || q.bone,
        ink: e.ink || q.ink,
        brass: e.brass || q.brass,
        pine: e.pine || q.pine,
        fog: e.fog || q.fog,
        stone: e.stone || q.stone,
        cloud: e.cloud || q.cloud,
        night: e.night || q.night,
      })),
      (ur = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (dr = {
        bone: { type: P.Color, title: `Paper`, defaultValue: q.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: q.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: q.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: q.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: q.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: q.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: q.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: q.night },
      }),
      (fr = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (pr = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (mr = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: l,
      }) =>
        d(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: u(`span`, {
            className: `ds-tag`,
            children: [
              d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              u(`span`, {
                className: `ds-lbl`,
                children: [
                  d(`span`, { className: `ds-l1`, children: t }),
                  d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                d(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: u(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      d(`path`, { d: `M6 8h12l-1 12H7z` }),
                      d(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (hr = `
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
      (gr = `ds-cart`),
      (_r = () => {
        try {
          let e = JSON.parse(localStorage.getItem(gr) || `[]`);
          return Array.isArray(e) ? e : [];
        } catch {
          return [];
        }
      }),
      (vr = (e) => {
        try {
          localStorage.setItem(gr, JSON.stringify(e));
        } catch {}
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart`, { detail: { items: e } }));
        } catch {}
      }),
      (yr = () => {
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart-open`));
        } catch {}
      }),
      (br = (e, t = !0) => {
        if (a === void 0 || !e.slug) return;
        let n = _r();
        (n.find((t) => t.slug === e.slug) || n.push(e), vr(n), t && yr());
      }),
      P.Boolean,
      P.Number,
      (J = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (xr = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${er} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Sr = {
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
      }),
      (Cr = `DsHero@cms1`),
      (wr = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Tr = a === void 0 ? h : r),
      (Er = (e) => ({
        slug: e.slug || ``,
        name: e.f1 || ``,
        kind: e.f2 || ``,
        price: e.f3 || ``,
        was: e.f4 || ``,
        format: e.f5 || ``,
        badge: e.f9 || ``,
        sold: e.f10 || ``,
        rating: e.f11 || ``,
        colour: e.f12 || `#5B4BFF`,
        shape: (e.f13 || `book`).toLowerCase(),
        cover: wr(e),
      })),
      (Dr = {
        book: [118, 166, 22],
        box: [128, 150, 42],
        tin: [112, 112, 64],
        folder: [142, 108, 14],
        notebook: [116, 158, 16],
        cards: [126, 126, 26],
        kit: [150, 104, 30],
      }),
      (Or = (e) => Dr[e] || Dr.book),
      (kr = ({ s: e = 22 }) =>
        u(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          "aria-hidden": !0,
          className: `dsh-mark`,
          children: [
            d(`path`, {
              d: `M3 12.5V4.8A1.8 1.8 0 0 1 4.8 3h7.7c.5 0 .9.2 1.3.5l7.2 7.2a1.8 1.8 0 0 1 0 2.6l-7.7 7.7a1.8 1.8 0 0 1-2.6 0l-7.2-7.2a1.8 1.8 0 0 1-.5-1.3z`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinejoin: `round`,
            }),
            d(`circle`, { cx: `8`, cy: `8`, r: `1.6`, fill: `currentColor` }),
          ],
        })),
      (Ar = () =>
        u(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": !0,
          children: [
            d(`path`, {
              d: `M6 8h12l-1 12H7z`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinejoin: `round`,
            }),
            d(`path`, {
              d: `M9 8V6a3 3 0 0 1 6 0v2`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinecap: `round`,
            }),
          ],
        })),
      (jr = () =>
        d(`span`, {
          className: `dsh-bc`,
          "aria-hidden": !0,
          children: [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2].map((e, t) =>
            d(`i`, { style: { width: e } }, t)
          ),
        })),
      (Mr = `
.dsh{position:relative;overflow:hidden;min-height:100svh;background:var(--ds-night);color:var(--ds-bone);display:flex;flex-direction:column;isolation:isolate}
.dsh.has-cur,.dsh.has-cur a,.dsh.has-cur button{cursor:none}
/* the wall: walnut + a spotlight that follows the pointer */
.dsh-wall{position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(120% 90% at 70% 20%,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night) 60%)}
.dsh-wall::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 118px,color-mix(in srgb,var(--ds-cloud) 3%,transparent) 118px 119px);opacity:.7}
.dsh-spot{position:absolute;inset:-20%;background:radial-gradient(38% 34% at var(--sx,60%) var(--sy,42%),color-mix(in srgb,var(--ds-brass) 22%,transparent),transparent 70%);transition:opacity 1s;opacity:0} .is-in .dsh-spot{opacity:1}
.dsh-vig{position:absolute;inset:0;background:radial-gradient(100% 100% at 50% 50%,transparent 55%,color-mix(in srgb,var(--ds-night) 80%,transparent))}
.dsh-in{position:relative;z-index:2;width:min(100%,${er});margin:0 auto;padding:0 clamp(16px,3vw,44px);display:flex;flex-direction:column;flex:1}
/* nav */
.dsh-nav{display:flex;align-items:center;gap:28px;padding:22px 0 0;min-height:82px} .dsh-navsp{height:82px}
.dsh-logo{display:inline-flex;align-items:center;gap:10px;font-size:22px;font-weight:800;letter-spacing:-.02em;text-decoration:none;color:var(--ds-bone)} .dsh-logo .dsh-mark{color:var(--ds-brass)}
.dsh-links{display:flex;gap:26px;margin-left:auto} .dsh-links a{font-size:14px;font-weight:600;text-decoration:none;color:color-mix(in srgb,var(--ds-bone) 78%,transparent);transition:color .3s} .dsh-links a:hover{color:var(--ds-bone)}
.dsh-navcta{font-size:13px;min-height:44px}
/* grid */
.dsh-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(24px,4vw,64px);align-items:center;flex:1;padding:24px 0 56px;min-height:0}
.dsh-copy{display:flex;flex-direction:column;align-items:flex-start;gap:22px;max-width:620px;position:relative;z-index:3}
.dsh-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc-lg)} .dsh-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsh-h1{margin:0;font-size:clamp(44px,5.6vw,86px);line-height:.94;letter-spacing:-.03em;font-weight:800;color:var(--ds-bone);text-wrap:balance} .dsh-acc{font-style:normal;color:var(--ds-brass);position:relative;white-space:nowrap}
.dsh-acc::after{content:"";position:absolute;left:0;right:0;bottom:-.02em;height:.09em;background:var(--ds-brass);border-radius:2px;transform:scaleX(0);transform-origin:0 50%;transition:transform 1s cubic-bezier(.7,0,.2,1) .9s} .is-in .dsh-acc::after{transform:scaleX(1)}
.dsh-sub{margin:0;font-size:17px;line-height:1.55;max-width:520px;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dsh-btns{display:flex;flex-wrap:wrap;gap:14px 12px;margin-top:4px}
/* receipt */
.dsh-rcpt{position:relative;display:flex;flex-direction:column;gap:7px;width:min(100%,420px);padding:16px 18px 22px;margin-top:10px;color:var(--ds-ink);background:var(--ds-bone);font-size:11.5px;letter-spacing:.02em;transform:rotate(-1.4deg);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsh-rhd{display:flex;gap:8px;padding-bottom:8px;padding-right:70px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsh-rhd b{font-weight:500}
.dsh-rl{display:grid;grid-template-columns:70px 1fr auto auto;gap:10px;align-items:baseline;white-space:nowrap;color:color-mix(in srgb,var(--ds-ink) 72%,transparent)} .dsh-rl .dsh-rn{overflow:hidden;text-overflow:ellipsis;color:var(--ds-ink);font-weight:500} .dsh-rl b{font-weight:500;color:var(--ds-ink)}
.dsh-rl.is-new{animation:dsh-rl .6s cubic-bezier(.2,.8,.2,1) both} @keyframes dsh-rl{from{opacity:0;translate:0 -6px}to{opacity:1;translate:0 0}}
.dsh-rt{display:flex;justify-content:space-between;padding-top:8px;margin-top:2px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);font-size:10.5px;color:color-mix(in srgb,var(--ds-ink) 70%,transparent)}
.dsh-stamp{position:absolute;right:16px;top:12px;padding:3px 9px;border:2px solid var(--ds-acc);border-radius:4px;color:var(--ds-acc);font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;transform:rotate(-12deg) scale(.6);opacity:0;transition:transform .5s cubic-bezier(.34,1.56,.64,1) 1.3s,opacity .3s 1.3s} .is-in .dsh-stamp{transform:rotate(-12deg) scale(1);opacity:.9}
/* scene */
.dsh-scene{position:relative;min-height:560px;perspective:1500px;perspective-origin:50% 8%;display:flex;align-items:center;justify-content:center}
.dsh-cart{position:absolute;right:0;top:-6px;z-index:6;border:0;cursor:pointer;font:inherit;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--ds-bone);background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-cloud) 22%,transparent)} .dsh-cart svg{width:14px;height:14px} .dsh-cart b{font-weight:500;color:var(--ds-brass)}
.dsh-cart.is-bump{animation:dsh-bump .5s cubic-bezier(.34,1.56,.64,1)} @keyframes dsh-bump{40%{transform:scale(1.12)}}
.dsh-unit{position:relative;width:min(100%,620px);transform-style:preserve-3d;transform:rotateX(7deg) rotateY(-16deg);display:flex;flex-direction:column;gap:34px;padding:10px 0 20px}
.dsh-row{position:relative;transform-style:preserve-3d;height:206px}
.dsh-objs{position:absolute;left:8%;right:8%;bottom:14px;display:flex;align-items:flex-end;justify-content:space-between;transform-style:preserve-3d}
/* plank: a slab — top face lies flat, front face hangs below it */
.dsh-plank{position:absolute;left:0;right:0;bottom:0;height:14px;transform-style:preserve-3d;transition:opacity .9s ease calc(var(--p)*160ms),translate 1.1s cubic-bezier(.2,.8,.2,1) calc(var(--p)*160ms);opacity:0;translate:70px 0} .is-in .dsh-plank{opacity:1;translate:0 0}
.dsh-plank i{position:absolute;display:block}
.dsh-plank .pt{left:0;right:0;top:0;height:150px;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 60%,var(--ds-cloud) 12%),color-mix(in srgb,var(--ds-pine) 85%,var(--ds-night)));transform-origin:50% 0;transform:translateZ(75px) rotateX(-90deg)}
.dsh-plank .pf{left:0;right:0;top:0;bottom:0;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night));transform:translateZ(75px);box-shadow:0 22px 40px -10px rgba(0,0,0,.6)}
.dsh-plank .pl{left:0;top:0;width:150px;height:14px;background:var(--ds-night);transform-origin:0 50%;transform:translateZ(75px) rotateY(90deg)}
/* objects: 3D boxes from --w --h --d */
.dsh-obj{position:relative;display:block;width:var(--w);height:var(--h);text-decoration:none;color:var(--fg);transform-style:preserve-3d;transition:transform .6s cubic-bezier(.34,1.56,.64,1),translate 1s cubic-bezier(.34,1.4,.64,1) calc(var(--i)*90ms + 350ms),opacity .5s ease calc(var(--i)*90ms + 350ms);opacity:0;translate:0 -46px} .is-in .dsh-obj{opacity:1;translate:0 0}
.dsh-obj:hover,.dsh-obj:focus-visible{transform:translate3d(0,-18px,70px) rotateY(-10deg);z-index:5} .dsh-obj:focus-visible{outline:3px solid var(--ds-brass)!important;outline-offset:8px!important;box-shadow:none!important} .dsh-row-ph:focus-visible{outline:2px solid var(--ds-brass)!important;outline-offset:-2px!important}
.dsh-box{position:absolute;inset:0;transform-style:preserve-3d}
.dsh-face{position:absolute;left:50%;top:50%;translate:-50% -50%;width:var(--w);height:var(--h);background:var(--col);backface-visibility:hidden}
.dsh-face.f{transform:translateZ(calc(var(--d)/2));overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:10px;border-radius:2px 5px 5px 2px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.dsh-face.k{transform:rotateY(180deg) translateZ(calc(var(--d)/2));background:color-mix(in srgb,var(--col) 70%,#000)}
.dsh-face.l{width:var(--d);transform:rotateY(-90deg) translateZ(calc(var(--w)/2));background:color-mix(in srgb,var(--col) 62%,#000);display:flex;align-items:center;justify-content:center;overflow:hidden} .dsh-face.l b{writing-mode:vertical-rl;transform:rotate(180deg);font-size:9px;letter-spacing:.06em;white-space:nowrap;color:var(--fg);opacity:.85;max-height:90%;overflow:hidden}
.dsh-face.r{width:var(--d);transform:rotateY(90deg) translateZ(calc(var(--w)/2));background:color-mix(in srgb,var(--col) 78%,#000)}
.dsh-face.t{height:var(--d);transform:rotateX(90deg) translateZ(calc(var(--h)/2));background:color-mix(in srgb,var(--col) 82%,#fff)}
.dsh-face.b{height:var(--d);transform:rotateX(-90deg) translateZ(calc(var(--h)/2));background:color-mix(in srgb,var(--col) 40%,#000)}
.dsh-cov{position:absolute;inset:0;opacity:.55;mix-blend-mode:luminosity} .dsh-cov img{width:100%;height:100%;object-fit:cover;display:block}
.dsh-face.f::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,color-mix(in srgb,var(--col) 70%,#000) 100%)}
.dsh-print{position:relative;display:flex;flex-direction:column;gap:3px} .dsh-print b{font-size:13px;line-height:1.05;letter-spacing:-.01em;font-weight:800;text-wrap:balance} .dsh-print i{font-style:normal;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75}
.dsh-badge{position:absolute;top:8px;left:-4px;padding:3px 7px;background:var(--ds-brass);color:var(--ds-ink);font-size:8px;letter-spacing:.14em;text-transform:uppercase;transform:rotate(-6deg);border-radius:2px}
.dsh-bc{position:absolute;right:8px;top:8px;display:flex;gap:1px;height:10px;opacity:.5} .dsh-bc i{display:block;height:100%;background:var(--fg)}
.dsh-shadow{position:absolute;left:-6%;right:-6%;bottom:-2px;height:14px;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.55),transparent 70%);transform:rotateX(90deg) translateZ(-4px);transform-origin:50% 100%;pointer-events:none}
/* shape flavours */
.is-book .dsh-face.f{border-left:3px solid color-mix(in srgb,var(--col) 55%,#000)} .is-notebook .dsh-face.f{border-left:6px double color-mix(in srgb,var(--col) 55%,#000)}
.is-tin .dsh-face.f,.is-tin .dsh-face.k{border-radius:50% 50% 6px 6px/16% 16% 6px 6px;background:radial-gradient(60% 60% at 50% 40%,var(--col),color-mix(in srgb,var(--col) 60%,#000))} .is-tin .dsh-face.t{background:linear-gradient(90deg,#8A8A90,#E8E8EC 50%,#8A8A90)}
.is-tin .dsh-print{align-items:center;text-align:center;justify-content:center;flex:1} .is-tin .dsh-face.f{justify-content:center;padding:14px;border:4px solid color-mix(in srgb,var(--col) 35%,#fff)}
.is-folder .dsh-face.f{border-radius:8px 4px 4px 4px} .is-folder .dsh-face.f::after{content:"";position:absolute;left:0;top:0;width:44%;height:14px;background:color-mix(in srgb,var(--col) 82%,#fff);border-radius:0 6px 0 0}
.is-cards .dsh-face.f{box-shadow:4px 4px 0 -1px color-mix(in srgb,var(--col) 60%,#000),8px 8px 0 -2px color-mix(in srgb,var(--col) 40%,#000)}
.is-box .dsh-face.f::after{content:"";position:absolute;left:0;right:0;top:34%;height:1px;background:rgba(0,0,0,.35)}
/* price tag hanging from the top-right corner */
.dsh-ptag{position:absolute;left:calc(var(--w) - 14px);bottom:calc(var(--h) - 10px);width:172px;padding:12px 14px 12px 22px;background:var(--ds-bone);color:var(--ds-ink);display:flex;flex-direction:column;gap:3px;transform-origin:8px 8px;clip-path:polygon(14px 0,100% 0,100% 100%,14px 100%,0 12px);opacity:0;transform:rotate(-16deg) translateY(10px) scale(.92);transition:opacity .25s,transform .5s cubic-bezier(.34,1.56,.64,1);pointer-events:none;z-index:6;box-shadow:0 14px 30px -10px rgba(0,0,0,.5)}
.dsh-obj:hover .dsh-ptag,.dsh-obj:focus-visible .dsh-ptag{opacity:1;transform:rotate(0) translateY(0) scale(1);pointer-events:auto;animation:dsh-sw .9s cubic-bezier(.34,1.56,.64,1) 1}
@keyframes dsh-sw{0%{rotate:-14deg}45%{rotate:5deg}100%{rotate:0deg}}
.dsh-thole{position:absolute;left:7px;top:6px;width:6px;height:6px;border-radius:50%;background:var(--ds-night);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 30%,transparent)}
.dsh-string{position:absolute;left:8px;top:-22px;width:1.5px;height:26px;background:color-mix(in srgb,var(--ds-bone) 70%,transparent);transform-origin:50% 100%;rotate:24deg}
.dsh-ptag b{font-size:13px;line-height:1.1;font-weight:800;letter-spacing:-.01em} .dsh-ptag i{font-style:normal;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-ink) 65%,transparent)}
.dsh-pr{display:flex;align-items:center;gap:8px;margin-top:4px} .dsh-pr em{font-style:normal;font-size:17px;font-weight:800} .dsh-pr s{font-size:10px;color:color-mix(in srgb,var(--ds-ink) 55%,transparent)}
.dsh-add{margin-left:auto;padding:6px 10px;border:0;border-radius:999px;background:var(--ds-brass);color:var(--ds-ink);font-size:10px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .3s} .dsh-add:hover{transform:scale(1.08);background:var(--ds-ink);color:var(--ds-bone)}
/* cursor */
.dsh-cur{position:fixed;left:0;top:0;z-index:60;pointer-events:none;will-change:transform;opacity:0;transition:opacity .25s} .dsh-cur[data-m="dot"],.dsh-cur[data-m="obj"],.dsh-cur[data-m="btn"]{opacity:1}
.dsh-puck{position:absolute;left:0;top:0;display:inline-flex;align-items:center;gap:6px;translate:-50% -50%;padding:0;width:10px;height:10px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);font-size:11px;font-weight:800;letter-spacing:.04em;white-space:nowrap;overflow:hidden;transition:width .35s cubic-bezier(.34,1.56,.64,1),height .35s cubic-bezier(.34,1.56,.64,1),border-radius .35s,padding .35s,background .3s} .dsh-puck .dsh-mark{display:none}
.dsh-cur[data-m="obj"] .dsh-puck{width:auto;height:30px;padding:0 12px 0 10px;border-radius:6px 999px 999px 6px;clip-path:polygon(10px 0,100% 0,100% 100%,10px 100%,0 50%)} .dsh-cur[data-m="obj"] .dsh-puck .dsh-mark{display:block}
.dsh-cur[data-m="btn"] .dsh-puck{width:44px;height:44px;background:transparent;box-shadow:inset 0 0 0 1.5px var(--ds-bone);font-size:0}
/* tablet + phone */
.dsh.is-tab .dsh-grid{grid-template-columns:1fr;gap:30px} .dsh.is-tab .dsh-copy{max-width:640px} .dsh.is-tab .dsh-scene{min-height:520px} .dsh.is-tab .dsh-unit{width:min(100%,600px);margin:0 auto}
.dsh.is-ph .dsh-nav{gap:14px;min-height:70px;padding-top:16px} .dsh.is-ph .dsh-links{display:none} .dsh.is-ph .dsh-navcta{margin-left:auto}
.dsh.is-ph .dsh-grid{grid-template-columns:1fr;gap:26px;padding:16px 0 40px} .dsh.is-ph .dsh-h1{font-size:clamp(40px,12vw,54px)} .dsh.is-ph .dsh-sub{font-size:16px} .dsh.is-ph .dsh-rcpt{transform:none;width:100%}
.dsh.is-ph .dsh-scene{min-height:0;perspective:none;display:block;margin:0 -16px;padding:30px 16px 14px} .dsh.is-ph .dsh-cart{right:16px;top:-6px}
.dsh-row-ph{display:flex;gap:22px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px 4px 18px;scrollbar-width:none;-webkit-overflow-scrolling:touch} .dsh-row-ph::-webkit-scrollbar{display:none}
.dsh.is-ph .dsh-obj{flex:none;width:max(var(--w),176px);scroll-snap-align:center;transform:none!important;transition:opacity .5s ease calc(var(--i)*70ms + 200ms),translate .9s cubic-bezier(.34,1.4,.64,1) calc(var(--i)*70ms + 200ms);margin-bottom:96px} .dsh.is-ph .dsh-face.f{transform:none;translate:-50% 0;left:50%;top:0;border-radius:6px;box-shadow:6px 6px 0 -1px color-mix(in srgb,var(--col) 55%,#000)}
.dsh.is-ph .dsh-shadow{display:none} .dsh.is-ph .dsh-obj:focus-visible{outline-offset:-4px!important}
.dsh.is-ph .dsh-ptag{opacity:1;transform:none;left:0;bottom:auto;top:calc(var(--h) + 14px);width:100%;pointer-events:auto;animation:none;box-shadow:none;clip-path:polygon(12px 0,100% 0,100% 100%,12px 100%,0 10px)} .dsh.is-ph .dsh-string{display:none}
.dsh.is-rm .dsh-obj,.dsh.is-rm .dsh-plank,.dsh.is-rm .dsh-stamp{transition:none;animation:none} .dsh.is-still .dsh-obj,.dsh.is-still .dsh-plank{transition:none}
@media (max-width:1100px){.dsh-links{gap:18px}}`),
      O(Zn, {
        ...dr,
        ...fr,
        ...pr,
        eyebrow: {
          type: P.String,
          title: `Eyebrow`,
          defaultValue: `Creator store · Templates · Ebooks · Courses`,
        },
        heading: {
          type: P.String,
          title: `Heading`,
          description: `Wrap the accent phrase in *asterisks*`,
          defaultValue: `Everything you make, *on one shelf.*`,
          displayTextArea: !0,
        },
        subCopy: {
          type: P.String,
          title: `Sub copy`,
          defaultValue: `Shelfline is a creator store: templates, ebooks, presets and courses sold from one shelf. Instant download, lifetime updates, and checkout links that go straight to Lemon Squeezy, Gumroad or Stripe.`,
          displayTextArea: !0,
        },
        button1: { type: P.String, title: `Button 1`, defaultValue: `Browse the shelf` },
        button1Link: { type: P.Link, title: `Button 1 link`, defaultValue: `/products` },
        button2: { type: P.String, title: `Button 2`, defaultValue: `Get the free guide` },
        button2Link: { type: P.Link, title: `Button 2 link`, defaultValue: `/free` },
        receiptTitle: { type: P.String, title: `Receipt title`, defaultValue: `Recent orders` },
        soldLine: {
          type: P.String,
          title: `Receipt total line`,
          defaultValue: `2,140 orders this month · 4.9 average`,
        },
        cartLabel: { type: P.String, title: `Cart label`, defaultValue: `Cart` },
        addLabel: { type: P.String, title: `Add label`, defaultValue: `Add` },
        cursorLabel: { type: P.String, title: `Cursor label`, defaultValue: `Pick up` },
        tilt: { type: P.Number, title: `Shelf turn`, min: 0, max: 2, step: 0.1, defaultValue: 1 },
        showNav: { type: P.Boolean, title: `Show nav`, defaultValue: !0 },
        navLinks: {
          type: P.String,
          title: `Nav links`,
          description: `Label:/path, …`,
          defaultValue: `Products:/products, Bundles:/bundles, Courses:/courses, Reviews:/reviews, Notes:/notes`,
          hidden: (e) => !e.showNav,
        },
        navCta: {
          type: P.String,
          title: `Nav button`,
          defaultValue: `Free guide`,
          hidden: (e) => !e.showNav,
        },
      }));
  });
function Pr() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Jr), document.head.appendChild(e));
  }, []);
}
function Fr() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function Ir() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Lr(e, t) {
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
function Rr(e, t, n) {
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
function zr(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: $r(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Zr(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: $r(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Zr(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: $r(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? Zr(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Br(e, t) {
  h(() => {
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
function Vr(e) {
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
function Hr(e, t, n, r) {
  h(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      o = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    Vr(i);
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
      g = Rr(
        () => {
          if (!h) return;
          let e = ti((m - f) / (m + p)),
            t = p > m * 1.05 ? ti(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * li),
              (l += (t - l) * li),
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
function Ur(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function Wr(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = Fr(),
    l = Ur(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = Rr(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function Gr(e) {
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
function Kr(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    gi(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[hi] = 1));
      } catch {}
      let s = () => {
          let t = Gr(e);
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
function qr(e) {
  let {
      eyebrow: t = `What's inside`,
      heading: n = `Open the box|*before you buy.*`,
      subCopy:
        r = `Every product page lists the files, the counts and the licence, so you know exactly what lands in your downloads folder.`,
      product: i = `launch-course`,
      specs:
        a = `Format|Video + PDF worksheets; Files|14 lessons, 6 sheets; Licence|Personal + commercial; Updates|Free for life; Delivery|Instant download`,
      button: o = `See the product`,
      buttonLink: c = `/products/launch-course`,
      boxLabel: l = `Contents`,
      bpHint: f = `auto`,
    } = e,
    p = ni(e),
    { D: m, B: h, M: g } = zr(e);
  Pr();
  let _ = Ir(),
    v = ei(),
    y = Fr(),
    b = s(null),
    { w: x } = Lr(b, f),
    S = Wr(b, _, v);
  (Br(b, _), Hr(b, _, v));
  let C = x < 810,
    w = x >= 810 && x < 1100,
    T = Kr(`products`, mi.products),
    E =
      T.find((e) => e.slug === String(i || ``).trim()) ||
      T.find((e) => /course/i.test(e.f2 || ``)) ||
      T[0] ||
      {},
    D = _i(E.f7 || ``).slice(0, 5),
    O = _i(a)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { k: (t || ``).trim(), v: (n || ``).trim() };
      })
      .filter((e) => e.k);
  return u(`section`, {
    ref: b,
    className: `ds ds-sec dsi${S ? ` is-on` : ``}${C ? ` is-ph` : w ? ` is-tab` : ``}${y ? ` is-still` : ``}${v ? ` is-rm` : ``}`,
    style: { ...ri(p), ...h, ...e.style, "--col": E.f12 || `#1B2A6B` },
    "aria-label": di(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: Jr }),
      d(`style`, { dangerouslySetInnerHTML: { __html: ci + pi + vi } }),
      u(`div`, {
        className: `ds-wrap dsi-wrap`,
        children: [
          d(`div`, {
            className: `dsi-scene`,
            "aria-hidden": !0,
            children: u(`div`, {
              className: `dsi-box`,
              children: [
                d(`span`, {
                  className: `dsi-lid`,
                  children: u(`span`, {
                    className: `dsi-lidin`,
                    children: [
                      d(`b`, { style: m, children: E.f1 }),
                      d(`i`, { style: g, children: E.f2 }),
                    ],
                  }),
                }),
                u(`span`, {
                  className: `dsi-body`,
                  children: [
                    d(`span`, { className: `dsi-bl`, style: g, children: l }),
                    u(`span`, {
                      className: `dsi-bc`,
                      children: [
                        d(`b`, { style: m, children: E.f1 }),
                        d(`i`, { style: g, children: E.f5 }),
                      ],
                    }),
                    d(`span`, { className: `dsi-bar` }),
                  ],
                }),
                d(`span`, {
                  className: `dsi-items`,
                  children: D.map((e, t) =>
                    u(
                      `span`,
                      {
                        className: `dsi-it`,
                        style: { ...g, "--i": t },
                        children: [d(`i`, {}), d(`span`, { children: e })],
                      },
                      t
                    )
                  ),
                }),
                d(`span`, { className: `dsi-sidef`, "aria-hidden": !0 }),
                d(`span`, { className: `dsi-shadow` }),
              ],
            }),
          }),
          u(`div`, {
            className: `dsi-copy`,
            children: [
              u(`p`, {
                className: `dsi-eb`,
                style: { ...g, ...X(S, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(fi, {
                text: n,
                on: S,
                D: m,
                size: C ? `clamp(38px,11vw,52px)` : `clamp(42px,4.4vw,70px)`,
                lh: 0.96,
                delay: 80,
              }),
              d(`p`, { className: `dsi-sub`, style: X(S, 240), children: r }),
              d(`ul`, {
                className: `dsi-specs`,
                style: X(S, 340),
                children: O.map((e, t) =>
                  u(
                    `li`,
                    {
                      children: [
                        d(`span`, { style: g, children: e.k }),
                        d(`i`, { "aria-hidden": !0 }),
                        d(`b`, { children: e.v }),
                      ],
                    },
                    t
                  )
                ),
              }),
              d(`div`, { style: X(S, 440), children: d(si, { href: c, label: o, kind: `solid` }) }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  Y,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  X,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (Jr = `../../styles/css2-a59a76.css`),
      (Yr = `clamp(1280px, 92vw, 1520px)`),
      (Xr = (e) => {
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
      (Zr = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (Qr = (e) => {
        let t = Xr(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      ($r = (e, t, n, r) => {
        let i = e ? Qr(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (ei = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (ti = (e) => Math.min(1, Math.max(0, e))),
      (Y = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (ni = (e) => ({
        bone: e.bone || Y.bone,
        ink: e.ink || Y.ink,
        brass: e.brass || Y.brass,
        pine: e.pine || Y.pine,
        fog: e.fog || Y.fog,
        stone: e.stone || Y.stone,
        cloud: e.cloud || Y.cloud,
        night: e.night || Y.night,
      })),
      (ri = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (ii = {
        bone: { type: P.Color, title: `Paper`, defaultValue: Y.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: Y.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: Y.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: Y.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: Y.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: Y.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: Y.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: Y.night },
      }),
      (ai = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (oi = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (si = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: l,
      }) =>
        d(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: u(`span`, {
            className: `ds-tag`,
            children: [
              d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              u(`span`, {
                className: `ds-lbl`,
                children: [
                  d(`span`, { className: `ds-l1`, children: t }),
                  d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                d(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: u(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      d(`path`, { d: `M6 8h12l-1 12H7z` }),
                      d(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (ci = `
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
      (li = 0.18),
      P.Boolean,
      P.Number,
      (ui = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (di = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (fi = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: o = 0,
        step: s = 55,
        style: l,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return d(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": di(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: ui(e).map((e, t) => {
                    let n = o + m++ * s;
                    return u(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          d(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? u(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    d(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: d(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : u(c, { children: [e.t, e.tail] }),
                          }),
                          ` `,
                        ],
                      },
                      t
                    );
                  }),
                },
                t
              )
            ),
        });
      }),
      (X = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (pi = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${Yr} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (mi = {
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
      }),
      (hi = `DsInside@cms1`),
      (gi = a === void 0 ? h : r),
      (_i = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (vi = `
.dsi{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(90px,10vw,150px) 0;overflow:hidden;z-index:12}
.dsi-wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(40px,6vw,100px);align-items:center}
/* scene: --sp 0 → 1 over the section; lid opens .3→.55, items rise .45→.85 */
.dsi-scene{position:relative;min-height:560px;display:grid;place-items:center;perspective:1400px;--o:clamp(0,calc((var(--sp,.5) - .2)/.2),1)}
.dsi-box{position:relative;width:min(100%,380px);aspect-ratio:1/1;transform-style:preserve-3d;transform:rotateX(12deg) rotateY(-18deg)}
.dsi-body{position:absolute;left:0;right:0;bottom:0;height:64%;background:var(--col);border-radius:6px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08),0 40px 80px -30px rgba(0,0,0,.5);display:flex;flex-direction:column;justify-content:flex-end;padding:22px;color:#fff;overflow:hidden}
.dsi-body::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.28),transparent 30%,transparent 70%,rgba(255,255,255,.08))}
.dsi-body::after{content:"";position:absolute;left:0;right:0;top:0;height:22px;background:linear-gradient(180deg,rgba(0,0,0,.45),transparent)}
.dsi-bl{position:absolute;left:22px;top:18px;font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.75} .dsi-bc{position:relative;display:flex;flex-direction:column;gap:4px} .dsi-bc b{font-size:22px;line-height:1;font-weight:800;letter-spacing:-.02em} .dsi-bc i{font-style:normal;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75}
.dsi-bar{position:absolute;right:22px;top:18px;width:46px;height:12px;background:repeating-linear-gradient(90deg,#fff 0 2px,transparent 2px 4px,#fff 4px 5px,transparent 5px 8px);opacity:.6}
/* lid hinges at its back edge */
.dsi-lid{position:absolute;left:-2%;right:-2%;top:22%;height:16%;background:color-mix(in srgb,var(--col) 78%,#fff);border-radius:6px;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);transform-origin:50% 0;transform:rotateX(calc(var(--o)*-118deg));transition:none;backface-visibility:visible;display:flex;align-items:center;justify-content:center;color:#fff;overflow:hidden}
.dsi-lid::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.18),transparent 60%,rgba(0,0,0,.2))}
.dsi-lidin{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center} .dsi-lidin b{font-size:15px;font-weight:800;letter-spacing:-.01em} .dsi-lidin i{font-style:normal;font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.8}
/* contents rise out of the box */
.dsi-items{position:absolute;left:6%;right:6%;top:0;height:40%;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;transform-style:preserve-3d}
.dsi-it{--k:clamp(0,calc((var(--sp,.5) - .28 - var(--i)*.04)/.14),1);display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--ds-cloud);color:var(--ds-ink);border-radius:4px;font-size:11.5px;letter-spacing:.02em;box-shadow:0 14px 30px -14px rgba(0,0,0,.5);clip-path:polygon(12px 0,100% 0,100% 100%,12px 100%,0 50%);padding-left:22px;
  opacity:var(--k);transform:translateY(calc((1 - var(--k))*120px)) translateZ(calc(var(--i)*6px)) rotate(calc((1 - var(--k))*-6deg + var(--i)*1.2deg - 2deg))}
.dsi-it i{width:8px;height:8px;border-radius:50%;background:var(--ds-brass);flex:none}
.dsi-sidef{position:absolute;right:0;bottom:0;width:52px;height:64%;background:linear-gradient(90deg,color-mix(in srgb,var(--col) 62%,#000),color-mix(in srgb,var(--col) 45%,#000));transform-origin:100% 50%;transform:rotateY(-90deg);border-radius:0 4px 4px 0}
.dsi-shadow{position:absolute;left:-8%;right:-8%;bottom:-8%;height:40px;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.35),transparent 70%);transform:rotateX(80deg);filter:blur(4px)}
/* copy */
.dsi-copy{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
.dsi-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsi-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsi .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsi .ds-it{color:var(--ds-acc)}
.dsi-sub{margin:0;max-width:460px;font-size:16.5px;line-height:1.6;color:var(--ds-mut)}
.dsi-specs{list-style:none;margin:6px 0 0;padding:0;width:100%;max-width:460px;display:flex;flex-direction:column}
.dsi-specs li{display:flex;align-items:baseline;gap:12px;padding:11px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent);font-size:14.5px} .dsi-specs li:first-child{border-top:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dsi-specs span{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut);flex:none} .dsi-specs i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 30%,transparent);translate:0 -4px} .dsi-specs b{font-weight:600;text-align:right}
/* tablet + phone */
.dsi.is-tab .dsi-wrap{grid-template-columns:1fr;gap:40px} .dsi.is-tab .dsi-scene{min-height:520px}
.dsi.is-ph .dsi-wrap{grid-template-columns:1fr;gap:24px} .dsi.is-ph .dsi-scene{min-height:420px;--o:1} .dsi.is-ph .dsi-box{width:min(100%,300px)} .dsi.is-ph .dsi-it{--k:1;font-size:11px}
.dsi.is-rm .dsi-scene,.dsi.is-still .dsi-scene{--o:1} .dsi.is-rm .dsi-it,.dsi.is-still .dsi-it{--k:1}`),
      O(qr, {
        ...oi,
        eyebrow: { type: P.String, title: `Eyebrow`, defaultValue: `What's inside` },
        heading: {
          type: P.String,
          title: `Heading`,
          defaultValue: `Open the box|*before you buy.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: P.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Every product page lists the files, the counts and the licence, so you know exactly what lands in your downloads folder.`,
        },
        product: {
          type: P.String,
          title: `Product slug`,
          description: `The Products row to open (its Includes field fills the box)`,
          defaultValue: `launch-course`,
        },
        specs: {
          type: P.String,
          title: `Spec rows`,
          description: `Label|Value; …`,
          displayTextArea: !0,
          defaultValue: `Format|Video + PDF worksheets; Files|14 lessons, 6 sheets; Licence|Personal + commercial; Updates|Free for life; Delivery|Instant download`,
        },
        boxLabel: { type: P.String, title: `Box label`, defaultValue: `Contents` },
        button: { type: P.String, title: `Button`, defaultValue: `See the product` },
        buttonLink: { type: P.Link, title: `Button link`, defaultValue: `/products/launch-course` },
        ...ii,
        ...ai,
      }));
  });
function bi() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = ki), document.head.appendChild(e));
  }, []);
}
function xi() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function Si() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Ci(e, t) {
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
function wi(e, t, n) {
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
function Ti(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: Pi(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Mi(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: Pi(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Mi(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: Pi(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? Mi(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Ei(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function Di(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = xi(),
    l = Ei(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = wi(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function Oi(e) {
  let {
      eyebrow: t = `In numbers`,
      stats:
        n = `2140|orders this month|; 38|countries|; 4.9|average rating|; 12400|downloads to date|`,
      chartLabel: r = `Orders this week`,
      chartNote: i = `Mon → Sun`,
      worksLabel: a = `Works with`,
      works: c = `Lemon Squeezy, Gumroad, Stripe, Notion, Figma, Canva, Lightroom`,
      bpHint: l = `auto`,
    } = e,
    f = Li(e),
    { D: p, B: m, M: g } = Ti(e);
  bi();
  let _ = Si(),
    v = Fi(),
    y = xi(),
    b = s(null),
    { w: x } = Ci(b, l),
    S = Di(b, _, v),
    C = x < 810,
    w = x >= 810 && x < 1100,
    T = Gi(n).map((e) => {
      let t = e.split(`|`),
        n = (t[0] || ``).trim();
      return {
        raw: n,
        num: parseFloat(n.replace(/[^\d.]/g, ``)) || 0,
        dec: (n.split(`.`)[1] || ``).length,
        label: (t[1] || ``).trim(),
        suffix: (t[2] || ``).trim(),
      };
    }),
    [E, D] = o(0);
  h(() => {
    if (!_ || !S) return;
    if (v) {
      D(1);
      return;
    }
    let e = 0,
      t = 0,
      n = performance.now(),
      r = (i) => {
        ((e = Ii((i - n) / 1600)), D(1 - (1 - e) ** 3), e < 1 && (t = requestAnimationFrame(r)));
      };
    return ((t = requestAnimationFrame(r)), () => cancelAnimationFrame(t));
  }, [_, S, v]);
  let O = (e, t) => {
      let n = e.num * t;
      return e.dec ? n.toFixed(e.dec) : Math.round(n).toLocaleString(`en-US`);
    },
    k = [42, 55, 48, 71, 66, 88, 97],
    A = c
      .split(`,`)
      .map((e) => e.trim())
      .filter(Boolean);
  return u(`section`, {
    ref: b,
    className: `ds ds-sec ds-dark ds-cut-b dsp${S ? ` is-on` : ``}${C ? ` is-ph` : w ? ` is-tab` : ``}${y ? ` is-still` : ``}`,
    style: { ...Ri(f), ...m, ...e.style, "--cut": C ? `8vw` : `5vw` },
    "aria-label": t,
    children: [
      d(`link`, { rel: `stylesheet`, href: ki }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Hi + Wi + Ki } }),
      u(`div`, {
        className: `ds-wrap dsp-wrap`,
        children: [
          u(`p`, {
            className: `dsp-eb`,
            style: { ...g, ...Ui(S, 0) },
            children: [d(`i`, { "aria-hidden": !0 }), t],
          }),
          u(`div`, {
            className: `dsp-grid`,
            children: [
              d(`div`, {
                className: `dsp-stats`,
                children: T.map((e, t) =>
                  u(
                    `div`,
                    {
                      className: `dsp-st`,
                      style: Ui(S, 100 + t * 90, 24),
                      children: [
                        u(`b`, {
                          style: p,
                          children: [
                            d(`span`, { className: `dsp-num`, children: O(e, y || v ? 1 : E) }),
                            e.suffix,
                          ],
                        }),
                        d(`span`, { style: g, children: e.label }),
                      ],
                    },
                    t
                  )
                ),
              }),
              u(`div`, {
                className: `dsp-chart`,
                style: Ui(S, 300, 30),
                "aria-label": r,
                children: [
                  u(`span`, {
                    className: `dsp-ch`,
                    style: g,
                    children: [d(`b`, { children: r }), d(`span`, { children: i })],
                  }),
                  d(`span`, {
                    className: `dsp-bars`,
                    "aria-hidden": !0,
                    children: k.map((e, t) => d(`i`, { style: { "--h": `${e}%`, "--i": t } }, t)),
                  }),
                  d(`span`, {
                    className: `dsp-days`,
                    style: g,
                    "aria-hidden": !0,
                    children: [`M`, `T`, `W`, `T`, `F`, `S`, `S`].map((e, t) =>
                      d(`span`, { children: e }, t)
                    ),
                  }),
                ],
              }),
            ],
          }),
          u(`div`, {
            className: `dsp-works`,
            style: Ui(S, 420),
            children: [
              d(`span`, { className: `dsp-wl`, style: g, children: a }),
              d(`span`, {
                className: `dsp-wrow`,
                children: A.map((e, t) =>
                  d(`span`, { className: `dsp-w`, style: p, children: e }, t)
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Z,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (ki = `../../styles/css2-a59a76.css`),
      (Ai = `clamp(1280px, 92vw, 1520px)`),
      (ji = (e) => {
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
      (Mi = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (Ni = (e) => {
        let t = ji(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (Pi = (e, t, n, r) => {
        let i = e ? Ni(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (Fi = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (Ii = (e) => Math.min(1, Math.max(0, e))),
      (Z = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Li = (e) => ({
        bone: e.bone || Z.bone,
        ink: e.ink || Z.ink,
        brass: e.brass || Z.brass,
        pine: e.pine || Z.pine,
        fog: e.fog || Z.fog,
        stone: e.stone || Z.stone,
        cloud: e.cloud || Z.cloud,
        night: e.night || Z.night,
      })),
      (Ri = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (zi = {
        bone: { type: P.Color, title: `Paper`, defaultValue: Z.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: Z.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: Z.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: Z.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: Z.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: Z.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: Z.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: Z.night },
      }),
      (Bi = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Vi = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Hi = `
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
      P.Boolean,
      P.Number,
      (Ui = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Wi = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${Ai} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Gi = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Ki = `
.dsp{position:relative;background:var(--ds-pine);color:var(--ds-bone);padding:clamp(70px,8vw,120px) 0 calc(clamp(70px,8vw,120px) + var(--cut,5vw));z-index:13}
.dsp::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 80% at 80% 0,color-mix(in srgb,var(--ds-brass) 14%,transparent),transparent 60%);pointer-events:none}
.dsp-wrap{position:relative}
.dsp-eb{display:inline-flex;align-items:center;gap:10px;margin:0 0 34px;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsp-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsp-grid{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,.6fr);gap:clamp(30px,5vw,80px);align-items:end}
.dsp-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px 40px}
.dsp-st{display:flex;flex-direction:column;gap:8px;padding-top:18px;border-top:1px solid color-mix(in srgb,var(--ds-bone) 20%,transparent)}
.dsp-st b{font-size:clamp(44px,5vw,78px);line-height:.95;font-weight:800;letter-spacing:-.04em;font-variant-numeric:tabular-nums} .dsp-st span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)}
.dsp-chart{display:flex;flex-direction:column;gap:12px;padding:20px;border-radius:14px;background:color-mix(in srgb,var(--ds-night) 60%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 12%,transparent)}
.dsp-ch{display:flex;justify-content:space-between;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)} .dsp-ch b{font-weight:500;color:var(--ds-bone)}
.dsp-bars{display:flex;align-items:flex-end;gap:8px;height:120px} .dsp-bars i{flex:1;height:var(--h);background:color-mix(in srgb,var(--ds-bone) 22%,transparent);border-radius:3px 3px 0 0;transform:scaleY(0);transform-origin:50% 100%;transition:transform 1s cubic-bezier(.2,.8,.2,1) calc(400ms + var(--i)*80ms)} .dsp-bars i:last-child{background:var(--ds-brass)} .dsp.is-on .dsp-bars i{transform:scaleY(1)}
.dsp-days{display:flex;justify-content:space-between;font-size:9.5px;letter-spacing:.1em;color:color-mix(in srgb,var(--ds-bone) 50%,transparent)} .dsp-days span{flex:1;text-align:center}
.dsp-works{display:flex;align-items:center;gap:22px;flex-wrap:wrap;margin-top:clamp(40px,5vw,70px);padding-top:22px;border-top:1px solid color-mix(in srgb,var(--ds-bone) 16%,transparent)}
.dsp-wl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)}
.dsp-wrow{display:flex;flex-wrap:wrap;gap:10px 22px} .dsp-w{font-size:17px;font-weight:700;letter-spacing:-.01em;color:color-mix(in srgb,var(--ds-bone) 80%,transparent);transition:color .3s} .dsp-w:hover{color:var(--ds-brass)}
.dsp.is-tab .dsp-grid{grid-template-columns:1fr}
.dsp.is-ph .dsp-grid{grid-template-columns:1fr;gap:26px} .dsp.is-ph .dsp-stats{grid-template-columns:1fr 1fr;gap:20px} .dsp.is-ph .dsp-st b{font-size:40px} .dsp.is-ph .dsp-works{gap:14px}
@media (prefers-reduced-motion:reduce){.dsp-bars i{transform:scaleY(1);transition:none}}`),
      O(Oi, {
        ...Vi,
        eyebrow: { type: P.String, title: `Eyebrow`, defaultValue: `In numbers` },
        stats: {
          type: P.String,
          title: `Stats`,
          description: `Number|Label|Suffix; …`,
          displayTextArea: !0,
          defaultValue: `2140|orders this month|; 38|countries|; 4.9|average rating|; 12400|downloads to date|`,
        },
        chartLabel: { type: P.String, title: `Chart label`, defaultValue: `Orders this week` },
        chartNote: { type: P.String, title: `Chart note`, defaultValue: `Mon → Sun` },
        worksLabel: { type: P.String, title: `Works-with label`, defaultValue: `Works with` },
        works: {
          type: P.String,
          title: `Works with`,
          defaultValue: `Lemon Squeezy, Gumroad, Stripe, Notion, Figma, Canva, Lightroom`,
        },
        ...zi,
        ...Bi,
      }));
  });
function Ji() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = aa), document.head.appendChild(e));
  }, []);
}
function Yi() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function Xi() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Zi(e, t) {
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
function Qi(e, t, n) {
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
function $i(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: ua(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ca(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: ua(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ca(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: ua(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? ca(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function ea(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function ta(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = Yi(),
    l = ea(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = Qi(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function na(e) {
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
function ra(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Sa(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[xa] = 1));
      } catch {}
      let s = () => {
          let t = na(e);
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
function ia(e) {
  let { label: t = `Sold`, items: n = ``, speed: r = 1, bpHint: i = `auto` } = e,
    o = fa(e),
    { D: c, B: l, M: f } = $i(e);
  Ji();
  let p = Xi(),
    m = da(),
    g = Yi(),
    _ = s(null),
    v = s(null),
    { w: y } = Zi(_, i),
    b = ta(_, p, m, 0.05),
    x = y < 810,
    S = ra(`products`, ba.products),
    C = Ca(n)
      .map((e) => {
        let t = e.split(`|`).map((e) => e.trim());
        return { n: t[0] || ``, pr: t[1] || ``, ci: t[2] || `` };
      })
      .filter((e) => e.n),
    w = [
      `Berlin`,
      `Austin`,
      `Lagos`,
      `Toronto`,
      `Jaipur`,
      `Lisbon`,
      `Osaka`,
      `Denver`,
      `Manchester`,
      `São Paulo`,
      `Nairobi`,
      `Seoul`,
    ],
    T = C.length
      ? C
      : S.map((e, t) => ({ n: e.f1 || ``, pr: e.f3 || ``, ci: w[t % w.length] })).filter(
          (e) => e.n
        );
  h(() => {
    if (!p || m || !v.current) return;
    let e = v.current,
      t = 0,
      n = a.scrollY,
      i = 0,
      o = !0,
      s = 0,
      c = 0,
      l = new IntersectionObserver(
        (e) => {
          o = e[0].isIntersecting;
        },
        { rootMargin: `40% 0px 40% 0px` }
      );
    l.observe(e);
    let u = Qi(
      (l) => {
        if (!o || document.hidden || !s) return;
        let u = c ? Math.min(0.05, (l - c) / 1e3) : 0.016;
        c = l;
        let d = a.scrollY,
          f = d - n;
        ((n = d),
          (i += (Math.min(28, Math.abs(f) * 0.9) - i) * 0.08),
          (t -= (40 * r + i * 6) * u),
          t < -s && (t += s),
          t > 0 && (t -= s),
          (e.style.transform = `translate3d(${t.toFixed(1)}px,0,0) skewX(${(-i * 0.35).toFixed(2)}deg)`));
      },
      () => {
        s = e.scrollWidth / 2;
      }
    );
    return () => {
      (u(), l.disconnect());
    };
  }, [p, m, r, T.length || 1]);
  let E = `ds ds-sec ds-dark dst${b ? ` is-on` : ``}${x ? ` is-ph` : ``}${g ? ` is-still` : ``}`,
    D = (e, n, r) =>
      u(
        `span`,
        {
          className: `dst-it`,
          "aria-hidden": r === `b` || void 0,
          children: [
            d(`b`, { className: `dst-st`, style: c, children: t }),
            d(`span`, {
              className: `dst-t`,
              children: `${String(9 + ((n * 7) % 13)).padStart(2, `0`)}:${String((n * 17) % 60).padStart(2, `0`)}`,
            }),
            d(`span`, { className: `dst-n`, children: e.n }),
            d(`span`, { className: `dst-p`, children: e.pr }),
            d(`span`, { className: `dst-c`, children: e.ci }),
            d(`i`, { className: `dst-dot`, "aria-hidden": !0 }),
          ],
        },
        r + n
      );
  return u(`section`, {
    ref: _,
    className: E,
    style: { ...pa(o), ...l, ...e.style },
    "aria-label": `Recent orders tape`,
    children: [
      d(`link`, { rel: `stylesheet`, href: aa }),
      d(`style`, { dangerouslySetInnerHTML: { __html: _a + ya + wa } }),
      d(`div`, {
        className: `dst-band ds-lt`,
        style: va(b, 0, 18),
        children: u(`div`, {
          className: `dst-tape`,
          ref: v,
          style: f,
          children: [T.map((e, t) => D(e, t, `a`)), T.map((e, t) => D(e, t, `b`))],
        }),
      }),
    ],
  });
}
var aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  Q,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (aa = `../../styles/css2-a59a76.css`),
      (oa = `clamp(1280px, 92vw, 1520px)`),
      (sa = (e) => {
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
      (ca = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (la = (e) => {
        let t = sa(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (ua = (e, t, n, r) => {
        let i = e ? la(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (da = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (Q = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (fa = (e) => ({
        bone: e.bone || Q.bone,
        ink: e.ink || Q.ink,
        brass: e.brass || Q.brass,
        pine: e.pine || Q.pine,
        fog: e.fog || Q.fog,
        stone: e.stone || Q.stone,
        cloud: e.cloud || Q.cloud,
        night: e.night || Q.night,
      })),
      (pa = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (ma = {
        bone: { type: P.Color, title: `Paper`, defaultValue: Q.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: Q.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: Q.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: Q.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: Q.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: Q.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: Q.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: Q.night },
      }),
      (ha = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (ga = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (_a = `
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
      P.Boolean,
      P.Number,
      (va = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (ya = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${oa} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (ba = {
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
      }),
      (xa = `DsTicker@cms1`),
      (Sa = a === void 0 ? h : r),
      (Ca = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (wa = `
.dst{position:relative;background:var(--ds-night);color:var(--ds-ink);padding:8px 0 44px;overflow:hidden;z-index:11}
.dst-band{position:relative;width:104vw;margin-left:-2vw;rotate:-1.2deg;background:var(--ds-bone);padding:16px 0;overflow:hidden;box-shadow:0 30px 60px -30px rgba(0,0,0,.8);
  mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent),linear-gradient(#000,#000);-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-composite:intersect;-webkit-mask-composite:source-in}
.dst-band::before,.dst-band::after{content:"";position:absolute;left:0;right:0;height:7px;background:repeating-linear-gradient(90deg,var(--ds-night) 0 6px,transparent 6px 12px);opacity:.9}
.dst-band::before{top:0;clip-path:polygon(0 0,100% 0,100% 100%,0 100%)} .dst-band::after{bottom:0}
.dst-band::before{background:none;border-top:0;height:8px;background-image:linear-gradient(135deg,var(--ds-night) 25%,transparent 25%),linear-gradient(225deg,var(--ds-night) 25%,transparent 25%);background-size:12px 12px;background-position:0 0,6px 0;background-repeat:repeat-x}
.dst-band::after{background:none;height:8px;background-image:linear-gradient(45deg,var(--ds-night) 25%,transparent 25%),linear-gradient(315deg,var(--ds-night) 25%,transparent 25%);background-size:12px 12px;background-position:0 0,6px 0;background-repeat:repeat-x}
.dst-tape{display:flex;gap:0;width:max-content;will-change:transform;font-size:12.5px;letter-spacing:.02em;white-space:nowrap}
.dst-it{display:inline-flex;align-items:center;gap:14px;padding:6px 26px 6px 10px}
.dst-st{display:inline-block;padding:3px 8px;border:2px solid var(--ds-acc);border-radius:4px;color:var(--ds-acc);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;rotate:-6deg}
.dst-t{color:color-mix(in srgb,var(--ds-ink) 78%,transparent)} .dst-n{font-weight:500;color:var(--ds-ink)} .dst-p{font-weight:500} .dst-c{color:color-mix(in srgb,var(--ds-ink) 78%,transparent)}
.dst-dot{width:6px;height:6px;border-radius:50%;background:var(--ds-brass);margin-left:12px;opacity:.7}
.dst.is-ph{padding:4px 0 32px} .dst.is-ph .dst-tape{font-size:11.5px} .dst.is-ph .dst-it{gap:10px;padding:4px 18px 4px 8px}
@media (prefers-reduced-motion:reduce){.dst-tape{transform:none!important}}`),
      O(ia, {
        ...ga,
        label: { type: P.String, title: `Stamp`, defaultValue: `Sold` },
        items: {
          type: P.String,
          title: `Lines`,
          description: `Product|Price|City; … (empty = the Products CMS)`,
          defaultValue: ``,
          displayTextArea: !0,
        },
        speed: { type: P.Number, title: `Speed`, min: 0.2, max: 3, step: 0.1, defaultValue: 1 },
        ...ma,
        ...ha,
      }));
  });
function Ea() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Ra), document.head.appendChild(e));
  }, []);
}
function Da() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function Oa() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ka(e, t) {
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
function Aa(e, t, n) {
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
function ja(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: Ka(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Wa(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: Ka(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Wa(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: Ka(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? Wa(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Ma(e, t) {
  h(() => {
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
function Na(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
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
function Pa(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = Da(),
    l = Na(t);
  return (
    h(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = Aa(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function Fa(e) {
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
function Ia(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    uo(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[co] = 1));
      } catch {}
      let s = () => {
          let t = Fa(e);
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
function La(e) {
  let {
      eyebrow: t = `The aisles`,
      heading: n = `Six aisles.|*One checkout.*`,
      subCopy:
        r = `Every product is a file you own: download it once, keep the updates, use it on every project you ship.`,
      button: i = `Browse everything`,
      buttonLink: a = `/products`,
      hoverLabel: c = `Open aisle`,
      linkBase: l = `/products?type=`,
      bpHint: f = `auto`,
    } = e,
    p = Ja(e),
    { D: m, B: g, M: _ } = ja(e);
  Ea();
  let v = Oa(),
    y = qa(),
    b = Da(),
    x = s(null),
    S = s(null),
    { w: C } = ka(x, f),
    w = Pa(x, v, y);
  Ma(x, v);
  let T = C < 810,
    E = C >= 810 && C < 1100,
    D = Ia(`types`, so.types),
    O = Ia(`products`, so.products),
    k = (e) => {
      let t = String(e.f4 || ``)
          .split(`;`)
          .map((e) => e.trim().toLowerCase())
          .filter(Boolean),
        n = O.filter((e) => t.includes(String(e.f2 || ``).toLowerCase())),
        r = (n.length ? n : O).map((e) => ({ src: lo(e), col: e.f12 || `#5B4BFF`, n: e.f1 || `` }));
      return (lo(e) && r.unshift({ src: lo(e), col: `#2B1C17`, n: e.f1 || `` }), r.slice(0, 3));
    },
    [A, j] = o(-1);
  h(() => {
    if (!v || T || E || !x.current || !S.current) return;
    let e = x.current,
      t = S.current,
      n = 0,
      r = 0,
      i = 0,
      a = 0,
      o = !1,
      s = (t) => {
        let i = e.getBoundingClientRect();
        ((n = t.clientX - i.left),
          (r = t.clientY - i.top),
          (o = !!t.target.closest?.(`.dsty-row`)));
      };
    e.addEventListener(`pointermove`, s);
    let c = Aa(() => {
      ((i += (n - i) * 0.16),
        (a += (r - a) * 0.16),
        (t.style.transform = `translate3d(${(i + 40).toFixed(1)}px,${(a - 120).toFixed(1)}px,0) rotate(${((n - i) * 0.08).toFixed(2)}deg)`),
        (t.dataset.on = o ? `1` : ``));
    });
    return () => {
      (c(), e.removeEventListener(`pointermove`, s));
    };
  }, [v, T, E]);
  let M = `ds ds-sec ds-cut-t dsty${w ? ` is-on` : ``}${T ? ` is-ph` : E ? ` is-tab` : ``}${b ? ` is-still` : ``}`,
    N = A >= 0 ? D[A] : null,
    P = N ? k(N) : [];
  return u(`section`, {
    ref: x,
    className: M,
    style: { ...Ya(p), ...g, ...e.style, "--cut": T ? `9vw` : `6vw` },
    "aria-label": ro(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: Ra }),
      d(`style`, { dangerouslySetInnerHTML: { __html: eo + oo + fo } }),
      u(`div`, {
        className: `ds-wrap dsty-wrap`,
        children: [
          u(`div`, {
            className: `dsty-head`,
            children: [
              u(`p`, {
                className: `dsty-eb`,
                style: { ..._, ...ao(w, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(io, {
                text: n,
                on: w,
                D: m,
                size: T ? `clamp(40px,12vw,56px)` : `clamp(46px,5vw,80px)`,
                lh: 0.94,
                delay: 80,
              }),
              u(`div`, {
                className: `dsty-side`,
                style: ao(w, 260),
                children: [
                  d(`p`, { className: `dsty-sub`, children: r }),
                  d($a, { href: a, label: i, kind: `ghost` }),
                ],
              }),
            ],
          }),
          d(`div`, {
            className: `dsty-list`,
            onMouseLeave: () => j(-1),
            children: D.map((e, t) =>
              u(
                `a`,
                {
                  className: `dsty-row${A === t ? ` is-cur` : ``}`,
                  href: `${l}${e.slug || ``}`,
                  style: ao(w, 200 + t * 80, 26),
                  onMouseEnter: () => j(t),
                  onFocus: () => j(t),
                  onBlur: () => j(-1),
                  children: [
                    d(`span`, {
                      className: `dsty-num`,
                      style: _,
                      children: String(t + 1).padStart(2, `0`),
                    }),
                    (T || E) &&
                      d(`span`, {
                        className: `dsty-th`,
                        "aria-hidden": !0,
                        children: k(e)
                          .slice(0, 1)
                          .map((e, t) =>
                            d(
                              `img`,
                              { ...Ha(e.src, `72px`), alt: ``, loading: `lazy`, decoding: `async` },
                              t
                            )
                          ),
                      }),
                    d(`span`, { className: `dsty-name`, style: m, children: e.f1 }),
                    u(`span`, {
                      className: `dsty-meta`,
                      children: [
                        d(`b`, { style: _, children: e.f2 }),
                        d(`span`, { className: `dsty-bl`, children: e.f3 }),
                      ],
                    }),
                    u(`span`, {
                      className: `dsty-go`,
                      style: _,
                      "aria-hidden": !0,
                      children: [d(`span`, { children: c }), d(to, { s: 14 })],
                    }),
                    d(`i`, { className: `dsty-line`, "aria-hidden": !0 }),
                  ],
                },
                e.slug || t
              )
            ),
          }),
        ],
      }),
      !T &&
        !E &&
        d(`div`, {
          ref: S,
          className: `dsty-fl`,
          "aria-hidden": !0,
          "data-on": ``,
          children: P.map((e, t) =>
            u(
              `span`,
              {
                className: `dsty-fc`,
                style: { "--k": t, background: e.col },
                children: [
                  e.src &&
                    d(`img`, {
                      ...Ha(e.src, `200px`),
                      alt: ``,
                      loading: `lazy`,
                      decoding: `async`,
                    }),
                  d(`b`, { style: m, children: e.n }),
                ],
              },
              (N?.slug || ``) + t
            )
          ),
        }),
    ],
  });
}
var Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  $,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (Ra = `../../styles/css2-a59a76.css`),
      (za = `clamp(1280px, 92vw, 1520px)`),
      (Ba = [160, 320, 480, 800, 1200, 1600]),
      (Va = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return Ba.find((e) => e >= i) || 1600;
      }),
      (Ha = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = Va(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = Va(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: Ba.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (Ua = (e) => {
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
      (Wa = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (Ga = (e) => {
        let t = Ua(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (Ka = (e, t, n, r) => {
        let i = e ? Ga(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (qa = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      ($ = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Ja = (e) => ({
        bone: e.bone || $.bone,
        ink: e.ink || $.ink,
        brass: e.brass || $.brass,
        pine: e.pine || $.pine,
        fog: e.fog || $.fog,
        stone: e.stone || $.stone,
        cloud: e.cloud || $.cloud,
        night: e.night || $.night,
      })),
      (Ya = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Xa = {
        bone: { type: P.Color, title: `Paper`, defaultValue: $.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: $.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: $.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: $.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: $.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: $.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: $.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: $.night },
      }),
      (Za = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Qa = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      ($a = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: l,
      }) =>
        d(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: u(`span`, {
            className: `ds-tag`,
            children: [
              d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              u(`span`, {
                className: `ds-lbl`,
                children: [
                  d(`span`, { className: `ds-l1`, children: t }),
                  d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                d(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: u(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      d(`path`, { d: `M6 8h12l-1 12H7z` }),
                      d(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (eo = `
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
      (to = ({ s: e = 15 }) =>
        d(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: d(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      P.Boolean,
      P.Number,
      (no = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (ro = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (io = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: o = 0,
        step: s = 55,
        style: l,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return d(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": ro(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: no(e).map((e, t) => {
                    let n = o + m++ * s;
                    return u(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          d(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? u(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    d(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: d(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : u(c, { children: [e.t, e.tail] }),
                          }),
                          ` `,
                        ],
                      },
                      t
                    );
                  }),
                },
                t
              )
            ),
        });
      }),
      (ao = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (oo = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${za} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (so = {
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
      (co = `DsTypes@cms1`),
      (lo = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (uo = a === void 0 ? h : r),
      (fo = `
.dsty{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding-bottom:clamp(90px,10vw,150px);overflow:hidden;z-index:12}
.dsty::before{content:"";position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ds-ink) 9%,transparent) 1px,transparent 1.3px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 25%,#000 85%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 25%,#000 85%,transparent);pointer-events:none}
.dsty-wrap{position:relative;padding-top:clamp(56px,6vw,90px)}
.dsty-head{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:32px clamp(32px,5vw,80px);align-items:end;margin-bottom:clamp(40px,5vw,72px)}
.dsty-eb{grid-column:1/-1;display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsty-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsty .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsty .ds-it{color:var(--ds-acc)}
.dsty-side{display:flex;flex-direction:column;align-items:flex-start;gap:22px;padding-bottom:6px}
.dsty-sub{margin:0;font-size:16.5px;line-height:1.6;color:var(--ds-mut);max-width:380px}
/* index rows */
.dsty-list{display:flex;flex-direction:column;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dsty-row{position:relative;display:grid;grid-template-columns:64px minmax(0,1.1fr) minmax(0,1.3fr) auto;gap:20px clamp(18px,3vw,48px);align-items:center;padding:26px 0 26px 8px;text-decoration:none;color:inherit;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent);isolation:isolate}
.dsty-line{position:absolute;left:-4px;right:-4px;top:-1px;bottom:-1px;z-index:-1;background:var(--ds-ink);transform:scaleY(0);transform-origin:50% 100%;transition:transform .55s cubic-bezier(.7,0,.2,1)}
.dsty-row:hover .dsty-line,.dsty-row:focus-visible .dsty-line{transform:scaleY(1);transform-origin:50% 0}
.dsty-row:hover,.dsty-row:focus-visible{color:var(--ds-bone)} .dsty-row:focus-visible{outline-offset:-4px!important}
.dsty-num{font-size:12px;letter-spacing:.08em;color:var(--ds-mut);transition:color .3s} .dsty-row:hover .dsty-num{color:var(--ds-brass)}
.dsty-name{font-size:clamp(28px,3.2vw,46px);line-height:1;font-weight:800;letter-spacing:-.03em;transition:translate .5s cubic-bezier(.2,.8,.2,1)} .dsty-row:hover .dsty-name{translate:10px 0}
.dsty-meta{display:flex;flex-direction:column;gap:5px;min-width:0} .dsty-meta b{font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:500;color:var(--ds-acc)} .dsty-row:hover .dsty-meta b{color:var(--ds-brass)}
.dsty-bl{font-size:14.5px;line-height:1.5;color:var(--ds-mut);transition:color .3s} .dsty-row:hover .dsty-bl{color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dsty-go{display:inline-flex;align-items:center;gap:10px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:0;translate:-8px 0;transition:opacity .35s,translate .5s cubic-bezier(.2,.8,.2,1)} .dsty-row:hover .dsty-go,.dsty-row:focus-visible .dsty-go{opacity:1;translate:0 0}
.dsty-go svg{width:14px;height:14px;color:var(--ds-brass)}
.dsty-th{display:none}
/* floating fanned covers */
.dsty-fl{position:absolute;left:0;top:0;z-index:5;width:150px;height:200px;pointer-events:none;opacity:0;scale:.8;transition:opacity .3s,scale .45s cubic-bezier(.34,1.56,.64,1)} .dsty-fl[data-on="1"]{opacity:1;scale:1}
.dsty-fc{position:absolute;left:0;top:0;width:150px;height:200px;border-radius:4px 8px 8px 4px;overflow:hidden;color:#fff;box-shadow:0 24px 50px -18px rgba(0,0,0,.6),inset 0 0 0 1px rgba(255,255,255,.1);transform:rotate(calc(var(--k)*8deg - 8deg)) translate(calc(var(--k)*18px),calc(var(--k)*-10px));transform-origin:50% 120%;animation:dsty-pop .5s cubic-bezier(.34,1.56,.64,1) both;animation-delay:calc(var(--k)*60ms);z-index:calc(3 - var(--k))}
.dsty-fc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55;mix-blend-mode:luminosity} .dsty-fc::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.6))}
.dsty-fc b{position:absolute;left:12px;right:12px;bottom:12px;font-size:13px;line-height:1.1;font-weight:800;letter-spacing:-.01em}
@keyframes dsty-pop{from{opacity:0;translate:0 24px;rotate:6deg}to{opacity:1}}
/* tablet + phone */
.dsty.is-tab .dsty-head{grid-template-columns:1fr} .dsty.is-tab .dsty-row{grid-template-columns:44px 72px minmax(0,1fr);gap:16px 18px} .dsty.is-tab .dsty-meta{grid-column:3} .dsty.is-tab .dsty-go{display:none}
.dsty.is-tab .dsty-th,.dsty.is-ph .dsty-th{display:block;width:72px;height:92px;border-radius:4px;overflow:hidden;background:var(--ds-pine)} .dsty-th img{width:100%;height:100%;object-fit:cover;display:block}
.dsty.is-ph .dsty-head{grid-template-columns:1fr;gap:22px;margin-bottom:34px} .dsty.is-ph .dsty-row{grid-template-columns:36px 64px minmax(0,1fr);gap:12px 14px;padding:18px 0} .dsty.is-ph .dsty-th{width:64px;height:82px}
.dsty.is-ph .dsty-name{font-size:24px} .dsty.is-ph .dsty-meta{grid-column:2/-1} .dsty.is-ph .dsty-bl{font-size:13.5px} .dsty.is-ph .dsty-go{display:none} .dsty.is-ph .dsty-row:hover .dsty-name{translate:0 0}
@media (prefers-reduced-motion:reduce){.dsty-line{transition:none} .dsty-fc{animation:none}}`),
      O(La, {
        ...Qa,
        eyebrow: { type: P.String, title: `Eyebrow`, defaultValue: `The aisles` },
        heading: {
          type: P.String,
          title: `Heading`,
          defaultValue: `Six aisles.|*One checkout.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: P.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Every product is a file you own: download it once, keep the updates, use it on every project you ship.`,
        },
        button: { type: P.String, title: `Button`, defaultValue: `Browse everything` },
        buttonLink: { type: P.Link, title: `Button link`, defaultValue: `/products` },
        hoverLabel: { type: P.String, title: `Row hover label`, defaultValue: `Open aisle` },
        linkBase: {
          type: P.String,
          title: `Row link base`,
          defaultValue: `/products?type=`,
          description: `The row's slug is appended`,
        },
        ...Xa,
        ...Za,
      }));
  }),
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro;
e(() => {
  (p(),
    S(),
    y(),
    m(),
    Ze(),
    re(),
    Gt(),
    I(),
    ae(),
    Ln(),
    z(),
    Nr(),
    yi(),
    oe(),
    qi(),
    se(),
    Ta(),
    po(),
    ue(),
    (mo = N(Zn)),
    (ho = N(ia)),
    (go = N(La)),
    (_o = N(on)),
    (vo = N(qr)),
    (yo = N(xe)),
    (bo = N(ie)),
    (xo = N(Oi)),
    (So = N(ce)),
    (Co = N(ft)),
    (wo = N(B)),
    (To = N(R)),
    (Eo = N(V)),
    (Do = N(L)),
    (Oo = {
      egEJypMFy: `(max-width: 809.98px)`,
      I341yvnij: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (ko = []),
    (Ao = `framer-UJ0ZV`),
    (jo = {
      egEJypMFy: `framer-v-1vooc4m`,
      I341yvnij: `framer-v-vp8i51`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Mo = (e, t, n) => (e && t ? `position` : n)),
    (No = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Po = { Desktop: `WQLkyLRf1`, Phone: `egEJypMFy`, Tablet: `I341yvnij` }),
    (Fo = ({ value: e }) =>
      C()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Io = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Po[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (Lo = D(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = A();
        ee();
        let { style: p, className: m, layoutId: h, variant: y, ...b } = Io(e);
        te(l(() => le({}, c), [c]));
        let [S, C] = T(y, Oo, !1),
          D = x(Ao),
          O = t(k)?.isLayoutTemplate,
          N = !!t(g)?.transition?.layout,
          P = Mo(O, N);
        return (
          w({}),
          d(k.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Po,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: jo,
            },
            children: u(v, {
              id: h ?? o,
              children: [
                d(Fo, {
                  value: `html body { background: var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5); }`,
                }),
                u(_.div, {
                  ...b,
                  className: x(D, `framer-72rtr7`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(_.div, {
                      className: `framer-18l6svx`,
                      "data-framer-name": `01 Hero — the shelf`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1pv01h5-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsHero`,
                          isAuthoredByUser: !0,
                          name: `DsHero`,
                          nodeId: `KtySLrcvT`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(Zn, {
                              addLabel: `Add`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button1: `Browse the shelf`,
                              button1Link: `/products`,
                              button2: `Get the free guide`,
                              button2Link: `/free`,
                              cartLabel: `Cart`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              cursorLabel: `Pick up`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Creator store · Templates · Ebooks · Courses`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Everything you make, *on one shelf.*`,
                              height: `100%`,
                              id: `KtySLrcvT`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `KtySLrcvT`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsHero`,
                              navCta: `Free guide`,
                              navLinks: `Products:/products, Bundles:/bundles, Courses:/courses, Reviews:/reviews, Notes:/notes`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              receiptTitle: `Recent orders`,
                              showNav: !1,
                              soldLine: `2,140 orders this month · 4.9 average`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Shelfline is a creator store: templates, ebooks, presets and courses sold from one shelf. Instant download, lifetime updates, and checkout links that go straight to Lemon Squeezy, Gumroad or Stripe.`,
                              tilt: 1,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1bvahbd`,
                      "data-framer-name": `02 Tape — recent orders`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-16rkv8n-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsTicker`,
                          isAuthoredByUser: !0,
                          name: `DsTicker`,
                          nodeId: `v7fQmlN7k`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(ia, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `v7fQmlN7k`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              items: ``,
                              label: `Sold`,
                              layoutId: `v7fQmlN7k`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsTicker`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              speed: 1,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-15qozf2`,
                      "data-framer-name": `03 Aisles — product types`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-640wh3-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsTypes`,
                          isAuthoredByUser: !0,
                          name: `DsTypes`,
                          nodeId: `aKM6blD3I`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(La, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Browse everything`,
                              buttonLink: `/products`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `The aisles`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Six aisles.|*One checkout.*`,
                              height: `100%`,
                              hoverLabel: `Open aisle`,
                              id: `aKM6blD3I`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `aKM6blD3I`,
                              linkBase: `/products?type=`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsTypes`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Every product is a file you own: download it once, keep the updates, use it on every project you ship.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1smcwec`,
                      "data-framer-name": `04 Window — featured product`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-15818cg-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFeatured`,
                          isAuthoredByUser: !0,
                          name: `DsFeatured`,
                          nodeId: `onIQb_rPC`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(on, {
                              badgeLabel: `Featured`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `View product`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `This week in the window`,
                              featured: ``,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `The window|*display.*`,
                              height: `100%`,
                              id: `onIQb_rPC`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `onIQb_rPC`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              moreLabel: `More bestsellers`,
                              moreLink: `/products`,
                              name: `DsFeatured`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `One product gets the spotlight every week. Scroll in.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1a4q978`,
                      "data-framer-name": `05 Unboxing — what's inside`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1na1b6h-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsInside`,
                          isAuthoredByUser: !0,
                          name: `DsInside`,
                          nodeId: `IC0RJrkMf`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(qr, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              boxLabel: `Contents`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `See the product`,
                              buttonLink: `/products/launch-course`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `What's inside`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Open the box|*before you buy.*`,
                              height: `100%`,
                              id: `IC0RJrkMf`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `IC0RJrkMf`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsInside`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              product: `launch-course`,
                              specs: `Format|Video + PDF worksheets; Files|14 lessons, 6 sheets; Licence|Personal + commercial; Updates|Free for life; Delivery|Instant download`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Every product page lists the files, the counts and the licence, so you know exactly what lands in your downloads folder.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-f6ilmn`,
                      "data-framer-name": `06 Stack — bundles`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-124jjdw-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsBundles`,
                          isAuthoredByUser: !0,
                          name: `DsBundles`,
                          nodeId: `eFfzUsLs8`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(xe, {
                              allLabel: `All bundles`,
                              allLink: `/bundles`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              bundleLabel: `Bundle price`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Bundles`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Buy the shelf,|*not the item.*`,
                              height: `100%`,
                              id: `eFfzUsLs8`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `eFfzUsLs8`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsBundles`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              saveLabel: `You save`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Three sets that go together. The maths is on the receipt.`,
                              subtotalLabel: `Subtotal`,
                              totalLabel: `You pay`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-9fmknk`,
                      "data-framer-name": `07 Syllabus — course`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-edb8cz-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCourse`,
                          isAuthoredByUser: !0,
                          name: `DsCourse`,
                          nodeId: `nA1HPlF8Y`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(ie, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Start the course`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              course: `launch-in-30-days`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `The course`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `A course you'll|*actually finish.*`,
                              height: `100%`,
                              id: `nA1HPlF8Y`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `nA1HPlF8Y`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCourse`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              nowLabel: `Now playing`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Short lessons, one job each, a worksheet at the end of every module. Scroll the syllabus.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-yn83fw`,
                      "data-framer-name": `08 Counter — numbers`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-gg8k5q-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsProof`,
                          isAuthoredByUser: !0,
                          name: `DsProof`,
                          nodeId: `bqqb7oOx0`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(Oi, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              chartLabel: `Orders this week`,
                              chartNote: `Mon → Sun`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `In numbers`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `bqqb7oOx0`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `bqqb7oOx0`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsProof`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stats: `2140|orders this month|; 38|countries|; 4.9|average rating|; 12400|downloads to date|`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              width: `100%`,
                              works: `Lemon Squeezy, Gumroad, Stripe, Notion, Figma, Canva, Lightroom`,
                              worksLabel: `Works with`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1qhbtwv`,
                      "data-framer-name": `09 Receipts — reviews`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-wkg4rr-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `hg5U3gyV8`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(ce, {
                              allLabel: `All reviews`,
                              allLink: `/reviews`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              boughtLabel: `Bought`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Reviews`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Receipts from|*real buyers.*`,
                              height: `100%`,
                              id: `hg5U3gyV8`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `hg5U3gyV8`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsReviews`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stampLabel: `Verified`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Every review is tied to an order. Drag the wall.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1whmd0g`,
                      "data-framer-name": `10 Behind the counter — studio`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1r9p6v3-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCreator`,
                          isAuthoredByUser: !0,
                          name: `DsCreator`,
                          nodeId: `h1U4V_eVl`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(ft, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `About the studio`,
                              buttonLink: `/about`,
                              captionLabel: `The studio, 2026`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Behind the counter`,
                              facts: `Founded|2021, Lisbon; Products|31 and counting; Updates|Free, for life; Support|Real replies, same day`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Made in a studio|*that ships.*`,
                              height: `100%`,
                              id: `h1U4V_eVl`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `h1U4V_eVl`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCreator`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              photo: No(
                                {
                                  pixelHeight: 1500,
                                  pixelWidth: 1200,
                                  src: `https://framerusercontent.com/images/5n5HFqDE2B8nPdanzIsw0dcQ0.webp?width=1200&height=1500`,
                                  srcSet: `https://framerusercontent.com/images/5n5HFqDE2B8nPdanzIsw0dcQ0.webp?scale-down-to=1024&width=1200&height=1500 819w,https://framerusercontent.com/images/5n5HFqDE2B8nPdanzIsw0dcQ0.webp?width=1200&height=1500 1200w`,
                                },
                                ``
                              ),
                              photo2: No(
                                {
                                  pixelHeight: 800,
                                  pixelWidth: 800,
                                  src: `https://framerusercontent.com/images/PrCJshUF8MzYsvuoCIORN0Csi3E.webp?width=800&height=800`,
                                  srcSet: `https://framerusercontent.com/images/PrCJshUF8MzYsvuoCIORN0Csi3E.webp?scale-down-to=512&width=800&height=800 512w,https://framerusercontent.com/images/PrCJshUF8MzYsvuoCIORN0Csi3E.webp?width=800&height=800 800w`,
                                },
                                ``
                              ),
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              signoff: `— the Shelfline studio`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              story: `Shelfline started as a folder of files we kept re-using on client work: a UI kit, a pricing sheet, a set of presets. We cleaned them up, wrote the guides, and put them on a shelf. Every product here is something we use ourselves, updated when our own work moves on.`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-10bcwj7`,
                      "data-framer-name": `11 Free shelf — lead magnet`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1mok9is-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFree`,
                          isAuthoredByUser: !0,
                          name: `DsFree`,
                          nodeId: `yfsUIc1JV`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(B, {
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
                              id: `yfsUIc1JV`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `yfsUIc1JV`,
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
                    d(_.div, {
                      className: `framer-1rd7qw8`,
                      "data-framer-name": `12 Price tags — FAQ`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1u0e1i3-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFaq`,
                          isAuthoredByUser: !0,
                          name: `DsFaq`,
                          nodeId: `RKEPwk144`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(R, {
                              askButton: `Ask us`,
                              askCopy: `Write to us with your order number and we reply the same day.`,
                              askLink: `/contact`,
                              askTitle: `Something else?`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `FAQ`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Questions at|*the counter.*`,
                              height: `100%`,
                              id: `RKEPwk144`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `RKEPwk144`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFaq`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pages: `home`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Files, licences, refunds and tools: the answers, short.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-twumt3`,
                      "data-framer-name": `13 Notes`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-ksozek-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsNotes`,
                          isAuthoredByUser: !0,
                          name: `DsNotes`,
                          nodeId: `hl4zbKRib`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(V, {
                              allLabel: `All notes`,
                              allLink: `/notes`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              count: 3,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Notes`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Notes from|*the back room.*`,
                              height: `100%`,
                              id: `hl4zbKRib`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `hl4zbKRib`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsNotes`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              readLabel: `Read the note`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Pricing, launches and what we learned selling files.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-d8k8x3`,
                      "data-framer-name": `14 Closing time — CTA`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-ac93e5-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCta`,
                          isAuthoredByUser: !0,
                          name: `DsCta`,
                          nodeId: `woCZ10HP5`,
                          scopeId: `augiA20Il`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              egEJypMFy: { bpHint: `phone` },
                              I341yvnij: { bpHint: `tablet` },
                            },
                            children: d(L, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button1: `Browse the shelf`,
                              button1Link: `/products`,
                              button2: `Get the free guide`,
                              button2Link: `/free`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Open 24/7`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Open your|*own shelf.*`,
                              height: `100%`,
                              hoursLine: `Instant download · lifetime updates · same-day replies`,
                              id: `woCZ10HP5`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `woCZ10HP5`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCta`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              shutterLabel: `Shelfline · digital goods`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Browse the products, take the free guide, or write to us about a bundle for your team. The shop never closes.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-UJ0ZV.framer-lux5qc, .framer-UJ0ZV .framer-lux5qc { display: block; }`,
        `.framer-UJ0ZV.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-UJ0ZV .framer-18l6svx, .framer-UJ0ZV .framer-1bvahbd, .framer-UJ0ZV .framer-15qozf2, .framer-UJ0ZV .framer-1smcwec, .framer-UJ0ZV .framer-1a4q978, .framer-UJ0ZV .framer-f6ilmn, .framer-UJ0ZV .framer-9fmknk, .framer-UJ0ZV .framer-yn83fw, .framer-UJ0ZV .framer-1qhbtwv, .framer-UJ0ZV .framer-1whmd0g, .framer-UJ0ZV .framer-10bcwj7, .framer-UJ0ZV .framer-1rd7qw8, .framer-UJ0ZV .framer-twumt3, .framer-UJ0ZV .framer-d8k8x3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-UJ0ZV .framer-1pv01h5-container, .framer-UJ0ZV .framer-16rkv8n-container, .framer-UJ0ZV .framer-640wh3-container, .framer-UJ0ZV .framer-15818cg-container, .framer-UJ0ZV .framer-1na1b6h-container, .framer-UJ0ZV .framer-124jjdw-container, .framer-UJ0ZV .framer-edb8cz-container, .framer-UJ0ZV .framer-gg8k5q-container, .framer-UJ0ZV .framer-wkg4rr-container, .framer-UJ0ZV .framer-1r9p6v3-container, .framer-UJ0ZV .framer-1mok9is-container, .framer-UJ0ZV .framer-1u0e1i3-container, .framer-UJ0ZV .framer-ksozek-container, .framer-UJ0ZV .framer-ac93e5-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-UJ0ZV.framer-72rtr7 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-UJ0ZV.framer-72rtr7 { width: 390px; }}`,
      ],
      `framer-UJ0ZV`
    )),
    (Lo.displayName = `Home`),
    (Lo.defaultProps = { height: 15928, width: 1200 }),
    ne(
      Lo,
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
        ...mo,
        ...ho,
        ...go,
        ..._o,
        ...vo,
        ...yo,
        ...bo,
        ...xo,
        ...So,
        ...Co,
        ...wo,
        ...To,
        ...Eo,
        ...Do,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Ro = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `15928`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"I341yvnij":{"layout":["fixed","auto"]},"egEJypMFy":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ro as __FramerMetadata__, Lo as default, ko as queryParamNames };
//# sourceMappingURL=yRjE-3lOcR-8CcVxQN-_fzlJXBzPAOcxn_R_MhzDr50.EFHiYFIo.mjs.map
