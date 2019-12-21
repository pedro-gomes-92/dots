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
  const options = ObjectUtils.merge(DEFAULT_OPTIONS, {});

  return (
    <BaseChart
      type="Pie"
      className="chart-piechart"
      options={options}
      tooltipTarget={`.${options['classNames'].slicePie}`}
      {...rest}
    />
  );
};

PieChart.defaultProps = {};
