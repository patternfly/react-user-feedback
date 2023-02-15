import React from 'react';

import { FeedbackModal } from '@patternfly/react-user-feedback';

export const BasicExample: React.FunctionComponent = () => 
<FeedbackModal user={ {
        email: "test@redhat.com"
    }} isOpen={true} onClose={function (): void { return; } } />
