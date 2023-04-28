import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';


export const URLExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        onShareFeedback='https://console.redhat.com/self-managed-feedback-form' 
        onJoinMailingList='https://console.redhat.com/self-managed-research-form'
        onOpenSupportCase='http://www.patternfly.org'
        onReportABug='https://www.patternfly.org'
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}