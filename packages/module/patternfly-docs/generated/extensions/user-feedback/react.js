import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { FeedbackModal } from "@patternfly/react-user-feedback";
import feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';
const pageData = {
  "id": "User feedback",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "react",
  "tabName": null,
  "slug": "/extensions/user-feedback/react",
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
          "description": "Email address for the user, if none is passed in a user can still enter one in the modal."
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
          "type": "string | ((email: string) => boolean | Promise<boolean>)",
          "description": "If a URL is given the join mailing list link will redirect to another site to join the mailing list. \nIf a function is provided we will display a join mailing list screen with a submit button. The callback function should return a boolean or a Promise if the callback is successful or unsuccessful.\nIf it's undefined then report a bug will be removed from share feedback modal"
        },
        {
          "name": "onOpenSupportCase",
          "type": "string",
          "description": "URL to open a support case"
        },
        {
          "name": "onReportABug",
          "type": "string | ((email: string, bug: string) => boolean | Promise<boolean>)",
          "description": "If a URL is given the report a bug link will redirect to another site to report the bug. \nIf a function is provided we will display a feedback screen with a submit button. The callback function should return a boolean or a Promise \nif the callback is successful or unsuccessful.\nIf it's undefined then join mailing list will be removed from the share feedback modal"
        },
        {
          "name": "onShareFeedback",
          "type": "string | ((email: string, feedback: string) => boolean | Promise<boolean>)",
          "description": "If a URL is given the  share feedback link will redirect to another site share feedback. \nIf a function is provided we will display a share feedback screen with a submit button. The callback function should return a boolean or a Promise if the callback is successful or unsuccessful.",
          "required": true
        }
      ]
    }
  ],
  "examples": [
    "Basic modal",
    "Advanced modal",
    "Advanced that autofills an email address",
    "Modal with asynchronous call support"
  ]
};
pageData.liveContext = {
  FeedbackModal,
  feedbackImage
};
pageData.examples = {
  'Basic modal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\n\nexport const URLExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        onShareFeedback='https://pf-user-feedback-extension-form-demos.surge.sh/submitFeedback.html' \n        onJoinMailingList='https://pf-user-feedback-extension-form-demos.surge.sh/joinMailingList.html'\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug='https://pf-user-feedback-extension-form-demos.surge.sh/reportBug.html'\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Basic modal","lang":"js","className":""}}>
      
      <p {...{"className":"pf-v6-c-content--p ws-p "}}>
        {`To collect data, you can link modal items to external sources instead of a built in form. For example, you can link to a custom form, which will be opened in a new tab.`}
      </p>
    </Example>,
  'Advanced modal': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\nimport feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';\n\nexport const AdvancedExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        onShareFeedback={(email:string, feedback:string)=>{\n            // Example of a successful callback\n            console.log (`Email Address: ${email} Feedback: ${feedback}`);\n            return true\n        }}\n        onJoinMailingList={(email:string)=>{\n            // Example of am unsuccessful callback\n            console.log (`Email Address: ${email}`);\n            return false;\n        }}\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={(email:string, bug:string)=>{\n            console.log (`Email Address: ${email} Bug: ${bug}`)\n            return true;}}\n        feedbackImg={feedbackImage}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Advanced modal","lang":"js","className":""}}>
      
      <p {...{"className":"pf-v6-c-content--p ws-p "}}>
        {`User feedback offers additional modal items that support different types of feedback. To allow users to report a bug, use the `}
        
        <code {...{"className":"ws-code "}}>
          {`onReportABug`}
        </code>
        {` property. To allow users to join a mailing list, such as one dedicated to future research participation, use the `}
        
        <code {...{"className":"ws-code "}}>
          {`onJoinMailingList`}
        </code>
        {` property. To allow users to open a support case, use the `}
        
        <code {...{"className":"ws-code "}}>
          {`onOpenSupportCase`}
        </code>
        {` property and link users to your support team.`}
      </p>
      
      <p {...{"className":"pf-v6-c-content--p ws-p "}}>
        {`The following example demonstrates each of these modal items. The "Share feedback", "Report a bug", and "Inform the direction of products" items all point to built-in forms.`}
      </p>
    </Example>,
  'Advanced that autofills an email address': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\nimport feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';\n\nexport const AdvancedStaticEmailExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        email='test.user@patternfly.org'\n        onShareFeedback={(email:string, feedback:string)=>{\n            // Example of a successful callback\n            console.log (`Email Address: ${email} Feedback: ${feedback}`);\n            return true\n        }}\n        onJoinMailingList={(email:string)=>{\n            // Example of am unsuccessful callback\n            console.log (`Email Address: ${email}`);\n            return false;\n        }}\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={(email:string, bug:string)=>{\n            console.log (`Email Address: ${email} Bug: ${bug}`)\n            return true;}}\n        feedbackImg={feedbackImage}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Advanced that autofills an email address","lang":"js","className":""}}>
      
      <p {...{"className":"pf-v6-c-content--p ws-p "}}>
        {`To automatically pass a user's email address into a feedback modal, use the email property. This allows you to pre-populate the modal's email field.`}
      </p>
    </Example>,
  'Modal with asynchronous call support': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\nexport const AsyncExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n\n   const fakeNetworkCall = (email:string, feedback:string, bug:string) => new Promise<boolean>(resolve => {\n      setTimeout(() => {\n        console.log(`Email Address: ${email} Feedback: ${feedback} Bug: ${bug}`);\n        console.log('Network call complete successfully so return true');\n        resolve(true);\n      }, 2000);\n    })\n  \n   const simulatedAsyncCall = async (email='', feedback='', bug='') => {\n        console.log('simulatedAsyncCall');\n        const result = await fakeNetworkCall(email, feedback, bug);\n        return result;\n      }\n      \n\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        onShareFeedback={(email:string, feedback:string)=>simulatedAsyncCall(email, feedback)}\n        onJoinMailingList={(email:string)=>simulatedAsyncCall(email)}\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={(email:string, bug:string)=>simulatedAsyncCall(email, '', bug)}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Modal with asynchronous call support","lang":"js","className":""}}>
      
      <p {...{"className":"pf-v6-c-content--p ws-p "}}>
        {`User feedback supports the ability to make asynchronous calls to send data collected from the modal to a backend service.`}
      </p>
      
      <p {...{"className":"pf-v6-c-content--p ws-p "}}>
        {`The following example demonstrates how to use the `}
        
        <code {...{"className":"ws-code "}}>
          {`async`}
        </code>
        {` function to send data to a backend service.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"about","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`About`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`The user feedback extension is a PatternFly React based component used to collect user feedback. Examples of how to use this extension are documented below. This extensions allows users to submit feedback, report a bug, request support, as well as join a mailing list to stay updated on the latest news and research opportunities.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic modal"])}
    {React.createElement(pageData.examples["Advanced modal"])}
    {React.createElement(pageData.examples["Advanced that autofills an email address"])}
    {React.createElement(pageData.examples["Modal with asynchronous call support"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsUserFeedbackReactDocs';
Component.pageData = pageData;

export default Component;
