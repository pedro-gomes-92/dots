import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Title } from '../../text';
import { BaseProps } from '../../Base';
import { Base } from '../../Base';
import { ColumnLayout, ColumnItem } from '../../layouts';
import { Children } from '../../typings';

export interface CardHeaderProps extends BaseProps {
  title?: string;
  actions?: Children<typeof Base>;
}

export const CardHeader: FunctionComponent<CardHeaderProps> = ({
  className,
  title,
  actions,
  ...rest
}: CardHeaderProps): JSX.Element => (
  <Base className={classnames('card-header', className)} {...rest}>
    <ColumnLayout isMobileActive gap={2}>
      <ColumnItem>
        <Title size={3} text={title} />
      </ColumnItem>
      <>
        {React.Children.map(
          actions,
          (action): JSX.Element => (
            <ColumnItem size="auto">{action}</ColumnItem>
          ),
        )}
      </>
    </ColumnLayout>
  </Base>
);

CardHeader.defaultProps = {
  actions: [],
};
