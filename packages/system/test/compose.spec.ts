import { compose, Parser, system } from '../src';

describe('@manifest-ui/system - compose', () => {
  it('should compose system styles', () => {
    const color = system({ color: true });
    const parser = compose(color);
    const styles = parser({ color: 'pink' });

    expect(typeof parser).toBe('function');

    expect(styles).toEqual({ color: 'pink' });
  });

  it('should compose multiple system styles', () => {
    const color = system({ color: true });
    const other = system({ appearance: true });
    const parser = compose(color, other);
    const styles = parser({
      appearance: 'none',
      color: 'pink',
    });

    expect(styles).toEqual({
      appearance: 'none',
      color: 'pink',
    });
  });

  it('should ignore empty systems', () => {
    const color = system({ color: true });
    const parser = compose(color, {} as Parser);
    const styles = parser({
      color: 'pink',
    });

    expect(styles).toEqual({
      color: 'pink',
    });
  });
});
