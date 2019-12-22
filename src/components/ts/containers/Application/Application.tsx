import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';
import { Header, Footer, Container, Hero } from '..';
import { BorderLayout, BorderItem } from '../../layouts';

export interface ApplicationProps extends BaseContainerProps {
  header?: ReactElement<typeof Header>;
  footer?: ReactElement<typeof Footer>;
  hero?: ReactElement<typeof Hero>;
}

export const Application: FunctionComponent<ApplicationProps> = ({
  className,
  children,
  header,
  footer,
  hero,
  ...rest
}: ApplicationProps): JSX.Element => (
  <BaseContainer className={classnames('application', className)} {...rest}>
    <BorderLayout>
      {header && <BorderItem type="north">{header}</BorderItem>}
      <BorderItem type="center">
        {hero && <>{hero}</>}
        <Container>{children}</Container>
      </BorderItem>
      {footer && <BorderItem type="south">{footer}</BorderItem>}
    </BorderLayout>
  </BaseContainer>
);

Application.defaultProps = {
  tag: 'main',
};
