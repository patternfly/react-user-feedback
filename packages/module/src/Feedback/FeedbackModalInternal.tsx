import React, { memo, useState, useRef } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Flex,
  FlexItem,
  Panel,
  PanelFooter,
  PanelHeader,
  PanelMain,
  PanelMainBody,
  Content,
  ContentVariants
} from '@patternfly/react-core';
import { Modal, ModalVariant } from '@patternfly/react-core/deprecated';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

import feedbackImage from '../images/pf_feedback.svg';
import { FeedbackForm } from './FeedbackForm';
import FeedbackSuccess from './FeedbackSuccess';
import FeedbackError from './FeedbackError';
import { FeedbackModalProps } from './FeedbackModal';

import { LocaleContext } from '../context/LocaleContext';

export type FeedbackPages =
  | 'feedbackHome'
  | 'feedbackOne'
  | 'feedbackSuccess'
  | 'reportBugOne'
  | 'informDirection'
  | 'feedbackError'
  | 'bugReportSuccess'
  | 'informDirectionSuccess';

export const FeedbackModalInternal = memo(
  ({
    email,
    isOpen,
    onShareFeedback,
    onJoinMailingList,
    onReportABug,
    onOpenSupportCase,
    onClose,
    feedbackImg
  }: FeedbackModalProps) => {
    const intl = React.useContext(LocaleContext);

    const emailRef = useRef<string>(email ? email : '');
    const [modalPage, setModalPage] = useState<FeedbackPages>('feedbackHome');
    const handleCloseModal = () => {
      if (onClose) {
        onClose();
      }
      setModalPage('feedbackHome');
    };

    const updateEmail = (email: string) => {
      if (emailRef.current !== email && email !== '') {
        emailRef.current = email;
      }
    };
    const onSubmit = (feedbackPage: FeedbackPages, results: boolean | Promise<boolean>) => {
      if (results instanceof Promise) {
        results.then((results) => {
          results === false ? setModalPage('feedbackError') : setModalPage(feedbackPage);
        });
      } else {
        results === false ? setModalPage('feedbackError') : setModalPage(feedbackPage);
      }
    };

    const ModalDescription = ({ modalPage }: { modalPage: FeedbackPages }) => {
      switch (modalPage) {
        case 'feedbackHome':
          return (
            <Panel isScrollable className="chr-c-feedback-content">
              <PanelHeader className="chr-c-feedback-heading">
                <FlexItem>
                  <Content component={ContentVariants.h1}>{intl.tellAboutExperience}</Content>
                </FlexItem>
                <FlexItem>
                  <Content component="p">{intl.helpUsImproveHCC}</Content>
                </FlexItem>
              </PanelHeader>
              <PanelMain tabIndex={0} className="chr-c-feedback-content-main">
                <PanelMainBody className="chr-c-feedback-cards">
                  <Card isCompact isClickable variant="secondary">
                    <CardHeader
                      selectableActions={{
                        // eslint-disable-next-line no-console
                        onClickAction: () => {
                          typeof onShareFeedback === 'string'
                            ? window.open(onShareFeedback, '_blank')
                            : setModalPage('feedbackOne');
                        },
                        selectableActionId: 'feedback-card-1',
                        selectableActionAriaLabelledby: 'feedback-card-1',
                        name: 'feedback-card'
                      }}
                    ></CardHeader>
                    <CardTitle>
                      {intl.shareFeedback} {typeof onShareFeedback === 'string' ? <ExternalLinkAltIcon /> : null}
                    </CardTitle>
                    <CardBody>{intl.howIsConsoleExperience} </CardBody>
                  </Card>
                  {onReportABug && (
                    <Card isCompact isClickable variant="secondary">
                      <CardHeader
                        selectableActions={{
                          // eslint-disable-next-line no-console
                          onClickAction: () => {
                            typeof onReportABug === 'string'
                              ? window.open(onReportABug, '_blank')
                              : setModalPage('reportBugOne');
                          },
                          selectableActionId: 'report-bug-card-1',
                          selectableActionAriaLabelledby: 'report-bug-card-1',
                          name: 'report-bug-card'
                        }}
                      ></CardHeader>

                      <CardTitle>
                        {intl.reportABug} {typeof onReportABug === 'string' ? <ExternalLinkAltIcon /> : null}{' '}
                      </CardTitle>
                      <CardBody>{intl.describeBugUrgentCases}</CardBody>
                    </Card>
                  )}
                  {onOpenSupportCase && (
                    <Card isCompact isClickable variant="secondary">
                      <CardHeader
                        selectableActions={{
                          // eslint-disable-next-line no-console
                          onClickAction: () => {
                            window.open(onOpenSupportCase, '_blank');
                          },
                          selectableActionId: 'open-support-case-card-1',
                          selectableActionAriaLabelledby: 'open-support-case-card-1',
                          name: 'open-support-case-card'
                        }}
                      ></CardHeader>
                      <CardTitle>
                        <Content component="p">
                          {intl.openSupportCase} <ExternalLinkAltIcon />
                        </Content>
                      </CardTitle>
                      <CardBody>{intl.getSupport}</CardBody>
                    </Card>
                  )}
                  {onJoinMailingList && (
                    <Card isCompact isClickable variant="secondary">
                      <CardHeader
                        selectableActions={{
                          // eslint-disable-next-line no-console
                          onClickAction: () => {
                            typeof onJoinMailingList === 'string'
                              ? window.open(onJoinMailingList, '_blank')
                              : setModalPage('informDirection');
                          },
                          selectableActionId: 'join-mailing-list-card-1',
                          selectableActionAriaLabelledby: 'join-mailing-list-card-1',
                          name: 'join-mailing-list-card'
                        }}
                      ></CardHeader>
                      <CardTitle>
                        <Content component="p">
                          {intl.informDirection}{' '}
                          {typeof onJoinMailingList === 'string' ? <ExternalLinkAltIcon /> : null}
                        </Content>
                      </CardTitle>
                      <CardBody>{intl.learnAboutResearchOpportunities}</CardBody>
                    </Card>
                  )}
                </PanelMainBody>
              </PanelMain>
              <PanelFooter className="chr-c-feedback-footer">
                <Button ouiaId="cancel-feedback" key="cancel" variant="link" onClick={handleCloseModal}>
                  {intl.cancel}
                </Button>
              </PanelFooter>
            </Panel>
          );
        case 'feedbackOne':
          return (
            <FeedbackForm
              email={emailRef.current}
              onCloseModal={handleCloseModal}
              onSubmit={(email: string, textAreaValue: string) => {
                let results: boolean | Promise<boolean> = true;
                if (onShareFeedback && typeof onShareFeedback === 'function') {
                  results = onShareFeedback(email, textAreaValue);
                  updateEmail(email);
                }
                onSubmit('feedbackSuccess', results);
              }}
              onClickBack={() => setModalPage('feedbackHome')}
              handleFeedbackError={() => setModalPage('feedbackError')}
              modalTitle={intl.shareYourFeedback}
              textareaLabel={intl.enterFeedback}
              feedbackType="Feedback"
              checkboxDescription={intl.learnAboutResearchOpportunities}
              submitTitle={intl.submitFeedback}
            />
          );
        case 'reportBugOne':
          return (
            <FeedbackForm
              email={emailRef.current}
              onCloseModal={handleCloseModal}
              onSubmit={(email: string, textAreaValue: string) => {
                let results: boolean | Promise<boolean> = true;
                if (onReportABug && typeof onReportABug === 'function') {
                  results = onReportABug(email, textAreaValue);
                  updateEmail(email);
                }
                onSubmit('bugReportSuccess', results);
              }}
              onClickBack={() => setModalPage('feedbackHome')}
              handleFeedbackError={() => setModalPage('feedbackError')}
              modalTitle={intl.reportABug}
              modalDescription={
                <Content component="p">
                  {intl.describeReportBug}{' '}
                  <Content
                    component="a"
                    href="https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true"
                    target="_blank"
                  >
                    {intl.openSupportCase} <ExternalLinkAltIcon />
                  </Content>
                </Content>
              }
              feedbackType="Bug"
              checkboxDescription={`${intl.learnAboutResearchOpportunities} ${intl.weNeverSharePersonalInformation}`}
              submitTitle={intl.submitFeedback}
            />
          );
        case 'informDirection':
          return (
            <FeedbackForm
              email={emailRef.current}
              onCloseModal={handleCloseModal}
              onSubmit={(email: string, _textAreaValue: string) => {
                let results: boolean | Promise<boolean> = true;
                if (onJoinMailingList && typeof onJoinMailingList === 'function') {
                  results = onJoinMailingList(email);
                  updateEmail(email);
                }
                onSubmit('informDirectionSuccess', results);
              }}
              onClickBack={() => setModalPage('feedbackHome')}
              handleFeedbackError={() => setModalPage('feedbackError')}
              modalTitle={intl.informDirection}
              modalDescription={
                <Content component="p">
                  {intl.informDirectionDescription}
                  <Content component="a" href="https://www.redhat.com/en/about/user-research" target="_blank">
                    {intl.userResearchTeam}
                  </Content>
                  {intl.directInfluence}
                </Content>
              }
              feedbackType="[Research Opportunities]"
              textAreaHidden={true}
              checkboxDescription={intl.weNeverSharePersonalInformation}
              submitTitle={intl.joinMailingList}
            />
          );
        case 'feedbackSuccess':
          return (
            <FeedbackSuccess
              successTitle={intl.feedbackSent}
              successDescription={intl.thankYouForFeedback}
              onCloseModal={handleCloseModal}
            />
          );
        case 'bugReportSuccess':
          return (
            <FeedbackSuccess
              successTitle={intl.bugReported}
              successDescription={intl.teamWillReviewBug}
              onCloseModal={handleCloseModal}
            />
          );
        case 'informDirectionSuccess':
          return (
            <FeedbackSuccess
              successTitle={intl.responseSent}
              successDescription={intl.thankYouForInterest}
              onCloseModal={handleCloseModal}
            />
          );
        case 'feedbackError':
          return <FeedbackError onCloseModal={handleCloseModal} />;
      }
    };

    return (
      <React.Fragment>
        <Modal
          aria-label="Feedback modal"
          isOpen={isOpen}
          className="chr-c-feedback-modal"
          variant={ModalVariant.large}
          onClose={handleCloseModal}
          hasNoBodyWrapper
        >
          <Flex
            className="chr-c-feedback-flex"
            direction={{ default: 'row' }}
            alignItems={{ default: 'alignItemsStretch' }}
          >
            <FlexItem className="chr-c-feedback-description" flex={{ default: 'flex_2' }}>
              <ModalDescription modalPage={modalPage} />
            </FlexItem>
            <FlexItem className="chr-c-feedback-image" flex={{ default: 'flex_1' }}>
              <img alt="feedback illustration" src={feedbackImg ? feedbackImg : feedbackImage} />
            </FlexItem>
          </Flex>
        </Modal>
      </React.Fragment>
    );
  }
);

FeedbackModalInternal.displayName = 'FeedbackModal';

export default FeedbackModalInternal;
