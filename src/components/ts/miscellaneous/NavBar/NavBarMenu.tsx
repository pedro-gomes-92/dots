import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { NavBarItem } from './NavBarItem';

export interface NavBarMenuProps extends BaseProps {
  children: Children<typeof NavBarItem>;
}

export const NavBarMenu: FunctionComponent<NavBarMenuProps> = ({
  className,
  children,
  ...rest
}: NavBarMenuProps): JSX.Element => (
  <Base className={classnames('navbar-menu', className)} {...rest}>
    <Base className="navbar-end">{children}</Base>
  </Base>
);
