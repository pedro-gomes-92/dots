import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { IconLoader } from '../IconLoader';
import { BaseLoader, BaseLoaderTypeProps } from '../BaseLoader';

export interface LoaderProps extends Omit<BaseLoaderTypeProps, 'children'> {}

export const Loader: FunctionComponent<LoaderProps> = ({
  className,
  sizeIcon,
  icon,
  ...rest
}: LoaderProps): JSX.Element => (
  <BaseLoader className={classnames('is-loader', className)} {...rest}>
    <IconLoader name={icon} size={sizeIcon} />
  </BaseLoader>
);
