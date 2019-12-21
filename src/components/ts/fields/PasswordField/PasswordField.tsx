import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseFieldTypeProps as BaseFieldProps, BaseField } from '../BaseField';
import { PasswordInput } from '../../inputs';

export interface PasswordFieldProps extends BaseFieldProps {}

export const PasswordField: FunctionComponent<PasswordFieldProps> = ({
  className,
  model,
  placeHolder,
  value,
  isReadOnly,
  onChange,
  size,
  ...rest
}: PasswordFieldProps): JSX.Element => (
  <BaseField className={classnames('is-password', className)} {...rest}>
    <PasswordInput
      placeHolder={placeHolder}
      model={model}
      value={value}
      onChange={onChange}
      isReadOnly={isReadOnly}
      size={size}
    />
  </BaseField>
);
