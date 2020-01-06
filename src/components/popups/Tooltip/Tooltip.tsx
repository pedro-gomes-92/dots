import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BasePopupProps, BasePopup } from '../BasePopup';
import { BasePopupContentProps, BasePopupContent } from '../BasePopupContent';

export interface TooltipProps extends Omit<BasePopupProps, 'children'>, BasePopupContentProps {
  coordinates?: { x: number; y: number };
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  coordinates,
  position,
  className,
  text,
  ...rest
}: TooltipProps): JSX.Element => {
  const coordinatesStyle = coordinates ? { top: coordinates.y, left: coordinates.x } : {};
  return (
    <BasePopup
      className={classnames('tooltip', className)}
      style={coordinatesStyle}
      position={{ isInner: false, ...position }}
      {...rest}
    >
      <BasePopupContent text={text} className="tooltip-content" />
    </BasePopup>
  );
};

Tooltip.defaultProps = {
  position: { x: 'right', y: 'middle' },
};
