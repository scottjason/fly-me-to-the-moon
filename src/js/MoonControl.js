function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize: function( model, view ) {
    this.model = model;
    this.view = view;
    console.log( model, view );
    // alert("controller works")


  // this.model = model;
  // this.view = view;
  // this.view.initialize();
}
}

// MoonFly.Controller.prototype.earthReady = function() {

// }

// MoonFly.Controller.prototype.sayGoodBye = function() {
//   // this.view.readyOrbit();
// }

// MoonFly.Controller.prototype.exploreEarth = function() {

// }

var moonFly = new MoonControl();

