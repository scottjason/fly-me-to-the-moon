function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeOver, TakeMeHome, AnywhereElse, MoonFlyer, MoonView ) {
    this.TakeOver = TakeOver;
    this.TakeMeHome = TakeMeHome;
    this.AnywhereElse = AnywhereElse;
    this.MoonFlyer = MoonFlyer;
    this.MoonView = MoonView;
    this.bindListeners();
    this.MoonView.startRotation( 0.55 );
  },
  bindListeners : function() {
    document.getElementById( "takeMeHome" ).addEventListener( "click", this.takeMeHome.bind( this ), false );
    document.getElementById( "takeControl" ).addEventListener( "click", this.takeControl.bind( this ), false );
    document.getElementById( "anywhereButHere" ).addEventListener( "click", this.anywhereButHere.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener( "click", this.flyToMoon.bind( this ), false );
    document.getElementsByClassName( "cesium-home-button" )[0].addEventListener( "click", this.globeReset.bind( this ), false );
    document.getElementsByClassName( "cesium-viewer-geocoderContainer" )[0].addEventListener( "submit", this.searchGlobe.bind( this ), false );
   },
  globeReset : function() {
    this.MoonView.slideInNav();
    this.TakeOver.stopControl();
  },
  searchGlobe : function() {
    this.MoonView.slideInNav();
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
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
    this.initControlElems();
  },
  anywhereButHere : function() {
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.TakeOver.stopControl();
    this.AnywhereElse.initialize( this.initAnywhereElems.bind( this ) );
  },
  flyToMoon : function() {
    this.MoonView.stopRotation();
    this.MoonView.slideOutNav();
    this.TakeOver.stopControl();
    this.MoonFlyer.initialize( this.initMoonElems.bind( this ), this.MoonFlyer.sayGoodbye, this.MoonFlyer.animate );
  },
  initHomeElems : function( location, currentTemp, summary, chanceOfRain ) {
    this.MoonView.hideLoadingHome( this.MoonView.renderHomeElems, location, currentTemp, summary, chanceOfRain );
  },
  initControlElems : function() {
    this.MoonView.hideControlElems( this.MoonView.renderControlElems );
  },
  initAnywhereElems : function( location, currentTemp, summary, chanceOfRain ) {
    this.MoonView.hideLoadingAnywhere( this.MoonView.renderAnywhereElems, location, currentTemp, summary, chanceOfRain );
  },
  initMoonElems : function( moonAge, moonPhase, moonIllumination ) {
    this.MoonView.hideMoonElems( this.MoonView.renderMoonElems, moonAge, moonPhase, moonIllumination );
  }
}

var controller = new MoonControl();