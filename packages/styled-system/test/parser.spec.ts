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

describe('@manifest-ui/styled-system - parser', () => {
  it('should use responsive values', () => {
    const styles = parser({
      theme,
      color: ['primary', null, 'secondary'],
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 600px)': {},
      '@media screen and (min-width: 1024px)': { color: 'pink' },
      color: 'black',
    });
  });

  it('should use responsive object values', () => {
    const styles = parser({
      theme,
      color: { _: 'primary', 0: null, 1: 'secondary' },
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 600px)': {},
      '@media screen and (min-width: 1024px)': { color: 'pink' },
      color: 'black',
    });
  });

  it('should use cached breakpoints', () => {
    const styles = parser({
      theme: {
        colors: {
          primary: 'black',
          secondary: 'pink',
        },
        breakpoints: ['11em', '22em', '33em'],
      },

      color: ['primary', null, 'secondary'],
    });

    expect(styles).toEqual({
      '@media screen and (min-width: 600px)': {},
      '@media screen and (min-width: 1024px)': { color: 'pink' },
      color: 'black',
    });
  });

  it('should support disabling the cache', () => {
    const styles = parser({
      theme: {
        ...theme,
        breakpoints: ['11em', '22em', '33em'],
        disableStyledSystemCache: true,
      },
      color: ['primary', null, 'secondary'],
    });

    expect(styles).toEqual({
      color: 'black',
      '@media screen and (min-width: 11em)': {},
      '@media screen and (min-width: 22em)': {
        color: 'pink',
      },
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
