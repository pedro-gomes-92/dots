import React, { FunctionComponent, useCallback } from 'react';
import classnames from 'classnames';

import { ArrayUtils } from '@dots/core';
import { BaseTextList, BaseTextListProps } from '../BaseTextList';
import { CalculationListItem } from './CalculationListItem';
import { ListDivider } from '../ListDivider';

export interface CalculationListProps extends Omit<BaseTextListProps, 'children'> {
  labels: string[];
  values?: number[];
  resultLabel?: string;
  onFormat?: (value: number) => string;
}

export const CalculationList: FunctionComponent<CalculationListProps> = ({
  className,
  values,
  labels,
  resultLabel,
  onFormat,
  size,
  ...rest
}: CalculationListProps): JSX.Element => {
  const missingValues = labels.length - values.length;
  let currValues = [...values];
  if (missingValues > 0) {
    currValues = [...currValues, ...ArrayUtils.fill(new Array(missingValues), 0)];
  } else if (missingValues < 0) {
    currValues.splice(currValues.length - Math.abs(missingValues));
  }

  const getTotal = useCallback((): number => {
    return currValues.reduce((sum, value): number => sum + value);
  }, [currValues]);

  return (
    <BaseTextList className={classnames('list-calculation', className)} {...rest}>
      <>
        {labels.map(
          (label, index): JSX.Element => (
            <CalculationListItem
              key={`key-calculation-item-${index}`}
              text={label}
              secondaryText={onFormat(currValues[index])}
              size={size}
            />
          ),
        )}
      </>
      <ListDivider />
      <CalculationListItem
        text={resultLabel}
        className="list-calculation-result"
        secondaryText={onFormat(getTotal())}
        size={size}
      />
    </BaseTextList>
  );
};

CalculationList.defaultProps = {
  resultLabel: 'Result',
  values: [],
  onFormat: (value: number): string => `${value}`,
};
