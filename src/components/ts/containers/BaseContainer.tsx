import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { BaseProps, Base } from '../Base';

export interface BaseContainerProps extends BaseProps {
  size?: Size | FullSize;
}

export const BaseContainer: FunctionComponent<BaseContainerProps> = ({
  className,
  ...rest
}: BaseContainerProps): JSX.Element => <Base className={classnames('containers', className)} {...rest} />;
