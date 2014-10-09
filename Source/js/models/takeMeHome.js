function TakeMeHome() {
  if (!( this instanceof TakeMeHome )) {
    return new TakeMeHome();
  }
}

TakeMeHome.prototype = {
  flyHome : function( callback ) {
      makeRequest = this.requestLocationData;
      function errorHandler( error ){
        if ( error.code == 1 ) {
        alert( 'We were unable to collect your location. You many need to modify your browser settings.' );
      }
    }

    function fly( position ) {
      makeRequest( position, callback );
        scene.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees( position.coords.longitude, position.coords.latitude, 1000.0 )
        });
     }
    // collect user's geolocation, invoke fly on complete
    if ( navigator.geolocation && typeof ( navigator.geolocation.getCurrentPosition ) == "function") {
         navigator.geolocation.getCurrentPosition( fly, errorHandler, { maximumAge: 75000 } );
    }
    else {
      alert( "Unable to collect your current location. Please check your browser settings.")
    }
  },
   requestLocationData : function( position, callback ) {

    function formatAddress( results, status ){
      if ( status == google.maps.GeocoderStatus.OK ) {
        getLocationData( results[1].formatted_address, position, callback )
     }
    }

    function getLocationData( address, position, callback ) {
      var requestData = $.ajax({
          url: 'https://api.forecast.io/forecast/076b3550601b4d80a74763b15e71b64d/' + position.coords.latitude + ',' + position.coords.longitude,
          type: 'GET',
          dataType: 'JSONP'
        });
        requestData.done(function( data ) {
          callback( address, data.currently.temperature, data.currently.summary, data.currently.precipProbability );
        });
        requestData.fail(function( textStatus ) {
        console.log( "Request failed: " + textStatus );
      });
    }

    var latLng = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );
    var coder = new google.maps.Geocoder();
      coder.geocode( { 'latLng': latLng }, formatAddress );
 }
}

var takeMeHome = new TakeMeHome();