import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseInputProps, BaseInput } from '../BaseInput';

export interface DateInputProps extends Omit<BaseInputProps, 'value'> {
  isRange?: boolean;
  value?: FormDateValue;
}

export const DateInput: FunctionComponent<DateInputProps> = ({
  className,
  isRange,
  ...rest
}: DateInputProps): JSX.Element => {
  return <BaseInput type="date" className={classnames('is-date', className)} {...rest} />;
};

DateInput.defaultProps = {
  isRange: false,
};
