import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Image } from '../../../miscellaneous';
import { BaseLinkProps, BaseLink } from '../BaseLink';

export interface ImageLinkProps extends Omit<BaseLinkProps, 'children'> {
  source: string;
}

export const ImageLink: FunctionComponent<ImageLinkProps> = ({
  className,
  source,
  ...rest
}: ImageLinkProps): JSX.Element => {
  return (
    <BaseLink className={classnames('image-link', className)} {...rest}>
      <Image source={source} />
    </BaseLink>
  );
};
