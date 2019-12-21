import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { BaseContainerProps, BaseContainer } from '../BaseContainer';

export interface SectionProps extends BaseContainerProps {}

export const Section: FunctionComponent<SectionProps> = ({
  className,
  children,
  ...rest
}: SectionProps): JSX.Element => (
  <BaseContainer className={classnames('section', className)} {...rest}>
    {children}
  </BaseContainer>
);

Section.defaultProps = {
  tag: 'section',
};
