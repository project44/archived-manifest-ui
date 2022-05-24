import * as React from 'react';
import { Provider, styled } from '@manifest-ui/react';

const Wrapper = styled('div', {
  alignItems: 'center',
  backgroundColor: '$backgroundPrimary',
  color: '$textPrimary',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: 'calc(100vh - 64px)',
  justifyContent: 'center',
  width: '100vw',
});

export const decorators = [
  Story => (
    <Provider>
      <Wrapper>
        <Story />
      </Wrapper>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
