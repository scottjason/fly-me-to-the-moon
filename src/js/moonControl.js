function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeOver, TakeMeHome, MoonView ) {
    this.TakeOver = TakeOver;
    this.TakeMeHome = TakeMeHome;
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
    // remove event listeners
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    // init takeMeHome
    this.TakeMeHome.initialize( this.MoonView.scene );
  },
  takeControl : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    // init takeControl
    this.MoonView.renderInstructions();
    this.TakeOver.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
  },
  anywhereOnEarth : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
  }
}
var controller = new MoonControl();

