import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseDialogProps, BaseDialog } from '../BaseDialog';
import { Card, CardProps } from '../../containers';
import { ModalFooterProps, ModalFooter } from './ModalFooter';
import { ModalHeaderProps, ModalHeader } from './ModalHeader';

export interface ModalProps extends BaseDialogProps {
  title?: ModalHeaderProps['title'];
  actions?: ModalFooterProps['children'];
  children: CardProps['children'];
}

export const Modal: FunctionComponent<ModalProps> = ({
  className,
  title,
  actions,
  children,
  onClose,
  ...rest
}: ModalProps): JSX.Element => {
  const header = title !== '' || onClose ? <ModalHeader onClose={onClose} title={title} /> : undefined;
  const footer = actions ? <ModalFooter>{actions}</ModalFooter> : undefined;

  return (
    <BaseDialog
      className={classnames('modal', 'is-active', className)}
      onOutsideClick={onClose}
      onClose={null}
      {...rest}
    >
      <Card className="modal-card" header={header} footer={footer}>
        {children}
      </Card>
    </BaseDialog>
  );
};

Modal.defaultProps = {
  title: '',
};
