(function header(app) {
app.headerComponent = ng.core.Component({
  selector: 'my-header',
  templateUrl: '../views/header.html'
})
.Class({
  constructor: function() {
    this.title = 'Forrent Incrementations'
  }
})
ng.platform.browser.bootstrap(app.headerComponent);
})(window.app || (window.app = {}))
