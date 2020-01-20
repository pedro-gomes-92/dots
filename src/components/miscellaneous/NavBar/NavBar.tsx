import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { NavBarBrand, NavBarBrandProps } from './NavBarBrand';
import { NavBarMenu, NavBarMenuProps } from './NavBarMenu';
import { BaseProps, Base } from '../../Base';

export interface NavBarProps extends BaseProps {
  children: NavBarMenuProps['children'];
  logo?: NavBarBrandProps['logo'];
}

export const NavBar: FunctionComponent<NavBarProps> = ({
  className,
  logo,
  children,
  ...rest
}: NavBarProps): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Base className={classnames('navbar', className)} {...rest}>
      <NavBarBrand
        logo={logo}
        onMenuClick={(): void => {
          setOpenMenu(!openMenu);
        }}
      />
      <NavBarMenu isOpened={openMenu}>{children}</NavBarMenu>
    </Base>
  );
};

NavBar.defaultProps = {
  tag: 'nav',
};
