import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseButton, BaseButtonProps } from '../BaseButton';

export interface TextButtonProps extends BaseButtonProps {}

export const TextButton: FunctionComponent<TextButtonProps> = ({
  className,
  ...rest
}: TextButtonProps): JSX.Element => <BaseButton className={classnames('is-text', className)} {...rest}></BaseButton>;
