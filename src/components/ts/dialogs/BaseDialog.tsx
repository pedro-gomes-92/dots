import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import { BaseProps, Base } from '../Base';
import { OverlayProps, Overlay } from '../miscellaneous';
import { CenterLayout } from '../layouts';
import { CloseDialog } from './CloseDialog';

export interface BaseDialogProps extends BaseProps {
  onClose?: OverlayProps['onClick'];
  onOutsideClick?: OverlayProps['onClick'];
}

export const BaseDialog: FunctionComponent<BaseDialogProps> = ({
  className,
  children,
  onClose,
  onOutsideClick,
  isVisible,
  animations,
  ...rest
}: BaseDialogProps): JSX.Element => {
  const [visible, setVisible] = useState(isVisible);

  const [showAnimation, hideAnimation] = animations;

  let handleClose;
  if (onClose) {
    handleClose = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      setVisible(false);
      onClose(event);
    };
  }

  let handleOutsideClick = handleClose;
  if (onOutsideClick) {
    handleOutsideClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      setVisible(false);
      onOutsideClick(event);
    };
  }

  return (
    <Base
      className={classnames('dialog', className)}
      animations={visible ? [showAnimation] : [hideAnimation]}
      {...rest}
    >
      <CenterLayout>
        <Overlay onClick={handleOutsideClick} />
        {children}
      </CenterLayout>
      {onClose && <CloseDialog size="large" onClick={handleClose} />}
    </Base>
  );
};

BaseDialog.defaultProps = {
  onClose: (): void => {},
  isVisible: true,
  animations: [{ name: 'fadeIn', duration: 'fast' }, { name: 'fadeOut', duration: 'fast' }],
};
