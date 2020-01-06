import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Icon, IconProps } from '../miscellaneous/Icon';

export interface IconLoaderProps extends Omit<IconProps, 'name'> {
  name?: IconProps['name'];
}

export const IconLoader: FunctionComponent<IconLoaderProps> = ({
  className,
  name,
  ...rest
}: IconLoaderProps): JSX.Element => {
  return <Icon name={name} className={classnames('is-loader', 'is-relative', className)} {...rest} />;
};

IconLoader.defaultProps = {
  animations: [{ name: 'rotateRight', duration: 'slow', isInfinite: true }],
  name: 'loader',
};
