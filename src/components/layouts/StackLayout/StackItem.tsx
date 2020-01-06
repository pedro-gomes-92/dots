import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseItemProps, BaseItem } from '../BaseItem';

export interface StackItemProps extends BaseItemProps {
  size?: Size;
}

export const StackItem: FunctionComponent<StackItemProps> = ({
  className,
  children,
  ...rest
}: StackItemProps): JSX.Element => (
  <BaseItem className={classnames('stack', className)} {...rest}>
    {children}
  </BaseItem>
);
