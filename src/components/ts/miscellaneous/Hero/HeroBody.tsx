import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../../containers/BaseContainer';
import { CenterLayout } from '../../layouts';

export interface HeroBodyProps extends BaseContainerProps {}

export const HeroBody: FunctionComponent<HeroBodyProps> = ({
  className,
  children,
  ...rest
}: HeroBodyProps): JSX.Element => (
  <BaseContainer className={classnames('hero-body', className)} {...rest}>
    <CenterLayout>{children}</CenterLayout>
  </BaseContainer>
);
