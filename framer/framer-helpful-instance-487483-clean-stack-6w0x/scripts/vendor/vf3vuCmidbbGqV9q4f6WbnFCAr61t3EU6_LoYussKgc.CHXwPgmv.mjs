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
import { a as ee, k as h, r as te, t as g } from "./motion.dK94hszq.mjs";
import {
  $ as _,
  A as v,
  B as y,
  C as b,
  H as x,
  J as ne,
  P as S,
  Q as C,
  X as re,
  Z as ie,
  a as w,
  at as T,
  b as E,
  c as D,
  et as O,
  f as k,
  g as ae,
  i as A,
  k as j,
  nt as M,
  o as N,
  q as oe,
  tt as se,
  v as P,
  y as F,
} from "./framer.BNAppio8.mjs";
import { a as ce, r as I } from "./owwGg2Iuo.yzxvNxQY.mjs";
import { n as le, t as L } from "./DsReviews.Do5b3KPj.mjs";
import R, { t as z } from "./FAXUicopdGAre3Ic3frxpXsHWeLYjicqBSOGwUg4gPo.DzZkY5Qc.mjs";
function ue() {
  m(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = H), document.head.appendChild(e));
  }, []);
}
function de() {
  let e = _(),
    t = null;
  try {
    t = P.current();
  } catch {}
  return e || (t !== null && t !== P.preview);
}
function fe() {
  let e = _(),
    [t, n] = o(!1);
  return (
    m(() => {
      !e && P.current() !== P.canvas && a !== void 0 && n(!0);
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
function me(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: J(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? q(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: J(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? q(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: J(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? q(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function he(e, t) {
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
function ge(e) {
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
function B(e) {
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
function _e(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Ne(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[je] = 1));
      } catch {}
      let s = () => {
          let t = B(e);
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
function ve(e, t, n) {
  let r = _e(e, t),
    [i, s] = o(``);
  m(() => {
    try {
      s(decodeURIComponent(a.location.pathname.split(`/`).filter(Boolean).pop() || ``));
    } catch {}
  }, []);
  let c = String(n || ``).trim() || i;
  return { row: r.find((e) => e.slug === c) || r[0] || {}, rows: r };
}
function V(e) {
  let {
      slug: t = ``,
      title: n = ``,
      price: r = ``,
      was: i = ``,
      save: c = ``,
      blurb: d = ``,
      checkout: f = ``,
      buyLabel: p = `Buy the bundle`,
      crumbHome: ee = `Home`,
      crumbList: h = `Bundles`,
      crumbListLink: te = `/bundles`,
      itemsLabel: g = `items`,
      insideLabel: _ = `In this bundle`,
      includesLabel: v = `Inside`,
      receiptTitle: y = `Receipt`,
      subtotalLabel: b = `Subtotal`,
      bundleLabel: x = `Bundle price`,
      totalLabel: ne = `You pay`,
      saveLabel: S = `You save`,
      otherLabel: C = `Other bundles`,
      otherLink: re = `/bundles`,
      otherLinkLabel: ie = `All bundles`,
      bpHint: w = `auto`,
    } = e,
    T = Se(e),
    { D: E, B: D, M: O } = me(e);
  ue();
  let k = fe(),
    ae = xe(),
    A = de(),
    j = s(null),
    { w: M } = pe(j, w);
  he(j, k);
  let N = ge(k),
    [oe, se] = o(!1);
  m(() => {
    if (!k || !N) return;
    let e = a.setTimeout(() => se(!0), 100);
    return () => a.clearTimeout(e);
  }, [k, N]);
  let P = oe || A || ae,
    F = M < 810,
    ce = M >= 810 && M < 1100,
    { row: I, rows: le } = ve(`bundles`, Ae.bundles, t),
    L = _e(`products`, Ae.products),
    R = {
      n: Q(n, I.f1 || ``),
      p: Q(r, I.f2 || ``),
      w: Q(i, I.f3 || ``),
      s: Q(c, I.f4 || ``),
      b: Q(d, I.f6 || ``),
      col: I.f7 || `#1B2A6B`,
    },
    z = String(I.f5 || ``)
      .split(`;`)
      .map((e) => L.find((t) => t.slug === e.trim()))
      .filter(Boolean),
    B = le.filter((e) => e.slug !== I.slug).slice(0, 3),
    V = String(f || ``).trim() || `/checkout?bundle=${I.slug || ``}`,
    U = `ds ds-sec dsbn${P ? ` is-on` : ``}${F ? ` is-ph` : ce ? ` is-tab` : ``}${A ? ` is-still` : ``}`,
    W = (e) =>
      l(`div`, {
        className: `dsbn-r ${e}`,
        style: O,
        "aria-label": `${R.n} ${y}`,
        children: [
          l(`span`, {
            className: `dsbn-rh`,
            children: [u(`b`, { children: y }), l(`span`, { children: [z.length, ` `, g] })],
          }),
          z.map((e, t) =>
            l(
              `span`,
              {
                className: `dsbn-rl`,
                children: [
                  u(`span`, { children: e.f1 }),
                  u(`i`, { "aria-hidden": !0 }),
                  u(`b`, { children: e.f3 }),
                ],
              },
              t
            )
          ),
          l(`span`, {
            className: `dsbn-rl dsbn-sum`,
            children: [
              u(`span`, { children: b }),
              u(`i`, { "aria-hidden": !0 }),
              u(`b`, { children: R.w }),
            ],
          }),
          l(`span`, {
            className: `dsbn-rl`,
            children: [
              u(`span`, { children: x }),
              u(`i`, { "aria-hidden": !0 }),
              u(`b`, { children: R.p }),
            ],
          }),
          l(`span`, {
            className: `dsbn-tot`,
            children: [u(`span`, { children: ne }), u(`em`, { style: E, children: R.p })],
          }),
          R.s && l(`span`, { className: `dsbn-save`, style: E, children: [S, ` `, R.s] }),
        ],
      });
  return l(`section`, {
    ref: j,
    className: U,
    style: { ...Ce(T), ...D, ...e.style, "--col": R.col },
    "aria-label": R.n,
    children: [
      u(`link`, { rel: `stylesheet`, href: H }),
      u(`style`, { dangerouslySetInnerHTML: { __html: De + ke + Fe } }),
      u(`div`, {
        className: `dsbn-band ds-dark`,
        children: l(`div`, {
          className: `ds-wrap dsbn-bw`,
          children: [
            l(`div`, {
              className: `dsbn-copy`,
              children: [
                l(`nav`, {
                  className: `dsbn-crumbs`,
                  "aria-label": `Breadcrumb`,
                  style: { ...O, ...Z(P, 0) },
                  children: [
                    u(`a`, { href: `/`, children: ee }),
                    u(`i`, { "aria-hidden": !0 }),
                    u(`a`, { href: te, children: h }),
                    u(`i`, { "aria-hidden": !0 }),
                    u(`span`, { "aria-current": `page`, children: R.n }),
                  ],
                }),
                u(`h1`, { className: `dsbn-h1`, style: { ...E, ...Z(P, 100) }, children: R.n }),
                u(`p`, { className: `dsbn-bl`, style: Z(P, 200), children: R.b }),
                l(`div`, {
                  className: `dsbn-price`,
                  style: Z(P, 280),
                  children: [
                    u(`em`, { style: E, children: R.p }),
                    R.w && u(`s`, { style: O, children: R.w }),
                    R.s &&
                      l(`span`, { className: `dsbn-stamp`, style: E, children: [S, ` `, R.s] }),
                  ],
                }),
                l(`div`, {
                  className: `dsbn-btns`,
                  style: Z(P, 360),
                  children: [
                    u(X, { href: V, label: p, kind: `solid` }),
                    l(`span`, { className: `dsbn-count`, style: O, children: [z.length, ` `, g] }),
                  ],
                }),
              ],
            }),
            u(`div`, {
              className: `dsbn-stack`,
              "aria-hidden": !0,
              style: Z(P, 300, 40),
              children: z
                .slice(0, 3)
                .map((e, t) =>
                  l(
                    `span`,
                    {
                      className: `dsbn-sc`,
                      style: { "--pc": e.f12 || `#5B4BFF`, "--k": t },
                      children: [
                        u(`img`, {
                          ...K(Me(e), `220px`),
                          alt: ``,
                          loading: `eager`,
                          decoding: `async`,
                        }),
                        u(`b`, { style: E, children: e.f1 }),
                      ],
                    },
                    e.slug || t
                  )
                ),
            }),
          ],
        }),
      }),
      l(`div`, {
        className: `ds-wrap dsbn-body`,
        children: [
          l(`div`, {
            className: `dsbn-main`,
            children: [
              u(`h2`, { className: `dsbn-h2`, style: E, children: _ }),
              u(`div`, {
                className: `dsbn-grid`,
                children: z.map((e, t) => {
                  let n = Pe(e.f7 || ``).slice(0, 3);
                  return l(
                    `a`,
                    {
                      className: `dsbn-item`,
                      href: `/products/${e.slug}`,
                      style: { "--pc": e.f12 || `#5B4BFF` },
                      children: [
                        l(`span`, {
                          className: `dsbn-face`,
                          children: [
                            u(`img`, {
                              ...K(Me(e), `(max-width: 809px) 100vw, 30vw`),
                              alt: ``,
                              loading: `lazy`,
                              decoding: `async`,
                            }),
                            e.f9 &&
                              u(`span`, { className: `dsbn-badge`, style: O, children: e.f9 }),
                            u(`b`, { style: E, children: e.f1 }),
                            u(`i`, { style: O, children: e.f2 }),
                          ],
                        }),
                        l(`span`, {
                          className: `dsbn-it`,
                          children: [
                            l(`span`, {
                              className: `dsbn-itr`,
                              children: [
                                u(`b`, { style: E, children: e.f1 }),
                                u(`em`, { style: E, children: e.f3 }),
                              ],
                            }),
                            u(`small`, { style: O, children: e.f5 }),
                            n.length > 0 &&
                              l(`span`, {
                                className: `dsbn-inc`,
                                children: [
                                  u(`span`, { style: O, children: v }),
                                  n.map((e, t) => u(`span`, { children: e }, t)),
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    e.slug || t
                  );
                }),
              }),
            ],
          }),
          l(`aside`, {
            className: `dsbn-side`,
            children: [
              W(`dsbn-r2`),
              u(X, { href: V, label: p, kind: `solid`, className: `dsbn-buy2` }),
            ],
          }),
        ],
      }),
      B.length > 0 &&
        l(`div`, {
          className: `ds-wrap dsbn-others`,
          children: [
            l(`div`, {
              className: `dsbn-oh`,
              children: [
                u(`span`, { style: O, children: C }),
                l(`a`, { href: re, style: O, children: [ie, u(Oe, { s: 13 })] }),
              ],
            }),
            u(`div`, {
              className: `dsbn-orow`,
              children: B.map((e, t) =>
                l(
                  `a`,
                  {
                    className: `dsbn-o`,
                    href: `/bundles/${e.slug || ``}`,
                    style: { "--oc": e.f7 || `#1B2A6B` },
                    children: [
                      u(`span`, { className: `dsbn-on`, style: E, children: e.f1 }),
                      l(`span`, {
                        className: `dsbn-op`,
                        children: [
                          u(`em`, { style: E, children: e.f2 }),
                          u(`s`, { style: O, children: e.f3 }),
                        ],
                      }),
                      l(`span`, { className: `dsbn-os`, style: O, children: [S, ` `, e.f4] }),
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
var H,
  U,
  W,
  G,
  K,
  ye,
  q,
  be,
  J,
  xe,
  Y,
  Se,
  Ce,
  we,
  Te,
  Ee,
  X,
  De,
  Oe,
  Z,
  ke,
  Ae,
  je,
  Q,
  Me,
  Ne,
  Pe,
  Fe,
  Ie = e(() => {
    (i(),
      f(),
      p(),
      S(),
      (H = `../../styles/css2-a59a76.css`),
      (U = `clamp(1280px, 92vw, 1520px)`),
      (W = [160, 320, 480, 800, 1200, 1600]),
      (G = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return W.find((e) => e >= i) || 1600;
      }),
      (K = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = G(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = G(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: W.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (ye = (e) => {
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
      (q = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (be = (e) => {
        let t = ye(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (J = (e, t, n, r) => {
        let i = e ? be(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (xe = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
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
      (Se = (e) => ({
        bone: e.bone || Y.bone,
        ink: e.ink || Y.ink,
        brass: e.brass || Y.brass,
        pine: e.pine || Y.pine,
        fog: e.fog || Y.fog,
        stone: e.stone || Y.stone,
        cloud: e.cloud || Y.cloud,
        night: e.night || Y.night,
      })),
      (Ce = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (we = {
        bone: { type: N.Color, title: `Paper`, defaultValue: Y.bone },
        ink: { type: N.Color, title: `Ink`, defaultValue: Y.ink },
        brass: { type: N.Color, title: `Accent`, defaultValue: Y.brass },
        pine: { type: N.Color, title: `Deep`, defaultValue: Y.pine },
        fog: { type: N.Color, title: `Line`, defaultValue: Y.fog },
        stone: { type: N.Color, title: `Muted`, defaultValue: Y.stone },
        cloud: { type: N.Color, title: `White`, defaultValue: Y.cloud },
        night: { type: N.Color, title: `Dark`, defaultValue: Y.night },
      }),
      (Te = {
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
      (Ee = {
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
      (X = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: d,
      }) =>
        u(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: l(`span`, {
            className: `ds-tag`,
            children: [
              u(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              u(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              d,
              l(`span`, {
                className: `ds-lbl`,
                children: [
                  u(`span`, { className: `ds-l1`, children: t }),
                  u(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                u(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: l(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      u(`path`, { d: `M6 8h12l-1 12H7z` }),
                      u(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (De = `
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
      (Oe = ({ s: e = 15 }) =>
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
      N.Boolean,
      N.Number,
      (Z = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (ke = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${U} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Ae = {
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
      (je = `DsBundle@cms1`),
      (Q = (e, t) => (e != null && String(e).trim() ? String(e).trim() : t)),
      (Me = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Ne = a === void 0 ? m : r),
      (Pe = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Fe = `
.dsbn{position:relative;background:var(--ds-bone);color:var(--ds-ink);overflow:clip;z-index:11}
.dsbn-band{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(120px,13vw,180px) 0 clamp(70px,8vw,110px)}
.dsbn-band::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 80% at 85% 20%,color-mix(in srgb,var(--col) 45%,var(--ds-night)),var(--ds-night) 70%);pointer-events:none}
.dsbn-bw{position:relative;display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:clamp(30px,5vw,80px);align-items:center}
.dsbn-copy{display:flex;flex-direction:column;align-items:flex-start;gap:18px}
.dsbn-crumbs{display:flex;align-items:center;flex-wrap:wrap;gap:8px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dsbn-crumbs a{color:inherit;text-decoration:none} .dsbn-crumbs a:hover{color:var(--ds-brass)} .dsbn-crumbs i{width:4px;height:4px;border-radius:50%;background:var(--ds-brass)} .dsbn-crumbs span{color:var(--ds-bone)}
.dsbn-h1{margin:0;font-size:clamp(40px,5.4vw,84px);line-height:.94;letter-spacing:-.035em;font-weight:800;text-wrap:balance}
.dsbn-bl{margin:0;max-width:540px;font-size:17px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)}
.dsbn-price{display:flex;align-items:center;flex-wrap:wrap;gap:14px} .dsbn-price em{font-style:normal;font-size:clamp(32px,3.4vw,48px);font-weight:800;letter-spacing:-.03em} .dsbn-price s{font-size:14px;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)}
.dsbn-stamp{padding:4px 10px;border:2px solid var(--ds-acc);border-radius:4px;color:var(--ds-acc);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg}
.dsbn-btns{display:flex;align-items:center;gap:18px;flex-wrap:wrap} .dsbn-count{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)}
/* fanned stack of the three covers */
.dsbn-stack{position:relative;height:340px;perspective:1200px}
.dsbn-sc{position:absolute;left:50%;top:50%;width:190px;height:250px;margin:-125px 0 0 -95px;padding:14px;display:flex;align-items:flex-end;border-radius:3px 8px 8px 3px;background:var(--pc);color:#fff;overflow:hidden;box-shadow:0 40px 80px -30px rgba(0,0,0,.8),inset 0 0 0 1px rgba(255,255,255,.1);border-left:4px solid color-mix(in srgb,var(--pc) 55%,#000);transform:rotate(calc(var(--k)*10deg - 10deg)) translate(calc(var(--k)*70px - 70px),calc(var(--k)*8px));z-index:calc(3 - var(--k));transition:transform .6s cubic-bezier(.34,1.56,.64,1)}
.dsbn-stack:hover .dsbn-sc{transform:rotate(calc(var(--k)*12deg - 12deg)) translate(calc(var(--k)*90px - 90px),calc(var(--k)*-6px))}
.dsbn-sc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;mix-blend-mode:luminosity} .dsbn-sc::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,color-mix(in srgb,var(--pc) 70%,#000))}
.dsbn-sc b{position:relative;font-size:15px;line-height:1.1;font-weight:800;letter-spacing:-.01em;text-wrap:balance}
/* body */
.dsbn-body{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,.7fr);gap:clamp(30px,5vw,80px);align-items:start;padding-top:clamp(60px,7vw,100px);padding-bottom:clamp(60px,7vw,100px)}
.dsbn-h2{margin:0 0 22px;font-size:clamp(26px,2.6vw,38px);line-height:1;font-weight:800;letter-spacing:-.03em}
.dsbn-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.dsbn-item{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:var(--ds-ink)}
.dsbn-face{position:relative;display:flex;flex-direction:column;justify-content:flex-end;gap:3px;aspect-ratio:3/4;padding:14px;border-radius:3px 8px 8px 3px;background:var(--pc);color:#fff;overflow:hidden;border-left:4px solid color-mix(in srgb,var(--pc) 55%,#000);box-shadow:0 30px 50px -30px rgba(0,0,0,.6);transition:transform .6s cubic-bezier(.34,1.56,.64,1)} .dsbn-item:hover .dsbn-face{transform:translateY(-8px) rotate(-1.5deg)}
.dsbn-face img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;mix-blend-mode:luminosity} .dsbn-face::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,color-mix(in srgb,var(--pc) 70%,#000))}
.dsbn-face b{position:relative;font-size:16px;line-height:1.1;font-weight:800;letter-spacing:-.01em;text-wrap:balance} .dsbn-face i{position:relative;font-style:normal;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.9}
.dsbn-badge{position:absolute;left:-4px;top:12px;padding:3px 7px;background:var(--ds-brass);color:var(--ds-ink);font-size:8px;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg}
.dsbn-it{display:flex;flex-direction:column;gap:6px} .dsbn-itr{display:flex;justify-content:space-between;gap:10px;align-items:baseline} .dsbn-itr b{font-size:16px;font-weight:800;letter-spacing:-.02em} .dsbn-itr em{font-style:normal;font-size:16px;font-weight:800;color:var(--ds-acc)}
.dsbn-it small{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)}
.dsbn-inc{display:flex;flex-wrap:wrap;gap:5px;margin-top:4px} .dsbn-inc>span{padding:3px 8px;border-radius:999px;background:color-mix(in srgb,var(--ds-ink) 7%,transparent);font-size:11px} .dsbn-inc>span:first-child{background:none;padding-left:0;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)}
/* receipt */
.dsbn-side{position:sticky;top:96px;display:flex;flex-direction:column;gap:18px;align-items:flex-start}
.dsbn-r{position:relative;width:100%;display:flex;flex-direction:column;gap:6px;padding:18px 18px 26px;background:var(--ds-cloud);color:var(--ds-ink);font-size:12px;letter-spacing:.02em;rotate:1deg;box-shadow:0 30px 60px -30px rgba(0,0,0,.5);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsbn-rh{display:flex;justify-content:space-between;gap:10px;padding-bottom:8px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsbn-rh b{font-weight:500}
.dsbn-rl{display:flex;align-items:baseline;gap:8px;color:color-mix(in srgb,var(--ds-ink) 75%,transparent)} .dsbn-rl i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px} .dsbn-rl b{font-weight:500;color:var(--ds-ink)}
.dsbn-sum{margin-top:6px;padding-top:8px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent)} .dsbn-sum b{text-decoration:line-through;color:var(--ds-mut)}
.dsbn-tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:8px;padding-top:10px;border-top:2px solid var(--ds-ink);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsbn-tot em{font-style:normal;font-size:28px;font-weight:800;letter-spacing:-.02em}
.dsbn-save{align-self:flex-end;margin-top:4px;padding:4px 10px;border:2px solid var(--ds-acc);border-radius:4px;color:var(--ds-acc);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg}
/* other bundles */
.dsbn-others{padding-bottom:clamp(90px,10vw,150px)}
.dsbn-oh{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 16%,transparent);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsbn-oh a{display:inline-flex;align-items:center;gap:8px;color:var(--ds-ink);text-decoration:none} .dsbn-oh a svg{color:var(--ds-brass);transition:translate .3s} .dsbn-oh a:hover svg{translate:4px 0}
.dsbn-orow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.dsbn-o{display:flex;flex-direction:column;gap:8px;padding:22px;border-radius:16px;background:var(--oc);color:#fff;text-decoration:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1);transition:transform .5s cubic-bezier(.34,1.56,.64,1)} .dsbn-o:hover{transform:translateY(-6px)}
.dsbn-on{font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.05} .dsbn-op{display:flex;align-items:baseline;gap:10px} .dsbn-op em{font-style:normal;font-size:24px;font-weight:800} .dsbn-op s{font-size:11px;opacity:.88} .dsbn-os{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-ink);background:var(--ds-bone);padding:2px 7px;border-radius:3px}
/* tablet + phone */
.dsbn.is-tab .dsbn-bw{grid-template-columns:1fr} .dsbn.is-tab .dsbn-stack{height:300px} .dsbn.is-tab .dsbn-body{grid-template-columns:1fr} .dsbn.is-tab .dsbn-side{position:relative;top:auto} .dsbn.is-tab .dsbn-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.dsbn.is-ph .dsbn-band{padding-top:100px} .dsbn.is-ph .dsbn-bw{grid-template-columns:1fr;gap:26px} .dsbn.is-ph .dsbn-h1{font-size:clamp(36px,11vw,50px)} .dsbn.is-ph .dsbn-stack{height:270px} .dsbn.is-ph .dsbn-sc{width:150px;height:200px;margin:-100px 0 0 -75px}
.dsbn.is-ph .dsbn-body{grid-template-columns:1fr;gap:30px} .dsbn.is-ph .dsbn-side{position:relative;top:auto} .dsbn.is-ph .dsbn-r{rotate:0deg} .dsbn.is-ph .dsbn-grid{grid-template-columns:1fr;gap:26px} .dsbn.is-ph .dsbn-orow{grid-template-columns:1fr}
@media (prefers-reduced-motion:reduce){.dsbn-sc,.dsbn-face,.dsbn-o{transition:none}}`),
      E(V, {
        ...Ee,
        slug: {
          type: N.String,
          title: `Slug`,
          description: `Bind to the Bundles slug on the CMS page (empty = the URL)`,
          defaultValue: ``,
        },
        title: { type: N.String, title: `Title override`, defaultValue: `` },
        price: { type: N.String, title: `Price override`, defaultValue: `` },
        was: { type: N.String, title: `Subtotal override`, defaultValue: `` },
        save: { type: N.String, title: `Saving override`, defaultValue: `` },
        blurb: { type: N.String, title: `Blurb override`, displayTextArea: !0, defaultValue: `` },
        checkout: {
          type: N.String,
          title: `Checkout link`,
          description: `Lemon Squeezy, Gumroad or Stripe link (bind to a CMS field if you add one)`,
          defaultValue: ``,
        },
        buyLabel: { type: N.String, title: `Buy button`, defaultValue: `Buy the bundle` },
        crumbHome: { type: N.String, title: `Crumb home`, defaultValue: `Home` },
        crumbList: { type: N.String, title: `Crumb list`, defaultValue: `Bundles` },
        crumbListLink: { type: N.Link, title: `Crumb list link`, defaultValue: `/bundles` },
        itemsLabel: { type: N.String, title: `Items word`, defaultValue: `items` },
        insideLabel: { type: N.String, title: `Products heading`, defaultValue: `In this bundle` },
        includesLabel: { type: N.String, title: `Includes label`, defaultValue: `Inside` },
        receiptTitle: { type: N.String, title: `Receipt title`, defaultValue: `Receipt` },
        subtotalLabel: { type: N.String, title: `Subtotal label`, defaultValue: `Subtotal` },
        bundleLabel: { type: N.String, title: `Bundle label`, defaultValue: `Bundle price` },
        totalLabel: { type: N.String, title: `Total label`, defaultValue: `You pay` },
        saveLabel: { type: N.String, title: `Save label`, defaultValue: `You save` },
        otherLabel: { type: N.String, title: `Others label`, defaultValue: `Other bundles` },
        otherLink: { type: N.Link, title: `Others link`, defaultValue: `/bundles` },
        otherLinkLabel: { type: N.String, title: `Others link label`, defaultValue: `All bundles` },
        ...we,
        ...Te,
      }));
  }),
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
  $,
  Je;
e(() => {
  (f(),
    S(),
    g(),
    p(),
    Ie(),
    le(),
    I(),
    z(),
    (Le = j(V)),
    (Re = j(L)),
    (ze = {
      OtNPntu44: `(max-width: 809.98px)`,
      WI3t24VBQ: `(min-width: 810px) and (max-width: 1199.98px)`,
      XLt6gI8DM: `(min-width: 1200px)`,
    }),
    (Be = []),
    (Ve = `framer-7ARPy`),
    (He = {
      OtNPntu44: `framer-v-1dv3rdi`,
      WI3t24VBQ: `framer-v-1qfib6s`,
      XLt6gI8DM: `framer-v-9xv1uv`,
    }),
    (Ue = (e, t, n) => (e && t ? `position` : n)),
    (We = { Desktop: `XLt6gI8DM`, Phone: `OtNPntu44`, Tablet: `WI3t24VBQ` }),
    (Ge = ({ value: e }) =>
      C()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ke = (e) => ({
      from: { alias: `Dev5HtCTV`, data: ce, type: `Collection` },
      select: [{ collection: `Dev5HtCTV`, name: `xKaH73n4V`, type: `Identifier` }],
      where: e,
    })),
    (qe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: We[r.variant] ?? r.variant ?? `XLt6gI8DM`,
    })),
    ($ = T(
      d(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: d, setLocale: f } = O();
        oe();
        let p = ne(),
          [m] = M(Ke(v(p, `Dev5HtCTV`)));
        if (!m) throw new k(`No data matches path variables: ${JSON.stringify(p)}`);
        let {
          style: g,
          className: _,
          layoutId: y,
          variant: x,
          xKaH73n4V: S = m.xKaH73n4V ?? ``,
          ...C
        } = qe(e);
        se(c(() => R({}, d), [d]));
        let [T, E] = ie(x, ze, !1),
          j = b(Ve),
          N = t(D)?.isLayoutTemplate,
          P = !!t(ee)?.transition?.layout,
          F = Ue(N, P);
        return (
          re({}),
          u(D.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: We,
              primaryVariantId: `XLt6gI8DM`,
              variantClassNames: He,
            },
            children: l(te, {
              id: y ?? o,
              children: [
                u(Ge, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(h.div, {
                  ...C,
                  className: b(j, `framer-9xv1uv`, _),
                  ref: a,
                  style: { ...g },
                  children: [
                    u(h.div, {
                      className: `framer-m8777q`,
                      "data-framer-name": `S0 DsBundle`,
                      layout: F,
                      children: u(A, {
                        children: u(w, {
                          className: `framer-2czq74-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsBundle`,
                          isAuthoredByUser: !0,
                          name: `DsBundle`,
                          nodeId: `H27hNETVY`,
                          scopeId: `Dev5HtCTV`,
                          children: u(ae, {
                            breakpoint: T,
                            overrides: {
                              OtNPntu44: { bpHint: `phone` },
                              WI3t24VBQ: { bpHint: `tablet` },
                            },
                            children: u(V, {
                              blurb: ``,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              bundleLabel: `Bundle price`,
                              buyLabel: `Buy the bundle`,
                              checkout: `/thank-you`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbHome: `Home`,
                              crumbList: `Bundles`,
                              crumbListLink: `/bundles`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `H27hNETVY`,
                              includesLabel: `Inside`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              insideLabel: `In this bundle`,
                              itemsLabel: `items`,
                              layoutId: `H27hNETVY`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsBundle`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              otherLabel: `Other bundles`,
                              otherLink: `/bundles`,
                              otherLinkLabel: `All bundles`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              price: ``,
                              receiptTitle: `Receipt`,
                              save: ``,
                              saveLabel: `You save`,
                              slug: S,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subtotalLabel: `Subtotal`,
                              title: ``,
                              totalLabel: `You pay`,
                              was: ``,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    u(h.div, {
                      className: `framer-p943oi`,
                      "data-framer-name": `S1 DsReviews`,
                      layout: F,
                      children: u(A, {
                        children: u(w, {
                          className: `framer-xla60l-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `XQmflhoOu`,
                          scopeId: `Dev5HtCTV`,
                          children: u(ae, {
                            breakpoint: T,
                            overrides: {
                              OtNPntu44: { bpHint: `phone` },
                              WI3t24VBQ: { bpHint: `tablet` },
                            },
                            children: u(L, {
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
                              id: `XQmflhoOu`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `XQmflhoOu`,
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
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-7ARPy.framer-14wlu3q, .framer-7ARPy .framer-14wlu3q { display: block; }`,
        `.framer-7ARPy.framer-9xv1uv { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-7ARPy .framer-m8777q, .framer-7ARPy .framer-p943oi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7ARPy .framer-2czq74-container, .framer-7ARPy .framer-xla60l-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-7ARPy.framer-9xv1uv { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-7ARPy.framer-9xv1uv { width: 390px; }}`,
      ],
      `framer-7ARPy`
    )),
    ($.displayName = `Bundle`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    F(
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
        ...Le,
        ...Re,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return x([() => y.get(Ke(v(t.pathVariables, `Dev5HtCTV`)), n, r).preload()], t);
      },
    }),
    (Je = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerDev5HtCTV`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1080`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WI3t24VBQ":{"layout":["fixed","auto"]},"OtNPntu44":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Je as __FramerMetadata__, $ as default, Be as queryParamNames };
//# sourceMappingURL=vf3vuCmidbbGqV9q4f6WbnFCAr61t3EU6_LoYussKgc.CHXwPgmv.mjs.map
