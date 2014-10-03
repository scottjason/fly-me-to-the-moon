function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( Model, View ) {
    this.Model = Model;
    this.View = View;
    this.View.initialize( this );
  },
  earthReady : function() {
    this.Model.initialize( this.View.viewer, this.View.clock, this.exploreEarth );
  },
  exploreEarth : function() {

  },
  sayGoodBye : function() {
  }
}

var controller = new MoonControl();