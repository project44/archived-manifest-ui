import { other } from '../src';

describe('@dolly/styled-system', () => {
  test('returns other styles', () => {
    const style = other({ textTransform: 'uppercase' });

    expect(style).toEqual({ textTransform: 'uppercase' });
  });
});
