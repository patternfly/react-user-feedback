import { useContext } from 'react';
import { Button, Content, ContentVariants } from '@patternfly/react-core';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackErrorProps {
  onCloseModal: () => void;
}

const FeedbackError = ({ onCloseModal }: FeedbackErrorProps) => {
  const intl = useContext(LocaleContext);
  return (
    <div className="chr-c-feedback-success-content">
      <RhUiErrorFillIcon className="pf-u-mx-auto" />
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
