import React from 'react';
import { render, fireEvent, getAllByText } from '@testing-library/react';

import { NumberUtils, FormatDate } from '@dots/core';
import { DateField } from '../DateField';

describe('Given <DateField />', (): void => {
  let container: HTMLElement;
  let input: HTMLInputElement;
  let picker: HTMLElement;
  let randomDate: Date;

  beforeEach((): void => {
    container = render(<DateField />).container;

    picker = container.querySelector('.picker.is-datetime');
    input = container.querySelector('.input.is-date');

    randomDate = new Date();
    const randomDay = NumberUtils.random(1, 28, [randomDate.getDate()], false);

    randomDate.setDate(randomDay);
  });

  describe('When initializes', (): void => {
    it('Then should match the snapshot', (): void => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('When changes value', (): void => {
    it('Then should update picker', (): void => {
      // Change input
      fireEvent.change(input, { target: { value: FormatDate.format(randomDate) } });

      const pickerDay = picker.querySelector('.date-item.is-active').textContent;

      expect(randomDate.getDate()).toEqual(parseInt(pickerDay));
    });
  });

  describe('When picks a value', (): void => {
    it('Then should update input', (): void => {
      // Get random picker day button
      const pickerDay = getAllByText(picker, `${randomDate.getDate()}`)[0];

      // Click OK button
      fireEvent.click(pickerDay);
      fireEvent.click(picker.querySelector('.datetimepicker-footer-validate'));

      expect(input.value).toEqual(FormatDate.format(randomDate));
    });
  });
});
