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

    "Advanced",
    "i18n"
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

    </Example>,
  'i18n': props => 
    <Example {...pageData} {...props} {...{"code":"const i18nExample = {\n    getSupport: 'Lorem ipsum dolor sit amet support',\n    back: 'Lorem ipsum dolor sit amet back',\n    bugReported: 'Lorem ipsum dolor sit amet Bug Reported',\n    cancel: 'Cancel',\n    close: 'Close',\n    describeBug: \n      'Lorem ipsum dolor sit amet Describe the bug you encountered. For urgent issues, open a support case instead.',\n    describeBugUrgentCases: \n      'Lorem ipsum dolor sit amet Describe the bug you encountered. For urgent issues, open a support case instead.',\n    describeReportBug: \n    'Lorem ipsum dolor sit amet Describe the bug you encountered. Include where it is located and what action caused it. If this issue is urgent or blocking your workflow,',\n    directInfluence:\n    'Lorem ipsum dolor sit amet your feedback will directly influence the future of Red Hat’s products. Opt in below to hear about future research opportunities via email.',\n    email: 'Lorem ipsum dolor sit amet Email',\n    enterFeedback: 'Lorem ipsum dolor sit amet Enter your feedback',\n    feedback: 'Lorem ipsum dolor sit amet Feedback',\n    feedbackSent: 'Lorem ipsum dolor sit amet Feedback Sent',\n    helpUsImproveHCC: 'Lorem ipsum dolor sit amet Help us improve the Red Hat OpenShift.',\n    howIsConsoleExperience: 'Lorem ipsum dolor sit amet What has your experience been like so far?',\n    joinMailingList: 'Lorem ipsum dolor sit ametJoin mailing list',\n    informDirectionDescription: \n      'Lorem ipsum dolor sit ametBy participating in feedback sessions, usability tests, and interviews with our',\n    informRedhatDirection: 'Lorem ipsum dolor sit ametInform the direction of Red Hat',\n    learnAboutResearchOpportunities: 'Lorem ipsum dolor sit ametLearn about opportunities to share your feedback with our User Research Team.',\n    openSupportCase: 'Lorem ipsum dolor sit amet Support Case',\n    problemProcessingRequest: \n      'Lorem ipsum dolor sit ametThere was a problem processing the request. Try reloading the page. If the problem persists, contact',\n    redHatSupport: 'Lorem ipsum dolor sit ametRed Hat support',\n    reportABug: 'Lorem ipsum dolor sit ametReport a bug',\n    responseSent: 'Lorem ipsum dolor sit ametResponse sent',\n    researchOpportunities: 'Lorem ipsum dolor sit ametYes, I would like to hear about research opportunities',\n    shareFeedback: 'Lorem ipsum dolor sit ametShare feedback',\n    shareYourFeedback: 'Lorem ipsum dolor sit ametShare your feedback with us!',\n    somethingWentWrong: 'Lorem ipsum dolor sit ametSomething went wrong',\n    submitFeedback: 'Submit feedback',\n    teamWillReviewBug: 'Lorem ipsum dolor sit ametWe appreciate your feedback and our team will review your report shortly',\n    tellAboutExperience: 'Lorem ipsum dolor sit ametTell us about your experience',\n    thankYouForFeedback: 'Lorem ipsum dolor sit ametThank you, we appreciate your feedback.',\n    thankYouForInterest: \n      'Lorem ipsum dolor sit ametThank you for your interest in user research. You have been added to our mailing list.',\n    userResearchTeam: 'Lorem ipsum dolor sit ametUser Research Team',\n    weNeverSharePersonalInformation: \n      'Lorem ipsum dolor sit ametWe never share your personal information, and you can opt out at any time.',\n  };\n\n\n  /* eslint-disable no-debugger */\nimport React from 'react';\nimport { FeedbackModal} from '@patternfly/react-user-feedback';\nimport { Button } from '@patternfly/react-core';\n\nexport const AdvancedExample: React.FunctionComponent = () => {\n   const  [isOpen, setIsOpen] = React.useState<boolean>(false);\n   const handleButtonClicked = () => {setIsOpen(true)}; \n   return <>\n    <Button onClick={handleButtonClicked}>Show Modal</Button>\n    <FeedbackModal \n        feedbackLocale={i18nExample}\n        email= \"test@redhat.com\" \n        onShareFeedback={()=>\n            // Example of a successful callback\n             true\n        }\n        onJoinMailingList={()=>\n             true\n        }\n        onOpenSupportCase='http://www.redhat.com'\n        onReportABug={()=>true}\n        isOpen={isOpen}\n        onClose={()=>setIsOpen(false)}/>\n    </>\n}","title":"i18n","lang":"js"}}>

    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Advanced"])}
    {React.createElement(pageData.examples["i18n"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsReactUserFeedbackReactDocs';
Component.pageData = pageData;

export default Component;
