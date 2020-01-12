import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Close } from '../miscellaneous';
import { CloseProps } from '../miscellaneous/Close/Close';

export interface CloseDialogProps extends CloseProps {}

export const CloseDialog: FunctionComponent<CloseDialogProps> = ({
  className,
  ...rest
}: CloseDialogProps): JSX.Element => <Close className={classnames('dialog-close', className)} {...rest} />;
