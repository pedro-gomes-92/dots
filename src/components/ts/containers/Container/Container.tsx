import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';

export interface ContainerProps extends BaseContainerProps {}

export const Container: FunctionComponent<ContainerProps> = ({
  className,
  children,
  ...rest
}: ContainerProps): JSX.Element => (
  <BaseContainer className={classnames('container', className)} {...rest}>
    {children}
  </BaseContainer>
);
