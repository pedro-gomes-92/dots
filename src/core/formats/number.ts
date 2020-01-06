import { Format } from './format';

export class FormatNumber extends Format {
  protected static formatter: Intl.NumberFormat;

  protected static initialize(): void {
    if (!FormatNumber.isInitialized) {
      FormatNumber.formatter = new Intl.NumberFormat(navigator.language);
      FormatNumber.isInitialized = true;
    }
  }

  public static format(number: FormNumberValue): string {
    FormatNumber.initialize();
    return FormatNumber.formatter.format(number);
  }
}
