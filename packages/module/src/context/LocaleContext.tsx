import { createContext } from 'react';
import { FeedbackLocale, defaultFeedback } from '../Feedback';

export const LocaleContext = createContext<FeedbackLocale>(defaultFeedback);