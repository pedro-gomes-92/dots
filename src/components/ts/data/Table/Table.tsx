import React, { FunctionComponent, useCallback } from 'react';
import classnames from 'classnames';
import { ArrayUtils } from '@dots/core';

import { BaseDataProps, BaseData } from '../BaseData';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableBody } from './TableBody';

export interface TableProps extends BaseDataProps {
  values: string[][];
  size?: FullSize;
  labels?: string[];
}

export const Table: FunctionComponent<TableProps> = ({
  values,
  labels,
  className,
  ...rest
}: TableProps): JSX.Element => {
  const getMaxLength = useCallback((): number => {
    let maxLength = labels.length;
    if (maxLength === 0) {
      const sortValuesByLength = (value1: string[], value2: string[]): number => value2.length - value1.length;
      const sortedValues = values.sort(sortValuesByLength);
      maxLength = sortedValues[0].length;
    }

    return maxLength;
  }, [values, labels]);

  const maxLength = getMaxLength();
  const sameLengthValues = values.map((value): string[] => {
    const diff = maxLength - value.length;
    if (diff > 0) {
      return ArrayUtils.concatenate(value, ...ArrayUtils.fill(Array(diff), ''));
    }

    return ArrayUtils.dropRight(value, Math.abs(diff));
  });

  return (
    <BaseData className={classnames('table', 'is-hoverable', className)} {...rest}>
      {labels.length > 0 && (
        <TableHeader>
          <TableRow>
            {labels.map(
              (label, index): JSX.Element => (
                <TableCell key={`th-${index}`} text={label} />
              ),
            )}
          </TableRow>
        </TableHeader>
      )}
      <TableBody>
        {sameLengthValues.map(
          (row, index): JSX.Element => (
            <TableRow key={`tr-${index}`}>
              {Object.entries(row).map(
                ([name, value]): JSX.Element => (
                  <TableCell key={`td-${name}`} text={value || ''} />
                ),
              )}
            </TableRow>
          ),
        )}
      </TableBody>
    </BaseData>
  );
};

Table.defaultProps = {
  tag: 'table',
  labels: [],
};
