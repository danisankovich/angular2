(function(app) {
app.headerComponent = ng.core.Component({
  selector: 'my-header',
  templateUrl: '../views/header.html'
})
.Class({
  constructor: function() {
    this.title = 'Forrent Incrementations'
  }
})
})(window.app || (window.app = {}))
