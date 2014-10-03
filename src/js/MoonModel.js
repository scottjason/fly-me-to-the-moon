function MoonModel() {
  if (!( this instanceof MoonModel )) {
    return new MoonModel();
  }
}

MoonModel.prototype = {
  initialize : function( viewer, clock, scene, canvas ){
    this.clock = clock;
    this.viewer = viewer;
    this.camera = scene.camera;
    this.userControl( canvas, scene );
  },
  userControl : function( canvas, scene ) {
    canvas.setAttribute('tabindex', '0');
    canvas.onclick = function() {
      canvas.focus();
  };
    this.disableHandlers( canvas, scene );
  },
  disableHandlers : function( canvas, scene ) {
    scene.screenSpaceCameraController.enableRotate = false;
    scene.screenSpaceCameraController.enableTranslate = false;
    scene.screenSpaceCameraController.enableZoom = false;
    scene.screenSpaceCameraController.enableTilt = false;
    scene.screenSpaceCameraController.enableLook = false;
    this.setFlags( canvas, scene );
  },
  setFlags : function( canvas, scene ) {
    var flags = {
      looking : false,
      moveForward : false,
      moveBackward : false,
      moveUp : false,
      moveDown : false,
      moveLeft : false,
      moveRight : false
     }
     this.setActionHandler( canvas, flags, scene );
  },
  setActionHandler : function( canvas, flags, scene ) {

     this.handler = new Cesium.ScreenSpaceEventHandler( canvas );
     this.handler.setInputAction(function( movement ) {
    flags.looking = true;
    mousePosition = startMousePosition = Cesium.Cartesian3.clone( movement.position );
    },
      Cesium.ScreenSpaceEventType.LEFT_DOWN );

    this.handler.setInputAction(function( movement ) {
    mousePosition = movement.endPosition;
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE );

    this.handler.setInputAction(function( position ) {
    flags.looking = false;
    }, Cesium.ScreenSpaceEventType.LEFT_UP );

    this.bindActionListeners( canvas, flags, scene );
  },
  getFlagForKeyCode : function( keyCode ) {
    switch ( keyCode ) {
    case 'F'.charCodeAt( 0 ):
        return 'moveForward';
    case 'B'.charCodeAt( 0 ):
        return 'moveBackward';
    case 'U'.charCodeAt( 0 ):
        return 'moveUp';
    case 'D'.charCodeAt( 0 ):
        return 'moveDown';
    case 'R'.charCodeAt( 0 ):
        return 'moveRight';
    case 'L'.charCodeAt( 0 ):
        return 'moveLeft';
    default:
        return undefined;
    }
  },
  bindActionListeners : function( canvas, flags, scene ) {
    document.addEventListener('keydown', function( e ) {
      var flagName = this.getFlagForKeyCode( e.keyCode );
      if ( typeof flagName !== 'undefined' ) {
       flags[flagName] = true;
     }
    }, false );

document.addEventListener('keyup', function( e ) {
    var flagName = this.getFlagForKeyCode( e.keyCode );
    if ( typeof flagName !== 'undefined' ) {
        flags[flagName] = false;
      }
    }, false );
    this.setCamera( canvas, flags, scene );
  },
  setCamera : function( canvas, flags, scene ) {
    this.viewer.clock.onTick.addEventListener(function( clock ) {
    if ( flags.looking ) {
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        var x = ( this.mousePosition.x - this.startMousePosition.x ) / width;
        var y = -( this.mousePosition.y - this.startMousePosition.y ) / height;

        var lookFactor = 0.05;
        this.camera.lookRight( x * lookFactor );
        this.camera.lookUp( y * lookFactor );
    }
  // changes movement speed based on the distance of the camera to the surface of the ellipsoid.
    var ellipsoid = scene.globe.ellipsoid;
    console.log( ellipsoid )
    // var cameraHeight = this.ellipsoid.cartesianToCartographic( this.camera.position ).height;
    return
    var moveRate = cameraHeight / 100.0;

    if ( flags.moveForward ) {
        this.camera.moveForward( moveRate );
    }
    if ( flags.moveBackward ) {
        this.camera.moveBackward( moveRate );
    }
    if ( flags.moveUp ) {
        this.camera.moveUp( moveRate );
    }
    if ( flags.moveDown ) {
        this.camera.moveDown( moveRate );
    }
    if ( flags.moveLeft ) {
        this.camera.moveLeft( moveRate );
    }
    if ( flags.moveRight ) {
        this.camera.moveRight( moveRate );
    }
  })
 }
}







var Model = new MoonModel();