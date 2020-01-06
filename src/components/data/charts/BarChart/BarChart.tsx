import React, { FunctionComponent } from 'react';
import { BaseChart, CommonChartProps } from '../BaseChart';
import { ObjectUtils } from '@dots/core';

export interface BarChartProps extends CommonChartProps {
  orientation?: string;
  stacked?: boolean;
}

const DEFAULT_OPTIONS = {
  classNames: {
    horizontalBars: 'is-bars-horizontal',
    bar: 'chart-bar',
  },
};

export const BarChart: FunctionComponent<BarChartProps> = ({
  orientation,
  stacked,
  ...rest
}: BarChartProps): JSX.Element => {
  const options = ObjectUtils.merge(DEFAULT_OPTIONS, {
    horizontalBars: orientation === 'horizontal',
    stackMode: stacked,
  });

  return (
    <BaseChart
      type="Bar"
      className="chart-barchart"
      options={options}
      tooltipTarget={`.${options['classNames'].bar}`}
      {...rest}
    />
  );
};

BarChart.defaultProps = {
  orientation: 'vertical',
  stacked: false,
};
