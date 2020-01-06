import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Text } from '../../text';
import { BaseActionProps, BaseAction } from '../BaseAction';
import { Icon } from '../../miscellaneous';

export interface BaseButtonProps extends BaseActionProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  type?: string;
  text?: string;
  icon?: string;
  size?: Size;
}

export const BaseButton: FunctionComponent<BaseButtonProps> = ({
  className,
  type,
  size,
  icon,
  onClick,
  text,
  ...rest
}: BaseButtonProps): JSX.Element => (
  <BaseAction size={size} className={classnames('button', className)} attribute={{ onClick, type }} {...rest}>
    {icon && <Icon name={icon} size={size} />}
    {text && <Text text={text} size={size} />}
  </BaseAction>
);

BaseButton.defaultProps = {
  tag: 'button',
};
