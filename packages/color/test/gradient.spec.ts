import { gradient, gradientActive, gradientFocus, gradientHover } from '../src';

describe('@manifest/color - gradient', () => {
  const theme = {
    colors: {
      primary: {
        '50': '#ECF4FE',
        '100': '#C9E1FB',
        '200': '#95C5F8',
        '300': '#62A9F4',
        '400': '#308DF1',
        '500': '#0072EC',
        '600': '#005CBE',
        '700': '#00458E',
        '800': '#003772',
        '900': '#002956',
      },
      secondary: {
        '50': '#f2e7fc',
        '100': '#ddd0f3',
        '200': '#c79bf2',
        '300': '#b16fed',
        '400': '#9e4ae8',
        '500': '#8c18e2',
        '600': '#8110dc',
        '700': '#7300d3',
        '800': '#6500ce',
        '900': '#4e00c6',
      },
    },
  };

  describe('gradient', () => {
    it('should return a gradient', () => {
      const value = gradient(theme);

      expect(value).toEqual('linear-gradient(90deg, #0072EC 0%, #4e00c6 163.65%, #8c18e2 191.59%)');
    });

    it('should return an empty string if theme is undefined', () => {
      const value = gradient();

      expect(value).toEqual('');
    });

    it('should return an empty string if primary and secondary colors are undefined', () => {
      const value = gradient({ colors: {} });

      expect(value).toEqual('');
    });
  });

  describe('gradientActive', () => {
    it('should return a gradient', () => {
      const value = gradientActive(theme);

      expect(value).toEqual(
        'linear-gradient(0deg, rgba(10, 21, 33, 0.6), rgba(10, 21, 33, 0.6)), linear-gradient(90deg, #0072EC 0%, #4e00c6 163.65%, #8c18e2 191.59%)',
      );
    });
  });

  describe('gradientFocus', () => {
    it('should return a gradient', () => {
      const value = gradientFocus(theme);

      expect(value).toEqual(
        'linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), linear-gradient(90deg, #0072EC 0%, #4e00c6 163.65%, #8c18e2 191.59%)',
      );
    });
  });

  describe('gradientHover', () => {
    it('should return a gradient', () => {
      const value = gradientHover(theme);

      expect(value).toEqual(
        'linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), linear-gradient(90deg, #0072EC 0%, #4e00c6 163.65%, #8c18e2 191.59%)',
      );
    });
  });
});
