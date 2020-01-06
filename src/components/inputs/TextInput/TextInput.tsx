import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseInputProps, BaseInput } from '../BaseInput';

export interface TextInputProps extends BaseInputProps {}

export const TextInput: FunctionComponent<TextInputProps> = ({ className, ...rest }: TextInputProps): JSX.Element => (
  <BaseInput type="text" className={classnames('is-text', className)} {...rest} />
);
