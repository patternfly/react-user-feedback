module.exports = {
  '/extensions/react-feedback/design-guidelines': {
    id: "react-feedback",
    title: "react-feedback",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "extensions/react-feedback/design-guidelines/index" */ './extensions/react-feedback/design-guidelines')
  },
  '/extensions/react-feedback/react': {
    id: "react-feedback",
    title: "react-feedback",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/react-feedback/react/index" */ './extensions/react-feedback/react')
  }
};