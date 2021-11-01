import React from 'react';
import { styled } from '../stitches.config';
import type { ComponentProps } from '../stitches.config';

export type IconProps = ComponentProps<typeof Icon>;

export const Icon = styled('svg', {
  display: 'inline-block',
  lineHeight: '1em',
  flexShrink: 0,
  height: '1em',
  width: '1em',
});

Icon.defaultProps = {
  viewBox: '0 0 24 24',
  children: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
};
