export class DurationUtils {
  private static MINUTE: number = 60;
  private static HOUR: number = 60 * DurationUtils.MINUTE;
  private static DAY: number = 24 * DurationUtils.HOUR;
  private static WEEK: number = 7 * DurationUtils.DAY;
  private static MONTH: number = 4.34524 * DurationUtils.WEEK;
  private static YEAR: number = 12 * DurationUtils.MONTH;

  private static getUnitValue(unit: UnitDuration): number {
    let value: number;
    switch (unit) {
      case 'second':
        value = 1;
        break;
      case 'minute':
        value = DurationUtils.MINUTE;
        break;
      case 'hour':
        value = DurationUtils.HOUR;
        break;
      case 'day':
        value = DurationUtils.DAY;
        break;
      case 'week':
        value = DurationUtils.WEEK;
        break;
      case 'month':
        value = DurationUtils.MONTH;
        break;
      case 'year':
        value = DurationUtils.YEAR;
        break;
    }

    return value;
  }

  public static secondToAny(seconds: number, unit: UnitDuration): number {
    const unitValue = DurationUtils.getUnitValue(unit);
    return seconds / unitValue;
  }

  public static secondToMinute(seconds: number): number {
    return DurationUtils.secondToAny(seconds, 'minute');
  }

  public static secondToHour(seconds: number): number {
    return DurationUtils.secondToAny(seconds, 'hour');
  }

  public static secondToDay(seconds: number): number {
    return DurationUtils.secondToAny(seconds, 'day');
  }

  public static secondToWeek(seconds: number): number {
    return DurationUtils.secondToAny(seconds, 'week');
  }

  public static secondToMonth(seconds: number): number {
    return DurationUtils.secondToAny(seconds, 'month');
  }

  public static secondToYear(seconds: number): number {
    return DurationUtils.secondToAny(seconds, 'year');
  }

  public static anyToSecond(any: number, unit: UnitDuration): number {
    const unitValue = DurationUtils.getUnitValue(unit);
    return any * unitValue;
  }

  public static minuteToSecond(minutes: number): number {
    return DurationUtils.anyToSecond(minutes, 'minute');
  }

  public static hourToSecond(hours: number): number {
    return DurationUtils.anyToSecond(hours, 'hour');
  }

  public static dayToSecond(days: number): number {
    return DurationUtils.anyToSecond(days, 'day');
  }

  public static weekToSecond(weeks: number): number {
    return DurationUtils.anyToSecond(weeks, 'week');
  }

  public static monthToSecond(months: number): number {
    return DurationUtils.anyToSecond(months, 'month');
  }

  public static yearToSecond(years: number): number {
    return DurationUtils.anyToSecond(years, 'year');
  }
}
