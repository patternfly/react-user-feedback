import { FeedbackModalInternal } from './FeedbackModalInternal';
import { defaultFeedback, FeedbackLocale } from '../locales/Locale';
import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackModalProps {
  /** Email address for the user, if none is passed in a user can still enter one in the modal. */
  email?: string;
  /**  If a URL is given the  share feedback link will redirect to another site share feedback.
   * If a function is provided we will display a share feedback screen with a submit button. The callback function should return a boolean or a Promise if the callback is successful or unsuccessful.*/
  onShareFeedback: string | ((email: string, feedback: string) => boolean | Promise<boolean>);
  /** Indicates if the modal is visible or not. */
  isOpen: boolean;
  /** Optional call back that will be called when the user closes user feedback modal. */
  onClose: () => void;
  /** Optional prop to change the default english strings to a string of the user choice. */
  feedbackLocale?: FeedbackLocale;
  /**  If a URL is given the join mailing list link will redirect to another site to join the mailing list.
   * If a function is provided we will display a join mailing list screen with a submit button. The callback function should return a boolean or a Promise if the callback is successful or unsuccessful.
   * If it's undefined then report a bug will be removed from share feedback modal*/
  onJoinMailingList?: string | ((email: string) => boolean | Promise<boolean>);
  /**  If a URL is given the report a bug link will redirect to another site to report the bug.
   * If a function is provided we will display a feedback screen with a submit button. The callback function should return a boolean or a Promise
   * if the callback is successful or unsuccessful.
   * If it's undefined then join mailing list will be removed from the share feedback modal*/
  onReportABug?: string | ((email: string, bug: string) => boolean | Promise<boolean>);
  /** Feedback image that shows up in the modal */
  feedbackImg?: string;
  /** URL to open a support case */
  onOpenSupportCase?: string;
}

/**
 * Creates an instance of the feedback modal.
 *
 * @param props
 * @returns
 */
export const FeedbackModal = (props: FeedbackModalProps) => (
  <LocaleContext.Provider value={props.feedbackLocale ? props.feedbackLocale : defaultFeedback}>
    <FeedbackModalInternal {...props} />
  </LocaleContext.Provider>
);

export default FeedbackModal;
