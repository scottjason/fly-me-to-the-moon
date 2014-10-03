function TakeMeHome() {
  if (!( this instanceof TakeMeHome )) {
    return new TakeMeHome();
  }
}

TakeMeHome.prototype = {
  initialize : function( scene ) {
    this.scene = scene;
    this.flyHome();
  },
  flyHome : function() {
    var scene = this.scene;
    function flyToLocation() {
      Sandcastle.declare( flyToLocation );

    // Create callback for user's geolocation
      function fly( position ) {
        scene.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 1000.0)
        });
    }
    // collect user's geolocation, invoke fly() on complete
    navigator.geolocation.getCurrentPosition( fly );
  }
  // initial call
  flyToLocation( scene );
 }
}

var takeMeHome = new TakeMeHome();