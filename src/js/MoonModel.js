function MoonModel() {
  if (!( this instanceof MoonModel )) {
    return new MoonModel();
  }
};

MoonModel.prototype = {
  initialize : function( clock, viewer, callbackExplore ){
    this.callback = callbackExplore;
    this.clock = clock;
    this.viewer = viewer;
  }
}

var Model = new MoonModel();