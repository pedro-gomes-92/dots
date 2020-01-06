import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseLayout, BaseLayoutProps } from '../BaseLayout';
import { ColumnItem } from './ColumnItem';
import { Children } from '../../typings';

export interface ColumnLayoutProps extends BaseLayoutProps {
  children: Children<typeof ColumnItem>;
  align?: Align;
  isWrapping?: boolean;
  isReverted?: boolean;
}

export const ColumnLayout: FunctionComponent<ColumnLayoutProps> = ({
  className,
  children,
  align,
  isWrapping,
  isReverted,
  ...rest
}: ColumnLayoutProps): JSX.Element => (
  <BaseLayout
    className={classnames(
      'columns',
      align ? `has-alignment-${align}` : '',
      { 'is-multiline': isWrapping },
      { 'is-reverted': isReverted },
      className,
    )}
    {...rest}
  >
    {children}
  </BaseLayout>
);

ColumnLayout.defaultProps = {
  isWrapping: false,
  isReverted: false,
};
