import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeedbackForm, FeedbackFormProps } from '../FeedbackForm';
import { LocaleContext } from '../../context/LocaleContext';
import { defaultFeedback } from '../../locales/Locale';

describe('FeedbackForm', () => {
  const defaultProps: FeedbackFormProps = {
    email: '',
    onCloseModal: jest.fn(),
    onSubmit: jest.fn(),
    onClickBack: jest.fn(),
    handleFeedbackError: jest.fn(),
    modalTitle: 'Share your feedback',
    modalDescription: 'Tell us about your experience',
    textareaLabel: 'Feedback',
    feedbackType: 'Feedback',
    checkboxDescription: 'Get emails about research opportunities',
    textAreaHidden: false,
    submitTitle: 'Submit'
  };

  const renderWithLocale = (props: Partial<FeedbackFormProps> = {}) => 
    render(
      <LocaleContext.Provider value={defaultFeedback}>
        <FeedbackForm {...defaultProps} {...props} />
      </LocaleContext.Provider>
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Textarea Interactions
  describe('Textarea Interactions', () => {
    test('updates textarea value when user types', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'This is my feedback');

      expect(textarea).toHaveValue('This is my feedback');
    });

    test('allows clearing textarea by selecting all and deleting', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Test feedback');
      await user.clear(textarea);

      expect(textarea).toHaveValue('');
    });

    test('does not render textarea when textAreaHidden is true', () => {
      renderWithLocale({ textAreaHidden: true });

      expect(screen.queryByRole('textbox', { name: /feedback/i })).not.toBeInTheDocument();
    });
  });

  // Checkbox Interactions
  describe('Checkbox Interactions', () => {
    test('toggles checkbox when clicked', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });

      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);

      expect(checkbox).toBeChecked();
    });

    test('shows email input when checkbox is checked', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });

      expect(screen.queryByRole('textbox', { name: /error state username example/i })).not.toBeInTheDocument();

      await user.click(checkbox);

      expect(screen.getByRole('textbox', { name: /error state username example/i })).toBeInTheDocument();
    });

    test('hides email input when checkbox is unchecked after being checked', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });

      await user.click(checkbox);
      expect(screen.getByRole('textbox', { name: /error state username example/i })).toBeInTheDocument();

      await user.click(checkbox);
      expect(screen.queryByRole('textbox', { name: /error state username example/i })).not.toBeInTheDocument();
    });

    test('can toggle checkbox using Space key', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      checkbox.focus();

      await user.keyboard(' ');

      expect(checkbox).toBeChecked();
    });
  });

  // Email Input Interactions
  describe('Email Input Interactions', () => {
    test('updates email value when user types', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'test@example.com');

      expect(emailInput).toHaveValue('test@example.com');
    });

    test('shows validation error for invalid email on blur', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'invalid-email');
      await user.tab();

      expect(screen.getByText('Email address is invalid.')).toBeInTheDocument();
    });

    test('does not show validation error for valid email on blur', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'test@example.com');
      await user.tab();

      expect(screen.queryByText('Email address is invalid.')).not.toBeInTheDocument();
    });

    test('updates validation state when correcting invalid email', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'invalid');
      await user.tab();

      expect(screen.getByText('Email address is invalid.')).toBeInTheDocument();

      await user.clear(emailInput);
      await user.type(emailInput, 'valid@example.com');
      await user.tab();

      expect(screen.queryByText('Email address is invalid.')).not.toBeInTheDocument();
    });

    test('preserves provided email prop in input', async () => {
      const user = userEvent.setup();
      renderWithLocale({ email: 'preset@example.com' });

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      expect(emailInput).toHaveValue('preset@example.com');
    });
  });

  // Button Interactions
  describe('Button Interactions', () => {
    test('calls onSubmit when submit button is clicked with valid feedback', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn();
      renderWithLocale({ onSubmit });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Great product!');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await user.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith('', 'Great product!', false);
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    test('calls onSubmit with email when checkbox is checked and email is valid', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn();
      renderWithLocale({ onSubmit });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Great product!');

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'user@example.com');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await user.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith('user@example.com', 'Great product!', true);
    });

    test('calls onClickBack when back button is clicked', async () => {
      const user = userEvent.setup();
      const onClickBack = jest.fn();
      renderWithLocale({ onClickBack });

      const backButton = screen.getByRole('button', { name: 'Back' });
      await user.click(backButton);

      expect(onClickBack).toHaveBeenCalledTimes(1);
    });

    test('calls onCloseModal when cancel button is clicked', async () => {
      const user = userEvent.setup();
      const onCloseModal = jest.fn();
      renderWithLocale({ onCloseModal });

      const cancelButton = screen.getByRole('button', { name: 'Cancel' });
      await user.click(cancelButton);

      expect(onCloseModal).toHaveBeenCalledTimes(1);
    });
  });

  // Submit Button State
  describe('Submit Button State', () => {
    test('disables submit button when feedback type is Feedback and textarea is empty', () => {
      renderWithLocale({ feedbackType: 'Feedback' });

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeDisabled();
    });

    test('enables submit button when feedback type is Feedback and textarea has valid content', async () => {
      const user = userEvent.setup();
      renderWithLocale({ feedbackType: 'Feedback' });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Good');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeEnabled();
    });

    test('disables submit button when checkbox is checked but email is invalid', async () => {
      const user = userEvent.setup();
      renderWithLocale({ feedbackType: 'Feedback' });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Great product!');

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'invalid-email');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeDisabled();
    });

    test('enables submit button when checkbox is checked and email is valid for Feedback type', async () => {
      const user = userEvent.setup();
      renderWithLocale({ feedbackType: 'Feedback' });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Great!');

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'valid@example.com');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeEnabled();
    });

    test('disables submit button for Research Opportunities type when checkbox is unchecked', () => {
      renderWithLocale({ feedbackType: '[Research Opportunities]' });

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeDisabled();
    });

    test('enables submit button for Research Opportunities type when checkbox is checked with valid email', async () => {
      const user = userEvent.setup();
      renderWithLocale({ feedbackType: '[Research Opportunities]' });

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'test@example.com');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeEnabled();
    });

    test('disables submit button when textarea has only one character', async () => {
      const user = userEvent.setup();
      renderWithLocale({ feedbackType: 'Bug' });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'A');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      expect(submitButton).toBeDisabled();
    });
  });

  // Error Handling
  describe('Error Handling', () => {
    test('calls handleFeedbackError when onSubmit throws an error', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn().mockRejectedValue(new Error('Submission failed'));
      const handleFeedbackError = jest.fn();
      renderWithLocale({ onSubmit, handleFeedbackError });

      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Test feedback');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await user.click(submitButton);

      expect(handleFeedbackError).toHaveBeenCalledTimes(1);
    });
  });

  // Form Workflow
  describe('Form Workflow', () => {
    test('completes full feedback submission workflow', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn();
      renderWithLocale({ onSubmit, feedbackType: 'Feedback' });

      // Type feedback
      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'The application is very user-friendly!');

      // Check the research opportunities checkbox
      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      // Enter email
      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.type(emailInput, 'user@example.com');

      // Submit
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await user.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith('user@example.com', 'The application is very user-friendly!', true);
    });

    test('completes feedback submission without email opt-in', async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn();
      renderWithLocale({ onSubmit, feedbackType: 'Bug' });

      // Type bug description
      const textarea = screen.getByRole('textbox', { name: /feedback/i });
      await user.type(textarea, 'Found a bug in the login page');

      // Submit without checking the checkbox
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await user.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith('', 'Found a bug in the login page', false);
    });
  });

  // Accessibility
  describe('Accessibility', () => {
    test('renders modal title as h1', () => {
      renderWithLocale({ modalTitle: 'Provide Feedback' });

      const heading = screen.getByRole('heading', { level: 1, name: 'Provide Feedback' });
      expect(heading).toBeInTheDocument();
    });

    test('email input has correct type attribute', async () => {
      const user = userEvent.setup();
      renderWithLocale();

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    test('checkbox displays description', () => {
      renderWithLocale({ checkboxDescription: 'We will contact you about user research studies' });

      expect(screen.getByText('We will contact you about user research studies')).toBeInTheDocument();
    });
  });

  // Snapshot Tests
  describe('Snapshots', () => {
    test('renders default state snapshot', () => {
      const { asFragment } = renderWithLocale({
        modalTitle: 'Share your feedback',
        modalDescription: 'Tell us about your experience',
        feedbackType: 'Feedback'
      });
      expect(asFragment()).toMatchSnapshot();
    });

    test('renders with checkbox checked and email visible snapshot', async () => {
      const user = userEvent.setup();
      const { asFragment } = renderWithLocale({
        modalTitle: 'Share your feedback',
        feedbackType: 'Feedback'
      });

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      expect(asFragment()).toMatchSnapshot();
    });

    test('renders Research Opportunities type snapshot', () => {
      const { asFragment } = renderWithLocale({
        modalTitle: 'Join our research',
        feedbackType: '[Research Opportunities]',
        textAreaHidden: true
      });
      expect(asFragment()).toMatchSnapshot();
    });

    test('renders with email validation error snapshot', async () => {
      const user = userEvent.setup();
      const { asFragment } = renderWithLocale({
        modalTitle: 'Share your feedback',
        feedbackType: 'Bug',
        email: 'preset@example.com'
      });

      const checkbox = screen.getByRole('checkbox', { name: /yes, i would like to hear about research opportunities/i });
      await user.click(checkbox);

      const emailInput = screen.getByRole('textbox', { name: /error state username example/i });
      await user.clear(emailInput);
      await user.type(emailInput, 'invalid-email');
      await user.tab();

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
