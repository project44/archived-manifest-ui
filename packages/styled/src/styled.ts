import { css, SystemStyleObject } from '@manifest-ui/styled-system';
import { defaultTheme, Theme } from '@manifest-ui/theme';
import emotionStyled, { CSSObject } from '@emotion/styled';
import { As } from './types';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
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

type StyleResolverProps = SystemStyleObject & {
  size?: string;
  sx?: SystemStyleObject;
  theme: Theme;
  variant?: string;
};

export function styled<T extends As>(tag: T, options?: StyledOptions) {
  const { label, shouldForwardProp = defaultShouldForwardProp, themeKey = '' } = options ?? {};

  const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
    label,
    shouldForwardProp,
  });

  const styleResolver = (stylesArg: SystemStyleObject) => {
    const styles = (props: StyleResolverProps) => {
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

      const composedStyles = Object.assign({}, mergedStyles, styleProps, size, variant, sx);
      const computedCSS = css(composedStyles as SystemStyleObject)(theme);

      return computedCSS as CSSObject;
    };

    return emotionResolver(styles);
  };

  return styleResolver;
}
