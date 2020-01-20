import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseLoader, BaseLoaderProps } from '../BaseLoader';

export interface LoaderProps extends BaseLoaderProps {}

export const Loader: FunctionComponent<LoaderProps> = ({ className, loader, ...rest }: LoaderProps): JSX.Element => (
  <BaseLoader className={classnames('is-loader', className)} {...rest}>
    {loader}
  </BaseLoader>
);
