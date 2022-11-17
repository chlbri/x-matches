import { describe, expect, test } from 'vitest';
import buildMatches from './index';

describe('Acceptance', () => {
  test('The function exists', () => {
    expect(buildMatches).toBeInstanceOf(Function);
  });

  test('The function returns a function', () => {
    const actual = buildMatches('any');
    expect(actual).toBeInstanceOf(Function);
  });
});

describe.todo('Workflow', () => {
  //TODO
});
