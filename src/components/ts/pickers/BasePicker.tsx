import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { BaseProps, Base } from '../Base';
import { DateFieldProps } from '../fields';

export interface BasePickerProps extends BaseProps {
  value?: FormValue;
  setValue?: (value: FormValue) => void;
  size?: DateFieldProps['size'];
}

export const BasePicker: FunctionComponent<BasePickerProps> = ({
  className,
  ...rest
}: BasePickerProps): JSX.Element => <Base className={classnames('picker', className)} {...rest} />;
