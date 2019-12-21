import { FormatCurrency } from '../currency';

describe('Given FormatCurrency', (): void => {
  let value: number;

  beforeAll((): void => {
    value = 10.12313;
  });

  describe('When uses format', (): void => {
    it('Then should format a value', (): void => {
      expect(FormatCurrency.format(value)).toBe('€10.12');
    });

    it('And should reproduce the same value without change', (): void => {
      expect(FormatCurrency.format(value)).toBe(FormatCurrency.format(value));
    });

    describe('And uses a different unit', (): void => {
      it('Then should format the value to the base unit', (): void => {
        expect(FormatCurrency.format(value, 'centesimal')).toBe('€0.10');
      });
    });

    describe('And uses setup', (): void => {
      beforeEach((): void => {
        FormatCurrency.setup({ currency: 'GBP' });
      });

      it('Then should format a value', (): void => {
        expect(FormatCurrency.format(value)).toBe('£10.12');
      });

      it('And should reproduce the same value without change', (): void => {
        expect(FormatCurrency.format(value)).toBe(FormatCurrency.format(value));
      });

      describe('And uses a different unit', (): void => {
        it('Then should format the value to the base unit', (): void => {
          expect(FormatCurrency.format(value, 'centesimal')).toBe('£0.10');
        });
      });
    });
  });
});
