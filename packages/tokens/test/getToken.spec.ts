import { getToken } from '../src';

describe('@manifest-ui/tokens - getToken', () => {
  it('should return a token', () => {
    const token = getToken('color-background-primary');

    expect(token).toBe('#FFFFFF');
  });

  it('should warn if token not found', () => {
    jest.spyOn(console, 'warn').mockImplementation();

    // @ts-expect-error: testing a fallback
    const token = getToken('not-a-token');

    expect(token).toBe('');

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('[Manifest UI] unknown design token at path: not-a-token'),
    );
  });
});
