try {
  var e = 'storybook/links';
  var s = {
    NAVIGATE: `${e}/navigate`,
    REQUEST: `${e}/request`,
    RECEIVE: `${e}/receive`,
  };
  var A = __STORYBOOKAPI__,
    {
      ActiveTabs: y,
      Consumer: _,
      ManagerContext: h,
      Provider: E,
      addons: a,
      combineParameters: T,
      controlOrMetaKey: p,
      controlOrMetaSymbol: O,
      eventMatchesShortcut: b,
      eventToShortcut: k,
      isMacLike: g,
      isShortcutTaken: I,
      keyToSymbol: v,
      merge: C,
      mockChannel: M,
      optionOrAltSymbol: P,
      shortcutMatchesShortcut: R,
      shortcutToHumanString: D,
      types: f,
      useAddonState: x,
      useArgTypes: K,
      useArgs: G,
      useChannel: N,
      useGlobalTypes: V,
      useGlobals: Y,
      useParameter: $,
      useSharedState: B,
      useStoryPrepared: Q,
      useStorybookApi: U,
      useStorybookState: q,
    } = __STORYBOOKAPI__;
  a.register(e, (n) => {
    a.getChannel().on(s.REQUEST, ({ kind: u, name: l }) => {
      let S = n.storyId(u, l);
      n.emit(s.RECEIVE, S);
    });
  });
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.mjs.map
