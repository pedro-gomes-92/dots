import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { TableRow } from './TableRow';

export interface TableBodyProps extends BaseProps {
  children: Children<typeof TableRow>;
}

export const TableBody: FunctionComponent<TableBodyProps> = ({
  className,
  children,
  ...rest
}: TableBodyProps): JSX.Element => {
  return (
    <Base className={classnames('table-body', className)} {...rest}>
      {children}
    </Base>
  );
};

TableBody.defaultProps = {
  tag: 'tbody',
};
