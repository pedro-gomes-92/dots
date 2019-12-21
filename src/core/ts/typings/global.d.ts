/**
 * Formats
 */

declare interface DateRangeValue {
  start: Date;
  end: Date;
}

declare type DateSimpleValue = Date;
declare type DateValue = DateRangeValue | DateSimpleValue;

declare type UnitDuration = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';
declare type UnitCurrency = 'centesimal' | 'standard';

declare namespace Intl {
  type DurationFormatPartTypes = 'integer' | 'literal' | 'decimal' | 'fraction';

  interface DurationFormatPart {
    type: DurationFormatPartTypes;
    value: string;
    unit?: UnitDuration;
  }

  export class RelativeTimeFormat {
    public constructor(locale: string, options?: { numeric: 'always' | 'auto'; style: 'long' | 'short' | 'narrow' });
    public format(value: number, unit: UnitDuration): string;
    public formatToParts(value: number, unit: UnitDuration): DurationFormatPart[];
  }
}
