import { ReactElement, DOMAttributes } from 'react';

/*
export type Children<T extends FunctionComponent> = PropTypes.InferProps<
  ReturnType<() => { children: PropTypes.Requireable<T> }>
>;
*/

export type Children<T = {}, U extends ReactElement<T> = ReactElement> = U[] | U;

/**
 * Event
 */

export type EventName<T extends HTMLElement = HTMLElement> = keyof Omit<
  DOMAttributes<T>,
  'children' | 'dangerouslySetInnerHTML'
>;
