import { As } from '../types';
import { css } from '../css';
import emotionStyled from '@emotion/styled';
import { shouldForwardProp } from '../props';
import { SystemStyleObject } from '@styled-system/css';

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
  size?: string;
  sx?: SystemStyleObject;
  theme?: Theme;
}

export function styled<T extends As, P = {}>(tag: T, options?: StyledOptions) {
  const { label, ...other } = options ?? {};

  if (!other.shouldForwardProp) {
    other.shouldForwardProp = shouldForwardProp;
  }

  const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
    label,
    shouldForwardProp,
  });

  const styleResolver = (...args: any[]) => {
    const styleArgs = args.map(interpolation => {
      return (props: StyledProps) => {
        const { size: sizeProp, sx, theme: themeProp, variant: variantProp, ...other } = props;

        const baseStyles =
          typeof interpolation === 'function' ? interpolation({ ...props, theme }) : interpolation;
        const mergedStyles = Object.assign({}, baseStyles);
        const styleProps = omitBy(other, (_, prop) => !isStyleProp(prop));

        const composedStyles: SystemStyleObject = Object.assign({}, baseStyles, styleProps, sx);

        return css(composedStyles)(theme);
      };
    });

    return emotionResolver(styleArgs);
  };

  return styleResolver;
}
