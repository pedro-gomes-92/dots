import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { TextButton, TextButtonProps } from '../../actions';

export interface CloseProps extends TextButtonProps {}

export const Close: FunctionComponent<CloseProps> = ({ className, ...rest }: CloseProps): JSX.Element => (
  <TextButton className={classnames('close', className)} {...rest} />
);

Close.defaultProps = {
  icon: 'close',
};
