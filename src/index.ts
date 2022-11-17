import { decompose, StateMatching, StateValue } from '@bemedev/decompose';

export type MatchOptions<T extends string = string> =
  | {
      or: MatchOptions<T>[];
    }
  | { and: MatchOptions<T>[] }
  | T;

function _buildMatches(
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

/**
 * Builds a better State Matcher for XState
 * @param value A stateValue
 * @returns A function to matches with the current StateValue.
 *
 * The default behavior is to check if state is in many states at a time, so in the resulting function, the param array "values" will have a logical "or" and not a logical "and"
 */
export default function buildMatches<T extends StateValue = StateValue>(
  value: T,
) {
  const decomposeds = decompose(value);
  return (...values: MatchOptions<StateMatching<T>>[]) => {
    const matchers = values.map(value =>
      _buildMatches(decomposeds, value),
    );
    return matchers.every(matcher => matcher === true);
  };
}
