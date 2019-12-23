import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { NavBarBrand } from './NavBarBrand';
import { BaseProps, Base } from '../../Base';
import { ImageLinkProps } from '../../actions';
import { ColumnLayout, ColumnItem } from '../../layouts';

export interface NavBarProps extends BaseProps {
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
    <ColumnLayout isMobileActive gap={4} align="center">
      <>
        {brand && (
          <ColumnItem size="auto">
            <NavBarBrand source={brand} to={brandTo} />
          </ColumnItem>
        )}
      </>
      <ColumnItem />
      <>
        {React.Children.map(
          children,
          (child): JSX.Element => (
            <ColumnItem size="auto">{child}</ColumnItem>
          ),
        )}
      </>
    </ColumnLayout>
  </Base>
);

NavBar.defaultProps = {
  tag: 'nav',
};
