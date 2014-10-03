// var viewer = new Cesium.Viewer('cesiumContainer');
// var scene = viewer.scene;
// var clock = viewer.clock;

// // // function flyToSanDiego() {
// // //     Sandcastle.declare(flyToSanDiego);
// // //     scene.camera.flyTo({
// // //         destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
// // //     });
// // // }

// // // function flyToLocation() {
// // //     Sandcastle.declare(flyToLocation);

// // //     // Create callback for browser's geolocation
// // //     function fly(position) {
// // //         scene.camera.flyTo({
// // //             destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 1000.0)
// // //         });
// // //     }

// // //     // Ask browser for location, and fly there.
// // //     navigator.geolocation.getCurrentPosition(fly);
// // // }

// // // function viewRectangle() {
// // //     Sandcastle.declare(viewRectangle);

// // //     var west = -77.0;
// // //     var south = 38.0;
// // //     var east = -72.0;
// // //     var north = 42.0;

// // //     scene.camera.viewRectangle(Cesium.Rectangle.fromDegrees(west, south, east, north));

// // //     // Show the rectangle.  Not required; just for show.
// // //     var polylines = scene.primitives.add(new Cesium.PolylineCollection());
// // //     polylines.add({
// // //         positions : Cesium.Cartesian3.fromDegreesArray([
// // //             west, south,
// // //             west, north,
// // //             east, north,
// // //             east, south,
// // //             west, south
// // //         ])
// // //     });
// // // }

// // // function flyToRectangle() {
// // //     Sandcastle.declare(flyToRectangle);

// // //     var west = -90.0;
// // //     var south = 38.0;
// // //     var east = -87.0;
// // //     var north = 40.0;

// // //     scene.camera.flyToRectangle({
// // //         destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
// // //     });

// // //     // Show the rectangle.  Not required; just for show.
// // //     var polylines = scene.primitives.add(new Cesium.PolylineCollection());
// // //     polylines.add({
// // //         positions : Cesium.Cartesian3.fromDegreesArray([
// // //             west, south,
// // //             west, north,
// // //             east, north,
// // //             east, south,
// // //             west, south
// // //         ])
// // //     });
// // // }

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

// // setReferenceFrame()
// function icrf(scene, time, status) {
//   // if ( status != 'undefined' )
//   //   {  return }
//   // clock.clockRange = Cesium.ClockRange.UNBOUNDED;
// // clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
//     if (scene.mode !== Cesium.SceneMode.SCENE3D) {
//         return;
//     }

//     var icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(time);
//     if (Cesium.defined(icrfToFixed)) {
//         scene.camera.transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed, Cesium.Cartesian3.ZERO);
//     }
// }
// // icrf();
// function spin( status ) {
//     Sandcastle.declare(spin);
//   if ( status != 'undefined' )
//     {  return }
//     var vm = viewer.homeButton.viewModel;
//     vm.duration = 0.0;
//     vm.command();
//     vm.duration = 3.0;
//     clock.multiplier = 3 * 60 * 60;
//     scene.preRender.addEventListener(icrf, status );
//     scene.globe.enableLighting = true;
// }
// spin( status )
// var status = "something"
// // function createModel(url, height) {
// //     height = Cesium.defaultValue(height, 0.0);

// //     var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, height));

// //     scene.primitives.removeAll(); // Remove previous model
// //     var model = scene.primitives.add(Cesium.Model.fromGltf({
// //         url : url,
// //         modelMatrix : modelMatrix,
// //         minimumPixelSize : 128
// //     }));

// //     model.readyToRender.addEventListener(function(model) {
// //         // Play and loop all animations at half-spead
// //         model.activeAnimations.addAll({
// //             speedup : 0.5,
// //             loop : Cesium.ModelAnimationLoop.REPEAT
// //         });

// //         // Zoom to model
// //         var center = Cesium.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center, new Cesium.Cartesian3());
// //         var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
// //         var camera = scene.camera;
// //         camera.transform = transform;
// //         var controller = scene.screenSpaceCameraController;
// //         var r = 2.0 * Math.max(model.boundingSphere.radius, camera.frustum.near);
// //         controller.minimumZoomDistance = r * 0.5;
// //         camera.lookAt(new Cesium.Cartesian3(r, r, r), Cesium.Cartesian3.ZERO, Cesium.Cartesian3.UNIT_Z);
// //     });
// // }

// // createModel()