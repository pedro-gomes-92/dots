import React, { FunctionComponent, FormEvent, useState, useEffect } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';

export interface BaseInputProps extends BaseProps {
  model?: string;
  value?: FormValue;
  placeHolder?: string;
  isReadOnly?: boolean;
  onChange?: (event: FormEvent) => void;
  type?: InputType;
  size?: Size;
}

export const BaseInput: FunctionComponent<BaseInputProps> = ({
  className,
  type,
  placeHolder,
  attribute,
  isReadOnly,
  onChange,
  value,
  model,
  ...rest
}: BaseInputProps): JSX.Element => {
  const [currentValue, setValue] = useState(value);

  useEffect((): void => {
    setValue(value);
  }, [value]);

  const handleChange = (event: FormEvent): void => {
    setValue((event.target as HTMLInputElement).value);
    onChange(event);
  };

  let attributes = { ...attribute, readOnly: isReadOnly, onChange: handleChange, name: model, value: currentValue };
  if (type) {
    attributes = { ...attributes, type };
  }

  if (placeHolder) {
    attributes = { ...attributes, placeholder: placeHolder };
  }

  return (
    <Base className={classnames('input', { 'is-readonly': isReadOnly }, className)} attribute={attributes} {...rest} />
  );
};

BaseInput.defaultProps = {
  tag: 'input',
  isReadOnly: false,
  onChange: (): void => {},
};
