import { CurrencyUtils } from '../utilities';
import { FormatNumber } from './number';

export class FormatCurrency extends FormatNumber {
  protected static options: Intl.NumberFormatOptions = { currency: 'EUR' };

  protected static initialize(): void {
    if (!this.isInitialized) {
      this.formatter = new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        ...this.options,
      });
      this.isInitialized = true;
    }
  }

  public static setup(options: Intl.NumberFormatOptions): void {
    super.setup(options);
  }

  public static format(value: FormNumberValue, unit: UnitCurrency = 'standard'): string {
    this.initialize();

    let newValue = value;
    if (unit === 'centesimal') {
      newValue = CurrencyUtils.centesimalToStandard(value);
    }

    return super.format(newValue);
  }
}
