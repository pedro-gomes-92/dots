import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Children } from '../../typings';
import { StackLayout, StackItem } from '../../layouts';
import { BasePopupProps, BasePopup } from '../BasePopup';
import { Toast } from './Toast';

export interface ToastContainerProps extends BasePopupProps {
  children: Children<typeof Toast>;
}

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  className,
  position,
  children,
  ...rest
}: ToastContainerProps): JSX.Element => {
  return (
    <BasePopup className={classnames('toast-container', className)} position={{ isInner: true, ...position }} {...rest}>
      <StackLayout gap={1}>
        {React.Children.map(
          children,
          ({ props }): JSX.Element => {
            return (
              <StackItem>
                <Toast {...props} />
              </StackItem>
            );
          },
        )}
      </StackLayout>
    </BasePopup>
  );
};

ToastContainer.defaultProps = {
  position: { x: 'center', y: 'top' },
};
