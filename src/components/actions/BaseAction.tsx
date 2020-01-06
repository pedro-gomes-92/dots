import React, { FunctionComponent } from 'react';
import { Base, BaseProps } from '../Base';

export interface BaseActionProps extends BaseProps {}

export const BaseAction: FunctionComponent<BaseActionProps> = ({ children, ...rest }: BaseActionProps): JSX.Element => (
  <Base {...rest}>{children}</Base>
);
