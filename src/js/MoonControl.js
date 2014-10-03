function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize: function( Model, View ) {
    this.Model = Model;
    this.View = View;
    this.View.initialize();
  }
}

// MoonFly.Controller.prototype.earthReady = function() {

// }

// MoonFly.Controller.prototype.sayGoodBye = function() {
//   // this.view.readyOrbit();
// }

// MoonFly.Controller.prototype.exploreEarth = function() {

// }

var controller = new MoonControl();

