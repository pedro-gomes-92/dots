import React, { FunctionComponent } from 'react';
import { BaseProps, Base } from '../Base';

export interface BaseDataProps extends BaseProps {}

export const BaseData: FunctionComponent<BaseDataProps> = ({ ...rest }: BaseDataProps): JSX.Element => (
  <Base {...rest} />
);
