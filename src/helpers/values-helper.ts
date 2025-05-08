const onlyUnique = (value: any, index: number, values: any[]): boolean => values.indexOf(value) === index;

export const getDistinctValues = (values: any[]): any[] => values.filter(onlyUnique);

export const getValuesPreparedForWhereClauseWithIn = (values: number[] | string[]) => {
  let result = '';
  for (let i = 0; i < values.length; i++) {
    result += i == values.length - 1 ? values[i] : `${values[i]}, `;
  }

  return result;
};
