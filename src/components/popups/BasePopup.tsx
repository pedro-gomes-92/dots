import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Box, BoxProps } from '../containers';

export interface BasePopupProps extends BoxProps {}

export const BasePopup: FunctionComponent<BasePopupProps> = ({
  className,
  children,
  ...rest
}: BasePopupProps): JSX.Element => (
  <Box className={classnames('popup', 'notification', className)} {...rest}>
    {children}
  </Box>
);
