import React from 'react';
import { FeedbackModalInternal } from './FeedbackModalInternal';
import { defaultFeedback, FeedbackLocale } from '../locales/Locale';
import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackModalProps {
    /** Email address for the user, if none is provided will default to asking for their email address. */
    email?: string;
    /**  If a URL is given the  share feedback link will redirect to another site share feedback. If a function is provided we will display a share feedback screen with a submit button. */
    onShareFeedback: string | "() => {}";
    /** Indicates if the modal is visible or not. */
    isOpen: boolean;
    /** Optional call back that will be called when the user closes user feedback modal. */
    onClose: () => void;
    /** Optional prop to change the default english strings to a string of the user choice. */
    feedbackLocal?: FeedbackLocale;
    /**  If a URL is given the join mailing list link will redirect to another site to join the mailing list. If a function is provided we will display a join mailing list screen with a submit button. If it's undefined then report a bug will be removed from share feedback modal*/
    onJoinMailingList?: string | "()=>{}"
    /**  If a URL is given the report a bug link will redirect to another site to report the bug. If a function is provided we will display a feedback screen with a submit button. If it's undefined then join mailing list will be removed from the share feedback modal*/
    onReportABug?: string | "()=>{}"
    /** Feedback image that shows up in the modal */
    feedbackImg?: string;
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