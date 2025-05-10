import { Regex } from './../const-values';

// Always have to receive the value DDMMYYYY
export const addDelimiterToTheStringDate = (stringDate: string, delimiter: string): string => {
  if (!Regex.STRING_DATE.test(stringDate)) {
    throw new Error('The string date is not in the format DDMMYYYY');
  }

  return `${stringDate.substring(0, 2)}${delimiter}${stringDate.substring(2, 4)}${delimiter}${stringDate.substring(4)}`;
};
