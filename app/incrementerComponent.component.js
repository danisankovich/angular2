(function increment(app) {
  app.incrementerComponent = ng.core.Component({
    selector: 'my-app',
    templateUrl: '../views/incrementer.html'
  })
  .Class({
    constructor: function() {
      this.y = 0
    },
    down() {
      this.y -= 1
      if(this.y < 0) {
        document.getElementById("y").classList.add('negative')
      }
    },
    up() {
      this.y += 1
      if(this.y > -1) {
        document.getElementById("y").classList.remove('negative')
      }
    }
  })
  ng.platform.browser.bootstrap(app.incrementerComponent);
})(window.app || (window.app = {}))
