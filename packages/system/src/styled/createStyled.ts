import { CreateStyled, StyledProps, SystemStyleObject } from '../types';
import { css } from '../css';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
import emotionStyled from '@emotion/styled';

interface StyledOptions {
  /**
   * The pretty label for the component.
   */
  label?: string;
  /**
   * Function to determine if a prop should be forwarded on to a component.
   */
  shouldForwardProp?(prop: string): boolean;
}

export function createStyled(): CreateStyled<StyledOptions> {
  return (tag: any, options?: StyledOptions) => {
    const { label, shouldForwardProp = defaultShouldForwardProp } = options ?? {};

    const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
      label,
      shouldForwardProp,
    });

    const styleResolver = (...args: any[]) => {
      const styleArgs = args.map(interpolation => {
        return (props: StyledProps) => {
          const { sx, theme, ...other } = props;

          const baseStyles =
            typeof interpolation === 'function'
              ? interpolation({ ...props, theme })
              : interpolation;
          const composedStyles: SystemStyleObject = Object.assign({}, baseStyles, sx);

          return css(composedStyles)(theme);
        };
      });

      return emotionResolver(styleArgs);
    };

    return styleResolver;
  };
}
