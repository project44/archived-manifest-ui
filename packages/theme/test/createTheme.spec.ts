import { createTheme } from '../src';

describe('@dolly/theme - createTheme', () => {
  it('should have colors', () => {
    const theme = createTheme({});

    expect(typeof createTheme).toEqual('function');
    expect(typeof theme.colors).toEqual('object');
  });

  it('should have the custom colors', () => {
    const theme = createTheme({
      colors: { primary: 'black' },
    });

    expect(theme.colors.primary).toEqual('black');
  });

  it('should support partial overrides', () => {
    const theme = createTheme({ colors: { primary: 'black' } });

    expect(theme.colors.primary).toEqual('black');
    expect(theme.colors.active).toEqual('#005CBE');
  });
});
