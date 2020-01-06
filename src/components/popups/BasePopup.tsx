import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Children } from '../typings';
import { BaseContainerProps, BaseContainer } from '../containers/BaseContainer';
import { BasePopupContent } from './BasePopupContent';

export interface BasePopupProps extends BaseContainerProps {
  position?: PositionXY;
  children: Children<typeof BasePopupContent>;
}

export const BasePopup: FunctionComponent<BasePopupProps> = ({
  className,
  position,
  children,
  ...rest
}: BasePopupProps): JSX.Element => (
  <BaseContainer
    className={classnames(
      'popup',
      position.isInner ? 'is-inner-position' : '',
      `has-position-${position.x}-${position.y}`,
      className,
    )}
    {...rest}
  >
    {children}
  </BaseContainer>
);

BasePopup.defaultProps = {
  position: { x: 'center', y: 'top' },
};
