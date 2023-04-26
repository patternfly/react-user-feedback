module.exports = {
  '/extensions/user-feedback/design-guidelines': {
    id: "User feedback",
    title: "User feedback",
    toc: [],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/user-feedback/design-guidelines/index" */ './extensions/user-feedback/design-guidelines')
  },
  '/extensions/user-feedback/react': {
    id: "User feedback",
    title: "User feedback",
    toc: [{"text":"Examples"},[{"text":"Basic Example"},{"text":"URL Example"},{"text":"Advanced feedback modal"},{"text":"Advanced with email passed to modal"},{"text":"i18n"}]],
    examples: ["Basic Example","URL Example","Advanced feedback modal","Advanced with email passed to modal","i18n"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/user-feedback/react/index" */ './extensions/user-feedback/react')
  }
};