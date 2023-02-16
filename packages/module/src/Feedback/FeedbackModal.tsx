import React from 'react';
import { IntlProvider } from 'react-intl';
import { FeedbackModalInternal } from './FeedbackModalInternal';

export interface FeedbackModalProps {
    /** Email address for the user, if none is provided will default to asking for their email address. */
    email?: string;
    /**  URL as a string or a function to handle what should be done when clicking on user feedback. */
    onShareFeedback: string | "() => void";
    /** Indicates if the modal is visible or not. */
    isOpen: boolean;
    /** Optional call back that will be called when the user closes user feedback modal. */
    onClose?: () => void;
};

/**
 * Creates an instance of the feedback modal.
 * 
 * @param props 
 * @returns 
 */
export const FeedbackModal = (props: FeedbackModalProps) => <IntlProvider
        locale={''}
    >
        <FeedbackModalInternal {...props} />
    </IntlProvider>

export default FeedbackModal;