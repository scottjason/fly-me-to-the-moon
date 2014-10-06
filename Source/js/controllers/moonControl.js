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
    document.getElementById( "takeMeHome" ).addEventListener( "click", this.takeMeHome.bind( this ), false );
    document.getElementById( "takeControl" ).addEventListener( "click", this.takeControl.bind( this ), false );
    document.getElementById( "anywhereButHere" ).addEventListener( "click", this.anywhereButHere.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener( "click", this.sayGoodBye.bind( this ), false );
    document.getElementsByClassName( "cesium-home-button" )[0].addEventListener( "click", this.globeReset.bind( this ), false );
    document.getElementsByClassName( "cesium-viewer-geocoderContainer" )[0].addEventListener( "submit", this.searchGlobe.bind( this ), false );
   },
  globeReset : function() {
    this.TakeOver.stopControl();
    this.MoonView.slideInNav();
  },
  searchGlobe : function() {
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.MoonView.slideInNav();
  },
  takeMeHome : function() {
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.TakeMeHome.flyHome( this.initHomeElems.bind( this ) );
  },
  takeControl : function() {
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.TakeOver.initialize();
  },
  anywhereButHere : function() {
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.AnywhereElse.initialize( this.initAnywhereElems.bind( this ) );
  },
  sayGoodBye : function() {
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
  },
  initHomeElems : function( location ) {
    this.MoonView.hideLoadingHome( this.MoonView.renderHomeElems, location );
  },
  initControlElems : function() {
    this.MoonView.renderControlElems();
  },
  initAnywhereElems : function( content ) {
    this.MoonView.hideLoadingAnywhere( this.MoonView.renderAnywhereElems, content );
  },
  initMoonElems : function() {
    this.MoonView.renderMoonElems();
  }
}

var controller = new MoonControl();