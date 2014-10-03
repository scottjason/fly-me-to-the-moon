function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( Model, View ) {
    this.Model = Model;
    this.View = View;
    this.View.initialize( this.earthReady );
  },
  earthReady : function() {
    console.log( "earth Ready");
    console.log( this.View.viewer );
  },
  exploreEarth : function() {

  },
  sayGoodBye : function() {
    // this.view.readyOrbit();
  }
}

var controller = new MoonControl();

