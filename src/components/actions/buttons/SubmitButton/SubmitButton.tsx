import React, { FunctionComponent } from 'react';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface SubmitButtonProps extends Omit<BaseButtonProps, 'onClick'> {}

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ ...rest }: SubmitButtonProps): JSX.Element => (
  <BaseButton onClick={(): void => {}} type="submit" {...rest} />
);
