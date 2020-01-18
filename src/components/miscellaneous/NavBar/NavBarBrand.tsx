import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { ImageLink, ImageLinkProps } from '../../actions';
import { Base } from '../../Base';
import { BaseProps } from '../../Base';
import { NavBarItem } from './NavBarItem';
import { NavBarMenuTrigger, NavBarMenuTriggerProps } from './NavBarMenuTrigger';

export interface NavBarBrandProps extends BaseProps {
  source: ImageLinkProps['source'];
  to?: ImageLinkProps['to'];
  onMenuClick?: NavBarMenuTriggerProps['onClick'];
}

export const NavBarBrand: FunctionComponent<NavBarBrandProps> = ({
  className,
  source,
  to,
  onMenuClick,
  ...rest
}: NavBarBrandProps): JSX.Element => (
  <Base className={classnames('navbar-brand', className)} {...rest}>
    <NavBarItem>
      <ImageLink source={source} to={to} />
    </NavBarItem>
    <NavBarItem>
      <NavBarMenuTrigger onClick={onMenuClick} />
    </NavBarItem>
  </Base>
);

NavBarBrand.defaultProps = {
  to: '/',
  onMenuClick: (): void => {},
};
