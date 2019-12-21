import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';
import { BorderLayout, BorderItem } from '../../layouts';
import { CardHeaderProps } from './CardHeader';
import { CardFooterProps } from './CardFooter';
import { CardContent } from './CardContent';

export interface CardProps extends BaseContainerProps {
  header?: ReactElement<CardHeaderProps>;
  footer?: ReactElement<CardFooterProps>;
}

export const Card: FunctionComponent<CardProps> = ({
  className,
  header,
  footer,
  children,
  ...rest
}: CardProps): JSX.Element => (
  <BaseContainer className={classnames('card', className)} {...rest}>
    <BorderLayout>
      {header && <BorderItem type="north">{header}</BorderItem>}
      <BorderItem type="center">
        <CardContent>{children}</CardContent>
      </BorderItem>
      {footer && <BorderItem type="south">{footer}</BorderItem>}
    </BorderLayout>
  </BaseContainer>
);
