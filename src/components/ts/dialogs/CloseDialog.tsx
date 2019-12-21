import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { TextButton, TextButtonProps } from '../actions';

export interface CloseDialogProps extends TextButtonProps {}

export const CloseDialog: FunctionComponent<CloseDialogProps> = ({
  className,
  ...rest
}: CloseDialogProps): JSX.Element => <TextButton className={classnames('dialog-close', className)} {...rest} />;

CloseDialog.defaultProps = {
  icon: 'close-outline',
};
