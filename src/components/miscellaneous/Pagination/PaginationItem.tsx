import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { TextButton, TextButtonProps } from '../../actions';

export interface PaginationItemProps extends TextButtonProps {
  text: string;
  isCurrent?: boolean;
}

export const PaginationItem: FunctionComponent<PaginationItemProps> = ({
  className,
  isCurrent,
  ...rest
}: PaginationItemProps): JSX.Element => (
  <TextButton className={classnames('pagination-link', { 'is-current': isCurrent }, className)} {...rest} />
);

PaginationItem.defaultProps = {
  isCurrent: false,
};
