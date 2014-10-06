function TakeMeHome() {
  if (!( this instanceof TakeMeHome )) {
    return new TakeMeHome();
  }
}

TakeMeHome.prototype = {
  initialize : function( callback ) {
    this.flyHome( callback );
  },
  flyHome : function( callback ) {
    function flyToLocation() {
      Sandcastle.declare( flyToLocation );
      // create callback for user's geolocation
      function fly( position ) {
        TakeMeHome.prototype.createReverseGeo( position, callback );
        // TakeMeHome.prototype.collectLocationData( position );
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
 createReverseGeo : function( position, callback ) {
    this.callback = callback;
    var latLng = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );
    var coder = new google.maps.Geocoder();
    coder.geocode( { 'latLng': latLng }, this.formatUserAddress.bind( this ), { maximumAge: 75000 }  );
 },
 formatUserAddress : function( results, status ) {
   if ( status == google.maps.GeocoderStatus.OK ) {
     this.callback( results[1].formatted_address )
  } else {
    return
  }
 },
   collectLocationData: function( position ) {
        console.log( position )
        $.ajax({
            url: 'http://dev.virtualearth.net/REST/v1/Locations/' + position[0] + position[1] + '?o=json&key=AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG',
            type: "GET",
            dataType: "JSONP",
            jsonp: "JSONP",
            success: function( data ) {
            console.log( data );
            }
        })
    }
}

var takeMeHome = new TakeMeHome();