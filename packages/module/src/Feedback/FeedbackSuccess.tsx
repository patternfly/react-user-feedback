import { useContext } from 'react';
import { Button, Content, ContentVariants } from '@patternfly/react-core';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';

import { LocaleContext } from '../context/LocaleContext';

export interface FeedbackSuccessProps {
  onCloseModal: () => void;
  successTitle: string;
  successDescription: string;
}

const FeedbackSuccess = ({ onCloseModal, successTitle, successDescription }: FeedbackSuccessProps) => {
  const intl = useContext(LocaleContext);
  return (
    <div className="chr-c-feedback-success-content">
      <RhUiCheckCircleFillIcon className="pf-u-mx-auto" />
      <Content component={ContentVariants.h1}>{successTitle}</Content>
      <Content>{successDescription}</Content>
      <Button variant="primary" onClick={onCloseModal}>
        {intl.close}
      </Button>
    </div>
  );
};

export default FeedbackSuccess;
