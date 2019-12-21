import { DurationUtils } from '../utilities';
import { FormatNumber } from './number';

export class FormatDuration extends FormatNumber {
  public static format(seconds: FormNumberValue, unit: UnitDuration = 'second'): string {
    return super.format(DurationUtils.secondToAny(seconds, unit));
  }
}
