import React, { FunctionComponent } from 'react';
import { ObjectUtils } from '@dots/core';

import { BaseChart, CommonChartProps } from '../BaseChart';

export interface BarChartProps extends CommonChartProps {
  orientation?: Orientation;
  stacked?: boolean;
  distance?: number;
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
  distance,
  ...rest
}: BarChartProps): JSX.Element => {
  const newOptions = ObjectUtils.merge(DEFAULT_OPTIONS, {
    horizontalBars: orientation === 'horizontal',
    stackMode: stacked,
    seriesBarDistance: distance,
  });

  return (
    <BaseChart
      type="Bar"
      className="chart-barchart"
      options={newOptions}
      tooltipTarget={`.${newOptions['classNames'].bar}`}
      {...rest}
    />
  );
};

BarChart.defaultProps = {
  orientation: 'vertical',
  stacked: false,
};
