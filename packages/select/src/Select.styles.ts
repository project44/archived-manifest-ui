import { focusStyles, pxToRem } from '@manifest-ui/theme-utils';
import { shouldForwardProp, styled } from '@manifest-ui/styled';

const themeKey = 'select';

const props = new Set([
  'clearValue',
  'cx',
  'getStyles',
  'getValue',
  'hasValue',
  'isMulti',
  'isRtl',
  'options',
  'selectOption',
  'selectProps',
  'setValue',
  'theme',
]);

export const StyledControl = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'singleValue',
  themeKey,
})(({ theme }) => focusStyles({ borderWidth: 'small', theme }), {
  borderColor: 'neutral.200',
  borderRadius: 'medium',
  borderStyle: 'solid',
  borderWidth: 'small',
  boxSizing: 'border-box',
  color: 'emphasis.primary',
  display: 'flex',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'medium',
  lineHeight: 'medium',
  letterSpacing: 'normal',
  position: 'relative',
  px: pxToRem(11),
  py: pxToRem(7),
  transitionDuration: 'base',
  transitionProperty: 'common',
  width: '100%',

  '&:hover': {
    borderColor: 'neutral.400',
  },

  '&[data-disabled]': {
    backgroundColor: 'neutral.100',
    color: 'emphasis.disabled',
    pointerEvents: 'none',
  },

  '&[data-invalid]': {
    borderColor: 'status.danger.500',
    color: 'status.danger.500',
  },
});

export const StyledIndicatorContainer = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'indicatorContainer',
  themeKey,
})({
  color: 'emphasis.tertiary',
  display: 'inline-flex',
  px: 2,

  '&:hover': {
    color: 'emphasis.secondary',
  },

  '&[data-disabled]': {
    backgroundColor: 'neutral.100',
  },
});

export const StyledIndicatorsContainer = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'indicatorsContainer',
  themeKey,
})({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  mx: -2,
});

export const StyledInput = styled('input', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'input',
  themeKey,
})({
  background: '0px center',
  border: 0,
  color: 'inherit',
  fontFamily: 'inherit',
  margin: 0,
  opacity: 1,
  outline: 0,
  padding: 0,
  width: '100%',
});

export const StyledInputIcon = styled('div', {
  slot: 'icon',
  themeKey,
})({
  alignItems: 'center',
  color: 'emphasis.tertiary',
  display: 'flex',
  justifyContent: 'center',
  pe: 2,
  ps: 2,
  pointerEvents: 'none',
});

export const StyledMenu = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'menu',
  themeKey,
})({
  backgroundColor: 'white',
  borderRadius: 'medium',
  boxShadow: 'medium',
  boxSizing: 'border-box',
  left: 0,
  position: 'absolute',
  right: 0,
  top: `calc(100% + ${pxToRem(8)})`,
  zIndex: 'popover',
});

export const StyledMultiValue = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'multiValue',
  themeKey,
})({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'solid',
  borderColor: 'neutral.200',
  borderRadius: 'full',
  borderWidth: 'small',
  boxSizing: 'border-box',
  color: 'emphasis.primary',
  cursor: 'default',
  display: 'inline-flex',
  fontFamily: 'body',
  fontWeight: 'normal',
  h: pxToRem(24),
  justifyContent: 'center',
  letterSpacing: 'normal',
  mr: 1,
  outline: 0,
  p: 0,
  textDecoration: 'none',
  transitionDuration: 'base',
  transitionProperty: 'common',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
});

export const StyledMultiValueLabel = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'multiValueLabel',
  themeKey,
})({
  color: 'inherit',
  fontFamily: 'body',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  px: 3,
});

export const StyledMultiValueRemove = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'multiValueRemove',
  themeKey,
})({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  mr: pxToRem(6),

  '> .manifestui-select__clear-icon': {
    boxSize: pxToRem(18),
  },
});

export const StyledOption = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'option',
  themeKey,
})({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 'medium',
  boxSizing: 'border-box',
  color: 'emphasis.primary',
  cursor: 'default',
  display: 'flex',
  fontFamily: 'body',
  fontSize: 'medium',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  lineHeight: 'large',
  outline: 0,
  px: 3,
  py: 2,
  transitionDuration: 'base',
  transitionProperty: 'colors',

  '&:hover': {
    backgroundColor: 'neutral.100',
  },

  '&[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.32,
    pointerEvents: 'none',
  },

  '&[data-selected], &[data-focus]': {
    backgroundColor: 'neutral.100',
  },
});

export const StyledPlaceholder = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'placeholder',
  themeKey,
})({
  alignItems: 'center',
  color: 'emphasis.tertiary',
  display: 'flex',
  opacity: 1,
  padding: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const StyledSelect = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  themeKey,
})({
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'bottom',
  width: '100%',

  '&[data-disabled]': {
    pointerEvents: 'none',
  },
});

export const StyledSingleValue = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'singleValue',
  themeKey,
})({
  background: 'none',
  color: 'inherit',
});

export const StyledValueContainer = styled('div', {
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  slot: 'valueContainer',
  themeKey,
})({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  postion: 'relative',
  justifyContent: 'flex-start',
});
