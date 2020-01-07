import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FormatDate } from '@dots/core';
import { DateTimePicker } from '../DateTimePicker';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('Given <DateTimePicker />', (): void => {
  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      const { container } = render(<DateTimePicker />);
      expect(container).toMatchSnapshot();
    });

    it('Then should have current date as default value', (): void => {
      const { container } = render(<DateTimePicker />);
      const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;
      expect(bulmaCalendar.value()).toEqual(FormatDate.format(new Date()));
    });

    describe('And uses value', (): void => {
      it('Then should update model', (): void => {
        const { container } = render(<DateTimePicker value="10/10/2010" />);
        const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;
        expect(bulmaCalendar.value()).toEqual('10/10/2010');
      });
    });

    describe('And uses isRange', (): void => {
      it('Then should render', (): void => {
        const { container } = render(<DateTimePicker isRange />);
        const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;
        expect(bulmaCalendar.isRange()).toBeTruthy();
      });

      describe('And uses value', (): void => {
        it('Then should update model', (): void => {
          const { container } = render(<DateTimePicker isRange value="10/10/2010" />);
          const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;
          expect(bulmaCalendar.value()).toEqual('10/10/2010');
        });
      });

      describe('And uses ranged value', (): void => {
        it('Then should update model', (): void => {
          const { container } = render(<DateTimePicker isRange value="10/10/2010 - 12/10/2010" />);
          const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;
          expect(bulmaCalendar.value()).toEqual('10/10/2010 - 12/10/2010');
        });
      });
    });
  });

  describe('When changes value', (): void => {
    it('Then should trigger onValue', (): void => {
      const handleValue = jest.fn();
      const { container } = render(<DateTimePicker value="10/10/2010" onValue={handleValue} />);
      const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;

      const currentDate = new Date();
      bulmaCalendar.value(currentDate);

      // Click on OK button
      fireEvent.click(container.querySelector('button.datetimepicker-footer-validate'));

      // TODO Fix number of times => it should be 1
      expect(handleValue).toHaveBeenCalledTimes(2);
    });

    describe('And uses isRange', (): void => {
      it('Then should trigger onValue', (): void => {
        const handleValue = jest.fn();
        const { container } = render(<DateTimePicker isRange value="10/10/2010 - 12/10/2010" onValue={handleValue} />);
        const bulmaCalendar = (container.querySelector('.input.is-date') as any).bulmaCalendar;

        const currentDate = new Date();
        const nextDate = new Date();
        nextDate.setMonth(currentDate.getMonth() + 3);

        bulmaCalendar.value(currentDate);
        bulmaCalendar.value(nextDate);

        // Click on OK button
        fireEvent.click(container.querySelector('button.datetimepicker-footer-validate'));

        // TODO Fix number of times => it should be 1
        expect(handleValue).toHaveBeenCalledTimes(2);
      });
    });
  });
});
