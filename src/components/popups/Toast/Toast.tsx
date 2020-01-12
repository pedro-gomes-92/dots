import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BasePopupContent, BasePopupContentProps } from '../BasePopupContent';
import { Text, TextProps } from '../../text';
import { IconProps, Icon, Close, CloseProps } from '../../miscellaneous';
import { ColumnLayout, ColumnItem } from '../../layouts';

export interface ToastProps extends Omit<BasePopupContentProps, 'children'> {
  text: TextProps['text'];
  icon?: IconProps['name'];
  onClose?: CloseProps['onClick'];
  state?: State;
  size?: Size;
}

export const Toast: FunctionComponent<ToastProps> = ({
  className,
  text,
  icon,
  onClose,
  state,
  size,
  ...rest
}: ToastProps): JSX.Element => {
  let iconName = icon;

  if (!iconName) {
    switch (state) {
      case 'danger':
        iconName = 'close-circle-outline';
      case 'info':
        iconName = 'info-outline';
      case 'success':
        iconName = 'checkmark-circle-2-outline';
      case 'warning':
        iconName = 'alert-circle-outline';
    }
  }

  return (
    <BasePopupContent className={classnames('toast', className)} size={size} {...rest}>
      <ColumnLayout align="center" gap={1} isMobileActive>
        {iconName && (
          <ColumnItem size="auto">
            <Icon name={iconName} size={size} />
          </ColumnItem>
        )}
        <ColumnItem className="has-alignment-horizontal-start">
          <Text text={text} size={size} />
        </ColumnItem>
        {onClose && (
          <ColumnItem size="auto">
            <Close onClick={onClose} size={size} />
          </ColumnItem>
        )}
      </ColumnLayout>
    </BasePopupContent>
  );
};
