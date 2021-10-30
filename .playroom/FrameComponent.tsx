import React from 'react';
import { globalCss, ManifestProvider, theme } from '../packages/react/src';

interface Props {
  theme: typeof theme;
  children: React.ReactNode;
}

const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap')",
  'html, body': {
    margin: 0,
  },
});

export default ({ theme, children }: Props) => {
  globalStyles();

  return <ManifestProvider theme={theme}>{children}</ManifestProvider>;
};
