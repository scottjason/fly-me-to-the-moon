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
        var aucklandIslands = [166.132858, -50.771492];
        var muKoAngThong = [99.674048, 9.626544];
        var cocosIsland = [96.841739, 12.170874];
        var phoenixIslands = [-171.244968, -4.453148];
        var mamanucaIslands = [177.083333, -17.666667];
        var tetepareIsland = [157.558933, -8.741283];
        var silkCaye = [-88.303272, 16.510085];
        var southWaterCaye = [-60.850000, 14.666667];
        var goffsCaye = [-88.037222, 17.348889];
        var tobaccoCaye = [-88.061673, 16.898333];
        var cayeCaulker = [-88.027749, 17.761158];
        var ambergrisCaye = [-87.943284, 18.001592];
        var alorIsland = [124.729877, -8.275403];
        var westTimor = [125.101408, -9.095135];
        var sumbawa = [117.361648, -8.652933];
        var sumba = [119.974053, -9.699344];
        var floresIsland = [121.079370, -8.657382];
        var lombok = [116.324944, -8.650979];

        this.paradiseArr.push( aucklandIslands, muKoAngThong, cocosIsland, phoenixIslands, mamanucaIslands, tetepareIsland, silkCaye, southWaterCaye, goffsCaye, tobaccoCaye, cayeCaulker, ambergrisCaye, alorIsland, westTimor, sumbawa, sumba, floresIsland, lombok );
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
        this.reverseGeoRequest( result[0], callback );
    },
    flyMeToParadise: function( position ) {
            scene.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees( position[0], position[1], 15000.0),
                duration : 4,
            })
        },
    reverseGeoRequest : function( results, callback ) {
      $.ajax({
        url: 'http://dev.virtualearth.net/REST/v1/Locations/' + results[1] + ',' + results[0] + '?o=json&key=AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG',
        type: "GET",
        dataType: "JSONP",
        jsonp: "JSONP",
      success: function( data ) {
        if ( data.resourceSets[0].resources[0] == undefined ) { return }
          else {
        callback ( data.resourceSets[0].resources[0].address.formattedAddress );
        }
       }
    })
  }
}

var anywhereElse = new AnywhereElse();