function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( UserControl, MoonView ) {
    this.UserControl = UserControl;
    this.MoonView = MoonView;
    this.MoonView.initialize( this.earthReady.bind( this ) );
  },
  earthReady : function() {
    this.UserControl.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  userSelect : function() {

  },
  sayGoodBye : function() {
  }
}

var controller = new MoonControl();