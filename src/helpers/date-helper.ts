import moment from 'moment';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const getCurrentDateFormatted = (format?: string): string => moment().format(format || DEFAULT_DATE_FORMAT);

export const getDateFormatted = (date: Date, format?: string): string =>
  moment(date).format(format || DEFAULT_DATE_FORMAT);

export const getDateFromString = (dateString: string): Date => moment(dateString).toDate();

export const getDateReduced = (daysToReduce: number): Date => moment().subtract(daysToReduce, 'days').toDate();

export const getTheDiffIn = (startDate: Date, endDate: Date, diffIn: moment.unitOfTime.Diff): number =>
  moment(endDate).diff(moment(startDate), diffIn);
