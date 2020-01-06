import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseInput } from '../inputs/BaseInput';
import { Base, BaseProps } from '../Base';
import { Children } from '../typings';

export interface ControlProps extends BaseProps {
  children: Children<typeof BaseInput>;
}

export const Control: FunctionComponent<ControlProps> = ({
  className,
  children,
  ...rest
}: ControlProps): JSX.Element => (
  <Base className={classnames('control', className)} {...rest}>
    {children}
  </Base>
);
