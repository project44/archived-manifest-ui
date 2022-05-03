import { allSystemProps, shouldForwardProp } from '../src';

describe('@manifest-ui/system - shouldForwardProps', () => {
  const randomPropNames = ['children', 'to', 'passHref', 'maxItems', 'strict'];

  it.each(randomPropNames)('should forward %s prop', propName => {
    expect(shouldForwardProp(propName)).toBe(true);
  });

  it.each(allSystemProps)('should not forward %s prop', propName => {
    expect(shouldForwardProp(propName)).toBe(false);
  });
});
