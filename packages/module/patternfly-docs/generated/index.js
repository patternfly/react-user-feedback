module.exports = {
  '/extensions/react-user-feedback/design-guidelines': {
    id: "react-user-feedback",
    title: "react-user-feedback",
    toc: [],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/react-user-feedback/design-guidelines/index" */ './extensions/react-user-feedback/design-guidelines')
  },
  '/extensions/react-user-feedback/react': {
    id: "react-user-feedback",
    title: "react-user-feedback",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Advanced"},{"text":"i18n"}]],
    examples: ["Basic","Advanced","i18n"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/react-user-feedback/react/index" */ './extensions/react-user-feedback/react')
  }
};