module.exports = {
  '/extensions/user-feedback/design-guidelines': {
    id: "User feedback",
    title: "User feedback",
    toc: [{"text":"Elements"},{"text":"Behavior"},{"text":"Variations"},[{"text":"Modal items open forms within the modal"},{"text":"Modal items link to external URLs"}]],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/user-feedback/design-guidelines/index" */ './extensions/user-feedback/design-guidelines')
  },
  '/extensions/user-feedback/react': {
    id: "User feedback",
    title: "User feedback",
    toc: [{"text":"About"},{"text":"Examples"},[{"text":"Basic modal"},{"text":"Advanced modal"},{"text":"Advanced that autofills an email address"},{"text":"Modal with asynchronous call support"},{"text":"Modal with internationalization support"}]],
    examples: ["Basic modal","Advanced modal","Advanced that autofills an email address","Modal with asynchronous call support","Modal with internationalization support"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/user-feedback/react/index" */ './extensions/user-feedback/react')
  }
};