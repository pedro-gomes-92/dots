import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Base, BaseProps } from '../../Base';
import { Text } from '../../text';

export interface TableCellProps extends BaseProps {
  text: string;
}

export const TableCell: FunctionComponent<TableCellProps> = ({
  className,
  text,
  ...rest
}: TableCellProps): JSX.Element => {
  return (
    <Base className={classnames('table-cell', className)} {...rest}>
      <Text text={text} />
    </Base>
  );
};

TableCell.defaultProps = {
  tag: 'td',
};
