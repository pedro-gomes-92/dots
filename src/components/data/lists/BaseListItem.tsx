import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Base, BaseProps } from '../../Base';

export interface BaseListItemProps extends BaseProps {}

export const BaseListItem: FunctionComponent<BaseListItemProps> = ({
  className,
  children,
  ...rest
}: BaseListItemProps): JSX.Element => (
  <Base className={classnames('list-item', className)} {...rest}>
    {children}
  </Base>
);
BaseListItem.defaultProps = {
  tag: 'li',
};
