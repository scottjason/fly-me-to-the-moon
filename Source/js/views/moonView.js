function MoonView() {
  if (!( this instanceof MoonView )) {
    return new MoonView();
  }
};

MoonView.prototype = {
  initialize : function( callback ){
    this.spinGlobe( 0.45 );
    callback();
  },
  spinGlobe : function( setRate ){
    var previousTime = Date.now();
    this.spinListener = function( clock ) {
      var spinRate = setRate;
      var currentTime = Date.now();
      var delta = ( currentTime - previousTime ) / 1000;
        previousTime = currentTime;
        viewer.scene.camera.rotate( Cesium.Cartesian3.UNIT_Z, -spinRate * delta );
    }
        viewer.clock.onTick.addEventListener( this.spinListener );
  },
  stopGlobe : function() {
    if ( this.spinListener ) {
      viewer.clock.onTick.removeEventListener( this.spinListener );
    }
  }
}

var moonView = new MoonView();