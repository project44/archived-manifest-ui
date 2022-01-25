import { shouldForwardProp, systemProps } from '../src';

describe('@@manifest-ui/styled - shouldForwardProps', () => {
  const randomPropNames = ['children', 'to', 'passHref', 'maxItems', 'strict'];

  it.each(randomPropNames)('should forward %s prop', propName => {
    expect(shouldForwardProp(propName)).toBe(true);
  });

  it.each(systemProps)('should not forward %s prop', propName => {
    expect(shouldForwardProp(propName)).toBe(false);
  });
});
