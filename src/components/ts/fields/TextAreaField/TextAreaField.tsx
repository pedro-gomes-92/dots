import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseFieldTypeProps as BaseFieldProps, BaseField } from '../BaseField';
import { TextArea, TextAreaProps } from '../../inputs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextAreaFieldProps extends BaseFieldProps {
  hasFixedSize?: TextAreaProps['hasFixedSize'];
  rows?: TextAreaProps['rows'];
}

export const TextAreaField: FunctionComponent<TextAreaFieldProps> = ({
  model,
  placeHolder,
  value,
  isReadOnly,
  onChange,
  className,
  size,
  rows,
  hasFixedSize,
  ...rest
}: TextAreaFieldProps): JSX.Element => (
  <BaseField className={classnames('is-textarea', className)} {...rest}>
    <TextArea
      model={model}
      value={value}
      onChange={onChange}
      isReadOnly={isReadOnly}
      size={size}
      rows={rows}
      hasFixedSize={hasFixedSize}
      placeHolder={placeHolder}
    />
  </BaseField>
);
