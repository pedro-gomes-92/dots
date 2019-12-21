const sidebarManualPlugin = (): void => {
  const Docsify = window['Docsify'];
  const plugin = (hook): void => {
    hook.doneEach((html, next): void => {
      var subMenuElements = Docsify.dom.findAll('.sidebar-nav > ul ul');
      subMenuElements.forEach((subMenuElement): void => {
        Docsify.dom.toggleClass(subMenuElement, 'add', 'app-sub-sidebar');
        Docsify.dom.toggleClass(subMenuElement.parentElement, 'add', 'collapse');
      });

      let el = document.querySelector('.sidebar-nav .active');
      if (el) {
        el.classList.add('open');
        while (el.className !== 'sidebar-nav') {
          if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
            el.parentElement.classList.add('open');
          }
          el = el.parentElement;
        }
      }

      next(html);
    });

    window.addEventListener('hashchange', (): void => {
      requestAnimationFrame((): void => {
        const el = document.querySelector('.sidebar-nav .active');
        if (el) {
          el.parentElement.parentElement
            .querySelectorAll('.app-sub-sidebar')
            .forEach((dom): void => dom.classList.remove('open'));

          if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
            el.parentElement.classList.add('open');
          }
        }
      });
    });

    document.addEventListener(
      'scroll',
      (): void => {
        requestAnimationFrame((): void => {
          let el = document.querySelector('.app-sub-sidebar > .active');
          if (el) {
            el.parentElement.parentElement
              .querySelectorAll('.app-sub-sidebar')
              .forEach((dom): void => dom.classList.remove('open'));
            while (el.parentElement.classList.contains('app-sub-sidebar')) {
              el.parentElement.classList.add('open');
              el = el.parentElement;
            }
          }
        });
      },
      false,
    );

    document.addEventListener('DOMContentLoaded', (): void => {
      document.querySelector('.sidebar-nav').addEventListener(
        'click',
        (e): void => {
          if (e.target['tagName'] === 'A') {
            const elp = e.target['parentElement'];
            if (elp.tagName === 'LI') {
              if (elp.classList.contains('active')) {
                requestAnimationFrame((): void => {
                  elp.classList.remove('active');
                  elp.classList.remove('open');
                  elp.classList.add('hold');
                });
              } else {
                requestAnimationFrame((): void => {
                  if (elp.classList.contains('hold')) {
                    elp.classList.add('active');
                    elp.classList.remove('hold');
                  }
                });
              }
            }
          }
        },
        true,
      );
    });
  };

  const $docsify = window['$docsify'];
  $docsify.plugins = [].concat(plugin, $docsify.plugins);
};

export default sidebarManualPlugin;
