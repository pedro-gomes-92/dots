import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { TableCell } from './TableCell';

export interface TableRowProps extends BaseProps {
  children: Children<typeof TableCell>;
}

export const TableRow: FunctionComponent<TableRowProps> = ({
  className,
  children,
  ...rest
}: TableRowProps): JSX.Element => {
  return (
    <Base className={classnames('table-row', className)} {...rest}>
      {children}
    </Base>
  );
};

TableRow.defaultProps = {
  tag: 'tr',
};
