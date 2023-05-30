/* eslint-disable no-console */
import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';

export const AsyncExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);

   const fakeNetworkCall = (email:string, feedback:string, bug:string) => new Promise<boolean>(resolve => {
      setTimeout(() => {
        console.log(`Email Address: ${email} Feedback: ${feedback} Bug: ${bug}`);
        console.log('Network call complete successfully so return true');
        resolve(true);
      }, 2000);
    })
  
   const simulatedAsyncCall = async (email='', feedback='', bug='') => {
        console.log('simulatedAsyncCall');
        const result = await fakeNetworkCall(email, feedback, bug);
        return result;
      }
      

   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        onShareFeedback={(email:string, feedback:string)=>simulatedAsyncCall(email, feedback)}
        onJoinMailingList={(email:string)=>simulatedAsyncCall(email)}
        onOpenSupportCase='https://pf-user-feedback-extension-form-demos.surge.sh/requestSupport.html'
        onReportABug={(email:string, bug:string)=>simulatedAsyncCall(email, '', bug)}
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}