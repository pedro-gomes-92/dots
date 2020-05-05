import React, { FunctionComponent } from 'react';
import { ObjectUtils } from '@dots/core';

import { BaseChart, CommonChartProps } from '../BaseChart';

export interface LineChartProps extends CommonChartProps {}

const DEFAULT_OPTIONS = {
  classNames: {
    line: 'chart-line',
    point: 'chart-point',
  },
};

export const LineChart: FunctionComponent<LineChartProps> = ({ ...rest }: LineChartProps): JSX.Element => {
  const newOptions = ObjectUtils.merge(DEFAULT_OPTIONS, {});

  return (
    <BaseChart
      type="Line"
      className="chart-linechart"
      options={newOptions}
      tooltipTarget={`.${newOptions['classNames'].point}`}
      {...rest}
    />
  );
};
