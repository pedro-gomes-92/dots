import React, { FunctionComponent } from 'react';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface ButtonProps extends BaseButtonProps {}

export const Button: FunctionComponent<ButtonProps> = ({ ...rest }: ButtonProps): JSX.Element => (
  <BaseButton {...rest}></BaseButton>
);
