function AnywhereElse() {
  if (!( this instanceof AnywhereElse )) {
    return new AnywhereElse();
  }
};

AnywhereElse.prototype = {
  initialize : function( viewer, clock, scene, canvas ) {
    this.clock = clock;
    this.canvas = canvas;
    this.viewer = viewer;
    this.scene = viewer.scene;
    this.camera = scene.camera;
    this.paradiseRequest();
  },
  paradiseRequest : function() {
    console.log("made it to paradise")
  }
}






var anywhereElse = new AnywhereElse();