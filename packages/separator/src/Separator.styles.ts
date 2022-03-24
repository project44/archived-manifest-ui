import { styled } from '@manifest-ui/styled';

export const StyledSeparator = styled('hr', {
  themeKey: 'separator',
})({
  alignSelf: 'stretch',
  backgroundColor: 'border',
  border: 'none',
  borderWidth: 'medium',
  margin: 0,
  overflow: 'visible',

  ['&[data-orientation=horizontal]']: {
    height: '1px',
    width: 'auto',
  },

  ['&[data-orientation=vertical]']: {
    height: 'auto',
    width: '1px',
  },
});
