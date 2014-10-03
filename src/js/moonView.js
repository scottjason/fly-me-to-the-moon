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
    callback();
  },
  spinGlobe : function( status ){
    var viewer = this.viewer;
    var scene = this.scene;
    var clock = this.clock;

    function rotate() {
      Sandcastle.declare( rotate );
       var vm = viewer.homeButton.viewModel;
       vm.duration = 0.0;
       vm.command();
       vm.duration = 3.0;
       clock.multiplier = 3 * 60 * 60;
       scene.preRender.addEventListener( referenceFrame );
       scene.globe.enableLighting = true;
    }
      rotate();
      function referenceFrame( scene, time ) {
        if ( document.status === null) { scene.preRender.removeEventListener( referenceFrame ) }
        if ( scene.mode !== Cesium.SceneMode.SCENE3D ) { return; }
        var icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix( time );
        if ( Cesium.defined( icrfToFixed )) {
          scene.camera.transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed, Cesium.Cartesian3.ZERO);
        }
      }
  },
  renderInstructions : function() {
    $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" )
  },
  spinStatus : function( status ){
    document.status = status;
  }
}

var moonView = new MoonView();