import { FormatNumber } from './number';

export class FormatPercent extends FormatNumber {
  protected static initialize(): void {
    if (!FormatPercent.isInitialized) {
      this.formatter = new Intl.NumberFormat(navigator.language, { style: 'percent' });
      this.isInitialized = true;
    }
  }

  public static format(number: FormNumberValue): string {
    this.initialize();
    return super.format(number);
  }
}
