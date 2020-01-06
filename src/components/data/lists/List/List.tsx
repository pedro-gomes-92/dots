import React, { FunctionComponent } from 'react';

import { BaseList, BaseListProps } from '../BaseList';

export interface ListProps extends BaseListProps {}

export const List: FunctionComponent<ListProps> = ({ children, ...rest }: ListProps): JSX.Element => (
  <BaseList {...rest}>{children}</BaseList>
);
