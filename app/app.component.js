(function(app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template:
      '<h1>{{title}}</h1>' +
      '<h1>{{y}}</h1>' +
        '<p><button class="btn btn-primary" role="button" (click)="up()">+</button>' +
        '<button class="btn btn-primary" role="button" (click)="down()">-</button></p>'
  })
  .Class({
    constructor: function() {
      this.y = 0
      this.title = 'Forrent Incrementations'
    },
    down() {
      this.y -= 1
    },
    up() {
      this.y += 1
    }
  })
})(window.app || (window.app = {}))
