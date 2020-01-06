import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { BaseTextListItem, BaseTextListItemProps } from '../BaseTextListItem';

export interface CalculationListItemProps extends BaseTextListItemProps {}

export const CalculationListItem: FunctionComponent<CalculationListItemProps> = ({
  className,
  ...rest
}: CalculationListItemProps): JSX.Element => (
  <BaseTextListItem className={classnames('list-calculation-item', className)} {...rest} />
);
