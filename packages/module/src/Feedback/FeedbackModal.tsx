import React from 'react';
import { FeedbackModalInternal } from './FeedbackModalInternal';
import { defaultFeedback, FeedbackLocale } from '../locales/Loacl';
import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackModalProps {
    /** Email address for the user, if none is provided will default to asking for their email address. */
    email?: string;
    /**  URL as a string or a function to handle what should be done when clicking on user feedback. */
    onShareFeedback: string | "() => void";
    /** Indicates if the modal is visible or not. */
    isOpen: boolean;
    /** Optional call back that will be called when the user closes user feedback modal. */
    onClose?: () => void;
    /** Optional prop to change the default english strings to a string of the user choice. */
    feedbackLocal?: FeedbackLocale;
};

/**
 * Creates an instance of the feedback modal.
 * 
 * @param props 
 * @returns 
 */
export const FeedbackModal = (props: FeedbackModalProps) => <LocaleContext.Provider value={props.feedbackLocal ? props.feedbackLocal : defaultFeedback}
    >
        <FeedbackModalInternal {...props} />
    </LocaleContext.Provider>

export default FeedbackModal;