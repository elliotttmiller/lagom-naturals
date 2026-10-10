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
  X as ee,
  Z as w,
  a as T,
  at as E,
  b as D,
  c as O,
  et as k,
  g as A,
  i as j,
  k as M,
  o as N,
  q as P,
  tt as F,
  v as I,
  y as L,
} from "./framer.BNAppio8.mjs";
import R, { t as z } from "./8cADCrx7_QFztiiEIvbOr3Zl9I4W12xDgBu4jS1YUQU.Crp7GOF9.mjs";
function te() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = V), document.head.appendChild(e));
  }, []);
}
function ne() {
  let e = b(),
    t = null;
  try {
    t = I.current();
  } catch {}
  return e || (t !== null && t !== I.preview);
}
function re() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && I.current() !== I.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ie(e, t) {
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
function ae(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: G(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? W(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: G(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? W(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: G(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? W(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function oe(e, t) {
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
function se(e) {
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
function ce(e) {
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
function le(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Te(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[we] = 1));
      } catch {}
      let s = () => {
          let t = ce(e);
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
function ue() {
  let e = le(`site`, Y.site || [])[0] || (Y.site || [])[0] || {},
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
function B(e) {
  let {
      eyebrow: t = `Order complete`,
      title: n = `Thank you.|*It's yours.*`,
      copy: r = `Your file is ready below. The same link is in your inbox, and it stays in your account for every future download.`,
      receiptTitle: i = `Your download`,
      fileName: c = `Pricing Digital Products.pdf`,
      fileMeta: l = `PDF + EPUB · 4.2 MB · 40 pages`,
      orderLabel: f = `Order`,
      orderNumber: p = `#2140`,
      stampLabel: m = `Paid`,
      button: g = `Download the file`,
      downloadLink: _ = `#`,
      inboxLine: v = `The same link is in your inbox.`,
      nextLabel: y = `While you're here`,
      next: b = `Browse the shelf|Every product, filtered by aisle and price.|/products; Read the notes|Pricing, launches and what we learned selling files.|/notes; Ask us anything|Real replies, same day, with your order number.|/contact`,
      bpHint: x = `auto`,
    } = e,
    S = pe(e),
    { D: C, B: ee, M: w } = ae(e);
  te();
  let T = re(),
    E = fe(),
    D = ne(),
    O = ue(),
    k = s(null),
    { w: A } = ie(k, x);
  oe(k, T);
  let j = se(T),
    [M, N] = o(!1);
  h(() => {
    if (!T || !j) return;
    let e = a.setTimeout(() => N(!0), 100);
    return () => a.clearTimeout(e);
  }, [T, j]);
  let P = M || D || E,
    F = A < 810,
    I = A >= 810 && A < 1100,
    L = O.name || `Shelfline`,
    R = Ee(b)
      .map((e) => {
        let t = e.split(`|`).map((e) => e.trim());
        return { t: t[0] || ``, c: t[1] || ``, h: t[2] || `/` };
      })
      .filter((e) => e.t),
    [z, ce] = o(``);
  return (
    h(() => {
      try {
        let e = new Date();
        ce(
          new Intl.DateTimeFormat(`en-GB`, {
            day: `2-digit`,
            month: `short`,
            year: `numeric`,
            hour: `2-digit`,
            minute: `2-digit`,
          }).format(e)
        );
      } catch {}
    }, []),
    u(`section`, {
      ref: k,
      className: `ds ds-sec dsth${P ? ` is-in` : ``}${F ? ` is-ph` : I ? ` is-tab` : ``}${D ? ` is-still` : ``}${E ? ` is-rm` : ``}`,
      style: { ...me(S), ...ee, ...e.style },
      "aria-label": q(n),
      children: [
        d(`link`, { rel: `stylesheet`, href: V }),
        d(`style`, { dangerouslySetInnerHTML: { __html: ye + Ce + De } }),
        u(`div`, {
          className: `ds-wrap dsth-wrap`,
          children: [
            u(`div`, {
              className: `dsth-copy`,
              children: [
                u(`p`, {
                  className: `dsth-eb`,
                  style: { ...w, ...J(P, 0) },
                  children: [d(`i`, { "aria-hidden": !0 }), t],
                }),
                d(Se, {
                  text: n,
                  on: P,
                  D: C,
                  tag: `h1`,
                  size: F ? `clamp(42px,12vw,58px)` : `clamp(48px,5.8vw,92px)`,
                  lh: 0.92,
                  delay: 120,
                }),
                d(`p`, { className: `dsth-sub`, style: J(P, 300), children: r }),
                R.length > 0 &&
                  u(`div`, {
                    className: `dsth-next`,
                    style: J(P, 420),
                    children: [
                      d(`span`, { className: `dsth-nl`, style: w, children: y }),
                      d(`div`, {
                        className: `dsth-cards`,
                        children: R.map((e, t) =>
                          u(
                            `a`,
                            {
                              className: `dsth-card`,
                              href: e.h,
                              children: [
                                d(`b`, { style: C, children: e.t }),
                                d(`span`, { children: e.c }),
                                d(`i`, { "aria-hidden": !0, children: d(be, { s: 14 }) }),
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
            u(`div`, {
              className: `dsth-printer`,
              style: J(P, 200, 20),
              children: [
                d(`span`, { className: `dsth-slot`, "aria-hidden": !0, children: d(`i`, {}) }),
                u(`div`, {
                  className: `dsth-rcpt`,
                  style: w,
                  children: [
                    u(`span`, {
                      className: `dsth-rh`,
                      children: [
                        d(`b`, { style: C, children: L.toUpperCase() }),
                        d(`span`, { children: i }),
                      ],
                    }),
                    u(`span`, {
                      className: `dsth-rl`,
                      children: [
                        d(`span`, { children: f }),
                        d(`i`, { "aria-hidden": !0 }),
                        d(`b`, { children: p }),
                      ],
                    }),
                    z &&
                      u(`span`, {
                        className: `dsth-rl`,
                        children: [
                          d(`span`, { children: `Date` }),
                          d(`i`, { "aria-hidden": !0 }),
                          d(`b`, { children: z }),
                        ],
                      }),
                    u(`span`, {
                      className: `dsth-file`,
                      children: [
                        d(`span`, {
                          className: `dsth-fi`,
                          "aria-hidden": !0,
                          children: u(`svg`, {
                            viewBox: `0 0 24 24`,
                            children: [
                              d(`path`, {
                                d: `M6 3h8l5 5v13H6z`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinejoin: `round`,
                              }),
                              d(`path`, {
                                d: `M14 3v5h5`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinejoin: `round`,
                              }),
                              d(`path`, {
                                d: `M9 14h6M9 17h4`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                              }),
                            ],
                          }),
                        }),
                        u(`span`, {
                          className: `dsth-ft`,
                          children: [
                            d(`b`, { style: C, children: c }),
                            d(`small`, { children: l }),
                          ],
                        }),
                      ],
                    }),
                    d(`span`, {
                      className: `dsth-btnrow`,
                      children: d(ve, {
                        href: _,
                        label: g,
                        kind: `solid`,
                        className: `dsth-btn`,
                        cur: `go`,
                        icon: d(`span`, {
                          className: `dsth-dl`,
                          "aria-hidden": !0,
                          children: d(`svg`, {
                            viewBox: `0 0 24 24`,
                            children: d(`path`, {
                              d: `M12 4v11M7 11l5 5 5-5M5 20h14`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2.2`,
                              strokeLinecap: `round`,
                              strokeLinejoin: `round`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(`span`, { className: `dsth-inbox`, children: v }),
                    d(`span`, {
                      className: `dsth-stamp`,
                      style: C,
                      "aria-hidden": !0,
                      children: m,
                    }),
                    d(`span`, {
                      className: `dsth-bc`,
                      "aria-hidden": !0,
                      children: [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1].map(
                        (e, t) => d(`i`, { style: { width: e } }, t)
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var V,
  H,
  U,
  W,
  de,
  G,
  fe,
  K,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  q,
  Se,
  J,
  Ce,
  Y,
  we,
  Te,
  Ee,
  De,
  Oe = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (V = `../../styles/css2-a59a76.css`),
      (H = `clamp(1280px, 92vw, 1520px)`),
      (U = (e) => {
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
      (W = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (de = (e) => {
        let t = U(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (G = (e, t, n, r) => {
        let i = e ? de(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (fe = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
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
      (pe = (e) => ({
        bone: e.bone || K.bone,
        ink: e.ink || K.ink,
        brass: e.brass || K.brass,
        pine: e.pine || K.pine,
        fog: e.fog || K.fog,
        stone: e.stone || K.stone,
        cloud: e.cloud || K.cloud,
        night: e.night || K.night,
      })),
      (me = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (he = {
        bone: { type: N.Color, title: `Paper`, defaultValue: K.bone },
        ink: { type: N.Color, title: `Ink`, defaultValue: K.ink },
        brass: { type: N.Color, title: `Accent`, defaultValue: K.brass },
        pine: { type: N.Color, title: `Deep`, defaultValue: K.pine },
        fog: { type: N.Color, title: `Line`, defaultValue: K.fog },
        stone: { type: N.Color, title: `Muted`, defaultValue: K.stone },
        cloud: { type: N.Color, title: `White`, defaultValue: K.cloud },
        night: { type: N.Color, title: `Dark`, defaultValue: K.night },
      }),
      (ge = {
        customFonts: {
          type: N.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: N.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: N.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: N.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (_e = {
        bpHint: {
          type: N.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (ve = ({
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
      (ye = `
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
      (be = ({ s: e = 15 }) =>
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
      N.Boolean,
      N.Number,
      (xe = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (q = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Se = ({
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
          "aria-label": q(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: xe(e).map((e, t) => {
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
      (J = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Ce = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${H} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Y = {
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
      (we = `DsThanks@cms1`),
      (Te = a === void 0 ? h : r),
      (Ee = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (De = `
.dsth{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:calc(72px + clamp(56px,7vw,110px)) 0 clamp(90px,10vw,150px);overflow:hidden;z-index:12}
.dsth::before{content:"";position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ds-ink) 9%,transparent) 1px,transparent 1.3px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 20%,#000 80%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 20%,#000 80%,transparent);pointer-events:none}
.dsth-wrap{position:relative;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(40px,6vw,100px);align-items:start}
.dsth-copy{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
.dsth-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsth-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsth .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsth .ds-it{color:var(--ds-acc)}
.dsth-sub{margin:0;max-width:520px;font-size:17px;line-height:1.55;color:var(--ds-mut)}
.dsth-next{display:flex;flex-direction:column;gap:14px;width:100%;margin-top:14px} .dsth-nl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-mut)}
.dsth-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.dsth-card{position:relative;display:flex;flex-direction:column;gap:8px;padding:18px 18px 44px;border-radius:10px;background:var(--ds-cloud);color:var(--ds-ink);text-decoration:none;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 12%,transparent);transition:transform .45s cubic-bezier(.34,1.56,.64,1),box-shadow .3s} .dsth-card:hover{transform:translateY(-4px);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 12%,transparent),0 24px 40px -24px color-mix(in srgb,var(--ds-ink) 50%,transparent)}
.dsth-card b{font-size:16px;font-weight:800;letter-spacing:-.02em} .dsth-card span{font-size:13.5px;line-height:1.5;color:var(--ds-mut)} .dsth-card i{position:absolute;right:14px;bottom:12px;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);transition:transform .4s cubic-bezier(.34,1.56,.64,1)} .dsth-card:hover i{transform:translateX(3px)} .dsth-card i svg{width:14px;height:14px}
/* the printer + receipt */
.dsth-printer{position:relative;justify-self:center;width:min(100%,420px);padding-top:26px}
.dsth-slot{position:absolute;left:0;right:0;top:0;z-index:3;height:26px;background:var(--ds-night);border-radius:8px 8px 4px 4px;box-shadow:0 10px 24px -10px rgba(0,0,0,.6)} .dsth-slot i{position:absolute;left:14px;right:14px;top:11px;height:4px;border-radius:4px;background:color-mix(in srgb,var(--ds-bone) 20%,transparent)}
.dsth-rcpt{position:relative;display:flex;flex-direction:column;gap:9px;margin:0 12px;padding:22px 20px 34px;background:var(--ds-cloud);color:var(--ds-ink);font-size:11.5px;letter-spacing:.02em;box-shadow:0 30px 60px -30px rgba(0,0,0,.5);transform:translateY(-102%);opacity:0;transition:transform 1.4s cubic-bezier(.2,.8,.2,1) .4s,opacity .3s .4s;clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.is-in .dsth-rcpt{transform:translateY(0);opacity:1}
.dsth-rh{display:flex;justify-content:space-between;gap:10px;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsth-rh b{font-weight:800}
.dsth-rl{display:flex;align-items:baseline;gap:8px;color:color-mix(in srgb,var(--ds-ink) 72%,transparent)} .dsth-rl i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px} .dsth-rl b{font-weight:500;color:var(--ds-ink)}
.dsth-file{display:flex;align-items:center;gap:12px;margin-top:6px;padding:12px;border-radius:6px;background:color-mix(in srgb,var(--ds-ink) 5%,transparent)}
.dsth-fi{display:grid;place-items:center;width:40px;height:40px;flex:none;border-radius:6px;background:var(--ds-ink);color:var(--ds-bone)} .dsth-fi svg{width:20px;height:20px}
.dsth-ft{display:flex;flex-direction:column;gap:3px;min-width:0} .dsth-ft b{font-size:14px;font-weight:800;letter-spacing:-.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap} .dsth-ft small{font-size:10.5px;color:var(--ds-mut)}
.dsth-btnrow{display:flex;margin-top:8px} .dsth-btn{width:100%} .dsth-btn .ds-tag{justify-content:center} .dsth-dl{display:grid;place-items:center;width:18px;height:18px} .dsth-dl svg{width:16px;height:16px}
.dsth-inbox{padding-top:10px;margin-top:2px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);font-size:10.5px;color:var(--ds-mut);text-align:center}
.dsth-stamp{position:absolute;right:18px;top:64px;padding:4px 10px;border:2px solid var(--ds-brass);border-radius:4px;color:var(--ds-brass);font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;transform:rotate(-12deg) scale(.6);opacity:0;transition:transform .5s cubic-bezier(.34,1.56,.64,1) 1.7s,opacity .3s 1.7s} .is-in .dsth-stamp{transform:rotate(-12deg) scale(1);opacity:.9}
.dsth-bc{display:flex;justify-content:center;gap:1.5px;height:18px;margin-top:6px;opacity:.55} .dsth-bc i{display:block;height:100%;background:var(--ds-ink)}
/* tablet + phone */
.dsth.is-tab .dsth-wrap{grid-template-columns:1fr;gap:44px} .dsth.is-tab .dsth-printer{justify-self:start}
.dsth.is-ph{padding-top:calc(64px + 40px)} .dsth.is-ph .dsth-wrap{grid-template-columns:1fr;gap:34px} .dsth.is-ph .dsth-cards{grid-template-columns:1fr} .dsth.is-ph .dsth-sub{font-size:16px} .dsth.is-ph .dsth-printer{width:100%} .dsth.is-ph .dsth-rcpt{margin:0 6px}
.dsth.is-rm .dsth-rcpt,.dsth.is-still .dsth-rcpt{transition:none;transform:none;opacity:1} .dsth.is-rm .dsth-stamp,.dsth.is-still .dsth-stamp{transition:none}`),
      D(B, {
        ..._e,
        eyebrow: { type: N.String, title: `Eyebrow`, defaultValue: `Order complete` },
        title: {
          type: N.String,
          title: `Title`,
          description: `*word* = accent, | = line break`,
          defaultValue: `Thank you.|*It's yours.*`,
        },
        copy: {
          type: N.String,
          title: `Copy`,
          displayTextArea: !0,
          defaultValue: `Your file is ready below. The same link is in your inbox, and it stays in your account for every future download.`,
        },
        receiptTitle: { type: N.String, title: `Receipt title`, defaultValue: `Your download` },
        fileName: {
          type: N.String,
          title: `File name`,
          defaultValue: `Pricing Digital Products.pdf`,
        },
        fileMeta: {
          type: N.String,
          title: `File line`,
          defaultValue: `PDF + EPUB · 4.2 MB · 40 pages`,
        },
        orderLabel: { type: N.String, title: `Order label`, defaultValue: `Order` },
        orderNumber: { type: N.String, title: `Order number`, defaultValue: `#2140` },
        stampLabel: { type: N.String, title: `Stamp`, defaultValue: `Paid` },
        button: { type: N.String, title: `Download button`, defaultValue: `Download the file` },
        downloadLink: { type: N.Link, title: `Download link`, defaultValue: `#` },
        inboxLine: {
          type: N.String,
          title: `Inbox line`,
          defaultValue: `The same link is in your inbox.`,
        },
        nextLabel: { type: N.String, title: `Next label`, defaultValue: `While you're here` },
        next: {
          type: N.String,
          title: `Next cards`,
          description: `Title|Copy|/path; …`,
          displayTextArea: !0,
          defaultValue: `Browse the shelf|Every product, filtered by aisle and price.|/products; Read the notes|Pricing, launches and what we learned selling files.|/notes; Ask us anything|Real replies, same day, with your order number.|/contact`,
        },
        ...he,
        ...ge,
      }));
  }),
  ke,
  Ae,
  X,
  je,
  Me,
  Ne,
  Z,
  Pe,
  Fe,
  Q,
  $;
e(() => {
  (p(),
    S(),
    y(),
    m(),
    Oe(),
    z(),
    (ke = M(B)),
    (Ae = {
      ELF83Dg1B: `(min-width: 810px) and (max-width: 1199.98px)`,
      lJZd8Tods: `(max-width: 809.98px)`,
      VQRw9mIgA: `(min-width: 1200px)`,
    }),
    (X = []),
    (je = `framer-ngzFC`),
    (Me = {
      ELF83Dg1B: `framer-v-7n02q8`,
      lJZd8Tods: `framer-v-dgcsul`,
      VQRw9mIgA: `framer-v-1vpgknc`,
    }),
    (Ne = (e, t, n) => (e && t ? `position` : n)),
    (Z = { Desktop: `VQRw9mIgA`, Phone: `lJZd8Tods`, Tablet: `ELF83Dg1B` }),
    (Pe = ({ value: e }) =>
      C()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Fe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `VQRw9mIgA`,
    })),
    (Q = E(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = k();
        P();
        let { style: p, className: m, layoutId: h, variant: y, ...b } = Fe(e);
        F(l(() => R({}, c), [c]));
        let [S, C] = w(y, Ae, !1),
          E = x(je),
          D = t(O)?.isLayoutTemplate,
          M = !!t(g)?.transition?.layout,
          N = Ne(D, M);
        return (
          ee({}),
          d(O.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `VQRw9mIgA`,
              variantClassNames: Me,
            },
            children: u(v, {
              id: h ?? o,
              children: [
                d(Pe, { value: `html body { background: rgb(255, 255, 255); }` }),
                d(_.div, {
                  ...b,
                  className: x(E, `framer-1vpgknc`, m),
                  ref: a,
                  style: { ...p },
                  children: d(_.div, {
                    className: `framer-pa7qbj`,
                    "data-framer-name": `S0 DsThanks`,
                    layout: N,
                    children: d(j, {
                      children: d(T, {
                        className: `framer-18wo6pm-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `DsThanks`,
                        isAuthoredByUser: !0,
                        name: `DsThanks`,
                        nodeId: `w_0v83Pox`,
                        scopeId: `gB0glT7h6`,
                        children: d(A, {
                          breakpoint: S,
                          overrides: {
                            ELF83Dg1B: { bpHint: `tablet` },
                            lJZd8Tods: { bpHint: `phone` },
                          },
                          children: d(B, {
                            bodyFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                            bpHint: `desktop`,
                            brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                            button: `Download the file`,
                            cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                            copy: `Your file is ready below. The same link is in your inbox, and it stays in your account for every future download.`,
                            customFonts: !1,
                            displayFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            downloadLink: `#`,
                            eyebrow: `Order complete`,
                            fileMeta: `PDF + EPUB · 4.2 MB · 40 pages`,
                            fileName: `Pricing Digital Products.pdf`,
                            fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                            height: `100%`,
                            id: `w_0v83Pox`,
                            inboxLine: `The same link is in your inbox.`,
                            ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                            layoutId: `w_0v83Pox`,
                            monoFont: {
                              fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            name: `DsThanks`,
                            next: `Browse the shelf|Every product, filtered by aisle and price.|/products; Read the notes|Pricing, launches and what we learned selling files.|/notes; Ask us anything|Real replies, same day, with your order number.|/contact`,
                            nextLabel: `While you're here`,
                            night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                            orderLabel: `Order`,
                            orderNumber: `#2140`,
                            pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                            receiptTitle: `Your download`,
                            stampLabel: `Paid`,
                            stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                            style: { width: `100%` },
                            title: `Thank you.|*It's yours.*`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ngzFC.framer-1n9nh1z, .framer-ngzFC .framer-1n9nh1z { display: block; }`,
        `.framer-ngzFC.framer-1vpgknc { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ngzFC .framer-pa7qbj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ngzFC .framer-18wo6pm-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ngzFC.framer-1vpgknc { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-ngzFC.framer-1vpgknc { width: 390px; }}`,
      ],
      `framer-ngzFC`
    )),
    (Q.displayName = `Thank you`),
    (Q.defaultProps = { height: 1080, width: 1200 }),
    L(
      Q,
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
        ...ke,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramergB0glT7h6`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1080`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ELF83Dg1B":{"layout":["fixed","auto"]},"lJZd8Tods":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, X as queryParamNames };
//# sourceMappingURL=eeKJi4vA7DGIHJ95BC80n8JhqqZggTXAMRBsWOsQJLY.B91rEf74.mjs.map
