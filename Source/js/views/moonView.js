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
  slideOutNav : function() {
     $( ".navRightText" ).velocity("transition.perspectiveRightOut", {
      duration : 600
     })
    $( ".loadingData" ).velocity( "transition.slideDownIn");
  },
  slideInNav : function() {
    $( "#userLocation" ).hide();
    $( "#giveInstructions" ).hide();
    $( "#paradiseLocation" ).hide();
    $( ".navRightText" ).velocity( "transition.flipBounceXIn", {
      duration : 600
     })
    $( "#resetText" ).velocity("transition.perspectiveRightOut", {
      visibility : "hidden",
      display: null, visibility: 'hidden',
      duration : 1200
    })
  },
  hideLoadingHome : function( callback, location ) {
    this.location = location
  $( ".loadingData").velocity("transition.slideDownOut", 250);
    setTimeout( callback.bind( this ), 1000 );
  },
  renderHomeElems : function( location ) {
    $( "#userLocation" ).velocity( "transition.slideDownIn", 900).delay( 1500 ).html( "flying you home to " + this.location )
    this.showResetText();
  },
  renderControlElems : function() {
    $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" ).slideDown( 600 );
  },
  renderAnywhereElems : function( content ) {
    $( "#paradiseLocation" ).html( "Welcome to " + content ).slideDown( 600 );
  },
  renderMoonElems : function() {
 },
 showResetText : function() {
    $( "#resetText" ).velocity("transition.perspectiveRightIn", {
      visibility : "visible",
      delay : 3500,
      duration : 600
    })
  }
}

var moonView = new MoonView();