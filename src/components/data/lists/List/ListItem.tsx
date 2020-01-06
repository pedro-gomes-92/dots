import React, { FunctionComponent } from 'react';
import { BaseListItemProps, BaseListItem } from '../BaseListItem';

export interface ListItemProps extends BaseListItemProps {}

export const ListItem: FunctionComponent<ListItemProps> = ({ children, ...rest }: ListItemProps): JSX.Element => (
  <BaseListItem {...rest}>{children}</BaseListItem>
);
