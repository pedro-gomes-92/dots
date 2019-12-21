import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { BaseTextList, BaseTextListProps } from '../BaseTextList';
import { TextListItem } from './TextListItem';
import { Children } from '../../../../typings';
import { ListDivider } from '../ListDivider';

export interface TextListProps extends BaseTextListProps {
  children: Children<typeof TextListItem | typeof ListDivider>;
}

export const TextList: FunctionComponent<TextListProps> = ({
  children,
  className,
  ...rest
}: TextListProps): JSX.Element => (
  <BaseTextList className={classnames('list-text', className)} {...rest}>
    {children}
  </BaseTextList>
);
