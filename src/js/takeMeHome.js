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
    // remove instructions
    $( "#giveInstructions" ).hide();
    var scene = this.scene;
    function flyToLocation() {
      Sandcastle.declare( flyToLocation );
      // create callback for user's geolocation
      function fly( position ) {
        TakeMeHome.prototype.createReverseGeo( position );
         scene.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees( position.coords.longitude, position.coords.latitude, 1000.0 )
        });
       }
    // collect user's geolocation, invoke fly() on complete
    if ( navigator.geolocation && typeof ( navigator.geolocation.getCurrentPosition ) == "function") {
         navigator.geolocation.getCurrentPosition( fly );
    }
    else {
      alert( "Unable to collect your current location. Please check your browser settings.")
    }
  }
  // initial call
  flyToLocation( scene );
 },
 createReverseGeo : function( position ) {
    var latLng = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );
    var coder = new google.maps.Geocoder();
    coder.geocode( { 'latLng': latLng }, this.formatUserAddress.bind( this ), { maximumAge: 75000 }  );
 },
 formatUserAddress : function( results, status ) {
   if ( status == google.maps.GeocoderStatus.OK ) {
    var location = results[1].formatted_address;
  }
  this.renderUserAddress( location );
 },
 renderUserAddress : function( location ) {
  $( "#userLocation" ).html("flying you home to " + location );
  }
}

var takeMeHome = new TakeMeHome();