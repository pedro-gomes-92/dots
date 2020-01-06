import BulmaCalendar from 'bulma-calendar';

export default class Calendar extends BulmaCalendar {
  public constructor(selector: string, options = {}) {
    super(selector, {
      validateLabel: 'OK',
      ...options,
      displayMode: 'inline',
      showTodayButton: false,
      showClearButton: false,
      closeOnSelect: false,
      showHeader: false,
      enableMonthSwitch: false,
      enableYearSwitch: false,
    });
  }

  protected _build(): void {
    super._build();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _this = this as any;
    _this._ui.footer.validate.classList.remove('is-hidden', 'is-small', 'is-text', 'has-text-success');
  }

  public static attach(selector = 'input[type="date"]', options = {}): Calendar[] {
    let instances = [];

    const elements =
      typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : Array.isArray(selector)
        ? selector
        : [selector];
    [].forEach.call(elements, (element: string): void => {
      if (typeof element[this.constructor.name] === 'undefined') {
        const instance = new Calendar(element, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (element as any).bulmaCalendar = instance;
        instances.push(instance);
      } else {
        instances.push(element[this.constructor.name]);
      }
    });

    return instances;
  }

  public onCloseDateTimePicker(e: Event): void {
    super.onCloseDateTimePicker(e);
  }

  public onValidateClickDateTimePicker(e: Event): void {
    super.onValidateClickDateTimePicker(e);
    this.onCloseDateTimePicker(e);
  }
}
