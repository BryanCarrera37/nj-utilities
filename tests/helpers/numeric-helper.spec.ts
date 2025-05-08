import { sumValues, getNumberFromPercentage } from '@/helpers/numeric-helper';

describe('numeric-helper', () => {
  describe('sumValues', () => {
    it('should return the sum of two numbers', () => {
      expect(sumValues(1, 2)).toBe(3);
    });

    it('should return the sum of two negative numbers', () => {
      expect(sumValues(-1, -2)).toBe(-3);
    });

    it('should return the sum of a positive and a negative number', () => {
      expect(sumValues(1, -2)).toBe(-1);
    });

    it('should return the sum of two decimal numbers', () => {
      expect(sumValues(1.5, 2.5)).toBe(4);
    });
  });

  describe('getNumberFromPercentage', () => {
    it('should get 50 from 50%', () => 
      expect(getNumberFromPercentage('50%')).toBe(50));

    it('should get 0 from 0%', () =>
      expect(getNumberFromPercentage('0%')).toBe(0));

    it('should get 100 from 100%', () =>
      expect(getNumberFromPercentage('100%')).toBe(100));
  });
});