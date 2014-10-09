function AnywhereElse() {
    if (!( this instanceof AnywhereElse )) {
        return new AnywhereElse();
    }
};

AnywhereElse.prototype = {
    initialize: function( callback ) {
        this.paradiseArr = [];
        this.paradiseLocations( callback );
    },
    paradiseLocations: function( callback ) {
        var kiheiHw = [20.7882940,-156.4596650];
        var jalanIndo = [-5.3256660,123.5439320];
        var coastBelize = [17.0963230,-88.3377970];
        var eparchiakiGreece = [36.3931560,25.4615090];
        var frenchPolynesia = [-17.7559830,-149.5111940];
        var saintKitts = [17.3578220,-62.7829980];
        var ganMaldives = [1.9772470, 73.5361030];
        var caymanIslands = [19.3133000, -81.2546000];
        var kingsRoadFiji = [-17.4015930, 178.2584190];
        var kubuIndo = [-8.3090120, 115.5652490];
        var kalalauHw = [22.1902180, -159.6325990];
        var crocusAnguilla = [18.2205540, -63.0686150];
        var newZealand = [-50.7714920, 166.1328580];
        var santaElena = [-2.2322970, -80.8568330];
        var placenciaBeliz = [16.5152450, -88.3663520];

        this.paradiseArr.push( kiheiHw, jalanIndo, coastBelize, eparchiakiGreece, eparchiakiGreece, frenchPolynesia, saintKitts, ganMaldives, caymanIslands, kingsRoadFiji, kubuIndo, kalalauHw, crocusAnguilla, newZealand, santaElena, placenciaBeliz )
        this.makeRandomSelection( 1, callback );
    },
    makeRandomSelection: function( numNeeded, callback ) {
        var result = new Array( numNeeded ),
            len = this.paradiseArr.length,
            taken = new Array(len);
        if ( numNeeded > len )
            throw new RangeError( "makeRandomSelection : more elements taken than available" );
        while ( numNeeded-- ) {
            var selectedLocation = Math.floor( Math.random() * len );
            result[numNeeded] = this.paradiseArr[selectedLocation in taken ? taken[selectedLocation] : selectedLocation];
            taken[selectedLocation] = --len;
        }
        this.flyMeToParadise( result[0] );
        this.requestLocationData( result[0], callback );
    },
    flyMeToParadise: function( position ) {
            scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees( position[1], position[0], 12500.0),
                duration : 4,
            })
        },
   requestLocationData : function( position, callback ) {
    function formatAddress( results, status ){
      if ( status == google.maps.GeocoderStatus.OK ) {
        getLocationData( results[0].formatted_address, position, callback )
     }
    }

    function getLocationData( address, position, callback ) {
      var requestData = $.ajax({
          url: 'https://api.forecast.io/forecast/076b3550601b4d80a74763b15e71b64d/' + position[0] + ',' + position[1],
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

    var latLng = new google.maps.LatLng( position[0], position[1] );
    var coder = new google.maps.Geocoder();
        coder.geocode( { 'latLng': latLng }, formatAddress );
 }
}

var anywhereElse = new AnywhereElse();