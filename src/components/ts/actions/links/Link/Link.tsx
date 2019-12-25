import React, { FunctionComponent } from 'react';
import { BaseLinkProps, BaseLink } from '../BaseLink';
import { Text } from '../../../text';
import { Icon } from '../../../miscellaneous';

export interface LinkProps extends Omit<BaseLinkProps, 'children'> {
  text?: string;
  icon?: string;
  iconAlign?: IconAlign;
  size?: FontSize;
}

export const Link: FunctionComponent<LinkProps> = ({
  text,
  icon,
  iconAlign,
  size,
  color,
  ...rest
}: LinkProps): JSX.Element => {
  const textComponent = text ? <Text text={text} size={size} color={color} /> : <></>;
  let content = textComponent;
  if (icon) {
    const iconComponent = <Icon name={icon} size={size} color={color} />;
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
  return <BaseLink {...rest}>{content}</BaseLink>;
};

Link.defaultProps = {
  iconAlign: 'start',
};
