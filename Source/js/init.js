$( document ).ready(function(){
// createGlobe();
Cesium.BingMapsApi.defaultKey = 'AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG'

  controller.initialize( takeOver, takeMeHome, anywhereElse, navControl, navView, moonView );
});

// function createGlobe(){

// Cesium.BingMapsApi.defaultKey = 'AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG'
// var earthOptions = {
//         animation: false,
//         homeButton: true,
//         sceneModePicker: false,
//         selectionIndicator: false,
//         baseLayerPicker: false,
//         timeline: false,
//         navigationHelpButton: false,
//         navigationInstructionsInitiallyVisible: false
// }

// viewer = new Cesium.Viewer( 'cesiumContainer', earthOptions );
// scene = viewer.scene;
// globe = scene.globe;
// clock = viewer.clock;
// globe.depthTestAgainstTerrain = true;


// var cesiumTerrainProviderHeightmaps = new Cesium.CesiumTerrainProvider({
//     url : '//cesiumjs.org/smallterrain'
// });

// var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
//     url : '//cesiumjs.org/stk-terrain/tilesets/world/tiles'
// });

// var ellipsoidProvider = new Cesium.EllipsoidTerrainProvider();

// var vrTheWorldProvider = new Cesium.VRTheWorldTerrainProvider({
//     url : '//www.vr-theworld.com/vr-theworld/tiles1.0.0/73/'

// });

// scene.terrainProvider = cesiumTerrainProviderMeshes;

// }
