import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';


export const URLExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        onShareFeedback='https://pf-user-feedback-extension-form-demos.surge.sh/submitFeedback.html' 
        onJoinMailingList='https://pf-user-feedback-extension-form-demos.surge.sh/joinMailingList.html'
        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'
        onReportABug='https://pf-user-feedback-extension-form-demos.surge.sh/reportBug.html'
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}