import React, { FunctionComponent, useState, useRef, useEffect, FormEvent } from 'react';
import { FormatDate } from '@dots/core';

import classnames from 'classnames';
import { BaseFieldTypeProps as BaseFieldProps, BaseField } from '../BaseField';
import { DateInput, DateInputProps } from '../../inputs';
import { DateTimePicker, DateTimePickerProps } from '../../pickers';

export interface DateFieldProps extends Omit<BaseFieldProps, 'value'> {
  isRange?: DateInputProps['isRange'];
  value?: DateInputProps['value'];
  language?: DateTimePickerProps['language'];
}

export const DateField: FunctionComponent<DateFieldProps> = ({
  model,
  placeHolder,
  value,
  onChange,
  className,
  isReadOnly,
  isRange,
  language,
  size,
  ...rest
}: DateFieldProps): JSX.Element => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentValue, setValue] = useState(value);
  const dateFieldRef = useRef<HTMLElement>(null);

  const handleChange = (event: FormEvent): void => {
    setValue((event.target as HTMLInputElement).value);
    onChange(event);
  };

  const handlePickerValue = (value: DateTimePickerProps['value']): void => {
    setPickerVisible(false);

    const dateInput = dateFieldRef.current.querySelector('input.is-date') as HTMLInputElement;
    const parsedDate = FormatDate.unformat(value);
    if (isRange) {
      const rangedDate = parsedDate as DateRangeValue;
      if (!rangedDate.start || !rangedDate.end) {
        return;
      }
    }

    if (dateInput.value === value) {
      return;
    }

    // Manually change input value, triggering OnChange event, bypassing React swallowing
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(dateInput, value);

    const event = new Event('input', { bubbles: true });
    dateInput.dispatchEvent(event);
  };

  const handleFocus = (): void => {
    setPickerVisible(true);
  };

  useEffect((): (() => void) => {
    const outsideClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (!dateFieldRef.current.contains(target)) {
        setPickerVisible(false);
      }
    };

    document.body.addEventListener('click', outsideClick);

    return (): void => {
      document.body.removeEventListener('click', outsideClick);
    };
  }, [dateFieldRef]);

  const inputAttributes = { onFocus: handleFocus };

  return (
    <BaseField reference={dateFieldRef} className={classnames('is-date', className)} {...rest}>
      <DateInput
        model={model}
        isRange={isRange}
        value={currentValue}
        onChange={handleChange}
        isReadOnly={isReadOnly}
        attribute={inputAttributes}
        size={size}
        placeHolder={placeHolder}
        type="text"
      />
      <DateTimePicker
        language={language}
        value={currentValue}
        onValue={handlePickerValue}
        isVisible={isPickerVisible}
        isRange={isRange}
        size={size}
      />
    </BaseField>
  );
};

DateField.defaultProps = {
  onChange: (): void => {},
};
