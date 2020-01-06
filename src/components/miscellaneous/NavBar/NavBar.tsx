import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { NavBarBrand } from './NavBarBrand';
import { NavBarMenu, NavBarMenuProps } from './NavBarMenu';
import { BaseProps, Base } from '../../Base';
import { Container } from '../../containers';
import { ImageLinkProps } from '../../actions';

export interface NavBarProps extends BaseProps {
  children: NavBarMenuProps['children'];
  brand?: ImageLinkProps['source'];
  brandTo?: ImageLinkProps['to'];
}

export const NavBar: FunctionComponent<NavBarProps> = ({
  className,
  brand,
  brandTo,
  children,
  ...rest
}: NavBarProps): JSX.Element => (
  <Base className={classnames('navbar', className)} {...rest}>
    <Container>
      {brand && <NavBarBrand source={brand} to={brandTo} />}
      <NavBarMenu>{children}</NavBarMenu>
    </Container>
  </Base>
);

NavBar.defaultProps = {
  tag: 'nav',
};
