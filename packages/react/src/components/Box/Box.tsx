import type * as React from 'react';
import { styled } from '../../styles';

export type BoxProps = React.ComponentProps<typeof Box>;

export const Box = styled('div', { boxSizing: 'border-box', margin: 0, minWidth: 0 });
