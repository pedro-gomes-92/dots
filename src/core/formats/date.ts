import { ObjectUtils, DateUtils } from '../utilities';
import { Format } from './format';

export class FormatDate extends Format {
  protected static formatter: Intl.DateTimeFormat;
  private static rangeSeparator: string;

  protected static initialize(): void {
    if (!FormatDate.isInitialized) {
      this.formatter = new Intl.DateTimeFormat(navigator.language);
      this.isInitialized = true;
      this.rangeSeparator = ' - ';
    }
  }

  public static format(value: DateValue): string {
    this.initialize();

    if (ObjectUtils.isObject(value)) {
      const { start, end } = value as DateRangeValue;

      if (DateUtils.compare(start, end) === 1) {
        throw new Error('Start date is bigger than end date');
      }

      return `${this.format(start)}${this.rangeSeparator}${this.format(end)}`;
    }

    const simpleDate = value as DateSimpleValue;
    return this.formatter.format(simpleDate);
  }

  public static unformat(value: string): DateValue {
    this.initialize();

    if (value.indexOf(this.rangeSeparator) !== -1) {
      const [start, end] = value.split(this.rangeSeparator);
      const rangeDate: DateRangeValue = {
        start: this.unformat(start) as DateSimpleValue,
        end: this.unformat(end) as DateSimpleValue,
      };

      if (DateUtils.compare(rangeDate.start, rangeDate.end) === 1) {
        throw new Error('Start date is bigger than end date');
      }

      return rangeDate;
    }

    return new Date(Date.parse(value));
  }
}
