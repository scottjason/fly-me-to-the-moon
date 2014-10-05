function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeOver, TakeMeHome, AnywhereElse, NavControl, NavView, MoonView ) {
    this.TakeOver = TakeOver;
    this.TakeMeHome = TakeMeHome;
    this.AnywhereElse = AnywhereElse;
    this.NavControl = NavControl;
    this.NavView = NavView;
    this.MoonView = MoonView;
    this.NavControl.initialize();
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
    this.TakeMeHome.initialize( this.MoonView.scene, this.initHomeElems.bind( this ) );
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
    this.AnywhereElse.initialize( this.MoonView.viewer, this.MoonView.scene, this.initParadiseElems.bind( this ) );
  },
  // remove event listeners and hide data
  initHomeEvents : function( location ) {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.NavView.hideElemsForHome();
  },
  initControlEvents : function() {
    this.MoonView.stopGlobe();
    this.NavView.renderControlElems();
  },
  initGoodByeEvents : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.NavView.renderGoodByeElems();
  },
  initAnywhereEvents : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.NavView.renderAnywhereElems();
  },
  // render data
  initHomeElems : function( location ) {
    console.log( location )
    this.NavView.renderHomeElems( location );
  },
  initParadiseElems : function( content ) {
    this.NavView.renderParadiseElems( content );
  }
}

var controller = new MoonControl();