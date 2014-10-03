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
    document.getElementById( "takeMeHome" ).addEventListener("click", this.takeMeHome.bind( this ), false );
    document.getElementById( "takeControl" ).addEventListener("click", this.takeControl.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener("click", this.sayGoodBye.bind( this ), false );
    document.getElementById( "anywhereOnEarth" ).addEventListener("click", this.anywhereOnEarth.bind( this ), false );
  },
  takeMeHome : function() {
    console.log( "take me home")
  },
  takeControl : function() {
    this.UserControl.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    console.log( "flying to the moon now")
  },
  anywhereOnEarth : function() {
    console.log( "anywhere on earth" )
  }
}

var controller = new MoonControl();