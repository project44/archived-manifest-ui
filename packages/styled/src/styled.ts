import { CreateStyled, StyledProps } from './types';
import { css, SystemStyleObject } from '@manifest-ui/styled-system';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
import emotionStyled from '@emotion/styled';
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

    const styleResolver = (stylesArg: any) => {
      const styles = (props: StyledProps) => {
        const { size: sizeProp, sx, theme, variant: variantProp, ...other } = props;

        const componentTheme = theme?.components?.[themeKey];
        const slots = componentTheme?.slots;
        const slot = slots?.[slotOption];

        const sizes = componentTheme?.sizes;
        const variants = componentTheme?.variants;

        const baseStyles =
          typeof stylesArg === 'function' ? stylesArg({ ...props, theme }) : stylesArg;
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
        const computedCSS = css(composedStyles)(theme);

        return computedCSS;
      };

      return emotionResolver(styles);
    };

    return styleResolver;
  };
}

export const styled = createStyled();
