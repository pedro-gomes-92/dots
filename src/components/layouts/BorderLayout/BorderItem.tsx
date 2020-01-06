import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseItemProps, BaseItem } from '../BaseItem';

// TODO Support also east and west
type BorderType = 'north' | 'south' | 'center';

export interface BorderItemProps extends Omit<BaseItemProps, 'size'> {
  type: BorderType;
}

export const BorderItem: FunctionComponent<BorderItemProps> = ({
  className,
  children,
  type,
  ...rest
}: BorderItemProps): JSX.Element => (
  <BaseItem className={classnames('border', `is-${type}`, className)} {...rest}>
    {children}
  </BaseItem>
);
