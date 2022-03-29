import { defaultStyles, themeStyles } from './styles';
import { DateRangePicker as DateRange } from 'react-date-range';
import { pxToRem } from '@manifest-ui/theme';
import { styled } from '@manifest-ui/styled';

const themeKey = 'dateRangePicker';

export const StyledDateRange = styled(DateRange, {
  slot: 'picker',
  themeKey,
})(defaultStyles, themeStyles, {
  display: 'flex',

  '.rdrDayNumber span': {
    color: 'emphasis.tertiary',
  },

  '.rdrDayDisabled': {
    backgroundColor: 'white',
  },

  '.rdrDayDisabled .rdrDayNumber span, .rdrDayPassive .rdrDayNumber span': {
    color: 'emphasis.disabled',
  },

  '.rdrCalendarWrapper': {
    backgroundColor: 'white',
    color: 'emphasis.tertiary',
  },

  '.rdrDateInput .rdrWarning': {
    color: 'status.warning.500',
  },

  '.rdrMonthAndYearPickers select': {
    color: 'emphasis.primary',
    fontFamily: 'body',
    fontSize: 'small',
    fontWeight: 'medium',
    lineHeight: 'medium',
    letterSpacing: 'normal',
    transitionDuration: 'base',
    transitionProperty: 'common',
  },

  '.rdrMonthAndYearPickers select:hover': {
    backgroundColor: 'neutral.100',
  },

  '.rdrNextPrevButton': {
    background: 'white',
    borderColor: 'neutral.200',
    borderRadius: 'medium',
    borderStyle: 'solid',
    borderWidth: 'small',
    boxSize: 32,
    padding: 2,
  },

  '.rdrNextPrevButton i': {
    margin: 0,
  },

  '.rdrPprevButton i': {
    transform: 'translate(-4px, 0)',
  },

  '.rdrNextButton i': {
    transform: 'translate(4px, 0)',
  },

  '.rdrNextPrevButton:hover': {
    backgroundColor: 'neutral.100',
  },

  '.rdrWeekDay': {
    color: 'emphasis.secondary',
  },

  '.rdrDay': {
    color: 'emphasis.secondary',
  },

  '.rdrDayToday .rdrDayNumber span:after': {
    color: 'emphasis.primary',
  },

  '.rdrDayToday .rdrStartEdge .rdrDayNumber span:after, .rdrDayToday .rdrEndEdge .rdrDayNumber span:after':
    {
      background: 'primary.500',
    },

  '.rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after, .rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after, .rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after, .rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after':
    {
      background: 'primary.500',
    },

  '.rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span':
    {
      color: 'emphasis.primary',
    },

  '.rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span':
    {
      color: 'white',
    },

  '.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge': {
    background: 'neutral.200',
  },

  '.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview': {
    borderColor: 'primary.500',
  },

  '.rdrMonthName': {
    color: 'emphasis.primary',
  },

  '.rdrStartEdge, .rdrEndEdge': {
    background: 'primary.500',
    boxShadow: 'none',
    color: 'white',
  },

  '.rdrStaticRanges': {
    padding: 3,
  },

  '.rdrStaticRange': {
    alignItems: 'center',
    border: 0,
    borderRadius: 'medium',
    display: 'flex',
    outline: 0,
    px: 3,
    py: 2,
    transitionDuration: 'base',
    transitionProperty: 'colors',
  },

  '.rdrStaticRangeLabel': {
    color: 'emphasis.primary',
    fontFamily: 'body',
    fontSize: 'small',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'medium',
    p: 0,
  },

  '.rdrStaticRange:hover, .rdrStaticRange:focus': {
    background: 'neutral.100',
  },

  '.rdrStaticRange:hover .rdrStaticRangeLabel, .rdrStaticRange:focus .rdrStaticRangeLabel': {
    background: 'transparent',
  },

  '.rdrDateDisplayWrapper, .rdrInputRanges': {
    display: 'none',
  },

  '.rdrMonthAndYearWrapper': {
    borderBottomColor: 'neutral.200',
    borderBottomRadius: 'medium',
    borderBottomStyle: 'solid',
    borderBottomWidth: 'small',
    pt: 0,
  },
});

export const StyledPlaceholder = styled('div', {
  slot: 'placeholder',
  themeKey,
})({
  color: 'emphasis.tertiary',
  opacity: 1,
  padding: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  '&[data-disabled]': {
    color: 'emphasis.disabled',
  },
});

export const StyledInput = styled('button', {
  slot: 'trigger',
  themeKey,
})({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  borderColor: 'neutral.200',
  borderRadius: 'medium',
  borderStyle: 'solid',
  borderWidth: 'small',
  boxSizing: 'border-box',
  color: 'emphasis.primary',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'medium',
  lineHeight: 'medium',
  letterSpacing: 'normal',
  margin: 0,
  minH: pxToRem(40),
  outline: 0,
  position: 'relative',
  px: 3,
  textDecoration: 'none',
  transitionDuration: 'base',
  transitionProperty: 'common',
  userSelect: 'none',
  width: '100%',

  '&:hover': {
    borderColor: 'neutral.400',
  },

  '&[data-disabled]': {
    backgroundColor: 'neutral.100',
    color: 'emphasis.disabled',
    pointerEvents: 'none',
  },
});

export const StyledInputIcon = styled('div', {
  slot: 'icon',
  themeKey,
})({
  alignItems: 'center',
  color: 'emphasis.tertiary',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  position: 'absolute',
  right: pxToRem(8),
  top: '50%',
  transform: 'translateY(-50%)',

  '&:hover': {
    color: 'emphasis.secondary',
  },

  '&[data-disabled]': {
    backgroundColor: 'neutral.100',
    pointerEvents: 'none',
  },
});

export const StyledValue = styled('div', {
  slot: 'value',
  themeKey,
})({
  background: 'none',
  color: 'inherit',
});
