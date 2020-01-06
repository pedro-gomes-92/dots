import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseInputProps, BaseInput } from '../BaseInput';

export interface TextAreaProps extends BaseInputProps {
  hasFixedSize?: boolean;
  rows?: number;
}

export const TextArea: FunctionComponent<TextAreaProps> = ({
  className,
  hasFixedSize,
  rows,
  attribute,
  ...rest
}: TextAreaProps): JSX.Element => {
  let attributes = { ...attribute };
  if (rows) {
    attributes = { rows, ...attributes };
  }

  return (
    <BaseInput
      className={classnames('textarea', { 'has-fixed-size': hasFixedSize }, className)}
      attribute={attributes}
      {...rest}
    />
  );
};

TextArea.defaultProps = {
  tag: 'textarea',
  hasFixedSize: false,
};
