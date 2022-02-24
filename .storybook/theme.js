import { create } from '@storybook/theming';
import { defaultTheme } from '@manifest-ui/themes';

const blue = defaultTheme.colors.primary[500];
const white = defaultTheme.colors.white;
const text = defaultTheme.colors.emphasis.primary;

export default create({
  base: 'light',

  colorPrimary: blue,
  colorSecondary: blue,

  // UI
  appBg: white,
  appContentBg: white,
  appBorderColor: defaultTheme.colors.neutral[100],
  appBorderRadius: defaultTheme.radii.medium,

  // Typography
  fontBase: defaultTheme.fonts.body,
  fontCode: defaultTheme.fonts.mono,

  // Text colors
  textColor: text,
  textInverseColor: white,

  // Toolbar default and active colors
  barTextColor: text,
  barSelectedColor: blue,

  // Form colors
  inputBorder: white,
  inputTextColor: text,
  inputBorderRadius: defaultTheme.radii.medium,

  //branding
  brandTitle: 'Manifest UI',
  brandUrl: 'https://p44design.systems',
  brandImage: 'manifest.png',
});
