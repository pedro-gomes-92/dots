import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseFieldTypeProps as BaseFieldProps, BaseField } from '../BaseField';
import { Select, SelectItem } from '../../inputs';
import { Children } from '../../typings';

export interface SelectFieldProps extends Omit<BaseFieldProps, 'placeHolder'> {
  children: Children<typeof SelectItem>;
}

export const SelectField: FunctionComponent<SelectFieldProps> = ({
  className,
  model,
  value,
  isReadOnly,
  onChange,
  children,
  size,
  ...rest
}: SelectFieldProps): JSX.Element => (
  <BaseField className={classnames('is-select', className)} {...rest}>
    <Select model={model} value={value} onChange={onChange} isReadOnly={isReadOnly} size={size}>
      {children}
    </Select>
  </BaseField>
);
