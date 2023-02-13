module.exports = {
  '/extensions/react-user-feedback/design-guidelines': {
    id: "react-user-feedback",
    title: "react-user-feedback",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/react-user-feedback/design-guidelines/index" */ './extensions/react-user-feedback/design-guidelines')
  },
  '/extensions/react-user-feedback/react': {
    id: "react-user-feedback",
    title: "react-user-feedback",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/react-user-feedback/react/index" */ './extensions/react-user-feedback/react')
  }
};