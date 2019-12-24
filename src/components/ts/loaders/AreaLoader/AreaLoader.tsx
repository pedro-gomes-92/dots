import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { BaseLoader, BaseLoaderTypeProps } from '../BaseLoader';
import { Text } from '../../text';
import { CenterLayout, StackLayout, StackItem } from '../../layouts';
import { IconLoader } from '../IconLoader';
import { Overlay, OverlayProps } from '../../miscellaneous';

export interface AreaLoaderProps extends BaseLoaderTypeProps {
  text?: string;
  hasOverlay?: boolean;
  onOutsideClick?: OverlayProps['onClick'];
}

export const AreaLoader: FunctionComponent<AreaLoaderProps> = ({
  className,
  sizeIcon,
  icon,
  isVisible,
  hasOverlay,
  onOutsideClick,
  text,
  ...rest
}: AreaLoaderProps): JSX.Element => {
  const [visible, setVisible] = useState(isVisible);

  let handleOutsideClick;
  if (hasOverlay) {
    handleOutsideClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      setVisible(false);
      onOutsideClick(event);
    };
  }

  return (
    <BaseLoader
      className={classnames('is-area', { 'has-overlay': hasOverlay }, className)}
      isVisible={visible}
      {...rest}
    >
      <CenterLayout>
        {hasOverlay && <Overlay onClick={handleOutsideClick} />}
        <StackLayout>
          <StackItem alignText="center">
            <IconLoader name={icon} size={sizeIcon} />
          </StackItem>
          <StackItem>
            <Text text={text} />
          </StackItem>
        </StackLayout>
      </CenterLayout>
    </BaseLoader>
  );
};

AreaLoader.defaultProps = {
  text: 'Loading',
  hasOverlay: false,
  onOutsideClick: (): void => {},
};
