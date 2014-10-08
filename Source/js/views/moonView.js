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
  hideLoadingHome : function( callback, location, currentTemp, summary, chanceOfRain ) {
    $( ".loadingData" ).velocity( "transition.slideDownOut", 250 );
    setTimeout( callback.bind( this, location, currentTemp, summary, chanceOfRain ), 1000 );
  },
  renderHomeElems : function( location, currentTemp, summary, chanceOfRain ) {
    $( "#userLocation" ).velocity( "transition.slideDownIn", 900).delay( 1500 ).html( "Flying you home to " + location + "<br>" + "<span style=color:#777>" +  "The current weather : " + summary.toLowerCase() + ' with a temperate of ' + currentTemp + '.' + ' The chance of rain is ' + chanceOfRain + ' percent.' + '</span>' )
    this.renderCameraReset();
  },
    hideControlElems : function( callback) {
    $( ".loadingData" ).velocity( "transition.slideDownOut", 150 );
    setTimeout( callback.bind( this ), 1200 );
  },
  renderControlElems : function() {
    $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" ).slideDown( 600 );
    this.renderCameraReset();
  },
  hideLoadingAnywhere : function( callback, location, currentTemp, summary, chanceOfRain ) {
    $( ".loadingData" ).velocity("transition.slideDownOut", 250 );
    setTimeout( callback.bind( this, location, currentTemp, summary, chanceOfRain ), 1000 );
  },
  renderAnywhereElems : function( location, currentTemp, summary, chanceOfRain ) {
    $( "#paradiseLocation" ).velocity( "transition.slideDownIn", 900).delay( 1500 ).html( "Welcome to " + location + "<br>" + "<span style=color:#777>" +  "the current weather: " + summary.toLowerCase() + ' with a temperate of ' + currentTemp + '.' + ' The chance of rain is ' + chanceOfRain + ' percent.' + '</span>' )
    this.renderCameraReset();
  },
    hideMoonElems : function( callback, moonAge, moonPhase, moonIllumination ) {
    $( ".loadingData" ).velocity("transition.slideDownOut", 250 );

    setTimeout( callback.bind( this, moonAge, moonPhase, moonIllumination ), 1000 );
  },
  renderMoonElems : function( moonAge, moonPhase, moonIllumination ) {
    if( moonAge > 2 ) {
      var daysOld = "day old.";
    }
    else {
      var daysOld = "days old.";
    }
    $( "#moonData" ).velocity( "transition.slideDownIn", 900).delay( 1500 ).html( "At this moment, it's a " + moonAge + " " + daysOld + moonPhase.toLowerCase() + " moon. From your perspective it's currently " + moonIllumination + " percent illuminated." + "<br>"  + " The moon we share is 238,900 miles away. One day on the moon is equivalent to approximately 30 Earth days.");
    this.renderCameraReset();
  },
  renderCameraReset : function() {
    console.log("made it to reset")
    $( "#resetText" ).velocity("transition.perspectiveRightIn", {
      visibility : "visible",
      delay : 3500,
      duration : 600
    })
  }
}

var moonView = new MoonView();