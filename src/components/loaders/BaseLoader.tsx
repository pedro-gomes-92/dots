import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../Base';
import { IconLoader } from './IconLoader';

export interface BaseLoaderProps extends BaseProps {
  loader?: JSX.Element;
}

export const BaseLoader: FunctionComponent<BaseLoaderProps> = ({
  className,
  loader,
  ...rest
}: BaseLoaderProps): JSX.Element => {
  return (
    <Base className={classnames('loaders', className)} {...rest}>
      {loader}
    </Base>
  );
};

BaseLoader.defaultProps = {
  loader: <IconLoader />,
};
