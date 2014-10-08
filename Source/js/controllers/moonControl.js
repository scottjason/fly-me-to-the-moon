function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeOver, TakeMeHome, AnywhereElse, MoonFlyer, MoonCreate, MoonView ) {
    this.TakeOver = TakeOver;
    this.TakeMeHome = TakeMeHome;
    this.AnywhereElse = AnywhereElse;
    this.MoonFlyer = MoonFlyer;
    this.MoonCreate = MoonCreate;
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
    this.MoonFlyer.goodByeAtmosphere( 1.0, this.initMoonElems, this.MoonCreate.initialize, this.MoonCreate.animate );
  },
  initHomeElems : function( location, currentTemp, summary, chanceOfRain ) {
    this.MoonView.hideLoadingHome( this.MoonView.renderHomeElems, location, currentTemp, summary, chanceOfRain );
  },
  initControlElems : function() {
    this.MoonView.renderControlElems();
  },
  initAnywhereElems : function( location, currentTemp, summary, chanceOfRain ) {
    console.log( location, currentTemp, summary, chanceOfRain )
    this.MoonView.hideLoadingAnywhere( this.MoonView.renderAnywhereElems, location, currentTemp, summary, chanceOfRain );
  },
  initMoonElems : function( moonData ) {
    this.MoonView.renderMoonElems( moonData );
  }
}

var controller = new MoonControl();