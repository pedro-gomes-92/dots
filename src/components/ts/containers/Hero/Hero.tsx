import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Base, BaseProps } from '../../Base';
import { HeroBody } from './HeroBody';

export interface HeroProps extends BaseProps {
  hasNavBar?: boolean;
}

export const Hero: FunctionComponent<HeroProps> = ({
  className,
  hasNavBar,
  children,
  ...rest
}: HeroProps): JSX.Element => (
  <Base className={classnames('hero', hasNavBar ? 'is-fullheight-with-navbar' : 'is-fullheight', className)} {...rest}>
    <HeroBody>{children}</HeroBody>
  </Base>
);

Hero.defaultProps = {
  hasNavBar: false,
};
