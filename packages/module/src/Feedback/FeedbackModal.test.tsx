import { render, screen } from '@testing-library/react';
import { FeedbackModal } from './FeedbackModal';

describe('FeedbackModal', () => {
  it('does not expose a dialog in the accessibility tree when closed', () => {
    const onClose = jest.fn();
    render(
      <FeedbackModal
        isOpen={false}
        onClose={onClose}
        onShareFeedback="https://example.com/feedback"
      />
    );
    expect(screen.queryByRole('dialog', { name: 'Feedback modal' })).not.toBeInTheDocument();
  });

  it('exposes the feedback modal to assistive technologies when open', () => {
    const onClose = jest.fn();
    render(
      <FeedbackModal
        isOpen
        onClose={onClose}
        onShareFeedback="https://example.com/feedback"
      />
    );
    expect(screen.getByRole('dialog', { name: 'Feedback modal' })).toBeInTheDocument();
  });
});
