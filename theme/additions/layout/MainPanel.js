const MainPanel = {
  baseStyle: {
    flexGrow: 1,
    overflow: 'auto',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    transitionDuration: '.2s, .2s, .35s',
    transitionProperty: 'top, bottom, width',
    transitionTimingFunction: 'linear, linear, ease',
  },
};

export const MainPanelComponent = {
  components: {
    MainPanel,
  },
};
