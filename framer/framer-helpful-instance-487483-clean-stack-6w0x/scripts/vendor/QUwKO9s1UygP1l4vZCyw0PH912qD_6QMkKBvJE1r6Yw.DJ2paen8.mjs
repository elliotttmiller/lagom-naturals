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
  p as ee,
  s as f,
  w as p,
  y as m,
} from "./react.iNMCLRE-.mjs";
import { a as te, k as h, r as ne, t as g } from "./motion.dK94hszq.mjs";
import {
  $ as _,
  A as re,
  B as ie,
  C as v,
  H as y,
  J as ae,
  P as b,
  Q as x,
  X as oe,
  Z as se,
  a as S,
  at as ce,
  b as le,
  c as C,
  et as ue,
  f as de,
  g as w,
  i as T,
  k as E,
  nt as D,
  o as O,
  q as k,
  tt as fe,
  v as A,
  y as j,
} from "./framer.BNAppio8.mjs";
import { i as M, t as pe } from "./vyRvgQNHP.ELwhLvWF.mjs";
import { n as me, t as N } from "./DsReviews.Do5b3KPj.mjs";
import P, { t as F } from "./y76sAtP-3qFZclK_bSlu-GF1gvw8z0DJ9NGEvP0FtpI.Cxxe238E.mjs";
function he() {
  m(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Ee), document.head.appendChild(e));
  }, []);
}
function ge() {
  let e = _(),
    t = null;
  try {
    t = A.current();
  } catch {}
  return e || (t !== null && t !== A.preview);
}
function _e() {
  let e = _(),
    [t, n] = o(!1);
  return (
    m(() => {
      !e && A.current() !== A.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ve(e, t) {
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
function ye(e, t, n) {
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
function be(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: G(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? U(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: G(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? U(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: G(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? U(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function xe(e, t) {
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
function Se(e) {
  let [t, n] = o([]);
  return (
    m(() => {
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
function I(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Ge(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Ue] = 1));
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
function Te(e, t, n) {
  let r = I(e, t),
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
      kind: r = ``,
      price: i = ``,
      was: l = ``,
      format: ee = ``,
      short: f = ``,
      includes: p = ``,
      checkout: te = ``,
      badge: h = ``,
      sold: ne = ``,
      rating: g = ``,
      colour: _ = ``,
      shape: re = ``,
      crumbHome: ie = `Home`,
      crumbList: v = `Products`,
      listLink: y = `/products`,
      buyLabel: ae = `Buy now`,
      cartLabel: b = `Add to cart`,
      addedLabel: x = `In the cart`,
      instantLine: oe = `Instant download · lifetime updates`,
      insideLabel: se = `What's inside`,
      licenceLabel: S = `Licence`,
      licenceRows:
        ce = `Personal|Your own projects, unlimited; Commercial|Client work, no credit needed; Team|Up to 5 seats on one licence`,
      worksLabel: le = `Works with`,
      guaranteeLine: C = `Broken or not as described? Write to us and we fix it or refund it.`,
      moreLabel: ue = `More from this aisle`,
      bpHint: de = `auto`,
    } = e,
    w = Ae(e),
    { D: T, B: E, M: D } = be(e);
  he();
  let O = _e(),
    k = ke(),
    fe = ge(),
    A = s(null),
    j = s(null),
    { w: M } = ve(A, de);
  xe(A, O);
  let pe = Ce(O),
    [me, N] = o(!1);
  m(() => {
    if (!O || !pe) return;
    let e = a.setTimeout(() => N(!0), 100);
    return () => a.clearTimeout(e);
  }, [O, pe]);
  let P = me || fe || k,
    F = M < 810,
    we = M >= 810 && M < 1100;
  m(() => {
    if (!O || !A.current) return;
    let e = A.current,
      t = () => {
        let t = e.querySelector(`.dspr-btns`);
        if (!t) return;
        let n = t.getBoundingClientRect(),
          r = e.getBoundingClientRect();
        e.style.setProperty(`--bandh`, `${Math.max(360, Math.round(n.bottom - r.top + 44))}px`);
      };
    t();
    let n = a.setTimeout(t, 600),
      r = new ResizeObserver(t);
    return (
      r.observe(e),
      () => {
        (a.clearTimeout(n), r.disconnect());
      }
    );
  }, [O]);
  let { row: I, rows: L } = Te(`products`, He.products, t),
    R = {
      n: Z(n, I.f1 || ``),
      k: Z(r, I.f2 || ``),
      p: Z(i, I.f3 || ``),
      w: Z(l, I.f4 || ``),
      f: Z(ee, I.f5 || ``),
      s: Z(f, I.f6 || ``),
      inc: Ke(Z(p, I.f7 || ``)),
      co: Z(te, I.f8 || ``) || `#`,
      b: Z(h, I.f9 || ``),
      so: Z(ne, I.f10 || ``),
      ra: Z(g, I.f11 || ``),
      col: Z(_, I.f12 || `#5B4BFF`),
      sh: Z(re, I.f13 || `book`).toLowerCase(),
      img: De(e.cover, We(I)),
    },
    [z, B, H] = Q[R.sh] || Q.book,
    U = String(R.f).split(`·`)[0].trim(),
    W = Ke(ce)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { k: (t || ``).trim(), v: (n || ``).trim() };
      })
      .filter((e) => e.k),
    G = L.filter(
      (e) => e.slug !== I.slug && String(e.f2 || ``).toLowerCase() === String(R.k).toLowerCase()
    ),
    K = (G.length ? G : L.filter((e) => e.slug !== I.slug)).slice(0, 3),
    q = Se(O).some((e) => e.slug === I.slug);
  m(() => {
    if (!O || k || F || !A.current || !j.current) return;
    let e = A.current,
      t = j.current,
      n = 0,
      r = 0,
      i = 0,
      o = 0,
      s = (t) => {
        let i = e.getBoundingClientRect();
        ((n = (t.clientX - i.left) / i.width - 0.5),
          (r = (t.clientY - i.top) / Math.min(i.height, a.innerHeight) - 0.5));
      },
      c = () => {
        ((n = 0), (r = 0));
      };
    (e.addEventListener(`pointermove`, s), e.addEventListener(`pointerleave`, c));
    let l = ye(() => {
      ((i += (n - i) * 0.08),
        (o += (r - o) * 0.08),
        (t.style.transform = `rotateX(${(8 - o * 14).toFixed(2)}deg) rotateY(${(-24 + i * 28).toFixed(2)}deg)`));
    });
    return () => {
      (l(), e.removeEventListener(`pointermove`, s), e.removeEventListener(`pointerleave`, c));
    };
  }, [O, k, F]);
  let J = `ds ds-sec dspr${P ? ` is-in` : ``}${F ? ` is-ph` : we ? ` is-tab` : ``}${fe ? ` is-still` : ``}${k ? ` is-rm` : ``}`,
    Me = d(`span`, {
      className: `dspr-bc`,
      "aria-hidden": !0,
      children: [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2].map((e, t) =>
        d(`i`, { style: { width: e } }, t)
      ),
    });
  return u(`section`, {
    ref: A,
    className: J,
    style: {
      ...je(w),
      ...E,
      ...e.style,
      "--col": R.col,
      "--fg": Oe(R.col),
      "--w": `${z}px`,
      "--h": `${B}px`,
      "--d": `${H}px`,
    },
    "aria-label": R.n,
    children: [
      d(`link`, { rel: `stylesheet`, href: Ee }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Pe + Ve + qe } }),
      d(`div`, { className: `dspr-band`, "aria-hidden": !0 }),
      u(`div`, {
        className: `ds-wrap dspr-wrap`,
        children: [
          d(`div`, {
            className: `dspr-left`,
            children: u(`div`, {
              className: `dspr-scene`,
              style: X(P, 200, 40),
              "aria-hidden": !0,
              children: [
                u(`div`, {
                  className: `dspr-obj is-${R.sh}`,
                  ref: j,
                  children: [
                    u(`span`, {
                      className: `dspr-face f`,
                      children: [
                        d(`span`, {
                          className: `dspr-cov`,
                          children:
                            R.img &&
                            d(`img`, {
                              ...V(R.img, `(max-width: 809px) 80vw, 320px`),
                              alt: ``,
                              loading: `eager`,
                              decoding: `async`,
                            }),
                        }),
                        u(`span`, {
                          className: `dspr-print`,
                          children: [
                            d(`b`, { style: T, children: R.n }),
                            d(`i`, { style: D, children: R.k }),
                          ],
                        }),
                        Me,
                      ],
                    }),
                    d(`span`, {
                      className: `dspr-face l`,
                      children: d(`b`, { style: T, children: R.n }),
                    }),
                    d(`span`, { className: `dspr-face t` }),
                    d(`span`, { className: `dspr-face r` }),
                    R.b && d(`span`, { className: `dspr-sticker`, style: T, children: R.b }),
                  ],
                }),
                d(`span`, { className: `dspr-shadow` }),
              ],
            }),
          }),
          u(`div`, {
            className: `dspr-right`,
            children: [
              u(`nav`, {
                className: `dspr-crumbs`,
                "aria-label": `Breadcrumb`,
                style: { ...D, ...X(P, 0) },
                children: [
                  d(`a`, { href: `/`, children: ie }),
                  d(`i`, {}),
                  d(`a`, { href: y, children: v }),
                  d(`i`, {}),
                  d(`span`, { children: R.n }),
                ],
              }),
              d(`h1`, { className: `dspr-h1`, style: { ...T, ...X(P, 80) }, children: R.n }),
              u(`p`, {
                className: `dspr-kind`,
                style: { ...D, ...X(P, 140) },
                children: [
                  R.k,
                  R.f ? u(c, { children: [d(`i`, { "aria-hidden": !0 }), ` `, R.f] }) : null,
                ],
              }),
              R.s && d(`p`, { className: `dspr-short`, style: X(P, 180), children: R.s }),
              u(`div`, {
                className: `dspr-price`,
                style: X(P, 240),
                children: [
                  u(`span`, {
                    className: `dspr-pr`,
                    children: [
                      d(`em`, { style: T, children: R.p }),
                      R.w && d(`s`, { style: D, children: R.w }),
                    ],
                  }),
                  u(`span`, {
                    className: `dspr-meta`,
                    style: D,
                    children: [
                      d(`span`, { children: oe }),
                      (R.so || R.ra) &&
                        u(`span`, {
                          children: [
                            R.so,
                            R.so && R.ra ? ` · ` : ``,
                            R.ra && u(c, { children: [`★ `, R.ra] }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              u(`div`, {
                className: `dspr-btns`,
                style: X(P, 300),
                children: [
                  d(Ne, { href: R.co, label: ae, kind: `solid`, className: `dspr-buy` }),
                  u(`button`, {
                    type: `button`,
                    className: `dspr-cart${q ? ` is-on` : ``}`,
                    style: D,
                    onClick: () => (q ? Le() : Re(ze({ ...I, f1: R.n || I.f1, f3: R.p || I.f3 }))),
                    "aria-live": `polite`,
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
                      q ? x : b,
                    ],
                  }),
                ],
              }),
              u(`div`, {
                className: `dspr-body`,
                children: [
                  R.inc.length > 0 &&
                    u(`div`, {
                      className: `dspr-block`,
                      style: X(P, 360),
                      children: [
                        d(`span`, { className: `dspr-bl`, style: D, children: se }),
                        d(`ul`, {
                          className: `dspr-inc`,
                          children: R.inc.map((e, t) =>
                            u(
                              `li`,
                              {
                                style: { "--i": t },
                                children: [
                                  d(`i`, { "aria-hidden": !0 }),
                                  d(`span`, { children: e }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  u(`div`, {
                    className: `dspr-block`,
                    style: X(P, 420),
                    children: [
                      d(`span`, { className: `dspr-bl`, style: D, children: S }),
                      d(`ul`, {
                        className: `dspr-lic`,
                        children: W.map((e, t) =>
                          u(
                            `li`,
                            {
                              children: [
                                d(`b`, { style: D, children: e.k }),
                                d(`i`, { "aria-hidden": !0 }),
                                d(`span`, { children: e.v }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  u(`div`, {
                    className: `dspr-block dspr-row`,
                    style: X(P, 460),
                    children: [
                      U &&
                        u(`span`, {
                          className: `dspr-works`,
                          children: [
                            d(`span`, { style: D, children: le }),
                            d(`b`, { style: T, children: U }),
                          ],
                        }),
                      u(`p`, {
                        className: `dspr-guar`,
                        children: [d(`i`, { "aria-hidden": !0 }), C],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      K.length > 0 &&
        u(`div`, {
          className: `ds-wrap dspr-more`,
          children: [
            u(`div`, {
              className: `dspr-mh`,
              children: [
                d(`span`, { style: D, children: ue }),
                u(`a`, { href: y, style: D, children: [v, d(Be, { s: 13 })] }),
              ],
            }),
            d(`div`, {
              className: `dspr-grid`,
              children: K.map((e, t) =>
                u(
                  `a`,
                  {
                    className: `dspr-item`,
                    href: `${y.replace(/\/$/, ``)}/${e.slug || ``}`,
                    style: { "--pc": e.f12 || `#5B4BFF` },
                    children: [
                      u(`span`, {
                        className: `dspr-ic`,
                        children: [
                          d(`img`, {
                            ...V(We(e), `(max-width: 809px) 100vw, 33vw`),
                            alt: ``,
                            loading: `lazy`,
                            decoding: `async`,
                          }),
                          e.f9 && d(`span`, { className: `dspr-ib`, style: D, children: e.f9 }),
                        ],
                      }),
                      u(`span`, {
                        className: `dspr-it`,
                        children: [
                          u(`span`, {
                            children: [
                              d(`b`, { style: T, children: e.f1 }),
                              d(`small`, { style: D, children: e.f2 }),
                            ],
                          }),
                          d(`em`, { style: T, children: e.f3 }),
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
var Ee,
  De,
  Oe,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  ke,
  K,
  Ae,
  je,
  q,
  J,
  Me,
  Ne,
  Pe,
  Fe,
  Y,
  Ie,
  Le,
  Re,
  ze,
  Be,
  X,
  Ve,
  He,
  Ue,
  Z,
  We,
  Ge,
  Ke,
  Q,
  qe,
  Je = e(() => {
    (i(),
      f(),
      p(),
      b(),
      (Ee = `../../styles/css2-a59a76.css`),
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
      (R = `clamp(1280px, 92vw, 1520px)`),
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
      (H = (e) => {
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
      (U = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (W = (e) => {
        let t = H(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (G = (e, t, n, r) => {
        let i = e ? W(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (ke = () => {
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
      (Ae = (e) => ({
        bone: e.bone || K.bone,
        ink: e.ink || K.ink,
        brass: e.brass || K.brass,
        pine: e.pine || K.pine,
        fog: e.fog || K.fog,
        stone: e.stone || K.stone,
        cloud: e.cloud || K.cloud,
        night: e.night || K.night,
      })),
      (je = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (q = {
        bone: { type: O.Color, title: `Paper`, defaultValue: K.bone },
        ink: { type: O.Color, title: `Ink`, defaultValue: K.ink },
        brass: { type: O.Color, title: `Accent`, defaultValue: K.brass },
        pine: { type: O.Color, title: `Deep`, defaultValue: K.pine },
        fog: { type: O.Color, title: `Line`, defaultValue: K.fog },
        stone: { type: O.Color, title: `Muted`, defaultValue: K.stone },
        cloud: { type: O.Color, title: `White`, defaultValue: K.cloud },
        night: { type: O.Color, title: `Dark`, defaultValue: K.night },
      }),
      (J = {
        customFonts: {
          type: O.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: O.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: O.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: O.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Me = {
        bpHint: {
          type: O.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Ne = ({
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
      (Pe = `
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
      (Fe = `ds-cart`),
      (Y = () => {
        try {
          let e = JSON.parse(localStorage.getItem(Fe) || `[]`);
          return Array.isArray(e) ? e : [];
        } catch {
          return [];
        }
      }),
      (Ie = (e) => {
        try {
          localStorage.setItem(Fe, JSON.stringify(e));
        } catch {}
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart`, { detail: { items: e } }));
        } catch {}
      }),
      (Le = () => {
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart-open`));
        } catch {}
      }),
      (Re = (e, t = !0) => {
        if (a === void 0 || !e.slug) return;
        let n = Y();
        (n.find((t) => t.slug === e.slug) || n.push(e), Ie(n), t && Le());
      }),
      (ze = (e) => ({
        slug: e.slug || ``,
        name: e.f1 || ``,
        price: e.f3 || ``,
        kind: e.f2 || ``,
        cover: String(e.img || ``).split(`?`)[0],
        href: `/products/${e.slug || ``}`,
      })),
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
      O.Boolean,
      O.Number,
      (X = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Ve = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${R} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (He = {
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
      (Ue = `DsProduct@cms1`),
      (Z = (e, t) => (e != null && String(e).trim() ? String(e).trim() : t)),
      (We = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Ge = a === void 0 ? m : r),
      (Ke = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Q = {
        book: [250, 340, 34],
        box: [270, 300, 70],
        tin: [240, 240, 110],
        folder: [300, 220, 22],
        notebook: [246, 330, 26],
        cards: [260, 260, 44],
        kit: [310, 210, 46],
      }),
      (qe = `
.dspr{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:0 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dspr-band{position:absolute;left:0;right:0;top:0;height:var(--bandh,min(620px,72vh));background:var(--ds-night);z-index:0}
.dspr-band::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 60% at 30% 40%,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),transparent 70%),repeating-linear-gradient(90deg,transparent 0 118px,color-mix(in srgb,var(--ds-cloud) 3%,transparent) 118px 119px)}
.dspr-band::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:80px;background:linear-gradient(180deg,transparent,var(--ds-bone))}
.dspr-wrap{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(32px,5vw,90px);align-items:start;padding-top:clamp(40px,5vw,72px)}
/* the object */
.dspr-left{position:sticky;top:96px}
.dspr-scene{position:relative;min-height:min(560px,70vh);display:grid;place-items:center;perspective:1500px}
.dspr-obj{position:relative;width:var(--w);height:var(--h);transform-style:preserve-3d;transform:rotateX(8deg) rotateY(-24deg);color:var(--fg)}
.dspr-face{position:absolute;left:50%;top:50%;translate:-50% -50%;width:var(--w);height:var(--h);background:var(--col);backface-visibility:hidden}
.dspr-face.f{transform:translateZ(calc(var(--d)/2));overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding:22px;border-radius:3px 9px 9px 3px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 60px 100px -40px rgba(0,0,0,.8)}
.dspr-face.f::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,color-mix(in srgb,var(--col) 70%,#000) 100%)}
.dspr-face.l{width:var(--d);transform:rotateY(-90deg) translateZ(calc(var(--w)/2));background:color-mix(in srgb,var(--col) 62%,#000);display:flex;align-items:center;justify-content:center;overflow:hidden} .dspr-face.l b{writing-mode:vertical-rl;transform:rotate(180deg);font-size:13px;letter-spacing:.06em;white-space:nowrap;color:var(--fg);opacity:.85;max-height:90%;overflow:hidden}
.dspr-face.r{width:var(--d);transform:rotateY(90deg) translateZ(calc(var(--w)/2));background:color-mix(in srgb,var(--col) 78%,#000)}
.dspr-face.t{height:var(--d);transform:rotateX(90deg) translateZ(calc(var(--h)/2));background:color-mix(in srgb,var(--col) 82%,#fff)}
.dspr-cov{position:absolute;inset:0;opacity:.55;mix-blend-mode:luminosity} .dspr-cov img{width:100%;height:100%;object-fit:cover;display:block}
.dspr-print{position:relative;display:flex;flex-direction:column;gap:6px} .dspr-print b{font-size:clamp(22px,2vw,30px);line-height:1.02;font-weight:800;letter-spacing:-.02em;text-wrap:balance} .dspr-print i{font-style:normal;font-size:10px;letter-spacing:.14em;text-transform:uppercase;opacity:.75}
.dspr-bc{position:absolute;right:18px;top:18px;display:flex;gap:1px;height:14px;opacity:.5} .dspr-bc i{display:block;height:100%;background:var(--fg)}
.dspr-obj.is-book .dspr-face.f{border-left:4px solid color-mix(in srgb,var(--col) 55%,#000)} .dspr-obj.is-notebook .dspr-face.f{border-left:8px double color-mix(in srgb,var(--col) 55%,#000)}
.dspr-obj.is-tin .dspr-face.f{border-radius:50% 50% 8px 8px/16% 16% 8px 8px;justify-content:center;border:6px solid color-mix(in srgb,var(--col) 35%,#fff)} .dspr-obj.is-tin .dspr-print{align-items:center;text-align:center} .dspr-obj.is-tin .dspr-face.t{background:linear-gradient(90deg,#8A8A90,#E8E8EC 50%,#8A8A90)}
.dspr-obj.is-folder .dspr-face.f{border-radius:12px 6px 6px 6px} .dspr-obj.is-folder .dspr-face.f::after{content:"";position:absolute;left:0;top:0;width:44%;height:22px;background:color-mix(in srgb,var(--col) 82%,#fff);border-radius:0 8px 0 0}
.dspr-obj.is-cards .dspr-face.f{box-shadow:6px 6px 0 -1px color-mix(in srgb,var(--col) 60%,#000),12px 12px 0 -2px color-mix(in srgb,var(--col) 40%,#000)}
.dspr-obj.is-box .dspr-face.f::after{content:"";position:absolute;left:0;right:0;top:34%;height:1px;background:rgba(0,0,0,.35)}
.dspr-sticker{position:absolute;right:-26px;top:-20px;z-index:3;display:grid;place-items:center;width:84px;height:84px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;text-align:center;line-height:1.1;padding:8px;rotate:12deg;transform:translateZ(60px);box-shadow:0 14px 30px -10px rgba(0,0,0,.5);clip-path:polygon(50% 0,61% 9%,75% 5%,82% 17%,96% 20%,95% 34%,100% 50%,95% 66%,96% 80%,82% 83%,75% 95%,61% 91%,50% 100%,39% 91%,25% 95%,18% 83%,4% 80%,5% 66%,0 50%,5% 34%,4% 20%,18% 17%,25% 5%,39% 9%)}
.dspr-shadow{position:absolute;left:50%;bottom:6%;width:calc(var(--w) + 40px);height:40px;translate:-50% 0;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.5),transparent 70%);filter:blur(6px)}
/* the details */
.dspr-right{display:flex;flex-direction:column;align-items:flex-start;gap:16px;color:var(--ds-bone)}
.dspr-crumbs{display:flex;align-items:center;gap:10px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dspr-crumbs a{text-decoration:none;color:inherit;transition:color .3s} .dspr-crumbs a:hover{color:var(--ds-brass)} .dspr-crumbs i{width:4px;height:4px;border-radius:50%;background:var(--ds-brass)} .dspr-crumbs span{color:var(--ds-bone)}
.dspr-h1{margin:0;font-size:clamp(38px,4.6vw,72px);line-height:.96;letter-spacing:-.035em;font-weight:800;text-wrap:balance}
.dspr-kind{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dspr-kind i{width:4px;height:4px;border-radius:50%;background:currentColor}
.dspr-short{margin:0;max-width:540px;font-size:17px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dspr-price{display:flex;flex-direction:column;gap:6px;margin-top:6px} .dspr-pr{display:inline-flex;align-items:baseline;gap:12px} .dspr-pr em{font-style:normal;font-size:clamp(34px,3.2vw,46px);font-weight:800;letter-spacing:-.03em} .dspr-pr s{font-size:14px;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)}
.dspr-meta{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)}
.dspr-btns{display:flex;flex-wrap:wrap;align-items:center;gap:14px 12px;margin-top:4px}
.dspr .ds-btn.ds-solid{--fill:var(--ds-cloud);--fg2:var(--ds-ink);--holefill:var(--ds-night)}
.dspr-cart{display:inline-flex;align-items:center;gap:8px;height:50px;padding:0 20px;border:0;border-radius:4px;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);color:var(--ds-bone);font:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-cloud) 30%,transparent);transition:background .3s,transform .3s cubic-bezier(.34,1.56,.64,1)} .dspr-cart svg{width:15px;height:15px} .dspr-cart:hover{background:color-mix(in srgb,var(--ds-cloud) 14%,transparent);transform:translateY(-2px)} .dspr-cart.is-on{background:var(--ds-brass);color:var(--ds-ink);box-shadow:none}
/* body on paper */
.dspr-body{display:flex;flex-direction:column;gap:26px;width:100%;margin-top:clamp(40px,5vw,72px);color:var(--ds-ink)}
.dspr-bl{display:block;margin-bottom:12px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)}
.dspr-inc{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.dspr-inc li{display:flex;align-items:center;gap:10px;padding:9px 14px 9px 22px;background:var(--ds-cloud);color:var(--ds-ink);font-size:13px;clip-path:polygon(12px 0,100% 0,100% 100%,12px 100%,0 50%);box-shadow:0 10px 24px -14px rgba(0,0,0,.4);opacity:0;translate:0 10px;transition:opacity .6s ease calc(var(--i)*60ms + 400ms),translate .7s cubic-bezier(.2,.8,.2,1) calc(var(--i)*60ms + 400ms)} .dspr.is-in .dspr-inc li{opacity:1;translate:0 0}
.dspr-inc li i{width:7px;height:7px;border-radius:50%;background:var(--ds-brass);flex:none}
.dspr-lic{list-style:none;margin:0;padding:0;max-width:560px;display:flex;flex-direction:column}
.dspr-lic li{display:flex;align-items:baseline;gap:12px;padding:11px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent);font-size:14.5px} .dspr-lic li:first-child{border-top:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dspr-lic b{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:500;color:var(--ds-mut);flex:none} .dspr-lic i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 30%,transparent);translate:0 -4px} .dspr-lic span{text-align:right}
.dspr-row{display:flex;flex-wrap:wrap;align-items:center;gap:18px 34px} .dspr-works{display:inline-flex;align-items:baseline;gap:10px} .dspr-works span{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)} .dspr-works b{font-size:18px;font-weight:800;letter-spacing:-.01em}
.dspr-guar{display:flex;align-items:flex-start;gap:10px;margin:0;max-width:460px;font-size:13.5px;line-height:1.5;color:var(--ds-mut)} .dspr-guar i{width:8px;height:8px;margin-top:6px;border-radius:50%;background:var(--ds-brass);flex:none}
/* more from the aisle */
.dspr-more{position:relative;z-index:1;margin-top:clamp(60px,7vw,110px)}
.dspr-mh{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 16%,transparent);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)}
.dspr-mh a{display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:var(--ds-ink)} .dspr-mh a svg{color:var(--ds-brass);transition:translate .3s} .dspr-mh a:hover svg{translate:4px 0}
.dspr-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.dspr-item{display:flex;flex-direction:column;gap:14px;text-decoration:none;color:inherit}
.dspr-ic{position:relative;aspect-ratio:4/3;border-radius:6px;overflow:hidden;background:var(--pc);box-shadow:0 30px 60px -30px rgba(0,0,0,.5);transition:transform .6s cubic-bezier(.34,1.56,.64,1)} .dspr-item:hover .dspr-ic{transform:translateY(-8px) rotate(-1deg)}
.dspr-ic img{width:100%;height:100%;object-fit:cover;display:block;opacity:.65;mix-blend-mode:luminosity;transition:scale 1.2s cubic-bezier(.16,.84,.24,1)} .dspr-item:hover .dspr-ic img{scale:1.06}
.dspr-ic::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,color-mix(in srgb,var(--pc) 55%,#000))}
.dspr-ib{position:absolute;left:14px;top:14px;padding:4px 8px;background:var(--ds-brass);color:var(--ds-ink);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;rotate:-5deg}
.dspr-it{display:flex;justify-content:space-between;align-items:flex-start;gap:14px} .dspr-it b{display:block;font-size:18px;font-weight:800;letter-spacing:-.02em;line-height:1.1} .dspr-it small{display:block;margin-top:4px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dspr-it em{font-style:normal;font-size:18px;font-weight:800;color:var(--ds-acc)}
/* tablet + phone */
.dspr.is-tab .dspr-wrap{grid-template-columns:1fr;gap:30px} .dspr.is-tab .dspr-left{position:relative;top:auto} .dspr.is-tab .dspr-band{height:var(--bandh,min(900px,100vh))} .dspr.is-tab .dspr-scene{min-height:460px} .dspr.is-tab .dspr-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.dspr.is-ph .dspr-wrap{grid-template-columns:1fr;gap:20px;padding-top:24px} .dspr.is-ph .dspr-left{position:relative;top:auto} .dspr.is-ph .dspr-band{height:var(--bandh,min(940px,120vh))} .dspr.is-ph .dspr-scene{min-height:360px;--w:190px;--h:260px;--d:26px} .dspr.is-ph .dspr-obj{transform:rotateX(6deg) rotateY(-18deg)} .dspr.is-ph .dspr-print b{font-size:20px} .dspr.is-ph .dspr-sticker{width:64px;height:64px;font-size:9px;right:-14px}
.dspr.is-ph .dspr-h1{font-size:clamp(34px,10vw,44px)} .dspr.is-ph .dspr-grid{grid-template-columns:1fr;gap:26px} .dspr.is-ph .dspr-lic span{text-align:left}
@media (prefers-reduced-motion:reduce){.dspr-inc li{transition:none}}`),
      le(L, {
        ...Me,
        slug: {
          type: O.String,
          title: `Slug`,
          description: `Bind to the Products slug on the CMS page`,
          defaultValue: ``,
        },
        title: { type: O.String, title: `Name override`, defaultValue: `` },
        kind: { type: O.String, title: `Kind override`, defaultValue: `` },
        price: { type: O.String, title: `Price override`, defaultValue: `` },
        was: { type: O.String, title: `Was override`, defaultValue: `` },
        format: { type: O.String, title: `Format override`, defaultValue: `` },
        short: { type: O.String, title: `Short override`, displayTextArea: !0, defaultValue: `` },
        includes: {
          type: O.String,
          title: `Includes override`,
          description: `; separated`,
          displayTextArea: !0,
          defaultValue: ``,
        },
        checkout: {
          type: O.String,
          title: `Checkout override`,
          description: `Lemon Squeezy, Gumroad or Stripe link`,
          defaultValue: ``,
        },
        badge: { type: O.String, title: `Badge override`, defaultValue: `` },
        sold: { type: O.String, title: `Sold override`, defaultValue: `` },
        rating: { type: O.String, title: `Rating override`, defaultValue: `` },
        colour: {
          type: O.String,
          title: `Colour override`,
          description: `Hex, e.g. #5B4BFF`,
          defaultValue: ``,
        },
        shape: {
          type: O.String,
          title: `Shape override`,
          description: `book, box, tin, folder, notebook, cards or kit`,
          defaultValue: ``,
        },
        cover: { type: O.ResponsiveImage, title: `Cover override` },
        crumbHome: { type: O.String, title: `Crumb home`, defaultValue: `Home` },
        crumbList: { type: O.String, title: `Crumb list`, defaultValue: `Products` },
        listLink: { type: O.Link, title: `List link`, defaultValue: `/products` },
        buyLabel: { type: O.String, title: `Buy button`, defaultValue: `Buy now` },
        cartLabel: { type: O.String, title: `Cart button`, defaultValue: `Add to cart` },
        addedLabel: { type: O.String, title: `Added label`, defaultValue: `In the cart` },
        instantLine: {
          type: O.String,
          title: `Delivery line`,
          defaultValue: `Instant download · lifetime updates`,
        },
        insideLabel: { type: O.String, title: `Inside label`, defaultValue: `What's inside` },
        licenceLabel: { type: O.String, title: `Licence label`, defaultValue: `Licence` },
        licenceRows: {
          type: O.String,
          title: `Licence rows`,
          description: `Tier|What it covers; …`,
          displayTextArea: !0,
          defaultValue: `Personal|Your own projects, unlimited; Commercial|Client work, no credit needed; Team|Up to 5 seats on one licence`,
        },
        worksLabel: { type: O.String, title: `Works-with label`, defaultValue: `Works with` },
        guaranteeLine: {
          type: O.String,
          title: `Guarantee line`,
          displayTextArea: !0,
          defaultValue: `Broken or not as described? Write to us and we fix it or refund it.`,
        },
        moreLabel: { type: O.String, title: `More label`, defaultValue: `More from this aisle` },
        ...q,
        ...J,
      }));
  }),
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  $,
  ot;
e(() => {
  (f(),
    b(),
    g(),
    p(),
    Je(),
    me(),
    M(),
    F(),
    (Ye = E(L)),
    (Xe = E(N)),
    (Ze = {
      GrOmzlTc4: `(min-width: 1200px)`,
      hDozwWLtS: `(max-width: 809.98px)`,
      U057AsnLl: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Qe = []),
    ($e = `framer-IJLAf`),
    (et = {
      GrOmzlTc4: `framer-v-32zc96`,
      hDozwWLtS: `framer-v-1x7p01`,
      U057AsnLl: `framer-v-ognn1c`,
    }),
    (tt = (e, t, n) => (e && t ? `position` : n)),
    (nt = { Desktop: `GrOmzlTc4`, Phone: `hDozwWLtS`, Tablet: `U057AsnLl` }),
    (rt = ({ value: e }) =>
      x()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (it = (e) => ({
      from: { alias: `XdtB2w6fX`, data: pe, type: `Collection` },
      select: [{ collection: `XdtB2w6fX`, name: `A70ozZl1g`, type: `Identifier` }],
      where: e,
    })),
    (at = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: nt[r.variant] ?? r.variant ?? `GrOmzlTc4`,
    })),
    ($ = ce(
      ee(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: ee } = ue();
        k();
        let f = ae(),
          [p] = D(it(re(f, `XdtB2w6fX`)));
        if (!p) throw new de(`No data matches path variables: ${JSON.stringify(f)}`);
        let {
          style: m,
          className: g,
          layoutId: _,
          variant: ie,
          A70ozZl1g: y = p.A70ozZl1g ?? ``,
          ...b
        } = at(e);
        fe(l(() => P({}, c), [c]));
        let [x, ce] = se(ie, Ze, !1),
          le = v($e),
          E = t(C)?.isLayoutTemplate,
          O = !!t(te)?.transition?.layout,
          A = tt(E, O);
        return (
          oe({}),
          d(C.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: nt,
              primaryVariantId: `GrOmzlTc4`,
              variantClassNames: et,
            },
            children: u(ne, {
              id: _ ?? o,
              children: [
                d(rt, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(h.div, {
                  ...b,
                  className: v(le, `framer-32zc96`, g),
                  ref: a,
                  style: { ...m },
                  children: [
                    d(h.div, {
                      className: `framer-1n0h22d`,
                      "data-framer-name": `S0 DsProduct`,
                      layout: A,
                      children: d(T, {
                        children: d(S, {
                          className: `framer-1mf8b8q-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsProduct`,
                          isAuthoredByUser: !0,
                          name: `DsProduct`,
                          nodeId: `GIs87tdH6`,
                          scopeId: `XdtB2w6fX`,
                          children: d(w, {
                            breakpoint: x,
                            overrides: {
                              hDozwWLtS: { bpHint: `phone` },
                              U057AsnLl: { bpHint: `tablet` },
                            },
                            children: d(L, {
                              addedLabel: `In the cart`,
                              badge: ``,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              buyLabel: `Buy now`,
                              cartLabel: `Add to cart`,
                              checkout: ``,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              colour: ``,
                              crumbHome: `Home`,
                              crumbList: `Products`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              format: ``,
                              guaranteeLine: `Broken or not as described? Write to us and we fix it or refund it.`,
                              height: `100%`,
                              id: `GIs87tdH6`,
                              includes: ``,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              insideLabel: `What's inside`,
                              instantLine: `Instant download · lifetime updates`,
                              kind: ``,
                              layoutId: `GIs87tdH6`,
                              licenceLabel: `Licence`,
                              licenceRows: `Personal|Your own projects, unlimited; Commercial|Client work, no credit needed; Team|Up to 5 seats on one licence`,
                              listLink: `/products`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              moreLabel: `More from this aisle`,
                              name: `DsProduct`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              price: ``,
                              rating: ``,
                              shape: ``,
                              short: ``,
                              slug: y,
                              sold: ``,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              title: ``,
                              was: ``,
                              width: `100%`,
                              worksLabel: `Works with`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(h.div, {
                      className: `framer-kgsz77`,
                      "data-framer-name": `S1 DsReviews`,
                      layout: A,
                      children: d(T, {
                        children: d(S, {
                          className: `framer-1yd3qpb-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `qYUvlSvaK`,
                          scopeId: `XdtB2w6fX`,
                          children: d(w, {
                            breakpoint: x,
                            overrides: {
                              hDozwWLtS: { bpHint: `phone` },
                              U057AsnLl: { bpHint: `tablet` },
                            },
                            children: d(N, {
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
                              id: `qYUvlSvaK`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `qYUvlSvaK`,
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
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-IJLAf.framer-jzzuxt, .framer-IJLAf .framer-jzzuxt { display: block; }`,
        `.framer-IJLAf.framer-32zc96 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-IJLAf .framer-1n0h22d, .framer-IJLAf .framer-kgsz77 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IJLAf .framer-1mf8b8q-container, .framer-IJLAf .framer-1yd3qpb-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-IJLAf.framer-32zc96 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-IJLAf.framer-32zc96 { width: 390px; }}`,
      ],
      `framer-IJLAf`
    )),
    ($.displayName = `Product`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    j(
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
        ...Ye,
        ...Xe,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return y([() => ie.get(it(re(t.pathVariables, `XdtB2w6fX`)), n, r).preload()], t);
      },
    }),
    (ot = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerXdtB2w6fX`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1080`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"U057AsnLl":{"layout":["fixed","auto"]},"hDozwWLtS":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ot as __FramerMetadata__, $ as default, Qe as queryParamNames };
//# sourceMappingURL=QUwKO9s1UygP1l4vZCyw0PH912qD_6QMkKBvJE1r6Yw.DJ2paen8.mjs.map
