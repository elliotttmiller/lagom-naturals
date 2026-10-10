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
import { a as ee, k as g, r as _, t as v } from "./motion.dK94hszq.mjs";
import {
  $ as y,
  C as b,
  P as x,
  Q as S,
  X as C,
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
import { n as te, t as ne } from "./DsReviews.Do5b3KPj.mjs";
import { n as re, t as ie } from "./DsPageHero.BMIkCPXD.mjs";
import ae, { t as oe } from "./tuveY_tmFVUJW_8swuWItniM83vZydles5ZyC0Dnr0U.CmD_owLi.mjs";
function se() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = z), document.head.appendChild(e));
  }, []);
}
function ce() {
  let e = y(),
    t = null;
  try {
    t = I.current();
  } catch {}
  return e || (t !== null && t !== I.preview);
}
function le() {
  let e = y(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && I.current() !== I.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ue(e, t) {
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
function de(e, t, n) {
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
function fe(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: W(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? H(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: W(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? H(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: W(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? H(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function pe(e, t) {
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
    c = ce(),
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
              (o = de(() => {
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
    Ae(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[ke] = 1));
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
function ve() {
  let e = _e(`site`, J.site || [])[0] || (J.site || [])[0] || {},
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
function R(e) {
  let {
      eyebrow: t = `How it works`,
      heading: n = `Share the shelf,|*keep 30%.*`,
      intro:
        r = `Every product page can carry your code. When someone buys within sixty days, a third of the sale is yours, paid monthly.`,
      steps:
        i = `Share your link|Every product, bundle and course page with your code on the end.; Someone buys|Any product within 60 days of the click, on any device.; You keep 30%|Paid on the first of the month, once the balance passes $20.`,
      termsLabel: a = `The terms`,
      terms:
        o = `Commission|30% of every sale; Cookie|60 days; Payout|Monthly, by PayPal or bank; Minimum|$20 balance; Self-purchases|Not counted`,
      exampleLabel: c = `Worked example`,
      example: l = `Launch in 30 Days|$149|10 sales|$447`,
      toYouLabel: f = `To you`,
      formTitle: p = `Join the programme`,
      formCopy:
        m = `Tell us where you'll share it. We reply within a day with your link and a folder of covers.`,
      namePlaceholder: h = `Your name`,
      emailPlaceholder: ee = `you@studio.com`,
      button: g = `Get my link`,
      formAction: _ = `/thank-you`,
      note: v = `No minimum audience. No fees.`,
      bpHint: y = `auto`,
    } = e,
    b = be(e),
    { D: x, B: S, M: C } = fe(e);
  se();
  let w = le(),
    T = ye(),
    E = ce(),
    D = ve(),
    O = s(null),
    { w: k } = ue(O, y),
    A = he(O, w, T);
  pe(O, w);
  let j = k < 810,
    M = k >= 810 && k < 1100,
    N = D.name || `Shelfline`,
    P = Y(i)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { t: (t || ``).trim(), d: (n || ``).trim() };
      })
      .filter((e) => e.t),
    F = Y(o)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { k: (t || ``).trim(), v: (n || ``).trim() };
      })
      .filter((e) => e.k),
    I = String(l || ``)
      .split(`|`)
      .map((e) => e.trim()),
    L = { name: I[0] || ``, price: I[1] || ``, qty: I[2] || ``, pay: I[3] || `` };
  return u(`section`, {
    ref: O,
    className: `ds ds-sec dsaf${A ? ` is-on` : ``}${j ? ` is-ph` : M ? ` is-tab` : ``}${E ? ` is-still` : ``}`,
    style: { ...xe(b), ...S, ...e.style },
    "aria-label": K(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: z }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Te + Oe + je } }),
      u(`div`, {
        className: `ds-wrap dsaf-wrap`,
        children: [
          u(`div`, {
            className: `dsaf-l`,
            children: [
              u(`p`, {
                className: `dsaf-eb`,
                style: { ...C, ...q(A, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(De, {
                text: n,
                on: A,
                D: x,
                size: j ? `clamp(38px,11vw,52px)` : `clamp(42px,4.4vw,70px)`,
                lh: 0.96,
                delay: 80,
              }),
              d(`p`, { className: `dsaf-sub`, style: q(A, 240), children: r }),
              d(`ol`, {
                className: `dsaf-steps`,
                children: P.map((e, t) =>
                  u(
                    `li`,
                    {
                      style: q(A, 300 + t * 90, 24),
                      children: [
                        d(`span`, {
                          className: `dsaf-n`,
                          style: C,
                          children: String(t + 1).padStart(2, `0`),
                        }),
                        u(`span`, {
                          className: `dsaf-st`,
                          children: [
                            d(`b`, { style: x, children: e.t }),
                            d(`span`, { children: e.d }),
                          ],
                        }),
                        d(`i`, { className: `dsaf-tick`, "aria-hidden": !0 }),
                      ],
                    },
                    t
                  )
                ),
              }),
              u(`div`, {
                className: `dsaf-terms`,
                style: q(A, 560),
                children: [
                  d(`span`, { className: `dsaf-tl`, style: C, children: a }),
                  d(`ul`, {
                    children: F.map((e, t) =>
                      u(
                        `li`,
                        {
                          children: [
                            d(`span`, { style: C, children: e.k }),
                            d(`i`, { "aria-hidden": !0 }),
                            d(`b`, { children: e.v }),
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
            className: `dsaf-r`,
            children: [
              u(`div`, {
                className: `dsaf-rcpt`,
                style: { ...C, ...q(A, 320, 30) },
                "aria-label": c,
                children: [
                  u(`span`, {
                    className: `dsaf-rh`,
                    children: [
                      d(`b`, { style: x, children: N.toUpperCase() }),
                      d(`span`, { children: c }),
                    ],
                  }),
                  u(`span`, {
                    className: `dsaf-rl`,
                    children: [
                      d(`span`, { children: L.name }),
                      d(`i`, { "aria-hidden": !0 }),
                      d(`b`, { children: L.price }),
                    ],
                  }),
                  u(`span`, {
                    className: `dsaf-rl`,
                    children: [
                      u(`span`, { children: [`× `, L.qty] }),
                      d(`i`, { "aria-hidden": !0 }),
                      d(`b`, { children: L.qty }),
                    ],
                  }),
                  u(`span`, {
                    className: `dsaf-rl dsaf-rate`,
                    children: [
                      d(`span`, { children: `Your share` }),
                      d(`i`, { "aria-hidden": !0 }),
                      d(`b`, { children: `30%` }),
                    ],
                  }),
                  u(`span`, {
                    className: `dsaf-tot`,
                    children: [d(`span`, { children: f }), d(`em`, { style: x, children: L.pay })],
                  }),
                  d(`span`, {
                    className: `dsaf-stamp`,
                    style: x,
                    "aria-hidden": !0,
                    children: `30%`,
                  }),
                ],
              }),
              u(`div`, {
                className: `dsaf-form`,
                style: q(A, 440, 30),
                children: [
                  d(`b`, { className: `dsaf-ft`, style: x, children: p }),
                  d(`p`, { className: `dsaf-fc`, children: m }),
                  u(`form`, {
                    action: _,
                    method: `get`,
                    onSubmit: (e) => {
                      _ || e.preventDefault();
                    },
                    children: [
                      d(`label`, { className: `ds-sr`, htmlFor: `dsaf-name`, children: `Name` }),
                      d(`input`, {
                        id: `dsaf-name`,
                        className: `dsaf-in`,
                        type: `text`,
                        name: `name`,
                        placeholder: h,
                        required: !0,
                        autoComplete: `name`,
                      }),
                      d(`label`, { className: `ds-sr`, htmlFor: `dsaf-email`, children: `Email` }),
                      d(`input`, {
                        id: `dsaf-email`,
                        className: `dsaf-in`,
                        type: `email`,
                        name: `email`,
                        placeholder: ee,
                        required: !0,
                        autoComplete: `email`,
                      }),
                      d(`button`, {
                        type: `submit`,
                        className: `ds-btn ds-solid dsaf-btn`,
                        "data-mag": !0,
                        children: u(`span`, {
                          className: `ds-tag`,
                          children: [
                            d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
                            d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
                            u(`span`, {
                              className: `ds-lbl`,
                              children: [
                                d(`span`, { className: `ds-l1`, children: g }),
                                d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: g }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  d(`span`, { className: `dsaf-note`, style: C, children: v }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var z,
  B,
  V,
  H,
  U,
  W,
  ye,
  G,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  K,
  De,
  q,
  Oe,
  J,
  ke,
  Ae,
  Y,
  je,
  Me = e(() => {
    (i(),
      p(),
      m(),
      x(),
      (z = `../../styles/css2-a59a76.css`),
      (B = `clamp(1280px, 92vw, 1520px)`),
      (V = (e) => {
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
      (U = (e) => {
        let t = V(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (W = (e, t, n, r) => {
        let i = e ? U(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (ye = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
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
      (be = (e) => ({
        bone: e.bone || G.bone,
        ink: e.ink || G.ink,
        brass: e.brass || G.brass,
        pine: e.pine || G.pine,
        fog: e.fog || G.fog,
        stone: e.stone || G.stone,
        cloud: e.cloud || G.cloud,
        night: e.night || G.night,
      })),
      (xe = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Se = {
        bone: { type: N.Color, title: `Paper`, defaultValue: G.bone },
        ink: { type: N.Color, title: `Ink`, defaultValue: G.ink },
        brass: { type: N.Color, title: `Accent`, defaultValue: G.brass },
        pine: { type: N.Color, title: `Deep`, defaultValue: G.pine },
        fog: { type: N.Color, title: `Line`, defaultValue: G.fog },
        stone: { type: N.Color, title: `Muted`, defaultValue: G.stone },
        cloud: { type: N.Color, title: `White`, defaultValue: G.cloud },
        night: { type: N.Color, title: `Dark`, defaultValue: G.night },
      }),
      (Ce = {
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
      (we = {
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
      (Te = `
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
      N.Boolean,
      N.Number,
      (Ee = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (K = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (De = ({
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
          "aria-label": K(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Ee(e).map((e, t) => {
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
      (q = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Oe = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${B} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (J = {
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
      (ke = `DsAffiliates@cms1`),
      (Ae = a === void 0 ? h : r),
      (Y = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (je = `
.dsaf{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(80px,9vw,140px) 0;overflow:hidden;z-index:12}
.dsaf-wrap{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(40px,6vw,100px);align-items:start}
.dsaf-l{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
.dsaf-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsaf-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsaf .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsaf .ds-it{color:var(--ds-acc)}
.dsaf-sub{margin:0;max-width:520px;font-size:16.5px;line-height:1.6;color:var(--ds-mut)}
/* steps as receipt lines */
.dsaf-steps{list-style:none;margin:10px 0 0;padding:0;width:100%;max-width:560px;display:flex;flex-direction:column;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dsaf-steps li{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr) auto;gap:14px;align-items:start;padding:18px 8px 18px 0;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dsaf-n{font-size:12px;letter-spacing:.08em;color:var(--ds-acc);padding-top:4px} .dsaf-st{display:flex;flex-direction:column;gap:5px} .dsaf-st b{font-size:clamp(18px,1.6vw,22px);line-height:1.1;font-weight:800;letter-spacing:-.02em} .dsaf-st span{font-size:14.5px;line-height:1.5;color:var(--ds-mut)}
.dsaf-tick{width:18px;height:18px;margin-top:4px;border-radius:50%;background:var(--ds-brass);position:relative} .dsaf-tick::after{content:"";position:absolute;left:6px;top:3px;width:4px;height:9px;border:solid var(--ds-ink);border-width:0 2px 2px 0;rotate:45deg}
.dsaf-terms{display:flex;flex-direction:column;gap:12px;width:100%;max-width:560px;margin-top:10px} .dsaf-tl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-mut)}
.dsaf-terms ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column} .dsaf-terms li{display:flex;align-items:baseline;gap:12px;padding:10px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent);font-size:14.5px} .dsaf-terms li:first-child{border-top:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dsaf-terms li span{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut);flex:none} .dsaf-terms li i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 30%,transparent);translate:0 -4px} .dsaf-terms li b{font-weight:600;text-align:right}
/* right: example receipt + form */
.dsaf-r{display:flex;flex-direction:column;gap:26px;position:sticky;top:96px}
.dsaf-rcpt{position:relative;display:flex;flex-direction:column;gap:8px;padding:20px 20px 30px;background:var(--ds-cloud);color:var(--ds-ink);font-size:12px;letter-spacing:.02em;rotate:-1.2deg;box-shadow:0 30px 60px -30px rgba(0,0,0,.5);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsaf-rh{display:flex;justify-content:space-between;gap:10px;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsaf-rh b{font-weight:800}
.dsaf-rl{display:flex;align-items:baseline;gap:8px;color:color-mix(in srgb,var(--ds-ink) 72%,transparent)} .dsaf-rl i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px} .dsaf-rl b{font-weight:500;color:var(--ds-ink)}
.dsaf-rate{margin-top:4px;padding-top:8px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent)} .dsaf-rate b{color:var(--ds-acc)}
.dsaf-tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:8px;padding-top:10px;border-top:2px solid var(--ds-ink);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsaf-tot em{font-style:normal;font-size:30px;font-weight:800;letter-spacing:-.02em;color:var(--ds-acc)}
.dsaf-stamp{position:absolute;right:16px;top:16px;padding:4px 10px;border:2px solid var(--ds-brass);border-radius:4px;color:var(--ds-brass);font-size:13px;font-weight:800;letter-spacing:.14em;rotate:-12deg;opacity:.9}
.dsaf-form{display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:24px 24px 26px;border-radius:14px;background:var(--ds-night);color:var(--ds-bone)}
.dsaf-ft{font-size:24px;font-weight:800;letter-spacing:-.03em} .dsaf-fc{margin:0 0 6px;font-size:14.5px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dsaf-form form{display:flex;flex-direction:column;gap:10px;width:100%}
.dsaf-in{width:100%;height:50px;padding:0 16px;border:0;border-radius:4px;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);color:var(--ds-bone);font:inherit;font-size:15px;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-bone) 24%,transparent)} .dsaf-in::placeholder{color:color-mix(in srgb,var(--ds-bone) 45%,transparent)}
.dsaf-in:focus-visible{outline:2px solid var(--ds-bone)!important;outline-offset:-2px!important;box-shadow:none!important}
.dsaf-btn{font:inherit;font-size:14px;font-weight:700;border:0;background:none;padding:0;margin-top:4px;align-self:flex-start} .dsaf-form .ds-btn.ds-solid{--fill:var(--ds-bone);--fg2:var(--ds-ink);--holefill:var(--ds-night)}
.dsaf-note{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)}
/* tablet + phone */
.dsaf.is-tab .dsaf-wrap{grid-template-columns:1fr;gap:44px} .dsaf.is-tab .dsaf-r{position:relative;top:auto;max-width:520px}
.dsaf.is-ph .dsaf-wrap{grid-template-columns:1fr;gap:34px} .dsaf.is-ph .dsaf-r{position:relative;top:auto} .dsaf.is-ph .dsaf-rcpt{rotate:0deg} .dsaf.is-ph .dsaf-steps li{grid-template-columns:32px minmax(0,1fr) auto;gap:10px} .dsaf.is-ph .dsaf-st b{font-size:17px} .dsaf.is-ph .dsaf-form{padding:20px}`),
      D(R, {
        ...we,
        eyebrow: { type: N.String, title: `Eyebrow`, defaultValue: `How it works` },
        heading: {
          type: N.String,
          title: `Heading`,
          description: `*word* = accent, | = line break`,
          defaultValue: `Share the shelf,|*keep 30%.*`,
        },
        intro: {
          type: N.String,
          title: `Intro`,
          displayTextArea: !0,
          defaultValue: `Every product page can carry your code. When someone buys within sixty days, a third of the sale is yours, paid monthly.`,
        },
        steps: {
          type: N.String,
          title: `Steps`,
          description: `Title|Detail; …`,
          displayTextArea: !0,
          defaultValue: `Share your link|Every product, bundle and course page with your code on the end.; Someone buys|Any product within 60 days of the click, on any device.; You keep 30%|Paid on the first of the month, once the balance passes $20.`,
        },
        termsLabel: { type: N.String, title: `Terms label`, defaultValue: `The terms` },
        terms: {
          type: N.String,
          title: `Terms`,
          description: `Label|Value; …`,
          displayTextArea: !0,
          defaultValue: `Commission|30% of every sale; Cookie|60 days; Payout|Monthly, by PayPal or bank; Minimum|$20 balance; Self-purchases|Not counted`,
        },
        exampleLabel: { type: N.String, title: `Example label`, defaultValue: `Worked example` },
        example: {
          type: N.String,
          title: `Example`,
          description: `Product|Price|Sales|Payout`,
          defaultValue: `Launch in 30 Days|$149|10 sales|$447`,
        },
        toYouLabel: { type: N.String, title: `Payout label`, defaultValue: `To you` },
        formTitle: { type: N.String, title: `Form title`, defaultValue: `Join the programme` },
        formCopy: {
          type: N.String,
          title: `Form copy`,
          displayTextArea: !0,
          defaultValue: `Tell us where you'll share it. We reply within a day with your link and a folder of covers.`,
        },
        namePlaceholder: { type: N.String, title: `Name placeholder`, defaultValue: `Your name` },
        emailPlaceholder: {
          type: N.String,
          title: `Email placeholder`,
          defaultValue: `you@studio.com`,
        },
        button: { type: N.String, title: `Button`, defaultValue: `Get my link` },
        formAction: {
          type: N.String,
          title: `Form action`,
          description: `Where the form goes on submit (a page, or your email tool's form URL)`,
          defaultValue: `/thank-you`,
        },
        note: { type: N.String, title: `Note`, defaultValue: `No minimum audience. No fees.` },
        ...Se,
        ...Ce,
      }));
  }),
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  X,
  Re,
  ze,
  Z,
  Be,
  Ve,
  Q,
  $;
e(() => {
  (p(),
    x(),
    v(),
    m(),
    Me(),
    re(),
    te(),
    oe(),
    (Ne = M(ie)),
    (Pe = M(R)),
    (Fe = M(ne)),
    (Ie = {
      jOCMlYAE6: `(min-width: 1200px)`,
      O3kZKG4aM: `(min-width: 810px) and (max-width: 1199.98px)`,
      sfW7WhnVH: `(max-width: 809.98px)`,
    }),
    (Le = []),
    (X = `framer-Rxy5S`),
    (Re = {
      jOCMlYAE6: `framer-v-17t0zcg`,
      O3kZKG4aM: `framer-v-yojnrg`,
      sfW7WhnVH: `framer-v-m43c28`,
    }),
    (ze = (e, t, n) => (e && t ? `position` : n)),
    (Z = { Desktop: `jOCMlYAE6`, Phone: `sfW7WhnVH`, Tablet: `O3kZKG4aM` }),
    (Be = ({ value: e }) =>
      S()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ve = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `jOCMlYAE6`,
    })),
    (Q = E(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = k();
        P();
        let { style: p, className: m, layoutId: h, variant: v, ...y } = Ve(e);
        F(l(() => ae({}, c), [c]));
        let [x, S] = w(v, Ie, !1),
          E = b(X),
          D = t(O)?.isLayoutTemplate,
          M = !!t(ee)?.transition?.layout,
          N = ze(D, M);
        return (
          C({}),
          d(O.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: Z,
              primaryVariantId: `jOCMlYAE6`,
              variantClassNames: Re,
            },
            children: u(_, {
              id: h ?? o,
              children: [
                d(Be, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(g.div, {
                  ...y,
                  className: b(E, `framer-17t0zcg`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(g.div, {
                      className: `framer-1cxh7py`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: N,
                      children: d(j, {
                        children: d(T, {
                          className: `framer-23ia9a-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `tZQc4jTiR`,
                          scopeId: `weqlf_oHq`,
                          children: d(A, {
                            breakpoint: x,
                            overrides: {
                              O3kZKG4aM: { bpHint: `tablet` },
                              sfW7WhnVH: { bpHint: `phone` },
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
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, Affiliates:/affiliates`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Affiliates`,
                              facts: `30%|commission;60 days|cookie;monthly|payout`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `tZQc4jTiR`,
                              index: `09`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Share a link, earn on every order it brings, paid monthly.`,
                              layoutId: `tZQc4jTiR`,
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
                              title: `Sell the shelf,|*keep 30%.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-16e5wev`,
                      "data-framer-name": `S1 DsAffiliates`,
                      layout: N,
                      children: d(j, {
                        children: d(T, {
                          className: `framer-1sc2223-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsAffiliates`,
                          isAuthoredByUser: !0,
                          name: `DsAffiliates`,
                          nodeId: `WaoPIBX6C`,
                          scopeId: `weqlf_oHq`,
                          children: d(A, {
                            breakpoint: x,
                            overrides: {
                              O3kZKG4aM: { bpHint: `tablet` },
                              sfW7WhnVH: { bpHint: `phone` },
                            },
                            children: d(R, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Get my link`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              emailPlaceholder: `you@studio.com`,
                              example: `Launch in 30 Days|$149|10 sales|$447`,
                              exampleLabel: `Worked example`,
                              eyebrow: `How it works`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              formAction: `/thank-you`,
                              formCopy: `Tell us where you'll share it. We reply within a day with your link and a folder of covers.`,
                              formTitle: `Join the programme`,
                              heading: `Share the shelf,|*keep 30%.*`,
                              height: `100%`,
                              id: `WaoPIBX6C`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Every product page can carry your code. When someone buys within sixty days, a third of the sale is yours, paid monthly.`,
                              layoutId: `WaoPIBX6C`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsAffiliates`,
                              namePlaceholder: `Your name`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              note: `No minimum audience. No fees.`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              steps: `Share your link|Every product, bundle and course page with your code on the end.; Someone buys|Any product within 60 days of the click, on any device.; You keep 30%|Paid on the first of the month, once the balance passes $20.`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              terms: `Commission|30% of every sale; Cookie|60 days; Payout|Monthly, by PayPal or bank; Minimum|$20 balance; Self-purchases|Not counted`,
                              termsLabel: `The terms`,
                              toYouLabel: `To you`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-1o20xyq`,
                      "data-framer-name": `S2 DsReviews`,
                      layout: N,
                      children: d(j, {
                        children: d(T, {
                          className: `framer-6kp6y-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `A2y9lxmpF`,
                          scopeId: `weqlf_oHq`,
                          children: d(A, {
                            breakpoint: x,
                            overrides: {
                              O3kZKG4aM: { bpHint: `tablet` },
                              sfW7WhnVH: { bpHint: `phone` },
                            },
                            children: d(ne, {
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
                              id: `A2y9lxmpF`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `A2y9lxmpF`,
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
        `.framer-Rxy5S.framer-e4omya, .framer-Rxy5S .framer-e4omya { display: block; }`,
        `.framer-Rxy5S.framer-17t0zcg { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Rxy5S .framer-1cxh7py, .framer-Rxy5S .framer-16e5wev, .framer-Rxy5S .framer-1o20xyq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Rxy5S .framer-23ia9a-container, .framer-Rxy5S .framer-1sc2223-container, .framer-Rxy5S .framer-6kp6y-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Rxy5S.framer-17t0zcg { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-Rxy5S.framer-17t0zcg { width: 390px; }}`,
      ],
      `framer-Rxy5S`
    )),
    (Q.displayName = `Affiliates`),
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
        ...Ne,
        ...Pe,
        ...Fe,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerweqlf_oHq`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `1080`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"O3kZKG4aM":{"layout":["fixed","auto"]},"sfW7WhnVH":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Le as queryParamNames };
//# sourceMappingURL=qXys29oma5mgbMFp8pKlx-NfqhbLMT5aTUWqOJmLCBg.lA4ZwSMS.mjs.map
