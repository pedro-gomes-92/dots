export class Format {
  /* eslint-disable @typescript-eslint/no-explicit-any */

  protected static formatter: any;
  protected static isInitialized: boolean;

  /**
   * This member holds specific configuration parameters for each formatter.
   */
  protected static options: any;

  /**
   * The first calls to format() will always run the intialize method first. In
   * case during runtime of the aplication configuration parameters need to
   * change then the setup() method can be run. This will provide the format()
   * method with the most up to date parameters.
   */
  protected static setup(options: any): void {
    this.isInitialized = false;
    this.options = options;
  }

  /**
   * Since Intl will require an instantiated object every time it gets used this
   * method (which is being called automatically by using the format() method)
   * will generate a new instance of Intl and store it so it can be reused.
   */
  protected static initialize(): void {}

  public static format(value): string {
    return value.toString();
  }
}
