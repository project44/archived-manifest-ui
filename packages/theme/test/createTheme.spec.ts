import { createTheme } from '../src';

describe('@@manifest-ui/theme - createTheme', () => {
  it('should return the default theme if no theme input is provided', () => {
    const theme = createTheme();

    expect(typeof theme.colors).toEqual('object');
  });

  it('should merge theme values', () => {
    const theme = createTheme({
      colors: {
        primary: {
          50: '#e0f7f8',
          100: '#b1eced',
          200: '#7fdfe2',
          300: '#4ad1d7',
          400: '#1cc7d0',
          500: '#00bdcb',
          600: '#00adb8',
          700: '#00989f',
          800: '#008488',
          900: '#00605e',
        },
      },
    });

    expect(theme.colors).toEqual(
      expect.objectContaining({
        black: '#000000',
        primary: {
          50: '#e0f7f8',
          100: '#b1eced',
          200: '#7fdfe2',
          300: '#4ad1d7',
          400: '#1cc7d0',
          500: '#00bdcb',
          600: '#00adb8',
          700: '#00989f',
          800: '#008488',
          900: '#00605e',
        },
        white: '#FFFFFF',
      }),
    );
  });

  it('should throw error if overriding secondary color', () => {
    jest.spyOn(console, 'error').mockImplementation();

    createTheme({
      colors: {
        secondary: {
          50: '#e0f7f8',
          100: '#b1eced',
          200: '#7fdfe2',
          300: '#4ad1d7',
          400: '#1cc7d0',
          500: '#00bdcb',
          600: '#00adb8',
          700: '#00989f',
          800: '#008488',
          900: '#00605e',
        },
      },
    });

    // assert the expected warning
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining(
        'Manifest UI: overriding the secondary color is currently not supported.',
      ),
    );
  });
});
