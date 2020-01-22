import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Base } from '../../Base';
import { BaseProps } from '../../Base';
import { NavBarItem } from './NavBarItem';
import { NavBarMenuTrigger, NavBarMenuTriggerProps } from './NavBarMenuTrigger';

export interface NavBarBrandProps extends BaseProps {
  logo?: JSX.Element;
  onMenuClick?: NavBarMenuTriggerProps['onClick'];
}

export const NavBarBrand: FunctionComponent<NavBarBrandProps> = ({
  className,
  logo,
  onMenuClick,
  ...rest
}: NavBarBrandProps): JSX.Element => (
  <Base className={classnames('navbar-brand', className)} {...rest}>
    {logo && <NavBarItem className="is-logo-item">{logo}</NavBarItem>}
    <NavBarItem>
      <NavBarMenuTrigger onClick={onMenuClick} />
    </NavBarItem>
  </Base>
);

NavBarBrand.defaultProps = {
  onMenuClick: (): void => {},
};
