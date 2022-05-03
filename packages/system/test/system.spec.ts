import { system } from '../src';

describe('@manifest-ui/system - system', () => {
  it('should return a parser', () => {
    const parser = system({
      backgroundColor: {
        property: 'backgroundColor',
        scale: 'colors',
      },
      color: true,
      mx: {
        properties: ['marginLeft', 'marginRight'],
        scale: 'space',
      },
    });

    expect(typeof parser).toBe('function');

    const styles = parser({
      backgroundColor: 'primary',
      color: 'pink',
      mx: [2, 3, 4],
      theme: {
        colors: {
          primary: 'black',
        },
        space: [0, 4, 8, 16, 32],
      },
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 40em)': {
        marginLeft: 16,
        marginRight: 16,
      },
      '@media screen and (min-width: 52em)': {
        marginLeft: 32,
        marginRight: 32,
      },
      backgroundColor: 'black',
      color: 'pink',
      marginLeft: 8,
      marginRight: 8,
    });
  });

  test('should merge multiple responsive styles', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      margin: [0, 4, 8],
      padding: [16, 32, 64],
      width: ['100%', '50%'],
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 40em)': {
        margin: 4,
        padding: 32,
        width: '50%',
      },
      '@media screen and (min-width: 52em)': {
        margin: 8,
        padding: 64,
      },
      margin: 0,
      padding: 16,
      width: '100%',
    });
  });

  it('should merge multiple responsive object styles', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      margin: { _: 0, 0: 4, 1: 8 },
      padding: { _: 16, 0: 32, 1: 64 },
      width: { _: '100%', 0: '50%' },
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 40em)': {
        margin: 4,
        padding: 32,
        width: '50%',
      },
      '@media screen and (min-width: 52em)': {
        margin: 8,
        padding: 64,
      },
      margin: 0,
      padding: 16,
      width: '100%',
    });
  });

  it('should support non-array breakpoints object', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      margin: { _: 0, md: 8, sm: 4 },
      padding: { _: 16, lg: 64 },
      theme: {
        breakpoints: {
          lg: '64em',
          md: '40em',
          sm: '32em',
        },
        disableStyledSystemCache: true,
      },
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 32em)': {
        margin: 4,
      },
      '@media screen and (min-width: 40em)': {
        margin: 8,
      },
      '@media screen and (min-width: 64em)': {
        padding: 64,
      },
      margin: 0,
      padding: 16,
    });
  });
});
