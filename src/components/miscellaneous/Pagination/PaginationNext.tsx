import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { ButtonProps, Button } from '../../actions';

export interface PaginationNextProps extends ButtonProps {}

export const PaginationNext: FunctionComponent<PaginationNextProps> = ({
  className,
  ...rest
}: PaginationNextProps): JSX.Element => <Button className={classnames('pagination-next', className)} {...rest} />;

PaginationNext.defaultProps = {
  icon: 'chevron-right-outline',
};
