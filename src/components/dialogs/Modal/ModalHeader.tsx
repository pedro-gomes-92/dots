import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { CardHeader, CardHeaderProps } from '../../containers';
import { Close } from '../../miscellaneous';
import { BaseDialogProps } from '../BaseDialog';

export interface ModalHeaderProps extends Omit<CardHeaderProps, 'actions'> {
  onClose?: BaseDialogProps['onClose'];
}

export const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
  className,
  onClose,
  ...rest
}: ModalHeaderProps): JSX.Element => {
  const actions = [];
  if (onClose) {
    actions.push(<Close key="key-close-dialog" onClick={onClose} />);
  }

  return <CardHeader actions={<>{actions}</>} className={classnames('modal-header', className)} {...rest} />;
};

ModalHeader.defaultProps = {
  onClose: (): void => {},
};
