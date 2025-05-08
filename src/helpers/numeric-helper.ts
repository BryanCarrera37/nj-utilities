export const sumValues = (...values: number[]): number => values.reduce((acc, value) => acc + value, 0);

export const getNumberFromPercentage = (value: string): number => Number(value.replace('%', ''));
