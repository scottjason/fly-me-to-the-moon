  function MoonCreate() {
    if (!( this instanceof MoonCreate )) {
        return new MoonCreate();
    }
};

MoonCreate.prototype = {

  initialize : function( callback ) {
      // create moon scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(400, window.innerWidth / window.innerHeight, 0.1, 1000);
      canvas = document.getElementById("moonContainer");
      renderer = new THREE.WebGLRenderer({
        "canvas": canvas
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      $(canvas).velocity("fadeIn", {
        duration: 1500
      });

      // create starfield
      var texture = THREE.ImageUtils.loadTexture('../../Source/img/galaxy_starfield.png')
      var material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide
      })
      var geometry = new THREE.SphereGeometry(100, 32, 32)
      var starField = new THREE.Mesh(geometry, material)
      scene.add(starField)

      // create moonmesh
      geometry = new THREE.SphereGeometry(5, 300, 200);
      var material = new THREE.MeshPhongMaterial({
          map: THREE.ImageUtils.loadTexture('../../Source/img/moonmapscott.jpg'),
          bumpMap: THREE.ImageUtils.loadTexture('../../Source/img/moonbumpscott.jpg'),
          bumpScale: 0.002,
        })
        // add moon to sccene
      moon = new THREE.Mesh(geometry, material);
      scene.add(moon);

      // create ambient light and add to scene
      scene.add( new THREE.AmbientLight( 0x000000 ) );

      // create spotightlight
      spotLight = new THREE.SpotLight( 0xffffff );
      spotLight.position.set( 256, 1000, 100 );
      spotLight.castShadow = true;
      spotLight.shadowMapWidth = 256;
      spotLight.shadowMapHeight = 256;
      spotLight.shadowCameraNear = 110;
      spotLight.shadowCameraFar = 400;
      spotLight.add( new THREE.Mesh( moon, new THREE.MeshBasicMaterial({ color: 0xffffff })));
      spotLight.shadowCameraFov = 30;

      // add spotlight to scene
      scene.add(spotLight);
      camera.position.z = 27;

      // animate
      callback();
    },

    animate : function() {
    // animate and render
    function moonAnimte() {
    requestAnimationFrame( moonAnimte );

    moon.rotation.x += 0.003;
    moon.rotation.y += 0.001;

    var time = Date.now() * 0.0005;
      spotLight.position.x = Math.sin(time * 0.7) * 15;
      spotLight.position.y = Math.cos(time * 0.2) * 20;
      spotLight.position.z = Math.cos(time * 0.5) * 15;

    // render scene
    renderer.render(scene, camera);
  }
  // initial call
  moonAnimte();
 }
}

var moonCreate = new MoonCreate();