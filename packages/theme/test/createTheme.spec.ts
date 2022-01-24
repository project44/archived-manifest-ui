import { createTheme } from '../src';

describe('@dolly/theme - createTheme', () => {
  it('should return a the default theme', () => {
    const theme = createTheme({});

    expect(typeof createTheme).toEqual('function');
    expect(typeof theme).toEqual('object');
  });

  it('should support overrides', () => {
    const theme = createTheme({
      sizes: { small: '50px' },
    });

    expect(theme.sizes.small).toEqual('50px');
  });

  it('should support partial overrides', () => {
    const theme = createTheme({
      sizes: { small: '50px' },
    });

    expect(theme.sizes.small).toEqual('50px');
    expect(theme.borderWidths.small).toEqual(2);
  });
});
