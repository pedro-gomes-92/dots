import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseActionProps, BaseAction } from '../BaseAction';

export interface BaseLinkProps extends BaseActionProps {
  to: (() => void) | string;
  isNewTab?: boolean;
}

export const BaseLink: FunctionComponent<BaseLinkProps> = ({
  className,
  to,
  isNewTab,
  children,
  attribute,
  ...rest
}: BaseLinkProps): JSX.Element => {
  const attrTo: string = typeof to === 'string' ? 'href' : 'onClick';
  const linkAttrs = { target: isNewTab ? '_blank' : '_self', ...attribute };
  linkAttrs[attrTo] = to;

  return (
    <BaseAction className={classnames('link', className)} attribute={linkAttrs} {...rest}>
      {children}
    </BaseAction>
  );
};

BaseLink.defaultProps = {
  tag: 'a',
  isNewTab: false,
};
