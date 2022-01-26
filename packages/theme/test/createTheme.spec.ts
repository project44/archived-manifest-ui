import { createTheme } from '../src';

describe('@manifest-ui/theme - createTheme', () => {
  it('should return a the default theme', () => {
    const theme = createTheme({});

    expect(typeof createTheme).toEqual('function');
    expect(typeof theme).toEqual('object');
  });

  it('should support overrides', () => {
    const theme = createTheme({
      colors: { text: 'black' },
    });

    expect(theme.colors.text).toEqual('black');
  });
});
