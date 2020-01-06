import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { PaginationItem } from './PaginationItem';
import { PaginationPrevious } from './PaginationPrevious';
import { PaginationNext } from './PaginationNext';
import { List, ListItem } from '../../data';

export interface PaginationProps extends BaseProps {
  total: number;
  range?: number;
  onPageChange?: (newPage: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  className,
  total,
  range,
  onPageChange,
  ...rest
}: PaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const renderItem = (pageNumber: number, text: string): JSX.Element => {
    return (
      <ListItem key={`list-item-${pageNumber - 1}`}>
        <PaginationItem
          text={text}
          isCurrent={currentPage === pageNumber}
          onClick={(): void => {
            handlePageChange(pageNumber);
          }}
        />
      </ListItem>
    );
  };

  const items = [renderItem(1, '1')];
  const firstBoundaryStart = 2;
  const lastBoundaryEnd = total - 1;
  const lastBoundaryStart = Math.max(lastBoundaryEnd - 2 * range - 1, firstBoundaryStart);
  const firstBoundaryEnd = Math.min(lastBoundaryEnd, firstBoundaryStart + 2 * range + 1);

  let boundaryStart = Math.min(Math.max(firstBoundaryStart, currentPage - range), lastBoundaryStart);
  let boundaryEnd = Math.max(Math.min(currentPage + range, lastBoundaryEnd), firstBoundaryEnd);

  if (boundaryStart > firstBoundaryStart) {
    // Render left ellipsis
    items.push(renderItem(boundaryStart - 1, '...'));
  }

  for (let pageNumber = boundaryStart; pageNumber <= boundaryEnd; pageNumber++) {
    // Render boundary pages
    items.push(renderItem(pageNumber, `${pageNumber}`));
  }

  if (boundaryEnd < lastBoundaryEnd) {
    // Render right ellipsis
    items.push(renderItem(boundaryEnd + 1, '...'));
  }

  if (total > 1) {
    // Render last page
    items.push(renderItem(total, `${total}`));
  }

  return (
    <Base
      className={classnames('pagination', 'is-centered', className)}
      attribute={{ role: 'navigation', 'aria-label': 'pagination' }}
      {...rest}
    >
      <PaginationPrevious
        onClick={(): void => {
          handlePageChange(currentPage - 1);
        }}
        isEnabled={currentPage > 1}
      />

      <PaginationNext
        onClick={(): void => {
          handlePageChange(currentPage + 1);
        }}
        isEnabled={currentPage < total}
      />

      <List className="pagination-list">{items}</List>
    </Base>
  );
};

Pagination.defaultProps = {
  tag: 'nav',
  range: 2,
  onPageChange: (): void => {},
};
