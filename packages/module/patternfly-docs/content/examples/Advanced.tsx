/* eslint-disable no-debugger */
import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';
import feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';

export const AdvancedExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        email= "test@redhat.com" 
        onShareFeedback={()=>
            // Example of a successful callback
             true
        }
        onJoinMailingList={()=>
            // Example of am unsuccessful callback
             false
        }
        onOpenSupportCase='http://www.redhat.com'
        feedbackImg={feedbackImage}
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}