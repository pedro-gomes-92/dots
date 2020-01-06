import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { BaseProps } from '../../Base';
import { Tooltip } from '../../popups';
import { Icon, IconProps } from '../Icon';

export interface HelperProps extends BaseProps {
  text: string;
  icon?: IconProps['name'];
  size?: IconProps['size'];
}

export const Helper: FunctionComponent<HelperProps> = ({
  text,
  icon,
  className,
  attribute,
  ...rest
}: HelperProps): JSX.Element => {
  const [tooltipVisibility, setTooltipVisibility] = useState(null);
  const onMouseOver = (): void => {
    setTooltipVisibility(true);
  };

  const onMouseLeave = (): void => {
    setTooltipVisibility(false);
  };

  return (
    <Icon
      name={icon}
      className={classnames('helper', 'is-relative', className)}
      attribute={{ onMouseOver, onMouseLeave, ...attribute }}
      {...rest}
    >
      <Tooltip position={{ x: 'center', y: 'top' }} text={text} isVisible={tooltipVisibility} />
    </Icon>
  );
};

Helper.defaultProps = {
  icon: 'helper',
};
