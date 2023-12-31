try {
  var me = 'actions',
    j = 'storybook/actions',
    be = `${j}/panel`,
    M = `${j}/action-event`;
  var a = __REACT__,
    {
      Children: ge,
      Component: he,
      Fragment: Ee,
      Profiler: sr,
      PureComponent: lr,
      StrictMode: ur,
      Suspense: cr,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fr,
      cloneElement: pr,
      createContext: U,
      createElement: dr,
      createFactory: mr,
      createRef: br,
      forwardRef: gr,
      isValidElement: hr,
      lazy: Er,
      memo: P,
      useCallback: _,
      useContext: k,
      useDebugValue: yr,
      useEffect: ye,
      useImperativeHandle: Or,
      useLayoutEffect: Oe,
      useMemo: ve,
      useReducer: vr,
      useRef: Tr,
      useState: R,
      version: _r,
    } = __REACT__;
  var wr = __STORYBOOKAPI__,
    {
      ActiveTabs: xr,
      Consumer: Nr,
      ManagerContext: Lr,
      Provider: Ir,
      addons: Y,
      combineParameters: Dr,
      controlOrMetaKey: Mr,
      controlOrMetaSymbol: Pr,
      eventMatchesShortcut: Br,
      eventToShortcut: Fr,
      isMacLike: zr,
      isShortcutTaken: Hr,
      keyToSymbol: jr,
      merge: Ur,
      mockChannel: kr,
      optionOrAltSymbol: Gr,
      shortcutMatchesShortcut: Vr,
      shortcutToHumanString: $r,
      types: Te,
      useAddonState: Wr,
      useArgTypes: Yr,
      useArgs: Jr,
      useChannel: qr,
      useGlobalTypes: Xr,
      useGlobals: Zr,
      useParameter: Kr,
      useSharedState: Qr,
      useStoryPrepared: en,
      useStorybookApi: tn,
      useStorybookState: rn,
    } = __STORYBOOKAPI__;
  var ln = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: un,
      CONFIG_ERROR: cn,
      CURRENT_STORY_WAS_SET: fn,
      DOCS_RENDERED: pn,
      FORCE_REMOUNT: dn,
      FORCE_RE_RENDER: mn,
      GLOBALS_UPDATED: bn,
      IGNORED_EXCEPTION: gn,
      NAVIGATE_URL: hn,
      PLAY_FUNCTION_THREW_EXCEPTION: En,
      PRELOAD_ENTRIES: yn,
      PREVIEW_BUILDER_PROGRESS: On,
      PREVIEW_KEYDOWN: vn,
      REGISTER_SUBSCRIPTION: Tn,
      RESET_STORY_ARGS: _n,
      SELECT_STORY: Rn,
      SET_CONFIG: Sn,
      SET_CURRENT_STORY: An,
      SET_GLOBALS: Cn,
      SET_INDEX: wn,
      SET_STORIES: xn,
      SHARED_STATE_CHANGED: Nn,
      SHARED_STATE_SET: Ln,
      STORIES_COLLAPSE_ALL: In,
      STORIES_EXPAND_ALL: Dn,
      STORY_ARGS_UPDATED: Mn,
      STORY_CHANGED: A,
      STORY_ERRORED: Pn,
      STORY_INDEX_INVALIDATED: Bn,
      STORY_MISSING: Fn,
      STORY_PREPARED: zn,
      STORY_RENDERED: Hn,
      STORY_RENDER_PHASE_CHANGED: jn,
      STORY_SPECIFIED: Un,
      STORY_THREW_EXCEPTION: kn,
      STORY_UNCHANGED: Gn,
      UPDATE_GLOBALS: Vn,
      UPDATE_QUERY_PARAMS: $n,
      UPDATE_STORY_ARGS: Wn,
    } = __STORYBOOKCOREEVENTS__;
  var _e = Object.prototype.hasOwnProperty;
  function Re(e, t, r) {
    for (r of e.keys()) if (C(r, t)) return r;
  }
  function C(e, t) {
    var r, n, o;
    if (e === t) return !0;
    if (e && t && (r = e.constructor) === t.constructor) {
      if (r === Date) return e.getTime() === t.getTime();
      if (r === RegExp) return e.toString() === t.toString();
      if (r === Array) {
        if ((n = e.length) === t.length) for (; n-- && C(e[n], t[n]); );
        return n === -1;
      }
      if (r === Set) {
        if (e.size !== t.size) return !1;
        for (n of e)
          if (
            ((o = n),
            (o && typeof o == 'object' && ((o = Re(t, o)), !o)) || !t.has(o))
          )
            return !1;
        return !0;
      }
      if (r === Map) {
        if (e.size !== t.size) return !1;
        for (n of e)
          if (
            ((o = n[0]),
            (o && typeof o == 'object' && ((o = Re(t, o)), !o)) ||
              !C(n[1], t.get(o)))
          )
            return !1;
        return !0;
      }
      if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
      else if (r === DataView) {
        if ((n = e.byteLength) === t.byteLength)
          for (; n-- && e.getInt8(n) === t.getInt8(n); );
        return n === -1;
      }
      if (ArrayBuffer.isView(e)) {
        if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
        return n === -1;
      }
      if (!r || typeof e == 'object') {
        n = 0;
        for (r in e)
          if (
            (_e.call(e, r) && ++n && !_e.call(t, r)) ||
            !(r in t) ||
            !C(e[r], t[r])
          )
            return !1;
        return Object.keys(t).length === n;
      }
    }
    return e !== e && t !== t;
  }
  var ta = __STORYBOOKTHEMING__,
    {
      CacheProvider: ra,
      ClassNames: na,
      Global: aa,
      ThemeProvider: oa,
      background: ia,
      color: sa,
      convert: la,
      create: ua,
      createCache: ca,
      createGlobal: fa,
      createReset: pa,
      css: da,
      darken: ma,
      ensure: ba,
      ignoreSsrWarning: ga,
      isPropValid: ha,
      jsx: Ea,
      keyframes: ya,
      lighten: Oa,
      styled: w,
      themes: va,
      typography: Ta,
      useTheme: _a,
      withTheme: Se,
    } = __STORYBOOKTHEMING__;
  var qe = Object.create,
    K = Object.defineProperty,
    Xe = Object.getOwnPropertyDescriptor,
    Ne = Object.getOwnPropertyNames,
    Ze = Object.getPrototypeOf,
    Ke = Object.prototype.hasOwnProperty,
    Q = (e, t) =>
      function () {
        return (
          t || (0, e[Ne(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    Qe = (e, t) => {
      for (var r in t) K(e, r, { get: t[r], enumerable: !0 });
    },
    et = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Ne(t))
          !Ke.call(e, o) &&
            o !== r &&
            K(e, o, {
              get: () => t[o],
              enumerable: !(n = Xe(t, o)) || n.enumerable,
            });
      return e;
    },
    tt = (e, t, r) => (
      (r = e != null ? qe(Ze(e)) : {}),
      et(
        t || !e || !e.__esModule
          ? K(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = Q({
      'node_modules/is-object/index.js'(e, t) {
        'use strict';
        t.exports = function (n) {
          return typeof n == 'object' && n !== null;
        };
      },
    }),
    nt = Q({
      'node_modules/is-window/index.js'(e, t) {
        'use strict';
        t.exports = function (r) {
          if (r == null) return !1;
          var n = Object(r);
          return n === n.window;
        };
      },
    }),
    at = Q({
      'node_modules/is-dom/index.js'(e, t) {
        var r = rt(),
          n = nt();
        function o(i) {
          return !r(i) || !n(window) || typeof window.Node != 'function'
            ? !1
            : typeof i.nodeType == 'number' && typeof i.nodeName == 'string';
        }
        t.exports = o;
      },
    }),
    $ = {};
  Qe($, { chromeDark: () => ot, chromeLight: () => it });
  var ot = {
      BASE_FONT_FAMILY: 'Menlo, monospace',
      BASE_FONT_SIZE: '11px',
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
      BASE_COLOR: 'rgb(213, 213, 213)',
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
      OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
      OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
      OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
      OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
      OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
      HTML_TAG_COLOR: 'rgb(93, 176, 215)',
      HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
      HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
      HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
      HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
      HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
      HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
      ARROW_COLOR: 'rgb(145, 145, 145)',
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: '0',
      TREENODE_FONT_FAMILY: 'Menlo, monospace',
      TREENODE_FONT_SIZE: '11px',
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
      TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
      TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
      TABLE_SORT_ICON_COLOR: 'black',
      TABLE_DATA_BACKGROUND_IMAGE:
        'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
      TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
    },
    it = {
      BASE_FONT_FAMILY: 'Menlo, monospace',
      BASE_FONT_SIZE: '11px',
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: 'white',
      BASE_COLOR: 'black',
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
      OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
      OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
      OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
      OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
      OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
      HTML_TAG_COLOR: 'rgb(168, 148, 166)',
      HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
      HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
      HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
      HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
      HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
      HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
      ARROW_COLOR: '#6e6e6e',
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: '0',
      TREENODE_FONT_FAMILY: 'Menlo, monospace',
      TREENODE_FONT_SIZE: '11px',
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: '#aaa',
      TABLE_TH_BACKGROUND_COLOR: '#eee',
      TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
      TABLE_SORT_ICON_COLOR: '#6e6e6e',
      TABLE_DATA_BACKGROUND_IMAGE:
        'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
      TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
    },
    Le = U([{}, () => {}]),
    J = {
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      OUserSelect: 'none',
      userSelect: 'none',
    },
    G = (e) => ({
      DOMNodePreview: {
        htmlOpenTag: {
          base: { color: e.HTML_TAG_COLOR },
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
          htmlAttributeName: { color: e.HTML_ATTRIBUTE_NAME_COLOR },
          htmlAttributeValue: { color: e.HTML_ATTRIBUTE_VALUE_COLOR },
        },
        htmlCloseTag: {
          base: { color: e.HTML_TAG_COLOR },
          offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
        },
        htmlComment: { color: e.HTML_COMMENT_COLOR },
        htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
      },
      ObjectPreview: {
        objectDescription: { fontStyle: 'italic' },
        preview: { fontStyle: 'italic' },
        arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
        objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
      },
      ObjectName: {
        base: { color: e.OBJECT_NAME_COLOR },
        dimmed: { opacity: 0.6 },
      },
      ObjectValue: {
        objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
        objectValueUndefined: { color: e.OBJECT_VALUE_UNDEFINED_COLOR },
        objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
        objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
        objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
        objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
        objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
        objectValueFunctionPrefix: {
          color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
          fontStyle: 'italic',
        },
        objectValueFunctionName: { fontStyle: 'italic' },
      },
      TreeView: {
        treeViewOutline: { padding: 0, margin: 0, listStyleType: 'none' },
      },
      TreeNode: {
        treeNodeBase: {
          color: e.BASE_COLOR,
          backgroundColor: e.BASE_BACKGROUND_COLOR,
          lineHeight: e.TREENODE_LINE_HEIGHT,
          cursor: 'default',
          boxSizing: 'border-box',
          listStyle: 'none',
          fontFamily: e.TREENODE_FONT_FAMILY,
          fontSize: e.TREENODE_FONT_SIZE,
        },
        treeNodePreviewContainer: {},
        treeNodePlaceholder: {
          whiteSpace: 'pre',
          fontSize: e.ARROW_FONT_SIZE,
          marginRight: e.ARROW_MARGIN_RIGHT,
          ...J,
        },
        treeNodeArrow: {
          base: {
            color: e.ARROW_COLOR,
            display: 'inline-block',
            fontSize: e.ARROW_FONT_SIZE,
            marginRight: e.ARROW_MARGIN_RIGHT,
            ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
              ? {
                  transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s`,
                }
              : {}),
            ...J,
          },
          expanded: {
            WebkitTransform: 'rotateZ(90deg)',
            MozTransform: 'rotateZ(90deg)',
            transform: 'rotateZ(90deg)',
          },
          collapsed: {
            WebkitTransform: 'rotateZ(0deg)',
            MozTransform: 'rotateZ(0deg)',
            transform: 'rotateZ(0deg)',
          },
        },
        treeNodeChildNodesContainer: {
          margin: 0,
          paddingLeft: e.TREENODE_PADDING_LEFT,
        },
      },
      TableInspector: {
        base: {
          color: e.BASE_COLOR,
          position: 'relative',
          border: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontFamily: e.BASE_FONT_FAMILY,
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
          boxSizing: 'border-box',
          cursor: 'default',
        },
      },
      TableInspectorHeaderContainer: {
        base: {
          top: 0,
          height: '17px',
          left: 0,
          right: 0,
          overflowX: 'hidden',
        },
        table: {
          tableLayout: 'fixed',
          borderSpacing: 0,
          borderCollapse: 'separate',
          height: '100%',
          width: '100%',
          margin: 0,
        },
      },
      TableInspectorDataContainer: {
        tr: { display: 'table-row' },
        td: {
          boxSizing: 'border-box',
          border: 'none',
          height: '16px',
          verticalAlign: 'top',
          padding: '1px 4px',
          WebkitUserSelect: 'text',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          lineHeight: '14px',
        },
        div: {
          position: 'static',
          top: '17px',
          bottom: 0,
          overflowY: 'overlay',
          transform: 'translateZ(0)',
          left: 0,
          right: 0,
          overflowX: 'hidden',
        },
        table: {
          positon: 'static',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          borderTop: '0 none transparent',
          margin: 0,
          backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
          backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
          tableLayout: 'fixed',
          borderSpacing: 0,
          borderCollapse: 'separate',
          width: '100%',
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
        },
      },
      TableInspectorTH: {
        base: {
          position: 'relative',
          height: 'auto',
          textAlign: 'left',
          backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
          borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontWeight: 'normal',
          verticalAlign: 'middle',
          padding: '0 4px',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          lineHeight: '14px',
          ':hover': { backgroundColor: e.TABLE_TH_HOVER_COLOR },
        },
        div: {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: '120%',
        },
      },
      TableInspectorLeftBorder: {
        none: { borderLeft: 'none' },
        solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
      },
      TableInspectorSortIcon: {
        display: 'block',
        marginRight: 3,
        width: 8,
        height: 7,
        marginTop: -7,
        color: e.TABLE_SORT_ICON_COLOR,
        fontSize: 12,
        ...J,
      },
    }),
    q = 'chromeLight',
    Ie = U(G($[q])),
    v = (e) => k(Ie)[e],
    ee =
      (e) =>
      ({ theme: r = q, ...n }) => {
        let o = ve(() => {
          switch (Object.prototype.toString.call(r)) {
            case '[object String]':
              return G($[r]);
            case '[object Object]':
              return G(r);
            default:
              return G($[q]);
          }
        }, [r]);
        return a.createElement(
          Ie.Provider,
          { value: o },
          a.createElement(e, { ...n })
        );
      },
    st = ({ expanded: e, styles: t }) =>
      a.createElement(
        'span',
        { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } },
        '\u25B6'
      ),
    lt = P((e) => {
      e = {
        expanded: !0,
        nodeRenderer: ({ name: f }) => a.createElement('span', null, f),
        onClick: () => {},
        shouldShowArrow: !1,
        shouldShowPlaceholder: !0,
        ...e,
      };
      let {
          expanded: t,
          onClick: r,
          children: n,
          nodeRenderer: o,
          title: i,
          shouldShowArrow: u,
          shouldShowPlaceholder: s,
        } = e,
        l = v('TreeNode'),
        c = o;
      return a.createElement(
        'li',
        {
          'aria-expanded': t,
          role: 'treeitem',
          style: l.treeNodeBase,
          title: i,
        },
        a.createElement(
          'div',
          { style: l.treeNodePreviewContainer, onClick: r },
          u || ge.count(n) > 0
            ? a.createElement(st, { expanded: t, styles: l.treeNodeArrow })
            : s &&
                a.createElement(
                  'span',
                  { style: l.treeNodePlaceholder },
                  '\xA0'
                ),
          a.createElement(c, { ...e })
        ),
        a.createElement(
          'ol',
          { role: 'group', style: l.treeNodeChildNodesContainer },
          t ? n : void 0
        )
      );
    }),
    W = '$',
    Ae = '*';
  function V(e, t) {
    return !t(e).next().done;
  }
  var ut = (e) =>
      Array.from({ length: e }, (t, r) =>
        [W].concat(Array.from({ length: r }, () => '*')).join('.')
      ),
    ct = (e, t, r, n, o) => {
      let i = []
          .concat(ut(n))
          .concat(r)
          .filter((s) => typeof s == 'string'),
        u = [];
      return (
        i.forEach((s) => {
          let l = s.split('.'),
            c = (f, g, p) => {
              if (p === l.length) {
                u.push(g);
                return;
              }
              let O = l[p];
              if (p === 0) V(f, t) && (O === W || O === Ae) && c(f, W, p + 1);
              else if (O === Ae)
                for (let { name: h, data: E } of t(f))
                  V(E, t) && c(E, `${g}.${h}`, p + 1);
              else {
                let h = f[O];
                V(h, t) && c(h, `${g}.${O}`, p + 1);
              }
            };
          c(e, '', 0);
        }),
        u.reduce((s, l) => ((s[l] = !0), s), { ...o })
      );
    },
    De = P((e) => {
      let { data: t, dataIterator: r, path: n, depth: o, nodeRenderer: i } = e,
        [u, s] = k(Le),
        l = V(t, r),
        c = !!u[n],
        f = _(() => l && s((g) => ({ ...g, [n]: !c })), [l, s, n, c]);
      return a.createElement(
        lt,
        {
          expanded: c,
          onClick: f,
          shouldShowArrow: l,
          shouldShowPlaceholder: o > 0,
          nodeRenderer: i,
          ...e,
        },
        c
          ? [...r(t)].map(({ name: g, data: p, ...O }) =>
              a.createElement(De, {
                name: g,
                data: p,
                depth: o + 1,
                path: `${n}.${g}`,
                key: g,
                dataIterator: r,
                nodeRenderer: i,
                ...O,
              })
            )
          : null
      );
    }),
    Me = P(
      ({
        name: e,
        data: t,
        dataIterator: r,
        nodeRenderer: n,
        expandPaths: o,
        expandLevel: i,
      }) => {
        let u = v('TreeView'),
          s = R({}),
          [, l] = s;
        return (
          Oe(() => l((c) => ct(t, r, o, i, c)), [t, r, o, i]),
          a.createElement(
            Le.Provider,
            { value: s },
            a.createElement(
              'ol',
              { role: 'tree', style: u.treeViewOutline },
              a.createElement(De, {
                name: e,
                data: t,
                dataIterator: r,
                depth: 0,
                path: W,
                nodeRenderer: n,
              })
            )
          )
        );
      }
    ),
    te = ({ name: e, dimmed: t = !1, styles: r = {} }) => {
      let n = v('ObjectName'),
        o = { ...n.base, ...(t ? n.dimmed : {}), ...r };
      return a.createElement('span', { style: o }, e);
    },
    B = ({ object: e, styles: t }) => {
      let r = v('ObjectValue'),
        n = (o) => ({ ...r[o], ...t });
      switch (typeof e) {
        case 'bigint':
          return a.createElement(
            'span',
            { style: n('objectValueNumber') },
            String(e),
            'n'
          );
        case 'number':
          return a.createElement(
            'span',
            { style: n('objectValueNumber') },
            String(e)
          );
        case 'string':
          return a.createElement(
            'span',
            { style: n('objectValueString') },
            '"',
            e,
            '"'
          );
        case 'boolean':
          return a.createElement(
            'span',
            { style: n('objectValueBoolean') },
            String(e)
          );
        case 'undefined':
          return a.createElement(
            'span',
            { style: n('objectValueUndefined') },
            'undefined'
          );
        case 'object':
          return e === null
            ? a.createElement('span', { style: n('objectValueNull') }, 'null')
            : e instanceof Date
            ? a.createElement('span', null, e.toString())
            : e instanceof RegExp
            ? a.createElement(
                'span',
                { style: n('objectValueRegExp') },
                e.toString()
              )
            : Array.isArray(e)
            ? a.createElement('span', null, `Array(${e.length})`)
            : e.constructor
            ? typeof e.constructor.isBuffer == 'function' &&
              e.constructor.isBuffer(e)
              ? a.createElement('span', null, `Buffer[${e.length}]`)
              : a.createElement('span', null, e.constructor.name)
            : a.createElement('span', null, 'Object');
        case 'function':
          return a.createElement(
            'span',
            null,
            a.createElement(
              'span',
              { style: n('objectValueFunctionPrefix') },
              '\u0192\xA0'
            ),
            a.createElement(
              'span',
              { style: n('objectValueFunctionName') },
              e.name,
              '()'
            )
          );
        case 'symbol':
          return a.createElement(
            'span',
            { style: n('objectValueSymbol') },
            e.toString()
          );
        default:
          return a.createElement('span', null);
      }
    },
    Pe = Object.prototype.hasOwnProperty,
    ft = Object.prototype.propertyIsEnumerable;
  function X(e, t) {
    let r = Object.getOwnPropertyDescriptor(e, t);
    if (r.get)
      try {
        return r.get();
      } catch {
        return r.get;
      }
    return e[t];
  }
  function Ce(e, t) {
    return e.length === 0
      ? []
      : e.slice(1).reduce((r, n) => r.concat([t, n]), [e[0]]);
  }
  var Z = ({ data: e }) => {
      let t = v('ObjectPreview'),
        r = e;
      if (
        typeof r != 'object' ||
        r === null ||
        r instanceof Date ||
        r instanceof RegExp
      )
        return a.createElement(B, { object: r });
      if (Array.isArray(r)) {
        let n = t.arrayMaxProperties,
          o = r
            .slice(0, n)
            .map((u, s) => a.createElement(B, { key: s, object: u }));
        r.length > n &&
          o.push(a.createElement('span', { key: 'ellipsis' }, '\u2026'));
        let i = r.length;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            { style: t.objectDescription },
            i === 0 ? '' : `(${i})\xA0`
          ),
          a.createElement('span', { style: t.preview }, '[', Ce(o, ', '), ']')
        );
      } else {
        let n = t.objectMaxProperties,
          o = [];
        for (let u in r)
          if (Pe.call(r, u)) {
            let s;
            o.length === n - 1 &&
              Object.keys(r).length > n &&
              (s = a.createElement('span', { key: 'ellipsis' }, '\u2026'));
            let l = X(r, u);
            if (
              (o.push(
                a.createElement(
                  'span',
                  { key: u },
                  a.createElement(te, { name: u || '""' }),
                  ':\xA0',
                  a.createElement(B, { object: l }),
                  s
                )
              ),
              s)
            )
              break;
          }
        let i = r.constructor ? r.constructor.name : 'Object';
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'span',
            { style: t.objectDescription },
            i === 'Object' ? '' : `${i} `
          ),
          a.createElement('span', { style: t.preview }, '{', Ce(o, ', '), '}')
        );
      }
    },
    pt = ({ name: e, data: t }) =>
      typeof e == 'string'
        ? a.createElement(
            'span',
            null,
            a.createElement(te, { name: e }),
            a.createElement('span', null, ': '),
            a.createElement(Z, { data: t })
          )
        : a.createElement(Z, { data: t }),
    dt = ({ name: e, data: t, isNonenumerable: r = !1 }) => {
      let n = t;
      return a.createElement(
        'span',
        null,
        typeof e == 'string'
          ? a.createElement(te, { name: e, dimmed: r })
          : a.createElement(Z, { data: e }),
        a.createElement('span', null, ': '),
        a.createElement(B, { object: n })
      );
    },
    mt = (e, t) =>
      function* (n) {
        if (!((typeof n == 'object' && n !== null) || typeof n == 'function'))
          return;
        let i = Array.isArray(n);
        if (!i && n[Symbol.iterator]) {
          let u = 0;
          for (let s of n) {
            if (Array.isArray(s) && s.length === 2) {
              let [l, c] = s;
              yield { name: l, data: c };
            } else yield { name: u.toString(), data: s };
            u++;
          }
        } else {
          let u = Object.getOwnPropertyNames(n);
          t === !0 && !i ? u.sort() : typeof t == 'function' && u.sort(t);
          for (let s of u)
            if (ft.call(n, s)) {
              let l = X(n, s);
              yield { name: s || '""', data: l };
            } else if (e) {
              let l;
              try {
                l = X(n, s);
              } catch {}
              l !== void 0 && (yield { name: s, data: l, isNonenumerable: !0 });
            }
          e &&
            n !== Object.prototype &&
            (yield {
              name: '__proto__',
              data: Object.getPrototypeOf(n),
              isNonenumerable: !0,
            });
        }
      },
    bt = ({ depth: e, name: t, data: r, isNonenumerable: n }) =>
      e === 0
        ? a.createElement(pt, { name: t, data: r })
        : a.createElement(dt, { name: t, data: r, isNonenumerable: n }),
    gt = ({
      showNonenumerable: e = !1,
      sortObjectKeys: t,
      nodeRenderer: r,
      ...n
    }) => {
      let o = mt(e, t),
        i = r || bt;
      return a.createElement(Me, { nodeRenderer: i, dataIterator: o, ...n });
    },
    ht = ee(gt);
  function Et(e) {
    if (typeof e == 'object') {
      let t = [];
      if (Array.isArray(e)) {
        let n = e.length;
        t = [...Array(n).keys()];
      } else e !== null && (t = Object.keys(e));
      let r = t.reduce((n, o) => {
        let i = e[o];
        return (
          typeof i == 'object' &&
            i !== null &&
            Object.keys(i).reduce((s, l) => (s.includes(l) || s.push(l), s), n),
          n
        );
      }, []);
      return { rowHeaders: t, colHeaders: r };
    }
  }
  var yt = ({ rows: e, columns: t, rowsData: r }) => {
      let n = v('TableInspectorDataContainer'),
        o = v('TableInspectorLeftBorder');
      return a.createElement(
        'div',
        { style: n.div },
        a.createElement(
          'table',
          { style: n.table },
          a.createElement('colgroup', null),
          a.createElement(
            'tbody',
            null,
            e.map((i, u) =>
              a.createElement(
                'tr',
                { key: i, style: n.tr },
                a.createElement('td', { style: { ...n.td, ...o.none } }, i),
                t.map((s) => {
                  let l = r[u];
                  return typeof l == 'object' && l !== null && Pe.call(l, s)
                    ? a.createElement(
                        'td',
                        { key: s, style: { ...n.td, ...o.solid } },
                        a.createElement(B, { object: l[s] })
                      )
                    : a.createElement('td', {
                        key: s,
                        style: { ...n.td, ...o.solid },
                      });
                })
              )
            )
          )
        )
      );
    },
    Ot = (e) =>
      a.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            top: 1,
            right: 0,
            bottom: 1,
            display: 'flex',
            alignItems: 'center',
          },
        },
        e.children
      ),
    vt = ({ sortAscending: e }) => {
      let t = v('TableInspectorSortIcon'),
        r = e ? '\u25B2' : '\u25BC';
      return a.createElement('div', { style: t }, r);
    },
    we = ({
      sortAscending: e = !1,
      sorted: t = !1,
      onClick: r = void 0,
      borderStyle: n = {},
      children: o,
      ...i
    }) => {
      let u = v('TableInspectorTH'),
        [s, l] = R(!1),
        c = _(() => l(!0), []),
        f = _(() => l(!1), []);
      return a.createElement(
        'th',
        {
          ...i,
          style: { ...u.base, ...n, ...(s ? u.base[':hover'] : {}) },
          onMouseEnter: c,
          onMouseLeave: f,
          onClick: r,
        },
        a.createElement('div', { style: u.div }, o),
        t &&
          a.createElement(Ot, null, a.createElement(vt, { sortAscending: e }))
      );
    },
    Tt = ({
      indexColumnText: e = '(index)',
      columns: t = [],
      sorted: r,
      sortIndexColumn: n,
      sortColumn: o,
      sortAscending: i,
      onTHClick: u,
      onIndexTHClick: s,
    }) => {
      let l = v('TableInspectorHeaderContainer'),
        c = v('TableInspectorLeftBorder');
      return a.createElement(
        'div',
        { style: l.base },
        a.createElement(
          'table',
          { style: l.table },
          a.createElement(
            'tbody',
            null,
            a.createElement(
              'tr',
              null,
              a.createElement(
                we,
                {
                  borderStyle: c.none,
                  sorted: r && n,
                  sortAscending: i,
                  onClick: s,
                },
                e
              ),
              t.map((f) =>
                a.createElement(
                  we,
                  {
                    borderStyle: c.solid,
                    key: f,
                    sorted: r && o === f,
                    sortAscending: i,
                    onClick: u.bind(null, f),
                  },
                  f
                )
              )
            )
          )
        )
      );
    },
    _t = ({ data: e, columns: t }) => {
      let r = v('TableInspector'),
        [
          { sorted: n, sortIndexColumn: o, sortColumn: i, sortAscending: u },
          s,
        ] = R({
          sorted: !1,
          sortIndexColumn: !1,
          sortColumn: void 0,
          sortAscending: !1,
        }),
        l = _(() => {
          s(({ sortIndexColumn: h, sortAscending: E }) => ({
            sorted: !0,
            sortIndexColumn: !0,
            sortColumn: void 0,
            sortAscending: h ? !E : !0,
          }));
        }, []),
        c = _((h) => {
          s(({ sortColumn: E, sortAscending: y }) => ({
            sorted: !0,
            sortIndexColumn: !1,
            sortColumn: h,
            sortAscending: h === E ? !y : !0,
          }));
        }, []);
      if (typeof e != 'object' || e === null)
        return a.createElement('div', null);
      let { rowHeaders: f, colHeaders: g } = Et(e);
      t !== void 0 && (g = t);
      let p = f.map((h) => e[h]),
        O;
      if (
        (i !== void 0
          ? (O = p.map((h, E) =>
              typeof h == 'object' && h !== null ? [h[i], E] : [void 0, E]
            ))
          : o && (O = f.map((h, E) => [f[E], E])),
        O !== void 0)
      ) {
        let h = (y, S) => (Ye, Je) => {
            let le = y(Ye),
              ue = y(Je),
              ce = typeof le,
              fe = typeof ue,
              pe = (D, de) => (D < de ? -1 : D > de ? 1 : 0),
              I;
            if (ce === fe) I = pe(le, ue);
            else {
              let D = {
                string: 0,
                number: 1,
                object: 2,
                symbol: 3,
                boolean: 4,
                undefined: 5,
                function: 6,
              };
              I = pe(D[ce], D[fe]);
            }
            return S || (I = -I), I;
          },
          E = O.sort(h((y) => y[0], u)).map((y) => y[1]);
        (f = E.map((y) => f[y])), (p = E.map((y) => p[y]));
      }
      return a.createElement(
        'div',
        { style: r.base },
        a.createElement(Tt, {
          columns: g,
          sorted: n,
          sortIndexColumn: o,
          sortColumn: i,
          sortAscending: u,
          onTHClick: c,
          onIndexTHClick: l,
        }),
        a.createElement(yt, { rows: f, columns: g, rowsData: p })
      );
    },
    Rt = ee(_t),
    St = 80,
    Be = (e) =>
      e.childNodes.length === 0 ||
      (e.childNodes.length === 1 &&
        e.childNodes[0].nodeType === Node.TEXT_NODE &&
        e.textContent.length < St),
    At = ({ tagName: e, attributes: t, styles: r }) =>
      a.createElement(
        'span',
        { style: r.base },
        '<',
        a.createElement('span', { style: r.tagName }, e),
        (() => {
          if (t) {
            let n = [];
            for (let o = 0; o < t.length; o++) {
              let i = t[o];
              n.push(
                a.createElement(
                  'span',
                  { key: o },
                  ' ',
                  a.createElement(
                    'span',
                    { style: r.htmlAttributeName },
                    i.name
                  ),
                  '="',
                  a.createElement(
                    'span',
                    { style: r.htmlAttributeValue },
                    i.value
                  ),
                  '"'
                )
              );
            }
            return n;
          }
        })(),
        '>'
      ),
    xe = ({ tagName: e, isChildNode: t = !1, styles: r }) =>
      a.createElement(
        'span',
        { style: Object.assign({}, r.base, t && r.offsetLeft) },
        '</',
        a.createElement('span', { style: r.tagName }, e),
        '>'
      ),
    Ct = {
      1: 'ELEMENT_NODE',
      3: 'TEXT_NODE',
      7: 'PROCESSING_INSTRUCTION_NODE',
      8: 'COMMENT_NODE',
      9: 'DOCUMENT_NODE',
      10: 'DOCUMENT_TYPE_NODE',
      11: 'DOCUMENT_FRAGMENT_NODE',
    },
    wt = ({ isCloseTag: e, data: t, expanded: r }) => {
      let n = v('DOMNodePreview');
      if (e)
        return a.createElement(xe, {
          styles: n.htmlCloseTag,
          isChildNode: !0,
          tagName: t.tagName,
        });
      switch (t.nodeType) {
        case Node.ELEMENT_NODE:
          return a.createElement(
            'span',
            null,
            a.createElement(At, {
              tagName: t.tagName,
              attributes: t.attributes,
              styles: n.htmlOpenTag,
            }),
            Be(t) ? t.textContent : !r && '\u2026',
            !r &&
              a.createElement(xe, {
                tagName: t.tagName,
                styles: n.htmlCloseTag,
              })
          );
        case Node.TEXT_NODE:
          return a.createElement('span', null, t.textContent);
        case Node.CDATA_SECTION_NODE:
          return a.createElement(
            'span',
            null,
            '<![CDATA[' + t.textContent + ']]>'
          );
        case Node.COMMENT_NODE:
          return a.createElement(
            'span',
            { style: n.htmlComment },
            '<!--',
            t.textContent,
            '-->'
          );
        case Node.PROCESSING_INSTRUCTION_NODE:
          return a.createElement('span', null, t.nodeName);
        case Node.DOCUMENT_TYPE_NODE:
          return a.createElement(
            'span',
            { style: n.htmlDoctype },
            '<!DOCTYPE ',
            t.name,
            t.publicId ? ` PUBLIC "${t.publicId}"` : '',
            !t.publicId && t.systemId ? ' SYSTEM' : '',
            t.systemId ? ` "${t.systemId}"` : '',
            '>'
          );
        case Node.DOCUMENT_NODE:
          return a.createElement('span', null, t.nodeName);
        case Node.DOCUMENT_FRAGMENT_NODE:
          return a.createElement('span', null, t.nodeName);
        default:
          return a.createElement('span', null, Ct[t.nodeType]);
      }
    },
    xt = function* (e) {
      if (e && e.childNodes) {
        if (Be(e)) return;
        for (let r = 0; r < e.childNodes.length; r++) {
          let n = e.childNodes[r];
          (n.nodeType === Node.TEXT_NODE &&
            n.textContent.trim().length === 0) ||
            (yield { name: `${n.tagName}[${r}]`, data: n });
        }
        e.tagName &&
          (yield {
            name: 'CLOSE_TAG',
            data: { tagName: e.tagName },
            isCloseTag: !0,
          });
      }
    },
    Nt = (e) =>
      a.createElement(Me, { nodeRenderer: wt, dataIterator: xt, ...e }),
    Lt = ee(Nt),
    It = tt(at()),
    Fe = ({ table: e = !1, data: t, ...r }) =>
      e
        ? a.createElement(Rt, { data: t, ...r })
        : (0, It.default)(t)
        ? a.createElement(Lt, { data: t, ...r })
        : a.createElement(ht, { data: t, ...r });
  var qa = __STORYBOOKCOMPONENTS__,
    {
      A: Xa,
      ActionBar: ze,
      AddonPanel: Za,
      Badge: Ka,
      Bar: Qa,
      Blockquote: eo,
      Button: to,
      Code: ro,
      DL: no,
      Div: ao,
      DocumentWrapper: oo,
      FlexBar: io,
      Form: so,
      H1: lo,
      H2: uo,
      H3: co,
      H4: fo,
      H5: po,
      H6: mo,
      HR: bo,
      IconButton: go,
      IconButtonSkeleton: ho,
      Icons: Eo,
      Img: yo,
      LI: Oo,
      Link: vo,
      Loader: To,
      OL: _o,
      P: Ro,
      Placeholder: So,
      Pre: Ao,
      ResetWrapper: Co,
      ScrollArea: He,
      Separator: wo,
      Spaced: xo,
      Span: No,
      StorybookIcon: Lo,
      StorybookLogo: Io,
      Symbols: Do,
      SyntaxHighlighter: Mo,
      TT: Po,
      TabBar: Bo,
      TabButton: Fo,
      TabWrapper: zo,
      Table: Ho,
      Tabs: jo,
      TabsState: Uo,
      TooltipLinkList: ko,
      TooltipMessage: Go,
      TooltipNote: Vo,
      UL: $o,
      WithTooltip: Wo,
      WithTooltipPure: Yo,
      Zoom: Jo,
      codeCommon: qo,
      components: Xo,
      createCopyToClipboardFunction: Zo,
      getStoryHref: Ko,
      interleaveSeparators: Qo,
      nameSpaceClassNames: ei,
      resetComponents: ti,
      withReset: ri,
    } = __STORYBOOKCOMPONENTS__;
  function F() {
    return (
      (F = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      F.apply(this, arguments)
    );
  }
  function re(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function T(e, t) {
    return (
      (T = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, o) {
            return (n.__proto__ = o), n;
          }),
      T(e, t)
    );
  }
  function ne(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      T(e, t);
  }
  function z(e) {
    return (
      (z = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      z(e)
    );
  }
  function ae(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  function oe() {
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
  function x(e, t, r) {
    return (
      oe()
        ? (x = Reflect.construct.bind())
        : (x = function (o, i, u) {
            var s = [null];
            s.push.apply(s, i);
            var l = Function.bind.apply(o, s),
              c = new l();
            return u && T(c, u.prototype), c;
          }),
      x.apply(null, arguments)
    );
  }
  function H(e) {
    var t = typeof Map == 'function' ? new Map() : void 0;
    return (
      (H = function (n) {
        if (n === null || !ae(n)) return n;
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n);
          t.set(n, o);
        }
        function o() {
          return x(n, arguments, z(this).constructor);
        }
        return (
          (o.prototype = Object.create(n.prototype, {
            constructor: {
              value: o,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          T(o, n)
        );
      }),
      H(e)
    );
  }
  var L = (function (e) {
    ne(t, e);
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
      else for (var o, i, u; u < o; u++);
      return re(n);
    }
    return t;
  })(H(Error));
  function ie(e) {
    return Math.round(e * 255);
  }
  function Dt(e, t, r) {
    return ie(e) + ',' + ie(t) + ',' + ie(r);
  }
  function je(e, t, r, n) {
    if ((n === void 0 && (n = Dt), t === 0)) return n(r, r, r);
    var o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * t,
      u = i * (1 - Math.abs((o % 2) - 1)),
      s = 0,
      l = 0,
      c = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = u))
      : o >= 1 && o < 2
      ? ((s = u), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (c = u))
      : o >= 3 && o < 4
      ? ((l = u), (c = i))
      : o >= 4 && o < 5
      ? ((s = u), (c = i))
      : o >= 5 && o < 6 && ((s = i), (c = u));
    var f = r - i / 2,
      g = s + f,
      p = l + f,
      O = c + f;
    return n(g, p, O);
  }
  var Ue = {
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
  function Mt(e) {
    if (typeof e != 'string') return e;
    var t = e.toLowerCase();
    return Ue[t] ? '#' + Ue[t] : e;
  }
  var Pt = /^#[a-fA-F0-9]{6}$/,
    Bt = /^#[a-fA-F0-9]{8}$/,
    Ft = /^#[a-fA-F0-9]{3}$/,
    zt = /^#[a-fA-F0-9]{4}$/,
    se = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    Ht =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    jt =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    Ut =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function Ve(e) {
    if (typeof e != 'string') throw new L(3);
    var t = Mt(e);
    if (t.match(Pt))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      };
    if (t.match(Bt)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      };
    }
    if (t.match(Ft))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      };
    if (t.match(zt)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      };
    }
    var o = se.exec(t);
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
      };
    var i = Ht.exec(t.substring(0, 50));
    if (i)
      return {
        red: parseInt('' + i[1], 10),
        green: parseInt('' + i[2], 10),
        blue: parseInt('' + i[3], 10),
        alpha:
          parseFloat('' + i[4]) > 1
            ? parseFloat('' + i[4]) / 100
            : parseFloat('' + i[4]),
      };
    var u = jt.exec(t);
    if (u) {
      var s = parseInt('' + u[1], 10),
        l = parseInt('' + u[2], 10) / 100,
        c = parseInt('' + u[3], 10) / 100,
        f = 'rgb(' + je(s, l, c) + ')',
        g = se.exec(f);
      if (!g) throw new L(4, t, f);
      return {
        red: parseInt('' + g[1], 10),
        green: parseInt('' + g[2], 10),
        blue: parseInt('' + g[3], 10),
      };
    }
    var p = Ut.exec(t.substring(0, 50));
    if (p) {
      var O = parseInt('' + p[1], 10),
        h = parseInt('' + p[2], 10) / 100,
        E = parseInt('' + p[3], 10) / 100,
        y = 'rgb(' + je(O, h, E) + ')',
        S = se.exec(y);
      if (!S) throw new L(4, t, y);
      return {
        red: parseInt('' + S[1], 10),
        green: parseInt('' + S[2], 10),
        blue: parseInt('' + S[3], 10),
        alpha:
          parseFloat('' + p[4]) > 1
            ? parseFloat('' + p[4]) / 100
            : parseFloat('' + p[4]),
      };
    }
    throw new L(5);
  }
  var kt = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t;
    },
    ke = kt;
  function N(e) {
    var t = e.toString(16);
    return t.length === 1 ? '0' + t : t;
  }
  function Ge(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return ke('#' + N(e) + N(t) + N(r));
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return ke('#' + N(e.red) + N(e.green) + N(e.blue));
    throw new L(6);
  }
  function Gt(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var o = Ve(e);
      return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')';
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? Ge(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Ge(e.red, e.green, e.blue)
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
    throw new L(7);
  }
  function $e(e, t, r) {
    return function () {
      var o = r.concat(Array.prototype.slice.call(arguments));
      return o.length >= t ? e.apply(this, o) : $e(e, t, o);
    };
  }
  function Vt(e) {
    return $e(e, e.length, []);
  }
  function $t(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function Wt(e, t) {
    if (t === 'transparent') return t;
    var r = Ve(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      o = F({}, r, { alpha: $t(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
    return Gt(o);
  }
  var Yt = Vt(Wt),
    We = Yt;
  var Jt = w.div({
      display: 'flex',
      padding: 0,
      borderLeft: '5px solid transparent',
      borderBottom: '1px solid transparent',
      transition: 'all 0.1s',
      alignItems: 'flex-start',
      whiteSpace: 'pre',
    }),
    qt = w.div(({ theme: e }) => ({
      backgroundColor: We(0.5, e.appBorderColor),
      color: e.color.inverseText,
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: 1,
      padding: '1px 5px',
      borderRadius: 20,
      margin: '2px 0px',
    })),
    Xt = w.div({ flex: 1, padding: '0 0 0 5px' }),
    Zt = ({ children: e, className: t }) =>
      a.createElement(He, { horizontal: !0, vertical: !0, className: t }, e),
    Kt = w(Zt)({ margin: 0, padding: '10px 5px 20px' }),
    Qt = Se(({ theme: e, ...t }) =>
      a.createElement(Fe, {
        theme: e.addonActionsTheme || 'chromeLight',
        table: !1,
        ...t,
      })
    ),
    er = ({ actions: e, onClear: t }) =>
      a.createElement(
        Ee,
        null,
        a.createElement(
          Kt,
          null,
          e.map((r) =>
            a.createElement(
              Jt,
              { key: r.id },
              r.count > 1 && a.createElement(qt, null, r.count),
              a.createElement(
                Xt,
                null,
                a.createElement(Qt, {
                  sortObjectKeys: !0,
                  showNonenumerable: !1,
                  name: r.data.name,
                  data: r.data.args || r.data,
                })
              )
            )
          )
        ),
        a.createElement(ze, { actionItems: [{ title: 'Clear', onClick: t }] })
      ),
    tr = (e, t) => {
      try {
        return C(e, t);
      } catch {
        return !1;
      }
    },
    rr = class extends he {
      constructor(e) {
        super(e),
          (this.handleStoryChange = () => {
            let { actions: t } = this.state;
            t.length > 0 &&
              t[0].options.clearOnStoryChange &&
              this.clearActions();
          }),
          (this.addAction = (t) => {
            this.setState((r) => {
              let n = [...r.actions],
                o = n.length && n[0];
              return (
                o && tr(o.data, t.data)
                  ? o.count++
                  : ((t.count = 1), n.unshift(t)),
                { actions: n.slice(0, t.options.limit) }
              );
            });
          }),
          (this.clearActions = () => {
            this.setState({ actions: [] });
          }),
          (this.mounted = !1),
          (this.state = { actions: [] });
      }
      componentDidMount() {
        this.mounted = !0;
        let { api: e } = this.props;
        e.on(M, this.addAction), e.on(A, this.handleStoryChange);
      }
      componentWillUnmount() {
        this.mounted = !1;
        let { api: e } = this.props;
        e.off(A, this.handleStoryChange), e.off(M, this.addAction);
      }
      render() {
        let { actions: e = [] } = this.state,
          { active: t } = this.props,
          r = { actions: e, onClear: this.clearActions };
        return t ? a.createElement(er, { ...r }) : null;
      }
    };
  Y.register(j, (e) => {
    Y.addPanel(be, {
      title() {
        let [t, r] = R(0),
          n = () => r((i) => i + 1),
          o = () => r(0);
        return (
          ye(
            () => (
              e.on(M, n),
              e.on(A, o),
              () => {
                e.off(M, n), e.off(A, o);
              }
            )
          ),
          `Actions${t === 0 ? '' : ` (${t})`}`
        );
      },
      type: Te.PANEL,
      render: ({ active: t, key: r }) =>
        a.createElement(rr, { key: r, api: e, active: !!t }),
      paramKey: me,
    });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.mjs.map
