import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';
import { Container } from '../Container';

export interface FooterProps extends BaseContainerProps {}

export const Footer: FunctionComponent<FooterProps> = ({ className, children, ...rest }: FooterProps): JSX.Element => (
  <BaseContainer className={classnames('footer', className)} {...rest}>
    <Container>{children}</Container>
  </BaseContainer>
);

Footer.defaultProps = {
  tag: 'footer',
};
