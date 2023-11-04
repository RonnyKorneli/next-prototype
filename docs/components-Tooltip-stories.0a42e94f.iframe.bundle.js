'use strict';
(self.webpackChunkfe_nextjs_sem = self.webpackChunkfe_nextjs_sem || []).push([
  [583],
  {
    './components/Tooltip/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => components_Tooltip,
      });
      var react = __webpack_require__('./node_modules/react/index.js'),
        icons_close = __webpack_require__('./icons/close.svg');
      var __jsx = react.createElement;
      function Tooltip(props) {
        var _useState = (0, react.useState)(!1),
          showTooltip = _useState[0],
          setShowTooltip = _useState[1],
          tooltipId = 'tip_' + Math.floor(999999 * Math.random()),
          tooltipRel = (0, react.useRef)(null);
        return (
          (0, react.useEffect)(function () {
            var handleClickOutside = function handleClickOutside() {
              return function (event) {
                var target = event.target;
                tooltipRel.current &&
                  !tooltipRel.current.contains(target) &&
                  (event.stopPropagation(),
                  event.preventDefault(),
                  setShowTooltip(!1));
              };
            };
            return (
              document.addEventListener('click', handleClickOutside, !0),
              function () {
                document.removeEventListener('click', handleClickOutside, !0);
              }
            );
          }, []),
          (function isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
          })()
            ? __jsx(
                'div',
                {
                  className: 'tooltip-container',
                  onClick: function onClick(e) {
                    return (function handleMouseClick(e) {
                      e.stopPropagation(),
                        e.preventDefault(),
                        setShowTooltip(!showTooltip);
                    })(e);
                  },
                  'aria-describedby': tooltipId,
                },
                props.children,
                showTooltip
                  ? __jsx(
                      'span',
                      {
                        className: 'tip -active',
                        id: tooltipId,
                        'data-position': 'bottom',
                        role: 'tooltip',
                        ref: tooltipRel,
                      },
                      __jsx(
                        'span',
                        {
                          className: 'close',
                          onClick: function onClick() {
                            setShowTooltip(!1);
                          },
                        },
                        __jsx(icons_close.Z, { width: '16', height: '16' })
                      ),
                      props.text
                    )
                  : ''
              )
            : __jsx(
                'div',
                {
                  className: 'tooltip-container',
                  onMouseEnter: function onMouseEnter() {
                    setShowTooltip(!0);
                  },
                  onMouseLeave: function onMouseLeave() {
                    setShowTooltip(!1);
                  },
                  'aria-describedby': tooltipId,
                },
                props.children,
                showTooltip
                  ? __jsx(
                      'span',
                      {
                        className: 'tip -active',
                        id: tooltipId,
                        'data-position': props.position,
                      },
                      props.text
                    )
                  : ''
              )
        );
      }
      Tooltip.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Tooltip',
        props: {
          style: {
            required: !1,
            tsType: { name: 'ReactCSSProperties', raw: 'React.CSSProperties' },
            description: '',
          },
          children: {
            required: !1,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
            description: '',
          },
          text: { required: !0, tsType: { name: 'string' }, description: '' },
          position: {
            required: !0,
            tsType: { name: 'string' },
            description: '',
          },
        },
      };
      try {
        (Tooltip.displayName = 'Tooltip'),
          (Tooltip.__docgenInfo = {
            description: '',
            displayName: 'Tooltip',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              text: {
                defaultValue: null,
                description: '',
                name: 'text',
                required: !0,
                type: { name: 'string' },
              },
              position: {
                defaultValue: null,
                description: '',
                name: 'position',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/Tooltip/Tooltip.tsx#Tooltip'] =
              {
                docgenInfo: Tooltip.__docgenInfo,
                name: 'Tooltip',
                path: 'components/Tooltip/Tooltip.tsx#Tooltip',
              });
      } catch (__react_docgen_typescript_loader_error) {}
      const components_Tooltip = Tooltip;
    },
    './stories/components/Tooltip.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          PositionBottom: () => PositionBottom,
          PositionBottomLeft200: () => PositionBottomLeft200,
          PositionTop: () => PositionTop,
          PositionTopLeft200: () => PositionTopLeft200,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default$parameters,
        _Default$parameters2,
        _Default$parameters2$,
        _PositionTop$paramete,
        _PositionTop$paramete2,
        _PositionTop$paramete3,
        _PositionTopLeft200$p,
        _PositionTopLeft200$p2,
        _PositionTopLeft200$p3,
        _PositionBottom$param,
        _PositionBottom$param2,
        _PositionBottom$param3,
        _PositionBottomLeft,
        _PositionBottomLeft2,
        _PositionBottomLeft2$,
        _Users_olayinka_oginni_fe_frontend_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          ),
        _Users_olayinka_oginni_fe_frontend_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/extends.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './components/Tooltip/index.ts'
        ),
        _icons_tooltip_filled_svg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./icons/tooltip-filled.svg'),
        _icons_tooltip_outline_svg__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./icons/tooltip-outline.svg'),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                (0,
                _Users_olayinka_oginni_fe_frontend_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Tooltip',
        component: _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,
        argTypes: {
          text: {
            description: 'Adjust tooltip text',
            control: 'text',
            defaultValue:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          },
          position: {
            control: { type: 'select' },
            options: [
              'top',
              'top-left-200',
              'bottom',
              'bottom-left-200',
              'custom',
            ],
            description: 'Choose the position',
          },
          outline: { control: { type: 'boolean' }, defaultValue: !1 },
          light: { control: { type: 'boolean' }, defaultValue: !1 },
        },
      };
      var Template = function Template(args) {
        var lit = args.light ? '-light' : '';
        return __jsx(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              width: '400px',
            },
          },
          __jsx(
            _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,
            (0,
            _Users_olayinka_oginni_fe_frontend_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              { text: '', position: '' },
              args
            ),
            args.outline
              ? __jsx(
                  _icons_tooltip_outline_svg__WEBPACK_IMPORTED_MODULE_4__.Z,
                  { className: 'icon ' + lit }
                )
              : __jsx(
                  _icons_tooltip_filled_svg__WEBPACK_IMPORTED_MODULE_3__.Z,
                  { className: 'icon ' + lit }
                )
          )
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({}),
        defaultValue =
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
      Default.args = {
        position: 'custom',
        outline: !0,
        text: defaultValue,
        light: !1,
      };
      var PositionTop = Template.bind({});
      PositionTop.args = { position: 'top', text: defaultValue };
      var PositionTopLeft200 = Template.bind({});
      PositionTopLeft200.args = {
        position: 'top-left-200',
        text: defaultValue,
      };
      var PositionBottom = Template.bind({});
      PositionBottom.args = { position: 'bottom', text: defaultValue };
      var PositionBottomLeft200 = Template.bind({});
      (PositionBottomLeft200.args = {
        position: 'bottom-left-200',
        text: defaultValue,
      }),
        (Default.parameters = _objectSpread(
          _objectSpread({}, Default.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Default$parameters = Default.parameters) ||
                  void 0 === _Default$parameters
                  ? void 0
                  : _Default$parameters.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "args => {\n  const lit = args.light ? '-light' : '';\n  return <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '220px',\n    width: '400px'\n  }}>\n      <Tooltip text={''} position={''} {...args}>\n        {args.outline ? <TooltipIcon className={'icon ' + lit} /> : <TooltipIconFilled className={'icon ' + lit} />}\n      </Tooltip>\n    </div>;\n}",
                  },
                  null === (_Default$parameters2 = Default.parameters) ||
                    void 0 === _Default$parameters2 ||
                    null ===
                      (_Default$parameters2$ = _Default$parameters2.docs) ||
                    void 0 === _Default$parameters2$
                    ? void 0
                    : _Default$parameters2$.source
                ),
              }
            ),
          }
        )),
        (PositionTop.parameters = _objectSpread(
          _objectSpread({}, PositionTop.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_PositionTop$paramete = PositionTop.parameters) ||
                  void 0 === _PositionTop$paramete
                  ? void 0
                  : _PositionTop$paramete.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "args => {\n  const lit = args.light ? '-light' : '';\n  return <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '220px',\n    width: '400px'\n  }}>\n      <Tooltip text={''} position={''} {...args}>\n        {args.outline ? <TooltipIcon className={'icon ' + lit} /> : <TooltipIconFilled className={'icon ' + lit} />}\n      </Tooltip>\n    </div>;\n}",
                  },
                  null === (_PositionTop$paramete2 = PositionTop.parameters) ||
                    void 0 === _PositionTop$paramete2 ||
                    null ===
                      (_PositionTop$paramete3 = _PositionTop$paramete2.docs) ||
                    void 0 === _PositionTop$paramete3
                    ? void 0
                    : _PositionTop$paramete3.source
                ),
              }
            ),
          }
        )),
        (PositionTopLeft200.parameters = _objectSpread(
          _objectSpread({}, PositionTopLeft200.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_PositionTopLeft200$p = PositionTopLeft200.parameters) ||
                  void 0 === _PositionTopLeft200$p
                  ? void 0
                  : _PositionTopLeft200$p.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "args => {\n  const lit = args.light ? '-light' : '';\n  return <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '220px',\n    width: '400px'\n  }}>\n      <Tooltip text={''} position={''} {...args}>\n        {args.outline ? <TooltipIcon className={'icon ' + lit} /> : <TooltipIconFilled className={'icon ' + lit} />}\n      </Tooltip>\n    </div>;\n}",
                  },
                  null ===
                    (_PositionTopLeft200$p2 = PositionTopLeft200.parameters) ||
                    void 0 === _PositionTopLeft200$p2 ||
                    null ===
                      (_PositionTopLeft200$p3 = _PositionTopLeft200$p2.docs) ||
                    void 0 === _PositionTopLeft200$p3
                    ? void 0
                    : _PositionTopLeft200$p3.source
                ),
              }
            ),
          }
        )),
        (PositionBottom.parameters = _objectSpread(
          _objectSpread({}, PositionBottom.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_PositionBottom$param = PositionBottom.parameters) ||
                  void 0 === _PositionBottom$param
                  ? void 0
                  : _PositionBottom$param.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "args => {\n  const lit = args.light ? '-light' : '';\n  return <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '220px',\n    width: '400px'\n  }}>\n      <Tooltip text={''} position={''} {...args}>\n        {args.outline ? <TooltipIcon className={'icon ' + lit} /> : <TooltipIconFilled className={'icon ' + lit} />}\n      </Tooltip>\n    </div>;\n}",
                  },
                  null ===
                    (_PositionBottom$param2 = PositionBottom.parameters) ||
                    void 0 === _PositionBottom$param2 ||
                    null ===
                      (_PositionBottom$param3 = _PositionBottom$param2.docs) ||
                    void 0 === _PositionBottom$param3
                    ? void 0
                    : _PositionBottom$param3.source
                ),
              }
            ),
          }
        )),
        (PositionBottomLeft200.parameters = _objectSpread(
          _objectSpread({}, PositionBottomLeft200.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null ===
                  (_PositionBottomLeft = PositionBottomLeft200.parameters) ||
                  void 0 === _PositionBottomLeft
                  ? void 0
                  : _PositionBottomLeft.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      "args => {\n  const lit = args.light ? '-light' : '';\n  return <div style={{\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '220px',\n    width: '400px'\n  }}>\n      <Tooltip text={''} position={''} {...args}>\n        {args.outline ? <TooltipIcon className={'icon ' + lit} /> : <TooltipIconFilled className={'icon ' + lit} />}\n      </Tooltip>\n    </div>;\n}",
                  },
                  null ===
                    (_PositionBottomLeft2 = PositionBottomLeft200.parameters) ||
                    void 0 === _PositionBottomLeft2 ||
                    null ===
                      (_PositionBottomLeft2$ = _PositionBottomLeft2.docs) ||
                    void 0 === _PositionBottomLeft2$
                    ? void 0
                    : _PositionBottomLeft2$.source
                ),
              }
            ),
          }
        ));
    },
    './icons/close.svg': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js'
      );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const __WEBPACK_DEFAULT_EXPORT__ = ({ styles = {}, ...props }) =>
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
            props
          ),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M18.733 15.56l10.24-10.227a1.947 1.947 0 000-2.733c-.351-.346-.834-.56-1.367-.56s-1.015.214-1.367.561l-10.24 10.227-10.24-10.24a1.933 1.933 0 00-2.732 2.734l-.001-.001 10.24 10.24-10.24 10.24a1.933 1.933 0 002.734 2.732l-.001.001 10.24-10.227 10.24 10.227a1.932 1.932 0 102.735-2.717l-.002-.002-10.24-10.253z',
            fill: 'parent',
          })
        );
    },
    './icons/tooltip-filled.svg': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js'
      );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const __WEBPACK_DEFAULT_EXPORT__ = ({ styles = {}, ...props }) =>
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
            props
          ),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.114 13.943h-.686l-.233.016a1.717 1.717 0 00-1.481 1.698v8l.016.233a1.717 1.717 0 001.698 1.481h.686l.233-.016a1.717 1.717 0 001.481-1.698v-8l-.016-.233a1.717 1.717 0 00-1.698-1.481zm-.343-6.857a2.057 2.057 0 000 4.114 2.057 2.057 0 000-4.114z',
          })
        );
    },
    './icons/tooltip-outline.svg': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js'
      );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const __WEBPACK_DEFAULT_EXPORT__ = ({ styles = {}, ...props }) =>
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' },
            props
          ),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
            d: 'M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 3.429C9.057 3.429 3.429 9.057 3.429 16S9.057 28.571 16 28.571 28.571 22.943 28.571 16 22.943 3.429 16 3.429zm.114 10.285c.947 0 1.714.768 1.714 1.714v8c0 .947-.767 1.714-1.714 1.714h-.686a1.714 1.714 0 01-1.714-1.714v-8c0-.947.768-1.714 1.714-1.714zm-.343-6.857a2.057 2.057 0 010 4.114 2.057 2.057 0 010-4.114z',
          })
        );
    },
  },
]);
