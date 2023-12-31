try {
  var re = Object.create;
  var K = Object.defineProperty;
  var ne = Object.getOwnPropertyDescriptor;
  var oe = Object.getOwnPropertyNames;
  var ie = Object.getPrototypeOf,
    ae = Object.prototype.hasOwnProperty;
  var C = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, s) => (typeof require < 'u' ? require : t)[s] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var D = (e, t) => () => (e && (t = e((e = 0))), t);
  var se = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var le = (e, t, s, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of oe(t))
        !ae.call(e, i) &&
          i !== s &&
          K(e, i, {
            get: () => t[i],
            enumerable: !(o = ne(t, i)) || o.enumerable,
          });
    return e;
  };
  var ue = (e, t, s) => (
    (s = e != null ? re(ie(e)) : {}),
    le(
      t || !e || !e.__esModule
        ? K(s, 'default', { value: e, enumerable: !0 })
        : s,
      e
    )
  );
  var c = D(() => {});
  var d = D(() => {});
  var m = D(() => {});
  var J = se((Z, q) => {
    c();
    d();
    m();
    (function (e) {
      if (typeof Z == 'object' && typeof q < 'u') q.exports = e();
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
      var e, t, s;
      return (function o(i, y, l) {
        function r(a, h) {
          if (!y[a]) {
            if (!i[a]) {
              var u = typeof C == 'function' && C;
              if (!h && u) return u(a, !0);
              if (n) return n(a, !0);
              var S = new Error("Cannot find module '" + a + "'");
              throw ((S.code = 'MODULE_NOT_FOUND'), S);
            }
            var f = (y[a] = { exports: {} });
            i[a][0].call(
              f.exports,
              function (g) {
                var E = i[a][1][g];
                return r(E || g);
              },
              f,
              f.exports,
              o,
              i,
              y,
              l
            );
          }
          return y[a].exports;
        }
        for (var n = typeof C == 'function' && C, p = 0; p < l.length; p++)
          r(l[p]);
        return r;
      })(
        {
          1: [
            function (o, i, y) {
              i.exports = function (l) {
                if (typeof Map != 'function' || l) {
                  var r = o('./similar');
                  return new r();
                } else return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (o, i, y) {
              function l() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (l.prototype.get = function (r) {
                var n;
                if (this.lastItem && this.isEqual(this.lastItem.key, r))
                  return this.lastItem.val;
                if (((n = this.indexOf(r)), n >= 0))
                  return (this.lastItem = this.list[n]), this.list[n].val;
              }),
                (l.prototype.set = function (r, n) {
                  var p;
                  return this.lastItem && this.isEqual(this.lastItem.key, r)
                    ? ((this.lastItem.val = n), this)
                    : ((p = this.indexOf(r)),
                      p >= 0
                        ? ((this.lastItem = this.list[p]),
                          (this.list[p].val = n),
                          this)
                        : ((this.lastItem = { key: r, val: n }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (l.prototype.delete = function (r) {
                  var n;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, r) &&
                      (this.lastItem = void 0),
                    (n = this.indexOf(r)),
                    n >= 0)
                  )
                    return this.size--, this.list.splice(n, 1)[0];
                }),
                (l.prototype.has = function (r) {
                  var n;
                  return this.lastItem && this.isEqual(this.lastItem.key, r)
                    ? !0
                    : ((n = this.indexOf(r)),
                      n >= 0 ? ((this.lastItem = this.list[n]), !0) : !1);
                }),
                (l.prototype.forEach = function (r, n) {
                  var p;
                  for (p = 0; p < this.size; p++)
                    r.call(n || this, this.list[p].val, this.list[p].key, this);
                }),
                (l.prototype.indexOf = function (r) {
                  var n;
                  for (n = 0; n < this.size; n++)
                    if (this.isEqual(this.list[n].key, r)) return n;
                  return -1;
                }),
                (l.prototype.isEqual = function (r, n) {
                  return r === n || (r !== r && n !== n);
                }),
                (i.exports = l);
            },
            {},
          ],
          3: [
            function (o, i, y) {
              var l = o('map-or-similar');
              i.exports = function (a) {
                var h = new l(void 0 === 'true'),
                  u = [];
                return function (S) {
                  var f = function () {
                    var g = h,
                      E,
                      B,
                      O = arguments.length - 1,
                      A = Array(O + 1),
                      x = !0,
                      k;
                    if ((f.numArgs || f.numArgs === 0) && f.numArgs !== O + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      );
                    for (k = 0; k < O; k++) {
                      if (
                        ((A[k] = { cacheItem: g, arg: arguments[k] }),
                        g.has(arguments[k]))
                      ) {
                        g = g.get(arguments[k]);
                        continue;
                      }
                      (x = !1),
                        (E = new l(void 0 === 'true')),
                        g.set(arguments[k], E),
                        (g = E);
                    }
                    return (
                      x &&
                        (g.has(arguments[O])
                          ? (B = g.get(arguments[O]))
                          : (x = !1)),
                      x ||
                        ((B = S.apply(null, arguments)),
                        g.set(arguments[O], B)),
                      a > 0 &&
                        ((A[O] = { cacheItem: g, arg: arguments[O] }),
                        x ? r(u, A) : u.push(A),
                        u.length > a && n(u.shift())),
                      (f.wasMemoized = x),
                      (f.numArgs = O + 1),
                      B
                    );
                  };
                  return (
                    (f.limit = a),
                    (f.wasMemoized = !1),
                    (f.cache = h),
                    (f.lru = u),
                    f
                  );
                };
              };
              function r(a, h) {
                var u = a.length,
                  S = h.length,
                  f,
                  g,
                  E;
                for (g = 0; g < u; g++) {
                  for (f = !0, E = 0; E < S; E++)
                    if (!p(a[g][E].arg, h[E].arg)) {
                      f = !1;
                      break;
                    }
                  if (f) break;
                }
                a.push(a.splice(g, 1)[0]);
              }
              function n(a) {
                var h = a.length,
                  u = a[h - 1],
                  S,
                  f;
                for (
                  u.cacheItem.delete(u.arg), f = h - 2;
                  f >= 0 &&
                  ((u = a[f]), (S = u.cacheItem.get(u.arg)), !S || !S.size);
                  f--
                )
                  u.cacheItem.delete(u.arg);
              }
              function p(a, h) {
                return a === h || (a !== a && h !== h);
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
  c();
  d();
  m();
  c();
  d();
  m();
  c();
  d();
  m();
  c();
  d();
  m();
  c();
  d();
  m();
  var Y = (() => {
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
  c();
  d();
  m();
  function $(e) {
    for (var t = [], s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
    var o = Array.from(typeof e == 'string' ? [e] : e);
    o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var i = o.reduce(function (r, n) {
      var p = n.match(/\n([\t ]+|(?!\s).)/g);
      return p
        ? r.concat(
            p.map(function (a) {
              var h, u;
              return (u =
                (h = a.match(/[\t ]/g)) === null || h === void 0
                  ? void 0
                  : h.length) !== null && u !== void 0
                ? u
                : 0;
            })
          )
        : r;
    }, []);
    if (i.length) {
      var y = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, i) +
          '}',
        'g'
      );
      o = o.map(function (r) {
        return r.replace(
          y,
          `
`
        );
      });
    }
    o[0] = o[0].replace(/^\r?\n/, '');
    var l = o[0];
    return (
      t.forEach(function (r, n) {
        var p = l.match(/(?:^|\n)( *)$/),
          a = p ? p[1] : '',
          h = r;
        typeof r == 'string' &&
          r.includes(`
`) &&
          (h = String(r)
            .split(
              `
`
            )
            .map(function (u, S) {
              return S === 0 ? u : '' + a + u;
            }).join(`
`)),
          (l += h + o[n + 1]);
      }),
      l
    );
  }
  c();
  d();
  m();
  var Ae = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: Me,
      logger: M,
      once: Re,
      pretty: Le,
    } = __STORYBOOKCLIENTLOGGER__;
  var R = 'storybook/background',
    I = 'backgrounds',
    He = { UPDATE: `${R}/update` },
    { document: Fe, window: Ke } = Y;
  var U = (e, t = [], s) => {
    if (e === 'transparent') return 'transparent';
    if (t.find((i) => i.value === e)) return e;
    let o = t.find((i) => i.name === s);
    if (o) return o.value;
    if (s) {
      let i = t.map((y) => y.name).join(', ');
      M.warn($`
        Backgrounds Addon: could not find the default color "${s}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `);
    }
    return 'transparent';
  };
  c();
  d();
  m();
  var b = __REACT__,
    {
      Children: je,
      Component: Ve,
      Fragment: L,
      Profiler: Ze,
      PureComponent: Je,
      StrictMode: Qe,
      Suspense: Xe,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: et,
      cloneElement: tt,
      createContext: rt,
      createElement: nt,
      createFactory: ot,
      createRef: it,
      forwardRef: at,
      isValidElement: st,
      lazy: lt,
      memo: w,
      useCallback: W,
      useContext: ut,
      useDebugValue: ct,
      useEffect: dt,
      useImperativeHandle: mt,
      useLayoutEffect: ft,
      useMemo: j,
      useReducer: pt,
      useRef: ht,
      useState: gt,
      version: yt,
    } = __REACT__;
  c();
  d();
  m();
  var _t = __STORYBOOKAPI__,
    {
      ActiveTabs: vt,
      Consumer: Ot,
      ManagerContext: It,
      Provider: kt,
      addons: z,
      combineParameters: xt,
      controlOrMetaKey: Ct,
      controlOrMetaSymbol: Bt,
      eventMatchesShortcut: At,
      eventToShortcut: Mt,
      isMacLike: Rt,
      isShortcutTaken: Lt,
      keyToSymbol: wt,
      merge: Pt,
      mockChannel: Nt,
      optionOrAltSymbol: Gt,
      shortcutMatchesShortcut: Ht,
      shortcutToHumanString: Dt,
      types: V,
      useAddonState: zt,
      useArgTypes: qt,
      useArgs: Ft,
      useChannel: Kt,
      useGlobalTypes: Yt,
      useGlobals: P,
      useParameter: N,
      useSharedState: $t,
      useStoryPrepared: Ut,
      useStorybookApi: Wt,
      useStorybookState: jt,
    } = __STORYBOOKAPI__;
  var F = ue(J(), 1);
  c();
  d();
  m();
  var nr = __STORYBOOKCOMPONENTS__,
    {
      A: or,
      ActionBar: ir,
      AddonPanel: ar,
      Badge: sr,
      Bar: lr,
      Blockquote: ur,
      Button: cr,
      Code: dr,
      DL: mr,
      Div: fr,
      DocumentWrapper: pr,
      FlexBar: hr,
      Form: gr,
      H1: yr,
      H2: br,
      H3: Sr,
      H4: Er,
      H5: Tr,
      H6: _r,
      HR: vr,
      IconButton: G,
      IconButtonSkeleton: Or,
      Icons: H,
      Img: Ir,
      LI: kr,
      Link: xr,
      Loader: Cr,
      OL: Br,
      P: Ar,
      Placeholder: Mr,
      Pre: Rr,
      ResetWrapper: Lr,
      ScrollArea: wr,
      Separator: Pr,
      Spaced: Nr,
      Span: Gr,
      StorybookIcon: Hr,
      StorybookLogo: Dr,
      Symbols: zr,
      SyntaxHighlighter: qr,
      TT: Fr,
      TabBar: Kr,
      TabButton: Yr,
      TabWrapper: $r,
      Table: Ur,
      Tabs: Wr,
      TabsState: jr,
      TooltipLinkList: Q,
      TooltipMessage: Vr,
      TooltipNote: Zr,
      UL: Jr,
      WithTooltip: X,
      WithTooltipPure: Qr,
      Zoom: Xr,
      codeCommon: en,
      components: tn,
      createCopyToClipboardFunction: rn,
      getStoryHref: nn,
      interleaveSeparators: on,
      nameSpaceClassNames: an,
      resetComponents: sn,
      withReset: ln,
    } = __STORYBOOKCOMPONENTS__;
  c();
  d();
  m();
  var fn = __STORYBOOKTHEMING__,
    {
      CacheProvider: pn,
      ClassNames: hn,
      Global: gn,
      ThemeProvider: yn,
      background: bn,
      color: Sn,
      convert: En,
      create: Tn,
      createCache: _n,
      createGlobal: vn,
      createReset: On,
      css: In,
      darken: kn,
      ensure: xn,
      ignoreSsrWarning: Cn,
      isPropValid: Bn,
      jsx: An,
      keyframes: Mn,
      lighten: Rn,
      styled: ee,
      themes: Ln,
      typography: wn,
      useTheme: Pn,
      withTheme: Nn,
    } = __STORYBOOKTHEMING__;
  var ce = ee.span(
      ({ background: e }) => ({
        borderRadius: '1rem',
        display: 'block',
        height: '1rem',
        width: '1rem',
        background: e,
      }),
      ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` })
    ),
    te = (0, F.default)(1e3)((e, t, s, o, i, y) => ({
      id: e || t,
      title: t,
      onClick: () => {
        i({ selected: s, name: t });
      },
      value: s,
      right: o ? b.createElement(ce, { background: s }) : void 0,
      active: y,
    })),
    de = (0, F.default)(10)((e, t, s) => {
      let o = e.map(({ name: i, value: y }) => te(null, i, y, !0, s, y === t));
      return t !== 'transparent'
        ? [te('reset', 'Clear background', 'transparent', null, s, !1), ...o]
        : o;
    }),
    me = { default: null, disable: !0, values: [] },
    fe = w(function () {
      let e = N(I, me),
        [t, s] = P(),
        o = t[I]?.value,
        i = j(() => U(o, e.values, e.default), [e, o]);
      Array.isArray(e) &&
        M.warn(
          'Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'
        );
      let y = W(
        (l) => {
          s({ [I]: { ...t[I], value: l } });
        },
        [e, t, s]
      );
      return e.disable
        ? null
        : b.createElement(
            L,
            null,
            b.createElement(
              X,
              {
                placement: 'top',
                trigger: 'click',
                closeOnOutsideClick: !0,
                tooltip: ({ onHide: l }) =>
                  b.createElement(Q, {
                    links: de(e.values, i, ({ selected: r }) => {
                      i !== r && y(r), l();
                    }),
                  }),
              },
              b.createElement(
                G,
                {
                  key: 'background',
                  title: 'Change the background of the preview',
                  active: i !== 'transparent',
                },
                b.createElement(H, { icon: 'photo' })
              )
            )
          );
    }),
    pe = w(function () {
      let [e, t] = P(),
        { grid: s } = N(I, { grid: { disable: !1 } });
      if (s?.disable) return null;
      let o = e[I]?.grid || !1;
      return b.createElement(
        G,
        {
          key: 'background',
          active: o,
          title: 'Apply a grid to the preview',
          onClick: () => t({ [I]: { ...e[I], grid: !o } }),
        },
        b.createElement(H, { icon: 'grid' })
      );
    });
  z.register(R, () => {
    z.add(R, {
      title: 'Backgrounds',
      type: V.TOOL,
      match: ({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)),
      render: () =>
        b.createElement(
          L,
          null,
          b.createElement(fe, null),
          b.createElement(pe, null)
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
