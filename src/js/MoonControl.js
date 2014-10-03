function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( UserControl, MoonView ) {
    this.UserControl = UserControl;
    this.MoonView = MoonView;
    this.MoonView.initialize( this.bindListeners.bind( this ) );
  },
  bindListeners : function() {
    document.getElementById( "takeControl" ).addEventListener("click", this.takeControl.bind( this ), false );
  },
  takeControl : function() {
    console.log( this )
    this.UserControl.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  userSelect : function() {

  },
  sayGoodBye : function() {
  }
}

var controller = new MoonControl();