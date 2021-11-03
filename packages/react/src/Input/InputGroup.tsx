import React from 'react';
import { styled, CSS } from '../stitches.config';
import type { ComponentProps } from '../stitches.config';

import { getValidChildren } from '../utils/children';
import { WithId } from '../utils/types';

export type InputGroupProps = ComponentProps<typeof StyledInputGroup>;

const StyledInputGroup = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
});

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    const validChildren = getValidChildren(children);

    const inputCss: CSS = {};
    validChildren.forEach((child: React.ReactElement) => {
      const { id } = child.type as WithId<typeof child.type>;
      if (id === 'InputStartElement') {
        inputCss.paddingInlineStart = '38px';
      }

      if (id === 'InputEndElement') {
        inputCss.paddingInlineEnd = '38px';
      }

      if (id === 'InputStartAddon') {
        inputCss.borderStartStartRadius = 0;
        inputCss.borderEndStartRadius = 0;
      }

      if (id === 'InputEndAddon') {
        inputCss.borderStartEndRadius = 0;
        inputCss.borderEndEndRadius = 0;
      }
    });

    const clones = validChildren.map((child) => {
      const { id } = child.type as WithId<typeof child.type>;
      const { css, ...childProps } = child.props;
      const mergedProps = {
        css: { ...inputCss, ...css },
        ...childProps,
      };

      return id !== 'Input'
        ? React.cloneElement(child)
        : React.cloneElement(child, mergedProps);
    });

    return (
      <StyledInputGroup ref={ref} {...rest}>
        {clones}
      </StyledInputGroup>
    );
  },
);
