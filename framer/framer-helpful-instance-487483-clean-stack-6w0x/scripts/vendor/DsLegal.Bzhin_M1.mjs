import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  R as r,
  _ as i,
  b as a,
  l as o,
  o as s,
  s as c,
  w as l,
  y as u,
} from "./react.iNMCLRE-.mjs";
import { $ as d, P as f, b as p, o as m, v as h } from "./framer.BNAppio8.mjs";
function g() {
  u(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = C), document.head.appendChild(e));
  }, []);
}
function _() {
  let e = d(),
    t = null;
  try {
    t = h.current();
  } catch {}
  return e || (t !== null && t !== h.preview);
}
function v() {
  let e = d(),
    [t, n] = i(!1);
  return (
    u(() => {
      !e && h.current() !== h.canvas && r !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ee(e, n) {
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
function te(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: O(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? E(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: O(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? E(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: O(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? E(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function ne(e, t) {
  u(() => {
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
function re(e) {
  let [t, n] = i(!1);
  return (
    u(() => {
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
function y(e) {
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
function b(e, t) {
  let [n, o] = i(t),
    s = a(``);
  return (
    H(() => {
      let t = 0,
        n = 0,
        i = 0;
      try {
        let e = r;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[B] = 1));
      } catch {}
      let a = () => {
          let t = y(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== s.current && ((s.current = n), o(t)), !0);
        },
        c = new MutationObserver(() => {
          a() && (i++, i > 2 && c.disconnect());
        });
      (c.observe(document.body, { childList: !0, subtree: !0 }), a() && i++);
      let l = () => {
        t++ < 30 && (a(), (n = r.setTimeout(l, 150)));
      };
      return (
        (n = r.setTimeout(l, 150)),
        () => {
          (c.disconnect(), r.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function x() {
  let e = b(`site`, z.site || [])[0] || (z.site || [])[0] || {},
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
function S(e) {
  let {
      kind: t = `licence`,
      title: n = ``,
      intro: c = ``,
      updated: l = `Updated 26 September 2026`,
      sections: d = ``,
      crumbHome: f = `Home`,
      tocLabel: p = `On this page`,
      tiersLabel: m = `Licence tiers`,
      tiers:
        h = `Personal|Included with every product|1 person, personal projects, unlimited personal sites, no client work, no resale; Commercial|Most products, see the page|1 person, client work, unlimited projects, no resale; Team|Ask for a quote|Up to 5 people, client work, unlimited projects, no resale`,
      contactLine: y = `Questions about this page? Write to`,
      bpHint: b = `auto`,
    } = e,
    S = j(e),
    { D: w, B: T, M: E } = te(e);
  g();
  let D = v(),
    O = k(),
    A = _(),
    N = x(),
    P = a(null),
    { w: F } = ee(P, b);
  ne(P, D);
  let z = re(D),
    [B, H] = i(!1);
  u(() => {
    if (!D || !z) return;
    let e = r.setTimeout(() => H(!0), 100);
    return () => r.clearTimeout(e);
  }, [D, z]);
  let K = B || A || O,
    q = F < 810,
    J = F >= 810 && F < 1100,
    Y = String(t || `licence`).toLowerCase(),
    X = W[Y] || W.licence,
    Z = V(n, X.title),
    ie = V(c, X.intro),
    Q = U(V(d, X.sections))
      .map((e) => {
        let t = e.indexOf(`|`);
        return { h: (t < 0 ? e : e.slice(0, t)).trim(), b: (t < 0 ? `` : e.slice(t + 1)).trim() };
      })
      .filter((e) => e.h),
    $ =
      Y === `licence`
        ? U(h)
            .map((e) => {
              let t = e.split(`|`).map((e) => e.trim());
              return {
                n: t[0] || ``,
                s: t[1] || ``,
                l: (t[2] || ``)
                  .split(`,`)
                  .map((e) => e.trim())
                  .filter(Boolean),
              };
            })
            .filter((e) => e.n)
        : [];
  return o(`section`, {
    ref: P,
    className: `ds ds-sec dslg${K ? ` is-on` : ``}${q ? ` is-ph` : J ? ` is-tab` : ``}${A ? ` is-still` : ``}`,
    style: { ...M(S), ...T, ...e.style },
    "aria-label": Z,
    children: [
      s(`link`, { rel: `stylesheet`, href: C }),
      s(`style`, { dangerouslySetInnerHTML: { __html: I + R + G } }),
      s(`div`, {
        className: `dslg-band ds-dark`,
        children: o(`div`, {
          className: `ds-wrap dslg-bw`,
          children: [
            o(`nav`, {
              className: `dslg-crumbs`,
              "aria-label": `Breadcrumb`,
              style: { ...E, ...L(K, 0) },
              children: [
                s(`a`, { href: `/`, children: f }),
                s(`i`, { "aria-hidden": !0 }),
                s(`span`, { children: Z }),
              ],
            }),
            s(`h1`, { className: `dslg-h1`, style: { ...w, ...L(K, 90) }, children: Z }),
            s(`p`, { className: `dslg-intro`, style: L(K, 170), children: ie }),
            s(`span`, { className: `dslg-upd`, style: { ...E, ...L(K, 230) }, children: l }),
          ],
        }),
      }),
      o(`div`, {
        className: `ds-wrap dslg-grid`,
        children: [
          o(`aside`, {
            className: `dslg-toc`,
            style: L(K, 260),
            "aria-label": p,
            children: [
              s(`span`, { className: `dslg-tl`, style: E, children: p }),
              s(`ol`, {
                style: E,
                children: Q.map((e, t) =>
                  s(
                    `li`,
                    {
                      children: o(`a`, {
                        href: `#dslg-${Y}-${t + 1}`,
                        children: [s(`span`, { children: String(t + 1).padStart(2, `0`) }), e.h],
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          }),
          o(`div`, {
            className: `dslg-main`,
            style: L(K, 320),
            children: [
              $.length > 0 &&
                o(`div`, {
                  className: `dslg-tiers`,
                  role: `table`,
                  "aria-label": m,
                  children: [
                    s(`span`, { className: `dslg-tt`, style: E, children: m }),
                    s(`div`, {
                      className: `dslg-tr`,
                      role: `row`,
                      children: $.map((e, t) =>
                        o(
                          `div`,
                          {
                            className: `dslg-tier${t === 1 ? ` is-mid` : ``}`,
                            role: `cell`,
                            children: [
                              s(`b`, { style: w, children: e.n }),
                              s(`span`, { className: `dslg-ts`, style: E, children: e.s }),
                              s(`ul`, {
                                children: e.l.map((e, t) =>
                                  o(`li`, { children: [s(`i`, { "aria-hidden": !0 }), e] }, t)
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
              Q.map((e, t) =>
                o(
                  `section`,
                  {
                    id: `dslg-${Y}-${t + 1}`,
                    className: `dslg-sec`,
                    children: [
                      s(`span`, {
                        className: `dslg-n`,
                        style: E,
                        children: String(t + 1).padStart(2, `0`),
                      }),
                      o(`div`, {
                        children: [
                          s(`h2`, { style: w, children: e.h }),
                          e.b.split(/\n\s*\n/).map((e, t) => s(`p`, { children: e.trim() }, t)),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
              N.email &&
                o(`p`, {
                  className: `dslg-contact`,
                  style: E,
                  children: [y, ` `, s(`a`, { href: `mailto:${N.email}`, children: N.email })],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var C,
  w,
  T,
  E,
  D,
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
  K = e(() => {
    (n(),
      c(),
      l(),
      f(),
      (C = `../../styles/css2-a59a76.css`),
      (w = `clamp(1280px, 92vw, 1520px)`),
      (T = (e) => {
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
      (E = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (D = (e) => {
        let t = T(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (O = (e, t, n, r) => {
        let i = e ? D(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (k = () => {
        let [e, n] = i(!1);
        return (
          t(() => {
            n(r.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (A = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (j = (e) => ({
        bone: e.bone || A.bone,
        ink: e.ink || A.ink,
        brass: e.brass || A.brass,
        pine: e.pine || A.pine,
        fog: e.fog || A.fog,
        stone: e.stone || A.stone,
        cloud: e.cloud || A.cloud,
        night: e.night || A.night,
      })),
      (M = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (N = {
        bone: { type: m.Color, title: `Paper`, defaultValue: A.bone },
        ink: { type: m.Color, title: `Ink`, defaultValue: A.ink },
        brass: { type: m.Color, title: `Accent`, defaultValue: A.brass },
        pine: { type: m.Color, title: `Deep`, defaultValue: A.pine },
        fog: { type: m.Color, title: `Line`, defaultValue: A.fog },
        stone: { type: m.Color, title: `Muted`, defaultValue: A.stone },
        cloud: { type: m.Color, title: `White`, defaultValue: A.cloud },
        night: { type: m.Color, title: `Dark`, defaultValue: A.night },
      }),
      (P = {
        customFonts: {
          type: m.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: m.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: m.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: m.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (F = {
        bpHint: {
          type: m.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (I = `
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
      m.Boolean,
      m.Number,
      (L = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (R = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${w} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (z = {
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
      (B = `DsLegal@cms1`),
      (V = (e, t) => (e != null && String(e).trim() ? String(e).trim() : t)),
      (H = r === void 0 ? u : t),
      (U = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (W = {
        licence: {
          title: `Licence`,
          intro: `What you may do with the files you buy here, in plain words. Every product ships with this licence unless its page says otherwise.`,
          sections: `What you get|Buying a product gives you a licence to use the files, not ownership of them. The files stay yours to download from your account for as long as the store exists, and every update we ship is included.; Where you can use it|Personal and commercial projects, including work for clients, on as many projects as you like under the tier you bought. Client work needs the Commercial tier or above.; What you cannot do|You may not resell, share, sublicense or give away the files, in whole or in part, or include them in a product where the files themselves are the thing being sold. That includes uploading them to file-sharing sites or bundling them into another kit.; Team use|Each licence is for one person. A team of up to five people can share one Team tier; larger teams should write to us for a quote.; Credit|No credit or link is required. If you mention where a file came from, we appreciate it.; If we change the licence|Changes apply to purchases made after the change. Whatever licence was in place when you bought stays in place for that purchase.`,
        },
        refunds: {
          title: `Refunds`,
          intro: `Digital files cannot be handed back, so refunds work a little differently from a shop with a counter. Here is exactly how.`,
          sections: `Change of mind|Because every product is a download that lands in your account immediately, we do not refund on change of mind. Every product page shows what is inside, the formats and the tools you need, so please check those before you buy.; Broken or not as described|If a file is broken, missing, or not what the product page describes, write to us within 14 days with your order number. We fix it or refund it, your choice.; Bought something you already own|If a bundle contains a product you already bought from us, send your order numbers and we take the price you paid off the bundle.; Duplicate orders|Charged twice for the same product? Send both order numbers and we refund the duplicate straight away.; How refunds arrive|Refunds go back to the payment method you used, through our checkout provider. They usually show within five working days.; Where to write|Use the contact page or the email at the bottom of every page. Include the order number and the product name, and we reply within one working day.`,
        },
        privacy: {
          title: `Privacy`,
          intro: `We keep as little data as a store can and still deliver your files. This page lists what we hold, why, and how to have it removed.`,
          sections: `What we collect|Your email address and name when you buy or subscribe, the order details our checkout provider sends us, and the messages you send through the contact page. Nothing else is stored on our side.; Why we hold it|To deliver the files, send the update emails for products you own, answer your messages and keep the records that tax law asks a store to keep.; Checkout and payment|Payments are handled by a third-party checkout provider. We never see or store card numbers. The provider has its own privacy policy that applies to the payment step.; Email|If you take the free guide or subscribe, you get the emails you asked for and can unsubscribe with one click in any of them. Update emails for products you own are sent as part of the purchase.; Cookies and analytics|The site uses privacy-friendly analytics that do not track you across other sites. The checkout provider may set the cookies it needs to complete a payment.; Your rights|Write to us at any time to see, correct or delete the data we hold about you. We answer within one working day and delete within seven, except records we are required to keep for tax purposes.`,
        },
        terms: {
          title: `Terms`,
          intro: `The short agreement between you and the store when you buy, download or use anything here.`,
          sections: `The store|The store sells digital products: files you download after paying. Prices are shown at checkout in your currency where available, and taxes are added there where they apply.; Your account|Downloads and updates are tied to the email you buy with. Keep it current so update emails reach you. You are responsible for keeping your download links private.; Orders|An order is complete when payment clears and the download page opens. We may cancel an order we suspect is fraudulent and refund it in full.; Using the products|Use is governed by the Licence page. Buying a product means you accept that licence for it.; Availability|We can change, update or retire a product at any time. Files you already bought stay in your account.; Liability|The products are provided as they are. We are not responsible for losses that come from using them, beyond the price you paid for the product in question.; Changes to these terms|We can update these terms; the date at the top shows the current version. Continued use of the store after a change means you accept the new terms.`,
        },
      }),
      (G = `
.dslg{position:relative;background:var(--ds-bone);color:var(--ds-ink);overflow:clip;z-index:12}
.dslg-band{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(120px,13vw,170px) 0 clamp(50px,6vw,80px)}
.dslg-band::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 70% at 85% 0,color-mix(in srgb,var(--ds-brass) 12%,transparent),transparent 60%);pointer-events:none}
.dslg-bw{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:16px}
.dslg-crumbs{display:flex;align-items:center;gap:10px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dslg-crumbs a{text-decoration:none;color:inherit;transition:color .3s} .dslg-crumbs a:hover{color:var(--ds-brass)} .dslg-crumbs i{width:14px;height:1px;background:color-mix(in srgb,var(--ds-bone) 40%,transparent)} .dslg-crumbs span{color:var(--ds-brass)}
.dslg-h1{margin:0;font-size:clamp(40px,5vw,78px);line-height:.96;font-weight:800;letter-spacing:-.035em}
.dslg-intro{margin:0;max-width:600px;font-size:clamp(16px,1.3vw,19px);line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)}
.dslg-upd{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border-radius:999px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 80%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 22%,transparent)}
/* toc + main */
.dslg-grid{display:grid;grid-template-columns:minmax(0,.5fr) minmax(0,1.5fr);gap:clamp(36px,6vw,96px);align-items:start;padding:clamp(56px,6vw,90px) var(--pad,56px) clamp(90px,10vw,150px)}
.dslg-toc{position:sticky;top:96px} .dslg-tl{display:block;margin-bottom:12px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)}
.dslg-toc ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dslg-toc a{display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent);font-size:12px;letter-spacing:.02em;line-height:1.35;color:var(--ds-ink);text-decoration:none;transition:color .3s} .dslg-toc a span{font-size:10px;letter-spacing:.1em;color:var(--ds-mut);flex:none} .dslg-toc a:hover{color:var(--ds-acc)}
.dslg-main{display:flex;flex-direction:column;gap:clamp(26px,3vw,40px);max-width:760px}
.dslg-sec{display:grid;grid-template-columns:44px minmax(0,1fr);gap:14px;padding-top:clamp(22px,2.6vw,34px);border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent);scroll-margin-top:110px}
.dslg-n{font-size:11px;letter-spacing:.1em;color:var(--ds-acc);padding-top:8px}
.dslg-sec h2{margin:0 0 12px;font-size:clamp(22px,2vw,30px);line-height:1.1;font-weight:800;letter-spacing:-.03em}
.dslg-sec p{margin:0 0 1em;font-size:16px;line-height:1.65;color:color-mix(in srgb,var(--ds-ink) 85%,transparent)} .dslg-sec p:last-child{margin-bottom:0}
/* licence tiers */
.dslg-tiers{display:flex;flex-direction:column;gap:14px} .dslg-tt{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)}
.dslg-tr{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.dslg-tier{display:flex;flex-direction:column;gap:8px;padding:20px;border-radius:12px;background:var(--ds-cloud);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 12%,transparent)} .dslg-tier.is-mid{background:var(--ds-night);color:var(--ds-bone);box-shadow:none}
.dslg-tier b{font-size:20px;font-weight:800;letter-spacing:-.02em} .dslg-ts{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dslg-tier.is-mid .dslg-ts{color:var(--ds-brass)}
.dslg-tier ul{list-style:none;margin:6px 0 0;padding:0;display:flex;flex-direction:column;gap:6px} .dslg-tier li{display:flex;align-items:baseline;gap:8px;font-size:13.5px;line-height:1.4} .dslg-tier li i{width:7px;height:7px;border-radius:50%;background:var(--ds-brass);flex:none;translate:0 -1px}
.dslg-contact{margin:8px 0 0;font-size:11px;letter-spacing:.06em;color:var(--ds-mut)} .dslg-contact a{color:var(--ds-acc);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--ds-acc) 40%,transparent)}
/* tablet + phone */
.dslg.is-tab .dslg-grid{grid-template-columns:1fr;gap:34px} .dslg.is-tab .dslg-toc{position:relative;top:auto}
.dslg.is-ph .dslg-band{padding:100px 0 44px} .dslg.is-ph .dslg-h1{font-size:clamp(34px,10vw,46px)} .dslg.is-ph .dslg-grid{grid-template-columns:1fr;gap:28px;padding-top:40px} .dslg.is-ph .dslg-toc{position:relative;top:auto}
.dslg.is-ph .dslg-tr{grid-template-columns:1fr} .dslg.is-ph .dslg-sec{grid-template-columns:32px minmax(0,1fr);gap:10px} .dslg.is-ph .dslg-sec p{font-size:15.5px}`),
      p(S, {
        ...F,
        kind: {
          type: m.Enum,
          title: `Page`,
          options: [`licence`, `refunds`, `privacy`, `terms`],
          optionTitles: [`Licence`, `Refunds`, `Privacy`, `Terms`],
          defaultValue: `licence`,
        },
        title: { type: m.String, title: `Title override`, defaultValue: `` },
        intro: { type: m.String, title: `Intro override`, displayTextArea: !0, defaultValue: `` },
        updated: {
          type: m.String,
          title: `Updated line`,
          defaultValue: `Updated 26 September 2026`,
        },
        sections: {
          type: m.String,
          title: `Sections override`,
          description: `Heading|Body; Heading|Body … (blank line inside a body = new paragraph). Empty = the built-in text for this page`,
          displayTextArea: !0,
          defaultValue: ``,
        },
        crumbHome: { type: m.String, title: `Crumb home`, defaultValue: `Home` },
        tocLabel: { type: m.String, title: `Contents label`, defaultValue: `On this page` },
        tiersLabel: {
          type: m.String,
          title: `Tiers label`,
          defaultValue: `Licence tiers`,
          hidden: (e) => e.kind !== `licence`,
        },
        tiers: {
          type: m.String,
          title: `Tiers`,
          description: `Name|Line|allowed, allowed, …; …`,
          displayTextArea: !0,
          defaultValue: `Personal|Included with every product|1 person, personal projects, unlimited personal sites, no client work, no resale; Commercial|Most products, see the page|1 person, client work, unlimited projects, no resale; Team|Ask for a quote|Up to 5 people, client work, unlimited projects, no resale`,
          hidden: (e) => e.kind !== `licence`,
        },
        contactLine: {
          type: m.String,
          title: `Contact line`,
          defaultValue: `Questions about this page? Write to`,
        },
        ...N,
        ...P,
      }));
  });
export { K as n, S as t };
//# sourceMappingURL=DsLegal.Bzhin_M1.mjs.map
