// var viewer = new Cesium.Viewer('cesiumContainer');
// var scene = viewer.scene;
// var clock = viewer.clock;

// // function flyToSanDiego() {
// //     Sandcastle.declare(flyToSanDiego);
// //     scene.camera.flyTo({
// //         destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
// //     });
// // }

// // function flyToLocation() {
// //     Sandcastle.declare(flyToLocation);

// //     // Create callback for browser's geolocation
// //     function fly(position) {
// //         scene.camera.flyTo({
// //             destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 1000.0)
// //         });
// //     }

// //     // Ask browser for location, and fly there.
// //     navigator.geolocation.getCurrentPosition(fly);
// // }

// // function viewRectangle() {
// //     Sandcastle.declare(viewRectangle);

// //     var west = -77.0;
// //     var south = 38.0;
// //     var east = -72.0;
// //     var north = 42.0;

// //     scene.camera.viewRectangle(Cesium.Rectangle.fromDegrees(west, south, east, north));

// //     // Show the rectangle.  Not required; just for show.
// //     var polylines = scene.primitives.add(new Cesium.PolylineCollection());
// //     polylines.add({
// //         positions : Cesium.Cartesian3.fromDegreesArray([
// //             west, south,
// //             west, north,
// //             east, north,
// //             east, south,
// //             west, south
// //         ])
// //     });
// // }

// // function flyToRectangle() {
// //     Sandcastle.declare(flyToRectangle);

// //     var west = -90.0;
// //     var south = 38.0;
// //     var east = -87.0;
// //     var north = 40.0;

// //     scene.camera.flyToRectangle({
// //         destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
// //     });

// //     // Show the rectangle.  Not required; just for show.
// //     var polylines = scene.primitives.add(new Cesium.PolylineCollection());
// //     polylines.add({
// //         positions : Cesium.Cartesian3.fromDegreesArray([
// //             west, south,
// //             west, north,
// //             east, north,
// //             east, south,
// //             west, south
// //         ])
// //     });
// // }

// // function setReferenceFrame() {
// //     Sandcastle.declare(setReferenceFrame);

// //     var center = Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883);
// //     var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);

// //     // View in east-north-up frame
// //     var camera = scene.camera;
// //     Cesium.Matrix4.clone(transform, camera.transform);
// //     camera.constrainedAxis = Cesium.Cartesian3.UNIT_Z;

// //     // Zoom in
// //     camera.lookAt(
// //         new Cesium.Cartesian3(-120000.0, -120000.0, 120000.0),
// //         Cesium.Cartesian3.ZERO,
// //         Cesium.Cartesian3.UNIT_Z);

// //     // Show reference frame.  Not required.
// //     scene.primitives.add(new Cesium.DebugModelMatrixPrimitive({
// //         modelMatrix : transform,
// //         length : 100000.0
// //     }));
// // }

// // function icrf(scene, time) {
// //     if (scene.mode !== Cesium.SceneMode.SCENE3D) {
// //         return;
// //     }

// //     var icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(time);
// //     if (Cesium.defined(icrfToFixed)) {
// //         scene.camera.transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed, Cesium.Cartesian3.ZERO);
// //     }
// // }

// // function spin() {
// //     Sandcastle.declare(spin);

// //     var vm = viewer.homeButton.viewModel;
// //     console.log( viewer.homeButton )
// //     vm.duration = 0.0;
// //     vm.command();
// //     vm.duration = 3.0;

// //     clock.multiplier = 3 * 60 * 60;
// //     scene.preRender.addEventListener(icrf);
// //     scene.globe.enableLighting = true;
// // }
// // spin()
// // // scene.destroy()
// // // Sandcastle.reset()

// // Sandcastle.addToolbarMenu([{
// //     text : 'Camera Options'
// // }, {
// //     text : 'Fly to San Diego',
// //     onselect : function() {
// //         flyToSanDiego();
// //         Sandcastle.highlight(flyToSanDiego);
// //     }
// // }, {
// //     text : 'Fly to My Location',
// //     onselect : function() {
// //         flyToLocation();
// //         Sandcastle.highlight(flyToLocation);
// //     }
// // }, {
// //     text : 'Fly to Rectangle',
// //     onselect : function() {
// //         flyToRectangle();
// //         Sandcastle.highlight(flyToRectangle);
// //     }
// // }, {
// //     text : 'View a Rectangle',
// //     onselect : function() {
// //         viewRectangle();
// //         Sandcastle.highlight(viewRectangle);
// //     }
// // }, {
// //     text : 'Set camera reference frame',
// //     onselect : function() {
// //         setReferenceFrame();
// //         Sandcastle.highlight(setReferenceFrame);
// //     }
// // }, {
// //     text : 'View in ICRF',
// //     onselect : function() {
// //         viewInICRF();
// //         Sandcastle.highlight(viewInICRF);
// //     }
// // }]);

// // Sandcastle.reset = function() {
// //     scene.primitives.removeAll();
// //     scene.tweens.removeAll();

// //     scene.camera.setTransform(Cesium.Matrix4.IDENTITY);

// //     clock.multiplier = 1.0;
// //     scene.preRender.removeEventListener(icrf);
// //     scene.globe.enableLighting = false;
// // };

// // scene.morphComplete.addEventListener(function() {
// //     Sandcastle.reset();
// // });
