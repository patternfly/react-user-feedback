---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files
id: User feedback
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['FeedbackModalProps']
---

import { FeedbackModal } from "@patternfly/react-user-feedback";
import feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';

## About
	
The user feedback extension is a PatternFly React based component used to collect user feedback. Examples of how to use this extension are documented below. This extensions allows users to submit feedback, report a bug, request support, as well as join a mailing list to stay updated on the latest news and research opportunities.

## Examples

### Basic modal
To collect data, you can link modal items to external sources instead of a built in form. For example, you can link to a custom form, which will be opened in a new tab.

```js file="./URL.tsx"

```

### Advanced modal
User feedback offers additional modal items that support different types of feedback. To allow users to report a bug, use the `onReportABug` property. To allow users to join a mailing list, such as one dedicated to future research participation, use the `onJoinMailingList` property. To allow users to open a support case, use the `onOpenSupportCase` property and link users to your support team.

The following example demonstrates each of these modal items. The "Share feedback", "Report a bug", and "Inform the direction of products" items all point to built-in forms.

```js file="./Advanced.tsx"

```

### Advanced that autofills an email address
To automatically pass a user's email address into a feedback modal, use the email property. This allows you to pre-populate the modal's email field.
```js file="./AdvancedWithEmail.tsx"

```
### Modal with asynchronous call support
User feedback supports the ability to make asynchronous calls to send data collected from the modal to a backend service. 
	
The following example demonstrates how to use the `async` function to send data to a backend service.
```js file="./Async.tsx"

```

### Modal with internationalization support
To customize the content displayed in the feedback modal, pass in a custom `i18n` object with values for each property of`<FeedbackModal>`. This allows you to prepare a modal for different languages and requirements.
```js file="./i18n.tsx"

```
