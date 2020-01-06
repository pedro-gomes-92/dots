import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps } from '../../Base';
import { Base } from '../../Base';

export interface CardContentProps extends BaseProps {}

export const CardContent: FunctionComponent<CardContentProps> = ({
  className,
  children,
  ...rest
}: CardContentProps): JSX.Element => (
  <Base className={classnames('card-content', className)} {...rest}>
    {children}
  </Base>
);
