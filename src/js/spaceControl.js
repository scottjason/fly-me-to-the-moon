var MoonFlyer = MoonFlyer || {}

MoonFlyer.SpaceControl = {
  initialize : function( SpaceModel, SpaceView ){
    this.SpaceView = SpaceView;
    this.SpaceView.initialize( this );
  },
  earthReady : function( viewer ) {
    this.viewer = viewer;
  },
  sayGoodBye : function( callback ){
    this.SpaceView.readyOrbit( callback );
  },
  exploreEarth : function( viewer, clock ){
    // this.SpaceModel.initialize( viewer, clock );
  }
}

