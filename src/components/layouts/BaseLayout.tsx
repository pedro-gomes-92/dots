import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';
import { Children } from '../typings';
import { BaseItem } from './BaseItem';

export interface BaseLayoutProps extends BaseProps {
  children: Children<typeof BaseItem>;
  gap?: number;
  isMobileActive?: boolean;
}

export const BaseLayout: FunctionComponent<BaseLayoutProps> = ({
  children,
  gap,
  isMobileActive,
  className,
  ...rest
}: BaseLayoutProps): JSX.Element => (
  <Base className={classnames('layout', `is-${gap}`, { 'is-mobile': isMobileActive }, className)} {...rest}>
    {children}
  </Base>
);

BaseLayout.defaultProps = {
  gap: 0,
  isMobileActive: false,
};
