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
    const _values = value.or;
    out = _values
      .map(value => _buildMatches(decomposeds, value))
      .some(value => value === true);
  } else {
    const _values = value.and;
    out = _values
      .map(value => _buildMatches(decomposeds, value))
      .every(value => value === true);
  }

  return out;
}

// #region PartialCall
type Arr = readonly any[];

export function reduceFunction<U extends Arr, T extends Arr, R>(
  f: (...args: [...T, ...U]) => R,
  ...headArgs: T
) {
  return (...tailArgs: U) => f(...headArgs, ...tailArgs);
}
// #endregion
