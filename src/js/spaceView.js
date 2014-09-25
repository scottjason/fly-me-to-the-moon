MoonFlyer.SpaceView = {
   initialize : function( controller ){
     var container = 'cesiumContainer';
     var options = {
       animation: false,
       homeButton: false,
       sceneModePicker: false,
       selectionIndicator: false,
       baseLayerPicker: false,
       timeline: false,
       navigationHelpButton: false,
       navigationInstructionsInitiallyVisible: false
     }
       this.renderGlobe( controller, container, options );
  },
    renderGlobe : function( controller, container, options  ) {
      var viewer = new Cesium.Viewer( container, options );
      var clock = viewer.clock;
        controller.exploreEarth( viewer, clock );
        controller.sayGoodBye( this.flyToMoon );
  },
    flyToMoon : function(){

    },
    readyOrbit : function( callback ){
  }
}