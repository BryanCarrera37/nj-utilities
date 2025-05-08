import { getDistinctValues, getValuesPreparedForWhereClauseWithIn } from '@/helpers/values-helper';

describe('values-helper', () => {
  describe('getDistinctValues', () => {
    it('should return distinct values from an array of numbers', () => {
      const values = [1, 2, 2, 3, 4, 4, 5];
      const result = getDistinctValues(values);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return distinct values from an array of strings', () => {
      const values = ['a', 'b', 'b', 'c', 'a'];
      const result = getDistinctValues(values);
      expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should return an empty array when input is empty', () => {
      const values: any[] = [];
      const result = getDistinctValues(values);
      expect(result).toEqual([]);
    });
  });

  describe('getValuesPreparedForWhereClauseWithIn', () => {
    it('should return a comma-separated string for an array of numbers', () => {
      const values = [1, 2, 3, 4];
      const result = getValuesPreparedForWhereClauseWithIn(values);
      expect(result).toBe('1, 2, 3, 4');
    });

    it('should return a comma-separated string for an array of strings', () => {
      const values = ['a', 'b', 'c'].map(v => `'${v}'`);
      const result = getValuesPreparedForWhereClauseWithIn(values);
      expect(result).toBe("'a', 'b', 'c'");
    });

    it('should return an empty string for an empty array', () => {
      const values: any[] = [];
      const result = getValuesPreparedForWhereClauseWithIn(values);
      expect(result).toBe('');
    });
  });
});