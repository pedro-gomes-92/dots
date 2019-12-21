export class CurrencyUtils {
  private static CENTESIMAL_CONVERTER: number = 100;

  public static centesimalToStandard(cents: number): number {
    return cents / CurrencyUtils.CENTESIMAL_CONVERTER;
  }

  public static standardToCentesimal(stand: number): number {
    return stand * CurrencyUtils.CENTESIMAL_CONVERTER;
  }
}
