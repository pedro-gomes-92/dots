import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseInput, BaseInputProps } from '../inputs/BaseInput';
import { Label, Paragraph } from '../text';
import { Control } from './Control';
import { Base, BaseProps } from '../Base';
import { Children } from '../typings';

interface BaseFieldProps extends BaseProps {
  children: Children<typeof BaseInput>;
  label?: string;
  hint?: string;
}

export interface BaseFieldTypeProps extends Omit<BaseFieldProps, 'children'> {
  size?: BaseInputProps['size'];
  model?: BaseInputProps['model'];
  placeHolder?: BaseInputProps['placeHolder'];
  isReadOnly?: BaseInputProps['isReadOnly'];
  value?: BaseInputProps['value'];
  onChange?: BaseInputProps['onChange'];
}

export const BaseField: FunctionComponent<BaseFieldProps> = ({
  label,
  className,
  hint,
  children,
  ...rest
}: BaseFieldProps): JSX.Element => (
  <Base className={classnames('field', className)} {...rest}>
    {label && (
      <Base className="field-label">
        <Label text={label} />
      </Base>
    )}
    <Base className="field-body">
      <Control>{children}</Control>
    </Base>
    {hint && <Paragraph className="help" text={hint} />}
  </Base>
);
