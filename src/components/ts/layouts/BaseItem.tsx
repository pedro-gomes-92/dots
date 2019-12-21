import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';

export interface BaseItemProps extends BaseProps {}

export const BaseItem: FunctionComponent<BaseProps> = ({ className, children, ...rest }: BaseProps): JSX.Element => (
  <Base className={classnames('layout-item', className)} {...rest}>
    {children}
  </Base>
);
