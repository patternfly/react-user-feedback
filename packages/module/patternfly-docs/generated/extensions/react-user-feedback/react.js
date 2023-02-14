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
  "examples": [
    "Example"
  ],
  "fullscreenExamples": [
    "Fullscreen example"
  ]
};
pageData.liveContext = {
  FeedbackModal
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FeedbackModal, User } from '@patternfly/react-user-feedback';\n\nexport const BasicExample: React.FunctionComponent = () => \n{ const user: User = {\n        email: \"test@redhat.com\"\n    }\n    return <FeedbackModal user={user} isOpen={false} onClose={function (): void {;\n} } />;\n}\n","title":"Example","lang":"js"}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FeedbackModal, User } from '@patternfly/react-user-feedback';\n\nexport const BasicExample: React.FunctionComponent = () => \n{ const user: User = {\n        email: \"test@redhat.com\"\n    }\n    return <FeedbackModal user={user} isOpen={false} onClose={function (): void {;\n} } />;\n}\n","title":"Fullscreen example","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
    {React.createElement(pageData.examples["Fullscreen example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsReactUserFeedbackReactDocs';
Component.pageData = pageData;

export default Component;
