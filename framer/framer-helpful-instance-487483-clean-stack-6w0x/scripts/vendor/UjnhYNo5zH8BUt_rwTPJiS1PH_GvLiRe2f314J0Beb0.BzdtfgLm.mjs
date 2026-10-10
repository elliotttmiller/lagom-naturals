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
import { a as ee, k as g, r as te, t as _ } from "./motion.dK94hszq.mjs";
import {
  $ as v,
  C as y,
  P as b,
  Q as ne,
  X as re,
  Z as x,
  a as ie,
  at as S,
  b as ae,
  c as C,
  et as oe,
  g as w,
  i as T,
  k as E,
  o as D,
  q as se,
  tt as O,
  v as k,
  y as ce,
} from "./framer.BNAppio8.mjs";
import { n as A, t as j } from "./DsFaq.BS2R3ms-.mjs";
import M, { t as N } from "./u8ksqEJMF_JOIovtOL45JXPG3T5610FGM9xtQAsGQyE.DKG1s04Z.mjs";
function le() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = I), document.head.appendChild(e));
  }, []);
}
function ue() {
  let e = v(),
    t = null;
  try {
    t = k.current();
  } catch {}
  return e || (t !== null && t !== k.preview);
}
function de() {
  let e = v(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && k.current() !== k.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function fe(e, t) {
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
function pe(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: V(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? z(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: V(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? z(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: V(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? z(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function me(e, t) {
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
function he(e) {
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
function P(e) {
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
function ge(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Ee(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Y] = 1));
      } catch {}
      let s = () => {
          let t = P(e);
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
function _e() {
  let e = ge(`site`, J.site || [])[0] || (J.site || [])[0] || {},
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
function F(e) {
  let {
      eyebrow: t = `Contact`,
      heading: n = `Write to|*the counter.*`,
      intro:
        r = `Order help, licence questions, a bundle for your team. Real replies, usually the same day.`,
      cardTitle: i = `The studio`,
      replyLine: l = `We reply within one working day.`,
      timeLabel: f = `Local time`,
      socialsLabel: p = `Elsewhere`,
      subjectLabel: m = `Subject`,
      subjects: ee = `Order help; Licence question; Bundle for a team; Something else`,
      orderLabel: g = `Order number`,
      orderPlaceholder: te = `e.g. #1042 (optional)`,
      nameLabel: _ = `Your name`,
      namePlaceholder: v = `Mara Lindqvist`,
      emailLabel: y = `Email`,
      emailPlaceholder: b = `you@studio.com`,
      messageLabel: ne = `Message`,
      messagePlaceholder: re = `What can we help with?`,
      button: x = `Send the message`,
      endpoint: ie = ``,
      sendingLabel: S = `Sending…`,
      successTitle: ae = `Message printed.`,
      successCopy: C = `Thanks {name}. We reply to {email} within one working day.`,
      errorCopy: oe = `That did not go through. Email us directly and we will sort it out.`,
      againLabel: w = `Send another`,
      bpHint: T = `auto`,
    } = e,
    E = ye(e),
    { D, B: se, M: O } = pe(e);
  le();
  let k = de(),
    ce = ve(),
    A = ue(),
    j = _e(),
    M = s(null),
    { w: N } = fe(M, T);
  me(M, k);
  let P = he(k),
    [ge, F] = o(!1);
  h(() => {
    if (!k || !P) return;
    let e = a.setTimeout(() => F(!0), 100);
    return () => a.clearTimeout(e);
  }, [k, P]);
  let L = ge || A || ce,
    R = N < 810,
    z = N >= 810 && N < 1100,
    B = j.name || `Shelfline`,
    V = Oe(ee),
    H = De(j.socials || ``),
    [U, W] = o(V[0] || ``),
    [G, K] = o({ order: ``, name: ``, email: ``, message: `` }),
    [J, Y] = o(`idle`);
  h(() => {
    if (k)
      try {
        let e = new URLSearchParams(a.location.search).get(`subject`);
        if (e) {
          let t = V.find((t) => t.toLowerCase().includes(e.toLowerCase()));
          t && W(t);
        }
      } catch {}
  }, [k]);
  let [Ee, X] = o(`--:--`);
  h(() => {
    if (!k) return;
    let e = () => {
      try {
        X(
          new Intl.DateTimeFormat(`en-GB`, {
            hour: `2-digit`,
            minute: `2-digit`,
            timeZone: j.tz || `Europe/Lisbon`,
          }).format(new Date())
        );
      } catch {
        let e = new Date();
        X(`${ke(e.getHours())}:${ke(e.getMinutes())}`);
      }
    };
    e();
    let t = a.setInterval(e, 15e3);
    return () => a.clearInterval(t);
  }, [k, j.tz]);
  let Z = (e) => (t) => K({ ...G, [e]: t.target.value }),
    je = async (e) => {
      e.preventDefault();
      let t = String(ie || ``).trim();
      if (!t) {
        let e = `${m}: ${U}
${g}: ${G.order}
${_}: ${G.name}
${y}: ${G.email}

${G.message}`;
        a.location.href = `mailto:${j.email || ``}?subject=${encodeURIComponent(`${U} — ${B}`)}&body=${encodeURIComponent(e)}`;
        return;
      }
      Y(`sending`);
      try {
        let e = await fetch(t, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({
            subject: U,
            order: G.order,
            name: G.name,
            email: G.email,
            message: G.message,
            page: a.location.href,
          }),
        });
        Y(e.ok ? `ok` : `err`);
      } catch {
        Y(`err`);
      }
    },
    Me = J === `ok`,
    Ne = String(C)
      .replace(`{name}`, G.name || ``)
      .replace(`{email}`, G.email || ``);
  return u(`section`, {
    ref: M,
    className: `ds ds-sec dsct${L ? ` is-on` : ``}${R ? ` is-ph` : z ? ` is-tab` : ``}${A ? ` is-still` : ``}`,
    style: { ...be(E), ...se, ...e.style },
    "aria-label": q(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: I }),
      d(`style`, { dangerouslySetInnerHTML: { __html: xe + Te + Ae } }),
      u(`div`, {
        className: `ds-wrap dsct-wrap`,
        children: [
          u(`div`, {
            className: `dsct-side ds-dark`,
            style: we(L, 0, 30),
            children: [
              u(`p`, {
                className: `dsct-eb`,
                style: O,
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(Ce, {
                text: n,
                on: L,
                D,
                tag: `h1`,
                size: R ? `clamp(36px,10.5vw,50px)` : `clamp(40px,4vw,62px)`,
                lh: 0.96,
                delay: 80,
              }),
              d(`p`, { className: `dsct-intro`, children: r }),
              u(`div`, {
                className: `dsct-card`,
                children: [
                  d(`span`, { className: `dsct-cl`, style: O, children: i }),
                  d(`b`, { className: `dsct-brand`, style: D, children: B }),
                  j.tagline && d(`p`, { className: `dsct-tag`, children: j.tagline }),
                  j.email &&
                    d(`a`, {
                      className: `dsct-mail`,
                      href: `mailto:${j.email}`,
                      style: O,
                      children: j.email,
                    }),
                  u(`span`, {
                    className: `dsct-time`,
                    style: O,
                    children: [
                      d(`i`, { "aria-hidden": !0 }),
                      f,
                      j.city ? ` \xb7 ${j.city}` : ``,
                      ` `,
                      d(`b`, { children: Ee }),
                    ],
                  }),
                  d(`span`, { className: `dsct-reply`, style: O, children: l }),
                  H.length > 0 &&
                    u(`span`, {
                      className: `dsct-soc`,
                      children: [
                        d(`span`, { style: O, children: p }),
                        H.map((e, t) =>
                          d(
                            `a`,
                            {
                              href: e.h,
                              target: `_blank`,
                              rel: `noreferrer`,
                              style: O,
                              children: e.l,
                            },
                            t
                          )
                        ),
                      ],
                    }),
                ],
              }),
            ],
          }),
          d(`div`, {
            className: `dsct-main`,
            style: we(L, 160, 30),
            children: Me
              ? u(`div`, {
                  className: `dsct-done`,
                  role: `status`,
                  "aria-live": `polite`,
                  children: [
                    u(`span`, {
                      className: `dsct-dh`,
                      style: O,
                      children: [d(`b`, { children: B.toUpperCase() }), d(`span`, { children: U })],
                    }),
                    d(`b`, { className: `dsct-dt`, style: D, children: ae }),
                    d(`p`, { children: Ne }),
                    u(`button`, {
                      type: `button`,
                      className: `dsct-again`,
                      style: O,
                      onClick: () => {
                        (Y(`idle`), K({ order: ``, name: ``, email: ``, message: `` }));
                      },
                      children: [w, d(Se, { s: 12 })],
                    }),
                    d(`span`, {
                      className: `dsct-stamp`,
                      style: D,
                      "aria-hidden": !0,
                      children: `Sent`,
                    }),
                  ],
                })
              : u(`form`, {
                  className: `dsct-form`,
                  onSubmit: je,
                  noValidate: !1,
                  children: [
                    u(`div`, {
                      className: `dsct-row`,
                      children: [
                        u(`label`, {
                          className: `dsct-f`,
                          children: [
                            d(`span`, { style: O, children: m }),
                            u(`span`, {
                              className: `dsct-sel`,
                              children: [
                                d(`select`, {
                                  value: U,
                                  onChange: (e) => W(e.target.value),
                                  required: !0,
                                  children: V.map((e) => d(`option`, { value: e, children: e }, e)),
                                }),
                                d(`i`, { "aria-hidden": !0 }),
                              ],
                            }),
                          ],
                        }),
                        u(`label`, {
                          className: `dsct-f`,
                          children: [
                            d(`span`, { style: O, children: g }),
                            d(`input`, {
                              type: `text`,
                              name: `order`,
                              value: G.order,
                              onChange: Z(`order`),
                              placeholder: te,
                              autoComplete: `off`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    u(`div`, {
                      className: `dsct-row`,
                      children: [
                        u(`label`, {
                          className: `dsct-f`,
                          children: [
                            d(`span`, { style: O, children: _ }),
                            d(`input`, {
                              type: `text`,
                              name: `name`,
                              value: G.name,
                              onChange: Z(`name`),
                              placeholder: v,
                              required: !0,
                              autoComplete: `name`,
                            }),
                          ],
                        }),
                        u(`label`, {
                          className: `dsct-f`,
                          children: [
                            d(`span`, { style: O, children: y }),
                            d(`input`, {
                              type: `email`,
                              name: `email`,
                              value: G.email,
                              onChange: Z(`email`),
                              placeholder: b,
                              required: !0,
                              autoComplete: `email`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    u(`label`, {
                      className: `dsct-f`,
                      children: [
                        d(`span`, { style: O, children: ne }),
                        d(`textarea`, {
                          name: `message`,
                          rows: 6,
                          value: G.message,
                          onChange: Z(`message`),
                          placeholder: re,
                          required: !0,
                        }),
                      ],
                    }),
                    J === `err` &&
                      u(`p`, {
                        className: `dsct-err`,
                        role: `alert`,
                        children: [
                          oe,
                          j.email
                            ? u(c, {
                                children: [
                                  ` `,
                                  d(`a`, { href: `mailto:${j.email}`, children: j.email }),
                                ],
                              })
                            : null,
                        ],
                      }),
                    d(`div`, {
                      className: `dsct-foot`,
                      children: d(`button`, {
                        type: `submit`,
                        className: `ds-btn ds-solid dsct-btn`,
                        "data-mag": !0,
                        disabled: J === `sending`,
                        children: u(`span`, {
                          className: `ds-tag`,
                          children: [
                            d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
                            d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
                            u(`span`, {
                              className: `ds-lbl`,
                              children: [
                                d(`span`, {
                                  className: `ds-l1`,
                                  children: J === `sending` ? S : x,
                                }),
                                d(`span`, {
                                  className: `ds-l2`,
                                  "aria-hidden": !0,
                                  children: J === `sending` ? S : x,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
var I,
  L,
  R,
  z,
  B,
  V,
  ve,
  H,
  ye,
  be,
  U,
  W,
  G,
  xe,
  Se,
  K,
  q,
  Ce,
  we,
  Te,
  J,
  Y,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  X = e(() => {
    (i(),
      p(),
      m(),
      b(),
      (I = `../../styles/css2-a59a76.css`),
      (L = `clamp(1280px, 92vw, 1520px)`),
      (R = (e) => {
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
      (z = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (B = (e) => {
        let t = R(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (V = (e, t, n, r) => {
        let i = e ? B(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (ve = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (H = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (ye = (e) => ({
        bone: e.bone || H.bone,
        ink: e.ink || H.ink,
        brass: e.brass || H.brass,
        pine: e.pine || H.pine,
        fog: e.fog || H.fog,
        stone: e.stone || H.stone,
        cloud: e.cloud || H.cloud,
        night: e.night || H.night,
      })),
      (be = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (U = {
        bone: { type: D.Color, title: `Paper`, defaultValue: H.bone },
        ink: { type: D.Color, title: `Ink`, defaultValue: H.ink },
        brass: { type: D.Color, title: `Accent`, defaultValue: H.brass },
        pine: { type: D.Color, title: `Deep`, defaultValue: H.pine },
        fog: { type: D.Color, title: `Line`, defaultValue: H.fog },
        stone: { type: D.Color, title: `Muted`, defaultValue: H.stone },
        cloud: { type: D.Color, title: `White`, defaultValue: H.cloud },
        night: { type: D.Color, title: `Dark`, defaultValue: H.night },
      }),
      (W = {
        customFonts: {
          type: D.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: D.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: D.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: D.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (G = {
        bpHint: {
          type: D.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (xe = `
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
      (Se = ({ s: e = 15 }) =>
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
      D.Boolean,
      D.Number,
      (K = (e) =>
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
      (Ce = ({
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
                  children: K(e).map((e, t) => {
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
      (we = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Te = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${L} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Y = `DsContact@cms1`),
      (Ee = a === void 0 ? h : r),
      (De = (e) =>
        String(e || ``)
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) => {
            let t = e.indexOf(`:`);
            return { l: t < 0 ? e : e.slice(0, t).trim(), h: t < 0 ? `/` : e.slice(t + 1).trim() };
          })),
      (Oe = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (ke = (e) => String(e).padStart(2, `0`)),
      (Ae = `
.dsct{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(110px,12vw,160px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dsct-wrap{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(24px,3vw,44px);align-items:start}
/* studio panel */
.dsct-side{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:20px;padding:clamp(26px,3vw,44px);border-radius:20px;background:var(--ds-night);color:var(--ds-bone);overflow:hidden}
.dsct-side::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 60% at 100% 0,color-mix(in srgb,var(--ds-brass) 16%,transparent),transparent 60%);pointer-events:none}
.dsct-eb{position:relative;display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsct-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsct .ds-hd{position:relative;text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsct .ds-it{color:var(--ds-brass)}
.dsct-intro{position:relative;margin:0;max-width:420px;font-size:16px;line-height:1.6;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)}
.dsct-card{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:10px;width:100%;margin-top:10px;padding:20px 0 0;border-top:1px dashed color-mix(in srgb,var(--ds-bone) 30%,transparent)}
.dsct-cl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsct-brand{font-size:24px;font-weight:800;letter-spacing:-.02em} .dsct-tag{margin:0;font-size:14px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)}
.dsct-mail{font-size:13px;letter-spacing:.04em;color:var(--ds-bone);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--ds-bone) 35%,transparent);transition:color .3s,border-color .3s} .dsct-mail:hover{color:var(--ds-brass);border-color:var(--ds-brass)}
.dsct-time{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 80%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 20%,transparent)} .dsct-time i{width:7px;height:7px;border-radius:50%;background:var(--ds-brass);animation:dsct-blink 1.6s ease-in-out infinite} .dsct-time b{font-weight:500;color:var(--ds-bone)} @keyframes dsct-blink{50%{opacity:.3}}
.dsct-reply{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)}
.dsct-soc{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:6px;padding-top:14px;border-top:1px dashed color-mix(in srgb,var(--ds-bone) 30%,transparent);width:100%} .dsct-soc span{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)} .dsct-soc a{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:color-mix(in srgb,var(--ds-bone) 80%,transparent)} .dsct-soc a:hover{color:var(--ds-brass)}
/* form */
.dsct-main{position:relative}
.dsct-form{display:flex;flex-direction:column;gap:18px;padding:clamp(22px,3vw,40px);border-radius:20px;background:var(--ds-cloud);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 10%,transparent)}
.dsct-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.dsct-f{display:flex;flex-direction:column;gap:8px} .dsct-f>span{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-mut)}
.dsct-f input,.dsct-f textarea,.dsct-f select{width:100%;padding:0 16px;height:50px;border:0;border-radius:4px;background:var(--ds-bone);color:var(--ds-ink);font:inherit;font-size:15px;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 18%,transparent);transition:box-shadow .3s} .dsct-f textarea{height:auto;padding:14px 16px;line-height:1.5;resize:vertical;min-height:150px}
.dsct-f input::placeholder,.dsct-f textarea::placeholder{color:color-mix(in srgb,var(--ds-mut) 80%,transparent)}
.dsct-f input:focus-visible,.dsct-f textarea:focus-visible,.dsct-f select:focus-visible{outline:2px solid var(--ds-ink)!important;outline-offset:-2px!important;box-shadow:none!important}
.dsct-sel{position:relative} .dsct-sel select{appearance:none;-webkit-appearance:none;padding-right:44px;cursor:pointer} .dsct-sel i{position:absolute;right:18px;top:50%;width:8px;height:8px;margin-top:-6px;border:solid var(--ds-ink);border-width:0 2px 2px 0;rotate:45deg;pointer-events:none}
.dsct-err{margin:0;padding:12px 14px;border-radius:6px;background:color-mix(in srgb,var(--ds-brass) 14%,var(--ds-cloud));font-size:14px;line-height:1.5;color:var(--ds-ink)} .dsct-err a{color:var(--ds-acc);font-weight:600}
.dsct-foot{display:flex;justify-content:flex-start;padding-top:4px} .dsct-btn{font:inherit;font-size:14px;font-weight:700;border:0;background:none;padding:0} .dsct-btn:disabled{opacity:.6;cursor:progress}
/* success receipt */
.dsct-done{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:26px 26px 34px;background:var(--ds-cloud);color:var(--ds-ink);box-shadow:0 30px 60px -30px rgba(0,0,0,.4);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsct-dh{display:flex;gap:10px;width:100%;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)} .dsct-dh b{font-weight:500;color:var(--ds-ink)}
.dsct-dt{font-size:clamp(26px,2.6vw,36px);line-height:1;font-weight:800;letter-spacing:-.03em} .dsct-done p{margin:0;max-width:460px;font-size:15.5px;line-height:1.55;color:var(--ds-mut)}
.dsct-again{display:inline-flex;align-items:center;gap:8px;margin-top:8px;padding:0;border:0;background:none;color:var(--ds-acc);font:inherit;font-size:11px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer} .dsct-again:hover svg{translate:4px 0} .dsct-again svg{transition:translate .3s}
.dsct-stamp{position:absolute;right:22px;top:18px;padding:3px 9px;border:2px solid var(--ds-brass);border-radius:4px;color:var(--ds-brass);font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;rotate:-12deg;opacity:.9}
/* tablet + phone */
.dsct.is-tab .dsct-wrap{grid-template-columns:1fr}
.dsct.is-ph{padding-top:90px} .dsct.is-ph .dsct-wrap{grid-template-columns:1fr;gap:18px} .dsct.is-ph .dsct-side{padding:22px;border-radius:14px} .dsct.is-ph .dsct-row{grid-template-columns:1fr} .dsct.is-ph .dsct-form{padding:18px;border-radius:14px}
@media (prefers-reduced-motion:reduce){.dsct-time i{animation:none}}`),
      ae(F, {
        ...G,
        eyebrow: { type: D.String, title: `Eyebrow`, defaultValue: `Contact` },
        heading: {
          type: D.String,
          title: `Heading`,
          defaultValue: `Write to|*the counter.*`,
          description: `*word* = accent, | = line break`,
        },
        intro: {
          type: D.String,
          title: `Intro`,
          displayTextArea: !0,
          defaultValue: `Order help, licence questions, a bundle for your team. Real replies, usually the same day.`,
        },
        cardTitle: { type: D.String, title: `Card title`, defaultValue: `The studio` },
        replyLine: {
          type: D.String,
          title: `Reply line`,
          defaultValue: `We reply within one working day.`,
        },
        timeLabel: { type: D.String, title: `Time label`, defaultValue: `Local time` },
        socialsLabel: { type: D.String, title: `Socials label`, defaultValue: `Elsewhere` },
        subjectLabel: { type: D.String, title: `Subject label`, defaultValue: `Subject` },
        subjects: {
          type: D.String,
          title: `Subjects`,
          description: `Semicolon-separated`,
          defaultValue: `Order help; Licence question; Bundle for a team; Something else`,
        },
        orderLabel: { type: D.String, title: `Order label`, defaultValue: `Order number` },
        orderPlaceholder: {
          type: D.String,
          title: `Order placeholder`,
          defaultValue: `e.g. #1042 (optional)`,
        },
        nameLabel: { type: D.String, title: `Name label`, defaultValue: `Your name` },
        namePlaceholder: {
          type: D.String,
          title: `Name placeholder`,
          defaultValue: `Mara Lindqvist`,
        },
        emailLabel: { type: D.String, title: `Email label`, defaultValue: `Email` },
        emailPlaceholder: {
          type: D.String,
          title: `Email placeholder`,
          defaultValue: `you@studio.com`,
        },
        messageLabel: { type: D.String, title: `Message label`, defaultValue: `Message` },
        messagePlaceholder: {
          type: D.String,
          title: `Message placeholder`,
          defaultValue: `What can we help with?`,
        },
        button: { type: D.String, title: `Button`, defaultValue: `Send the message` },
        sendingLabel: { type: D.String, title: `Sending label`, defaultValue: `Sending…` },
        endpoint: {
          type: D.String,
          title: `Endpoint`,
          description: `A form service URL that accepts JSON POST (Formspree, Basin, your own). Empty = opens the visitor's mail app`,
          defaultValue: ``,
        },
        successTitle: { type: D.String, title: `Success title`, defaultValue: `Message printed.` },
        successCopy: {
          type: D.String,
          title: `Success copy`,
          description: `{name} and {email} are filled in`,
          displayTextArea: !0,
          defaultValue: `Thanks {name}. We reply to {email} within one working day.`,
        },
        errorCopy: {
          type: D.String,
          title: `Error copy`,
          displayTextArea: !0,
          defaultValue: `That did not go through. Email us directly and we will sort it out.`,
        },
        againLabel: { type: D.String, title: `Send again label`, defaultValue: `Send another` },
        ...U,
        ...W,
      }));
  }),
  Z,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Q,
  Le,
  Re,
  $,
  ze;
e(() => {
  (p(),
    b(),
    _(),
    m(),
    X(),
    A(),
    N(),
    (Z = E(F)),
    (je = E(j)),
    (Me = {
      JUknSZrpl: `(max-width: 809.98px)`,
      PNUxjXMei: `(min-width: 810px) and (max-width: 1199.98px)`,
      Wr4D_UJy2: `(min-width: 1200px)`,
    }),
    (Ne = []),
    (Pe = `framer-hWjvN`),
    (Fe = {
      JUknSZrpl: `framer-v-1jnv15b`,
      PNUxjXMei: `framer-v-1gt32sc`,
      Wr4D_UJy2: `framer-v-fefc6f`,
    }),
    (Ie = (e, t, n) => (e && t ? `position` : n)),
    (Q = { Desktop: `Wr4D_UJy2`, Phone: `JUknSZrpl`, Tablet: `PNUxjXMei` }),
    (Le = ({ value: e }) =>
      ne()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Re = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `Wr4D_UJy2`,
    })),
    ($ = S(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = oe();
        se();
        let { style: p, className: m, layoutId: h, variant: _, ...v } = Re(e);
        O(l(() => M({}, c), [c]));
        let [b, ne] = x(_, Me, !1),
          S = y(Pe),
          ae = t(C)?.isLayoutTemplate,
          E = !!t(ee)?.transition?.layout,
          D = Ie(ae, E);
        return (
          re({}),
          d(C.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Q,
              primaryVariantId: `Wr4D_UJy2`,
              variantClassNames: Fe,
            },
            children: u(te, {
              id: h ?? o,
              children: [
                d(Le, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(g.div, {
                  ...v,
                  className: y(S, `framer-fefc6f`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(g.div, {
                      className: `framer-qngkzg`,
                      "data-framer-name": `S0 DsContact`,
                      layout: D,
                      children: d(T, {
                        children: d(ie, {
                          className: `framer-ubq16s-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsContact`,
                          isAuthoredByUser: !0,
                          name: `DsContact`,
                          nodeId: `smcLu3HyU`,
                          scopeId: `tr5NvG9Zy`,
                          children: d(w, {
                            breakpoint: b,
                            overrides: {
                              JUknSZrpl: { bpHint: `phone` },
                              PNUxjXMei: { bpHint: `tablet` },
                            },
                            children: d(F, {
                              againLabel: `Send another`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Send the message`,
                              cardTitle: `The studio`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              emailLabel: `Email`,
                              emailPlaceholder: `you@studio.com`,
                              endpoint: ``,
                              errorCopy: `That did not go through. Email us directly and we will sort it out.`,
                              eyebrow: `Contact`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Write to|*the counter.*`,
                              height: `100%`,
                              id: `smcLu3HyU`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Order help, licence questions, a bundle for your team. Real replies, usually the same day.`,
                              layoutId: `smcLu3HyU`,
                              messageLabel: `Message`,
                              messagePlaceholder: `What can we help with?`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsContact`,
                              nameLabel: `Your name`,
                              namePlaceholder: `Mara Lindqvist`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              orderLabel: `Order number`,
                              orderPlaceholder: `e.g. #1042 (optional)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              replyLine: `We reply within one working day.`,
                              sendingLabel: `Sending…`,
                              socialsLabel: `Elsewhere`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subjectLabel: `Subject`,
                              subjects: `Order help; Licence question; Bundle for a team; Something else`,
                              successCopy: `Thanks {name}. We reply to {email} within one working day.`,
                              successTitle: `Message printed.`,
                              timeLabel: `Local time`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-1i9nuh3`,
                      "data-framer-name": `S1 DsFaq`,
                      layout: D,
                      children: d(T, {
                        children: d(ie, {
                          className: `framer-5jmn15-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFaq`,
                          isAuthoredByUser: !0,
                          name: `DsFaq`,
                          nodeId: `TbX16cH3B`,
                          scopeId: `tr5NvG9Zy`,
                          children: d(w, {
                            breakpoint: b,
                            overrides: {
                              JUknSZrpl: { bpHint: `phone` },
                              PNUxjXMei: { bpHint: `tablet` },
                            },
                            children: d(j, {
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
                              id: `TbX16cH3B`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `TbX16cH3B`,
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
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-hWjvN.framer-5m13ui, .framer-hWjvN .framer-5m13ui { display: block; }`,
        `.framer-hWjvN.framer-fefc6f { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-hWjvN .framer-qngkzg, .framer-hWjvN .framer-1i9nuh3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hWjvN .framer-ubq16s-container, .framer-hWjvN .framer-5jmn15-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-hWjvN.framer-fefc6f { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-hWjvN.framer-fefc6f { width: 390px; }}`,
      ],
      `framer-hWjvN`
    )),
    ($.displayName = `Contact`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    ce(
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
        ...Z,
        ...je,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ze = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framertr5NvG9Zy`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1080`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"PNUxjXMei":{"layout":["fixed","auto"]},"JUknSZrpl":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ze as __FramerMetadata__, $ as default, Ne as queryParamNames };
//# sourceMappingURL=UjnhYNo5zH8BUt_rwTPJiS1PH_GvLiRe2f314J0Beb0.BzdtfgLm.mjs.map
