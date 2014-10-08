function MoonFlyer() {
  if (!( this instanceof MoonFlyer )) {
    return new MoonFlyer();
  }
}

MoonFlyer.prototype = {
  goodByeAtmosphere : function( setRate, callback, moonScene, moonAnimate ) {
    count = 0;
    ellipsoid = scene.globe.ellipsoid;
    camera = scene.camera
    cameraHeight = ellipsoid.cartesianToCartographic( camera.position ).height;
    moveRate = cameraHeight / 35.0;
    previousTime = Date.now();
    this.moonSpinner = function( clock ) {
      var spinRate = setRate;
      var currentTime = Date.now();
      var delta = ( currentTime - previousTime ) / 1000;
        previousTime = currentTime;
        // console.log( -spinRate * delta )
        viewer.scene.camera.rotate( Cesium.Cartesian3.UNIT_X, -spinRate * delta );
        viewer.scene.camera.rotate( Cesium.Cartesian3.UNIT_Y, -spinRate * delta );
    }
      viewer.clock.onTick.addEventListener( this.moonSpinner );
      this.goodByeEarth( this.moonSpinner, moonScene, moonAnimate );
  },
  goodByeEarth : function( moonSpinner, moonScene, moonAnimate ) {
    var initMoon = this.initMoon;
    var removeListener = this.removeListener;
      function moveCamera() {
        count++
          if ( count === 240 ) {
          $( "#cesiumContainer" ).velocity( "fadeOut", { duration: 3800 } );
         setTimeout(initMoon.bind( this, removeListener, moonSpinner, moonScene, moonAnimate ), 3400 )
      } else {
          camera.moveBackward( moveRate );
          camera.moveRight( moveRate * .36 );
          setTimeout( moveCamera, 30 );
        }
      }
      moveCamera()
    },
    initMoon : function( removeListener, moonSpinner, moonScene, moonAnimate ){
      moonScene( moonAnimate );
      setTimeout( removeListener.bind( this, moonSpinner), 1000 );
    },
    removeListener : function( moonSpinner) {
      viewer.clock.onTick.removeEventListener( moonSpinner );

  }
}

var moonFlyer = new MoonFlyer();