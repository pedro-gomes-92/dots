import { Format } from './format';

export class FormatNumber extends Format {
  protected static formatter: Intl.NumberFormat;

  protected static initialize(): void {
    if (!this.isInitialized) {
      this.formatter = new Intl.NumberFormat(navigator.language);
      this.isInitialized = true;
    }
  }

  public static format(value: FormNumberValue): string {
    this.initialize();

    let newValue = value;
    if (Math.abs(value) === 0) {
      newValue = 0;
    }

    return this.formatter.format(newValue);
  }
}
