import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { CardFooter, CardFooterProps } from '../../containers';

export interface ModalFooterProps extends CardFooterProps {}

export const ModalFooter: FunctionComponent<CardFooterProps> = ({
  className,
  children,
  ...rest
}: CardFooterProps): JSX.Element => {
  return (
    <CardFooter className={classnames('modal-footer', className)} {...rest}>
      {children}
    </CardFooter>
  );
};
