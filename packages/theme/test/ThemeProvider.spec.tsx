import * as React from 'react';
import { ThemeProvider, useTheme } from '../src';
import { renderHook } from '../../../test/utils';

describe('@dolly/theme - ThemeProvider', () => {
  it('should return a theme', () => {
    const wrapper = ({ children }) => (
      <ThemeProvider theme={{ direction: 'ltr' }}>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toEqual({ direction: 'ltr' });
  });

  it('should merge a merged theme', () => {
    const wrapper = ({ children }) => (
      <ThemeProvider theme={{ direction: 'ltr' }}>
        <ThemeProvider theme={{ mode: 'dark' }}>{children}</ThemeProvider>
      </ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toEqual({ direction: 'ltr', mode: 'dark' });
  });
});
