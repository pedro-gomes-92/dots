import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Image, ImageProps } from '../../../miscellaneous';
import { BaseLinkProps, BaseLink } from '../BaseLink';

export interface ImageLinkProps extends Omit<BaseLinkProps, 'children'> {
  source: ImageProps['source'];
  size?: ImageProps['size'];
}

export const ImageLink: FunctionComponent<ImageLinkProps> = ({
  className,
  source,
  size,
  ...rest
}: ImageLinkProps): JSX.Element => {
  return (
    <BaseLink className={classnames('image-link', className)} {...rest}>
      <Image source={source} size={size} />
    </BaseLink>
  );
};
