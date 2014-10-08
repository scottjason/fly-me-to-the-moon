  function MoonFlyer() {
    if (!( this instanceof MoonFlyer )) {
        return new MoonFlyer();
    }
};

MoonFlyer.prototype = {

  initialize : function( callbackData, callbackFarewell, callbackAnimate ) {
    this.requestMoonData( callbackData );
      setTimeout( callbackFarewell.bind( this, callbackAnimate ), 3800 )

    $( "#cesiumContainer" ).velocity( "fadeOut", { duration: 3800 } );
    $(".navbar-fixed-top").velocity( { backgroundColor: "#000" } );
    $("#siteTitle").velocity( { color: "#ef6334" } );

    },
    requestMoonData : function( callback ) {
        function makeRequest( position ){
         var requestData = $.ajax({
          url: 'http://api.wunderground.com/api/ce0438b612e6c4b1/astronomy/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json',
          type: 'GET',
          dataType: 'JSONP'
        });
        requestData.done(function( data ) {
          callback( data.moon_phase.ageOfMoon, data.moon_phase.phaseofMoon, data.moon_phase.percentIlluminated );
        });
        requestData.fail(function( textStatus ) {
        console.log( "Request failed: " + textStatus );
      });
     }

  if ( navigator.geolocation && typeof ( navigator.geolocation.getCurrentPosition ) == "function") {
         navigator.geolocation.getCurrentPosition( makeRequest );
    }
    else {
      alert( "Unable to collect your current location. Please check your browser settings.")
      }
    },
    sayGoodbye : function( callbackAnimate ){
      // create the scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera( 400, window.innerWidth / window.innerHeight, 0.1, 1000 );

      // init camera position
      camera.position.set( 0, 0, 4 );
      camera.lookAt( scene.position )

      // add camera to scene
      scene.add( camera );

      // set canvas to be renderded
      canvas = document.getElementById("moonContainer");
      renderer = new THREE.WebGLRenderer( { "canvas": canvas } );

      // set renderer to full width and height of window, fade in entire window minus nav
      renderer.setSize(window.innerWidth, window.innerHeight);
      $( canvas ).velocity( "fadeIn", { duration: 1500 } );

      // create starfield texture
      texture = THREE.ImageUtils.loadTexture('../../Source/img/galaxy_starfield.png')
      // texture = THREE.ImageUtils.loadTexture('http://scottleejason.com/fly-me-to-the-moon/Source/img/galaxy_starfield.png')

      // set texture repeat options
      texture.wrapT = THREE.RepeatWrapping;

      var material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide
      })

      // set center sphere for starField
      var geometry = new THREE.SphereGeometry( 120, 100, 22 );
      var starField = new THREE.Mesh( geometry, material );

      // init starField rotation on x-axis
      starField.rotation.x = Math.PI/2;
      // add starField to scene
      scene.add( starField );
      // set option that enables tunnel effect
      starField.flipSided  = true;
      // add ambiet light to scene
      scene.add( new THREE.AmbientLight( 0x000000 ) );

      // add four points of directional light to scene
      var light = new THREE.DirectionalLight( 0x7BA5DB, 1.5 );
      light.position.set( 1, 1, 0 ).normalize();
      scene.add( light );

      var light = new THREE.DirectionalLight( 0x7BA5DB, 1.5 );
      light.position.set( -1, 1, 0 ).normalize();
      scene.add( light );

      var light = new THREE.PointLight( 0x44FFAA, 15, 25 );
      light.position.set( 0, -3, 0 );
      scene.add( light );

      var light = new THREE.PointLight( 0xff4400, 20, 30 );
      light.position.set( 3, 3, 0 );
      scene.add( light );

    // initiate animation of starfield
      moonAnimate();
    }
  }
    // animate and render
    var count = 0;
    function moonAnimate() {
      window.requestAnimationFrame( moonAnimate );
      ++count
    // set negative offset to give the effect of user moving forward through space
      texture.offset.y  -= 0.008;
      texture.offset.y  %= 1;

      if ( count === 550 ) {
      $( canvas ).velocity( "fadeOut", { duration: 1500 } );
        setTimeout( renderMoon, 1950 )
        setTimeout( cancelScene, 2000 )
    }
    // render scene
    renderer.render( scene, camera );
   // initial call
  }

  function cancelScene( moonAnimate ) {
    window.cancelAnimationFrame( moonAnimate );
  }

 function renderMoon() {
      // create moonmesh, ( radius, width, height )
      var geometry = new THREE.SphereGeometry( 5, 300, 200 );
      var material = new THREE.MeshPhongMaterial({
          // map: THREE.ImageUtils.loadTexture('http://scottleejason.com/fly-me-to-the-moon/Source/img/moonmapscott.jpg'),
          map: THREE.ImageUtils.loadTexture('../../Source/img/moonmapscott.jpg'),
          // bumpMap: THREE.ImageUtils.loadTexture('http://scottleejason.com/fly-me-to-the-moon/Source/img/moonbumpscott.jpg'),
          bumpMap: THREE.ImageUtils.loadTexture('../../Source/img/moonbumpscott.jpg'),
          bumpScale: 0.002,
        })
        // add moon to sccene
      moon = new THREE.Mesh( geometry, material );
      scene.add( moon );

      // create spotightlight on moon
      spotLight = new THREE.SpotLight( 0xff4400 );
      spotLight.position.set( 256, 1000, 100 );
      spotLight.castShadow = true;
      spotLight.shadowMapWidth = 256;
      spotLight.shadowMapHeight = 256;
      spotLight.shadowCameraNear = 110;
      spotLight.shadowCameraFar = 400;
      spotLight.add( new THREE.Mesh( moon, new THREE.MeshBasicMaterial({ color: 0xffffff })));
      spotLight.shadowCameraFov = 27;

      // add spotlight to scene
      scene.add( spotLight );

      // fade in window and invoke final scene
    $( canvas ).velocity( "fadeIn", { duration: 3000 } );
      finalScene()
 }

function finalScene(){
    function animateFinal() {
    requestAnimationFrame( animateFinal );

        // stop star field
        texture.offset.y = 0;

      // set new camera position
        camera.position.z = 28;

        moon.rotation.x += 0.003;
        moon.rotation.y += 0.007;

        var time = Date.now() * 0.0005;
        spotLight.position.x = Math.sin( time * 0.7 ) * 12.3;
        spotLight.position.y = Math.cos( time * 0.2 ) * 14.2;
        spotLight.position.z = Math.cos( time * 0.5 ) * 16;

      // render scene
     renderer.render( scene, camera );
  }
  // initial call on final scene
  animateFinal();
}

var moonFlyer = new MoonFlyer();