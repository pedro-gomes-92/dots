import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Divider } from '../../../miscellaneous';
import { Base, BaseProps } from '../../../Base';

export interface ListDividerProps extends Omit<BaseProps, 'children'> {}

export const ListDivider: FunctionComponent<ListDividerProps> = ({
  className,
  ...rest
}: ListDividerProps): JSX.Element => (
  <Base className={classnames('list-divider', className)} {...rest}>
    <Divider />
  </Base>
);

ListDivider.defaultProps = {
  tag: 'li',
};
