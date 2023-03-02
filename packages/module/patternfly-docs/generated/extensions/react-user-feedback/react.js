import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { FeedbackModal, FeedbackModalProps, FeedbackLocale } from "@patternfly/react-user-feedback";
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
      "name": "FeedbackModalProps",
      "description": "",
      "props": [
        {
          "name": "email",
          "type": "string",
          "description": "Email address for the user, if none is provided will default to asking for their email address."
        },
        {
          "name": "feedbackImg",
          "type": "string",
          "description": "Feedback image that shows up in the modal"
        },
        {
          "name": "feedbackLocale",
          "type": "FeedbackLocale",
          "description": "Optional prop to change the default english strings to a string of the user choice."
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Indicates if the modal is visible or not.",
          "required": true
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "Optional call back that will be called when the user closes user feedback modal.",
          "required": true
        },
        {
          "name": "onJoinMailingList",
          "type": "string | \"()=>{}\"",
          "description": "If a URL is given the join mailing list link will redirect to another site to join the mailing list. If a function is provided we will display a join mailing list screen with a submit button. If it's undefined then report a bug will be removed from share feedback modal"
        },
        {
          "name": "onReportABug",
          "type": "string | \"()=>{}\"",
          "description": "If a URL is given the report a bug link will redirect to another site to report the bug. If a function is provided we will display a feedback screen with a submit button. If it's undefined then join mailing list will be removed from the share feedback modal"
        },
        {
          "name": "onShareFeedback",
          "type": "string | \"() => {}\"",
          "description": "If a URL is given the  share feedback link will redirect to another site share feedback. If a function is provided we will display a share feedback screen with a submit button.",
          "required": true
        }
      ]
    }
  ],
  "examples": [
    "Example"
  ]
};
pageData.liveContext = {
  FeedbackModal,
  FeedbackModalProps,
  FeedbackLocale
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\n\nexport const BasicExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        email= \"test@redhat.com\" \n        onShareFeedback='https://console.redhat.com/self-managed-feedback-form' \n        onJoinMailingList='https://console.redhat.com/self-managed-research-form'\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}\n","title":"Example","lang":"js"}}>
      
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
