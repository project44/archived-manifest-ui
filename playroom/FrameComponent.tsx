import React from 'react';
import { PlayroomStateProvider } from './playroomState';

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <>
    <PlayroomStateProvider>{children}</PlayroomStateProvider>
  </>
);
