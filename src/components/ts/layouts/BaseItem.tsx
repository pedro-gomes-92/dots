import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';

export interface BaseItemProps extends BaseProps {
  alignText?: Align;
}

export const BaseItem: FunctionComponent<BaseItemProps> = ({
  className,
  alignText,
  children,
  ...rest
}: BaseItemProps): JSX.Element => (
  <Base className={classnames('layout-item', alignText ? `has-text-alignment-${alignText}` : '', className)} {...rest}>
    {children}
  </Base>
);
