import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps } from '../Base';
import { Base } from '../Base';

export interface BaseTextProps extends BaseProps {
  text: string;
  isBold?: boolean;
  size?: FontSize | Size;
}

export const BaseText: FunctionComponent<BaseTextProps> = ({
  className,
  text,
  isBold,
  ...rest
}: BaseTextProps): JSX.Element => (
  <Base className={classnames('text', { 'is-bold': isBold }, className)} {...rest}>
    {text}
  </Base>
);

BaseText.defaultProps = {
  isBold: false,
};
