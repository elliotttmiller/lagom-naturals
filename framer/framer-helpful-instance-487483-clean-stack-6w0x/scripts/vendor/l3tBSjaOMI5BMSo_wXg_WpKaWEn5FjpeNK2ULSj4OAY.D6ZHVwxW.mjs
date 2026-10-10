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
  B as ne,
  C as y,
  H as b,
  J as re,
  P as x,
  Q as S,
  X as C,
  Z as w,
  a as T,
  at as E,
  b as ie,
  c as D,
  et as O,
  f as k,
  g as A,
  i as j,
  k as M,
  nt as N,
  o as P,
  q as ae,
  tt as F,
  v as I,
  y as L,
} from "./framer.BNAppio8.mjs";
import { a as R, r as z } from "./FCmHoYAR6.DNwBOktz.mjs";
import { n as oe, t as B } from "./DsFaq.BS2R3ms-.mjs";
import { n as V, t as se } from "./DsReviews.Do5b3KPj.mjs";
import ce, { t as le } from "./xHpvkGz5j9L85NGcNXcD28KgKlcqnjVCNLUOjabXKH8.988DZyB0.mjs";
function ue() {
  m(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = W), document.head.appendChild(e));
  }, []);
}
function de() {
  let e = _(),
    t = null;
  try {
    t = I.current();
  } catch {}
  return e || (t !== null && t !== I.preview);
}
function fe() {
  let e = _(),
    [t, n] = o(!1);
  return (
    m(() => {
      !e && I.current() !== I.canvas && a !== void 0 && n(!0);
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
function _e(e) {
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
function H(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Fe(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Ne] = 1));
      } catch {}
      let s = () => {
          let t = _e(e);
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
function ve() {
  let e = H(`site`, Z.site || [])[0] || (Z.site || [])[0] || {},
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
function ye(e, t, n) {
  let r = H(e, t),
    [i, s] = o(``);
  m(() => {
    try {
      s(decodeURIComponent(a.location.pathname.split(`/`).filter(Boolean).pop() || ``));
    } catch {}
  }, []);
  let c = String(n || ``).trim() || i;
  return { row: r.find((e) => e.slug === c) || r[0] || {}, rows: r };
}
function U(e) {
  let {
      slug: t = ``,
      title: n = ``,
      price: r = ``,
      summary: i = ``,
      checkout: c = ``,
      buyLabel: d = `Start the course`,
      crumbHome: f = `Home`,
      crumbList: p = `Courses`,
      crumbListLink: ee = `/courses`,
      syllabusLabel: h = `The syllabus`,
      moduleWord: te = `Module`,
      getTitle: g = `What you get`,
      gets: _ = `Video lessons|Streamed from your account, watch on any device; Worksheets|One PDF at the end of every module; Private community|Ask questions, share your launch, get answers; Lifetime access|Every new lesson we add is included`,
      instructorLabel: v = `Taught by`,
      instructorCopy:
        ne = `The people who run the shelf. Every lesson comes from a launch we ran ourselves, numbers included.`,
      guarantee: y = `Not sure yet? The first lesson is free to watch before you buy.`,
      sampleLabel: b = `Watch the first lesson`,
      bpHint: re = `auto`,
    } = e,
    x = Te(e),
    { D: S, B: C, M: w } = me(e);
  ue();
  let T = fe(),
    E = we(),
    ie = de(),
    D = ve(),
    O = s(null),
    { w: k } = pe(O, re);
  he(O, T);
  let A = ge(T),
    [j, M] = o(!1);
  m(() => {
    if (!T || !A) return;
    let e = a.setTimeout(() => M(!0), 100);
    return () => a.clearTimeout(e);
  }, [T, A]);
  let N = j || ie || E,
    P = k < 810,
    ae = k >= 810 && k < 1100,
    { row: F } = ye(`courses`, Z.courses, t),
    I = H(`lessons`, Z.lessons),
    L = {
      n: Q(n, F.f1 || ``),
      p: Q(r, F.f2 || ``),
      s: Q(i, F.f6 || ``),
      len: F.f3 || ``,
      cnt: F.f4 || ``,
      lvl: F.f5 || ``,
    },
    R = I.filter((e) => !e.f5 || !F.slug || e.f5 === F.slug),
    z = [];
  R.forEach((e, t) => {
    let n = e.f3 || te,
      r = z.find((e) => e.m === n);
    (r || ((r = { m: n, rows: [] }), z.push(r)), r.rows.push({ n: t + 1, r: e }));
  });
  let oe = Ie(_)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { k: (t || ``).trim(), v: (n || ``).trim() };
      })
      .filter((e) => e.k),
    B = D.name || `Shelfline`,
    V = String(c || ``).trim() || `/checkout?course=${F.slug || ``}`;
  return l(`section`, {
    ref: O,
    className: `ds ds-sec dscp${N ? ` is-on` : ``}${P ? ` is-ph` : ae ? ` is-tab` : ``}${ie ? ` is-still` : ``}`,
    style: { ...Ee(x), ...C, ...e.style },
    "aria-label": L.n,
    children: [
      u(`link`, { rel: `stylesheet`, href: W }),
      u(`style`, { dangerouslySetInnerHTML: { __html: je + Me + Le } }),
      u(`div`, {
        className: `dscp-band ds-dark`,
        children: l(`div`, {
          className: `ds-wrap dscp-bw`,
          children: [
            l(`div`, {
              className: `dscp-copy`,
              children: [
                l(`nav`, {
                  className: `dscp-crumbs`,
                  "aria-label": `Breadcrumb`,
                  style: { ...w, ...X(N, 0) },
                  children: [
                    u(`a`, { href: `/`, children: f }),
                    u(`i`, { "aria-hidden": !0 }),
                    u(`a`, { href: ee, children: p }),
                    u(`i`, { "aria-hidden": !0 }),
                    u(`span`, { "aria-current": `page`, children: L.n }),
                  ],
                }),
                u(`div`, {
                  className: `dscp-chips`,
                  style: { ...w, ...X(N, 80) },
                  children: [L.lvl, L.cnt, L.len]
                    .filter(Boolean)
                    .map((e, t) => u(`span`, { children: e }, t)),
                }),
                u(`h1`, { className: `dscp-h1`, style: { ...S, ...X(N, 140) }, children: L.n }),
                u(`p`, { className: `dscp-sum`, style: X(N, 220), children: L.s }),
                l(`div`, {
                  className: `dscp-buy`,
                  style: X(N, 300),
                  children: [
                    u(`em`, { className: `dscp-price`, style: S, children: L.p }),
                    u(Ae, { href: V, label: d, kind: `solid` }),
                  ],
                }),
                u(`p`, { className: `dscp-gua`, style: { ...w, ...X(N, 380) }, children: y }),
              ],
            }),
            l(`a`, {
              className: `dscp-player`,
              href: V,
              "aria-label": `${b}: ${R[0]?.f1 || L.n}`,
              style: X(N, 260, 40),
              children: [
                u(`span`, {
                  className: `dscp-cov`,
                  children: u(`img`, {
                    ...xe(Pe(F), `(max-width: 809px) 100vw, 45vw`),
                    alt: ``,
                    loading: `eager`,
                    decoding: `async`,
                  }),
                }),
                l(`span`, {
                  className: `dscp-ptop`,
                  style: w,
                  children: [
                    l(`span`, { children: [u(`i`, {}), b] }),
                    l(`span`, { children: [`01 / `, String(R.length).padStart(2, `0`)] }),
                  ],
                }),
                l(`span`, {
                  className: `dscp-pmid`,
                  children: [
                    u(`span`, {
                      className: `dscp-play`,
                      "aria-hidden": !0,
                      children: u(`svg`, {
                        viewBox: `0 0 24 24`,
                        children: u(`path`, { d: `M8 5v14l11-7z`, fill: `currentColor` }),
                      }),
                    }),
                    u(`b`, { style: S, children: R[0]?.f1 || L.n }),
                    u(`span`, { style: w, children: R[0]?.f2 || L.len }),
                  ],
                }),
                u(`span`, { className: `dscp-pbar`, "aria-hidden": !0, children: u(`i`, {}) }),
              ],
            }),
          ],
        }),
      }),
      l(`div`, {
        className: `ds-wrap dscp-body`,
        children: [
          l(`div`, {
            className: `dscp-main`,
            children: [
              u(`h2`, { className: `dscp-h2`, style: S, children: h }),
              u(`div`, {
                className: `dscp-groups`,
                children: z.map((e, t) =>
                  l(
                    `div`,
                    {
                      className: `dscp-g`,
                      children: [
                        l(`span`, {
                          className: `dscp-gm`,
                          style: w,
                          children: [u(`i`, { "aria-hidden": !0 }), e.m],
                        }),
                        u(`ol`, {
                          className: `dscp-rows`,
                          children: e.rows.map((e) =>
                            l(
                              `li`,
                              {
                                children: [
                                  u(`span`, {
                                    className: `dscp-n`,
                                    style: w,
                                    children: String(e.n).padStart(2, `0`),
                                  }),
                                  l(`span`, {
                                    className: `dscp-rt`,
                                    children: [
                                      u(`b`, { style: S, children: e.r.f1 }),
                                      e.r.f4 &&
                                        u(`span`, { className: `dscp-rs`, children: e.r.f4 }),
                                    ],
                                  }),
                                  u(`span`, { className: `dscp-l`, style: w, children: e.r.f2 }),
                                ],
                              },
                              e.r.slug || e.n
                            )
                          ),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
          l(`aside`, {
            className: `dscp-side`,
            children: [
              l(`div`, {
                className: `dscp-gets`,
                style: w,
                children: [
                  l(`span`, {
                    className: `dscp-gh`,
                    children: [u(`b`, { children: g }), u(`span`, { children: L.cnt })],
                  }),
                  oe.map((e, t) =>
                    l(
                      `span`,
                      {
                        className: `dscp-gl`,
                        children: [
                          u(`b`, { style: C, children: e.k }),
                          u(`span`, { children: e.v }),
                        ],
                      },
                      t
                    )
                  ),
                  l(`span`, {
                    className: `dscp-gt`,
                    children: [
                      u(`span`, { children: L.p }),
                      u(Ae, { href: V, label: d, kind: `solid`, className: `dscp-gbtn` }),
                    ],
                  }),
                ],
              }),
              l(`div`, {
                className: `dscp-inst`,
                children: [
                  u(`span`, { className: `dscp-il`, style: w, children: v }),
                  l(`span`, {
                    className: `dscp-irow`,
                    children: [
                      u(`span`, {
                        className: `dscp-av`,
                        style: S,
                        "aria-hidden": !0,
                        children: B.slice(0, 1),
                      }),
                      l(`span`, {
                        children: [
                          u(`b`, { style: S, children: B }),
                          u(`small`, { children: D.role || `` }),
                        ],
                      }),
                    ],
                  }),
                  u(`p`, { children: ne }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var W,
  be,
  G,
  K,
  xe,
  Se,
  q,
  Ce,
  J,
  we,
  Y,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  X,
  Me,
  Z,
  Ne,
  Q,
  Pe,
  Fe,
  Ie,
  Le,
  Re = e(() => {
    (i(),
      f(),
      p(),
      x(),
      (W = `../../styles/css2-a59a76.css`),
      (be = `clamp(1280px, 92vw, 1520px)`),
      (G = [160, 320, 480, 800, 1200, 1600]),
      (K = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return G.find((e) => e >= i) || 1600;
      }),
      (xe = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = K(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = K(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: G.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (Se = (e) => {
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
      (Ce = (e) => {
        let t = Se(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (J = (e, t, n, r) => {
        let i = e ? Ce(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (we = () => {
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
      (Te = (e) => ({
        bone: e.bone || Y.bone,
        ink: e.ink || Y.ink,
        brass: e.brass || Y.brass,
        pine: e.pine || Y.pine,
        fog: e.fog || Y.fog,
        stone: e.stone || Y.stone,
        cloud: e.cloud || Y.cloud,
        night: e.night || Y.night,
      })),
      (Ee = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (De = {
        bone: { type: P.Color, title: `Paper`, defaultValue: Y.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: Y.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: Y.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: Y.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: Y.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: Y.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: Y.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: Y.night },
      }),
      (Oe = {
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
      (ke = {
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
      (Ae = ({
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
      (je = `
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
      (X = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Me = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${be} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Z = {
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
        courses: [
          {
            slug: `launch-in-30-days`,
            f1: `Launch in 30 Days`,
            f2: `$149`,
            f3: `6 h 20 min`,
            f4: `14 lessons`,
            f5: `Beginner to first sale`,
            f6: `A day-by-day course that takes a product from idea to first sale: positioning, the page, the price, the launch emails.`,
            f7: `launch-course`,
            img: `https://framerusercontent.com/images/QUfZkO9VbfSRc5QPCUTWDNKYuw.webp`,
            n1: `1`,
          },
        ],
        lessons: [
          {
            slug: `l01`,
            f1: `Pick the product people already ask for`,
            f2: `09:40`,
            f3: `Module 1 · Positioning`,
            f4: `Find the one question your audience keeps asking and shape the product around the answer.`,
            f5: `launch-in-30-days`,
            n1: `1`,
          },
          {
            slug: `l02`,
            f1: `Write the promise in one line`,
            f2: `07:15`,
            f3: `Module 1 · Positioning`,
            f4: `The sentence that goes on the cover, the page and the first email, tested three ways.`,
            f5: `launch-in-30-days`,
            n1: `2`,
          },
          {
            slug: `l03`,
            f1: `Build the page in an afternoon`,
            f2: `24:30`,
            f3: `Module 2 · The page`,
            f4: `Hero, what's inside, proof, price. The four blocks that sell, in the order that works.`,
            f5: `launch-in-30-days`,
            n1: `3`,
          },
          {
            slug: `l04`,
            f1: `Price it with a ladder, not a guess`,
            f2: `18:05`,
            f3: `Module 3 · Price`,
            f4: `Three tiers, one anchor, and the bundle maths that lifts the average order.`,
            f5: `launch-in-30-days`,
            n1: `4`,
          },
          {
            slug: `l05`,
            f1: `Record the preview that converts`,
            f2: `12:50`,
            f3: `Module 2 · The page`,
            f4: `A 90-second screen recording that shows the inside and ends on the first win.`,
            f5: `launch-in-30-days`,
            n1: `5`,
          },
          {
            slug: `l06`,
            f1: `The seven launch emails`,
            f2: `31:10`,
            f3: `Module 4 · Launch`,
            f4: `Day by day: the tease, the open, the proof, the objection, the deadline, the last call, the thank-you.`,
            f5: `launch-in-30-days`,
            n1: `6`,
          },
          {
            slug: `l07`,
            f1: `Open the doors`,
            f2: `15:00`,
            f3: `Module 4 · Launch`,
            f4: `Launch day checklist, the first-hour fixes and what to reply to the first buyer.`,
            f5: `launch-in-30-days`,
            n1: `7`,
          },
          {
            slug: `l08`,
            f1: `Keep selling after launch week`,
            f2: `21:40`,
            f3: `Module 5 · After`,
            f4: `Evergreen pages, the free download funnel and the monthly email that keeps orders coming.`,
            f5: `launch-in-30-days`,
            n1: `8`,
          },
        ],
      }),
      (Ne = `DsCoursePage@cms1`),
      (Q = (e, t) => (e != null && String(e).trim() ? String(e).trim() : t)),
      (Pe = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Fe = a === void 0 ? m : r),
      (Ie = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Le = `
.dscp{position:relative;background:var(--ds-bone);color:var(--ds-ink);overflow:clip;z-index:11}
.dscp-band{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(120px,13vw,180px) 0 clamp(70px,8vw,110px)}
.dscp-band::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 70% at 80% 30%,color-mix(in srgb,var(--ds-pine) 80%,var(--ds-night)),var(--ds-night) 70%);pointer-events:none}
.dscp-bw{position:relative;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(30px,5vw,80px);align-items:center}
.dscp-copy{display:flex;flex-direction:column;align-items:flex-start;gap:16px}
.dscp-crumbs{display:flex;align-items:center;flex-wrap:wrap;gap:8px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dscp-crumbs a{color:inherit;text-decoration:none} .dscp-crumbs a:hover{color:var(--ds-brass)} .dscp-crumbs i{width:4px;height:4px;border-radius:50%;background:var(--ds-brass)} .dscp-crumbs span{color:var(--ds-bone)}
.dscp-chips{display:flex;flex-wrap:wrap;gap:8px} .dscp-chips span{padding:6px 11px;border-radius:999px;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-bone);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 26%,transparent)}
.dscp-h1{margin:0;font-size:clamp(40px,5.2vw,80px);line-height:.94;letter-spacing:-.035em;font-weight:800;text-wrap:balance}
.dscp-sum{margin:0;max-width:520px;font-size:17px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)}
.dscp-buy{display:flex;align-items:center;gap:18px;flex-wrap:wrap;margin-top:4px} .dscp-price{font-style:normal;font-size:clamp(30px,3.2vw,44px);font-weight:800;letter-spacing:-.03em}
.dscp-gua{margin:0;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)}
/* player */
.dscp-player{position:relative;display:flex;flex-direction:column;justify-content:space-between;aspect-ratio:4/3;padding:22px;border-radius:18px;overflow:hidden;background:var(--ds-pine);color:var(--ds-bone);text-decoration:none;box-shadow:0 50px 100px -40px rgba(0,0,0,.8);isolation:isolate}
.dscp-cov{position:absolute;inset:0;z-index:-1} .dscp-cov img{width:100%;height:100%;object-fit:cover;display:block;opacity:.45;mix-blend-mode:luminosity;transition:scale 1.4s cubic-bezier(.16,.84,.24,1)} .dscp-player:hover .dscp-cov img{scale:1.05}
.dscp-cov::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.15),color-mix(in srgb,var(--ds-night) 85%,transparent))}
.dscp-ptop{display:flex;justify-content:space-between;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 80%,transparent)} .dscp-ptop span{display:inline-flex;align-items:center;gap:8px} .dscp-ptop i{width:7px;height:7px;border-radius:50%;background:var(--ds-brass)}
.dscp-pmid{display:flex;flex-direction:column;align-items:flex-start;gap:8px} .dscp-pmid b{font-size:clamp(22px,2.2vw,32px);line-height:1.05;font-weight:800;letter-spacing:-.025em;text-wrap:balance} .dscp-pmid>span:last-child{font-size:11px;letter-spacing:.08em;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)}
.dscp-play{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);margin-bottom:8px;transition:transform .5s cubic-bezier(.34,1.56,.64,1)} .dscp-play svg{width:20px;height:20px;margin-left:3px} .dscp-player:hover .dscp-play{transform:scale(1.1)}
.dscp-pbar{display:block;height:3px;margin-top:16px;background:color-mix(in srgb,var(--ds-bone) 18%,transparent);border-radius:3px;overflow:hidden} .dscp-pbar i{display:block;width:8%;height:100%;background:var(--ds-brass)}
/* body */
.dscp-body{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,.75fr);gap:clamp(30px,5vw,80px);align-items:start;padding-top:clamp(60px,7vw,100px);padding-bottom:clamp(90px,10vw,150px)}
.dscp-h2{margin:0 0 22px;font-size:clamp(26px,2.6vw,38px);line-height:1;font-weight:800;letter-spacing:-.03em}
.dscp-groups{display:flex;flex-direction:column;gap:26px}
.dscp-gm{display:inline-flex;align-items:center;gap:10px;margin-bottom:8px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dscp-gm i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dscp-rows{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dscp-rows li{display:grid;grid-template-columns:44px minmax(0,1fr) auto;gap:14px 18px;align-items:start;padding:18px 8px 18px 6px;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dscp-n{font-size:12px;letter-spacing:.08em;color:var(--ds-mut);padding-top:4px} .dscp-rt{display:flex;flex-direction:column;gap:5px} .dscp-rt b{font-size:clamp(17px,1.5vw,22px);line-height:1.1;font-weight:800;letter-spacing:-.02em} .dscp-rs{font-size:14.5px;line-height:1.5;color:var(--ds-mut);max-width:520px}
.dscp-l{font-size:11px;letter-spacing:.06em;color:var(--ds-mut);padding-top:4px}
/* side */
.dscp-side{position:sticky;top:96px;display:flex;flex-direction:column;gap:22px}
.dscp-gets{display:flex;flex-direction:column;gap:10px;padding:18px 18px 22px;background:var(--ds-cloud);color:var(--ds-ink);font-size:11.5px;letter-spacing:.02em;rotate:.8deg;box-shadow:0 30px 60px -30px rgba(0,0,0,.45);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dscp-gh{display:flex;justify-content:space-between;gap:10px;padding-bottom:8px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dscp-gh b{font-weight:500}
.dscp-gl{display:flex;flex-direction:column;gap:2px;padding:6px 0;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 25%,transparent)} .dscp-gl b{font-size:14px;font-weight:700;letter-spacing:-.01em} .dscp-gl span{font-size:12.5px;line-height:1.45;color:var(--ds-mut);font-family:inherit}
.dscp-gt{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:8px;padding-top:12px;border-top:2px solid var(--ds-ink)} .dscp-gt>span{font-size:26px;font-weight:800;letter-spacing:-.02em} .dscp-gbtn{font-size:12px;min-height:44px}
.dscp-inst{display:flex;flex-direction:column;gap:12px;padding:20px;border-radius:14px;background:var(--ds-night);color:var(--ds-bone)}
.dscp-il{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)}
.dscp-irow{display:flex;align-items:center;gap:12px} .dscp-irow b{display:block;font-size:16px;font-weight:800;letter-spacing:-.01em} .dscp-irow small{display:block;font-size:10.5px;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)}
.dscp-av{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);font-size:18px;font-weight:800}
.dscp-inst p{margin:0;font-size:14px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
/* tablet + phone */
.dscp.is-tab .dscp-bw{grid-template-columns:1fr} .dscp.is-tab .dscp-body{grid-template-columns:1fr} .dscp.is-tab .dscp-side{position:relative;top:auto}
.dscp.is-ph .dscp-band{padding-top:100px} .dscp.is-ph .dscp-bw{grid-template-columns:1fr;gap:26px} .dscp.is-ph .dscp-h1{font-size:clamp(36px,11vw,50px)} .dscp.is-ph .dscp-player{padding:16px;aspect-ratio:auto;min-height:260px}
.dscp.is-ph .dscp-body{grid-template-columns:1fr;gap:30px} .dscp.is-ph .dscp-side{position:relative;top:auto} .dscp.is-ph .dscp-gets{rotate:0deg} .dscp.is-ph .dscp-rows li{grid-template-columns:34px minmax(0,1fr) auto;padding:14px 4px} .dscp.is-ph .dscp-rt b{font-size:16px}
@media (prefers-reduced-motion:reduce){.dscp-cov img,.dscp-play{transition:none}}`),
      ie(U, {
        ...ke,
        slug: {
          type: P.String,
          title: `Slug`,
          description: `Bind to the Courses slug on the CMS page (empty = the URL)`,
          defaultValue: ``,
        },
        title: { type: P.String, title: `Title override`, defaultValue: `` },
        price: { type: P.String, title: `Price override`, defaultValue: `` },
        summary: {
          type: P.String,
          title: `Summary override`,
          displayTextArea: !0,
          defaultValue: ``,
        },
        checkout: {
          type: P.String,
          title: `Checkout link`,
          description: `Lemon Squeezy, Gumroad or Stripe link`,
          defaultValue: ``,
        },
        buyLabel: { type: P.String, title: `Buy button`, defaultValue: `Start the course` },
        crumbHome: { type: P.String, title: `Crumb home`, defaultValue: `Home` },
        crumbList: { type: P.String, title: `Crumb list`, defaultValue: `Courses` },
        crumbListLink: { type: P.Link, title: `Crumb list link`, defaultValue: `/courses` },
        sampleLabel: {
          type: P.String,
          title: `Player label`,
          defaultValue: `Watch the first lesson`,
        },
        syllabusLabel: { type: P.String, title: `Syllabus heading`, defaultValue: `The syllabus` },
        moduleWord: {
          type: P.String,
          title: `Module word (when a lesson has none)`,
          defaultValue: `Module`,
        },
        getTitle: { type: P.String, title: `Get heading`, defaultValue: `What you get` },
        gets: {
          type: P.String,
          title: `Get rows`,
          description: `Title|Line; …`,
          displayTextArea: !0,
          defaultValue: `Video lessons|Streamed from your account, watch on any device; Worksheets|One PDF at the end of every module; Private community|Ask questions, share your launch, get answers; Lifetime access|Every new lesson we add is included`,
        },
        instructorLabel: { type: P.String, title: `Instructor label`, defaultValue: `Taught by` },
        instructorCopy: {
          type: P.String,
          title: `Instructor copy`,
          displayTextArea: !0,
          defaultValue: `The people who run the shelf. Every lesson comes from a launch we ran ourselves, numbers included.`,
        },
        guarantee: {
          type: P.String,
          title: `Guarantee line`,
          defaultValue: `Not sure yet? The first lesson is free to watch before you buy.`,
        },
        ...De,
        ...Oe,
      }));
  }),
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
  $,
  Ze;
e(() => {
  (f(),
    x(),
    g(),
    p(),
    Re(),
    oe(),
    V(),
    z(),
    le(),
    (ze = M(U)),
    (Be = M(se)),
    (Ve = M(B)),
    (He = {
      CL5C2d48q: `(max-width: 809.98px)`,
      E8NbkTQik: `(min-width: 810px) and (max-width: 1199.98px)`,
      TUlWxHXCF: `(min-width: 1200px)`,
    }),
    (Ue = []),
    (We = `framer-vzlr3`),
    (Ge = {
      CL5C2d48q: `framer-v-pqqxla`,
      E8NbkTQik: `framer-v-ykwra4`,
      TUlWxHXCF: `framer-v-1x796ym`,
    }),
    (Ke = (e, t, n) => (e && t ? `position` : n)),
    (qe = { Desktop: `TUlWxHXCF`, Phone: `CL5C2d48q`, Tablet: `E8NbkTQik` }),
    (Je = ({ value: e }) =>
      S()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ye = (e) => ({
      from: { alias: `jZz6Y9MLV`, data: R, type: `Collection` },
      select: [{ collection: `jZz6Y9MLV`, name: `ZDADCUIEj`, type: `Identifier` }],
      where: e,
    })),
    (Xe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: qe[r.variant] ?? r.variant ?? `TUlWxHXCF`,
    })),
    ($ = E(
      d(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: d, setLocale: f } = O();
        ae();
        let p = re(),
          [m] = N(Ye(v(p, `jZz6Y9MLV`)));
        if (!m) throw new k(`No data matches path variables: ${JSON.stringify(p)}`);
        let {
          style: g,
          className: _,
          layoutId: ne,
          variant: b,
          ZDADCUIEj: x = m.ZDADCUIEj ?? ``,
          ...S
        } = Xe(e);
        F(c(() => ce({}, d), [d]));
        let [E, ie] = w(b, He, !1),
          M = y(We),
          P = t(D)?.isLayoutTemplate,
          I = !!t(ee)?.transition?.layout,
          L = Ke(P, I);
        return (
          C({}),
          u(D.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: qe,
              primaryVariantId: `TUlWxHXCF`,
              variantClassNames: Ge,
            },
            children: l(te, {
              id: ne ?? o,
              children: [
                u(Je, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(h.div, {
                  ...S,
                  className: y(M, `framer-1x796ym`, _),
                  ref: a,
                  style: { ...g },
                  children: [
                    u(h.div, {
                      className: `framer-5b5fy6`,
                      "data-framer-name": `S0 DsCoursePage`,
                      layout: L,
                      children: u(j, {
                        children: u(T, {
                          className: `framer-jsmmf0-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCoursePage`,
                          isAuthoredByUser: !0,
                          name: `DsCoursePage`,
                          nodeId: `b0I2Ne90v`,
                          scopeId: `jZz6Y9MLV`,
                          children: u(A, {
                            breakpoint: E,
                            overrides: {
                              CL5C2d48q: { bpHint: `phone` },
                              E8NbkTQik: { bpHint: `tablet` },
                            },
                            children: u(U, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              buyLabel: `Start the course`,
                              checkout: `/thank-you`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbHome: `Home`,
                              crumbList: `Courses`,
                              crumbListLink: `/courses`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              gets: `Video lessons|Streamed from your account, watch on any device; Worksheets|One PDF at the end of every module; Private community|Ask questions, share your launch, get answers; Lifetime access|Every new lesson we add is included`,
                              getTitle: `What you get`,
                              guarantee: `Not sure yet? The first lesson is free to watch before you buy.`,
                              height: `100%`,
                              id: `b0I2Ne90v`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              instructorCopy: `The people who run the shelf. Every lesson comes from a launch we ran ourselves, numbers included.`,
                              instructorLabel: `Taught by`,
                              layoutId: `b0I2Ne90v`,
                              moduleWord: `Module`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCoursePage`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              price: ``,
                              sampleLabel: `Watch the first lesson`,
                              slug: x,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              summary: ``,
                              syllabusLabel: `The syllabus`,
                              title: ``,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    u(h.div, {
                      className: `framer-14s89m5`,
                      "data-framer-name": `S1 DsReviews`,
                      layout: L,
                      children: u(j, {
                        children: u(T, {
                          className: `framer-2jm8d5-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `vV3zZ0BCd`,
                          scopeId: `jZz6Y9MLV`,
                          children: u(A, {
                            breakpoint: E,
                            overrides: {
                              CL5C2d48q: { bpHint: `phone` },
                              E8NbkTQik: { bpHint: `tablet` },
                            },
                            children: u(se, {
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
                              id: `vV3zZ0BCd`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `vV3zZ0BCd`,
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
                    u(h.div, {
                      className: `framer-1aoladb`,
                      "data-framer-name": `S2 DsFaq`,
                      layout: L,
                      children: u(j, {
                        children: u(T, {
                          className: `framer-hgoty-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFaq`,
                          isAuthoredByUser: !0,
                          name: `DsFaq`,
                          nodeId: `QASTgYhGk`,
                          scopeId: `jZz6Y9MLV`,
                          children: u(A, {
                            breakpoint: E,
                            overrides: {
                              CL5C2d48q: { bpHint: `phone` },
                              E8NbkTQik: { bpHint: `tablet` },
                            },
                            children: u(B, {
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
                              id: `QASTgYhGk`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `QASTgYhGk`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFaq`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pages: `courses`,
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
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-vzlr3.framer-10s0kr7, .framer-vzlr3 .framer-10s0kr7 { display: block; }`,
        `.framer-vzlr3.framer-1x796ym { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-vzlr3 .framer-5b5fy6, .framer-vzlr3 .framer-14s89m5, .framer-vzlr3 .framer-1aoladb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vzlr3 .framer-jsmmf0-container, .framer-vzlr3 .framer-2jm8d5-container, .framer-vzlr3 .framer-hgoty-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-vzlr3.framer-1x796ym { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-vzlr3.framer-1x796ym { width: 390px; }}`,
      ],
      `framer-vzlr3`
    )),
    ($.displayName = `Course`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    L(
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
        ...ze,
        ...Be,
        ...Ve,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return b([() => ne.get(Ye(v(t.pathVariables, `jZz6Y9MLV`)), n, r).preload()], t);
      },
    }),
    (Ze = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerjZz6Y9MLV`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"E8NbkTQik":{"layout":["fixed","auto"]},"CL5C2d48q":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `1080`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ze as __FramerMetadata__, $ as default, Ue as queryParamNames };
//# sourceMappingURL=l3tBSjaOMI5BMSo_wXg_WpKaWEn5FjpeNK2ULSj4OAY.D6ZHVwxW.mjs.map
