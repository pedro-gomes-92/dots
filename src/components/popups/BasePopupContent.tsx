import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Box, BoxProps } from '../containers';

export interface BasePopupContentProps extends BoxProps {}

export const BasePopupContent: FunctionComponent<BasePopupContentProps> = ({
  className,
  children,
  ...rest
}: BasePopupContentProps): JSX.Element => (
  <Box className={classnames('popup-content', 'notification', className)} {...rest}>
    {children}
  </Box>
);
