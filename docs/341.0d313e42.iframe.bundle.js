'use strict';
(self.webpackChunkfe_nextjs_sem = self.webpackChunkfe_nextjs_sem || []).push([
  [341],
  {
    './node_modules/@mdx-js/react/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          MDXContext: () => MDXContext,
          MDXProvider: () => MDXProvider,
          useMDXComponents: () => useMDXComponents,
          withMDXComponents: () => withMDXComponents,
        });
      var react = __webpack_require__('./node_modules/react/index.js');
      const MDXContext = react.createContext({});
      function withMDXComponents(Component) {
        return function boundMDXComponent(props) {
          const allComponents = useMDXComponents(props.components);
          return react.createElement(Component, { ...props, allComponents });
        };
      }
      function useMDXComponents(components) {
        const contextComponents = react.useContext(MDXContext);
        return react.useMemo(
          () =>
            'function' == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components },
          [contextComponents, components]
        );
      }
      const emptyObject = {};
      function MDXProvider({ components, children, disableParentContext }) {
        let allComponents = useMDXComponents(components);
        return (
          disableParentContext && (allComponents = components || emptyObject),
          react.createElement(
            MDXContext.Provider,
            { value: allComponents },
            children
          )
        );
      }
    },
  },
]);
