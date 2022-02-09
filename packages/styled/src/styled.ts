import { CreateStyled, StyledProps } from './types';
import { css, SystemStyleObject, Theme } from '@manifest-ui/styled-system';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
import { defaultTheme } from '@manifest-ui/themes';
import emotionStyled from '@emotion/styled';
import isEmpty from 'lodash.isempty';
import { isStyleProp } from './isStyleProp';
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
  /**
   * Name of the component slot. Useful for overriding nested elements within a component from the theme.
   */
  slot?: string;
  /**
   * The theme key to determine component overrides.
   */
  themeKey?: string;
}

export function createStyled(): CreateStyled<StyledOptions> {
  return (tag: any, options?: StyledOptions) => {
    const {
      label,
      shouldForwardProp = defaultShouldForwardProp,
      slot: slotOption = 'root',
      themeKey = '',
    } = options ?? {};

    const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
      label,
      shouldForwardProp,
    });

    const styleResolver = (...args: any[]) => {
      const styleArgs = args.map(interpolation => {
        return (props: StyledProps) => {
          const { size: sizeProp, sx, theme: themeProp, variant: variantProp, ...other } = props;

          const theme: Theme | undefined = isEmpty(themeProp) ? defaultTheme : themeProp;
          const componentTheme = theme?.components?.[themeKey];
          const slots = componentTheme?.slots;
          const slot = slots?.[slotOption] ?? {};

          const sizes = componentTheme?.sizes;
          const variants = componentTheme?.variants;

          const baseStyles =
            typeof interpolation === 'function'
              ? interpolation({ ...props, theme })
              : interpolation;
          const mergedStyles = Object.assign({}, baseStyles, slot);
          const styleProps = omitBy(other, (_, prop) => !isStyleProp(prop));

          const size = sizeProp ? sizes?.[sizeProp] : {};
          const variant = variantProp ? variants?.[variantProp] : {};

          const composedStyles: SystemStyleObject = Object.assign(
            {},
            mergedStyles,
            size,
            variant,
            styleProps,
            sx,
          );

          return css(composedStyles)(theme);
        };
      });

      return emotionResolver(styleArgs);
    };

    return styleResolver;
  };
}

export const styled = createStyled();
