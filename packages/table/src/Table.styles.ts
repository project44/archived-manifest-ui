import { focusStyles, transparentize } from '@manifest-ui/theme-utils';
import { styled } from '@manifest-ui/styled';
import { UnfoldMore } from '@manifest-ui/icons';

const themeKey = 'table';

const alignmentStyles = {
  '&[data-align=left]': {
    textAlign: 'left',
  },

  '&[data-align=center]': {
    textAlign: 'center',
  },

  '&[data-align=right]': {
    textAlign: 'right',
  },

  '&[data-align=justify]': {
    textAlign: 'justify',
  },
};

const cellStyles = {
  borderBottomColor: 'border',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  display: 'table-cell',
  m: 0,
  maxWidth: 300,
  minW: 56,
  overflow: 'hidden',
  px: 5,
  py: 4,
  textAlign: 'left',
  textOverflow: 'ellipsis',
  verticalAlign: 'inherit',
  whiteSpace: 'nowrap',
};

export const StyledTable = styled('table', { themeKey })({
  borderCollapse: 'collapse',
  borderSpacing: 0,
  display: 'table',
  width: '100%',
});

export const StyledTableBody = styled('tbody', {
  slot: 'body',
  themeKey,
})({ display: 'table-row-group' });

export const StyledTableCell = styled('td', {
  slot: 'cell',
  themeKey,
})(cellStyles, alignmentStyles, {
  color: 'emphasis.primary',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  lineHeight: 'large',
});

export const StyledTableColumn = styled('th', {
  slot: 'column',
  themeKey,
})(cellStyles, alignmentStyles, ({ theme }) => ({
  backgroundColor: 'neutral.100',
  color: 'emphasis.secondary',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'semibold',
  letterSpacing: 'normal',
  lineHeight: 'large',

  '&[data-sortable]': {
    px: '0.8125rem',
    py: 2,
  },

  '&[data-active]': {
    backgroundColor: transparentize('neutral.500', 0.16, theme),

    '& .manifestui-table-sort__icon[data-sort-direction=asc]': {
      '& .expandLess': {
        fill: 'primary.500',
      },
    },

    '& .manifestui-table-sort__icon[data-sort-direction=desc]': {
      '& .expandMore': {
        fill: 'primary.500',
      },
    },
  },

  '&[data-hover]:not(&[data-active])': {
    backgroundColor: transparentize('neutral.500', 0.12, theme),
  },
}));

export const StyledTableContainer = styled('div', {
  slot: 'container',
  themeKey,
})({
  backgroundColor: 'white',
  borderColor: 'border',
  borderRadius: 'medium',
  borderStyle: 'solid',
  borderWidth: 'small',
  boxShadow: 'small',
  overflowX: 'auto',
  width: '100%',
});

export const StyledTableHeader = styled('thead', {
  slot: 'header',
  themeKey,
})({ display: 'table-header-group' });

export const StyledTablePagination = styled('div', {
  slot: 'pagination',
  themeKey,
})({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  h: 56,
  p: 3,
});

export const StyledTableRow = styled('tr', {
  slot: 'row',
  themeKey,
})(({ theme }) => ({
  borderColor: 'inherit',
  display: 'table-row',
  outline: 0,
  transitionDuration: 'base',
  transitionProperty: 'colors',
  verticalAlign: 'middle',

  '&[data-hovered]': {
    '> .manifestui-table-cell': {
      backgroundColor: transparentize('neutral.500', 0.12, theme),
    },
  },
}));

export const StyledTableSortButton = styled('button', {
  slot: 'sort',
  themeKey,
})(
  alignmentStyles,
  {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: 'medium',
    boxSizing: 'border-box',
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'body',
    fontSize: 'small',
    fontWeight: 'semibold',
    justifyContent: 'space-between',
    letterSpacing: 'normal',
    lineHeight: 'large',
    m: 0,
    minH: '100%',
    outline: 0,
    px: '0.4375rem',
    py: 2,
    position: 'relative',
    transitionDuration: 'base',
    transitionProperty: 'common',
    verticalAlign: 'initial',
    w: '100%',

    '&[data-align=left]': {
      textAlign: 'left',
    },

    '&[data-align=center]': {
      textAlign: 'center',
    },

    '&[data-align=right]': {
      flexDirection: 'row-reverse',
      textAlign: 'right',
    },

    '&[data-align=justify]': {
      textAlign: 'justify',
    },
  },
  focusStyles,
);

export const StyledTableSortIcon = styled(UnfoldMore)({
  fill: 'emphasis.tertiary',

  '& path': {
    transitionDuration: 'base',
    transitionProperty: 'colors',
  },
});
