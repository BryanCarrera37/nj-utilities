const hasToIncludeInCaseNull = (key: string, includeEver: string[]): boolean =>
  includeEver != undefined && includeEver.length > 0 && includeEver.includes(key);

export const getObjectFromArrayNumber = (values: number[], commonFieldName: string): Object => {
  const outcome: any = {};
  for (let i = 0; i < values.length; i++) {
    outcome[String.prototype.concat(commonFieldName, (i + 1).toString())] = values[i];
  }

  return outcome;
};

export const getObjectWithoutNullValues = (
  object: Record<string, any>,
  ...includeEver: string[]
): Record<string, any> => {
  const outcome: any = {};
  for (const key of Object.keys(object)) {
    if (
      (!object[key] || (Array.isArray(object[key]) && object[key].length <= 0)) &&
      !hasToIncludeInCaseNull(key, includeEver)
    ) {
      continue;
    }

    outcome[key] = object[key];
  }
  return outcome;
};
