import { isAnEmail } from '@/helpers/email-helper';

describe('email-helper', () => {

  describe('isAnEmail', () => {
    it('should return true for valid email', () =>
      expect(isAnEmail('example@domain.com')).toBeTruthy());

    it('should return false for invalid email', () =>
      expect(isAnEmail('some-text')).toBeFalsy());
  });
});