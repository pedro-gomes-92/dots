import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { BaseTextListItem, BaseTextListItemProps } from '../BaseTextListItem';

export interface TextListItemProps extends BaseTextListItemProps {}

export const TextListItem: FunctionComponent<TextListItemProps> = ({
  className,
  ...rest
}: TextListItemProps): JSX.Element => (
  <BaseTextListItem className={classnames('list-text-item', className)} {...rest} />
);
