import React, { FunctionComponent } from 'react';
import { BaseListItemProps, BaseListItem } from '../BaseListItem';
import { TextProps, Text } from '../../../text';
import { ColumnLayout, ColumnItem } from '../../../layouts';

export interface BaseTextListItemProps extends Omit<BaseListItemProps, 'children'> {
  text: TextProps['text'];
  secondaryText?: TextProps['text'];
  size?: TextProps['size'];
}

export const BaseTextListItem: FunctionComponent<BaseTextListItemProps> = ({
  text,
  secondaryText,
  size,
  ...rest
}: BaseTextListItemProps): JSX.Element => (
  <BaseListItem {...rest}>
    <ColumnLayout isMobileActive align="center" gap={2}>
      <ColumnItem>
        <Text className="is-primary" text={text} size={size} />
      </ColumnItem>
      {secondaryText && (
        <ColumnItem size="auto">
          <Text className="is-secondary" text={secondaryText} size={size} />
        </ColumnItem>
      )}
    </ColumnLayout>
  </BaseListItem>
);
