import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import { BaseProps, Base } from '../Base';
import { OverlayProps, Overlay, Close } from '../miscellaneous';
import { CenterLayout } from '../layouts';

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
  ...rest
}: BaseDialogProps): JSX.Element => {
  const [visible, setVisible] = useState(isVisible);

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
    <Base className={classnames('dialog', className)} isVisible={visible} {...rest}>
      <CenterLayout>
        <Overlay onClick={handleOutsideClick} />
        {children}
      </CenterLayout>
      {onClose && <Close size="large" onClick={handleClose} />}
    </Base>
  );
};

BaseDialog.defaultProps = {
  onClose: (): void => {},
  isVisible: true,
};
