try {
  var uh = Object.create;
  var pn = Object.defineProperty;
  var oh = Object.getOwnPropertyDescriptor;
  var ih = Object.getOwnPropertyNames;
  var sh = Object.getPrototypeOf,
    lh = Object.prototype.hasOwnProperty;
  var Rt = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var Ne = (e, t) => () => (e && (t = e((e = 0))), t);
  var C = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Bu = (e, t) => {
      for (var r in t) pn(e, r, { get: t[r], enumerable: !0 });
    },
    ch = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of ih(t))
          !lh.call(e, a) &&
            a !== r &&
            pn(e, a, {
              get: () => t[a],
              enumerable: !(n = oh(t, a)) || n.enumerable,
            });
      return e;
    };
  var ae = (e, t, r) => (
    (r = e != null ? uh(sh(e)) : {}),
    ch(
      t || !e || !e.__esModule
        ? pn(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var s = Ne(() => {});
  var l = Ne(() => {});
  var c = Ne(() => {});
  var d,
    kt,
    Be,
    wu,
    wT,
    TT,
    RT,
    Tu,
    kT,
    ue,
    et,
    hn,
    OT,
    IT,
    _T,
    PT,
    Ru,
    NT,
    ee,
    re,
    MT,
    Y,
    qT,
    ku,
    Me,
    jT,
    ie,
    H,
    LT,
    q = Ne(() => {
      s();
      l();
      c();
      (d = __REACT__),
        ({
          Children: kt,
          Component: Be,
          Fragment: wu,
          Profiler: wT,
          PureComponent: TT,
          StrictMode: RT,
          Suspense: Tu,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: kT,
          cloneElement: ue,
          createContext: et,
          createElement: hn,
          createFactory: OT,
          createRef: IT,
          forwardRef: _T,
          isValidElement: PT,
          lazy: Ru,
          memo: NT,
          useCallback: ee,
          useContext: re,
          useDebugValue: MT,
          useEffect: Y,
          useImperativeHandle: qT,
          useLayoutEffect: ku,
          useMemo: Me,
          useReducer: jT,
          useRef: ie,
          useState: H,
          version: LT,
        } = __REACT__);
    });
  var Nu = {};
  Bu(Nu, {
    A: () => fh,
    ActionBar: () => bn,
    AddonPanel: () => Dn,
    Badge: () => mh,
    Bar: () => hh,
    Blockquote: () => gh,
    Button: () => yh,
    Code: () => En,
    DL: () => bh,
    Div: () => Dh,
    DocumentWrapper: () => Eh,
    FlexBar: () => An,
    Form: () => de,
    H1: () => Ah,
    H2: () => Cn,
    H3: () => vn,
    H4: () => Ch,
    H5: () => vh,
    H6: () => xh,
    HR: () => Fh,
    IconButton: () => qe,
    IconButtonSkeleton: () => xn,
    Icons: () => fe,
    Img: () => Sh,
    LI: () => Bh,
    Link: () => ct,
    Loader: () => Fn,
    OL: () => wh,
    P: () => Th,
    Placeholder: () => Rh,
    Pre: () => kh,
    ResetWrapper: () => Ot,
    ScrollArea: () => Oh,
    Separator: () => Ih,
    Spaced: () => _h,
    Span: () => Ph,
    StorybookIcon: () => Nh,
    StorybookLogo: () => Mh,
    Symbols: () => qh,
    SyntaxHighlighter: () => It,
    TT: () => jh,
    TabBar: () => Lh,
    TabButton: () => zh,
    TabWrapper: () => $h,
    Table: () => Hh,
    Tabs: () => Uh,
    TabsState: () => Sn,
    TooltipLinkList: () => Gh,
    TooltipMessage: () => Wh,
    TooltipNote: () => Bn,
    UL: () => Vh,
    WithTooltip: () => lr,
    WithTooltipPure: () => wn,
    Zoom: () => Tn,
    codeCommon: () => Ge,
    components: () => Rn,
    createCopyToClipboardFunction: () => Kh,
    default: () => ph,
    getStoryHref: () => kn,
    interleaveSeparators: () => Yh,
    nameSpaceClassNames: () => On,
    resetComponents: () => Jh,
    withReset: () => We,
  });
  var ph,
    fh,
    bn,
    Dn,
    mh,
    hh,
    gh,
    yh,
    En,
    bh,
    Dh,
    Eh,
    An,
    de,
    Ah,
    Cn,
    vn,
    Ch,
    vh,
    xh,
    Fh,
    qe,
    xn,
    fe,
    Sh,
    Bh,
    ct,
    Fn,
    wh,
    Th,
    Rh,
    kh,
    Ot,
    Oh,
    Ih,
    _h,
    Ph,
    Nh,
    Mh,
    qh,
    It,
    jh,
    Lh,
    zh,
    $h,
    Hh,
    Uh,
    Sn,
    Gh,
    Wh,
    Bn,
    Vh,
    lr,
    wn,
    Tn,
    Ge,
    Rn,
    Kh,
    kn,
    Yh,
    On,
    Jh,
    We,
    J = Ne(() => {
      s();
      l();
      c();
      (ph = __STORYBOOKCOMPONENTS__),
        ({
          A: fh,
          ActionBar: bn,
          AddonPanel: Dn,
          Badge: mh,
          Bar: hh,
          Blockquote: gh,
          Button: yh,
          Code: En,
          DL: bh,
          Div: Dh,
          DocumentWrapper: Eh,
          FlexBar: An,
          Form: de,
          H1: Ah,
          H2: Cn,
          H3: vn,
          H4: Ch,
          H5: vh,
          H6: xh,
          HR: Fh,
          IconButton: qe,
          IconButtonSkeleton: xn,
          Icons: fe,
          Img: Sh,
          LI: Bh,
          Link: ct,
          Loader: Fn,
          OL: wh,
          P: Th,
          Placeholder: Rh,
          Pre: kh,
          ResetWrapper: Ot,
          ScrollArea: Oh,
          Separator: Ih,
          Spaced: _h,
          Span: Ph,
          StorybookIcon: Nh,
          StorybookLogo: Mh,
          Symbols: qh,
          SyntaxHighlighter: It,
          TT: jh,
          TabBar: Lh,
          TabButton: zh,
          TabWrapper: $h,
          Table: Hh,
          Tabs: Uh,
          TabsState: Sn,
          TooltipLinkList: Gh,
          TooltipMessage: Wh,
          TooltipNote: Bn,
          UL: Vh,
          WithTooltip: lr,
          WithTooltipPure: wn,
          Zoom: Tn,
          codeCommon: Ge,
          components: Rn,
          createCopyToClipboardFunction: Kh,
          getStoryHref: kn,
          interleaveSeparators: Yh,
          nameSpaceClassNames: On,
          resetComponents: Jh,
          withReset: We,
        } = __STORYBOOKCOMPONENTS__);
    });
  var Ee,
    _t,
    In = Ne(() => {
      s();
      l();
      c();
      (Ee = (e) => `control-${e.replace(/\s+/g, '-')}`),
        (_t = (e) => `set-${e.replace(/\s+/g, '-')}`);
    });
  var F4,
    S4,
    B4,
    w4,
    cr,
    T4,
    R4,
    Mu,
    k4,
    O4,
    I4,
    _4,
    P4,
    N4,
    qu,
    M4,
    q4,
    j4,
    L4,
    z4,
    k,
    dr,
    $4,
    ju,
    H4,
    Z = Ne(() => {
      s();
      l();
      c();
      (F4 = __STORYBOOKTHEMING__),
        ({
          CacheProvider: S4,
          ClassNames: B4,
          Global: w4,
          ThemeProvider: cr,
          background: T4,
          color: R4,
          convert: Mu,
          create: k4,
          createCache: O4,
          createGlobal: I4,
          createReset: _4,
          css: P4,
          darken: N4,
          ensure: qu,
          ignoreSsrWarning: M4,
          isPropValid: q4,
          jsx: j4,
          keyframes: L4,
          lighten: z4,
          styled: k,
          themes: dr,
          typography: $4,
          useTheme: ju,
          withTheme: H4,
        } = __STORYBOOKTHEMING__);
    });
  var Hn = C((t7, Uu) => {
    s();
    l();
    c();
    function vg(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    Uu.exports = vg;
  });
  var Wu = C((u7, Gu) => {
    s();
    l();
    c();
    function xg() {
      (this.__data__ = []), (this.size = 0);
    }
    Gu.exports = xg;
  });
  var gr = C((l7, Vu) => {
    s();
    l();
    c();
    function Fg(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Vu.exports = Fg;
  });
  var qt = C((f7, Ku) => {
    s();
    l();
    c();
    var Sg = gr();
    function Bg(e, t) {
      for (var r = e.length; r--; ) if (Sg(e[r][0], t)) return r;
      return -1;
    }
    Ku.exports = Bg;
  });
  var Ju = C((y7, Yu) => {
    s();
    l();
    c();
    var wg = qt(),
      Tg = Array.prototype,
      Rg = Tg.splice;
    function kg(e) {
      var t = this.__data__,
        r = wg(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Rg.call(t, r, 1), --this.size, !0;
    }
    Yu.exports = kg;
  });
  var Xu = C((A7, Zu) => {
    s();
    l();
    c();
    var Og = qt();
    function Ig(e) {
      var t = this.__data__,
        r = Og(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Zu.exports = Ig;
  });
  var eo = C((F7, Qu) => {
    s();
    l();
    c();
    var _g = qt();
    function Pg(e) {
      return _g(this.__data__, e) > -1;
    }
    Qu.exports = Pg;
  });
  var ro = C((T7, to) => {
    s();
    l();
    c();
    var Ng = qt();
    function Mg(e, t) {
      var r = this.__data__,
        n = Ng(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    to.exports = Mg;
  });
  var jt = C((I7, no) => {
    s();
    l();
    c();
    var qg = Wu(),
      jg = Ju(),
      Lg = Xu(),
      zg = eo(),
      $g = ro();
    function pt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    pt.prototype.clear = qg;
    pt.prototype.delete = jg;
    pt.prototype.get = Lg;
    pt.prototype.has = zg;
    pt.prototype.set = $g;
    no.exports = pt;
  });
  var uo = C((M7, ao) => {
    s();
    l();
    c();
    var Hg = jt();
    function Ug() {
      (this.__data__ = new Hg()), (this.size = 0);
    }
    ao.exports = Ug;
  });
  var io = C((z7, oo) => {
    s();
    l();
    c();
    function Gg(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    oo.exports = Gg;
  });
  var lo = C((G7, so) => {
    s();
    l();
    c();
    function Wg(e) {
      return this.__data__.get(e);
    }
    so.exports = Wg;
  });
  var po = C((Y7, co) => {
    s();
    l();
    c();
    function Vg(e) {
      return this.__data__.has(e);
    }
    co.exports = Vg;
  });
  var Un = C((Q7, fo) => {
    s();
    l();
    c();
    var Kg =
      typeof window == 'object' && window && window.Object === Object && window;
    fo.exports = Kg;
  });
  var ve = C((nR, mo) => {
    s();
    l();
    c();
    var Yg = Un(),
      Jg = typeof self == 'object' && self && self.Object === Object && self,
      Zg = Yg || Jg || Function('return this')();
    mo.exports = Zg;
  });
  var rt = C((iR, ho) => {
    s();
    l();
    c();
    var Xg = ve(),
      Qg = Xg.Symbol;
    ho.exports = Qg;
  });
  var Do = C((dR, bo) => {
    s();
    l();
    c();
    var go = rt(),
      yo = Object.prototype,
      e1 = yo.hasOwnProperty,
      t1 = yo.toString,
      Lt = go ? go.toStringTag : void 0;
    function r1(e) {
      var t = e1.call(e, Lt),
        r = e[Lt];
      try {
        e[Lt] = void 0;
        var n = !0;
      } catch {}
      var a = t1.call(e);
      return n && (t ? (e[Lt] = r) : delete e[Lt]), a;
    }
    bo.exports = r1;
  });
  var Ao = C((hR, Eo) => {
    s();
    l();
    c();
    var n1 = Object.prototype,
      a1 = n1.toString;
    function u1(e) {
      return a1.call(e);
    }
    Eo.exports = u1;
  });
  var nt = C((DR, xo) => {
    s();
    l();
    c();
    var Co = rt(),
      o1 = Do(),
      i1 = Ao(),
      s1 = '[object Null]',
      l1 = '[object Undefined]',
      vo = Co ? Co.toStringTag : void 0;
    function c1(e) {
      return e == null
        ? e === void 0
          ? l1
          : s1
        : vo && vo in Object(e)
        ? o1(e)
        : i1(e);
    }
    xo.exports = c1;
  });
  var we = C((vR, Fo) => {
    s();
    l();
    c();
    function d1(e) {
      var t = typeof e;
      return e != null && (t == 'object' || t == 'function');
    }
    Fo.exports = d1;
  });
  var Gn = C((BR, So) => {
    s();
    l();
    c();
    var p1 = nt(),
      f1 = we(),
      m1 = '[object AsyncFunction]',
      h1 = '[object Function]',
      g1 = '[object GeneratorFunction]',
      y1 = '[object Proxy]';
    function b1(e) {
      if (!f1(e)) return !1;
      var t = p1(e);
      return t == h1 || t == g1 || t == m1 || t == y1;
    }
    So.exports = b1;
  });
  var wo = C((kR, Bo) => {
    s();
    l();
    c();
    var D1 = ve(),
      E1 = D1['__core-js_shared__'];
    Bo.exports = E1;
  });
  var ko = C((PR, Ro) => {
    s();
    l();
    c();
    var Wn = wo(),
      To = (function () {
        var e = /[^.]+$/.exec((Wn && Wn.keys && Wn.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    function A1(e) {
      return !!To && To in e;
    }
    Ro.exports = A1;
  });
  var Vn = C((jR, Oo) => {
    s();
    l();
    c();
    var C1 = Function.prototype,
      v1 = C1.toString;
    function x1(e) {
      if (e != null) {
        try {
          return v1.call(e);
        } catch {}
        try {
          return e + '';
        } catch {}
      }
      return '';
    }
    Oo.exports = x1;
  });
  var _o = C((HR, Io) => {
    s();
    l();
    c();
    var F1 = Gn(),
      S1 = ko(),
      B1 = we(),
      w1 = Vn(),
      T1 = /[\\^$.*+?()[\]{}|]/g,
      R1 = /^\[object .+?Constructor\]$/,
      k1 = Function.prototype,
      O1 = Object.prototype,
      I1 = k1.toString,
      _1 = O1.hasOwnProperty,
      P1 = RegExp(
        '^' +
          I1.call(_1)
            .replace(T1, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    function N1(e) {
      if (!B1(e) || S1(e)) return !1;
      var t = F1(e) ? P1 : R1;
      return t.test(w1(e));
    }
    Io.exports = N1;
  });
  var No = C((VR, Po) => {
    s();
    l();
    c();
    function M1(e, t) {
      return e?.[t];
    }
    Po.exports = M1;
  });
  var Ye = C((ZR, Mo) => {
    s();
    l();
    c();
    var q1 = _o(),
      j1 = No();
    function L1(e, t) {
      var r = j1(e, t);
      return q1(r) ? r : void 0;
    }
    Mo.exports = L1;
  });
  var yr = C((tk, qo) => {
    s();
    l();
    c();
    var z1 = Ye(),
      $1 = ve(),
      H1 = z1($1, 'Map');
    qo.exports = H1;
  });
  var zt = C((uk, jo) => {
    s();
    l();
    c();
    var U1 = Ye(),
      G1 = U1(Object, 'create');
    jo.exports = G1;
  });
  var $o = C((lk, zo) => {
    s();
    l();
    c();
    var Lo = zt();
    function W1() {
      (this.__data__ = Lo ? Lo(null) : {}), (this.size = 0);
    }
    zo.exports = W1;
  });
  var Uo = C((fk, Ho) => {
    s();
    l();
    c();
    function V1(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ho.exports = V1;
  });
  var Wo = C((yk, Go) => {
    s();
    l();
    c();
    var K1 = zt(),
      Y1 = '__lodash_hash_undefined__',
      J1 = Object.prototype,
      Z1 = J1.hasOwnProperty;
    function X1(e) {
      var t = this.__data__;
      if (K1) {
        var r = t[e];
        return r === Y1 ? void 0 : r;
      }
      return Z1.call(t, e) ? t[e] : void 0;
    }
    Go.exports = X1;
  });
  var Ko = C((Ak, Vo) => {
    s();
    l();
    c();
    var Q1 = zt(),
      ey = Object.prototype,
      ty = ey.hasOwnProperty;
    function ry(e) {
      var t = this.__data__;
      return Q1 ? t[e] !== void 0 : ty.call(t, e);
    }
    Vo.exports = ry;
  });
  var Jo = C((Fk, Yo) => {
    s();
    l();
    c();
    var ny = zt(),
      ay = '__lodash_hash_undefined__';
    function uy(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = ny && t === void 0 ? ay : t),
        this
      );
    }
    Yo.exports = uy;
  });
  var Xo = C((Tk, Zo) => {
    s();
    l();
    c();
    var oy = $o(),
      iy = Uo(),
      sy = Wo(),
      ly = Ko(),
      cy = Jo();
    function ft(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ft.prototype.clear = oy;
    ft.prototype.delete = iy;
    ft.prototype.get = sy;
    ft.prototype.has = ly;
    ft.prototype.set = cy;
    Zo.exports = ft;
  });
  var ti = C((Ik, ei) => {
    s();
    l();
    c();
    var Qo = Xo(),
      dy = jt(),
      py = yr();
    function fy() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Qo(),
          map: new (py || dy)(),
          string: new Qo(),
        });
    }
    ei.exports = fy;
  });
  var ni = C((Mk, ri) => {
    s();
    l();
    c();
    function my(e) {
      var t = typeof e;
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
    }
    ri.exports = my;
  });
  var $t = C((zk, ai) => {
    s();
    l();
    c();
    var hy = ni();
    function gy(e, t) {
      var r = e.__data__;
      return hy(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
    }
    ai.exports = gy;
  });
  var oi = C((Gk, ui) => {
    s();
    l();
    c();
    var yy = $t();
    function by(e) {
      var t = yy(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ui.exports = by;
  });
  var si = C((Yk, ii) => {
    s();
    l();
    c();
    var Dy = $t();
    function Ey(e) {
      return Dy(this, e).get(e);
    }
    ii.exports = Ey;
  });
  var ci = C((Qk, li) => {
    s();
    l();
    c();
    var Ay = $t();
    function Cy(e) {
      return Ay(this, e).has(e);
    }
    li.exports = Cy;
  });
  var pi = C((nO, di) => {
    s();
    l();
    c();
    var vy = $t();
    function xy(e, t) {
      var r = vy(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    di.exports = xy;
  });
  var br = C((iO, fi) => {
    s();
    l();
    c();
    var Fy = ti(),
      Sy = oi(),
      By = si(),
      wy = ci(),
      Ty = pi();
    function mt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    mt.prototype.clear = Fy;
    mt.prototype.delete = Sy;
    mt.prototype.get = By;
    mt.prototype.has = wy;
    mt.prototype.set = Ty;
    fi.exports = mt;
  });
  var hi = C((dO, mi) => {
    s();
    l();
    c();
    var Ry = jt(),
      ky = yr(),
      Oy = br(),
      Iy = 200;
    function _y(e, t) {
      var r = this.__data__;
      if (r instanceof Ry) {
        var n = r.__data__;
        if (!ky || n.length < Iy - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Oy(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    mi.exports = _y;
  });
  var Dr = C((hO, gi) => {
    s();
    l();
    c();
    var Py = jt(),
      Ny = uo(),
      My = io(),
      qy = lo(),
      jy = po(),
      Ly = hi();
    function ht(e) {
      var t = (this.__data__ = new Py(e));
      this.size = t.size;
    }
    ht.prototype.clear = Ny;
    ht.prototype.delete = My;
    ht.prototype.get = qy;
    ht.prototype.has = jy;
    ht.prototype.set = Ly;
    gi.exports = ht;
  });
  var bi = C((DO, yi) => {
    s();
    l();
    c();
    var zy = '__lodash_hash_undefined__';
    function $y(e) {
      return this.__data__.set(e, zy), this;
    }
    yi.exports = $y;
  });
  var Ei = C((vO, Di) => {
    s();
    l();
    c();
    function Hy(e) {
      return this.__data__.has(e);
    }
    Di.exports = Hy;
  });
  var Kn = C((BO, Ai) => {
    s();
    l();
    c();
    var Uy = br(),
      Gy = bi(),
      Wy = Ei();
    function Er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Uy(); ++t < r; ) this.add(e[t]);
    }
    Er.prototype.add = Er.prototype.push = Gy;
    Er.prototype.has = Wy;
    Ai.exports = Er;
  });
  var vi = C((kO, Ci) => {
    s();
    l();
    c();
    function Vy(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Ci.exports = Vy;
  });
  var Yn = C((PO, xi) => {
    s();
    l();
    c();
    function Ky(e, t) {
      return e.has(t);
    }
    xi.exports = Ky;
  });
  var Jn = C((jO, Fi) => {
    s();
    l();
    c();
    var Yy = Kn(),
      Jy = vi(),
      Zy = Yn(),
      Xy = 1,
      Qy = 2;
    function eb(e, t, r, n, a, u) {
      var o = r & Xy,
        i = e.length,
        p = t.length;
      if (i != p && !(o && p > i)) return !1;
      var f = u.get(e),
        E = u.get(t);
      if (f && E) return f == t && E == e;
      var v = -1,
        h = !0,
        m = r & Qy ? new Yy() : void 0;
      for (u.set(e, t), u.set(t, e); ++v < i; ) {
        var A = e[v],
          g = t[v];
        if (n) var x = o ? n(g, A, v, t, e, u) : n(A, g, v, e, t, u);
        if (x !== void 0) {
          if (x) continue;
          h = !1;
          break;
        }
        if (m) {
          if (
            !Jy(t, function (w, I) {
              if (!Zy(m, I) && (A === w || a(A, w, r, n, u))) return m.push(I);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(A === g || a(A, g, r, n, u))) {
          h = !1;
          break;
        }
      }
      return u.delete(e), u.delete(t), h;
    }
    Fi.exports = eb;
  });
  var Zn = C((HO, Si) => {
    s();
    l();
    c();
    var tb = ve(),
      rb = tb.Uint8Array;
    Si.exports = rb;
  });
  var wi = C((VO, Bi) => {
    s();
    l();
    c();
    function nb(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n];
        }),
        r
      );
    }
    Bi.exports = nb;
  });
  var Ar = C((ZO, Ti) => {
    s();
    l();
    c();
    function ab(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ti.exports = ab;
  });
  var _i = C((tI, Ii) => {
    s();
    l();
    c();
    var Ri = rt(),
      ki = Zn(),
      ub = gr(),
      ob = Jn(),
      ib = wi(),
      sb = Ar(),
      lb = 1,
      cb = 2,
      db = '[object Boolean]',
      pb = '[object Date]',
      fb = '[object Error]',
      mb = '[object Map]',
      hb = '[object Number]',
      gb = '[object RegExp]',
      yb = '[object Set]',
      bb = '[object String]',
      Db = '[object Symbol]',
      Eb = '[object ArrayBuffer]',
      Ab = '[object DataView]',
      Oi = Ri ? Ri.prototype : void 0,
      Xn = Oi ? Oi.valueOf : void 0;
    function Cb(e, t, r, n, a, u, o) {
      switch (r) {
        case Ab:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Eb:
          return !(e.byteLength != t.byteLength || !u(new ki(e), new ki(t)));
        case db:
        case pb:
        case hb:
          return ub(+e, +t);
        case fb:
          return e.name == t.name && e.message == t.message;
        case gb:
        case bb:
          return e == t + '';
        case mb:
          var i = ib;
        case yb:
          var p = n & lb;
          if ((i || (i = sb), e.size != t.size && !p)) return !1;
          var f = o.get(e);
          if (f) return f == t;
          (n |= cb), o.set(e, t);
          var E = ob(i(e), i(t), n, a, u, o);
          return o.delete(e), E;
        case Db:
          if (Xn) return Xn.call(e) == Xn.call(t);
      }
      return !1;
    }
    Ii.exports = Cb;
  });
  var Cr = C((uI, Pi) => {
    s();
    l();
    c();
    function vb(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    Pi.exports = vb;
  });
  var Te = C((lI, Ni) => {
    s();
    l();
    c();
    var xb = Array.isArray;
    Ni.exports = xb;
  });
  var Qn = C((fI, Mi) => {
    s();
    l();
    c();
    var Fb = Cr(),
      Sb = Te();
    function Bb(e, t, r) {
      var n = t(e);
      return Sb(e) ? n : Fb(n, r(e));
    }
    Mi.exports = Bb;
  });
  var ji = C((yI, qi) => {
    s();
    l();
    c();
    function wb(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, u = []; ++r < n; ) {
        var o = e[r];
        t(o, r, e) && (u[a++] = o);
      }
      return u;
    }
    qi.exports = wb;
  });
  var ea = C((AI, Li) => {
    s();
    l();
    c();
    function Tb() {
      return [];
    }
    Li.exports = Tb;
  });
  var vr = C((FI, $i) => {
    s();
    l();
    c();
    var Rb = ji(),
      kb = ea(),
      Ob = Object.prototype,
      Ib = Ob.propertyIsEnumerable,
      zi = Object.getOwnPropertySymbols,
      _b = zi
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Rb(zi(e), function (t) {
                  return Ib.call(e, t);
                }));
          }
        : kb;
    $i.exports = _b;
  });
  var Ui = C((TI, Hi) => {
    s();
    l();
    c();
    function Pb(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Hi.exports = Pb;
  });
  var Le = C((II, Gi) => {
    s();
    l();
    c();
    function Nb(e) {
      return e != null && typeof e == 'object';
    }
    Gi.exports = Nb;
  });
  var Vi = C((MI, Wi) => {
    s();
    l();
    c();
    var Mb = nt(),
      qb = Le(),
      jb = '[object Arguments]';
    function Lb(e) {
      return qb(e) && Mb(e) == jb;
    }
    Wi.exports = Lb;
  });
  var xr = C((zI, Ji) => {
    s();
    l();
    c();
    var Ki = Vi(),
      zb = Le(),
      Yi = Object.prototype,
      $b = Yi.hasOwnProperty,
      Hb = Yi.propertyIsEnumerable,
      Ub = Ki(
        (function () {
          return arguments;
        })()
      )
        ? Ki
        : function (e) {
            return zb(e) && $b.call(e, 'callee') && !Hb.call(e, 'callee');
          };
    Ji.exports = Ub;
  });
  var Xi = C((GI, Zi) => {
    s();
    l();
    c();
    function Gb() {
      return !1;
    }
    Zi.exports = Gb;
  });
  var Fr = C((Ht, gt) => {
    s();
    l();
    c();
    var Wb = ve(),
      Vb = Xi(),
      ts = typeof Ht == 'object' && Ht && !Ht.nodeType && Ht,
      Qi = ts && typeof gt == 'object' && gt && !gt.nodeType && gt,
      Kb = Qi && Qi.exports === ts,
      es = Kb ? Wb.Buffer : void 0,
      Yb = es ? es.isBuffer : void 0,
      Jb = Yb || Vb;
    gt.exports = Jb;
  });
  var Sr = C((XI, rs) => {
    s();
    l();
    c();
    var Zb = 9007199254740991,
      Xb = /^(?:0|[1-9]\d*)$/;
    function Qb(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Zb),
        !!t &&
          (r == 'number' || (r != 'symbol' && Xb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    rs.exports = Qb;
  });
  var Br = C((r_, ns) => {
    s();
    l();
    c();
    var eD = 9007199254740991;
    function tD(e) {
      return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= eD;
    }
    ns.exports = tD;
  });
  var us = C((o_, as) => {
    s();
    l();
    c();
    var rD = nt(),
      nD = Br(),
      aD = Le(),
      uD = '[object Arguments]',
      oD = '[object Array]',
      iD = '[object Boolean]',
      sD = '[object Date]',
      lD = '[object Error]',
      cD = '[object Function]',
      dD = '[object Map]',
      pD = '[object Number]',
      fD = '[object Object]',
      mD = '[object RegExp]',
      hD = '[object Set]',
      gD = '[object String]',
      yD = '[object WeakMap]',
      bD = '[object ArrayBuffer]',
      DD = '[object DataView]',
      ED = '[object Float32Array]',
      AD = '[object Float64Array]',
      CD = '[object Int8Array]',
      vD = '[object Int16Array]',
      xD = '[object Int32Array]',
      FD = '[object Uint8Array]',
      SD = '[object Uint8ClampedArray]',
      BD = '[object Uint16Array]',
      wD = '[object Uint32Array]',
      ne = {};
    ne[ED] =
      ne[AD] =
      ne[CD] =
      ne[vD] =
      ne[xD] =
      ne[FD] =
      ne[SD] =
      ne[BD] =
      ne[wD] =
        !0;
    ne[uD] =
      ne[oD] =
      ne[bD] =
      ne[iD] =
      ne[DD] =
      ne[sD] =
      ne[lD] =
      ne[cD] =
      ne[dD] =
      ne[pD] =
      ne[fD] =
      ne[mD] =
      ne[hD] =
      ne[gD] =
      ne[yD] =
        !1;
    function TD(e) {
      return aD(e) && nD(e.length) && !!ne[rD(e)];
    }
    as.exports = TD;
  });
  var wr = C((c_, os) => {
    s();
    l();
    c();
    function RD(e) {
      return function (t) {
        return e(t);
      };
    }
    os.exports = RD;
  });
  var Tr = C((Ut, yt) => {
    s();
    l();
    c();
    var kD = Un(),
      is = typeof Ut == 'object' && Ut && !Ut.nodeType && Ut,
      Gt = is && typeof yt == 'object' && yt && !yt.nodeType && yt,
      OD = Gt && Gt.exports === is,
      ta = OD && kD.process,
      ID = (function () {
        try {
          var e = Gt && Gt.require && Gt.require('util').types;
          return e || (ta && ta.binding && ta.binding('util'));
        } catch {}
      })();
    yt.exports = ID;
  });
  var ra = C((y_, cs) => {
    s();
    l();
    c();
    var _D = us(),
      PD = wr(),
      ss = Tr(),
      ls = ss && ss.isTypedArray,
      ND = ls ? PD(ls) : _D;
    cs.exports = ND;
  });
  var na = C((A_, ds) => {
    s();
    l();
    c();
    var MD = Ui(),
      qD = xr(),
      jD = Te(),
      LD = Fr(),
      zD = Sr(),
      $D = ra(),
      HD = Object.prototype,
      UD = HD.hasOwnProperty;
    function GD(e, t) {
      var r = jD(e),
        n = !r && qD(e),
        a = !r && !n && LD(e),
        u = !r && !n && !a && $D(e),
        o = r || n || a || u,
        i = o ? MD(e.length, String) : [],
        p = i.length;
      for (var f in e)
        (t || UD.call(e, f)) &&
          !(
            o &&
            (f == 'length' ||
              (a && (f == 'offset' || f == 'parent')) ||
              (u &&
                (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
              zD(f, p))
          ) &&
          i.push(f);
      return i;
    }
    ds.exports = GD;
  });
  var Rr = C((F_, ps) => {
    s();
    l();
    c();
    var WD = Object.prototype;
    function VD(e) {
      var t = e && e.constructor,
        r = (typeof t == 'function' && t.prototype) || WD;
      return e === r;
    }
    ps.exports = VD;
  });
  var aa = C((T_, fs) => {
    s();
    l();
    c();
    function KD(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    fs.exports = KD;
  });
  var hs = C((I_, ms) => {
    s();
    l();
    c();
    var YD = aa(),
      JD = YD(Object.keys, Object);
    ms.exports = JD;
  });
  var ys = C((M_, gs) => {
    s();
    l();
    c();
    var ZD = Rr(),
      XD = hs(),
      QD = Object.prototype,
      eE = QD.hasOwnProperty;
    function tE(e) {
      if (!ZD(e)) return XD(e);
      var t = [];
      for (var r in Object(e)) eE.call(e, r) && r != 'constructor' && t.push(r);
      return t;
    }
    gs.exports = tE;
  });
  var ua = C((z_, bs) => {
    s();
    l();
    c();
    var rE = Gn(),
      nE = Br();
    function aE(e) {
      return e != null && nE(e.length) && !rE(e);
    }
    bs.exports = aE;
  });
  var bt = C((G_, Ds) => {
    s();
    l();
    c();
    var uE = na(),
      oE = ys(),
      iE = ua();
    function sE(e) {
      return iE(e) ? uE(e) : oE(e);
    }
    Ds.exports = sE;
  });
  var oa = C((Y_, Es) => {
    s();
    l();
    c();
    var lE = Qn(),
      cE = vr(),
      dE = bt();
    function pE(e) {
      return lE(e, dE, cE);
    }
    Es.exports = pE;
  });
  var vs = C((Q_, Cs) => {
    s();
    l();
    c();
    var As = oa(),
      fE = 1,
      mE = Object.prototype,
      hE = mE.hasOwnProperty;
    function gE(e, t, r, n, a, u) {
      var o = r & fE,
        i = As(e),
        p = i.length,
        f = As(t),
        E = f.length;
      if (p != E && !o) return !1;
      for (var v = p; v--; ) {
        var h = i[v];
        if (!(o ? h in t : hE.call(t, h))) return !1;
      }
      var m = u.get(e),
        A = u.get(t);
      if (m && A) return m == t && A == e;
      var g = !0;
      u.set(e, t), u.set(t, e);
      for (var x = o; ++v < p; ) {
        h = i[v];
        var w = e[h],
          I = t[h];
        if (n) var N = o ? n(I, w, h, t, e, u) : n(w, I, h, e, t, u);
        if (!(N === void 0 ? w === I || a(w, I, r, n, u) : N)) {
          g = !1;
          break;
        }
        x || (x = h == 'constructor');
      }
      if (g && !x) {
        var z = e.constructor,
          F = t.constructor;
        z != F &&
          'constructor' in e &&
          'constructor' in t &&
          !(
            typeof z == 'function' &&
            z instanceof z &&
            typeof F == 'function' &&
            F instanceof F
          ) &&
          (g = !1);
      }
      return u.delete(e), u.delete(t), g;
    }
    Cs.exports = gE;
  });
  var Fs = C((nP, xs) => {
    s();
    l();
    c();
    var yE = Ye(),
      bE = ve(),
      DE = yE(bE, 'DataView');
    xs.exports = DE;
  });
  var Bs = C((iP, Ss) => {
    s();
    l();
    c();
    var EE = Ye(),
      AE = ve(),
      CE = EE(AE, 'Promise');
    Ss.exports = CE;
  });
  var ia = C((dP, ws) => {
    s();
    l();
    c();
    var vE = Ye(),
      xE = ve(),
      FE = vE(xE, 'Set');
    ws.exports = FE;
  });
  var Rs = C((hP, Ts) => {
    s();
    l();
    c();
    var SE = Ye(),
      BE = ve(),
      wE = SE(BE, 'WeakMap');
    Ts.exports = wE;
  });
  var Wt = C((DP, Ms) => {
    s();
    l();
    c();
    var sa = Fs(),
      la = yr(),
      ca = Bs(),
      da = ia(),
      pa = Rs(),
      Ns = nt(),
      Dt = Vn(),
      ks = '[object Map]',
      TE = '[object Object]',
      Os = '[object Promise]',
      Is = '[object Set]',
      _s = '[object WeakMap]',
      Ps = '[object DataView]',
      RE = Dt(sa),
      kE = Dt(la),
      OE = Dt(ca),
      IE = Dt(da),
      _E = Dt(pa),
      at = Ns;
    ((sa && at(new sa(new ArrayBuffer(1))) != Ps) ||
      (la && at(new la()) != ks) ||
      (ca && at(ca.resolve()) != Os) ||
      (da && at(new da()) != Is) ||
      (pa && at(new pa()) != _s)) &&
      (at = function (e) {
        var t = Ns(e),
          r = t == TE ? e.constructor : void 0,
          n = r ? Dt(r) : '';
        if (n)
          switch (n) {
            case RE:
              return Ps;
            case kE:
              return ks;
            case OE:
              return Os;
            case IE:
              return Is;
            case _E:
              return _s;
          }
        return t;
      });
    Ms.exports = at;
  });
  var Gs = C((vP, Us) => {
    s();
    l();
    c();
    var fa = Dr(),
      PE = Jn(),
      NE = _i(),
      ME = vs(),
      qs = Wt(),
      js = Te(),
      Ls = Fr(),
      qE = ra(),
      jE = 1,
      zs = '[object Arguments]',
      $s = '[object Array]',
      kr = '[object Object]',
      LE = Object.prototype,
      Hs = LE.hasOwnProperty;
    function zE(e, t, r, n, a, u) {
      var o = js(e),
        i = js(t),
        p = o ? $s : qs(e),
        f = i ? $s : qs(t);
      (p = p == zs ? kr : p), (f = f == zs ? kr : f);
      var E = p == kr,
        v = f == kr,
        h = p == f;
      if (h && Ls(e)) {
        if (!Ls(t)) return !1;
        (o = !0), (E = !1);
      }
      if (h && !E)
        return (
          u || (u = new fa()),
          o || qE(e) ? PE(e, t, r, n, a, u) : NE(e, t, p, r, n, a, u)
        );
      if (!(r & jE)) {
        var m = E && Hs.call(e, '__wrapped__'),
          A = v && Hs.call(t, '__wrapped__');
        if (m || A) {
          var g = m ? e.value() : e,
            x = A ? t.value() : t;
          return u || (u = new fa()), a(g, x, r, n, u);
        }
      }
      return h ? (u || (u = new fa()), ME(e, t, r, n, a, u)) : !1;
    }
    Us.exports = zE;
  });
  var Or = C((BP, Ks) => {
    s();
    l();
    c();
    var $E = Gs(),
      Ws = Le();
    function Vs(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Ws(e) && !Ws(t))
        ? e !== e && t !== t
        : $E(e, t, r, n, Vs, a);
    }
    Ks.exports = Vs;
  });
  var Js = C((kP, Ys) => {
    s();
    l();
    c();
    var HE = Dr(),
      UE = Or(),
      GE = 1,
      WE = 2;
    function VE(e, t, r, n) {
      var a = r.length,
        u = a,
        o = !n;
      if (e == null) return !u;
      for (e = Object(e); a--; ) {
        var i = r[a];
        if (o && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1;
      }
      for (; ++a < u; ) {
        i = r[a];
        var p = i[0],
          f = e[p],
          E = i[1];
        if (o && i[2]) {
          if (f === void 0 && !(p in e)) return !1;
        } else {
          var v = new HE();
          if (n) var h = n(f, E, p, e, t, v);
          if (!(h === void 0 ? UE(E, f, GE | WE, n, v) : h)) return !1;
        }
      }
      return !0;
    }
    Ys.exports = VE;
  });
  var ma = C((PP, Zs) => {
    s();
    l();
    c();
    var KE = we();
    function YE(e) {
      return e === e && !KE(e);
    }
    Zs.exports = YE;
  });
  var Qs = C((jP, Xs) => {
    s();
    l();
    c();
    var JE = ma(),
      ZE = bt();
    function XE(e) {
      for (var t = ZE(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n];
        t[r] = [n, a, JE(a)];
      }
      return t;
    }
    Xs.exports = XE;
  });
  var ha = C((HP, el) => {
    s();
    l();
    c();
    function QE(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    el.exports = QE;
  });
  var rl = C((VP, tl) => {
    s();
    l();
    c();
    var eA = Js(),
      tA = Qs(),
      rA = ha();
    function nA(e) {
      var t = tA(e);
      return t.length == 1 && t[0][2]
        ? rA(t[0][0], t[0][1])
        : function (r) {
            return r === e || eA(r, e, t);
          };
    }
    tl.exports = nA;
  });
  var Vt = C((ZP, nl) => {
    s();
    l();
    c();
    var aA = nt(),
      uA = Le(),
      oA = '[object Symbol]';
    function iA(e) {
      return typeof e == 'symbol' || (uA(e) && aA(e) == oA);
    }
    nl.exports = iA;
  });
  var Ir = C((tN, al) => {
    s();
    l();
    c();
    var sA = Te(),
      lA = Vt(),
      cA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      dA = /^\w*$/;
    function pA(e, t) {
      if (sA(e)) return !1;
      var r = typeof e;
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        lA(e)
        ? !0
        : dA.test(e) || !cA.test(e) || (t != null && e in Object(t));
    }
    al.exports = pA;
  });
  var il = C((uN, ol) => {
    s();
    l();
    c();
    var ul = br(),
      fA = 'Expected a function';
    function ga(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(fA);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          u = r.cache;
        if (u.has(a)) return u.get(a);
        var o = e.apply(this, n);
        return (r.cache = u.set(a, o) || u), o;
      };
      return (r.cache = new (ga.Cache || ul)()), r;
    }
    ga.Cache = ul;
    ol.exports = ga;
  });
  var ll = C((lN, sl) => {
    s();
    l();
    c();
    var mA = il(),
      hA = 500;
    function gA(e) {
      var t = mA(e, function (n) {
          return r.size === hA && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    sl.exports = gA;
  });
  var dl = C((fN, cl) => {
    s();
    l();
    c();
    var yA = ll(),
      bA =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      DA = /\\(\\)?/g,
      EA = yA(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(bA, function (r, n, a, u) {
            t.push(a ? u.replace(DA, '$1') : n || r);
          }),
          t
        );
      });
    cl.exports = EA;
  });
  var yl = C((yN, gl) => {
    s();
    l();
    c();
    var pl = rt(),
      AA = Hn(),
      CA = Te(),
      vA = Vt(),
      xA = 1 / 0,
      fl = pl ? pl.prototype : void 0,
      ml = fl ? fl.toString : void 0;
    function hl(e) {
      if (typeof e == 'string') return e;
      if (CA(e)) return AA(e, hl) + '';
      if (vA(e)) return ml ? ml.call(e) : '';
      var t = e + '';
      return t == '0' && 1 / e == -xA ? '-0' : t;
    }
    gl.exports = hl;
  });
  var Kt = C((AN, bl) => {
    s();
    l();
    c();
    var FA = yl();
    function SA(e) {
      return e == null ? '' : FA(e);
    }
    bl.exports = SA;
  });
  var Yt = C((FN, Dl) => {
    s();
    l();
    c();
    var BA = Te(),
      wA = Ir(),
      TA = dl(),
      RA = Kt();
    function kA(e, t) {
      return BA(e) ? e : wA(e, t) ? [e] : TA(RA(e));
    }
    Dl.exports = kA;
  });
  var Et = C((TN, El) => {
    s();
    l();
    c();
    var OA = Vt(),
      IA = 1 / 0;
    function _A(e) {
      if (typeof e == 'string' || OA(e)) return e;
      var t = e + '';
      return t == '0' && 1 / e == -IA ? '-0' : t;
    }
    El.exports = _A;
  });
  var _r = C((IN, Al) => {
    s();
    l();
    c();
    var PA = Yt(),
      NA = Et();
    function MA(e, t) {
      t = PA(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[NA(t[r++])];
      return r && r == n ? e : void 0;
    }
    Al.exports = MA;
  });
  var vl = C((MN, Cl) => {
    s();
    l();
    c();
    var qA = _r();
    function jA(e, t, r) {
      var n = e == null ? void 0 : qA(e, t);
      return n === void 0 ? r : n;
    }
    Cl.exports = jA;
  });
  var Fl = C((zN, xl) => {
    s();
    l();
    c();
    function LA(e, t) {
      return e != null && t in Object(e);
    }
    xl.exports = LA;
  });
  var Bl = C((GN, Sl) => {
    s();
    l();
    c();
    var zA = Yt(),
      $A = xr(),
      HA = Te(),
      UA = Sr(),
      GA = Br(),
      WA = Et();
    function VA(e, t, r) {
      t = zA(t, e);
      for (var n = -1, a = t.length, u = !1; ++n < a; ) {
        var o = WA(t[n]);
        if (!(u = e != null && r(e, o))) break;
        e = e[o];
      }
      return u || ++n != a
        ? u
        : ((a = e == null ? 0 : e.length),
          !!a && GA(a) && UA(o, a) && (HA(e) || $A(e)));
    }
    Sl.exports = VA;
  });
  var ya = C((YN, wl) => {
    s();
    l();
    c();
    var KA = Fl(),
      YA = Bl();
    function JA(e, t) {
      return e != null && YA(e, t, KA);
    }
    wl.exports = JA;
  });
  var Rl = C((QN, Tl) => {
    s();
    l();
    c();
    var ZA = Or(),
      XA = vl(),
      QA = ya(),
      eC = Ir(),
      tC = ma(),
      rC = ha(),
      nC = Et(),
      aC = 1,
      uC = 2;
    function oC(e, t) {
      return eC(e) && tC(t)
        ? rC(nC(e), t)
        : function (r) {
            var n = XA(r, e);
            return n === void 0 && n === t ? QA(r, e) : ZA(t, n, aC | uC);
          };
    }
    Tl.exports = oC;
  });
  var ba = C((nM, kl) => {
    s();
    l();
    c();
    function iC(e) {
      return e;
    }
    kl.exports = iC;
  });
  var Il = C((iM, Ol) => {
    s();
    l();
    c();
    function sC(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ol.exports = sC;
  });
  var Pl = C((dM, _l) => {
    s();
    l();
    c();
    var lC = _r();
    function cC(e) {
      return function (t) {
        return lC(t, e);
      };
    }
    _l.exports = cC;
  });
  var Ml = C((hM, Nl) => {
    s();
    l();
    c();
    var dC = Il(),
      pC = Pl(),
      fC = Ir(),
      mC = Et();
    function hC(e) {
      return fC(e) ? dC(mC(e)) : pC(e);
    }
    Nl.exports = hC;
  });
  var Da = C((DM, ql) => {
    s();
    l();
    c();
    var gC = rl(),
      yC = Rl(),
      bC = ba(),
      DC = Te(),
      EC = Ml();
    function AC(e) {
      return typeof e == 'function'
        ? e
        : e == null
        ? bC
        : typeof e == 'object'
        ? DC(e)
          ? yC(e[0], e[1])
          : gC(e)
        : EC(e);
    }
    ql.exports = AC;
  });
  var Ea = C((vM, jl) => {
    s();
    l();
    c();
    var CC = Ye(),
      vC = (function () {
        try {
          var e = CC(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch {}
      })();
    jl.exports = vC;
  });
  var Pr = C((BM, zl) => {
    s();
    l();
    c();
    var Ll = Ea();
    function xC(e, t, r) {
      t == '__proto__' && Ll
        ? Ll(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    zl.exports = xC;
  });
  var Nr = C((kM, $l) => {
    s();
    l();
    c();
    var FC = Pr(),
      SC = gr(),
      BC = Object.prototype,
      wC = BC.hasOwnProperty;
    function TC(e, t, r) {
      var n = e[t];
      (!(wC.call(e, t) && SC(n, r)) || (r === void 0 && !(t in e))) &&
        FC(e, t, r);
    }
    $l.exports = TC;
  });
  var Gl = C((PM, Ul) => {
    s();
    l();
    c();
    var RC = Nr(),
      kC = Yt(),
      OC = Sr(),
      Hl = we(),
      IC = Et();
    function _C(e, t, r, n) {
      if (!Hl(e)) return e;
      t = kC(t, e);
      for (var a = -1, u = t.length, o = u - 1, i = e; i != null && ++a < u; ) {
        var p = IC(t[a]),
          f = r;
        if (p === '__proto__' || p === 'constructor' || p === 'prototype')
          return e;
        if (a != o) {
          var E = i[p];
          (f = n ? n(E, p, i) : void 0),
            f === void 0 && (f = Hl(E) ? E : OC(t[a + 1]) ? [] : {});
        }
        RC(i, p, f), (i = i[p]);
      }
      return e;
    }
    Ul.exports = _C;
  });
  var Aa = C((jM, Wl) => {
    s();
    l();
    c();
    var PC = _r(),
      NC = Gl(),
      MC = Yt();
    function qC(e, t, r) {
      for (var n = -1, a = t.length, u = {}; ++n < a; ) {
        var o = t[n],
          i = PC(e, o);
        r(i, o) && NC(u, MC(o, e), i);
      }
      return u;
    }
    Wl.exports = qC;
  });
  var Mr = C((HM, Vl) => {
    s();
    l();
    c();
    var jC = aa(),
      LC = jC(Object.getPrototypeOf, Object);
    Vl.exports = LC;
  });
  var Ca = C((VM, Kl) => {
    s();
    l();
    c();
    var zC = Cr(),
      $C = Mr(),
      HC = vr(),
      UC = ea(),
      GC = Object.getOwnPropertySymbols,
      WC = GC
        ? function (e) {
            for (var t = []; e; ) zC(t, HC(e)), (e = $C(e));
            return t;
          }
        : UC;
    Kl.exports = WC;
  });
  var Jl = C((ZM, Yl) => {
    s();
    l();
    c();
    function VC(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Yl.exports = VC;
  });
  var Xl = C((tq, Zl) => {
    s();
    l();
    c();
    var KC = we(),
      YC = Rr(),
      JC = Jl(),
      ZC = Object.prototype,
      XC = ZC.hasOwnProperty;
    function QC(e) {
      if (!KC(e)) return JC(e);
      var t = YC(e),
        r = [];
      for (var n in e)
        (n == 'constructor' && (t || !XC.call(e, n))) || r.push(n);
      return r;
    }
    Zl.exports = QC;
  });
  var qr = C((uq, Ql) => {
    s();
    l();
    c();
    var e2 = na(),
      t2 = Xl(),
      r2 = ua();
    function n2(e) {
      return r2(e) ? e2(e, !0) : t2(e);
    }
    Ql.exports = n2;
  });
  var va = C((lq, ec) => {
    s();
    l();
    c();
    var a2 = Qn(),
      u2 = Ca(),
      o2 = qr();
    function i2(e) {
      return a2(e, o2, u2);
    }
    ec.exports = i2;
  });
  var xa = C((fq, tc) => {
    s();
    l();
    c();
    var s2 = Hn(),
      l2 = Da(),
      c2 = Aa(),
      d2 = va();
    function p2(e, t) {
      if (e == null) return {};
      var r = s2(d2(e), function (n) {
        return [n];
      });
      return (
        (t = l2(t)),
        c2(e, r, function (n, a) {
          return t(n, a[0]);
        })
      );
    }
    tc.exports = p2;
  });
  var nc = C((yq, rc) => {
    s();
    l();
    c();
    function f2(e, t, r, n) {
      var a = -1,
        u = e == null ? 0 : e.length;
      for (n && u && (r = e[++a]); ++a < u; ) r = t(r, e[a], a, e);
      return r;
    }
    rc.exports = f2;
  });
  var uc = C((Aq, ac) => {
    s();
    l();
    c();
    function m2(e) {
      return function (t) {
        return e?.[t];
      };
    }
    ac.exports = m2;
  });
  var ic = C((Fq, oc) => {
    s();
    l();
    c();
    var h2 = uc(),
      g2 = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      y2 = h2(g2);
    oc.exports = y2;
  });
  var lc = C((Tq, sc) => {
    s();
    l();
    c();
    var b2 = ic(),
      D2 = Kt(),
      E2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      A2 = '\\u0300-\\u036f',
      C2 = '\\ufe20-\\ufe2f',
      v2 = '\\u20d0-\\u20ff',
      x2 = A2 + C2 + v2,
      F2 = '[' + x2 + ']',
      S2 = RegExp(F2, 'g');
    function B2(e) {
      return (e = D2(e)), e && e.replace(E2, b2).replace(S2, '');
    }
    sc.exports = B2;
  });
  var dc = C((Iq, cc) => {
    s();
    l();
    c();
    var w2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function T2(e) {
      return e.match(w2) || [];
    }
    cc.exports = T2;
  });
  var fc = C((Mq, pc) => {
    s();
    l();
    c();
    var R2 =
      /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    function k2(e) {
      return R2.test(e);
    }
    pc.exports = k2;
  });
  var Oc = C((zq, kc) => {
    s();
    l();
    c();
    var bc = '\\ud800-\\udfff',
      O2 = '\\u0300-\\u036f',
      I2 = '\\ufe20-\\ufe2f',
      _2 = '\\u20d0-\\u20ff',
      P2 = O2 + I2 + _2,
      Dc = '\\u2700-\\u27bf',
      Ec = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      N2 = '\\xac\\xb1\\xd7\\xf7',
      M2 = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      q2 = '\\u2000-\\u206f',
      j2 =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      Ac = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      L2 = '\\ufe0e\\ufe0f',
      Cc = N2 + M2 + q2 + j2,
      vc = "['\u2019]",
      mc = '[' + Cc + ']',
      z2 = '[' + P2 + ']',
      xc = '\\d+',
      $2 = '[' + Dc + ']',
      Fc = '[' + Ec + ']',
      Sc = '[^' + bc + Cc + xc + Dc + Ec + Ac + ']',
      H2 = '\\ud83c[\\udffb-\\udfff]',
      U2 = '(?:' + z2 + '|' + H2 + ')',
      G2 = '[^' + bc + ']',
      Bc = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      wc = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      At = '[' + Ac + ']',
      W2 = '\\u200d',
      hc = '(?:' + Fc + '|' + Sc + ')',
      V2 = '(?:' + At + '|' + Sc + ')',
      gc = '(?:' + vc + '(?:d|ll|m|re|s|t|ve))?',
      yc = '(?:' + vc + '(?:D|LL|M|RE|S|T|VE))?',
      Tc = U2 + '?',
      Rc = '[' + L2 + ']?',
      K2 = '(?:' + W2 + '(?:' + [G2, Bc, wc].join('|') + ')' + Rc + Tc + ')*',
      Y2 = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      J2 = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Z2 = Rc + Tc + K2,
      X2 = '(?:' + [$2, Bc, wc].join('|') + ')' + Z2,
      Q2 = RegExp(
        [
          At + '?' + Fc + '+' + gc + '(?=' + [mc, At, '$'].join('|') + ')',
          V2 + '+' + yc + '(?=' + [mc, At + hc, '$'].join('|') + ')',
          At + '?' + hc + '+' + gc,
          At + '+' + yc,
          J2,
          Y2,
          xc,
          X2,
        ].join('|'),
        'g'
      );
    function ev(e) {
      return e.match(Q2) || [];
    }
    kc.exports = ev;
  });
  var _c = C((Gq, Ic) => {
    s();
    l();
    c();
    var tv = dc(),
      rv = fc(),
      nv = Kt(),
      av = Oc();
    function uv(e, t, r) {
      return (
        (e = nv(e)),
        (t = r ? void 0 : t),
        t === void 0 ? (rv(e) ? av(e) : tv(e)) : e.match(t) || []
      );
    }
    Ic.exports = uv;
  });
  var Nc = C((Yq, Pc) => {
    s();
    l();
    c();
    var ov = nc(),
      iv = lc(),
      sv = _c(),
      lv = "['\u2019]",
      cv = RegExp(lv, 'g');
    function dv(e) {
      return function (t) {
        return ov(sv(iv(t).replace(cv, '')), e, '');
      };
    }
    Pc.exports = dv;
  });
  var qc = C((Qq, Mc) => {
    s();
    l();
    c();
    function pv(e, t, r) {
      var n = -1,
        a = e.length;
      t < 0 && (t = -t > a ? 0 : a + t),
        (r = r > a ? a : r),
        r < 0 && (r += a),
        (a = t > r ? 0 : (r - t) >>> 0),
        (t >>>= 0);
      for (var u = Array(a); ++n < a; ) u[n] = e[n + t];
      return u;
    }
    Mc.exports = pv;
  });
  var Lc = C((nj, jc) => {
    s();
    l();
    c();
    var fv = qc();
    function mv(e, t, r) {
      var n = e.length;
      return (r = r === void 0 ? n : r), !t && r >= n ? e : fv(e, t, r);
    }
    jc.exports = mv;
  });
  var Fa = C((ij, zc) => {
    s();
    l();
    c();
    var hv = '\\ud800-\\udfff',
      gv = '\\u0300-\\u036f',
      yv = '\\ufe20-\\ufe2f',
      bv = '\\u20d0-\\u20ff',
      Dv = gv + yv + bv,
      Ev = '\\ufe0e\\ufe0f',
      Av = '\\u200d',
      Cv = RegExp('[' + Av + hv + Dv + Ev + ']');
    function vv(e) {
      return Cv.test(e);
    }
    zc.exports = vv;
  });
  var Hc = C((dj, $c) => {
    s();
    l();
    c();
    function xv(e) {
      return e.split('');
    }
    $c.exports = xv;
  });
  var Zc = C((hj, Jc) => {
    s();
    l();
    c();
    var Uc = '\\ud800-\\udfff',
      Fv = '\\u0300-\\u036f',
      Sv = '\\ufe20-\\ufe2f',
      Bv = '\\u20d0-\\u20ff',
      wv = Fv + Sv + Bv,
      Tv = '\\ufe0e\\ufe0f',
      Rv = '[' + Uc + ']',
      Sa = '[' + wv + ']',
      Ba = '\\ud83c[\\udffb-\\udfff]',
      kv = '(?:' + Sa + '|' + Ba + ')',
      Gc = '[^' + Uc + ']',
      Wc = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      Vc = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      Ov = '\\u200d',
      Kc = kv + '?',
      Yc = '[' + Tv + ']?',
      Iv = '(?:' + Ov + '(?:' + [Gc, Wc, Vc].join('|') + ')' + Yc + Kc + ')*',
      _v = Yc + Kc + Iv,
      Pv = '(?:' + [Gc + Sa + '?', Sa, Wc, Vc, Rv].join('|') + ')',
      Nv = RegExp(Ba + '(?=' + Ba + ')|' + Pv + _v, 'g');
    function Mv(e) {
      return e.match(Nv) || [];
    }
    Jc.exports = Mv;
  });
  var Qc = C((Dj, Xc) => {
    s();
    l();
    c();
    var qv = Hc(),
      jv = Fa(),
      Lv = Zc();
    function zv(e) {
      return jv(e) ? Lv(e) : qv(e);
    }
    Xc.exports = zv;
  });
  var t0 = C((vj, e0) => {
    s();
    l();
    c();
    var $v = Lc(),
      Hv = Fa(),
      Uv = Qc(),
      Gv = Kt();
    function Wv(e) {
      return function (t) {
        t = Gv(t);
        var r = Hv(t) ? Uv(t) : void 0,
          n = r ? r[0] : t.charAt(0),
          a = r ? $v(r, 1).join('') : t.slice(1);
        return n[e]() + a;
      };
    }
    e0.exports = Wv;
  });
  var n0 = C((Bj, r0) => {
    s();
    l();
    c();
    var Vv = t0(),
      Kv = Vv('toUpperCase');
    r0.exports = Kv;
  });
  var u0 = C((kj, a0) => {
    s();
    l();
    c();
    var Yv = Nc(),
      Jv = n0(),
      Zv = Yv(function (e, t, r) {
        return e + (r ? ' ' : '') + Jv(t);
      });
    a0.exports = Zv;
  });
  var i0 = C((Pj, o0) => {
    s();
    l();
    c();
    var Xv = Or();
    function Qv(e, t) {
      return Xv(e, t);
    }
    o0.exports = Qv;
  });
  var $r = C((M0, Ma) => {
    s();
    l();
    c();
    (function (e) {
      if (typeof M0 == 'object' && typeof Ma < 'u') Ma.exports = e();
      else if (typeof define == 'function' && define.amd) define([], e);
      else {
        var t;
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e());
      }
    })(function () {
      var e, t, r;
      return (function n(a, u, o) {
        function i(E, v) {
          if (!u[E]) {
            if (!a[E]) {
              var h = typeof Rt == 'function' && Rt;
              if (!v && h) return h(E, !0);
              if (p) return p(E, !0);
              var m = new Error("Cannot find module '" + E + "'");
              throw ((m.code = 'MODULE_NOT_FOUND'), m);
            }
            var A = (u[E] = { exports: {} });
            a[E][0].call(
              A.exports,
              function (g) {
                var x = a[E][1][g];
                return i(x || g);
              },
              A,
              A.exports,
              n,
              a,
              u,
              o
            );
          }
          return u[E].exports;
        }
        for (var p = typeof Rt == 'function' && Rt, f = 0; f < o.length; f++)
          i(o[f]);
        return i;
      })(
        {
          1: [
            function (n, a, u) {
              a.exports = function (o) {
                if (typeof Map != 'function' || o) {
                  var i = n('./similar');
                  return new i();
                } else return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (n, a, u) {
              function o() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (o.prototype.get = function (i) {
                var p;
                if (this.lastItem && this.isEqual(this.lastItem.key, i))
                  return this.lastItem.val;
                if (((p = this.indexOf(i)), p >= 0))
                  return (this.lastItem = this.list[p]), this.list[p].val;
              }),
                (o.prototype.set = function (i, p) {
                  var f;
                  return this.lastItem && this.isEqual(this.lastItem.key, i)
                    ? ((this.lastItem.val = p), this)
                    : ((f = this.indexOf(i)),
                      f >= 0
                        ? ((this.lastItem = this.list[f]),
                          (this.list[f].val = p),
                          this)
                        : ((this.lastItem = { key: i, val: p }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (o.prototype.delete = function (i) {
                  var p;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, i) &&
                      (this.lastItem = void 0),
                    (p = this.indexOf(i)),
                    p >= 0)
                  )
                    return this.size--, this.list.splice(p, 1)[0];
                }),
                (o.prototype.has = function (i) {
                  var p;
                  return this.lastItem && this.isEqual(this.lastItem.key, i)
                    ? !0
                    : ((p = this.indexOf(i)),
                      p >= 0 ? ((this.lastItem = this.list[p]), !0) : !1);
                }),
                (o.prototype.forEach = function (i, p) {
                  var f;
                  for (f = 0; f < this.size; f++)
                    i.call(p || this, this.list[f].val, this.list[f].key, this);
                }),
                (o.prototype.indexOf = function (i) {
                  var p;
                  for (p = 0; p < this.size; p++)
                    if (this.isEqual(this.list[p].key, i)) return p;
                  return -1;
                }),
                (o.prototype.isEqual = function (i, p) {
                  return i === p || (i !== i && p !== p);
                }),
                (a.exports = o);
            },
            {},
          ],
          3: [
            function (n, a, u) {
              var o = n('map-or-similar');
              a.exports = function (E) {
                var v = new o(void 0 === 'true'),
                  h = [];
                return function (m) {
                  var A = function () {
                    var g = v,
                      x,
                      w,
                      I = arguments.length - 1,
                      N = Array(I + 1),
                      z = !0,
                      F;
                    if ((A.numArgs || A.numArgs === 0) && A.numArgs !== I + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      );
                    for (F = 0; F < I; F++) {
                      if (
                        ((N[F] = { cacheItem: g, arg: arguments[F] }),
                        g.has(arguments[F]))
                      ) {
                        g = g.get(arguments[F]);
                        continue;
                      }
                      (z = !1),
                        (x = new o(void 0 === 'true')),
                        g.set(arguments[F], x),
                        (g = x);
                    }
                    return (
                      z &&
                        (g.has(arguments[I])
                          ? (w = g.get(arguments[I]))
                          : (z = !1)),
                      z ||
                        ((w = m.apply(null, arguments)),
                        g.set(arguments[I], w)),
                      E > 0 &&
                        ((N[I] = { cacheItem: g, arg: arguments[I] }),
                        z ? i(h, N) : h.push(N),
                        h.length > E && p(h.shift())),
                      (A.wasMemoized = z),
                      (A.numArgs = I + 1),
                      w
                    );
                  };
                  return (
                    (A.limit = E),
                    (A.wasMemoized = !1),
                    (A.cache = v),
                    (A.lru = h),
                    A
                  );
                };
              };
              function i(E, v) {
                var h = E.length,
                  m = v.length,
                  A,
                  g,
                  x;
                for (g = 0; g < h; g++) {
                  for (A = !0, x = 0; x < m; x++)
                    if (!f(E[g][x].arg, v[x].arg)) {
                      A = !1;
                      break;
                    }
                  if (A) break;
                }
                E.push(E.splice(g, 1)[0]);
              }
              function p(E) {
                var v = E.length,
                  h = E[v - 1],
                  m,
                  A;
                for (
                  h.cacheItem.delete(h.arg), A = v - 2;
                  A >= 0 &&
                  ((h = E[A]), (m = h.cacheItem.get(h.arg)), !m || !m.size);
                  A--
                )
                  h.cacheItem.delete(h.arg);
              }
              function f(E, v) {
                return E === v || (E !== E && v !== v);
              }
            },
            { 'map-or-similar': 1 },
          ],
        },
        {},
        [3]
      )(3);
    });
  });
  var j0 = C((nL, q0) => {
    s();
    l();
    c();
    function aF(e, t, r, n) {
      for (var a = e.length, u = r + (n ? 1 : -1); n ? u-- : ++u < a; )
        if (t(e[u], u, e)) return u;
      return -1;
    }
    q0.exports = aF;
  });
  var z0 = C((iL, L0) => {
    s();
    l();
    c();
    function uF(e) {
      return e !== e;
    }
    L0.exports = uF;
  });
  var H0 = C((dL, $0) => {
    s();
    l();
    c();
    function oF(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
      return -1;
    }
    $0.exports = oF;
  });
  var G0 = C((hL, U0) => {
    s();
    l();
    c();
    var iF = j0(),
      sF = z0(),
      lF = H0();
    function cF(e, t, r) {
      return t === t ? lF(e, t, r) : iF(e, sF, r);
    }
    U0.exports = cF;
  });
  var V0 = C((DL, W0) => {
    s();
    l();
    c();
    var dF = G0();
    function pF(e, t) {
      var r = e == null ? 0 : e.length;
      return !!r && dF(e, t, 0) > -1;
    }
    W0.exports = pF;
  });
  var Y0 = C((vL, K0) => {
    s();
    l();
    c();
    function fF(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0;
      return !1;
    }
    K0.exports = fF;
  });
  var Z0 = C((BL, J0) => {
    s();
    l();
    c();
    function mF() {}
    J0.exports = mF;
  });
  var Q0 = C((kL, X0) => {
    s();
    l();
    c();
    var qa = ia(),
      hF = Z0(),
      gF = Ar(),
      yF = 1 / 0,
      bF =
        qa && 1 / gF(new qa([, -0]))[1] == yF
          ? function (e) {
              return new qa(e);
            }
          : hF;
    X0.exports = bF;
  });
  var td = C((PL, ed) => {
    s();
    l();
    c();
    var DF = Kn(),
      EF = V0(),
      AF = Y0(),
      CF = Yn(),
      vF = Q0(),
      xF = Ar(),
      FF = 200;
    function SF(e, t, r) {
      var n = -1,
        a = EF,
        u = e.length,
        o = !0,
        i = [],
        p = i;
      if (r) (o = !1), (a = AF);
      else if (u >= FF) {
        var f = t ? null : vF(e);
        if (f) return xF(f);
        (o = !1), (a = CF), (p = new DF());
      } else p = t ? [] : i;
      e: for (; ++n < u; ) {
        var E = e[n],
          v = t ? t(E) : E;
        if (((E = r || E !== 0 ? E : 0), o && v === v)) {
          for (var h = p.length; h--; ) if (p[h] === v) continue e;
          t && p.push(v), i.push(E);
        } else a(p, v, r) || (p !== i && p.push(v), i.push(E));
      }
      return i;
    }
    ed.exports = SF;
  });
  var nd = C((jL, rd) => {
    s();
    l();
    c();
    var BF = td();
    function wF(e) {
      return e && e.length ? BF(e) : [];
    }
    rd.exports = wF;
  });
  var ud = C((HL, ad) => {
    s();
    l();
    c();
    function TF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    ad.exports = TF;
  });
  var Zt = C((VL, od) => {
    s();
    l();
    c();
    var RF = Nr(),
      kF = Pr();
    function OF(e, t, r, n) {
      var a = !r;
      r || (r = {});
      for (var u = -1, o = t.length; ++u < o; ) {
        var i = t[u],
          p = n ? n(r[i], e[i], i, r, e) : void 0;
        p === void 0 && (p = e[i]), a ? kF(r, i, p) : RF(r, i, p);
      }
      return r;
    }
    od.exports = OF;
  });
  var sd = C((ZL, id) => {
    s();
    l();
    c();
    var IF = Zt(),
      _F = bt();
    function PF(e, t) {
      return e && IF(t, _F(t), e);
    }
    id.exports = PF;
  });
  var cd = C((tz, ld) => {
    s();
    l();
    c();
    var NF = Zt(),
      MF = qr();
    function qF(e, t) {
      return e && NF(t, MF(t), e);
    }
    ld.exports = qF;
  });
  var hd = C((Xt, vt) => {
    s();
    l();
    c();
    var jF = ve(),
      md = typeof Xt == 'object' && Xt && !Xt.nodeType && Xt,
      dd = md && typeof vt == 'object' && vt && !vt.nodeType && vt,
      LF = dd && dd.exports === md,
      pd = LF ? jF.Buffer : void 0,
      fd = pd ? pd.allocUnsafe : void 0;
    function zF(e, t) {
      if (t) return e.slice();
      var r = e.length,
        n = fd ? fd(r) : new e.constructor(r);
      return e.copy(n), n;
    }
    vt.exports = zF;
  });
  var yd = C((sz, gd) => {
    s();
    l();
    c();
    function $F(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    gd.exports = $F;
  });
  var Dd = C((pz, bd) => {
    s();
    l();
    c();
    var HF = Zt(),
      UF = vr();
    function GF(e, t) {
      return HF(e, UF(e), t);
    }
    bd.exports = GF;
  });
  var Ad = C((gz, Ed) => {
    s();
    l();
    c();
    var WF = Zt(),
      VF = Ca();
    function KF(e, t) {
      return WF(e, VF(e), t);
    }
    Ed.exports = KF;
  });
  var vd = C((Ez, Cd) => {
    s();
    l();
    c();
    var YF = Object.prototype,
      JF = YF.hasOwnProperty;
    function ZF(e) {
      var t = e.length,
        r = new e.constructor(t);
      return (
        t &&
          typeof e[0] == 'string' &&
          JF.call(e, 'index') &&
          ((r.index = e.index), (r.input = e.input)),
        r
      );
    }
    Cd.exports = ZF;
  });
  var Hr = C((xz, Fd) => {
    s();
    l();
    c();
    var xd = Zn();
    function XF(e) {
      var t = new e.constructor(e.byteLength);
      return new xd(t).set(new xd(e)), t;
    }
    Fd.exports = XF;
  });
  var Bd = C((wz, Sd) => {
    s();
    l();
    c();
    var QF = Hr();
    function e5(e, t) {
      var r = t ? QF(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    }
    Sd.exports = e5;
  });
  var Td = C((Oz, wd) => {
    s();
    l();
    c();
    var t5 = /\w*$/;
    function r5(e) {
      var t = new e.constructor(e.source, t5.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    }
    wd.exports = r5;
  });
  var _d = C((Nz, Id) => {
    s();
    l();
    c();
    var Rd = rt(),
      kd = Rd ? Rd.prototype : void 0,
      Od = kd ? kd.valueOf : void 0;
    function n5(e) {
      return Od ? Object(Od.call(e)) : {};
    }
    Id.exports = n5;
  });
  var Nd = C((Lz, Pd) => {
    s();
    l();
    c();
    var a5 = Hr();
    function u5(e, t) {
      var r = t ? a5(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    Pd.exports = u5;
  });
  var qd = C((Uz, Md) => {
    s();
    l();
    c();
    var o5 = Hr(),
      i5 = Bd(),
      s5 = Td(),
      l5 = _d(),
      c5 = Nd(),
      d5 = '[object Boolean]',
      p5 = '[object Date]',
      f5 = '[object Map]',
      m5 = '[object Number]',
      h5 = '[object RegExp]',
      g5 = '[object Set]',
      y5 = '[object String]',
      b5 = '[object Symbol]',
      D5 = '[object ArrayBuffer]',
      E5 = '[object DataView]',
      A5 = '[object Float32Array]',
      C5 = '[object Float64Array]',
      v5 = '[object Int8Array]',
      x5 = '[object Int16Array]',
      F5 = '[object Int32Array]',
      S5 = '[object Uint8Array]',
      B5 = '[object Uint8ClampedArray]',
      w5 = '[object Uint16Array]',
      T5 = '[object Uint32Array]';
    function R5(e, t, r) {
      var n = e.constructor;
      switch (t) {
        case D5:
          return o5(e);
        case d5:
        case p5:
          return new n(+e);
        case E5:
          return i5(e, r);
        case A5:
        case C5:
        case v5:
        case x5:
        case F5:
        case S5:
        case B5:
        case w5:
        case T5:
          return c5(e, r);
        case f5:
          return new n();
        case m5:
        case y5:
          return new n(e);
        case h5:
          return s5(e);
        case g5:
          return new n();
        case b5:
          return l5(e);
      }
    }
    Md.exports = R5;
  });
  var zd = C((Kz, Ld) => {
    s();
    l();
    c();
    var k5 = we(),
      jd = Object.create,
      O5 = (function () {
        function e() {}
        return function (t) {
          if (!k5(t)) return {};
          if (jd) return jd(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Ld.exports = O5;
  });
  var Hd = C((Xz, $d) => {
    s();
    l();
    c();
    var I5 = zd(),
      _5 = Mr(),
      P5 = Rr();
    function N5(e) {
      return typeof e.constructor == 'function' && !P5(e) ? I5(_5(e)) : {};
    }
    $d.exports = N5;
  });
  var Gd = C((r$, Ud) => {
    s();
    l();
    c();
    var M5 = Wt(),
      q5 = Le(),
      j5 = '[object Map]';
    function L5(e) {
      return q5(e) && M5(e) == j5;
    }
    Ud.exports = L5;
  });
  var Yd = C((o$, Kd) => {
    s();
    l();
    c();
    var z5 = Gd(),
      $5 = wr(),
      Wd = Tr(),
      Vd = Wd && Wd.isMap,
      H5 = Vd ? $5(Vd) : z5;
    Kd.exports = H5;
  });
  var Zd = C((c$, Jd) => {
    s();
    l();
    c();
    var U5 = Wt(),
      G5 = Le(),
      W5 = '[object Set]';
    function V5(e) {
      return G5(e) && U5(e) == W5;
    }
    Jd.exports = V5;
  });
  var tp = C((m$, ep) => {
    s();
    l();
    c();
    var K5 = Zd(),
      Y5 = wr(),
      Xd = Tr(),
      Qd = Xd && Xd.isSet,
      J5 = Qd ? Y5(Qd) : K5;
    ep.exports = J5;
  });
  var op = C((b$, up) => {
    s();
    l();
    c();
    var Z5 = Dr(),
      X5 = ud(),
      Q5 = Nr(),
      eS = sd(),
      tS = cd(),
      rS = hd(),
      nS = yd(),
      aS = Dd(),
      uS = Ad(),
      oS = oa(),
      iS = va(),
      sS = Wt(),
      lS = vd(),
      cS = qd(),
      dS = Hd(),
      pS = Te(),
      fS = Fr(),
      mS = Yd(),
      hS = we(),
      gS = tp(),
      yS = bt(),
      bS = qr(),
      DS = 1,
      ES = 2,
      AS = 4,
      rp = '[object Arguments]',
      CS = '[object Array]',
      vS = '[object Boolean]',
      xS = '[object Date]',
      FS = '[object Error]',
      np = '[object Function]',
      SS = '[object GeneratorFunction]',
      BS = '[object Map]',
      wS = '[object Number]',
      ap = '[object Object]',
      TS = '[object RegExp]',
      RS = '[object Set]',
      kS = '[object String]',
      OS = '[object Symbol]',
      IS = '[object WeakMap]',
      _S = '[object ArrayBuffer]',
      PS = '[object DataView]',
      NS = '[object Float32Array]',
      MS = '[object Float64Array]',
      qS = '[object Int8Array]',
      jS = '[object Int16Array]',
      LS = '[object Int32Array]',
      zS = '[object Uint8Array]',
      $S = '[object Uint8ClampedArray]',
      HS = '[object Uint16Array]',
      US = '[object Uint32Array]',
      te = {};
    te[rp] =
      te[CS] =
      te[_S] =
      te[PS] =
      te[vS] =
      te[xS] =
      te[NS] =
      te[MS] =
      te[qS] =
      te[jS] =
      te[LS] =
      te[BS] =
      te[wS] =
      te[ap] =
      te[TS] =
      te[RS] =
      te[kS] =
      te[OS] =
      te[zS] =
      te[$S] =
      te[HS] =
      te[US] =
        !0;
    te[FS] = te[np] = te[IS] = !1;
    function Ur(e, t, r, n, a, u) {
      var o,
        i = t & DS,
        p = t & ES,
        f = t & AS;
      if ((r && (o = a ? r(e, n, a, u) : r(e)), o !== void 0)) return o;
      if (!hS(e)) return e;
      var E = pS(e);
      if (E) {
        if (((o = lS(e)), !i)) return nS(e, o);
      } else {
        var v = sS(e),
          h = v == np || v == SS;
        if (fS(e)) return rS(e, i);
        if (v == ap || v == rp || (h && !a)) {
          if (((o = p || h ? {} : dS(e)), !i))
            return p ? uS(e, tS(o, e)) : aS(e, eS(o, e));
        } else {
          if (!te[v]) return a ? e : {};
          o = cS(e, v, i);
        }
      }
      u || (u = new Z5());
      var m = u.get(e);
      if (m) return m;
      u.set(e, o),
        gS(e)
          ? e.forEach(function (x) {
              o.add(Ur(x, t, r, x, e, u));
            })
          : mS(e) &&
            e.forEach(function (x, w) {
              o.set(w, Ur(x, t, r, w, e, u));
            });
      var A = f ? (p ? iS : oS) : p ? bS : yS,
        g = E ? void 0 : A(e);
      return (
        X5(g || e, function (x, w) {
          g && ((w = x), (x = e[w])), Q5(o, w, Ur(x, t, r, w, e, u));
        }),
        o
      );
    }
    up.exports = Ur;
  });
  var sp = C((C$, ip) => {
    s();
    l();
    c();
    var GS = op(),
      WS = 1,
      VS = 4;
    function KS(e) {
      return GS(e, WS | VS);
    }
    ip.exports = KS;
  });
  var dp = C((mH, cp) => {
    s();
    l();
    c();
    function XS(e) {
      return function (t, r, n) {
        for (var a = -1, u = Object(t), o = n(t), i = o.length; i--; ) {
          var p = o[e ? i : ++a];
          if (r(u[p], p, u) === !1) break;
        }
        return t;
      };
    }
    cp.exports = XS;
  });
  var fp = C((bH, pp) => {
    s();
    l();
    c();
    var QS = dp(),
      e3 = QS();
    pp.exports = e3;
  });
  var hp = C((CH, mp) => {
    s();
    l();
    c();
    var t3 = fp(),
      r3 = bt();
    function n3(e, t) {
      return e && t3(e, t, r3);
    }
    mp.exports = n3;
  });
  var it = C((SH, gp) => {
    s();
    l();
    c();
    var a3 = Pr(),
      u3 = hp(),
      o3 = Da();
    function i3(e, t) {
      var r = {};
      return (
        (t = o3(t, 3)),
        u3(e, function (n, a, u) {
          a3(r, a, t(n, a, u));
        }),
        r
      );
    }
    gp.exports = i3;
  });
  var bp = C((RH, yp) => {
    s();
    l();
    c();
    var s3 = Aa(),
      l3 = ya();
    function c3(e, t) {
      return s3(e, t, function (r, n) {
        return l3(e, n);
      });
    }
    yp.exports = c3;
  });
  var Cp = C((_H, Ap) => {
    s();
    l();
    c();
    var Dp = rt(),
      d3 = xr(),
      p3 = Te(),
      Ep = Dp ? Dp.isConcatSpreadable : void 0;
    function f3(e) {
      return p3(e) || d3(e) || !!(Ep && e && e[Ep]);
    }
    Ap.exports = f3;
  });
  var Fp = C((qH, xp) => {
    s();
    l();
    c();
    var m3 = Cr(),
      h3 = Cp();
    function vp(e, t, r, n, a) {
      var u = -1,
        o = e.length;
      for (r || (r = h3), a || (a = []); ++u < o; ) {
        var i = e[u];
        t > 0 && r(i)
          ? t > 1
            ? vp(i, t - 1, r, n, a)
            : m3(a, i)
          : n || (a[a.length] = i);
      }
      return a;
    }
    xp.exports = vp;
  });
  var Bp = C(($H, Sp) => {
    s();
    l();
    c();
    var g3 = Fp();
    function y3(e) {
      var t = e == null ? 0 : e.length;
      return t ? g3(e, 1) : [];
    }
    Sp.exports = y3;
  });
  var Tp = C((WH, wp) => {
    s();
    l();
    c();
    function b3(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    wp.exports = b3;
  });
  var Op = C((JH, kp) => {
    s();
    l();
    c();
    var D3 = Tp(),
      Rp = Math.max;
    function E3(e, t, r) {
      return (
        (t = Rp(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, u = Rp(n.length - t, 0), o = Array(u);
            ++a < u;

          )
            o[a] = n[t + a];
          a = -1;
          for (var i = Array(t + 1); ++a < t; ) i[a] = n[a];
          return (i[t] = r(o)), D3(e, this, i);
        }
      );
    }
    kp.exports = E3;
  });
  var _p = C((eU, Ip) => {
    s();
    l();
    c();
    function A3(e) {
      return function () {
        return e;
      };
    }
    Ip.exports = A3;
  });
  var Mp = C((aU, Np) => {
    s();
    l();
    c();
    var C3 = _p(),
      Pp = Ea(),
      v3 = ba(),
      x3 = Pp
        ? function (e, t) {
            return Pp(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: C3(t),
              writable: !0,
            });
          }
        : v3;
    Np.exports = x3;
  });
  var jp = C((sU, qp) => {
    s();
    l();
    c();
    var F3 = 800,
      S3 = 16,
      B3 = Date.now;
    function w3(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = B3(),
          a = S3 - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= F3) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    qp.exports = w3;
  });
  var zp = C((pU, Lp) => {
    s();
    l();
    c();
    var T3 = Mp(),
      R3 = jp(),
      k3 = R3(T3);
    Lp.exports = k3;
  });
  var Hp = C((gU, $p) => {
    s();
    l();
    c();
    var O3 = Bp(),
      I3 = Op(),
      _3 = zp();
    function P3(e) {
      return _3(I3(e, void 0, O3), e + '');
    }
    $p.exports = P3;
  });
  var Gp = C((EU, Up) => {
    s();
    l();
    c();
    var N3 = bp(),
      M3 = Hp(),
      q3 = M3(function (e, t) {
        return e == null ? {} : N3(e, t);
      });
    Up.exports = q3;
  });
  var Xp = C((xU, Zp) => {
    'use strict';
    s();
    l();
    c();
    function Vr(e) {
      return Array.prototype.slice.apply(e);
    }
    var Yp = 'pending',
      Wp = 'resolved',
      Vp = 'rejected';
    function K(e) {
      (this.status = Yp),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(
            this,
            this._continueWith.bind(this),
            this._failWith.bind(this)
          );
    }
    function Qt(e) {
      return e && typeof e.then == 'function';
    }
    function j3(e) {
      return e;
    }
    K.prototype = {
      then: function (e, t) {
        var r = K.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
            );
          if (t)
            try {
              var n = t(this._error);
              return Qt(n)
                ? (this._chainPromiseData(n, r), r)
                : K.resolve(n)._setParent(this);
            } catch (a) {
              return K.reject(a)._setParent(this);
            }
          return K.reject(this._error)._setParent(this);
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
          this._runResolutions(),
          r
        );
      },
      catch: function (e) {
        if (this._isResolved()) return K.resolve(this._data)._setParent(this);
        var t = K.unresolved()._setParent(this);
        return (
          this._continuations.push({ promise: t, catchFn: e }),
          this._runRejections(),
          t
        );
      },
      finally: function (e) {
        var t = !1;
        function r(n, a) {
          if (!t) {
            (t = !0), e || (e = j3);
            var u = e(n);
            return Qt(u)
              ? u.then(function () {
                  if (a) throw a;
                  return n;
                })
              : n;
          }
        }
        return this.then(function (n) {
          return r(n);
        }).catch(function (n) {
          return r(null, n);
        });
      },
      pause: function () {
        return (this._paused = !0), this;
      },
      resume: function () {
        var e = this._findFirstPaused();
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        );
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() };
            e.push(r);
          }
          return e;
        }, []);
      },
      _setParent: function (e) {
        if (this._parent) throw new Error('parent already set');
        return (this._parent = e), this;
      },
      _continueWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._data = e), t._setResolved());
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending();
        });
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused;
        });
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
        return r;
      },
      _failWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._error = e), t._setRejected());
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this;
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e);
                r._handleUserFunctionResult(a, n.promise);
              } catch (u) {
                n.promise.reject(u);
              }
            else n.promise.reject(e);
          });
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this;
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (u) {
                  r._handleResolutionError(u, n);
                }
              else n.promise && n.promise.resolve(t);
            }),
            Qt(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e);
            return;
          } catch (r) {
            e = r;
          }
        t.promise && t.promise.reject(e);
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this;
        return e
          .then(function (r) {
            (t._data = r), t._runResolutions();
          })
          .catch(function (r) {
            (t._error = r), t._setRejected(), t._runRejections();
          });
      },
      _handleUserFunctionResult: function (e, t) {
        Qt(e) ? this._chainPromiseData(e, t) : t.resolve(e);
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r);
        }).catch(function (r) {
          t.reject(r);
        });
      },
      _setResolved: function () {
        (this.status = Wp), this._paused || this._runResolutions();
      },
      _setRejected: function () {
        (this.status = Vp), this._paused || this._runRejections();
      },
      _isPending: function () {
        return this.status === Yp;
      },
      _isResolved: function () {
        return this.status === Wp;
      },
      _isRejected: function () {
        return this.status === Vp;
      },
    };
    K.resolve = function (e) {
      return new K(function (t, r) {
        Qt(e)
          ? e
              .then(function (n) {
                t(n);
              })
              .catch(function (n) {
                r(n);
              })
          : t(e);
      });
    };
    K.reject = function (e) {
      return new K(function (t, r) {
        r(e);
      });
    };
    K.unresolved = function () {
      return new K(function (e, t) {
        (this.resolve = e), (this.reject = t);
      });
    };
    K.all = function () {
      var e = Vr(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new K(function (t, r) {
              var n = [],
                a = 0,
                u = function () {
                  a === e.length && t(n);
                },
                o = !1,
                i = function (p) {
                  o || ((o = !0), r(p));
                };
              e.forEach(function (p, f) {
                K.resolve(p)
                  .then(function (E) {
                    (n[f] = E), (a += 1), u();
                  })
                  .catch(function (E) {
                    i(E);
                  });
              });
            })
          : K.resolve([])
      );
    };
    function Kp(e) {
      return typeof window < 'u' && 'AggregateError' in window
        ? new window.AggregateError(e)
        : { errors: e };
    }
    K.any = function () {
      var e = Vr(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new K(function (t, r) {
              var n = [],
                a = 0,
                u = function () {
                  a === e.length && r(Kp(n));
                },
                o = !1,
                i = function (p) {
                  o || ((o = !0), t(p));
                };
              e.forEach(function (p, f) {
                K.resolve(p)
                  .then(function (E) {
                    i(E);
                  })
                  .catch(function (E) {
                    (n[f] = E), (a += 1), u();
                  });
              });
            })
          : K.reject(Kp([]))
      );
    };
    K.allSettled = function () {
      var e = Vr(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new K(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  (n += 1), n === e.length && t(r);
                };
              e.forEach(function (u, o) {
                K.resolve(u)
                  .then(function (i) {
                    (r[o] = { status: 'fulfilled', value: i }), a();
                  })
                  .catch(function (i) {
                    (r[o] = { status: 'rejected', reason: i }), a();
                  });
              });
            })
          : K.resolve([])
      );
    };
    if (Promise === K)
      throw new Error(
        'Please use SynchronousPromise.installGlobally() to install globally'
      );
    var Jp = Promise;
    K.installGlobally = function (e) {
      if (Promise === K) return e;
      var t = L3(e);
      return (Promise = K), t;
    };
    K.uninstallGlobally = function () {
      Promise === K && (Promise = Jp);
    };
    function L3(e) {
      if (typeof e > 'u' || e.__patched) return e;
      var t = e;
      return (
        (e = function () {
          var r = Jp;
          t.apply(this, Vr(arguments));
        }),
        (e.__patched = !0),
        e
      );
    }
    Zp.exports = { SynchronousPromise: K };
  });
  var za = C((NU, ef) => {
    s();
    l();
    c();
    var z3 = nt(),
      $3 = Mr(),
      H3 = Le(),
      U3 = '[object Object]',
      G3 = Function.prototype,
      W3 = Object.prototype,
      Qp = G3.toString,
      V3 = W3.hasOwnProperty,
      K3 = Qp.call(Object);
    function Y3(e) {
      if (!H3(e) || z3(e) != U3) return !1;
      var t = $3(e);
      if (t === null) return !0;
      var r = V3.call(t, 'constructor') && t.constructor;
      return typeof r == 'function' && r instanceof r && Qp.call(r) == K3;
    }
    ef.exports = Y3;
  });
  var rf = C((LU, tf) => {
    s();
    l();
    c();
    tf.exports = J3;
    function J3(e, t) {
      if ($a('noDeprecation')) return e;
      var r = !1;
      function n() {
        if (!r) {
          if ($a('throwDeprecation')) throw new Error(t);
          $a('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0);
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function $a(e) {
      try {
        if (!window.localStorage) return !1;
      } catch {
        return !1;
      }
      var t = window.localStorage[e];
      return t == null ? !1 : String(t).toLowerCase() === 'true';
    }
  });
  var af = C((UU, nf) => {
    'use strict';
    s();
    l();
    c();
    nf.exports = (e) => {
      let t = /^\\\\\?\\/.test(e),
        r = /[^\u0000-\u0080]+/.test(e);
      return t || r ? e : e.replace(/\\/g, '/');
    };
  });
  var ff = C((VG, pf) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      function e(o) {
        if (o == null) return !1;
        switch (o.type) {
          case 'ArrayExpression':
          case 'AssignmentExpression':
          case 'BinaryExpression':
          case 'CallExpression':
          case 'ConditionalExpression':
          case 'FunctionExpression':
          case 'Identifier':
          case 'Literal':
          case 'LogicalExpression':
          case 'MemberExpression':
          case 'NewExpression':
          case 'ObjectExpression':
          case 'SequenceExpression':
          case 'ThisExpression':
          case 'UnaryExpression':
          case 'UpdateExpression':
            return !0;
        }
        return !1;
      }
      function t(o) {
        if (o == null) return !1;
        switch (o.type) {
          case 'DoWhileStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'WhileStatement':
            return !0;
        }
        return !1;
      }
      function r(o) {
        if (o == null) return !1;
        switch (o.type) {
          case 'BlockStatement':
          case 'BreakStatement':
          case 'ContinueStatement':
          case 'DebuggerStatement':
          case 'DoWhileStatement':
          case 'EmptyStatement':
          case 'ExpressionStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'IfStatement':
          case 'LabeledStatement':
          case 'ReturnStatement':
          case 'SwitchStatement':
          case 'ThrowStatement':
          case 'TryStatement':
          case 'VariableDeclaration':
          case 'WhileStatement':
          case 'WithStatement':
            return !0;
        }
        return !1;
      }
      function n(o) {
        return r(o) || (o != null && o.type === 'FunctionDeclaration');
      }
      function a(o) {
        switch (o.type) {
          case 'IfStatement':
            return o.alternate != null ? o.alternate : o.consequent;
          case 'LabeledStatement':
          case 'ForStatement':
          case 'ForInStatement':
          case 'WhileStatement':
          case 'WithStatement':
            return o.body;
        }
        return null;
      }
      function u(o) {
        var i;
        if (o.type !== 'IfStatement' || o.alternate == null) return !1;
        i = o.consequent;
        do {
          if (i.type === 'IfStatement' && i.alternate == null) return !0;
          i = a(i);
        } while (i);
        return !1;
      }
      pf.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: u,
        trailingStatement: a,
      };
    })();
  });
  var Ga = C((ZG, mf) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      var e, t, r, n, a, u;
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        });
      function o(x) {
        return 48 <= x && x <= 57;
      }
      function i(x) {
        return (
          (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
        );
      }
      function p(x) {
        return x >= 48 && x <= 55;
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ];
      function f(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        );
      }
      function E(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233;
      }
      function v(x) {
        if (x <= 65535) return String.fromCharCode(x);
        var w = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          I = String.fromCharCode(((x - 65536) % 1024) + 56320);
        return w + I;
      }
      for (n = new Array(128), u = 0; u < 128; ++u)
        n[u] =
          (u >= 97 && u <= 122) || (u >= 65 && u <= 90) || u === 36 || u === 95;
      for (a = new Array(128), u = 0; u < 128; ++u)
        a[u] =
          (u >= 97 && u <= 122) ||
          (u >= 65 && u <= 90) ||
          (u >= 48 && u <= 57) ||
          u === 36 ||
          u === 95;
      function h(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(v(x));
      }
      function m(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(v(x));
      }
      function A(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(v(x));
      }
      function g(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(v(x));
      }
      mf.exports = {
        isDecimalDigit: o,
        isHexDigit: i,
        isOctalDigit: p,
        isWhiteSpace: f,
        isLineTerminator: E,
        isIdentifierStartES5: h,
        isIdentifierPartES5: m,
        isIdentifierStartES6: A,
        isIdentifierPartES6: g,
      };
    })();
  });
  var gf = C((tW, hf) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      var e = Ga();
      function t(h) {
        switch (h) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'let':
            return !0;
          default:
            return !1;
        }
      }
      function r(h, m) {
        return !m && h === 'yield' ? !1 : n(h, m);
      }
      function n(h, m) {
        if (m && t(h)) return !0;
        switch (h.length) {
          case 2:
            return h === 'if' || h === 'in' || h === 'do';
          case 3:
            return h === 'var' || h === 'for' || h === 'new' || h === 'try';
          case 4:
            return (
              h === 'this' ||
              h === 'else' ||
              h === 'case' ||
              h === 'void' ||
              h === 'with' ||
              h === 'enum'
            );
          case 5:
            return (
              h === 'while' ||
              h === 'break' ||
              h === 'catch' ||
              h === 'throw' ||
              h === 'const' ||
              h === 'yield' ||
              h === 'class' ||
              h === 'super'
            );
          case 6:
            return (
              h === 'return' ||
              h === 'typeof' ||
              h === 'delete' ||
              h === 'switch' ||
              h === 'export' ||
              h === 'import'
            );
          case 7:
            return h === 'default' || h === 'finally' || h === 'extends';
          case 8:
            return h === 'function' || h === 'continue' || h === 'debugger';
          case 10:
            return h === 'instanceof';
          default:
            return !1;
        }
      }
      function a(h, m) {
        return h === 'null' || h === 'true' || h === 'false' || r(h, m);
      }
      function u(h, m) {
        return h === 'null' || h === 'true' || h === 'false' || n(h, m);
      }
      function o(h) {
        return h === 'eval' || h === 'arguments';
      }
      function i(h) {
        var m, A, g;
        if (
          h.length === 0 ||
          ((g = h.charCodeAt(0)), !e.isIdentifierStartES5(g))
        )
          return !1;
        for (m = 1, A = h.length; m < A; ++m)
          if (((g = h.charCodeAt(m)), !e.isIdentifierPartES5(g))) return !1;
        return !0;
      }
      function p(h, m) {
        return (h - 55296) * 1024 + (m - 56320) + 65536;
      }
      function f(h) {
        var m, A, g, x, w;
        if (h.length === 0) return !1;
        for (w = e.isIdentifierStartES6, m = 0, A = h.length; m < A; ++m) {
          if (((g = h.charCodeAt(m)), 55296 <= g && g <= 56319)) {
            if (
              (++m,
              m >= A || ((x = h.charCodeAt(m)), !(56320 <= x && x <= 57343)))
            )
              return !1;
            g = p(g, x);
          }
          if (!w(g)) return !1;
          w = e.isIdentifierPartES6;
        }
        return !0;
      }
      function E(h, m) {
        return i(h) && !a(h, m);
      }
      function v(h, m) {
        return f(h) && !u(h, m);
      }
      hf.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: u,
        isRestrictedWord: o,
        isIdentifierNameES5: i,
        isIdentifierNameES6: f,
        isIdentifierES5: E,
        isIdentifierES6: v,
      };
    })();
  });
  var Wa = C((Jr) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      (Jr.ast = ff()), (Jr.code = Ga()), (Jr.keyword = gf());
    })();
  });
  var yf = C((lW, cB) => {
    cB.exports = {
      name: 'doctrine',
      description: 'JSDoc parser',
      homepage: 'https://github.com/eslint/doctrine',
      main: 'lib/doctrine.js',
      version: '3.0.0',
      engines: { node: '>=6.0.0' },
      directories: { lib: './lib' },
      files: ['lib'],
      maintainers: [
        {
          name: 'Nicholas C. Zakas',
          email: 'nicholas+npm@nczconsulting.com',
          web: 'https://www.nczonline.net',
        },
        {
          name: 'Yusuke Suzuki',
          email: 'utatane.tea@gmail.com',
          web: 'https://github.com/Constellation',
        },
      ],
      repository: 'eslint/doctrine',
      devDependencies: {
        coveralls: '^3.0.1',
        dateformat: '^1.0.11',
        eslint: '^1.10.3',
        'eslint-release': '^1.0.0',
        linefix: '^0.1.1',
        mocha: '^3.4.2',
        'npm-license': '^0.3.1',
        nyc: '^10.3.2',
        semver: '^5.0.3',
        shelljs: '^0.5.3',
        'shelljs-nodecli': '^0.1.1',
        should: '^5.0.1',
      },
      license: 'Apache-2.0',
      scripts: {
        pretest: 'npm run lint',
        test: 'nyc mocha',
        coveralls: 'nyc report --reporter=text-lcov | coveralls',
        lint: 'eslint lib/',
        'generate-release': 'eslint-generate-release',
        'generate-alpharelease': 'eslint-generate-prerelease alpha',
        'generate-betarelease': 'eslint-generate-prerelease beta',
        'generate-rcrelease': 'eslint-generate-prerelease rc',
        'publish-release': 'eslint-publish-release',
      },
      dependencies: { esutils: '^2.0.2' },
    };
  });
  var Df = C((cW, bf) => {
    s();
    l();
    c();
    function dB(e, t) {
      if (!Boolean(e)) throw new Error(t || 'unknown assertion error');
    }
    bf.exports = dB;
  });
  var Va = C((tr) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      var e;
      (e = yf().version), (tr.VERSION = e);
      function t(n) {
        (this.name = 'DoctrineError'), (this.message = n);
      }
      (t.prototype = (function () {
        var n = function () {};
        return (n.prototype = Error.prototype), new n();
      })()),
        (t.prototype.constructor = t),
        (tr.DoctrineError = t);
      function r(n) {
        throw new t(n);
      }
      (tr.throwError = r), (tr.assert = Df());
    })();
  });
  var Ef = C((rr) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      var e, t, r, n, a, u, o, i, p, f, E, v;
      (p = Wa()),
        (f = Va()),
        (e = {
          NullableLiteral: 'NullableLiteral',
          AllLiteral: 'AllLiteral',
          NullLiteral: 'NullLiteral',
          UndefinedLiteral: 'UndefinedLiteral',
          VoidLiteral: 'VoidLiteral',
          UnionType: 'UnionType',
          ArrayType: 'ArrayType',
          RecordType: 'RecordType',
          FieldType: 'FieldType',
          FunctionType: 'FunctionType',
          ParameterType: 'ParameterType',
          RestType: 'RestType',
          NonNullableType: 'NonNullableType',
          OptionalType: 'OptionalType',
          NullableType: 'NullableType',
          NameExpression: 'NameExpression',
          TypeApplication: 'TypeApplication',
          StringLiteralType: 'StringLiteralType',
          NumericLiteralType: 'NumericLiteralType',
          BooleanLiteralType: 'BooleanLiteralType',
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        });
      function h(S) {
        return (
          '><(){}[],:*|?!='.indexOf(String.fromCharCode(S)) === -1 &&
          !p.code.isWhiteSpace(S) &&
          !p.code.isLineTerminator(S)
        );
      }
      function m(S, T, R, B) {
        (this._previous = S),
          (this._index = T),
          (this._token = R),
          (this._value = B);
      }
      (m.prototype.restore = function () {
        (u = this._previous),
          (a = this._index),
          (o = this._token),
          (i = this._value);
      }),
        (m.save = function () {
          return new m(u, a, o, i);
        });
      function A(S, T) {
        return v && (S.range = [T[0] + E, T[1] + E]), S;
      }
      function g() {
        var S = r.charAt(a);
        return (a += 1), S;
      }
      function x(S) {
        var T,
          R,
          B,
          P = 0;
        for (R = S === 'u' ? 4 : 2, T = 0; T < R; ++T)
          if (a < n && p.code.isHexDigit(r.charCodeAt(a)))
            (B = g()),
              (P = P * 16 + '0123456789abcdef'.indexOf(B.toLowerCase()));
          else return '';
        return String.fromCharCode(P);
      }
      function w() {
        var S = '',
          T,
          R,
          B,
          P,
          M;
        for (T = r.charAt(a), ++a; a < n; )
          if (((R = g()), R === T)) {
            T = '';
            break;
          } else if (R === '\\')
            if (((R = g()), p.code.isLineTerminator(R.charCodeAt(0))))
              R === '\r' && r.charCodeAt(a) === 10 && ++a;
            else
              switch (R) {
                case 'n':
                  S += `
`;
                  break;
                case 'r':
                  S += '\r';
                  break;
                case 't':
                  S += '	';
                  break;
                case 'u':
                case 'x':
                  (M = a), (P = x(R)), P ? (S += P) : ((a = M), (S += R));
                  break;
                case 'b':
                  S += '\b';
                  break;
                case 'f':
                  S += '\f';
                  break;
                case 'v':
                  S += '\v';
                  break;
                default:
                  p.code.isOctalDigit(R.charCodeAt(0))
                    ? ((B = '01234567'.indexOf(R)),
                      a < n &&
                        p.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((B = B * 8 + '01234567'.indexOf(g())),
                        '0123'.indexOf(R) >= 0 &&
                          a < n &&
                          p.code.isOctalDigit(r.charCodeAt(a)) &&
                          (B = B * 8 + '01234567'.indexOf(g()))),
                      (S += String.fromCharCode(B)))
                    : (S += R);
                  break;
              }
          else {
            if (p.code.isLineTerminator(R.charCodeAt(0))) break;
            S += R;
          }
        return T !== '' && f.throwError('unexpected quote'), (i = S), t.STRING;
      }
      function I() {
        var S, T;
        if (((S = ''), (T = r.charCodeAt(a)), T !== 46)) {
          if (((S = g()), (T = r.charCodeAt(a)), S === '0')) {
            if (T === 120 || T === 88) {
              for (
                S += g();
                a < n && ((T = r.charCodeAt(a)), !!p.code.isHexDigit(T));

              )
                S += g();
              return (
                S.length <= 2 && f.throwError('unexpected token'),
                a < n &&
                  ((T = r.charCodeAt(a)),
                  p.code.isIdentifierStartES5(T) &&
                    f.throwError('unexpected token')),
                (i = parseInt(S, 16)),
                t.NUMBER
              );
            }
            if (p.code.isOctalDigit(T)) {
              for (
                S += g();
                a < n && ((T = r.charCodeAt(a)), !!p.code.isOctalDigit(T));

              )
                S += g();
              return (
                a < n &&
                  ((T = r.charCodeAt(a)),
                  (p.code.isIdentifierStartES5(T) ||
                    p.code.isDecimalDigit(T)) &&
                    f.throwError('unexpected token')),
                (i = parseInt(S, 8)),
                t.NUMBER
              );
            }
            p.code.isDecimalDigit(T) && f.throwError('unexpected token');
          }
          for (; a < n && ((T = r.charCodeAt(a)), !!p.code.isDecimalDigit(T)); )
            S += g();
        }
        if (T === 46)
          for (
            S += g();
            a < n && ((T = r.charCodeAt(a)), !!p.code.isDecimalDigit(T));

          )
            S += g();
        if (T === 101 || T === 69)
          if (
            ((S += g()),
            (T = r.charCodeAt(a)),
            (T === 43 || T === 45) && (S += g()),
            (T = r.charCodeAt(a)),
            p.code.isDecimalDigit(T))
          )
            for (
              S += g();
              a < n && ((T = r.charCodeAt(a)), !!p.code.isDecimalDigit(T));

            )
              S += g();
          else f.throwError('unexpected token');
        return (
          a < n &&
            ((T = r.charCodeAt(a)),
            p.code.isIdentifierStartES5(T) && f.throwError('unexpected token')),
          (i = parseFloat(S)),
          t.NUMBER
        );
      }
      function N() {
        var S, T;
        for (i = g(); a < n && h(r.charCodeAt(a)); ) {
          if (((S = r.charCodeAt(a)), S === 46)) {
            if (a + 1 >= n) return t.ILLEGAL;
            if (((T = r.charCodeAt(a + 1)), T === 60)) break;
          }
          i += g();
        }
        return t.NAME;
      }
      function z() {
        var S;
        for (u = a; a < n && p.code.isWhiteSpace(r.charCodeAt(a)); ) g();
        if (a >= n) return (o = t.EOF), o;
        switch (((S = r.charCodeAt(a)), S)) {
          case 39:
          case 34:
            return (o = w()), o;
          case 58:
            return g(), (o = t.COLON), o;
          case 44:
            return g(), (o = t.COMMA), o;
          case 40:
            return g(), (o = t.LPAREN), o;
          case 41:
            return g(), (o = t.RPAREN), o;
          case 91:
            return g(), (o = t.LBRACK), o;
          case 93:
            return g(), (o = t.RBRACK), o;
          case 123:
            return g(), (o = t.LBRACE), o;
          case 125:
            return g(), (o = t.RBRACE), o;
          case 46:
            if (a + 1 < n) {
              if (((S = r.charCodeAt(a + 1)), S === 60))
                return g(), g(), (o = t.DOT_LT), o;
              if (S === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return g(), g(), g(), (o = t.REST), o;
              if (p.code.isDecimalDigit(S)) return (o = I()), o;
            }
            return (o = t.ILLEGAL), o;
          case 60:
            return g(), (o = t.LT), o;
          case 62:
            return g(), (o = t.GT), o;
          case 42:
            return g(), (o = t.STAR), o;
          case 124:
            return g(), (o = t.PIPE), o;
          case 63:
            return g(), (o = t.QUESTION), o;
          case 33:
            return g(), (o = t.BANG), o;
          case 61:
            return g(), (o = t.EQUAL), o;
          case 45:
            return (o = I()), o;
          default:
            return p.code.isDecimalDigit(S)
              ? ((o = I()), o)
              : (f.assert(h(S)), (o = N()), o);
        }
      }
      function F(S, T) {
        f.assert(o === S, T || 'consumed token not matched'), z();
      }
      function _(S, T) {
        o !== S && f.throwError(T || 'unexpected token'), z();
      }
      function O() {
        var S,
          T = a - 1;
        if (
          (F(t.LPAREN, 'UnionType should start with ('),
          (S = []),
          o !== t.RPAREN)
        )
          for (; S.push(ge()), o !== t.RPAREN; ) _(t.PIPE);
        return (
          F(t.RPAREN, 'UnionType should end with )'),
          A({ type: e.UnionType, elements: S }, [T, u])
        );
      }
      function $() {
        var S,
          T = a - 1,
          R;
        for (
          F(t.LBRACK, 'ArrayType should start with ['), S = [];
          o !== t.RBRACK;

        ) {
          if (o === t.REST) {
            (R = a - 3),
              F(t.REST),
              S.push(A({ type: e.RestType, expression: ge() }, [R, u]));
            break;
          } else S.push(ge());
          o !== t.RBRACK && _(t.COMMA);
        }
        return _(t.RBRACK), A({ type: e.ArrayType, elements: S }, [T, u]);
      }
      function W() {
        var S = i;
        if (o === t.NAME || o === t.STRING) return z(), S;
        if (o === t.NUMBER) return F(t.NUMBER), String(S);
        f.throwError('unexpected token');
      }
      function j() {
        var S,
          T = u;
        return (
          (S = W()),
          o === t.COLON
            ? (F(t.COLON),
              A({ type: e.FieldType, key: S, value: ge() }, [T, u]))
            : A({ type: e.FieldType, key: S, value: null }, [T, u])
        );
      }
      function be() {
        var S,
          T = a - 1,
          R;
        if (
          (F(t.LBRACE, 'RecordType should start with {'),
          (S = []),
          o === t.COMMA)
        )
          F(t.COMMA);
        else for (; o !== t.RBRACE; ) S.push(j()), o !== t.RBRACE && _(t.COMMA);
        return (
          (R = a), _(t.RBRACE), A({ type: e.RecordType, fields: S }, [T, R])
        );
      }
      function xe() {
        var S = i,
          T = a - S.length;
        return (
          _(t.NAME),
          o === t.COLON &&
            (S === 'module' || S === 'external' || S === 'event') &&
            (F(t.COLON), (S += ':' + i), _(t.NAME)),
          A({ type: e.NameExpression, name: S }, [T, u])
        );
      }
      function Fe() {
        var S = [];
        for (S.push(ce()); o === t.COMMA; ) F(t.COMMA), S.push(ce());
        return S;
      }
      function Se() {
        var S,
          T,
          R = a - i.length;
        return (
          (S = xe()),
          o === t.DOT_LT || o === t.LT
            ? (z(),
              (T = Fe()),
              _(t.GT),
              A({ type: e.TypeApplication, expression: S, applications: T }, [
                R,
                u,
              ]))
            : S
        );
      }
      function X() {
        return (
          F(t.COLON, 'ResultType should start with :'),
          o === t.NAME && i === 'void'
            ? (F(t.NAME), { type: e.VoidLiteral })
            : ge()
        );
      }
      function He() {
        for (var S = [], T = !1, R, B = !1, P, M = a - 3, oe; o !== t.RPAREN; )
          o === t.REST && (F(t.REST), (B = !0)),
            (P = u),
            (R = ge()),
            R.type === e.NameExpression &&
              o === t.COLON &&
              ((oe = u - R.name.length),
              F(t.COLON),
              (R = A(
                { type: e.ParameterType, name: R.name, expression: ge() },
                [oe, u]
              ))),
            o === t.EQUAL
              ? (F(t.EQUAL),
                (R = A({ type: e.OptionalType, expression: R }, [P, u])),
                (T = !0))
              : T && f.throwError('unexpected token'),
            B && (R = A({ type: e.RestType, expression: R }, [M, u])),
            S.push(R),
            o !== t.RPAREN && _(t.COMMA);
        return S;
      }
      function Qe() {
        var S,
          T,
          R,
          B,
          P,
          M = a - i.length;
        return (
          f.assert(
            o === t.NAME && i === 'function',
            "FunctionType should start with 'function'"
          ),
          F(t.NAME),
          _(t.LPAREN),
          (S = !1),
          (R = []),
          (T = null),
          o !== t.RPAREN &&
            (o === t.NAME && (i === 'this' || i === 'new')
              ? ((S = i === 'new'),
                F(t.NAME),
                _(t.COLON),
                (T = Se()),
                o === t.COMMA && (F(t.COMMA), (R = He())))
              : (R = He())),
          _(t.RPAREN),
          (B = null),
          o === t.COLON && (B = X()),
          (P = A({ type: e.FunctionType, params: R, result: B }, [M, u])),
          T && ((P.this = T), S && (P.new = !0)),
          P
        );
      }
      function ke() {
        var S, T;
        switch (o) {
          case t.STAR:
            return F(t.STAR), A({ type: e.AllLiteral }, [u - 1, u]);
          case t.LPAREN:
            return O();
          case t.LBRACK:
            return $();
          case t.LBRACE:
            return be();
          case t.NAME:
            if (((T = a - i.length), i === 'null'))
              return F(t.NAME), A({ type: e.NullLiteral }, [T, u]);
            if (i === 'undefined')
              return F(t.NAME), A({ type: e.UndefinedLiteral }, [T, u]);
            if (i === 'true' || i === 'false')
              return (
                F(t.NAME),
                A({ type: e.BooleanLiteralType, value: i === 'true' }, [T, u])
              );
            if (((S = m.save()), i === 'function'))
              try {
                return Qe();
              } catch {
                S.restore();
              }
            return Se();
          case t.STRING:
            return (
              z(),
              A({ type: e.StringLiteralType, value: i }, [u - i.length - 2, u])
            );
          case t.NUMBER:
            return (
              z(),
              A({ type: e.NumericLiteralType, value: i }, [
                u - String(i).length,
                u,
              ])
            );
          default:
            f.throwError('unexpected token');
        }
      }
      function ge() {
        var S, T;
        return o === t.QUESTION
          ? ((T = a - 1),
            F(t.QUESTION),
            o === t.COMMA ||
            o === t.EQUAL ||
            o === t.RBRACE ||
            o === t.RPAREN ||
            o === t.PIPE ||
            o === t.EOF ||
            o === t.RBRACK ||
            o === t.GT
              ? A({ type: e.NullableLiteral }, [T, u])
              : A({ type: e.NullableType, expression: ke(), prefix: !0 }, [
                  T,
                  u,
                ]))
          : o === t.BANG
          ? ((T = a - 1),
            F(t.BANG),
            A({ type: e.NonNullableType, expression: ke(), prefix: !0 }, [
              T,
              u,
            ]))
          : ((T = u),
            (S = ke()),
            o === t.BANG
              ? (F(t.BANG),
                A({ type: e.NonNullableType, expression: S, prefix: !1 }, [
                  T,
                  u,
                ]))
              : o === t.QUESTION
              ? (F(t.QUESTION),
                A({ type: e.NullableType, expression: S, prefix: !1 }, [T, u]))
              : o === t.LBRACK
              ? (F(t.LBRACK),
                _(
                  t.RBRACK,
                  'expected an array-style type declaration (' + i + '[])'
                ),
                A(
                  {
                    type: e.TypeApplication,
                    expression: A({ type: e.NameExpression, name: 'Array' }, [
                      T,
                      u,
                    ]),
                    applications: [S],
                  },
                  [T, u]
                ))
              : S);
      }
      function ce() {
        var S, T;
        if (((S = ge()), o !== t.PIPE)) return S;
        for (T = [S], F(t.PIPE); T.push(ge()), o === t.PIPE; ) F(t.PIPE);
        return A({ type: e.UnionType, elements: T }, [0, a]);
      }
      function ir() {
        var S;
        return o === t.REST
          ? (F(t.REST), A({ type: e.RestType, expression: ce() }, [0, a]))
          : ((S = ce()),
            o === t.EQUAL
              ? (F(t.EQUAL), A({ type: e.OptionalType, expression: S }, [0, a]))
              : S);
      }
      function cn(S, T) {
        var R;
        return (
          (r = S),
          (n = r.length),
          (a = 0),
          (u = 0),
          (v = T && T.range),
          (E = (T && T.startIndex) || 0),
          z(),
          (R = ce()),
          T && T.midstream
            ? { expression: R, index: u }
            : (o !== t.EOF && f.throwError('not reach to EOF'), R)
        );
      }
      function Tt(S, T) {
        var R;
        return (
          (r = S),
          (n = r.length),
          (a = 0),
          (u = 0),
          (v = T && T.range),
          (E = (T && T.startIndex) || 0),
          z(),
          (R = ir()),
          T && T.midstream
            ? { expression: R, index: u }
            : (o !== t.EOF && f.throwError('not reach to EOF'), R)
        );
      }
      function U(S, T, R) {
        var B, P, M;
        switch (S.type) {
          case e.NullableLiteral:
            B = '?';
            break;
          case e.AllLiteral:
            B = '*';
            break;
          case e.NullLiteral:
            B = 'null';
            break;
          case e.UndefinedLiteral:
            B = 'undefined';
            break;
          case e.VoidLiteral:
            B = 'void';
            break;
          case e.UnionType:
            for (
              R ? (B = '') : (B = '('), P = 0, M = S.elements.length;
              P < M;
              ++P
            )
              (B += U(S.elements[P], T)), P + 1 !== M && (B += T ? '|' : ' | ');
            R || (B += ')');
            break;
          case e.ArrayType:
            for (B = '[', P = 0, M = S.elements.length; P < M; ++P)
              (B += U(S.elements[P], T)), P + 1 !== M && (B += T ? ',' : ', ');
            B += ']';
            break;
          case e.RecordType:
            for (B = '{', P = 0, M = S.fields.length; P < M; ++P)
              (B += U(S.fields[P], T)), P + 1 !== M && (B += T ? ',' : ', ');
            B += '}';
            break;
          case e.FieldType:
            S.value
              ? (B = S.key + (T ? ':' : ': ') + U(S.value, T))
              : (B = S.key);
            break;
          case e.FunctionType:
            for (
              B = T ? 'function(' : 'function (',
                S.this &&
                  (S.new
                    ? (B += T ? 'new:' : 'new: ')
                    : (B += T ? 'this:' : 'this: '),
                  (B += U(S.this, T)),
                  S.params.length !== 0 && (B += T ? ',' : ', ')),
                P = 0,
                M = S.params.length;
              P < M;
              ++P
            )
              (B += U(S.params[P], T)), P + 1 !== M && (B += T ? ',' : ', ');
            (B += ')'), S.result && (B += (T ? ':' : ': ') + U(S.result, T));
            break;
          case e.ParameterType:
            B = S.name + (T ? ':' : ': ') + U(S.expression, T);
            break;
          case e.RestType:
            (B = '...'), S.expression && (B += U(S.expression, T));
            break;
          case e.NonNullableType:
            S.prefix
              ? (B = '!' + U(S.expression, T))
              : (B = U(S.expression, T) + '!');
            break;
          case e.OptionalType:
            B = U(S.expression, T) + '=';
            break;
          case e.NullableType:
            S.prefix
              ? (B = '?' + U(S.expression, T))
              : (B = U(S.expression, T) + '?');
            break;
          case e.NameExpression:
            B = S.name;
            break;
          case e.TypeApplication:
            for (
              B = U(S.expression, T) + '.<', P = 0, M = S.applications.length;
              P < M;
              ++P
            )
              (B += U(S.applications[P], T)),
                P + 1 !== M && (B += T ? ',' : ', ');
            B += '>';
            break;
          case e.StringLiteralType:
            B = '"' + S.value + '"';
            break;
          case e.NumericLiteralType:
            B = String(S.value);
            break;
          case e.BooleanLiteralType:
            B = String(S.value);
            break;
          default:
            f.throwError('Unknown type ' + S.type);
        }
        return B;
      }
      function dn(S, T) {
        return T == null && (T = {}), U(S, T.compact, T.topLevel);
      }
      (rr.parseType = cn),
        (rr.parseParamType = Tt),
        (rr.stringify = dn),
        (rr.Syntax = e);
    })();
  });
  var Af = C((Pe) => {
    s();
    l();
    c();
    (function () {
      'use strict';
      var e, t, r, n, a;
      (n = Wa()), (e = Ef()), (t = Va());
      function u(F, _, O) {
        return F.slice(_, O);
      }
      a = (function () {
        var F = Object.prototype.hasOwnProperty;
        return function (O, $) {
          return F.call(O, $);
        };
      })();
      function o(F) {
        var _ = {},
          O;
        for (O in F) F.hasOwnProperty(O) && (_[O] = F[O]);
        return _;
      }
      function i(F) {
        return (
          (F >= 97 && F <= 122) || (F >= 65 && F <= 90) || (F >= 48 && F <= 57)
        );
      }
      function p(F) {
        return F === 'param' || F === 'argument' || F === 'arg';
      }
      function f(F) {
        return F === 'return' || F === 'returns';
      }
      function E(F) {
        return F === 'property' || F === 'prop';
      }
      function v(F) {
        return (
          p(F) ||
          E(F) ||
          F === 'alias' ||
          F === 'this' ||
          F === 'mixes' ||
          F === 'requires'
        );
      }
      function h(F) {
        return v(F) || F === 'const' || F === 'constant';
      }
      function m(F) {
        return E(F) || p(F);
      }
      function A(F) {
        return E(F) || p(F);
      }
      function g(F) {
        return (
          p(F) ||
          f(F) ||
          F === 'define' ||
          F === 'enum' ||
          F === 'implements' ||
          F === 'this' ||
          F === 'type' ||
          F === 'typedef' ||
          E(F)
        );
      }
      function x(F) {
        return (
          g(F) ||
          F === 'throws' ||
          F === 'const' ||
          F === 'constant' ||
          F === 'namespace' ||
          F === 'member' ||
          F === 'var' ||
          F === 'module' ||
          F === 'constructor' ||
          F === 'class' ||
          F === 'extends' ||
          F === 'augments' ||
          F === 'public' ||
          F === 'private' ||
          F === 'protected'
        );
      }
      var w =
          '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
        I =
          '(' +
          w +
          '*(?:\\*' +
          w +
          `?)?)(.+|[\r
\u2028\u2029])`;
      function N(F) {
        return F.replace(/^\/\*\*?/, '')
          .replace(/\*\/$/, '')
          .replace(new RegExp(I, 'g'), '$2')
          .replace(/\s*$/, '');
      }
      function z(F, _) {
        for (
          var O = F.replace(/^\/\*\*?/, ''), $ = 0, W = new RegExp(I, 'g'), j;
          (j = W.exec(O));

        )
          if ((($ += j[1].length), j.index + j[0].length > _ + $))
            return _ + $ + F.length - O.length;
        return F.replace(/\*\/$/, '').replace(/\s*$/, '').length;
      }
      (function (F) {
        var _, O, $, W, j, be, xe, Fe, Se;
        function X() {
          var R = j.charCodeAt(O);
          return (
            (O += 1),
            n.code.isLineTerminator(R) &&
              !(R === 13 && j.charCodeAt(O) === 10) &&
              ($ += 1),
            String.fromCharCode(R)
          );
        }
        function He() {
          var R = '';
          for (X(); O < W && i(j.charCodeAt(O)); ) R += X();
          return R;
        }
        function Qe() {
          var R,
            B,
            P = O;
          for (B = !1; P < W; ) {
            if (
              ((R = j.charCodeAt(P)),
              n.code.isLineTerminator(R) &&
                !(R === 13 && j.charCodeAt(P + 1) === 10))
            )
              B = !0;
            else if (B) {
              if (R === 64) break;
              n.code.isWhiteSpace(R) || (B = !1);
            }
            P += 1;
          }
          return P;
        }
        function ke(R, B, P) {
          for (var M, oe, Q, ye, Ue = !1; O < B; )
            if (((M = j.charCodeAt(O)), n.code.isWhiteSpace(M))) X();
            else if (M === 123) {
              X();
              break;
            } else {
              Ue = !0;
              break;
            }
          if (Ue) return null;
          for (oe = 1, Q = ''; O < B; )
            if (((M = j.charCodeAt(O)), n.code.isLineTerminator(M))) X();
            else {
              if (M === 125) {
                if (((oe -= 1), oe === 0)) {
                  X();
                  break;
                }
              } else M === 123 && (oe += 1);
              Q === '' && (ye = O), (Q += X());
            }
          return oe !== 0
            ? t.throwError('Braces are not balanced')
            : A(R)
            ? e.parseParamType(Q, { startIndex: Tt(ye), range: P })
            : e.parseType(Q, { startIndex: Tt(ye), range: P });
        }
        function ge(R) {
          var B;
          if (
            !n.code.isIdentifierStartES5(j.charCodeAt(O)) &&
            !j[O].match(/[0-9]/)
          )
            return null;
          for (B = X(); O < R && n.code.isIdentifierPartES5(j.charCodeAt(O)); )
            B += X();
          return B;
        }
        function ce(R) {
          for (
            ;
            O < R &&
            (n.code.isWhiteSpace(j.charCodeAt(O)) ||
              n.code.isLineTerminator(j.charCodeAt(O)));

          )
            X();
        }
        function ir(R, B, P) {
          var M = '',
            oe,
            Q;
          if ((ce(R), O >= R)) return null;
          if (j.charCodeAt(O) === 91)
            if (B) (oe = !0), (M = X());
            else return null;
          if (((M += ge(R)), P))
            for (
              j.charCodeAt(O) === 58 &&
                (M === 'module' || M === 'external' || M === 'event') &&
                ((M += X()), (M += ge(R))),
                j.charCodeAt(O) === 91 &&
                  j.charCodeAt(O + 1) === 93 &&
                  ((M += X()), (M += X()));
              j.charCodeAt(O) === 46 ||
              j.charCodeAt(O) === 47 ||
              j.charCodeAt(O) === 35 ||
              j.charCodeAt(O) === 45 ||
              j.charCodeAt(O) === 126;

            )
              (M += X()), (M += ge(R));
          if (oe) {
            if ((ce(R), j.charCodeAt(O) === 61)) {
              (M += X()), ce(R);
              for (var ye, Ue = 1; O < R; ) {
                if (
                  ((ye = j.charCodeAt(O)),
                  n.code.isWhiteSpace(ye) &&
                    (Q || (ce(R), (ye = j.charCodeAt(O)))),
                  ye === 39 && (Q ? Q === "'" && (Q = '') : (Q = "'")),
                  ye === 34 && (Q ? Q === '"' && (Q = '') : (Q = '"')),
                  ye === 91)
                )
                  Ue++;
                else if (ye === 93 && --Ue === 0) break;
                M += X();
              }
            }
            if ((ce(R), O >= R || j.charCodeAt(O) !== 93)) return null;
            M += X();
          }
          return M;
        }
        function cn() {
          for (; O < W && j.charCodeAt(O) !== 64; ) X();
          return O >= W ? !1 : (t.assert(j.charCodeAt(O) === 64), !0);
        }
        function Tt(R) {
          return j === be ? R : z(be, R);
        }
        function U(R, B) {
          (this._options = R),
            (this._title = B.toLowerCase()),
            (this._tag = { title: B, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = $),
            (this._first = O - B.length - 1),
            (this._last = 0),
            (this._extra = {});
        }
        (U.prototype.addError = function (B) {
          var P = Array.prototype.slice.call(arguments, 1),
            M = B.replace(/%(\d)/g, function (oe, Q) {
              return (
                t.assert(Q < P.length, 'Message reference must be in range'),
                P[Q]
              );
            });
          return (
            this._tag.errors || (this._tag.errors = []),
            Se && t.throwError(M),
            this._tag.errors.push(M),
            xe
          );
        }),
          (U.prototype.parseType = function () {
            if (g(this._title))
              try {
                if (
                  ((this._tag.type = ke(
                    this._title,
                    this._last,
                    this._options.range
                  )),
                  !this._tag.type &&
                    !p(this._title) &&
                    !f(this._title) &&
                    !this.addError('Missing or invalid tag type'))
                )
                  return !1;
              } catch (R) {
                if (((this._tag.type = null), !this.addError(R.message)))
                  return !1;
              }
            else if (x(this._title))
              try {
                this._tag.type = ke(
                  this._title,
                  this._last,
                  this._options.range
                );
              } catch {}
            return !0;
          }),
          (U.prototype._parseNamePath = function (R) {
            var B;
            return (
              (B = ir(this._last, Fe && A(this._title), !0)),
              !B && !R && !this.addError('Missing or invalid tag name')
                ? !1
                : ((this._tag.name = B), !0)
            );
          }),
          (U.prototype.parseNamePath = function () {
            return this._parseNamePath(!1);
          }),
          (U.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0);
          }),
          (U.prototype.parseName = function () {
            var R, B;
            if (h(this._title))
              if (
                ((this._tag.name = ir(
                  this._last,
                  Fe && A(this._title),
                  m(this._title)
                )),
                this._tag.name)
              )
                (B = this._tag.name),
                  B.charAt(0) === '[' &&
                    B.charAt(B.length - 1) === ']' &&
                    ((R = B.substring(1, B.length - 1).split('=')),
                    R.length > 1 && (this._tag.default = R.slice(1).join('=')),
                    (this._tag.name = R[0]),
                    this._tag.type &&
                      this._tag.type.type !== 'OptionalType' &&
                      (this._tag.type = {
                        type: 'OptionalType',
                        expression: this._tag.type,
                      }));
              else {
                if (!v(this._title)) return !0;
                if (p(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null);
                else if (!this.addError('Missing or invalid tag name'))
                  return !1;
              }
            return !0;
          }),
          (U.prototype.parseDescription = function () {
            var B = u(j, O, this._last).trim();
            return (
              B &&
                (/^-\s+/.test(B) && (B = B.substring(2)),
                (this._tag.description = B)),
              !0
            );
          }),
          (U.prototype.parseCaption = function () {
            var B = u(j, O, this._last).trim(),
              P = '<caption>',
              M = '</caption>',
              oe = B.indexOf(P),
              Q = B.indexOf(M);
            return (
              oe >= 0 && Q >= 0
                ? ((this._tag.caption = B.substring(oe + P.length, Q).trim()),
                  (this._tag.description = B.substring(Q + M.length).trim()))
                : (this._tag.description = B),
              !0
            );
          }),
          (U.prototype.parseKind = function () {
            var B, P;
            return (
              (P = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (B = u(j, O, this._last).trim()),
              (this._tag.kind = B),
              !(!a(P, B) && !this.addError("Invalid kind name '%0'", B))
            );
          }),
          (U.prototype.parseAccess = function () {
            var B;
            return (
              (B = u(j, O, this._last).trim()),
              (this._tag.access = B),
              !(
                B !== 'private' &&
                B !== 'protected' &&
                B !== 'public' &&
                !this.addError("Invalid access name '%0'", B)
              )
            );
          }),
          (U.prototype.parseThis = function () {
            var B = u(j, O, this._last).trim();
            if (B && B.charAt(0) === '{') {
              var P = this.parseType();
              return (P && this._tag.type.type === 'NameExpression') ||
                this._tag.type.type === 'UnionType'
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError('Invalid name for this');
            } else return this.parseNamePath();
          }),
          (U.prototype.parseVariation = function () {
            var B, P;
            return (
              (P = u(j, O, this._last).trim()),
              (B = parseFloat(P, 10)),
              (this._tag.variation = B),
              !(isNaN(B) && !this.addError("Invalid variation '%0'", P))
            );
          }),
          (U.prototype.ensureEnd = function () {
            var R = u(j, O, this._last).trim();
            return !(R && !this.addError("Unknown content '%0'", R));
          }),
          (U.prototype.epilogue = function () {
            var B;
            return (
              (B = this._tag.description),
              !(
                A(this._title) &&
                !this._tag.type &&
                B &&
                B.charAt(0) === '[' &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !Fe && !this.addError('Missing or invalid tag name'))
              )
            );
          }),
          (_ = {
            access: ['parseAccess'],
            alias: ['parseNamePath', 'ensureEnd'],
            augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            example: ['parseCaption'],
            deprecated: ['parseDescription'],
            global: ['ensureEnd'],
            inner: ['ensureEnd'],
            instance: ['ensureEnd'],
            kind: ['parseKind'],
            mixes: ['parseNamePath', 'ensureEnd'],
            mixin: ['parseNamePathOptional', 'ensureEnd'],
            member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            method: ['parseNamePathOptional', 'ensureEnd'],
            module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            func: ['parseNamePathOptional', 'ensureEnd'],
            function: ['parseNamePathOptional', 'ensureEnd'],
            var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            name: ['parseNamePath', 'ensureEnd'],
            namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            private: ['parseType', 'parseDescription'],
            protected: ['parseType', 'parseDescription'],
            public: ['parseType', 'parseDescription'],
            readonly: ['ensureEnd'],
            requires: ['parseNamePath', 'ensureEnd'],
            since: ['parseDescription'],
            static: ['ensureEnd'],
            summary: ['parseDescription'],
            this: ['parseThis', 'ensureEnd'],
            todo: ['parseDescription'],
            typedef: ['parseType', 'parseNamePathOptional'],
            variation: ['parseVariation'],
            version: ['parseDescription'],
          }),
          (U.prototype.parse = function () {
            var B, P, M, oe;
            if (!this._title && !this.addError('Missing or invalid title'))
              return null;
            for (
              this._last = Qe(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    j.slice(0, this._last).replace(/\s*$/, '').length,
                  ].map(Tt)),
                a(_, this._title)
                  ? (M = _[this._title])
                  : (M = [
                      'parseType',
                      'parseName',
                      'parseDescription',
                      'epilogue',
                    ]),
                B = 0,
                P = M.length;
              B < P;
              ++B
            )
              if (((oe = M[B]), !this[oe]())) return null;
            return this._tag;
          });
        function dn(R) {
          var B, P, M;
          if (!cn()) return null;
          for (B = He(), P = new U(R, B), M = P.parse(); O < P._last; ) X();
          return M;
        }
        function S(R) {
          var B = '',
            P,
            M;
          for (M = !0; O < W && ((P = j.charCodeAt(O)), !(M && P === 64)); )
            n.code.isLineTerminator(P)
              ? (M = !0)
              : M && !n.code.isWhiteSpace(P) && (M = !1),
              (B += X());
          return R ? B : B.trim();
        }
        function T(R, B) {
          var P = [],
            M,
            oe,
            Q,
            ye,
            Ue;
          if (
            (B === void 0 && (B = {}),
            typeof B.unwrap == 'boolean' && B.unwrap ? (j = N(R)) : (j = R),
            (be = R),
            B.tags)
          )
            if (Array.isArray(B.tags))
              for (Q = {}, ye = 0, Ue = B.tags.length; ye < Ue; ye++)
                typeof B.tags[ye] == 'string'
                  ? (Q[B.tags[ye]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + B.tags);
            else t.throwError('Invalid "tags" parameter: ' + B.tags);
          for (
            W = j.length,
              O = 0,
              $ = 0,
              xe = B.recoverable,
              Fe = B.sloppy,
              Se = B.strict,
              oe = S(B.preserveWhitespace);
            (M = dn(B)), !!M;

          )
            (!Q || Q.hasOwnProperty(M.title)) && P.push(M);
          return { description: oe, tags: P };
        }
        F.parse = T;
      })((r = {})),
        (Pe.version = t.VERSION),
        (Pe.parse = r.parse),
        (Pe.parseType = e.parseType),
        (Pe.parseParamType = e.parseParamType),
        (Pe.unwrapComment = N),
        (Pe.Syntax = o(e.Syntax)),
        (Pe.Error = t.DoctrineError),
        (Pe.type = {
          Syntax: Pe.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        });
    })();
  });
  function st() {
    return (st =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function Xa(e, t) {
    if (e == null) return {};
    var r,
      n,
      a = {},
      u = Object.keys(e);
    for (n = 0; n < u.length; n++) t.indexOf((r = u[n])) >= 0 || (a[r] = e[r]);
    return a;
  }
  function Ka(e) {
    var t = ie(e),
      r = ie(function (n) {
        t.current && t.current(n);
      });
    return (t.current = e), r.current;
  }
  function If(e, t, r) {
    var n = Ka(r),
      a = H(function () {
        return e.toHsva(t);
      }),
      u = a[0],
      o = a[1],
      i = ie({ color: t, hsva: u });
    Y(
      function () {
        if (!e.equal(t, i.current.color)) {
          var f = e.toHsva(t);
          (i.current = { hsva: f, color: t }), o(f);
        }
      },
      [t, e]
    ),
      Y(
        function () {
          var f;
          kf(u, i.current.hsva) ||
            e.equal((f = e.fromHsva(u)), i.current.color) ||
            ((i.current = { hsva: u, color: f }), n(f));
        },
        [u, e, n]
      );
    var p = ee(function (f) {
      o(function (E) {
        return Object.assign({}, E, f);
      });
    }, []);
    return [u, p];
  }
  var Ft,
    ar,
    Ya,
    vf,
    xf,
    Qa,
    ur,
    eu,
    he,
    hB,
    gB,
    Ja,
    yB,
    bB,
    DB,
    EB,
    Sf,
    Za,
    Qr,
    Bf,
    AB,
    Xr,
    CB,
    wf,
    Tf,
    Rf,
    kf,
    Of,
    vB,
    xB,
    FB,
    SB,
    Ff,
    _f,
    BB,
    wB,
    Pf,
    TB,
    Nf,
    RB,
    Mf,
    kB,
    qf,
    jf = Ne(() => {
      s();
      l();
      c();
      q();
      (Ft = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 1),
          e > r ? r : e < t ? t : e
        );
      }),
        (ar = function (e) {
          return 'touches' in e;
        }),
        (Ya = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        }),
        (vf = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = ar(t)
              ? (function (u, o) {
                  for (var i = 0; i < u.length; i++)
                    if (u[i].identifier === o) return u[i];
                  return u[0];
                })(t.touches, r)
              : t;
          return {
            left: Ft((a.pageX - (n.left + Ya(e).pageXOffset)) / n.width),
            top: Ft((a.pageY - (n.top + Ya(e).pageYOffset)) / n.height),
          };
        }),
        (xf = function (e) {
          !ar(e) && e.preventDefault();
        }),
        (Qa = d.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = Xa(e, ['onMove', 'onKey']),
            a = ie(null),
            u = Ka(t),
            o = Ka(r),
            i = ie(null),
            p = ie(!1),
            f = Me(
              function () {
                var m = function (x) {
                    xf(x),
                      (ar(x) ? x.touches.length > 0 : x.buttons > 0) &&
                      a.current
                        ? u(vf(a.current, x, i.current))
                        : g(!1);
                  },
                  A = function () {
                    return g(!1);
                  };
                function g(x) {
                  var w = p.current,
                    I = Ya(a.current),
                    N = x ? I.addEventListener : I.removeEventListener;
                  N(w ? 'touchmove' : 'mousemove', m),
                    N(w ? 'touchend' : 'mouseup', A);
                }
                return [
                  function (x) {
                    var w = x.nativeEvent,
                      I = a.current;
                    if (
                      I &&
                      (xf(w),
                      !(function (z, F) {
                        return F && !ar(z);
                      })(w, p.current) && I)
                    ) {
                      if (ar(w)) {
                        p.current = !0;
                        var N = w.changedTouches || [];
                        N.length && (i.current = N[0].identifier);
                      }
                      I.focus(), u(vf(I, w, i.current)), g(!0);
                    }
                  },
                  function (x) {
                    var w = x.which || x.keyCode;
                    w < 37 ||
                      w > 40 ||
                      (x.preventDefault(),
                      o({
                        left: w === 39 ? 0.05 : w === 37 ? -0.05 : 0,
                        top: w === 40 ? 0.05 : w === 38 ? -0.05 : 0,
                      }));
                  },
                  g,
                ];
              },
              [o, u]
            ),
            E = f[0],
            v = f[1],
            h = f[2];
          return (
            Y(
              function () {
                return h;
              },
              [h]
            ),
            d.createElement(
              'div',
              st({}, n, {
                onTouchStart: E,
                onMouseDown: E,
                className: 'react-colorful__interactive',
                ref: a,
                onKeyDown: v,
                tabIndex: 0,
                role: 'slider',
              })
            )
          );
        })),
        (ur = function (e) {
          return e.filter(Boolean).join(' ');
        }),
        (eu = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            u = ur(['react-colorful__pointer', e.className]);
          return d.createElement(
            'div',
            {
              className: u,
              style: { top: 100 * a + '%', left: 100 * r + '%' },
            },
            d.createElement('div', {
              className: 'react-colorful__pointer-fill',
              style: { backgroundColor: t },
            })
          );
        }),
        (he = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = Math.pow(10, t)),
            Math.round(r * e) / r
          );
        }),
        (hB = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (gB = function (e) {
          return wf(Ja(e));
        }),
        (Ja = function (e) {
          return (
            e[0] === '#' && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? he(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a:
                    e.length === 8
                      ? he(parseInt(e.substring(6, 8), 16) / 255, 2)
                      : 1,
                }
          );
        }),
        (yB = function (e, t) {
          return t === void 0 && (t = 'deg'), Number(e) * (hB[t] || 1);
        }),
        (bB = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? DB({
                h: yB(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (DB = function (e) {
          var t = e.s,
            r = e.l;
          return {
            h: e.h,
            s:
              (t *= (r < 50 ? r : 100 - r) / 100) > 0
                ? ((2 * t) / (r + t)) * 100
                : 0,
            v: r + t,
            a: e.a,
          };
        }),
        (EB = function (e) {
          return CB(Bf(e));
        }),
        (Sf = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100;
          return {
            h: he(e.h),
            s: he(
              a > 0 && a < 200
                ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                : 0
            ),
            l: he(a / 2),
            a: he(n, 2),
          };
        }),
        (Za = function (e) {
          var t = Sf(e);
          return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
        }),
        (Qr = function (e) {
          var t = Sf(e);
          return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')';
        }),
        (Bf = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a;
          (t = (t / 360) * 6), (r /= 100), (n /= 100);
          var u = Math.floor(t),
            o = n * (1 - r),
            i = n * (1 - (t - u) * r),
            p = n * (1 - (1 - t + u) * r),
            f = u % 6;
          return {
            r: he(255 * [n, i, o, o, p, n][f]),
            g: he(255 * [p, n, n, i, o, o][f]),
            b: he(255 * [o, o, p, n, n, i][f]),
            a: he(a, 2),
          };
        }),
        (AB = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? wf({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (Xr = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? '0' + t : t;
        }),
        (CB = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            u = a < 1 ? Xr(he(255 * a)) : '';
          return '#' + Xr(t) + Xr(r) + Xr(n) + u;
        }),
        (wf = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            u = Math.max(t, r, n),
            o = u - Math.min(t, r, n),
            i = o
              ? u === t
                ? (r - n) / o
                : u === r
                ? 2 + (n - t) / o
                : 4 + (t - r) / o
              : 0;
          return {
            h: he(60 * (i < 0 ? i + 6 : i)),
            s: he(u ? (o / u) * 100 : 0),
            v: he((u / 255) * 100),
            a,
          };
        }),
        (Tf = d.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = ur(['react-colorful__hue', e.className]);
          return d.createElement(
            'div',
            { className: n },
            d.createElement(
              Qa,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left });
                },
                onKey: function (a) {
                  r({ h: Ft(t + 360 * a.left, 0, 360) });
                },
                'aria-label': 'Hue',
                'aria-valuenow': he(t),
                'aria-valuemax': '360',
                'aria-valuemin': '0',
              },
              d.createElement(eu, {
                className: 'react-colorful__hue-pointer',
                left: t / 360,
                color: Za({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          );
        })),
        (Rf = d.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: Za({ h: t.h, s: 100, v: 100, a: 1 }) };
          return d.createElement(
            'div',
            { className: 'react-colorful__saturation', style: n },
            d.createElement(
              Qa,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top });
                },
                onKey: function (a) {
                  r({
                    s: Ft(t.s + 100 * a.left, 0, 100),
                    v: Ft(t.v - 100 * a.top, 0, 100),
                  });
                },
                'aria-label': 'Color',
                'aria-valuetext':
                  'Saturation ' + he(t.s) + '%, Brightness ' + he(t.v) + '%',
              },
              d.createElement(eu, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: Za(t),
              })
            )
          );
        })),
        (kf = function (e, t) {
          if (e === t) return !0;
          for (var r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }),
        (Of = function (e, t) {
          return e.replace(/\s/g, '') === t.replace(/\s/g, '');
        }),
        (vB = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || kf(Ja(e), Ja(t));
        });
      (FB = typeof window < 'u' ? ku : Y),
        (SB = function () {
          return (
            xB || (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
          );
        }),
        (Ff = new Map()),
        (_f = function (e) {
          FB(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !Ff.has(t)) {
              var r = t.createElement('style');
              (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Ff.set(t, r);
              var n = SB();
              n && r.setAttribute('nonce', n), t.head.appendChild(r);
            }
          }, []);
        }),
        (BB = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            u = e.onChange,
            o = Xa(e, ['className', 'colorModel', 'color', 'onChange']),
            i = ie(null);
          _f(i);
          var p = If(r, a, u),
            f = p[0],
            E = p[1],
            v = ur(['react-colorful', t]);
          return d.createElement(
            'div',
            st({}, o, { ref: i, className: v }),
            d.createElement(Rf, { hsva: f, onChange: E }),
            d.createElement(Tf, {
              hue: f.h,
              onChange: E,
              className: 'react-colorful__last-control',
            })
          );
        }),
        (wB = {
          defaultColor: '000',
          toHsva: gB,
          fromHsva: function (e) {
            return EB({ h: e.h, s: e.s, v: e.v, a: 1 });
          },
          equal: vB,
        }),
        (Pf = function (e) {
          return d.createElement(BB, st({}, e, { colorModel: wB }));
        }),
        (TB = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                'linear-gradient(90deg, ' +
                Qr(Object.assign({}, r, { a: 0 })) +
                ', ' +
                Qr(Object.assign({}, r, { a: 1 })) +
                ')',
            },
            u = ur(['react-colorful__alpha', t]),
            o = he(100 * r.a);
          return d.createElement(
            'div',
            { className: u },
            d.createElement('div', {
              className: 'react-colorful__alpha-gradient',
              style: a,
            }),
            d.createElement(
              Qa,
              {
                onMove: function (i) {
                  n({ a: i.left });
                },
                onKey: function (i) {
                  n({ a: Ft(r.a + i.left) });
                },
                'aria-label': 'Alpha',
                'aria-valuetext': o + '%',
                'aria-valuenow': o,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
              },
              d.createElement(eu, {
                className: 'react-colorful__alpha-pointer',
                left: r.a,
                color: Qr(r),
              })
            )
          );
        }),
        (Nf = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            u = e.onChange,
            o = Xa(e, ['className', 'colorModel', 'color', 'onChange']),
            i = ie(null);
          _f(i);
          var p = If(r, a, u),
            f = p[0],
            E = p[1],
            v = ur(['react-colorful', t]);
          return d.createElement(
            'div',
            st({}, o, { ref: i, className: v }),
            d.createElement(Rf, { hsva: f, onChange: E }),
            d.createElement(Tf, { hue: f.h, onChange: E }),
            d.createElement(TB, {
              hsva: f,
              onChange: E,
              className: 'react-colorful__last-control',
            })
          );
        }),
        (RB = {
          defaultColor: 'hsla(0, 0%, 0%, 1)',
          toHsva: bB,
          fromHsva: Qr,
          equal: Of,
        }),
        (Mf = function (e) {
          return d.createElement(Nf, st({}, e, { colorModel: RB }));
        }),
        (kB = {
          defaultColor: 'rgba(0, 0, 0, 1)',
          toHsva: AB,
          fromHsva: function (e) {
            var t = Bf(e);
            return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')';
          },
          equal: Of,
        }),
        (qf = function (e) {
          return d.createElement(Nf, st({}, e, { colorModel: kB }));
        });
    });
  var zf = C((MW, Lf) => {
    'use strict';
    s();
    l();
    c();
    Lf.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  });
  var tu = C((zW, Hf) => {
    s();
    l();
    c();
    var or = zf(),
      $f = {};
    for (let e of Object.keys(or)) $f[or[e]] = e;
    var L = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] },
    };
    Hf.exports = L;
    for (let e of Object.keys(L)) {
      if (!('channels' in L[e]))
        throw new Error('missing channels property: ' + e);
      if (!('labels' in L[e]))
        throw new Error('missing channel labels property: ' + e);
      if (L[e].labels.length !== L[e].channels)
        throw new Error('channel and label counts mismatch: ' + e);
      let { channels: t, labels: r } = L[e];
      delete L[e].channels,
        delete L[e].labels,
        Object.defineProperty(L[e], 'channels', { value: t }),
        Object.defineProperty(L[e], 'labels', { value: r });
    }
    L.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        u = Math.max(t, r, n),
        o = u - a,
        i,
        p;
      u === a
        ? (i = 0)
        : t === u
        ? (i = (r - n) / o)
        : r === u
        ? (i = 2 + (n - t) / o)
        : n === u && (i = 4 + (t - r) / o),
        (i = Math.min(i * 60, 360)),
        i < 0 && (i += 360);
      let f = (a + u) / 2;
      return (
        u === a
          ? (p = 0)
          : f <= 0.5
          ? (p = o / (u + a))
          : (p = o / (2 - u - a)),
        [i, p * 100, f * 100]
      );
    };
    L.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        u,
        o = e[0] / 255,
        i = e[1] / 255,
        p = e[2] / 255,
        f = Math.max(o, i, p),
        E = f - Math.min(o, i, p),
        v = function (h) {
          return (f - h) / 6 / E + 1 / 2;
        };
      return (
        E === 0
          ? ((a = 0), (u = 0))
          : ((u = E / f),
            (t = v(o)),
            (r = v(i)),
            (n = v(p)),
            o === f
              ? (a = n - r)
              : i === f
              ? (a = 1 / 3 + t - n)
              : p === f && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, u * 100, f * 100]
      );
    };
    L.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = L.rgb.hsl(e)[0],
        u = (1 / 255) * Math.min(t, Math.min(r, n));
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, u * 100, n * 100]
      );
    };
    L.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        u = (1 - t - a) / (1 - a) || 0,
        o = (1 - r - a) / (1 - a) || 0,
        i = (1 - n - a) / (1 - a) || 0;
      return [u * 100, o * 100, i * 100, a * 100];
    };
    function OB(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
    }
    L.rgb.keyword = function (e) {
      let t = $f[e];
      if (t) return t;
      let r = 1 / 0,
        n;
      for (let a of Object.keys(or)) {
        let u = or[a],
          o = OB(e, u);
        o < r && ((r = o), (n = a));
      }
      return n;
    };
    L.keyword.rgb = function (e) {
      return or[e];
    };
    L.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255;
      (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        u = t * 0.2126 + r * 0.7152 + n * 0.0722,
        o = t * 0.0193 + r * 0.1192 + n * 0.9505;
      return [a * 100, u * 100, o * 100];
    };
    L.rgb.lab = function (e) {
      let t = L.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2];
      (r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
      let u = 116 * n - 16,
        o = 500 * (r - n),
        i = 200 * (n - a);
      return [u, o, i];
    };
    L.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        u,
        o;
      if (r === 0) return (o = n * 255), [o, o, o];
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
      let i = 2 * n - a,
        p = [0, 0, 0];
      for (let f = 0; f < 3; f++)
        (u = t + (1 / 3) * -(f - 1)),
          u < 0 && u++,
          u > 1 && u--,
          6 * u < 1
            ? (o = i + (a - i) * 6 * u)
            : 2 * u < 1
            ? (o = a)
            : 3 * u < 2
            ? (o = i + (a - i) * (2 / 3 - u) * 6)
            : (o = i),
          (p[f] = o * 255);
      return p;
    };
    L.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        u = Math.max(n, 0.01);
      (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= u <= 1 ? u : 2 - u);
      let o = (n + r) / 2,
        i = n === 0 ? (2 * a) / (u + a) : (2 * r) / (n + r);
      return [t, i * 100, o * 100];
    };
    L.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        u = t - Math.floor(t),
        o = 255 * n * (1 - r),
        i = 255 * n * (1 - r * u),
        p = 255 * n * (1 - r * (1 - u));
      switch (((n *= 255), a)) {
        case 0:
          return [n, p, o];
        case 1:
          return [i, n, o];
        case 2:
          return [o, n, p];
        case 3:
          return [o, i, n];
        case 4:
          return [p, o, n];
        case 5:
          return [n, o, i];
      }
    };
    L.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        u,
        o;
      o = (2 - r) * n;
      let i = (2 - r) * a;
      return (
        (u = r * a),
        (u /= i <= 1 ? i : 2 - i),
        (u = u || 0),
        (o /= 2),
        [t, u * 100, o * 100]
      );
    };
    L.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        u;
      a > 1 && ((r /= a), (n /= a));
      let o = Math.floor(6 * t),
        i = 1 - n;
      (u = 6 * t - o), o & 1 && (u = 1 - u);
      let p = r + u * (i - r),
        f,
        E,
        v;
      switch (o) {
        default:
        case 6:
        case 0:
          (f = i), (E = p), (v = r);
          break;
        case 1:
          (f = p), (E = i), (v = r);
          break;
        case 2:
          (f = r), (E = i), (v = p);
          break;
        case 3:
          (f = r), (E = p), (v = i);
          break;
        case 4:
          (f = p), (E = r), (v = i);
          break;
        case 5:
          (f = i), (E = r), (v = p);
          break;
      }
      return [f * 255, E * 255, v * 255];
    };
    L.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        u = 1 - Math.min(1, t * (1 - a) + a),
        o = 1 - Math.min(1, r * (1 - a) + a),
        i = 1 - Math.min(1, n * (1 - a) + a);
      return [u * 255, o * 255, i * 255];
    };
    L.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        u,
        o;
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (u = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (o = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (u = Math.min(Math.max(0, u), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        [a * 255, u * 255, o * 255]
      );
    };
    L.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      (t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
      let a = 116 * r - 16,
        u = 500 * (t - r),
        o = 200 * (r - n);
      return [a, u, o];
    };
    L.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        u,
        o;
      (u = (t + 16) / 116), (a = r / 500 + u), (o = u - n / 200);
      let i = u ** 3,
        p = a ** 3,
        f = o ** 3;
      return (
        (u = i > 0.008856 ? i : (u - 16 / 116) / 7.787),
        (a = p > 0.008856 ? p : (a - 16 / 116) / 7.787),
        (o = f > 0.008856 ? f : (o - 16 / 116) / 7.787),
        (a *= 95.047),
        (u *= 100),
        (o *= 108.883),
        [a, u, o]
      );
    };
    L.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a;
      (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
      let o = Math.sqrt(r * r + n * n);
      return [t, o, a];
    };
    L.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        u = r * Math.cos(a),
        o = r * Math.sin(a);
      return [t, u, o];
    };
    L.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        u = t === null ? L.rgb.hsv(e)[2] : t;
      if (((u = Math.round(u / 50)), u === 0)) return 30;
      let o =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255));
      return u === 2 && (o += 60), o;
    };
    L.hsv.ansi16 = function (e) {
      return L.rgb.ansi16(L.hsv.rgb(e), e[2]);
    };
    L.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5);
    };
    L.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        u = ((t >> 2) & 1) * r * 255;
      return [n, a, u];
    };
    L.ansi256.rgb = function (e) {
      if (e >= 232) {
        let u = (e - 232) * 10 + 8;
        return [u, u, u];
      }
      e -= 16;
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255;
      return [r, n, a];
    };
    L.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase();
      return '000000'.substring(r.length) + r;
    };
    L.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      let r = t[0];
      t[0].length === 3 &&
        (r = r
          .split('')
          .map((i) => i + i)
          .join(''));
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        u = (n >> 8) & 255,
        o = n & 255;
      return [a, u, o];
    };
    L.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        u = Math.min(Math.min(t, r), n),
        o = a - u,
        i,
        p;
      return (
        o < 1 ? (i = u / (1 - o)) : (i = 0),
        o <= 0
          ? (p = 0)
          : a === t
          ? (p = ((r - n) / o) % 6)
          : a === r
          ? (p = 2 + (n - t) / o)
          : (p = 4 + (t - r) / o),
        (p /= 6),
        (p %= 1),
        [p * 360, o * 100, i * 100]
      );
    };
    L.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0;
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    L.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0;
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    L.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100;
      if (r === 0) return [n * 255, n * 255, n * 255];
      let a = [0, 0, 0],
        u = (t % 1) * 6,
        o = u % 1,
        i = 1 - o,
        p = 0;
      switch (Math.floor(u)) {
        case 0:
          (a[0] = 1), (a[1] = o), (a[2] = 0);
          break;
        case 1:
          (a[0] = i), (a[1] = 1), (a[2] = 0);
          break;
        case 2:
          (a[0] = 0), (a[1] = 1), (a[2] = o);
          break;
        case 3:
          (a[0] = 0), (a[1] = i), (a[2] = 1);
          break;
        case 4:
          (a[0] = o), (a[1] = 0), (a[2] = 1);
          break;
        default:
          (a[0] = 1), (a[1] = 0), (a[2] = i);
      }
      return (
        (p = (1 - r) * n),
        [(r * a[0] + p) * 255, (r * a[1] + p) * 255, (r * a[2] + p) * 255]
      );
    };
    L.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0;
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
    };
    L.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0;
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      );
    };
    L.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t);
      return [e[0], (n - t) * 100, (1 - n) * 100];
    };
    L.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        u = 0;
      return a < 1 && (u = (n - a) / (1 - a)), [e[0], a * 100, u * 100];
    };
    L.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    };
    L.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    };
    L.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    };
    L.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    L.gray.hsv = L.gray.hsl;
    L.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    L.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    L.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    L.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return '000000'.substring(n.length) + n;
    };
    L.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    };
  });
  var Gf = C((GW, Uf) => {
    s();
    l();
    c();
    var en = tu();
    function IB() {
      let e = {},
        t = Object.keys(en);
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = { distance: -1, parent: null };
      return e;
    }
    function _B(e) {
      let t = IB(),
        r = [e];
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(en[n]);
        for (let u = a.length, o = 0; o < u; o++) {
          let i = a[o],
            p = t[i];
          p.distance === -1 &&
            ((p.distance = t[n].distance + 1), (p.parent = n), r.unshift(i));
        }
      }
      return t;
    }
    function PB(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function NB(e, t) {
      let r = [t[e].parent, e],
        n = en[t[e].parent][e],
        a = t[e].parent;
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = PB(en[t[a].parent][a], n)),
          (a = t[a].parent);
      return (n.conversion = r), n;
    }
    Uf.exports = function (e) {
      let t = _B(e),
        r = {},
        n = Object.keys(t);
      for (let a = n.length, u = 0; u < a; u++) {
        let o = n[u];
        t[o].parent !== null && (r[o] = NB(o, t));
      }
      return r;
    };
  });
  var Vf = C((YW, Wf) => {
    s();
    l();
    c();
    var ru = tu(),
      MB = Gf(),
      St = {},
      qB = Object.keys(ru);
    function jB(e) {
      let t = function (...r) {
        let n = r[0];
        return n == null ? n : (n.length > 1 && (r = n), e(r));
      };
      return 'conversion' in e && (t.conversion = e.conversion), t;
    }
    function LB(e) {
      let t = function (...r) {
        let n = r[0];
        if (n == null) return n;
        n.length > 1 && (r = n);
        let a = e(r);
        if (typeof a == 'object')
          for (let u = a.length, o = 0; o < u; o++) a[o] = Math.round(a[o]);
        return a;
      };
      return 'conversion' in e && (t.conversion = e.conversion), t;
    }
    qB.forEach((e) => {
      (St[e] = {}),
        Object.defineProperty(St[e], 'channels', { value: ru[e].channels }),
        Object.defineProperty(St[e], 'labels', { value: ru[e].labels });
      let t = MB(e);
      Object.keys(t).forEach((n) => {
        let a = t[n];
        (St[e][n] = LB(a)), (St[e][n].raw = jB(a));
      });
    });
    Wf.exports = St;
  });
  var Yf = C((QW, Kf) => {
    s();
    l();
    c();
    var zB = ve(),
      $B = function () {
        return zB.Date.now();
      };
    Kf.exports = $B;
  });
  var Zf = C((nV, Jf) => {
    s();
    l();
    c();
    var HB = /\s/;
    function UB(e) {
      for (var t = e.length; t-- && HB.test(e.charAt(t)); );
      return t;
    }
    Jf.exports = UB;
  });
  var Qf = C((iV, Xf) => {
    s();
    l();
    c();
    var GB = Zf(),
      WB = /^\s+/;
    function VB(e) {
      return e && e.slice(0, GB(e) + 1).replace(WB, '');
    }
    Xf.exports = VB;
  });
  var nm = C((dV, rm) => {
    s();
    l();
    c();
    var KB = Qf(),
      em = we(),
      YB = Vt(),
      tm = 0 / 0,
      JB = /^[-+]0x[0-9a-f]+$/i,
      ZB = /^0b[01]+$/i,
      XB = /^0o[0-7]+$/i,
      QB = parseInt;
    function ew(e) {
      if (typeof e == 'number') return e;
      if (YB(e)) return tm;
      if (em(e)) {
        var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
        e = em(t) ? t + '' : t;
      }
      if (typeof e != 'string') return e === 0 ? e : +e;
      e = KB(e);
      var r = ZB.test(e);
      return r || XB.test(e) ? QB(e.slice(2), r ? 2 : 8) : JB.test(e) ? tm : +e;
    }
    rm.exports = ew;
  });
  var om = C((hV, um) => {
    s();
    l();
    c();
    var tw = we(),
      nu = Yf(),
      am = nm(),
      rw = 'Expected a function',
      nw = Math.max,
      aw = Math.min;
    function uw(e, t, r) {
      var n,
        a,
        u,
        o,
        i,
        p,
        f = 0,
        E = !1,
        v = !1,
        h = !0;
      if (typeof e != 'function') throw new TypeError(rw);
      (t = am(t) || 0),
        tw(r) &&
          ((E = !!r.leading),
          (v = 'maxWait' in r),
          (u = v ? nw(am(r.maxWait) || 0, t) : u),
          (h = 'trailing' in r ? !!r.trailing : h));
      function m(_) {
        var O = n,
          $ = a;
        return (n = a = void 0), (f = _), (o = e.apply($, O)), o;
      }
      function A(_) {
        return (f = _), (i = setTimeout(w, t)), E ? m(_) : o;
      }
      function g(_) {
        var O = _ - p,
          $ = _ - f,
          W = t - O;
        return v ? aw(W, u - $) : W;
      }
      function x(_) {
        var O = _ - p,
          $ = _ - f;
        return p === void 0 || O >= t || O < 0 || (v && $ >= u);
      }
      function w() {
        var _ = nu();
        if (x(_)) return I(_);
        i = setTimeout(w, g(_));
      }
      function I(_) {
        return (i = void 0), h && n ? m(_) : ((n = a = void 0), o);
      }
      function N() {
        i !== void 0 && clearTimeout(i), (f = 0), (n = p = a = i = void 0);
      }
      function z() {
        return i === void 0 ? o : I(nu());
      }
      function F() {
        var _ = nu(),
          O = x(_);
        if (((n = arguments), (a = this), (p = _), O)) {
          if (i === void 0) return A(p);
          if (v) return clearTimeout(i), (i = setTimeout(w, t)), m(p);
        }
        return i === void 0 && (i = setTimeout(w, t)), o;
      }
      return (F.cancel = N), (F.flush = z), F;
    }
    um.exports = uw;
  });
  var sm = C((DV, im) => {
    s();
    l();
    c();
    var ow = om(),
      iw = we(),
      sw = 'Expected a function';
    function lw(e, t, r) {
      var n = !0,
        a = !0;
      if (typeof e != 'function') throw new TypeError(sw);
      return (
        iw(r) &&
          ((n = 'leading' in r ? !!r.leading : n),
          (a = 'trailing' in r ? !!r.trailing : a)),
        ow(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    im.exports = lw;
  });
  var mm = {};
  Bu(mm, { ColorControl: () => fm, default: () => Bw });
  var Ce,
    dm,
    cw,
    dw,
    pw,
    fw,
    mw,
    hw,
    gw,
    lm,
    yw,
    bw,
    pm,
    tn,
    Dw,
    Ew,
    Aw,
    au,
    Cw,
    vw,
    rn,
    cm,
    Bt,
    xw,
    Fw,
    nn,
    Sw,
    fm,
    Bw,
    hm = Ne(() => {
      s();
      l();
      c();
      In();
      q();
      jf();
      (Ce = ae(Vf(), 1)), (dm = ae(sm(), 1));
      Z();
      J();
      (cw = k.div({ position: 'relative', maxWidth: 250 })),
        (dw = k(lr)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
        (pw = k.div({
          width: 200,
          margin: 5,
          '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
          '.react-colorful__hue': {
            boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
          },
          '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
        })),
        (fw = k(Bn)(({ theme: e }) => ({
          fontFamily: e.typography.fonts.base,
        }))),
        (mw = k.div({
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (hw = k.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (gw = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (lm = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let u = `linear-gradient(${e}, ${e}), ${gw}, linear-gradient(#fff, #fff)`;
          return d.createElement(hw, {
            ...a,
            active: t,
            onClick: r,
            style: { ...n, backgroundImage: u },
          });
        }),
        (yw = k(de.Input)(({ theme: e }) => ({
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: 'border-box',
          fontFamily: e.typography.fonts.base,
        }))),
        (bw = k(fe)(({ theme: e }) => ({
          position: 'absolute',
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: 'border-box',
          cursor: 'pointer',
          color: e.input.color,
        }))),
        (pm = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
          pm || {}
        )),
        (tn = Object.values(pm)),
        (Dw = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (Ew =
          /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (Aw =
          /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (au = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (Cw = /^\s*#?([0-9a-f]{3})\s*$/i),
        (vw = { hex: Pf, rgb: qf, hsl: Mf }),
        (rn = {
          hex: 'transparent',
          rgb: 'rgba(0, 0, 0, 0)',
          hsl: 'hsla(0, 0%, 0%, 0)',
        }),
        (cm = (e) => {
          let t = e?.match(Dw);
          if (!t) return [0, 0, 0, 1];
          let [, r, n, a, u = 1] = t;
          return [r, n, a, u].map(Number);
        }),
        (Bt = (e) => {
          if (!e) return;
          let t = !0;
          if (Ew.test(e)) {
            let [o, i, p, f] = cm(e),
              [E, v, h] = Ce.default.rgb.hsl([o, i, p]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Ce.default.rgb.keyword([o, i, p]),
              colorSpace: 'rgb',
              rgb: e,
              hsl: `hsla(${E}, ${v}%, ${h}%, ${f})`,
              hex: `#${Ce.default.rgb.hex([o, i, p]).toLowerCase()}`,
            };
          }
          if (Aw.test(e)) {
            let [o, i, p, f] = cm(e),
              [E, v, h] = Ce.default.hsl.rgb([o, i, p]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Ce.default.hsl.keyword([o, i, p]),
              colorSpace: 'hsl',
              rgb: `rgba(${E}, ${v}, ${h}, ${f})`,
              hsl: e,
              hex: `#${Ce.default.hsl.hex([o, i, p]).toLowerCase()}`,
            };
          }
          let r = e.replace('#', ''),
            n = Ce.default.keyword.rgb(r) || Ce.default.hex.rgb(r),
            a = Ce.default.rgb.hsl(n),
            u = e;
          if (
            (/[^#a-f0-9]/i.test(e) ? (u = r) : au.test(e) && (u = `#${r}`),
            u.startsWith('#'))
          )
            t = au.test(u);
          else
            try {
              Ce.default.keyword.hex(u);
            } catch {
              t = !1;
            }
          return {
            valid: t,
            value: u,
            keyword: Ce.default.rgb.keyword(n),
            colorSpace: 'hex',
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: u,
          };
        }),
        (xw = (e, t, r) => {
          if (!e || !t?.valid) return rn[r];
          if (r !== 'hex') return t?.[r] || rn[r];
          if (!t.hex.startsWith('#'))
            try {
              return `#${Ce.default.keyword.hex(t.hex)}`;
            } catch {
              return rn.hex;
            }
          let n = t.hex.match(Cw);
          if (!n) return au.test(t.hex) ? t.hex : rn.hex;
          let [a, u, o] = n[1].split('');
          return `#${a}${a}${u}${u}${o}${o}`;
        }),
        (Fw = (e, t) => {
          let [r, n] = H(e || ''),
            [a, u] = H(() => Bt(r)),
            [o, i] = H(a?.colorSpace || 'hex');
          Y(() => {
            let v = e || '',
              h = Bt(v);
            n(v), u(h), i(h?.colorSpace || 'hex');
          }, [e]);
          let p = Me(() => xw(r, a, o).toLowerCase(), [r, a, o]),
            f = ee(
              (v) => {
                let h = Bt(v),
                  m = h?.value || v || '';
                n(m),
                  m === '' && (u(void 0), t(void 0)),
                  h && (u(h), i(h.colorSpace), t(h.value));
              },
              [t]
            ),
            E = ee(() => {
              let v = tn.indexOf(o) + 1;
              v >= tn.length && (v = 0), i(tn[v]);
              let h = a?.[tn[v]] || '';
              n(h), t(h);
            }, [a, o, t]);
          return {
            value: r,
            realValue: p,
            updateValue: f,
            color: a,
            colorSpace: o,
            cycleColorSpace: E,
          };
        }),
        (nn = (e) => e.replace(/\s*/, '').toLowerCase()),
        (Sw = (e, t, r) => {
          let [n, a] = H(t?.valid ? [t] : []);
          Y(() => {
            t === void 0 && a([]);
          }, [t]);
          let u = Me(
              () =>
                (e || [])
                  .map((i) =>
                    typeof i == 'string'
                      ? Bt(i)
                      : i.title
                      ? { ...Bt(i.color), keyword: i.title }
                      : Bt(i.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            o = ee(
              (i) => {
                i?.valid &&
                  (u.some((p) => nn(p[r]) === nn(i[r])) ||
                    a((p) => p.concat(i)));
              },
              [r, u]
            );
          return { presets: u, addPreset: o };
        }),
        (fm = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: u,
          startOpen: o = !1,
        }) => {
          let i = ee((0, dm.default)(r, 200), [r]),
            {
              value: p,
              realValue: f,
              updateValue: E,
              color: v,
              colorSpace: h,
              cycleColorSpace: m,
            } = Fw(t, i),
            { presets: A, addPreset: g } = Sw(u, v, h),
            x = vw[h];
          return d.createElement(
            cw,
            null,
            d.createElement(
              dw,
              {
                trigger: 'click',
                startOpen: o,
                closeOnOutsideClick: !0,
                onVisibleChange: () => g(v),
                tooltip: d.createElement(
                  pw,
                  null,
                  d.createElement(x, {
                    color: f === 'transparent' ? '#000000' : f,
                    onChange: E,
                    onFocus: n,
                    onBlur: a,
                  }),
                  A.length > 0 &&
                    d.createElement(
                      mw,
                      null,
                      A.map((w, I) =>
                        d.createElement(
                          lr,
                          {
                            key: `${w.value}-${I}`,
                            hasChrome: !1,
                            tooltip: d.createElement(fw, {
                              note: w.keyword || w.value,
                            }),
                          },
                          d.createElement(lm, {
                            value: w[h],
                            active: v && nn(w[h]) === nn(v[h]),
                            onClick: () => E(w.value),
                          })
                        )
                      )
                    )
                ),
              },
              d.createElement(lm, { value: f, style: { margin: 4 } })
            ),
            d.createElement(yw, {
              id: Ee(e),
              value: p,
              onChange: (w) => E(w.target.value),
              onFocus: (w) => w.target.select(),
              placeholder: 'Choose color...',
            }),
            p ? d.createElement(bw, { icon: 'markup', onClick: m }) : null
          );
        }),
        (Bw = fm);
    });
  s();
  l();
  c();
  s();
  l();
  c();
  s();
  l();
  c();
  s();
  l();
  c();
  var fn = 'addon-controls',
    mn = 'controls';
  q();
  s();
  l();
  c();
  var UT = __STORYBOOKAPI__,
    {
      ActiveTabs: GT,
      Consumer: WT,
      ManagerContext: VT,
      Provider: KT,
      addons: gn,
      combineParameters: YT,
      controlOrMetaKey: JT,
      controlOrMetaSymbol: ZT,
      eventMatchesShortcut: XT,
      eventToShortcut: QT,
      isMacLike: e4,
      isShortcutTaken: t4,
      keyToSymbol: r4,
      merge: n4,
      mockChannel: a4,
      optionOrAltSymbol: u4,
      shortcutMatchesShortcut: o4,
      shortcutToHumanString: i4,
      types: Ou,
      useAddonState: s4,
      useArgTypes: sr,
      useArgs: Iu,
      useChannel: l4,
      useGlobalTypes: c4,
      useGlobals: _u,
      useParameter: yn,
      useSharedState: d4,
      useStoryPrepared: p4,
      useStorybookApi: f4,
      useStorybookState: Pu,
    } = __STORYBOOKAPI__;
  J();
  q();
  s();
  l();
  c();
  In();
  q();
  Z();
  J();
  q();
  s();
  l();
  c();
  s();
  l();
  c();
  function Ve() {
    return (
      (Ve = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Ve.apply(this, arguments)
    );
  }
  s();
  l();
  c();
  function _n(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  s();
  l();
  c();
  s();
  l();
  c();
  function je(e, t) {
    return (
      (je = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n;
          }),
      je(e, t)
    );
  }
  function Pn(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      je(e, t);
  }
  s();
  l();
  c();
  s();
  l();
  c();
  function Pt(e) {
    return (
      (Pt = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      Pt(e)
    );
  }
  s();
  l();
  c();
  function Nn(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  s();
  l();
  c();
  s();
  l();
  c();
  function Mn() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function dt(e, t, r) {
    return (
      Mn()
        ? (dt = Reflect.construct.bind())
        : (dt = function (a, u, o) {
            var i = [null];
            i.push.apply(i, u);
            var p = Function.bind.apply(a, i),
              f = new p();
            return o && je(f, o.prototype), f;
          }),
      dt.apply(null, arguments)
    );
  }
  function Nt(e) {
    var t = typeof Map == 'function' ? new Map() : void 0;
    return (
      (Nt = function (n) {
        if (n === null || !Nn(n)) return n;
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n);
          t.set(n, a);
        }
        function a() {
          return dt(n, arguments, Pt(this).constructor);
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          je(a, n)
        );
      }),
      Nt(e)
    );
  }
  s();
  l();
  c();
  var Oe = (function (e) {
    Pn(t, e);
    function t(r) {
      var n;
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.'
          ) || this;
      else for (var a, u, o; o < a; o++);
      return _n(n);
    }
    return t;
  })(Nt(Error));
  function qn(e) {
    return Math.round(e * 255);
  }
  function Zh(e, t, r) {
    return qn(e) + ',' + qn(t) + ',' + qn(r);
  }
  function Mt(e, t, r, n) {
    if ((n === void 0 && (n = Zh), t === 0)) return n(r, r, r);
    var a = (((e % 360) + 360) % 360) / 60,
      u = (1 - Math.abs(2 * r - 1)) * t,
      o = u * (1 - Math.abs((a % 2) - 1)),
      i = 0,
      p = 0,
      f = 0;
    a >= 0 && a < 1
      ? ((i = u), (p = o))
      : a >= 1 && a < 2
      ? ((i = o), (p = u))
      : a >= 2 && a < 3
      ? ((p = u), (f = o))
      : a >= 3 && a < 4
      ? ((p = o), (f = u))
      : a >= 4 && a < 5
      ? ((i = o), (f = u))
      : a >= 5 && a < 6 && ((i = u), (f = o));
    var E = r - u / 2,
      v = i + E,
      h = p + E,
      m = f + E;
    return n(v, h, m);
  }
  var Lu = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  };
  function Xh(e) {
    if (typeof e != 'string') return e;
    var t = e.toLowerCase();
    return Lu[t] ? '#' + Lu[t] : e;
  }
  var Qh = /^#[a-fA-F0-9]{6}$/,
    eg = /^#[a-fA-F0-9]{8}$/,
    tg = /^#[a-fA-F0-9]{3}$/,
    rg = /^#[a-fA-F0-9]{4}$/,
    jn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    ng =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    ag =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    ug =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function fr(e) {
    if (typeof e != 'string') throw new Oe(3);
    var t = Xh(e);
    if (t.match(Qh))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      };
    if (t.match(eg)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      };
    }
    if (t.match(tg))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      };
    if (t.match(rg)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      };
    }
    var a = jn.exec(t);
    if (a)
      return {
        red: parseInt('' + a[1], 10),
        green: parseInt('' + a[2], 10),
        blue: parseInt('' + a[3], 10),
      };
    var u = ng.exec(t.substring(0, 50));
    if (u)
      return {
        red: parseInt('' + u[1], 10),
        green: parseInt('' + u[2], 10),
        blue: parseInt('' + u[3], 10),
        alpha:
          parseFloat('' + u[4]) > 1
            ? parseFloat('' + u[4]) / 100
            : parseFloat('' + u[4]),
      };
    var o = ag.exec(t);
    if (o) {
      var i = parseInt('' + o[1], 10),
        p = parseInt('' + o[2], 10) / 100,
        f = parseInt('' + o[3], 10) / 100,
        E = 'rgb(' + Mt(i, p, f) + ')',
        v = jn.exec(E);
      if (!v) throw new Oe(4, t, E);
      return {
        red: parseInt('' + v[1], 10),
        green: parseInt('' + v[2], 10),
        blue: parseInt('' + v[3], 10),
      };
    }
    var h = ug.exec(t.substring(0, 50));
    if (h) {
      var m = parseInt('' + h[1], 10),
        A = parseInt('' + h[2], 10) / 100,
        g = parseInt('' + h[3], 10) / 100,
        x = 'rgb(' + Mt(m, A, g) + ')',
        w = jn.exec(x);
      if (!w) throw new Oe(4, t, x);
      return {
        red: parseInt('' + w[1], 10),
        green: parseInt('' + w[2], 10),
        blue: parseInt('' + w[3], 10),
        alpha:
          parseFloat('' + h[4]) > 1
            ? parseFloat('' + h[4]) / 100
            : parseFloat('' + h[4]),
      };
    }
    throw new Oe(5);
  }
  function og(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      u = Math.min(t, r, n),
      o = (a + u) / 2;
    if (a === u)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: o, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: o };
    var i,
      p = a - u,
      f = o > 0.5 ? p / (2 - a - u) : p / (a + u);
    switch (a) {
      case t:
        i = (r - n) / p + (r < n ? 6 : 0);
        break;
      case r:
        i = (n - t) / p + 2;
        break;
      default:
        i = (t - r) / p + 4;
        break;
    }
    return (
      (i *= 60),
      e.alpha !== void 0
        ? { hue: i, saturation: f, lightness: o, alpha: e.alpha }
        : { hue: i, saturation: f, lightness: o }
    );
  }
  function zu(e) {
    return og(fr(e));
  }
  var ig = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t;
    },
    zn = ig;
  function tt(e) {
    var t = e.toString(16);
    return t.length === 1 ? '0' + t : t;
  }
  function Ln(e) {
    return tt(Math.round(e * 255));
  }
  function sg(e, t, r) {
    return zn('#' + Ln(e) + Ln(t) + Ln(r));
  }
  function pr(e, t, r) {
    return Mt(e, t, r, sg);
  }
  function lg(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return pr(e, t, r);
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return pr(e.hue, e.saturation, e.lightness);
    throw new Oe(1);
  }
  function cg(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? pr(e, t, r) : 'rgba(' + Mt(e, t, r) + ',' + n + ')';
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? pr(e.hue, e.saturation, e.lightness)
        : 'rgba(' + Mt(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
    throw new Oe(2);
  }
  function $n(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return zn('#' + tt(e) + tt(t) + tt(r));
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return zn('#' + tt(e.red) + tt(e.green) + tt(e.blue));
    throw new Oe(6);
  }
  function Ie(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var a = fr(e);
      return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? $n(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? $n(e.red, e.green, e.blue)
          : 'rgba(' +
              e.red +
              ',' +
              e.green +
              ',' +
              e.blue +
              ',' +
              e.alpha +
              ')';
    }
    throw new Oe(7);
  }
  var dg = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      );
    },
    pg = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      );
    },
    fg = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      );
    },
    mg = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      );
    };
  function $u(e) {
    if (typeof e != 'object') throw new Oe(8);
    if (pg(e)) return Ie(e);
    if (dg(e)) return $n(e);
    if (mg(e)) return cg(e);
    if (fg(e)) return lg(e);
    throw new Oe(8);
  }
  function Hu(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments));
      return a.length >= t ? e.apply(this, a) : Hu(e, t, a);
    };
  }
  function mr(e) {
    return Hu(e, e.length, []);
  }
  function hr(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function hg(e, t) {
    if (t === 'transparent') return t;
    var r = zu(t);
    return $u(Ve({}, r, { lightness: hr(0, 1, r.lightness - parseFloat(e)) }));
  }
  var gg = mr(hg),
    De = gg;
  function yg(e, t) {
    if (t === 'transparent') return t;
    var r = zu(t);
    return $u(Ve({}, r, { lightness: hr(0, 1, r.lightness + parseFloat(e)) }));
  }
  var bg = mr(yg),
    _e = bg;
  function Dg(e, t) {
    if (t === 'transparent') return t;
    var r = fr(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Ve({}, r, { alpha: hr(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
    return Ie(a);
  }
  var Eg = mr(Dg),
    Ke = Eg;
  function Ag(e, t) {
    if (t === 'transparent') return t;
    var r = fr(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Ve({}, r, {
        alpha: hr(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      });
    return Ie(a);
  }
  var Cg = mr(Ag),
    V = Cg;
  Z();
  J();
  J();
  Z();
  q();
  q();
  Z();
  s();
  l();
  c();
  var se = (() => {
    let e;
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  J();
  q();
  Z();
  J();
  q();
  q();
  J();
  q();
  q();
  var Im = ae(xa(), 1);
  Z();
  s();
  l();
  c();
  var ex = ae(u0(), 1),
    wa = ae(i0(), 1),
    s0 = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
    tx = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: u } = e;
      if (s0([r, n, a, u]) > 1)
        throw new Error(
          `Invalid conditional test ${JSON.stringify({
            exists: r,
            eq: n,
            neq: a,
          })}`
        );
      if (typeof n < 'u') return (0, wa.default)(t, n);
      if (typeof a < 'u') return !(0, wa.default)(t, a);
      if (typeof r < 'u') {
        let i = typeof t < 'u';
        return r ? i : !i;
      }
      return (typeof u > 'u' ? !0 : u) ? !!t : !t;
    },
    Ta = (e, t, r) => {
      if (!e.if) return !0;
      let { arg: n, global: a } = e.if;
      if (s0([n, a]) !== 1)
        throw new Error(
          `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`
        );
      let u = n ? t[n] : r[a];
      return tx(e.if, u);
    };
  s();
  l();
  c();
  var Hj = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: le,
      logger: Ae,
      once: jr,
      pretty: Uj,
    } = __STORYBOOKCLIENTLOGGER__;
  J();
  q();
  s();
  l();
  c();
  q();
  function ot() {
    return (
      (ot =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      ot.apply(this, arguments)
    );
  }
  var rx = ['children', 'options'],
    l0 = [
      'allowFullScreen',
      'allowTransparency',
      'autoComplete',
      'autoFocus',
      'autoPlay',
      'cellPadding',
      'cellSpacing',
      'charSet',
      'className',
      'classId',
      'colSpan',
      'contentEditable',
      'contextMenu',
      'crossOrigin',
      'encType',
      'formAction',
      'formEncType',
      'formMethod',
      'formNoValidate',
      'formTarget',
      'frameBorder',
      'hrefLang',
      'inputMode',
      'keyParams',
      'keyType',
      'marginHeight',
      'marginWidth',
      'maxLength',
      'mediaGroup',
      'minLength',
      'noValidate',
      'radioGroup',
      'readOnly',
      'rowSpan',
      'spellCheck',
      'srcDoc',
      'srcLang',
      'srcSet',
      'tabIndex',
      'useMap',
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
    c0 = {
      amp: '&',
      apos: "'",
      gt: '>',
      lt: '<',
      nbsp: '\xA0',
      quot: '\u201C',
    },
    nx = ['style', 'script'],
    ax =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    ux = /mailto:/i,
    ox = /\n{2,}$/,
    y0 = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    ix = /^ *> ?/gm,
    sx = /^ {2,}\n/,
    lx = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/,
    b0 = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    D0 = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    cx = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    dx = /^(?:\n *)*\n/,
    px = /\r\n?/g,
    fx = /^\[\^([^\]]+)](:.*)\n/,
    mx = /^\[\^([^\]]+)]/,
    hx = /\f/g,
    gx = /^\s*?\[(x|\s)\]/,
    E0 = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    A0 = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    Ia =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    yx = /&([a-zA-Z]+);/g,
    C0 = /^<!--[\s\S]*?(?:-->)/,
    bx = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    _a =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    Dx = /^\{.*\}$/,
    Ex = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    Ax = /^<([^ >]+@[^ >]+)>/,
    Cx = /^<([^ >]+:\/[^ >]+)>/,
    vx = /-([a-z])?/gi,
    v0 = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    xx = /^\[([^\]]*)\]:\s+(\S+)\s*("([^"]*)")?/,
    Fx = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    Sx = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    Bx = /(\[|\])/g,
    wx = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    Tx = /\t/g,
    Rx = /^ *\| */,
    kx = /(^ *\||\| *$)/g,
    Ox = / *$/,
    Ix = /^ *:-+: *$/,
    _x = /^ *:-+ *$/,
    Px = /^ *-+: *$/,
    Nx =
      /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    Mx =
      /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    qx = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    jx = /^\\([^0-9A-Za-z\s])/,
    Lx =
      /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    zx = /^\n+/,
    $x = /^([ \t]*)/,
    Hx = /\\([^0-9A-Z\s])/gi,
    d0 = / *\n+$/,
    Ux = /(?:^|\n)( *)$/,
    Pa = '(?:\\d+\\.)',
    Na = '(?:[*+-])';
  function x0(e) {
    return '( *)(' + (e === 1 ? Pa : Na) + ') +';
  }
  var F0 = x0(1),
    S0 = x0(2);
  function B0(e) {
    return new RegExp('^' + (e === 1 ? F0 : S0));
  }
  var Gx = B0(1),
    Wx = B0(2);
  function w0(e) {
    return new RegExp(
      '^' +
        (e === 1 ? F0 : S0) +
        '[^\\n]*(?:\\n(?!\\1' +
        (e === 1 ? Pa : Na) +
        ' )[^\\n]*)*(\\n|$)',
      'gm'
    );
  }
  var T0 = w0(1),
    R0 = w0(2);
  function k0(e) {
    let t = e === 1 ? Pa : Na;
    return new RegExp(
      '^( *)(' +
        t +
        ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
        t +
        ' (?!' +
        t +
        ' ))\\n*|\\s*\\n*$)'
    );
  }
  var O0 = k0(1),
    I0 = k0(2);
  function p0(e, t) {
    let r = t === 1,
      n = r ? O0 : I0,
      a = r ? T0 : R0,
      u = r ? Gx : Wx;
    return {
      t(o, i, p) {
        let f = Ux.exec(p);
        return f && (i.o || (!i.u && !i._)) ? n.exec((o = f[1] + o)) : null;
      },
      i: G.HIGH,
      l(o, i, p) {
        let f = r ? +o[2] : void 0,
          E = o[0]
            .replace(
              ox,
              `
`
            )
            .match(a),
          v = !1;
        return {
          p: E.map(function (h, m) {
            let A = u.exec(h)[0].length,
              g = new RegExp('^ {1,' + A + '}', 'gm'),
              x = h.replace(g, '').replace(u, ''),
              w = m === E.length - 1,
              I =
                x.indexOf(`

`) !== -1 ||
                (w && v);
            v = I;
            let N = p.u,
              z = p.o,
              F;
            (p.o = !0),
              I
                ? ((p.u = !1),
                  (F = x.replace(
                    d0,
                    `

`
                  )))
                : ((p.u = !0), (F = x.replace(d0, '')));
            let _ = i(F, p);
            return (p.u = N), (p.o = z), _;
          }),
          g: r,
          m: f,
        };
      },
      h: (o, i, p) =>
        e(
          o.g ? 'ol' : 'ul',
          { key: p.k, start: o.m },
          o.p.map(function (f, E) {
            return e('li', { key: E }, i(f, p));
          })
        ),
    };
  }
  var _0 = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
    P0 = `\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*`,
    Vx = new RegExp('^\\[(' + _0 + ')\\]\\(' + P0 + '\\)'),
    Kx = new RegExp('^!\\[(' + _0 + ')\\]\\(' + P0 + '\\)'),
    N0 = [y0, b0, D0, E0, A0, C0, v0, T0, O0, R0, I0],
    Yx = [...N0, /^[^\n]+(?:  \n|\n{2,})/, Ia, _a];
  function Jx(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase();
  }
  function Zx(e) {
    return Px.test(e)
      ? 'right'
      : Ix.test(e)
      ? 'center'
      : _x.test(e)
      ? 'left'
      : null;
  }
  function f0(e, t, r) {
    let n = r.v;
    r.v = !0;
    let a = t(e.trim(), r);
    r.v = n;
    let u = [[]];
    return (
      a.forEach(function (o, i) {
        o.type === 'tableSeparator'
          ? i !== 0 && i !== a.length - 1 && u.push([])
          : (o.type !== 'text' ||
              (a[i + 1] != null && a[i + 1].type !== 'tableSeparator') ||
              (o.S = o.S.replace(Ox, '')),
            u[u.length - 1].push(o));
      }),
      u
    );
  }
  function Xx(e, t, r) {
    r.u = !0;
    let n = f0(e[1], t, r),
      a = e[2].replace(kx, '').split('|').map(Zx),
      u = (function (o, i, p) {
        return o
          .trim()
          .split(
            `
`
          )
          .map(function (f) {
            return f0(f, i, p);
          });
      })(e[3], t, r);
    return (r.u = !1), { $: a, A: u, L: n, type: 'table' };
  }
  function m0(e, t) {
    return e.$[t] == null ? {} : { textAlign: e.$[t] };
  }
  function Je(e) {
    return function (t, r) {
      return r.u ? e.exec(t) : null;
    };
  }
  function ut(e) {
    return function (t, r) {
      return r.u || r._ ? e.exec(t) : null;
    };
  }
  function ze(e) {
    return function (t, r) {
      return r.u || r._ ? null : e.exec(t);
    };
  }
  function Jt(e) {
    return function (t) {
      return e.exec(t);
    };
  }
  function Qx(e, t, r) {
    if (
      t.u ||
      t._ ||
      (r &&
        !r.endsWith(`
`))
    )
      return null;
    let n = '';
    e.split(
      `
`
    ).every(
      (u) =>
        !N0.some((o) => o.test(u)) &&
        ((n +=
          u +
          `
`),
        u.trim())
    );
    let a = n.trimEnd();
    return a == '' ? null : [n, a];
  }
  function Ct(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, '')
          .match(/^\s*(javascript|vbscript|data):/i)
      )
        return null;
    } catch {
      return null;
    }
    return e;
  }
  function h0(e) {
    return e.replace(Hx, '$1');
  }
  function Lr(e, t, r) {
    let n = r.u || !1,
      a = r._ || !1;
    (r.u = !0), (r._ = !0);
    let u = e(t, r);
    return (r.u = n), (r._ = a), u;
  }
  function eF(e, t, r) {
    let n = r.u || !1,
      a = r._ || !1;
    (r.u = !1), (r._ = !0);
    let u = e(t, r);
    return (r.u = n), (r._ = a), u;
  }
  function tF(e, t, r) {
    return (
      (r.u = !1),
      e(
        t +
          `

`,
        r
      )
    );
  }
  var g0 = (e, t, r) => ({ S: Lr(t, e[1], r) });
  function Ra() {
    return {};
  }
  function ka() {
    return null;
  }
  function rF(...e) {
    return e.filter(Boolean).join(' ');
  }
  function Oa(e, t, r) {
    let n = e,
      a = t.split('.');
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
    return n || r;
  }
  var G;
  function nF(e, t = {}) {
    (t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || Jx),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? ot({}, c0, t.namedCodesToUnicode)
        : c0);
    let r = t.createElement || hn;
    function n(m, A, ...g) {
      let x = Oa(t.overrides, `${m}.props`, {});
      return r(
        (function (w, I) {
          let N = Oa(I, w);
          return N
            ? typeof N == 'function' || (typeof N == 'object' && 'render' in N)
              ? N
              : Oa(I, `${w}.component`, w)
            : w;
        })(m, t.overrides),
        ot({}, A, x, { className: rF(A?.className, x.className) || void 0 }),
        ...g
      );
    }
    function a(m) {
      let A = !1;
      t.forceInline ? (A = !0) : t.forceBlock || (A = wx.test(m) === !1);
      let g = E(
        f(
          A
            ? m
            : `${m.trimEnd().replace(zx, '')}

`,
          { u: A }
        )
      );
      for (; typeof g[g.length - 1] == 'string' && !g[g.length - 1].trim(); )
        g.pop();
      if (t.wrapper === null) return g;
      let x = t.wrapper || (A ? 'span' : 'div'),
        w;
      if (g.length > 1 || t.forceWrapper) w = g;
      else {
        if (g.length === 1)
          return (
            (w = g[0]),
            typeof w == 'string' ? n('span', { key: 'outer' }, w) : w
          );
        w = null;
      }
      return hn(x, { key: 'outer' }, w);
    }
    function u(m) {
      let A = m.match(ax);
      return A
        ? A.reduce(function (g, x, w) {
            let I = x.indexOf('=');
            if (I !== -1) {
              let N = (function (O) {
                  return (
                    O.indexOf('-') !== -1 &&
                      O.match(bx) === null &&
                      (O = O.replace(vx, function ($, W) {
                        return W.toUpperCase();
                      })),
                    O
                  );
                })(x.slice(0, I)).trim(),
                z = (function (O) {
                  let $ = O[0];
                  return ($ === '"' || $ === "'") &&
                    O.length >= 2 &&
                    O[O.length - 1] === $
                    ? O.slice(1, -1)
                    : O;
                })(x.slice(I + 1).trim()),
                F = l0[N] || N,
                _ = (g[F] = (function (O, $) {
                  return O === 'style'
                    ? $.split(/;\s?/).reduce(function (W, j) {
                        let be = j.slice(0, j.indexOf(':'));
                        return (
                          (W[
                            be.replace(/(-[a-z])/g, (xe) => xe[1].toUpperCase())
                          ] = j.slice(be.length + 1).trim()),
                          W
                        );
                      }, {})
                    : O === 'href'
                    ? Ct($)
                    : ($.match(Dx) && ($ = $.slice(1, $.length - 1)),
                      $ === 'true' || ($ !== 'false' && $));
                })(N, z));
              typeof _ == 'string' &&
                (Ia.test(_) || _a.test(_)) &&
                (g[F] = ue(a(_.trim()), { key: w }));
            } else x !== 'style' && (g[l0[x] || x] = !0);
            return g;
          }, {})
        : void 0;
    }
    let o = [],
      i = {},
      p = {
        blockQuote: {
          t: ze(y0),
          i: G.HIGH,
          l: (m, A, g) => ({ S: A(m[0].replace(ix, ''), g) }),
          h: (m, A, g) => n('blockquote', { key: g.k }, A(m.S, g)),
        },
        breakLine: {
          t: Jt(sx),
          i: G.HIGH,
          l: Ra,
          h: (m, A, g) => n('br', { key: g.k }),
        },
        breakThematic: {
          t: ze(lx),
          i: G.HIGH,
          l: Ra,
          h: (m, A, g) => n('hr', { key: g.k }),
        },
        codeBlock: {
          t: ze(D0),
          i: G.MAX,
          l: (m) => ({
            S: m[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            R: void 0,
          }),
          h: (m, A, g) =>
            n(
              'pre',
              { key: g.k },
              n(
                'code',
                ot({}, m.I, { className: m.R ? `lang-${m.R}` : '' }),
                m.S
              )
            ),
        },
        codeFenced: {
          t: ze(b0),
          i: G.MAX,
          l: (m) => ({
            I: u(m[3] || ''),
            S: m[4],
            R: m[2] || void 0,
            type: 'codeBlock',
          }),
        },
        codeInline: {
          t: ut(cx),
          i: G.LOW,
          l: (m) => ({ S: m[2] }),
          h: (m, A, g) => n('code', { key: g.k }, m.S),
        },
        footnote: {
          t: ze(fx),
          i: G.MAX,
          l: (m) => (o.push({ M: m[2], O: m[1] }), {}),
          h: ka,
        },
        footnoteReference: {
          t: Je(mx),
          i: G.HIGH,
          l: (m) => ({ S: m[1], B: `#${t.slugify(m[1])}` }),
          h: (m, A, g) =>
            n('a', { key: g.k, href: Ct(m.B) }, n('sup', { key: g.k }, m.S)),
        },
        gfmTask: {
          t: Je(gx),
          i: G.HIGH,
          l: (m) => ({ T: m[1].toLowerCase() === 'x' }),
          h: (m, A, g) =>
            n('input', {
              checked: m.T,
              key: g.k,
              readOnly: !0,
              type: 'checkbox',
            }),
        },
        heading: {
          t: ze(E0),
          i: G.HIGH,
          l: (m, A, g) => ({
            S: Lr(A, m[2], g),
            j: t.slugify(m[2]),
            C: m[1].length,
          }),
          h: (m, A, g) => n(`h${m.C}`, { id: m.j, key: g.k }, A(m.S, g)),
        },
        headingSetext: {
          t: ze(A0),
          i: G.MAX,
          l: (m, A, g) => ({
            S: Lr(A, m[1], g),
            C: m[2] === '=' ? 1 : 2,
            type: 'heading',
          }),
        },
        htmlComment: { t: Jt(C0), i: G.HIGH, l: () => ({}), h: ka },
        image: {
          t: ut(Kx),
          i: G.HIGH,
          l: (m) => ({ Z: m[1], B: h0(m[2]), D: m[3] }),
          h: (m, A, g) =>
            n('img', {
              key: g.k,
              alt: m.Z || void 0,
              title: m.D || void 0,
              src: Ct(m.B),
            }),
        },
        link: {
          t: Je(Vx),
          i: G.LOW,
          l: (m, A, g) => ({ S: eF(A, m[1], g), B: h0(m[2]), D: m[3] }),
          h: (m, A, g) =>
            n('a', { key: g.k, href: Ct(m.B), title: m.D }, A(m.S, g)),
        },
        linkAngleBraceStyleDetector: {
          t: Je(Cx),
          i: G.MAX,
          l: (m) => ({ S: [{ S: m[1], type: 'text' }], B: m[1], type: 'link' }),
        },
        linkBareUrlDetector: {
          t: (m, A) => (A.N ? null : Je(Ex)(m, A)),
          i: G.MAX,
          l: (m) => ({
            S: [{ S: m[1], type: 'text' }],
            B: m[1],
            D: void 0,
            type: 'link',
          }),
        },
        linkMailtoDetector: {
          t: Je(Ax),
          i: G.MAX,
          l(m) {
            let A = m[1],
              g = m[1];
            return (
              ux.test(g) || (g = 'mailto:' + g),
              {
                S: [{ S: A.replace('mailto:', ''), type: 'text' }],
                B: g,
                type: 'link',
              }
            );
          },
        },
        orderedList: p0(n, 1),
        unorderedList: p0(n, 2),
        newlineCoalescer: {
          t: ze(dx),
          i: G.LOW,
          l: Ra,
          h: () => `
`,
        },
        paragraph: {
          t: Qx,
          i: G.LOW,
          l: g0,
          h: (m, A, g) => n('p', { key: g.k }, A(m.S, g)),
        },
        ref: {
          t: Je(xx),
          i: G.MAX,
          l: (m) => ((i[m[1]] = { B: m[2], D: m[4] }), {}),
          h: ka,
        },
        refImage: {
          t: ut(Fx),
          i: G.MAX,
          l: (m) => ({ Z: m[1] || void 0, F: m[2] }),
          h: (m, A, g) =>
            n('img', {
              key: g.k,
              alt: m.Z,
              src: Ct(i[m.F].B),
              title: i[m.F].D,
            }),
        },
        refLink: {
          t: Je(Sx),
          i: G.MAX,
          l: (m, A, g) => ({
            S: A(m[1], g),
            P: A(m[0].replace(Bx, '\\$1'), g),
            F: m[2],
          }),
          h: (m, A, g) =>
            i[m.F]
              ? n(
                  'a',
                  { key: g.k, href: Ct(i[m.F].B), title: i[m.F].D },
                  A(m.S, g)
                )
              : n('span', { key: g.k }, A(m.P, g)),
        },
        table: {
          t: ze(v0),
          i: G.HIGH,
          l: Xx,
          h: (m, A, g) =>
            n(
              'table',
              { key: g.k },
              n(
                'thead',
                null,
                n(
                  'tr',
                  null,
                  m.L.map(function (x, w) {
                    return n('th', { key: w, style: m0(m, w) }, A(x, g));
                  })
                )
              ),
              n(
                'tbody',
                null,
                m.A.map(function (x, w) {
                  return n(
                    'tr',
                    { key: w },
                    x.map(function (I, N) {
                      return n('td', { key: N, style: m0(m, N) }, A(I, g));
                    })
                  );
                })
              )
            ),
        },
        tableSeparator: {
          t: function (m, A) {
            return A.v ? Rx.exec(m) : null;
          },
          i: G.HIGH,
          l: function () {
            return { type: 'tableSeparator' };
          },
          h: () => ' | ',
        },
        text: {
          t: Jt(Lx),
          i: G.MIN,
          l: (m) => ({
            S: m[0].replace(yx, (A, g) =>
              t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : A
            ),
          }),
          h: (m) => m.S,
        },
        textBolded: {
          t: ut(Nx),
          i: G.MED,
          l: (m, A, g) => ({ S: A(m[2], g) }),
          h: (m, A, g) => n('strong', { key: g.k }, A(m.S, g)),
        },
        textEmphasized: {
          t: ut(Mx),
          i: G.LOW,
          l: (m, A, g) => ({ S: A(m[2], g) }),
          h: (m, A, g) => n('em', { key: g.k }, A(m.S, g)),
        },
        textEscaped: {
          t: ut(jx),
          i: G.HIGH,
          l: (m) => ({ S: m[1], type: 'text' }),
        },
        textStrikethroughed: {
          t: ut(qx),
          i: G.LOW,
          l: g0,
          h: (m, A, g) => n('del', { key: g.k }, A(m.S, g)),
        },
      };
    t.disableParsingRawHTML !== !0 &&
      ((p.htmlBlock = {
        t: Jt(Ia),
        i: G.HIGH,
        l(m, A, g) {
          let [, x] = m[3].match($x),
            w = new RegExp(`^${x}`, 'gm'),
            I = m[3].replace(w, ''),
            N = ((z = I), Yx.some(($) => $.test(z)) ? tF : Lr);
          var z;
          let F = m[1].toLowerCase(),
            _ = nx.indexOf(F) !== -1;
          g.N = g.N || F === 'a';
          let O = _ ? m[3] : N(A, I, g);
          return (g.N = !1), { I: u(m[2]), S: O, G: _, H: _ ? F : m[1] };
        },
        h: (m, A, g) => n(m.H, ot({ key: g.k }, m.I), m.G ? m.S : A(m.S, g)),
      }),
      (p.htmlSelfClosing = {
        t: Jt(_a),
        i: G.HIGH,
        l: (m) => ({ I: u(m[2] || ''), H: m[1] }),
        h: (m, A, g) => n(m.H, ot({}, m.I, { key: g.k })),
      }));
    let f = (function (m) {
        let A = Object.keys(m);
        function g(x, w) {
          let I = [],
            N = '';
          for (; x; ) {
            let z = 0;
            for (; z < A.length; ) {
              let F = A[z],
                _ = m[F],
                O = _.t(x, w, N);
              if (O) {
                let $ = O[0];
                x = x.substring($.length);
                let W = _.l(O, g, w);
                W.type == null && (W.type = F), I.push(W), (N = $);
                break;
              }
              z++;
            }
          }
          return I;
        }
        return (
          A.sort(function (x, w) {
            let I = m[x].i,
              N = m[w].i;
            return I !== N ? I - N : x < w ? -1 : 1;
          }),
          function (x, w) {
            return g(
              (function (I) {
                return I.replace(
                  px,
                  `
`
                )
                  .replace(hx, '')
                  .replace(Tx, '    ');
              })(x),
              w
            );
          }
        );
      })(p),
      E =
        ((v = (function (m) {
          return function (A, g, x) {
            return m[A.type].h(A, g, x);
          };
        })(p)),
        function m(A, g = {}) {
          if (Array.isArray(A)) {
            let x = g.k,
              w = [],
              I = !1;
            for (let N = 0; N < A.length; N++) {
              g.k = N;
              let z = m(A[N], g),
                F = typeof z == 'string';
              F && I ? (w[w.length - 1] += z) : z !== null && w.push(z),
                (I = F);
            }
            return (g.k = x), w;
          }
          return v(A, m, g);
        });
    var v;
    let h = a(e);
    return o.length
      ? n(
          'div',
          null,
          h,
          n(
            'footer',
            { key: 'footer' },
            o.map(function (m) {
              return n(
                'div',
                { id: t.slugify(m.O), key: m.O },
                m.O,
                E(f(m.M, { u: !0 }))
              );
            })
          )
        )
      : h;
  }
  (function (e) {
    (e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN');
  })(G || (G = {}));
  var zr = (e) => {
    let { children: t, options: r } = e,
      n = (function (a, u) {
        if (a == null) return {};
        var o,
          i,
          p = {},
          f = Object.keys(a);
        for (i = 0; i < f.length; i++)
          u.indexOf((o = f[i])) >= 0 || (p[o] = a[o]);
        return p;
      })(e, rx);
    return ue(nF(t, r), n);
  };
  Z();
  J();
  q();
  Z();
  J();
  q();
  var _m = ae($r(), 1),
    Pm = ae(nd(), 1);
  Z();
  J();
  q();
  q();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  q();
  Z();
  q();
  Z();
  q();
  Z();
  J();
  var zm = ae(sp(), 1);
  q();
  Z();
  J();
  q();
  q();
  q();
  Z();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  J();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  Z();
  J();
  q();
  s();
  l();
  c();
  s();
  l();
  c();
  s();
  l();
  c();
  var S$ = __STORYBOOKCHANNELS__,
    { Channel: YS } = __STORYBOOKCHANNELS__;
  s();
  l();
  c();
  var k$ = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: O$,
      CONFIG_ERROR: I$,
      CURRENT_STORY_WAS_SET: _$,
      DOCS_RENDERED: P$,
      FORCE_REMOUNT: N$,
      FORCE_RE_RENDER: M$,
      GLOBALS_UPDATED: Gr,
      IGNORED_EXCEPTION: q$,
      NAVIGATE_URL: lp,
      PLAY_FUNCTION_THREW_EXCEPTION: j$,
      PRELOAD_ENTRIES: L$,
      PREVIEW_BUILDER_PROGRESS: z$,
      PREVIEW_KEYDOWN: $$,
      REGISTER_SUBSCRIPTION: H$,
      RESET_STORY_ARGS: ja,
      SELECT_STORY: U$,
      SET_CONFIG: G$,
      SET_CURRENT_STORY: W$,
      SET_GLOBALS: V$,
      SET_INDEX: K$,
      SET_STORIES: Y$,
      SHARED_STATE_CHANGED: JS,
      SHARED_STATE_SET: ZS,
      STORIES_COLLAPSE_ALL: J$,
      STORIES_EXPAND_ALL: Z$,
      STORY_ARGS_UPDATED: Wr,
      STORY_CHANGED: X$,
      STORY_ERRORED: Q$,
      STORY_INDEX_INVALIDATED: eH,
      STORY_MISSING: tH,
      STORY_PREPARED: rH,
      STORY_RENDERED: nH,
      STORY_RENDER_PHASE_CHANGED: aH,
      STORY_SPECIFIED: uH,
      STORY_THREW_EXCEPTION: oH,
      STORY_UNCHANGED: iH,
      UPDATE_GLOBALS: sH,
      UPDATE_QUERY_PARAMS: lH,
      UPDATE_STORY_ARGS: La,
    } = __STORYBOOKCOREEVENTS__;
  var Q3 = ae($r(), 1),
    eB = ae(it(), 1),
    tB = ae(Gp(), 1),
    rB = ae(Xp(), 1);
  s();
  l();
  c();
  function $e(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = Array.from(typeof e == 'string' ? [e] : e);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var a = n.reduce(function (i, p) {
      var f = p.match(/\n([\t ]+|(?!\s).)/g);
      return f
        ? i.concat(
            f.map(function (E) {
              var v, h;
              return (h =
                (v = E.match(/[\t ]/g)) === null || v === void 0
                  ? void 0
                  : v.length) !== null && h !== void 0
                ? h
                : 0;
            })
          )
        : i;
    }, []);
    if (a.length) {
      var u = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          '}',
        'g'
      );
      n = n.map(function (i) {
        return i.replace(
          u,
          `
`
        );
      });
    }
    n[0] = n[0].replace(/^\r?\n/, '');
    var o = n[0];
    return (
      t.forEach(function (i, p) {
        var f = o.match(/(?:^|\n)( *)$/),
          E = f ? f[1] : '',
          v = i;
        typeof i == 'string' &&
          i.includes(`
`) &&
          (v = String(i)
            .split(
              `
`
            )
            .map(function (h, m) {
              return m === 0 ? h : '' + E + h;
            }).join(`
`)),
          (o += v + n[p + 1]);
      }),
      o
    );
  }
  var me = $e;
  var of = ae($r(), 1);
  s();
  l();
  c();
  var nB = ae(za(), 1);
  var aB = ae(it(), 1);
  var sf = ae(rf(), 1);
  var Kr = ae(za(), 1),
    Yr = ae(it(), 1);
  var lf = ae(it(), 1);
  var cf = ae(xa(), 1);
  var lB = ae(af(), 1);
  var XU = (0, of.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {}
    )
  );
  var rG = Symbol('incompatible');
  var nG = Symbol('Deeply equal');
  var uB = $e`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    sG = (0, sf.default)(() => {}, uB);
  var xt = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, u) => (
          Object.entries(u).forEach(([o, i]) => {
            let p = a[o];
            Array.isArray(i) || typeof p > 'u'
              ? (a[o] = i)
              : (0, Kr.default)(i) && (0, Kr.default)(p)
              ? (t[o] = !0)
              : typeof i < 'u' && (a[o] = i);
          }),
          a
        ),
        {}
      );
    return (
      Object.keys(t).forEach((a) => {
        let u = r
          .filter(Boolean)
          .map((o) => o[a])
          .filter((o) => typeof o < 'u');
        u.every((o) => (0, Kr.default)(o))
          ? (n[a] = xt(...u))
          : (n[a] = u[u.length - 1]);
      }),
      n
    );
  };
  function Ua(e, t, r) {
    return { ...oB(void 0, e, t), moduleExport: r };
  }
  function oB(e, t, r) {
    let n = e?.id || t.id,
      a = [...(e?.tags || t.tags || []), 'story'],
      u = xt(r.parameters, t.parameters, e?.parameters),
      { argTypesEnhancers: o = [], argsEnhancers: i = [] } = r,
      p = e?.userStoryFn || e?.render || t.render || r.render;
    if (!p) throw new Error(`No render function available for id '${n}'`);
    let f = xt(r.argTypes, t.argTypes, e?.argTypes),
      { passArgsFirst: E = !0 } = u;
    u.__isArgsStory = E && p.length > 0;
    let v = { ...r.args, ...t.args, ...e?.args },
      h = {
        componentId: t.id,
        title: t.title,
        kind: t.title,
        id: e?.id || t.id,
        name: e?.name || '__meta',
        story: e?.name || '__meta',
        component: t.component,
        subcomponents: t.subcomponents,
        tags: a,
        parameters: u,
        initialArgs: v,
        argTypes: f,
      };
    h.argTypes = o.reduce((w, I) => I({ ...h, argTypes: w }), h.argTypes);
    let m = { ...v };
    (h.initialArgs = i.reduce(
      (w, I) => ({ ...w, ...I({ ...h, initialArgs: w }) }),
      m
    )),
      se.FEATURES?.breakingChangesV7 ||
        (h.parameters = {
          ...h.parameters,
          __id: n,
          globals: r.globals,
          globalTypes: r.globalTypes,
          args: h.initialArgs,
          argTypes: h.argTypes,
        });
    let { name: A, story: g, ...x } = h;
    return x;
  }
  var Ha = (e, t, r) => {
      let n = typeof e;
      switch (n) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'function':
        case 'symbol':
          return { name: n };
        default:
          break;
      }
      return e
        ? r.has(e)
          ? (Ae.warn($e`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: 'other', value: 'cyclic object' })
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: 'array',
                  value:
                    e.length > 0
                      ? Ha(e[0], t, new Set(r))
                      : { name: 'other', value: 'unknown' },
                }
              : {
                  name: 'object',
                  value: (0, Yr.default)(e, (a) => Ha(a, t, new Set(r))),
                })
        : { name: 'object', value: {} };
    },
    iB = (e) => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, Yr.default)(n, (o, i) => ({
          name: i,
          type: Ha(o, `${t}.${i}`, new Set()),
        })),
        u = (0, Yr.default)(r, (o, i) => ({ name: i }));
      return xt(a, u, r);
    };
  iB.secondPass = !0;
  var uf = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    er = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, cf.default)(e, (n, a) => {
            let u = n.name || a;
            return (!t || uf(u, t)) && (!r || !uf(u, r));
          }),
    sB = (e, t, r) => {
      let { type: n, options: a } = e;
      if (n) {
        if (r.color && r.color.test(t)) {
          let u = n.name;
          if (u === 'string') return { control: { type: 'color' } };
          u !== 'enum' &&
            Ae.warn(
              `Addon controls: Control of type color only supports string, received "${u}" instead`
            );
        }
        if (r.date && r.date.test(t)) return { control: { type: 'date' } };
        switch (n.name) {
          case 'array':
            return { control: { type: 'object' } };
          case 'boolean':
            return { control: { type: 'boolean' } };
          case 'string':
            return { control: { type: 'text' } };
          case 'number':
            return { control: { type: 'number' } };
          case 'enum': {
            let { value: u } = n;
            return {
              control: { type: u?.length <= 5 ? 'radio' : 'select' },
              options: u,
            };
          }
          case 'function':
          case 'symbol':
            return null;
          default:
            return { control: { type: a ? 'select' : 'object' } };
        }
      }
    },
    df = (e) => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: {
            include: n = null,
            exclude: a = null,
            matchers: u = {},
          } = {},
        },
      } = e;
      if (!r) return t;
      let o = er(t, n, a),
        i = (0, lf.default)(o, (p, f) => p?.type && sB(p, f, u));
      return xt(i, o);
    };
  df.secondPass = !0;
  q();
  q();
  q();
  q();
  var Zm = ae(it(), 1);
  q();
  q();
  q();
  s();
  l();
  c();
  var pB = ae(it(), 1),
    mB = ae(Af(), 1);
  var fB = ((e) => (
    (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown'),
    e
  ))(fB || {});
  var Zr = (e) => {
    if (!e) return '';
    if (typeof e == 'string') return e;
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
  };
  var Cf = 'storybook/docs',
    SW = `${Cf}/panel`;
  var BW = `${Cf}/snippet-rendered`,
    nr = ((e) => (
      (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
    ))(nr || {});
  q();
  q();
  q();
  q();
  q();
  q();
  J();
  Z();
  q();
  q();
  Z();
  q();
  q();
  q();
  q();
  q();
  q();
  J();
  q();
  q();
  J();
  q();
  q();
  Z();
  q();
  q();
  q();
  var ww = k.div(We, ({ theme: e }) => ({
      backgroundColor:
        e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: '25px 0 40px',
      color: V(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    lu = (e) => d.createElement(ww, { ...e, className: 'docblock-emptyblock' }),
    Tw = k(It)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: '19px',
      margin: '25px 0 40px',
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      'pre.prismjs': { padding: 20, background: 'inherit' },
    })),
    Rw = k.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      margin: '25px 0 40px',
      padding: '20px 20px 20px 22px',
    })),
    an = k.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: '60%',
      ['&:first-child']: { margin: 0 },
    })),
    kw = () =>
      d.createElement(
        Rw,
        null,
        d.createElement(an, null),
        d.createElement(an, { style: { width: '80%' } }),
        d.createElement(an, { style: { width: '30%' } }),
        d.createElement(an, { style: { width: '80%' } })
      ),
    yu = ({
      isLoading: e,
      error: t,
      language: r,
      code: n,
      dark: a,
      format: u,
      ...o
    }) => {
      if (e) return d.createElement(kw, null);
      if (t) return d.createElement(lu, null, t);
      let i = d.createElement(
        Tw,
        {
          bordered: !0,
          copyable: !0,
          format: u,
          language: r,
          className: 'docblock-source',
          ...o,
        },
        n
      );
      if (typeof a > 'u') return i;
      let p = a ? dr.dark : dr.light;
      return d.createElement(cr, { theme: Mu(p) }, i);
    };
  yu.defaultProps = { format: !1 };
  var gm = [
      '.sb-unstyled',
      '.sbdocs-preview',
      '.sbdocs-pre',
      '.sb-story',
      '.docblock-source',
      '.docblock-argstable',
      '.sbdocs-title',
      '.sbdocs-subtitle',
      '.docblock-icongallery',
      '.docblock-emptyblock',
      '.docblock-typeset',
      '.docblock-colorpalette',
    ].join(', '),
    pe = (e) => `& :where(${e}:not(${gm}, :where(${gm}) ${e}))`,
    bu = 600,
    UV = k.h1(We, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${bu}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '.5rem',
      },
    })),
    GV = k.h2(We, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${bu}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: V(0.25, e.color.defaultText),
    })),
    WV = k.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': { marginTop: 0, paddingTop: 0 },
          '&:hover a.anchor': { textDecoration: 'none' },
          '& code': { fontSize: 'inherit' },
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light'
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === 'light'
              ? V(0.1, e.color.defaultText)
              : V(0.3, e.color.defaultText),
          backgroundColor:
            e.base === 'light' ? e.color.lighter : e.color.border,
        };
      return {
        maxWidth: 1e3,
        width: '100%',
        [pe('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': { color: '#cc0000' },
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [pe('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': { marginTop: 0 },
          '& > :last-child': { marginBottom: 0 },
        },
        [pe('div')]: t,
        [pe('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': { padding: 0 },
          '& dt > :first-of-type': { marginTop: 0 },
          '& dt > :last-child': { marginBottom: 0 },
          '& dd': { margin: '0 0 16px', padding: '0 15px' },
          '& dd > :first-of-type': { marginTop: 0 },
          '& dd > :last-child': { marginBottom: 0 },
        },
        [pe('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [pe('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [pe('h3')]: { ...t, ...r, fontSize: `${e.typography.size.m1}px` },
        [pe('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [pe('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [pe('h6')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [pe('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [pe('img')]: { maxWidth: '100%' },
        [pe('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': { marginTop: '.25em' },
          '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
          '& code': n,
        },
        [pe('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
        },
        [pe('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [pe('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: { color: 'inherit', fontSize: 'inherit' },
          },
          '& code': { whiteSpace: 'pre' },
          '& code, & tt': { border: 'none' },
        },
        [pe('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': { display: 'block', float: 'left' },
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': { margin: '0 auto', textAlign: 'center' },
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': { margin: 0, textAlign: 'right' },
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': { margin: '13px 0 0' },
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [pe('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor:
              e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
          '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
        },
        [pe('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
          listStyle: 'disc',
        },
      };
    }),
    VV = k.div(({ theme: e }) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      [`@media (min-width: ${bu}px)`]: {},
    })),
    sn = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      border: `1px solid ${e.appBorderColor}`,
    }),
    Ow = ({ zoom: e, resetZoom: t }) =>
      d.createElement(
        d.Fragment,
        null,
        d.createElement(
          qe,
          {
            key: 'zoomin',
            onClick: (r) => {
              r.preventDefault(), e(0.8);
            },
            title: 'Zoom in',
          },
          d.createElement(fe, { icon: 'zoom' })
        ),
        d.createElement(
          qe,
          {
            key: 'zoomout',
            onClick: (r) => {
              r.preventDefault(), e(1.25);
            },
            title: 'Zoom out',
          },
          d.createElement(fe, { icon: 'zoomout' })
        ),
        d.createElement(
          qe,
          {
            key: 'zoomreset',
            onClick: (r) => {
              r.preventDefault(), t();
            },
            title: 'Reset zoom',
          },
          d.createElement(fe, { icon: 'zoomreset' })
        )
      ),
    Iw = k(An)({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      transition: 'transform .2s linear',
    }),
    _w = ({
      isLoading: e,
      storyId: t,
      baseUrl: r,
      zoom: n,
      resetZoom: a,
      ...u
    }) =>
      d.createElement(
        Iw,
        { ...u },
        d.createElement(
          wu,
          { key: 'left' },
          e
            ? [1, 2, 3].map((o) => d.createElement(xn, { key: o }))
            : d.createElement(Ow, { zoom: n, resetZoom: a })
        )
      ),
    Om = et({ scale: 1 }),
    { window: Pw } = se,
    Nw = class extends Be {
      constructor() {
        super(...arguments), (this.iframe = null);
      }
      componentDidMount() {
        let { id: e } = this.props;
        this.iframe = Pw.document.getElementById(e);
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e;
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: 'top left',
            }),
          !1
        );
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e);
      }
      render() {
        let {
          id: e,
          title: t,
          src: r,
          allowFullScreen: n,
          scale: a,
          ...u
        } = this.props;
        return d.createElement('iframe', {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: 'fullscreen' } : {}),
          loading: 'lazy',
          ...u,
        });
      }
    },
    { PREVIEW_URL: Mw } = se,
    qw = Mw || 'iframe.html',
    cu = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
    jw = (e) => {
      let t = ie(),
        [r, n] = H(!0),
        {
          story: a,
          height: u,
          autoplay: o,
          forceInitialArgs: i,
          renderStoryToElement: p,
        } = e;
      Y(() => {
        if (!(a && t.current)) return () => {};
        let E = t.current,
          v = p(a, E, { autoplay: o, forceInitialArgs: i });
        return (
          n(!1),
          () => {
            v();
          }
        );
      }, [o, p, a]);
      let f = '<span></span>';
      return d.createElement(
        d.Fragment,
        null,
        u
          ? d.createElement(
              'style',
              null,
              `${cu(
                e
              )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
            )
          : null,
        r && d.createElement(Du, null),
        d.createElement('div', {
          ref: t,
          id: `${cu(e)}-inner`,
          'data-name': a.name,
          dangerouslySetInnerHTML: { __html: f },
        })
      );
    },
    Lw = ({ story: e, height: t = '500px' }) =>
      d.createElement(
        'div',
        { style: { width: '100%', height: t } },
        d.createElement(Om.Consumer, null, ({ scale: r }) =>
          d.createElement(Nw, {
            key: 'iframe',
            id: `iframe--${e.id}`,
            title: e.name,
            src: kn(qw, e.id, { viewMode: 'story' }),
            allowFullScreen: !0,
            scale: r,
            style: { width: '100%', height: '100%', border: '0 none' },
          })
        )
      ),
    zw = (e) => {
      let { inline: t } = e;
      return d.createElement(
        'div',
        { id: cu(e), className: 'sb-story' },
        t ? d.createElement(jw, { ...e }) : d.createElement(Lw, { ...e })
      );
    },
    Du = () => d.createElement(Fn, null),
    $w = k.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? 'block' : 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        overflow: 'auto',
        flexDirection: e ? 'column' : 'row',
        '& .innerZoomElementWrapper > *': e
          ? {
              width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'block',
            }
          : {
              maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'inline-block',
            },
      }),
      ({ layout: e = 'padded' }) =>
        e === 'centered' || e === 'padded'
          ? {
              padding: '30px 20px',
              margin: -10,
              '& .innerZoomElementWrapper > *': {
                width: 'auto',
                border: '10px solid transparent!important',
              },
            }
          : {},
      ({ layout: e = 'padded' }) =>
        e === 'centered'
          ? {
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }
          : {},
      ({ columns: e }) =>
        e && e > 1
          ? {
              '.innerZoomElementWrapper > *': {
                minWidth: `calc(100% / ${e} - 20px)`,
              },
            }
          : {}
    ),
    ym = k(yu)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: 'none',
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : De(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : De(0.05, e.background.content),
      },
    })),
    Hw = k.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: 'relative',
        overflow: 'hidden',
        margin: '25px 0 40px',
        ...sn(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 }
    ),
    Uw = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: 'No code available',
              className: 'docblock-code-toggle docblock-code-toggle--disabled',
              disabled: !0,
              onClick: () => r(!1),
            },
          };
        case t:
          return {
            source: d.createElement(ym, { ...e, dark: !0 }),
            actionItem: {
              title: 'Hide code',
              className: 'docblock-code-toggle docblock-code-toggle--expanded',
              onClick: () => r(!1),
            },
          };
        default:
          return {
            source: d.createElement(ym, { ...e, dark: !0 }),
            actionItem: {
              title: 'Show code',
              className: 'docblock-code-toggle',
              onClick: () => r(!0),
            },
          };
      }
    };
  function Gw(e) {
    if (kt.count(e) === 1) {
      let t = e;
      if (t.props) return t.props.id;
    }
    return null;
  }
  var Ww = k(_w)({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 40,
    }),
    Vw = k.div({ overflow: 'hidden', position: 'relative' }),
    du = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: u = !1,
      isExpanded: o = !1,
      additionalActions: i,
      className: p,
      layout: f = 'padded',
      ...E
    }) => {
      let [v, h] = H(o),
        { source: m, actionItem: A } = Uw(a, v, h),
        [g, x] = H(1),
        w = [p].concat(['sbdocs', 'sbdocs-preview']),
        I = a ? [A] : [],
        [N, z] = H(i ? [...i] : []),
        F = [...I, ...N],
        { window: _ } = se,
        O = ee(async (W) => {
          let { createCopyToClipboardFunction: j } =
            await Promise.resolve().then(() => (J(), Nu));
          j();
        }, []),
        $ = (W) => {
          let j = _.getSelection();
          (j && j.type === 'Range') ||
            (W.preventDefault(),
            N.filter((be) => be.title === 'Copied').length === 0 &&
              O(m.props.code).then(() => {
                z([...N, { title: 'Copied', onClick: () => {} }]),
                  _.setTimeout(
                    () => z(N.filter((be) => be.title !== 'Copied')),
                    1500
                  );
              }));
        };
      return d.createElement(
        Hw,
        { withSource: a, withToolbar: u, ...E, className: w.join(' ') },
        u &&
          d.createElement(Ww, {
            isLoading: e,
            border: !0,
            zoom: (W) => x(g * W),
            resetZoom: () => x(1),
            storyId: Gw(n),
            baseUrl: './iframe.html',
          }),
        d.createElement(
          Om.Provider,
          { value: { scale: g } },
          d.createElement(
            Vw,
            { className: 'docs-story', onCopyCapture: a && $ },
            d.createElement(
              $w,
              { isColumn: t || !Array.isArray(n), columns: r, layout: f },
              d.createElement(
                Tn.Element,
                { scale: g },
                Array.isArray(n)
                  ? n.map((W, j) => d.createElement('div', { key: j }, W))
                  : d.createElement('div', null, n)
              )
            ),
            d.createElement(bn, { actionItems: F })
          )
        ),
        a && v && m
      );
    },
    Kw = k(du)(() => ({
      '.docs-story': { paddingTop: 32, paddingBottom: 40 },
    })),
    Yw = () =>
      d.createElement(
        Kw,
        { isLoading: !0, withToolbar: !0 },
        d.createElement(Du, null)
      ),
    Jw = k.table(({ theme: e }) => ({
      '&&': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        border: 'none',
        tr: { border: 'none !important', background: 'none' },
        'td, th': { padding: 0, border: 'none', width: 'auto!important' },
        marginTop: 0,
        marginBottom: 0,
        'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
        'th:last-of-type, td:last-of-type': { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: 'none', border: 'none' },
        code: Ge({ theme: e }),
        div: { span: { fontWeight: 'bold' } },
        '& code': {
          margin: 0,
          display: 'inline-block',
          fontSize: e.typography.size.s1,
        },
      },
    })),
    Zw = ({ tags: e }) => {
      let t = (e.params || []).filter((u) => u.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null;
      return !r && !a
        ? null
        : d.createElement(
            Jw,
            null,
            d.createElement(
              'tbody',
              null,
              r &&
                t.map((u) =>
                  d.createElement(
                    'tr',
                    { key: u.name },
                    d.createElement(
                      'td',
                      null,
                      d.createElement('code', null, u.name),
                      n &&
                        d.createElement(
                          'div',
                          null,
                          d.createElement('span', null, 'Deprecated'),
                          ' ',
                          e.deprecated
                        )
                    ),
                    d.createElement('td', null, u.description)
                  )
                ),
              a &&
                d.createElement(
                  'tr',
                  { key: 'returns' },
                  d.createElement(
                    'td',
                    null,
                    d.createElement('code', null, 'Returns')
                  ),
                  d.createElement('td', null, e.returns.description)
                )
            )
          );
    },
    pu = 8,
    bm = k.div(({ isExpanded: e }) => ({
      display: 'flex',
      flexDirection: e ? 'column' : 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginBottom: '-4px',
      minWidth: 100,
    })),
    Xw = k.span(Ge, ({ theme: e, simple: t = !1 }) => ({
      flex: '0 0 auto',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      maxWidth: '100%',
      margin: 0,
      marginRight: '4px',
      marginBottom: '4px',
      paddingTop: '2px',
      paddingBottom: '2px',
      lineHeight: '13px',
      ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 }),
    })),
    Qw = k.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: '4px',
      background: 'none',
      border: 'none',
    })),
    e8 = k.div(Ge, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
    })),
    t8 = k.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: 'content-box',
      '& code': { padding: '0 !important' },
    })),
    r8 = k(fe)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    n8 = () => d.createElement('span', null, '-'),
    Nm = ({ text: e, simple: t }) => d.createElement(Xw, { simple: t }, e),
    a8 = (0, _m.default)(1e3)((e) => {
      let t = e.split(/\r?\n/);
      return `${Math.max(...t.map((r) => r.length))}ch`;
    }),
    u8 = (e) => {
      if (!e) return [e];
      let t = e.split('|').map((r) => r.trim());
      return (0, Pm.default)(t);
    },
    Dm = (e, t = !0) => {
      let r = e;
      return (
        t || (r = e.slice(0, pu)),
        r.map((n) => d.createElement(Nm, { key: n, text: n === '' ? '""' : n }))
      );
    },
    o8 = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, u] = H(!1),
        [o, i] = H(t || !1);
      if (r == null) return null;
      let p = typeof r.toString == 'function' ? r.toString() : r;
      if (n == null) {
        if (/[(){}[\]<>]/.test(p)) return d.createElement(Nm, { text: p });
        let f = u8(p),
          E = f.length;
        return E > pu
          ? d.createElement(
              bm,
              { isExpanded: o },
              Dm(f, o),
              d.createElement(
                Qw,
                { onClick: () => i(!o) },
                o ? 'Show less...' : `Show ${E - pu} more...`
              )
            )
          : d.createElement(bm, null, Dm(f));
      }
      return d.createElement(
        wn,
        {
          closeOnOutsideClick: !0,
          trigger: 'click',
          placement: 'bottom',
          visible: a,
          onVisibleChange: (f) => {
            u(f);
          },
          tooltip: d.createElement(
            t8,
            { width: a8(n) },
            d.createElement(It, { language: 'jsx', format: !1 }, n)
          ),
        },
        d.createElement(
          e8,
          { className: 'sbdocs-expandable' },
          d.createElement('span', null, p),
          d.createElement(r8, { icon: a ? 'arrowup' : 'arrowdown' })
        )
      );
    },
    uu = ({ value: e, initialExpandedArgs: t }) =>
      e == null
        ? d.createElement(n8, null)
        : d.createElement(o8, { value: e, initialExpandedArgs: t }),
    i8 = k.label(({ theme: e }) => ({
      lineHeight: '18px',
      alignItems: 'center',
      marginBottom: 8,
      display: 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      background: e.boolean.background,
      borderRadius: '3em',
      padding: 1,
      input: {
        appearance: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '3em',
        '&:focus': {
          outline: 'none',
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: 'center',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: '1',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '7px 15px',
        transition: 'all 100ms ease-out',
        userSelect: 'none',
        borderRadius: '3em',
        color: V(0.5, e.color.defaultText),
        background: 'transparent',
        '&:hover': {
          boxShadow: `${Ke(0.3, e.appBorderColor)} 0 0 0 1px inset`,
        },
        '&:active': {
          boxShadow: `${Ke(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: Ke(1, e.appBorderColor),
        },
        '&:first-of-type': { paddingRight: 8 },
        '&:last-of-type': { paddingLeft: 8 },
      },
      'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === 'light'
              ? `${Ke(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: '7px 15px',
        },
    })),
    s8 = (e) => e === 'true',
    l8 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let u = ee(() => r(!1), [r]);
      if (t === void 0)
        return d.createElement(
          de.Button,
          { id: _t(e), onClick: u },
          'Set boolean'
        );
      let o = Ee(e),
        i = typeof t == 'string' ? s8(t) : t;
      return d.createElement(
        i8,
        { htmlFor: o, title: i ? 'Change to false' : 'Change to true' },
        d.createElement('input', {
          id: o,
          type: 'checkbox',
          onChange: (p) => r(p.target.checked),
          checked: i,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        d.createElement('span', null, 'False'),
        d.createElement('span', null, 'True')
      );
    },
    c8 = (e) => {
      let [t, r, n] = e.split('-'),
        a = new Date();
      return (
        a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
      );
    },
    d8 = (e) => {
      let [t, r] = e.split(':'),
        n = new Date();
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
    },
    p8 = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2);
      return `${r}-${n}-${a}`;
    },
    f8 = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2);
      return `${r}:${n}`;
    },
    m8 = k.div(({ theme: e }) => ({
      flex: 1,
      display: 'flex',
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        '&::-webkit-calendar-picker-indicator': {
          opacity: 0.5,
          height: 12,
          filter: e.base === 'light' ? void 0 : 'invert(1)',
        },
      },
      'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
      'input:last-of-type': { flexGrow: 3 },
    })),
    h8 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [u, o] = H(!0),
        i = ie(),
        p = ie();
      Y(() => {
        u !== !1 &&
          (i && i.current && (i.current.value = p8(t)),
          p && p.current && (p.current.value = f8(t)));
      }, [t]);
      let f = (h) => {
          let m = c8(h.target.value),
            A = new Date(t);
          A.setFullYear(m.getFullYear(), m.getMonth(), m.getDate());
          let g = A.getTime();
          g && r(g), o(!!g);
        },
        E = (h) => {
          let m = d8(h.target.value),
            A = new Date(t);
          A.setHours(m.getHours()), A.setMinutes(m.getMinutes());
          let g = A.getTime();
          g && r(g), o(!!g);
        },
        v = Ee(e);
      return d.createElement(
        m8,
        null,
        d.createElement(de.Input, {
          type: 'date',
          max: '9999-12-31',
          ref: i,
          id: `${v}-date`,
          name: `${v}-date`,
          onChange: f,
          onFocus: n,
          onBlur: a,
        }),
        d.createElement(de.Input, {
          type: 'time',
          id: `${v}-time`,
          name: `${v}-time`,
          ref: p,
          onChange: E,
          onFocus: n,
          onBlur: a,
        }),
        u ? null : d.createElement('div', null, 'invalid')
      );
    },
    g8 = k.label({ display: 'flex' }),
    y8 = (e) => {
      let t = parseFloat(e);
      return Number.isNaN(t) ? void 0 : t;
    };
  var b8 = ({
      name: e,
      value: t,
      onChange: r,
      min: n,
      max: a,
      step: u,
      onBlur: o,
      onFocus: i,
    }) => {
      let [p, f] = H(typeof t == 'number' ? t : ''),
        [E, v] = H(!1),
        [h, m] = H(null),
        A = ee(
          (w) => {
            f(w.target.value);
            let I = parseFloat(w.target.value);
            Number.isNaN(I)
              ? m(new Error(`'${w.target.value}' is not a number`))
              : (r(I), m(null));
          },
          [r, m]
        ),
        g = ee(() => {
          f('0'), r(0), v(!0);
        }, [v]),
        x = ie(null);
      return (
        Y(() => {
          E && x.current && x.current.select();
        }, [E]),
        Y(() => {
          p !== (typeof t == 'number' ? t : '') && f(t);
        }, [t]),
        !E && t === void 0
          ? d.createElement(de.Button, { id: _t(e), onClick: g }, 'Set number')
          : d.createElement(
              g8,
              null,
              d.createElement(de.Input, {
                ref: x,
                id: Ee(e),
                type: 'number',
                onChange: A,
                size: 'flex',
                placeholder: 'Edit number...',
                value: p,
                valid: h ? 'error' : null,
                autoFocus: E,
                name: e,
                min: n,
                max: a,
                step: u,
                onFocus: i,
                onBlur: o,
              })
            )
      );
    },
    Mm = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e);
      return r ? r[0] : void 0;
    },
    fu = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    qm = (e, t) => e && t && e.map((r) => t[r]),
    D8 = k.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } }
    ),
    E8 = k.span({}),
    A8 = k.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Em = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          Ae.warn(`Checkbox with no options: ${e}`),
          d.createElement(d.Fragment, null, '-')
        );
      let u = fu(r, t),
        [o, i] = H(u),
        p = (E) => {
          let v = E.target.value,
            h = [...o];
          h.includes(v) ? h.splice(h.indexOf(v), 1) : h.push(v),
            n(qm(h, t)),
            i(h);
        };
      Y(() => {
        i(fu(r, t));
      }, [r]);
      let f = Ee(e);
      return d.createElement(
        D8,
        { isInline: a },
        Object.keys(t).map((E, v) => {
          let h = `${f}-${v}`;
          return d.createElement(
            A8,
            { key: h, htmlFor: h },
            d.createElement('input', {
              type: 'checkbox',
              id: h,
              name: h,
              value: E,
              onChange: p,
              checked: o?.includes(E),
            }),
            d.createElement(E8, null, E)
          );
        })
      );
    },
    C8 = k.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } }
    ),
    v8 = k.span({}),
    x8 = k.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Am = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return (
          Ae.warn(`Radio with no options: ${e}`),
          d.createElement(d.Fragment, null, '-')
        );
      let u = Mm(r, t),
        o = Ee(e);
      return d.createElement(
        C8,
        { isInline: a },
        Object.keys(t).map((i, p) => {
          let f = `${o}-${p}`;
          return d.createElement(
            x8,
            { key: f, htmlFor: f },
            d.createElement('input', {
              type: 'radio',
              id: f,
              name: f,
              value: i,
              onChange: (E) => n(t[E.currentTarget.value]),
              checked: i === u,
            }),
            d.createElement(v8, null, i)
          );
        })
      );
    },
    F8 = {
      appearance: 'none',
      border: '0 none',
      boxSizing: 'inherit',
      display: ' block',
      margin: ' 0',
      background: 'transparent',
      padding: 0,
      fontSize: 'inherit',
      position: 'relative',
    },
    jm = k.select(({ theme: e }) => ({
      ...F8,
      boxSizing: 'border-box',
      position: 'relative',
      padding: '6px 10px',
      width: '100%',
      color: e.input.color || 'inherit',
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
        outline: 'none',
      },
      '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
      '::placeholder': { color: e.textMutedColor },
      '&[multiple]': {
        overflow: 'auto',
        padding: 0,
        option: {
          display: 'block',
          padding: '6px 10px',
          marginLeft: 1,
          marginRight: 1,
        },
      },
    })),
    Lm = k.span(({ theme: e }) => ({
      display: 'inline-block',
      lineHeight: 'normal',
      overflow: 'hidden',
      position: 'relative',
      verticalAlign: 'top',
      width: '100%',
      svg: {
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
        height: '12px',
        marginTop: '-6px',
        right: '12px',
        top: '50%',
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    Cm = 'Choose option...',
    S8 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (i) => {
          n(r[i.currentTarget.value]);
        },
        u = Mm(t, r) || Cm,
        o = Ee(e);
      return d.createElement(
        Lm,
        null,
        d.createElement(fe, { icon: 'arrowdown' }),
        d.createElement(
          jm,
          { id: o, value: u, onChange: a },
          d.createElement('option', { key: 'no-selection', disabled: !0 }, Cm),
          Object.keys(r).map((i) => d.createElement('option', { key: i }, i))
        )
      );
    },
    B8 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (i) => {
          let p = Array.from(i.currentTarget.options)
            .filter((f) => f.selected)
            .map((f) => f.value);
          n(qm(p, r));
        },
        u = fu(t, r),
        o = Ee(e);
      return d.createElement(
        Lm,
        null,
        d.createElement(
          jm,
          { id: o, multiple: !0, value: u, onChange: a },
          Object.keys(r).map((i) => d.createElement('option', { key: i }, i))
        )
      );
    },
    vm = (e) => {
      let { name: t, options: r } = e;
      return r
        ? e.isMulti
          ? d.createElement(B8, { ...e })
          : d.createElement(S8, { ...e })
        : (Ae.warn(`Select with no options: ${t}`),
          d.createElement(d.Fragment, null, '-'));
    },
    w8 = (e, t) =>
      Array.isArray(e)
        ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
        : e,
    T8 = {
      check: Em,
      'inline-check': Em,
      radio: Am,
      'inline-radio': Am,
      select: vm,
      'multi-select': vm,
    },
    wt = (e) => {
      let { type: t = 'select', labels: r, argType: n } = e,
        a = {
          ...e,
          options: n ? w8(n.options, r) : {},
          isInline: t.includes('inline'),
          isMulti: t.includes('multi'),
        },
        u = T8[t];
      if (u) return d.createElement(u, { ...a });
      throw new Error(`Unknown options type: ${t}`);
    },
    Eu = 'value',
    R8 = 'key',
    k8 = 'Error',
    O8 = 'Object',
    I8 = 'Array',
    _8 = 'String',
    P8 = 'Number',
    N8 = 'Boolean',
    M8 = 'Date',
    q8 = 'Null',
    j8 = 'Undefined',
    L8 = 'Function',
    z8 = 'Symbol',
    $m = 'ADD_DELTA_TYPE',
    Hm = 'REMOVE_DELTA_TYPE',
    Um = 'UPDATE_DELTA_TYPE';
  function Xe(e) {
    return e !== null &&
      typeof e == 'object' &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == 'function'
      ? 'Iterable'
      : Object.prototype.toString.call(e).slice(8, -1);
  }
  function Gm(e, t) {
    let r = Xe(e),
      n = Xe(t);
    return (r === 'Function' || n === 'Function') && n !== r;
  }
  var Au = class extends Be {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this));
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props;
      e && typeof e.focus == 'function' && e.focus(),
        r && t && typeof t.focus == 'function' && t.focus(),
        document.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.props.handleCancel()));
    }
    onSubmit() {
      let {
          handleAdd: e,
          onlyValue: t,
          onSubmitValueParser: r,
          keyPath: n,
          deep: a,
        } = this.props,
        { inputRefKey: u, inputRefValue: o } = this.state,
        i = {};
      if (!t) {
        if (!u.value) return;
        i.key = u.value;
      }
      (i.newValue = r(!1, n, a, i.key, o.value)), e(i);
    }
    refInputKey(e) {
      this.state.inputRefKey = e;
    }
    refInputValue(e) {
      this.state.inputRefValue = e;
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: u,
          deep: o,
        } = this.props,
        i = ue(r, { onClick: this.onSubmit }),
        p = ue(n, { onClick: e }),
        f = a(Eu, u, o),
        E = ue(f, { placeholder: 'Value', ref: this.refInputValue }),
        v = null;
      if (!t) {
        let h = a(R8, u, o);
        v = ue(h, { placeholder: 'Key', ref: this.refInputKey });
      }
      return d.createElement(
        'span',
        { className: 'rejt-add-value-node' },
        v,
        E,
        p,
        i
      );
    }
  };
  Au.defaultProps = {
    onlyValue: !1,
    addButtonElement: d.createElement('button', null, '+'),
    cancelButtonElement: d.createElement('button', null, 'c'),
  };
  var Wm = class extends Be {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        u = n.length;
      a(n[u - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: u } = this.state,
          o = n[e];
        t(e, a, u, o)
          .then(() => {
            let i = { keyPath: a, deep: u, key: e, oldValue: o, type: Hm };
            n.splice(e, 1), this.setState({ data: n });
            let { onUpdate: p, onDeltaUpdate: f } = this.props;
            p(a[a.length - 1], n), f(i);
          })
          .catch(r.error);
      };
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: u } = this.props;
      a(t.length, r, n, e)
        .then(() => {
          let o = [...t, e];
          this.setState({ data: o }), this.handleAddValueCancel();
          let { onUpdate: i, onDeltaUpdate: p } = this.props;
          i(r[r.length - 1], o),
            p({
              type: $m,
              keyPath: r,
              deep: n,
              key: o.length - 1,
              newValue: e,
            });
        })
        .catch(u.error);
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: u, keyPath: o, nextDeep: i } = this.state,
          p = u[e];
        a(e, o, i, p, t)
          .then(() => {
            (u[e] = t), this.setState({ data: u });
            let { onUpdate: f, onDeltaUpdate: E } = this.props;
            f(o[o.length - 1], u),
              E({
                type: Um,
                keyPath: o,
                deep: i,
                key: e,
                newValue: t,
                oldValue: p,
              }),
              r(void 0);
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        {
          handleRemove: a,
          readOnly: u,
          getStyle: o,
          dataType: i,
          minusMenuElement: p,
        } = this.props,
        { minus: f, collapsed: E } = o(e, t, r, n, i),
        v = u(e, t, r, n, i),
        h = ue(p, { onClick: a, className: 'rejt-minus-menu', style: f });
      return d.createElement(
        'span',
        { className: 'rejt-collapsed' },
        d.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: E,
            onClick: this.handleCollapseMode,
          },
          '[...] ',
          t.length,
          ' ',
          t.length === 1 ? 'item' : 'items'
        ),
        !v && h
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          addFormVisible: a,
          nextDeep: u,
        } = this.state,
        {
          isCollapsed: o,
          handleRemove: i,
          onDeltaUpdate: p,
          readOnly: f,
          getStyle: E,
          dataType: v,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: A,
          inputElementGenerator: g,
          textareaElementGenerator: x,
          minusMenuElement: w,
          plusMenuElement: I,
          beforeRemoveAction: N,
          beforeAddAction: z,
          beforeUpdateAction: F,
          logger: _,
          onSubmitValueParser: O,
        } = this.props,
        {
          minus: $,
          plus: W,
          delimiter: j,
          ul: be,
          addForm: xe,
        } = E(e, t, r, n, v),
        Fe = f(e, t, r, n, v),
        Se = ue(I, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: W,
        }),
        X = ue(w, { onClick: i, className: 'rejt-minus-menu', style: $ }),
        He = !0,
        Qe = '[',
        ke = ']';
      return d.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        d.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: j },
          Qe
        ),
        !a && Se,
        d.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: be },
          t.map((ge, ce) =>
            d.createElement(ln, {
              key: ce,
              name: `${ce}`,
              data: ge,
              keyPath: r,
              deep: u,
              isCollapsed: o,
              handleRemove: this.handleRemoveItem(ce),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: p,
              readOnly: f,
              getStyle: E,
              addButtonElement: h,
              cancelButtonElement: m,
              editButtonElement: A,
              inputElementGenerator: g,
              textareaElementGenerator: x,
              minusMenuElement: w,
              plusMenuElement: I,
              beforeRemoveAction: N,
              beforeAddAction: z,
              beforeUpdateAction: F,
              logger: _,
              onSubmitValueParser: O,
            })
          )
        ),
        !Fe &&
          a &&
          d.createElement(
            'div',
            { className: 'rejt-add-form', style: xe },
            d.createElement(Au, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: He,
              addButtonElement: h,
              cancelButtonElement: m,
              inputElementGenerator: g,
              keyPath: r,
              deep: n,
              onSubmitValueParser: O,
            })
          ),
        d.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: j },
          ke
        ),
        !Fe && X
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: u, getStyle: o } = this.props,
        i = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        p = o(e, r, n, a, u);
      return d.createElement(
        'div',
        { className: 'rejt-array-node' },
        d.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          d.createElement(
            'span',
            { className: 'rejt-name', style: p.name },
            e,
            ' :',
            ' '
          )
        ),
        i
      );
    }
  };
  Wm.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: d.createElement('span', null, ' - '),
    plusMenuElement: d.createElement('span', null, ' + '),
  };
  var Vm = class extends Be {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: u,
        } = this.state,
        { readOnly: o, dataType: i } = this.props,
        p = o(r, n, a, u, i);
      e && !p && typeof t.focus == 'function' && t.focus();
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: u, name: o, deep: i } = this.state;
      if (!u) return;
      let p = n(!0, a, i, o, u.value);
      e({ value: p, key: o })
        .then(() => {
          Gm(t, p) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: u,
          originalValue: o,
          readOnly: i,
          dataType: p,
          getStyle: f,
          editButtonElement: E,
          cancelButtonElement: v,
          textareaElementGenerator: h,
          minusMenuElement: m,
          keyPath: A,
        } = this.props,
        g = f(e, o, n, a, p),
        x = null,
        w = null,
        I = i(e, o, n, a, p);
      if (r && !I) {
        let N = h(Eu, A, a, e, o, p),
          z = ue(E, { onClick: this.handleEdit }),
          F = ue(v, { onClick: this.handleCancelEdit }),
          _ = ue(N, { ref: this.refInput, defaultValue: o });
        (x = d.createElement(
          'span',
          { className: 'rejt-edit-form', style: g.editForm },
          _,
          ' ',
          F,
          z
        )),
          (w = null);
      } else {
        x = d.createElement(
          'span',
          {
            className: 'rejt-value',
            style: g.value,
            onClick: I ? null : this.handleEditMode,
          },
          t
        );
        let N = ue(m, {
          onClick: u,
          className: 'rejt-minus-menu',
          style: g.minus,
        });
        w = I ? null : N;
      }
      return d.createElement(
        'li',
        { className: 'rejt-function-value-node', style: g.li },
        d.createElement(
          'span',
          { className: 'rejt-name', style: g.name },
          e,
          ' :',
          ' '
        ),
        x,
        w
      );
    }
  };
  Vm.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: d.createElement('button', null, 'e'),
    cancelButtonElement: d.createElement('button', null, 'c'),
    minusMenuElement: d.createElement('span', null, ' - '),
  };
  var ln = class extends Be {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        });
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: u,
          handleUpdateValue: o,
          onUpdate: i,
          onDeltaUpdate: p,
          readOnly: f,
          getStyle: E,
          addButtonElement: v,
          cancelButtonElement: h,
          editButtonElement: m,
          inputElementGenerator: A,
          textareaElementGenerator: g,
          minusMenuElement: x,
          plusMenuElement: w,
          beforeRemoveAction: I,
          beforeAddAction: N,
          beforeUpdateAction: z,
          logger: F,
          onSubmitValueParser: _,
        } = this.props,
        O = () => !0,
        $ = Xe(e);
      switch ($) {
        case k8:
          return d.createElement(mu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: u,
            onUpdate: i,
            onDeltaUpdate: p,
            readOnly: O,
            dataType: $,
            getStyle: E,
            addButtonElement: v,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            textareaElementGenerator: g,
            minusMenuElement: x,
            plusMenuElement: w,
            beforeRemoveAction: I,
            beforeAddAction: N,
            beforeUpdateAction: z,
            logger: F,
            onSubmitValueParser: _,
          });
        case O8:
          return d.createElement(mu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: u,
            onUpdate: i,
            onDeltaUpdate: p,
            readOnly: f,
            dataType: $,
            getStyle: E,
            addButtonElement: v,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            textareaElementGenerator: g,
            minusMenuElement: x,
            plusMenuElement: w,
            beforeRemoveAction: I,
            beforeAddAction: N,
            beforeUpdateAction: z,
            logger: F,
            onSubmitValueParser: _,
          });
        case I8:
          return d.createElement(Wm, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: u,
            onUpdate: i,
            onDeltaUpdate: p,
            readOnly: f,
            dataType: $,
            getStyle: E,
            addButtonElement: v,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            textareaElementGenerator: g,
            minusMenuElement: x,
            plusMenuElement: w,
            beforeRemoveAction: I,
            beforeAddAction: N,
            beforeUpdateAction: z,
            logger: F,
            onSubmitValueParser: _,
          });
        case _8:
          return d.createElement(Ze, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: f,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case P8:
          return d.createElement(Ze, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: f,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case N8:
          return d.createElement(Ze, {
            name: t,
            value: e ? 'true' : 'false',
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: f,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case M8:
          return d.createElement(Ze, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: O,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case q8:
          return d.createElement(Ze, {
            name: t,
            value: 'null',
            originalValue: 'null',
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: f,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case j8:
          return d.createElement(Ze, {
            name: t,
            value: 'undefined',
            originalValue: 'undefined',
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: f,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case L8:
          return d.createElement(Vm, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: f,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            textareaElementGenerator: g,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        case z8:
          return d.createElement(Ze, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: u,
            handleUpdateValue: o,
            readOnly: O,
            dataType: $,
            getStyle: E,
            cancelButtonElement: h,
            editButtonElement: m,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: F,
            onSubmitValueParser: _,
          });
        default:
          return null;
      }
    }
  };
  ln.defaultProps = { keyPath: [], deep: 0 };
  var mu = class extends Be {
    constructor(e) {
      super(e);
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
      (this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        u = n.length;
      a(n[u - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: u, logger: o } = this.props;
      u(e, n, a, t)
        .then(() => {
          (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
          let { onUpdate: i, onDeltaUpdate: p } = this.props;
          i(n[n.length - 1], r),
            p({ type: $m, keyPath: n, deep: a, key: e, newValue: t });
        })
        .catch(o.error);
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: u } = this.state,
          o = n[e];
        t(e, a, u, o)
          .then(() => {
            let i = { keyPath: a, deep: u, key: e, oldValue: o, type: Hm };
            delete n[e], this.setState({ data: n });
            let { onUpdate: p, onDeltaUpdate: f } = this.props;
            p(a[a.length - 1], n), f(i);
          })
          .catch(r.error);
      };
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: u, keyPath: o, nextDeep: i } = this.state,
          p = u[e];
        a(e, o, i, p, t)
          .then(() => {
            (u[e] = t), this.setState({ data: u });
            let { onUpdate: f, onDeltaUpdate: E } = this.props;
            f(o[o.length - 1], u),
              E({
                type: Um,
                keyPath: o,
                deep: i,
                key: e,
                newValue: t,
                oldValue: p,
              }),
              r();
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        {
          handleRemove: a,
          readOnly: u,
          dataType: o,
          getStyle: i,
          minusMenuElement: p,
        } = this.props,
        { minus: f, collapsed: E } = i(e, n, t, r, o),
        v = Object.getOwnPropertyNames(n),
        h = u(e, n, t, r, o),
        m = ue(p, { onClick: a, className: 'rejt-minus-menu', style: f });
      return d.createElement(
        'span',
        { className: 'rejt-collapsed' },
        d.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: E,
            onClick: this.handleCollapseMode,
          },
          '{...}',
          ' ',
          v.length,
          ' ',
          v.length === 1 ? 'key' : 'keys'
        ),
        !h && m
      );
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          nextDeep: a,
          addFormVisible: u,
        } = this.state,
        {
          isCollapsed: o,
          handleRemove: i,
          onDeltaUpdate: p,
          readOnly: f,
          getStyle: E,
          dataType: v,
          addButtonElement: h,
          cancelButtonElement: m,
          editButtonElement: A,
          inputElementGenerator: g,
          textareaElementGenerator: x,
          minusMenuElement: w,
          plusMenuElement: I,
          beforeRemoveAction: N,
          beforeAddAction: z,
          beforeUpdateAction: F,
          logger: _,
          onSubmitValueParser: O,
        } = this.props,
        {
          minus: $,
          plus: W,
          addForm: j,
          ul: be,
          delimiter: xe,
        } = E(e, t, r, n, v),
        Fe = Object.getOwnPropertyNames(t),
        Se = f(e, t, r, n, v),
        X = ue(I, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: W,
        }),
        He = ue(w, { onClick: i, className: 'rejt-minus-menu', style: $ }),
        Qe = Fe.map((ce) =>
          d.createElement(ln, {
            key: ce,
            name: ce,
            data: t[ce],
            keyPath: r,
            deep: a,
            isCollapsed: o,
            handleRemove: this.handleRemoveValue(ce),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: p,
            readOnly: f,
            getStyle: E,
            addButtonElement: h,
            cancelButtonElement: m,
            editButtonElement: A,
            inputElementGenerator: g,
            textareaElementGenerator: x,
            minusMenuElement: w,
            plusMenuElement: I,
            beforeRemoveAction: N,
            beforeAddAction: z,
            beforeUpdateAction: F,
            logger: _,
            onSubmitValueParser: O,
          })
        ),
        ke = '{',
        ge = '}';
      return d.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        d.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: xe },
          ke
        ),
        !Se && X,
        d.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: be },
          Qe
        ),
        !Se &&
          u &&
          d.createElement(
            'div',
            { className: 'rejt-add-form', style: j },
            d.createElement(Au, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: h,
              cancelButtonElement: m,
              inputElementGenerator: g,
              keyPath: r,
              deep: n,
              onSubmitValueParser: O,
            })
          ),
        d.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: xe },
          ge
        ),
        !Se && He
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: u, dataType: o } = this.props,
        i = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        p = u(e, r, n, a, o);
      return d.createElement(
        'div',
        { className: 'rejt-object-node' },
        d.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          d.createElement(
            'span',
            { className: 'rejt-name', style: p.name },
            e,
            ' :',
            ' '
          )
        ),
        i
      );
    }
  };
  mu.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: d.createElement('span', null, ' - '),
    plusMenuElement: d.createElement('span', null, ' + '),
  };
  var Ze = class extends Be {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: u,
        } = this.state,
        { readOnly: o, dataType: i } = this.props,
        p = o(r, n, a, u, i);
      e && !p && typeof t.focus == 'function' && t.focus();
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: u, name: o, deep: i } = this.state;
      if (!u) return;
      let p = n(!0, a, i, o, u.value);
      e({ value: p, key: o })
        .then(() => {
          Gm(t, p) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let {
          name: e,
          value: t,
          editEnabled: r,
          keyPath: n,
          deep: a,
        } = this.state,
        {
          handleRemove: u,
          originalValue: o,
          readOnly: i,
          dataType: p,
          getStyle: f,
          editButtonElement: E,
          cancelButtonElement: v,
          inputElementGenerator: h,
          minusMenuElement: m,
          keyPath: A,
        } = this.props,
        g = f(e, o, n, a, p),
        x = i(e, o, n, a, p),
        w = r && !x,
        I = h(Eu, A, a, e, o, p),
        N = ue(E, { onClick: this.handleEdit }),
        z = ue(v, { onClick: this.handleCancelEdit }),
        F = ue(I, { ref: this.refInput, defaultValue: JSON.stringify(o) }),
        _ = ue(m, { onClick: u, className: 'rejt-minus-menu', style: g.minus });
      return d.createElement(
        'li',
        { className: 'rejt-value-node', style: g.li },
        d.createElement(
          'span',
          { className: 'rejt-name', style: g.name },
          e,
          ' : '
        ),
        w
          ? d.createElement(
              'span',
              { className: 'rejt-edit-form', style: g.editForm },
              F,
              ' ',
              z,
              N
            )
          : d.createElement(
              'span',
              {
                className: 'rejt-value',
                style: g.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t)
            ),
        !x && !w && _
      );
    }
  };
  Ze.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: d.createElement('button', null, 'e'),
    cancelButtonElement: d.createElement('button', null, 'c'),
    minusMenuElement: d.createElement('span', null, ' - '),
  };
  var $8 = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    H8 = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    U8 = {
      minus: { color: 'red' },
      editForm: {},
      value: { color: '#7bba3d' },
      li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
      name: { color: '#2287CD' },
    };
  function G8(e) {
    let t = e;
    if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
    try {
      t = JSON.parse(e);
    } catch {}
    return t;
  }
  var Km = class extends Be {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null;
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t);
    }
    removeRoot() {
      this.onUpdate(null, null);
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: u,
          addButtonElement: o,
          cancelButtonElement: i,
          editButtonElement: p,
          inputElement: f,
          textareaElement: E,
          minusMenuElement: v,
          plusMenuElement: h,
          beforeRemoveAction: m,
          beforeAddAction: A,
          beforeUpdateAction: g,
          logger: x,
          onSubmitValueParser: w,
          fallback: I = null,
        } = this.props,
        N = Xe(e),
        z = a;
      Xe(a) === 'Boolean' && (z = () => a);
      let F = f;
      f && Xe(f) !== 'Function' && (F = () => f);
      let _ = E;
      return (
        E && Xe(E) !== 'Function' && (_ = () => E),
        N === 'Object' || N === 'Array'
          ? d.createElement(
              'div',
              { className: 'rejt-tree' },
              d.createElement(ln, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: z,
                getStyle: u,
                addButtonElement: o,
                cancelButtonElement: i,
                editButtonElement: p,
                inputElementGenerator: F,
                textareaElementGenerator: _,
                minusMenuElement: v,
                plusMenuElement: h,
                handleRemove: this.removeRoot,
                beforeRemoveAction: m,
                beforeAddAction: A,
                beforeUpdateAction: g,
                logger: x,
                onSubmitValueParser: w,
              })
            )
          : I
      );
    }
  };
  Km.defaultProps = {
    rootName: 'root',
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case 'Object':
        case 'Error':
          return $8;
        case 'Array':
          return H8;
        default:
          return U8;
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => G8(a),
    inputElement: () => d.createElement('input', null),
    textareaElement: () => d.createElement('textarea', null),
    fallback: null,
  };
  var { window: W8 } = se,
    V8 = k.div(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
      '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
        { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
      '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
        { '& > svg': { opacity: 1 } },
      '.rejt-edit-form button': { display: 'none' },
      '.rejt-add-form': { marginLeft: 10 },
      '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
      '.rejt-name': { lineHeight: '22px' },
      '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
      '.rejt-plus-menu': { marginLeft: 5 },
      '.rejt-object-node > span > *': { position: 'relative', zIndex: 2 },
      '.rejt-object-node, .rejt-array-node': { position: 'relative' },
      '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
        {
          content: '""',
          position: 'absolute',
          top: 0,
          display: 'block',
          width: '100%',
          marginLeft: '-1rem',
          padding: '0 4px 0 1rem',
          height: 22,
        },
      '.rejt-collapsed::before, .rejt-not-collapsed::before': {
        zIndex: 1,
        background: 'transparent',
        borderRadius: 4,
        transition: 'background 0.2s',
        pointerEvents: 'none',
        opacity: 0.1,
      },
      '.rejt-object-node:hover, .rejt-array-node:hover': {
        '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
          background: e.color.secondary,
        },
      },
      '.rejt-collapsed::after, .rejt-not-collapsed::after': {
        content: '""',
        position: 'absolute',
        display: 'inline-block',
        pointerEvents: 'none',
        width: 0,
        height: 0,
      },
      '.rejt-collapsed::after': {
        left: -8,
        top: 8,
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid rgba(153,153,153,0.6)',
      },
      '.rejt-not-collapsed::after': {
        left: -10,
        top: 10,
        borderTop: '3px solid rgba(153,153,153,0.6)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
      },
      '.rejt-value': {
        display: 'inline-block',
        border: '1px solid transparent',
        borderRadius: 4,
        margin: '1px 0',
        padding: '0 4px',
        cursor: 'text',
        color: e.color.defaultText,
      },
      '.rejt-value-node:hover > .rejt-value': {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    ou = k.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : 'transparent',
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? 'bold' : 'normal',
      cursor: 'pointer',
      order: t ? 'initial' : 9,
    })),
    xm = k(fe)(({ theme: e, icon: t, disabled: r }) => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? 'not-allowed' : 'pointer',
      color: e.textMutedColor,
      '&:hover': r
        ? {}
        : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
      'svg + &': { marginLeft: 0 },
    })),
    Fm = k.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : '1px 0',
      padding: '3px 4px',
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: '14px',
      width: t === 'Key' ? 80 : 120,
      '&:focus': { border: `1px solid ${e.color.secondary}` },
    })),
    K8 = k(qe)(({ theme: e }) => ({
      position: 'absolute',
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: '0 3px',
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: '9px',
      fontWeight: 'bold',
      textDecoration: 'none',
      span: { marginLeft: 3, marginTop: 1 },
    })),
    Y8 = k(de.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: '7px 6px',
      fontFamily: e.typography.fonts.mono,
      fontSize: '12px',
      lineHeight: '18px',
      '&::placeholder': {
        fontFamily: e.typography.fonts.base,
        fontSize: '13px',
      },
      '&:placeholder-shown': { padding: '7px 10px' },
    })),
    J8 = {
      bubbles: !0,
      cancelable: !0,
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    },
    Z8 = (e) => {
      e.currentTarget.dispatchEvent(new W8.KeyboardEvent('keydown', J8));
    },
    X8 = (e) => {
      e.currentTarget.select();
    },
    Q8 = (e) => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
      li: { outline: 0 },
    }),
    Sm = ({ name: e, value: t, onChange: r }) => {
      let n = ju(),
        a = Me(() => t && (0, zm.default)(t), [t]),
        u = a != null,
        [o, i] = H(!u),
        [p, f] = H(null),
        E = ee(
          (x) => {
            try {
              x && r(JSON.parse(x)), f(void 0);
            } catch (w) {
              f(w);
            }
          },
          [r]
        ),
        [v, h] = H(!1),
        m = ee(() => {
          r({}), h(!0);
        }, [h]),
        A = ie(null);
      if (
        (Y(() => {
          v && A.current && A.current.select();
        }, [v]),
        !u)
      )
        return d.createElement(
          de.Button,
          { id: _t(e), onClick: m },
          'Set object'
        );
      let g = d.createElement(Y8, {
        ref: A,
        id: Ee(e),
        name: e,
        defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
        onBlur: (x) => E(x.target.value),
        placeholder: 'Edit JSON string...',
        autoFocus: v,
        valid: p ? 'error' : null,
      });
      return d.createElement(
        V8,
        null,
        ['Object', 'Array'].includes(Xe(a)) &&
          d.createElement(
            K8,
            {
              href: '#',
              onClick: (x) => {
                x.preventDefault(), i((w) => !w);
              },
            },
            d.createElement(fe, { icon: o ? 'eyeclose' : 'eye' }),
            d.createElement('span', null, 'RAW')
          ),
        o
          ? g
          : d.createElement(Km, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: Q8(n),
              cancelButtonElement: d.createElement(
                ou,
                { type: 'button' },
                'Cancel'
              ),
              editButtonElement: d.createElement(
                ou,
                { type: 'submit' },
                'Save'
              ),
              addButtonElement: d.createElement(
                ou,
                { type: 'submit', primary: !0 },
                'Save'
              ),
              plusMenuElement: d.createElement(xm, { icon: 'add' }),
              minusMenuElement: d.createElement(xm, { icon: 'subtract' }),
              inputElement: (x, w, I, N) =>
                N
                  ? d.createElement(Fm, { onFocus: X8, onBlur: Z8 })
                  : d.createElement(Fm, null),
              fallback: g,
            })
      );
    },
    e6 = k.input(({ theme: e, min: t, max: r, value: n }) => ({
      '&': {
        width: '100%',
        backgroundColor: 'transparent',
        appearance: 'none',
      },
      '&::-webkit-slider-runnable-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${De(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${De(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${_e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${_e(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
      },
      '&::-webkit-slider-thumb': {
        marginTop: '-6px',
        width: 16,
        height: 16,
        border: `1px solid ${Ie(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Ie(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        appearance: 'none',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${De(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-runnable-track': {
          borderColor: Ie(e.color.secondary, 0.4),
        },
        '&::-webkit-slider-thumb': {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      '&::-moz-range-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${De(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${De(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${_e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${_e(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
        outline: 'none',
      },
      '&::-moz-range-thumb': {
        width: 16,
        height: 16,
        border: `1px solid ${Ie(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Ie(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${De(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&::-ms-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${De(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${De(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${_e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${_e(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: 'transparent',
        width: '100%',
        height: '6px',
        cursor: 'pointer',
      },
      '&::-ms-fill-lower': { borderRadius: 6 },
      '&::-ms-fill-upper': { borderRadius: 6 },
      '&::-ms-thumb': {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${Ie(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: 'grab',
        marginTop: 0,
      },
      '@supports (-ms-ime-align:auto)': {
        'input[type=range]': { margin: '0' },
      },
    })),
    Bm = k.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: 'nowrap',
      fontFeatureSettings: 'tnum',
      fontVariantNumeric: 'tabular-nums',
    }),
    t6 = k.div({ display: 'flex', alignItems: 'center', width: '100%' });
  function r6(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  var n6 = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: u = 1,
      onBlur: o,
      onFocus: i,
    }) => {
      let p = (v) => {
          r(y8(v.target.value));
        },
        f = t !== void 0,
        E = Me(() => r6(u), [u]);
      return d.createElement(
        t6,
        null,
        d.createElement(Bm, null, n),
        d.createElement(e6, {
          id: Ee(e),
          type: 'range',
          onChange: p,
          name: e,
          value: t,
          min: n,
          max: a,
          step: u,
          onFocus: i,
          onBlur: o,
        }),
        d.createElement(Bm, null, `${f ? t.toFixed(E) : '--'}`, ' / ', a)
      );
    },
    a6 = k.label({ display: 'flex' }),
    u6 = k.div(({ isMaxed: e }) => ({
      marginLeft: '0.75rem',
      paddingTop: '0.35rem',
      color: e ? 'red' : void 0,
    })),
    o6 = ({
      name: e,
      value: t,
      onChange: r,
      onFocus: n,
      onBlur: a,
      maxLength: u,
    }) => {
      let o = (v) => {
          r(v.target.value);
        },
        [i, p] = H(!1),
        f = ee(() => {
          r(''), p(!0);
        }, [p]);
      if (t === void 0)
        return d.createElement(
          de.Button,
          { id: _t(e), onClick: f },
          'Set string'
        );
      let E = typeof t == 'string';
      return d.createElement(
        a6,
        null,
        d.createElement(de.Textarea, {
          id: Ee(e),
          maxLength: u,
          onChange: o,
          size: 'flex',
          placeholder: 'Edit string...',
          autoFocus: i,
          valid: E ? null : 'error',
          name: e,
          value: E ? t : '',
          onFocus: n,
          onBlur: a,
        }),
        u &&
          d.createElement(
            u6,
            { isMaxed: t?.length === u },
            t?.length ?? 0,
            ' / ',
            u
          )
      );
    },
    i6 = k(de.Input)({ padding: 10 });
  function s6(e) {
    e.forEach((t) => {
      t.startsWith('blob:') && URL.revokeObjectURL(t);
    });
  }
  var l6 = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
      let a = ie(null);
      function u(o) {
        if (!o.target.files) return;
        let i = Array.from(o.target.files).map((p) => URL.createObjectURL(p));
        e(i), s6(n);
      }
      return (
        Y(() => {
          n == null && a.current && (a.current.value = null);
        }, [n, t]),
        d.createElement(i6, {
          ref: a,
          id: Ee(t),
          type: 'file',
          name: t,
          multiple: !0,
          onChange: u,
          accept: r,
          size: 'flex',
        })
      );
    },
    c6 = Ru(() => Promise.resolve().then(() => (hm(), mm))),
    d6 = (e) =>
      d.createElement(
        Tu,
        { fallback: d.createElement('div', null) },
        d.createElement(c6, { ...e })
      ),
    p6 = {
      array: Sm,
      object: Sm,
      boolean: l8,
      color: d6,
      date: h8,
      number: b8,
      check: wt,
      'inline-check': wt,
      radio: wt,
      'inline-radio': wt,
      select: wt,
      'multi-select': wt,
      range: n6,
      text: o6,
      file: l6,
    },
    wm = () => d.createElement(d.Fragment, null, '-'),
    f6 = ({ row: e, arg: t, updateArgs: r }) => {
      let { key: n, control: a } = e,
        [u, o] = H(!1),
        [i, p] = H({ value: t });
      Y(() => {
        u || p({ value: t });
      }, [u, t]);
      let f = ee((A) => (p({ value: A }), r({ [n]: A }), A), [r, n]),
        E = ee(() => o(!1), []),
        v = ee(() => o(!0), []);
      if (!a || a.disable) return d.createElement(wm, null);
      let h = {
          name: n,
          argType: e,
          value: i.value,
          onChange: f,
          onBlur: E,
          onFocus: v,
        },
        m = p6[a.type] || wm;
      return d.createElement(m, { ...h, ...a, controlType: a.type });
    },
    m6 = k.span({ fontWeight: 'bold' }),
    h6 = k.span(({ theme: e }) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: 'help',
    })),
    g6 = k.div(({ theme: e }) => ({
      '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
      code: {
        ...Ge({ theme: e }),
        fontSize: 12,
        fontFamily: e.typography.fonts.mono,
      },
      '& code': { margin: 0, display: 'inline-block' },
      '& pre > code': { whiteSpace: 'pre-wrap' },
    })),
    y6 = k.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === 'light'
          ? V(0.1, e.color.defaultText)
          : V(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    b6 = k.div(({ theme: e, hasDescription: t }) => ({
      color:
        e.base === 'light'
          ? V(0.1, e.color.defaultText)
          : V(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    D6 = k.td(({ theme: e, expandable: t }) => ({
      paddingLeft: t ? '40px !important' : '20px !important',
    })),
    un = (e) => {
      let {
          row: t,
          updateArgs: r,
          compact: n,
          expandable: a,
          initialExpandedArgs: u,
        } = e,
        { name: o, description: i } = t,
        p = t.table || {},
        f = p.type || t.type,
        E = p.defaultValue || t.defaultValue,
        v = t.type?.required,
        h = i != null && i !== '';
      return d.createElement(
        'tr',
        null,
        d.createElement(
          D6,
          { expandable: a },
          d.createElement(m6, null, o),
          v ? d.createElement(h6, { title: 'Required' }, '*') : null
        ),
        n
          ? null
          : d.createElement(
              'td',
              null,
              h && d.createElement(g6, null, d.createElement(zr, null, i)),
              p.jsDocTags != null
                ? d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(
                      b6,
                      { hasDescription: h },
                      d.createElement(uu, { value: f, initialExpandedArgs: u })
                    ),
                    d.createElement(Zw, { tags: p.jsDocTags })
                  )
                : d.createElement(
                    y6,
                    { hasDescription: h },
                    d.createElement(uu, { value: f, initialExpandedArgs: u })
                  )
            ),
        n
          ? null
          : d.createElement(
              'td',
              null,
              d.createElement(uu, { value: E, initialExpandedArgs: u })
            ),
        r ? d.createElement('td', null, d.createElement(f6, { ...e })) : null
      );
    },
    E6 = k(fe)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        e.base === 'light'
          ? V(0.25, e.color.defaultText)
          : V(0.3, e.color.defaultText),
      border: 'none',
      display: 'inline-block',
    })),
    A6 = k.span(({ theme: e }) => ({
      display: 'flex',
      lineHeight: '20px',
      alignItems: 'center',
    })),
    C6 = k.td(({ theme: e }) => ({
      position: 'relative',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color:
        e.base === 'light'
          ? V(0.4, e.color.defaultText)
          : V(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      '& ~ td': { background: `${e.background.app} !important` },
    })),
    v6 = k.td(({ theme: e }) => ({
      position: 'relative',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content,
    })),
    x6 = k.td(({ theme: e }) => ({ position: 'relative' })),
    F6 = k.tr(({ theme: e }) => ({
      '&:hover > td': {
        backgroundColor: `${e.background.hoverable} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: 'row-resize',
      },
    })),
    Tm = k.button(() => ({
      background: 'none',
      border: 'none',
      padding: '0',
      font: 'inherit',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      color: 'transparent',
      cursor: 'row-resize !important',
    })),
    iu = ({
      level: e = 'section',
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [u, o] = H(n),
        i = e === 'subsection' ? v6 : C6,
        p = r?.length || 0,
        f = e === 'subsection' ? `${p} item${p !== 1 ? 's' : ''}` : '',
        E = u ? 'arrowdown' : 'arrowright',
        v = `${u ? 'Hide' : 'Show'} ${e === 'subsection' ? p : t} item${
          p !== 1 ? 's' : ''
        }`;
      return d.createElement(
        d.Fragment,
        null,
        d.createElement(
          F6,
          { title: v },
          d.createElement(
            i,
            { colSpan: 1 },
            d.createElement(Tm, { onClick: (h) => o(!u), tabIndex: 0 }, v),
            d.createElement(A6, null, d.createElement(E6, { icon: E }), t)
          ),
          d.createElement(
            x6,
            { colSpan: a - 1 },
            d.createElement(
              Tm,
              {
                onClick: (h) => o(!u),
                tabIndex: -1,
                style: { outline: 'none' },
              },
              v
            ),
            u ? null : f
          )
        ),
        u ? r : null
      );
    },
    S6 = k.table(
      ({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderCollapse: 'collapse',
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? V(0.25, e.color.defaultText)
                : V(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          ['tr:first-child']: {
            ['td:first-child, th:first-child']: {
              borderTopLeftRadius: r ? 0 : e.appBorderRadius,
            },
            ['td:last-child, th:last-child']: {
              borderTopRightRadius: r ? 0 : e.appBorderRadius,
            },
          },
          ['tr:last-child']: {
            ['td:first-child, th:first-child']: {
              borderBottomLeftRadius: r ? 0 : e.appBorderRadius,
            },
            ['td:last-child, th:last-child']: {
              borderBottomRightRadius: r ? 0 : e.appBorderRadius,
            },
          },
          tbody: {
            boxShadow:
              !r &&
              (e.base === 'light'
                ? `rgba(0, 0, 0, 0.10) 0 1px 3px 1px,
          ${V(0.035, e.appBorderColor)} 0 0 0 1px`
                : `rgba(0, 0, 0, 0.20) 0 2px 5px 1px,
          ${Ke(0.05, e.appBorderColor)} 0 0 0 1px`),
            borderRadius: e.appBorderRadius,
            '@media not all and (min-resolution:.001dpcm)': {
              '@supports (-webkit-appearance:none)': {
                borderWidth: 1,
                borderStyle: 'solid',
                ...(r && { borderColor: 'transparent' }),
                ...(!r && {
                  borderColor:
                    e.base === 'light'
                      ? V(0.035, e.appBorderColor)
                      : Ke(0.05, e.appBorderColor),
                }),
              },
            },
            tr: {
              background: 'transparent',
              overflow: 'hidden',
              ...(r
                ? {
                    borderTopWidth: 1,
                    borderTopStyle: 'solid',
                    borderTopColor:
                      e.base === 'light'
                        ? De(0.1, e.background.content)
                        : _e(0.05, e.background.content),
                  }
                : {
                    ['&:not(:first-child)']: {
                      borderTopWidth: 1,
                      borderTopStyle: 'solid',
                      borderTopColor:
                        e.base === 'light'
                          ? De(0.1, e.background.content)
                          : _e(0.05, e.background.content),
                    },
                  }),
            },
            td: { background: e.background.content },
          },
        },
      }),
      ({ isLoading: e, theme: t }) =>
        e
          ? {
              'th span, td span, td button': {
                display: 'inline',
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: 'transparent',
                boxShadow: 'none',
                borderRadius: 0,
              },
            }
          : {}
    ),
    B6 = k(qe)(({ theme: e }) => ({
      color: e.barTextColor,
      margin: '-4px -12px -4px 0',
    })),
    w6 = k.span({ display: 'flex', justifyContent: 'space-between' }),
    T6 = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        Number(!!t.type?.required) - Number(!!e.type?.required) ||
        e.name.localeCompare(t.name),
      none: void 0,
    },
    su = (e) => ({
      key: e,
      name: 'propertyName',
      description: 'This is a short description',
      control: { type: 'text' },
      table: {
        type: { summary: 'summary' },
        defaultValue: { summary: 'defaultValue' },
      },
    }),
    R6 = { rows: { row1: su('row1'), row2: su('row2'), row3: su('row3') } },
    k6 = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
      if (!e) return r;
      Object.entries(e).forEach(([u, o]) => {
        let { category: i, subcategory: p } = o?.table || {};
        if (i) {
          let f = r.sections[i] || { ungrouped: [], subsections: {} };
          if (!p) f.ungrouped.push({ key: u, ...o });
          else {
            let E = f.subsections[p] || [];
            E.push({ key: u, ...o }), (f.subsections[p] = E);
          }
          r.sections[i] = f;
        } else if (p) {
          let f = r.ungroupedSubsections[p] || [];
          f.push({ key: u, ...o }), (r.ungroupedSubsections[p] = f);
        } else r.ungrouped.push({ key: u, ...o });
      });
      let n = T6[t],
        a = (u) =>
          n
            ? Object.keys(u).reduce((o, i) => ({ ...o, [i]: u[i].sort(n) }), {})
            : u;
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (u, o) => ({
            ...u,
            [o]: {
              ungrouped: r.sections[o].ungrouped.sort(n),
              subsections: a(r.sections[o].subsections),
            },
          }),
          {}
        ),
      };
    },
    O6 = (e, t, r) => {
      try {
        return Ta(e, t, r);
      } catch (n) {
        return jr.warn(n.message), !1;
      }
    },
    lt = (e) => {
      if ('error' in e)
        return d.createElement(
          lu,
          null,
          e.error,
          '\xA0',
          d.createElement(
            ct,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs'
          )
        );
      let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: u,
          sort: o = 'none',
        } = e,
        i = 'isLoading' in e,
        { rows: p, args: f, globals: E } = 'rows' in e ? e : R6,
        v = k6(
          (0, Im.default)(
            p,
            (g) => !g?.table?.disable && O6(g, f || {}, E || {})
          ),
          o
        );
      if (
        v.ungrouped.length === 0 &&
        Object.entries(v.sections).length === 0 &&
        Object.entries(v.ungroupedSubsections).length === 0
      )
        return d.createElement(
          lu,
          null,
          'No inputs found for this component.\xA0',
          d.createElement(
            ct,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs'
          )
        );
      let h = 1;
      t && (h += 1), n || (h += 2);
      let m = Object.keys(v.sections).length > 0,
        A = {
          updateArgs: t,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: u,
        };
      return d.createElement(
        Ot,
        null,
        d.createElement(
          S6,
          {
            'aria-hidden': i,
            compact: n,
            inAddonPanel: a,
            isLoading: i,
            className: 'docblock-argstable',
          },
          d.createElement(
            'thead',
            { className: 'docblock-argstable-head' },
            d.createElement(
              'tr',
              null,
              d.createElement(
                'th',
                null,
                d.createElement('span', null, 'Name')
              ),
              n
                ? null
                : d.createElement(
                    'th',
                    null,
                    d.createElement('span', null, 'Description')
                  ),
              n
                ? null
                : d.createElement(
                    'th',
                    null,
                    d.createElement('span', null, 'Default')
                  ),
              t
                ? d.createElement(
                    'th',
                    null,
                    d.createElement(
                      w6,
                      null,
                      'Control',
                      ' ',
                      !i &&
                        r &&
                        d.createElement(
                          B6,
                          { onClick: () => r(), title: 'Reset controls' },
                          d.createElement(fe, {
                            icon: 'undo',
                            'aria-hidden': !0,
                          })
                        )
                    )
                  )
                : null
            )
          ),
          d.createElement(
            'tbody',
            { className: 'docblock-argstable-body' },
            v.ungrouped.map((g) =>
              d.createElement(un, {
                key: g.key,
                row: g,
                arg: f && f[g.key],
                ...A,
              })
            ),
            Object.entries(v.ungroupedSubsections).map(([g, x]) =>
              d.createElement(
                iu,
                { key: g, label: g, level: 'subsection', colSpan: h },
                x.map((w) =>
                  d.createElement(un, {
                    key: w.key,
                    row: w,
                    arg: f && f[w.key],
                    expandable: m,
                    ...A,
                  })
                )
              )
            ),
            Object.entries(v.sections).map(([g, x]) =>
              d.createElement(
                iu,
                { key: g, label: g, level: 'section', colSpan: h },
                x.ungrouped.map((w) =>
                  d.createElement(un, {
                    key: w.key,
                    row: w,
                    arg: f && f[w.key],
                    ...A,
                  })
                ),
                Object.entries(x.subsections).map(([w, I]) =>
                  d.createElement(
                    iu,
                    { key: w, label: w, level: 'subsection', colSpan: h },
                    I.map((N) =>
                      d.createElement(un, {
                        key: N.key,
                        row: N,
                        arg: f && f[N.key],
                        expandable: m,
                        ...A,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    },
    Ym = ({ tabs: e, ...t }) => {
      let r = Object.entries(e);
      return r.length === 1
        ? d.createElement(lt, { ...r[0][1], ...t })
        : d.createElement(
            Sn,
            null,
            r.map((n) => {
              let [a, u] = n,
                o = `prop_table_div_${a}`;
              return d.createElement(
                'div',
                { key: o, id: o, title: a },
                ({ active: i }) =>
                  i
                    ? d.createElement(lt, {
                        key: `prop_table_${a}`,
                        ...u,
                        ...t,
                      })
                    : null
              );
            })
          );
    },
    I6 = k.div(({ theme: e }) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: '10px 15px',
      lineHeight: '20px',
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    Jm = () =>
      d.createElement(
        I6,
        null,
        'This story is not configured to handle controls.',
        ' ',
        d.createElement(
          ct,
          {
            href: 'https://storybook.js.org/docs/react/essentials/controls',
            target: '_blank',
            cancel: !1,
            withArrow: !0,
          },
          'Learn how to add controls'
        )
      ),
    CY = k.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === 'light'
          ? V(0.4, e.color.defaultText)
          : V(0.6, e.color.defaultText),
    })),
    vY = k.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }),
    xY = k.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': { marginBottom: '1rem' },
    }),
    FY = k.div(We, ({ theme: e }) => ({
      ...sn(e),
      margin: '25px 0 40px',
      padding: '30px 20px',
    }));
  var RY = k.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    kY = k.div(({ theme: e }) => ({
      color:
        e.base === 'light'
          ? V(0.2, e.color.defaultText)
          : V(0.6, e.color.defaultText),
    })),
    OY = k.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
    IY = k.div(({ theme: e }) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? V(0.4, e.color.defaultText)
          : V(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    })),
    _Y = k.div({ display: 'flex', flexDirection: 'row' }),
    PY = k.div(({ background: e }) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    })),
    NY = k.div(({ theme: e }) => ({
      ...sn(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    })),
    MY = k.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    }),
    qY = k.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
    jY = k.div({ display: 'flex', alignItems: 'flex-start' }),
    LY = k.div({ flex: '0 0 30%' }),
    zY = k.div({ flex: 1 }),
    $Y = k.div(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? V(0.4, e.color.defaultText)
          : V(0.6, e.color.defaultText),
    })),
    HY = k.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }));
  var VY = k.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    KY = k.div(({ theme: e }) => ({
      ...sn(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    })),
    YY = k.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    }),
    JY = k.div({ display: 'flex', flexFlow: 'row wrap' });
  var _6 = (e) => `anchor--${e}`,
    P6 = ({ storyId: e, children: t }) =>
      d.createElement('div', { id: _6(e), className: 'sb-anchor' }, t);
  se &&
    se.__DOCS_CONTEXT__ === void 0 &&
    ((se.__DOCS_CONTEXT__ = et(null)),
    (se.__DOCS_CONTEXT__.displayName = 'DocsContext'));
  var Re = se ? se.__DOCS_CONTEXT__ : et(null),
    Cu = (e, t) => {
      let r = re(Re),
        n = r.resolveOf(e, t);
      switch (n.type) {
        case 'component':
          return { ...n, projectAnnotations: r.projectAnnotations };
        case 'meta':
          return {
            ...n,
            preparedMeta: Ua(
              n.csfFile.meta,
              r.projectAnnotations,
              n.csfFile.moduleExports.default
            ),
          };
        case 'story':
        default:
          return n;
      }
    };
  var vu = '^',
    N6 = (e) =>
      e
        .split('-')
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(''),
    Xm = (e) => {
      if (e)
        return typeof e == 'string'
          ? e.includes('-')
            ? N6(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name;
    };
  function Qm(e, t) {
    let r = xu([e], t);
    return r && r[0];
  }
  function xu(e, t) {
    let [r, n] = H({});
    return (
      Y(() => {
        Promise.all(
          e.map(async (a) => {
            let u = await t.loadStory(a);
            n((o) => (o[a] === u ? o : { ...o, [a]: u }));
          })
        );
      }),
      e.map((a) => {
        if (r[a]) return r[a];
        try {
          return t.storyById(a);
        } catch {
          return null;
        }
      })
    );
  }
  var M6 = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = H(r.args);
      Y(() => {
        let i = (p) => {
          p.storyId === e && a(p.args);
        };
        return t.channel.on(Wr, i), () => t.channel.off(Wr, i);
      }, [e]);
      let u = ee(
          (i) => t.channel.emit(La, { storyId: e, updatedArgs: i }),
          [e]
        ),
        o = ee((i) => t.channel.emit(ja, { storyId: e, argNames: i }), [e]);
      return [n, u, o];
    },
    q6 = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = H(t.globals);
      return (
        Y(() => {
          let a = (u) => {
            n(u.globals);
          };
          return e.channel.on(Gr, a), () => e.channel.off(Gr, a);
        }, []),
        [r]
      );
    },
    eh = (e, t, r, n) => {
      let { parameters: a } = t.storyById(),
        { extractArgTypes: u } = a.docs || {};
      if (!u)
        throw new Error(
          'Args unsupported. See Args documentation for your framework.'
        );
      let o = u(e);
      return (o = er(o, r, n)), o;
    },
    Rm = (e) => e && [vu].includes(e),
    j6 = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e,
        { component: a } = t.storyById();
      if (Rm(r) || Rm(n)) return a || null;
      if (!r) throw new Error('No component found.');
      return r;
    },
    hu = (e, t, r, n, a, u) => ({
      ...e,
      ...(0, Zm.default)(t, (o) => ({ rows: eh(o, r, n, a), sort: u })),
    }),
    L6 = (e) => {
      let t = re(Re),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: u,
          include: o,
          exclude: i,
          sort: p,
        } = e;
      try {
        let f;
        switch (r) {
          case vu: {
            f = t.storyById().id;
            break;
          }
          default:
            f = t.storyIdByName(r);
        }
        let E = Qm(f, t),
          [v, h, m] = M6(f, t),
          [A] = q6(t);
        if (!E)
          return d.createElement(lt, {
            isLoading: !0,
            updateArgs: h,
            resetArgs: m,
          });
        let g = er(E.argTypes, o, i),
          x = Xm(n) || 'Story',
          w = {
            [x]: { rows: g, args: v, globals: A, updateArgs: h, resetArgs: m },
          },
          I = g && Object.values(g).find((N) => !!N?.control);
        if (
          (I || ((h = null), (m = null), (w = {})),
          n && (!I || u) && (w = hu(w, { [x]: n }, t, o, i)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
            );
          w = hu(w, a, t, o, i);
        }
        return d.createElement(Ym, { tabs: w, sort: p });
      } catch (f) {
        return d.createElement(lt, { error: f.message });
      }
    },
    km = (e) => {
      let t = re(Re),
        { components: r, include: n, exclude: a, sort: u } = e,
        o = hu({}, r, t, n, a);
      return d.createElement(Ym, { tabs: o, sort: u });
    },
    z6 = (e) => {
      le(me`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
      let t = re(Re),
        {
          parameters: { controls: r },
          subcomponents: n,
        } = t.storyById(),
        { include: a, exclude: u, components: o, sort: i } = e,
        { story: p } = e,
        f = i || r?.sort,
        E = j6(e, t);
      if (p)
        return d.createElement(L6, {
          ...e,
          component: E,
          subcomponents: n,
          sort: f,
        });
      if (!o && !n) {
        let h;
        try {
          h = { rows: eh(E, t, a, u) };
        } catch (m) {
          h = { error: m.message };
        }
        return d.createElement(lt, { ...h, sort: f });
      }
      if (o) return d.createElement(km, { ...e, components: o, sort: f });
      let v = Xm(E);
      return d.createElement(km, {
        ...e,
        components: { [v]: E, ...n },
        sort: f,
      });
    };
  z6.defaultProps = { of: vu };
  var $6 = et({ sources: {} });
  var H6 = ((e) => (
      (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
    ))(H6 || {}),
    U6 = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean);
      return t.length === 0 ? 'closed' : t[0];
    },
    G6 = (e, t) => {
      let { sources: r } = t;
      return r?.[e] || { code: '' };
    },
    W6 = (e, t, r) => {
      let { __isArgsStory: n } = t.parameters,
        a = t.parameters.docs?.source || {},
        u = r || a.type || nr.AUTO;
      if (a.code !== void 0) return a.code;
      let o =
        u === nr.DYNAMIC || (u === nr.AUTO && e && n)
          ? e
          : a.originalSource || '';
      return a.transformSource?.(o, t) || o;
    },
    th = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = xu(n, t);
      if (!a.every(Boolean))
        return { error: 'Oh no! The source is not available.', state: 'none' };
      let u = a;
      if (e.of) u = [t.resolveOf(e.of, ['story']).story];
      else if (u.length === 0)
        try {
          u = [t.storyById()];
        } catch {}
      let o = u[0]?.parameters?.docs?.source || {},
        { code: i } = e,
        p = e.format ?? o.format,
        f = e.language ?? o.language ?? 'jsx',
        E = e.dark ?? o.dark ?? !1;
      i ||
        (i = u.map((h, m) => {
          let A = G6(h.id, r);
          return (
            m === 0 &&
              (p = A.format ?? h.parameters.docs?.source?.format ?? !1),
            W6(A.code, h, e.type)
          );
        }).join(`

`));
      let v = U6(u);
      return i
        ? { code: i, format: p, language: f, dark: E, state: v }
        : { error: 'Oh no! The source is not available.', state: v };
    };
  var rh = (e, t) => {
      let { id: r, of: n, meta: a, story: u } = e;
      if (r)
        return (
          le(me`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        );
      let { name: o } = e;
      return o
        ? (le(me`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(o))
        : (u &&
            le(me`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || u || 'story', ['story']).story.id);
    },
    V6 = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        u = a.story || {};
      if (a.disable) return null;
      let { inlineStories: o, iframeHeight: i } = a;
      typeof o < 'u' &&
        le(me`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
      let p = e.inline ?? u.inline ?? o ?? !1;
      if (
        (typeof i < 'u' &&
          le(me`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        p)
      ) {
        let E = e.height ?? u.height,
          v = e.autoplay ?? u.autoplay ?? !1;
        return {
          story: t,
          inline: !0,
          height: E,
          autoplay: v,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        };
      }
      let f = e.height ?? u.height ?? u.iframeHeight ?? i ?? '100px';
      return { story: t, inline: !1, height: f, primary: !!e.__primary };
    },
    K6 = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = re(Re),
        r = rh(e, t),
        n = Qm(r, t);
      if (!n) return d.createElement(Du, null);
      let a = V6(e, n, t);
      return a ? d.createElement(zw, { ...a }) : null;
    },
    Y6 = (
      { withSource: e, mdxSource: t, children: r, layout: n, ...a },
      u,
      o
    ) => {
      let i = kt
          .toArray(r)
          .filter((h) => h.props && (h.props.id || h.props.name || h.props.of))
          .map((h) => rh(h.props, u)),
        p = xu(i, u),
        f = p.some((h) => !h),
        E = th(
          t ? { code: decodeURI(t), of: a.of } : { ids: i, of: a.of },
          u,
          o
        );
      if (e === 'none') return { isLoading: f, previewProps: a };
      let v = n;
      return (
        kt.forEach(r, (h) => {
          v || (v = h?.props?.parameters?.layout);
        }),
        p.forEach((h) => {
          v ||
            !h ||
            (v = h?.parameters.layout ?? h.parameters.docs?.canvas?.layout);
        }),
        {
          isLoading: f,
          previewProps: {
            ...a,
            layout: v ?? 'padded',
            withSource: E,
            isExpanded: (e || E.state) === 'open',
          },
        }
      );
    },
    J6 = (e) => {
      let t = re(Re),
        r = re($6),
        { children: n, of: a, source: u } = e,
        { isLoading: o, previewProps: i } = Y6(e, t, r),
        p,
        f,
        E;
      try {
        ({ story: p } = Cu(a || 'story', ['story']));
      } catch (x) {
        n || (E = x);
      }
      try {
        f = th({ ...u, of: a }, t, r);
      } catch (x) {
        n || (E = x);
      }
      if (E) throw E;
      if (
        (e.withSource &&
          le(me`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          le(me`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          le(me`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          le(me`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          o ? d.createElement(Yw, null) : d.createElement(du, { ...i }, n)
        );
      let v =
          e.layout ??
          p.parameters.layout ??
          p.parameters.docs?.canvas?.layout ??
          'padded',
        h = e.withToolbar ?? p.parameters.docs?.canvas?.withToolbar ?? !1,
        m = e.additionalActions ?? p.parameters.docs?.canvas?.additionalActions,
        A = e.sourceState ?? p.parameters.docs?.canvas?.sourceState ?? 'hidden',
        g = e.className ?? p.parameters.docs?.canvas?.className;
      return d.createElement(
        du,
        {
          withSource: A === 'none' ? void 0 : f,
          isExpanded: A === 'shown',
          withToolbar: h,
          additionalActions: m,
          className: g,
          layout: v,
        },
        d.createElement(K6, {
          of: a || p.moduleExport,
          meta: e.meta,
          ...e.story,
        })
      );
    };
  var { document: nh } = se;
  var Z6 = ({ className: e, children: t, ...r }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return d.createElement(En, null, t);
    let n = e && e.split('-');
    return d.createElement(yu, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    });
  };
  function Fu(e, t) {
    e.channel.emit(lp, t);
  }
  var gu = Rn.a,
    X6 = ({ hash: e, children: t }) => {
      let r = re(Re);
      return d.createElement(
        gu,
        {
          href: e,
          target: '_self',
          onClick: (n) => {
            let a = e.substring(1);
            nh.getElementById(a) && Fu(r, e);
          },
        },
        t
      );
    },
    Q6 = (e) => {
      let { href: t, target: r, children: n, ...a } = e,
        u = re(Re);
      if (t) {
        if (t.startsWith('#')) return d.createElement(X6, { hash: t }, n);
        if (r !== '_blank' && !t.startsWith('https://'))
          return d.createElement(
            gu,
            {
              href: t,
              onClick: (o) => {
                o.preventDefault(), Fu(u, o.currentTarget.getAttribute('href'));
              },
              target: r,
              ...a,
            },
            n
          );
      }
      return d.createElement(gu, { ...e });
    },
    ah = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    eT = ah.reduce(
      (e, t) => ({
        ...e,
        [t]: k(t)({
          '& svg': { visibility: 'hidden' },
          '&:hover svg': { visibility: 'visible' },
        }),
      }),
      {}
    ),
    tT = k.a(() => ({
      float: 'left',
      paddingRight: '4px',
      marginLeft: '-20px',
      color: 'inherit',
    })),
    rT = ({ as: e, id: t, children: r, ...n }) => {
      let a = re(Re),
        u = eT[e],
        o = `#${t}`;
      return d.createElement(
        u,
        { id: t, ...n },
        d.createElement(
          tT,
          {
            'aria-hidden': 'true',
            href: o,
            tabIndex: -1,
            target: '_self',
            onClick: (i) => {
              nh.getElementById(t) && Fu(a, o);
            },
          },
          d.createElement(
            'svg',
            {
              viewBox: '0 0 16 16',
              version: '1.1',
              width: '16',
              height: '16',
              'aria-hidden': 'true',
              fill: 'currentColor',
            },
            d.createElement('path', {
              fillRule: 'evenodd',
              d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
            })
          )
        ),
        r
      );
    },
    Su = (e) => {
      let { as: t, id: r, children: n, ...a } = e;
      if (r) return d.createElement(rT, { as: t, id: r, ...a }, n);
      let u = t,
        { as: o, ...i } = e;
      return d.createElement(u, { ...On(i, t) });
    },
    nT = ah.reduce(
      (e, t) => ({ ...e, [t]: (r) => d.createElement(Su, { as: t, ...r }) }),
      {}
    ),
    aT = (e) => {
      if (!e.children) return null;
      if (typeof e.children != 'string')
        throw new Error(me`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
      return d.createElement(zr, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: { code: Z6, a: Q6, ...nT, ...e?.options?.overrides },
          ...e?.options,
        },
      });
    },
    uT = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(uT || {}),
    on =
      'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
    oT = (e) => e && (typeof e == 'string' ? e : Zr(e.markdown) || Zr(e.text)),
    iT = (e) => e && (typeof e == 'string' ? e : Zr(e.text)),
    sT = (e) => null,
    lT = (e) => {
      switch (e.type) {
        case 'story':
          return e.story.parameters.docs?.description?.story || null;
        case 'meta': {
          let { parameters: t, component: r } = e.preparedMeta;
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, {
              component: r,
              parameters: t,
            }) ||
            null
          );
        }
        case 'component': {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e;
          return (
            r.docs?.extractComponentDescription?.(t, {
              component: t,
              parameters: r,
            }) || null
          );
        }
        default:
          throw new Error(
            `Unrecognized module type resolved from 'useOf', got: ${e.type}`
          );
      }
    },
    cT = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: u } = n();
      if (r || t) return r || t;
      let { notes: o, info: i, docs: p } = u;
      (Boolean(o) || Boolean(i)) &&
        le(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${on}`
        );
      let { extractComponentDescription: f = sT, description: E } = p || {},
        v = E?.component;
      if (v) return v;
      switch (e) {
        case 'info':
          return iT(i);
        case 'notes':
          return oT(o);
        case 'docgen':
        case 'auto':
        default:
          return f(a, { component: a, ...u });
      }
    },
    dT = (e) => {
      let { of: t, type: r, markdown: n, children: a } = e,
        u = re(Re),
        o = Cu(t || 'meta'),
        i;
      return (
        r || n || a ? (i = cT(e, u)) : (i = lT(o)),
        r &&
          le(`Manually specifying description type is deprecated. See ${on}`),
        n &&
          le(
            `The 'markdown' prop on the Description block is deprecated. See ${on}`
          ),
        a &&
          le(
            `The 'children' prop on the Description block is deprecated. See ${on}`
          ),
        i ? d.createElement(aT, null, i) : null
      );
    },
    { document: qJ, window: jJ } = se;
  var pT = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != 'string') return d.createElement(vn, null, e);
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      return d.createElement(Su, { as: 'h3', id: r }, e);
    },
    fT = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let { story: u } = Cu(e || 'story', ['story']),
        o = u.parameters.docs?.canvas?.withToolbar ?? r;
      return d.createElement(
        P6,
        { storyId: u.id },
        t &&
          d.createElement(
            d.Fragment,
            null,
            d.createElement(pT, null, u.name),
            d.createElement(dT, { of: e })
          ),
        d.createElement(J6, {
          of: e,
          withToolbar: o,
          story: { __forceInitialArgs: n, __primary: a },
        })
      );
    };
  var mT = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != 'string') return d.createElement(Cn, null, e);
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
      return d.createElement(Su, { as: 'h2', id: r }, e);
    },
    hT = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = re(Re),
        n = r().filter((a) => !a.parameters?.docs?.disable);
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : d.createElement(
              d.Fragment,
              null,
              d.createElement(mT, null, e),
              n.map(
                (a) =>
                  a &&
                  d.createElement(fT, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  })
              )
            )
      );
    };
  hT.defaultProps = { title: 'Stories' };
  var gT = () => {
    let [e, t, r] = Iu(),
      [n] = _u(),
      a = sr(),
      u = yn('__isArgsStory', !1),
      {
        expanded: o,
        sort: i,
        presetColors: p,
        hideNoControlsWarning: f = !1,
      } = yn(mn, {}),
      { path: E } = Pu(),
      v = Object.values(a).some((A) => A?.control),
      h = !(v && u) && !f,
      m = Object.entries(a).reduce(
        (A, [g, x]) => (
          x?.control?.type !== 'color' || x?.control?.presetColors
            ? (A[g] = x)
            : (A[g] = { ...x, control: { ...x.control, presetColors: p } }),
          A
        ),
        {}
      );
    return d.createElement(
      d.Fragment,
      null,
      h && d.createElement(Jm, null),
      d.createElement(lt, {
        key: E,
        compact: !o && v,
        rows: m,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: i,
      })
    );
  };
  gn.register(fn, (e) => {
    gn.addPanel(fn, {
      title() {
        let t = sr(),
          r = Object.values(t).filter(
            (n) => n?.control && !n?.table?.disable
          ).length;
        return `Controls${r === 0 ? '' : ` (${r})`}`;
      },
      type: Ou.PANEL,
      paramKey: mn,
      render: ({ key: t, active: r }) =>
        !r || !e.getCurrentStoryData()
          ? null
          : d.createElement(
              Dn,
              { key: t, active: r },
              d.createElement(gT, null)
            ),
    });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.mjs.map
