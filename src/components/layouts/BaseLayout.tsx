import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';
import { Children } from '../typings';
import { BaseItem } from './BaseItem';

export interface BaseLayoutProps extends BaseProps {
  children: Children<typeof BaseItem>;
  gap?: number;
}

export const BaseLayout: FunctionComponent<BaseLayoutProps> = ({
  children,
  gap,
  className,
  ...rest
}: BaseLayoutProps): JSX.Element => (
  <Base className={classnames('layout', `is-${gap}`, className)} {...rest}>
    {children}
  </Base>
);

BaseLayout.defaultProps = {
  gap: 0,
};
