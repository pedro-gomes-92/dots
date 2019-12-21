import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseLinkProps, BaseLink } from '../BaseLink';
import { Text } from '../../../text';
import { Icon } from '../../../miscellaneous';

export interface LinkProps extends Omit<BaseLinkProps, 'children'> {
  text?: string;
  icon?: string;
  iconAlign?: IconAlign;
  align?: Align;
  size?: FontSize;
}

export const Link: FunctionComponent<LinkProps> = ({
  text,
  icon,
  iconAlign,
  align,
  className,
  size,
  ...rest
}: LinkProps): JSX.Element => {
  const textComponent = text ? <Text text={text} size={size} /> : <></>;
  let content = textComponent;
  if (icon) {
    const iconComponent = <Icon name={icon} size={size} />;
    content = (
      <>
        {iconComponent}
        {textComponent}
      </>
    );

    if (iconAlign === 'end') {
      content = (
        <>
          {textComponent}
          {iconComponent}
        </>
      );
    }
  }
  return (
    <BaseLink className={classnames(`has-alignment-horizontal-${align}`, className)} {...rest}>
      {content}
    </BaseLink>
  );
};

Link.defaultProps = {
  iconAlign: 'start',
  align: 'start',
};
