function MoonView() {
  if (!( this instanceof MoonView )) {
    return new MoonView();
  }
};

MoonView.prototype = {
  initialize : function( controller ){
    this.container = 'cesiumContainer';
    this.options = {
        animation: false,
        homeButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        baseLayerPicker: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false
     }
     this.renderGlobe( controller );
  },
  renderGlobe : function( controller ){
    this.viewer = new Cesium.Viewer( this.container, this.options );
    this.clock = this.viewer.clock;
    this.scene = this.viewer.scene;
    this.canvas = this.scene.canvas
    controller.earthReady();
  },
  flyToMoon : function(){

  },
  readyOrbit : function(){
  }
}

var View = new MoonView();