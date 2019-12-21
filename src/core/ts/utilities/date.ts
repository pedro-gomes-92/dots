export class DateUtils {
  public static compare(date1: Date, date2: Date): number {
    const date1Value = date1 ? date1.getTime() : 0;
    const date2Value = date2 ? date2.getTime() : 0;
    const comparison = date1Value - date2Value;
    let result = 0;
    if (comparison > 0) {
      result = 1;
    } else if (comparison < 0) {
      result = -1;
    }

    return result;
  }
}
