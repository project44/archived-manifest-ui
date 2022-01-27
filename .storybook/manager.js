import { addons } from '@storybook/addons';
import theme from './theme.js';

addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
  theme: theme,
});