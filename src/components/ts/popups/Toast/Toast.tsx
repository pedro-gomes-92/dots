import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BasePopupContent, BasePopupContentProps } from '../BasePopupContent';

export interface ToastProps extends BasePopupContentProps {
  state?: State;
}

export const Toast: FunctionComponent<ToastProps> = ({ className, state, ...rest }: ToastProps): JSX.Element => {
  return <BasePopupContent className={classnames('toast', state ? `is-${state}` : '', className)} {...rest} />;
};
