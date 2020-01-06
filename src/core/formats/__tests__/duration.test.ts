import { FormatDuration } from '../duration';

describe('Given FormatDuration', (): void => {
  describe('When uses format', (): void => {
    it('Then should format duration according to the navigator localization', (): void => {
      const formattedValue = FormatDuration.format(120);

      expect(formattedValue).toEqual('120');
    });

    describe('And uses minute format', (): void => {
      it('Then should format duration in minutes according to the navigator localization', (): void => {
        const formattedValue = FormatDuration.format(120, 'minute');

        expect(formattedValue).toEqual('2');
      });
    });

    describe('And uses hour format', (): void => {
      it('Then should format duration in hours according to the navigator localization', (): void => {
        const formattedValue = FormatDuration.format(4950, 'hour');

        expect(formattedValue).toEqual('1.375');
      });
    });

    describe('And uses day format', (): void => {
      it('Then should format duration in days according to the navigator localization', (): void => {
        const formattedValue = FormatDuration.format(55503, 'day');

        expect(formattedValue).toEqual('0.642');
      });
    });

    describe('And uses week format', (): void => {
      it('Then should format duration in weeks according to the navigator localization', (): void => {
        const formattedValue = FormatDuration.format(213331, 'week');

        expect(formattedValue).toEqual('0.353');
      });
    });

    describe('And uses month format', (): void => {
      it('Then should format duration in months according to the navigator localization', (): void => {
        const formattedValue = FormatDuration.format(323139, 'month');

        expect(formattedValue).toEqual('0.123');
      });
    });

    describe('And uses year format', (): void => {
      it('Then should format duration in years according to the navigator localization', (): void => {
        const formattedValue = FormatDuration.format(3000000, 'year');

        expect(formattedValue).toEqual('0.095');
      });
    });
  });
});
