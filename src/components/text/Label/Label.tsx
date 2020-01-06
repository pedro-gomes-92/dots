import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseTextProps, BaseText } from '../BaseText';

export interface LabelProps extends BaseTextProps {}

export const Label: FunctionComponent<LabelProps> = ({ className, ...rest }: LabelProps): JSX.Element => (
  <BaseText className={classnames('label', className)} {...rest} />
);

Label.defaultProps = {
  tag: 'label',
};
