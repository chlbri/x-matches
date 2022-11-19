export type MatchOptions<T extends string = string> =
  | {
      or: MatchOptions<T>[];
    }
  | { and: MatchOptions<T>[] }
  | T;

export function _buildMatches(
  decomposeds: readonly string[],
  value: MatchOptions,
): boolean {
  let out = false;
  if (typeof value === 'string') {
    out = decomposeds.includes(value);
  } else if ('or' in value) {
    const values = value.or;
    out = values
      .map(value => _buildMatches(decomposeds, value))
      .some(value => value === true);
  } else {
    const values = value.and;
    out = values
      .map(value => _buildMatches(decomposeds, value))
      .every(value => value === true);
  }

  return out;
}

type Arr = readonly any[];
export function reduceFunction<U extends Arr, T extends Arr, R>(
  fn: (...args: [...T, ...U]) => R,
  ...headArgs: T
) {
  return (...tailArgs: U) => fn(...headArgs, ...tailArgs);
}
