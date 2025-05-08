import { addDelimiterToTheStringDate } from '@/helpers/string-helper';

describe('string-helper', () => {
  describe('addDelimiterToTheStringDate', () => {
    it('should add the delimiter to a valid DDMMYYYY string', () => {
      const stringDate = '01012023';
      const delimiter = '/';
      const result = addDelimiterToTheStringDate(stringDate, delimiter);
      expect(result).toBe('01/01/2023');
    });
  
    it('should throw an error if the string date is not in the format DDMMYYYY', () => {
      const stringDate = '20230101';
      const delimiter = '-';
      expect(() => addDelimiterToTheStringDate(stringDate, delimiter)).toThrow(
        'The string date is not in the format DDMMYYYY'
      );
    });
  
    it('should handle different delimiters correctly', () => {
      const stringDate = '15082022';
      const delimiter = '-';
      const result = addDelimiterToTheStringDate(stringDate, delimiter);
      expect(result).toBe('15-08-2022');
    });
  
    it('should throw an error for an empty string', () => {
      const stringDate = '';
      const delimiter = '/';
      expect(() => addDelimiterToTheStringDate(stringDate, delimiter)).toThrow(
        'The string date is not in the format DDMMYYYY'
      );
    });
  });
});