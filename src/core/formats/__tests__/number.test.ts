import { FormatNumber } from '../number';

describe('Given FormatNumber', (): void => {
  let value: number;

  beforeAll((): void => {
    value = 10.12313;
  });

  describe('When uses format', (): void => {
    it('Then should format a value', (): void => {
      expect(FormatNumber.format(value)).toBe('10.123');
    });

    it('And should reproduce the same value', (): void => {
      expect(FormatNumber.format(value)).toBe(FormatNumber.format(value));
    });

    it('And should reproduce a positive zero value', (): void => {
      expect(FormatNumber.format(-0)).toBe(FormatNumber.format(0));
    });
  });
});
