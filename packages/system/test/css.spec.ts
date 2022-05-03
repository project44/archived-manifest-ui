import { css } from '../src';

const theme = {
  colors: {
    primary: 'black',
    secondary: 'pink',
  },
  space: ['0px', '4px', '8px', '16px', '32px'],
};

describe('@manifest-ui/system - css', () => {
  it('should return an empty object if no options are passed', () => {
    const result = css()();

    expect(typeof result).toBe('object');
  });

  it('should return styles', () => {
    const result = css({ color: 'blue' })();

    expect(result).toEqual({ color: 'blue' });
  });

  it('should returns styles based on the theme', () => {
    const result = css({ color: 'primary' })(theme);

    expect(result).toEqual({ color: 'black' });
  });

  it('should support nested responsive styles', () => {
    const result = css({
      color: 'primary',
      h1: {
        py: [3, 4],
      },
    })(theme);

    expect(result).toEqual({
      color: 'black',
      h1: {
        '@media screen and (min-width: 40em)': {
          paddingBottom: '32px',
          paddingTop: '32px',
        },
        paddingBottom: '16px',
        paddingTop: '16px',
      },
    });
  });

  it('should support functional arguments', () => {
    const result = css((t: any) => ({
      color: t.colors.primary,
    }))(theme);

    expect(result).toEqual({
      color: 'black',
    });
  });

  it('supports functional values', () => {
    const result = css({
      color: (t: any) => t.colors.primary,
    })(theme);

    expect(result).toEqual({
      color: 'black',
    });
  });

  it('should handle margins', () => {
    const result = css({ mt: '16px' })(theme);

    expect(result).toEqual({ marginTop: '16px' });

    // Negative margin string from the theme scale
    const result2 = css({
      mt: 1,
    })({
      space: ['0px', '-4px', '8px', '16px', '32px'],
    });

    expect(result2).toEqual({ marginTop: '-4px' });

    // Negative margin number from the theme scale
    const result3 = css({
      mt: 1,
    })({
      space: ['0px', -4, '8px', '16px', '32px'],
    });

    expect(result3).toEqual({ marginTop: -4 });

    // Double negative margins from the theme scale and property
    const result4 = css({
      mt: -1,
    })({
      space: ['0px', -4, '8px', '16px', '32px'],
    });

    expect(result4).toEqual({ marginTop: 4 });

    // Negative margin number from the property
    const result5 = css({ mt: -3 })(theme);

    expect(result5).toEqual({ marginTop: '-16px' });
  });

  it('should handle positions', () => {
    const result = css({ top: '-4px' })();

    expect(result).toEqual({ top: '-4px' });

    // Negative position string from the property
    const result1 = css({ top: '-1' })({
      space: ['0px', '4px', '8px', '16px', '32px'],
    });

    expect(result1).toEqual({ top: '-4px' });

    // Negative position from the property
    const result2 = css({ top: -1 })({
      space: ['0px', '4px', '8px', '16px', '32px'],
    });

    expect(result2).toEqual({ top: '-4px' });

    // Negative position scale number
    const result3 = css({ top: 1 })({
      space: ['0px', -4, '8px', '16px', '32px'],
    });

    expect(result3).toEqual({ top: -4 });

    // Negative position scale number with string property
    const result4 = css({ top: '-1' })({
      space: ['0px', -4, '8px', '16px', '32px'],
    });

    expect(result4).toEqual({ top: 4 });
  });
});
