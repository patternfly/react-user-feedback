import { useContext } from 'react';
import { Button, Content, ContentVariants } from '@patternfly/react-core';
import ErrorIcon from '@patternfly/react-icons/dist/esm/icons/error-circle-o-icon';
import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackErrorProps {
  onCloseModal: () => void;
}

const FeedbackError = ({ onCloseModal }: FeedbackErrorProps) => {
  const intl = useContext(LocaleContext);
  return (
    <div className="chr-c-feedback-success-content">
      <ErrorIcon color="var(--pf-global--danger-color--100)" className="pf-u-mx-auto" />
      <>
        <Content component={ContentVariants.h1}>{intl.somethingWentWrong}</Content>
        <Content>
          {intl.problemProcessingRequest}{' '}
          <a target="_blank" href="https://access.redhat.com/support" rel="noreferrer">
            {intl.getSupport}
          </a>
        </Content>
      </>
      <Button variant="primary" onClick={onCloseModal}>
        {intl.close}
      </Button>
    </div>
  );
};

export default FeedbackError;
