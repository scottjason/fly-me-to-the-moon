function MoonControl() {
  if (!( this instanceof MoonControl )) {
    return new MoonControl();
  }
};

MoonControl.prototype = {
  initialize : function( TakeMeHome, AnywhereElse, MoonFlyer, MoonView ) {
    this.TakeMeHome = TakeMeHome;
    this.AnywhereElse = AnywhereElse;
    this.MoonFlyer = MoonFlyer;
    this.MoonView = MoonView;
    this.bindListeners();
    this.MoonView.startRotation( 0.55 );
  },
  bindListeners : function() {
    document.getElementById( "takeMeHome" ).addEventListener( "click", this.takeMeHome.bind( this ), false );
    document.getElementById( "anywhereButHere" ).addEventListener( "click", this.anywhereButHere.bind( this ), false );
    document.getElementById( "toTheMoon" ).addEventListener( "click", this.flyToMoon.bind( this ), false );
    document.getElementById( "aboutSite" ).addEventListener( "click", this.aboutSite.bind( this ), false );
    document.getElementsByClassName( "cesium-home-button" )[0].addEventListener( "click", this.globeReset.bind( this ), false );
    document.getElementsByClassName( "cesium-viewer-geocoderContainer" )[0].addEventListener( "submit", this.searchGlobe.bind( this ), false );
   },
  globeReset : function(e) {
    event.preventDefault();
    this.MoonView.slideInNav();
  },
  searchGlobe : function(e) {
    event.preventDefault();
    this.MoonView.slideInNav();
    this.MoonView.stopRotation();

  },
  takeMeHome : function(e) {
    event.preventDefault();
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.TakeMeHome.flyHome( this.initHomeElems.bind( this ) );

  },
  anywhereButHere : function(e) {
    event.preventDefault();
    this.MoonView.slideOutNav();
    this.MoonView.stopRotation();
    this.AnywhereElse.initialize( this.initAnywhereElems.bind( this ) );

  },
  flyToMoon : function(e) {
    event.preventDefault();
    this.MoonView.stopRotation();
    this.MoonView.slideOutNav();
    this.MoonFlyer.initialize( this.initMoonElems.bind( this ), this.MoonFlyer.sayGoodbye );
  },
  aboutSite : function(e){
    $( "#cesiumContainer" ).velocity( "fadeOut", { duration: 3800 } );

    setTimeout( showAbout, 500 );
    function showAbout() {
      TINY.box.show({url:'advanced.html',width:500,height:150})
    }
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