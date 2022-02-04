import * as React from 'react';
import { ThemeProvider, useTheme } from '../src';
import { renderHook } from '../../../test/utils';

describe('@manifest-ui/theme - ThemeProvider', () => {
  it('should return the default theme', () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.colors).toEqual(
      expect.objectContaining({ black: '#000000', white: '#FFFFFF' }),
    );
  });

  it('should merge a theme input with the default theme', () => {
    const wrapper = ({ children }) => (
      <ThemeProvider
        theme={{
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
        }}
      >
        {children}
      </ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.colors).toEqual(
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
          'gradient-0': `linear-gradient(90deg, #0072EC 0%, #4E00C6 163.65%, #8C18E2 191.59%)`,
          'gradient-20': `linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
          'gradient-40': `linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
          'gradient-60': `linear-gradient(0deg, rgba(10, 21, 33, 0.6), rgba(10, 21, 33, 0.6)), linear-gradient(90deg, #0072EC 0%, #8C18E2 191.59%)`,
        },
        white: '#FFFFFF',
      }),
    );
  });
});
