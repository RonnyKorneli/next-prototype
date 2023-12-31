try {
  var r = __REACT__,
    {
      Children: Q,
      Component: X,
      Fragment: ee,
      Profiler: te,
      PureComponent: oe,
      StrictMode: re,
      Suspense: ae,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: le,
      cloneElement: ne,
      createContext: ie,
      createElement: se,
      createFactory: ce,
      createRef: ue,
      forwardRef: me,
      isValidElement: pe,
      lazy: de,
      memo: be,
      useCallback: _,
      useContext: Se,
      useDebugValue: fe,
      useEffect: h,
      useImperativeHandle: ye,
      useLayoutEffect: Te,
      useMemo: Oe,
      useReducer: _e,
      useRef: L,
      useState: Ce,
      version: ve,
    } = __REACT__;
  var he = __STORYBOOKAPI__,
    {
      ActiveTabs: Re,
      Consumer: ke,
      ManagerContext: Ae,
      Provider: Le,
      addons: R,
      combineParameters: Be,
      controlOrMetaKey: Pe,
      controlOrMetaSymbol: Ne,
      eventMatchesShortcut: Me,
      eventToShortcut: we,
      isMacLike: Ge,
      isShortcutTaken: He,
      keyToSymbol: De,
      merge: Ke,
      mockChannel: Fe,
      optionOrAltSymbol: Ve,
      shortcutMatchesShortcut: We,
      shortcutToHumanString: Ye,
      types: B,
      useAddonState: $e,
      useArgTypes: Ue,
      useArgs: ze,
      useChannel: je,
      useGlobalTypes: P,
      useGlobals: g,
      useParameter: qe,
      useSharedState: Ze,
      useStoryPrepared: Je,
      useStorybookApi: N,
      useStorybookState: Qe,
    } = __STORYBOOKAPI__;
  var rt = __STORYBOOKCOMPONENTS__,
    {
      A: at,
      ActionBar: lt,
      AddonPanel: nt,
      Badge: it,
      Bar: st,
      Blockquote: ct,
      Button: ut,
      Code: mt,
      DL: pt,
      Div: dt,
      DocumentWrapper: bt,
      FlexBar: St,
      Form: ft,
      H1: yt,
      H2: Tt,
      H3: Ot,
      H4: _t,
      H5: Ct,
      H6: vt,
      HR: It,
      IconButton: M,
      IconButtonSkeleton: gt,
      Icons: E,
      Img: Et,
      LI: xt,
      Link: ht,
      Loader: Rt,
      OL: kt,
      P: At,
      Placeholder: Lt,
      Pre: Bt,
      ResetWrapper: Pt,
      ScrollArea: Nt,
      Separator: w,
      Spaced: Mt,
      Span: wt,
      StorybookIcon: Gt,
      StorybookLogo: Ht,
      Symbols: Dt,
      SyntaxHighlighter: Kt,
      TT: Ft,
      TabBar: Vt,
      TabButton: Wt,
      TabWrapper: Yt,
      Table: $t,
      Tabs: Ut,
      TabsState: zt,
      TooltipLinkList: G,
      TooltipMessage: jt,
      TooltipNote: qt,
      UL: Zt,
      WithTooltip: H,
      WithTooltipPure: Jt,
      Zoom: Qt,
      codeCommon: Xt,
      components: eo,
      createCopyToClipboardFunction: to,
      getStoryHref: oo,
      interleaveSeparators: ro,
      nameSpaceClassNames: ao,
      resetComponents: lo,
      withReset: no,
    } = __STORYBOOKCOMPONENTS__;
  var mo = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: k,
      logger: po,
      once: bo,
      pretty: So,
    } = __STORYBOOKCLIENTLOGGER__;
  var K = ({ active: o, title: t, icon: e, description: a, onClick: l }) =>
      r.createElement(
        M,
        { active: o, title: a, onClick: l },
        e && r.createElement(E, { icon: e }),
        t ? `\xA0${t}` : null
      ),
    F = ['reset'],
    V = (o) => o.filter((t) => !F.includes(t.type)).map((t) => t.value),
    C = 'addon-toolbars',
    W = async (o, t, e) => {
      e &&
        e.next &&
        (await o.setAddonShortcut(C, {
          label: e.next.label,
          defaultShortcut: e.next.keys,
          actionName: `${t}:next`,
          action: e.next.action,
        })),
        e &&
          e.previous &&
          (await o.setAddonShortcut(C, {
            label: e.previous.label,
            defaultShortcut: e.previous.keys,
            actionName: `${t}:previous`,
            action: e.previous.action,
          })),
        e &&
          e.reset &&
          (await o.setAddonShortcut(C, {
            label: e.reset.label,
            defaultShortcut: e.reset.keys,
            actionName: `${t}:reset`,
            action: e.reset.action,
          }));
    },
    Y = (o) => (t) => {
      let {
          id: e,
          toolbar: { items: a, shortcuts: l },
        } = t,
        b = N(),
        [S, c] = g(),
        n = L([]),
        u = S[e],
        i = _(() => {
          c({ [e]: '' });
        }, [c]),
        p = _(() => {
          let m = n.current,
            s = m.indexOf(u),
            f = s === m.length - 1 ? 0 : s + 1,
            d = n.current[f];
          c({ [e]: d });
        }, [n, u, c]),
        v = _(() => {
          let m = n.current,
            s = m.indexOf(u),
            f = s > -1 ? s : 0,
            d = f === 0 ? m.length - 1 : f - 1,
            x = n.current[d];
          c({ [e]: x });
        }, [n, u, c]);
      return (
        h(() => {
          l &&
            W(b, e, {
              next: { ...l.next, action: p },
              previous: { ...l.previous, action: v },
              reset: { ...l.reset, action: i },
            });
        }, [b, e, l, p, v, i]),
        h(() => {
          n.current = V(a);
        }, []),
        r.createElement(o, { cycleValues: n.current, ...t })
      );
    },
    D = ({ currentValue: o, items: t }) =>
      o != null && t.find((e) => e.value === o),
    $ = ({ currentValue: o, items: t }) => {
      let e = D({ currentValue: o, items: t });
      if (e) return e.icon;
    },
    U = ({ currentValue: o, items: t }) => {
      let e = D({ currentValue: o, items: t });
      if (e) return e.title;
    },
    z = ({
      left: o,
      right: t,
      title: e,
      value: a,
      icon: l,
      hideIcon: b,
      onClick: S,
      currentValue: c,
    }) => {
      let n = l && r.createElement(E, { style: { opacity: 1 }, icon: l }),
        u = o || t || e,
        i = { id: a || c, active: c === a, onClick: S };
      return (
        o && (i.left = o),
        t && (i.right = t),
        e && (i.title = e),
        l &&
          !b &&
          (u && !t
            ? (i.right = n)
            : u && !o
            ? (i.left = n)
            : u || (i.right = n)),
        i
      );
    },
    j = Y(
      ({
        id: o,
        name: t,
        description: e,
        toolbar: {
          icon: a,
          items: l,
          title: b,
          showName: S,
          preventDynamicIcon: c,
          dynamicTitle: n,
        },
      }) => {
        let [u, i] = g(),
          p = u[o],
          v = !!p,
          m = a,
          s = b;
        c || (m = $({ currentValue: p, items: l }) || m),
          S && !s
            ? ((s = t),
              k(
                '`showName` is deprecated as `name` will stop having dual purposes in the future. Please specify a `title` in `globalTypes` instead.'
              ))
            : !S &&
              !m &&
              !s &&
              ((s = t),
              k(
                `Using the \`name\` "${t}" as toolbar title for backward compatibility. \`name\` will stop having dual purposes in the future. Please specify either a \`title\` or an \`icon\` in \`globalTypes\` instead.`
              )),
          n && (s = U({ currentValue: p, items: l }) || s);
        let f = _(
          (d) => {
            i({ [o]: d });
          },
          [p, i]
        );
        return r.createElement(
          H,
          {
            placement: 'top',
            trigger: 'click',
            tooltip: ({ onHide: d }) => {
              let x = l
                .filter(({ type: I }) => {
                  let A = !0;
                  return I === 'reset' && !p && (A = !1), A;
                })
                .map((I) =>
                  z({
                    ...I,
                    currentValue: p,
                    onClick: () => {
                      f(I.value), d();
                    },
                  })
                );
              return r.createElement(G, { links: x });
            },
            closeOnOutsideClick: !0,
          },
          r.createElement(K, {
            active: v,
            description: e || '',
            icon: m,
            title: s || '',
          })
        );
      }
    ),
    q = { type: 'item', value: '' },
    Z = (o, t) => ({
      ...t,
      name: t.name || o,
      description: t.description || o,
      toolbar: {
        ...t.toolbar,
        items: t.toolbar.items.map((e) => {
          let a = typeof e == 'string' ? { value: e, title: e } : e;
          return (
            a.type === 'reset' &&
              t.toolbar.icon &&
              ((a.icon = t.toolbar.icon), (a.hideIcon = !0)),
            { ...q, ...a }
          );
        }),
      },
    }),
    J = () => {
      let o = P(),
        t = Object.keys(o).filter((e) => !!o[e].toolbar);
      return t.length
        ? r.createElement(
            r.Fragment,
            null,
            r.createElement(w, null),
            t.map((e) => {
              let a = Z(e, o[e]);
              return r.createElement(j, { key: e, id: e, ...a });
            })
          )
        : null;
    };
  R.register(C, () =>
    R.add(C, {
      title: C,
      type: B.TOOL,
      match: () => !0,
      render: () => r.createElement(J, null),
    })
  );
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.mjs.map
