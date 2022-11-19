import { decompose, StateMatching, StateValue } from '@bemedev/decompose';
import { MatchOptions, reduceFunction, _buildMatches } from './utils';

/**
 * Builds a better State Matcher for XState
 * @param value A stateValue
 * @returns A function to matches with the current StateValue.
 *
 */
export default function buildMatches<T extends StateValue = StateValue>(
  value: T,
) {
  type Value = MatchOptions<StateMatching<T>>;
  const decomposeds = decompose(value);
  const matcher = reduceFunction(_buildMatches, decomposeds);
  return (...values: Value[]) => {
    const out = values.every(matcher);
    return out;
  };
}

export type { MatchOptions, StateValue, StateMatching };
