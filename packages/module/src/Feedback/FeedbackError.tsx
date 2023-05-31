import React from 'react';
import { Button, Text, TextContent, TextVariants } from '@patternfly/react-core';
import ErrorIcon from '@patternfly/react-icons/dist/esm/icons/error-circle-o-icon';
import { LocaleContext } from '../context/LocaleContext';

import './Feedback.scss';

export interface FeedbackErrorProps {
  onCloseModal: () => void;
}

const FeedbackError = ({ onCloseModal }: FeedbackErrorProps) => {
  const intl = React.useContext(LocaleContext);
  return (
    <div className="chr-c-feedback-success-content">
      <ErrorIcon color="var(--pf-global--danger-color--100)" className="pf-u-mx-auto" />
      <TextContent>
        <Text component={TextVariants.h1}>{intl.somethingWentWrong}</Text>
        <Text>
          {intl.problemProcessingRequest}{' '}
          <a target="_blank" href="https://access.redhat.com/support" rel="noreferrer">
            {intl.getSupport}
          </a>
        </Text>
      </TextContent>
      <Button variant="primary" onClick={onCloseModal}>
        {intl.close}
      </Button>
    </div>
  );
};

export default FeedbackError;
