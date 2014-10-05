function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeOver, TakeMeHome, AnywhereElse, MoonView ) {
    this.TakeOver = TakeOver;
    this.TakeMeHome = TakeMeHome;
    this.AnywhereElse = AnywhereElse;
    this.MoonView = MoonView;
    this.MoonView.initialize( this.bindListeners.bind( this ) );
  },
  bindListeners : function() {
    document.getElementById( "takeMeHome" ).addEventListener("click", this.takeMeHome.bind( this ), false );
    document.getElementById( "takeControl" ).addEventListener("click", this.takeControl.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener("click", this.sayGoodBye.bind( this ), false );
    document.getElementById( "anywhereButHere" ).addEventListener("click", this.anywhereButHere.bind( this ), false );
  },
  takeMeHome : function() {
    this.initHomeEvents();
    this.TakeMeHome.initialize( this.MoonView.scene );
  },
  takeControl : function() {
    this.initControlEvents();
    this.TakeOver.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    this.initGoodByeEvents();
  },
  anywhereButHere : function() {
    this.initAnywhereEvents();
    this.AnywhereElse.initialize( this.MoonView.viewer, this.MoonView.scene, this.initParadiseEvents.bind( this ) );
  },
  initHomeEvents : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.MoonView.renderHomeElems();
  },
  initControlEvents : function() {
    this.MoonView.stopGlobe();
    this.MoonView.renderControlElems();
  },
  initGoodByeEvents : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.MoonView.renderGoodByeElems();
  },
  initAnywhereEvents : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.MoonView.renderAnywhereElems();
  },
  initParadiseEvents : function( content ) {
    this.MoonView.renderParadiseElems( content );
  }
}

var controller = new MoonControl();