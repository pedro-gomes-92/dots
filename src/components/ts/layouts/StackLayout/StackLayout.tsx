import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseLayout, BaseLayoutProps } from '../BaseLayout';
import { StackItem } from './StackItem';
import { Children } from '../../typings';

export interface StackLayoutProps extends BaseLayoutProps {
  children: Children<typeof StackItem>;
}

export const StackLayout: FunctionComponent<StackLayoutProps> = ({
  className,
  children,
  ...rest
}: StackLayoutProps): JSX.Element => (
  <BaseLayout className={classnames('layout-stack', className)} {...rest}>
    {children}
  </BaseLayout>
);
