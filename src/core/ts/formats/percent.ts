import { Format } from './format';

export class FormatPercent extends Format {
  protected static formatter: Intl.NumberFormat;

  protected static initialize(): void {
    if (!FormatPercent.isInitialized) {
      FormatPercent.formatter = new Intl.NumberFormat(navigator.language, { style: 'percent' });
      FormatPercent.isInitialized = true;
    }
  }

  public static format(number: FormNumberValue): string {
    FormatPercent.initialize();
    return FormatPercent.formatter.format(number);
  }
}
