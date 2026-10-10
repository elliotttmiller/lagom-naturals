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
import { a as g, k as _, r as ee, t as te } from "./motion.dK94hszq.mjs";
import {
  $ as v,
  C as y,
  P as b,
  Q as x,
  X as S,
  Z as C,
  a as w,
  at as T,
  b as E,
  c as D,
  et as O,
  g as k,
  i as A,
  k as j,
  o as M,
  q as N,
  tt as P,
  v as F,
  y as I,
} from "./framer.BNAppio8.mjs";
import { n as ne, t as L } from "./DsFaq.BS2R3ms-.mjs";
import { n as R, t as re } from "./DsReviews.Do5b3KPj.mjs";
import { n as ie, t as z } from "./DsPageHero.BMIkCPXD.mjs";
import B, { t as ae } from "./dqDJQaRrn-czYJLqTuWp3wFniZehHGGj7jiCotbuzgI.Dy-2PQrE.mjs";
function oe() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = H), document.head.appendChild(e));
  }, []);
}
function se() {
  let e = v(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function ce() {
  let e = v(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function le(e, t) {
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
function ue(e, t, n) {
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
function de(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: K(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? G(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: K(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? G(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: K(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? G(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function fe(e, t) {
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
function pe(e) {
  let [t, n] = o([]);
  return (
    h(() => {
      if (!e) return;
      n(Y());
      let t = () => n(Y());
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
function me(e) {
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
function he(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = se(),
    l = me(t);
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
              (o = ue(() => {
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
function ge(e) {
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
    Ve(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[ze] = 1));
      } catch {}
      let s = () => {
          let t = ge(e);
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
function V(e) {
  let {
      eyebrow: t = `The whole shelf`,
      heading: n = `Every product,|*one place.*`,
      allLabel: r = `All aisles`,
      priceLabels: i = `All prices|Under $30|$30 – $99|$100 and up`,
      sortLabel: c = `Sort`,
      sortLabels: l = `Featured|Price: low to high|Price: high to low|Most sold`,
      countLabel: f = `products`,
      emptyText: p = `Nothing on this shelf yet.`,
      addLabel: m = `Add`,
      cartLabel: g = `Cart`,
      hoverLabel: _ = `Pick up`,
      linkBase: ee = `/products/`,
      bpHint: te = `auto`,
    } = e,
    v = we(e),
    { D: y, B: b, M: x } = de(e);
  oe();
  let S = ce(),
    C = Ce(),
    w = se(),
    T = s(null),
    { w: E } = le(T, te),
    D = he(T, S, C, 0.05);
  fe(T, S);
  let O = E < 810,
    k = E >= 810 && E < 1100,
    A = _e(`products`, Re.products),
    j = _e(`types`, Re.types),
    [M, N] = o(``),
    [P, F] = o(0),
    [I, ne] = o(0),
    L = pe(S);
  h(() => {
    if (S)
      try {
        let e = new URLSearchParams(a.location.search).get(`type`);
        e && N(e);
      } catch {}
  }, [S]);
  let R = i.split(`|`).map((e) => e.trim()),
    re = l.split(`|`).map((e) => e.trim()),
    ie = (e) =>
      String(e.f4 || ``)
        .split(`;`)
        .map((e) => e.trim().toLowerCase())
        .filter(Boolean),
    z = j.find((e) => e.slug === M),
    B = A.filter((e) => {
      if (z) {
        let t = String(e.f2 || ``).toLowerCase();
        if (!ie(z).includes(t)) return !1;
      }
      let t = Q(e.f3 || ``);
      return !((P === 1 && t >= 30) || (P === 2 && (t < 30 || t >= 100)) || (P === 3 && t < 100));
    });
  I === 1
    ? (B = [...B].sort((e, t) => Q(e.f3 || ``) - Q(t.f3 || ``)))
    : I === 2
      ? (B = [...B].sort((e, t) => Q(t.f3 || ``) - Q(e.f3 || ``)))
      : I === 3 && (B = [...B].sort((e, t) => Q(t.f10 || ``) - Q(e.f10 || ``)));
  let ae = (e, t) => {
      (e.preventDefault(), e.stopPropagation(), je(Me(t)));
    },
    ue = `ds ds-sec dspl${D ? ` is-on` : ``}${O ? ` is-ph` : k ? ` is-tab` : ``}${w ? ` is-still` : ``}${C ? ` is-rm` : ``}`,
    me = (e, t) => {
      let n = String(e.f13 || `book`).toLowerCase(),
        [r, i, a] = He[n] || He.book,
        o = e.f12 || `#5B4BFF`;
      return u(
        `a`,
        {
          className: `dspl-card is-${n}`,
          href: `${ee}${e.slug || ``}`,
          style: {
            ...Z(D, 120 + (t % 6) * 60, 26),
            "--w": `${r}px`,
            "--h": `${i}px`,
            "--d": `${a}px`,
            "--col": o,
            "--fg": ve(o),
          },
          "aria-label": `${e.f1}, ${e.f2}, ${e.f3}${e.f4 ? `, was ` + e.f4 : ``}`,
          children: [
            u(`span`, {
              className: `dspl-stage`,
              "aria-hidden": !0,
              children: [
                u(`span`, {
                  className: `dspl-obj`,
                  children: [
                    u(`span`, {
                      className: `dspl-face f`,
                      children: [
                        d(`span`, {
                          className: `dspl-cov`,
                          children:
                            Be(e) &&
                            d(`img`, {
                              ...be(Be(e), `180px`),
                              alt: ``,
                              loading: `lazy`,
                              decoding: `async`,
                            }),
                        }),
                        u(`span`, {
                          className: `dspl-print`,
                          children: [
                            d(`b`, { style: y, children: e.f1 }),
                            d(`i`, { style: x, children: e.f2 }),
                          ],
                        }),
                        e.f9 && d(`span`, { className: `dspl-badge`, style: x, children: e.f9 }),
                        Ue(),
                      ],
                    }),
                    d(`span`, {
                      className: `dspl-face l`,
                      children: d(`b`, { style: y, children: e.f1 }),
                    }),
                    d(`span`, { className: `dspl-face t` }),
                    d(`span`, { className: `dspl-shadow` }),
                  ],
                }),
                u(`span`, {
                  className: `dspl-ptag`,
                  children: [
                    d(`span`, { className: `dspl-thole` }),
                    d(`b`, { style: y, children: e.f1 }),
                    d(`i`, { style: x, children: e.f5 }),
                    u(`span`, {
                      className: `dspl-pr`,
                      children: [
                        d(`em`, { style: y, children: e.f3 }),
                        e.f4 && d(`s`, { style: x, children: e.f4 }),
                        d(`button`, {
                          type: `button`,
                          tabIndex: -1,
                          className: `dspl-add`,
                          style: x,
                          onClick: (t) => ae(t, e),
                          children: m,
                        }),
                      ],
                    }),
                  ],
                }),
                d(`span`, { className: `dspl-hover`, style: x, children: _ }),
              ],
            }),
            u(`span`, {
              className: `dspl-cap`,
              children: [
                u(`span`, {
                  children: [
                    d(`b`, { style: y, children: e.f1 }),
                    u(`small`, { style: x, children: [e.f2, e.f5 ? ` \xb7 ${e.f5}` : ``] }),
                  ],
                }),
                d(`em`, { style: y, children: e.f3 }),
              ],
            }),
          ],
        },
        e.slug || t
      );
    };
  return u(`section`, {
    ref: T,
    className: ue,
    style: { ...Te(v), ...b, ...e.style },
    "aria-label": Fe(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: H }),
      d(`style`, { dangerouslySetInnerHTML: { __html: ke + Le + We } }),
      u(`div`, {
        className: `ds-wrap dspl-wrap`,
        children: [
          u(`div`, {
            className: `dspl-head`,
            children: [
              u(`p`, {
                className: `dspl-eb`,
                style: { ...x, ...Z(D, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(Ie, {
                text: n,
                on: D,
                D: y,
                size: O ? `clamp(36px,10vw,48px)` : `clamp(40px,4.2vw,64px)`,
                lh: 0.96,
                delay: 60,
              }),
            ],
          }),
          u(`div`, {
            className: `dspl-rail`,
            style: Z(D, 160),
            children: [
              u(`div`, {
                className: `dspl-chips`,
                role: `group`,
                "aria-label": r,
                children: [
                  d(`button`, {
                    type: `button`,
                    className: `dspl-chip${z ? `` : ` is-on`}`,
                    style: x,
                    onClick: () => N(``),
                    children: r,
                  }),
                  j.map((e, t) =>
                    u(
                      `button`,
                      {
                        type: `button`,
                        className: `dspl-chip${z && z.slug === e.slug ? ` is-on` : ``}`,
                        style: x,
                        onClick: () => N(e.slug || ``),
                        children: [
                          e.f1,
                          d(`small`, { children: String(e.f2 || ``).replace(/\D.*$/, ``) }),
                        ],
                      },
                      e.slug || t
                    )
                  ),
                ],
              }),
              u(`div`, {
                className: `dspl-tools`,
                children: [
                  d(`div`, {
                    className: `dspl-seg`,
                    role: `group`,
                    "aria-label": R[0],
                    children: R.map((e, t) =>
                      d(
                        `button`,
                        {
                          type: `button`,
                          className: P === t ? `is-on` : ``,
                          style: x,
                          onClick: () => F(t),
                          children: e,
                        },
                        t
                      )
                    ),
                  }),
                  u(`label`, {
                    className: `dspl-sort`,
                    style: x,
                    children: [
                      d(`span`, { children: c }),
                      d(`select`, {
                        value: I,
                        onChange: (e) => ne(Number(e.target.value)),
                        "aria-label": c,
                        children: re.map((e, t) => d(`option`, { value: t, children: e }, t)),
                      }),
                      d(Ne, { s: 12 }),
                    ],
                  }),
                  u(
                    `button`,
                    {
                      type: `button`,
                      className: `dspl-cart${L.length ? ` is-bump` : ``}`,
                      style: x,
                      onClick: X,
                      "aria-label": `${g}, ${L.length}`,
                      children: [
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
                        }),
                        g,
                        ` · `,
                        d(`b`, { children: L.length }),
                      ],
                    },
                    L.length
                  ),
                ],
              }),
            ],
          }),
          u(`p`, {
            className: `dspl-count`,
            style: { ...x, ...Z(D, 220) },
            children: [B.length, ` `, f, z ? ` \xb7 ${z.f1}` : ``],
          }),
          B.length
            ? d(`div`, { className: `dspl-grid`, children: B.map(me) })
            : d(`p`, { className: `dspl-empty`, style: y, children: p }),
        ],
      }),
    ],
  });
}
var H,
  ve,
  ye,
  U,
  W,
  be,
  xe,
  G,
  Se,
  K,
  Ce,
  q,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  J,
  Y,
  Ae,
  X,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Z,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Q,
  Ue,
  We,
  Ge = e(() => {
    (i(),
      p(),
      m(),
      b(),
      (H = `../../styles/css2-a59a76.css`),
      (ve = (e) => {
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
      (ye = `clamp(1280px, 92vw, 1520px)`),
      (U = [160, 320, 480, 800, 1200, 1600]),
      (W = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return U.find((e) => e >= i) || 1600;
      }),
      (be = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = W(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = W(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: U.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (xe = (e) => {
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
      (G = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (Se = (e) => {
        let t = xe(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (K = (e, t, n, r) => {
        let i = e ? Se(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (Ce = () => {
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
      (we = (e) => ({
        bone: e.bone || q.bone,
        ink: e.ink || q.ink,
        brass: e.brass || q.brass,
        pine: e.pine || q.pine,
        fog: e.fog || q.fog,
        stone: e.stone || q.stone,
        cloud: e.cloud || q.cloud,
        night: e.night || q.night,
      })),
      (Te = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Ee = {
        bone: { type: M.Color, title: `Paper`, defaultValue: q.bone },
        ink: { type: M.Color, title: `Ink`, defaultValue: q.ink },
        brass: { type: M.Color, title: `Accent`, defaultValue: q.brass },
        pine: { type: M.Color, title: `Deep`, defaultValue: q.pine },
        fog: { type: M.Color, title: `Line`, defaultValue: q.fog },
        stone: { type: M.Color, title: `Muted`, defaultValue: q.stone },
        cloud: { type: M.Color, title: `White`, defaultValue: q.cloud },
        night: { type: M.Color, title: `Dark`, defaultValue: q.night },
      }),
      (De = {
        customFonts: {
          type: M.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: M.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: M.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: M.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Oe = {
        bpHint: {
          type: M.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (ke = `
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
      (J = `ds-cart`),
      (Y = () => {
        try {
          let e = JSON.parse(localStorage.getItem(J) || `[]`);
          return Array.isArray(e) ? e : [];
        } catch {
          return [];
        }
      }),
      (Ae = (e) => {
        try {
          localStorage.setItem(J, JSON.stringify(e));
        } catch {}
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart`, { detail: { items: e } }));
        } catch {}
      }),
      (X = () => {
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart-open`));
        } catch {}
      }),
      (je = (e, t = !0) => {
        if (a === void 0 || !e.slug) return;
        let n = Y();
        (n.find((t) => t.slug === e.slug) || n.push(e), Ae(n), t && X());
      }),
      (Me = (e) => ({
        slug: e.slug || ``,
        name: e.f1 || ``,
        price: e.f3 || ``,
        kind: e.f2 || ``,
        cover: String(e.img || ``).split(`?`)[0],
        href: `/products/${e.slug || ``}`,
      })),
      (Ne = ({ s: e = 15 }) =>
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
      M.Boolean,
      M.Number,
      (Pe = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (Fe = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Ie = ({
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
          "aria-label": Fe(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Pe(e).map((e, t) => {
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
      (Z = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Le = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${ye} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Re = {
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
      (ze = `DsProductList@cms1`),
      (Be = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Ve = a === void 0 ? h : r),
      (He = {
        book: [130, 182, 24],
        box: [140, 164, 46],
        tin: [124, 124, 70],
        folder: [156, 118, 16],
        notebook: [128, 174, 18],
        cards: [138, 138, 28],
        kit: [166, 114, 32],
      }),
      (Q = (e) => {
        let t = parseFloat(String(e || ``).replace(/[^\d.]/g, ``));
        return isFinite(t) ? t : 0;
      }),
      (Ue = () =>
        d(`span`, {
          className: `dspl-bc`,
          "aria-hidden": !0,
          children: [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2].map((e, t) =>
            d(`i`, { style: { width: e } }, t)
          ),
        })),
      (We = `
.dspl{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(60px,7vw,100px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dspl::before{content:"";position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ds-ink) 8%,transparent) 1px,transparent 1.3px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 15%,#000 85%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.dspl-wrap{position:relative}
.dspl-head{display:flex;flex-direction:column;align-items:flex-start;gap:16px;margin-bottom:30px}
.dspl-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dspl-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dspl .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dspl .ds-it{color:var(--ds-acc)}
/* rail */
.dspl-rail{display:flex;flex-direction:column;gap:14px;padding:16px 0;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent);border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dspl-chips{display:flex;flex-wrap:wrap;gap:8px}
.dspl-chip{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border:0;border-radius:999px;background:var(--ds-cloud);color:var(--ds-ink);font:inherit;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 16%,transparent);transition:background .3s,color .3s,transform .4s cubic-bezier(.34,1.56,.64,1)}
.dspl-chip small{font-size:9.5px;color:var(--ds-mut)} .dspl-chip:hover{transform:translateY(-2px)} .dspl-chip.is-on{background:var(--ds-ink);color:var(--ds-bone);box-shadow:none} .dspl-chip.is-on small{color:var(--ds-brass)}
.dspl-tools{display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px}
.dspl-seg{display:inline-flex;padding:3px;border-radius:999px;background:color-mix(in srgb,var(--ds-ink) 7%,transparent)} .dspl-seg button{padding:7px 12px;border:0;border-radius:999px;background:transparent;color:var(--ds-mut);font:inherit;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:background .3s,color .3s} .dspl-seg button.is-on{background:var(--ds-cloud);color:var(--ds-ink);box-shadow:0 2px 8px -2px rgba(0,0,0,.2)}
.dspl-sort{position:relative;display:inline-flex;align-items:center;gap:10px;padding:0 12px 0 14px;height:36px;border-radius:999px;background:var(--ds-cloud);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 16%,transparent);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--ds-mut)}
.dspl-sort select{appearance:none;-webkit-appearance:none;border:0;background:transparent;color:var(--ds-ink);font:inherit;font-size:11px;letter-spacing:.04em;padding-right:18px;cursor:pointer} .dspl-sort svg{position:absolute;right:12px;rotate:90deg;color:var(--ds-brass);pointer-events:none}
.dspl-cart{margin-left:auto;border:0;cursor:pointer;font:inherit;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ds-bone);background:var(--ds-night)} .dspl-cart svg{width:14px;height:14px} .dspl-cart b{font-weight:500;color:var(--ds-brass)}
.dspl-cart.is-bump{animation:dspl-bump .5s cubic-bezier(.34,1.56,.64,1)} @keyframes dspl-bump{40%{transform:scale(1.12)}}
.dspl-count{margin:18px 0 26px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)}
.dspl-empty{margin:40px 0;font-size:28px;font-weight:800;letter-spacing:-.03em;color:var(--ds-mut)}
/* grid of objects */
.dspl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px 26px;perspective:1600px}
.dspl-card{position:relative;display:flex;flex-direction:column;gap:14px;text-decoration:none;color:var(--ds-ink);isolation:isolate}
.dspl-stage{position:relative;display:grid;place-items:end center;height:calc(var(--h) + 90px);padding-bottom:16px;border-radius:12px;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-cloud) 60%,transparent),color-mix(in srgb,var(--ds-fog) 50%,transparent));perspective:1200px;transform-style:preserve-3d;overflow:visible}
.dspl-stage::after{content:"";position:absolute;left:8%;right:8%;bottom:14px;height:6px;border-radius:3px;background:color-mix(in srgb,var(--ds-pine) 80%,var(--ds-night));box-shadow:0 10px 24px -8px rgba(0,0,0,.5)}
.dspl-obj{position:relative;z-index:2;width:var(--w);height:var(--h);transform-style:preserve-3d;transform:rotateX(6deg) rotateY(-16deg);transition:transform .6s cubic-bezier(.34,1.56,.64,1);color:var(--fg)}
.dspl-card:hover .dspl-obj,.dspl-card:focus-visible .dspl-obj{transform:rotateX(4deg) rotateY(-22deg) translate3d(0,-14px,50px)}
.dspl-face{position:absolute;left:50%;top:50%;translate:-50% -50%;width:var(--w);height:var(--h);background:var(--col);backface-visibility:hidden}
.dspl-face.f{transform:translateZ(calc(var(--d)/2));overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:12px;border-radius:2px 6px 6px 2px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.dspl-face.f::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,color-mix(in srgb,var(--col) 70%,#000) 100%)}
.dspl-face.l{width:var(--d);transform:rotateY(-90deg) translateZ(calc(var(--w)/2));background:color-mix(in srgb,var(--col) 62%,#000);display:flex;align-items:center;justify-content:center;overflow:hidden} .dspl-face.l b{writing-mode:vertical-rl;transform:rotate(180deg);font-size:9.5px;letter-spacing:.06em;white-space:nowrap;color:var(--fg);opacity:.85;max-height:90%;overflow:hidden}
.dspl-face.t{height:var(--d);transform:rotateX(90deg) translateZ(calc(var(--h)/2));background:color-mix(in srgb,var(--col) 82%,#fff)}
.dspl-cov{position:absolute;inset:0;opacity:.55;mix-blend-mode:luminosity} .dspl-cov img{width:100%;height:100%;object-fit:cover;display:block}
.dspl-print{position:relative;display:flex;flex-direction:column;gap:3px} .dspl-print b{font-size:14px;line-height:1.05;font-weight:800;letter-spacing:-.01em;text-wrap:balance} .dspl-print i{font-style:normal;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.75}
.dspl-badge{position:absolute;top:10px;left:-4px;padding:3px 7px;background:var(--ds-brass);color:var(--ds-ink);font-size:8px;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg;border-radius:2px}
.dspl-bc{position:absolute;right:10px;top:10px;display:flex;gap:1px;height:10px;opacity:.5} .dspl-bc i{display:block;height:100%;background:var(--fg)}
.dspl-shadow{position:absolute;left:-6%;right:-6%;bottom:-2px;height:14px;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.5),transparent 70%);transform:rotateX(90deg) translateZ(-4px);transform-origin:50% 100%;pointer-events:none}
.dspl-card.is-book .dspl-face.f{border-left:3px solid color-mix(in srgb,var(--col) 55%,#000)} .dspl-card.is-notebook .dspl-face.f{border-left:6px double color-mix(in srgb,var(--col) 55%,#000)}
.dspl-card.is-tin .dspl-face.f{border-radius:50% 50% 6px 6px/16% 16% 6px 6px;justify-content:center;border:4px solid color-mix(in srgb,var(--col) 35%,#fff)} .dspl-card.is-tin .dspl-print{align-items:center;text-align:center} .dspl-card.is-tin .dspl-face.t{background:linear-gradient(90deg,#8A8A90,#E8E8EC 50%,#8A8A90)}
.dspl-card.is-folder .dspl-face.f{border-radius:8px 4px 4px 4px} .dspl-card.is-folder .dspl-face.f::after{content:"";position:absolute;left:0;top:0;width:44%;height:14px;background:color-mix(in srgb,var(--col) 82%,#fff);border-radius:0 6px 0 0}
.dspl-card.is-cards .dspl-face.f{box-shadow:4px 4px 0 -1px color-mix(in srgb,var(--col) 60%,#000),8px 8px 0 -2px color-mix(in srgb,var(--col) 40%,#000)}
.dspl-card.is-box .dspl-face.f::after{content:"";position:absolute;left:0;right:0;top:34%;height:1px;background:rgba(0,0,0,.35)}
/* price tag */
.dspl-ptag{position:absolute;right:6%;top:10%;z-index:6;width:168px;padding:12px 14px 12px 22px;background:var(--ds-bone);color:var(--ds-ink);display:flex;flex-direction:column;gap:3px;transform-origin:8px 8px;clip-path:polygon(14px 0,100% 0,100% 100%,14px 100%,0 12px);opacity:0;transform:rotate(-16deg) translateY(10px) scale(.92);transition:opacity .25s,transform .5s cubic-bezier(.34,1.56,.64,1);pointer-events:none;box-shadow:0 14px 30px -10px rgba(0,0,0,.5)}
.dspl-card:hover .dspl-ptag,.dspl-card:focus-visible .dspl-ptag{opacity:1;transform:rotate(0) translateY(0) scale(1);pointer-events:auto;animation:dspl-sw .9s cubic-bezier(.34,1.56,.64,1) 1}
@keyframes dspl-sw{0%{rotate:-14deg}45%{rotate:5deg}100%{rotate:0deg}}
.dspl-thole{position:absolute;left:7px;top:6px;width:6px;height:6px;border-radius:50%;background:var(--ds-night);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 30%,transparent)}
.dspl-ptag b{font-size:13px;line-height:1.1;font-weight:800;letter-spacing:-.01em} .dspl-ptag i{font-style:normal;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-ink) 65%,transparent)}
.dspl-pr{display:flex;align-items:center;gap:8px;margin-top:4px} .dspl-pr em{font-style:normal;font-size:17px;font-weight:800} .dspl-pr s{font-size:10px;color:color-mix(in srgb,var(--ds-ink) 55%,transparent)}
.dspl-add{margin-left:auto;padding:6px 10px;border:0;border-radius:999px;background:var(--ds-brass);color:var(--ds-ink);font-size:10px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .3s} .dspl-add:hover{transform:scale(1.08);background:var(--ds-ink);color:var(--ds-bone)}
.dspl-hover{position:absolute;left:14px;top:12px;padding:5px 10px;border-radius:999px;background:var(--ds-ink);color:var(--ds-bone);font-size:9px;letter-spacing:.12em;text-transform:uppercase;opacity:0;translate:0 -6px;transition:opacity .3s,translate .4s} .dspl-card:hover .dspl-hover{opacity:1;translate:0 0}
.dspl-cap{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding:0 4px} .dspl-cap b{display:block;font-size:17px;font-weight:800;letter-spacing:-.02em;line-height:1.1} .dspl-cap small{display:block;margin-top:4px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dspl-cap em{font-style:normal;font-size:17px;font-weight:800;color:var(--ds-acc);flex:none}
.dspl-card:focus-visible{outline-offset:6px!important}
/* tablet + phone */
.dspl.is-tab .dspl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.dspl.is-ph .dspl-grid{grid-template-columns:1fr;gap:26px} .dspl.is-ph .dspl-tools{gap:10px} .dspl.is-ph .dspl-cart{margin-left:0} .dspl.is-ph .dspl-seg{flex-wrap:wrap} .dspl.is-ph .dspl-chip{padding:8px 12px}
.dspl.is-ph .dspl-obj{transform:rotateX(4deg) rotateY(-14deg)} .dspl.is-ph .dspl-ptag{opacity:1;transform:none;pointer-events:auto;animation:none;right:4%;top:6%;width:150px;padding:10px 12px 10px 20px} .dspl.is-ph .dspl-hover{display:none}
.dspl.is-rm .dspl-obj,.dspl.is-rm .dspl-ptag{transition:none;animation:none}
@media (prefers-reduced-motion:reduce){.dspl-obj{transition:none} .dspl-ptag{animation:none!important}}`),
      E(V, {
        ...Oe,
        eyebrow: { type: M.String, title: `Eyebrow`, defaultValue: `The whole shelf` },
        heading: {
          type: M.String,
          title: `Heading`,
          defaultValue: `Every product,|*one place.*`,
          description: `*word* = accent, | = line break`,
        },
        allLabel: { type: M.String, title: `All chip`, defaultValue: `All aisles` },
        priceLabels: {
          type: M.String,
          title: `Price labels`,
          description: `4 labels, | separated: all, under $30, $30–$99, $100+`,
          defaultValue: `All prices|Under $30|$30 – $99|$100 and up`,
        },
        sortLabel: { type: M.String, title: `Sort label`, defaultValue: `Sort` },
        sortLabels: {
          type: M.String,
          title: `Sort options`,
          description: `4 labels, | separated`,
          defaultValue: `Featured|Price: low to high|Price: high to low|Most sold`,
        },
        countLabel: { type: M.String, title: `Count word`, defaultValue: `products` },
        emptyText: {
          type: M.String,
          title: `Empty text`,
          defaultValue: `Nothing on this shelf yet.`,
        },
        addLabel: { type: M.String, title: `Add label`, defaultValue: `Add` },
        cartLabel: { type: M.String, title: `Cart label`, defaultValue: `Cart` },
        hoverLabel: { type: M.String, title: `Hover label`, defaultValue: `Pick up` },
        linkBase: {
          type: M.String,
          title: `Product link base`,
          defaultValue: `/products/`,
          description: `The product slug is appended`,
        },
        ...Ee,
        ...De,
      }));
  }),
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  $,
  it;
e(() => {
  (p(),
    b(),
    te(),
    m(),
    ne(),
    ie(),
    Ge(),
    R(),
    ae(),
    (Ke = j(z)),
    (qe = j(V)),
    (Je = j(re)),
    (Ye = j(L)),
    (Xe = {
      APYFmaqxQ: `(min-width: 810px) and (max-width: 1199.98px)`,
      G_cGbyyvE: `(max-width: 809.98px)`,
      OMtRvGK6m: `(min-width: 1200px)`,
    }),
    (Ze = []),
    (Qe = `framer-xld31`),
    ($e = {
      APYFmaqxQ: `framer-v-1gssg1x`,
      G_cGbyyvE: `framer-v-3gg3rd`,
      OMtRvGK6m: `framer-v-d6jut8`,
    }),
    (et = (e, t, n) => (e && t ? `position` : n)),
    (tt = { Desktop: `OMtRvGK6m`, Phone: `G_cGbyyvE`, Tablet: `APYFmaqxQ` }),
    (nt = ({ value: e }) =>
      x()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (rt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: tt[r.variant] ?? r.variant ?? `OMtRvGK6m`,
    })),
    ($ = T(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = O();
        N();
        let { style: p, className: m, layoutId: h, variant: te, ...v } = rt(e);
        P(l(() => B({}, c), [c]));
        let [b, x] = C(te, Xe, !1),
          T = y(Qe),
          E = t(D)?.isLayoutTemplate,
          j = !!t(g)?.transition?.layout,
          M = et(E, j);
        return (
          S({}),
          d(D.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: tt,
              primaryVariantId: `OMtRvGK6m`,
              variantClassNames: $e,
            },
            children: u(ee, {
              id: h ?? o,
              children: [
                d(nt, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(_.div, {
                  ...v,
                  className: y(T, `framer-d6jut8`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(_.div, {
                      className: `framer-1hmj0fr`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: M,
                      children: d(A, {
                        children: d(w, {
                          className: `framer-w23ick-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `nne_43ECb`,
                          scopeId: `Rj9qoo16e`,
                          children: d(k, {
                            breakpoint: b,
                            overrides: {
                              APYFmaqxQ: { bpHint: `tablet` },
                              G_cGbyyvE: { bpHint: `phone` },
                            },
                            children: d(z, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, Products:/products`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `The shelf`,
                              facts: `31|products;6|aisles;4.9|average rating`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `nne_43ECb`,
                              index: `01`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Templates, ebooks, presets, courses, fonts and icons. Filter by aisle or price, open one, and the file is yours in a minute.`,
                              layoutId: `nne_43ECb`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsPageHero`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              photoAlt: ``,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              shelfLabel: `On the shelf`,
                              showPhoto: !1,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              title: `Every product,|*one shelf.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1ivl5pl`,
                      "data-framer-name": `S1 DsProductList`,
                      layout: M,
                      children: d(A, {
                        children: d(w, {
                          className: `framer-1245e6z-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsProductList`,
                          isAuthoredByUser: !0,
                          name: `DsProductList`,
                          nodeId: `qz5g6ak2T`,
                          scopeId: `Rj9qoo16e`,
                          children: d(k, {
                            breakpoint: b,
                            overrides: {
                              APYFmaqxQ: { bpHint: `tablet` },
                              G_cGbyyvE: { bpHint: `phone` },
                            },
                            children: d(V, {
                              addLabel: `Add`,
                              allLabel: `All aisles`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cartLabel: `Cart`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              countLabel: `products`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              emptyText: `Nothing on this shelf yet.`,
                              eyebrow: `The whole shelf`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Every product,|*one place.*`,
                              height: `100%`,
                              hoverLabel: `Pick up`,
                              id: `qz5g6ak2T`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `qz5g6ak2T`,
                              linkBase: `/products/`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsProductList`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              priceLabels: `All prices|Under $30|$30 – $99|$100 and up`,
                              sortLabel: `Sort`,
                              sortLabels: `Featured|Price: low to high|Price: high to low|Most sold`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-zlyvm3`,
                      "data-framer-name": `S2 DsReviews`,
                      layout: M,
                      children: d(A, {
                        children: d(w, {
                          className: `framer-15o1pnf-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `pSCB8ZbEg`,
                          scopeId: `Rj9qoo16e`,
                          children: d(k, {
                            breakpoint: b,
                            overrides: {
                              APYFmaqxQ: { bpHint: `tablet` },
                              G_cGbyyvE: { bpHint: `phone` },
                            },
                            children: d(re, {
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
                              id: `pSCB8ZbEg`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `pSCB8ZbEg`,
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
                      className: `framer-1nlefbv`,
                      "data-framer-name": `S3 DsFaq`,
                      layout: M,
                      children: d(A, {
                        children: d(w, {
                          className: `framer-1n53et2-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFaq`,
                          isAuthoredByUser: !0,
                          name: `DsFaq`,
                          nodeId: `M3xR3mUd9`,
                          scopeId: `Rj9qoo16e`,
                          children: d(k, {
                            breakpoint: b,
                            overrides: {
                              APYFmaqxQ: { bpHint: `tablet` },
                              G_cGbyyvE: { bpHint: `phone` },
                            },
                            children: d(L, {
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
                              id: `M3xR3mUd9`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `M3xR3mUd9`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFaq`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pages: `products`,
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
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-xld31.framer-1yeot3o, .framer-xld31 .framer-1yeot3o { display: block; }`,
        `.framer-xld31.framer-d6jut8 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-xld31 .framer-1hmj0fr, .framer-xld31 .framer-1ivl5pl, .framer-xld31 .framer-zlyvm3, .framer-xld31 .framer-1nlefbv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-xld31 .framer-w23ick-container, .framer-xld31 .framer-1245e6z-container, .framer-xld31 .framer-15o1pnf-container, .framer-xld31 .framer-1n53et2-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-xld31.framer-d6jut8 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-xld31.framer-d6jut8 { width: 390px; }}`,
      ],
      `framer-xld31`
    )),
    ($.displayName = `Products`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    I(
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
        ...Ke,
        ...qe,
        ...Je,
        ...Ye,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (it = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerRj9qoo16e`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"APYFmaqxQ":{"layout":["fixed","auto"]},"G_cGbyyvE":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `1080`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { it as __FramerMetadata__, $ as default, Ze as queryParamNames };
//# sourceMappingURL=iS-Rb38qNOKywWgfhIZ0bZxKuZ4Q1LPti-AfsMFbuU4.ZmJzifSO.mjs.map
