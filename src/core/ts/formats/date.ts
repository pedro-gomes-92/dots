import { ObjectUtils, DateUtils } from '../utilities';
import { Format } from './format';

export class FormatDate extends Format {
  protected static formatter: Intl.DateTimeFormat;
  private static rangeSeparator: string;

  protected static initialize(): void {
    if (!FormatDate.isInitialized) {
      FormatDate.formatter = new Intl.DateTimeFormat(navigator.language);
      FormatDate.isInitialized = true;
      FormatDate.rangeSeparator = ' - ';
    }
  }

  public static format(value: DateValue): string {
    FormatDate.initialize();

    if (ObjectUtils.isObject(value)) {
      const { start, end } = value as DateRangeValue;

      if (DateUtils.compare(start, end) === 1) {
        throw new Error('Start date is bigger than end date');
      }

      return `${FormatDate.format(start)}${FormatDate.rangeSeparator}${FormatDate.format(end)}`;
    }

    const simpleDate = value as DateSimpleValue;
    return FormatDate.formatter.format(simpleDate);
  }

  public static unformat(value: string): DateValue {
    FormatDate.initialize();

    if (value.indexOf(FormatDate.rangeSeparator) !== -1) {
      const [start, end] = value.split(FormatDate.rangeSeparator);
      const rangeDate: DateRangeValue = {
        start: FormatDate.unformat(start) as DateSimpleValue,
        end: FormatDate.unformat(end) as DateSimpleValue,
      };

      if (DateUtils.compare(rangeDate.start, rangeDate.end) === 1) {
        throw new Error('Start date is bigger than end date');
      }

      return rangeDate;
    }

    return new Date(Date.parse(value));
  }
}
