import { system } from '../src';

describe('@manifest-ui/styled-system - system', () => {
  it('should return a parser', () => {
    const parser = system({
      color: true,
      backgroundColor: {
        property: 'backgroundColor',
        scale: 'colors',
      },
      mx: {
        scale: 'space',
        properties: ['marginLeft', 'marginRight'],
      },
    });

    expect(typeof parser).toBe('function');

    const styles = parser({
      theme: {
        space: [0, 4, 8, 16, 32],
        colors: {
          primary: 'black',
        },
      },
      color: 'pink',
      backgroundColor: 'primary',
      mx: [2, 3, 4],
    });

    expect(styles).toEqual({
      color: 'pink',
      backgroundColor: 'black',
      marginLeft: 8,
      marginRight: 8,
      '@media screen and (min-width: 600px)': {
        marginLeft: 16,
        marginRight: 16,
      },
      '@media screen and (min-width: 1024px)': {
        marginLeft: 32,
        marginRight: 32,
      },
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
      margin: 0,
      padding: 16,
      width: '100%',
      '@media screen and (min-width: 600px)': {
        margin: 4,
        padding: 32,
        width: '50%',
      },
      '@media screen and (min-width: 1024px)': {
        margin: 8,
        padding: 64,
      },
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
      margin: 0,
      padding: 16,
      width: '100%',
      '@media screen and (min-width: 600px)': {
        margin: 4,
        padding: 32,
        width: '50%',
      },
      '@media screen and (min-width: 1024px)': {
        margin: 8,
        padding: 64,
      },
    });
  });

  it('should support non-array breakpoints object', () => {
    const parser = system({
      margin: true,
      padding: true,
      width: true,
    });

    const styles = parser({
      theme: {
        breakpoints: {
          sm: '32em',
          md: '40em',
          lg: '64em',
        },
        disableStyledSystemCache: true,
      },
      margin: { _: 0, sm: 4, md: 8 },
      padding: { _: 16, lg: 64 },
    });

    expect(styles).toEqual({
      margin: 0,
      padding: 16,
      '@media screen and (min-width: 32em)': {
        margin: 4,
      },
      '@media screen and (min-width: 40em)': {
        margin: 8,
      },
      '@media screen and (min-width: 64em)': {
        padding: 64,
      },
    });
  });
});
