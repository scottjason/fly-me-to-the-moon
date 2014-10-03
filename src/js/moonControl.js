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
    this.MoonView.spinGlobe();
  },
  takeMeHome : function() {
    // var status = this.MoonView.scene.preRender.removeEventListener;
    var status = null;
    this.MoonView.spinStatus( status );
    // this.disableHandlers();
    this.TakeMeHome.initialize( this.MoonView.scene );
  },
  takeControl : function() {
    this.MoonView.spinStatus( null );
    this.MoonView.renderInstructions();
    this.TakeOver.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    this.MoonView.spinStatus( null );
    console.log( "flying to the moon now")
  },
  anywhereOnEarth : function() {
    this.MoonView.spinStatus( null );
  },
  disableHandlers : function() {
    var scene = this.MoonView.scene;
    var clock = this.MoonView.clock;
    var canvas = this.MoonView.canvas;
    scene.primitives.removeAll();
    scene.tweens.removeAll();
    scene.camera.setTransform(Cesium.Matrix4.IDENTITY);
    clock.multiplier = 1.0;
    canvas.setAttribute('tabindex', '0');
    canvas.focus();
    Sandcastle.reset();
    scene.globe.enableLighting = false;
    console.log( this.MoonView.viewer )
 }
}
var controller = new MoonControl();

