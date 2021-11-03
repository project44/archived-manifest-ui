import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  display: 'block',
  margin: '0',

  // Custom
  fontFamily: '$body',
  color: '$hiContrast',

  variants: {
    variant: {
      headlineLarge: {
        fontSize: '$9',
        fontWeight: '$bold',
        lineHeight: '$base',
        letterSpacing: '$tighter',
      },
      headlineMedium: {
        fontSize: '$8',
        fontWeight: '$bold',
        lineHeight: '$base',
        letterSpacing: '$tighter',
      },
      headlineSmall: {
        fontSize: '$7',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$tight',
      },
      titleLarge: {
        fontSize: '$6',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$wide',
      },
      titleMedium: {
        fontSize: '$4',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$wider',
        textTransform: 'uppercase',
      },
      titleSmall: {
        fontSize: '$3',
        fontWeight: '$bold',
        lineHeight: '$tall',
        letterSpacing: '$wide',
      },
      labelLarge: {
        fontSize: '$5',
        fontWeight: '$medium',
        lineHeight: '28px',
        letterSpacing: '$normal',
      },
      labelMedium: {
        fontSize: '$4',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: '$normal',
      },
      labelSmall: {
        fontSize: '$3',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      bodyLarge: {
        fontSize: '$5',
        fontWeight: '$medium',
        lineHeight: '28px',
        letterSpacing: '$normal',
      },
      bodyMedium: {
        fontSize: '$4',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: '$normal',
      },
      bodySmall: {
        fontSize: '$3',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
    },
  },
});
