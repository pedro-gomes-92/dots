import { FormatDate } from '../date';

describe('Given FormatDate', (): void => {
  describe('When uses format', (): void => {
    it('Then should format value', (): void => {
      const formattedValue = FormatDate.format(new Date(1992, 11, 29));

      expect(formattedValue).toEqual('12/29/1992');
    });

    describe('And uses ranged value', (): void => {
      it('Then should format value', (): void => {
        const formattedValue = FormatDate.format({ start: new Date(1992, 11, 29), end: new Date(2010, 11, 30) });

        expect(formattedValue).toEqual('12/29/1992 - 12/30/2010');
      });
    });

    describe('And uses invalid ranged value', (): void => {
      it('Then should throw an error', (): void => {
        const invalid = (): string => FormatDate.format({ start: new Date(2010, 11, 30), end: new Date(1992, 11, 29) });
        expect(invalid).toThrowError('Start date is bigger than end date');
      });
    });
  });

  describe('When uses unformat', (): void => {
    it('Then should unformat value', (): void => {
      const formattedValue = FormatDate.unformat('12/29/1992');

      expect(formattedValue).toEqual(new Date(1992, 11, 29));
    });

    describe('And uses ranged value', (): void => {
      it('Then should unformat value', (): void => {
        const formattedValue = FormatDate.unformat('12/29/1992 - 12/30/2010');

        expect(formattedValue).toEqual({ start: new Date(1992, 11, 29), end: new Date(2010, 11, 30) });
      });
    });

    describe('And uses invalid ranged value', (): void => {
      it('Then should throw an error', (): void => {
        const invalid = (): DateValue => FormatDate.unformat('12/30/2010 - 12/29/1992');
        expect(invalid).toThrowError('Start date is bigger than end date');
      });
    });
  });
});
