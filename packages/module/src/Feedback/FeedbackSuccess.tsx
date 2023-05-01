import React from 'react';
import { Button, Text, TextContent, TextVariants } from '@patternfly/react-core';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';

import './Feedback.scss';
import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackSuccessProps {
  onCloseModal: () => void;
  successTitle: string;
  successDescription: string;
}

const FeedbackSuccess = ({ onCloseModal, successTitle, successDescription }: FeedbackSuccessProps) => {
  const intl = React.useContext(LocaleContext);
  return (
    <div className="chr-c-feedback-success-content">
      <CheckIcon size={12} color="var(--pf-global--success-color--100)" className="pf-u-mx-auto" />
      <TextContent>
        <Text component={TextVariants.h1}>{successTitle}</Text>
        <Text>{successDescription}</Text>
      </TextContent>
      <Button variant="primary" onClick={onCloseModal}>
        {intl.close}
      </Button>
    </div>
  );
};

export default FeedbackSuccess;
