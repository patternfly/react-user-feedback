import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { FeedbackModal } from "@patternfly/react-user-feedback";
import feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';
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
          "type": "string | (() => boolean)",
          "description": "If a URL is given the join mailing list link will redirect to another site to join the mailing list. \nIf a function is provided we will display a join mailing list screen with a submit button. The callback function should return a boolean if the callback is successful or unsuccessful.\nIf it's undefined then report a bug will be removed from share feedback modal"
        },
        {
          "name": "onOpenSupportCase",
          "type": "string",
          "description": "URL to open a support case"
        },
        {
          "name": "onReportABug",
          "type": "string | (() => boolean)",
          "description": "If a URL is given the report a bug link will redirect to another site to report the bug. \nIf a function is provided we will display a feedback screen with a submit button. The callback function should return a boolean if the callback is successful or unsuccessful.\nIf it's undefined then join mailing list will be removed from the share feedback modal"
        },
        {
          "name": "onShareFeedback",
          "type": "string | (() => boolean)",
          "description": "If a URL is given the  share feedback link will redirect to another site share feedback. \nIf a function is provided we will display a share feedback screen with a submit button. The callback function should return a boolean if the callback is successful or unsuccessful.",
          "required": true
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "Advanced"
  ]
};
pageData.liveContext = {
  FeedbackModal,
  feedbackImage
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\n\nexport const BasicExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        email= \"test@redhat.com\" \n        onShareFeedback='https://console.redhat.com/self-managed-feedback-form' \n        onJoinMailingList='https://console.redhat.com/self-managed-research-form'\n        onOpenSupportCase='http://www.redhat.com'\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Advanced': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-debugger */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\nimport feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';\n\nexport const AdvancedExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        email= \"test@redhat.com\" \n        onShareFeedback={()=>\n            // Example of a successful callback\n             true\n        }\n        onJoinMailingList={()=>\n            // Example of am unsuccessful callback\n             false\n        }\n        onOpenSupportCase='http://www.redhat.com'\n        feedbackImg={feedbackImage}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Advanced","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Advanced"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsReactUserFeedbackReactDocs';
Component.pageData = pageData;

export default Component;
