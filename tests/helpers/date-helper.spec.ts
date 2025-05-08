import { getCurrentDateFormatted, getDateFormatted, getDateFromString, getDateReduced, getTheDiffIn, DEFAULT_DATE_FORMAT } from '@/helpers/date-helper';
import moment from 'moment';

describe('date-helper', () => {

  describe('DEFAULT_DATE_FORMAT', () => 
    expect(DEFAULT_DATE_FORMAT).toBe('YYYY-MM-DD HH:mm:ss'));

  describe('getCurrentDateFormatted', () => {
    it('should return the current date formatted with default format', () =>
      expect(getCurrentDateFormatted()).toBe(moment().format(DEFAULT_DATE_FORMAT)));

    it('should return the current date formatted with custom format', () => {
      const date = new Date();
      expect(getCurrentDateFormatted('YYYY-MM-DD')).toBe(moment(date).format('YYYY-MM-DD'));
    });
  });

  describe('getDateFormatted', () => {
    it('should return the date formatted with custom format', () => {
      const date = new Date();
      expect(getDateFormatted(date, 'YYYY-MM-DD')).toBe(moment(date).format('YYYY-MM-DD'));
    });

    it('should return the date formatted with default format', () => {
      const date = new Date();
      expect(getDateFormatted(date)).toBe(moment(date).format(DEFAULT_DATE_FORMAT));
    });
  });

  describe('getDateFromString', () => {
    it('should return a Date object from a date string', () => {
      const dateString = '2023-10-01T00:00:00Z';
      const date = new Date(dateString);
      expect(getDateFromString(dateString)).toEqual(date);
    });

    it('should return an invalid Date object for an invalid date string', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const result = getDateFromString('invalid-date-string');

      expect(typeof result).toBe('object');
      expect(result.toString()).toBe('Invalid Date');
    });
  });

  describe('getDateReduced', () => {
    it('should return a Date object reduced by the specified number of days', () => {
      const daysToReduce = 5;
      const date = new Date();
      const reducedDate = new Date(date);
      reducedDate.setDate(date.getDate() - daysToReduce);
      expect(getDateReduced(daysToReduce)).toEqual(reducedDate);
    });

    it('should return the current date if daysToReduce is 0', () => {
      const date = new Date();
      expect(getDateReduced(0)).toEqual(date);
    });
  });

  describe('getTheDiffIn', () => {
    it('should return the difference in days between two dates', () => {
      const startDate = new Date('2023-10-01T00:00:00Z');
      const endDate = new Date('2023-10-05T00:00:00Z');
      expect(getTheDiffIn(startDate, endDate, 'days')).toBe(4);
    });

    it('should return the difference in months between two dates', () => {
      const startDate = new Date('2023-01-01T00:00:00Z');
      const endDate = new Date('2023-10-01T00:00:00Z');
      expect(getTheDiffIn(startDate, endDate, 'months')).toBe(9);
    });
  });
});