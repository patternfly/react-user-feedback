const i18nExample = {
    getSupport: 'Lorem ipsum dolor sit amet support',
    back: 'Lorem ipsum dolor sit amet back',
    bugReported: 'Lorem ipsum dolor sit amet Bug Reported',
    cancel: 'Cancel',
    close: 'Close',
    describeBug: 
      'Lorem ipsum dolor sit amet Describe the bug you encountered. For urgent issues, open a support case instead.',
    describeBugUrgentCases: 
      'Lorem ipsum dolor sit amet Describe the bug you encountered. For urgent issues, open a support case instead.',
    describeReportBug: 
    'Lorem ipsum dolor sit amet Describe the bug you encountered. Include where it is located and what action caused it. If this issue is urgent or blocking your workflow,',
    directInfluence:
    'Lorem ipsum dolor sit amet your feedback will directly influence the future of Red Hat’s products. Opt in below to hear about future research opportunities via email.',
    email: 'Lorem ipsum dolor sit amet Email',
    enterFeedback: 'Lorem ipsum dolor sit amet Enter your feedback',
    feedback: 'Lorem ipsum dolor sit amet Feedback',
    feedbackSent: 'Lorem ipsum dolor sit amet Feedback Sent',
    helpUsImproveHCC: 'Lorem ipsum dolor sit amet Help us improve the Red Hat OpenShift.',
    howIsConsoleExperience: 'Lorem ipsum dolor sit amet What has your experience been like so far?',
    joinMailingList: 'Lorem ipsum dolor sit ametJoin mailing list',
    informDirectionDescription: 
      'Lorem ipsum dolor sit ametBy participating in feedback sessions, usability tests, and interviews with our',
    informDirection: 'Lorem ipsum dolor sit ametInform the direction of Red Hat',
    learnAboutResearchOpportunities: 'Lorem ipsum dolor sit ametLearn about opportunities to share your feedback with our User Research Team.',
    openSupportCase: 'Lorem ipsum dolor sit amet Support Case',
    problemProcessingRequest: 
      'Lorem ipsum dolor sit ametThere was a problem processing the request. Try reloading the page. If the problem persists, contact',
    support: 'Lorem ipsum dolor sit ametRed Hat support',
    reportABug: 'Lorem ipsum dolor sit ametReport a bug',
    responseSent: 'Lorem ipsum dolor sit ametResponse sent',
    researchOpportunities: 'Lorem ipsum dolor sit ametYes, I would like to hear about research opportunities',
    shareFeedback: 'Lorem ipsum dolor sit ametShare feedback',
    shareYourFeedback: 'Lorem ipsum dolor sit ametShare your feedback with us!',
    somethingWentWrong: 'Lorem ipsum dolor sit ametSomething went wrong',
    submitFeedback: 'Submit feedback',
    teamWillReviewBug: 'Lorem ipsum dolor sit ametWe appreciate your feedback and our team will review your report shortly',
    tellAboutExperience: 'Lorem ipsum dolor sit ametTell us about your experience',
    thankYouForFeedback: 'Lorem ipsum dolor sit ametThank you, we appreciate your feedback.',
    thankYouForInterest: 
      'Lorem ipsum dolor sit ametThank you for your interest in user research. You have been added to our mailing list.',
    userResearchTeam: 'Lorem ipsum dolor sit ametUser Research Team',
    weNeverSharePersonalInformation: 
      'Lorem ipsum dolor sit ametWe never share your personal information, and you can opt out at any time.',
  };


  /* eslint-disable no-debugger */
import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';

export const AdvancedExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        feedbackLocale={i18nExample}
        email= "test@redhat.com" 
        onShareFeedback={()=>
            // Example of a successful callback
             true
        }
        onJoinMailingList={()=>
             true
        }
        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'
        onReportABug={()=>true}
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}