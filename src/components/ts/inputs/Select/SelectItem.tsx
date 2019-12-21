import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';

export interface SelectItemProps extends BaseProps {
  text: string;
  value?: FormValue;
}

export const SelectItem: FunctionComponent<SelectItemProps> = ({
  className,
  text,
  attribute,
  value,
  ...rest
}: SelectItemProps): JSX.Element => (
  <Base className={classnames('select-option', className)} attribute={{ ...attribute, value }} {...rest}>
    {text}
  </Base>
);

SelectItem.defaultProps = {
  tag: 'option',
};
