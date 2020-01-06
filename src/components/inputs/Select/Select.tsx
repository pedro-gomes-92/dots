import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Children } from '../../typings';
import { SelectItem } from './SelectItem';
import { Base } from '../../Base';
import { BaseInput, BaseInputProps } from '../BaseInput';

export interface SelectProps extends BaseInputProps {
  children: Children<typeof SelectItem>;
}

export const Select: FunctionComponent<SelectProps> = ({
  className,
  style,
  children,
  ...rest
}: SelectProps): JSX.Element => (
  <Base className={classnames('select', className)} style={style}>
    <BaseInput {...rest}>{children}</BaseInput>
  </Base>
);

Select.defaultProps = {
  tag: 'select',
};
