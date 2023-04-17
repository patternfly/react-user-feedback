import React, { memo, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Grid,
  GridItem,
  Modal,
  ModalVariant,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

import feedbackImage from '../images/pf_feedback.svg';
import { FeedbackForm } from './FeedbackForm';
import FeedbackSuccess from './FeedbackSuccess';
import FeedbackError from './FeedbackError';
import { FeedbackModalProps } from './FeedbackModal';

import './Feedback.scss';
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

export const FeedbackModalInternal = memo(({ email, isOpen, onShareFeedback, onJoinMailingList, onReportABug, onOpenSupportCase, onClose, feedbackImg }: FeedbackModalProps) => {
  const intl = React.useContext(LocaleContext);

  const [modalPage, setModalPage] = useState<FeedbackPages>('feedbackHome');
  const handleCloseModal = () => {
    if (onClose) {
       onClose();

    }
    setModalPage("feedbackHome");
  };

  const onSubmit = (feedbackPage: FeedbackPages, callBack?: string | (()=>boolean)) => {
    if (callBack && typeof callBack === 'function') {
      callBack();
      if(callBack() === false) {
        setModalPage("feedbackError");
       } else {
        setModalPage(feedbackPage);
       }
    } else {
      setModalPage(feedbackPage);
    }
  }

  const ModalDescription = ({ modalPage }: { modalPage: FeedbackPages }) => {
    switch (modalPage) {
      case 'feedbackHome':
        return (
          <div className="chr-c-feedback-content">
            <TextContent>
              <Text component={TextVariants.h1}>{intl.tellAboutExperience}</Text>
              <Text>{intl.helpUsImproveHCC}</Text>
            </TextContent>
            <div className="chr-c-feedback-cards">
              <Card isSelectableRaised isCompact onClick={() => {typeof onShareFeedback === 'string' ? window.open(onShareFeedback, '_blank') :  setModalPage('feedbackOne')}}>
                <CardTitle className="chr-c-feedback-card-title">{intl.shareFeedback} {typeof onShareFeedback === 'string' ? <ExternalLinkAltIcon /> : null}</CardTitle>
                <CardBody>{intl.howIsConsoleExperience} </CardBody>
              </Card>
              <br />
              {onReportABug ? 
              <><Card isSelectableRaised isCompact onClick={() => { typeof onReportABug === 'string' ? window.open(onReportABug, '_blank') : setModalPage('reportBugOne'); } }>
                  <CardTitle className="chr-c-feedback-card-title">{intl.reportABug}</CardTitle>
                  <CardBody>{intl.describeBugUrgentCases}</CardBody>
                </Card><br /></> : null}
              <Card
                isSelectableRaised
                isCompact
                onClick={() => {
                  window.open(onOpenSupportCase ? onOpenSupportCase : 'https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true', '_blank');
                }}
              >
                <CardTitle className="chr-c-feedback-card-title">
                  <Text>
                    {intl.openSupportCase} <ExternalLinkAltIcon />
                  </Text>
                </CardTitle>
                <CardBody>{intl.getSupport}</CardBody>
              </Card>
              <br />
              {onJoinMailingList ?
              <Card isSelectableRaised isCompact onClick={() => {typeof onJoinMailingList ==='string' ? window.open(onJoinMailingList, '_blank') : setModalPage('informDirection')}}>
                <CardTitle className="chr-c-feedback-card-title">
                  <Text>{intl.informDirection} {typeof onJoinMailingList === 'string' ? <ExternalLinkAltIcon />: null}</Text>
                </CardTitle>
                <CardBody>{intl.learnAboutResearchOpportunities}</CardBody>
              </Card>: null }
            </div>
            <Button className="chr-c-feedback-button" ouiaId="cancel-feedback" key="cancel" variant="link" onClick={handleCloseModal}>
              {intl.cancel}
            </Button>
          </div>
        );
      case 'feedbackOne':
        return (
          <FeedbackForm
            email={email}
            onCloseModal={handleCloseModal}
            onSubmit={() => onSubmit('feedbackSuccess', onShareFeedback)}
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
            email={email}
            onCloseModal={handleCloseModal}
            onSubmit={() => onSubmit('bugReportSuccess', onReportABug)}
            onClickBack={() => setModalPage('feedbackHome')}
            handleFeedbackError={() => setModalPage('feedbackError')}
            modalTitle={intl.reportABug}
            modalDescription={
              <Text>
                {intl.describeReportBug}{' '}
                <Text component="a" href="https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true" target="_blank">
                  {intl.openSupportCase} <ExternalLinkAltIcon />
                </Text>
              </Text>
            }
            feedbackType="Bug"
            checkboxDescription={`${intl.learnAboutResearchOpportunities} ${intl.weNeverSharePersonalInformation}`}
            submitTitle={intl.submitFeedback}
          />
        );
      case 'informDirection':
        return (
          <FeedbackForm
            email={email}
            onCloseModal={handleCloseModal}
            onSubmit={() => onSubmit('informDirectionSuccess', onJoinMailingList)}
            onClickBack={() => setModalPage('feedbackHome')}
            handleFeedbackError={() => setModalPage('feedbackError')}
            modalTitle={intl.informDirection}
            modalDescription={
              <Text>
                {intl.informDirectionDescription}
                <Text component="a" href="https://www.redhat.com/en/about/user-research" target="_blank">
                  {intl.userResearchTeam}
                </Text>
                {intl.directInfluence}
              </Text>
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
      <Modal aria-label="Feedback modal" isOpen={isOpen} className="chr-c-feedback-modal" variant={ModalVariant.large} onClose={handleCloseModal}>
        <Grid>
          <GridItem span={8} rowSpan={12}>
            <ModalDescription modalPage={modalPage} />
          </GridItem>
          <GridItem span={4} className="chr-c-feedback-image">
            <img alt="feedback illustration" src={feedbackImg? feedbackImg : feedbackImage} />
          </GridItem>
        </Grid>
      </Modal>
    </React.Fragment>
  );
});

FeedbackModalInternal.displayName = 'FeedbackModal';

export default FeedbackModalInternal;
