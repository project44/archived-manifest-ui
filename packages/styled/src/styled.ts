import { CreateStyled, StyledProps } from './types';
import { css, SystemStyleObject } from '@manifest-ui/styled-system';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
import { defaultTheme } from '@manifest-ui/theme';
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
   * The theme key to determine component overrides.
   */
  themeKey?: string;
}

export function createStyled(): CreateStyled<StyledOptions> {
  return (tag: any, options?: StyledOptions) => {
    const { label, shouldForwardProp = defaultShouldForwardProp, themeKey = '' } = options ?? {};

    const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
      label,
      shouldForwardProp,
    });

    const styleResolver = (stylesArg: any) => {
      const styles = (props: StyledProps) => {
        const { size: sizeProp, sx, theme: themeProp, variant: variantProp, ...other } = props;

        const theme = isEmpty(themeProp) ? defaultTheme : themeProp;

        const componentTheme = theme?.components?.[themeKey];
        const overrides = componentTheme?.overrides;

        const sizes = componentTheme?.sizes;
        const variants = componentTheme?.variants;

        const baseStyles =
          typeof stylesArg === 'function' ? stylesArg({ ...props, theme }) : stylesArg;
        const mergedStyles = Object.assign({}, baseStyles, overrides);
        const styleProps = omitBy(other, (_, prop) => !isStyleProp(prop));

        const size = sizeProp ? sizes?.[sizeProp] : {};
        const variant = variantProp ? variants?.[variantProp] : {};

        const composedStyles: SystemStyleObject = Object.assign(
          {},
          mergedStyles,
          styleProps,
          size,
          variant,
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
