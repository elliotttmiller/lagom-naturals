var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/lMsU9IzbYI1ijDmuvQHI/oFfqa12ucprJLugS1aNp/LiveClouds.js
import { jsx as _jsx } from "react/jsx-runtime";
import { startTransition, useEffect, useLayoutEffect, useRef, useState } from "react";
import { addPropertyControls, ControlType, useIsStaticRenderer } from "./_framer-runtime.js";

// http-url:https://esm.sh/three@0.167.0/es2022/three.mjs
var Ef = 0;
var oh = 1;
var Af = 2;
var qd = 1;
var Tf = 2;
var vn = 3;
var qn = 0;
var ze = 1;
var Mn = 2;
var Gn = 0;
var Ki = 1;
var lh = 2;
var ch = 3;
var hh = 4;
var Cf = 5;
var di = 100;
var Rf = 101;
var Pf = 102;
var If = 103;
var Lf = 104;
var Uf = 200;
var Df = 201;
var Nf = 202;
var Ff = 203;
var Fo = 204;
var Oo = 205;
var Of = 206;
var Bf = 207;
var zf = 208;
var kf = 209;
var Vf = 210;
var Hf = 211;
var Gf = 212;
var Wf = 213;
var Xf = 214;
var qf = 0;
var Yf = 1;
var Zf = 2;
var ea = 3;
var Jf = 4;
var $f = 5;
var Kf = 6;
var Qf = 7;
var ka = 0;
var jf = 1;
var tp = 2;
var Wn = 0;
var ep = 1;
var np = 2;
var ip = 3;
var sp = 4;
var rp = 5;
var ap = 6;
var op = 7;
var zc = 300;
var Yn = 301;
var _i = 302;
var na = 303;
var ia = 304;
var js = 306;
var sa = 1e3;
var rn = 1001;
var ra = 1002;
var we = 1003;
var Yd = 1004;
var Is = 1005;
var ge = 1006;
var Jr = 1007;
var bn = 1008;
var An = 1009;
var Zd = 1010;
var Jd = 1011;
var Bs = 1012;
var kc = 1013;
var Zn = 1014;
var We = 1015;
var tr = 1016;
var Vc = 1017;
var Hc = 1018;
var ns = 1020;
var $d = 35902;
var Kd = 1021;
var Qd = 1022;
var Be = 1023;
var jd = 1024;
var tf = 1025;
var Qi = 1026;
var is = 1027;
var Gc = 1028;
var Va = 1029;
var ef = 1030;
var Wc = 1031;
var Xc = 1033;
var $r = 33776;
var Kr = 33777;
var Qr = 33778;
var jr = 33779;
var Bo = 35840;
var zo = 35841;
var ko = 35842;
var Vo = 35843;
var Ho = 36196;
var Go = 37492;
var Wo = 37496;
var Xo = 37808;
var qo = 37809;
var Yo = 37810;
var Zo = 37811;
var Jo = 37812;
var $o = 37813;
var Ko = 37814;
var Qo = 37815;
var jo = 37816;
var tl = 37817;
var el = 37818;
var nl = 37819;
var il = 37820;
var sl = 37821;
var ta = 36492;
var rl = 36494;
var al = 36495;
var nf = 36283;
var ol = 36284;
var ll = 36285;
var cl = 36286;
var aa = 2300;
var hl = 2301;
var Ja = 2302;
var qi = 2400;
var Yi = 2401;
var oa = 2402;
var dp = 3200;
var fp = 3201;
var Si = 0;
var pp = 1;
var zn = "";
var sn = "srgb";
var Kn = "srgb-linear";
var Yc = "display-p3";
var Ha = "display-p3-linear";
var la = "linear";
var se = "srgb";
var ca = "rec709";
var ha = "p3";
var wi = 7680;
var dh = 519;
var mp = 512;
var gp = 513;
var _p = 514;
var rf = 515;
var xp = 516;
var vp = 517;
var yp = 518;
var Mp = 519;
var ua = 35044;
var fh = "300 es";
var wn = 2e3;
var da = 2001;
var hn = class {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    let n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0)
      return false;
    let n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0)
      return;
    let i = this._listeners[t];
    if (i !== void 0) {
      let r = i.indexOf(e);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    let n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      let i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, t);
      t.target = null;
    }
  }
};
var Te = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var gi = Math.PI / 180;
var ss = 180 / Math.PI;
function Xe() {
  let s32 = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Te[s32 & 255] + Te[s32 >> 8 & 255] + Te[s32 >> 16 & 255] + Te[s32 >> 24 & 255] + "-" + Te[t & 255] + Te[t >> 8 & 255] + "-" + Te[t >> 16 & 15 | 64] + Te[t >> 24 & 255] + "-" + Te[e & 63 | 128] + Te[e >> 8 & 255] + "-" + Te[e >> 16 & 255] + Te[e >> 24 & 255] + Te[n & 255] + Te[n >> 8 & 255] + Te[n >> 16 & 255] + Te[n >> 24 & 255]).toLowerCase();
}
function he(s32, t, e) {
  return Math.max(t, Math.min(e, s32));
}
function Zc(s32, t) {
  return (s32 % t + t) % t;
}
function Ds(s32, t, e) {
  return (1 - e) * s32 + e * t;
}
function De(s32, t) {
  switch (t.constructor) {
    case Float32Array:
      return s32;
    case Uint32Array:
      return s32 / 4294967295;
    case Uint16Array:
      return s32 / 65535;
    case Uint8Array:
      return s32 / 255;
    case Int32Array:
      return Math.max(s32 / 2147483647, -1);
    case Int16Array:
      return Math.max(s32 / 32767, -1);
    case Int8Array:
      return Math.max(s32 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Bt(s32, t) {
  switch (t.constructor) {
    case Float32Array:
      return s32;
    case Uint32Array:
      return Math.round(s32 * 4294967295);
    case Uint16Array:
      return Math.round(s32 * 65535);
    case Uint8Array:
      return Math.round(s32 * 255);
    case Int32Array:
      return Math.round(s32 * 2147483647);
    case Int16Array:
      return Math.round(s32 * 32767);
    case Int8Array:
      return Math.round(s32 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Z = class s {
  constructor(t = 0, e = 0) {
    s.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    let e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    let e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    let n = this.dot(t) / e;
    return Math.acos(he(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    let e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    let n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
var zt = class s2 {
  constructor(t, e, n, i, r, a, o, l, c) {
    s2.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, a, o, l, c);
  }
  set(t, e, n, i, r, a, o, l, c) {
    let h = this.elements;
    return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    let e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    let e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    let n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], _ = i[0], g = i[3], p = i[6], v = i[1], x = i[4], y = i[7], I = i[2], E = i[5], C = i[8];
    return r[0] = a * _ + o * v + l * I, r[3] = a * g + o * x + l * E, r[6] = a * p + o * y + l * C, r[1] = c * _ + h * v + u * I, r[4] = c * g + h * x + u * E, r[7] = c * p + h * y + u * C, r[2] = d * _ + f * v + m * I, r[5] = d * g + f * x + m * E, r[8] = d * p + f * y + m * C, this;
  }
  multiplyScalar(t) {
    let e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    let t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
    return e * a * h - e * o * c - n * r * h + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    let t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = h * a - o * c, d = o * l - h * r, f = c * r - a * l, m = e * u + n * d + i * f;
    if (m === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let _ = 1 / m;
    return t[0] = u * _, t[1] = (i * c - h * n) * _, t[2] = (o * n - i * a) * _, t[3] = d * _, t[4] = (h * e - i * l) * _, t[5] = (i * r - o * e) * _, t[6] = f * _, t[7] = (n * l - c * e) * _, t[8] = (a * e - n * r) * _, this;
  }
  transpose() {
    let t, e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    let e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, r, a, o) {
    let l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -i * c, i * l, -i * (-c * a + l * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply($a.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply($a.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply($a.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    let e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    let e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++)
      if (e[i] !== n[i])
        return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    let n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var $a = new zt();
function af(s32) {
  for (let t = s32.length - 1; t >= 0; --t)
    if (s32[t] >= 65535)
      return true;
  return false;
}
function zs(s32) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s32);
}
function zp() {
  let s32 = zs("canvas");
  return s32.style.display = "block", s32;
}
var mh = {};
function ji(s32) {
  s32 in mh || (mh[s32] = true, console.warn(s32));
}
function kp(s32, t, e) {
  return new Promise(function(n, i) {
    function r() {
      switch (s32.clientWaitSync(t, s32.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s32.WAIT_FAILED:
          i();
          break;
        case s32.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
var gh = new zt().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199);
var _h = new zt().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735);
var xs = { [Kn]: { transfer: la, primaries: ca, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (s32) => s32, fromReference: (s32) => s32 }, [sn]: { transfer: se, primaries: ca, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (s32) => s32.convertSRGBToLinear(), fromReference: (s32) => s32.convertLinearToSRGB() }, [Ha]: { transfer: la, primaries: ha, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (s32) => s32.applyMatrix3(_h), fromReference: (s32) => s32.applyMatrix3(gh) }, [Yc]: { transfer: se, primaries: ha, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (s32) => s32.convertSRGBToLinear().applyMatrix3(_h), fromReference: (s32) => s32.applyMatrix3(gh).convertLinearToSRGB() } };
var Vp = /* @__PURE__ */ new Set([Kn, Ha]);
var Jt = { enabled: true, _workingColorSpace: Kn, get workingColorSpace() {
  return this._workingColorSpace;
}, set workingColorSpace(s32) {
  if (!Vp.has(s32))
    throw new Error(`Unsupported working color space, "${s32}".`);
  this._workingColorSpace = s32;
}, convert: function(s32, t, e) {
  if (this.enabled === false || t === e || !t || !e)
    return s32;
  let n = xs[t].toReference, i = xs[e].fromReference;
  return i(n(s32));
}, fromWorkingColorSpace: function(s32, t) {
  return this.convert(s32, this._workingColorSpace, t);
}, toWorkingColorSpace: function(s32, t) {
  return this.convert(s32, t, this._workingColorSpace);
}, getPrimaries: function(s32) {
  return xs[s32].primaries;
}, getTransfer: function(s32) {
  return s32 === zn ? la : xs[s32].transfer;
}, getLuminanceCoefficients: function(s32, t = this._workingColorSpace) {
  return s32.fromArray(xs[t].luminanceCoefficients);
} };
function ts(s32) {
  return s32 < 0.04045 ? s32 * 0.0773993808 : Math.pow(s32 * 0.9478672986 + 0.0521327014, 2.4);
}
function Ka(s32) {
  return s32 < 31308e-7 ? s32 * 12.92 : 1.055 * Math.pow(s32, 0.41666) - 0.055;
}
var Ei;
var ul = class {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Ei === void 0 && (Ei = zs("canvas")), Ei.width = t.width, Ei.height = t.height;
      let n = Ei.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Ei;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      let e = zs("canvas");
      e.width = t.width, e.height = t.height;
      let n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      let i = n.getImageData(0, 0, t.width, t.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = ts(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      let e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(ts(e[n] / 255) * 255) : e[n] = ts(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
};
var Hp = 0;
var kn = class {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Hp++ }), this.uuid = Xe(), this.data = t, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    let e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    let n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Qa(i[a].image)) : r.push(Qa(i[a]));
      } else
        r = Qa(i);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
};
function Qa(s32) {
  return typeof HTMLImageElement < "u" && s32 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s32 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s32 instanceof ImageBitmap ? ul.getDataURL(s32) : s32.data ? { data: Array.from(s32.data), width: s32.width, height: s32.height, type: s32.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var Gp = 0;
var _e = class s3 extends hn {
  constructor(t = s3.DEFAULT_IMAGE, e = s3.DEFAULT_MAPPING, n = rn, i = rn, r = ge, a = bn, o = Be, l = An, c = s3.DEFAULT_ANISOTROPY, h = zn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Gp++ }), this.uuid = Xe(), this.name = "", this.source = new kn(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Z(0, 0), this.repeat = new Z(1, 1), this.center = new Z(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new zt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  toJSON(t) {
    let e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    let n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== zc)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case sa:
          t.x = t.x - Math.floor(t.x);
          break;
        case rn:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case ra:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case sa:
          t.y = t.y - Math.floor(t.y);
          break;
        case rn:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case ra:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
};
_e.DEFAULT_IMAGE = null;
_e.DEFAULT_MAPPING = zc;
_e.DEFAULT_ANISOTROPY = 1;
var ee = class s4 {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    s4.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    let e = this.x, n = this.y, i = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    let e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r, l = t.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], m = l[9], _ = l[2], g = l[6], p = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(c + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      let x = (c + 1) / 2, y = (f + 1) / 2, I = (p + 1) / 2, E = (h + d) / 4, C = (u + _) / 4, P = (m + g) / 4;
      return x > y && x > I ? x < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(x), i = E / n, r = C / n) : y > I ? y < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y), n = E / i, r = P / i) : I < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(I), n = C / r, i = P / r), this.set(n, i, r, e), this;
    }
    let v = Math.sqrt((g - m) * (g - m) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (g - m) / v, this.y = (u - _) / v, this.z = (d - h) / v, this.w = Math.acos((c + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    let e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
var dl = class extends hn {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = 1, this.scissor = new ee(0, 0, t, e), this.scissorTest = false, this.viewport = new ee(0, 0, t, e);
    let i = { width: t, height: e, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: ge, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    let r = new _e(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    let a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, i = t.textures.length; n < i; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = true;
    let e = Object.assign({}, t.texture.image);
    return this.texture.source = new kn(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var Ze = class extends dl {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
};
var ks = class extends _e {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = we, this.minFilter = we, this.wrapR = rn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
};
var fa = class extends _e {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = we, this.minFilter = we, this.wrapR = rn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
};
var Ne = class {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3], d = r[a + 0], f = r[a + 1], m = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = d, t[e + 1] = f, t[e + 2] = m, t[e + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== f || h !== m) {
      let g = 1 - o, p = l * d + c * f + h * m + u * _, v = p >= 0 ? 1 : -1, x = 1 - p * p;
      if (x > Number.EPSILON) {
        let I = Math.sqrt(x), E = Math.atan2(I, p * v);
        g = Math.sin(g * E) / I, o = Math.sin(o * E) / I;
      }
      let y = o * v;
      if (l = l * g + d * y, c = c * g + f * y, h = h * g + m * y, u = u * g + _ * y, g === 1 - o) {
        let I = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= I, c *= I, h *= I, u *= I;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, a) {
    let o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[a], d = r[a + 1], f = r[a + 2], m = r[a + 3];
    return t[e] = o * m + h * u + l * f - c * d, t[e + 1] = l * m + h * d + c * u - o * f, t[e + 2] = c * m + h * f + o * d - l * u, t[e + 3] = h * m - o * u - l * d - c * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    let n = t._x, i = t._y, r = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(r / 2), d = l(n / 2), f = l(i / 2), m = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + c * f * m, this._y = c * f * u + d * h * m, this._z = c * h * m - d * f * u, this._w = c * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - c * f * m, this._y = c * f * u - d * h * m, this._z = c * h * m + d * f * u, this._w = c * h * u + d * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    let n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    let e = t.elements, n = e[0], i = e[4], r = e[8], a = e[1], o = e[5], l = e[9], c = e[2], h = e[6], u = e[10], d = n + o + u;
    if (d > 0) {
      let f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (r - c) * f, this._z = (a - i) * f;
    } else if (n > o && n > u) {
      let f = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (r + c) / f;
    } else if (o > u) {
      let f = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      let f = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / f, this._x = (r + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(he(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    let n = this.angleTo(t);
    if (n === 0)
      return this;
    let i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    let n = t._x, i = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + a * o + i * c - r * l, this._y = i * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0)
      return this;
    if (e === 1)
      return this.copy(t);
    let n = this._x, i = this._y, r = this._z, a = this._w, o = a * t._w + n * t._x + i * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    let l = 1 - o * o;
    if (l <= Number.EPSILON) {
      let f = 1 - e;
      return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * i + e * this._y, this._z = f * r + e * this._z, this.normalize(), this;
    }
    let c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - e) * h) / c, d = Math.sin(e * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    let t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
};
var T = class s5 {
  constructor(t = 0, e = 0, n = 0) {
    s5.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(yh.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(yh.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    let e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    let e = this.x, n = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(t) {
    let e = this.x, n = this.y, i = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * i - o * n), h = 2 * (o * e - r * i), u = 2 * (r * n - a * e);
    return this.x = e + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = i + l * u + r * h - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    let e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    let n = t.x, i = t.y, r = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = i * l - r * o, this.y = r * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(t) {
    let e = t.lengthSq();
    if (e === 0)
      return this.set(0, 0, 0);
    let n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return ja.copy(this).projectOnVector(t), this.sub(ja);
  }
  reflect(t) {
    return this.sub(ja.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    let e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    let n = this.dot(t) / e;
    return Math.acos(he(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    let e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    let i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    let e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    let e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    let t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
var ja = new T();
var yh = new Ne();
var Pe = class {
  constructor(t = new T(1 / 0, 1 / 0, 1 / 0), e = new T(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(tn.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(tn.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    let n = tn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    let n = t.geometry;
    if (n !== void 0) {
      let r = n.getAttribute("position");
      if (e === true && r !== void 0 && t.isInstancedMesh !== true)
        for (let a = 0, o = r.count; a < o; a++)
          t.isMesh === true ? t.getVertexPosition(a, tn) : tn.fromBufferAttribute(r, a), tn.applyMatrix4(t.matrixWorld), this.expandByPoint(tn);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), ir.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ir.copy(n.boundingBox)), ir.applyMatrix4(t.matrixWorld), this.union(ir);
    }
    let i = t.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, tn), tn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return false;
    this.getCenter(vs), sr.subVectors(this.max, vs), Ai.subVectors(t.a, vs), Ti.subVectors(t.b, vs), Ci.subVectors(t.c, vs), In.subVectors(Ti, Ai), Ln.subVectors(Ci, Ti), jn.subVectors(Ai, Ci);
    let e = [0, -In.z, In.y, 0, -Ln.z, Ln.y, 0, -jn.z, jn.y, In.z, 0, -In.x, Ln.z, 0, -Ln.x, jn.z, 0, -jn.x, -In.y, In.x, 0, -Ln.y, Ln.x, 0, -jn.y, jn.x, 0];
    return !to(e, Ai, Ti, Ci, sr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !to(e, Ai, Ti, Ci, sr)) ? false : (rr.crossVectors(In, Ln), e = [rr.x, rr.y, rr.z], to(e, Ai, Ti, Ci, sr));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, tn).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(tn).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(fn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
};
var fn = [new T(), new T(), new T(), new T(), new T(), new T(), new T(), new T()];
var tn = new T();
var ir = new Pe();
var Ai = new T();
var Ti = new T();
var Ci = new T();
var In = new T();
var Ln = new T();
var jn = new T();
var vs = new T();
var sr = new T();
var rr = new T();
var ti = new T();
function to(s32, t, e, n, i) {
  for (let r = 0, a = s32.length - 3; r <= a; r += 3) {
    ti.fromArray(s32, r);
    let o = i.x * Math.abs(ti.x) + i.y * Math.abs(ti.y) + i.z * Math.abs(ti.z), l = t.dot(ti), c = e.dot(ti), h = n.dot(ti);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return false;
  }
  return true;
}
var Wp = new Pe();
var ys = new T();
var eo = new T();
var Ee = class {
  constructor(t = new T(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    let n = this.center;
    e !== void 0 ? n.copy(e) : Wp.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, a = t.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    let e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    let n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    ys.subVectors(t, this.center);
    let e = ys.lengthSq();
    if (e > this.radius * this.radius) {
      let n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ys, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (eo.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(ys.copy(t.center).add(eo)), this.expandByPoint(ys.copy(t.center).sub(eo))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var pn = new T();
var no = new T();
var ar = new T();
var Un = new T();
var io = new T();
var or = new T();
var so = new T();
var xi = class {
  constructor(t = new T(), e = new T(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, pn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    let n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    let e = pn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (pn.copy(this.origin).addScaledVector(this.direction, e), pn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    no.copy(t).add(e).multiplyScalar(0.5), ar.copy(e).sub(t).normalize(), Un.copy(this.origin).sub(no);
    let r = t.distanceTo(e) * 0.5, a = -this.direction.dot(ar), o = Un.dot(this.direction), l = -Un.dot(ar), c = Un.lengthSq(), h = Math.abs(1 - a * a), u, d, f, m;
    if (h > 0)
      if (u = a * l - o, d = a * o - l, m = r * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            let _ = 1 / h;
            u *= _, d *= _, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
          } else
            d = r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
        else
          d = -r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
      else
        d <= -m ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c) : d <= m ? (u = 0, d = Math.min(Math.max(-r, -l), r), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c);
    else
      d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(no).addScaledVector(ar, d), f;
  }
  intersectSphere(t, e) {
    pn.subVectors(t.center, this.origin);
    let n = pn.dot(this.direction), i = pn.dot(pn) - n * n, r = t.radius * t.radius;
    if (i > r)
      return null;
    let a = Math.sqrt(r - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    let e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    let n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    let n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    let e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, a, o, l, c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (t.min.x - d.x) * c, i = (t.max.x - d.x) * c) : (n = (t.max.x - d.x) * c, i = (t.min.x - d.x) * c), h >= 0 ? (r = (t.min.y - d.y) * h, a = (t.max.y - d.y) * h) : (r = (t.max.y - d.y) * h, a = (t.min.y - d.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (t.min.z - d.z) * u, l = (t.max.z - d.z) * u) : (o = (t.max.z - d.z) * u, l = (t.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, pn) !== null;
  }
  intersectTriangle(t, e, n, i, r) {
    io.subVectors(e, t), or.subVectors(n, t), so.crossVectors(io, or);
    let a = this.direction.dot(so), o;
    if (a > 0) {
      if (i)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Un.subVectors(this.origin, t);
    let l = o * this.direction.dot(or.crossVectors(Un, or));
    if (l < 0)
      return null;
    let c = o * this.direction.dot(io.cross(Un));
    if (c < 0 || l + c > a)
      return null;
    let h = -o * Un.dot(so);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Rt = class s6 {
  constructor(t, e, n, i, r, a, o, l, c, h, u, d, f, m, _, g) {
    s6.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, i, r, a, o, l, c, h, u, d, f, m, _, g);
  }
  set(t, e, n, i, r, a, o, l, c, h, u, d, f, m, _, g) {
    let p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = i, p[1] = r, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new s6().fromArray(this.elements);
  }
  copy(t) {
    let e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    let e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    let e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    let e = this.elements, n = t.elements, i = 1 / Ri.setFromMatrixColumn(t, 0).length(), r = 1 / Ri.setFromMatrixColumn(t, 1).length(), a = 1 / Ri.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    let e = this.elements, n = t.x, i = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      let d = a * h, f = a * u, m = o * h, _ = o * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = f + m * c, e[5] = d - _ * c, e[9] = -o * l, e[2] = _ - d * c, e[6] = m + f * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      let d = l * h, f = l * u, m = c * h, _ = c * u;
      e[0] = d + _ * o, e[4] = m * o - f, e[8] = a * c, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = f * o - m, e[6] = _ + d * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      let d = l * h, f = l * u, m = c * h, _ = c * u;
      e[0] = d - _ * o, e[4] = -a * u, e[8] = m + f * o, e[1] = f + m * o, e[5] = a * h, e[9] = _ - d * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      let d = a * h, f = a * u, m = o * h, _ = o * u;
      e[0] = l * h, e[4] = m * c - f, e[8] = d * c + _, e[1] = l * u, e[5] = _ * c + d, e[9] = f * c - m, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      let d = a * l, f = a * c, m = o * l, _ = o * c;
      e[0] = l * h, e[4] = _ - d * u, e[8] = m * u + f, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = f * u + m, e[10] = d - _ * u;
    } else if (t.order === "XZY") {
      let d = a * l, f = a * c, m = o * l, _ = o * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = d * u + _, e[5] = a * h, e[9] = f * u - m, e[2] = m * u - f, e[6] = o * h, e[10] = _ * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Xp, t, qp);
  }
  lookAt(t, e, n) {
    let i = this.elements;
    return He.subVectors(t, e), He.lengthSq() === 0 && (He.z = 1), He.normalize(), Dn.crossVectors(n, He), Dn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? He.x += 1e-4 : He.z += 1e-4, He.normalize(), Dn.crossVectors(n, He)), Dn.normalize(), lr.crossVectors(He, Dn), i[0] = Dn.x, i[4] = lr.x, i[8] = He.x, i[1] = Dn.y, i[5] = lr.y, i[9] = He.y, i[2] = Dn.z, i[6] = lr.z, i[10] = He.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    let n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], _ = n[6], g = n[10], p = n[14], v = n[3], x = n[7], y = n[11], I = n[15], E = i[0], C = i[4], P = i[8], b = i[12], M = i[1], L = i[5], k = i[9], F = i[13], V = i[2], q = i[6], H = i[10], j = i[14], G = i[3], dt = i[7], gt = i[11], _t = i[15];
    return r[0] = a * E + o * M + l * V + c * G, r[4] = a * C + o * L + l * q + c * dt, r[8] = a * P + o * k + l * H + c * gt, r[12] = a * b + o * F + l * j + c * _t, r[1] = h * E + u * M + d * V + f * G, r[5] = h * C + u * L + d * q + f * dt, r[9] = h * P + u * k + d * H + f * gt, r[13] = h * b + u * F + d * j + f * _t, r[2] = m * E + _ * M + g * V + p * G, r[6] = m * C + _ * L + g * q + p * dt, r[10] = m * P + _ * k + g * H + p * gt, r[14] = m * b + _ * F + g * j + p * _t, r[3] = v * E + x * M + y * V + I * G, r[7] = v * C + x * L + y * q + I * dt, r[11] = v * P + x * k + y * H + I * gt, r[15] = v * b + x * F + y * j + I * _t, this;
  }
  multiplyScalar(t) {
    let e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    let t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], u = t[6], d = t[10], f = t[14], m = t[3], _ = t[7], g = t[11], p = t[15];
    return m * (+r * l * u - i * c * u - r * o * d + n * c * d + i * o * f - n * l * f) + _ * (+e * l * f - e * c * d + r * a * d - i * a * f + i * c * h - r * l * h) + g * (+e * c * u - e * o * f - r * a * u + n * a * f + r * o * h - n * c * h) + p * (-i * o * h - e * l * u + e * o * d + i * a * u - n * a * d + n * l * h);
  }
  transpose() {
    let t = this.elements, e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    let i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    let t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], m = t[12], _ = t[13], g = t[14], p = t[15], v = u * g * c - _ * d * c + _ * l * f - o * g * f - u * l * p + o * d * p, x = m * d * c - h * g * c - m * l * f + a * g * f + h * l * p - a * d * p, y = h * _ * c - m * u * c + m * o * f - a * _ * f - h * o * p + a * u * p, I = m * u * l - h * _ * l - m * o * d + a * _ * d + h * o * g - a * u * g, E = e * v + n * x + i * y + r * I;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let C = 1 / E;
    return t[0] = v * C, t[1] = (_ * d * r - u * g * r - _ * i * f + n * g * f + u * i * p - n * d * p) * C, t[2] = (o * g * r - _ * l * r + _ * i * c - n * g * c - o * i * p + n * l * p) * C, t[3] = (u * l * r - o * d * r - u * i * c + n * d * c + o * i * f - n * l * f) * C, t[4] = x * C, t[5] = (h * g * r - m * d * r + m * i * f - e * g * f - h * i * p + e * d * p) * C, t[6] = (m * l * r - a * g * r - m * i * c + e * g * c + a * i * p - e * l * p) * C, t[7] = (a * d * r - h * l * r + h * i * c - e * d * c - a * i * f + e * l * f) * C, t[8] = y * C, t[9] = (m * u * r - h * _ * r - m * n * f + e * _ * f + h * n * p - e * u * p) * C, t[10] = (a * _ * r - m * o * r + m * n * c - e * _ * c - a * n * p + e * o * p) * C, t[11] = (h * o * r - a * u * r - h * n * c + e * u * c + a * n * f - e * o * f) * C, t[12] = I * C, t[13] = (h * _ * i - m * u * i + m * n * d - e * _ * d - h * n * g + e * u * g) * C, t[14] = (m * o * i - a * _ * i - m * n * l + e * _ * l + a * n * g - e * o * g) * C, t[15] = (a * u * i - h * o * i + h * n * l - e * u * l - a * n * d + e * o * d) * C, this;
  }
  scale(t) {
    let e = this.elements, n = t.x, i = t.y, r = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    let t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    let e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    let e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    let e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    let n = Math.cos(e), i = Math.sin(e), r = 1 - n, a = t.x, o = t.y, l = t.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    let i = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, h = a + a, u = o + o, d = r * c, f = r * h, m = r * u, _ = a * h, g = a * u, p = o * u, v = l * c, x = l * h, y = l * u, I = n.x, E = n.y, C = n.z;
    return i[0] = (1 - (_ + p)) * I, i[1] = (f + y) * I, i[2] = (m - x) * I, i[3] = 0, i[4] = (f - y) * E, i[5] = (1 - (d + p)) * E, i[6] = (g + v) * E, i[7] = 0, i[8] = (m + x) * C, i[9] = (g - v) * C, i[10] = (1 - (d + _)) * C, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    let i = this.elements, r = Ri.set(i[0], i[1], i[2]).length(), a = Ri.set(i[4], i[5], i[6]).length(), o = Ri.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], en.copy(this);
    let c = 1 / r, h = 1 / a, u = 1 / o;
    return en.elements[0] *= c, en.elements[1] *= c, en.elements[2] *= c, en.elements[4] *= h, en.elements[5] *= h, en.elements[6] *= h, en.elements[8] *= u, en.elements[9] *= u, en.elements[10] *= u, e.setFromRotationMatrix(en), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, i, r, a, o = wn) {
    let l = this.elements, c = 2 * r / (e - t), h = 2 * r / (n - i), u = (e + t) / (e - t), d = (n + i) / (n - i), f, m;
    if (o === wn)
      f = -(a + r) / (a - r), m = -2 * a * r / (a - r);
    else if (o === da)
      f = -a / (a - r), m = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = m, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, r, a, o = wn) {
    let l = this.elements, c = 1 / (e - t), h = 1 / (n - i), u = 1 / (a - r), d = (e + t) * c, f = (n + i) * h, m, _;
    if (o === wn)
      m = (a + r) * u, _ = -2 * u;
    else if (o === da)
      m = r * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -m, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    let e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++)
      if (e[i] !== n[i])
        return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    let n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
};
var Ri = new T();
var en = new Rt();
var Xp = new T(0, 0, 0);
var qp = new T(1, 1, 1);
var Dn = new T();
var lr = new T();
var He = new T();
var Mh = new Rt();
var Sh = new Ne();
var Je = class s7 {
  constructor(t = 0, e = 0, n = 0, i = s7.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    let i = t.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(he(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-he(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(he(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-he(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(he(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-he(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return Mh.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Mh, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Sh.setFromEuler(this), this.setFromQuaternion(Sh, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
Je.DEFAULT_ORDER = "XYZ";
var Vs = class {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
};
var Yp = 0;
var bh = new T();
var Pi = new Ne();
var mn = new Rt();
var cr = new T();
var Ms = new T();
var Zp = new T();
var Jp = new Ne();
var wh = new T(1, 0, 0);
var Eh = new T(0, 1, 0);
var Ah = new T(0, 0, 1);
var Th = { type: "added" };
var $p = { type: "removed" };
var Ii = { type: "childadded", child: null };
var ro = { type: "childremoved", child: null };
var te = class s8 extends hn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Yp++ }), this.uuid = Xe(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = s8.DEFAULT_UP.clone();
    let t = new T(), e = new Je(), n = new Ne(), i = new T(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Rt() }, normalMatrix: { value: new zt() } }), this.matrix = new Rt(), this.matrixWorld = new Rt(), this.matrixAutoUpdate = s8.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = s8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Vs(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Pi.setFromAxisAngle(t, e), this.quaternion.multiply(Pi), this;
  }
  rotateOnWorldAxis(t, e) {
    return Pi.setFromAxisAngle(t, e), this.quaternion.premultiply(Pi), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(wh, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Eh, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Ah, t);
  }
  translateOnAxis(t, e) {
    return bh.copy(t).applyQuaternion(this.quaternion), this.position.add(bh.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(wh, t);
  }
  translateY(t) {
    return this.translateOnAxis(Eh, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Ah, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(mn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? cr.copy(t) : cr.set(t, e, n);
    let i = this.parent;
    this.updateWorldMatrix(true, false), Ms.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? mn.lookAt(Ms, cr, this.up) : mn.lookAt(cr, Ms, this.up), this.quaternion.setFromRotationMatrix(mn), i && (mn.extractRotation(i.matrixWorld), Pi.setFromRotationMatrix(mn), this.quaternion.premultiply(Pi.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Th), Ii.child = t, this.dispatchEvent(Ii), Ii.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    let e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent($p), ro.child = t, this.dispatchEvent(ro), ro.child = null), this;
  }
  removeFromParent() {
    let t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), mn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), mn.multiply(t.parent.matrixWorld)), t.applyMatrix4(mn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Th), Ii.child = t, this.dispatchEvent(Ii), Ii.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      let a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    let i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ms, t, Zp), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ms, Jp, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    let e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    let e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false)
      return;
    t(this);
    let e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    let e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    let e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    let n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      let i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    let e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    let i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      let o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        let l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            let u = l[c];
            r(t.shapes, u);
          }
        else
          r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        let o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(t.materials, this.material[l]));
        i.material = o;
      } else
        i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        let l = this.animations[o];
        i.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      let o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), u = a(t.shapes), d = a(t.skeletons), f = a(t.animations), m = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m);
    }
    return n.object = i, n;
    function a(o) {
      let l = [];
      for (let c in o) {
        let h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true)
      for (let n = 0; n < t.children.length; n++) {
        let i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
};
te.DEFAULT_UP = new T(0, 1, 0);
te.DEFAULT_MATRIX_AUTO_UPDATE = true;
te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var nn = new T();
var gn = new T();
var ao = new T();
var _n = new T();
var Li = new T();
var Ui = new T();
var Ch = new T();
var oo = new T();
var lo = new T();
var co = new T();
var Vn = class s9 {
  constructor(t = new T(), e = new T(), n = new T()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), nn.subVectors(t, e), i.cross(nn);
    let r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    nn.subVectors(i, e), gn.subVectors(n, e), ao.subVectors(t, e);
    let a = nn.dot(nn), o = nn.dot(gn), l = nn.dot(ao), c = gn.dot(gn), h = gn.dot(ao), u = a * c - o * o;
    if (u === 0)
      return r.set(0, 0, 0), null;
    let d = 1 / u, f = (c * l - o * h) * d, m = (a * h - o * l) * d;
    return r.set(1 - f - m, m, f);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, _n) === null ? false : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1;
  }
  static getInterpolation(t, e, n, i, r, a, o, l) {
    return this.getBarycoord(t, e, n, i, _n) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, _n.x), l.addScaledVector(a, _n.y), l.addScaledVector(o, _n.z), l);
  }
  static isFrontFacing(t, e, n, i) {
    return nn.subVectors(n, e), gn.subVectors(t, e), nn.cross(gn).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return nn.subVectors(this.c, this.b), gn.subVectors(this.a, this.b), nn.cross(gn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return s9.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return s9.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return s9.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return s9.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return s9.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    let n = this.a, i = this.b, r = this.c, a, o;
    Li.subVectors(i, n), Ui.subVectors(r, n), oo.subVectors(t, n);
    let l = Li.dot(oo), c = Ui.dot(oo);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    lo.subVectors(t, i);
    let h = Li.dot(lo), u = Ui.dot(lo);
    if (h >= 0 && u <= h)
      return e.copy(i);
    let d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), e.copy(n).addScaledVector(Li, a);
    co.subVectors(t, r);
    let f = Li.dot(co), m = Ui.dot(co);
    if (m >= 0 && f <= m)
      return e.copy(r);
    let _ = f * c - l * m;
    if (_ <= 0 && c >= 0 && m <= 0)
      return o = c / (c - m), e.copy(n).addScaledVector(Ui, o);
    let g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0)
      return Ch.subVectors(r, i), o = (u - h) / (u - h + (f - m)), e.copy(i).addScaledVector(Ch, o);
    let p = 1 / (g + _ + d);
    return a = _ * p, o = d * p, e.copy(n).addScaledVector(Li, a).addScaledVector(Ui, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
};
var of = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
var Nn = { h: 0, s: 0, l: 0 };
var hr = { h: 0, s: 0, l: 0 };
function ho(s32, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s32 + (t - s32) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s32 + (t - s32) * 6 * (2 / 3 - e) : s32;
}
var ft = class {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      let i = t;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = sn) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Jt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, i = Jt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Jt.toWorkingColorSpace(this, i), this;
  }
  setHSL(t, e, n, i = Jt.workingColorSpace) {
    if (t = Zc(t, 1), e = he(e, 0, 1), n = he(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      let r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = ho(a, r, t + 1 / 3), this.g = ho(a, r, t), this.b = ho(a, r, t - 1 / 3);
    }
    return Jt.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = sn) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r, a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      let r = i[1], a = r.length;
      if (a === 3)
        return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
      if (a === 6)
        return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = sn) {
    let n = of[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = ts(t.r), this.g = ts(t.g), this.b = ts(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Ka(t.r), this.g = Ka(t.g), this.b = Ka(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = sn) {
    return Jt.fromWorkingColorSpace(Ce.copy(this), t), Math.round(he(Ce.r * 255, 0, 255)) * 65536 + Math.round(he(Ce.g * 255, 0, 255)) * 256 + Math.round(he(Ce.b * 255, 0, 255));
  }
  getHexString(t = sn) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Jt.workingColorSpace) {
    Jt.fromWorkingColorSpace(Ce.copy(this), e);
    let n = Ce.r, i = Ce.g, r = Ce.b, a = Math.max(n, i, r), o = Math.min(n, i, r), l, c, h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      let u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Jt.workingColorSpace) {
    return Jt.fromWorkingColorSpace(Ce.copy(this), e), t.r = Ce.r, t.g = Ce.g, t.b = Ce.b, t;
  }
  getStyle(t = sn) {
    Jt.fromWorkingColorSpace(Ce.copy(this), t);
    let e = Ce.r, n = Ce.g, i = Ce.b;
    return t !== sn ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(Nn), this.setHSL(Nn.h + t, Nn.s + e, Nn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(Nn), t.getHSL(hr);
    let n = Ds(Nn.h, hr.h, e), i = Ds(Nn.s, hr.s, e), r = Ds(Nn.l, hr.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    let e = this.r, n = this.g, i = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
var Ce = new ft();
ft.NAMES = of;
var Kp = 0;
var Ae = class extends hn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Kp++ }), this.uuid = Xe(), this.name = "", this.type = "Material", this.blending = Ki, this.side = qn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Fo, this.blendDst = Oo, this.blendEquation = di, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ft(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ea, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = dh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = wi, this.stencilZFail = wi, this.stencilZPass = wi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (let e in t) {
        let n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        let i = this[e];
        if (i === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    let e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    let n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ki && (n.blending = this.blending), this.side !== qn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Fo && (n.blendSrc = this.blendSrc), this.blendDst !== Oo && (n.blendDst = this.blendDst), this.blendEquation !== di && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ea && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== dh && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== wi && (n.stencilFail = this.stencilFail), this.stencilZFail !== wi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== wi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      let a = [];
      for (let o in r) {
        let l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      let r = i(t.textures), a = i(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    let e = t.clippingPlanes, n = null;
    if (e !== null) {
      let i = e.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
};
var Tn = class extends Ae {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new ft(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Je(), this.combine = ka, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
};
var Sn = Qp();
function Qp() {
  let s32 = new ArrayBuffer(4), t = new Float32Array(s32), e = new Uint32Array(s32), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let l = 0; l < 256; ++l) {
    let c = l - 127;
    c < -27 ? (n[l] = 0, n[l | 256] = 32768, i[l] = 24, i[l | 256] = 24) : c < -14 ? (n[l] = 1024 >> -c - 14, n[l | 256] = 1024 >> -c - 14 | 32768, i[l] = -c - 1, i[l | 256] = -c - 1) : c <= 15 ? (n[l] = c + 15 << 10, n[l | 256] = c + 15 << 10 | 32768, i[l] = 13, i[l | 256] = 13) : c < 128 ? (n[l] = 31744, n[l | 256] = 64512, i[l] = 24, i[l | 256] = 24) : (n[l] = 31744, n[l | 256] = 64512, i[l] = 13, i[l | 256] = 13);
  }
  let r = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
  for (let l = 1; l < 1024; ++l) {
    let c = l << 13, h = 0;
    for (; (c & 8388608) === 0; )
      c <<= 1, h -= 8388608;
    c &= -8388609, h += 947912704, r[l] = c | h;
  }
  for (let l = 1024; l < 2048; ++l)
    r[l] = 939524096 + (l - 1024 << 13);
  for (let l = 1; l < 31; ++l)
    a[l] = l << 23;
  a[31] = 1199570944, a[32] = 2147483648;
  for (let l = 33; l < 63; ++l)
    a[l] = 2147483648 + (l - 32 << 23);
  a[63] = 3347054592;
  for (let l = 1; l < 64; ++l)
    l !== 32 && (o[l] = 1024);
  return { floatView: t, uint32View: e, baseTable: n, shiftTable: i, mantissaTable: r, exponentTable: a, offsetTable: o };
}
var me = new T();
var ur = new Z();
var ne = class {
  constructor(t, e, n = false) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = ua, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = We, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  get updateRange() {
    return ji("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        ur.fromBufferAttribute(this, e), ur.applyMatrix3(t), this.setXY(e, ur.x, ur.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        me.fromBufferAttribute(this, e), me.applyMatrix3(t), this.setXYZ(e, me.x, me.y, me.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      me.fromBufferAttribute(this, e), me.applyMatrix4(t), this.setXYZ(e, me.x, me.y, me.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      me.fromBufferAttribute(this, e), me.applyNormalMatrix(t), this.setXYZ(e, me.x, me.y, me.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      me.fromBufferAttribute(this, e), me.transformDirection(t), this.setXYZ(e, me.x, me.y, me.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = De(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Bt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = De(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Bt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = De(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Bt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = De(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Bt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = De(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Bt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Bt(e, this.array), n = Bt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = Bt(e, this.array), n = Bt(n, this.array), i = Bt(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t *= this.itemSize, this.normalized && (e = Bt(e, this.array), n = Bt(n, this.array), i = Bt(i, this.array), r = Bt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== ua && (t.usage = this.usage), t;
  }
};
var pa = class extends ne {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
};
var ma = class extends ne {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
};
var St = class extends ne {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
};
var jp = 0;
var Ye = new Rt();
var uo = new te();
var Di = new T();
var Ge = new Pe();
var Ss = new Pe();
var ye = new T();
var Gt = class s10 extends hn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: jp++ }), this.uuid = Xe(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (af(t) ? ma : pa)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    let e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    let n = this.attributes.normal;
    if (n !== void 0) {
      let r = new zt().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    let i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Ye.makeRotationFromQuaternion(t), this.applyMatrix4(Ye), this;
  }
  rotateX(t) {
    return Ye.makeRotationX(t), this.applyMatrix4(Ye), this;
  }
  rotateY(t) {
    return Ye.makeRotationY(t), this.applyMatrix4(Ye), this;
  }
  rotateZ(t) {
    return Ye.makeRotationZ(t), this.applyMatrix4(Ye), this;
  }
  translate(t, e, n) {
    return Ye.makeTranslation(t, e, n), this.applyMatrix4(Ye), this;
  }
  scale(t, e, n) {
    return Ye.makeScale(t, e, n), this.applyMatrix4(Ye), this;
  }
  lookAt(t) {
    return uo.lookAt(t), uo.updateMatrix(), this.applyMatrix4(uo.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Di).negate(), this.translate(Di.x, Di.y, Di.z), this;
  }
  setFromPoints(t) {
    let e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      let r = t[n];
      e.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new St(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Pe());
    let t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new T(-1 / 0, -1 / 0, -1 / 0), new T(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, i = e.length; n < i; n++) {
          let r = e[n];
          Ge.setFromBufferAttribute(r), this.morphTargetsRelative ? (ye.addVectors(this.boundingBox.min, Ge.min), this.boundingBox.expandByPoint(ye), ye.addVectors(this.boundingBox.max, Ge.max), this.boundingBox.expandByPoint(ye)) : (this.boundingBox.expandByPoint(Ge.min), this.boundingBox.expandByPoint(Ge.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ee());
    let t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new T(), 1 / 0);
      return;
    }
    if (t) {
      let n = this.boundingSphere.center;
      if (Ge.setFromBufferAttribute(t), e)
        for (let r = 0, a = e.length; r < a; r++) {
          let o = e[r];
          Ss.setFromBufferAttribute(o), this.morphTargetsRelative ? (ye.addVectors(Ge.min, Ss.min), Ge.expandByPoint(ye), ye.addVectors(Ge.max, Ss.max), Ge.expandByPoint(ye)) : (Ge.expandByPoint(Ss.min), Ge.expandByPoint(Ss.max));
        }
      Ge.getCenter(n);
      let i = 0;
      for (let r = 0, a = t.count; r < a; r++)
        ye.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(ye));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          let o = e[r], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            ye.fromBufferAttribute(o, c), l && (Di.fromBufferAttribute(t, c), ye.add(Di)), i = Math.max(i, n.distanceToSquared(ye));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    let t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    let n = e.position, i = e.normal, r = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new ne(new Float32Array(4 * n.count), 4));
    let a = this.getAttribute("tangent"), o = [], l = [];
    for (let P = 0; P < n.count; P++)
      o[P] = new T(), l[P] = new T();
    let c = new T(), h = new T(), u = new T(), d = new Z(), f = new Z(), m = new Z(), _ = new T(), g = new T();
    function p(P, b, M) {
      c.fromBufferAttribute(n, P), h.fromBufferAttribute(n, b), u.fromBufferAttribute(n, M), d.fromBufferAttribute(r, P), f.fromBufferAttribute(r, b), m.fromBufferAttribute(r, M), h.sub(c), u.sub(c), f.sub(d), m.sub(d);
      let L = 1 / (f.x * m.y - m.x * f.y);
      isFinite(L) && (_.copy(h).multiplyScalar(m.y).addScaledVector(u, -f.y).multiplyScalar(L), g.copy(u).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(L), o[P].add(_), o[b].add(_), o[M].add(_), l[P].add(g), l[b].add(g), l[M].add(g));
    }
    let v = this.groups;
    v.length === 0 && (v = [{ start: 0, count: t.count }]);
    for (let P = 0, b = v.length; P < b; ++P) {
      let M = v[P], L = M.start, k = M.count;
      for (let F = L, V = L + k; F < V; F += 3)
        p(t.getX(F + 0), t.getX(F + 1), t.getX(F + 2));
    }
    let x = new T(), y = new T(), I = new T(), E = new T();
    function C(P) {
      I.fromBufferAttribute(i, P), E.copy(I);
      let b = o[P];
      x.copy(b), x.sub(I.multiplyScalar(I.dot(b))).normalize(), y.crossVectors(E, b);
      let L = y.dot(l[P]) < 0 ? -1 : 1;
      a.setXYZW(P, x.x, x.y, x.z, L);
    }
    for (let P = 0, b = v.length; P < b; ++P) {
      let M = v[P], L = M.start, k = M.count;
      for (let F = L, V = L + k; F < V; F += 3)
        C(t.getX(F + 0)), C(t.getX(F + 1)), C(t.getX(F + 2));
    }
  }
  computeVertexNormals() {
    let t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new ne(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      let i = new T(), r = new T(), a = new T(), o = new T(), l = new T(), c = new T(), h = new T(), u = new T();
      if (t)
        for (let d = 0, f = t.count; d < f; d += 3) {
          let m = t.getX(d + 0), _ = t.getX(d + 1), g = t.getX(d + 2);
          i.fromBufferAttribute(e, m), r.fromBufferAttribute(e, _), a.fromBufferAttribute(e, g), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, m), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, g), o.add(h), l.add(h), c.add(h), n.setXYZ(m, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(g, c.x, c.y, c.z);
        }
      else
        for (let d = 0, f = e.count; d < f; d += 3)
          i.fromBufferAttribute(e, d + 0), r.fromBufferAttribute(e, d + 1), a.fromBufferAttribute(e, d + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    let t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      ye.fromBufferAttribute(t, e), ye.normalize(), t.setXYZ(e, ye.x, ye.y, ye.z);
  }
  toNonIndexed() {
    function t(o, l) {
      let c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h), f = 0, m = 0;
      for (let _ = 0, g = l.length; _ < g; _++) {
        o.isInterleavedBufferAttribute ? f = l[_] * o.data.stride + o.offset : f = l[_] * h;
        for (let p = 0; p < h; p++)
          d[m++] = c[f++];
      }
      return new ne(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    let e = new s10(), n = this.index.array, i = this.attributes;
    for (let o in i) {
      let l = i[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    let r = this.morphAttributes;
    for (let o in r) {
      let l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        let d = c[h], f = t(d, n);
        l.push(f);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    let a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      let c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    let t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      let l = this.parameters;
      for (let c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    let e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    let n = this.attributes;
    for (let l in n) {
      let c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    let i = {}, r = false;
    for (let l in this.morphAttributes) {
      let c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        let f = c[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (i[l] = h, r = true);
    }
    r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    let a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    let o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    let e = {};
    this.name = t.name;
    let n = t.index;
    n !== null && this.setIndex(n.clone(e));
    let i = t.attributes;
    for (let c in i) {
      let h = i[c];
      this.setAttribute(c, h.clone(e));
    }
    let r = t.morphAttributes;
    for (let c in r) {
      let h = [], u = r[c];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    let a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      let u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    let o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    let l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var Nh = new Rt();
var ei = new xi();
var dr = new Ee();
var Fh = new T();
var Ni = new T();
var Fi = new T();
var Oi = new T();
var fo = new T();
var fr = new T();
var pr = new Z();
var mr = new Z();
var gr = new Z();
var Oh = new T();
var Bh = new T();
var zh = new T();
var _r = new T();
var xr = new T();
var de = class extends te {
  constructor(t = new Gt(), e = new Tn()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      let i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          let o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    let n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    let o = this.morphTargetInfluences;
    if (r && o) {
      fr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        let h = o[l], u = r[l];
        h !== 0 && (fo.fromBufferAttribute(u, t), a ? fr.addScaledVector(fo, h) : fr.addScaledVector(fo.sub(e), h));
      }
      e.add(fr);
    }
    return e;
  }
  raycast(t, e) {
    let n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), dr.copy(n.boundingSphere), dr.applyMatrix4(r), ei.copy(t.ray).recast(t.near), !(dr.containsPoint(ei.origin) === false && (ei.intersectSphere(dr, Fh) === null || ei.origin.distanceToSquared(Fh) > (t.far - t.near) ** 2)) && (Nh.copy(r).invert(), ei.copy(t.ray).applyMatrix4(Nh), !(n.boundingBox !== null && ei.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, ei)));
  }
  _computeIntersections(t, e, n) {
    let i, r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let m = 0, _ = d.length; m < _; m++) {
          let g = d[m], p = a[g.materialIndex], v = Math.max(g.start, f.start), x = Math.min(o.count, Math.min(g.start + g.count, f.start + f.count));
          for (let y = v, I = x; y < I; y += 3) {
            let E = o.getX(y), C = o.getX(y + 1), P = o.getX(y + 2);
            i = vr(this, p, t, n, c, h, u, E, C, P), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = g.materialIndex, e.push(i));
          }
        }
      else {
        let m = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          let v = o.getX(g), x = o.getX(g + 1), y = o.getX(g + 2);
          i = vr(this, a, t, n, c, h, u, v, x, y), i && (i.faceIndex = Math.floor(g / 3), e.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let m = 0, _ = d.length; m < _; m++) {
          let g = d[m], p = a[g.materialIndex], v = Math.max(g.start, f.start), x = Math.min(l.count, Math.min(g.start + g.count, f.start + f.count));
          for (let y = v, I = x; y < I; y += 3) {
            let E = y, C = y + 1, P = y + 2;
            i = vr(this, p, t, n, c, h, u, E, C, P), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = g.materialIndex, e.push(i));
          }
        }
      else {
        let m = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          let v = g, x = g + 1, y = g + 2;
          i = vr(this, a, t, n, c, h, u, v, x, y), i && (i.faceIndex = Math.floor(g / 3), e.push(i));
        }
      }
  }
};
function tm(s32, t, e, n, i, r, a, o) {
  let l;
  if (t.side === ze ? l = n.intersectTriangle(a, r, i, true, o) : l = n.intersectTriangle(i, r, a, t.side === qn, o), l === null)
    return null;
  xr.copy(o), xr.applyMatrix4(s32.matrixWorld);
  let c = e.ray.origin.distanceTo(xr);
  return c < e.near || c > e.far ? null : { distance: c, point: xr.clone(), object: s32 };
}
function vr(s32, t, e, n, i, r, a, o, l, c) {
  s32.getVertexPosition(o, Ni), s32.getVertexPosition(l, Fi), s32.getVertexPosition(c, Oi);
  let h = tm(s32, t, e, n, Ni, Fi, Oi, _r);
  if (h) {
    i && (pr.fromBufferAttribute(i, o), mr.fromBufferAttribute(i, l), gr.fromBufferAttribute(i, c), h.uv = Vn.getInterpolation(_r, Ni, Fi, Oi, pr, mr, gr, new Z())), r && (pr.fromBufferAttribute(r, o), mr.fromBufferAttribute(r, l), gr.fromBufferAttribute(r, c), h.uv1 = Vn.getInterpolation(_r, Ni, Fi, Oi, pr, mr, gr, new Z())), a && (Oh.fromBufferAttribute(a, o), Bh.fromBufferAttribute(a, l), zh.fromBufferAttribute(a, c), h.normal = Vn.getInterpolation(_r, Ni, Fi, Oi, Oh, Bh, zh, new T()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    let u = { a: o, b: l, c, normal: new T(), materialIndex: 0 };
    Vn.getNormal(Ni, Fi, Oi, u.normal), h.face = u;
  }
  return h;
}
var rs = class s11 extends Gt {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: a };
    let o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    let l = [], c = [], h = [], u = [], d = 0, f = 0;
    m("z", "y", "x", -1, -1, n, e, t, a, r, 0), m("z", "y", "x", 1, -1, n, e, -t, a, r, 1), m("x", "z", "y", 1, 1, t, n, e, i, a, 2), m("x", "z", "y", 1, -1, t, n, -e, i, a, 3), m("x", "y", "z", 1, -1, t, e, n, i, r, 4), m("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new St(c, 3)), this.setAttribute("normal", new St(h, 3)), this.setAttribute("uv", new St(u, 2));
    function m(_, g, p, v, x, y, I, E, C, P, b) {
      let M = y / C, L = I / P, k = y / 2, F = I / 2, V = E / 2, q = C + 1, H = P + 1, j = 0, G = 0, dt = new T();
      for (let gt = 0; gt < H; gt++) {
        let _t = gt * L - F;
        for (let Ht = 0; Ht < q; Ht++) {
          let Zt = Ht * M - k;
          dt[_] = Zt * v, dt[g] = _t * x, dt[p] = V, c.push(dt.x, dt.y, dt.z), dt[_] = 0, dt[g] = 0, dt[p] = E > 0 ? 1 : -1, h.push(dt.x, dt.y, dt.z), u.push(Ht / C), u.push(1 - gt / P), j += 1;
        }
      }
      for (let gt = 0; gt < P; gt++)
        for (let _t = 0; _t < C; _t++) {
          let Ht = d + _t + q * gt, Zt = d + _t + q * (gt + 1), W = d + (_t + 1) + q * (gt + 1), et = d + (_t + 1) + q * gt;
          l.push(Ht, Zt, et), l.push(Zt, W, et), G += 6;
        }
      o.addGroup(f, G, b), f += G, d += j;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s11(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
};
function as(s32) {
  let t = {};
  for (let e in s32) {
    t[e] = {};
    for (let n in s32[e]) {
      let i = s32[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function Ue(s32) {
  let t = {};
  for (let e = 0; e < s32.length; e++) {
    let n = as(s32[e]);
    for (let i in n)
      t[i] = n[i];
  }
  return t;
}
function em(s32) {
  let t = [];
  for (let e = 0; e < s32.length; e++)
    t.push(s32[e].clone());
  return t;
}
function lf(s32) {
  let t = s32.getRenderTarget();
  return t === null ? s32.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Jt.workingColorSpace;
}
var nm = { clone: as, merge: Ue };
var im = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
var sm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
var $e = class extends Ae {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = im, this.fragmentShader = sm, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = as(t.uniforms), this.uniformsGroups = em(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    let e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (let i in this.uniforms) {
      let a = this.uniforms[i].value;
      a && a.isTexture ? e.uniforms[i] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[i] = { type: "m4", value: a.toArray() } : e.uniforms[i] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    let n = {};
    for (let i in this.extensions)
      this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
};
var Hs = class extends te {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Rt(), this.projectionMatrix = new Rt(), this.projectionMatrixInverse = new Rt(), this.coordinateSystem = wn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Fn = new T();
var kh = new Z();
var Vh = new Z();
var Me = class extends Hs {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    let e = 0.5 * this.getFilmHeight() / t;
    this.fov = ss * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let t = Math.tan(gi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return ss * 2 * Math.atan(Math.tan(gi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    Fn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Fn.x, Fn.y).multiplyScalar(-t / Fn.z), Fn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Fn.x, Fn.y).multiplyScalar(-t / Fn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, kh, Vh), e.subVectors(Vh, kh);
  }
  setViewOffset(t, e, n, i, r, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let t = this.near, e = t * Math.tan(gi * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i, a = this.view;
    if (this.view !== null && this.view.enabled) {
      let l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * i / l, e -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    let o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
};
var Bi = -90;
var zi = 1;
var fl = class extends te {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    let i = new Me(Bi, zi, t, e);
    i.layers = this.layers, this.add(i);
    let r = new Me(Bi, zi, t, e);
    r.layers = this.layers, this.add(r);
    let a = new Me(Bi, zi, t, e);
    a.layers = this.layers, this.add(a);
    let o = new Me(Bi, zi, t, e);
    o.layers = this.layers, this.add(o);
    let l = new Me(Bi, zi, t, e);
    l.layers = this.layers, this.add(l);
    let c = new Me(Bi, zi, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    let t = this.coordinateSystem, e = this.children.concat(), [n, i, r, a, o, l] = e;
    for (let c of e)
      this.remove(c);
    if (t === wn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === da)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (let c of e)
      this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    let { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    let [r, a, o, l, c, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), m = t.xr.enabled;
    t.xr.enabled = false;
    let _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, i), t.render(e, r), t.setRenderTarget(n, 1, i), t.render(e, a), t.setRenderTarget(n, 2, i), t.render(e, o), t.setRenderTarget(n, 3, i), t.render(e, l), t.setRenderTarget(n, 4, i), t.render(e, c), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, i), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = m, n.texture.needsPMREMUpdate = true;
  }
};
var os = class extends _e {
  constructor(t, e, n, i, r, a, o, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : Yn, super(t, e, n, i, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
};
var pl = class extends Ze {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    let n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new os(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ge;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    let n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new rs(5, 5, 5), r = new $e({ name: "CubemapFromEquirect", uniforms: as(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: ze, blending: Gn });
    r.uniforms.tEquirect.value = e;
    let a = new de(i, r), o = e.minFilter;
    return e.minFilter === bn && (e.minFilter = ge), new fl(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, i) {
    let r = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
};
var po = new T();
var rm = new T();
var am = new zt();
var yn = class {
  constructor(t = new T(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    let i = po.subVectors(n, e).cross(rm.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    let t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    let n = t.delta(po), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    let r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    let e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    let n = e || am.getNormalMatrix(t), i = this.coplanarPoint(po).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var ni = new Ee();
var yr = new T();
var ls = class {
  constructor(t = new yn(), e = new yn(), n = new yn(), i = new yn(), r = new yn(), a = new yn()) {
    this.planes = [t, e, n, i, r, a];
  }
  set(t, e, n, i, r, a) {
    let o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    let e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = wn) {
    let n = this.planes, i = t.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], f = i[8], m = i[9], _ = i[10], g = i[11], p = i[12], v = i[13], x = i[14], y = i[15];
    if (n[0].setComponents(l - r, d - c, g - f, y - p).normalize(), n[1].setComponents(l + r, d + c, g + f, y + p).normalize(), n[2].setComponents(l + a, d + h, g + m, y + v).normalize(), n[3].setComponents(l - a, d - h, g - m, y - v).normalize(), n[4].setComponents(l - o, d - u, g - _, y - x).normalize(), e === wn)
      n[5].setComponents(l + o, d + u, g + _, y + x).normalize();
    else if (e === da)
      n[5].setComponents(o, u, _, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      let e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(ni);
  }
  intersectsSprite(t) {
    return ni.center.set(0, 0, 0), ni.radius = 0.7071067811865476, ni.applyMatrix4(t.matrixWorld), this.intersectsSphere(ni);
  }
  intersectsSphere(t) {
    let e = this.planes, n = t.center, i = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(n) < i)
        return false;
    return true;
  }
  intersectsBox(t) {
    let e = this.planes;
    for (let n = 0; n < 6; n++) {
      let i = e[n];
      if (yr.x = i.normal.x > 0 ? t.max.x : t.min.x, yr.y = i.normal.y > 0 ? t.max.y : t.min.y, yr.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(yr) < 0)
        return false;
    }
    return true;
  }
  containsPoint(t) {
    let e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
function cf() {
  let s32 = null, t = false, e = null, n = null;
  function i(r, a) {
    e(r, a), n = s32.requestAnimationFrame(i);
  }
  return { start: function() {
    t !== true && e !== null && (n = s32.requestAnimationFrame(i), t = true);
  }, stop: function() {
    s32.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(r) {
    e = r;
  }, setContext: function(r) {
    s32 = r;
  } };
}
function om(s32) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    let c = o.array, h = o.usage, u = c.byteLength, d = s32.createBuffer();
    s32.bindBuffer(l, d), s32.bufferData(l, c, h), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array)
      f = s32.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = s32.HALF_FLOAT : f = s32.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      f = s32.SHORT;
    else if (c instanceof Uint32Array)
      f = s32.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      f = s32.INT;
    else if (c instanceof Int8Array)
      f = s32.BYTE;
    else if (c instanceof Uint8Array)
      f = s32.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      f = s32.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    let h = l.array, u = l._updateRange, d = l.updateRanges;
    if (s32.bindBuffer(c, o), u.count === -1 && d.length === 0 && s32.bufferSubData(c, 0, h), d.length !== 0) {
      for (let f = 0, m = d.length; f < m; f++) {
        let _ = d[f];
        s32.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    u.count !== -1 && (s32.bufferSubData(c, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count), u.count = -1), l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    let l = t.get(o);
    l && (s32.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      let h = t.get(o);
      (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    let c = t.get(o);
    if (c === void 0)
      t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: i, remove: r, update: a };
}
var Gs = class s12 extends Gt {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i };
    let r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = t / o, d = e / l, f = [], m = [], _ = [], g = [];
    for (let p = 0; p < h; p++) {
      let v = p * d - a;
      for (let x = 0; x < c; x++) {
        let y = x * u - r;
        m.push(y, -v, 0), _.push(0, 0, 1), g.push(x / o), g.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let v = 0; v < o; v++) {
        let x = v + c * p, y = v + c * (p + 1), I = v + 1 + c * (p + 1), E = v + 1 + c * p;
        f.push(x, y, E), f.push(y, I, E);
      }
    this.setIndex(f), this.setAttribute("position", new St(m, 3)), this.setAttribute("normal", new St(_, 3)), this.setAttribute("uv", new St(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s12(t.width, t.height, t.widthSegments, t.heightSegments);
  }
};
var lm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`;
var cm = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`;
var hm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`;
var um = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var dm = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`;
var fm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`;
var pm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`;
var mm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`;
var gm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`;
var _m = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`;
var xm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`;
var vm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`;
var ym = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`;
var Mm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`;
var Sm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`;
var bm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`;
var wm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`;
var Em = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`;
var Am = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`;
var Tm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`;
var Cm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`;
var Rm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`;
var Pm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`;
var Im = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`;
var Lm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`;
var Um = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`;
var Dm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`;
var Nm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`;
var Fm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`;
var Om = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`;
var Bm = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var zm = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`;
var km = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`;
var Vm = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`;
var Hm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`;
var Gm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`;
var Wm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`;
var Xm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`;
var qm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`;
var Ym = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;
var Zm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`;
var Jm = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`;
var $m = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`;
var Km = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`;
var Qm = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`;
var jm = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`;
var tg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`;
var eg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`;
var ng = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`;
var ig = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`;
var sg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`;
var rg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`;
var ag = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`;
var og = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;
var lg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`;
var cg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`;
var hg = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`;
var ug = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var dg = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var fg = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`;
var pg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`;
var mg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`;
var gg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`;
var _g = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var xg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`;
var vg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`;
var yg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`;
var Mg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`;
var Sg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var bg = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`;
var wg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var Eg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`;
var Ag = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`;
var Tg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var Cg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var Rg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`;
var Pg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`;
var Ig = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`;
var Lg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`;
var Ug = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`;
var Dg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`;
var Ng = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`;
var Fg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`;
var Og = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`;
var Bg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`;
var zg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`;
var kg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`;
var Vg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`;
var Hg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`;
var Gg = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`;
var Wg = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`;
var Xg = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`;
var qg = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`;
var Yg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`;
var Zg = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`;
var Jg = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`;
var $g = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`;
var Kg = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`;
var Qg = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`;
var jg = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`;
var t_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`;
var e_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`;
var n_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`;
var i_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var s_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var r_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;
var a_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
var o_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`;
var l_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
var c_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
var h_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
var u_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
var d_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
var f_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`;
var p_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`;
var m_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;
var g_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`;
var __ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`;
var x_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
var v_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
var y_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
var M_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`;
var S_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
var b_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
var w_ = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
var E_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`;
var A_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
var T_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`;
var C_ = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`;
var R_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
var P_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
var I_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`;
var L_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
var U_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
var D_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
var N_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`;
var F_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
var O_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
var B_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
var z_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
var k_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
var Vt = { alphahash_fragment: lm, alphahash_pars_fragment: cm, alphamap_fragment: hm, alphamap_pars_fragment: um, alphatest_fragment: dm, alphatest_pars_fragment: fm, aomap_fragment: pm, aomap_pars_fragment: mm, batching_pars_vertex: gm, batching_vertex: _m, begin_vertex: xm, beginnormal_vertex: vm, bsdfs: ym, iridescence_fragment: Mm, bumpmap_pars_fragment: Sm, clipping_planes_fragment: bm, clipping_planes_pars_fragment: wm, clipping_planes_pars_vertex: Em, clipping_planes_vertex: Am, color_fragment: Tm, color_pars_fragment: Cm, color_pars_vertex: Rm, color_vertex: Pm, common: Im, cube_uv_reflection_fragment: Lm, defaultnormal_vertex: Um, displacementmap_pars_vertex: Dm, displacementmap_vertex: Nm, emissivemap_fragment: Fm, emissivemap_pars_fragment: Om, colorspace_fragment: Bm, colorspace_pars_fragment: zm, envmap_fragment: km, envmap_common_pars_fragment: Vm, envmap_pars_fragment: Hm, envmap_pars_vertex: Gm, envmap_physical_pars_fragment: tg, envmap_vertex: Wm, fog_vertex: Xm, fog_pars_vertex: qm, fog_fragment: Ym, fog_pars_fragment: Zm, gradientmap_pars_fragment: Jm, lightmap_pars_fragment: $m, lights_lambert_fragment: Km, lights_lambert_pars_fragment: Qm, lights_pars_begin: jm, lights_toon_fragment: eg, lights_toon_pars_fragment: ng, lights_phong_fragment: ig, lights_phong_pars_fragment: sg, lights_physical_fragment: rg, lights_physical_pars_fragment: ag, lights_fragment_begin: og, lights_fragment_maps: lg, lights_fragment_end: cg, logdepthbuf_fragment: hg, logdepthbuf_pars_fragment: ug, logdepthbuf_pars_vertex: dg, logdepthbuf_vertex: fg, map_fragment: pg, map_pars_fragment: mg, map_particle_fragment: gg, map_particle_pars_fragment: _g, metalnessmap_fragment: xg, metalnessmap_pars_fragment: vg, morphinstance_vertex: yg, morphcolor_vertex: Mg, morphnormal_vertex: Sg, morphtarget_pars_vertex: bg, morphtarget_vertex: wg, normal_fragment_begin: Eg, normal_fragment_maps: Ag, normal_pars_fragment: Tg, normal_pars_vertex: Cg, normal_vertex: Rg, normalmap_pars_fragment: Pg, clearcoat_normal_fragment_begin: Ig, clearcoat_normal_fragment_maps: Lg, clearcoat_pars_fragment: Ug, iridescence_pars_fragment: Dg, opaque_fragment: Ng, packing: Fg, premultiplied_alpha_fragment: Og, project_vertex: Bg, dithering_fragment: zg, dithering_pars_fragment: kg, roughnessmap_fragment: Vg, roughnessmap_pars_fragment: Hg, shadowmap_pars_fragment: Gg, shadowmap_pars_vertex: Wg, shadowmap_vertex: Xg, shadowmask_pars_fragment: qg, skinbase_vertex: Yg, skinning_pars_vertex: Zg, skinning_vertex: Jg, skinnormal_vertex: $g, specularmap_fragment: Kg, specularmap_pars_fragment: Qg, tonemapping_fragment: jg, tonemapping_pars_fragment: t_, transmission_fragment: e_, transmission_pars_fragment: n_, uv_pars_fragment: i_, uv_pars_vertex: s_, uv_vertex: r_, worldpos_vertex: a_, background_vert: o_, background_frag: l_, backgroundCube_vert: c_, backgroundCube_frag: h_, cube_vert: u_, cube_frag: d_, depth_vert: f_, depth_frag: p_, distanceRGBA_vert: m_, distanceRGBA_frag: g_, equirect_vert: __, equirect_frag: x_, linedashed_vert: v_, linedashed_frag: y_, meshbasic_vert: M_, meshbasic_frag: S_, meshlambert_vert: b_, meshlambert_frag: w_, meshmatcap_vert: E_, meshmatcap_frag: A_, meshnormal_vert: T_, meshnormal_frag: C_, meshphong_vert: R_, meshphong_frag: P_, meshphysical_vert: I_, meshphysical_frag: L_, meshtoon_vert: U_, meshtoon_frag: D_, points_vert: N_, points_frag: F_, shadow_vert: O_, shadow_frag: B_, sprite_vert: z_, sprite_frag: k_ };
var lt = { common: { diffuse: { value: new ft(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new zt() }, alphaMap: { value: null }, alphaMapTransform: { value: new zt() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new zt() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new zt() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new zt() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new zt() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new zt() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new zt() }, normalScale: { value: new Z(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new zt() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new zt() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new zt() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new zt() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ft(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ft(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new zt() }, alphaTest: { value: 0 }, uvTransform: { value: new zt() } }, sprite: { diffuse: { value: new ft(16777215) }, opacity: { value: 1 }, center: { value: new Z(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new zt() }, alphaMap: { value: null }, alphaMapTransform: { value: new zt() }, alphaTest: { value: 0 } } };
var cn = { basic: { uniforms: Ue([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.fog]), vertexShader: Vt.meshbasic_vert, fragmentShader: Vt.meshbasic_frag }, lambert: { uniforms: Ue([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new ft(0) } }]), vertexShader: Vt.meshlambert_vert, fragmentShader: Vt.meshlambert_frag }, phong: { uniforms: Ue([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new ft(0) }, specular: { value: new ft(1118481) }, shininess: { value: 30 } }]), vertexShader: Vt.meshphong_vert, fragmentShader: Vt.meshphong_frag }, standard: { uniforms: Ue([lt.common, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.roughnessmap, lt.metalnessmap, lt.fog, lt.lights, { emissive: { value: new ft(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Vt.meshphysical_vert, fragmentShader: Vt.meshphysical_frag }, toon: { uniforms: Ue([lt.common, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.gradientmap, lt.fog, lt.lights, { emissive: { value: new ft(0) } }]), vertexShader: Vt.meshtoon_vert, fragmentShader: Vt.meshtoon_frag }, matcap: { uniforms: Ue([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, { matcap: { value: null } }]), vertexShader: Vt.meshmatcap_vert, fragmentShader: Vt.meshmatcap_frag }, points: { uniforms: Ue([lt.points, lt.fog]), vertexShader: Vt.points_vert, fragmentShader: Vt.points_frag }, dashed: { uniforms: Ue([lt.common, lt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Vt.linedashed_vert, fragmentShader: Vt.linedashed_frag }, depth: { uniforms: Ue([lt.common, lt.displacementmap]), vertexShader: Vt.depth_vert, fragmentShader: Vt.depth_frag }, normal: { uniforms: Ue([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Vt.meshnormal_vert, fragmentShader: Vt.meshnormal_frag }, sprite: { uniforms: Ue([lt.sprite, lt.fog]), vertexShader: Vt.sprite_vert, fragmentShader: Vt.sprite_frag }, background: { uniforms: { uvTransform: { value: new zt() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Vt.background_vert, fragmentShader: Vt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new zt() } }, vertexShader: Vt.backgroundCube_vert, fragmentShader: Vt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Vt.cube_vert, fragmentShader: Vt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Vt.equirect_vert, fragmentShader: Vt.equirect_frag }, distanceRGBA: { uniforms: Ue([lt.common, lt.displacementmap, { referencePosition: { value: new T() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Vt.distanceRGBA_vert, fragmentShader: Vt.distanceRGBA_frag }, shadow: { uniforms: Ue([lt.lights, lt.fog, { color: { value: new ft(0) }, opacity: { value: 1 } }]), vertexShader: Vt.shadow_vert, fragmentShader: Vt.shadow_frag } };
cn.physical = { uniforms: Ue([cn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new zt() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new zt() }, clearcoatNormalScale: { value: new Z(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new zt() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new zt() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new zt() }, sheen: { value: 0 }, sheenColor: { value: new ft(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new zt() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new zt() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new zt() }, transmissionSamplerSize: { value: new Z() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new zt() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ft(0) }, specularColor: { value: new ft(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new zt() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new zt() }, anisotropyVector: { value: new Z() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new zt() } }]), vertexShader: Vt.meshphysical_vert, fragmentShader: Vt.meshphysical_frag };
var Mr = { r: 0, b: 0, g: 0 };
var ii = new Je();
var V_ = new Rt();
function H_(s32, t, e, n, i, r, a) {
  let o = new ft(0), l = r === true ? 0 : 1, c, h, u = null, d = 0, f = null;
  function m(v) {
    let x = v.isScene === true ? v.background : null;
    return x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? e : t).get(x)), x;
  }
  function _(v) {
    let x = false, y = m(v);
    y === null ? p(o, l) : y && y.isColor && (p(y, 1), x = true);
    let I = s32.xr.getEnvironmentBlendMode();
    I === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : I === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s32.autoClear || x) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s32.clear(s32.autoClearColor, s32.autoClearDepth, s32.autoClearStencil));
  }
  function g(v, x) {
    let y = m(x);
    y && (y.isCubeTexture || y.mapping === js) ? (h === void 0 && (h = new de(new rs(1, 1, 1), new $e({ name: "BackgroundCubeMaterial", uniforms: as(cn.backgroundCube.uniforms), vertexShader: cn.backgroundCube.vertexShader, fragmentShader: cn.backgroundCube.fragmentShader, side: ze, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(I, E, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), ii.copy(x.backgroundRotation), ii.x *= -1, ii.y *= -1, ii.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === false && (ii.y *= -1, ii.z *= -1), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(V_.makeRotationFromEuler(ii)), h.material.toneMapped = Jt.getTransfer(y.colorSpace) !== se, (u !== y || d !== y.version || f !== s32.toneMapping) && (h.material.needsUpdate = true, u = y, d = y.version, f = s32.toneMapping), h.layers.enableAll(), v.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new de(new Gs(2, 2), new $e({ name: "BackgroundMaterial", uniforms: as(cn.background.uniforms), vertexShader: cn.background.vertexShader, fragmentShader: cn.background.fragmentShader, side: qn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = Jt.getTransfer(y.colorSpace) !== se, y.matrixAutoUpdate === true && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (u !== y || d !== y.version || f !== s32.toneMapping) && (c.material.needsUpdate = true, u = y, d = y.version, f = s32.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(v, x) {
    v.getRGB(Mr, lf(s32)), n.buffers.color.setClear(Mr.r, Mr.g, Mr.b, x, a);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(v, x = 1) {
    o.set(v), l = x, p(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(v) {
    l = v, p(o, l);
  }, render: _, addToRenderList: g };
}
function G_(s32, t) {
  let e = s32.getParameter(s32.MAX_VERTEX_ATTRIBS), n = {}, i = d(null), r = i, a = false;
  function o(M, L, k, F, V) {
    let q = false, H = u(F, k, L);
    r !== H && (r = H, c(r.object)), q = f(M, F, k, V), q && m(M, F, k, V), V !== null && t.update(V, s32.ELEMENT_ARRAY_BUFFER), (q || a) && (a = false, y(M, L, k, F), V !== null && s32.bindBuffer(s32.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function l() {
    return s32.createVertexArray();
  }
  function c(M) {
    return s32.bindVertexArray(M);
  }
  function h(M) {
    return s32.deleteVertexArray(M);
  }
  function u(M, L, k) {
    let F = k.wireframe === true, V = n[M.id];
    V === void 0 && (V = {}, n[M.id] = V);
    let q = V[L.id];
    q === void 0 && (q = {}, V[L.id] = q);
    let H = q[F];
    return H === void 0 && (H = d(l()), q[F] = H), H;
  }
  function d(M) {
    let L = [], k = [], F = [];
    for (let V = 0; V < e; V++)
      L[V] = 0, k[V] = 0, F[V] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: L, enabledAttributes: k, attributeDivisors: F, object: M, attributes: {}, index: null };
  }
  function f(M, L, k, F) {
    let V = r.attributes, q = L.attributes, H = 0, j = k.getAttributes();
    for (let G in j)
      if (j[G].location >= 0) {
        let gt = V[G], _t = q[G];
        if (_t === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (_t = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (_t = M.instanceColor)), gt === void 0 || gt.attribute !== _t || _t && gt.data !== _t.data)
          return true;
        H++;
      }
    return r.attributesNum !== H || r.index !== F;
  }
  function m(M, L, k, F) {
    let V = {}, q = L.attributes, H = 0, j = k.getAttributes();
    for (let G in j)
      if (j[G].location >= 0) {
        let gt = q[G];
        gt === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (gt = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (gt = M.instanceColor));
        let _t = {};
        _t.attribute = gt, gt && gt.data && (_t.data = gt.data), V[G] = _t, H++;
      }
    r.attributes = V, r.attributesNum = H, r.index = F;
  }
  function _() {
    let M = r.newAttributes;
    for (let L = 0, k = M.length; L < k; L++)
      M[L] = 0;
  }
  function g(M) {
    p(M, 0);
  }
  function p(M, L) {
    let k = r.newAttributes, F = r.enabledAttributes, V = r.attributeDivisors;
    k[M] = 1, F[M] === 0 && (s32.enableVertexAttribArray(M), F[M] = 1), V[M] !== L && (s32.vertexAttribDivisor(M, L), V[M] = L);
  }
  function v() {
    let M = r.newAttributes, L = r.enabledAttributes;
    for (let k = 0, F = L.length; k < F; k++)
      L[k] !== M[k] && (s32.disableVertexAttribArray(k), L[k] = 0);
  }
  function x(M, L, k, F, V, q, H) {
    H === true ? s32.vertexAttribIPointer(M, L, k, V, q) : s32.vertexAttribPointer(M, L, k, F, V, q);
  }
  function y(M, L, k, F) {
    _();
    let V = F.attributes, q = k.getAttributes(), H = L.defaultAttributeValues;
    for (let j in q) {
      let G = q[j];
      if (G.location >= 0) {
        let dt = V[j];
        if (dt === void 0 && (j === "instanceMatrix" && M.instanceMatrix && (dt = M.instanceMatrix), j === "instanceColor" && M.instanceColor && (dt = M.instanceColor)), dt !== void 0) {
          let gt = dt.normalized, _t = dt.itemSize, Ht = t.get(dt);
          if (Ht === void 0)
            continue;
          let Zt = Ht.buffer, W = Ht.type, et = Ht.bytesPerElement, vt = W === s32.INT || W === s32.UNSIGNED_INT || dt.gpuType === kc;
          if (dt.isInterleavedBufferAttribute) {
            let ct = dt.data, Lt = ct.stride, kt = dt.offset;
            if (ct.isInstancedInterleavedBuffer) {
              for (let Ut = 0; Ut < G.locationSize; Ut++)
                p(G.location + Ut, ct.meshPerAttribute);
              M.isInstancedMesh !== true && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ct.meshPerAttribute * ct.count);
            } else
              for (let Ut = 0; Ut < G.locationSize; Ut++)
                g(G.location + Ut);
            s32.bindBuffer(s32.ARRAY_BUFFER, Zt);
            for (let Ut = 0; Ut < G.locationSize; Ut++)
              x(G.location + Ut, _t / G.locationSize, W, gt, Lt * et, (kt + _t / G.locationSize * Ut) * et, vt);
          } else {
            if (dt.isInstancedBufferAttribute) {
              for (let ct = 0; ct < G.locationSize; ct++)
                p(G.location + ct, dt.meshPerAttribute);
              M.isInstancedMesh !== true && F._maxInstanceCount === void 0 && (F._maxInstanceCount = dt.meshPerAttribute * dt.count);
            } else
              for (let ct = 0; ct < G.locationSize; ct++)
                g(G.location + ct);
            s32.bindBuffer(s32.ARRAY_BUFFER, Zt);
            for (let ct = 0; ct < G.locationSize; ct++)
              x(G.location + ct, _t / G.locationSize, W, gt, _t * et, _t / G.locationSize * ct * et, vt);
          }
        } else if (H !== void 0) {
          let gt = H[j];
          if (gt !== void 0)
            switch (gt.length) {
              case 2:
                s32.vertexAttrib2fv(G.location, gt);
                break;
              case 3:
                s32.vertexAttrib3fv(G.location, gt);
                break;
              case 4:
                s32.vertexAttrib4fv(G.location, gt);
                break;
              default:
                s32.vertexAttrib1fv(G.location, gt);
            }
        }
      }
    }
    v();
  }
  function I() {
    P();
    for (let M in n) {
      let L = n[M];
      for (let k in L) {
        let F = L[k];
        for (let V in F)
          h(F[V].object), delete F[V];
        delete L[k];
      }
      delete n[M];
    }
  }
  function E(M) {
    if (n[M.id] === void 0)
      return;
    let L = n[M.id];
    for (let k in L) {
      let F = L[k];
      for (let V in F)
        h(F[V].object), delete F[V];
      delete L[k];
    }
    delete n[M.id];
  }
  function C(M) {
    for (let L in n) {
      let k = n[L];
      if (k[M.id] === void 0)
        continue;
      let F = k[M.id];
      for (let V in F)
        h(F[V].object), delete F[V];
      delete k[M.id];
    }
  }
  function P() {
    b(), a = true, r !== i && (r = i, c(r.object));
  }
  function b() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: o, reset: P, resetDefaultState: b, dispose: I, releaseStatesOfGeometry: E, releaseStatesOfProgram: C, initAttributes: _, enableAttribute: g, disableUnusedAttributes: v };
}
function W_(s32, t, e) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s32.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (s32.drawArraysInstanced(n, c, h, u), e.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0)
      return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let f = 0;
    for (let m = 0; m < u; m++)
      f += h[m];
    e.update(f, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0)
      return;
    let f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let m = 0; m < c.length; m++)
        a(c[m], h[m], d[m]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let m = 0;
      for (let _ = 0; _ < u; _++)
        m += h[_];
      for (let _ = 0; _ < d.length; _++)
        e.update(m, n, d[_]);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function X_(s32, t, e, n) {
  let i;
  function r() {
    if (i !== void 0)
      return i;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      let E = t.get("EXT_texture_filter_anisotropic");
      i = s32.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(E) {
    return !(E !== Be && n.convert(E) !== s32.getParameter(s32.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(E) {
    let C = E === tr && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(E !== An && n.convert(E) !== s32.getParameter(s32.IMPLEMENTATION_COLOR_READ_TYPE) && E !== We && !C);
  }
  function l(E) {
    if (E === "highp") {
      if (s32.getShaderPrecisionFormat(s32.VERTEX_SHADER, s32.HIGH_FLOAT).precision > 0 && s32.getShaderPrecisionFormat(s32.FRAGMENT_SHADER, s32.HIGH_FLOAT).precision > 0)
        return "highp";
      E = "mediump";
    }
    return E === "mediump" && s32.getShaderPrecisionFormat(s32.VERTEX_SHADER, s32.MEDIUM_FLOAT).precision > 0 && s32.getShaderPrecisionFormat(s32.FRAGMENT_SHADER, s32.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp", h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  let u = e.logarithmicDepthBuffer === true, d = s32.getParameter(s32.MAX_TEXTURE_IMAGE_UNITS), f = s32.getParameter(s32.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = s32.getParameter(s32.MAX_TEXTURE_SIZE), _ = s32.getParameter(s32.MAX_CUBE_MAP_TEXTURE_SIZE), g = s32.getParameter(s32.MAX_VERTEX_ATTRIBS), p = s32.getParameter(s32.MAX_VERTEX_UNIFORM_VECTORS), v = s32.getParameter(s32.MAX_VARYING_VECTORS), x = s32.getParameter(s32.MAX_FRAGMENT_UNIFORM_VECTORS), y = f > 0, I = s32.getParameter(s32.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, maxTextures: d, maxVertexTextures: f, maxTextureSize: m, maxCubemapSize: _, maxAttributes: g, maxVertexUniforms: p, maxVaryings: v, maxFragmentUniforms: x, vertexTextures: y, maxSamples: I };
}
function q_(s32) {
  let t = this, e = null, n = 0, i = false, r = false, a = new yn(), o = new zt(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    let f = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    e = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    let m = u.clippingPlanes, _ = u.clipIntersection, g = u.clipShadows, p = s32.get(u);
    if (!i || m === null || m.length === 0 || r && !g)
      r ? h(null) : c();
    else {
      let v = r ? 0 : n, x = v * 4, y = p.clippingState || null;
      l.value = y, y = h(m, d, x, f);
      for (let I = 0; I !== x; ++I)
        y[I] = e[I];
      p.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, d, f, m) {
    let _ = u !== null ? u.length : 0, g = null;
    if (_ !== 0) {
      if (g = l.value, m !== true || g === null) {
        let p = f + _ * 4, v = d.matrixWorldInverse;
        o.getNormalMatrix(v), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let x = 0, y = f; x !== _; ++x, y += 4)
          a.copy(u[x]).applyMatrix4(v, o), a.normal.toArray(g, y), g[y + 3] = a.constant;
      }
      l.value = g, l.needsUpdate = true;
    }
    return t.numPlanes = _, t.numIntersection = 0, g;
  }
}
function Y_(s32) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === na ? a.mapping = Yn : o === ia && (a.mapping = _i), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      let o = a.mapping;
      if (o === na || o === ia)
        if (t.has(a)) {
          let l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          let l = a.image;
          if (l && l.height > 0) {
            let c = new pl(l.height);
            return c.fromEquirectangularTexture(s32, a), t.set(a, c), a.addEventListener("dispose", i), e(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    let o = a.target;
    o.removeEventListener("dispose", i);
    let l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
var Ws = class extends Hs {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2, r = n - t, a = n + t, o = i + e, l = i - e;
    if (this.view !== null && this.view.enabled) {
      let c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
};
var Ji = 4;
var Hh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
var fi = 20;
var mo = new Ws();
var Gh = new ft();
var go = null;
var _o = 0;
var xo = 0;
var vo = false;
var ui = (1 + Math.sqrt(5)) / 2;
var ki = 1 / ui;
var Wh = [new T(-ui, ki, 0), new T(ui, ki, 0), new T(-ki, 0, ui), new T(ki, 0, ui), new T(0, ui, -ki), new T(0, ui, ki), new T(-1, 1, -1), new T(1, 1, -1), new T(-1, 1, 1), new T(1, 1, 1)];
var ga = class {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    go = this._renderer.getRenderTarget(), _o = this._renderer.getActiveCubeFace(), xo = this._renderer.getActiveMipmapLevel(), vo = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    let r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Yh(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = qh(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(go, _o, xo), this._renderer.xr.enabled = vo, t.scissorTest = false, Sr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === Yn || t.mapping === _i ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), go = this._renderer.getRenderTarget(), _o = this._renderer.getActiveCubeFace(), xo = this._renderer.getActiveMipmapLevel(), vo = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    let n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    let t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: ge, minFilter: ge, generateMipmaps: false, type: tr, format: Be, colorSpace: Kn, depthBuffer: false }, i = Xh(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Xh(t, e, n);
      let { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Z_(r)), this._blurMaterial = J_(r, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    let e = new de(this._lodPlanes[0], t);
    this._renderer.compile(e, mo);
  }
  _sceneToCubeUV(t, e, n, i) {
    let o = new Me(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Gh), h.toneMapping = Wn, h.autoClear = false;
    let f = new Tn({ name: "PMREM.Background", side: ze, depthWrite: false, depthTest: false }), m = new de(new rs(), f), _ = false, g = t.background;
    g ? g.isColor && (f.color.copy(g), t.background = null, _ = true) : (f.color.copy(Gh), _ = true);
    for (let p = 0; p < 6; p++) {
      let v = p % 3;
      v === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : v === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      let x = this._cubeSize;
      Sr(i, v * x, p > 2 ? x : 0, x, x), h.setRenderTarget(i), _ && h.render(m, o), h.render(t, o);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = g;
  }
  _textureToCubeUV(t, e) {
    let n = this._renderer, i = t.mapping === Yn || t.mapping === _i;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yh()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = qh());
    let r = i ? this._cubemapMaterial : this._equirectMaterial, a = new de(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    let l = this._cubeSize;
    Sr(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, mo);
  }
  _applyPMREM(t) {
    let e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    let i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      let a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Wh[(i - r - 1) % Wh.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, i, r) {
    let a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, a, o) {
    let l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    let h = 3, u = new de(this._lodPlanes[i], c), d = c.uniforms, f = this._sizeLods[n] - 1, m = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * fi - 1), _ = r / m, g = isFinite(r) ? 1 + Math.floor(h * _) : fi;
    g > fi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fi}`);
    let p = [], v = 0;
    for (let C = 0; C < fi; ++C) {
      let P = C / _, b = Math.exp(-P * P / 2);
      p.push(b), C === 0 ? v += b : C < g && (v += 2 * b);
    }
    for (let C = 0; C < p.length; C++)
      p[C] = p[C] / v;
    d.envMap.value = t.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    let { _lodMax: x } = this;
    d.dTheta.value = m, d.mipInt.value = x - n;
    let y = this._sizeLods[i], I = 3 * y * (i > x - Ji ? i - x + Ji : 0), E = 4 * (this._cubeSize - y);
    Sr(e, I, E, 3 * y, 2 * y), l.setRenderTarget(e), l.render(u, mo);
  }
};
function Z_(s32) {
  let t = [], e = [], n = [], i = s32, r = s32 - Ji + 1 + Hh.length;
  for (let a = 0; a < r; a++) {
    let o = Math.pow(2, i);
    e.push(o);
    let l = 1 / o;
    a > s32 - Ji ? l = Hh[a - s32 + Ji - 1] : a === 0 && (l = 0), n.push(l);
    let c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, _ = 3, g = 2, p = 1, v = new Float32Array(_ * m * f), x = new Float32Array(g * m * f), y = new Float32Array(p * m * f);
    for (let E = 0; E < f; E++) {
      let C = E % 3 * 2 / 3 - 1, P = E > 2 ? 0 : -1, b = [C, P, 0, C + 2 / 3, P, 0, C + 2 / 3, P + 1, 0, C, P, 0, C + 2 / 3, P + 1, 0, C, P + 1, 0];
      v.set(b, _ * m * E), x.set(d, g * m * E);
      let M = [E, E, E, E, E, E];
      y.set(M, p * m * E);
    }
    let I = new Gt();
    I.setAttribute("position", new ne(v, _)), I.setAttribute("uv", new ne(x, g)), I.setAttribute("faceIndex", new ne(y, p)), t.push(I), i > Ji && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Xh(s32, t, e) {
  let n = new Ze(s32, t, e);
  return n.texture.mapping = js, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function Sr(s32, t, e, n, i) {
  s32.viewport.set(t, e, n, i), s32.scissor.set(t, e, n, i);
}
function J_(s32, t, e) {
  let n = new Float32Array(fi), i = new T(0, 1, 0);
  return new $e({ name: "SphericalGaussianBlur", defines: { n: fi, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${s32}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Jc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Gn, depthTest: false, depthWrite: false });
}
function qh() {
  return new $e({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Jc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Gn, depthTest: false, depthWrite: false });
}
function Yh() {
  return new $e({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Jc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Gn, depthTest: false, depthWrite: false });
}
function Jc() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function $_(s32) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      let l = o.mapping, c = l === na || l === ia, h = l === Yn || l === _i;
      if (c || h) {
        let u = t.get(o), d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return e === null && (e = new ga(s32)), u = c ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          let f = o.image;
          return c && f && f.height > 0 || h && f && i(f) ? (e === null && (e = new ga(s32)), u = c ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0, c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    let l = o.target;
    l.removeEventListener("dispose", r);
    let c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: a };
}
function K_(s32) {
  let t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s32.getExtension("WEBGL_depth_texture") || s32.getExtension("MOZ_WEBGL_depth_texture") || s32.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s32.getExtension("EXT_texture_filter_anisotropic") || s32.getExtension("MOZ_EXT_texture_filter_anisotropic") || s32.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s32.getExtension("WEBGL_compressed_texture_s3tc") || s32.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s32.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s32.getExtension("WEBGL_compressed_texture_pvrtc") || s32.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s32.getExtension(n);
    }
    return t[n] = i, i;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    let i = e(n);
    return i === null && ji("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function Q_(s32, t, e, n) {
  let i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    let d = u.target;
    d.index !== null && t.remove(d.index);
    for (let m in d.attributes)
      t.remove(d.attributes[m]);
    for (let m in d.morphAttributes) {
      let _ = d.morphAttributes[m];
      for (let g = 0, p = _.length; g < p; g++)
        t.remove(_[g]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    let f = r.get(d);
    f && (t.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", a), i[d.id] = true, e.memory.geometries++), d;
  }
  function l(u) {
    let d = u.attributes;
    for (let m in d)
      t.update(d[m], s32.ARRAY_BUFFER);
    let f = u.morphAttributes;
    for (let m in f) {
      let _ = f[m];
      for (let g = 0, p = _.length; g < p; g++)
        t.update(_[g], s32.ARRAY_BUFFER);
    }
  }
  function c(u) {
    let d = [], f = u.index, m = u.attributes.position, _ = 0;
    if (f !== null) {
      let v = f.array;
      _ = f.version;
      for (let x = 0, y = v.length; x < y; x += 3) {
        let I = v[x + 0], E = v[x + 1], C = v[x + 2];
        d.push(I, E, E, C, C, I);
      }
    } else if (m !== void 0) {
      let v = m.array;
      _ = m.version;
      for (let x = 0, y = v.length / 3 - 1; x < y; x += 3) {
        let I = x + 0, E = x + 1, C = x + 2;
        d.push(I, E, E, C, C, I);
      }
    } else
      return;
    let g = new (af(d) ? ma : pa)(d, 1);
    g.version = _;
    let p = r.get(u);
    p && t.remove(p), r.set(u, g);
  }
  function h(u) {
    let d = r.get(u);
    if (d) {
      let f = u.index;
      f !== null && d.version < f.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function j_(s32, t, e) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function l(d, f) {
    s32.drawElements(n, f, r, d * a), e.update(f, n, 1);
  }
  function c(d, f, m) {
    m !== 0 && (s32.drawElementsInstanced(n, f, r, d * a, m), e.update(f, n, m));
  }
  function h(d, f, m) {
    if (m === 0)
      return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, d, 0, m);
    let g = 0;
    for (let p = 0; p < m; p++)
      g += f[p];
    e.update(g, n, 1);
  }
  function u(d, f, m, _) {
    if (m === 0)
      return;
    let g = t.get("WEBGL_multi_draw");
    if (g === null)
      for (let p = 0; p < d.length; p++)
        c(d[p] / a, f[p], _[p]);
    else {
      g.multiDrawElementsInstancedWEBGL(n, f, 0, r, d, 0, _, 0, m);
      let p = 0;
      for (let v = 0; v < m; v++)
        p += f[v];
      for (let v = 0; v < _.length; v++)
        e.update(p, n, _[v]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function t0(s32) {
  let t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case s32.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case s32.LINES:
        e.lines += o * (r / 2);
        break;
      case s32.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case s32.LINE_LOOP:
        e.lines += o * r;
        break;
      case s32.POINTS:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: i, update: n };
}
function e0(s32, t, e) {
  let n = /* @__PURE__ */ new WeakMap(), i = new ee();
  function r(a, o, l) {
    let c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0, d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let b = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", b);
      };
      d !== void 0 && d.texture.dispose();
      let f = o.morphAttributes.position !== void 0, m = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, g = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], v = o.morphAttributes.color || [], x = 0;
      f === true && (x = 1), m === true && (x = 2), _ === true && (x = 3);
      let y = o.attributes.position.count * x, I = 1;
      y > t.maxTextureSize && (I = Math.ceil(y / t.maxTextureSize), y = t.maxTextureSize);
      let E = new Float32Array(y * I * 4 * u), C = new ks(E, y, I, u);
      C.type = We, C.needsUpdate = true;
      let P = x * 4;
      for (let M = 0; M < u; M++) {
        let L = g[M], k = p[M], F = v[M], V = y * I * 4 * M;
        for (let q = 0; q < L.count; q++) {
          let H = q * P;
          f === true && (i.fromBufferAttribute(L, q), E[V + H + 0] = i.x, E[V + H + 1] = i.y, E[V + H + 2] = i.z, E[V + H + 3] = 0), m === true && (i.fromBufferAttribute(k, q), E[V + H + 4] = i.x, E[V + H + 5] = i.y, E[V + H + 6] = i.z, E[V + H + 7] = 0), _ === true && (i.fromBufferAttribute(F, q), E[V + H + 8] = i.x, E[V + H + 9] = i.y, E[V + H + 10] = i.z, E[V + H + 11] = F.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: C, size: new Z(y, I) }, n.set(o, d), o.addEventListener("dispose", b);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null)
      l.getUniforms().setValue(s32, "morphTexture", a.morphTexture, e);
    else {
      let f = 0;
      for (let _ = 0; _ < c.length; _++)
        f += c[_];
      let m = o.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(s32, "morphTargetBaseInfluence", m), l.getUniforms().setValue(s32, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s32, "morphTargetsTexture", d.texture, e), l.getUniforms().setValue(s32, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function n0(s32, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    let c = n.render.frame, h = l.geometry, u = t.get(l, h);
    if (i.get(u) !== c && (t.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), i.get(l) !== c && (e.update(l.instanceMatrix, s32.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, s32.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      let d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    let c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
var _a = class extends _e {
  constructor(t, e, n, i, r, a, o, l, c, h = Qi) {
    if (h !== Qi && h !== is)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Qi && (n = Zn), n === void 0 && h === is && (n = ns), super(null, i, r, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : we, this.minFilter = l !== void 0 ? l : we, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
};
var hf = new _e();
var Zh = new _a(1, 1);
var uf = new ks();
var df = new fa();
var ff = new os();
var Jh = [];
var $h = [];
var Kh = new Float32Array(16);
var Qh = new Float32Array(9);
var jh = new Float32Array(4);
function _s(s32, t, e) {
  let n = s32[0];
  if (n <= 0 || n > 0)
    return s32;
  let i = t * e, r = Jh[i];
  if (r === void 0 && (r = new Float32Array(i), Jh[i] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, s32[a].toArray(r, o);
  }
  return r;
}
function xe(s32, t) {
  if (s32.length !== t.length)
    return false;
  for (let e = 0, n = s32.length; e < n; e++)
    if (s32[e] !== t[e])
      return false;
  return true;
}
function ve(s32, t) {
  for (let e = 0, n = t.length; e < n; e++)
    s32[e] = t[e];
}
function Ga(s32, t) {
  let e = $h[t];
  e === void 0 && (e = new Int32Array(t), $h[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = s32.allocateTextureUnit();
  return e;
}
function i0(s32, t) {
  let e = this.cache;
  e[0] !== t && (s32.uniform1f(this.addr, t), e[0] = t);
}
function s0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s32.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (xe(e, t))
      return;
    s32.uniform2fv(this.addr, t), ve(e, t);
  }
}
function r0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s32.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (s32.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (xe(e, t))
      return;
    s32.uniform3fv(this.addr, t), ve(e, t);
  }
}
function a0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s32.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (xe(e, t))
      return;
    s32.uniform4fv(this.addr, t), ve(e, t);
  }
}
function o0(s32, t) {
  let e = this.cache, n = t.elements;
  if (n === void 0) {
    if (xe(e, t))
      return;
    s32.uniformMatrix2fv(this.addr, false, t), ve(e, t);
  } else {
    if (xe(e, n))
      return;
    jh.set(n), s32.uniformMatrix2fv(this.addr, false, jh), ve(e, n);
  }
}
function l0(s32, t) {
  let e = this.cache, n = t.elements;
  if (n === void 0) {
    if (xe(e, t))
      return;
    s32.uniformMatrix3fv(this.addr, false, t), ve(e, t);
  } else {
    if (xe(e, n))
      return;
    Qh.set(n), s32.uniformMatrix3fv(this.addr, false, Qh), ve(e, n);
  }
}
function c0(s32, t) {
  let e = this.cache, n = t.elements;
  if (n === void 0) {
    if (xe(e, t))
      return;
    s32.uniformMatrix4fv(this.addr, false, t), ve(e, t);
  } else {
    if (xe(e, n))
      return;
    Kh.set(n), s32.uniformMatrix4fv(this.addr, false, Kh), ve(e, n);
  }
}
function h0(s32, t) {
  let e = this.cache;
  e[0] !== t && (s32.uniform1i(this.addr, t), e[0] = t);
}
function u0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s32.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (xe(e, t))
      return;
    s32.uniform2iv(this.addr, t), ve(e, t);
  }
}
function d0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s32.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (xe(e, t))
      return;
    s32.uniform3iv(this.addr, t), ve(e, t);
  }
}
function f0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s32.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (xe(e, t))
      return;
    s32.uniform4iv(this.addr, t), ve(e, t);
  }
}
function p0(s32, t) {
  let e = this.cache;
  e[0] !== t && (s32.uniform1ui(this.addr, t), e[0] = t);
}
function m0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s32.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (xe(e, t))
      return;
    s32.uniform2uiv(this.addr, t), ve(e, t);
  }
}
function g0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s32.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (xe(e, t))
      return;
    s32.uniform3uiv(this.addr, t), ve(e, t);
  }
}
function _0(s32, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s32.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (xe(e, t))
      return;
    s32.uniform4uiv(this.addr, t), ve(e, t);
  }
}
function x0(s32, t, e) {
  let n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s32.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s32.SAMPLER_2D_SHADOW ? (Zh.compareFunction = rf, r = Zh) : r = hf, e.setTexture2D(t || r, i);
}
function v0(s32, t, e) {
  let n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s32.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || df, i);
}
function y0(s32, t, e) {
  let n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s32.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || ff, i);
}
function M0(s32, t, e) {
  let n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s32.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || uf, i);
}
function S0(s32) {
  switch (s32) {
    case 5126:
      return i0;
    case 35664:
      return s0;
    case 35665:
      return r0;
    case 35666:
      return a0;
    case 35674:
      return o0;
    case 35675:
      return l0;
    case 35676:
      return c0;
    case 5124:
    case 35670:
      return h0;
    case 35667:
    case 35671:
      return u0;
    case 35668:
    case 35672:
      return d0;
    case 35669:
    case 35673:
      return f0;
    case 5125:
      return p0;
    case 36294:
      return m0;
    case 36295:
      return g0;
    case 36296:
      return _0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return x0;
    case 35679:
    case 36299:
    case 36307:
      return v0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return y0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return M0;
  }
}
function b0(s32, t) {
  s32.uniform1fv(this.addr, t);
}
function w0(s32, t) {
  let e = _s(t, this.size, 2);
  s32.uniform2fv(this.addr, e);
}
function E0(s32, t) {
  let e = _s(t, this.size, 3);
  s32.uniform3fv(this.addr, e);
}
function A0(s32, t) {
  let e = _s(t, this.size, 4);
  s32.uniform4fv(this.addr, e);
}
function T0(s32, t) {
  let e = _s(t, this.size, 4);
  s32.uniformMatrix2fv(this.addr, false, e);
}
function C0(s32, t) {
  let e = _s(t, this.size, 9);
  s32.uniformMatrix3fv(this.addr, false, e);
}
function R0(s32, t) {
  let e = _s(t, this.size, 16);
  s32.uniformMatrix4fv(this.addr, false, e);
}
function P0(s32, t) {
  s32.uniform1iv(this.addr, t);
}
function I0(s32, t) {
  s32.uniform2iv(this.addr, t);
}
function L0(s32, t) {
  s32.uniform3iv(this.addr, t);
}
function U0(s32, t) {
  s32.uniform4iv(this.addr, t);
}
function D0(s32, t) {
  s32.uniform1uiv(this.addr, t);
}
function N0(s32, t) {
  s32.uniform2uiv(this.addr, t);
}
function F0(s32, t) {
  s32.uniform3uiv(this.addr, t);
}
function O0(s32, t) {
  s32.uniform4uiv(this.addr, t);
}
function B0(s32, t, e) {
  let n = this.cache, i = t.length, r = Ga(e, i);
  xe(n, r) || (s32.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTexture2D(t[a] || hf, r[a]);
}
function z0(s32, t, e) {
  let n = this.cache, i = t.length, r = Ga(e, i);
  xe(n, r) || (s32.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTexture3D(t[a] || df, r[a]);
}
function k0(s32, t, e) {
  let n = this.cache, i = t.length, r = Ga(e, i);
  xe(n, r) || (s32.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTextureCube(t[a] || ff, r[a]);
}
function V0(s32, t, e) {
  let n = this.cache, i = t.length, r = Ga(e, i);
  xe(n, r) || (s32.uniform1iv(this.addr, r), ve(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTexture2DArray(t[a] || uf, r[a]);
}
function H0(s32) {
  switch (s32) {
    case 5126:
      return b0;
    case 35664:
      return w0;
    case 35665:
      return E0;
    case 35666:
      return A0;
    case 35674:
      return T0;
    case 35675:
      return C0;
    case 35676:
      return R0;
    case 5124:
    case 35670:
      return P0;
    case 35667:
    case 35671:
      return I0;
    case 35668:
    case 35672:
      return L0;
    case 35669:
    case 35673:
      return U0;
    case 5125:
      return D0;
    case 36294:
      return N0;
    case 36295:
      return F0;
    case 36296:
      return O0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return B0;
    case 35679:
    case 36299:
    case 36307:
      return z0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return k0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return V0;
  }
}
var ml = class {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = S0(e.type);
  }
};
var gl = class {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = H0(e.type);
  }
};
var _l = class {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    let i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      let o = i[r];
      o.setValue(t, e[o.id], n);
    }
  }
};
var yo = /(\w+)(\])?(\[|\.)?/g;
function tu(s32, t) {
  s32.seq.push(t), s32.map[t.id] = t;
}
function G0(s32, t, e) {
  let n = s32.name, i = n.length;
  for (yo.lastIndex = 0; ; ) {
    let r = yo.exec(n), a = yo.lastIndex, o = r[1], l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      tu(e, c === void 0 ? new ml(o, s32, t) : new gl(o, s32, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new _l(o), tu(e, u)), e = u;
    }
  }
}
var es = class {
  constructor(t, e) {
    this.seq = [], this.map = {};
    let n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      let r = t.getActiveUniform(e, i), a = t.getUniformLocation(e, r.name);
      G0(r, a, this);
    }
  }
  setValue(t, e, n, i) {
    let r = this.map[e];
    r !== void 0 && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    let i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      let o = e[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(t, l.value, i);
    }
  }
  static seqWithValue(t, e) {
    let n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      let a = t[i];
      a.id in e && n.push(a);
    }
    return n;
  }
};
function eu(s32, t, e) {
  let n = s32.createShader(t);
  return s32.shaderSource(n, e), s32.compileShader(n), n;
}
var W0 = 37297;
var X0 = 0;
function q0(s32, t) {
  let e = s32.split(`
`), n = [], i = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = i; a < r; a++) {
    let o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
function Y0(s32) {
  let t = Jt.getPrimaries(Jt.workingColorSpace), e = Jt.getPrimaries(s32), n;
  switch (t === e ? n = "" : t === ha && e === ca ? n = "LinearDisplayP3ToLinearSRGB" : t === ca && e === ha && (n = "LinearSRGBToLinearDisplayP3"), s32) {
    case Kn:
    case Ha:
      return [n, "LinearTransferOETF"];
    case sn:
    case Yc:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s32), [n, "LinearTransferOETF"];
  }
}
function nu(s32, t, e) {
  let n = s32.getShaderParameter(t, s32.COMPILE_STATUS), i = s32.getShaderInfoLog(t).trim();
  if (n && i === "")
    return "";
  let r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    let a = parseInt(r[1]);
    return e.toUpperCase() + `

` + i + `

` + q0(s32.getShaderSource(t), a);
  } else
    return i;
}
function Z0(s32, t) {
  let e = Y0(t);
  return `vec4 ${s32}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function J0(s32, t) {
  let e;
  switch (t) {
    case ep:
      e = "Linear";
      break;
    case np:
      e = "Reinhard";
      break;
    case ip:
      e = "OptimizedCineon";
      break;
    case sp:
      e = "ACESFilmic";
      break;
    case ap:
      e = "AgX";
      break;
    case op:
      e = "Neutral";
      break;
    case rp:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + s32 + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
var br = new T();
function $0() {
  Jt.getLuminanceCoefficients(br);
  let s32 = br.x.toFixed(4), t = br.y.toFixed(4), e = br.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s32}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function K0(s32) {
  return [s32.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s32.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Us).join(`
`);
}
function Q0(s32) {
  let t = [];
  for (let e in s32) {
    let n = s32[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function j0(s32, t) {
  let e = {}, n = s32.getProgramParameter(t, s32.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    let r = s32.getActiveAttrib(t, i), a = r.name, o = 1;
    r.type === s32.FLOAT_MAT2 && (o = 2), r.type === s32.FLOAT_MAT3 && (o = 3), r.type === s32.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: s32.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function Us(s32) {
  return s32 !== "";
}
function iu(s32, t) {
  let e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return s32.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function su(s32, t) {
  return s32.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var tx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function xl(s32) {
  return s32.replace(tx, nx);
}
var ex = /* @__PURE__ */ new Map();
function nx(s32, t) {
  let e = Vt[t];
  if (e === void 0) {
    let n = ex.get(t);
    if (n !== void 0)
      e = Vt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return xl(e);
}
var ix = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ru(s32) {
  return s32.replace(ix, sx);
}
function sx(s32, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function au(s32) {
  let t = `precision ${s32.precision} float;
	precision ${s32.precision} int;
	precision ${s32.precision} sampler2D;
	precision ${s32.precision} samplerCube;
	precision ${s32.precision} sampler3D;
	precision ${s32.precision} sampler2DArray;
	precision ${s32.precision} sampler2DShadow;
	precision ${s32.precision} samplerCubeShadow;
	precision ${s32.precision} sampler2DArrayShadow;
	precision ${s32.precision} isampler2D;
	precision ${s32.precision} isampler3D;
	precision ${s32.precision} isamplerCube;
	precision ${s32.precision} isampler2DArray;
	precision ${s32.precision} usampler2D;
	precision ${s32.precision} usampler3D;
	precision ${s32.precision} usamplerCube;
	precision ${s32.precision} usampler2DArray;
	`;
  return s32.precision === "highp" ? t += `
#define HIGH_PRECISION` : s32.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : s32.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function rx(s32) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return s32.shadowMapType === qd ? t = "SHADOWMAP_TYPE_PCF" : s32.shadowMapType === Tf ? t = "SHADOWMAP_TYPE_PCF_SOFT" : s32.shadowMapType === vn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function ax(s32) {
  let t = "ENVMAP_TYPE_CUBE";
  if (s32.envMap)
    switch (s32.envMapMode) {
      case Yn:
      case _i:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case js:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function ox(s32) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (s32.envMap)
    switch (s32.envMapMode) {
      case _i:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function lx(s32) {
  let t = "ENVMAP_BLENDING_NONE";
  if (s32.envMap)
    switch (s32.combine) {
      case ka:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case jf:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case tp:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function cx(s32) {
  let t = s32.envMapCubeUVHeight;
  if (t === null)
    return null;
  let e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function hx(s32, t, e, n) {
  let i = s32.getContext(), r = e.defines, a = e.vertexShader, o = e.fragmentShader, l = rx(e), c = ax(e), h = ox(e), u = lx(e), d = cx(e), f = K0(e), m = Q0(r), _ = i.createProgram(), g, p, v = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m].filter(Us).join(`
`), g.length > 0 && (g += `
`), p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m].filter(Us).join(`
`), p.length > 0 && (p += `
`)) : (g = [au(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Us).join(`
`), p = [au(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, m, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Wn ? "#define TONE_MAPPING" : "", e.toneMapping !== Wn ? Vt.tonemapping_pars_fragment : "", e.toneMapping !== Wn ? J0("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Vt.colorspace_pars_fragment, Z0("linearToOutputTexel", e.outputColorSpace), $0(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Us).join(`
`)), a = xl(a), a = iu(a, e), a = su(a, e), o = xl(o), o = iu(o, e), o = su(o, e), a = ru(a), o = ru(o), e.isRawShaderMaterial !== true && (v = `#version 300 es
`, g = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + g, p = ["#define varying in", e.glslVersion === fh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === fh ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  let x = v + g + a, y = v + p + o, I = eu(i, i.VERTEX_SHADER, x), E = eu(i, i.FRAGMENT_SHADER, y);
  i.attachShader(_, I), i.attachShader(_, E), e.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === true && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function C(L) {
    if (s32.debug.checkShaderErrors) {
      let k = i.getProgramInfoLog(_).trim(), F = i.getShaderInfoLog(I).trim(), V = i.getShaderInfoLog(E).trim(), q = true, H = true;
      if (i.getProgramParameter(_, i.LINK_STATUS) === false)
        if (q = false, typeof s32.debug.onShaderError == "function")
          s32.debug.onShaderError(i, _, I, E);
        else {
          let j = nu(i, I, "vertex"), G = nu(i, E, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + L.name + `
Material Type: ` + L.type + `

Program Info Log: ` + k + `
` + j + `
` + G);
        }
      else
        k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (F === "" || V === "") && (H = false);
      H && (L.diagnostics = { runnable: q, programLog: k, vertexShader: { log: F, prefix: g }, fragmentShader: { log: V, prefix: p } });
    }
    i.deleteShader(I), i.deleteShader(E), P = new es(i, _), b = j0(i, _);
  }
  let P;
  this.getUniforms = function() {
    return P === void 0 && C(this), P;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && C(this), b;
  };
  let M = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = i.getProgramParameter(_, W0)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = X0++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = I, this.fragmentShader = E, this;
}
var ux = 0;
var vl = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    let e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    let e = this.materialCache.get(t);
    for (let n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    let e = this.materialCache, n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    let e = this.shaderCache, n = e.get(t);
    return n === void 0 && (n = new yl(t), e.set(t, n)), n;
  }
};
var yl = class {
  constructor(t) {
    this.id = ux++, this.code = t, this.usedTimes = 0;
  }
};
function dx(s32, t, e, n, i, r, a) {
  let o = new Vs(), l = new vl(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures, f = i.precision, m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(b) {
    return c.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function g(b, M, L, k, F) {
    let V = k.fog, q = F.geometry, H = b.isMeshStandardMaterial ? k.environment : null, j = (b.isMeshStandardMaterial ? e : t).get(b.envMap || H), G = j && j.mapping === js ? j.image.height : null, dt = m[b.type];
    b.precision !== null && (f = i.getMaxPrecision(b.precision), f !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", f, "instead."));
    let gt = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, _t = gt !== void 0 ? gt.length : 0, Ht = 0;
    q.morphAttributes.position !== void 0 && (Ht = 1), q.morphAttributes.normal !== void 0 && (Ht = 2), q.morphAttributes.color !== void 0 && (Ht = 3);
    let Zt, W, et, vt;
    if (dt) {
      let $t = cn[dt];
      Zt = $t.vertexShader, W = $t.fragmentShader;
    } else
      Zt = b.vertexShader, W = b.fragmentShader, l.update(b), et = l.getVertexShaderID(b), vt = l.getFragmentShaderID(b);
    let ct = s32.getRenderTarget(), Lt = F.isInstancedMesh === true, kt = F.isBatchedMesh === true, Ut = !!b.map, Yt = !!b.matcap, A = !!j, it = !!b.aoMap, tt = !!b.lightMap, ht = !!b.bumpMap, X = !!b.normalMap, Tt = !!b.displacementMap, ut = !!b.emissiveMap, yt = !!b.metalnessMap, R = !!b.roughnessMap, S = b.anisotropy > 0, B = b.clearcoat > 0, Q = b.dispersion > 0, K = b.iridescence > 0, $ = b.sheen > 0, At = b.transmission > 0, ot = S && !!b.anisotropyMap, xt = B && !!b.clearcoatMap, Ot = B && !!b.clearcoatNormalMap, nt = B && !!b.clearcoatRoughnessMap, mt = K && !!b.iridescenceMap, Xt = K && !!b.iridescenceThicknessMap, Nt = $ && !!b.sheenColorMap, Mt = $ && !!b.sheenRoughnessMap, Ft = !!b.specularMap, Wt = !!b.specularColorMap, re = !!b.specularIntensityMap, U = At && !!b.transmissionMap, st = At && !!b.thicknessMap, Y = !!b.gradientMap, J = !!b.alphaMap, at = b.alphaTest > 0, Pt = !!b.alphaHash, qt = !!b.extensions, fe = Wn;
    b.toneMapped && (ct === null || ct.isXRRenderTarget === true) && (fe = s32.toneMapping);
    let Se = { shaderID: dt, shaderType: b.type, shaderName: b.name, vertexShader: Zt, fragmentShader: W, defines: b.defines, customVertexShaderID: et, customFragmentShaderID: vt, isRawShaderMaterial: b.isRawShaderMaterial === true, glslVersion: b.glslVersion, precision: f, batching: kt, batchingColor: kt && F._colorsTexture !== null, instancing: Lt, instancingColor: Lt && F.instanceColor !== null, instancingMorph: Lt && F.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: ct === null ? s32.outputColorSpace : ct.isXRRenderTarget === true ? ct.texture.colorSpace : Kn, alphaToCoverage: !!b.alphaToCoverage, map: Ut, matcap: Yt, envMap: A, envMapMode: A && j.mapping, envMapCubeUVHeight: G, aoMap: it, lightMap: tt, bumpMap: ht, normalMap: X, displacementMap: d && Tt, emissiveMap: ut, normalMapObjectSpace: X && b.normalMapType === pp, normalMapTangentSpace: X && b.normalMapType === Si, metalnessMap: yt, roughnessMap: R, anisotropy: S, anisotropyMap: ot, clearcoat: B, clearcoatMap: xt, clearcoatNormalMap: Ot, clearcoatRoughnessMap: nt, dispersion: Q, iridescence: K, iridescenceMap: mt, iridescenceThicknessMap: Xt, sheen: $, sheenColorMap: Nt, sheenRoughnessMap: Mt, specularMap: Ft, specularColorMap: Wt, specularIntensityMap: re, transmission: At, transmissionMap: U, thicknessMap: st, gradientMap: Y, opaque: b.transparent === false && b.blending === Ki && b.alphaToCoverage === false, alphaMap: J, alphaTest: at, alphaHash: Pt, combine: b.combine, mapUv: Ut && _(b.map.channel), aoMapUv: it && _(b.aoMap.channel), lightMapUv: tt && _(b.lightMap.channel), bumpMapUv: ht && _(b.bumpMap.channel), normalMapUv: X && _(b.normalMap.channel), displacementMapUv: Tt && _(b.displacementMap.channel), emissiveMapUv: ut && _(b.emissiveMap.channel), metalnessMapUv: yt && _(b.metalnessMap.channel), roughnessMapUv: R && _(b.roughnessMap.channel), anisotropyMapUv: ot && _(b.anisotropyMap.channel), clearcoatMapUv: xt && _(b.clearcoatMap.channel), clearcoatNormalMapUv: Ot && _(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: nt && _(b.clearcoatRoughnessMap.channel), iridescenceMapUv: mt && _(b.iridescenceMap.channel), iridescenceThicknessMapUv: Xt && _(b.iridescenceThicknessMap.channel), sheenColorMapUv: Nt && _(b.sheenColorMap.channel), sheenRoughnessMapUv: Mt && _(b.sheenRoughnessMap.channel), specularMapUv: Ft && _(b.specularMap.channel), specularColorMapUv: Wt && _(b.specularColorMap.channel), specularIntensityMapUv: re && _(b.specularIntensityMap.channel), transmissionMapUv: U && _(b.transmissionMap.channel), thicknessMapUv: st && _(b.thicknessMap.channel), alphaMapUv: J && _(b.alphaMap.channel), vertexTangents: !!q.attributes.tangent && (X || S), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === true && !!q.attributes.color && q.attributes.color.itemSize === 4, pointsUvs: F.isPoints === true && !!q.attributes.uv && (Ut || J), fog: !!V, useFog: b.fog === true, fogExp2: !!V && V.isFogExp2, flatShading: b.flatShading === true, sizeAttenuation: b.sizeAttenuation === true, logarithmicDepthBuffer: u, skinning: F.isSkinnedMesh === true, morphTargets: q.morphAttributes.position !== void 0, morphNormals: q.morphAttributes.normal !== void 0, morphColors: q.morphAttributes.color !== void 0, morphTargetsCount: _t, morphTextureStride: Ht, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: b.dithering, shadowMapEnabled: s32.shadowMap.enabled && L.length > 0, shadowMapType: s32.shadowMap.type, toneMapping: fe, decodeVideoTexture: Ut && b.map.isVideoTexture === true && Jt.getTransfer(b.map.colorSpace) === se, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === Mn, flipSided: b.side === ze, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: qt && b.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (qt && b.extensions.multiDraw === true || kt) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() };
    return Se.vertexUv1s = c.has(1), Se.vertexUv2s = c.has(2), Se.vertexUv3s = c.has(3), c.clear(), Se;
  }
  function p(b) {
    let M = [];
    if (b.shaderID ? M.push(b.shaderID) : (M.push(b.customVertexShaderID), M.push(b.customFragmentShaderID)), b.defines !== void 0)
      for (let L in b.defines)
        M.push(L), M.push(b.defines[L]);
    return b.isRawShaderMaterial === false && (v(M, b), x(M, b), M.push(s32.outputColorSpace)), M.push(b.customProgramCacheKey), M.join();
  }
  function v(b, M) {
    b.push(M.precision), b.push(M.outputColorSpace), b.push(M.envMapMode), b.push(M.envMapCubeUVHeight), b.push(M.mapUv), b.push(M.alphaMapUv), b.push(M.lightMapUv), b.push(M.aoMapUv), b.push(M.bumpMapUv), b.push(M.normalMapUv), b.push(M.displacementMapUv), b.push(M.emissiveMapUv), b.push(M.metalnessMapUv), b.push(M.roughnessMapUv), b.push(M.anisotropyMapUv), b.push(M.clearcoatMapUv), b.push(M.clearcoatNormalMapUv), b.push(M.clearcoatRoughnessMapUv), b.push(M.iridescenceMapUv), b.push(M.iridescenceThicknessMapUv), b.push(M.sheenColorMapUv), b.push(M.sheenRoughnessMapUv), b.push(M.specularMapUv), b.push(M.specularColorMapUv), b.push(M.specularIntensityMapUv), b.push(M.transmissionMapUv), b.push(M.thicknessMapUv), b.push(M.combine), b.push(M.fogExp2), b.push(M.sizeAttenuation), b.push(M.morphTargetsCount), b.push(M.morphAttributeCount), b.push(M.numDirLights), b.push(M.numPointLights), b.push(M.numSpotLights), b.push(M.numSpotLightMaps), b.push(M.numHemiLights), b.push(M.numRectAreaLights), b.push(M.numDirLightShadows), b.push(M.numPointLightShadows), b.push(M.numSpotLightShadows), b.push(M.numSpotLightShadowsWithMaps), b.push(M.numLightProbes), b.push(M.shadowMapType), b.push(M.toneMapping), b.push(M.numClippingPlanes), b.push(M.numClipIntersection), b.push(M.depthPacking);
  }
  function x(b, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), b.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.skinning && o.enable(4), M.morphTargets && o.enable(5), M.morphNormals && o.enable(6), M.morphColors && o.enable(7), M.premultipliedAlpha && o.enable(8), M.shadowMapEnabled && o.enable(9), M.doubleSided && o.enable(10), M.flipSided && o.enable(11), M.useDepthPacking && o.enable(12), M.dithering && o.enable(13), M.transmission && o.enable(14), M.sheen && o.enable(15), M.opaque && o.enable(16), M.pointsUvs && o.enable(17), M.decodeVideoTexture && o.enable(18), M.alphaToCoverage && o.enable(19), b.push(o.mask);
  }
  function y(b) {
    let M = m[b.type], L;
    if (M) {
      let k = cn[M];
      L = nm.clone(k.uniforms);
    } else
      L = b.uniforms;
    return L;
  }
  function I(b, M) {
    let L;
    for (let k = 0, F = h.length; k < F; k++) {
      let V = h[k];
      if (V.cacheKey === M) {
        L = V, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new hx(s32, M, b, r), h.push(L)), L;
  }
  function E(b) {
    if (--b.usedTimes === 0) {
      let M = h.indexOf(b);
      h[M] = h[h.length - 1], h.pop(), b.destroy();
    }
  }
  function C(b) {
    l.remove(b);
  }
  function P() {
    l.dispose();
  }
  return { getParameters: g, getProgramCacheKey: p, getUniforms: y, acquireProgram: I, releaseProgram: E, releaseShaderCache: C, programs: h, dispose: P };
}
function fx() {
  let s32 = /* @__PURE__ */ new WeakMap();
  function t(r) {
    let a = s32.get(r);
    return a === void 0 && (a = {}, s32.set(r, a)), a;
  }
  function e(r) {
    s32.delete(r);
  }
  function n(r, a, o) {
    s32.get(r)[a] = o;
  }
  function i() {
    s32 = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, remove: e, update: n, dispose: i };
}
function px(s32, t) {
  return s32.groupOrder !== t.groupOrder ? s32.groupOrder - t.groupOrder : s32.renderOrder !== t.renderOrder ? s32.renderOrder - t.renderOrder : s32.material.id !== t.material.id ? s32.material.id - t.material.id : s32.z !== t.z ? s32.z - t.z : s32.id - t.id;
}
function ou(s32, t) {
  return s32.groupOrder !== t.groupOrder ? s32.groupOrder - t.groupOrder : s32.renderOrder !== t.renderOrder ? s32.renderOrder - t.renderOrder : s32.z !== t.z ? t.z - s32.z : s32.id - t.id;
}
function lu() {
  let s32 = [], t = 0, e = [], n = [], i = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, f, m, _, g) {
    let p = s32[t];
    return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: m, renderOrder: u.renderOrder, z: _, group: g }, s32[t] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = _, p.group = g), t++, p;
  }
  function o(u, d, f, m, _, g) {
    let p = a(u, d, f, m, _, g);
    f.transmission > 0 ? n.push(p) : f.transparent === true ? i.push(p) : e.push(p);
  }
  function l(u, d, f, m, _, g) {
    let p = a(u, d, f, m, _, g);
    f.transmission > 0 ? n.unshift(p) : f.transparent === true ? i.unshift(p) : e.unshift(p);
  }
  function c(u, d) {
    e.length > 1 && e.sort(u || px), n.length > 1 && n.sort(d || ou), i.length > 1 && i.sort(d || ou);
  }
  function h() {
    for (let u = t, d = s32.length; u < d; u++) {
      let f = s32[u];
      if (f.id === null)
        break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: i, init: r, push: o, unshift: l, finish: h, sort: c };
}
function mx() {
  let s32 = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    let r = s32.get(n), a;
    return r === void 0 ? (a = new lu(), s32.set(n, [a])) : i >= r.length ? (a = new lu(), r.push(a)) : a = r[i], a;
  }
  function e() {
    s32 = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function gx() {
  let s32 = {};
  return { get: function(t) {
    if (s32[t.id] !== void 0)
      return s32[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new T(), color: new ft() };
        break;
      case "SpotLight":
        e = { position: new T(), direction: new T(), color: new ft(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new T(), color: new ft(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new T(), skyColor: new ft(), groundColor: new ft() };
        break;
      case "RectAreaLight":
        e = { color: new ft(), position: new T(), halfWidth: new T(), halfHeight: new T() };
        break;
    }
    return s32[t.id] = e, e;
  } };
}
function _x() {
  let s32 = {};
  return { get: function(t) {
    if (s32[t.id] !== void 0)
      return s32[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Z() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Z() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Z(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s32[t.id] = e, e;
  } };
}
var xx = 0;
function vx(s32, t) {
  return (t.castShadow ? 2 : 0) - (s32.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (s32.map ? 1 : 0);
}
function yx(s32) {
  let t = new gx(), e = _x(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++)
    n.probe.push(new T());
  let i = new T(), r = new Rt(), a = new Rt();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let b = 0; b < 9; b++)
      n.probe[b].set(0, 0, 0);
    let f = 0, m = 0, _ = 0, g = 0, p = 0, v = 0, x = 0, y = 0, I = 0, E = 0, C = 0;
    c.sort(vx);
    for (let b = 0, M = c.length; b < M; b++) {
      let L = c[b], k = L.color, F = L.intensity, V = L.distance, q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight)
        h += k.r * F, u += k.g * F, d += k.b * F;
      else if (L.isLightProbe) {
        for (let H = 0; H < 9; H++)
          n.probe[H].addScaledVector(L.sh.coefficients[H], F);
        C++;
      } else if (L.isDirectionalLight) {
        let H = t.get(L);
        if (H.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          let j = L.shadow, G = e.get(L);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, n.directionalShadow[f] = G, n.directionalShadowMap[f] = q, n.directionalShadowMatrix[f] = L.shadow.matrix, v++;
        }
        n.directional[f] = H, f++;
      } else if (L.isSpotLight) {
        let H = t.get(L);
        H.position.setFromMatrixPosition(L.matrixWorld), H.color.copy(k).multiplyScalar(F), H.distance = V, H.coneCos = Math.cos(L.angle), H.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), H.decay = L.decay, n.spot[_] = H;
        let j = L.shadow;
        if (L.map && (n.spotLightMap[I] = L.map, I++, j.updateMatrices(L), L.castShadow && E++), n.spotLightMatrix[_] = j.matrix, L.castShadow) {
          let G = e.get(L);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, n.spotShadow[_] = G, n.spotShadowMap[_] = q, y++;
        }
        _++;
      } else if (L.isRectAreaLight) {
        let H = t.get(L);
        H.color.copy(k).multiplyScalar(F), H.halfWidth.set(L.width * 0.5, 0, 0), H.halfHeight.set(0, L.height * 0.5, 0), n.rectArea[g] = H, g++;
      } else if (L.isPointLight) {
        let H = t.get(L);
        if (H.color.copy(L.color).multiplyScalar(L.intensity), H.distance = L.distance, H.decay = L.decay, L.castShadow) {
          let j = L.shadow, G = e.get(L);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, G.shadowCameraNear = j.camera.near, G.shadowCameraFar = j.camera.far, n.pointShadow[m] = G, n.pointShadowMap[m] = q, n.pointShadowMatrix[m] = L.shadow.matrix, x++;
        }
        n.point[m] = H, m++;
      } else if (L.isHemisphereLight) {
        let H = t.get(L);
        H.skyColor.copy(L.color).multiplyScalar(F), H.groundColor.copy(L.groundColor).multiplyScalar(F), n.hemi[p] = H, p++;
      }
    }
    g > 0 && (s32.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = lt.LTC_FLOAT_1, n.rectAreaLTC2 = lt.LTC_FLOAT_2) : (n.rectAreaLTC1 = lt.LTC_HALF_1, n.rectAreaLTC2 = lt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    let P = n.hash;
    (P.directionalLength !== f || P.pointLength !== m || P.spotLength !== _ || P.rectAreaLength !== g || P.hemiLength !== p || P.numDirectionalShadows !== v || P.numPointShadows !== x || P.numSpotShadows !== y || P.numSpotMaps !== I || P.numLightProbes !== C) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = g, n.point.length = m, n.hemi.length = p, n.directionalShadow.length = v, n.directionalShadowMap.length = v, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = v, n.pointShadowMatrix.length = x, n.spotLightMatrix.length = y + I - E, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = E, n.numLightProbes = C, P.directionalLength = f, P.pointLength = m, P.spotLength = _, P.rectAreaLength = g, P.hemiLength = p, P.numDirectionalShadows = v, P.numPointShadows = x, P.numSpotShadows = y, P.numSpotMaps = I, P.numLightProbes = C, n.version = xx++);
  }
  function l(c, h) {
    let u = 0, d = 0, f = 0, m = 0, _ = 0, g = h.matrixWorldInverse;
    for (let p = 0, v = c.length; p < v; p++) {
      let x = c[p];
      if (x.isDirectionalLight) {
        let y = n.directional[u];
        y.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(g), u++;
      } else if (x.isSpotLight) {
        let y = n.spot[f];
        y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(g), y.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(g), f++;
      } else if (x.isRectAreaLight) {
        let y = n.rectArea[m];
        y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(g), a.identity(), r.copy(x.matrixWorld), r.premultiply(g), a.extractRotation(r), y.halfWidth.set(x.width * 0.5, 0, 0), y.halfHeight.set(0, x.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), m++;
      } else if (x.isPointLight) {
        let y = n.point[d];
        y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(g), d++;
      } else if (x.isHemisphereLight) {
        let y = n.hemi[_];
        y.direction.setFromMatrixPosition(x.matrixWorld), y.direction.transformDirection(g), _++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function cu(s32) {
  let t = new yx(s32), e = [], n = [];
  function i(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  let c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function Mx(s32) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, r = 0) {
    let a = t.get(i), o;
    return a === void 0 ? (o = new cu(s32), t.set(i, [o])) : r >= a.length ? (o = new cu(s32), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
var xa = class extends Ae {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = dp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
};
var va = class extends Ae {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
};
var Sx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
var bx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function wx(s32, t, e) {
  let n = new ls(), i = new Z(), r = new Z(), a = new ee(), o = new xa({ depthPacking: fp }), l = new va(), c = {}, h = e.maxTextureSize, u = { [qn]: ze, [ze]: qn, [Mn]: Mn }, d = new $e({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Z() }, radius: { value: 4 } }, vertexShader: Sx, fragmentShader: bx }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  let m = new Gt();
  m.setAttribute("position", new ne(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  let _ = new de(m, d), g = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = qd;
  let p = this.type;
  this.render = function(E, C, P) {
    if (g.enabled === false || g.autoUpdate === false && g.needsUpdate === false || E.length === 0)
      return;
    let b = s32.getRenderTarget(), M = s32.getActiveCubeFace(), L = s32.getActiveMipmapLevel(), k = s32.state;
    k.setBlending(Gn), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(true), k.setScissorTest(false);
    let F = p !== vn && this.type === vn, V = p === vn && this.type !== vn;
    for (let q = 0, H = E.length; q < H; q++) {
      let j = E[q], G = j.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === false && G.needsUpdate === false)
        continue;
      i.copy(G.mapSize);
      let dt = G.getFrameExtents();
      if (i.multiply(dt), r.copy(G.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / dt.x), i.x = r.x * dt.x, G.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / dt.y), i.y = r.y * dt.y, G.mapSize.y = r.y)), G.map === null || F === true || V === true) {
        let _t = this.type !== vn ? { minFilter: we, magFilter: we } : {};
        G.map !== null && G.map.dispose(), G.map = new Ze(i.x, i.y, _t), G.map.texture.name = j.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      s32.setRenderTarget(G.map), s32.clear();
      let gt = G.getViewportCount();
      for (let _t = 0; _t < gt; _t++) {
        let Ht = G.getViewport(_t);
        a.set(r.x * Ht.x, r.y * Ht.y, r.x * Ht.z, r.y * Ht.w), k.viewport(a), G.updateMatrices(j, _t), n = G.getFrustum(), y(C, P, G.camera, j, this.type);
      }
      G.isPointLightShadow !== true && this.type === vn && v(G, P), G.needsUpdate = false;
    }
    p = this.type, g.needsUpdate = false, s32.setRenderTarget(b, M, L);
  };
  function v(E, C) {
    let P = t.update(_);
    d.defines.VSM_SAMPLES !== E.blurSamples && (d.defines.VSM_SAMPLES = E.blurSamples, f.defines.VSM_SAMPLES = E.blurSamples, d.needsUpdate = true, f.needsUpdate = true), E.mapPass === null && (E.mapPass = new Ze(i.x, i.y)), d.uniforms.shadow_pass.value = E.map.texture, d.uniforms.resolution.value = E.mapSize, d.uniforms.radius.value = E.radius, s32.setRenderTarget(E.mapPass), s32.clear(), s32.renderBufferDirect(C, null, P, d, _, null), f.uniforms.shadow_pass.value = E.mapPass.texture, f.uniforms.resolution.value = E.mapSize, f.uniforms.radius.value = E.radius, s32.setRenderTarget(E.map), s32.clear(), s32.renderBufferDirect(C, null, P, f, _, null);
  }
  function x(E, C, P, b) {
    let M = null, L = P.isPointLight === true ? E.customDistanceMaterial : E.customDepthMaterial;
    if (L !== void 0)
      M = L;
    else if (M = P.isPointLight === true ? l : o, s32.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      let k = M.uuid, F = C.uuid, V = c[k];
      V === void 0 && (V = {}, c[k] = V);
      let q = V[F];
      q === void 0 && (q = M.clone(), V[F] = q, C.addEventListener("dispose", I)), M = q;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, b === vn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : u[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, P.isPointLight === true && M.isMeshDistanceMaterial === true) {
      let k = s32.properties.get(M);
      k.light = P;
    }
    return M;
  }
  function y(E, C, P, b, M) {
    if (E.visible === false)
      return;
    if (E.layers.test(C.layers) && (E.isMesh || E.isLine || E.isPoints) && (E.castShadow || E.receiveShadow && M === vn) && (!E.frustumCulled || n.intersectsObject(E))) {
      E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, E.matrixWorld);
      let F = t.update(E), V = E.material;
      if (Array.isArray(V)) {
        let q = F.groups;
        for (let H = 0, j = q.length; H < j; H++) {
          let G = q[H], dt = V[G.materialIndex];
          if (dt && dt.visible) {
            let gt = x(E, dt, b, M);
            E.onBeforeShadow(s32, E, C, P, F, gt, G), s32.renderBufferDirect(P, null, F, gt, E, G), E.onAfterShadow(s32, E, C, P, F, gt, G);
          }
        }
      } else if (V.visible) {
        let q = x(E, V, b, M);
        E.onBeforeShadow(s32, E, C, P, F, q, null), s32.renderBufferDirect(P, null, F, q, E, null), E.onAfterShadow(s32, E, C, P, F, q, null);
      }
    }
    let k = E.children;
    for (let F = 0, V = k.length; F < V; F++)
      y(k[F], C, P, b, M);
  }
  function I(E) {
    E.target.removeEventListener("dispose", I);
    for (let P in c) {
      let b = c[P], M = E.target.uuid;
      M in b && (b[M].dispose(), delete b[M]);
    }
  }
}
function Ex(s32) {
  function t() {
    let U = false, st = new ee(), Y = null, J = new ee(0, 0, 0, 0);
    return { setMask: function(at) {
      Y !== at && !U && (s32.colorMask(at, at, at, at), Y = at);
    }, setLocked: function(at) {
      U = at;
    }, setClear: function(at, Pt, qt, fe, Se) {
      Se === true && (at *= fe, Pt *= fe, qt *= fe), st.set(at, Pt, qt, fe), J.equals(st) === false && (s32.clearColor(at, Pt, qt, fe), J.copy(st));
    }, reset: function() {
      U = false, Y = null, J.set(-1, 0, 0, 0);
    } };
  }
  function e() {
    let U = false, st = null, Y = null, J = null;
    return { setTest: function(at) {
      at ? vt(s32.DEPTH_TEST) : ct(s32.DEPTH_TEST);
    }, setMask: function(at) {
      st !== at && !U && (s32.depthMask(at), st = at);
    }, setFunc: function(at) {
      if (Y !== at) {
        switch (at) {
          case qf:
            s32.depthFunc(s32.NEVER);
            break;
          case Yf:
            s32.depthFunc(s32.ALWAYS);
            break;
          case Zf:
            s32.depthFunc(s32.LESS);
            break;
          case ea:
            s32.depthFunc(s32.LEQUAL);
            break;
          case Jf:
            s32.depthFunc(s32.EQUAL);
            break;
          case $f:
            s32.depthFunc(s32.GEQUAL);
            break;
          case Kf:
            s32.depthFunc(s32.GREATER);
            break;
          case Qf:
            s32.depthFunc(s32.NOTEQUAL);
            break;
          default:
            s32.depthFunc(s32.LEQUAL);
        }
        Y = at;
      }
    }, setLocked: function(at) {
      U = at;
    }, setClear: function(at) {
      J !== at && (s32.clearDepth(at), J = at);
    }, reset: function() {
      U = false, st = null, Y = null, J = null;
    } };
  }
  function n() {
    let U = false, st = null, Y = null, J = null, at = null, Pt = null, qt = null, fe = null, Se = null;
    return { setTest: function($t) {
      U || ($t ? vt(s32.STENCIL_TEST) : ct(s32.STENCIL_TEST));
    }, setMask: function($t) {
      st !== $t && !U && (s32.stencilMask($t), st = $t);
    }, setFunc: function($t, dn, ln) {
      (Y !== $t || J !== dn || at !== ln) && (s32.stencilFunc($t, dn, ln), Y = $t, J = dn, at = ln);
    }, setOp: function($t, dn, ln) {
      (Pt !== $t || qt !== dn || fe !== ln) && (s32.stencilOp($t, dn, ln), Pt = $t, qt = dn, fe = ln);
    }, setLocked: function($t) {
      U = $t;
    }, setClear: function($t) {
      Se !== $t && (s32.clearStencil($t), Se = $t);
    }, reset: function() {
      U = false, st = null, Y = null, J = null, at = null, Pt = null, qt = null, fe = null, Se = null;
    } };
  }
  let i = new t(), r = new e(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, m = false, _ = null, g = null, p = null, v = null, x = null, y = null, I = null, E = new ft(0, 0, 0), C = 0, P = false, b = null, M = null, L = null, k = null, F = null, V = s32.getParameter(s32.MAX_COMBINED_TEXTURE_IMAGE_UNITS), q = false, H = 0, j = s32.getParameter(s32.VERSION);
  j.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(j)[1]), q = H >= 1) : j.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), q = H >= 2);
  let G = null, dt = {}, gt = s32.getParameter(s32.SCISSOR_BOX), _t = s32.getParameter(s32.VIEWPORT), Ht = new ee().fromArray(gt), Zt = new ee().fromArray(_t);
  function W(U, st, Y, J) {
    let at = new Uint8Array(4), Pt = s32.createTexture();
    s32.bindTexture(U, Pt), s32.texParameteri(U, s32.TEXTURE_MIN_FILTER, s32.NEAREST), s32.texParameteri(U, s32.TEXTURE_MAG_FILTER, s32.NEAREST);
    for (let qt = 0; qt < Y; qt++)
      U === s32.TEXTURE_3D || U === s32.TEXTURE_2D_ARRAY ? s32.texImage3D(st, 0, s32.RGBA, 1, 1, J, 0, s32.RGBA, s32.UNSIGNED_BYTE, at) : s32.texImage2D(st + qt, 0, s32.RGBA, 1, 1, 0, s32.RGBA, s32.UNSIGNED_BYTE, at);
    return Pt;
  }
  let et = {};
  et[s32.TEXTURE_2D] = W(s32.TEXTURE_2D, s32.TEXTURE_2D, 1), et[s32.TEXTURE_CUBE_MAP] = W(s32.TEXTURE_CUBE_MAP, s32.TEXTURE_CUBE_MAP_POSITIVE_X, 6), et[s32.TEXTURE_2D_ARRAY] = W(s32.TEXTURE_2D_ARRAY, s32.TEXTURE_2D_ARRAY, 1, 1), et[s32.TEXTURE_3D] = W(s32.TEXTURE_3D, s32.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), vt(s32.DEPTH_TEST), r.setFunc(ea), ht(false), X(oh), vt(s32.CULL_FACE), it(Gn);
  function vt(U) {
    c[U] !== true && (s32.enable(U), c[U] = true);
  }
  function ct(U) {
    c[U] !== false && (s32.disable(U), c[U] = false);
  }
  function Lt(U, st) {
    return h[U] !== st ? (s32.bindFramebuffer(U, st), h[U] = st, U === s32.DRAW_FRAMEBUFFER && (h[s32.FRAMEBUFFER] = st), U === s32.FRAMEBUFFER && (h[s32.DRAW_FRAMEBUFFER] = st), true) : false;
  }
  function kt(U, st) {
    let Y = d, J = false;
    if (U) {
      Y = u.get(st), Y === void 0 && (Y = [], u.set(st, Y));
      let at = U.textures;
      if (Y.length !== at.length || Y[0] !== s32.COLOR_ATTACHMENT0) {
        for (let Pt = 0, qt = at.length; Pt < qt; Pt++)
          Y[Pt] = s32.COLOR_ATTACHMENT0 + Pt;
        Y.length = at.length, J = true;
      }
    } else
      Y[0] !== s32.BACK && (Y[0] = s32.BACK, J = true);
    J && s32.drawBuffers(Y);
  }
  function Ut(U) {
    return f !== U ? (s32.useProgram(U), f = U, true) : false;
  }
  let Yt = { [di]: s32.FUNC_ADD, [Rf]: s32.FUNC_SUBTRACT, [Pf]: s32.FUNC_REVERSE_SUBTRACT };
  Yt[If] = s32.MIN, Yt[Lf] = s32.MAX;
  let A = { [Uf]: s32.ZERO, [Df]: s32.ONE, [Nf]: s32.SRC_COLOR, [Fo]: s32.SRC_ALPHA, [Vf]: s32.SRC_ALPHA_SATURATE, [zf]: s32.DST_COLOR, [Of]: s32.DST_ALPHA, [Ff]: s32.ONE_MINUS_SRC_COLOR, [Oo]: s32.ONE_MINUS_SRC_ALPHA, [kf]: s32.ONE_MINUS_DST_COLOR, [Bf]: s32.ONE_MINUS_DST_ALPHA, [Hf]: s32.CONSTANT_COLOR, [Gf]: s32.ONE_MINUS_CONSTANT_COLOR, [Wf]: s32.CONSTANT_ALPHA, [Xf]: s32.ONE_MINUS_CONSTANT_ALPHA };
  function it(U, st, Y, J, at, Pt, qt, fe, Se, $t) {
    if (U === Gn) {
      m === true && (ct(s32.BLEND), m = false);
      return;
    }
    if (m === false && (vt(s32.BLEND), m = true), U !== Cf) {
      if (U !== _ || $t !== P) {
        if ((g !== di || x !== di) && (s32.blendEquation(s32.FUNC_ADD), g = di, x = di), $t)
          switch (U) {
            case Ki:
              s32.blendFuncSeparate(s32.ONE, s32.ONE_MINUS_SRC_ALPHA, s32.ONE, s32.ONE_MINUS_SRC_ALPHA);
              break;
            case lh:
              s32.blendFunc(s32.ONE, s32.ONE);
              break;
            case ch:
              s32.blendFuncSeparate(s32.ZERO, s32.ONE_MINUS_SRC_COLOR, s32.ZERO, s32.ONE);
              break;
            case hh:
              s32.blendFuncSeparate(s32.ZERO, s32.SRC_COLOR, s32.ZERO, s32.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        else
          switch (U) {
            case Ki:
              s32.blendFuncSeparate(s32.SRC_ALPHA, s32.ONE_MINUS_SRC_ALPHA, s32.ONE, s32.ONE_MINUS_SRC_ALPHA);
              break;
            case lh:
              s32.blendFunc(s32.SRC_ALPHA, s32.ONE);
              break;
            case ch:
              s32.blendFuncSeparate(s32.ZERO, s32.ONE_MINUS_SRC_COLOR, s32.ZERO, s32.ONE);
              break;
            case hh:
              s32.blendFunc(s32.ZERO, s32.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        p = null, v = null, y = null, I = null, E.set(0, 0, 0), C = 0, _ = U, P = $t;
      }
      return;
    }
    at = at || st, Pt = Pt || Y, qt = qt || J, (st !== g || at !== x) && (s32.blendEquationSeparate(Yt[st], Yt[at]), g = st, x = at), (Y !== p || J !== v || Pt !== y || qt !== I) && (s32.blendFuncSeparate(A[Y], A[J], A[Pt], A[qt]), p = Y, v = J, y = Pt, I = qt), (fe.equals(E) === false || Se !== C) && (s32.blendColor(fe.r, fe.g, fe.b, Se), E.copy(fe), C = Se), _ = U, P = false;
  }
  function tt(U, st) {
    U.side === Mn ? ct(s32.CULL_FACE) : vt(s32.CULL_FACE);
    let Y = U.side === ze;
    st && (Y = !Y), ht(Y), U.blending === Ki && U.transparent === false ? it(Gn) : it(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), r.setFunc(U.depthFunc), r.setTest(U.depthTest), r.setMask(U.depthWrite), i.setMask(U.colorWrite);
    let J = U.stencilWrite;
    a.setTest(J), J && (a.setMask(U.stencilWriteMask), a.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), a.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), ut(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === true ? vt(s32.SAMPLE_ALPHA_TO_COVERAGE) : ct(s32.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ht(U) {
    b !== U && (U ? s32.frontFace(s32.CW) : s32.frontFace(s32.CCW), b = U);
  }
  function X(U) {
    U !== Ef ? (vt(s32.CULL_FACE), U !== M && (U === oh ? s32.cullFace(s32.BACK) : U === Af ? s32.cullFace(s32.FRONT) : s32.cullFace(s32.FRONT_AND_BACK))) : ct(s32.CULL_FACE), M = U;
  }
  function Tt(U) {
    U !== L && (q && s32.lineWidth(U), L = U);
  }
  function ut(U, st, Y) {
    U ? (vt(s32.POLYGON_OFFSET_FILL), (k !== st || F !== Y) && (s32.polygonOffset(st, Y), k = st, F = Y)) : ct(s32.POLYGON_OFFSET_FILL);
  }
  function yt(U) {
    U ? vt(s32.SCISSOR_TEST) : ct(s32.SCISSOR_TEST);
  }
  function R(U) {
    U === void 0 && (U = s32.TEXTURE0 + V - 1), G !== U && (s32.activeTexture(U), G = U);
  }
  function S(U, st, Y) {
    Y === void 0 && (G === null ? Y = s32.TEXTURE0 + V - 1 : Y = G);
    let J = dt[Y];
    J === void 0 && (J = { type: void 0, texture: void 0 }, dt[Y] = J), (J.type !== U || J.texture !== st) && (G !== Y && (s32.activeTexture(Y), G = Y), s32.bindTexture(U, st || et[U]), J.type = U, J.texture = st);
  }
  function B() {
    let U = dt[G];
    U !== void 0 && U.type !== void 0 && (s32.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function Q() {
    try {
      s32.compressedTexImage2D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function K() {
    try {
      s32.compressedTexImage3D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function $() {
    try {
      s32.texSubImage2D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function At() {
    try {
      s32.texSubImage3D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ot() {
    try {
      s32.compressedTexSubImage2D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function xt() {
    try {
      s32.compressedTexSubImage3D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Ot() {
    try {
      s32.texStorage2D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function nt() {
    try {
      s32.texStorage3D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function mt() {
    try {
      s32.texImage2D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Xt() {
    try {
      s32.texImage3D.apply(s32, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Nt(U) {
    Ht.equals(U) === false && (s32.scissor(U.x, U.y, U.z, U.w), Ht.copy(U));
  }
  function Mt(U) {
    Zt.equals(U) === false && (s32.viewport(U.x, U.y, U.z, U.w), Zt.copy(U));
  }
  function Ft(U, st) {
    let Y = l.get(st);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), l.set(st, Y));
    let J = Y.get(U);
    J === void 0 && (J = s32.getUniformBlockIndex(st, U.name), Y.set(U, J));
  }
  function Wt(U, st) {
    let J = l.get(st).get(U);
    o.get(st) !== J && (s32.uniformBlockBinding(st, J, U.__bindingPointIndex), o.set(st, J));
  }
  function re() {
    s32.disable(s32.BLEND), s32.disable(s32.CULL_FACE), s32.disable(s32.DEPTH_TEST), s32.disable(s32.POLYGON_OFFSET_FILL), s32.disable(s32.SCISSOR_TEST), s32.disable(s32.STENCIL_TEST), s32.disable(s32.SAMPLE_ALPHA_TO_COVERAGE), s32.blendEquation(s32.FUNC_ADD), s32.blendFunc(s32.ONE, s32.ZERO), s32.blendFuncSeparate(s32.ONE, s32.ZERO, s32.ONE, s32.ZERO), s32.blendColor(0, 0, 0, 0), s32.colorMask(true, true, true, true), s32.clearColor(0, 0, 0, 0), s32.depthMask(true), s32.depthFunc(s32.LESS), s32.clearDepth(1), s32.stencilMask(4294967295), s32.stencilFunc(s32.ALWAYS, 0, 4294967295), s32.stencilOp(s32.KEEP, s32.KEEP, s32.KEEP), s32.clearStencil(0), s32.cullFace(s32.BACK), s32.frontFace(s32.CCW), s32.polygonOffset(0, 0), s32.activeTexture(s32.TEXTURE0), s32.bindFramebuffer(s32.FRAMEBUFFER, null), s32.bindFramebuffer(s32.DRAW_FRAMEBUFFER, null), s32.bindFramebuffer(s32.READ_FRAMEBUFFER, null), s32.useProgram(null), s32.lineWidth(1), s32.scissor(0, 0, s32.canvas.width, s32.canvas.height), s32.viewport(0, 0, s32.canvas.width, s32.canvas.height), c = {}, G = null, dt = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, m = false, _ = null, g = null, p = null, v = null, x = null, y = null, I = null, E = new ft(0, 0, 0), C = 0, P = false, b = null, M = null, L = null, k = null, F = null, Ht.set(0, 0, s32.canvas.width, s32.canvas.height), Zt.set(0, 0, s32.canvas.width, s32.canvas.height), i.reset(), r.reset(), a.reset();
  }
  return { buffers: { color: i, depth: r, stencil: a }, enable: vt, disable: ct, bindFramebuffer: Lt, drawBuffers: kt, useProgram: Ut, setBlending: it, setMaterial: tt, setFlipSided: ht, setCullFace: X, setLineWidth: Tt, setPolygonOffset: ut, setScissorTest: yt, activeTexture: R, bindTexture: S, unbindTexture: B, compressedTexImage2D: Q, compressedTexImage3D: K, texImage2D: mt, texImage3D: Xt, updateUBOMapping: Ft, uniformBlockBinding: Wt, texStorage2D: Ot, texStorage3D: nt, texSubImage2D: $, texSubImage3D: At, compressedTexSubImage2D: ot, compressedTexSubImage3D: xt, scissor: Nt, viewport: Mt, reset: re };
}
function Ml(s32, t, e, n) {
  let i = Rx(n);
  switch (e) {
    case Kd:
      return s32 * t;
    case jd:
      return s32 * t;
    case tf:
      return s32 * t * 2;
    case Gc:
      return s32 * t / i.components * i.byteLength;
    case Va:
      return s32 * t / i.components * i.byteLength;
    case ef:
      return s32 * t * 2 / i.components * i.byteLength;
    case Wc:
      return s32 * t * 2 / i.components * i.byteLength;
    case Qd:
      return s32 * t * 3 / i.components * i.byteLength;
    case Be:
      return s32 * t * 4 / i.components * i.byteLength;
    case Xc:
      return s32 * t * 4 / i.components * i.byteLength;
    case $r:
    case Kr:
      return Math.floor((s32 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Qr:
    case jr:
      return Math.floor((s32 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case zo:
    case Vo:
      return Math.max(s32, 16) * Math.max(t, 8) / 4;
    case Bo:
    case ko:
      return Math.max(s32, 8) * Math.max(t, 8) / 2;
    case Ho:
    case Go:
      return Math.floor((s32 + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Wo:
      return Math.floor((s32 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Xo:
      return Math.floor((s32 + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case qo:
      return Math.floor((s32 + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Yo:
      return Math.floor((s32 + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Zo:
      return Math.floor((s32 + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Jo:
      return Math.floor((s32 + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case $o:
      return Math.floor((s32 + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Ko:
      return Math.floor((s32 + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Qo:
      return Math.floor((s32 + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case jo:
      return Math.floor((s32 + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case tl:
      return Math.floor((s32 + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case el:
      return Math.floor((s32 + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case nl:
      return Math.floor((s32 + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case il:
      return Math.floor((s32 + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case sl:
      return Math.floor((s32 + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case ta:
    case rl:
    case al:
      return Math.ceil(s32 / 4) * Math.ceil(t / 4) * 16;
    case nf:
    case ol:
      return Math.ceil(s32 / 4) * Math.ceil(t / 4) * 8;
    case ll:
    case cl:
      return Math.ceil(s32 / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Rx(s32) {
  switch (s32) {
    case An:
    case Zd:
      return { byteLength: 1, components: 1 };
    case Bs:
    case Jd:
    case tr:
      return { byteLength: 2, components: 1 };
    case Vc:
    case Hc:
      return { byteLength: 2, components: 4 };
    case Zn:
    case kc:
    case We:
      return { byteLength: 4, components: 1 };
    case $d:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s32}.`);
}
function Px(s32, t, e, n, i, r, a) {
  let o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof __dai_navigator > "u" ? false : /OculusBrowser/g.test(__dai_navigator.userAgent), c = new Z(), h = /* @__PURE__ */ new WeakMap(), u, d = /* @__PURE__ */ new WeakMap(), f = false;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(R, S) {
    return f ? new OffscreenCanvas(R, S) : zs("canvas");
  }
  function _(R, S, B) {
    let Q = 1, K = yt(R);
    if ((K.width > B || K.height > B) && (Q = B / Math.max(K.width, K.height)), Q < 1)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
        let $ = Math.floor(Q * K.width), At = Math.floor(Q * K.height);
        u === void 0 && (u = m($, At));
        let ot = S ? m($, At) : u;
        return ot.width = $, ot.height = At, ot.getContext("2d").drawImage(R, 0, 0, $, At), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + $ + "x" + At + ")."), ot;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), R;
    return R;
  }
  function g(R) {
    return R.generateMipmaps && R.minFilter !== we && R.minFilter !== ge;
  }
  function p(R) {
    s32.generateMipmap(R);
  }
  function v(R, S, B, Q, K = false) {
    if (R !== null) {
      if (s32[R] !== void 0)
        return s32[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let $ = S;
    if (S === s32.RED && (B === s32.FLOAT && ($ = s32.R32F), B === s32.HALF_FLOAT && ($ = s32.R16F), B === s32.UNSIGNED_BYTE && ($ = s32.R8)), S === s32.RED_INTEGER && (B === s32.UNSIGNED_BYTE && ($ = s32.R8UI), B === s32.UNSIGNED_SHORT && ($ = s32.R16UI), B === s32.UNSIGNED_INT && ($ = s32.R32UI), B === s32.BYTE && ($ = s32.R8I), B === s32.SHORT && ($ = s32.R16I), B === s32.INT && ($ = s32.R32I)), S === s32.RG && (B === s32.FLOAT && ($ = s32.RG32F), B === s32.HALF_FLOAT && ($ = s32.RG16F), B === s32.UNSIGNED_BYTE && ($ = s32.RG8)), S === s32.RG_INTEGER && (B === s32.UNSIGNED_BYTE && ($ = s32.RG8UI), B === s32.UNSIGNED_SHORT && ($ = s32.RG16UI), B === s32.UNSIGNED_INT && ($ = s32.RG32UI), B === s32.BYTE && ($ = s32.RG8I), B === s32.SHORT && ($ = s32.RG16I), B === s32.INT && ($ = s32.RG32I)), S === s32.RGB && B === s32.UNSIGNED_INT_5_9_9_9_REV && ($ = s32.RGB9_E5), S === s32.RGBA) {
      let At = K ? la : Jt.getTransfer(Q);
      B === s32.FLOAT && ($ = s32.RGBA32F), B === s32.HALF_FLOAT && ($ = s32.RGBA16F), B === s32.UNSIGNED_BYTE && ($ = At === se ? s32.SRGB8_ALPHA8 : s32.RGBA8), B === s32.UNSIGNED_SHORT_4_4_4_4 && ($ = s32.RGBA4), B === s32.UNSIGNED_SHORT_5_5_5_1 && ($ = s32.RGB5_A1);
    }
    return ($ === s32.R16F || $ === s32.R32F || $ === s32.RG16F || $ === s32.RG32F || $ === s32.RGBA16F || $ === s32.RGBA32F) && t.get("EXT_color_buffer_float"), $;
  }
  function x(R, S) {
    let B;
    return R ? S === null || S === Zn || S === ns ? B = s32.DEPTH24_STENCIL8 : S === We ? B = s32.DEPTH32F_STENCIL8 : S === Bs && (B = s32.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : S === null || S === Zn || S === ns ? B = s32.DEPTH_COMPONENT24 : S === We ? B = s32.DEPTH_COMPONENT32F : S === Bs && (B = s32.DEPTH_COMPONENT16), B;
  }
  function y(R, S) {
    return g(R) === true || R.isFramebufferTexture && R.minFilter !== we && R.minFilter !== ge ? Math.log2(Math.max(S.width, S.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? S.mipmaps.length : 1;
  }
  function I(R) {
    let S = R.target;
    S.removeEventListener("dispose", I), C(S), S.isVideoTexture && h.delete(S);
  }
  function E(R) {
    let S = R.target;
    S.removeEventListener("dispose", E), b(S);
  }
  function C(R) {
    let S = n.get(R);
    if (S.__webglInit === void 0)
      return;
    let B = R.source, Q = d.get(B);
    if (Q) {
      let K = Q[S.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && P(R), Object.keys(Q).length === 0 && d.delete(B);
    }
    n.remove(R);
  }
  function P(R) {
    let S = n.get(R);
    s32.deleteTexture(S.__webglTexture);
    let B = R.source, Q = d.get(B);
    delete Q[S.__cacheKey], a.memory.textures--;
  }
  function b(R) {
    let S = n.get(R);
    if (R.depthTexture && R.depthTexture.dispose(), R.isWebGLCubeRenderTarget)
      for (let Q = 0; Q < 6; Q++) {
        if (Array.isArray(S.__webglFramebuffer[Q]))
          for (let K = 0; K < S.__webglFramebuffer[Q].length; K++)
            s32.deleteFramebuffer(S.__webglFramebuffer[Q][K]);
        else
          s32.deleteFramebuffer(S.__webglFramebuffer[Q]);
        S.__webglDepthbuffer && s32.deleteRenderbuffer(S.__webglDepthbuffer[Q]);
      }
    else {
      if (Array.isArray(S.__webglFramebuffer))
        for (let Q = 0; Q < S.__webglFramebuffer.length; Q++)
          s32.deleteFramebuffer(S.__webglFramebuffer[Q]);
      else
        s32.deleteFramebuffer(S.__webglFramebuffer);
      if (S.__webglDepthbuffer && s32.deleteRenderbuffer(S.__webglDepthbuffer), S.__webglMultisampledFramebuffer && s32.deleteFramebuffer(S.__webglMultisampledFramebuffer), S.__webglColorRenderbuffer)
        for (let Q = 0; Q < S.__webglColorRenderbuffer.length; Q++)
          S.__webglColorRenderbuffer[Q] && s32.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);
      S.__webglDepthRenderbuffer && s32.deleteRenderbuffer(S.__webglDepthRenderbuffer);
    }
    let B = R.textures;
    for (let Q = 0, K = B.length; Q < K; Q++) {
      let $ = n.get(B[Q]);
      $.__webglTexture && (s32.deleteTexture($.__webglTexture), a.memory.textures--), n.remove(B[Q]);
    }
    n.remove(R);
  }
  let M = 0;
  function L() {
    M = 0;
  }
  function k() {
    let R = M;
    return R >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + i.maxTextures), M += 1, R;
  }
  function F(R) {
    let S = [];
    return S.push(R.wrapS), S.push(R.wrapT), S.push(R.wrapR || 0), S.push(R.magFilter), S.push(R.minFilter), S.push(R.anisotropy), S.push(R.internalFormat), S.push(R.format), S.push(R.type), S.push(R.generateMipmaps), S.push(R.premultiplyAlpha), S.push(R.flipY), S.push(R.unpackAlignment), S.push(R.colorSpace), S.join();
  }
  function V(R, S) {
    let B = n.get(R);
    if (R.isVideoTexture && Tt(R), R.isRenderTargetTexture === false && R.version > 0 && B.__version !== R.version) {
      let Q = R.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === false)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Zt(B, R, S);
        return;
      }
    }
    e.bindTexture(s32.TEXTURE_2D, B.__webglTexture, s32.TEXTURE0 + S);
  }
  function q(R, S) {
    let B = n.get(R);
    if (R.version > 0 && B.__version !== R.version) {
      Zt(B, R, S);
      return;
    }
    e.bindTexture(s32.TEXTURE_2D_ARRAY, B.__webglTexture, s32.TEXTURE0 + S);
  }
  function H(R, S) {
    let B = n.get(R);
    if (R.version > 0 && B.__version !== R.version) {
      Zt(B, R, S);
      return;
    }
    e.bindTexture(s32.TEXTURE_3D, B.__webglTexture, s32.TEXTURE0 + S);
  }
  function j(R, S) {
    let B = n.get(R);
    if (R.version > 0 && B.__version !== R.version) {
      W(B, R, S);
      return;
    }
    e.bindTexture(s32.TEXTURE_CUBE_MAP, B.__webglTexture, s32.TEXTURE0 + S);
  }
  let G = { [sa]: s32.REPEAT, [rn]: s32.CLAMP_TO_EDGE, [ra]: s32.MIRRORED_REPEAT }, dt = { [we]: s32.NEAREST, [Yd]: s32.NEAREST_MIPMAP_NEAREST, [Is]: s32.NEAREST_MIPMAP_LINEAR, [ge]: s32.LINEAR, [Jr]: s32.LINEAR_MIPMAP_NEAREST, [bn]: s32.LINEAR_MIPMAP_LINEAR }, gt = { [mp]: s32.NEVER, [Mp]: s32.ALWAYS, [gp]: s32.LESS, [rf]: s32.LEQUAL, [_p]: s32.EQUAL, [yp]: s32.GEQUAL, [xp]: s32.GREATER, [vp]: s32.NOTEQUAL };
  function _t(R, S) {
    if (S.type === We && t.has("OES_texture_float_linear") === false && (S.magFilter === ge || S.magFilter === Jr || S.magFilter === Is || S.magFilter === bn || S.minFilter === ge || S.minFilter === Jr || S.minFilter === Is || S.minFilter === bn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s32.texParameteri(R, s32.TEXTURE_WRAP_S, G[S.wrapS]), s32.texParameteri(R, s32.TEXTURE_WRAP_T, G[S.wrapT]), (R === s32.TEXTURE_3D || R === s32.TEXTURE_2D_ARRAY) && s32.texParameteri(R, s32.TEXTURE_WRAP_R, G[S.wrapR]), s32.texParameteri(R, s32.TEXTURE_MAG_FILTER, dt[S.magFilter]), s32.texParameteri(R, s32.TEXTURE_MIN_FILTER, dt[S.minFilter]), S.compareFunction && (s32.texParameteri(R, s32.TEXTURE_COMPARE_MODE, s32.COMPARE_REF_TO_TEXTURE), s32.texParameteri(R, s32.TEXTURE_COMPARE_FUNC, gt[S.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (S.magFilter === we || S.minFilter !== Is && S.minFilter !== bn || S.type === We && t.has("OES_texture_float_linear") === false)
        return;
      if (S.anisotropy > 1 || n.get(S).__currentAnisotropy) {
        let B = t.get("EXT_texture_filter_anisotropic");
        s32.texParameterf(R, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy;
      }
    }
  }
  function Ht(R, S) {
    let B = false;
    R.__webglInit === void 0 && (R.__webglInit = true, S.addEventListener("dispose", I));
    let Q = S.source, K = d.get(Q);
    K === void 0 && (K = {}, d.set(Q, K));
    let $ = F(S);
    if ($ !== R.__cacheKey) {
      K[$] === void 0 && (K[$] = { texture: s32.createTexture(), usedTimes: 0 }, a.memory.textures++, B = true), K[$].usedTimes++;
      let At = K[R.__cacheKey];
      At !== void 0 && (K[R.__cacheKey].usedTimes--, At.usedTimes === 0 && P(S)), R.__cacheKey = $, R.__webglTexture = K[$].texture;
    }
    return B;
  }
  function Zt(R, S, B) {
    let Q = s32.TEXTURE_2D;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) && (Q = s32.TEXTURE_2D_ARRAY), S.isData3DTexture && (Q = s32.TEXTURE_3D);
    let K = Ht(R, S), $ = S.source;
    e.bindTexture(Q, R.__webglTexture, s32.TEXTURE0 + B);
    let At = n.get($);
    if ($.version !== At.__version || K === true) {
      e.activeTexture(s32.TEXTURE0 + B);
      let ot = Jt.getPrimaries(Jt.workingColorSpace), xt = S.colorSpace === zn ? null : Jt.getPrimaries(S.colorSpace), Ot = S.colorSpace === zn || ot === xt ? s32.NONE : s32.BROWSER_DEFAULT_WEBGL;
      s32.pixelStorei(s32.UNPACK_FLIP_Y_WEBGL, S.flipY), s32.pixelStorei(s32.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), s32.pixelStorei(s32.UNPACK_ALIGNMENT, S.unpackAlignment), s32.pixelStorei(s32.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ot);
      let nt = _(S.image, false, i.maxTextureSize);
      nt = ut(S, nt);
      let mt = r.convert(S.format, S.colorSpace), Xt = r.convert(S.type), Nt = v(S.internalFormat, mt, Xt, S.colorSpace, S.isVideoTexture);
      _t(Q, S);
      let Mt, Ft = S.mipmaps, Wt = S.isVideoTexture !== true, re = At.__version === void 0 || K === true, U = $.dataReady, st = y(S, nt);
      if (S.isDepthTexture)
        Nt = x(S.format === is, S.type), re && (Wt ? e.texStorage2D(s32.TEXTURE_2D, 1, Nt, nt.width, nt.height) : e.texImage2D(s32.TEXTURE_2D, 0, Nt, nt.width, nt.height, 0, mt, Xt, null));
      else if (S.isDataTexture)
        if (Ft.length > 0) {
          Wt && re && e.texStorage2D(s32.TEXTURE_2D, st, Nt, Ft[0].width, Ft[0].height);
          for (let Y = 0, J = Ft.length; Y < J; Y++)
            Mt = Ft[Y], Wt ? U && e.texSubImage2D(s32.TEXTURE_2D, Y, 0, 0, Mt.width, Mt.height, mt, Xt, Mt.data) : e.texImage2D(s32.TEXTURE_2D, Y, Nt, Mt.width, Mt.height, 0, mt, Xt, Mt.data);
          S.generateMipmaps = false;
        } else
          Wt ? (re && e.texStorage2D(s32.TEXTURE_2D, st, Nt, nt.width, nt.height), U && e.texSubImage2D(s32.TEXTURE_2D, 0, 0, 0, nt.width, nt.height, mt, Xt, nt.data)) : e.texImage2D(s32.TEXTURE_2D, 0, Nt, nt.width, nt.height, 0, mt, Xt, nt.data);
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          Wt && re && e.texStorage3D(s32.TEXTURE_2D_ARRAY, st, Nt, Ft[0].width, Ft[0].height, nt.depth);
          for (let Y = 0, J = Ft.length; Y < J; Y++)
            if (Mt = Ft[Y], S.format !== Be)
              if (mt !== null)
                if (Wt) {
                  if (U)
                    if (S.layerUpdates.size > 0) {
                      let at = Ml(Mt.width, Mt.height, S.format, S.type);
                      for (let Pt of S.layerUpdates) {
                        let qt = Mt.data.subarray(Pt * at / Mt.data.BYTES_PER_ELEMENT, (Pt + 1) * at / Mt.data.BYTES_PER_ELEMENT);
                        e.compressedTexSubImage3D(s32.TEXTURE_2D_ARRAY, Y, 0, 0, Pt, Mt.width, Mt.height, 1, mt, qt, 0, 0);
                      }
                      S.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(s32.TEXTURE_2D_ARRAY, Y, 0, 0, 0, Mt.width, Mt.height, nt.depth, mt, Mt.data, 0, 0);
                } else
                  e.compressedTexImage3D(s32.TEXTURE_2D_ARRAY, Y, Nt, Mt.width, Mt.height, nt.depth, 0, Mt.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Wt ? U && e.texSubImage3D(s32.TEXTURE_2D_ARRAY, Y, 0, 0, 0, Mt.width, Mt.height, nt.depth, mt, Xt, Mt.data) : e.texImage3D(s32.TEXTURE_2D_ARRAY, Y, Nt, Mt.width, Mt.height, nt.depth, 0, mt, Xt, Mt.data);
        } else {
          Wt && re && e.texStorage2D(s32.TEXTURE_2D, st, Nt, Ft[0].width, Ft[0].height);
          for (let Y = 0, J = Ft.length; Y < J; Y++)
            Mt = Ft[Y], S.format !== Be ? mt !== null ? Wt ? U && e.compressedTexSubImage2D(s32.TEXTURE_2D, Y, 0, 0, Mt.width, Mt.height, mt, Mt.data) : e.compressedTexImage2D(s32.TEXTURE_2D, Y, Nt, Mt.width, Mt.height, 0, Mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Wt ? U && e.texSubImage2D(s32.TEXTURE_2D, Y, 0, 0, Mt.width, Mt.height, mt, Xt, Mt.data) : e.texImage2D(s32.TEXTURE_2D, Y, Nt, Mt.width, Mt.height, 0, mt, Xt, Mt.data);
        }
      else if (S.isDataArrayTexture)
        if (Wt) {
          if (re && e.texStorage3D(s32.TEXTURE_2D_ARRAY, st, Nt, nt.width, nt.height, nt.depth), U)
            if (S.layerUpdates.size > 0) {
              let Y = Ml(nt.width, nt.height, S.format, S.type);
              for (let J of S.layerUpdates) {
                let at = nt.data.subarray(J * Y / nt.data.BYTES_PER_ELEMENT, (J + 1) * Y / nt.data.BYTES_PER_ELEMENT);
                e.texSubImage3D(s32.TEXTURE_2D_ARRAY, 0, 0, 0, J, nt.width, nt.height, 1, mt, Xt, at);
              }
              S.clearLayerUpdates();
            } else
              e.texSubImage3D(s32.TEXTURE_2D_ARRAY, 0, 0, 0, 0, nt.width, nt.height, nt.depth, mt, Xt, nt.data);
        } else
          e.texImage3D(s32.TEXTURE_2D_ARRAY, 0, Nt, nt.width, nt.height, nt.depth, 0, mt, Xt, nt.data);
      else if (S.isData3DTexture)
        Wt ? (re && e.texStorage3D(s32.TEXTURE_3D, st, Nt, nt.width, nt.height, nt.depth), U && e.texSubImage3D(s32.TEXTURE_3D, 0, 0, 0, 0, nt.width, nt.height, nt.depth, mt, Xt, nt.data)) : e.texImage3D(s32.TEXTURE_3D, 0, Nt, nt.width, nt.height, nt.depth, 0, mt, Xt, nt.data);
      else if (S.isFramebufferTexture) {
        if (re)
          if (Wt)
            e.texStorage2D(s32.TEXTURE_2D, st, Nt, nt.width, nt.height);
          else {
            let Y = nt.width, J = nt.height;
            for (let at = 0; at < st; at++)
              e.texImage2D(s32.TEXTURE_2D, at, Nt, Y, J, 0, mt, Xt, null), Y >>= 1, J >>= 1;
          }
      } else if (Ft.length > 0) {
        if (Wt && re) {
          let Y = yt(Ft[0]);
          e.texStorage2D(s32.TEXTURE_2D, st, Nt, Y.width, Y.height);
        }
        for (let Y = 0, J = Ft.length; Y < J; Y++)
          Mt = Ft[Y], Wt ? U && e.texSubImage2D(s32.TEXTURE_2D, Y, 0, 0, mt, Xt, Mt) : e.texImage2D(s32.TEXTURE_2D, Y, Nt, mt, Xt, Mt);
        S.generateMipmaps = false;
      } else if (Wt) {
        if (re) {
          let Y = yt(nt);
          e.texStorage2D(s32.TEXTURE_2D, st, Nt, Y.width, Y.height);
        }
        U && e.texSubImage2D(s32.TEXTURE_2D, 0, 0, 0, mt, Xt, nt);
      } else
        e.texImage2D(s32.TEXTURE_2D, 0, Nt, mt, Xt, nt);
      g(S) && p(Q), At.__version = $.version, S.onUpdate && S.onUpdate(S);
    }
    R.__version = S.version;
  }
  function W(R, S, B) {
    if (S.image.length !== 6)
      return;
    let Q = Ht(R, S), K = S.source;
    e.bindTexture(s32.TEXTURE_CUBE_MAP, R.__webglTexture, s32.TEXTURE0 + B);
    let $ = n.get(K);
    if (K.version !== $.__version || Q === true) {
      e.activeTexture(s32.TEXTURE0 + B);
      let At = Jt.getPrimaries(Jt.workingColorSpace), ot = S.colorSpace === zn ? null : Jt.getPrimaries(S.colorSpace), xt = S.colorSpace === zn || At === ot ? s32.NONE : s32.BROWSER_DEFAULT_WEBGL;
      s32.pixelStorei(s32.UNPACK_FLIP_Y_WEBGL, S.flipY), s32.pixelStorei(s32.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha), s32.pixelStorei(s32.UNPACK_ALIGNMENT, S.unpackAlignment), s32.pixelStorei(s32.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt);
      let Ot = S.isCompressedTexture || S.image[0].isCompressedTexture, nt = S.image[0] && S.image[0].isDataTexture, mt = [];
      for (let J = 0; J < 6; J++)
        !Ot && !nt ? mt[J] = _(S.image[J], true, i.maxCubemapSize) : mt[J] = nt ? S.image[J].image : S.image[J], mt[J] = ut(S, mt[J]);
      let Xt = mt[0], Nt = r.convert(S.format, S.colorSpace), Mt = r.convert(S.type), Ft = v(S.internalFormat, Nt, Mt, S.colorSpace), Wt = S.isVideoTexture !== true, re = $.__version === void 0 || Q === true, U = K.dataReady, st = y(S, Xt);
      _t(s32.TEXTURE_CUBE_MAP, S);
      let Y;
      if (Ot) {
        Wt && re && e.texStorage2D(s32.TEXTURE_CUBE_MAP, st, Ft, Xt.width, Xt.height);
        for (let J = 0; J < 6; J++) {
          Y = mt[J].mipmaps;
          for (let at = 0; at < Y.length; at++) {
            let Pt = Y[at];
            S.format !== Be ? Nt !== null ? Wt ? U && e.compressedTexSubImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at, 0, 0, Pt.width, Pt.height, Nt, Pt.data) : e.compressedTexImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at, Ft, Pt.width, Pt.height, 0, Pt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Wt ? U && e.texSubImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at, 0, 0, Pt.width, Pt.height, Nt, Mt, Pt.data) : e.texImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at, Ft, Pt.width, Pt.height, 0, Nt, Mt, Pt.data);
          }
        }
      } else {
        if (Y = S.mipmaps, Wt && re) {
          Y.length > 0 && st++;
          let J = yt(mt[0]);
          e.texStorage2D(s32.TEXTURE_CUBE_MAP, st, Ft, J.width, J.height);
        }
        for (let J = 0; J < 6; J++)
          if (nt) {
            Wt ? U && e.texSubImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, mt[J].width, mt[J].height, Nt, Mt, mt[J].data) : e.texImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, Ft, mt[J].width, mt[J].height, 0, Nt, Mt, mt[J].data);
            for (let at = 0; at < Y.length; at++) {
              let qt = Y[at].image[J].image;
              Wt ? U && e.texSubImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at + 1, 0, 0, qt.width, qt.height, Nt, Mt, qt.data) : e.texImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at + 1, Ft, qt.width, qt.height, 0, Nt, Mt, qt.data);
            }
          } else {
            Wt ? U && e.texSubImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Nt, Mt, mt[J]) : e.texImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, Ft, Nt, Mt, mt[J]);
            for (let at = 0; at < Y.length; at++) {
              let Pt = Y[at];
              Wt ? U && e.texSubImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at + 1, 0, 0, Nt, Mt, Pt.image[J]) : e.texImage2D(s32.TEXTURE_CUBE_MAP_POSITIVE_X + J, at + 1, Ft, Nt, Mt, Pt.image[J]);
            }
          }
      }
      g(S) && p(s32.TEXTURE_CUBE_MAP), $.__version = K.version, S.onUpdate && S.onUpdate(S);
    }
    R.__version = S.version;
  }
  function et(R, S, B, Q, K, $) {
    let At = r.convert(B.format, B.colorSpace), ot = r.convert(B.type), xt = v(B.internalFormat, At, ot, B.colorSpace);
    if (!n.get(S).__hasExternalTextures) {
      let nt = Math.max(1, S.width >> $), mt = Math.max(1, S.height >> $);
      K === s32.TEXTURE_3D || K === s32.TEXTURE_2D_ARRAY ? e.texImage3D(K, $, xt, nt, mt, S.depth, 0, At, ot, null) : e.texImage2D(K, $, xt, nt, mt, 0, At, ot, null);
    }
    e.bindFramebuffer(s32.FRAMEBUFFER, R), X(S) ? o.framebufferTexture2DMultisampleEXT(s32.FRAMEBUFFER, Q, K, n.get(B).__webglTexture, 0, ht(S)) : (K === s32.TEXTURE_2D || K >= s32.TEXTURE_CUBE_MAP_POSITIVE_X && K <= s32.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s32.framebufferTexture2D(s32.FRAMEBUFFER, Q, K, n.get(B).__webglTexture, $), e.bindFramebuffer(s32.FRAMEBUFFER, null);
  }
  function vt(R, S, B) {
    if (s32.bindRenderbuffer(s32.RENDERBUFFER, R), S.depthBuffer) {
      let Q = S.depthTexture, K = Q && Q.isDepthTexture ? Q.type : null, $ = x(S.stencilBuffer, K), At = S.stencilBuffer ? s32.DEPTH_STENCIL_ATTACHMENT : s32.DEPTH_ATTACHMENT, ot = ht(S);
      X(S) ? o.renderbufferStorageMultisampleEXT(s32.RENDERBUFFER, ot, $, S.width, S.height) : B ? s32.renderbufferStorageMultisample(s32.RENDERBUFFER, ot, $, S.width, S.height) : s32.renderbufferStorage(s32.RENDERBUFFER, $, S.width, S.height), s32.framebufferRenderbuffer(s32.FRAMEBUFFER, At, s32.RENDERBUFFER, R);
    } else {
      let Q = S.textures;
      for (let K = 0; K < Q.length; K++) {
        let $ = Q[K], At = r.convert($.format, $.colorSpace), ot = r.convert($.type), xt = v($.internalFormat, At, ot, $.colorSpace), Ot = ht(S);
        B && X(S) === false ? s32.renderbufferStorageMultisample(s32.RENDERBUFFER, Ot, xt, S.width, S.height) : X(S) ? o.renderbufferStorageMultisampleEXT(s32.RENDERBUFFER, Ot, xt, S.width, S.height) : s32.renderbufferStorage(s32.RENDERBUFFER, xt, S.width, S.height);
      }
    }
    s32.bindRenderbuffer(s32.RENDERBUFFER, null);
  }
  function ct(R, S) {
    if (S && S.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(s32.FRAMEBUFFER, R), !(S.depthTexture && S.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = true), V(S.depthTexture, 0);
    let Q = n.get(S.depthTexture).__webglTexture, K = ht(S);
    if (S.depthTexture.format === Qi)
      X(S) ? o.framebufferTexture2DMultisampleEXT(s32.FRAMEBUFFER, s32.DEPTH_ATTACHMENT, s32.TEXTURE_2D, Q, 0, K) : s32.framebufferTexture2D(s32.FRAMEBUFFER, s32.DEPTH_ATTACHMENT, s32.TEXTURE_2D, Q, 0);
    else if (S.depthTexture.format === is)
      X(S) ? o.framebufferTexture2DMultisampleEXT(s32.FRAMEBUFFER, s32.DEPTH_STENCIL_ATTACHMENT, s32.TEXTURE_2D, Q, 0, K) : s32.framebufferTexture2D(s32.FRAMEBUFFER, s32.DEPTH_STENCIL_ATTACHMENT, s32.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Lt(R) {
    let S = n.get(R), B = R.isWebGLCubeRenderTarget === true;
    if (R.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ct(S.__webglFramebuffer, R);
    } else if (B) {
      S.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        e.bindFramebuffer(s32.FRAMEBUFFER, S.__webglFramebuffer[Q]), S.__webglDepthbuffer[Q] = s32.createRenderbuffer(), vt(S.__webglDepthbuffer[Q], R, false);
    } else
      e.bindFramebuffer(s32.FRAMEBUFFER, S.__webglFramebuffer), S.__webglDepthbuffer = s32.createRenderbuffer(), vt(S.__webglDepthbuffer, R, false);
    e.bindFramebuffer(s32.FRAMEBUFFER, null);
  }
  function kt(R, S, B) {
    let Q = n.get(R);
    S !== void 0 && et(Q.__webglFramebuffer, R, R.texture, s32.COLOR_ATTACHMENT0, s32.TEXTURE_2D, 0), B !== void 0 && Lt(R);
  }
  function Ut(R) {
    let S = R.texture, B = n.get(R), Q = n.get(S);
    R.addEventListener("dispose", E);
    let K = R.textures, $ = R.isWebGLCubeRenderTarget === true, At = K.length > 1;
    if (At || (Q.__webglTexture === void 0 && (Q.__webglTexture = s32.createTexture()), Q.__version = S.version, a.memory.textures++), $) {
      B.__webglFramebuffer = [];
      for (let ot = 0; ot < 6; ot++)
        if (S.mipmaps && S.mipmaps.length > 0) {
          B.__webglFramebuffer[ot] = [];
          for (let xt = 0; xt < S.mipmaps.length; xt++)
            B.__webglFramebuffer[ot][xt] = s32.createFramebuffer();
        } else
          B.__webglFramebuffer[ot] = s32.createFramebuffer();
    } else {
      if (S.mipmaps && S.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let ot = 0; ot < S.mipmaps.length; ot++)
          B.__webglFramebuffer[ot] = s32.createFramebuffer();
      } else
        B.__webglFramebuffer = s32.createFramebuffer();
      if (At)
        for (let ot = 0, xt = K.length; ot < xt; ot++) {
          let Ot = n.get(K[ot]);
          Ot.__webglTexture === void 0 && (Ot.__webglTexture = s32.createTexture(), a.memory.textures++);
        }
      if (R.samples > 0 && X(R) === false) {
        B.__webglMultisampledFramebuffer = s32.createFramebuffer(), B.__webglColorRenderbuffer = [], e.bindFramebuffer(s32.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let ot = 0; ot < K.length; ot++) {
          let xt = K[ot];
          B.__webglColorRenderbuffer[ot] = s32.createRenderbuffer(), s32.bindRenderbuffer(s32.RENDERBUFFER, B.__webglColorRenderbuffer[ot]);
          let Ot = r.convert(xt.format, xt.colorSpace), nt = r.convert(xt.type), mt = v(xt.internalFormat, Ot, nt, xt.colorSpace, R.isXRRenderTarget === true), Xt = ht(R);
          s32.renderbufferStorageMultisample(s32.RENDERBUFFER, Xt, mt, R.width, R.height), s32.framebufferRenderbuffer(s32.FRAMEBUFFER, s32.COLOR_ATTACHMENT0 + ot, s32.RENDERBUFFER, B.__webglColorRenderbuffer[ot]);
        }
        s32.bindRenderbuffer(s32.RENDERBUFFER, null), R.depthBuffer && (B.__webglDepthRenderbuffer = s32.createRenderbuffer(), vt(B.__webglDepthRenderbuffer, R, true)), e.bindFramebuffer(s32.FRAMEBUFFER, null);
      }
    }
    if ($) {
      e.bindTexture(s32.TEXTURE_CUBE_MAP, Q.__webglTexture), _t(s32.TEXTURE_CUBE_MAP, S);
      for (let ot = 0; ot < 6; ot++)
        if (S.mipmaps && S.mipmaps.length > 0)
          for (let xt = 0; xt < S.mipmaps.length; xt++)
            et(B.__webglFramebuffer[ot][xt], R, S, s32.COLOR_ATTACHMENT0, s32.TEXTURE_CUBE_MAP_POSITIVE_X + ot, xt);
        else
          et(B.__webglFramebuffer[ot], R, S, s32.COLOR_ATTACHMENT0, s32.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
      g(S) && p(s32.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (At) {
      for (let ot = 0, xt = K.length; ot < xt; ot++) {
        let Ot = K[ot], nt = n.get(Ot);
        e.bindTexture(s32.TEXTURE_2D, nt.__webglTexture), _t(s32.TEXTURE_2D, Ot), et(B.__webglFramebuffer, R, Ot, s32.COLOR_ATTACHMENT0 + ot, s32.TEXTURE_2D, 0), g(Ot) && p(s32.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ot = s32.TEXTURE_2D;
      if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (ot = R.isWebGL3DRenderTarget ? s32.TEXTURE_3D : s32.TEXTURE_2D_ARRAY), e.bindTexture(ot, Q.__webglTexture), _t(ot, S), S.mipmaps && S.mipmaps.length > 0)
        for (let xt = 0; xt < S.mipmaps.length; xt++)
          et(B.__webglFramebuffer[xt], R, S, s32.COLOR_ATTACHMENT0, ot, xt);
      else
        et(B.__webglFramebuffer, R, S, s32.COLOR_ATTACHMENT0, ot, 0);
      g(S) && p(ot), e.unbindTexture();
    }
    R.depthBuffer && Lt(R);
  }
  function Yt(R) {
    let S = R.textures;
    for (let B = 0, Q = S.length; B < Q; B++) {
      let K = S[B];
      if (g(K)) {
        let $ = R.isWebGLCubeRenderTarget ? s32.TEXTURE_CUBE_MAP : s32.TEXTURE_2D, At = n.get(K).__webglTexture;
        e.bindTexture($, At), p($), e.unbindTexture();
      }
    }
  }
  let A = [], it = [];
  function tt(R) {
    if (R.samples > 0) {
      if (X(R) === false) {
        let S = R.textures, B = R.width, Q = R.height, K = s32.COLOR_BUFFER_BIT, $ = R.stencilBuffer ? s32.DEPTH_STENCIL_ATTACHMENT : s32.DEPTH_ATTACHMENT, At = n.get(R), ot = S.length > 1;
        if (ot)
          for (let xt = 0; xt < S.length; xt++)
            e.bindFramebuffer(s32.FRAMEBUFFER, At.__webglMultisampledFramebuffer), s32.framebufferRenderbuffer(s32.FRAMEBUFFER, s32.COLOR_ATTACHMENT0 + xt, s32.RENDERBUFFER, null), e.bindFramebuffer(s32.FRAMEBUFFER, At.__webglFramebuffer), s32.framebufferTexture2D(s32.DRAW_FRAMEBUFFER, s32.COLOR_ATTACHMENT0 + xt, s32.TEXTURE_2D, null, 0);
        e.bindFramebuffer(s32.READ_FRAMEBUFFER, At.__webglMultisampledFramebuffer), e.bindFramebuffer(s32.DRAW_FRAMEBUFFER, At.__webglFramebuffer);
        for (let xt = 0; xt < S.length; xt++) {
          if (R.resolveDepthBuffer && (R.depthBuffer && (K |= s32.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (K |= s32.STENCIL_BUFFER_BIT)), ot) {
            s32.framebufferRenderbuffer(s32.READ_FRAMEBUFFER, s32.COLOR_ATTACHMENT0, s32.RENDERBUFFER, At.__webglColorRenderbuffer[xt]);
            let Ot = n.get(S[xt]).__webglTexture;
            s32.framebufferTexture2D(s32.DRAW_FRAMEBUFFER, s32.COLOR_ATTACHMENT0, s32.TEXTURE_2D, Ot, 0);
          }
          s32.blitFramebuffer(0, 0, B, Q, 0, 0, B, Q, K, s32.NEAREST), l === true && (A.length = 0, it.length = 0, A.push(s32.COLOR_ATTACHMENT0 + xt), R.depthBuffer && R.resolveDepthBuffer === false && (A.push($), it.push($), s32.invalidateFramebuffer(s32.DRAW_FRAMEBUFFER, it)), s32.invalidateFramebuffer(s32.READ_FRAMEBUFFER, A));
        }
        if (e.bindFramebuffer(s32.READ_FRAMEBUFFER, null), e.bindFramebuffer(s32.DRAW_FRAMEBUFFER, null), ot)
          for (let xt = 0; xt < S.length; xt++) {
            e.bindFramebuffer(s32.FRAMEBUFFER, At.__webglMultisampledFramebuffer), s32.framebufferRenderbuffer(s32.FRAMEBUFFER, s32.COLOR_ATTACHMENT0 + xt, s32.RENDERBUFFER, At.__webglColorRenderbuffer[xt]);
            let Ot = n.get(S[xt]).__webglTexture;
            e.bindFramebuffer(s32.FRAMEBUFFER, At.__webglFramebuffer), s32.framebufferTexture2D(s32.DRAW_FRAMEBUFFER, s32.COLOR_ATTACHMENT0 + xt, s32.TEXTURE_2D, Ot, 0);
          }
        e.bindFramebuffer(s32.DRAW_FRAMEBUFFER, At.__webglMultisampledFramebuffer);
      } else if (R.depthBuffer && R.resolveDepthBuffer === false && l) {
        let S = R.stencilBuffer ? s32.DEPTH_STENCIL_ATTACHMENT : s32.DEPTH_ATTACHMENT;
        s32.invalidateFramebuffer(s32.DRAW_FRAMEBUFFER, [S]);
      }
    }
  }
  function ht(R) {
    return Math.min(i.maxSamples, R.samples);
  }
  function X(R) {
    let S = n.get(R);
    return R.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && S.__useRenderToTexture !== false;
  }
  function Tt(R) {
    let S = a.render.frame;
    h.get(R) !== S && (h.set(R, S), R.update());
  }
  function ut(R, S) {
    let B = R.colorSpace, Q = R.format, K = R.type;
    return R.isCompressedTexture === true || R.isVideoTexture === true || B !== Kn && B !== zn && (Jt.getTransfer(B) === se ? (Q !== Be || K !== An) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), S;
  }
  function yt(R) {
    return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (c.width = R.naturalWidth || R.width, c.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (c.width = R.displayWidth, c.height = R.displayHeight) : (c.width = R.width, c.height = R.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = L, this.setTexture2D = V, this.setTexture2DArray = q, this.setTexture3D = H, this.setTextureCube = j, this.rebindTextures = kt, this.setupRenderTarget = Ut, this.updateRenderTargetMipmap = Yt, this.updateMultisampleRenderTarget = tt, this.setupDepthRenderbuffer = Lt, this.setupFrameBufferTexture = et, this.useMultisampledRTT = X;
}
function Ix(s32, t) {
  function e(n, i = zn) {
    let r, a = Jt.getTransfer(i);
    if (n === An)
      return s32.UNSIGNED_BYTE;
    if (n === Vc)
      return s32.UNSIGNED_SHORT_4_4_4_4;
    if (n === Hc)
      return s32.UNSIGNED_SHORT_5_5_5_1;
    if (n === $d)
      return s32.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Zd)
      return s32.BYTE;
    if (n === Jd)
      return s32.SHORT;
    if (n === Bs)
      return s32.UNSIGNED_SHORT;
    if (n === kc)
      return s32.INT;
    if (n === Zn)
      return s32.UNSIGNED_INT;
    if (n === We)
      return s32.FLOAT;
    if (n === tr)
      return s32.HALF_FLOAT;
    if (n === Kd)
      return s32.ALPHA;
    if (n === Qd)
      return s32.RGB;
    if (n === Be)
      return s32.RGBA;
    if (n === jd)
      return s32.LUMINANCE;
    if (n === tf)
      return s32.LUMINANCE_ALPHA;
    if (n === Qi)
      return s32.DEPTH_COMPONENT;
    if (n === is)
      return s32.DEPTH_STENCIL;
    if (n === Gc)
      return s32.RED;
    if (n === Va)
      return s32.RED_INTEGER;
    if (n === ef)
      return s32.RG;
    if (n === Wc)
      return s32.RG_INTEGER;
    if (n === Xc)
      return s32.RGBA_INTEGER;
    if (n === $r || n === Kr || n === Qr || n === jr)
      if (a === se)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === $r)
            return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Kr)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Qr)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === jr)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === $r)
          return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Kr)
          return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Qr)
          return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === jr)
          return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Bo || n === zo || n === ko || n === Vo)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Bo)
          return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === zo)
          return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ko)
          return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Vo)
          return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ho || n === Go || n === Wo)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Ho || n === Go)
          return a === se ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Wo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Xo || n === qo || n === Yo || n === Zo || n === Jo || n === $o || n === Ko || n === Qo || n === jo || n === tl || n === el || n === nl || n === il || n === sl)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Xo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === qo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Yo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Zo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Jo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === $o)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ko)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Qo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === jo)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === tl)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === el)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === nl)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === il)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === sl)
          return a === se ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === ta || n === rl || n === al)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === ta)
          return a === se ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === rl)
          return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === al)
          return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === nf || n === ol || n === ll || n === cl)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === ta)
          return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === ol)
          return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ll)
          return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === cl)
          return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ns ? s32.UNSIGNED_INT_24_8 : s32[n] !== void 0 ? s32[n] : null;
  }
  return { convert: e };
}
var Sl = class extends Me {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.cameras = t;
  }
};
var pi = class extends te {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
};
var Lx = { type: "move" };
var Ns = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new pi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new pi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new T(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new T()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new pi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new T(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new T()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      let e = this._hand;
      if (e)
        for (let n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let i = null, r = null, a = null, o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = true;
        for (let _ of t.hand.values()) {
          let g = e.getJointPose(_, n), p = this._getHandJoint(c, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = g.radius), p.visible = g !== null;
        }
        let h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        c.inputState.pinching && d > f + m ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && d <= f - m && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else
        l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Lx)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      let n = new pi();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
};
var Ux = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
var Dx = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
var bl = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      let i = new _e(), r = t.properties.get(i);
      r.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      let e = t.cameras[0].viewport, n = new $e({ vertexShader: Ux, fragmentShader: Dx, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new de(new Gs(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
};
var wl = class extends hn {
  constructor(t, e) {
    super();
    let n = this, i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, m = null, _ = new bl(), g = e.getContextAttributes(), p = null, v = null, x = [], y = [], I = new Z(), E = null, C = new Me();
    C.layers.enable(1), C.viewport = new ee();
    let P = new Me();
    P.layers.enable(2), P.viewport = new ee();
    let b = [C, P], M = new Sl();
    M.layers.enable(1), M.layers.enable(2);
    let L = null, k = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let et = x[W];
      return et === void 0 && (et = new Ns(), x[W] = et), et.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let et = x[W];
      return et === void 0 && (et = new Ns(), x[W] = et), et.getGripSpace();
    }, this.getHand = function(W) {
      let et = x[W];
      return et === void 0 && (et = new Ns(), x[W] = et), et.getHandSpace();
    };
    function F(W) {
      let et = y.indexOf(W.inputSource);
      if (et === -1)
        return;
      let vt = x[et];
      vt !== void 0 && (vt.update(W.inputSource, W.frame, c || a), vt.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function V() {
      i.removeEventListener("select", F), i.removeEventListener("selectstart", F), i.removeEventListener("selectend", F), i.removeEventListener("squeeze", F), i.removeEventListener("squeezestart", F), i.removeEventListener("squeezeend", F), i.removeEventListener("end", V), i.removeEventListener("inputsourceschange", q);
      for (let W = 0; W < x.length; W++) {
        let et = y[W];
        et !== null && (y[W] = null, x[W].disconnect(et));
      }
      L = null, k = null, _.reset(), t.setRenderTarget(p), f = null, d = null, u = null, i = null, v = null, Zt.stop(), n.isPresenting = false, t.setPixelRatio(E), t.setSize(I.width, I.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(W) {
      if (i = W, i !== null) {
        if (p = t.getRenderTarget(), i.addEventListener("select", F), i.addEventListener("selectstart", F), i.addEventListener("selectend", F), i.addEventListener("squeeze", F), i.addEventListener("squeezestart", F), i.addEventListener("squeezeend", F), i.addEventListener("end", V), i.addEventListener("inputsourceschange", q), g.xrCompatible !== true && await e.makeXRCompatible(), E = t.getPixelRatio(), t.getSize(I), i.renderState.layers === void 0) {
          let et = { antialias: g.antialias, alpha: true, depth: g.depth, stencil: g.stencil, framebufferScaleFactor: r };
          f = new XRWebGLLayer(i, e, et), i.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, false), v = new Ze(f.framebufferWidth, f.framebufferHeight, { format: Be, type: An, colorSpace: t.outputColorSpace, stencilBuffer: g.stencil });
        } else {
          let et = null, vt = null, ct = null;
          g.depth && (ct = g.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, et = g.stencil ? is : Qi, vt = g.stencil ? ns : Zn);
          let Lt = { colorFormat: e.RGBA8, depthFormat: ct, scaleFactor: r };
          u = new XRWebGLBinding(i, e), d = u.createProjectionLayer(Lt), i.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, false), v = new Ze(d.textureWidth, d.textureHeight, { format: Be, type: An, depthTexture: new _a(d.textureWidth, d.textureHeight, vt, void 0, void 0, void 0, void 0, void 0, void 0, et), stencilBuffer: g.stencil, colorSpace: t.outputColorSpace, samples: g.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        }
        v.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), Zt.setContext(i), Zt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function q(W) {
      for (let et = 0; et < W.removed.length; et++) {
        let vt = W.removed[et], ct = y.indexOf(vt);
        ct >= 0 && (y[ct] = null, x[ct].disconnect(vt));
      }
      for (let et = 0; et < W.added.length; et++) {
        let vt = W.added[et], ct = y.indexOf(vt);
        if (ct === -1) {
          for (let kt = 0; kt < x.length; kt++)
            if (kt >= y.length) {
              y.push(vt), ct = kt;
              break;
            } else if (y[kt] === null) {
              y[kt] = vt, ct = kt;
              break;
            }
          if (ct === -1)
            break;
        }
        let Lt = x[ct];
        Lt && Lt.connect(vt);
      }
    }
    let H = new T(), j = new T();
    function G(W, et, vt) {
      H.setFromMatrixPosition(et.matrixWorld), j.setFromMatrixPosition(vt.matrixWorld);
      let ct = H.distanceTo(j), Lt = et.projectionMatrix.elements, kt = vt.projectionMatrix.elements, Ut = Lt[14] / (Lt[10] - 1), Yt = Lt[14] / (Lt[10] + 1), A = (Lt[9] + 1) / Lt[5], it = (Lt[9] - 1) / Lt[5], tt = (Lt[8] - 1) / Lt[0], ht = (kt[8] + 1) / kt[0], X = Ut * tt, Tt = Ut * ht, ut = ct / (-tt + ht), yt = ut * -tt;
      et.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(yt), W.translateZ(ut), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert();
      let R = Ut + ut, S = Yt + ut, B = X - yt, Q = Tt + (ct - yt), K = A * Yt / S * R, $ = it * Yt / S * R;
      W.projectionMatrix.makePerspective(B, Q, K, $, R, S), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
    }
    function dt(W, et) {
      et === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(et.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (i === null)
        return;
      _.texture !== null && (W.near = _.depthNear, W.far = _.depthFar), M.near = P.near = C.near = W.near, M.far = P.far = C.far = W.far, (L !== M.near || k !== M.far) && (i.updateRenderState({ depthNear: M.near, depthFar: M.far }), L = M.near, k = M.far, C.near = L, C.far = k, P.near = L, P.far = k, C.updateProjectionMatrix(), P.updateProjectionMatrix(), W.updateProjectionMatrix());
      let et = W.parent, vt = M.cameras;
      dt(M, et);
      for (let ct = 0; ct < vt.length; ct++)
        dt(vt[ct], et);
      vt.length === 2 ? G(M, C, P) : M.projectionMatrix.copy(C.projectionMatrix), gt(W, M, et);
    };
    function gt(W, et, vt) {
      vt === null ? W.matrix.copy(et.matrixWorld) : (W.matrix.copy(vt.matrixWorld), W.matrix.invert(), W.matrix.multiply(et.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(et.projectionMatrix), W.projectionMatrixInverse.copy(et.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = ss * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return l;
    }, this.setFoveation = function(W) {
      l = W, d !== null && (d.fixedFoveation = W), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let _t = null;
    function Ht(W, et) {
      if (h = et.getViewerPose(c || a), m = et, h !== null) {
        let vt = h.views;
        f !== null && (t.setRenderTargetFramebuffer(v, f.framebuffer), t.setRenderTarget(v));
        let ct = false;
        vt.length !== M.cameras.length && (M.cameras.length = 0, ct = true);
        for (let kt = 0; kt < vt.length; kt++) {
          let Ut = vt[kt], Yt = null;
          if (f !== null)
            Yt = f.getViewport(Ut);
          else {
            let it = u.getViewSubImage(d, Ut);
            Yt = it.viewport, kt === 0 && (t.setRenderTargetTextures(v, it.colorTexture, d.ignoreDepthValues ? void 0 : it.depthStencilTexture), t.setRenderTarget(v));
          }
          let A = b[kt];
          A === void 0 && (A = new Me(), A.layers.enable(kt), A.viewport = new ee(), b[kt] = A), A.matrix.fromArray(Ut.transform.matrix), A.matrix.decompose(A.position, A.quaternion, A.scale), A.projectionMatrix.fromArray(Ut.projectionMatrix), A.projectionMatrixInverse.copy(A.projectionMatrix).invert(), A.viewport.set(Yt.x, Yt.y, Yt.width, Yt.height), kt === 0 && (M.matrix.copy(A.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ct === true && M.cameras.push(A);
        }
        let Lt = i.enabledFeatures;
        if (Lt && Lt.includes("depth-sensing")) {
          let kt = u.getDepthInformation(vt[0]);
          kt && kt.isValid && kt.texture && _.init(t, kt, i.renderState);
        }
      }
      for (let vt = 0; vt < x.length; vt++) {
        let ct = y[vt], Lt = x[vt];
        ct !== null && Lt !== void 0 && Lt.update(ct, et, c || a);
      }
      _t && _t(W, et), et.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: et }), m = null;
    }
    let Zt = new cf();
    Zt.setAnimationLoop(Ht), this.setAnimationLoop = function(W) {
      _t = W;
    }, this.dispose = function() {
    };
  }
};
var si = new Je();
var Nx = new Rt();
function Fx(s32, t) {
  function e(g, p) {
    g.matrixAutoUpdate === true && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, lf(s32)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function i(g, p, v, x, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(g, p) : p.isMeshToonMaterial ? (r(g, p), u(g, p)) : p.isMeshPhongMaterial ? (r(g, p), h(g, p)) : p.isMeshStandardMaterial ? (r(g, p), d(g, p), p.isMeshPhysicalMaterial && f(g, p, y)) : p.isMeshMatcapMaterial ? (r(g, p), m(g, p)) : p.isMeshDepthMaterial ? r(g, p) : p.isMeshDistanceMaterial ? (r(g, p), _(g, p)) : p.isMeshNormalMaterial ? r(g, p) : p.isLineBasicMaterial ? (a(g, p), p.isLineDashedMaterial && o(g, p)) : p.isPointsMaterial ? l(g, p, v, x) : p.isSpriteMaterial ? c(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, e(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === ze && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, e(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === ze && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, e(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, e(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    let v = t.get(p), x = v.envMap, y = v.envMapRotation;
    x && (g.envMap.value = x, si.copy(y), si.x *= -1, si.y *= -1, si.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === false && (si.y *= -1, si.z *= -1), g.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(si)), g.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === false ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, g.aoMapTransform));
  }
  function a(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, e(p.map, g.mapTransform));
  }
  function o(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function l(g, p, v, x) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * v, g.scale.value = x * 0.5, p.map && (g.map.value = p.map, e(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function c(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function h(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function d(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function f(g, p, v) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === ze && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = v.texture, g.transmissionSamplerSize.value.set(v.width, v.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    let v = t.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(v.matrixWorld), g.nearDistance.value = v.shadow.camera.near, g.farDistance.value = v.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Ox(s32, t, e, n) {
  let i = {}, r = {}, a = [], o = s32.getParameter(s32.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(v, x) {
    let y = x.program;
    n.uniformBlockBinding(v, y);
  }
  function c(v, x) {
    let y = i[v.id];
    y === void 0 && (m(v), y = h(v), i[v.id] = y, v.addEventListener("dispose", g));
    let I = x.program;
    n.updateUBOMapping(v, I);
    let E = t.render.frame;
    r[v.id] !== E && (d(v), r[v.id] = E);
  }
  function h(v) {
    let x = u();
    v.__bindingPointIndex = x;
    let y = s32.createBuffer(), I = v.__size, E = v.usage;
    return s32.bindBuffer(s32.UNIFORM_BUFFER, y), s32.bufferData(s32.UNIFORM_BUFFER, I, E), s32.bindBuffer(s32.UNIFORM_BUFFER, null), s32.bindBufferBase(s32.UNIFORM_BUFFER, x, y), y;
  }
  function u() {
    for (let v = 0; v < o; v++)
      if (a.indexOf(v) === -1)
        return a.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(v) {
    let x = i[v.id], y = v.uniforms, I = v.__cache;
    s32.bindBuffer(s32.UNIFORM_BUFFER, x);
    for (let E = 0, C = y.length; E < C; E++) {
      let P = Array.isArray(y[E]) ? y[E] : [y[E]];
      for (let b = 0, M = P.length; b < M; b++) {
        let L = P[b];
        if (f(L, E, b, I) === true) {
          let k = L.__offset, F = Array.isArray(L.value) ? L.value : [L.value], V = 0;
          for (let q = 0; q < F.length; q++) {
            let H = F[q], j = _(H);
            typeof H == "number" || typeof H == "boolean" ? (L.__data[0] = H, s32.bufferSubData(s32.UNIFORM_BUFFER, k + V, L.__data)) : H.isMatrix3 ? (L.__data[0] = H.elements[0], L.__data[1] = H.elements[1], L.__data[2] = H.elements[2], L.__data[3] = 0, L.__data[4] = H.elements[3], L.__data[5] = H.elements[4], L.__data[6] = H.elements[5], L.__data[7] = 0, L.__data[8] = H.elements[6], L.__data[9] = H.elements[7], L.__data[10] = H.elements[8], L.__data[11] = 0) : (H.toArray(L.__data, V), V += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s32.bufferSubData(s32.UNIFORM_BUFFER, k, L.__data);
        }
      }
    }
    s32.bindBuffer(s32.UNIFORM_BUFFER, null);
  }
  function f(v, x, y, I) {
    let E = v.value, C = x + "_" + y;
    if (I[C] === void 0)
      return typeof E == "number" || typeof E == "boolean" ? I[C] = E : I[C] = E.clone(), true;
    {
      let P = I[C];
      if (typeof E == "number" || typeof E == "boolean") {
        if (P !== E)
          return I[C] = E, true;
      } else if (P.equals(E) === false)
        return P.copy(E), true;
    }
    return false;
  }
  function m(v) {
    let x = v.uniforms, y = 0, I = 16;
    for (let C = 0, P = x.length; C < P; C++) {
      let b = Array.isArray(x[C]) ? x[C] : [x[C]];
      for (let M = 0, L = b.length; M < L; M++) {
        let k = b[M], F = Array.isArray(k.value) ? k.value : [k.value];
        for (let V = 0, q = F.length; V < q; V++) {
          let H = F[V], j = _(H), G = y % I, dt = G % j.boundary, gt = G + dt;
          y += dt, gt !== 0 && I - gt < j.storage && (y += I - gt), k.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = y, y += j.storage;
        }
      }
    }
    let E = y % I;
    return E > 0 && (y += I - E), v.__size = y, v.__cache = {}, this;
  }
  function _(v) {
    let x = { boundary: 0, storage: 0 };
    return typeof v == "number" || typeof v == "boolean" ? (x.boundary = 4, x.storage = 4) : v.isVector2 ? (x.boundary = 8, x.storage = 8) : v.isVector3 || v.isColor ? (x.boundary = 16, x.storage = 12) : v.isVector4 ? (x.boundary = 16, x.storage = 16) : v.isMatrix3 ? (x.boundary = 48, x.storage = 48) : v.isMatrix4 ? (x.boundary = 64, x.storage = 64) : v.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", v), x;
  }
  function g(v) {
    let x = v.target;
    x.removeEventListener("dispose", g);
    let y = a.indexOf(x.__bindingPointIndex);
    a.splice(y, 1), s32.deleteBuffer(i[x.id]), delete i[x.id], delete r[x.id];
  }
  function p() {
    for (let v in i)
      s32.deleteBuffer(i[v]);
    a = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: p };
}
var hu = class {
  constructor(t = {}) {
    let { canvas: e = zp(), context: n = null, depth: i = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false } = t;
    this.isWebGLRenderer = true;
    let d;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = n.getContextAttributes().alpha;
    } else
      d = a;
    let f = new Uint32Array(4), m = new Int32Array(4), _ = null, g = null, p = [], v = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = sn, this.toneMapping = Wn, this.toneMappingExposure = 1;
    let x = this, y = false, I = 0, E = 0, C = null, P = -1, b = null, M = new ee(), L = new ee(), k = null, F = new ft(0), V = 0, q = e.width, H = e.height, j = 1, G = null, dt = null, gt = new ee(0, 0, q, H), _t = new ee(0, 0, q, H), Ht = false, Zt = new ls(), W = false, et = false, vt = new Rt(), ct = new T(), Lt = new ee(), kt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true }, Ut = false;
    function Yt() {
      return C === null ? j : 1;
    }
    let A = n;
    function it(w, D) {
      return e.getContext(w, D);
    }
    try {
      let w = { alpha: true, depth: i, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r167"), e.addEventListener("webglcontextlost", Y, false), e.addEventListener("webglcontextrestored", J, false), e.addEventListener("webglcontextcreationerror", at, false), A === null) {
        let D = "webgl2";
        if (A = it(D, w), A === null)
          throw it(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (w) {
      throw console.error("THREE.WebGLRenderer: " + w.message), w;
    }
    let tt, ht, X, Tt, ut, yt, R, S, B, Q, K, $, At, ot, xt, Ot, nt, mt, Xt, Nt, Mt, Ft, Wt, re;
    function U() {
      tt = new K_(A), tt.init(), Ft = new Ix(A, tt), ht = new X_(A, tt, t, Ft), X = new Ex(A), Tt = new t0(A), ut = new fx(), yt = new Px(A, tt, X, ut, ht, Ft, Tt), R = new Y_(x), S = new $_(x), B = new om(A), Wt = new G_(A, B), Q = new Q_(A, B, Tt, Wt), K = new n0(A, Q, B, Tt), Xt = new e0(A, ht, yt), Ot = new q_(ut), $ = new dx(x, R, S, tt, ht, Wt, Ot), At = new Fx(x, ut), ot = new mx(), xt = new Mx(tt), mt = new H_(x, R, S, X, K, d, l), nt = new wx(x, K, ht), re = new Ox(A, Tt, ht, X), Nt = new W_(A, tt, Tt), Mt = new j_(A, tt, Tt), Tt.programs = $.programs, x.capabilities = ht, x.extensions = tt, x.properties = ut, x.renderLists = ot, x.shadowMap = nt, x.state = X, x.info = Tt;
    }
    U();
    let st = new wl(x, A);
    this.xr = st, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      let w = tt.get("WEBGL_lose_context");
      w && w.loseContext();
    }, this.forceContextRestore = function() {
      let w = tt.get("WEBGL_lose_context");
      w && w.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(w) {
      w !== void 0 && (j = w, this.setSize(q, H, false));
    }, this.getSize = function(w) {
      return w.set(q, H);
    }, this.setSize = function(w, D, O = true) {
      if (st.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = w, H = D, e.width = Math.floor(w * j), e.height = Math.floor(D * j), O === true && (e.style.width = w + "px", e.style.height = D + "px"), this.setViewport(0, 0, w, D);
    }, this.getDrawingBufferSize = function(w) {
      return w.set(q * j, H * j).floor();
    }, this.setDrawingBufferSize = function(w, D, O) {
      q = w, H = D, j = O, e.width = Math.floor(w * O), e.height = Math.floor(D * O), this.setViewport(0, 0, w, D);
    }, this.getCurrentViewport = function(w) {
      return w.copy(M);
    }, this.getViewport = function(w) {
      return w.copy(gt);
    }, this.setViewport = function(w, D, O, z) {
      w.isVector4 ? gt.set(w.x, w.y, w.z, w.w) : gt.set(w, D, O, z), X.viewport(M.copy(gt).multiplyScalar(j).round());
    }, this.getScissor = function(w) {
      return w.copy(_t);
    }, this.setScissor = function(w, D, O, z) {
      w.isVector4 ? _t.set(w.x, w.y, w.z, w.w) : _t.set(w, D, O, z), X.scissor(L.copy(_t).multiplyScalar(j).round());
    }, this.getScissorTest = function() {
      return Ht;
    }, this.setScissorTest = function(w) {
      X.setScissorTest(Ht = w);
    }, this.setOpaqueSort = function(w) {
      G = w;
    }, this.setTransparentSort = function(w) {
      dt = w;
    }, this.getClearColor = function(w) {
      return w.copy(mt.getClearColor());
    }, this.setClearColor = function() {
      mt.setClearColor.apply(mt, arguments);
    }, this.getClearAlpha = function() {
      return mt.getClearAlpha();
    }, this.setClearAlpha = function() {
      mt.setClearAlpha.apply(mt, arguments);
    }, this.clear = function(w = true, D = true, O = true) {
      let z = 0;
      if (w) {
        let N = false;
        if (C !== null) {
          let rt = C.texture.format;
          N = rt === Xc || rt === Wc || rt === Va;
        }
        if (N) {
          let rt = C.texture.type, pt = rt === An || rt === Zn || rt === Bs || rt === ns || rt === Vc || rt === Hc, bt = mt.getClearColor(), wt = mt.getClearAlpha(), It = bt.r, Dt = bt.g, Ct = bt.b;
          pt ? (f[0] = It, f[1] = Dt, f[2] = Ct, f[3] = wt, A.clearBufferuiv(A.COLOR, 0, f)) : (m[0] = It, m[1] = Dt, m[2] = Ct, m[3] = wt, A.clearBufferiv(A.COLOR, 0, m));
        } else
          z |= A.COLOR_BUFFER_BIT;
      }
      D && (z |= A.DEPTH_BUFFER_BIT), O && (z |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", Y, false), e.removeEventListener("webglcontextrestored", J, false), e.removeEventListener("webglcontextcreationerror", at, false), ot.dispose(), xt.dispose(), ut.dispose(), R.dispose(), S.dispose(), K.dispose(), Wt.dispose(), re.dispose(), $.dispose(), st.dispose(), st.removeEventListener("sessionstart", ln), st.removeEventListener("sessionend", th), Qn.stop();
    };
    function Y(w) {
      w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = true;
    }
    function J() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = false;
      let w = Tt.autoReset, D = nt.enabled, O = nt.autoUpdate, z = nt.needsUpdate, N = nt.type;
      U(), Tt.autoReset = w, nt.enabled = D, nt.autoUpdate = O, nt.needsUpdate = z, nt.type = N;
    }
    function at(w) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage);
    }
    function Pt(w) {
      let D = w.target;
      D.removeEventListener("dispose", Pt), qt(D);
    }
    function qt(w) {
      fe(w), ut.remove(w);
    }
    function fe(w) {
      let D = ut.get(w).programs;
      D !== void 0 && (D.forEach(function(O) {
        $.releaseProgram(O);
      }), w.isShaderMaterial && $.releaseShaderCache(w));
    }
    this.renderBufferDirect = function(w, D, O, z, N, rt) {
      D === null && (D = kt);
      let pt = N.isMesh && N.matrixWorld.determinant() < 0, bt = Mf(w, D, O, z, N);
      X.setMaterial(z, pt);
      let wt = O.index, It = 1;
      if (z.wireframe === true) {
        if (wt = Q.getWireframeAttribute(O), wt === void 0)
          return;
        It = 2;
      }
      let Dt = O.drawRange, Ct = O.attributes.position, Kt = Dt.start * It, oe = (Dt.start + Dt.count) * It;
      rt !== null && (Kt = Math.max(Kt, rt.start * It), oe = Math.min(oe, (rt.start + rt.count) * It)), wt !== null ? (Kt = Math.max(Kt, 0), oe = Math.min(oe, wt.count)) : Ct != null && (Kt = Math.max(Kt, 0), oe = Math.min(oe, Ct.count));
      let le = oe - Kt;
      if (le < 0 || le === 1 / 0)
        return;
      Wt.setup(N, z, bt, O, wt);
      let ke, Qt = Nt;
      if (wt !== null && (ke = B.get(wt), Qt = Mt, Qt.setIndex(ke)), N.isMesh)
        z.wireframe === true ? (X.setLineWidth(z.wireframeLinewidth * Yt()), Qt.setMode(A.LINES)) : Qt.setMode(A.TRIANGLES);
      else if (N.isLine) {
        let Et = z.linewidth;
        Et === void 0 && (Et = 1), X.setLineWidth(Et * Yt()), N.isLineSegments ? Qt.setMode(A.LINES) : N.isLineLoop ? Qt.setMode(A.LINE_LOOP) : Qt.setMode(A.LINE_STRIP);
      } else
        N.isPoints ? Qt.setMode(A.POINTS) : N.isSprite && Qt.setMode(A.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          Qt.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (tt.get("WEBGL_multi_draw"))
          Qt.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          let Et = N._multiDrawStarts, be = N._multiDrawCounts, jt = N._multiDrawCount, je = wt ? B.get(wt).bytesPerElement : 1, bi = ut.get(z).currentProgram.getUniforms();
          for (let Ve = 0; Ve < jt; Ve++)
            bi.setValue(A, "_gl_DrawID", Ve), Qt.render(Et[Ve] / je, be[Ve]);
        }
      else if (N.isInstancedMesh)
        Qt.renderInstances(Kt, le, N.count);
      else if (O.isInstancedBufferGeometry) {
        let Et = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, be = Math.min(O.instanceCount, Et);
        Qt.renderInstances(Kt, le, be);
      } else
        Qt.render(Kt, le);
    };
    function Se(w, D, O) {
      w.transparent === true && w.side === Mn && w.forceSinglePass === false ? (w.side = ze, w.needsUpdate = true, nr(w, D, O), w.side = qn, w.needsUpdate = true, nr(w, D, O), w.side = Mn) : nr(w, D, O);
    }
    this.compile = function(w, D, O = null) {
      O === null && (O = w), g = xt.get(O), g.init(D), v.push(g), O.traverseVisible(function(N) {
        N.isLight && N.layers.test(D.layers) && (g.pushLight(N), N.castShadow && g.pushShadow(N));
      }), w !== O && w.traverseVisible(function(N) {
        N.isLight && N.layers.test(D.layers) && (g.pushLight(N), N.castShadow && g.pushShadow(N));
      }), g.setupLights();
      let z = /* @__PURE__ */ new Set();
      return w.traverse(function(N) {
        let rt = N.material;
        if (rt)
          if (Array.isArray(rt))
            for (let pt = 0; pt < rt.length; pt++) {
              let bt = rt[pt];
              Se(bt, O, N), z.add(bt);
            }
          else
            Se(rt, O, N), z.add(rt);
      }), v.pop(), g = null, z;
    }, this.compileAsync = function(w, D, O = null) {
      let z = this.compile(w, D, O);
      return new Promise((N) => {
        function rt() {
          if (z.forEach(function(pt) {
            ut.get(pt).currentProgram.isReady() && z.delete(pt);
          }), z.size === 0) {
            N(w);
            return;
          }
          setTimeout(rt, 10);
        }
        tt.get("KHR_parallel_shader_compile") !== null ? rt() : setTimeout(rt, 10);
      });
    };
    let $t = null;
    function dn(w) {
      $t && $t(w);
    }
    function ln() {
      Qn.stop();
    }
    function th() {
      Qn.start();
    }
    let Qn = new cf();
    Qn.setAnimationLoop(dn), typeof self < "u" && Qn.setContext(self), this.setAnimationLoop = function(w) {
      $t = w, st.setAnimationLoop(w), w === null ? Qn.stop() : Qn.start();
    }, st.addEventListener("sessionstart", ln), st.addEventListener("sessionend", th), this.render = function(w, D) {
      if (D !== void 0 && D.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === true)
        return;
      if (w.matrixWorldAutoUpdate === true && w.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === true && D.updateMatrixWorld(), st.enabled === true && st.isPresenting === true && (st.cameraAutoUpdate === true && st.updateCamera(D), D = st.getCamera()), w.isScene === true && w.onBeforeRender(x, w, D, C), g = xt.get(w, v.length), g.init(D), v.push(g), vt.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), Zt.setFromProjectionMatrix(vt), et = this.localClippingEnabled, W = Ot.init(this.clippingPlanes, et), _ = ot.get(w, p.length), _.init(), p.push(_), st.enabled === true && st.isPresenting === true) {
        let rt = x.xr.getDepthSensingMesh();
        rt !== null && Xa(rt, D, -1 / 0, x.sortObjects);
      }
      Xa(w, D, 0, x.sortObjects), _.finish(), x.sortObjects === true && _.sort(G, dt), Ut = st.enabled === false || st.isPresenting === false || st.hasDepthSensing() === false, Ut && mt.addToRenderList(_, w), this.info.render.frame++, W === true && Ot.beginShadows();
      let O = g.state.shadowsArray;
      nt.render(O, w, D), W === true && Ot.endShadows(), this.info.autoReset === true && this.info.reset();
      let z = _.opaque, N = _.transmissive;
      if (g.setupLights(), D.isArrayCamera) {
        let rt = D.cameras;
        if (N.length > 0)
          for (let pt = 0, bt = rt.length; pt < bt; pt++) {
            let wt = rt[pt];
            nh(z, N, w, wt);
          }
        Ut && mt.render(w);
        for (let pt = 0, bt = rt.length; pt < bt; pt++) {
          let wt = rt[pt];
          eh(_, w, wt, wt.viewport);
        }
      } else
        N.length > 0 && nh(z, N, w, D), Ut && mt.render(w), eh(_, w, D);
      C !== null && (yt.updateMultisampleRenderTarget(C), yt.updateRenderTargetMipmap(C)), w.isScene === true && w.onAfterRender(x, w, D), Wt.resetDefaultState(), P = -1, b = null, v.pop(), v.length > 0 ? (g = v[v.length - 1], W === true && Ot.setGlobalState(x.clippingPlanes, g.state.camera)) : g = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function Xa(w, D, O, z) {
      if (w.visible === false)
        return;
      if (w.layers.test(D.layers)) {
        if (w.isGroup)
          O = w.renderOrder;
        else if (w.isLOD)
          w.autoUpdate === true && w.update(D);
        else if (w.isLight)
          g.pushLight(w), w.castShadow && g.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || Zt.intersectsSprite(w)) {
            z && Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);
            let pt = K.update(w), bt = w.material;
            bt.visible && _.push(w, pt, bt, O, Lt.z, null);
          }
        } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || Zt.intersectsObject(w))) {
          let pt = K.update(w), bt = w.material;
          if (z && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), Lt.copy(w.boundingSphere.center)) : (pt.boundingSphere === null && pt.computeBoundingSphere(), Lt.copy(pt.boundingSphere.center)), Lt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)), Array.isArray(bt)) {
            let wt = pt.groups;
            for (let It = 0, Dt = wt.length; It < Dt; It++) {
              let Ct = wt[It], Kt = bt[Ct.materialIndex];
              Kt && Kt.visible && _.push(w, pt, Kt, O, Lt.z, Ct);
            }
          } else
            bt.visible && _.push(w, pt, bt, O, Lt.z, null);
        }
      }
      let rt = w.children;
      for (let pt = 0, bt = rt.length; pt < bt; pt++)
        Xa(rt[pt], D, O, z);
    }
    function eh(w, D, O, z) {
      let N = w.opaque, rt = w.transmissive, pt = w.transparent;
      g.setupLightsView(O), W === true && Ot.setGlobalState(x.clippingPlanes, O), z && X.viewport(M.copy(z)), N.length > 0 && er(N, D, O), rt.length > 0 && er(rt, D, O), pt.length > 0 && er(pt, D, O), X.buffers.depth.setTest(true), X.buffers.depth.setMask(true), X.buffers.color.setMask(true), X.setPolygonOffset(false);
    }
    function nh(w, D, O, z) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null)
        return;
      g.state.transmissionRenderTarget[z.id] === void 0 && (g.state.transmissionRenderTarget[z.id] = new Ze(1, 1, { generateMipmaps: true, type: tt.has("EXT_color_buffer_half_float") || tt.has("EXT_color_buffer_float") ? tr : An, minFilter: bn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Jt.workingColorSpace }));
      let rt = g.state.transmissionRenderTarget[z.id], pt = z.viewport || M;
      rt.setSize(pt.z, pt.w);
      let bt = x.getRenderTarget();
      x.setRenderTarget(rt), x.getClearColor(F), V = x.getClearAlpha(), V < 1 && x.setClearColor(16777215, 0.5), x.clear(), Ut && mt.render(O);
      let wt = x.toneMapping;
      x.toneMapping = Wn;
      let It = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), g.setupLightsView(z), W === true && Ot.setGlobalState(x.clippingPlanes, z), er(w, O, z), yt.updateMultisampleRenderTarget(rt), yt.updateRenderTargetMipmap(rt), tt.has("WEBGL_multisampled_render_to_texture") === false) {
        let Dt = false;
        for (let Ct = 0, Kt = D.length; Ct < Kt; Ct++) {
          let oe = D[Ct], le = oe.object, ke = oe.geometry, Qt = oe.material, Et = oe.group;
          if (Qt.side === Mn && le.layers.test(z.layers)) {
            let be = Qt.side;
            Qt.side = ze, Qt.needsUpdate = true, ih(le, O, z, ke, Qt, Et), Qt.side = be, Qt.needsUpdate = true, Dt = true;
          }
        }
        Dt === true && (yt.updateMultisampleRenderTarget(rt), yt.updateRenderTargetMipmap(rt));
      }
      x.setRenderTarget(bt), x.setClearColor(F, V), It !== void 0 && (z.viewport = It), x.toneMapping = wt;
    }
    function er(w, D, O) {
      let z = D.isScene === true ? D.overrideMaterial : null;
      for (let N = 0, rt = w.length; N < rt; N++) {
        let pt = w[N], bt = pt.object, wt = pt.geometry, It = z === null ? pt.material : z, Dt = pt.group;
        bt.layers.test(O.layers) && ih(bt, D, O, wt, It, Dt);
      }
    }
    function ih(w, D, O, z, N, rt) {
      w.onBeforeRender(x, D, O, z, N, rt), w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), N.transparent === true && N.side === Mn && N.forceSinglePass === false ? (N.side = ze, N.needsUpdate = true, x.renderBufferDirect(O, D, z, N, w, rt), N.side = qn, N.needsUpdate = true, x.renderBufferDirect(O, D, z, N, w, rt), N.side = Mn) : x.renderBufferDirect(O, D, z, N, w, rt), w.onAfterRender(x, D, O, z, N, rt);
    }
    function nr(w, D, O) {
      D.isScene !== true && (D = kt);
      let z = ut.get(w), N = g.state.lights, rt = g.state.shadowsArray, pt = N.state.version, bt = $.getParameters(w, N.state, rt, D, O), wt = $.getProgramCacheKey(bt), It = z.programs;
      z.environment = w.isMeshStandardMaterial ? D.environment : null, z.fog = D.fog, z.envMap = (w.isMeshStandardMaterial ? S : R).get(w.envMap || z.environment), z.envMapRotation = z.environment !== null && w.envMap === null ? D.environmentRotation : w.envMapRotation, It === void 0 && (w.addEventListener("dispose", Pt), It = /* @__PURE__ */ new Map(), z.programs = It);
      let Dt = It.get(wt);
      if (Dt !== void 0) {
        if (z.currentProgram === Dt && z.lightsStateVersion === pt)
          return rh(w, bt), Dt;
      } else
        bt.uniforms = $.getUniforms(w), w.onBeforeCompile(bt, x), Dt = $.acquireProgram(bt, wt), It.set(wt, Dt), z.uniforms = bt.uniforms;
      let Ct = z.uniforms;
      return (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === true) && (Ct.clippingPlanes = Ot.uniform), rh(w, bt), z.needsLights = bf(w), z.lightsStateVersion = pt, z.needsLights && (Ct.ambientLightColor.value = N.state.ambient, Ct.lightProbe.value = N.state.probe, Ct.directionalLights.value = N.state.directional, Ct.directionalLightShadows.value = N.state.directionalShadow, Ct.spotLights.value = N.state.spot, Ct.spotLightShadows.value = N.state.spotShadow, Ct.rectAreaLights.value = N.state.rectArea, Ct.ltc_1.value = N.state.rectAreaLTC1, Ct.ltc_2.value = N.state.rectAreaLTC2, Ct.pointLights.value = N.state.point, Ct.pointLightShadows.value = N.state.pointShadow, Ct.hemisphereLights.value = N.state.hemi, Ct.directionalShadowMap.value = N.state.directionalShadowMap, Ct.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Ct.spotShadowMap.value = N.state.spotShadowMap, Ct.spotLightMatrix.value = N.state.spotLightMatrix, Ct.spotLightMap.value = N.state.spotLightMap, Ct.pointShadowMap.value = N.state.pointShadowMap, Ct.pointShadowMatrix.value = N.state.pointShadowMatrix), z.currentProgram = Dt, z.uniformsList = null, Dt;
    }
    function sh(w) {
      if (w.uniformsList === null) {
        let D = w.currentProgram.getUniforms();
        w.uniformsList = es.seqWithValue(D.seq, w.uniforms);
      }
      return w.uniformsList;
    }
    function rh(w, D) {
      let O = ut.get(w);
      O.outputColorSpace = D.outputColorSpace, O.batching = D.batching, O.batchingColor = D.batchingColor, O.instancing = D.instancing, O.instancingColor = D.instancingColor, O.instancingMorph = D.instancingMorph, O.skinning = D.skinning, O.morphTargets = D.morphTargets, O.morphNormals = D.morphNormals, O.morphColors = D.morphColors, O.morphTargetsCount = D.morphTargetsCount, O.numClippingPlanes = D.numClippingPlanes, O.numIntersection = D.numClipIntersection, O.vertexAlphas = D.vertexAlphas, O.vertexTangents = D.vertexTangents, O.toneMapping = D.toneMapping;
    }
    function Mf(w, D, O, z, N) {
      D.isScene !== true && (D = kt), yt.resetTextureUnits();
      let rt = D.fog, pt = z.isMeshStandardMaterial ? D.environment : null, bt = C === null ? x.outputColorSpace : C.isXRRenderTarget === true ? C.texture.colorSpace : Kn, wt = (z.isMeshStandardMaterial ? S : R).get(z.envMap || pt), It = z.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Dt = !!O.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Ct = !!O.morphAttributes.position, Kt = !!O.morphAttributes.normal, oe = !!O.morphAttributes.color, le = Wn;
      z.toneMapped && (C === null || C.isXRRenderTarget === true) && (le = x.toneMapping);
      let ke = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Qt = ke !== void 0 ? ke.length : 0, Et = ut.get(z), be = g.state.lights;
      if (W === true && (et === true || w !== b)) {
        let qe = w === b && z.id === P;
        Ot.setState(z, w, qe);
      }
      let jt = false;
      z.version === Et.__version ? (Et.needsLights && Et.lightsStateVersion !== be.state.version || Et.outputColorSpace !== bt || N.isBatchedMesh && Et.batching === false || !N.isBatchedMesh && Et.batching === true || N.isBatchedMesh && Et.batchingColor === true && N.colorTexture === null || N.isBatchedMesh && Et.batchingColor === false && N.colorTexture !== null || N.isInstancedMesh && Et.instancing === false || !N.isInstancedMesh && Et.instancing === true || N.isSkinnedMesh && Et.skinning === false || !N.isSkinnedMesh && Et.skinning === true || N.isInstancedMesh && Et.instancingColor === true && N.instanceColor === null || N.isInstancedMesh && Et.instancingColor === false && N.instanceColor !== null || N.isInstancedMesh && Et.instancingMorph === true && N.morphTexture === null || N.isInstancedMesh && Et.instancingMorph === false && N.morphTexture !== null || Et.envMap !== wt || z.fog === true && Et.fog !== rt || Et.numClippingPlanes !== void 0 && (Et.numClippingPlanes !== Ot.numPlanes || Et.numIntersection !== Ot.numIntersection) || Et.vertexAlphas !== It || Et.vertexTangents !== Dt || Et.morphTargets !== Ct || Et.morphNormals !== Kt || Et.morphColors !== oe || Et.toneMapping !== le || Et.morphTargetsCount !== Qt) && (jt = true) : (jt = true, Et.__version = z.version);
      let je = Et.currentProgram;
      jt === true && (je = nr(z, D, N));
      let bi = false, Ve = false, qa = false, pe = je.getUniforms(), Pn = Et.uniforms;
      if (X.useProgram(je.program) && (bi = true, Ve = true, qa = true), z.id !== P && (P = z.id, Ve = true), bi || b !== w) {
        pe.setValue(A, "projectionMatrix", w.projectionMatrix), pe.setValue(A, "viewMatrix", w.matrixWorldInverse);
        let qe = pe.map.cameraPosition;
        qe !== void 0 && qe.setValue(A, ct.setFromMatrixPosition(w.matrixWorld)), ht.logarithmicDepthBuffer && pe.setValue(A, "logDepthBufFC", 2 / (Math.log(w.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && pe.setValue(A, "isOrthographic", w.isOrthographicCamera === true), b !== w && (b = w, Ve = true, qa = true);
      }
      if (N.isSkinnedMesh) {
        pe.setOptional(A, N, "bindMatrix"), pe.setOptional(A, N, "bindMatrixInverse");
        let qe = N.skeleton;
        qe && (qe.boneTexture === null && qe.computeBoneTexture(), pe.setValue(A, "boneTexture", qe.boneTexture, yt));
      }
      N.isBatchedMesh && (pe.setOptional(A, N, "batchingTexture"), pe.setValue(A, "batchingTexture", N._matricesTexture, yt), pe.setOptional(A, N, "batchingIdTexture"), pe.setValue(A, "batchingIdTexture", N._indirectTexture, yt), pe.setOptional(A, N, "batchingColorTexture"), N._colorsTexture !== null && pe.setValue(A, "batchingColorTexture", N._colorsTexture, yt));
      let Ya = O.morphAttributes;
      if ((Ya.position !== void 0 || Ya.normal !== void 0 || Ya.color !== void 0) && Xt.update(N, O, je), (Ve || Et.receiveShadow !== N.receiveShadow) && (Et.receiveShadow = N.receiveShadow, pe.setValue(A, "receiveShadow", N.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Pn.envMap.value = wt, Pn.flipEnvMap.value = wt.isCubeTexture && wt.isRenderTargetTexture === false ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && D.environment !== null && (Pn.envMapIntensity.value = D.environmentIntensity), Ve && (pe.setValue(A, "toneMappingExposure", x.toneMappingExposure), Et.needsLights && Sf(Pn, qa), rt && z.fog === true && At.refreshFogUniforms(Pn, rt), At.refreshMaterialUniforms(Pn, z, j, H, g.state.transmissionRenderTarget[w.id]), es.upload(A, sh(Et), Pn, yt)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (es.upload(A, sh(Et), Pn, yt), z.uniformsNeedUpdate = false), z.isSpriteMaterial && pe.setValue(A, "center", N.center), pe.setValue(A, "modelViewMatrix", N.modelViewMatrix), pe.setValue(A, "normalMatrix", N.normalMatrix), pe.setValue(A, "modelMatrix", N.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        let qe = z.uniformsGroups;
        for (let Za = 0, wf = qe.length; Za < wf; Za++) {
          let ah = qe[Za];
          re.update(ah, je), re.bind(ah, je);
        }
      }
      return je;
    }
    function Sf(w, D) {
      w.ambientLightColor.needsUpdate = D, w.lightProbe.needsUpdate = D, w.directionalLights.needsUpdate = D, w.directionalLightShadows.needsUpdate = D, w.pointLights.needsUpdate = D, w.pointLightShadows.needsUpdate = D, w.spotLights.needsUpdate = D, w.spotLightShadows.needsUpdate = D, w.rectAreaLights.needsUpdate = D, w.hemisphereLights.needsUpdate = D;
    }
    function bf(w) {
      return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === true;
    }
    this.getActiveCubeFace = function() {
      return I;
    }, this.getActiveMipmapLevel = function() {
      return E;
    }, this.getRenderTarget = function() {
      return C;
    }, this.setRenderTargetTextures = function(w, D, O) {
      ut.get(w.texture).__webglTexture = D, ut.get(w.depthTexture).__webglTexture = O;
      let z = ut.get(w);
      z.__hasExternalTextures = true, z.__autoAllocateDepthBuffer = O === void 0, z.__autoAllocateDepthBuffer || tt.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(w, D) {
      let O = ut.get(w);
      O.__webglFramebuffer = D, O.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(w, D = 0, O = 0) {
      C = w, I = D, E = O;
      let z = true, N = null, rt = false, pt = false;
      if (w) {
        let wt = ut.get(w);
        wt.__useDefaultFramebuffer !== void 0 ? (X.bindFramebuffer(A.FRAMEBUFFER, null), z = false) : wt.__webglFramebuffer === void 0 ? yt.setupRenderTarget(w) : wt.__hasExternalTextures && yt.rebindTextures(w, ut.get(w.texture).__webglTexture, ut.get(w.depthTexture).__webglTexture);
        let It = w.texture;
        (It.isData3DTexture || It.isDataArrayTexture || It.isCompressedArrayTexture) && (pt = true);
        let Dt = ut.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget ? (Array.isArray(Dt[D]) ? N = Dt[D][O] : N = Dt[D], rt = true) : w.samples > 0 && yt.useMultisampledRTT(w) === false ? N = ut.get(w).__webglMultisampledFramebuffer : Array.isArray(Dt) ? N = Dt[O] : N = Dt, M.copy(w.viewport), L.copy(w.scissor), k = w.scissorTest;
      } else
        M.copy(gt).multiplyScalar(j).floor(), L.copy(_t).multiplyScalar(j).floor(), k = Ht;
      if (X.bindFramebuffer(A.FRAMEBUFFER, N) && z && X.drawBuffers(w, N), X.viewport(M), X.scissor(L), X.setScissorTest(k), rt) {
        let wt = ut.get(w.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + D, wt.__webglTexture, O);
      } else if (pt) {
        let wt = ut.get(w.texture), It = D || 0;
        A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, wt.__webglTexture, O || 0, It);
      }
      P = -1;
    }, this.readRenderTargetPixels = function(w, D, O, z, N, rt, pt) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let bt = ut.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && pt !== void 0 && (bt = bt[pt]), bt) {
        X.bindFramebuffer(A.FRAMEBUFFER, bt);
        try {
          let wt = w.texture, It = wt.format, Dt = wt.type;
          if (!ht.textureFormatReadable(It)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ht.textureTypeReadable(Dt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= w.width - z && O >= 0 && O <= w.height - N && A.readPixels(D, O, z, N, Ft.convert(It), Ft.convert(Dt), rt);
        } finally {
          let wt = C !== null ? ut.get(C).__webglFramebuffer : null;
          X.bindFramebuffer(A.FRAMEBUFFER, wt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(w, D, O, z, N, rt, pt) {
      if (!(w && w.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let bt = ut.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && pt !== void 0 && (bt = bt[pt]), bt) {
        X.bindFramebuffer(A.FRAMEBUFFER, bt);
        try {
          let wt = w.texture, It = wt.format, Dt = wt.type;
          if (!ht.textureFormatReadable(It))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!ht.textureTypeReadable(Dt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          if (D >= 0 && D <= w.width - z && O >= 0 && O <= w.height - N) {
            let Ct = A.createBuffer();
            A.bindBuffer(A.PIXEL_PACK_BUFFER, Ct), A.bufferData(A.PIXEL_PACK_BUFFER, rt.byteLength, A.STREAM_READ), A.readPixels(D, O, z, N, Ft.convert(It), Ft.convert(Dt), 0), A.flush();
            let Kt = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
            await kp(A, Kt, 4);
            try {
              A.bindBuffer(A.PIXEL_PACK_BUFFER, Ct), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, rt);
            } finally {
              A.deleteBuffer(Ct), A.deleteSync(Kt);
            }
            return rt;
          }
        } finally {
          let wt = C !== null ? ut.get(C).__webglFramebuffer : null;
          X.bindFramebuffer(A.FRAMEBUFFER, wt);
        }
      }
    }, this.copyFramebufferToTexture = function(w, D = null, O = 0) {
      w.isTexture !== true && (ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."), D = arguments[0] || null, w = arguments[1]);
      let z = Math.pow(2, -O), N = Math.floor(w.image.width * z), rt = Math.floor(w.image.height * z), pt = D !== null ? D.x : 0, bt = D !== null ? D.y : 0;
      yt.setTexture2D(w, 0), A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, pt, bt, N, rt), X.unbindTexture();
    }, this.copyTextureToTexture = function(w, D, O = null, z = null, N = 0) {
      w.isTexture !== true && (ji("WebGLRenderer: copyTextureToTexture function signature has changed."), z = arguments[0] || null, w = arguments[1], D = arguments[2], N = arguments[3] || 0, O = null);
      let rt, pt, bt, wt, It, Dt;
      O !== null ? (rt = O.max.x - O.min.x, pt = O.max.y - O.min.y, bt = O.min.x, wt = O.min.y) : (rt = w.image.width, pt = w.image.height, bt = 0, wt = 0), z !== null ? (It = z.x, Dt = z.y) : (It = 0, Dt = 0);
      let Ct = Ft.convert(D.format), Kt = Ft.convert(D.type);
      yt.setTexture2D(D, 0), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment);
      let oe = A.getParameter(A.UNPACK_ROW_LENGTH), le = A.getParameter(A.UNPACK_IMAGE_HEIGHT), ke = A.getParameter(A.UNPACK_SKIP_PIXELS), Qt = A.getParameter(A.UNPACK_SKIP_ROWS), Et = A.getParameter(A.UNPACK_SKIP_IMAGES), be = w.isCompressedTexture ? w.mipmaps[N] : w.image;
      A.pixelStorei(A.UNPACK_ROW_LENGTH, be.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, be.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, bt), A.pixelStorei(A.UNPACK_SKIP_ROWS, wt), w.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, N, It, Dt, rt, pt, Ct, Kt, be.data) : w.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, N, It, Dt, be.width, be.height, Ct, be.data) : A.texSubImage2D(A.TEXTURE_2D, N, It, Dt, rt, pt, Ct, Kt, be), A.pixelStorei(A.UNPACK_ROW_LENGTH, oe), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, le), A.pixelStorei(A.UNPACK_SKIP_PIXELS, ke), A.pixelStorei(A.UNPACK_SKIP_ROWS, Qt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Et), N === 0 && D.generateMipmaps && A.generateMipmap(A.TEXTURE_2D), X.unbindTexture();
    }, this.copyTextureToTexture3D = function(w, D, O = null, z = null, N = 0) {
      w.isTexture !== true && (ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, z = arguments[1] || null, w = arguments[2], D = arguments[3], N = arguments[4] || 0);
      let rt, pt, bt, wt, It, Dt, Ct, Kt, oe, le = w.isCompressedTexture ? w.mipmaps[N] : w.image;
      O !== null ? (rt = O.max.x - O.min.x, pt = O.max.y - O.min.y, bt = O.max.z - O.min.z, wt = O.min.x, It = O.min.y, Dt = O.min.z) : (rt = le.width, pt = le.height, bt = le.depth, wt = 0, It = 0, Dt = 0), z !== null ? (Ct = z.x, Kt = z.y, oe = z.z) : (Ct = 0, Kt = 0, oe = 0);
      let ke = Ft.convert(D.format), Qt = Ft.convert(D.type), Et;
      if (D.isData3DTexture)
        yt.setTexture3D(D, 0), Et = A.TEXTURE_3D;
      else if (D.isDataArrayTexture || D.isCompressedArrayTexture)
        yt.setTexture2DArray(D, 0), Et = A.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment);
      let be = A.getParameter(A.UNPACK_ROW_LENGTH), jt = A.getParameter(A.UNPACK_IMAGE_HEIGHT), je = A.getParameter(A.UNPACK_SKIP_PIXELS), bi = A.getParameter(A.UNPACK_SKIP_ROWS), Ve = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, le.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, le.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, wt), A.pixelStorei(A.UNPACK_SKIP_ROWS, It), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Dt), w.isDataTexture || w.isData3DTexture ? A.texSubImage3D(Et, N, Ct, Kt, oe, rt, pt, bt, ke, Qt, le.data) : D.isCompressedArrayTexture ? A.compressedTexSubImage3D(Et, N, Ct, Kt, oe, rt, pt, bt, ke, le.data) : A.texSubImage3D(Et, N, Ct, Kt, oe, rt, pt, bt, ke, Qt, le), A.pixelStorei(A.UNPACK_ROW_LENGTH, be), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, jt), A.pixelStorei(A.UNPACK_SKIP_PIXELS, je), A.pixelStorei(A.UNPACK_SKIP_ROWS, bi), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ve), N === 0 && D.generateMipmaps && A.generateMipmap(Et), X.unbindTexture();
    }, this.initRenderTarget = function(w) {
      ut.get(w).__webglFramebuffer === void 0 && yt.setupRenderTarget(w);
    }, this.initTexture = function(w) {
      w.isCubeTexture ? yt.setTextureCube(w, 0) : w.isData3DTexture ? yt.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? yt.setTexture2DArray(w, 0) : yt.setTexture2D(w, 0), X.unbindTexture();
    }, this.resetState = function() {
      I = 0, E = 0, C = null, X.reset(), Wt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return wn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    let e = this.getContext();
    e.drawingBufferColorSpace = t === Yc ? "display-p3" : "srgb", e.unpackColorSpace = Jt.workingColorSpace === Ha ? "display-p3" : "srgb";
  }
};
var Tl = class extends te {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Je(), this.environmentIntensity = 1, this.environmentRotation = new Je(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    let e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
};
var Le = new T();
var bs = new T();
var Hi = new T();
var Gi = new T();
var Wi = new Z();
var ws = new Z();
var pf = new Rt();
var wr = new T();
var Es = new T();
var Er = new T();
var uu = new Z();
var Mo = new Z();
var du = new Z();
var Tr = new T();
var fu = new T();
var pu = new T();
var mu = new ee();
var gu = new ee();
var Bx = new T();
var _u = new Rt();
var Cr = new T();
var So = new Ee();
var xu = new Rt();
var bo = new xi();
var an = class extends _e {
  constructor(t = null, e = 1, n = 1, i, r, a, o, l, c = we, h = we, u, d) {
    super(null, a, o, l, c, h, i, r, u, d), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
};
var vu = new Rt();
var zx = new Rt();
var Xi = new Rt();
var yu = new Rt();
var Mu = new Pe();
var kx = new Rt();
var As = new de();
var Ts = new Ee();
var Ul = class {
  constructor() {
    this.index = 0, this.pool = [], this.list = [];
  }
  push(t, e, n) {
    let i = this.pool, r = this.list;
    this.index >= i.length && i.push({ start: -1, count: -1, z: -1, index: -1 });
    let a = i[this.index];
    r.push(a), this.index++, a.start = t.start, a.count = t.count, a.z = e, a.index = n;
  }
  reset() {
    this.list.length = 0, this.index = 0;
  }
};
var On = new Rt();
var wo = new Rt();
var Gx = new Rt();
var Wx = new ft(1, 1, 1);
var Su = new Rt();
var Eo = new ls();
var Pr = new Pe();
var ri = new Ee();
var Cs = new T();
var bu = new T();
var Xx = new T();
var Ao = new Ul();
var Re = new de();
var Sa = new T();
var ba = new T();
var wu = new Rt();
var Rs = new xi();
var Lr = new Ee();
var To = new T();
var Eu = new T();
var Au = new T();
var Tu = new T();
var Cu = new Rt();
var Fl = new xi();
var Dr = new Ee();
var Nr = new T();
var Du = class extends _e {
  constructor(t, e, n, i, r, a, o, l, c) {
    super(t, e, n, i, r, a, o, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
};
var Ke = class {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(t, e) {
    let n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    let e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    let e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  getLength() {
    let t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = false;
    let e = [], n, i = this.getPoint(0), r = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), r += n.distanceTo(i), e.push(r), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(t, e) {
    let n = this.getLengths(), i = 0, r = n.length, a;
    e ? a = e : a = t * n[r - 1];
    let o = 0, l = r - 1, c;
    for (; o <= l; )
      if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0)
        o = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === a)
      return i / (r - 1);
    let h = n[i], d = n[i + 1] - h, f = (a - h) / d;
    return (i + f) / (r - 1);
  }
  getTangent(t, e) {
    let i = t - 1e-4, r = t + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    let a = this.getPoint(i), o = this.getPoint(r), l = e || (a.isVector2 ? new Z() : new T());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(t, e) {
    let n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    let n = new T(), i = [], r = [], a = [], o = new T(), l = new Rt();
    for (let f = 0; f <= t; f++) {
      let m = f / t;
      i[f] = this.getTangentAt(m, new T());
    }
    r[0] = new T(), a[0] = new T();
    let c = Number.MAX_VALUE, h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), a[0].crossVectors(i[0], r[0]);
    for (let f = 1; f <= t; f++) {
      if (r[f] = r[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        let m = Math.acos(he(i[f - 1].dot(i[f]), -1, 1));
        r[f].applyMatrix4(l.makeRotationAxis(o, m));
      }
      a[f].crossVectors(i[f], r[f]);
    }
    if (e === true) {
      let f = Math.acos(he(r[0].dot(r[t]), -1, 1));
      f /= t, i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f);
      for (let m = 1; m <= t; m++)
        r[m].applyMatrix4(l.makeRotationAxis(i[m], f * m)), a[m].crossVectors(i[m], r[m]);
    }
    return { tangents: i, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    let t = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
};
var Ys = class extends Ke {
  constructor(t = 0, e = 0, n = 1, i = 1, r = 0, a = Math.PI * 2, o = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(t, e = new Z()) {
    let n = e, i = Math.PI * 2, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; )
      r += i;
    for (; r > i; )
      r -= i;
    r < Number.EPSILON && (a ? r = 0 : r = i), this.aClockwise === true && !a && (r === i ? r = -i : r = r - i);
    let o = this.aStartAngle + t * r, l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      let h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
};
var Bl = class extends Ys {
  constructor(t, e, n, i, r, a) {
    super(t, e, n, n, i, r, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
};
function $c() {
  let s32 = 0, t = 0, e = 0, n = 0;
  function i(r, a, o, l) {
    s32 = r, t = o, e = -3 * r + 3 * a - 2 * o - l, n = 2 * r - 2 * a + o + l;
  }
  return { initCatmullRom: function(r, a, o, l, c) {
    i(a, o, c * (o - r), c * (l - a));
  }, initNonuniformCatmullRom: function(r, a, o, l, c, h, u) {
    let d = (a - r) / c - (o - r) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
    d *= h, f *= h, i(a, o, d, f);
  }, calc: function(r) {
    let a = r * r, o = a * r;
    return s32 + t * r + e * a + n * o;
  } };
}
var Fr = new T();
var Co = new $c();
var Ro = new $c();
var Po = new $c();
var zl = class extends Ke {
  constructor(t = [], e = false, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
  }
  getPoint(t, e = new T()) {
    let n = e, i = this.points, r = i.length, a = (r - (this.closed ? 0 : 1)) * t, o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : l === 0 && o === r - 1 && (o = r - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = i[(o - 1) % r] : (Fr.subVectors(i[0], i[1]).add(i[0]), c = Fr);
    let u = i[o % r], d = i[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = i[(o + 2) % r] : (Fr.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = Fr), this.curveType === "centripetal" || this.curveType === "chordal") {
      let f = this.curveType === "chordal" ? 0.5 : 0.25, m = Math.pow(c.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), Co.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, m, _, g), Ro.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, m, _, g), Po.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, m, _, g);
    } else
      this.curveType === "catmullrom" && (Co.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), Ro.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), Po.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return n.set(Co.calc(l), Ro.calc(l), Po.calc(l)), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      let i = t.points[e];
      this.points.push(i.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    let t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      let i = this.points[e];
      t.points.push(i.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      let i = t.points[e];
      this.points.push(new T().fromArray(i));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
};
function Nu(s32, t, e, n, i) {
  let r = (n - t) * 0.5, a = (i - e) * 0.5, o = s32 * s32, l = s32 * o;
  return (2 * e - 2 * n + r + a) * l + (-3 * e + 3 * n - 2 * r - a) * o + r * s32 + e;
}
function Yx(s32, t) {
  let e = 1 - s32;
  return e * e * t;
}
function Zx(s32, t) {
  return 2 * (1 - s32) * s32 * t;
}
function Jx(s32, t) {
  return s32 * s32 * t;
}
function Fs(s32, t, e, n) {
  return Yx(s32, t) + Zx(s32, e) + Jx(s32, n);
}
function $x(s32, t) {
  let e = 1 - s32;
  return e * e * e * t;
}
function Kx(s32, t) {
  let e = 1 - s32;
  return 3 * e * e * s32 * t;
}
function Qx(s32, t) {
  return 3 * (1 - s32) * s32 * s32 * t;
}
function jx(s32, t) {
  return s32 * s32 * s32 * t;
}
function Os(s32, t, e, n, i) {
  return $x(s32, t) + Kx(s32, e) + Qx(s32, n) + jx(s32, i);
}
var Ea = class extends Ke {
  constructor(t = new Z(), e = new Z(), n = new Z(), i = new Z()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new Z()) {
    let n = e, i = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(Os(t, i.x, r.x, a.x, o.x), Os(t, i.y, r.y, a.y, o.y)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
};
var kl = class extends Ke {
  constructor(t = new T(), e = new T(), n = new T(), i = new T()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new T()) {
    let n = e, i = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(Os(t, i.x, r.x, a.x, o.x), Os(t, i.y, r.y, a.y, o.y), Os(t, i.z, r.z, a.z, o.z)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
};
var Aa = class extends Ke {
  constructor(t = new Z(), e = new Z()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new Z()) {
    let n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new Z()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
};
var Vl = class extends Ke {
  constructor(t = new T(), e = new T()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new T()) {
    let n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new T()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
};
var Ta = class extends Ke {
  constructor(t = new Z(), e = new Z(), n = new Z()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new Z()) {
    let n = e, i = this.v0, r = this.v1, a = this.v2;
    return n.set(Fs(t, i.x, r.x, a.x), Fs(t, i.y, r.y, a.y)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
};
var Ca = class extends Ke {
  constructor(t = new T(), e = new T(), n = new T()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new T()) {
    let n = e, i = this.v0, r = this.v1, a = this.v2;
    return n.set(Fs(t, i.x, r.x, a.x), Fs(t, i.y, r.y, a.y), Fs(t, i.z, r.z, a.z)), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
};
var Ra = class extends Ke {
  constructor(t = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new Z()) {
    let n = e, i = this.points, r = (i.length - 1) * t, a = Math.floor(r), o = r - a, l = i[a === 0 ? a : a - 1], c = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(Nu(o, l.x, c.x, h.x, u.x), Nu(o, l.y, c.y, h.y, u.y)), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      let i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      let i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      let i = t.points[e];
      this.points.push(new Z().fromArray(i));
    }
    return this;
  }
};
var Pa = Object.freeze({ __proto__: null, ArcCurve: Bl, CatmullRomCurve3: zl, CubicBezierCurve: Ea, CubicBezierCurve3: kl, EllipseCurve: Ys, LineCurve: Aa, LineCurve3: Vl, QuadraticBezierCurve: Ta, QuadraticBezierCurve3: Ca, SplineCurve: Ra });
var Hl = class extends Ke {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    let t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      let n = t.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new Pa[n](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    let n = t * this.getLength(), i = this.getCurveLengths(), r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        let a = i[r] - n, o = this.curves[r], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, e);
      }
      r++;
    }
    return null;
  }
  getLength() {
    let t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    let t = [], e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    let e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    let e = [], n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      let a = r[i], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        let h = l[c];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      let i = t.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    let t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      let i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      let i = t.curves[e];
      this.curves.push(new Pa[i.type]().fromJSON(i));
    }
    return this;
  }
};
var hs = class extends Hl {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new Z(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    let n = new Aa(this.currentPoint.clone(), new Z(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    let r = new Ta(this.currentPoint.clone(), new Z(t, e), new Z(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, a) {
    let o = new Ea(this.currentPoint.clone(), new Z(t, e), new Z(n, i), new Z(r, a));
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(t) {
    let e = [this.currentPoint.clone()].concat(t), n = new Ra(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, r, a) {
    let o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(t + o, e + l, n, i, r, a), this;
  }
  absarc(t, e, n, i, r, a) {
    return this.absellipse(t, e, n, n, i, r, a), this;
  }
  ellipse(t, e, n, i, r, a, o, l) {
    let c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, n, i, r, a, o, l), this;
  }
  absellipse(t, e, n, i, r, a, o, l) {
    let c = new Ys(t, e, n, i, r, a, o, l);
    if (this.curves.length > 0) {
      let u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    let h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
};
var Ia = class s13 extends Gt {
  constructor(t = [new Z(0, -0.5), new Z(0.5, 0), new Z(0, 0.5)], e = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = { points: t, segments: e, phiStart: n, phiLength: i }, e = Math.floor(e), i = he(i, 0, Math.PI * 2);
    let r = [], a = [], o = [], l = [], c = [], h = 1 / e, u = new T(), d = new Z(), f = new T(), m = new T(), _ = new T(), g = 0, p = 0;
    for (let v = 0; v <= t.length - 1; v++)
      switch (v) {
        case 0:
          g = t[v + 1].x - t[v].x, p = t[v + 1].y - t[v].y, f.x = p * 1, f.y = -g, f.z = p * 0, _.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
          break;
        case t.length - 1:
          l.push(_.x, _.y, _.z);
          break;
        default:
          g = t[v + 1].x - t[v].x, p = t[v + 1].y - t[v].y, f.x = p * 1, f.y = -g, f.z = p * 0, m.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), l.push(f.x, f.y, f.z), _.copy(m);
      }
    for (let v = 0; v <= e; v++) {
      let x = n + v * h * i, y = Math.sin(x), I = Math.cos(x);
      for (let E = 0; E <= t.length - 1; E++) {
        u.x = t[E].x * y, u.y = t[E].y, u.z = t[E].x * I, a.push(u.x, u.y, u.z), d.x = v / e, d.y = E / (t.length - 1), o.push(d.x, d.y);
        let C = l[3 * E + 0] * y, P = l[3 * E + 1], b = l[3 * E + 0] * I;
        c.push(C, P, b);
      }
    }
    for (let v = 0; v < e; v++)
      for (let x = 0; x < t.length - 1; x++) {
        let y = x + v * t.length, I = y, E = y + t.length, C = y + t.length + 1, P = y + 1;
        r.push(I, E, P), r.push(C, P, E);
      }
    this.setIndex(r), this.setAttribute("position", new St(a, 3)), this.setAttribute("uv", new St(o, 2)), this.setAttribute("normal", new St(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s13(t.points, t.segments, t.phiStart, t.phiLength);
  }
};
var Gl = class s14 extends Ia {
  constructor(t = 1, e = 1, n = 4, i = 8) {
    let r = new hs();
    r.absarc(0, -e / 2, t, Math.PI * 1.5, 0), r.absarc(0, e / 2, t, 0, Math.PI * 0.5), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = { radius: t, length: e, capSegments: n, radialSegments: i };
  }
  static fromJSON(t) {
    return new s14(t.radius, t.length, t.capSegments, t.radialSegments);
  }
};
var Wl = class s15 extends Gt {
  constructor(t = 1, e = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: n, thetaLength: i }, e = Math.max(3, e);
    let r = [], a = [], o = [], l = [], c = new T(), h = new Z();
    a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= e; u++, d += 3) {
      let f = n + u / e * i;
      c.x = t * Math.cos(f), c.y = t * Math.sin(f), a.push(c.x, c.y, c.z), o.push(0, 0, 1), h.x = (a[d] / t + 1) / 2, h.y = (a[d + 1] / t + 1) / 2, l.push(h.x, h.y);
    }
    for (let u = 1; u <= e; u++)
      r.push(u, u + 1, 0);
    this.setIndex(r), this.setAttribute("position", new St(a, 3)), this.setAttribute("normal", new St(o, 3)), this.setAttribute("uv", new St(l, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s15(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
};
var Zs = class s16 extends Gt {
  constructor(t = 1, e = 1, n = 1, i = 32, r = 1, a = false, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: l };
    let c = this;
    i = Math.floor(i), r = Math.floor(r);
    let h = [], u = [], d = [], f = [], m = 0, _ = [], g = n / 2, p = 0;
    v(), a === false && (t > 0 && x(true), e > 0 && x(false)), this.setIndex(h), this.setAttribute("position", new St(u, 3)), this.setAttribute("normal", new St(d, 3)), this.setAttribute("uv", new St(f, 2));
    function v() {
      let y = new T(), I = new T(), E = 0, C = (e - t) / n;
      for (let P = 0; P <= r; P++) {
        let b = [], M = P / r, L = M * (e - t) + t;
        for (let k = 0; k <= i; k++) {
          let F = k / i, V = F * l + o, q = Math.sin(V), H = Math.cos(V);
          I.x = L * q, I.y = -M * n + g, I.z = L * H, u.push(I.x, I.y, I.z), y.set(q, C, H).normalize(), d.push(y.x, y.y, y.z), f.push(F, 1 - M), b.push(m++);
        }
        _.push(b);
      }
      for (let P = 0; P < i; P++)
        for (let b = 0; b < r; b++) {
          let M = _[b][P], L = _[b + 1][P], k = _[b + 1][P + 1], F = _[b][P + 1];
          h.push(M, L, F), h.push(L, k, F), E += 6;
        }
      c.addGroup(p, E, 0), p += E;
    }
    function x(y) {
      let I = m, E = new Z(), C = new T(), P = 0, b = y === true ? t : e, M = y === true ? 1 : -1;
      for (let k = 1; k <= i; k++)
        u.push(0, g * M, 0), d.push(0, M, 0), f.push(0.5, 0.5), m++;
      let L = m;
      for (let k = 0; k <= i; k++) {
        let V = k / i * l + o, q = Math.cos(V), H = Math.sin(V);
        C.x = b * H, C.y = g * M, C.z = b * q, u.push(C.x, C.y, C.z), d.push(0, M, 0), E.x = q * 0.5 + 0.5, E.y = H * 0.5 * M + 0.5, f.push(E.x, E.y), m++;
      }
      for (let k = 0; k < i; k++) {
        let F = I + k, V = L + k;
        y === true ? h.push(V, V + 1, F) : h.push(V + 1, V, F), P += 3;
      }
      c.addGroup(p, P, y === true ? 1 : 2), p += P;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s16(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
};
var Xl = class s17 extends Zs {
  constructor(t = 1, e = 1, n = 32, i = 1, r = false, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: a, thetaLength: o };
  }
  static fromJSON(t) {
    return new s17(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
};
var yi = class s18 extends Gt {
  constructor(t = [], e = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: n, detail: i };
    let r = [], a = [];
    o(i), c(n), h(), this.setAttribute("position", new St(r, 3)), this.setAttribute("normal", new St(r.slice(), 3)), this.setAttribute("uv", new St(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(v) {
      let x = new T(), y = new T(), I = new T();
      for (let E = 0; E < e.length; E += 3)
        f(e[E + 0], x), f(e[E + 1], y), f(e[E + 2], I), l(x, y, I, v);
    }
    function l(v, x, y, I) {
      let E = I + 1, C = [];
      for (let P = 0; P <= E; P++) {
        C[P] = [];
        let b = v.clone().lerp(y, P / E), M = x.clone().lerp(y, P / E), L = E - P;
        for (let k = 0; k <= L; k++)
          k === 0 && P === E ? C[P][k] = b : C[P][k] = b.clone().lerp(M, k / L);
      }
      for (let P = 0; P < E; P++)
        for (let b = 0; b < 2 * (E - P) - 1; b++) {
          let M = Math.floor(b / 2);
          b % 2 === 0 ? (d(C[P][M + 1]), d(C[P + 1][M]), d(C[P][M])) : (d(C[P][M + 1]), d(C[P + 1][M + 1]), d(C[P + 1][M]));
        }
    }
    function c(v) {
      let x = new T();
      for (let y = 0; y < r.length; y += 3)
        x.x = r[y + 0], x.y = r[y + 1], x.z = r[y + 2], x.normalize().multiplyScalar(v), r[y + 0] = x.x, r[y + 1] = x.y, r[y + 2] = x.z;
    }
    function h() {
      let v = new T();
      for (let x = 0; x < r.length; x += 3) {
        v.x = r[x + 0], v.y = r[x + 1], v.z = r[x + 2];
        let y = g(v) / 2 / Math.PI + 0.5, I = p(v) / Math.PI + 0.5;
        a.push(y, 1 - I);
      }
      m(), u();
    }
    function u() {
      for (let v = 0; v < a.length; v += 6) {
        let x = a[v + 0], y = a[v + 2], I = a[v + 4], E = Math.max(x, y, I), C = Math.min(x, y, I);
        E > 0.9 && C < 0.1 && (x < 0.2 && (a[v + 0] += 1), y < 0.2 && (a[v + 2] += 1), I < 0.2 && (a[v + 4] += 1));
      }
    }
    function d(v) {
      r.push(v.x, v.y, v.z);
    }
    function f(v, x) {
      let y = v * 3;
      x.x = t[y + 0], x.y = t[y + 1], x.z = t[y + 2];
    }
    function m() {
      let v = new T(), x = new T(), y = new T(), I = new T(), E = new Z(), C = new Z(), P = new Z();
      for (let b = 0, M = 0; b < r.length; b += 9, M += 6) {
        v.set(r[b + 0], r[b + 1], r[b + 2]), x.set(r[b + 3], r[b + 4], r[b + 5]), y.set(r[b + 6], r[b + 7], r[b + 8]), E.set(a[M + 0], a[M + 1]), C.set(a[M + 2], a[M + 3]), P.set(a[M + 4], a[M + 5]), I.copy(v).add(x).add(y).divideScalar(3);
        let L = g(I);
        _(E, M + 0, v, L), _(C, M + 2, x, L), _(P, M + 4, y, L);
      }
    }
    function _(v, x, y, I) {
      I < 0 && v.x === 1 && (a[x] = v.x - 1), y.x === 0 && y.z === 0 && (a[x] = I / 2 / Math.PI + 0.5);
    }
    function g(v) {
      return Math.atan2(v.z, -v.x);
    }
    function p(v) {
      return Math.atan2(-v.y, Math.sqrt(v.x * v.x + v.z * v.z));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s18(t.vertices, t.indices, t.radius, t.details);
  }
};
var ql = class s19 extends yi {
  constructor(t = 1, e = 0) {
    let n = (1 + Math.sqrt(5)) / 2, i = 1 / n, r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
    super(r, a, t, e), this.type = "DodecahedronGeometry", this.parameters = { radius: t, detail: e };
  }
  static fromJSON(t) {
    return new s19(t.radius, t.detail);
  }
};
var Or = new T();
var Br = new T();
var Io = new T();
var zr = new Vn();
var Yl = class extends Gt {
  constructor(t = null, e = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t, thresholdAngle: e }, t !== null) {
      let i = Math.pow(10, 4), r = Math.cos(gi * e), a = t.getIndex(), o = t.getAttribute("position"), l = a ? a.count : o.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < l; m += 3) {
        a ? (c[0] = a.getX(m), c[1] = a.getX(m + 1), c[2] = a.getX(m + 2)) : (c[0] = m, c[1] = m + 1, c[2] = m + 2);
        let { a: _, b: g, c: p } = zr;
        if (_.fromBufferAttribute(o, c[0]), g.fromBufferAttribute(o, c[1]), p.fromBufferAttribute(o, c[2]), zr.getNormal(Io), u[0] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, u[1] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let v = 0; v < 3; v++) {
            let x = (v + 1) % 3, y = u[v], I = u[x], E = zr[h[v]], C = zr[h[x]], P = `${y}_${I}`, b = `${I}_${y}`;
            b in d && d[b] ? (Io.dot(d[b].normal) <= r && (f.push(E.x, E.y, E.z), f.push(C.x, C.y, C.z)), d[b] = null) : P in d || (d[P] = { index0: c[v], index1: c[x], normal: Io.clone() });
          }
      }
      for (let m in d)
        if (d[m]) {
          let { index0: _, index1: g } = d[m];
          Or.fromBufferAttribute(o, _), Br.fromBufferAttribute(o, g), f.push(Or.x, Or.y, Or.z), f.push(Br.x, Br.y, Br.z);
        }
      this.setAttribute("position", new St(f, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
};
var Xn = class extends hs {
  constructor(t) {
    super(t), this.uuid = Xe(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    let e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      let i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      let i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      let i = t.holes[e];
      this.holes.push(new hs().fromJSON(i));
    }
    return this;
  }
};
var tv = { triangulate: function(s32, t, e = 2) {
  let n = t && t.length, i = n ? t[0] * e : s32.length, r = mf(s32, 0, i, e, true), a = [];
  if (!r || r.next === r.prev)
    return a;
  let o, l, c, h, u, d, f;
  if (n && (r = rv(s32, t, r, e)), s32.length > 80 * e) {
    o = c = s32[0], l = h = s32[1];
    for (let m = e; m < i; m += e)
      u = s32[m], d = s32[m + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
    f = Math.max(c - o, h - l), f = f !== 0 ? 32767 / f : 0;
  }
  return Js(r, a, e, o, l, f, 0), a;
} };
function mf(s32, t, e, n, i) {
  let r, a;
  if (i === gv(s32, t, e, n) > 0)
    for (r = t; r < e; r += n)
      a = Fu(r, s32[r], s32[r + 1], a);
  else
    for (r = e - n; r >= t; r -= n)
      a = Fu(r, s32[r], s32[r + 1], a);
  return a && Wa(a, a.next) && (Ks(a), a = a.next), a;
}
function Mi(s32, t) {
  if (!s32)
    return s32;
  t || (t = s32);
  let e = s32, n;
  do
    if (n = false, !e.steiner && (Wa(e, e.next) || ae(e.prev, e, e.next) === 0)) {
      if (Ks(e), e = t = e.prev, e === e.next)
        break;
      n = true;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function Js(s32, t, e, n, i, r, a) {
  if (!s32)
    return;
  !a && r && hv(s32, n, i, r);
  let o = s32, l, c;
  for (; s32.prev !== s32.next; ) {
    if (l = s32.prev, c = s32.next, r ? nv(s32, n, i, r) : ev(s32)) {
      t.push(l.i / e | 0), t.push(s32.i / e | 0), t.push(c.i / e | 0), Ks(s32), s32 = c.next, o = c.next;
      continue;
    }
    if (s32 = c, s32 === o) {
      a ? a === 1 ? (s32 = iv(Mi(s32), t, e), Js(s32, t, e, n, i, r, 2)) : a === 2 && sv(s32, t, e, n, i, r) : Js(Mi(s32), t, e, n, i, r, 1);
      break;
    }
  }
}
function ev(s32) {
  let t = s32.prev, e = s32, n = s32.next;
  if (ae(t, e, n) >= 0)
    return false;
  let i = t.x, r = e.x, a = n.x, o = t.y, l = e.y, c = n.y, h = i < r ? i < a ? i : a : r < a ? r : a, u = o < l ? o < c ? o : c : l < c ? l : c, d = i > r ? i > a ? i : a : r > a ? r : a, f = o > l ? o > c ? o : c : l > c ? l : c, m = n.next;
  for (; m !== t; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && $i(i, o, r, l, a, c, m.x, m.y) && ae(m.prev, m, m.next) >= 0)
      return false;
    m = m.next;
  }
  return true;
}
function nv(s32, t, e, n) {
  let i = s32.prev, r = s32, a = s32.next;
  if (ae(i, r, a) >= 0)
    return false;
  let o = i.x, l = r.x, c = a.x, h = i.y, u = r.y, d = a.y, f = o < l ? o < c ? o : c : l < c ? l : c, m = h < u ? h < d ? h : d : u < d ? u : d, _ = o > l ? o > c ? o : c : l > c ? l : c, g = h > u ? h > d ? h : d : u > d ? u : d, p = Zl(f, m, t, e, n), v = Zl(_, g, t, e, n), x = s32.prevZ, y = s32.nextZ;
  for (; x && x.z >= p && y && y.z <= v; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== a && $i(o, h, l, u, c, d, x.x, x.y) && ae(x.prev, x, x.next) >= 0 || (x = x.prevZ, y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== i && y !== a && $i(o, h, l, u, c, d, y.x, y.y) && ae(y.prev, y, y.next) >= 0))
      return false;
    y = y.nextZ;
  }
  for (; x && x.z >= p; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== a && $i(o, h, l, u, c, d, x.x, x.y) && ae(x.prev, x, x.next) >= 0)
      return false;
    x = x.prevZ;
  }
  for (; y && y.z <= v; ) {
    if (y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== i && y !== a && $i(o, h, l, u, c, d, y.x, y.y) && ae(y.prev, y, y.next) >= 0)
      return false;
    y = y.nextZ;
  }
  return true;
}
function iv(s32, t, e) {
  let n = s32;
  do {
    let i = n.prev, r = n.next.next;
    !Wa(i, r) && gf(i, n, n.next, r) && $s(i, r) && $s(r, i) && (t.push(i.i / e | 0), t.push(n.i / e | 0), t.push(r.i / e | 0), Ks(n), Ks(n.next), n = s32 = r), n = n.next;
  } while (n !== s32);
  return Mi(n);
}
function sv(s32, t, e, n, i, r) {
  let a = s32;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && fv(a, o)) {
        let l = _f(a, o);
        a = Mi(a, a.next), l = Mi(l, l.next), Js(a, t, e, n, i, r, 0), Js(l, t, e, n, i, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== s32);
}
function rv(s32, t, e, n) {
  let i = [], r, a, o, l, c;
  for (r = 0, a = t.length; r < a; r++)
    o = t[r] * n, l = r < a - 1 ? t[r + 1] * n : s32.length, c = mf(s32, o, l, n, false), c === c.next && (c.steiner = true), i.push(dv(c));
  for (i.sort(av), r = 0; r < i.length; r++)
    e = ov(i[r], e);
  return e;
}
function av(s32, t) {
  return s32.x - t.x;
}
function ov(s32, t) {
  let e = lv(s32, t);
  if (!e)
    return t;
  let n = _f(e, s32);
  return Mi(n, n.next), Mi(e, e.next);
}
function lv(s32, t) {
  let e = t, n = -1 / 0, i, r = s32.x, a = s32.y;
  do {
    if (a <= e.y && a >= e.next.y && e.next.y !== e.y) {
      let d = e.x + (a - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= r && d > n && (n = d, i = e.x < e.next.x ? e : e.next, d === r))
        return i;
    }
    e = e.next;
  } while (e !== t);
  if (!i)
    return null;
  let o = i, l = i.x, c = i.y, h = 1 / 0, u;
  e = i;
  do
    r >= e.x && e.x >= l && r !== e.x && $i(a < c ? r : n, a, l, c, a < c ? n : r, a, e.x, e.y) && (u = Math.abs(a - e.y) / (r - e.x), $s(e, s32) && (u < h || u === h && (e.x > i.x || e.x === i.x && cv(i, e))) && (i = e, h = u)), e = e.next;
  while (e !== o);
  return i;
}
function cv(s32, t) {
  return ae(s32.prev, s32, t.prev) < 0 && ae(t.next, s32, s32.next) < 0;
}
function hv(s32, t, e, n) {
  let i = s32;
  do
    i.z === 0 && (i.z = Zl(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== s32);
  i.prevZ.nextZ = null, i.prevZ = null, uv(i);
}
function uv(s32) {
  let t, e, n, i, r, a, o, l, c = 1;
  do {
    for (e = s32, s32 = null, r = null, a = 0; e; ) {
      for (a++, n = e, o = 0, t = 0; t < c && (o++, n = n.nextZ, !!n); t++)
        ;
      for (l = c; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || e.z <= n.z) ? (i = e, e = e.nextZ, o--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : s32 = i, i.prevZ = r, r = i;
      e = n;
    }
    r.nextZ = null, c *= 2;
  } while (a > 1);
  return s32;
}
function Zl(s32, t, e, n, i) {
  return s32 = (s32 - e) * i | 0, t = (t - n) * i | 0, s32 = (s32 | s32 << 8) & 16711935, s32 = (s32 | s32 << 4) & 252645135, s32 = (s32 | s32 << 2) & 858993459, s32 = (s32 | s32 << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s32 | t << 1;
}
function dv(s32) {
  let t = s32, e = s32;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== s32);
  return e;
}
function $i(s32, t, e, n, i, r, a, o) {
  return (i - a) * (t - o) >= (s32 - a) * (r - o) && (s32 - a) * (n - o) >= (e - a) * (t - o) && (e - a) * (r - o) >= (i - a) * (n - o);
}
function fv(s32, t) {
  return s32.next.i !== t.i && s32.prev.i !== t.i && !pv(s32, t) && ($s(s32, t) && $s(t, s32) && mv(s32, t) && (ae(s32.prev, s32, t.prev) || ae(s32, t.prev, t)) || Wa(s32, t) && ae(s32.prev, s32, s32.next) > 0 && ae(t.prev, t, t.next) > 0);
}
function ae(s32, t, e) {
  return (t.y - s32.y) * (e.x - t.x) - (t.x - s32.x) * (e.y - t.y);
}
function Wa(s32, t) {
  return s32.x === t.x && s32.y === t.y;
}
function gf(s32, t, e, n) {
  let i = Vr(ae(s32, t, e)), r = Vr(ae(s32, t, n)), a = Vr(ae(e, n, s32)), o = Vr(ae(e, n, t));
  return !!(i !== r && a !== o || i === 0 && kr(s32, e, t) || r === 0 && kr(s32, n, t) || a === 0 && kr(e, s32, n) || o === 0 && kr(e, t, n));
}
function kr(s32, t, e) {
  return t.x <= Math.max(s32.x, e.x) && t.x >= Math.min(s32.x, e.x) && t.y <= Math.max(s32.y, e.y) && t.y >= Math.min(s32.y, e.y);
}
function Vr(s32) {
  return s32 > 0 ? 1 : s32 < 0 ? -1 : 0;
}
function pv(s32, t) {
  let e = s32;
  do {
    if (e.i !== s32.i && e.next.i !== s32.i && e.i !== t.i && e.next.i !== t.i && gf(e, e.next, s32, t))
      return true;
    e = e.next;
  } while (e !== s32);
  return false;
}
function $s(s32, t) {
  return ae(s32.prev, s32, s32.next) < 0 ? ae(s32, t, s32.next) >= 0 && ae(s32, s32.prev, t) >= 0 : ae(s32, t, s32.prev) < 0 || ae(s32, s32.next, t) < 0;
}
function mv(s32, t) {
  let e = s32, n = false, i = (s32.x + t.x) / 2, r = (s32.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && i < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== s32);
  return n;
}
function _f(s32, t) {
  let e = new Jl(s32.i, s32.x, s32.y), n = new Jl(t.i, t.x, t.y), i = s32.next, r = t.prev;
  return s32.next = t, t.prev = s32, e.next = i, i.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n;
}
function Fu(s32, t, e, n) {
  let i = new Jl(s32, t, e);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Ks(s32) {
  s32.next.prev = s32.prev, s32.prev.next = s32.next, s32.prevZ && (s32.prevZ.nextZ = s32.nextZ), s32.nextZ && (s32.nextZ.prevZ = s32.prevZ);
}
function Jl(s32, t, e) {
  this.i = s32, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
function gv(s32, t, e, n) {
  let i = 0;
  for (let r = t, a = e - n; r < e; r += n)
    i += (s32[a] - s32[r]) * (s32[r + 1] + s32[a + 1]), a = r;
  return i;
}
var En = class s20 {
  static area(t) {
    let e = t.length, n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++)
      n += t[i].x * t[r].y - t[r].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return s20.area(t) < 0;
  }
  static triangulateShape(t, e) {
    let n = [], i = [], r = [];
    Ou(t), Bu(n, t);
    let a = t.length;
    e.forEach(Ou);
    for (let l = 0; l < e.length; l++)
      i.push(a), a += e[l].length, Bu(n, e[l]);
    let o = tv.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3)
      r.push(o.slice(l, l + 3));
    return r;
  }
};
function Ou(s32) {
  let t = s32.length;
  t > 2 && s32[t - 1].equals(s32[0]) && s32.pop();
}
function Bu(s32, t) {
  for (let e = 0; e < t.length; e++)
    s32.push(t[e].x), s32.push(t[e].y);
}
var $l = class s21 extends Gt {
  constructor(t = new Xn([new Z(0.5, 0.5), new Z(-0.5, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
    let n = this, i = [], r = [];
    for (let o = 0, l = t.length; o < l; o++) {
      let c = t[o];
      a(c);
    }
    this.setAttribute("position", new St(i, 3)), this.setAttribute("uv", new St(r, 2)), this.computeVertexNormals();
    function a(o) {
      let l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1, d = e.bevelEnabled !== void 0 ? e.bevelEnabled : true, f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, m = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, g = e.bevelSegments !== void 0 ? e.bevelSegments : 3, p = e.extrudePath, v = e.UVGenerator !== void 0 ? e.UVGenerator : _v, x, y = false, I, E, C, P;
      p && (x = p.getSpacedPoints(h), y = true, d = false, I = p.computeFrenetFrames(h, false), E = new T(), C = new T(), P = new T()), d || (g = 0, f = 0, m = 0, _ = 0);
      let b = o.extractPoints(c), M = b.shape, L = b.holes;
      if (!En.isClockWise(M)) {
        M = M.reverse();
        for (let A = 0, it = L.length; A < it; A++) {
          let tt = L[A];
          En.isClockWise(tt) && (L[A] = tt.reverse());
        }
      }
      let F = En.triangulateShape(M, L), V = M;
      for (let A = 0, it = L.length; A < it; A++) {
        let tt = L[A];
        M = M.concat(tt);
      }
      function q(A, it, tt) {
        return it || console.error("THREE.ExtrudeGeometry: vec does not exist"), A.clone().addScaledVector(it, tt);
      }
      let H = M.length, j = F.length;
      function G(A, it, tt) {
        let ht, X, Tt, ut = A.x - it.x, yt = A.y - it.y, R = tt.x - A.x, S = tt.y - A.y, B = ut * ut + yt * yt, Q = ut * S - yt * R;
        if (Math.abs(Q) > Number.EPSILON) {
          let K = Math.sqrt(B), $ = Math.sqrt(R * R + S * S), At = it.x - yt / K, ot = it.y + ut / K, xt = tt.x - S / $, Ot = tt.y + R / $, nt = ((xt - At) * S - (Ot - ot) * R) / (ut * S - yt * R);
          ht = At + ut * nt - A.x, X = ot + yt * nt - A.y;
          let mt = ht * ht + X * X;
          if (mt <= 2)
            return new Z(ht, X);
          Tt = Math.sqrt(mt / 2);
        } else {
          let K = false;
          ut > Number.EPSILON ? R > Number.EPSILON && (K = true) : ut < -Number.EPSILON ? R < -Number.EPSILON && (K = true) : Math.sign(yt) === Math.sign(S) && (K = true), K ? (ht = -yt, X = ut, Tt = Math.sqrt(B)) : (ht = ut, X = yt, Tt = Math.sqrt(B / 2));
        }
        return new Z(ht / Tt, X / Tt);
      }
      let dt = [];
      for (let A = 0, it = V.length, tt = it - 1, ht = A + 1; A < it; A++, tt++, ht++)
        tt === it && (tt = 0), ht === it && (ht = 0), dt[A] = G(V[A], V[tt], V[ht]);
      let gt = [], _t, Ht = dt.concat();
      for (let A = 0, it = L.length; A < it; A++) {
        let tt = L[A];
        _t = [];
        for (let ht = 0, X = tt.length, Tt = X - 1, ut = ht + 1; ht < X; ht++, Tt++, ut++)
          Tt === X && (Tt = 0), ut === X && (ut = 0), _t[ht] = G(tt[ht], tt[Tt], tt[ut]);
        gt.push(_t), Ht = Ht.concat(_t);
      }
      for (let A = 0; A < g; A++) {
        let it = A / g, tt = f * Math.cos(it * Math.PI / 2), ht = m * Math.sin(it * Math.PI / 2) + _;
        for (let X = 0, Tt = V.length; X < Tt; X++) {
          let ut = q(V[X], dt[X], ht);
          ct(ut.x, ut.y, -tt);
        }
        for (let X = 0, Tt = L.length; X < Tt; X++) {
          let ut = L[X];
          _t = gt[X];
          for (let yt = 0, R = ut.length; yt < R; yt++) {
            let S = q(ut[yt], _t[yt], ht);
            ct(S.x, S.y, -tt);
          }
        }
      }
      let Zt = m + _;
      for (let A = 0; A < H; A++) {
        let it = d ? q(M[A], Ht[A], Zt) : M[A];
        y ? (C.copy(I.normals[0]).multiplyScalar(it.x), E.copy(I.binormals[0]).multiplyScalar(it.y), P.copy(x[0]).add(C).add(E), ct(P.x, P.y, P.z)) : ct(it.x, it.y, 0);
      }
      for (let A = 1; A <= h; A++)
        for (let it = 0; it < H; it++) {
          let tt = d ? q(M[it], Ht[it], Zt) : M[it];
          y ? (C.copy(I.normals[A]).multiplyScalar(tt.x), E.copy(I.binormals[A]).multiplyScalar(tt.y), P.copy(x[A]).add(C).add(E), ct(P.x, P.y, P.z)) : ct(tt.x, tt.y, u / h * A);
        }
      for (let A = g - 1; A >= 0; A--) {
        let it = A / g, tt = f * Math.cos(it * Math.PI / 2), ht = m * Math.sin(it * Math.PI / 2) + _;
        for (let X = 0, Tt = V.length; X < Tt; X++) {
          let ut = q(V[X], dt[X], ht);
          ct(ut.x, ut.y, u + tt);
        }
        for (let X = 0, Tt = L.length; X < Tt; X++) {
          let ut = L[X];
          _t = gt[X];
          for (let yt = 0, R = ut.length; yt < R; yt++) {
            let S = q(ut[yt], _t[yt], ht);
            y ? ct(S.x, S.y + x[h - 1].y, x[h - 1].x + tt) : ct(S.x, S.y, u + tt);
          }
        }
      }
      W(), et();
      function W() {
        let A = i.length / 3;
        if (d) {
          let it = 0, tt = H * it;
          for (let ht = 0; ht < j; ht++) {
            let X = F[ht];
            Lt(X[2] + tt, X[1] + tt, X[0] + tt);
          }
          it = h + g * 2, tt = H * it;
          for (let ht = 0; ht < j; ht++) {
            let X = F[ht];
            Lt(X[0] + tt, X[1] + tt, X[2] + tt);
          }
        } else {
          for (let it = 0; it < j; it++) {
            let tt = F[it];
            Lt(tt[2], tt[1], tt[0]);
          }
          for (let it = 0; it < j; it++) {
            let tt = F[it];
            Lt(tt[0] + H * h, tt[1] + H * h, tt[2] + H * h);
          }
        }
        n.addGroup(A, i.length / 3 - A, 0);
      }
      function et() {
        let A = i.length / 3, it = 0;
        vt(V, it), it += V.length;
        for (let tt = 0, ht = L.length; tt < ht; tt++) {
          let X = L[tt];
          vt(X, it), it += X.length;
        }
        n.addGroup(A, i.length / 3 - A, 1);
      }
      function vt(A, it) {
        let tt = A.length;
        for (; --tt >= 0; ) {
          let ht = tt, X = tt - 1;
          X < 0 && (X = A.length - 1);
          for (let Tt = 0, ut = h + g * 2; Tt < ut; Tt++) {
            let yt = H * Tt, R = H * (Tt + 1), S = it + ht + yt, B = it + X + yt, Q = it + X + R, K = it + ht + R;
            kt(S, B, Q, K);
          }
        }
      }
      function ct(A, it, tt) {
        l.push(A), l.push(it), l.push(tt);
      }
      function Lt(A, it, tt) {
        Ut(A), Ut(it), Ut(tt);
        let ht = i.length / 3, X = v.generateTopUV(n, i, ht - 3, ht - 2, ht - 1);
        Yt(X[0]), Yt(X[1]), Yt(X[2]);
      }
      function kt(A, it, tt, ht) {
        Ut(A), Ut(it), Ut(ht), Ut(it), Ut(tt), Ut(ht);
        let X = i.length / 3, Tt = v.generateSideWallUV(n, i, X - 6, X - 3, X - 2, X - 1);
        Yt(Tt[0]), Yt(Tt[1]), Yt(Tt[3]), Yt(Tt[1]), Yt(Tt[2]), Yt(Tt[3]);
      }
      function Ut(A) {
        i.push(l[A * 3 + 0]), i.push(l[A * 3 + 1]), i.push(l[A * 3 + 2]);
      }
      function Yt(A) {
        r.push(A.x), r.push(A.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    let t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return xv(e, n, t);
  }
  static fromJSON(t, e) {
    let n = [];
    for (let r = 0, a = t.shapes.length; r < a; r++) {
      let o = e[t.shapes[r]];
      n.push(o);
    }
    let i = t.options.extrudePath;
    return i !== void 0 && (t.options.extrudePath = new Pa[i.type]().fromJSON(i)), new s21(n, t.options);
  }
};
var _v = { generateTopUV: function(s32, t, e, n, i) {
  let r = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], l = t[n * 3 + 1], c = t[i * 3], h = t[i * 3 + 1];
  return [new Z(r, a), new Z(o, l), new Z(c, h)];
}, generateSideWallUV: function(s32, t, e, n, i, r) {
  let a = t[e * 3], o = t[e * 3 + 1], l = t[e * 3 + 2], c = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], d = t[i * 3], f = t[i * 3 + 1], m = t[i * 3 + 2], _ = t[r * 3], g = t[r * 3 + 1], p = t[r * 3 + 2];
  return Math.abs(o - h) < Math.abs(a - c) ? [new Z(a, 1 - l), new Z(c, 1 - u), new Z(d, 1 - m), new Z(_, 1 - p)] : [new Z(o, 1 - l), new Z(h, 1 - u), new Z(f, 1 - m), new Z(g, 1 - p)];
} };
function xv(s32, t, e) {
  if (e.shapes = [], Array.isArray(s32))
    for (let n = 0, i = s32.length; n < i; n++) {
      let r = s32[n];
      e.shapes.push(r.uuid);
    }
  else
    e.shapes.push(s32.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
var Kl = class s22 extends yi {
  constructor(t = 1, e = 0) {
    let n = (1 + Math.sqrt(5)) / 2, i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
    super(i, r, t, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e };
  }
  static fromJSON(t) {
    return new s22(t.radius, t.detail);
  }
};
var La = class s23 extends yi {
  constructor(t = 1, e = 0) {
    let n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    super(n, i, t, e), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e };
  }
  static fromJSON(t) {
    return new s23(t.radius, t.detail);
  }
};
var Ql = class s24 extends Gt {
  constructor(t = 0.5, e = 1, n = 32, i = 1, r = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: a }, n = Math.max(3, n), i = Math.max(1, i);
    let o = [], l = [], c = [], h = [], u = t, d = (e - t) / i, f = new T(), m = new Z();
    for (let _ = 0; _ <= i; _++) {
      for (let g = 0; g <= n; g++) {
        let p = r + g / n * a;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), l.push(f.x, f.y, f.z), c.push(0, 0, 1), m.x = (f.x / e + 1) / 2, m.y = (f.y / e + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let _ = 0; _ < i; _++) {
      let g = _ * (n + 1);
      for (let p = 0; p < n; p++) {
        let v = p + g, x = v, y = v + n + 1, I = v + n + 2, E = v + 1;
        o.push(x, y, E), o.push(y, I, E);
      }
    }
    this.setIndex(o), this.setAttribute("position", new St(l, 3)), this.setAttribute("normal", new St(c, 3)), this.setAttribute("uv", new St(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s24(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
};
var jl = class s25 extends Gt {
  constructor(t = new Xn([new Z(0, 0.5), new Z(-0.5, -0.5), new Z(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e };
    let n = [], i = [], r = [], a = [], o = 0, l = 0;
    if (Array.isArray(t) === false)
      c(t);
    else
      for (let h = 0; h < t.length; h++)
        c(t[h]), this.addGroup(o, l, h), o += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new St(i, 3)), this.setAttribute("normal", new St(r, 3)), this.setAttribute("uv", new St(a, 2));
    function c(h) {
      let u = i.length / 3, d = h.extractPoints(e), f = d.shape, m = d.holes;
      En.isClockWise(f) === false && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        let v = m[g];
        En.isClockWise(v) === true && (m[g] = v.reverse());
      }
      let _ = En.triangulateShape(f, m);
      for (let g = 0, p = m.length; g < p; g++) {
        let v = m[g];
        f = f.concat(v);
      }
      for (let g = 0, p = f.length; g < p; g++) {
        let v = f[g];
        i.push(v.x, v.y, 0), r.push(0, 0, 1), a.push(v.x, v.y);
      }
      for (let g = 0, p = _.length; g < p; g++) {
        let v = _[g], x = v[0] + u, y = v[1] + u, I = v[2] + u;
        n.push(x, y, I), l += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    let t = super.toJSON(), e = this.parameters.shapes;
    return vv(e, t);
  }
  static fromJSON(t, e) {
    let n = [];
    for (let i = 0, r = t.shapes.length; i < r; i++) {
      let a = e[t.shapes[i]];
      n.push(a);
    }
    return new s25(n, t.curveSegments);
  }
};
function vv(s32, t) {
  if (t.shapes = [], Array.isArray(s32))
    for (let e = 0, n = s32.length; e < n; e++) {
      let i = s32[e];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(s32.uuid);
  return t;
}
var Ua = class s26 extends Gt {
  constructor(t = 1, e = 32, n = 16, i = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: a, thetaLength: o }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    let l = Math.min(a + o, Math.PI), c = 0, h = [], u = new T(), d = new T(), f = [], m = [], _ = [], g = [];
    for (let p = 0; p <= n; p++) {
      let v = [], x = p / n, y = 0;
      p === 0 && a === 0 ? y = 0.5 / e : p === n && l === Math.PI && (y = -0.5 / e);
      for (let I = 0; I <= e; I++) {
        let E = I / e;
        u.x = -t * Math.cos(i + E * r) * Math.sin(a + x * o), u.y = t * Math.cos(a + x * o), u.z = t * Math.sin(i + E * r) * Math.sin(a + x * o), m.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), g.push(E + y, 1 - x), v.push(c++);
      }
      h.push(v);
    }
    for (let p = 0; p < n; p++)
      for (let v = 0; v < e; v++) {
        let x = h[p][v + 1], y = h[p][v], I = h[p + 1][v], E = h[p + 1][v + 1];
        (p !== 0 || a > 0) && f.push(x, y, E), (p !== n - 1 || l < Math.PI) && f.push(y, I, E);
      }
    this.setIndex(f), this.setAttribute("position", new St(m, 3)), this.setAttribute("normal", new St(_, 3)), this.setAttribute("uv", new St(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s26(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
};
var tc = class s27 extends yi {
  constructor(t = 1, e = 0) {
    let n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    super(n, i, t, e), this.type = "TetrahedronGeometry", this.parameters = { radius: t, detail: e };
  }
  static fromJSON(t) {
    return new s27(t.radius, t.detail);
  }
};
var ec = class s28 extends Gt {
  constructor(t = 1, e = 0.4, n = 12, i = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i);
    let a = [], o = [], l = [], c = [], h = new T(), u = new T(), d = new T();
    for (let f = 0; f <= n; f++)
      for (let m = 0; m <= i; m++) {
        let _ = m / i * r, g = f / n * Math.PI * 2;
        u.x = (t + e * Math.cos(g)) * Math.cos(_), u.y = (t + e * Math.cos(g)) * Math.sin(_), u.z = e * Math.sin(g), o.push(u.x, u.y, u.z), h.x = t * Math.cos(_), h.y = t * Math.sin(_), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(m / i), c.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let m = 1; m <= i; m++) {
        let _ = (i + 1) * f + m - 1, g = (i + 1) * (f - 1) + m - 1, p = (i + 1) * (f - 1) + m, v = (i + 1) * f + m;
        a.push(_, g, v), a.push(g, p, v);
      }
    this.setIndex(a), this.setAttribute("position", new St(o, 3)), this.setAttribute("normal", new St(l, 3)), this.setAttribute("uv", new St(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s28(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
};
var nc = class s29 extends Gt {
  constructor(t = 1, e = 0.4, n = 64, i = 8, r = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t, tube: e, tubularSegments: n, radialSegments: i, p: r, q: a }, n = Math.floor(n), i = Math.floor(i);
    let o = [], l = [], c = [], h = [], u = new T(), d = new T(), f = new T(), m = new T(), _ = new T(), g = new T(), p = new T();
    for (let x = 0; x <= n; ++x) {
      let y = x / n * r * Math.PI * 2;
      v(y, r, a, t, f), v(y + 0.01, r, a, t, m), g.subVectors(m, f), p.addVectors(m, f), _.crossVectors(g, p), p.crossVectors(_, g), _.normalize(), p.normalize();
      for (let I = 0; I <= i; ++I) {
        let E = I / i * Math.PI * 2, C = -e * Math.cos(E), P = e * Math.sin(E);
        u.x = f.x + (C * p.x + P * _.x), u.y = f.y + (C * p.y + P * _.y), u.z = f.z + (C * p.z + P * _.z), l.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), h.push(x / n), h.push(I / i);
      }
    }
    for (let x = 1; x <= n; x++)
      for (let y = 1; y <= i; y++) {
        let I = (i + 1) * (x - 1) + (y - 1), E = (i + 1) * x + (y - 1), C = (i + 1) * x + y, P = (i + 1) * (x - 1) + y;
        o.push(I, E, P), o.push(E, C, P);
      }
    this.setIndex(o), this.setAttribute("position", new St(l, 3)), this.setAttribute("normal", new St(c, 3)), this.setAttribute("uv", new St(h, 2));
    function v(x, y, I, E, C) {
      let P = Math.cos(x), b = Math.sin(x), M = I / y * x, L = Math.cos(M);
      C.x = E * (2 + L) * 0.5 * P, C.y = E * (2 + L) * b * 0.5, C.z = E * Math.sin(M) * 0.5;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new s29(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
  }
};
var ic = class s30 extends Gt {
  constructor(t = new Ca(new T(-1, -1, 0), new T(-1, 1, 0), new T(1, 1, 0)), e = 64, n = 1, i = 8, r = false) {
    super(), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: n, radialSegments: i, closed: r };
    let a = t.computeFrenetFrames(e, r);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    let o = new T(), l = new T(), c = new Z(), h = new T(), u = [], d = [], f = [], m = [];
    _(), this.setIndex(m), this.setAttribute("position", new St(u, 3)), this.setAttribute("normal", new St(d, 3)), this.setAttribute("uv", new St(f, 2));
    function _() {
      for (let x = 0; x < e; x++)
        g(x);
      g(r === false ? e : 0), v(), p();
    }
    function g(x) {
      h = t.getPointAt(x / e, h);
      let y = a.normals[x], I = a.binormals[x];
      for (let E = 0; E <= i; E++) {
        let C = E / i * Math.PI * 2, P = Math.sin(C), b = -Math.cos(C);
        l.x = b * y.x + P * I.x, l.y = b * y.y + P * I.y, l.z = b * y.z + P * I.z, l.normalize(), d.push(l.x, l.y, l.z), o.x = h.x + n * l.x, o.y = h.y + n * l.y, o.z = h.z + n * l.z, u.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let x = 1; x <= e; x++)
        for (let y = 1; y <= i; y++) {
          let I = (i + 1) * (x - 1) + (y - 1), E = (i + 1) * x + (y - 1), C = (i + 1) * x + y, P = (i + 1) * (x - 1) + y;
          m.push(I, E, P), m.push(E, C, P);
        }
    }
    function v() {
      for (let x = 0; x <= e; x++)
        for (let y = 0; y <= i; y++)
          c.x = x / e, c.y = y / i, f.push(c.x, c.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    let t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  static fromJSON(t) {
    return new s30(new Pa[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
  }
};
var sc = class extends Gt {
  constructor(t = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t }, t !== null) {
      let e = [], n = /* @__PURE__ */ new Set(), i = new T(), r = new T();
      if (t.index !== null) {
        let a = t.attributes.position, o = t.index, l = t.groups;
        l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, h = l.length; c < h; ++c) {
          let u = l[c], d = u.start, f = u.count;
          for (let m = d, _ = d + f; m < _; m += 3)
            for (let g = 0; g < 3; g++) {
              let p = o.getX(m + g), v = o.getX(m + (g + 1) % 3);
              i.fromBufferAttribute(a, p), r.fromBufferAttribute(a, v), zu(i, r, n) === true && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
        }
      } else {
        let a = t.attributes.position;
        for (let o = 0, l = a.count / 3; o < l; o++)
          for (let c = 0; c < 3; c++) {
            let h = 3 * o + c, u = 3 * o + (c + 1) % 3;
            i.fromBufferAttribute(a, h), r.fromBufferAttribute(a, u), zu(i, r, n) === true && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new St(e, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
};
function zu(s32, t, e) {
  let n = `${s32.x},${s32.y},${s32.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${s32.x},${s32.y},${s32.z}`;
  return e.has(n) === true || e.has(i) === true ? false : (e.add(n), e.add(i), true);
}
var ku = Object.freeze({ __proto__: null, BoxGeometry: rs, CapsuleGeometry: Gl, CircleGeometry: Wl, ConeGeometry: Xl, CylinderGeometry: Zs, DodecahedronGeometry: ql, EdgesGeometry: Yl, ExtrudeGeometry: $l, IcosahedronGeometry: Kl, LatheGeometry: Ia, OctahedronGeometry: La, PlaneGeometry: Gs, PolyhedronGeometry: yi, RingGeometry: Ql, ShapeGeometry: jl, SphereGeometry: Ua, TetrahedronGeometry: tc, TorusGeometry: ec, TorusKnotGeometry: nc, TubeGeometry: ic, WireframeGeometry: sc });
function mi(s32, t, e) {
  return !s32 || !e && s32.constructor === t ? s32 : typeof t.BYTES_PER_ELEMENT == "number" ? new t(s32) : Array.prototype.slice.call(s32);
}
function xf(s32) {
  return ArrayBuffer.isView(s32) && !(s32 instanceof DataView);
}
var us = class {
  constructor(t, e, n, i) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    let e = this.parameterPositions, n = this._cachedIndex, i = e[n], r = e[n - 1];
    t: {
      e: {
        let a;
        n: {
          i:
            if (!(t < i)) {
              for (let o = n + 2; ; ) {
                if (i === void 0) {
                  if (t < r)
                    break i;
                  return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === o)
                  break;
                if (r = i, i = e[++n], t < i)
                  break e;
              }
              a = e.length;
              break n;
            }
          if (!(t >= r)) {
            let o = e[1];
            t < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l)
                break;
              if (i = r, r = e[--n - 1], t >= r)
                break e;
            }
            a = n, n = 0;
            break n;
          }
          break t;
        }
        for (; n < a; ) {
          let o = n + a >>> 1;
          t < e[o] ? a = o : n = o + 1;
        }
        if (i = e[n], r = e[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    let e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
    for (let a = 0; a !== i; ++a)
      e[a] = n[r + a];
    return e;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
};
var mc = class extends us {
  constructor(t, e, n, i) {
    super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: qi, endingEnd: qi };
  }
  intervalChanged_(t, e, n) {
    let i = this.parameterPositions, r = t - 2, a = t + 1, o = i[r], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Yi:
          r = t, o = 2 * e - n;
          break;
        case oa:
          r = i.length - 2, o = e + i[r] - i[r + 1];
          break;
        default:
          r = t, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case Yi:
          a = t, l = 2 * n - e;
          break;
        case oa:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = t - 1, l = e;
      }
    let c = (n - e) * 0.5, h = this.valueSize;
    this._weightPrev = c / (e - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(t, e, n, i) {
    let r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - e) / (i - e), _ = m * m, g = _ * m, p = -d * g + 2 * d * _ - d * m, v = (1 + d) * g + (-1.5 - 2 * d) * _ + (-0.5 + d) * m + 1, x = (-1 - f) * g + (1.5 + f) * _ + 0.5 * m, y = f * g - f * _;
    for (let I = 0; I !== o; ++I)
      r[I] = p * a[h + I] + v * a[c + I] + x * a[l + I] + y * a[u + I];
    return r;
  }
};
var Na = class extends us {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    let r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, h = (n - e) / (i - e), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
};
var gc = class extends us {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
};
var Qe = class {
  constructor(t, e, n, i) {
    if (t === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = mi(e, this.TimeBufferType), this.values = mi(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(t) {
    let e = t.constructor, n;
    if (e.toJSON !== this.toJSON)
      n = e.toJSON(t);
    else {
      n = { name: t.name, times: mi(t.times, Array), values: mi(t.values, Array) };
      let i = t.getInterpolation();
      i !== t.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = t.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new gc(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new Na(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new mc(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case aa:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case hl:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case Ja:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      let n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return aa;
      case this.InterpolantFactoryMethodLinear:
        return hl;
      case this.InterpolantFactoryMethodSmooth:
        return Ja;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(t) {
    if (t !== 0) {
      let e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] += t;
    }
    return this;
  }
  scale(t) {
    if (t !== 1) {
      let e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] *= t;
    }
    return this;
  }
  trim(t, e) {
    let n = this.times, i = n.length, r = 0, a = i - 1;
    for (; r !== i && n[r] < t; )
      ++r;
    for (; a !== -1 && n[a] > e; )
      --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      let o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  validate() {
    let t = true, e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = false);
    let n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = false);
    let a = null;
    for (let o = 0; o !== r; o++) {
      let l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), t = false;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), t = false;
        break;
      }
      a = l;
    }
    if (i !== void 0 && xf(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        let c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), t = false;
          break;
        }
      }
    return t;
  }
  optimize() {
    let t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Ja, r = t.length - 1, a = 1;
    for (let o = 1; o < r; ++o) {
      let l = false, c = t[o], h = t[o + 1];
      if (c !== h && (o !== 1 || c !== t[0]))
        if (i)
          l = true;
        else {
          let u = o * n, d = u - n, f = u + n;
          for (let m = 0; m !== n; ++m) {
            let _ = e[u + m];
            if (_ !== e[d + m] || _ !== e[f + m]) {
              l = true;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          t[a] = t[o];
          let u = o * n, d = a * n;
          for (let f = 0; f !== n; ++f)
            e[d + f] = e[u + f];
        }
        ++a;
      }
    }
    if (r > 0) {
      t[a] = t[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c)
        e[l + c] = e[o + c];
      ++a;
    }
    return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n)) : (this.times = t, this.values = e), this;
  }
  clone() {
    let t = this.times.slice(), e = this.values.slice(), n = this.constructor, i = new n(this.name, t, e);
    return i.createInterpolant = this.createInterpolant, i;
  }
};
Qe.prototype.TimeBufferType = Float32Array;
Qe.prototype.ValueBufferType = Float32Array;
Qe.prototype.DefaultInterpolation = hl;
var Jn = class extends Qe {
  constructor(t, e, n) {
    super(t, e, n);
  }
};
Jn.prototype.ValueTypeName = "bool";
Jn.prototype.ValueBufferType = Array;
Jn.prototype.DefaultInterpolation = aa;
Jn.prototype.InterpolantFactoryMethodLinear = void 0;
Jn.prototype.InterpolantFactoryMethodSmooth = void 0;
var Fa = class extends Qe {
};
Fa.prototype.ValueTypeName = "color";
var ds = class extends Qe {
};
ds.prototype.ValueTypeName = "number";
var _c = class extends us {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    let r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - e) / (i - e), c = t * o;
    for (let h = c + o; c !== h; c += 4)
      Ne.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
};
var fs = class extends Qe {
  InterpolantFactoryMethodLinear(t) {
    return new _c(this.times, this.values, this.getValueSize(), t);
  }
};
fs.prototype.ValueTypeName = "quaternion";
fs.prototype.InterpolantFactoryMethodSmooth = void 0;
var $n = class extends Qe {
  constructor(t, e, n) {
    super(t, e, n);
  }
};
$n.prototype.ValueTypeName = "string";
$n.prototype.ValueBufferType = Array;
$n.prototype.DefaultInterpolation = aa;
$n.prototype.InterpolantFactoryMethodLinear = void 0;
$n.prototype.InterpolantFactoryMethodSmooth = void 0;
var ps = class extends Qe {
};
ps.prototype.ValueTypeName = "vector";
var Hn = { enabled: false, files: {}, add: function(s32, t) {
  this.enabled !== false && (this.files[s32] = t);
}, get: function(s32) {
  if (this.enabled !== false)
    return this.files[s32];
}, remove: function(s32) {
  delete this.files[s32];
}, clear: function() {
  this.files = {};
} };
var Oa = class {
  constructor(t, e, n) {
    let i = this, r = false, a = 0, o = 0, l, c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      o++, r === false && i.onStart !== void 0 && i.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      let u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        let f = c[u], m = c[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return m;
      }
      return null;
    };
  }
};
var wv = new Oa();
var Fe = class {
  constructor(t) {
    this.manager = t !== void 0 ? t : wv, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    let n = this;
    return new Promise(function(i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
};
Fe.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var gs = class extends Fe {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    let r = this, a = Hn.get(t);
    if (a !== void 0)
      return r.manager.itemStart(t), setTimeout(function() {
        e && e(a), r.manager.itemEnd(t);
      }, 0), a;
    let o = zs("img");
    function l() {
      h(), Hn.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o;
  }
};
var Xu = class extends Fe {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    let r = new _e(), a = new gs(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      r.image = o, r.needsUpdate = true, e !== void 0 && e(r);
    }, n, i), r;
  }
};
var Lo = new Rt();
var qu = new T();
var Yu = new T();
var Zu = new Rt();
var Ps = new T();
var Uo = new T();
var td = new Rt();
var ed = new Rt();
var ai = new Rt();
var oi = new T();
var sd = new Ne();
var Av = new T();
var li = new T();
var ci = new T();
var ad = new Ne();
var Tv = new T();
var hi = new T();
var Qc = "\\[\\]\\.:\\/";
var Cv = new RegExp("[" + Qc + "]", "g");
var jc = "[^" + Qc + "]";
var Rv = "[^" + Qc.replace("\\.", "") + "]";
var Pv = /((?:WC+[\/:])*)/.source.replace("WC", jc);
var Iv = /(WCOD+)?/.source.replace("WCOD", Rv);
var Lv = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", jc);
var Uv = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", jc);
var Dv = new RegExp("^" + Pv + Iv + Lv + Uv + "$");
var Nv = ["material", "materials", "bones", "map"];
var Fc = class {
  constructor(t, e, n) {
    let i = n || ie.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, i);
  }
  getValue(t, e) {
    this.bind();
    let n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(t, e);
  }
  setValue(t, e) {
    let n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    let t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    let t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
};
var ie = class s31 {
  constructor(t, e, n) {
    this.path = e, this.parsedPath = n || s31.parseTrackName(e), this.node = s31.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup ? new s31.Composite(t, e, n) : new s31(t, e, n);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Cv, "");
  }
  static parseTrackName(t) {
    let e = Dv.exec(t);
    if (e === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    let n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      let r = n.nodeName.substring(i + 1);
      Nv.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
      return t;
    if (t.skeleton) {
      let n = t.skeleton.getBoneByName(e);
      if (n !== void 0)
        return n;
    }
    if (t.children) {
      let n = function(r) {
        for (let a = 0; a < r.length; a++) {
          let o = r[a];
          if (o.name === e || o.uuid === e)
            return o;
          let l = n(o.children);
          if (l)
            return l;
        }
        return null;
      }, i = n(t.children);
      if (i)
        return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(t, e) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = t[e++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  bind() {
    let t = this.node, e = this.parsedPath, n = e.objectName, i = e.propertyName, r = e.propertyIndex;
    if (t || (t = s31.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++)
            if (t[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    let a = t[i];
    if (a === void 0) {
      let c = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[r] !== void 0 && (r = t.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else
      a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
ie.Composite = Fc;
ie.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ie.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ie.prototype.GetterByBindingType = [ie.prototype._getValue_direct, ie.prototype._getValue_array, ie.prototype._getValue_arrayElement, ie.prototype._getValue_toArray];
ie.prototype.SetterByBindingTypeAndVersioning = [[ie.prototype._setValue_direct, ie.prototype._setValue_direct_setNeedsUpdate, ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ie.prototype._setValue_array, ie.prototype._setValue_array_setNeedsUpdate, ie.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ie.prototype._setValue_arrayElement, ie.prototype._setValue_arrayElement_setNeedsUpdate, ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ie.prototype._setValue_fromArray, ie.prototype._setValue_fromArray_setNeedsUpdate, ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
var Fv = new Float32Array(1);
var md = new Rt();
var Md = new Z();
var bd = new T();
var Gr = new T();
var Ed = new T();
var Bn = new T();
var Wr = new Rt();
var Do = new Rt();
var Bv = new T();
var Rd = new ft();
var Pd = new ft();
var Dd = new T();
var Xr = new T();
var Nd = new T();
var qr = new T();
var ce = new Hs();
var Yr = new Pe();
var Vd = new T();
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "167" } }));
typeof __dai_window < "u" && (__dai_window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : __dai_window.__THREE__ = "167");

// http-url:https://framerusercontent.com/modules/lMsU9IzbYI1ijDmuvQHI/oFfqa12ucprJLugS1aNp/LiveClouds.js
var DEFAULT_CLOUD_IMAGE = "https://mrdoob.com/lab/javascript/webgl/clouds/cloud10.png";
var VERTEX_SHADER = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
var FRAGMENT_SHADER = `
    uniform sampler2D map;
    uniform vec3 fogColor;
    uniform float fogNear;
    uniform float fogFar;
    uniform float fadePower;
    uniform vec3 tint;
    uniform float opacity;
    varying vec2 vUv;

    void main() {
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(fogNear, fogFar, depth);

        vec4 tex = texture2D(map, vUv);
        if (tex.a < 0.01) discard;
        vec4 color = vec4(tex.rgb * tint, tex.a * opacity);
        // Fade out sprites that are right in front of the camera
        color.a *= pow(gl_FragCoord.z, fadePower);

        gl_FragColor = mix(color, vec4(fogColor, color.a), fogFactor);
    }
`;
var BACKGROUND_DEFAULTS = { type: "gradient", color: "#326696", colorTop: "#1E4877", colorBottom: "#4584B4", angle: 180 };
var CLOUD_DEFAULTS = { count: 8e3, size: 64, minScale: 0.5, maxScale: 2, spreadX: 1e3, placement: "below", offsetY: -15, spreadY: 200, depth: 8e3, randomRotation: true, seed: 1 };
var PARALLAX_DEFAULTS = { enabled: true, strengthX: 0.25, strengthY: 0.15, ease: 0.01 };
var CAMERA_DEFAULTS = { fov: 30, near: 1, far: 3e3 };
var ADVANCED_DEFAULTS = { maxPixelRatio: 1.5, maxFps: 60, antialias: false, powerPreference: "default", pauseOffscreen: true, animateOnCanvas: false, respectReducedMotion: true };
var MOBILE_DEFAULTS = { enabled: true, maxWidth: 600, count: 2500, maxPixelRatio: 1, maxFps: 30, parallax: false, powerPreference: "low-power" };
var INTRO_DEFAULTS = { enabled: true, from: "bottom", distance: 1.5, duration: 2.5, delay: 0, easing: "easeOutCubic", fade: true, trigger: "load", replay: false };
var EASINGS = { easeOutCubic: (t) => 1 - Math.pow(1 - t, 3), easeOutQuint: (t) => 1 - Math.pow(1 - t, 5), easeOutExpo: (t) => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t), easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 };
function withDefaults(defaults, value) {
  const result = { ...defaults };
  if (!value)
    return result;
  for (const key in value) {
    if (value[key] !== void 0)
      result[key] = value[key];
  }
  return result;
}
var clamp = (v, min, max) => Math.max(min, Math.min(max, v));
var useIsoLayoutEffect = typeof __dai_window !== "undefined" ? useLayoutEffect : useEffect;
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = a + 1831565813 >>> 0;
    let t = a;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function buildCloudGeometry(options) {
  const { count, size, minScale, maxScale, spreadX, placement, offsetY, spreadY, depth, randomRotation, seed } = options;
  const rand = mulberry32(seed);
  const half = size / 2;
  const corners = [[-half, -half, 0, 0], [half, -half, 1, 0], [half, half, 1, 1], [-half, half, 0, 1]];
  const positions = new Float32Array(count * 4 * 3);
  const uvs = new Float32Array(count * 4 * 2);
  const indices = count * 4 > 65535 ? new Uint32Array(count * 6) : new Uint16Array(count * 6);
  for (let i = 0; i < count; i++) {
    const x = (rand() - 0.5) * spreadX;
    const skew = rand() * rand();
    let y;
    if (placement === "below")
      y = offsetY - skew * spreadY;
    else if (placement === "above")
      y = offsetY + skew * spreadY;
    else
      y = offsetY + (rand() < 0.5 ? -1 : 1) * skew * spreadY;
    const z = i / count * depth;
    const rotation = randomRotation ? rand() * Math.PI : 0;
    const scale = minScale + rand() * rand() * (maxScale - minScale);
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    for (let c = 0; c < 4; c++) {
      const [cx2, cy, u, v] = corners[c];
      const sx2 = cx2 * scale;
      const sy = cy * scale;
      const p = (i * 4 + c) * 3;
      positions[p] = x + sx2 * cos - sy * sin;
      positions[p + 1] = y + sx2 * sin + sy * cos;
      positions[p + 2] = z;
      const t = (i * 4 + c) * 2;
      uvs[t] = u;
      uvs[t + 1] = v;
    }
    const base = i * 4;
    const idx = i * 6;
    indices[idx] = base;
    indices[idx + 1] = base + 1;
    indices[idx + 2] = base + 2;
    indices[idx + 3] = base;
    indices[idx + 4] = base + 2;
    indices[idx + 5] = base + 3;
  }
  const geometry = new Gt();
  geometry.setAttribute("position", new ne(positions, 3));
  geometry.setAttribute("uv", new ne(uvs, 2));
  geometry.setIndex(new ne(indices, 1));
  return geometry;
}
function buildProceduralTexture(puffs, softness, seed) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx)
    return null;
  const rand = mulberry32(seed + 1e3);
  const coreAlpha = 0.3 + (1 - softness) * 0.6;
  for (let i = 0; i < puffs; i++) {
    const cx2 = size / 2 + (rand() - 0.5) * size * 0.4;
    const cy = size / 2 + (rand() - 0.5) * size * 0.3;
    const radius = size * (0.14 + rand() * 0.16);
    const gradient = ctx.createRadialGradient(cx2, cy, 0, cx2, cy, radius);
    gradient.addColorStop(0, `rgba(255,255,255,${coreAlpha})`);
    gradient.addColorStop(0.5 + softness * 0.3, `rgba(255,255,255,${coreAlpha * 0.35})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  return new Du(canvas);
}
function configureTexture(texture) {
  texture.magFilter = ge;
  texture.minFilter = bn;
  texture.needsUpdate = true;
  return texture;
}
function toColor(target, value, scope) {
  let resolved = value;
  if (scope && value.includes("var(")) {
    const probe = document.createElement("span");
    probe.style.color = value;
    probe.style.display = "none";
    scope.appendChild(probe);
    resolved = getComputedStyle(probe).color;
    probe.remove();
  }
  try {
    target.setStyle(resolved, Kn);
  } catch (e) {
    target.set(16777215);
  }
  return target;
}
function LiveClouds(props) {
  const { textureSource = "image", image = { src: DEFAULT_CLOUD_IMAGE, alt: "" }, puffiness = 5, softness = 0.5, tint = "#FFFFFF", opacity = 1, blending = "normal", play = true, speed = 30, direction = "forward", fogColor = "#4584B4", fogNear = -100, fogFar = 3e3, depthFade = 20, style } = props;
  const background = withDefaults(BACKGROUND_DEFAULTS, props.background);
  const clouds = withDefaults(CLOUD_DEFAULTS, props.clouds);
  const parallax = withDefaults(PARALLAX_DEFAULTS, props.parallax);
  const cameraOptions = withDefaults(CAMERA_DEFAULTS, props.camera);
  const advanced = withDefaults(ADVANCED_DEFAULTS, props.advanced);
  const mobileOptions = withDefaults(MOBILE_DEFAULTS, props.mobile);
  const intro = withDefaults(INTRO_DEFAULTS, props.intro);
  const isStatic = useIsStaticRenderer();
  const shouldAnimate = !isStatic || advanced.animateOnCanvas;
  const imageSrc = image?.src || DEFAULT_CLOUD_IMAGE;
  const containerRef = useRef(null);
  const stateRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  useIsoLayoutEffect(() => {
    if (typeof __dai_window === "undefined")
      return;
    const container = containerRef.current;
    if (!container)
      return;
    const update = () => {
      const width = container.clientWidth || __dai_window.innerWidth;
      const next = mobileOptions.enabled && width <= mobileOptions.maxWidth;
      startTransition(() => setIsMobile((current) => current === next ? current : next));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, [mobileOptions.enabled, mobileOptions.maxWidth]);
  useEffect(() => {
    if (typeof __dai_window === "undefined" || !advanced.respectReducedMotion) {
      startTransition(() => setReduceMotion(false));
      return;
    }
    const query = __dai_window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => startTransition(() => setReduceMotion(query?.matches ?? false));
    update();
    query?.addEventListener?.("change", update);
    return () => query?.removeEventListener?.("change", update);
  }, [advanced.respectReducedMotion]);
  const mobileActive = mobileOptions.enabled && isMobile;
  const effectiveCloudCount = mobileActive ? Math.min(clouds.count, mobileOptions.count) : clouds.count;
  const effectiveMaxPixelRatio = mobileActive ? Math.min(advanced.maxPixelRatio, mobileOptions.maxPixelRatio) : advanced.maxPixelRatio;
  const effectiveMaxFps = mobileActive ? mobileOptions.maxFps : advanced.maxFps;
  const effectivePowerPreference = mobileActive ? mobileOptions.powerPreference : advanced.powerPreference;
  const effectiveParallax = parallax.enabled && (!mobileActive || mobileOptions.parallax);
  const paramsRef = useRef({});
  paramsRef.current = { play: play && shouldAnimate && !reduceMotion, speed, direction, depth: clouds.depth, parallax: effectiveParallax && shouldAnimate && !reduceMotion, strengthX: parallax.strengthX, strengthY: parallax.strengthY, ease: parallax.ease, opacity, intro: { ...intro, enabled: intro.enabled && shouldAnimate && !reduceMotion }, fov: cameraOptions.fov, far: Math.min(cameraOptions.far, clouds.depth), maxFps: Math.max(1, effectiveMaxFps) };
  const rendererKey = `${advanced.antialias}-${effectiveMaxPixelRatio}-${effectivePowerPreference}`;
  useEffect(() => {
    if (typeof __dai_window === "undefined")
      return;
    const container = containerRef.current;
    if (!container)
      return;
    let renderer;
    try {
      renderer = new hu({ antialias: advanced.antialias, alpha: true, depth: false, stencil: false, powerPreference: effectivePowerPreference });
    } catch (e) {
      return;
    }
    renderer.setPixelRatio(Math.min(__dai_window.devicePixelRatio || 1, effectiveMaxPixelRatio));
    renderer.setClearColor(0, 0);
    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);
    const scene = new Tl();
    const camera = new Me(30, 1, 1, 3e3);
    const placeholder = new an(new Uint8Array([0, 0, 0, 0]), 1, 1);
    placeholder.needsUpdate = true;
    const material = new $e({ uniforms: { map: { value: placeholder }, fogColor: { value: new ft(4555956) }, fogNear: { value: -100 }, fogFar: { value: 3e3 }, fadePower: { value: 20 }, tint: { value: new ft(16777215) }, opacity: { value: 1 } }, vertexShader: VERTEX_SHADER, fragmentShader: FRAGMENT_SHADER, depthWrite: false, depthTest: false, transparent: true });
    const geometry = new Gt();
    const meshA = new de(geometry, material);
    meshA.renderOrder = 2;
    meshA.frustumCulled = false;
    const meshB = new de(geometry, material);
    meshB.renderOrder = 1;
    meshB.frustumCulled = false;
    scene.add(meshB);
    scene.add(meshA);
    const state = { renderer, scene, camera, material, geometry, meshA, meshB, texture: placeholder, textureToken: 0, raf: 0, pendingRender: 0, running: false, visible: !advanced.pauseOffscreen || !shouldAnimate || !("IntersectionObserver" in __dai_window), pageVisible: !document.hidden, contextLost: false, lastTime: 0, position: 0, mouseX: 0, mouseY: 0, parallaxX: 0, parallaxY: 0, textureReady: false, intro: { active: false, played: false, pending: false, start: 0, x: 0, y: 0, alpha: 1 } };
    stateRef.current = state;
    let renderedWidth = 0;
    let renderedHeight = 0;
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height || width === renderedWidth && height === renderedHeight)
        return;
      renderedWidth = width;
      renderedHeight = height;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      requestRender(state);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    let intersectionObserver = null;
    const introEnabled = paramsRef.current.intro.enabled;
    const introOnView = introEnabled && intro.trigger === "inView";
    if ((advanced.pauseOffscreen || introOnView) && shouldAnimate && "IntersectionObserver" in __dai_window) {
      intersectionObserver = new IntersectionObserver((entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (advanced.pauseOffscreen)
          state.visible = visible;
        if (introOnView) {
          if (visible && (!state.intro.played || paramsRef.current.intro.replay))
            startIntro(state);
          else if (!visible && paramsRef.current.intro.replay)
            state.intro.played = false;
        }
        syncLoop(state);
        if (visible)
          requestRender(state);
      });
      intersectionObserver.observe(container);
    }
    if (introEnabled && intro.trigger === "load")
      startIntro(state);
    let pointerRect = null;
    const finePointer = __dai_window.matchMedia?.("(hover: hover) and (pointer: fine)").matches ?? false;
    const onPointerEnter = () => {
      pointerRect = container.getBoundingClientRect();
    };
    const onPointerMove = (event) => {
      const params = paramsRef.current;
      if (!params.parallax)
        return;
      const rect = pointerRect ?? container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      state.mouseX = (event.clientX - centerX) * params.strengthX;
      state.mouseY = (event.clientY - centerY) * params.strengthY;
      syncLoop(state);
    };
    const onPointerLeave = () => {
      pointerRect = null;
      state.mouseX = 0;
      state.mouseY = 0;
      syncLoop(state);
    };
    if (shouldAnimate && finePointer) {
      container.addEventListener("pointerenter", onPointerEnter, { passive: true });
      container.addEventListener("pointermove", onPointerMove, { passive: true });
      container.addEventListener("pointerleave", onPointerLeave, { passive: true });
    }
    const onVisibilityChange = () => {
      state.pageVisible = !document.hidden;
      if (!state.pageVisible)
        state.lastTime = 0;
      syncLoop(state);
      if (state.pageVisible)
        requestRender(state);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    const onContextLost = (event) => {
      event.preventDefault();
      state.contextLost = true;
      state.running = false;
      cancelAnimationFrame(state.raf);
      cancelAnimationFrame(state.pendingRender);
      state.pendingRender = 0;
    };
    const onContextRestored = () => {
      state.contextLost = false;
      state.texture.needsUpdate = true;
      syncLoop(state);
      requestRender(state);
    };
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);
    return () => {
      cancelAnimationFrame(state.raf);
      cancelAnimationFrame(state.pendingRender);
      state.running = false;
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      state.textureToken++;
      state.geometry.dispose();
      state.material.dispose();
      state.texture?.dispose();
      renderer.dispose();
      renderer.forceContextLoss?.();
      canvas.remove();
      stateRef.current = null;
    };
  }, [rendererKey, advanced.pauseOffscreen, shouldAnimate, intro.enabled, intro.trigger, reduceMotion]);
  useEffect(() => {
    const state = stateRef.current;
    if (!state)
      return;
    const geometry = buildCloudGeometry({ ...clouds, count: Math.max(1, Math.round(effectiveCloudCount)) });
    state.geometry.dispose();
    state.geometry = geometry;
    state.meshA.geometry = geometry;
    state.meshB.geometry = geometry;
    state.meshB.position.z = -clouds.depth;
    state.position = state.position % clouds.depth;
    requestRender(state);
  }, [rendererKey, advanced.pauseOffscreen, shouldAnimate, effectiveCloudCount, clouds.size, clouds.minScale, clouds.maxScale, clouds.spreadX, clouds.placement, clouds.offsetY, clouds.spreadY, clouds.depth, clouds.randomRotation, clouds.seed]);
  useEffect(() => {
    const state = stateRef.current;
    if (!state)
      return;
    const token = ++state.textureToken;
    const apply = (texture) => {
      if (!texture || stateRef.current !== state || state.textureToken !== token) {
        texture?.dispose();
        return;
      }
      configureTexture(texture);
      state.texture?.dispose();
      state.texture = texture;
      state.material.uniforms.map.value = texture;
      state.textureReady = true;
      if (state.intro.pending) {
        state.intro.pending = false;
        state.intro.active = true;
        state.intro.start = 0;
      }
      syncLoop(state);
      requestRender(state);
    };
    const useProcedural = () => apply(buildProceduralTexture(puffiness, softness, clouds.seed));
    if (textureSource === "procedural") {
      useProcedural();
      return;
    }
    const loader = new Xu();
    loader.setCrossOrigin("anonymous");
    loader.load(imageSrc, apply, void 0, useProcedural);
  }, [rendererKey, advanced.pauseOffscreen, shouldAnimate, textureSource, imageSrc, puffiness, softness, clouds.seed]);
  useEffect(() => {
    const state = stateRef.current;
    if (!state)
      return;
    const uniforms = state.material.uniforms;
    toColor(uniforms.fogColor.value, fogColor, containerRef.current);
    toColor(uniforms.tint.value, tint, containerRef.current);
    uniforms.fogNear.value = fogNear;
    uniforms.fogFar.value = fogFar;
    uniforms.fadePower.value = depthFade;
    uniforms.opacity.value = opacity * state.intro.alpha;
    const nextBlending = blending === "additive" ? lh : Ki;
    if (state.material.blending !== nextBlending) {
      state.material.blending = nextBlending;
      state.material.needsUpdate = true;
    }
    requestRender(state);
  }, [rendererKey, advanced.pauseOffscreen, shouldAnimate, fogColor, tint, fogNear, fogFar, depthFade, opacity, blending]);
  useEffect(() => {
    const state = stateRef.current;
    if (!state)
      return;
    state.camera.fov = cameraOptions.fov;
    state.camera.near = Math.max(0.1, cameraOptions.near);
    state.camera.far = Math.min(cameraOptions.far, clouds.depth);
    state.camera.updateProjectionMatrix();
    requestRender(state);
  }, [rendererKey, advanced.pauseOffscreen, shouldAnimate, cameraOptions.fov, cameraOptions.near, cameraOptions.far, clouds.depth]);
  useEffect(() => {
    const state = stateRef.current;
    if (!state)
      return;
    syncLoop(state);
    requestRender(state);
  }, [rendererKey, advanced.pauseOffscreen, shouldAnimate, play, effectiveParallax, effectiveMaxFps, reduceMotion]);
  function renderFrame(state, now) {
    const params = paramsRef.current;
    const dt = state.lastTime ? Math.min((now - state.lastTime) / 1e3, 0.1) : 0;
    state.lastTime = now;
    if (params.play) {
      state.position = (state.position + params.speed * dt) % params.depth;
      if (state.position < 0)
        state.position += params.depth;
    }
    const camera = state.camera;
    const targetX = params.parallax ? state.mouseX : 0;
    const targetY = params.parallax ? -state.mouseY : 0;
    const k = 1 - Math.pow(1 - params.ease, dt * 60);
    state.parallaxX += (targetX - state.parallaxX) * k;
    state.parallaxY += (targetY - state.parallaxY) * k;
    updateIntro(state, now);
    camera.position.x = state.parallaxX + state.intro.x;
    camera.position.y = state.parallaxY + state.intro.y;
    camera.position.z = params.direction === "backward" ? state.position : params.depth - state.position;
    state.material.uniforms.opacity.value = params.opacity * state.intro.alpha;
    state.renderer.render(state.scene, camera);
  }
  function startIntro(state) {
    const intro2 = state.intro;
    intro2.played = true;
    intro2.start = 0;
    intro2.alpha = paramsRef.current.intro.fade ? 0 : 1;
    setIntroOffset(state, 0);
    intro2.pending = !state.textureReady;
    intro2.active = state.textureReady;
    syncLoop(state);
    requestRender(state);
  }
  function setIntroOffset(state, progress) {
    const params = paramsRef.current;
    const { from, distance } = params.intro;
    const halfHeight = params.far * Math.tan(params.fov * Math.PI / 360);
    const halfWidth = halfHeight * (state.camera.aspect || 1);
    const remaining = 1 - progress;
    state.intro.x = from === "left" ? halfWidth * distance * remaining : from === "right" ? -halfWidth * distance * remaining : 0;
    state.intro.y = from === "bottom" ? halfHeight * distance * remaining : from === "top" ? -halfHeight * distance * remaining : 0;
  }
  function updateIntro(state, now) {
    const intro2 = state.intro;
    if (intro2.pending) {
      setIntroOffset(state, 0);
      intro2.alpha = paramsRef.current.intro.fade ? 0 : 1;
      return;
    }
    if (!intro2.active)
      return;
    const params = paramsRef.current.intro;
    if (!intro2.start)
      intro2.start = now;
    const elapsed = (now - intro2.start) / 1e3 - params.delay;
    const raw = params.duration > 0 ? clamp(elapsed / params.duration, 0, 1) : 1;
    const eased = EASINGS[params.easing]?.(raw) ?? raw;
    setIntroOffset(state, eased);
    intro2.alpha = params.fade ? eased : 1;
    if (raw >= 1) {
      intro2.active = false;
      intro2.x = 0;
      intro2.y = 0;
      intro2.alpha = 1;
      syncLoop(state);
    }
  }
  function parallaxIsSettling(state) {
    const params = paramsRef.current;
    const targetX = params.parallax ? state.mouseX : 0;
    const targetY = params.parallax ? -state.mouseY : 0;
    return Math.abs(targetX - state.parallaxX) > 0.05 || Math.abs(targetY - state.parallaxY) > 0.05;
  }
  function shouldRunLoop(state) {
    const params = paramsRef.current;
    return state.textureReady && state.visible && state.pageVisible && !state.contextLost && (params.play && Math.abs(params.speed) > 1e-3 || state.intro.active || parallaxIsSettling(state));
  }
  function syncLoop(state) {
    const wantsLoop = shouldRunLoop(state);
    if (wantsLoop && !state.running) {
      state.running = true;
      state.lastTime = 0;
      cancelAnimationFrame(state.pendingRender);
      state.pendingRender = 0;
      const tick = (now) => {
        if (!state.running || stateRef.current !== state)
          return;
        const interval = 1e3 / paramsRef.current.maxFps;
        if (state.lastTime && now - state.lastTime < interval) {
          state.raf = requestAnimationFrame(tick);
          return;
        }
        renderFrame(state, now);
        if (!shouldRunLoop(state)) {
          state.running = false;
          state.raf = 0;
          state.lastTime = 0;
          return;
        }
        state.raf = requestAnimationFrame(tick);
      };
      state.raf = requestAnimationFrame(tick);
    } else if (!wantsLoop && state.running) {
      state.running = false;
      cancelAnimationFrame(state.raf);
      state.raf = 0;
      state.lastTime = 0;
    }
  }
  function requestRender(state) {
    if (state.running || state.pendingRender || !state.textureReady || !state.visible || !state.pageVisible || state.contextLost)
      return;
    state.pendingRender = requestAnimationFrame((now) => {
      state.pendingRender = 0;
      if (stateRef.current !== state || !state.visible || !state.pageVisible || state.contextLost)
        return;
      renderFrame(state, now);
    });
  }
  let backgroundStyle;
  if (background.type === "solid")
    backgroundStyle = background.color;
  else if (background.type === "gradient")
    backgroundStyle = `linear-gradient(${background.angle}deg, ${background.colorTop}, ${background.colorBottom})`;
  else
    backgroundStyle = "transparent";
  return /* @__PURE__ */ _jsx("div", { ref: containerRef, role: "img", "aria-label": image?.alt || "Animated clouds", style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: backgroundStyle, ...style } });
}
LiveClouds.displayName = "Live Clouds";
addPropertyControls(LiveClouds, { textureSource: { type: ControlType.Enum, title: "Texture", options: ["image", "procedural"], optionTitles: ["Image", "Procedural"], defaultValue: "image", displaySegmentedControl: true }, image: { type: ControlType.ResponsiveImage, title: "Cloud Image", description: "PNG with transparency. Leave empty for the classic mrdoob cloud sprite.", hidden: (props) => props.textureSource === "procedural" }, puffiness: { type: ControlType.Number, title: "Puffiness", defaultValue: 5, min: 1, max: 12, step: 1, hidden: (props) => props.textureSource !== "procedural" }, softness: { type: ControlType.Number, title: "Softness", defaultValue: 0.5, min: 0, max: 1, step: 0.05, hidden: (props) => props.textureSource !== "procedural" }, tint: { type: ControlType.Color, title: "Tint", defaultValue: "#FFFFFF" }, opacity: { type: ControlType.Number, title: "Opacity", defaultValue: 1, min: 0, max: 1, step: 0.05 }, blending: { type: ControlType.Enum, title: "Blending", options: ["normal", "additive"], optionTitles: ["Normal", "Additive"], defaultValue: "normal", displaySegmentedControl: true }, play: { type: ControlType.Boolean, title: "Play", defaultValue: true }, speed: { type: ControlType.Number, title: "Speed", defaultValue: 30, min: 0, max: 300, step: 1, hidden: (props) => props.play === false }, direction: { type: ControlType.Enum, title: "Direction", options: ["forward", "backward"], optionTitles: ["Forward", "Backward"], defaultValue: "forward", displaySegmentedControl: true, hidden: (props) => props.play === false }, fogColor: { type: ControlType.Color, title: "Fog Color", description: "Match it to the background for a seamless horizon.", defaultValue: "#4584B4" }, fogNear: { type: ControlType.Number, title: "Fog Near", defaultValue: -100, min: -1e3, max: 3e3, step: 10 }, fogFar: { type: ControlType.Number, title: "Fog Far", defaultValue: 3e3, min: 100, max: 1e4, step: 50 }, depthFade: { type: ControlType.Number, title: "Depth Fade", description: "How quickly clouds dissolve right in front of the camera.", defaultValue: 20, min: 0, max: 60, step: 1 }, background: { type: ControlType.Object, title: "Background", icon: "color", defaultValue: BACKGROUND_DEFAULTS, controls: { type: { type: ControlType.Enum, title: "Type", options: ["gradient", "solid", "transparent"], optionTitles: ["Gradient", "Solid", "None"], defaultValue: "gradient" }, colorTop: { type: ControlType.Color, title: "Top", defaultValue: "#1E4877", hidden: (props) => props.type !== "gradient" }, colorBottom: { type: ControlType.Color, title: "Bottom", defaultValue: "#4584B4", hidden: (props) => props.type !== "gradient" }, angle: { type: ControlType.Number, title: "Angle", defaultValue: 180, min: 0, max: 360, step: 1, unit: "\xB0", hidden: (props) => props.type !== "gradient" }, color: { type: ControlType.Color, title: "Color", defaultValue: "#326696", hidden: (props) => props.type !== "solid" } } }, clouds: { type: ControlType.Object, title: "Clouds", icon: "object", defaultValue: CLOUD_DEFAULTS, controls: { count: { type: ControlType.Number, title: "Count", defaultValue: 8e3, min: 100, max: 2e4, step: 100 }, size: { type: ControlType.Number, title: "Size", defaultValue: 64, min: 8, max: 256, step: 1 }, minScale: { type: ControlType.Number, title: "Min Scale", defaultValue: 0.5, min: 0.1, max: 4, step: 0.1 }, maxScale: { type: ControlType.Number, title: "Max Scale", defaultValue: 2, min: 0.1, max: 6, step: 0.1 }, spreadX: { type: ControlType.Number, title: "Spread X", defaultValue: 1e3, min: 100, max: 4e3, step: 10 }, placement: { type: ControlType.Enum, title: "Placement", description: "Where the clouds sit relative to the camera.", options: ["below", "around", "above"], optionTitles: ["Below", "Around", "Above"], defaultValue: "below" }, offsetY: { type: ControlType.Number, title: "Offset Y", defaultValue: -15, min: -500, max: 500, step: 1 }, spreadY: { type: ControlType.Number, title: "Spread Y", defaultValue: 200, min: 0, max: 1e3, step: 5 }, depth: { type: ControlType.Number, title: "Depth", description: "Length of the looped segment. Keep above Camera \u203A Far.", defaultValue: 8e3, min: 1e3, max: 2e4, step: 100 }, randomRotation: { type: ControlType.Boolean, title: "Rotate", defaultValue: true }, seed: { type: ControlType.Number, title: "Seed", defaultValue: 1, min: 1, max: 9999, step: 1, displayStepper: true } } }, parallax: { type: ControlType.Object, title: "Parallax", icon: "interaction", defaultValue: PARALLAX_DEFAULTS, controls: { enabled: { type: ControlType.Boolean, title: "Mouse", defaultValue: true }, strengthX: { type: ControlType.Number, title: "Strength X", defaultValue: 0.25, min: 0, max: 1, step: 0.01, hidden: (props) => !props.enabled }, strengthY: { type: ControlType.Number, title: "Strength Y", defaultValue: 0.15, min: 0, max: 1, step: 0.01, hidden: (props) => !props.enabled }, ease: { type: ControlType.Number, title: "Ease", description: "Lower is smoother.", defaultValue: 0.01, min: 5e-3, max: 0.3, step: 5e-3, hidden: (props) => !props.enabled } } }, camera: { type: ControlType.Object, title: "Camera", icon: "object", defaultValue: CAMERA_DEFAULTS, controls: { fov: { type: ControlType.Number, title: "FOV", defaultValue: 30, min: 10, max: 120, step: 1, unit: "\xB0" }, near: { type: ControlType.Number, title: "Near", defaultValue: 1, min: 0.1, max: 100, step: 0.1 }, far: { type: ControlType.Number, title: "Far", defaultValue: 3e3, min: 500, max: 2e4, step: 100 } } }, intro: { type: ControlType.Object, title: "Intro", icon: "effect", defaultValue: INTRO_DEFAULTS, controls: { enabled: { type: ControlType.Boolean, title: "Animate In", defaultValue: true }, from: { type: ControlType.Enum, title: "From", description: "Which screen edge the clouds slide in from.", options: ["bottom", "top", "left", "right"], optionTitles: ["Bottom", "Top", "Left", "Right"], defaultValue: "bottom", hidden: (props) => !props.enabled }, distance: { type: ControlType.Number, title: "Distance", description: "How far beyond the edge the clouds start, in screen sizes.", defaultValue: 1.5, min: 0.2, max: 4, step: 0.1, hidden: (props) => !props.enabled }, duration: { type: ControlType.Number, title: "Duration", defaultValue: 2.5, min: 0.2, max: 10, step: 0.1, unit: "s", hidden: (props) => !props.enabled }, delay: { type: ControlType.Number, title: "Delay", defaultValue: 0, min: 0, max: 5, step: 0.1, unit: "s", hidden: (props) => !props.enabled }, easing: { type: ControlType.Enum, title: "Easing", options: ["easeOutCubic", "easeOutQuint", "easeOutExpo", "easeInOutCubic"], optionTitles: ["Ease Out", "Ease Out Strong", "Ease Out Expo", "Ease In Out"], defaultValue: "easeOutCubic", hidden: (props) => !props.enabled }, fade: { type: ControlType.Boolean, title: "Fade In", defaultValue: true, hidden: (props) => !props.enabled }, trigger: { type: ControlType.Enum, title: "Trigger", options: ["load", "inView"], optionTitles: ["On Load", "In View"], defaultValue: "load", hidden: (props) => !props.enabled }, replay: { type: ControlType.Boolean, title: "Replay", description: "Play again each time the clouds scroll back into view.", defaultValue: false, hidden: (props) => !props.enabled || props.trigger !== "inView" } } }, mobile: { type: ControlType.Object, title: "Mobile Quality", icon: "effect", defaultValue: MOBILE_DEFAULTS, controls: { enabled: { type: ControlType.Boolean, title: "Enabled", defaultValue: true }, maxWidth: { type: ControlType.Number, title: "Max Width", description: "Use this lighter profile at or below this component width.", defaultValue: 600, min: 320, max: 1200, step: 10, unit: "px", hidden: (props) => !props.enabled }, count: { type: ControlType.Number, title: "Cloud Count", description: "Caps the main Clouds count on small screens.", defaultValue: 2500, min: 500, max: 6e3, step: 100, hidden: (props) => !props.enabled }, maxPixelRatio: { type: ControlType.Enum, title: "Pixel Ratio", options: [0.75, 1, 1.5], optionTitles: ["0.75\xD7", "1\xD7", "1.5\xD7"], defaultValue: 1, hidden: (props) => !props.enabled }, maxFps: { type: ControlType.Enum, title: "Max FPS", options: [20, 24, 30, 45, 60], optionTitles: ["20", "24", "30", "45", "60"], defaultValue: 30, hidden: (props) => !props.enabled }, parallax: { type: ControlType.Boolean, title: "Parallax", description: "Keep off on touch devices to avoid an idle animation loop.", defaultValue: false, hidden: (props) => !props.enabled }, powerPreference: { type: ControlType.Enum, title: "GPU Power", options: ["low-power", "default", "high-performance"], optionTitles: ["Low Power", "Default", "High Performance"], defaultValue: "low-power", hidden: (props) => !props.enabled } } }, advanced: { type: ControlType.Object, title: "Advanced", icon: "effect", defaultValue: ADVANCED_DEFAULTS, controls: { maxPixelRatio: { type: ControlType.Enum, title: "Pixel Ratio", options: [1, 1.5, 2], optionTitles: ["1\xD7", "1.5\xD7", "2\xD7"], defaultValue: 1.5 }, maxFps: { type: ControlType.Enum, title: "Max FPS", options: [30, 45, 60], optionTitles: ["30", "45", "60"], defaultValue: 60 }, antialias: { type: ControlType.Boolean, title: "Antialias", defaultValue: false }, powerPreference: { type: ControlType.Enum, title: "GPU Power", options: ["default", "low-power", "high-performance"], optionTitles: ["Default", "Low Power", "High Performance"], defaultValue: "default" }, pauseOffscreen: { type: ControlType.Boolean, title: "Pause Offscreen", defaultValue: true }, animateOnCanvas: { type: ControlType.Boolean, title: "Animate on Canvas", defaultValue: false }, respectReducedMotion: { type: ControlType.Boolean, title: "Reduced Motion", description: "Stop autoplay, parallax, and intro for visitors who request less motion.", defaultValue: true } } } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "LiveClouds", "slots": [], "annotations": { "framerIntrinsicHeight": "800", "framerIntrinsicWidth": "1200", "framerSupportedLayoutHeight": "any-prefer-fixed", "framerContractVersion": "1", "framerSupportedLayoutWidth": "any-prefer-fixed" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  LiveClouds as default
};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
