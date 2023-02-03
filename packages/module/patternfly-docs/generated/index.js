module.exports = {
  '/design-guidelines': {
    id: "react-feedback",
    title: "react-feedback",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "design-guidelines/index" */ './design-guidelines')
  },
  '/react': {
    id: "react-feedback",
    title: "react-feedback",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "react/index" */ './react')
  }
};