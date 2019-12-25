import React, { FunctionComponent, CSSProperties, AllHTMLAttributes, ReactNode, RefObject, useCallback } from 'react';
import classnames from 'classnames';
import { ObjectUtils } from '@dots/core';

export interface BaseProps {
  className?: string;
  animations?: Animations;
  size?: Size | ColumnSize | AspectRatioSize | FontSize;
  style?: CSSProperties;
  attribute?: AllHTMLAttributes<HTMLElement>;
  data?: Data;
  reference?: RefObject<HTMLElement>;
  children?: ReactNode;
  isVisible?: boolean;
  isEnabled?: boolean;
  color?: Color;
  tag?: string;
}

export const Base: FunctionComponent<BaseProps> = ({
  tag,
  animations,
  isVisible,
  isEnabled,
  size,
  data,
  className,
  attribute,
  reference,
  color,
  ...rest
}: BaseProps): JSX.Element => {
  const Tag = tag;
  let attributes = { disabled: !isEnabled, ref: reference, ...attribute };

  const getAnimationClassNames = useCallback((): string[] => {
    const prefix = 'is-animated';
    return Object.keys(animations).map((name): string => {
      const { duration = 'normal', isInfinite = false } = animations[name];
      return classnames(`${prefix}-${name}`, `${prefix}-${duration}`, isInfinite ? `${prefix}-infinite` : '');
    });
  }, [animations]);

  return (
    <Tag
      className={classnames(
        { 'is-hidden': !isVisible },
        size ? `is-${size}` : '',
        color ? `is-${color}` : '',
        { 'is-disabled': !isEnabled },
        { 'is-animated': Object.keys(animations).length > 0 },
        ...getAnimationClassNames(),
        className,
      )}
      {...ObjectUtils.map(data, (_value, key): string => `data-${key}`, 'keys')}
      {...(ObjectUtils.filter(attributes, (value): boolean => value !== undefined) as AllHTMLAttributes<HTMLElement>)}
      {...rest}
    />
  );
};

Base.defaultProps = {
  className: '',
  animations: {},
  isEnabled: true,
  isVisible: true,
  style: {},
  tag: 'div',
};
