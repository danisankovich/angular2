(function(app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template:
    '<div class="col-xs-12"><h1 class="titleCent">{{title}}</h1></div>' +
        '<div class="col-xs-3 left hover" (click)="down()"></div>' +
        '<div class="col-xs-6">' +
        '<div class="col-xs-12">' +
        '<div class="col-xs-12 number"><h1 class="numberCent">{{y}}</h1></div>' +
        '</div>'+
        '</div>' +
        '<div class="col-xs-3 right hover" (click)="up()"></div>'
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
