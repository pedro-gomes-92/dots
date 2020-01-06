import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { ImageLink, ImageLinkProps } from '../../actions';
import { Base } from '../../Base';
import { BaseProps } from '../../Base';
import { NavBarItem } from './NavBarItem';

export interface NavBarBrandProps extends BaseProps {
  source: ImageLinkProps['source'];
  to?: ImageLinkProps['to'];
}

export const NavBarBrand: FunctionComponent<NavBarBrandProps> = ({
  className,
  source,
  to,
  ...rest
}: NavBarBrandProps): JSX.Element => (
  <Base className={classnames('navbar-brand', className)} {...rest}>
    <NavBarItem>
      <ImageLink source={source} to={to} />
    </NavBarItem>
  </Base>
);

NavBarBrand.defaultProps = {
  to: '/',
};
