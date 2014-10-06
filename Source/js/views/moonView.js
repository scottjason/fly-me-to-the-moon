function MoonView() {
  if (!( this instanceof MoonView )) {
    return new MoonView();
  }
};

MoonView.prototype = {
  startRotation : function( setRate ){
    var previousTime = Date.now();
    this.spinListener = function( clock ) {
      var spinRate = setRate;
      var currentTime = Date.now();
      var delta = ( currentTime - previousTime ) / 1000;
        previousTime = currentTime;
        viewer.scene.camera.rotate( Cesium.Cartesian3.UNIT_Z, -spinRate * delta );
    }
        viewer.clock.onTick.addEventListener( this.spinListener );
  },
  stopRotation: function() {
    if ( this.spinListener ) {
      viewer.clock.onTick.removeEventListener( this.spinListener );
    }
  },
  homeSlideOut : function() {   // SLIDE OUT NAV ON USER SELECT
      var outOptions = [ "slide", { direction: "right" }, 450 ];
      $("#toTheMoon").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#anywhereButHere").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#takeControl").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#takeMeHome").toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
  controlSlideOut : function() {  // SLIDE OUT NAV ON USER SELECT
      var outOptions = [ "slide", { direction: "right" }, 450 ];
      $("#toTheMoon").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#anywhereButHere").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#takeControl").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#takeMeHome").toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
  anywhereSlideOut : function() {  // SLIDE OUT NAV ON USER SELECT
      var outOptions = [ "slide", { direction: "right" }, 450 ];
      $("#toTheMoon").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#anywhereButHere").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#takeControl").toggle( outOptions[0], outOptions[1], outOptions[2] );
      $("#takeMeHome").toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
  moonSlideOut : function() {  // SLIDE OUT NAV ON USER SELECT
      var outOptions = [ "slide", { direction: "right" }, 450 ];
      $( "#toTheMoon" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
      $( "#anywhereButHere" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
      $( "#takeControl" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
      $( "#takeMeHome" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
  slideInAll : function() {  // SLIDE IN NAV ON USER SELECT NEW
        console.log( this );
    },
  hideElemsForHome : function() {   // HIDE ON USER-SELECT HOME
      $( "#giveInstructions" ).hide();
      $( "#paradiseLocation" ).hide();
      $( "#userLocation" ).hide();
  },
  renderHomeElems : function( location ) {   // RENDER ON USER-SELECT HOME
      $( "#userLocation" ).show();
      $( "#userLocation" ).html( "flying you home to " + location );
 },
  hideElemsForControl : function() {   // HIDE ON USER-SELECT CONTROL
      $( "#userLocation" ).hide();
      $( "#paradiseLocation" ).hide();
      $( "#giveInstructions" ).hide();
 },
  renderControlElems : function() {   // RENDER ON USER-SELECT CONTROL
      $( "#giveInstructions" ).show();
      $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" );
 },
  hideElemsForAnywhere : function() {   // HIDE ON USER-SELECT ANYWHERE
      $( "#giveInstructions" ).hide();
      $( "#userLocation" ).hide();
      $( "#paradiseLocation" ).hide();
  },
  renderAnywhereElems : function( content ) {  // RENDER ON USER-SELECT ANYWHERE
      $( "#paradiseLocation" ).show();
      $( "#paradiseLocation" ).html( "You are visiting paradise on Earth. Welcome to " + content );
 },
  hideElemsForMoon : function() {   // HIDE ON USER-SELECT MOON
      $( "#paradiseLocation" ).hide();
      $( "#giveInstructions" ).hide();
      $( "#userLocation" ).hide();
 },
  renderMoonElems : function() {   // RENDER ON USER-SELECT MOON
 }
}

var moonView = new MoonView();