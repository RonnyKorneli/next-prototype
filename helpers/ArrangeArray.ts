export function moveElementInArray<T>(
  from: number | undefined,
  to: number,
  arr: T[] | null | undefined
) {
  if (from == undefined || !arr) return undefined;
  const newArr = [...arr];
  const item = newArr.splice(from, 1)[0];
  newArr.splice(to, 0, item);

  return newArr;
}
