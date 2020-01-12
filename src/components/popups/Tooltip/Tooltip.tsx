import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BasePopupProps, BasePopup } from '../BasePopup';
import { BasePopupContentProps, BasePopupContent } from '../BasePopupContent';
import { Text } from '../../text';

export interface TooltipProps extends Omit<BasePopupProps, 'children'>, BasePopupContentProps {
  text: string;
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
      <BasePopupContent className="tooltip-content">
        <Text text={text} />
      </BasePopupContent>
    </BasePopup>
  );
};

Tooltip.defaultProps = {
  position: { x: 'right', y: 'middle' },
};
