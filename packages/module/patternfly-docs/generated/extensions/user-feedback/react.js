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
    "Modal with asynchronous call support",
    "Modal with internationalization support"
  ]
};
pageData.liveContext = {
  FeedbackModal,
  feedbackImage
};
pageData.examples = {
  'Basic modal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\n\nexport const URLExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        onShareFeedback='https://pf-user-feedback-extension-form-demos.surge.sh/submitFeedback.html' \n        onJoinMailingList='https://pf-user-feedback-extension-form-demos.surge.sh/joinMailingList.html'\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug='https://pf-user-feedback-extension-form-demos.surge.sh/reportBug.html'\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Basic modal","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To collect data, you can link modal items to external sources instead of a built in form. For example, you can link to a custom form, which will be opened in a new tab.`}
      </p>
    </Example>,
  'Advanced modal': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\nimport feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';\n\nexport const AdvancedExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        onShareFeedback={(email:string, feedback:string)=>{\n            // Example of a successful callback\n            console.log (`Email Address: ${email} Feedback: ${feedback}`);\n            return true\n        }}\n        onJoinMailingList={(email:string)=>{\n            // Example of am unsuccessful callback\n            console.log (`Email Address: ${email}`);\n            return false;\n        }}\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={(email:string, bug:string)=>{\n            console.log (`Email Address: ${email} Bug: ${bug}`)\n            return true;}}\n        feedbackImg={feedbackImage}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Advanced modal","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`User feedback offers additional modal items that support different types of feedback. To allow users to report a bug, use the `}
        
        <code {...{"className":"ws-code"}}>
          {`onReportABug`}
        </code>
        {` property. To allow users to join a mailing list, such as one dedicated to future research participation, use the `}
        
        <code {...{"className":"ws-code"}}>
          {`onJoinMailingList`}
        </code>
        {` property. To allow users to open a support case, use the `}
        
        <code {...{"className":"ws-code"}}>
          {`onOpenSupportCase`}
        </code>
        {` property and link users to your support team.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The following example demonstrates each of these modal items. The "Share feedback", "Report a bug", and "Inform the direction of products" items all point to built-in forms.`}
      </p>
    </Example>,
  'Advanced that autofills an email address': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\nimport feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';\n\nexport const AdvancedStaticEmailExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        email='test.user@patternfly.org'\n        onShareFeedback={(email:string, feedback:string)=>{\n            // Example of a successful callback\n            console.log (`Email Address: ${email} Feedback: ${feedback}`);\n            return true\n        }}\n        onJoinMailingList={(email:string)=>{\n            // Example of am unsuccessful callback\n            console.log (`Email Address: ${email}`);\n            return false;\n        }}\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={(email:string, bug:string)=>{\n            console.log (`Email Address: ${email} Bug: ${bug}`)\n            return true;}}\n        feedbackImg={feedbackImage}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Advanced that autofills an email address","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To automatically pass a user's email address into a feedback modal, use the email property. This allows you to pre-populate the modal's email field.`}
      </p>
    </Example>,
  'Modal with asynchronous call support': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\nexport const AsyncExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n\n   const fakeNetworkCall = (email:string, feedback:string, bug:string) => new Promise<boolean>(resolve => {\n      setTimeout(() => {\n        console.log(`Email Address: ${email} Feedback: ${feedback} Bug: ${bug}`);\n        console.log('Network call complete successfully so return true');\n        resolve(true);\n      }, 2000);\n    })\n  \n   const simulatedAsyncCall = async (email='', feedback='', bug='') => {\n        console.log('simulatedAsyncCall');\n        const result = await fakeNetworkCall(email, feedback, bug);\n        return result;\n      }\n      \n\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        onShareFeedback={(email:string, feedback:string)=>simulatedAsyncCall(email, feedback)}\n        onJoinMailingList={(email:string)=>simulatedAsyncCall(email)}\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={(email:string, bug:string)=>simulatedAsyncCall(email, '', bug)}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Modal with asynchronous call support","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`User feedback supports the ability to make asynchronous calls to send data collected from the modal to a backend service.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The following example demonstrates how to use the `}
        
        <code {...{"className":"ws-code"}}>
          {`async`}
        </code>
        {` function to send data to a backend service.`}
      </p>
    </Example>,
  'Modal with internationalization support': props => 
    <Example {...pageData} {...props} {...{"code":"const i18nExample = {\n    getSupport: 'Lorem ipsum dolor sit amet support',\n    back: 'Lorem ipsum dolor sit amet back',\n    bugReported: 'Lorem ipsum dolor sit amet Bug Reported',\n    cancel: 'Cancel',\n    close: 'Close',\n    describeBug: \n      'Lorem ipsum dolor sit amet Describe the bug you encountered. For urgent issues, open a support case instead.',\n    describeBugUrgentCases: \n      'Lorem ipsum dolor sit amet Describe the bug you encountered. For urgent issues, open a support case instead.',\n    describeReportBug: \n    'Lorem ipsum dolor sit amet Describe the bug you encountered. Include where it is located and what action caused it. If this issue is urgent or blocking your workflow,',\n    directInfluence:\n    'Lorem ipsum dolor sit amet your feedback will directly influence the future of Red Hat’s products. Opt in below to hear about future research opportunities via email.',\n    email: 'Lorem ipsum dolor sit amet Email',\n    enterFeedback: 'Lorem ipsum dolor sit amet Enter your feedback',\n    feedback: 'Lorem ipsum dolor sit amet Feedback',\n    feedbackSent: 'Lorem ipsum dolor sit amet Feedback Sent',\n    helpUsImproveHCC: 'Lorem ipsum dolor sit amet Help us improve the Red Hat OpenShift.',\n    howIsConsoleExperience: 'Lorem ipsum dolor sit amet What has your experience been like so far?',\n    joinMailingList: 'Lorem ipsum dolor sit ametJoin mailing list',\n    informDirectionDescription: \n      'Lorem ipsum dolor sit ametBy participating in feedback sessions, usability tests, and interviews with our',\n    informDirection: 'Lorem ipsum dolor sit ametInform the direction of Red Hat',\n    learnAboutResearchOpportunities: 'Lorem ipsum dolor sit ametLearn about opportunities to share your feedback with our User Research Team.',\n    openSupportCase: 'Lorem ipsum dolor sit amet Support Case',\n    problemProcessingRequest: \n      'Lorem ipsum dolor sit ametThere was a problem processing the request. Try reloading the page. If the problem persists, contact',\n    support: 'Lorem ipsum dolor sit ametRed Hat support',\n    reportABug: 'Lorem ipsum dolor sit ametReport a bug',\n    responseSent: 'Lorem ipsum dolor sit ametResponse sent',\n    researchOpportunities: 'Lorem ipsum dolor sit ametYes, I would like to hear about research opportunities',\n    shareFeedback: 'Lorem ipsum dolor sit ametShare feedback',\n    shareYourFeedback: 'Lorem ipsum dolor sit ametShare your feedback with us!',\n    somethingWentWrong: 'Lorem ipsum dolor sit ametSomething went wrong',\n    submitFeedback: 'Submit feedback',\n    teamWillReviewBug: 'Lorem ipsum dolor sit ametWe appreciate your feedback and our team will review your report shortly',\n    tellAboutExperience: 'Lorem ipsum dolor sit ametTell us about your experience',\n    thankYouForFeedback: 'Lorem ipsum dolor sit ametThank you, we appreciate your feedback.',\n    thankYouForInterest: \n      'Lorem ipsum dolor sit ametThank you for your interest in user research. You have been added to our mailing list.',\n    userResearchTeam: 'Lorem ipsum dolor sit ametUser Research Team',\n    weNeverSharePersonalInformation: \n      'Lorem ipsum dolor sit ametWe never share your personal information, and you can opt out at any time.',\n  };\n\n\n  /* eslint-disable no-debugger */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\nexport const AdvancedExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        feedbackLocale={i18nExample}\n        email= \"test@redhat.com\" \n        onShareFeedback={()=>\n            // Example of a successful callback\n             true\n        }\n        onJoinMailingList={()=>\n             true\n        }\n        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'\n        onReportABug={()=>true}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"Modal with internationalization support","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To customize the content displayed in the feedback modal, pass in a custom `}
        
        <code {...{"className":"ws-code"}}>
          {`i18n`}
        </code>
        {` object with values for each property of`}
        
        <code {...{"className":"ws-code"}}>
          {`<FeedbackModal>`}
        </code>
        {`. This allows you to prepare a modal for different languages and requirements.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"about","size":"h2","className":"ws-title ws-h2"}}>
      {`About`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The user feedback extension is a PatternFly React based component used to collect user feedback. Examples of how to use this extension are documented below. This extensions allows users to submit feedback, report a bug, request support, as well as join a mailing list to stay updated on the latest news and research opportunities.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic modal"])}
    {React.createElement(pageData.examples["Advanced modal"])}
    {React.createElement(pageData.examples["Advanced that autofills an email address"])}
    {React.createElement(pageData.examples["Modal with asynchronous call support"])}
    {React.createElement(pageData.examples["Modal with internationalization support"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsUserFeedbackReactDocs';
Component.pageData = pageData;

export default Component;
