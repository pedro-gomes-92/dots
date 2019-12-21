import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { Children } from '../../typings';
import { ColumnLayout, ColumnItem } from '../../layouts';
import { BaseAction } from '../../actions/BaseAction';
import { CardAction } from './CardAction';

export interface CardFooterProps extends BaseProps {
  children: Children<typeof BaseAction>;
}

export const CardFooter: FunctionComponent<CardFooterProps> = ({
  className,
  children,
  ...rest
}: CardFooterProps): JSX.Element => (
  <Base className={classnames('card-footer', className)} {...rest}>
    <ColumnLayout align="end" isReverted gap={2}>
      {React.Children.map(
        children,
        (child): JSX.Element => (
          <ColumnItem size="auto">
            <CardAction>{child}</CardAction>
          </ColumnItem>
        ),
      )}
    </ColumnLayout>
  </Base>
);
