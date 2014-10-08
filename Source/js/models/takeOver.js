function TakeOver() {
  if (!( this instanceof TakeOver )) {
    return new TakeOver();
  }
}

TakeOver.prototype = {
  initialize : function(){
    this.setCanvas();
  },
  setCanvas : function() {
    canvas.setAttribute('tabindex', '0');
    canvas.onclick = function() {
      canvas.focus();
  };
    this.disableHandlers();
  },
  disableHandlers : function() {
    scene.screenSpaceCameraController.enableRotate = false;
    scene.screenSpaceCameraController.enableTranslate = false;
    scene.screenSpaceCameraController.enableZoom = false;
    scene.screenSpaceCameraController.enableTilt = false;
    scene.screenSpaceCameraController.enableLook = false;
    this.setFlags();
  },
  setFlags : function () {
    this.flags = {
      looking : false,
      moveForward : false,
      moveBackward : false,
      moveUp : false,
      moveDown : false,
      moveLeft : false,
      moveRight : false
     };
     this.setActionHandler();
  },
  setActionHandler : function() {
     var flags = this.flags;

     this.handler = new Cesium.ScreenSpaceEventHandler( canvas );
     this.handler.setInputAction(function( movement ) {
      flags.looking = true;
    this.mousePosition = startMousePosition = Cesium.Cartesian3.clone( movement.position );
    },
      Cesium.ScreenSpaceEventType.LEFT_DOWN );

    this.handler.setInputAction(function( movement ) {
    this.mousePosition = movement.endPosition;
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE );

    this.handler.setInputAction(function( position ) {
    flags.looking = false;
    }, Cesium.ScreenSpaceEventType.LEFT_UP );

    this.bindActionListeners();
  },
  bindActionListeners : function() {

  function getFlagForKeyCode( keyCode ) {
    switch ( keyCode ) {
    case 'F'.charCodeAt( 0 ):
        return 'moveForward';
    case 'B'.charCodeAt( 0 ):
        return 'moveBackward';
    case 'D'.charCodeAt( 0 ):
        return 'moveUp';
    case 'U'.charCodeAt( 0 ):
        return 'moveDown';
    case 'L'.charCodeAt( 0 ):
        return 'moveRight';
    case 'R'.charCodeAt( 0 ):
        return 'moveLeft';
    default:
        return undefined;
    }
  }
    var flags = this.flags;
    document.addEventListener('keydown', function( e ) {
      var flagName = getFlagForKeyCode( e.keyCode );
      if ( typeof flagName !== 'undefined' ) {
       flags[flagName] = true;
     }
    }, false );

    document.addEventListener('keyup', function( e ) {
    var flagName = getFlagForKeyCode( e.keyCode );
    if ( typeof flagName !== 'undefined' ) {
        flags[flagName] = false;
      }
    }, false );
    this.setCamera();
  },
  setCamera : function() {
    var flags = this.flags;
    var camera = scene.camera;
    this.controlListener = function( clock ) {
    if ( flags.looking ) {
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        var x = ( this.mousePosition.x - this.startMousePosition.x ) / width;
        var y = -( this.mousePosition.y - this.startMousePosition.y ) / height;

        var lookFactor = 0.05;
        camera.lookRight( x * lookFactor );
        camera.lookUp( y * lookFactor );
   }
  // changes movement speed based on the distance of the camera to the surface of the ellipsoid.
    var ellipsoid = scene.globe.ellipsoid;
    var cameraHeight = ellipsoid.cartesianToCartographic( camera.position ).height;

    var moveRate = cameraHeight / 100.0;

    if ( flags.moveForward ) {
        camera.moveForward( moveRate );
    }
    if ( flags.moveBackward ) {
        camera.moveBackward( moveRate );
    }
    if ( flags.moveUp ) {
        camera.moveUp( moveRate );
    }
    if ( flags.moveDown ) {
        camera.moveDown( moveRate );
    }
    if ( flags.moveLeft ) {
        camera.moveLeft( moveRate );
    }
    if ( flags.moveRight ) {
        camera.moveRight( moveRate );
    }
  }
  viewer.clock.onTick.addEventListener( this.controlListener );
 },
 stopControl : function() {
 if ( this.controlListener ) {
   viewer.clock.onTick.removeEventListener( this.controlListener );
  }
 }
};

var takeOver = new TakeOver();