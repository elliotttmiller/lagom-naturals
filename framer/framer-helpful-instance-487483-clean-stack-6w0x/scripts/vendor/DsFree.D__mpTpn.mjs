import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  R as r,
  _ as i,
  b as a,
  c as o,
  l as s,
  o as c,
  s as l,
  w as u,
  y as d,
} from "./react.iNMCLRE-.mjs";
import { $ as f, P as p, b as m, o as h, v as g } from "./framer.BNAppio8.mjs";
function _() {
  d(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = D), document.head.appendChild(e));
  }, []);
}
function v() {
  let e = f(),
    t = null;
  try {
    t = g.current();
  } catch {}
  return e || (t !== null && t !== g.preview);
}
function y() {
  let e = f(),
    [t, n] = i(!1);
  return (
    d(() => {
      !e && g.current() !== g.canvas && r !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function b(e, n) {
  let a = String(n || ``).toLowerCase(),
    [o, s] = i(a === `phone` ? 390 : a === `tablet` ? 810 : 1440),
    [c, l] = i(a === `phone` ? 844 : a === `tablet` ? 1080 : 900);
  return (
    t(() => {
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
      let i = () => l(r.innerHeight);
      i();
      let a = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && s(e);
        },
        o = r.setTimeout(a, 150),
        c = r.setTimeout(a, 700),
        u = r.setTimeout(a, 1600);
      return (
        r.addEventListener(`resize`, i),
        r.addEventListener(`load`, a),
        () => {
          (n.disconnect(),
            r.clearTimeout(o),
            r.clearTimeout(c),
            r.clearTimeout(u),
            r.removeEventListener(`resize`, i),
            r.removeEventListener(`load`, a));
        }
      );
    }, []),
    { w: o, vh: c }
  );
}
function x(e, t, n) {
  if (r === void 0) return () => {};
  let i = r;
  if (!i.__dsTick) {
    i.__dsTick = { pre: new Set(), subs: new Set(), reads: new Set(), raf: 0 };
    let e = (t) => {
      let n = i.__dsTick;
      (n.pre.forEach((e) => e(t)),
        n.reads.forEach((e) => e(t)),
        n.subs.forEach((e) => e(t)),
        (n.raf = requestAnimationFrame(e)));
    };
    i.__dsTick.raf = requestAnimationFrame(e);
  }
  return (
    i.__dsTick.subs.add(e),
    t && i.__dsTick.reads.add(t),
    n && i.__dsTick.pre.add(n),
    () => {
      (i.__dsTick.subs.delete(e), t && i.__dsTick.reads.delete(t), n && i.__dsTick.pre.delete(n));
    }
  );
}
function S(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: M(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? A(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: M(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? A(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: M(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? A(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function C(e, t) {
  d(() => {
    if (!t || !e.current || !r.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
    let n = e.current,
      i = () => Array.from(n.querySelectorAll(`[data-mag]`)),
      a = (e) => {
        for (let t of i()) {
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
        for (let e of i()) (e.style.setProperty(`--mx`, `0px`), e.style.setProperty(`--my`, `0px`));
      };
    return (
      n.addEventListener(`pointermove`, a),
      n.addEventListener(`pointerleave`, o),
      () => {
        (n.removeEventListener(`pointermove`, a), n.removeEventListener(`pointerleave`, o));
      }
    );
  }, [t]);
}
function w(e) {
  let [t, n] = i(!1);
  return (
    d(() => {
      if (!e) return;
      let t = document.documentElement,
        i = () => !/(^|\s)ds-hold/.test(t.className);
      if (i()) {
        n(!0);
        return;
      }
      let a = new MutationObserver(() => {
        i() && (a.disconnect(), n(!0));
      });
      a.observe(t, { attributes: !0, attributeFilter: [`class`] });
      let o = r.setTimeout(() => {
        (a.disconnect(), n(!0));
      }, 9e3);
      return () => {
        (a.disconnect(), r.clearTimeout(o));
      };
    }, [e]),
    t
  );
}
function T(e, t, n, a = 0.16) {
  let [o, s] = i(!1),
    c = v(),
    l = w(t);
  return (
    d(() => {
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
              (o = x(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            a,
            Math.max(0.005, (r.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
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
    o || c
  );
}
function E(e) {
  let {
      eyebrow: t = `Free download`,
      heading: n = `The pricing guide,|*on the house.*`,
      subCopy:
        r = `Forty pages on pricing digital products: ladders, anchors, bundles and the emails that sold them. One email, the file, no drip.`,
      bookTitle: i = `Pricing Digital Products`,
      bookSub: o = `40 pages · PDF + EPUB`,
      bookKind: l = `Free guide`,
      freeLabel: u = `Free`,
      placeholder: f = `you@studio.com`,
      button: p = `Send me the guide`,
      formAction: m = `/thank-you`,
      note: h = `No spam. One email with the file.`,
      bpHint: g = `auto`,
    } = e,
    w = F(e),
    { D: E, B: O, M: k } = S(e);
  _();
  let A = y(),
    j = N(),
    M = v(),
    P = a(null),
    L = a(null),
    { w: R } = b(P, g),
    z = T(P, A, j);
  C(P, A);
  let V = R < 810,
    q = R >= 810 && R < 1100;
  return (
    d(() => {
      if (!A || j || V || !P.current || !L.current) return;
      let e = P.current,
        t = L.current,
        n = 0,
        r = 0,
        i = 0,
        a = 0,
        o = (t) => {
          let i = e.getBoundingClientRect();
          ((n = (t.clientX - i.left) / i.width - 0.5), (r = (t.clientY - i.top) / i.height - 0.5));
        },
        s = () => {
          ((n = 0), (r = 0));
        };
      (e.addEventListener(`pointermove`, o), e.addEventListener(`pointerleave`, s));
      let c = x(() => {
        ((i += (n - i) * 0.08),
          (a += (r - a) * 0.08),
          (t.style.transform = `rotateX(${(8 - a * 14).toFixed(2)}deg) rotateY(${(-22 + i * 26).toFixed(2)}deg)`));
      });
      return () => {
        (c(), e.removeEventListener(`pointermove`, o), e.removeEventListener(`pointerleave`, s));
      };
    }, [A, j, V]),
    s(`section`, {
      ref: P,
      className: `ds ds-sec ds-cut-t dsfr${z ? ` is-on` : ``}${V ? ` is-ph` : q ? ` is-tab` : ``}${M ? ` is-still` : ``}`,
      style: { ...I(w), ...O, ...e.style, "--cut": V ? `8vw` : `5vw` },
      "aria-label": H(n),
      children: [
        c(`link`, { rel: `stylesheet`, href: D }),
        c(`style`, { dangerouslySetInnerHTML: { __html: B + G + K } }),
        s(`div`, {
          className: `ds-wrap dsfr-wrap`,
          children: [
            s(`div`, {
              className: `dsfr-scene`,
              "aria-hidden": !0,
              style: W(z, 200, 40),
              children: [
                s(`div`, {
                  className: `dsfr-book`,
                  ref: L,
                  children: [
                    s(`span`, {
                      className: `dsfr-face f`,
                      children: [
                        c(`span`, { className: `dsfr-kind`, style: k, children: l }),
                        c(`b`, { style: E, children: i }),
                        c(`i`, { style: k, children: o }),
                        s(`span`, {
                          className: `dsfr-bc`,
                          children: [
                            c(`i`, {}),
                            c(`i`, {}),
                            c(`i`, {}),
                            c(`i`, {}),
                            c(`i`, {}),
                            c(`i`, {}),
                            c(`i`, {}),
                            c(`i`, {}),
                          ],
                        }),
                      ],
                    }),
                    c(`span`, {
                      className: `dsfr-face s`,
                      children: c(`b`, { style: E, children: i }),
                    }),
                    c(`span`, { className: `dsfr-face t` }),
                    c(`span`, { className: `dsfr-face p` }),
                    c(`span`, { className: `dsfr-sticker`, style: E, children: u }),
                  ],
                }),
                c(`span`, { className: `dsfr-shadow` }),
              ],
            }),
            s(`div`, {
              className: `dsfr-copy`,
              children: [
                s(`p`, {
                  className: `dsfr-eb`,
                  style: { ...k, ...W(z, 0) },
                  children: [c(`i`, { "aria-hidden": !0 }), t],
                }),
                c(U, {
                  text: n,
                  on: z,
                  D: E,
                  size: V ? `clamp(38px,11vw,52px)` : `clamp(42px,4.6vw,72px)`,
                  lh: 0.96,
                  delay: 80,
                }),
                c(`p`, { className: `dsfr-sub`, style: W(z, 240), children: r }),
                s(`form`, {
                  className: `dsfr-form`,
                  action: m,
                  method: `get`,
                  style: W(z, 340),
                  onSubmit: (e) => {
                    m || e.preventDefault();
                  },
                  children: [
                    c(`label`, { className: `ds-sr`, htmlFor: `dsfr-email`, children: `Email` }),
                    c(`input`, {
                      id: `dsfr-email`,
                      className: `dsfr-in`,
                      type: `email`,
                      name: `email`,
                      placeholder: f,
                      required: !0,
                      autoComplete: `email`,
                    }),
                    c(`button`, {
                      type: `submit`,
                      className: `ds-btn ds-solid dsfr-btn`,
                      "data-mag": !0,
                      children: s(`span`, {
                        className: `ds-tag`,
                        children: [
                          c(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
                          c(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
                          s(`span`, {
                            className: `ds-lbl`,
                            children: [
                              c(`span`, { className: `ds-l1`, children: p }),
                              c(`span`, { className: `ds-l2`, "aria-hidden": !0, children: p }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                c(`p`, { className: `dsfr-note`, style: { ...k, ...W(z, 420) }, children: h }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (n(),
      l(),
      u(),
      p(),
      (D = `../../styles/css2-a59a76.css`),
      (O = `clamp(1280px, 92vw, 1520px)`),
      (k = (e) => {
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
      (A = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (j = (e) => {
        let t = k(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (M = (e, t, n, r) => {
        let i = e ? j(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (N = () => {
        let [e, n] = i(!1);
        return (
          t(() => {
            n(r.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (P = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (F = (e) => ({
        bone: e.bone || P.bone,
        ink: e.ink || P.ink,
        brass: e.brass || P.brass,
        pine: e.pine || P.pine,
        fog: e.fog || P.fog,
        stone: e.stone || P.stone,
        cloud: e.cloud || P.cloud,
        night: e.night || P.night,
      })),
      (I = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (L = {
        bone: { type: h.Color, title: `Paper`, defaultValue: P.bone },
        ink: { type: h.Color, title: `Ink`, defaultValue: P.ink },
        brass: { type: h.Color, title: `Accent`, defaultValue: P.brass },
        pine: { type: h.Color, title: `Deep`, defaultValue: P.pine },
        fog: { type: h.Color, title: `Line`, defaultValue: P.fog },
        stone: { type: h.Color, title: `Muted`, defaultValue: P.stone },
        cloud: { type: h.Color, title: `White`, defaultValue: P.cloud },
        night: { type: h.Color, title: `Dark`, defaultValue: P.night },
      }),
      (R = {
        customFonts: {
          type: h.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: h.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: h.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: h.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (z = {
        bpHint: {
          type: h.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (B = `
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
      h.Boolean,
      h.Number,
      (V = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (H = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (U = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: l = 0,
        step: u = 55,
        style: d,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return c(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": H(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(d || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              c(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: V(e).map((e, t) => {
                    let n = l + m++ * u;
                    return s(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          c(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? s(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    c(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: c(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : s(o, { children: [e.t, e.tail] }),
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
      (W = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (G = `
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
      (K = `
.dsfr{position:relative;background:var(--ds-brass);color:var(--ds-ink);padding-bottom:clamp(80px,9vw,130px);overflow:clip;z-index:13}
.dsfr::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 70% at 15% 100%,rgba(255,255,255,.22),transparent 60%),linear-gradient(180deg,rgba(0,0,0,.06),transparent 30%);pointer-events:none}
.dsfr-wrap{position:relative;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(40px,6vw,100px);align-items:center;padding-top:clamp(50px,5vw,70px)}
.dsfr-scene{position:relative;min-height:420px;display:grid;place-items:center;perspective:1400px}
.dsfr-book{position:relative;width:250px;height:340px;transform-style:preserve-3d;transform:rotateX(8deg) rotateY(-22deg);--d:30px}
.dsfr-face{position:absolute;left:50%;top:50%;translate:-50% -50%;width:250px;height:340px;background:var(--ds-ink);color:var(--ds-bone)}
.dsfr-face.f{transform:translateZ(calc(var(--d)/2));display:flex;flex-direction:column;justify-content:flex-end;gap:6px;padding:24px;border-radius:3px 8px 8px 3px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 40px 80px -30px rgba(0,0,0,.6);background:linear-gradient(160deg,color-mix(in srgb,var(--ds-ink) 80%,var(--ds-brass)),var(--ds-ink) 55%)}
.dsfr-face.f::before{content:"";position:absolute;left:14px;top:0;bottom:0;width:1px;background:rgba(255,255,255,.12)}
.dsfr-kind{position:absolute;left:24px;top:22px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--ds-brass)}
.dsfr-face.f b{font-size:30px;line-height:1;font-weight:800;letter-spacing:-.03em;text-wrap:balance} .dsfr-face.f i{font-style:normal;font-size:10px;letter-spacing:.12em;text-transform:uppercase;opacity:.7}
.dsfr-bc{position:absolute;right:22px;top:22px;display:flex;gap:2px;height:14px;opacity:.5} .dsfr-bc i{display:block;width:2px;height:100%;background:var(--ds-bone)} .dsfr-bc i:nth-child(2n){width:3px} .dsfr-bc i:nth-child(3n){width:1px}
.dsfr-face.s{width:var(--d);transform:rotateY(-90deg) translateZ(125px);background:color-mix(in srgb,var(--ds-ink) 70%,#000);display:flex;align-items:center;justify-content:center;overflow:hidden} .dsfr-face.s b{writing-mode:vertical-rl;transform:rotate(180deg);font-size:12px;letter-spacing:.06em;white-space:nowrap;color:var(--ds-bone);opacity:.8}
.dsfr-face.t{height:var(--d);transform:rotateX(90deg) translateZ(170px);background:repeating-linear-gradient(180deg,#F1E9DA 0 1px,#D9D0C0 1px 2px)}
.dsfr-face.p{width:var(--d);transform:rotateY(90deg) translateZ(125px);background:repeating-linear-gradient(90deg,#F1E9DA 0 1px,#D9D0C0 1px 2px)}
.dsfr-sticker{position:absolute;right:-22px;top:-18px;z-index:3;display:grid;place-items:center;width:76px;height:76px;border-radius:50%;background:var(--ds-bone);color:var(--ds-ink);font-size:15px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;rotate:12deg;box-shadow:0 14px 30px -10px rgba(0,0,0,.5);transform:translateZ(40px);clip-path:polygon(50% 0,61% 9%,75% 5%,82% 17%,96% 20%,95% 34%,100% 50%,95% 66%,96% 80%,82% 83%,75% 95%,61% 91%,50% 100%,39% 91%,25% 95%,18% 83%,4% 80%,5% 66%,0 50%,5% 34%,4% 20%,18% 17%,25% 5%,39% 9%)}
.dsfr-shadow{position:absolute;left:50%;bottom:8%;width:260px;height:40px;translate:-50% 0;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.4),transparent 70%);filter:blur(6px)}
/* copy + form */
.dsfr-copy{display:flex;flex-direction:column;align-items:flex-start;gap:20px}
.dsfr-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-ink)} .dsfr-eb i{width:22px;height:2px;background:var(--ds-ink);border-radius:2px}
.dsfr .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsfr .ds-it{color:var(--ds-bone)}
.dsfr-sub{margin:0;max-width:520px;font-size:16.5px;line-height:1.6;color:color-mix(in srgb,var(--ds-ink) 80%,transparent)}
.dsfr-form{display:flex;gap:10px;width:100%;max-width:560px;margin-top:6px;flex-wrap:wrap}
.dsfr-in{flex:1;min-width:220px;height:50px;padding:0 18px;border:0;border-radius:4px;background:var(--ds-bone);color:var(--ds-ink);font:inherit;font-size:15px;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 20%,transparent)} .dsfr-in::placeholder{color:var(--ds-mut)}
.dsfr-in:focus-visible{outline:3px solid var(--ds-ink)!important;outline-offset:2px!important;box-shadow:none!important}
.dsfr-btn{font:inherit;font-size:14px;font-weight:700;border:0;background:none;padding:0} .dsfr .ds-btn.ds-solid{--face:var(--ds-ink);--fg:var(--ds-bone);--fg2:var(--ds-ink);--fill:var(--ds-bone);--holefill:var(--ds-brass);--rim2:rgba(0,0,0,.4)}
.dsfr-note{margin:0;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-ink) 88%,transparent)}
.dsfr.is-tab .dsfr-wrap{grid-template-columns:1fr;gap:30px} .dsfr.is-tab .dsfr-scene{min-height:400px}
.dsfr.is-ph .dsfr-wrap{grid-template-columns:1fr;gap:20px;padding-top:40px} .dsfr.is-ph .dsfr-scene{min-height:330px} .dsfr.is-ph .dsfr-book{width:190px;height:260px;transform:rotateX(6deg) rotateY(-18deg)} .dsfr.is-ph .dsfr-face{width:190px;height:260px} .dsfr.is-ph .dsfr-face.f b{font-size:22px} .dsfr.is-ph .dsfr-face.s{transform:rotateY(-90deg) translateZ(95px)} .dsfr.is-ph .dsfr-face.p{transform:rotateY(90deg) translateZ(95px)} .dsfr.is-ph .dsfr-face.t{transform:rotateX(90deg) translateZ(130px)}
.dsfr.is-ph .dsfr-form{flex-direction:column} .dsfr.is-ph .dsfr-in{width:100%}`),
      m(E, {
        ...z,
        eyebrow: { type: h.String, title: `Eyebrow`, defaultValue: `Free download` },
        heading: {
          type: h.String,
          title: `Heading`,
          defaultValue: `The pricing guide,|*on the house.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: h.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Forty pages on pricing digital products: ladders, anchors, bundles and the emails that sold them. One email, the file, no drip.`,
        },
        bookTitle: {
          type: h.String,
          title: `Book title`,
          defaultValue: `Pricing Digital Products`,
        },
        bookSub: { type: h.String, title: `Book line`, defaultValue: `40 pages · PDF + EPUB` },
        bookKind: { type: h.String, title: `Book kind`, defaultValue: `Free guide` },
        freeLabel: { type: h.String, title: `Sticker`, defaultValue: `Free` },
        placeholder: { type: h.String, title: `Placeholder`, defaultValue: `you@studio.com` },
        button: { type: h.String, title: `Button`, defaultValue: `Send me the guide` },
        formAction: {
          type: h.String,
          title: `Form action`,
          description: `Where the form goes on submit (a page, or your email tool's form URL)`,
          defaultValue: `/thank-you`,
        },
        note: { type: h.String, title: `Note`, defaultValue: `No spam. One email with the file.` },
        ...L,
        ...R,
      }));
  });
export { q as n, E as t };
//# sourceMappingURL=DsFree.D__mpTpn.mjs.map
