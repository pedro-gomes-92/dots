import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { ButtonProps, Button } from '../../actions';

export interface PaginationPreviousProps extends ButtonProps {}

export const PaginationPrevious: FunctionComponent<PaginationPreviousProps> = ({
  className,
  ...rest
}: PaginationPreviousProps): JSX.Element => (
  <Button className={classnames('pagination-previous', className)} {...rest} />
);
PaginationPrevious.defaultProps = {
  icon: 'chevron-left-outline',
};
