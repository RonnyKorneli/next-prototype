try {
  var se = Object.create;
  var H = Object.defineProperty;
  var ae = Object.getOwnPropertyDescriptor;
  var le = Object.getOwnPropertyNames;
  var pe = Object.getPrototypeOf,
    he = Object.prototype.hasOwnProperty;
  var R = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var M = (e, t) => () => (e && (t = e((e = 0))), t);
  var ue = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var de = (e, t, r, l) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let n of le(t))
        !he.call(e, n) &&
          n !== r &&
          H(e, n, {
            get: () => t[n],
            enumerable: !(l = ae(t, n)) || l.enumerable,
          });
    return e;
  };
  var me = (e, t, r) => (
    (r = e != null ? se(pe(e)) : {}),
    de(
      t || !e || !e.__esModule
        ? H(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var u = M(() => {});
  var d = M(() => {});
  var m = M(() => {});
  var ee = ue((Q, V) => {
    u();
    d();
    m();
    (function (e) {
      if (typeof Q == 'object' && typeof V < 'u') V.exports = e();
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
      return (function l(n, x, p) {
        function s(o, y) {
          if (!x[o]) {
            if (!n[o]) {
              var a = typeof R == 'function' && R;
              if (!y && a) return a(o, !0);
              if (i) return i(o, !0);
              var f = new Error("Cannot find module '" + o + "'");
              throw ((f.code = 'MODULE_NOT_FOUND'), f);
            }
            var h = (x[o] = { exports: {} });
            n[o][0].call(
              h.exports,
              function (g) {
                var S = n[o][1][g];
                return s(S || g);
              },
              h,
              h.exports,
              l,
              n,
              x,
              p
            );
          }
          return x[o].exports;
        }
        for (var i = typeof R == 'function' && R, c = 0; c < p.length; c++)
          s(p[c]);
        return s;
      })(
        {
          1: [
            function (l, n, x) {
              n.exports = function (p) {
                if (typeof Map != 'function' || p) {
                  var s = l('./similar');
                  return new s();
                } else return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (l, n, x) {
              function p() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (p.prototype.get = function (s) {
                var i;
                if (this.lastItem && this.isEqual(this.lastItem.key, s))
                  return this.lastItem.val;
                if (((i = this.indexOf(s)), i >= 0))
                  return (this.lastItem = this.list[i]), this.list[i].val;
              }),
                (p.prototype.set = function (s, i) {
                  var c;
                  return this.lastItem && this.isEqual(this.lastItem.key, s)
                    ? ((this.lastItem.val = i), this)
                    : ((c = this.indexOf(s)),
                      c >= 0
                        ? ((this.lastItem = this.list[c]),
                          (this.list[c].val = i),
                          this)
                        : ((this.lastItem = { key: s, val: i }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (p.prototype.delete = function (s) {
                  var i;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, s) &&
                      (this.lastItem = void 0),
                    (i = this.indexOf(s)),
                    i >= 0)
                  )
                    return this.size--, this.list.splice(i, 1)[0];
                }),
                (p.prototype.has = function (s) {
                  var i;
                  return this.lastItem && this.isEqual(this.lastItem.key, s)
                    ? !0
                    : ((i = this.indexOf(s)),
                      i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1);
                }),
                (p.prototype.forEach = function (s, i) {
                  var c;
                  for (c = 0; c < this.size; c++)
                    s.call(i || this, this.list[c].val, this.list[c].key, this);
                }),
                (p.prototype.indexOf = function (s) {
                  var i;
                  for (i = 0; i < this.size; i++)
                    if (this.isEqual(this.list[i].key, s)) return i;
                  return -1;
                }),
                (p.prototype.isEqual = function (s, i) {
                  return s === i || (s !== s && i !== i);
                }),
                (n.exports = p);
            },
            {},
          ],
          3: [
            function (l, n, x) {
              var p = l('map-or-similar');
              n.exports = function (o) {
                var y = new p(void 0 === 'true'),
                  a = [];
                return function (f) {
                  var h = function () {
                    var g = y,
                      S,
                      k,
                      I = arguments.length - 1,
                      C = Array(I + 1),
                      E = !0,
                      _;
                    if ((h.numArgs || h.numArgs === 0) && h.numArgs !== I + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      );
                    for (_ = 0; _ < I; _++) {
                      if (
                        ((C[_] = { cacheItem: g, arg: arguments[_] }),
                        g.has(arguments[_]))
                      ) {
                        g = g.get(arguments[_]);
                        continue;
                      }
                      (E = !1),
                        (S = new p(void 0 === 'true')),
                        g.set(arguments[_], S),
                        (g = S);
                    }
                    return (
                      E &&
                        (g.has(arguments[I])
                          ? (k = g.get(arguments[I]))
                          : (E = !1)),
                      E ||
                        ((k = f.apply(null, arguments)),
                        g.set(arguments[I], k)),
                      o > 0 &&
                        ((C[I] = { cacheItem: g, arg: arguments[I] }),
                        E ? s(a, C) : a.push(C),
                        a.length > o && i(a.shift())),
                      (h.wasMemoized = E),
                      (h.numArgs = I + 1),
                      k
                    );
                  };
                  return (
                    (h.limit = o),
                    (h.wasMemoized = !1),
                    (h.cache = y),
                    (h.lru = a),
                    h
                  );
                };
              };
              function s(o, y) {
                var a = o.length,
                  f = y.length,
                  h,
                  g,
                  S;
                for (g = 0; g < a; g++) {
                  for (h = !0, S = 0; S < f; S++)
                    if (!c(o[g][S].arg, y[S].arg)) {
                      h = !1;
                      break;
                    }
                  if (h) break;
                }
                o.push(o.splice(g, 1)[0]);
              }
              function i(o) {
                var y = o.length,
                  a = o[y - 1],
                  f,
                  h;
                for (
                  a.cacheItem.delete(a.arg), h = y - 2;
                  h >= 0 &&
                  ((a = o[h]), (f = a.cacheItem.get(a.arg)), !f || !f.size);
                  h--
                )
                  a.cacheItem.delete(a.arg);
              }
              function c(o, y) {
                return o === y || (o !== o && y !== y);
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
  u();
  d();
  m();
  u();
  d();
  m();
  u();
  d();
  m();
  u();
  d();
  m();
  var b = 'storybook/viewport',
    q = 'viewport',
    Me = `${b}/update`,
    Ne = `${b}/configure`,
    Ve = `${b}/setStoryDefaultViewport`,
    Be = `${b}/viewportChanged`,
    W = (e, t) => e.indexOf(t),
    ce = (e, t) => {
      let r = W(e, t);
      return r === e.length - 1 ? e[0] : e[r + 1];
    },
    fe = (e, t) => {
      let r = W(e, t);
      return r < 1 ? e[e.length - 1] : e[r - 1];
    },
    G = async (e, t, r) => {
      await e.setAddonShortcut(b, {
        label: 'Previous viewport',
        defaultShortcut: ['shift', 'V'],
        actionName: 'previous',
        action: () => {
          let { selected: l, isRotated: n } = e.getAddonState(b);
          t({ selected: fe(r, l), isRotated: n });
        },
      }),
        await e.setAddonShortcut(b, {
          label: 'Next viewport',
          defaultShortcut: ['V'],
          actionName: 'next',
          action: () => {
            let { selected: l, isRotated: n } = e.getAddonState(b);
            t({ selected: ce(r, l), isRotated: n });
          },
        }),
        await e.setAddonShortcut(b, {
          label: 'Reset viewport',
          defaultShortcut: ['alt', 'V'],
          actionName: 'reset',
          action: () => {
            let { isRotated: l } = e.getAddonState(b);
            t({ selected: 'reset', isRotated: l });
          },
        });
    };
  u();
  d();
  m();
  var F = {
    mobile1: {
      name: 'Small mobile',
      styles: { height: '568px', width: '320px' },
      type: 'mobile',
    },
    mobile2: {
      name: 'Large mobile',
      styles: { height: '896px', width: '414px' },
      type: 'mobile',
    },
    tablet: {
      name: 'Tablet',
      styles: { height: '1112px', width: '834px' },
      type: 'tablet',
    },
  };
  u();
  d();
  m();
  var w = __REACT__,
    {
      Children: Ue,
      Component: $e,
      Fragment: Y,
      Profiler: je,
      PureComponent: Xe,
      StrictMode: Ke,
      Suspense: Ze,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Je,
      cloneElement: Qe,
      createContext: et,
      createElement: U,
      createFactory: tt,
      createRef: it,
      forwardRef: rt,
      isValidElement: ot,
      lazy: nt,
      memo: $,
      useCallback: st,
      useContext: at,
      useDebugValue: lt,
      useEffect: L,
      useImperativeHandle: pt,
      useLayoutEffect: ht,
      useMemo: ut,
      useReducer: dt,
      useRef: j,
      useState: mt,
      version: ct,
    } = __REACT__;
  u();
  d();
  m();
  var yt = __STORYBOOKAPI__,
    {
      ActiveTabs: bt,
      Consumer: wt,
      ManagerContext: St,
      Provider: It,
      addons: N,
      combineParameters: Tt,
      controlOrMetaKey: vt,
      controlOrMetaSymbol: Ot,
      eventMatchesShortcut: _t,
      eventToShortcut: Et,
      isMacLike: Pt,
      isShortcutTaken: Rt,
      keyToSymbol: At,
      merge: kt,
      mockChannel: Ct,
      optionOrAltSymbol: Lt,
      shortcutMatchesShortcut: Mt,
      shortcutToHumanString: Nt,
      types: X,
      useAddonState: K,
      useArgTypes: Vt,
      useArgs: Bt,
      useChannel: zt,
      useGlobalTypes: Dt,
      useGlobals: Ht,
      useParameter: Z,
      useSharedState: qt,
      useStoryPrepared: Wt,
      useStorybookApi: J,
      useStorybookState: Gt,
    } = __STORYBOOKAPI__;
  var D = me(ee(), 1);
  u();
  d();
  m();
  var Jt = __STORYBOOKTHEMING__,
    {
      CacheProvider: Qt,
      ClassNames: ei,
      Global: te,
      ThemeProvider: ti,
      background: ii,
      color: ri,
      convert: oi,
      create: ni,
      createCache: si,
      createGlobal: ai,
      createReset: li,
      css: pi,
      darken: hi,
      ensure: ui,
      ignoreSsrWarning: di,
      isPropValid: mi,
      jsx: ci,
      keyframes: fi,
      lighten: gi,
      styled: A,
      themes: xi,
      typography: yi,
      useTheme: bi,
      withTheme: ie,
    } = __STORYBOOKTHEMING__;
  u();
  d();
  m();
  var vi = __STORYBOOKCOMPONENTS__,
    {
      A: Oi,
      ActionBar: _i,
      AddonPanel: Ei,
      Badge: Pi,
      Bar: Ri,
      Blockquote: Ai,
      Button: ki,
      Code: Ci,
      DL: Li,
      Div: Mi,
      DocumentWrapper: Ni,
      FlexBar: Vi,
      Form: Bi,
      H1: zi,
      H2: Di,
      H3: Hi,
      H4: qi,
      H5: Wi,
      H6: Gi,
      HR: Fi,
      IconButton: B,
      IconButtonSkeleton: Yi,
      Icons: z,
      Img: Ui,
      LI: $i,
      Link: ji,
      Loader: Xi,
      OL: Ki,
      P: Zi,
      Placeholder: Ji,
      Pre: Qi,
      ResetWrapper: er,
      ScrollArea: tr,
      Separator: ir,
      Spaced: rr,
      Span: or,
      StorybookIcon: nr,
      StorybookLogo: sr,
      Symbols: ar,
      SyntaxHighlighter: lr,
      TT: pr,
      TabBar: hr,
      TabButton: ur,
      TabWrapper: dr,
      Table: mr,
      Tabs: cr,
      TabsState: fr,
      TooltipLinkList: re,
      TooltipMessage: gr,
      TooltipNote: xr,
      UL: yr,
      WithTooltip: oe,
      WithTooltipPure: br,
      Zoom: wr,
      codeCommon: Sr,
      components: Ir,
      createCopyToClipboardFunction: Tr,
      getStoryHref: vr,
      interleaveSeparators: Or,
      nameSpaceClassNames: _r,
      resetComponents: Er,
      withReset: Pr,
    } = __STORYBOOKCOMPONENTS__;
  var xe = (0, D.default)(50)((e) => [
      ...ye,
      ...Object.entries(e).map(([t, { name: r, ...l }]) => ({
        ...l,
        id: t,
        title: r,
      })),
    ]),
    P = { id: 'reset', title: 'Reset viewport', styles: null, type: 'other' },
    ye = [P],
    be = (0, D.default)(50)((e, t, r, l, n) =>
      e
        .map((x) => {
          switch (x.id) {
            case P.id:
              if (t.id === x.id) return null;
            default:
              return {
                ...x,
                onClick: () => {
                  r({ ...l, selected: x.id }), n();
                },
              };
          }
        })
        .filter(Boolean)
    ),
    we = 'storybook-preview-wrapper',
    Se = ({ width: e, height: t, ...r }) => ({ ...r, height: e, width: t }),
    Ie = A.div(() => ({ display: 'inline-flex' })),
    ne = A.div(({ theme: e }) => ({
      display: 'inline-block',
      textDecoration: 'none',
      padding: 10,
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '1',
      height: 40,
      border: 'none',
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      background: 'transparent',
    })),
    Te = A(B)(() => ({ display: 'inline-flex', alignItems: 'center' })),
    ve = A.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      marginLeft: 10,
    })),
    Oe = (e, t, r) => {
      if (t === null) return null;
      let l = typeof t == 'function' ? t(e) : t;
      return r ? Se(l) : l;
    },
    _e = $(
      ie(({ theme: e }) => {
        let {
            viewports: t = F,
            defaultViewport: r = P.id,
            disable: l,
          } = Z(q, {}),
          [n, x] = K(b, { selected: r, isRotated: !1 }),
          p = xe(t),
          s = J();
        p.find((f) => f.id === r) ||
          console.warn(
            `Cannot find "defaultViewport" of "${r}" in addon-viewport configs, please check the "viewports" setting in the configuration.`
          ),
          L(() => {
            G(s, x, Object.keys(t));
          }, [t]),
          L(() => {
            x({
              selected: r || (t[n.selected] ? n.selected : P.id),
              isRotated: n.isRotated,
            });
          }, [r]);
        let { selected: i, isRotated: c } = n,
          o =
            p.find((f) => f.id === i) ||
            p.find((f) => f.id === r) ||
            p.find((f) => f.default) ||
            P,
          y = j(),
          a = Oe(y.current, o.styles, c);
        return (
          L(() => {
            y.current = a;
          }, [o]),
          l || Object.entries(t).length === 0
            ? null
            : w.createElement(
                Y,
                null,
                w.createElement(
                  oe,
                  {
                    placement: 'top',
                    trigger: 'click',
                    tooltip: ({ onHide: f }) =>
                      w.createElement(re, { links: be(p, o, x, n, f) }),
                    closeOnOutsideClick: !0,
                  },
                  w.createElement(
                    Te,
                    {
                      key: 'viewport',
                      title: 'Change the size of the preview',
                      active: !!a,
                      onDoubleClick: () => {
                        x({ ...n, selected: P.id });
                      },
                    },
                    w.createElement(z, { icon: 'grow' }),
                    a
                      ? w.createElement(
                          ve,
                          null,
                          c ? `${o.title} (L)` : `${o.title} (P)`
                        )
                      : null
                  )
                ),
                a
                  ? w.createElement(
                      Ie,
                      null,
                      w.createElement(te, {
                        styles: {
                          ['iframe[data-is-storybook="true"]']: {
                            margin: 'auto',
                            transition: 'width .3s, height .3s',
                            position: 'relative',
                            border: '1px solid black',
                            boxShadow: '0 0 100px 100vw rgba(0,0,0,0.5)',
                            ...a,
                          },
                          [`#${we}`]: {
                            padding: e.layoutMargin,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            overflow: 'auto',
                            display: 'grid',
                            gridTemplateColumns: '100%',
                            gridTemplateRows: '100%',
                          },
                        },
                      }),
                      w.createElement(
                        ne,
                        { title: 'Viewport width' },
                        a.width.replace('px', '')
                      ),
                      w.createElement(
                        B,
                        {
                          key: 'viewport-rotate',
                          title: 'Rotate viewport',
                          onClick: () => {
                            x({ ...n, isRotated: !c });
                          },
                        },
                        w.createElement(z, { icon: 'transfer' })
                      ),
                      w.createElement(
                        ne,
                        { title: 'Viewport height' },
                        a.height.replace('px', '')
                      )
                    )
                  : null
              )
        );
      })
    );
  N.register(b, () => {
    N.add(b, {
      title: 'viewport / media-queries',
      type: X.TOOL,
      match: ({ viewMode: e }) => e === 'story',
      render: () => U(_e, null),
    });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.mjs.map
