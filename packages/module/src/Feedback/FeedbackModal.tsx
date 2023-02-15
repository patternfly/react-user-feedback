import React from 'react';
import { IntlProvider } from 'react-intl';
import { FeedbackModalInternal } from './FeedbackModalInternal';
import { User } from '../types/User';
import { DeepRequired } from 'utility-types';

export interface FeedbackModalProps {
    user: DeepRequired<User>;
    isOpen: boolean;
    onClose: () => void;
};


export const FeedbackModal = (props: FeedbackModalProps) => <IntlProvider
        locale={''}
    >
        <FeedbackModalInternal {...props} />
    </IntlProvider>

export default FeedbackModal;