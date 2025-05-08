import { isNotEmpty, isEmpty, createAndFill } from '@/helpers/array-helper';

describe('array-helper', () => {

  describe('isNotEmpty', () => {
    it('should return true for non-empty arrays', () =>
      expect(isNotEmpty([1, 2, 3])).toBeTruthy());

    it('should return false for empty arrays', () =>
      expect(isNotEmpty([])).toBeFalsy());

    it('should return false for undefined', () => 
      expect(isNotEmpty(undefined)).toBeFalsy());
  });
  
  describe('isEmpty', () => {
    it('should return false for non-empty arrays', () =>
      expect(isEmpty([1, 2, 3])).toBeFalsy());

    it('should return true for empty arrays', () =>
      expect(isEmpty([])).toBeTruthy());

    it('should return true for undefined', () => 
      expect(isEmpty(undefined)).toBeTruthy());
  });

  describe('createAndFill', () => {
    it('should create an array filled with the specified value', () => {
      expect(createAndFill(1, 3)).toEqual([1, 1, 1]);
      expect(createAndFill('a', 2)).toEqual(['a', 'a']);
    });

    it('should create an empty array when amount is 0', () =>
      expect(createAndFill(1, 0)).toEqual([]));

    it('should handle null values', () =>
      expect(createAndFill(null, 2)).toEqual([null, null]));
  });
});