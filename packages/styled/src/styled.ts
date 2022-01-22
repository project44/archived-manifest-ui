import { css, SystemStyleObject } from '@manifest-ui/styled-system';
import { defaultTheme, Theme } from '@manifest-ui/theme';
import emotionStyled, { CSSObject } from '@emotion/styled';
import { As } from './types';
import capitalize from 'lodash.capitalize';
import { shouldForwardProp as defaultShouldForwardProp } from './shouldForwardProp';
import isEmpty from 'lodash.isempty';
import { isStyleProp } from './isStyleProp';
import omitBy from 'lodash.omitby';

interface StyledOptions {
  name?: string;
  shouldForwardProp?: (prop: string) => boolean;
  slot?: string;
}

type StyleResolverProps = SystemStyleObject & {
  size?: string;
  sx?: SystemStyleObject;
  theme: Theme;
  variant?: string;
};

export function styled<T extends As>(tag: T, options?: StyledOptions) {
  const {
    name: componentName = '',
    slot: componentSlot = '',
    shouldForwardProp = defaultShouldForwardProp,
  } = options ?? {};

  let label;

  if (process.env.NODE_ENV !== 'production' && componentName) {
    label = `${componentName}-${componentSlot || 'root'}`;
  }

  const emotionResolver = emotionStyled(tag as React.ComponentType<any>, {
    label,
    shouldForwardProp,
  });

  const styleResolver = (...stylesArgs: SystemStyleObject[]) => {
    const styleArgs = stylesArgs.map(interpolation => {
      return (props: StyleResolverProps) => {
        const { sx, theme: themeProp, ...other } = props;

        const theme = isEmpty(themeProp) ? defaultTheme : themeProp;
        const baseStyles =
          typeof interpolation === 'function' ? interpolation({ ...props, theme }) : interpolation;
        const overrides = theme?.components?.[componentName];
        const slots = overrides?.slots;
        const slot = slots?.[componentSlot];

        const mergedStyles = Object.assign({}, baseStyles, slot);

        const styleProps = omitBy(other, (_, prop) => !isStyleProp(prop));
        const composedStyles = Object.assign({}, mergedStyles, styleProps, sx);
        const computedCSS = css(composedStyles as SystemStyleObject)(theme);

        return computedCSS as CSSObject;
      };
    });

    if (componentName) {
      styleArgs.push((props: StyleResolverProps) => {
        const { size: sizeProp, theme: themeProp, variant: variantProp } = props;

        const theme = isEmpty(themeProp) ? defaultTheme : themeProp;
        const sizes = theme?.components?.[componentName]?.sizes;
        const variants = theme?.components?.[componentName]?.variants;

        const size = sizeProp ? sizes?.[sizeProp] : {};
        const variant = variantProp ? variants?.[variantProp] : {};

        const composedStyles = Object.assign({}, size, variant);
        const computedCSS = css(composedStyles as SystemStyleObject)(theme);

        return computedCSS as CSSObject;
      });
    }

    const Component = emotionResolver(styleArgs);

    if (process.env.NODE_ENV !== 'production') {
      let displayName = 'Styled';

      if (componentName) {
        displayName = `${componentName}${capitalize(componentSlot) || ''}`;
      }

      Component.displayName = displayName;
    }

    return Component;
  };

  return styleResolver;
}
