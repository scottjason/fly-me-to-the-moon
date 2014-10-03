function MoonView() {
  if (!( this instanceof MoonView )) {
    return new MoonView();
  }
};

MoonView.prototype = {
  initialize : function( callback ){
    this.container = 'cesiumContainer';
    this.options = {
        animation: false,
        homeButton: true,
        sceneModePicker: false,
        selectionIndicator: false,
        baseLayerPicker: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false
     }
    this.viewer = new Cesium.Viewer( this.container, this.options );
    this.clock = this.viewer.clock;
    this.scene = this.viewer.scene;
    this.canvas = this.scene.canvas;
    this.spinGlobe( 0.45 );
    callback();
  },
  spinGlobe : function( setRate ){
    var viewer = this.viewer;
    var scene = this.scene;
    var clock = this.clock;
    var previousTime = Date.now();

    this.listener = function( clock ) {
    var spinRate = setRate;
    var currentTime = Date.now();
    var delta = ( currentTime - previousTime ) / 1000;
    previousTime = currentTime;
    viewer.scene.camera.rotate( Cesium.Cartesian3.UNIT_Z, -spinRate * delta );
  }
    viewer.clock.onTick.addEventListener( this.listener );
},
  stopGlobe : function() {
    if ( this.listener ) {
   this.viewer.clock.onTick.removeEventListener(this.listener);
}
  },
  renderInstructions : function() {
    $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" )
  }
}

var moonView = new MoonView();