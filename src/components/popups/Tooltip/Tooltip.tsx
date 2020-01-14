import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BasePopupContainerProps, BasePopupContainer } from '../BasePopupContainer';
import { BasePopupProps, BasePopup } from '../BasePopup';
import { Text } from '../../text';

export interface TooltipProps extends Omit<BasePopupContainerProps, 'children'>, BasePopupProps {
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
    <BasePopupContainer
      className={classnames('tooltip', className)}
      style={coordinatesStyle}
      position={{ isInner: false, ...position }}
      {...rest}
    >
      <BasePopup className="tooltip-content">
        <Text text={text} />
      </BasePopup>
    </BasePopupContainer>
  );
};

Tooltip.defaultProps = {
  position: { x: 'right', y: 'middle' },
};
