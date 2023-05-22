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

## Elements

![Image of advanced feedback modal with annotations](/img/advanced-user-feedback.png)

1. **Title:** Communicates the title of the modal.
2. **Description text:** Provides a short description of the form's purpose. 
3. **Image:** Contributes to the modal's visual design.
4. **Selectable item:** Provides one or more ways that users can leave feedback. 

Each of these elements can be customized to fit a product's needs.

## Behavior

The user feedback modal may be accessed in your product's help menu.

For example, you can allow users to access the modal by selecting a masthead’s help icon and choosing “Share feedback” in the dropdown menu:

![Image of expanded dropdown menu with link to sharing feedback](/img/dropdown-selection.png)

## Variations

### Modal items open forms within the modal

Selecting an item opens a form within the modal, which can submit data over the network.

Integrated forms can collect different kinds of feedback:

- General feedback form

    The general feedback form allows users to enter feedback into a text box and submit.

    ![Image of a form  within a  modal to share feedback](/img/share-feedback.png)

- Bug report form

    The bug report form allows users to enter feedback into a text box and submit. Its description directs users to a URL where they can submit a support ticket for critical issues.

    ![Image of a form within a modal to report bugs](/img/report-bug.png)

- User research opt-in form

    The user research opt-in form allows users to enter their email address to participate in future research efforts. 

    ![Image of a form within a modal to sign up for research opportunities](/img/research-opportunities.png)

### Modal items link to external URLs

Selecting an item redirects users to an external URL (like a qualtrics form) that opens in a separate tab.

![Image of modal with links to external forms](/img/user-feedback-external-links.png)