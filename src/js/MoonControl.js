function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( User, View ) {
    this.User = User;
    this.View = View;
    this.View.initialize( this.earthReady.bind( this ) );
  },
  earthReady : function() {
    this.User.initialize( this.View.viewer, this.View.clock, this.View.scene, this.View.canvas );
  },
  userSelect : function() {
    this.User.userControl();
  },
  sayGoodBye : function() {
  }
}

var controller = new MoonControl();