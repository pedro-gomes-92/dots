import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import classnames from 'classnames';
import { BaseProps, Base } from '../../Base';
import { AreaLoader } from '../../loaders';

export interface ImageProps extends BaseProps {
  source: string;
  onLoad?: (event: SyntheticEvent) => void;
  size?: Size | AspectRatioSize;
}

export const Image: FunctionComponent<ImageProps> = ({
  source,
  className,
  attribute,
  onLoad,
  ...rest
}: ImageProps): JSX.Element => {
  const hasLoading = onLoad !== undefined;
  const [loading, setLoading] = useState(hasLoading);

  let attributes = {
    ...attribute,
    src: source,
  };

  if (hasLoading) {
    attributes = {
      ...attributes,
      onLoad: (event): void => {
        setLoading(false);
        onLoad(event);
      },
    };
  }

  return (
    <>
      {loading && <AreaLoader className="is-image" />}
      <Base className={classnames('image', className)} attribute={attributes} isVisible={!loading} {...rest} />
    </>
  );
};

Image.defaultProps = {
  tag: 'img',
};
