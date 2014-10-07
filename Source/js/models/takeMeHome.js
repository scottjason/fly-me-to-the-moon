function TakeMeHome() {
  if (!( this instanceof TakeMeHome )) {
    return new TakeMeHome();
  }
}

TakeMeHome.prototype = {
  flyHome : function( callback ) {
      var makeRequest = this.reverseGeoRequest;
      function fly( position ) {
        makeRequest( position, callback );
          scene.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees( position.coords.longitude, position.coords.latitude, 1000.0 )
          });
       }
    // collect user's geolocation, invoke fly on complete
    if ( navigator.geolocation && typeof ( navigator.geolocation.getCurrentPosition ) == "function") {
         navigator.geolocation.getCurrentPosition( fly );
    }
    else {
      alert( "Unable to collect your current location. Please check your browser settings.")
    }
  },
  reverseGeoRequest : function( position, callback ) {
    $.ajax({
      url: 'http://dev.virtualearth.net/REST/v1/Locations/' + position.coords.latitude + ',' + position.coords.longitude + '?o=json&key=AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG',
      type: 'GET',
      dataType: 'JSONP',
      jsonp: 'JSONP',
      success: function( data ) {
        callback ( data.resourceSets[0].resources[0].address.formattedAddress );
       }
    })
  }
}

var takeMeHome = new TakeMeHome();