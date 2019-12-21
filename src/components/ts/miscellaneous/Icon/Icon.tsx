import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';

export interface IconProps extends BaseProps {
  name: string;
  size?: FontSize | Size;
}

export const Icon: FunctionComponent<IconProps> = ({
  name,
  className,
  size,
  children,
  ...rest
}: IconProps): JSX.Element => (
  <Base className={classnames('icon', className)} {...rest}>
    <Base className={classnames('icon-font', `icon-font-${name}`)} size={size} tag="i" />
    {children}
  </Base>
);

Icon.defaultProps = {
  tag: 'span',
};
