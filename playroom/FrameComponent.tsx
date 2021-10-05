import React from 'react';
import { ChakraTheme } from '@chakra-ui/react';
import { ManifestProvider } from './components';
import { PlayroomStateProvider } from './playroomState';

interface Props {
  theme: ChakraTheme;
  children: React.ReactNode;
}

export default ({ theme, children }: Props) => (
  <>
    <ManifestProvider theme={theme}>
      <PlayroomStateProvider>{children}</PlayroomStateProvider>
    </ManifestProvider>
  </>
);
