import React, { FunctionComponent } from 'react';
import { ObjectUtils } from '@dots/core';

import { BaseChart, CommonChartProps } from '../BaseChart';

export interface PieChartProps extends CommonChartProps {}

const DEFAULT_OPTIONS = {
  classNames: {
    chartPie: 'chart-container',
    slicePie: 'chart-pie',
  },
};

export const PieChart: FunctionComponent<PieChartProps> = ({ ...rest }: PieChartProps): JSX.Element => {
  const newOptions = ObjectUtils.merge(DEFAULT_OPTIONS, {});

  return (
    <BaseChart
      type="Pie"
      className="chart-piechart"
      options={newOptions}
      tooltipTarget={`.${newOptions['classNames'].slicePie}`}
      {...rest}
    />
  );
};
