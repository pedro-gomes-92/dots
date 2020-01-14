import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Children } from '../../typings';
import { StackLayout, StackItem } from '../../layouts';
import { BasePopupContainerProps, BasePopupContainer } from '../BasePopupContainer';
import { Toast } from './Toast';

export interface ToastContainerProps extends BasePopupContainerProps {
  children: Children<typeof Toast>;
}

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  className,
  position,
  children,
  ...rest
}: ToastContainerProps): JSX.Element => {
  return (
    <BasePopupContainer
      className={classnames('toast-container', className)}
      position={{ isInner: true, ...position }}
      {...rest}
    >
      <StackLayout gap={1}>
        {React.Children.map(
          children,
          (child): JSX.Element => {
            return <StackItem>{child}</StackItem>;
          },
        )}
      </StackLayout>
    </BasePopupContainer>
  );
};

ToastContainer.defaultProps = {
  position: { x: 'center', y: 'top' },
};
