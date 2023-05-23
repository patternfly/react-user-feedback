/* eslint-disable no-console */
import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';
import feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';

export const AdvancedStaticEmailExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        email='test.user@patternfly.org'
        onShareFeedback={(email:string, feedback:string)=>{
            // Example of a successful callback
            console.log (`Email Address: ${email} Feedback: ${feedback}`);
            return true
        }}
        onJoinMailingList={(email:string)=>{
            // Example of am unsuccessful callback
            console.log (`Email Address: ${email}`);
            return false;
        }}
        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'
        onReportABug={(email:string, bug:string)=>{
            console.log (`Email Address: ${email} Bug: ${bug}`)
            return true;}}
        feedbackImg={feedbackImage}
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}