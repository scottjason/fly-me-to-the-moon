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
    document.getElementById( "anywhereButHere" ).addEventListener("click", this.anywhereButHere.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener("click", this.sayGoodBye.bind( this ), false );
  },
  takeMeHome : function() {
    this.removeListenersForHome();
    this.TakeMeHome.initialize( this.initHomeElems.bind( this ) );
  },
  takeControl : function() {
    this.removeListenersForControl();
    this.TakeOver.initialize( this.MoonView.viewer, this.MoonView.clock, this.MoonView.scene, this.MoonView.canvas );
  },
  sayGoodBye : function() {
    this.removeListenersForMoon();
  },
  anywhereButHere : function() {
    this.removeListenersForAnywhere();
    this.AnywhereElse.initialize( this.initAnywhereElems.bind( this ) );
  },
  // remove event listeners and hide data
  removeListenersForHome : function( location ) {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.NavView.hideElemsForHome();
  },
  removeListenersForControl : function() {
    this.MoonView.stopGlobe();
    this.NavView.hideElemsForControl();
  },
  removeListenersForAnywhere : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.NavView.hideElemsForAnywhere();
  },
  removeListenersForMoon : function() {
    this.MoonView.stopGlobe();
    this.TakeOver.stopControl();
    this.NavView.hideElemsForMoon();
  },
  // render data
  initHomeElems : function( location ) {
    this.NavView.renderHomeElems( location );
  },
  initControlElems : function() {
    this.NavView.renderControlElems();
  },
  initAnywhereElems : function( content ) {
    this.NavView.renderAnywhereElems( content );
  },
  initMoonElems : function() {
    this.NavView.renderMoonElems();
  }
}

var controller = new MoonControl();