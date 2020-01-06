import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';

export interface DividerProps extends Omit<BaseProps, 'children'> {
  text?: string;
  orientation?: Orientation;
}

export const Divider: FunctionComponent<DividerProps> = ({
  text,
  className,
  orientation,
  data,
  ...rest
}: DividerProps): JSX.Element => {
  let dataAttributes = { ...data };
  if (text) {
    dataAttributes = { ...dataAttributes, content: text };
  }
  return (
    <Base className={classnames('divider', `is-divider-${orientation}`, className)} data={dataAttributes} {...rest} />
  );
};

Divider.defaultProps = {
  orientation: 'horizontal',
};
