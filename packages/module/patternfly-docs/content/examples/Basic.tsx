import React from 'react';

import { FeedbackModal } from '@patternfly/react-user-feedback';

export const BasicExample: React.FunctionComponent = () => 
<FeedbackModal email= "test@redhat.com" onShareFeedback='https://console.redhat.com/self-managed-feedback-form' isOpen={true} onClose={function (): void { return; } } />
