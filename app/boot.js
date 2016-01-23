(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.headerComponent);
    ng.platform.browser.bootstrap(app.incrementerComponent);
  })
})(window.app || (window.app = {}))
