  var options = {
        animation: false,
        homeButton: true,
        sceneModePicker: false,
        selectionIndicator: false,
        baseLayerPicker: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false
     }
  var viewer = new Cesium.Viewer('cesiumContainer', options );
  var scene = viewer.scene;
  var clock = viewer.clock;
  var camera = scene.camera;


function MoonView() {
  if (!( this instanceof MoonView )) {
    return new MoonView();
  }
};

MoonView.prototype = {
  initialize : function( callback ){
    this.spinGlobe();
    callback();
  },
  spinGlobe : function(){
    function rotate() {
      Sandcastle.declare( rotate );
       var vm = viewer.homeButton.viewModel;
       vm.duration = 0.0;
       vm.command();
       vm.duration = 3.0;
       clock.multiplier = 3 * 60 * 60;
       scene.preRender.addEventListener( icrf );
       scene.globe.enableLighting = true;
    }
       rotate();

  function icrf(scene, time) {
    if ( scene.mode !== Cesium.SceneMode.SCENE3D ) { return; }
    var icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix( time );
    if ( Cesium.defined( icrfToFixed )) {
        scene.camera.transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed, Cesium.Cartesian3.ZERO);
      }
    }
  },
  renderInstructions : function() {
    $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" )
  }
}

var moonView = new MoonView();