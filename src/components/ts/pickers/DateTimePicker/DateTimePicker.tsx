import React, { FunctionComponent, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { FormatDate, ObjectUtils } from '@dots/core';
import BulmaCalendar from './BulmaCalendar';
import { BasePickerProps, BasePicker } from '../BasePicker';
import { DateInput, DateInputProps } from '../../inputs';

// TODO Support also time

export interface DateTimePickerProps extends Omit<BasePickerProps, 'children' | 'value' | 'setValue'> {
  isVisible?: boolean;
  isRange?: DateInputProps['isRange'];
  value?: DateInputProps['value'];
  onValue?: (value: FormDateValue) => void;
  language?: string;
}

export const DateTimePicker: FunctionComponent<DateTimePickerProps> = ({
  className,
  isRange,
  isVisible,
  value,
  onValue,
  language,
  ...rest
}: DateTimePickerProps): JSX.Element => {
  const datePickerElement = useRef(null);

  // Attaching calendar library
  useEffect((): void => {
    BulmaCalendar.attach(datePickerElement.current, {
      isRange,
      weekStart: 1,
    })[0];
  }, [isRange]);

  // Mounting component
  useEffect((): void => {
    const datePicker = datePickerElement.current.bulmaCalendar;
    if (!datePicker) {
      return;
    }

    datePicker.on('hide', (bulmaCalendar: { data }): void => {
      let rangedDate = bulmaCalendar.data.date;
      if (!rangedDate.end) {
        rangedDate = FormatDate.format(rangedDate.start);
      } else {
        rangedDate = FormatDate.format(rangedDate);
      }

      onValue(rangedDate);
    });
  }, [onValue]);

  // Set value
  useEffect((): void => {
    const datePicker = datePickerElement.current.bulmaCalendar;
    if (!datePicker) {
      return;
    }

    const parsedDate = FormatDate.unformat(value);
    if (ObjectUtils.isObject(parsedDate)) {
      const { start, end } = parsedDate as DateRangeValue;
      datePicker.value(start);
      datePicker.value(end);
    } else {
      datePicker.value(parsedDate);
    }

    datePicker.save();
    datePicker.refresh();
    datePicker.datePicker.refresh();
  }, [value]);

  // Set Visibility
  useEffect((): void => {
    const datePicker = datePickerElement.current.bulmaCalendar;
    if (!datePicker) {
      return;
    }

    if (isVisible) {
      datePicker.show();
    } else {
      datePicker.hide();
    }
  }, [isVisible]);

  // Set Language
  useEffect((): void => {
    const datePicker = datePickerElement.current.bulmaCalendar;
    if (!datePicker) {
      return;
    }

    datePicker.lang = language;

    datePicker.refresh();
    datePicker.datePicker.refresh();
  }, [language]);

  return (
    <BasePicker className={classnames('is-datetime', className)} {...rest}>
      <DateInput reference={datePickerElement} />
    </BasePicker>
  );
};

DateTimePicker.defaultProps = {
  isVisible: false,
  isRange: false,
  value: FormatDate.format(new Date()),
  onValue: (): void => {},
  language: navigator.language.substring(0, 2) || 'en',
};
