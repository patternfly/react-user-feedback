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

## Examples
### Basic Example

```js file="./Basic.tsx"

```

### URL Example

```js file="./URL.tsx"

```

### Advanced feedback modal

```js file="./Advanced.tsx"

```

### Advanced with email passed to modal

```js file="./AdvancedStaticEmail.tsx"

```

### i18n

```js file="./i18n.tsx"

```