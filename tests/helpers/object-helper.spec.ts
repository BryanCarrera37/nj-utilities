import { getObjectFromArrayNumber, getObjectWithoutNullValues } from '@/helpers/object-helper';

describe('object-helper', () => {
  describe('getObjectWithoutNullValues', () => {
    it('should remove keys with null or undefined values', () => {
      const input = { a: null, b: undefined, c: 1, d: 'value' };
      const result = getObjectWithoutNullValues(input);
      expect(result).toEqual({ c: 1, d: 'value' });
    });
  
    it('should remove keys with empty arrays', () => {
      const input = { a: [], b: [1, 2], c: 'test' };
      const result = getObjectWithoutNullValues(input);
      expect(result).toEqual({ b: [1, 2], c: 'test' });
    });
  
    it('should include keys specified in includeEver even if they have null or empty values', () => {
      const input = { a: null, b: [], c: 'value' };
      const result = getObjectWithoutNullValues(input, 'a', 'b');
      expect(result).toEqual({ a: null, b: [], c: 'value' });
    });
  
    it('should return an empty object if all keys are null or empty and not in includeEver', () => {
      const input = { a: null, b: undefined, c: [] };
      const result = getObjectWithoutNullValues(input);
      expect(result).toEqual({});
    });
  
    it('should handle an empty input object', () => {
      const input = {};
      const result = getObjectWithoutNullValues(input);
      expect(result).toEqual({});
    });
  
    it('should handle objects with no null or empty values', () => {
      const input = { a: 1, b: 'value', c: [1, 2] };
      const result = getObjectWithoutNullValues(input);
      expect(result).toEqual({ a: 1, b: 'value', c: [1, 2] });
    });
  });

  describe('getObjectFromArrayNumber', () => {
    it('should create an object with keys based on the commonFieldName and values from the array', () => {
      const values = [10, 20, 30];
      const commonFieldName = 'field';
      const result = getObjectFromArrayNumber(values, commonFieldName);
      expect(result).toEqual({
        field1: 10,
        field2: 20,
        field3: 30,
      });
    });

    it('should handle an empty array and return an empty object', () => {
      const values: number[] = [];
      const commonFieldName = 'field';
      const result = getObjectFromArrayNumber(values, commonFieldName);
      expect(result).toEqual({});
    });

    it('should handle a single value in the array', () => {
      const values = [42];
      const commonFieldName = 'item';
      const result = getObjectFromArrayNumber(values, commonFieldName);
      expect(result).toEqual({
        item1: 42,
      });
    });

    it('should handle a commonFieldName with special characters', () => {
      const values = [5, 15];
      const commonFieldName = 'key_';
      const result = getObjectFromArrayNumber(values, commonFieldName);
      expect(result).toEqual({
        key_1: 5,
        key_2: 15,
      });
    });
  });
});
