import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { TableRow } from './TableRow';

export interface TableHeaderProps extends BaseProps {
  children: Children<typeof TableRow>;
}

export const TableHeader: FunctionComponent<TableHeaderProps> = ({
  className,
  children,
  ...rest
}: TableHeaderProps): JSX.Element => {
  return (
    <Base className={classnames('table-header', className)} {...rest}>
      {children}
    </Base>
  );
};

TableHeader.defaultProps = {
  tag: 'thead',
};
