import { As, CSSObject, SystemStyleObject, Theme } from '../types';
import { css } from '../css';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
import emotionStyled from '@emotion/styled';
import { isStyledProp } from './isStyledProp';
import omitBy from 'lodash.omitby';

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

export interface StyledProps {
  as?: React.ElementType;
  sx?: SystemStyleObject;
  theme?: Theme;
}

export function createStyled<T extends As>() {
  return <T extends As>(tag: T, options?: StyledOptions) => {
    const { label, shouldForwardProp = defaultShouldForwardProp } = options ?? {};

    const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
      label,
      shouldForwardProp,
    });

    const styleResolver = (...args: any[]) => {
      const styleArgs = args.map(interpolation => {
        return (props: StyledProps) => {
          const { sx, theme, ...other } = props;

          const baseStyles: CSSObject =
            typeof interpolation === 'function' ? interpolation(props) : interpolation;
          const styleProps = omitBy(other, (_, prop) => !isStyledProp(prop));

          const composedStyles: SystemStyleObject = Object.assign({}, baseStyles, styleProps, sx);

          return css(composedStyles)(theme);
        };
      });

      return emotionResolver(styleArgs);
    };

    return styleResolver;
  };
}
