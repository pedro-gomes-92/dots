import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseTextProps, BaseText } from '../BaseText';

export interface ParagraphProps extends BaseTextProps {}

export const Paragraph: FunctionComponent<ParagraphProps> = ({ className, ...rest }: ParagraphProps): JSX.Element => (
  <BaseText className={classnames('paragraph', className)} {...rest} />
);

Paragraph.defaultProps = {
  tag: 'p',
};
