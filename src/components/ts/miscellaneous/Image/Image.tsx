import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';

export interface ImageProps extends BaseProps {
  source: string;
  size?: Size | AspectRatioSize;
}

export const Image: FunctionComponent<ImageProps> = ({
  source,
  className,
  attribute,
  ...rest
}: ImageProps): JSX.Element => (
  <Base className={classnames('image', className)} attribute={{ ...attribute, src: source }} {...rest} />
);

Image.defaultProps = {
  tag: 'img',
  size: 'normal',
};
