import React, { FunctionComponent, FormEvent } from 'react';
import classnames from 'classnames';
import { Children } from '../../typings';
import { Base } from '../../Base';
import { BaseDataProps, BaseData } from '../BaseData';

export interface FormProps extends BaseDataProps {
  children: Children<typeof Base>;
  onSubmit?: (event: FormEvent) => void;
}

export const Form: FunctionComponent<FormProps> = ({
  children,
  className,
  attribute,
  onSubmit,
  ...rest
}: FormProps): JSX.Element => {
  return (
    <BaseData className={classnames('form', className)} attribute={{ ...attribute, onSubmit }} {...rest}>
      {children}
    </BaseData>
  );
};

Form.defaultProps = {
  tag: 'form',
};
