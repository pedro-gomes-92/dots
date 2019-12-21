import React, { FunctionComponent } from 'react';
import { BaseTextProps, BaseText } from '../BaseText';

export interface TextProps extends BaseTextProps {}

export const Text: FunctionComponent<TextProps> = ({ ...rest }: TextProps): JSX.Element => <BaseText {...rest} />;

Text.defaultProps = {
  tag: 'span',
};
