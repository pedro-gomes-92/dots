import React, { FunctionComponent } from 'react';

import { Children } from '../../../typings';
import { BaseList, BaseListProps } from '../BaseList';
import { ListDivider } from './ListDivider';
import { BaseTextListItem } from './BaseTextListItem';
import { TextProps } from '../../../text';

export interface BaseTextListProps extends BaseListProps {
  children: Children<typeof BaseTextListItem | typeof ListDivider>;
  size?: TextProps['size'];
}

export const BaseTextList: FunctionComponent<BaseTextListProps> = ({
  children,
  ...rest
}: BaseTextListProps): JSX.Element => <BaseList {...rest}>{children}</BaseList>;
