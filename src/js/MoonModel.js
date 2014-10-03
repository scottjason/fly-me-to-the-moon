function MoonModel() {
  if (!( this instanceof MoonModel )) {
    return new MoonModel();
  }
}

MoonModel.prototype = {
  initialize : function( clock, viewer, scene, canvas ){
    this.clock = clock;
    this.viewer = viewer;
    this.scene = scene;
    this.userControl( canvas );
  },
  userControl : function( canvas ) {
    canvas.setAttribute('tabindex', '0');
    canvas.onclick = function() {
      canvas.focus();
  };
    this.disableHandlers( canvas );
  },
  disableHandlers : function( canvas ) {
    this.ellipsoid = this.scene.globe.ellipsoid;
    this.scene.screenSpaceCameraController.enableRotate = false;
    this.scene.screenSpaceCameraController.enableTranslate = false;
    this.scene.screenSpaceCameraController.enableZoom = false;
    this.scene.screenSpaceCameraController.enableTilt = false;
    this.scene.screenSpaceCameraController.enableLook = false;
    // this.setFlags();
  },
  setFlags : function() {
    this.startMousePosition;
    this.mousePosition;
    this.flags = {
      looking : false,
      moveForward : false,
      moveBackward : false,
      moveUp : false,
      moveDown : false,
      moveLeft : false,
      moveRight : false
     }
     // this.setActionHandler();
  },
  setActionHandler : function() {
     this.handler = new Cesium.ScreenSpaceEventHandler( this.canvas );

    this.handler.setInputAction(function( movement ) {
    this.flags.looking = true;
    this.mousePosition = startMousePosition = Cesium.Cartesian3.clone( movement.position );
    },
      Cesium.ScreenSpaceEventType.LEFT_DOWN );

    this.handler.setInputAction(function( movement ) {
    this.mousePositimovement.endPosition;
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE );

    this.handler.setInputAction(function( position ) {
    this.flags.looking = false;
    }, Cesium.ScreenSpaceEventType.LEFT_UP );

    // this.setKeyCodes();
  },
  setKeyCodes : function() {
  function getFlagForKeyCode( keyCode ) {
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
    }
    // this.bindActionListeners( keycode, getFlagForKeyCode );
  },
  bindActionListeners : function( keycode, getFlagForKeyCode ) {
    document.addEventListener('keydown', function( e ) {
      var flagName = getFlagForKeyCode( e.keyCode );
      if ( typeof flagName !== 'undefined' ) {
       this.flags[flagName] = true;
     }
    }, false );

document.addEventListener('keyup', function( e ) {
    var flagName = getFlagForKeyCode( e.keyCode );
    if ( typeof flagName !== 'undefined' ) {
        this.flags[flagName] = false;
      }
    }, false );

    this.setCamera();
  },
  setCamera : function() {
    this.viewer.clock.onTick.addEventListener(function( clock ) {
    this.camera = this.scene.camera;

    if ( this.flags.looking ) {
        var width = this.canvas.clientWidth;
        var height = canvas.clientHeight;
        var x = ( this.mousePosition.x - this.startMousePosition.x ) / width;
        var y = -( this.mousePosition.y - this.startMousePosition.y ) / height;

        var lookFactor = 0.05;
        this.camera.lookRight( x * lookFactor );
        this.camera.lookUp( y * lookFactor );
    }
  // changes movement speed based on the distance of the camera to the surface of the ellipsoid.
    var cameraHeight = this.ellipsoid.cartesianToCartographic( this.camera.position ).height;
    var moveRate = cameraHeight / 100.0;

    if ( this.flags.moveForward ) {
        this.camera.moveForward( moveRate );
    }
    if ( this.flags.moveBackward ) {
        this.camera.moveBackward( moveRate );
    }
    if ( this.flags.moveUp ) {
        this.camera.moveUp( moveRate );
    }
    if ( this.flags.moveDown ) {
        this.camera.moveDown( moveRate );
    }
    if ( this.flags.moveLeft ) {
        this.camera.moveLeft( moveRate );
    }
    if ( this.flags.moveRight ) {
        this.camera.moveRight( moveRate );
    }
  })
 }
}







var Model = new MoonModel();