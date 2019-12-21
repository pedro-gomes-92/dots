import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps } from '../Base';
import { Base } from '../Base';

export interface BaseTextProps extends BaseProps {
  text: string;
  isBold?: boolean;
  size?: FontSize | Size;
  align?: AlignXY;
}

export const BaseText: FunctionComponent<BaseTextProps> = ({
  className,
  text,
  align,
  isBold,
  ...rest
}: BaseTextProps): JSX.Element => (
  <Base
    className={classnames(
      'text',
      align && align.horizontal ? `has-alignment-horizontal-${align.horizontal}` : '',
      align && align.vertical ? `has-alignment-vertical-${align.vertical}` : '',
      { 'is-bold': isBold },
      className,
    )}
    {...rest}
  >
    {text}
  </Base>
);

BaseText.defaultProps = {
  isBold: false,
};
