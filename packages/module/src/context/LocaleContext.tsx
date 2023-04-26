import { createContext } from 'react';
import { FeedbackLocale } from '../Feedback';
import { defaultFeedback } from '../locales/Locale';
export const LocaleContext = createContext<FeedbackLocale>(defaultFeedback);