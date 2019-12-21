import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseLayout, BaseLayoutProps } from '../BaseLayout';
import { BaseProps } from '../../Base';
import { BaseItem } from '../BaseItem';

export interface CenterLayoutProps extends Omit<BaseLayoutProps, 'children' | 'gap' | 'align'> {
  children: BaseProps['children'];
  onlyTo?: Orientation;
}

export const CenterLayout: FunctionComponent<CenterLayoutProps> = ({
  className,
  children,
  onlyTo,
  ...rest
}: CenterLayoutProps): JSX.Element => (
  <BaseLayout className={classnames('layout-center', onlyTo ? `is-center-${onlyTo}` : '', className)} {...rest}>
    <BaseItem>{children}</BaseItem>
  </BaseLayout>
);
