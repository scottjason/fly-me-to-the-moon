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
    this.bindListeners();
    this.MoonView.startRotation( 0.65 );
  },
  bindListeners : function() {
    document.getElementById( "takeMeHome" ).addEventListener("click", this.takeMeHome.bind( this ), false );
    document.getElementById( "takeControl" ).addEventListener("click", this.takeControl.bind( this ), false );
    document.getElementById( "anywhereButHere" ).addEventListener("click", this.anywhereButHere.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener("click", this.sayGoodBye.bind( this ), false );

    var homeButton = document.getElementsByClassName( "cesium-viewer-toolbar" )
        homeButton[0].addEventListener( "click", this.MoonView.slideInAll.bind( this.MoonView ), false );
  },
    // init MoonView onClick events, init remove listeners and data, invoke user-selcted behavior
  takeMeHome : function() {
    this.MoonView.homeSlideOut();
    this.removeListenersForHome();
    this.TakeMeHome.initialize( this.initHomeElems.bind( this ) );
  },
  takeControl : function() {
    this.MoonView.controlSlideOut();
    this.removeListenersForControl();
    this.TakeOver.initialize();
  },
  anywhereButHere : function() {
    this.MoonView.anywhereSlideOut();
    this.removeListenersForAnywhere();
    this.AnywhereElse.initialize( this.initAnywhereElems.bind( this ) );
  },
  sayGoodBye : function() {
    this.MoonView.moonSlideOut();
    this.removeListenersForMoon();
    // invoke fly to moon
  },
    // remove event listeners and hide data
  removeListenersForHome : function( location ) {
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.MoonView.hideElemsForHome();
  },
  removeListenersForControl : function() {
    this.MoonView.stopRotation();
    this.MoonView.hideElemsForControl();
  },
  removeListenersForAnywhere : function() {
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.MoonView.hideElemsForAnywhere();
  },
  removeListenersForMoon : function() {
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.MoonView.hideElemsForMoon();
  },
    // render MoonView new data for user selected behavior
  initHomeElems : function( location ) {
    this.MoonView.renderHomeElems( location );
  },
  initControlElems : function() {
    this.MoonView.renderControlElems();
  },
  initAnywhereElems : function( content ) {
    this.MoonView.renderAnywhereElems( content );
  },
  initMoonElems : function() {
    this.MoonView.renderMoonElems();
  }
}

var controller = new MoonControl();