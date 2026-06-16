import { defaultFeedback } from './Locale';

describe('defaultFeedback', () => {
  it('includes core UI strings for the feedback flow', () => {
    expect(defaultFeedback.shareFeedback).toBeTruthy();
    expect(defaultFeedback.close).toBeTruthy();
    expect(defaultFeedback.tellAboutExperience).toBeTruthy();
  });
});
