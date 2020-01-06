import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Children } from '../../typings';
import { BaseDataProps, BaseData } from '../BaseData';
import { BaseListItem } from './BaseListItem';

export interface BaseListProps extends BaseDataProps {
  children: Children<typeof BaseListItem>;
}

export const BaseList: FunctionComponent<BaseListProps> = ({
  className,
  children,
  ...rest
}: BaseListProps): JSX.Element => (
  <BaseData className={classnames('list', className)} {...rest}>
    {children}
  </BaseData>
);
BaseList.defaultProps = {
  tag: 'ul',
};
