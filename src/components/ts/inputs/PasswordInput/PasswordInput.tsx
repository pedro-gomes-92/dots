import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseInputProps, BaseInput } from '../BaseInput';

export interface PasswordInputProps extends BaseInputProps {}

export const PasswordInput: FunctionComponent<PasswordInputProps> = ({
  className,
  ...rest
}: PasswordInputProps): JSX.Element => (
  <BaseInput type="password" className={classnames('is-password', className)} {...rest} />
);
