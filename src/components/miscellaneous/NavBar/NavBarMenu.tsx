import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { Link } from '../../actions';
import { NavBarItem } from './NavBarItem';

export interface NavBarMenuProps extends BaseProps {
  children: Children<typeof Link>;
}

export const NavBarMenu: FunctionComponent<NavBarMenuProps> = ({
  className,
  children,
  ...rest
}: NavBarMenuProps): JSX.Element => (
  <Base className={classnames('navbar-menu', className)} {...rest}>
    <Base className="navbar-end">
      {React.Children.map(
        children,
        (child, index): JSX.Element => (
          <NavBarItem key={`key-item-${index}`}>{child}</NavBarItem>
        ),
      )}
    </Base>
  </Base>
);
