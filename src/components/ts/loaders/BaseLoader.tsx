import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';
import { IconProps } from '../miscellaneous/Icon';

export interface BaseLoaderProps extends BaseProps {}

export interface BaseLoaderTypeProps extends BaseLoaderProps {
  sizeIcon?: IconProps['size'];
  icon?: IconProps['name'];
}

export const BaseLoader: FunctionComponent<BaseLoaderProps> = ({
  className,
  children,
  ...rest
}: BaseLoaderProps): JSX.Element => {
  return (
    <Base className={classnames('loaders', className)} {...rest}>
      {children}
    </Base>
  );
};
