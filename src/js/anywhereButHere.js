function AnywhereElse() {
  if (!( this instanceof AnywhereElse )) {
    return new AnywhereElse();
  }
};

AnywhereElse.prototype = {
  initialize : function( viewer, scene, callback ) {
    var scene = viewer.scene;
    this.paradiseLocations( scene.camera, callback );
  },
  paradiseLocations : function( sceneCamera, callback ) {
    this.paradiseArr = [];
      var aucklandIslands = [-50.771492, 166.132858];
      var muKoAngThong = [9.626544, 99.674048];
      var cocosIsland = [12.170874, 96.841739];
      var phoenixIslands = [-4.453148, -171.244968];
      var mamanucaIslands = [-17.666667, 177.083333];
      var tetepareIsland = [-8.741283, 157.558933];
      var silkCaye = [16.510085, -88.303272];
      var southWaterCaye = [14.666667, -60.850000];
      var goffsCaye = [17.348889, -88.037222];
      var tobaccoCaye = [16.898333, -88.061673];
      var cayeCaulker = [17.761158, -88.027749];
      var ambergrisCaye = [18.001592, -87.943284];
      var alorIsland = [-8.275403, 124.729877];
      var westTimor = [-9.095135, 125.101408];
      var sumbawa = [-8.652933, 117.361648];
      var sumba = [-9.699344, 119.974053];
      var floresIsland = [-8.657382, 121.079370];
      var lombok = [-8.650979, 116.324944];

    this.paradiseArr.push( aucklandIslands, muKoAngThong, cocosIsland, phoenixIslands, mamanucaIslands, tetepareIsland, silkCaye, southWaterCaye, goffsCaye, tobaccoCaye, cayeCaulker, ambergrisCaye, alorIsland, westTimor, sumbawa, sumba, floresIsland, lombok );
    this.makeRandomSelection( sceneCamera, 1, callback );
  },
  makeRandomSelection : function(sceneCamera, numNeeded, callback ) {
  var result = new Array( numNeeded ),
        len = this.paradiseArr.length,
        taken = new Array( len );
    if ( numNeeded > len )
        throw new RangeError("getRandom: more elements taken than available");
    while ( numNeeded-- ) {
        var x = Math.floor( Math.random() * len );
        result[numNeeded] = this.paradiseArr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    this.reverseGeoCoords( result[0], callback );
    this.flyMeToParadise( result[0], sceneCamera );
  },
  flyMeToParadise : function( paradiseMe, sceneCamera) {
    function flyParadise( paradiseMe ) {
    Sandcastle.declare( flyParadise );
    sceneCamera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees( paradiseMe[0], paradiseMe[1], 15000.0 )
     })
    }
    flyParadise( paradiseMe, sceneCamera );
  },
  reverseGeoCoords : function( position, callback ) {
    this.callback = callback;
    var latLng = new google.maps.LatLng( position[0], position[1] );
    var coder = new google.maps.Geocoder();
    coder.geocode( { 'latLng': latLng }, this.formatAddress.bind( this  ), { maximumAge: 75000 }  );
  },
  formatAddress : function( results, status ) {
   if ( status == google.maps.GeocoderStatus.OK ) {
    var location = results[0].formatted_address;
    }
    this.renderLocation( location )
  },
  renderLocation : function( location ) {
    this.callback( location );
  }
}

var anywhereElse = new AnywhereElse();