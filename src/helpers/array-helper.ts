export const isNotEmpty = (array: any): boolean => !isEmpty(array);

export const isEmpty = (array: any): boolean => array == undefined || array.length === 0;

export const createAndFill = (fillValue: any, amountOfItems: number): any[] =>
  Array.from({ length: amountOfItems }, () => fillValue);
