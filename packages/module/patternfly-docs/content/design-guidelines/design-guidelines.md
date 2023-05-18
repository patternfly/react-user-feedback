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

**User feedback** is a modal component that products can use to collect asynchronous feedback from users. 

## Behavior

The user feedback modal may be accessed in a couple of ways: 

- By selecting a masthead’s help icon and choosing “Share feedback” in the dropdown menu:

    ![Image of expanded dropdown menu with link to sharing feedback](/img/dropdown-selection.png)

- Or by selecting “Share feedback” links or buttons elsewhere in the console, such as at the end of a wizard.

    ![Image of feedback options in a wizard](/img/wizard-selection.png)

Both of these approaches can either link to an external URL that opens as a separate tab, or display a form in the modal that can submit its data over the network.

The feedback modal includes a title, description text, an image, and one or more selectable ways to provide feedback. Each of these can be individually customized.