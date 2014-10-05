function AnywhereElse() {
    if (!(this instanceof AnywhereElse)) {
        return new AnywhereElse();
    }
};

AnywhereElse.prototype = {
    initialize: function( viewer, scene, callback ) {
        var scene = viewer.scene;
        var camera = scene.camera;
        this.flyMeToParadise( [-151.741490,-16.500413], scene.camera );
        // this.paradiseLocations( scene.camera, callback );
    },
    paradiseLocations: function( sceneCamera, callback ) {
        this.paradiseArr = [];
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
        this.makeRandomSelection( sceneCamera, 1, callback );
    },
    makeRandomSelection: function(sceneCamera, numNeeded, callback) {
        var result = new Array( numNeeded ),
            len = this.paradiseArr.length,
            taken = new Array(len);
        if ( numNeeded > len )
            throw new RangeError("getRandom: more elements taken than available");
        while ( numNeeded-- ) {
            var selectedLocation = Math.floor( Math.random() * len );
            result[numNeeded] = this.paradiseArr[selectedLocation in taken ? taken[selectedLocation] : selectedLocation];
            taken[selectedLocation] = --len;
        }
        this.flyMeToParadise( result[0], sceneCamera );
        this.reverseGeoCoords( result[0], callback );
        this.collectLocationData( result[0] );
    },
    flyMeToParadise: function( paradiseMe, sceneCamera) {
        function flyParadise( paradiseMe, sceneCamera ) {
            Sandcastle.declare(flyParadise);
            sceneCamera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees( paradiseMe[0], paradiseMe[1], 1500.0 )
            })
        }
        flyParadise( paradiseMe, sceneCamera );
    },
    reverseGeoCoords: function( position, callback ) {
        this.callback = callback;
        var latLng = new google.maps.LatLng( position[0], position[1] );
        var coder = new google.maps.Geocoder();
        coder.geocode( { 'latLng': latLng }, this.formatAddress.bind( this ), { maximumAge: 75000 } );
    },
    formatAddress: function( results, status ) {
        if ( status == google.maps.GeocoderStatus.OK ) {
            var location = results[0].formatted_address;
        }
        this.renderLocation( location );
    },
    renderLocation: function( location ) {
        console.log( location );
        this.callback( location );
    },
    collectLocationData: function( lat, lng ) {
        $.ajax({
            url: "http://dev.virtualearth.net/REST/v1/Locations/47.64054,-122.12934?o=json&key=AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG",
            type: "GET",
            dataType: "JSONP",
            jsonp: "JSONP",
            success: function( data ) {
            console.log( data.resourceSets[0].resources[0] );
            }
        })
    }
}

var anywhereElse = new AnywhereElse();