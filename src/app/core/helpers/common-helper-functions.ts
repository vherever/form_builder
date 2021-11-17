export function getArrayItemByKeyValue(array: any[], key: string, value: string): any {
  return array.find((o) => o[key] === value);
}
