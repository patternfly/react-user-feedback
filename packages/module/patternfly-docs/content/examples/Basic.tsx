import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';


export const BasicExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        email= "test@redhat.com" 
        onShareFeedback='https://console.redhat.com/self-managed-feedback-form' 
        onJoinMailingList='https://console.redhat.com/self-managed-research-form'
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}