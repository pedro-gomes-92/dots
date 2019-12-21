import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';

export interface HeaderProps extends BaseContainerProps {}

export const Header: FunctionComponent<HeaderProps> = ({ className, children, ...rest }: HeaderProps): JSX.Element => (
  <BaseContainer className={classnames('header', className)} {...rest}>
    {children}
  </BaseContainer>
);

Header.defaultProps = {
  tag: 'header',
};
