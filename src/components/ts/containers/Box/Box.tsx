import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';

export interface BoxProps extends BaseContainerProps {}

export const Box: FunctionComponent<BoxProps> = ({ className, children, ...rest }: BoxProps): JSX.Element => (
  <BaseContainer className={classnames('box', className)} {...rest}>
    {children}
  </BaseContainer>
);
