(function waitAndRemoveElements() {
  const SELECTORS = ['.logo-wrap--home', '.header__logo-wrap'];

  function removeElements() {
    SELECTORS.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }

  function startObserver() {
    removeElements();

    const observer = new MutationObserver(removeElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function waitForBody(callback) {
    if (document.body) {
      callback();
    } else {
      new MutationObserver(() => {
        if (document.body) {
          callback();
        }
      }).observe(document.documentElement, { childList: true });
    }
  }

  waitForBody(startObserver);
})();
