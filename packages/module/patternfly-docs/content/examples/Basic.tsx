import React from 'react';
import { FeedbackModal, User } from '@patternfly/react-user-feedback';

export const BasicExample: React.FunctionComponent = () => 
{ const user: User = {
        email: "test@redhat.com"
    }
    return <FeedbackModal user={user} isOpen={false} onClose={function (): void {;
} } />;
}
