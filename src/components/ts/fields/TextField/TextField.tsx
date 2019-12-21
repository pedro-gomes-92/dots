import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseFieldTypeProps as BaseFieldProps, BaseField } from '../BaseField';
import { TextInput } from '../../inputs';

export interface TextFieldProps extends BaseFieldProps {}

export const TextField: FunctionComponent<TextFieldProps> = ({
  model,
  placeHolder,
  value,
  isReadOnly,
  onChange,
  className,
  size,
  ...rest
}: TextFieldProps): JSX.Element => (
  <BaseField className={classnames('is-text', className)} {...rest}>
    <TextInput
      model={model}
      value={value}
      onChange={onChange}
      isReadOnly={isReadOnly}
      size={size}
      placeHolder={placeHolder}
    />
  </BaseField>
);
