/**
 * Size
 */

declare type Size = 'small' | 'normal' | 'medium' | 'large';

declare type AspectRatioSize =
  | 'square'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3';

declare type FontSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;

declare type FullSize = 'full';
declare type AutoSize = 'auto';

declare type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

declare type RelativeSize =
  | FullSize
  | 'four-fifths'
  | 'three-quarters'
  | 'two-thirds'
  | 'three-fifths'
  | 'half'
  | 'two-fifths'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth';

declare type ColumnSize = GridSize | RelativeSize | AutoSize;

/**
 * Orientation
 */

declare type Orientation = 'horizontal' | 'vertical';

/**
 * Alignment
 */

declare type Align = 'start' | 'center' | 'end';
declare type IconAlign = 'start' | 'end';
declare interface AlignXY {
  horizontal: Align;
  vertical: Align;
}

/**
 * Position
 */

type PositionX = 'left' | 'center' | 'right';
type PositionY = 'top' | 'middle' | 'bottom';
declare interface PositionXY {
  x: PositionX;
  y: PositionY;
  isInner?: boolean;
}

/**
 * Duration
 */

declare type Duration = 'slow' | 'normal' | 'medium' | 'fast';

/**
 * Animation
 */

declare interface AnimationConfig {
  isInfinite?: boolean;
  duration?: Duration;
}

declare interface Animations {
  [name: string]: AnimationConfig;
}

/**
 * Color
 */

declare type Color = 'primary' | 'secondary' | 'background' | 'info' | 'danger' | 'warning' | 'success';

/**
 * States
 */

declare type State = 'danger' | 'info' | 'success' | 'warning';

/**
 * Devices
 */

declare type Device = 'mobile' | 'tablet' | 'desktop';

/**
 * Elements
 */

declare type DateInputType = 'date' | 'datetime' | 'time';
declare type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'email'
  | 'file'
  | 'hidden'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'url'
  | DateInputType;

/** Attributes */

declare interface Data {
  [name: string]: string;
}

/** Form */

declare type FormStringValue = string;
declare type FormNumberValue = number;
declare type FormDateValue = FormStringValue;
declare type FormValue = FormStringValue | FormNumberValue | FormDateValue;
