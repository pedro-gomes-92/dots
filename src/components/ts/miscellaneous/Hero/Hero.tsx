import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Base, BaseProps } from '../../Base';
import { HeroBody } from './HeroBody';

export interface HeroProps extends BaseProps {}

export const Hero: FunctionComponent<HeroProps> = ({ className, children, ...rest }: HeroProps): JSX.Element => (
  <Base className={classnames('hero', className)} {...rest}>
    <HeroBody>{children}</HeroBody>
  </Base>
);

Hero.defaultProps = {
  tag: 'main',
};
