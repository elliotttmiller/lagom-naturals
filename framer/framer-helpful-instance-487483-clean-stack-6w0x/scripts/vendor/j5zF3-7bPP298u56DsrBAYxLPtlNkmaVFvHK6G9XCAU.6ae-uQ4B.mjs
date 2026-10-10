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
import { a as ee, k as te, r as ne, t as re } from "./motion.dK94hszq.mjs";
import {
  $ as g,
  C as _,
  P as v,
  Q as ie,
  X as ae,
  Z as oe,
  a as se,
  at as y,
  b,
  c as ce,
  et as le,
  g as ue,
  i as de,
  k as fe,
  o as x,
  q as pe,
  tt as me,
  v as S,
  y as he,
} from "./framer.BNAppio8.mjs";
import C, { t as ge } from "./InkPYhVthjptN_dU_1kPqqu_Y5jNJKRyyf6pDdRJtJs.Bp6e3I59.mjs";
function _e() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = D), document.head.appendChild(e));
  }, []);
}
function ve() {
  let e = g(),
    t = null;
  try {
    t = S.current();
  } catch {}
  return e || (t !== null && t !== S.preview);
}
function ye() {
  let e = g(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && S.current() !== S.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function be(e, t) {
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
function xe(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: P(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? M(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: P(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? M(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: P(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? M(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Se(e, t) {
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
function Ce(e) {
  let [t, n] = o([]);
  return (
    h(() => {
      if (!e) return;
      n(z());
      let t = () => n(z());
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
function we(e) {
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
function w(e) {
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
function T(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    U(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[ze] = 1));
      } catch {}
      let s = () => {
          let t = w(e);
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
function Te() {
  let e = T(`site`, V.site || [])[0] || (V.site || [])[0] || {},
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
function E(e) {
  let {
      eyebrow: t = `Checkout`,
      title: n = `Almost|*on the shelf.*`,
      steps: r = `Cart|Details|Pay`,
      summaryTitle: i = `Your order`,
      emailLabel: c = `Email`,
      nameLabel: l = `Name on the receipt`,
      countryLabel: f = `Country`,
      countries:
        p = `United States;United Kingdom;Germany;Portugal;India;Canada;Australia;Brazil;Japan;Other`,
      payLabel: m = `Payment`,
      methods: ee = `Card;PayPal;Apple Pay`,
      cardLabel: te = `Card number`,
      expiryLabel: ne = `Expiry`,
      cvcLabel: re = `CVC`,
      promoLabel: g = `Promo code`,
      promoCode: _ = `SHELF10`,
      promoPercent: v = 10,
      promoApply: ie = `Apply`,
      promoApplied: ae = `applied`,
      subtotalLabel: oe = `Subtotal`,
      discountLabel: se = `Discount`,
      totalLabel: y = `Total`,
      payButton: b = `Pay`,
      thankLink: ce = `/thank-you`,
      secureLine: le = `Secure checkout · instant download · lifetime updates`,
      demoNote:
        ue = `Demo checkout: nothing is charged. In your store, each product's Checkout field points at your Lemon Squeezy, Gumroad or Stripe link.`,
      policyLinks: de = `Licence:/licence, Refunds:/refunds, Terms:/terms`,
      emptyTitle: fe = `Nothing on the counter.`,
      emptyCopy: x = `Pick something from the shelf and come back.`,
      emptyButton: pe = `Browse the shelf`,
      emptyLink: me = `/products`,
      bpHint: S = `auto`,
    } = e,
    he = Oe(e),
    { D: C, B: ge, M: w } = xe(e);
  _e();
  let E = ye(),
    O = De(),
    k = ve(),
    A = Te(),
    j = s(null),
    { w: M } = be(j, S);
  Se(j, E);
  let N = we(E),
    [P, F] = o(!1);
  h(() => {
    if (!E || !N) return;
    let e = a.setTimeout(() => F(!0), 100);
    return () => a.clearTimeout(e);
  }, [E, N]);
  let I = P || k || O,
    L = M < 810,
    Ae = M >= 810 && M < 1100,
    R = T(`products`, V.products),
    z = T(`bundles`, V.bundles || []),
    Fe = T(`courses`, V.courses || []),
    ze = Ce(E),
    [U, We] = o(null);
  h(() => {
    if (E)
      try {
        let e = new URLSearchParams(a.location.search);
        for (let t of [`product`, `bundle`, `course`]) {
          let n = e.get(t);
          if (n) {
            We({ k: t, v: n });
            return;
          }
        }
        We(null);
      } catch {}
  }, [E]);
  let W = (() => {
      if (!U) return [];
      if (U.k === `product`) {
        let e = R.find((e) => e.slug === U.v);
        return e
          ? [
              {
                slug: e.slug,
                name: e.f1 || ``,
                kind: e.f2 || ``,
                price: e.f3 || ``,
                cover: H(e),
                href: `/products/${e.slug}`,
              },
            ]
          : [];
      }
      if (U.k === `bundle`) {
        let e = z.find((e) => e.slug === U.v);
        return e
          ? [
              {
                slug: `bundle-` + e.slug,
                name: e.f1 || ``,
                kind: `Bundle`,
                price: e.f2 || ``,
                cover: H(e),
                href: `/bundles/${e.slug}`,
              },
            ]
          : [];
      }
      let e = Fe.find((e) => e.slug === U.v);
      return e
        ? [
            {
              slug: `course-` + e.slug,
              name: e.f1 || ``,
              kind: `Course`,
              price: e.f2 || ``,
              cover: H(e),
              href: `/courses/${e.slug}`,
            },
          ]
        : [];
    })(),
    G = W.length
      ? W
      : ze.map((e) => ({
          slug: e.slug,
          name: e.name,
          kind: e.kind || ``,
          price: e.price,
          cover: e.cover || ``,
          href: e.href || `#`,
        })),
    K = G.reduce((e, t) => e + Pe(t.price), 0),
    [q, Ge] = o(``),
    [J, Y] = o(!1),
    X = J ? Math.round((Math.max(0, v) / 100) * K) : 0,
    Z = Math.max(0, K - X),
    Q = (e) => `$${e.toLocaleString(`en-US`)}`,
    Ke = r
      .split(`|`)
      .map((e) => e.trim())
      .filter(Boolean),
    qe = ee
      .split(`;`)
      .map((e) => e.trim())
      .filter(Boolean),
    [$, Je] = o(0),
    Ye = p
      .split(`;`)
      .map((e) => e.trim())
      .filter(Boolean),
    Xe = Be(de),
    Ze = (e) => {
      if ((e.preventDefault(), E)) {
        if (!W.length)
          try {
            Ne([]);
          } catch {}
        a.location.assign(ce || `/thank-you`);
      }
    };
  return u(`section`, {
    ref: j,
    className: `ds ds-sec dsco${I ? ` is-on` : ``}${L ? ` is-ph` : Ae ? ` is-tab` : ``}${k ? ` is-still` : ``}`,
    style: { ...ke(he), ...ge, ...e.style },
    "aria-label": Ie(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: D }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Me + Re + Ue } }),
      u(`div`, {
        className: `ds-wrap dsco-wrap`,
        children: [
          u(`div`, {
            className: `dsco-head`,
            style: B(I, 0),
            children: [
              u(`p`, {
                className: `dsco-eb`,
                style: w,
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(Le, {
                text: n,
                on: I,
                D: C,
                tag: `h1`,
                size: L ? `clamp(36px,10vw,48px)` : `clamp(40px,4vw,62px)`,
                lh: 0.96,
                delay: 60,
              }),
              d(`ol`, {
                className: `dsco-steps`,
                style: w,
                "aria-label": t,
                children: Ke.map((e, t) =>
                  u(
                    `li`,
                    {
                      className: t === 1 ? `is-cur` : t < 1 ? `is-done` : ``,
                      children: [d(`span`, { children: String(t + 1).padStart(2, `0`) }), e],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
          G.length === 0
            ? u(`div`, {
                className: `dsco-empty`,
                style: B(I, 120),
                children: [
                  d(`b`, { style: C, children: fe }),
                  d(`p`, { children: x }),
                  d(je, { href: me, label: pe, kind: `solid` }),
                ],
              })
            : u(`div`, {
                className: `dsco-grid`,
                children: [
                  u(`aside`, {
                    className: `dsco-sum`,
                    style: B(I, 120, 26),
                    "aria-label": i,
                    children: [
                      u(`span`, {
                        className: `dsco-sh`,
                        style: w,
                        children: [
                          d(`b`, { children: A.name || `Shelfline` }),
                          u(`span`, { children: [i, ` · `, G.length] }),
                        ],
                      }),
                      d(`ul`, {
                        className: `dsco-lines`,
                        children: G.map((e) =>
                          u(
                            `li`,
                            {
                              children: [
                                d(`a`, {
                                  className: `dsco-cov`,
                                  href: e.href,
                                  children:
                                    e.cover &&
                                    d(`img`, {
                                      ...Ee(e.cover, `64px`),
                                      alt: ``,
                                      loading: `lazy`,
                                      decoding: `async`,
                                    }),
                                }),
                                u(`span`, {
                                  className: `dsco-lt`,
                                  children: [
                                    d(`a`, { href: e.href, style: C, children: e.name }),
                                    d(`small`, { style: w, children: e.kind }),
                                  ],
                                }),
                                d(`b`, { style: w, children: e.price }),
                              ],
                            },
                            e.slug
                          )
                        ),
                      }),
                      u(`form`, {
                        className: `dsco-promo`,
                        onSubmit: (e) => {
                          (e.preventDefault(),
                            Y(q.trim().toUpperCase() === String(_).trim().toUpperCase()));
                        },
                        children: [
                          d(`label`, { className: `ds-sr`, htmlFor: `dsco-code`, children: g }),
                          d(`input`, {
                            id: `dsco-code`,
                            style: w,
                            placeholder: g,
                            value: q,
                            onChange: (e) => {
                              (Ge(e.target.value), Y(!1));
                            },
                          }),
                          d(`button`, {
                            type: `submit`,
                            style: w,
                            children: J ? `${_} ${ae}` : ie,
                          }),
                        ],
                      }),
                      u(`span`, {
                        className: `dsco-row`,
                        style: w,
                        children: [
                          d(`span`, { children: oe }),
                          d(`i`, { "aria-hidden": !0 }),
                          d(`b`, { children: Q(K) }),
                        ],
                      }),
                      X > 0 &&
                        u(`span`, {
                          className: `dsco-row is-disc`,
                          style: w,
                          children: [
                            u(`span`, { children: [se, ` · `, v, `%`] }),
                            d(`i`, { "aria-hidden": !0 }),
                            u(`b`, { children: [`−`, Q(X)] }),
                          ],
                        }),
                      u(`span`, {
                        className: `dsco-tot`,
                        children: [
                          d(`span`, { style: w, children: y }),
                          d(`em`, { style: C, children: Q(Z) }),
                        ],
                      }),
                    ],
                  }),
                  u(`form`, {
                    className: `dsco-form`,
                    style: B(I, 200, 26),
                    onSubmit: Ze,
                    noValidate: !1,
                    children: [
                      u(`div`, {
                        className: `dsco-f2`,
                        children: [
                          u(`label`, {
                            className: `dsco-fl`,
                            children: [
                              d(`span`, { style: w, children: c }),
                              d(`input`, {
                                type: `email`,
                                name: `email`,
                                required: !0,
                                autoComplete: `email`,
                                placeholder: `you@studio.com`,
                              }),
                            ],
                          }),
                          u(`label`, {
                            className: `dsco-fl`,
                            children: [
                              d(`span`, { style: w, children: l }),
                              d(`input`, {
                                type: `text`,
                                name: `name`,
                                required: !0,
                                autoComplete: `name`,
                                placeholder: `Mara Lindqvist`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(`label`, {
                        className: `dsco-fl`,
                        children: [
                          d(`span`, { style: w, children: f }),
                          d(`span`, {
                            className: `dsco-sel`,
                            children: d(`select`, {
                              name: `country`,
                              defaultValue: Ye[0],
                              children: Ye.map((e, t) => d(`option`, { children: e }, t)),
                            }),
                          }),
                        ],
                      }),
                      u(`div`, {
                        className: `dsco-pay`,
                        children: [
                          d(`span`, { className: `dsco-pl`, style: w, children: m }),
                          d(`div`, {
                            className: `dsco-tabs`,
                            role: `tablist`,
                            children: qe.map((e, t) =>
                              u(
                                `button`,
                                {
                                  type: `button`,
                                  role: `tab`,
                                  "aria-selected": $ === t,
                                  className: $ === t ? `is-on` : ``,
                                  onClick: () => Je(t),
                                  style: w,
                                  children: [t === 0 && Ve(), e],
                                },
                                t
                              )
                            ),
                          }),
                          $ === 0
                            ? u(`div`, {
                                className: `dsco-card`,
                                children: [
                                  u(`label`, {
                                    className: `dsco-fl dsco-num`,
                                    children: [
                                      d(`span`, { style: w, children: te }),
                                      d(`input`, {
                                        inputMode: `numeric`,
                                        autoComplete: `cc-number`,
                                        placeholder: `4242 4242 4242 4242`,
                                        maxLength: 19,
                                      }),
                                    ],
                                  }),
                                  u(`div`, {
                                    className: `dsco-f2`,
                                    children: [
                                      u(`label`, {
                                        className: `dsco-fl`,
                                        children: [
                                          d(`span`, { style: w, children: ne }),
                                          d(`input`, {
                                            inputMode: `numeric`,
                                            autoComplete: `cc-exp`,
                                            placeholder: `MM / YY`,
                                            maxLength: 7,
                                          }),
                                        ],
                                      }),
                                      u(`label`, {
                                        className: `dsco-fl`,
                                        children: [
                                          d(`span`, { style: w, children: re }),
                                          d(`input`, {
                                            inputMode: `numeric`,
                                            autoComplete: `cc-csc`,
                                            placeholder: `123`,
                                            maxLength: 4,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : d(`p`, {
                                className: `dsco-alt`,
                                children: `${qe[$]}: you will be sent to ${qe[$]} to confirm, then back to your download.`,
                              }),
                        ],
                      }),
                      d(`button`, {
                        type: `submit`,
                        className: `ds-btn ds-solid dsco-btn`,
                        "data-mag": !0,
                        children: u(`span`, {
                          className: `ds-tag`,
                          children: [
                            d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
                            d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
                            u(`span`, {
                              className: `ds-lbl`,
                              children: [
                                u(`span`, { className: `ds-l1`, children: [b, ` `, Q(Z)] }),
                                u(`span`, {
                                  className: `ds-l2`,
                                  "aria-hidden": !0,
                                  children: [b, ` `, Q(Z)],
                                }),
                              ],
                            }),
                            d(`span`, { className: `ds-arr`, "aria-hidden": !0, children: He() }),
                          ],
                        }),
                      }),
                      u(`p`, {
                        className: `dsco-sec`,
                        style: w,
                        children: [d(`i`, { "aria-hidden": !0, children: He() }), le],
                      }),
                      d(`p`, { className: `dsco-note`, children: ue }),
                      d(`p`, {
                        className: `dsco-pol`,
                        style: w,
                        children: Xe.map((e, t) => d(`a`, { href: e.h, children: e.l }, t)),
                      }),
                    ],
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var D,
  O,
  k,
  A,
  Ee,
  j,
  M,
  N,
  P,
  De,
  F,
  Oe,
  ke,
  I,
  L,
  Ae,
  je,
  Me,
  R,
  z,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  B,
  Re,
  V,
  ze,
  H,
  U,
  Be,
  Ve,
  He,
  Ue,
  We = e(() => {
    (i(),
      p(),
      m(),
      v(),
      (D = `../../styles/css2-a59a76.css`),
      (O = `clamp(1280px, 92vw, 1520px)`),
      (k = [160, 320, 480, 800, 1200, 1600]),
      (A = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return k.find((e) => e >= i) || 1600;
      }),
      (Ee = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = A(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = A(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: k
              .filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (j = (e) => {
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
      (M = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (N = (e) => {
        let t = j(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (P = (e, t, n, r) => {
        let i = e ? N(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (De = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (F = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Oe = (e) => ({
        bone: e.bone || F.bone,
        ink: e.ink || F.ink,
        brass: e.brass || F.brass,
        pine: e.pine || F.pine,
        fog: e.fog || F.fog,
        stone: e.stone || F.stone,
        cloud: e.cloud || F.cloud,
        night: e.night || F.night,
      })),
      (ke = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (I = {
        bone: { type: x.Color, title: `Paper`, defaultValue: F.bone },
        ink: { type: x.Color, title: `Ink`, defaultValue: F.ink },
        brass: { type: x.Color, title: `Accent`, defaultValue: F.brass },
        pine: { type: x.Color, title: `Deep`, defaultValue: F.pine },
        fog: { type: x.Color, title: `Line`, defaultValue: F.fog },
        stone: { type: x.Color, title: `Muted`, defaultValue: F.stone },
        cloud: { type: x.Color, title: `White`, defaultValue: F.cloud },
        night: { type: x.Color, title: `Dark`, defaultValue: F.night },
      }),
      (L = {
        customFonts: {
          type: x.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: x.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: x.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: x.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Ae = {
        bpHint: {
          type: x.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (je = ({
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
      (Me = `
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
      (R = `ds-cart`),
      (z = () => {
        try {
          let e = JSON.parse(localStorage.getItem(R) || `[]`);
          return Array.isArray(e) ? e : [];
        } catch {
          return [];
        }
      }),
      (Ne = (e) => {
        try {
          localStorage.setItem(R, JSON.stringify(e));
        } catch {}
        try {
          a.dispatchEvent(new CustomEvent(`ds-cart`, { detail: { items: e } }));
        } catch {}
      }),
      (Pe = (e) => parseFloat(String(e || ``).replace(/[^\d.]/g, ``)) || 0),
      x.Boolean,
      x.Number,
      (Fe = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (Ie = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Le = ({
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
          "aria-label": Ie(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Fe(e).map((e, t) => {
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
      (B = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Re = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${O} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (V = {
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
      (ze = `DsCheckout@cms1`),
      (H = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (U = a === void 0 ? h : r),
      (Be = (e) =>
        String(e || ``)
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) => {
            let t = e.indexOf(`:`);
            return { l: t < 0 ? e : e.slice(0, t).trim(), h: t < 0 ? `/` : e.slice(t + 1).trim() };
          })),
      (Ve = () =>
        u(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": !0,
          children: [
            d(`rect`, {
              x: `2.5`,
              y: `5`,
              width: `19`,
              height: `14`,
              rx: `2.5`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
            }),
            d(`path`, { d: `M2.5 10h19`, stroke: `currentColor`, strokeWidth: `2` }),
          ],
        })),
      (He = () =>
        u(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": !0,
          children: [
            d(`rect`, {
              x: `5`,
              y: `10`,
              width: `14`,
              height: `11`,
              rx: `2`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
            }),
            d(`path`, {
              d: `M8 10V7a4 4 0 0 1 8 0v3`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2`,
            }),
          ],
        })),
      (Ue = `
.dsco{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:calc(72px + clamp(40px,5vw,70px)) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dsco-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:18px 40px;margin-bottom:clamp(30px,4vw,54px)}
.dsco-eb{flex-basis:100%;display:inline-flex;align-items:center;gap:10px;margin:0 0 -6px;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsco-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsco .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsco .ds-it{color:var(--ds-acc)}
.dsco-steps{list-style:none;margin:0;padding:0;display:flex;gap:18px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)} .dsco-steps li{display:inline-flex;align-items:center;gap:8px} .dsco-steps span{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 25%,transparent);font-size:9px} .dsco-steps .is-cur{color:var(--ds-ink)} .dsco-steps .is-cur span,.dsco-steps .is-done span{background:var(--ds-brass);color:var(--ds-ink);box-shadow:none}
.dsco-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(28px,4vw,64px);align-items:start}
/* order receipt */
.dsco-sum{position:sticky;top:96px;display:flex;flex-direction:column;gap:12px;padding:22px 22px 28px;background:var(--ds-night);color:var(--ds-bone);border-radius:6px;box-shadow:0 40px 80px -40px rgba(0,0,0,.6)}
.dsco-sh{display:flex;justify-content:space-between;gap:10px;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-bone) 25%,transparent);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase} .dsco-sh b{font-weight:500;color:var(--ds-brass)}
.dsco-lines{list-style:none;margin:0;padding:0;display:flex;flex-direction:column} .dsco-lines li{display:grid;grid-template-columns:52px minmax(0,1fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-bone) 18%,transparent)}
.dsco-cov{display:block;width:52px;height:66px;border-radius:3px;overflow:hidden;background:var(--ds-pine)} .dsco-cov img{width:100%;height:100%;object-fit:cover;display:block;opacity:.85}
.dsco-lt{display:flex;flex-direction:column;gap:3px;min-width:0} .dsco-lt a{font-size:15px;font-weight:700;letter-spacing:-.01em;text-decoration:none;color:var(--ds-bone);white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .dsco-lt small{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)} .dsco-lines b{font-weight:500;font-size:13px}
.dsco-promo{display:flex;gap:8px;margin-top:4px} .dsco-promo input{flex:1;min-width:0;height:42px;padding:0 12px;border:0;border-radius:4px;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);color:var(--ds-bone);font:inherit;font-size:12px;letter-spacing:.06em;text-transform:uppercase;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 22%,transparent)} .dsco-promo input::placeholder{text-transform:none;letter-spacing:0;color:color-mix(in srgb,var(--ds-bone) 45%,transparent)}
.dsco-promo button{height:42px;padding:0 14px;border:0;border-radius:4px;background:color-mix(in srgb,var(--ds-cloud) 12%,transparent);color:var(--ds-bone);font:inherit;font-size:10px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;white-space:nowrap} .dsco-promo button:hover{background:var(--ds-brass);color:var(--ds-ink)}
.dsco-promo input:focus-visible{outline:2px solid var(--ds-bone)!important;outline-offset:-2px!important;box-shadow:none!important}
.dsco-row{display:flex;align-items:baseline;gap:8px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)} .dsco-row i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-bone) 30%,transparent);translate:0 -4px} .dsco-row b{font-weight:500;color:var(--ds-bone)} .dsco-row.is-disc b{color:var(--ds-brass)}
.dsco-tot{display:flex;justify-content:space-between;align-items:baseline;padding-top:12px;margin-top:4px;border-top:2px solid color-mix(in srgb,var(--ds-bone) 80%,transparent);font-size:11px;letter-spacing:.12em;text-transform:uppercase} .dsco-tot em{font-style:normal;font-size:32px;font-weight:800;letter-spacing:-.03em;color:var(--ds-brass)}
.dsco-stamp{position:absolute;right:18px;top:14px;padding:3px 9px;border:2px solid var(--ds-brass);border-radius:4px;color:var(--ds-brass);font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;rotate:-8deg;opacity:.9}
/* form */
.dsco-form{display:flex;flex-direction:column;gap:18px;padding:clamp(20px,2.5vw,34px);background:var(--ds-cloud);border-radius:6px;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 10%,transparent)}
.dsco-f2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.dsco-fl{display:flex;flex-direction:column;gap:7px} .dsco-fl>span{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)}
.dsco-fl input,.dsco-sel select{width:100%;height:50px;padding:0 16px;border:0;border-radius:4px;background:var(--ds-bone);color:var(--ds-ink);font:inherit;font-size:15px;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 18%,transparent);appearance:none;-webkit-appearance:none} .dsco-fl input::placeholder{color:var(--ds-mut)}
.dsco-fl input:focus-visible,.dsco-sel select:focus-visible{outline:2px solid var(--ds-brass)!important;outline-offset:-2px!important;box-shadow:inset 0 0 0 2px var(--ds-brass)!important}
.dsco-sel{position:relative;display:block} .dsco-sel::after{content:"";position:absolute;right:18px;top:50%;width:8px;height:8px;margin-top:-6px;border-right:2px solid var(--ds-ink);border-bottom:2px solid var(--ds-ink);rotate:45deg;pointer-events:none}
.dsco-pay{display:flex;flex-direction:column;gap:12px;padding-top:6px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 22%,transparent);margin-top:2px} .dsco-pl{margin-top:8px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)}
.dsco-tabs{display:flex;gap:8px;flex-wrap:wrap} .dsco-tabs button{display:inline-flex;align-items:center;gap:8px;height:42px;padding:0 16px;border:0;border-radius:999px;background:var(--ds-bone);color:var(--ds-ink);font:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 18%,transparent);transition:background .3s,color .3s} .dsco-tabs button svg{width:16px;height:16px} .dsco-tabs button.is-on{background:var(--ds-ink);color:var(--ds-bone);box-shadow:none}
.dsco-card{display:flex;flex-direction:column;gap:14px} .dsco-alt{margin:0;padding:14px 16px;border-radius:4px;background:var(--ds-bone);font-size:14px;color:var(--ds-mut)}
.dsco-btn{font:inherit;font-size:15px;font-weight:700;border:0;background:none;padding:0;align-self:stretch;margin-top:6px} .dsco-btn .ds-tag{justify-content:space-between;width:100%} .dsco-btn .ds-arr svg{width:15px;height:15px}
.dsco-sec{display:flex;align-items:center;gap:8px;margin:0;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dsco-sec i{display:inline-grid;place-items:center;width:14px;height:14px} .dsco-sec svg{width:14px;height:14px}
.dsco-note{margin:0;padding:12px 14px;border-radius:4px;background:color-mix(in srgb,var(--ds-brass) 12%,transparent);font-size:13px;line-height:1.5;color:var(--ds-ink)}
.dsco-pol{display:flex;gap:16px;margin:0;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase} .dsco-pol a{color:var(--ds-mut);text-decoration:none} .dsco-pol a:hover{color:var(--ds-acc)}
/* empty */
.dsco-empty{display:flex;flex-direction:column;align-items:flex-start;gap:14px;max-width:520px;padding:34px 0} .dsco-empty b{font-size:clamp(26px,3vw,40px);font-weight:800;letter-spacing:-.03em} .dsco-empty p{margin:0 0 8px;font-size:16px;color:var(--ds-mut)}
.dsco.is-tab .dsco-grid{grid-template-columns:1fr;gap:28px} .dsco.is-tab .dsco-sum{position:relative;top:auto}
.dsco.is-ph{padding-top:calc(64px + 30px)} .dsco.is-ph .dsco-grid{grid-template-columns:1fr;gap:22px} .dsco.is-ph .dsco-sum{position:relative;top:auto;padding:18px 16px 24px} .dsco.is-ph .dsco-f2{grid-template-columns:1fr} .dsco.is-ph .dsco-form{padding:18px 16px} .dsco.is-ph .dsco-steps{gap:12px}`),
      b(E, {
        ...Ae,
        eyebrow: { type: x.String, title: `Eyebrow`, defaultValue: `Checkout` },
        title: {
          type: x.String,
          title: `Title`,
          defaultValue: `Almost|*on the shelf.*`,
          description: `*word* = accent, | = line break`,
        },
        steps: { type: x.String, title: `Steps`, defaultValue: `Cart|Details|Pay` },
        summaryTitle: { type: x.String, title: `Summary title`, defaultValue: `Your order` },
        emailLabel: { type: x.String, title: `Email label`, defaultValue: `Email` },
        nameLabel: { type: x.String, title: `Name label`, defaultValue: `Name on the receipt` },
        countryLabel: { type: x.String, title: `Country label`, defaultValue: `Country` },
        countries: {
          type: x.String,
          title: `Countries`,
          description: `Semicolon list`,
          defaultValue: `United States;United Kingdom;Germany;Portugal;India;Canada;Australia;Brazil;Japan;Other`,
        },
        payLabel: { type: x.String, title: `Payment label`, defaultValue: `Payment` },
        methods: {
          type: x.String,
          title: `Methods`,
          description: `Semicolon list, the first one shows card fields`,
          defaultValue: `Card;PayPal;Apple Pay`,
        },
        cardLabel: { type: x.String, title: `Card label`, defaultValue: `Card number` },
        expiryLabel: { type: x.String, title: `Expiry label`, defaultValue: `Expiry` },
        cvcLabel: { type: x.String, title: `CVC label`, defaultValue: `CVC` },
        promoLabel: { type: x.String, title: `Promo label`, defaultValue: `Promo code` },
        promoCode: { type: x.String, title: `Promo code`, defaultValue: `SHELF10` },
        promoPercent: {
          type: x.Number,
          title: `Promo percent`,
          min: 0,
          max: 90,
          step: 1,
          defaultValue: 10,
        },
        promoApply: { type: x.String, title: `Apply label`, defaultValue: `Apply` },
        promoApplied: { type: x.String, title: `Applied label`, defaultValue: `applied` },
        subtotalLabel: { type: x.String, title: `Subtotal label`, defaultValue: `Subtotal` },
        discountLabel: { type: x.String, title: `Discount label`, defaultValue: `Discount` },
        totalLabel: { type: x.String, title: `Total label`, defaultValue: `Total` },
        payButton: {
          type: x.String,
          title: `Pay button`,
          description: `The total is appended`,
          defaultValue: `Pay`,
        },
        thankLink: { type: x.Link, title: `After pay`, defaultValue: `/thank-you` },
        secureLine: {
          type: x.String,
          title: `Secure line`,
          defaultValue: `Secure checkout · instant download · lifetime updates`,
        },
        demoNote: {
          type: x.String,
          title: `Note`,
          displayTextArea: !0,
          defaultValue: `Demo checkout: nothing is charged. In your store, each product's Checkout field points at your Lemon Squeezy, Gumroad or Stripe link.`,
        },
        policyLinks: {
          type: x.String,
          title: `Policy links`,
          description: `Label:/path, …`,
          defaultValue: `Licence:/licence, Refunds:/refunds, Terms:/terms`,
        },
        emptyTitle: {
          type: x.String,
          title: `Empty title`,
          defaultValue: `Nothing on the counter.`,
        },
        emptyCopy: {
          type: x.String,
          title: `Empty copy`,
          defaultValue: `Pick something from the shelf and come back.`,
        },
        emptyButton: { type: x.String, title: `Empty button`, defaultValue: `Browse the shelf` },
        emptyLink: { type: x.Link, title: `Empty link`, defaultValue: `/products` },
        ...I,
        ...L,
      }));
  }),
  W,
  G,
  K,
  q,
  Ge,
  J,
  Y,
  X,
  Z,
  Q,
  Ke;
e(() => {
  (p(),
    v(),
    re(),
    m(),
    We(),
    ge(),
    (W = fe(E)),
    (G = {
      A9DacH_9P: `(max-width: 809.98px)`,
      E0ywH4Lj3: `(min-width: 1200px)`,
      fkbbeGlV9: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (K = []),
    (q = `framer-4CXw1`),
    (Ge = {
      A9DacH_9P: `framer-v-1picih8`,
      E0ywH4Lj3: `framer-v-1cphr0b`,
      fkbbeGlV9: `framer-v-5ljer5`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = { Desktop: `E0ywH4Lj3`, Phone: `A9DacH_9P`, Tablet: `fkbbeGlV9` }),
    (X = ({ value: e }) =>
      ie()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `E0ywH4Lj3`,
    })),
    (Q = y(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = le();
        pe();
        let { style: p, className: m, layoutId: h, variant: re, ...g } = Z(e);
        me(l(() => C({}, c), [c]));
        let [v, ie] = oe(re, G, !1),
          y = _(q),
          b = t(ce)?.isLayoutTemplate,
          fe = !!t(ee)?.transition?.layout,
          x = J(b, fe);
        return (
          ae({}),
          d(ce.Provider, {
            value: {
              activeVariantId: v,
              humanReadableVariantMap: Y,
              primaryVariantId: `E0ywH4Lj3`,
              variantClassNames: Ge,
            },
            children: u(ne, {
              id: h ?? o,
              children: [
                d(X, { value: `html body { background: rgb(255, 255, 255); }` }),
                d(te.div, {
                  ...g,
                  className: _(y, `framer-1cphr0b`, m),
                  ref: a,
                  style: { ...p },
                  children: d(te.div, {
                    className: `framer-1p0wrs1`,
                    "data-framer-name": `S0 DsCheckout`,
                    layout: x,
                    children: d(de, {
                      children: d(se, {
                        className: `framer-1u56ad9-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `DsCheckout`,
                        isAuthoredByUser: !0,
                        name: `DsCheckout`,
                        nodeId: `D4sxLNqJ2`,
                        scopeId: `rZsWM0mIZ`,
                        children: d(ue, {
                          breakpoint: v,
                          overrides: {
                            A9DacH_9P: { bpHint: `phone` },
                            fkbbeGlV9: { bpHint: `tablet` },
                          },
                          children: d(E, {
                            bodyFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                            bpHint: `desktop`,
                            brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                            cardLabel: `Card number`,
                            cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                            countries: `United States;United Kingdom;Germany;Portugal;India;Canada;Australia;Brazil;Japan;Other`,
                            countryLabel: `Country`,
                            customFonts: !1,
                            cvcLabel: `CVC`,
                            demoNote: `Demo checkout: nothing is charged. In your store, each product's Checkout field points at your Lemon Squeezy, Gumroad or Stripe link.`,
                            discountLabel: `Discount`,
                            displayFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            emailLabel: `Email`,
                            emptyButton: `Browse the shelf`,
                            emptyCopy: `Pick something from the shelf and come back.`,
                            emptyLink: `/products`,
                            emptyTitle: `Nothing on the counter.`,
                            expiryLabel: `Expiry`,
                            eyebrow: `Checkout`,
                            fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                            height: `100%`,
                            id: `D4sxLNqJ2`,
                            ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                            layoutId: `D4sxLNqJ2`,
                            methods: `Card;PayPal;Apple Pay`,
                            monoFont: {
                              fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            name: `DsCheckout`,
                            nameLabel: `Name on the receipt`,
                            night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                            payButton: `Pay`,
                            payLabel: `Payment`,
                            pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                            policyLinks: `Licence:/licence, Refunds:/refunds, Terms:/terms`,
                            promoApplied: `applied`,
                            promoApply: `Apply`,
                            promoCode: `SHELF10`,
                            promoLabel: `Promo code`,
                            promoPercent: 10,
                            secureLine: `Secure checkout · instant download · lifetime updates`,
                            steps: `Cart|Details|Pay`,
                            stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                            style: { width: `100%` },
                            subtotalLabel: `Subtotal`,
                            summaryTitle: `Your order`,
                            thankLink: `/thank-you`,
                            title: `Almost|*on the shelf.*`,
                            totalLabel: `Total`,
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
        `.framer-4CXw1.framer-8ijblw, .framer-4CXw1 .framer-8ijblw { display: block; }`,
        `.framer-4CXw1.framer-1cphr0b { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-4CXw1 .framer-1p0wrs1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4CXw1 .framer-1u56ad9-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-4CXw1.framer-1cphr0b { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-4CXw1.framer-1cphr0b { width: 390px; }}`,
      ],
      `framer-4CXw1`
    )),
    (Q.displayName = `Checkout`),
    (Q.defaultProps = { height: 1080, width: 1200 }),
    he(
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
        ...W,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Ke = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerrZsWM0mIZ`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"fkbbeGlV9":{"layout":["fixed","auto"]},"A9DacH_9P":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `1080`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ke as __FramerMetadata__, Q as default, K as queryParamNames };
//# sourceMappingURL=j5zF3-7bPP298u56DsrBAYxLPtlNkmaVFvHK6G9XCAU.6ae-uQ4B.mjs.map
