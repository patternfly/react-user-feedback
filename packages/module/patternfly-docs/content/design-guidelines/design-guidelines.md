---
# Sidenav top-level section
# should be the same for all markdown files for each extension
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files for each extension
id: User feedback
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: design-guidelines
---

Note: User feedback lives in its own package at [@patternfly/react-user-feedback](https://github.com/patternfly/react-user-feedback).

**User feedback** is a modal component that on-premises products can use to collect asynchronous feedback from users. 

## Behavior

When installed, user feedback may be accessed in a couple of ways: 

By selecting a masthead’s help icon and choosing “Share feedback” in the dropdown menu:

![Image of expanded dropdown menu with link to sharing feedback](/packages/module/patternfly-docs/content/img/dropdown-selection.png)

By selecting “Share feedback” links or buttons elsewhere in the console, such as at the end of a wizard.

![Image of feedback options in a wizard](/packages/module/patternfly-docs/content/img/wizard-selection.png)

By default, user feedback can point users to 2 Qualtrics forms: a [feedback form](https://console.redhat.com/self-managed-feedback-form), which asks users to offer feedback on their product experience, and a [research form]( https://console.redhat.com/self-managed-research-form), which asks users if they’d like to participate in future research with Red Hat’s User Experience Design team.

To reveal a user’s path to the form, “source” and “feature” query parameters are passed through to the destination URL. For example, “?source=openshift&feature=vm-wizard reveals that a user accessed user feedback through a wizard component in OpenShift. These parameters can be used in combination with Qualtrics filters to adjust a form’s questions and messaging based on a user’s source, instead of requiring the creation of separate forms for each possible user source.