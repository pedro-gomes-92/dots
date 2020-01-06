import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Box, BoxProps } from '../containers';
import { Text } from '../text';

export interface BasePopupContentProps extends Omit<BoxProps, 'children'> {
  text: string;
}

export const BasePopupContent: FunctionComponent<BasePopupContentProps> = ({
  className,
  text,
  ...rest
}: BasePopupContentProps): JSX.Element => (
  <Box className={classnames('popup-content', 'notification', className)} {...rest}>
    <Text text={text} />
  </Box>
);
