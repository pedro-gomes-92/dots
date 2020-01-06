import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseTextProps, BaseText } from '../BaseText';

export interface TagProps extends BaseTextProps {
  size?: Size;
}

export const Tag: FunctionComponent<TagProps> = ({ className, ...rest }: TagProps): JSX.Element => (
  <BaseText className={classnames('tag', className)} {...rest} />
);
