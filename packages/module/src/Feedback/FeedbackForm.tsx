import React, { ReactNode, useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  FormGroup,
  Panel,
  PanelMain,
  PanelMainBody,
  Text,
  TextArea,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { LocaleContext } from '../context/LocaleContext';

import './Feedback.scss';

export interface FeedbackFormProps {
  email?: string;
  onCloseModal: () => void;
  onSubmit: () => void;
  onClickBack: () => void;
  handleFeedbackError: () => void;
  modalTitle: string;
  modalDescription?: string | ReactNode;
  textareaLabel?: string;
  feedbackType: 'Feedback' | 'Bug' | '[Research Opportunities]';
  checkboxDescription: string;
  textAreaHidden?: boolean;
  submitTitle: string;
}

export const FeedbackForm = ({
  email,
  onCloseModal,
  onSubmit,
  onClickBack,
  handleFeedbackError,
  modalTitle,
  modalDescription,
  textareaLabel,
  feedbackType,
  checkboxDescription,
  textAreaHidden = false,
  submitTitle,
}: FeedbackFormProps) => {
  const intl = React.useContext(LocaleContext);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [checked, setChecked] = useState(false);

  async function handleModalSubmission() {
    try {
      onSubmit();
    } catch (err) {
      handleFeedbackError();
    }
  }

  return (
    <div className="chr-c-feedback-content">
      <TextContent>
        <Text component={TextVariants.h1}>{modalTitle}</Text>
        {modalDescription}
      </TextContent>
      <Form>
        {textAreaHidden ? (
          ''
        ) : (
          <FormGroup label={textareaLabel} fieldId="horizontal-form-exp">
            <TextArea
              value={textAreaValue}
              onChange={(value) => setTextAreaValue(value)}
              className="chr-c-feedback-text-area"
              name="feedback-description-text"
              id="feedback-description-text"
            />
          </FormGroup>
        )}
        <FormGroup className="pf-u-mt-20">
          <Checkbox
            id="feedback-checkbox"
            isChecked={checked}
            onChange={() => setChecked(!checked)}
            label={intl.researchOpportunities}
            description={checkboxDescription}
          />
        </FormGroup>
      </Form>
      {checked ? (
        <>
         {/* TODO: Add code to prompt for email if none is provide along with validation that the email address is valid. */}
          <div className="pf-u-font-family-heading-sans-serif chr-c-feedback-email">{intl.email}</div>
          <Panel variant="raised" className="chr-c-feedback-panel">
            <PanelMain>
              <PanelMainBody className="chr-c-feedback-panel__body">{email}</PanelMainBody>
            </PanelMain>
          </Panel>
        </>
      ) : (
        ''
      )}
      <div className="chr-c-feedback-buttons">
        <Button
          ouiaId="submit-feedback"
          className="chr-c-feedback-footer-button"
          key="confirm"
          variant="primary"
          // eslint-disable-next-line no-nested-ternary
          isDisabled={feedbackType !== '[Research Opportunities]' ? (textAreaValue.length > 1 ? false : true) : !checked}
          onClick={handleModalSubmission}
        >
          {submitTitle}
        </Button>
        <Button ouiaId="back-feedback" className="chr-c-feedback-footer-button" key="back" variant="secondary" onClick={onClickBack}>
          {intl.back}
        </Button>
        <Button ouiaId="cancel-feedback" className="chr-c-feedback-footer-button" key="cancel" variant="link" onClick={onCloseModal}>
          {intl.cancel}
        </Button>
      </div>
    </div>
  );
};
