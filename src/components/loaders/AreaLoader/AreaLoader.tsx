import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { BaseLoader, BaseLoaderProps } from '../BaseLoader';
import { Text } from '../../text';
import { CenterLayout, StackLayout, StackItem } from '../../layouts';
import { IconLoader } from '../IconLoader';
import { Overlay, OverlayProps } from '../../miscellaneous';

export interface AreaLoaderProps extends BaseLoaderProps {
  text?: string;
  hasOverlay?: boolean;
  onOutsideClick?: OverlayProps['onClick'];
}

export const AreaLoader: FunctionComponent<AreaLoaderProps> = ({
  className,
  loader,
  isVisible,
  hasOverlay,
  onOutsideClick,
  ...rest
}: AreaLoaderProps): JSX.Element => {
  const [visible, setVisible] = useState(isVisible);

  let handleOutsideClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  if (hasOverlay && onOutsideClick) {
    handleOutsideClick = (event): void => {
      setVisible(false);
      onOutsideClick(event);
    };
  }

  const loaderComponent = (
    <CenterLayout>
      {hasOverlay && <Overlay onClick={handleOutsideClick} />}
      {loader}
    </CenterLayout>
  );

  return (
    <BaseLoader
      className={classnames('is-area', { 'has-overlay': hasOverlay }, className)}
      isVisible={visible}
      loader={loaderComponent}
      {...rest}
    ></BaseLoader>
  );
};

AreaLoader.defaultProps = {
  hasOverlay: false,
  loader: (
    <StackLayout>
      <StackItem alignText="center">
        <IconLoader />
      </StackItem>
      <StackItem>
        <Text text="Loading" />
      </StackItem>
    </StackLayout>
  ),
};
