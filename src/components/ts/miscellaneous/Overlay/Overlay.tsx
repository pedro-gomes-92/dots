import React, { FunctionComponent, MouseEvent as ReactMouseEvent } from 'react';
import classnames from 'classnames';
import { Base, BaseProps } from '../../Base';

export interface OverlayProps extends Omit<BaseProps, 'children'> {
  onClick?: (event: ReactMouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Overlay: FunctionComponent<OverlayProps> = ({
  className,
  attribute,
  onClick,
  ...rest
}: OverlayProps): JSX.Element => {
  let attributes = { ...attribute };
  if (onClick) {
    attributes = { onClick, ...attributes };
  }

  return <Base className={classnames('overlay', className)} attribute={attributes} {...rest} />;
};
