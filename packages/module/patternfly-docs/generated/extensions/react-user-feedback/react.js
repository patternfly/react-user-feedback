import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { FeedbackModal } from "@patternfly/react-user-feedback";
const pageData = {
  "id": "react-user-feedback",
  "section": "extensions",
  "subsection": "",
  "source": "react",
  "tabName": null,
  "slug": "/extensions/react-user-feedback/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/examples/basic.md",
  "relPath": "packages/module/patternfly-docs/content/examples/basic.md",
  "propComponents": [
    {
      "name": "FeedbackModal",
      "description": "",
      "props": []
    }
  ],
  "examples": [
    "Example"
  ]
};
pageData.liveContext = {
  FeedbackModal
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\n\nimport { FeedbackModal } from '@patternfly/react-user-feedback';\n\nexport const BasicExample: React.FunctionComponent = () => \n<FeedbackModal email= \"test@redhat.com\" onShareFeedback='https://console.redhat.com/self-managed-feedback-form' isOpen={true} onClose={function (): void { return; } } />\n","title":"Example","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsReactUserFeedbackReactDocs';
Component.pageData = pageData;

export default Component;
