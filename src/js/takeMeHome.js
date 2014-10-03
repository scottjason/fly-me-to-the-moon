function TakeMeHome() {
  if (!( this instanceof TakeMeHome )) {
    return new TakeMeHome();
  }
}

TakeMeHome.prototype = {
  initialize : function( viewer, clock, scene ) {
    this.viewer = viewer;
    this.clock = clock;
    this.scene = scene;
    this.flyHome();
  },
  flyHome : function() {
    var scene = this.scene;
    function flyToLocation() {
      Sandcastle.declare(flyToLocation);

    // Create callback for browser's geolocation
      function fly( position ) {
        scene.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 1000.0)
        });
    }
    // Ask browser for location, and fly there.
    navigator.geolocation.getCurrentPosition(fly);
  }
  flyToLocation( scene );
 }
}

var takeMeHome = new TakeMeHome();