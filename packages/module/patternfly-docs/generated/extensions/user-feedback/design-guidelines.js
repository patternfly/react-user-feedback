import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import srcImport0 from '../../../content/design-guidelines/./img/advanced-user-feedback.png';
import srcImport1 from '../../../content/design-guidelines/./img/dropdown-selection.png';
import srcImport2 from '../../../content/design-guidelines/./img/share-feedback.png';
import srcImport3 from '../../../content/design-guidelines/./img/report-bug.png';
import srcImport4 from '../../../content/design-guidelines/./img/research-opportunities.png';
import srcImport5 from '../../../content/design-guidelines/./img/user-feedback-external-links.png';
const pageData = {
  "id": "User feedback",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "design-guidelines",
  "tabName": null,
  "slug": "/extensions/user-feedback/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/module/patternfly-docs/content/design-guidelines/design-guidelines.md",
  "relPath": "packages/module/patternfly-docs/content/design-guidelines/design-guidelines.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`Note: User feedback lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/react-user-feedback","className":""}}>
        {`@patternfly/react-user-feedback`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      <strong {...{"className":""}}>
        {`User feedback`}
      </strong>
      {` is a modal component that products can use to collect asynchronous feedback from users.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      <img src={srcImport0} width={srcImport0.width} height={srcImport0.height} {...{"alt":"Image of advanced feedback modal with annotations","className":"ws-img "}}>
      </img>
    </p>
    <ol {...{"className":"pf-v6-c-content--ol pf-m-editorial ws-ol "}}>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <strong {...{"className":""}}>
          {`Title:`}
        </strong>
        {` Communicates the title of the modal.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <strong {...{"className":""}}>
          {`Description text:`}
        </strong>
        {` Provides a short description of the form's purpose.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <strong {...{"className":""}}>
          {`Image:`}
        </strong>
        {` Contributes to the modal's visual design.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <strong {...{"className":""}}>
          {`Selectable item:`}
        </strong>
        {` Provides one or more ways that users can leave feedback.`}
      </li>
    </ol>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`Each of these elements can be customized to fit a product's needs.`}
    </p>
    <AutoLinkHeader {...{"id":"behavior","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`The user feedback modal may be accessed in your product's help menu.`}
    </p>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`For example, you can allow users to access the modal by selecting a masthead’s help icon and choosing “Share feedback” in the dropdown menu:`}
    </p>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      <img src={srcImport1} width={srcImport1.width} height={srcImport1.height} {...{"alt":"Image of expanded dropdown menu with link to sharing feedback","className":"ws-img "}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"variations","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"modal-items-open-forms-within-the-modal","headingLevel":"h3","className":"ws-title ws-h3"}}>
      {`Modal items open forms within the modal`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`Selecting an item opens a form within the modal, which can submit data over the network.`}
    </p>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`Integrated forms can collect different kinds of feedback:`}
    </p>
    <ul {...{"className":"pf-v6-c-content--ul pf-m-editorial ws-ul "}}>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          {`General feedback form`}
        </p>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          {`The general feedback form allows users to enter feedback into a text box and submit.`}
        </p>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          <img src={srcImport2} width={srcImport2.width} height={srcImport2.height} {...{"alt":"Image of a form  within a  modal to share feedback","className":"ws-img "}}>
          </img>
        </p>
      </li>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          {`Bug report form`}
        </p>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          {`The bug report form allows users to enter feedback into a text box and submit. Its description directs users to a URL where they can submit a support ticket for critical issues.`}
        </p>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          <img src={srcImport3} width={srcImport3.width} height={srcImport3.height} {...{"alt":"Image of a form within a modal to report bugs","className":"ws-img "}}>
          </img>
        </p>
      </li>
      <li {...{"className":"pf-v6-c-content--li pf-m-editorial ws-li "}}>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          {`User research opt-in form`}
        </p>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          {`The user research opt-in form allows users to enter their email address to participate in future research efforts.`}
        </p>
        <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
          <img src={srcImport4} width={srcImport4.width} height={srcImport4.height} {...{"alt":"Image of a form within a modal to sign up for research opportunities","className":"ws-img "}}>
          </img>
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"modal-items-link-to-external-urls","headingLevel":"h3","className":"ws-title ws-h3"}}>
      {`Modal items link to external URLs`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      {`Selecting an item redirects users to an external URL (like a qualtrics form) that opens in a separate tab.`}
    </p>
    <p {...{"className":"pf-v6-c-content--p pf-m-editorial ws-p "}}>
      <img src={srcImport5} width={srcImport5.width} height={srcImport5.height} {...{"alt":"Image of modal with links to external forms","className":"ws-img "}}>
      </img>
    </p>
  </React.Fragment>
);
Component.displayName = 'ExtensionsUserFeedbackDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
