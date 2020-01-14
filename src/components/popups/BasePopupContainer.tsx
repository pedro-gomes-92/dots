import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Children } from '../typings';
import { BaseContainerProps, BaseContainer } from '../containers/BaseContainer';
import { BasePopup } from './BasePopup';

export interface BasePopupContainerProps extends BaseContainerProps {
  position?: PositionXY;
  children: Children<typeof BasePopup>;
}

export const BasePopupContainer: FunctionComponent<BasePopupContainerProps> = ({
  className,
  position,
  children,
  ...rest
}: BasePopupContainerProps): JSX.Element => (
  <BaseContainer
    className={classnames(
      'popup-container',
      position.isInner ? 'is-inner-position' : '',
      `has-position-${position.x}-${position.y}`,
      className,
    )}
    {...rest}
  >
    {children}
  </BaseContainer>
);

BasePopupContainer.defaultProps = {
  position: { x: 'center', y: 'top' },
};
