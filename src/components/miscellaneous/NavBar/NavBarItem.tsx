import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Base, BaseProps } from '../../Base';

export interface NavBarItemProps extends BaseProps {}

export const NavBarItem: FunctionComponent<NavBarItemProps> = ({
  className,
  children,
  ...rest
}: NavBarItemProps): JSX.Element => (
  <Base className={classnames('navbar-item', className)} {...rest}>
    {children}
  </Base>
);
