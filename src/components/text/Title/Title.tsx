import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseTextProps, BaseText } from '../BaseText';

export interface TitleProps extends BaseTextProps {}

export const Title: FunctionComponent<TitleProps> = ({ size, className, ...rest }: TitleProps): JSX.Element => {
  return <BaseText className={classnames('title', className)} tag={`h${size}`} size={size} {...rest} />;
};

Title.defaultProps = {
  size: 1,
};
