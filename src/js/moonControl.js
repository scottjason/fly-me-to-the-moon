function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeOver, TakeMeHome, AnywhereElse, MoonView ) {
    this.TakeOver = TakeOver;
    this.TakeMeHome = TakeMeHome;
    this.AnywhereElse = AnywhereElse;
    this.MoonView = MoonView;
    this.MoonView.initialize( this.bindListeners.bind( this ) );
  },
  bindListeners : function() {
    document.getElementById( "takeMeHome" ).addEventListener("click", this.takeMeHome.bind( this ), false );
    document.getElementById( "takeControl" ).addEventListener("click", this.takeControl.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener("click", this.sayGoodBye.bind( this ), false );
    document.getElementById( "anywhereButHere" ).addEventListener("click", this.anywhereButHere.bind( this ), false );
  },
  takeMeHome : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    // ensure text event is visible
    $( "#userLocation" ).show();
      // remove all other text events
    $( "#giveInstructions" ).hide();
    // init takeMeHome
    this.TakeMeHome.initialize( this.MoonView.scene );
  },
  takeControl : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    // remove current address
    $( "#userLocation" ).hide();
    // init takeControl
    this.MoonView.renderInstructions();
    this.TakeOver.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    // remove instructions and current address
    $( "#giveInstructions" ).hide();
    $( "#userLocation" ).hide();
  },
  anywhereButHere : function() {
    // remove event listeners
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    // remove instructions and current address
    $( "#giveInstructions" ).hide();
    $( "#userLocation" ).hide();
    // init anywhereButHere
    this.AnywhereElse.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  }
}
var controller = new MoonControl();

