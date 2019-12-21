import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseItemProps, BaseItem } from '../BaseItem';

export interface ColumnItemProps extends BaseItemProps {
  size?: Size | ColumnSize;
  align?: Align;
}

export const ColumnItem: FunctionComponent<ColumnItemProps> = ({
  className,
  align,
  children,
  ...rest
}: ColumnItemProps): JSX.Element => (
  <BaseItem className={classnames('column', align ? `has-alignment-${align}` : '', className)} {...rest}>
    {children}
  </BaseItem>
);
