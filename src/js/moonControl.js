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
    this.MoonView.spinGlobe( "go" );
  },
  takeMeHome : function() {
    var status = null;
    this.MoonView.spinStatus( status );
    // this.TakeMeHome.initialize( this.MoonView.scene );
  },
  takeControl : function() {
    this.MoonView.renderInstructions();
    this.TakeOver.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    console.log( "flying to the moon now")
  },
  anywhereOnEarth : function() {

}
}
var controller = new MoonControl();

