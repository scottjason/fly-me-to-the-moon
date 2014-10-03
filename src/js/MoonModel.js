function MoonModel() {
  if (!( this instanceof MoonModel )) {
    return new MoonModel();
  }
};
// // MoonFlyer.SpaceModel = {
// //   initialize : function( viewer, clock ){
// //     // init scene and canvas
// //     var scene = viewer.scene;
// //     var canvas = scene.canvas;
// //     this.focusEarth( viewer, clock, scene, canvas );
// //   },
// //   focusEarth : function( viewer, clock, scene, canvas ){
// //     // disable auto-animate
// //     canvas.setAttribute('tabindex', '0');
// //     canvas.onclick = function() {
// //     canvas.focus();
// //   };
// //     // disable event handlers
// //     scene.screenSpaceCameraController.enableRotate = false;
// //     scene.screenSpaceCameraController.enableTranslate = false;
// //     scene.screenSpaceCameraController.enableZoom = false;
// //     scene.screenSpaceCameraController.enableTilt = false;
// //     scene.screenSpaceCameraController.enableLook = false;

// //     this.setFlags( viewer, clock, scene, canvas );
// //   },
// //   setFlags : function( viewer, clock, scene, canvas ) {
// //     // hoist and init user event handlers
// //     this.startMousePosition;
// //     this.mousePosition;
// //     var flags = {
// //       looking : false,
// //       moveForward : false,
// //       moveBackward : false,
// //       moveUp : false,
// //       moveDown : false,
// //       moveLeft : false,
// //       moveRight : false
// //     };
// //     this.setActions( viewer, clock, scene, canvas, flags );

// //   },
// //   setActions : function( viewer, clock, scene, canvas, flags ){
// //     this.handler = new Cesium.ScreenSpaceEventHandler( canvas );

// //     this.handler.setInputAction(function( movement ) {
// //       flags.looking = true;
// //        this.mousePosition = this.startMousePosition = Cesium.Cartesian3.clone( movement.position );
// //     }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

// //     this.handler.setInputAction(function( movement ) {
// //       this.mousePosition = movement.endPosition;
// //     }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

// //     this.handler.setInputAction(function( position ) {
// //       flags.looking = false;
// //     }, Cesium.ScreenSpaceEventType.LEFT_UP);

// //     this.cameraMan( viewer, clock, scene, canvas, flags );

// //       this.declareKeyInput( viewer, clock, scene, canvas, flags );
// //    }

// //   declareKeyInput : function( viewer, clock, scene, canvas, flags ){
// //     function getFlagForKeyCode( keyCode ){
// //     switch ( keyCode ) {
// //     case 'F'.charCodeAt(0):
// //         return 'moveForward';
// //     case 'B'.charCodeAt(0):
// //         return 'moveBackward';
// //     case 'U'.charCodeAt(0):
// //         return 'moveUp';
// //     case 'D'.charCodeAt(0):
// //         return 'moveDown';
// //     case 'R'.charCodeAt(0):
// //         return 'moveRight';
// //     case 'L'.charCodeAt(0):
// //         return 'moveLeft';
// //     default:
// //         return undefined;
// //     }
// //   }
// // }

// //   document.addEventListener('keydown', function(e) {
// //       var flagName = getFlagForKeyCode( e.keyCode );
// //         if ( typeof flagName !== 'undefined' ) {
// //           flags[flagName] = true;
// //         }
// //     }, false);

// //     document.addEventListener('keyup', function(e) {
// //       var flagName = getFlagForKeyCode( e.keyCode );
// //         if ( typeof flagName !== 'undefined' ) {
// //         flags[flagName] = false;
// //         }
// //     }, false);


// //   cameraMan : function( viewer, clock, scene, canvas, flags ){

// //     var scene = viewer.scene;
// //     var clock = viewer.clock;

// //       viewer.clock.onTick.addEventListener(function(clock) {
// //       var camera = scene.camera;

// //      if ( flags.looking ) {

// //         var width = canvas.srcWidth;
// //         var height = canvas.srcHeight;

// //         // set mouse position width, height
// //         var x = (mousePosition.x - startMousePosition.x) / width;
// //         var y = -(mousePosition.y - startMousePosition.y) / height;
// //         // set degree of camera look
// //         var lookFactor = 0.05;
// //         camera.lookRight(x * lookFactor);
// //         camera.lookUp(y * lookFactor);
// //     }
// //     // change movement speed based on distance of camera to surface of ellipsoid.
// //     var ellipsoid = viewer.scene.globe.ellipsoid;

// //     var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
// //     var moveRate = cameraHeight / 100.0;

// //     if ( flags.moveForward) {
// //         camera.moveForward( moveRate );
// //     }
// //     if ( flags.moveBackward) {
// //         camera.moveBackward( moveRate );
// //     }
// //     if ( flags.moveUp )  {
// //         camera.moveUp( moveRate );
// //     }
// //     if ( flags.moveDown ) {
// //         camera.moveDown( moveRate );
// //     }
// //     if ( flags.moveLeft ) {
// //         camera.moveLeft( moveRate );
// //     }
// //     if ( flags.moveRight ) {
// //         camera.moveRight( moveRate );
// //     }
// //    });
// //  }
// // };

var model = new MoonModel();