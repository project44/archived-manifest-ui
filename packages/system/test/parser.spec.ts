import { system } from '../src';

const theme = {
  colors: {
    primary: 'black',
    secondary: 'pink',
  },
};

const parser = system({
  color: {
    property: 'color',
    scale: 'colors',
  },
});

describe('@manifest-ui/system - parser', () => {
  it('should use responsive values', () => {
    const styles = parser({
      color: ['primary', null, 'secondary'],
      theme,
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 40em)': {},
      '@media screen and (min-width: 52em)': { color: 'pink' },
      color: 'black',
    });
  });

  it('should use responsive object values', () => {
    const styles = parser({
      color: { _: 'primary', 0: null, 1: 'secondary' },
      theme,
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 40em)': {},
      '@media screen and (min-width: 52em)': { color: 'pink' },
      color: 'black',
    });
  });

  it('should use cached breakpoints', () => {
    const styles = parser({
      color: ['primary', null, 'secondary'],
      theme: {
        breakpoints: ['11em', '22em', '33em'],
        colors: {
          primary: 'black',
          secondary: 'pink',
        },
      },
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 40em)': {},
      '@media screen and (min-width: 52em)': { color: 'pink' },
      color: 'black',
    });
  });

  it('should support disabling the cache', () => {
    const styles = parser({
      color: ['primary', null, 'secondary'],
      theme: {
        ...theme,
        breakpoints: ['11em', '22em', '33em'],
        disableStyledSystemCache: true,
      },
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 11em)': {},
      '@media screen and (min-width: 22em)': {
        color: 'pink',
      },
      color: 'black',
    });
  });

  it('should supports function and undefined props', () => {
    const parser = system({ margin: true });
    const styles = parser({ margin: () => '8px' });

    expect(styles).toEqual({ margin: '8px' });
  });

  it('should return an object style object if style is undefined', () => {
    const parser = system({ padding: true });
    const styles = parser({ padding: null });

    expect(styles).toEqual({});
  });
});
