import React, { FunctionComponent, useState, MouseEvent } from 'react';
import classnames from 'classnames';
import ChartistGraph from 'react-chartist';

import { ObjectUtils } from '@dots/core';
import { Tooltip } from '../../popups';
import { Base, BaseProps } from '../../Base';

export interface CommonChartProps extends BaseProps {
  labels: string[];
  values: number[] | number[][];
  options?: object;
  tooltip?: boolean;
  tooltipTarget?: string;
  tooltipPosition?: [string, string];
}

interface BaseChartProps extends CommonChartProps {
  type: string;
}

const DEFAULT_OPTIONS = {
  stretch: false,
  classNames: {
    chart: 'chart-container',
    label: 'chart-label',
    labelGroup: 'chart-labels',
    series: 'chart-series',
    grid: 'chart-grid',
    gridGroup: 'chart-grids',
    gridBackground: 'has-grid-background',
    vertical: 'is-vertical',
    horizontal: 'is-horizontal',
    start: 'is-start',
    end: 'is-end',
  },
  axisX: {
    showGrid: false,
    offset: 24,
  },
  axisY: {
    showGrid: false,
    offset: 24,
  },
};

export const BaseChart: FunctionComponent<BaseChartProps> = ({
  values,
  labels,
  type,
  options,
  tooltip,
  tooltipTarget,
  className,
  ...rest
}: BaseChartProps): JSX.Element => {
  const [tooltipCoordinates, setTooltipCoordinates] = useState();
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const parsedData = {
    labels,
    series: values,
  };

  const chartOptions = ObjectUtils.merge(DEFAULT_OPTIONS, options);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let onMouseOver = (event: MouseEvent): void => {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let onMouseOut = (event: MouseEvent): void => {};

  if (tooltip) {
    onMouseOver = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (target.matches(tooltipTarget)) {
        const positionX = event.clientX;
        const positionY = event.clientY;
        setTooltipCoordinates([positionY, positionX]);
        setTooltipText(target.getAttribute('ct:value'));
        setTooltipVisibility(true);
      }
    };

    onMouseOut = (): void => {
      setTooltipVisibility(false);
    };
  }

  return (
    <Base className={classnames('chart', className)} attribute={{ onMouseOver, onMouseOut }} {...rest}>
      <ChartistGraph options={chartOptions} type={type} data={parsedData} />
      {tooltip && (
        <Tooltip
          position={{ x: 'center', y: 'top' }}
          isVisible={tooltipVisibility}
          coordinates={tooltipCoordinates}
          text={tooltipText}
        />
      )}
    </Base>
  );
};

BaseChart.defaultProps = {
  tooltip: true,
  tooltipTarget: '',
  options: {},
};
