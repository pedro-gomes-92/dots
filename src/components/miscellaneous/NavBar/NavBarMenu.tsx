import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { Link } from '../../actions';
import { NavBarItem } from './NavBarItem';

export interface NavBarMenuProps extends BaseProps {
  children: Children<typeof Link>;
  isOpened?: boolean;
}

export const NavBarMenu: FunctionComponent<NavBarMenuProps> = ({
  className,
  children,
  isOpened,
  ...rest
}: NavBarMenuProps): JSX.Element => (
  <Base className={classnames('navbar-menu', { 'is-opened': isOpened }, className)} {...rest}>
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

NavBarMenu.defaultProps = {
  isOpened: false,
};
