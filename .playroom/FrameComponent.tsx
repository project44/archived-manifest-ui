import React from 'react';
import { globalCss, ManifestProvider, theme } from '../packages/react/src';

interface Props {
  theme: typeof theme;
  children: React.ReactNode;
}

const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')",
  'html, body': {
    margin: 0,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    lineHeight: 1,
  },
});

export default ({ theme, children }: Props) => {
  globalStyles();

  return <ManifestProvider theme={theme}>{children}</ManifestProvider>;
};
