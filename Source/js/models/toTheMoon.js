function MoonFlyer() {
  if (!( this instanceof MoonFlyer )) {
    return new MoonFlyer();
  }
}

MoonFlyer.prototype = {
  goodByeAtmosphere : function( setRate, callback ) {
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
      this.goodByeEarth( this.moonSpinner );
  },
  goodByeEarth : function( moonSpinner ) {
    var remove = this.removeMoonListener;
      function moveCamera() {
        count++
          if ( count === 150 ) {
          $( "#cesiumContainer" ).velocity( "fadeOut", { duration: 4500 } );
         setTimeout(remove.bind( this, moonSpinner ), 4500)
      } else {
          camera.moveBackward( moveRate );
          camera.moveRight( moveRate * .36 );
          setTimeout( moveCamera, 30 );
        }
      }
      moveCamera()
    },
    removeMoonListener : function( moonSpinner ){
        viewer.clock.onTick.removeEventListener( moonSpinner );
        createMoon();
    }
  }
      function createMoon(){

      // create moon scene
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 400, window.innerWidth / window.innerHeight, 0.1, 1000 );
        canvas = document.getElementById( "moonContainer" );
        renderer = new THREE.WebGLRenderer( { "canvas": canvas } );
        renderer.setSize( window.innerWidth, window.innerHeight );

    $( canvas ).velocity( "fadeIn", { duration: 1500 } );

        geometry = new THREE.SphereGeometry(5, 300, 200);
        material = new THREE.MeshLambertMaterial( { color: 0x0033aa } );
        moon = new THREE.Mesh( geometry, material );
        scene.add( moon );

    // create moonlight
    scene.add(new THREE.AmbientLight( 0x000000 ));

      spotLight = new THREE.SpotLight( 0xffffff ); spotLight.position.set( 100, 1000, 100 ); spotLight.castShadow = true; spotLight.shadowMapWidth = 1024; spotLight.shadowMapHeight = 1024; spotLight.shadowCameraNear = 110; spotLight.shadowCameraFar = 400;
        spotLight.add( new THREE.Mesh( moon, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );
        spotLight.shadowCameraFov = 30; scene.add( spotLight );
        camera.position.z = 23;
        animate()

}

    // rotate and render
      function animate() {

        requestAnimationFrame( animate );

        moon.rotation.x += 0.03;
        moon.rotation.y += 0.01;
        var time = Date.now() * 0.0005;

        spotLight.position.x = Math.sin( time * 0.9 ) * 15;
        spotLight.position.y = Math.cos( time * 0.4 ) * 20;
        spotLight.position.z = Math.cos( time * 0.7 ) * 15;


        renderer.render( scene, camera );

    }


var moonFlyer = new MoonFlyer();