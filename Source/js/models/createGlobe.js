function createGlobe(){

Cesium.BingMapsApi.defaultKey = 'AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG'
var earthOptions = {
        animation: false,
        homeButton: true,
        sceneModePicker: true,
        selectionIndicator: false,
        baseLayerPicker: false,
        timeline: false,
        navigationHelpButton: true,
        navigationInstructionsInitiallyVisible: false,
        fullscreenButton: false,
        infoBox: false,
        creditContainer: "creditContainer"
}
  viewer = new Cesium.Viewer( 'cesiumContainer', earthOptions );

    scene = viewer.scene;
    primitives = scene.primitives;
    globe = scene.globe;
    clock = viewer.clock;
    canvas = scene.canvas;
    globe.depthTestAgainstTerrain = true;

  cesiumTerrainProviderHeightmaps = new Cesium.CesiumTerrainProvider({
    url : 'http://cesiumjs.org/smallterrain',
});
    scene.terrainProvider = cesiumTerrainProviderHeightmaps;
}