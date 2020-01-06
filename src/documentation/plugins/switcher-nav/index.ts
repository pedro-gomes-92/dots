const switcherNavPlugin = (): void => {
  const Docsify = window['Docsify'];
  const DEFAULT_CONFIG = {
    items: ['design', 'code'],
    root: 'body',
  };

  const component = (props): string => {
    return `
    <input class="docs-switcher__input" id="scope" type="checkbox" />
    <label class="docs-switcher__label" for="scope">
      <div class="docs-switcher__container">
        <div class="docs-switcher__layout">
          <span class="docs-switcher__item">${props.items[0]}</span>
          <span class="docs-switcher__item">${props.items[1]}</span>
        </div>
      </div>
    </label>`;
  };

  const getRegexValueUrl = (items): RegExp => {
    return new RegExp(`(\/${items[0]}|\/${items[1]}|\/$)`);
  };

  const getValueFromUrl = (items, href = Docsify.dom.$.location.href): string => {
    const ret = href.match(getRegexValueUrl(items));
    return ret ? ret[0].substr(1) : '';
  };

  const updateUrl = (items, selected): void => {
    const url = Docsify.dom.$.location.href;
    Docsify.dom.$.location.href = url.replace(getRegexValueUrl(items), `/${selected}`);
  };

  const updateTheme = (items, selected): void => {
    const other = selected === items[1] ? items[0] : items[1];
    const htmlElement = Docsify.dom.find('html');
    Docsify.dom.toggleClass(htmlElement, 'remove', `docs-theme--${other}`);

    Docsify.dom.toggleClass(htmlElement, 'add', `docs-theme--${selected}`);
  };

  const update = (items, selected): void => {
    updateTheme(items, selected);

    const inputElement = Docsify.dom.find('.docs-switcher__input');
    const itemElements = Docsify.dom.findAll('.docs-switcher .docs-switcher__item');

    itemElements.forEach((itemElement, index): void => {
      const operator = items[index] === selected ? 'add' : 'remove';
      Docsify.dom.toggleClass(itemElement, operator, 'docs-switcher__item--active');
    });

    inputElement.checked = selected === items[0] ? false : true;
  };

  const plugin = (hook, vm): void => {
    let config = vm.config.switcherNav;
    if (!config) {
      return;
    }

    config = Docsify.util.merge(DEFAULT_CONFIG, config);
    const items = config.items;

    const after = (html, next): void => {
      next(html);
      if (!Docsify.dom.find('.docs-switcher')) {
        return;
      }

      const selected = getValueFromUrl(items);
      if (!selected) {
        return;
      }

      update(items, selected);
    };

    const mounted = (): void => {
      const switcherElement = Docsify.dom.create('span', component(config));
      Docsify.dom.toggleClass(switcherElement, 'add', 'docs-switcher');
      Docsify.dom.find(config.root).append(switcherElement);

      const inputElement = Docsify.dom.find('.docs-switcher__input');

      Docsify.dom.on(inputElement, 'input', (event): void => {
        const selectedIdx = event.target.checked ? 1 : 0;
        update(items, items[selectedIdx]);
        updateUrl(items, items[selectedIdx]);
      });

      const selected = getValueFromUrl(items);
      update(items, selected);
      updateUrl(items, selected);
    };

    hook.afterEach(after);
    hook.mounted(mounted);

    // Update config

    vm.config.markdown = Object.assign(
      {
        renderer: {
          link: function(href, title, text): string {
            if (href.endsWith('/')) {
              if (!Docsify.dom.find('.docs-switcher')) {
                return;
              }
              let selected = getValueFromUrl(items, href);
              if (!selected) {
                const inputElement = Docsify.dom.find('.docs-switcher__input');
                if (inputElement) {
                  selected = inputElement.checked ? items[1] : items[0];
                  href += `${selected}?id=main`;
                }
              }
            }

            return this['origin'].link.call(this, href, title, text);
          },
        },
      },
      vm.config.markdown,
    );
  };

  const $docsify = window['$docsify'];
  $docsify.plugins = [].concat(plugin, $docsify.plugins);
};

export default switcherNavPlugin;
