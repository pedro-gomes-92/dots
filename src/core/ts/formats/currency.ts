import { CurrencyUtils } from '../utilities';
import { Format } from './format';

export class FormatCurrency extends Format {
  protected static options: Intl.NumberFormatOptions = { currency: 'EUR' };
  protected static formatter: Intl.NumberFormat;

  protected static initialize(): void {
    if (!FormatCurrency.isInitialized) {
      FormatCurrency.formatter = new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        ...FormatCurrency.options,
      });
      FormatCurrency.isInitialized = true;
    }
  }

  public static setup(options: Intl.NumberFormatOptions): void {
    super.setup(options);
  }

  public static format(value: FormNumberValue, unit: UnitCurrency = 'standard'): string {
    FormatCurrency.initialize();

    let newValue = value;
    if (unit === 'centesimal') {
      newValue = CurrencyUtils.centesimalToStandard(value);
    }

    return FormatCurrency.formatter.format(newValue);
  }
}
