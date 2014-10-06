function createGlobe(){

Cesium.BingMapsApi.defaultKey = 'AvCHv-7wjmYV1vqauXsrzTQRByL7b8t0F0yG6BhZh-TUjE3-VLvIYxVg4S7OMLMG'
var earthOptions = {
        animation: false,
        homeButton: true,
        sceneModePicker: false,
        selectionIndicator: false,
        baseLayerPicker: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false
}
viewer = new Cesium.Viewer( 'cesiumContainer', earthOptions );

scene = viewer.scene;
globe = scene.globe;
clock = viewer.clock;
canvas = scene.canvas;
globe.depthTestAgainstTerrain = true;

cesiumTerrainProviderHeightmaps = new Cesium.CesiumTerrainProvider({
    url : 'http://cesiumjs.org/smallterrain'
});

cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
    url : 'http://cesiumjs.org/stk-terrain/tilesets/world/tiles'
});

ellipsoidProvider = new Cesium.EllipsoidTerrainProvider();

vrTheWorldProvider = new Cesium.VRTheWorldTerrainProvider({
    url : 'http://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/'

});

scene.terrainProvider = cesiumTerrainProviderMeshes;

}
