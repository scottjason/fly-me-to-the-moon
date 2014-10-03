function MoonModel() {
  if (!( this instanceof MoonModel )) {
    return new MoonModel();
  }
};

MoonModel.prototype = {
  initialize : function( clock, viewer, scene, canvas, callback ){
    this.clock = clock;
    this.viewer = viewer;
    this.scene = scene;
    this.canvas = canvas;
    this.callback = callback;
  }
}

var Model = new MoonModel();