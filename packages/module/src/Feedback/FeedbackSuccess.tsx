import React from 'react';
import { Button, Content, ContentVariants } from '@patternfly/react-core';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';

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
      <CheckIcon color="var(--pf-global--success-color--100)" className="pf-u-mx-auto" />
      <Content component={ContentVariants.h1}>{successTitle}</Content>
      <Content>{successDescription}</Content>
      <Button variant="primary" onClick={onCloseModal}>
        {intl.close}
      </Button>
    </div>
  );
};

export default FeedbackSuccess;
