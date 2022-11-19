import type { StateMatching, StateValue } from '@bemedev/decompose';
import { describe, expect, test } from 'vitest';
import buildMatches from './index';
import { MatchOptions } from './utils';

describe('Acceptance', () => {
  test.concurrent('The function exists', () => {
    expect(buildMatches).toBeInstanceOf(Function);
  });

  test.concurrent('The function returns a function', () => {
    const actual = buildMatches('any');
    expect(actual).toBeInstanceOf(Function);
  });
});

describe('Workflow', () => {
  // #region Preparation
  function logger<T extends StateValue = StateValue>(
    state: T,
    ...values: MatchOptions<StateMatching<T>>[]
  ) {
    console.log('****************************');
    console.log('State', '=>', state);
    console.log();
    console.log('Values', '=>', values);
    console.log('****************************');
    console.log();
    console.log();
  }

  const useExpect = <T extends StateValue = StateValue>(
    state: T,
    ...values: MatchOptions<StateMatching<T>>[]
  ) => {
    logger(state, ...values);

    const macthes = buildMatches(state);
    const actual = macthes(...values);
    expect(actual).toBe(true);
  };
  // #endregion

  test.concurrent('test - 1 => simple', () => {
    useExpect('step', 'step');
  });

  test.concurrent('test - 2 => compound', () => {
    useExpect({ parent: 'child1' }, 'parent', 'parent.child1');
  });

  describe('Parallel', () => {
    test.concurrent('test - 1', () => {
      useExpect(
        {
          parent: {
            child1: {},
            child2: 'grandchild2',
          },
        },
        'parent.child2.grandchild2',
        'parent',
        { or: ['parent', 'notParent' as any] },
      );
    });

    test.concurrent('test - 2', () => {
      useExpect(
        {
          parent: {
            child1: {},
            child2: 'grandchild3',
          },
        },
        'parent.child1',
        'parent.child2.grandchild3',
        {
          and: ['parent.child1', 'parent.child2.grandchild3'],
        },
      );
    });
  });
});
