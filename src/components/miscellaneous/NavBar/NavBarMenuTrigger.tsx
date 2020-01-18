import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { TextButton, TextButtonProps } from '../../actions';

export interface NavBarMenuTriggerProps extends Omit<TextButtonProps, 'onClick'> {
  iconActive?: TextButtonProps['icon'];
  onClick?: TextButtonProps['onClick'];
}

export const NavBarMenuTrigger: FunctionComponent<NavBarMenuTriggerProps> = ({
  className,
  icon,
  iconActive,
  onClick,
  ...rest
}: NavBarMenuTriggerProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TextButton
      className={classnames('navbar-menu-trigger', className)}
      icon={isActive ? iconActive : icon}
      onClick={(event): void => {
        setIsActive(!isActive);
        onClick(event);
      }}
      {...rest}
    />
  );
};

NavBarMenuTrigger.defaultProps = {
  iconActive: 'close',
  icon: 'menu',
  onClick: (): void => {},
};
