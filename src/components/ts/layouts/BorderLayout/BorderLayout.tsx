import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseLayout, BaseLayoutProps } from '../BaseLayout';
import { BorderItem } from './BorderItem';
import { Children } from '../../typings';

export interface BorderLayoutProps extends BaseLayoutProps {
  children: Children<typeof BorderItem>;
  isScrollable?: boolean;
}

export const BorderLayout: FunctionComponent<BorderLayoutProps> = ({
  className,
  isScrollable,
  children,
  ...rest
}: BorderLayoutProps): JSX.Element => (
  <BaseLayout className={classnames('layout-border', { 'is-scrollable': isScrollable }, className)} {...rest}>
    {children}
  </BaseLayout>
);

BorderLayout.defaultProps = {
  isScrollable: true,
};
