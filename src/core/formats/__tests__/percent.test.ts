import { FormatPercent } from '../percent';

describe('Given FormatPercent', (): void => {
  let value: number;

  beforeAll((): void => {
    value = 0.12313;
  });

  describe('When uses format', (): void => {
    it('Then should format a value', (): void => {
      expect(FormatPercent.format(value)).toBe('12%');
    });

    it('And should reproduce the same value', (): void => {
      expect(FormatPercent.format(value)).toBe(FormatPercent.format(value));
    });

    it('And should reproduce a positive zero value', (): void => {
      expect(FormatPercent.format(-0)).toBe(FormatPercent.format(0));
    });
  });
});
