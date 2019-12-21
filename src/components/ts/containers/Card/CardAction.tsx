import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps } from '../../Base';
import { Base } from '../../Base';

export interface CardActionProps extends BaseProps {}

export const CardAction: FunctionComponent<CardActionProps> = ({
  className,
  children,
  ...rest
}: CardActionProps): JSX.Element => (
  <Base className={classnames('card-footer-action', className)} {...rest}>
    {children}
  </Base>
);
