import { CSSObject } from '@manifest-ui/styled-system';

export const visuallyHiddenStyles = (): CSSObject => ({
  border: 'none',
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: 1,
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});
