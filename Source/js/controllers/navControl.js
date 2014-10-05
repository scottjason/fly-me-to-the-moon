function NavControl() {
  if (!( this instanceof NavControl )) {
    return new NavControl();
  }
};

NavControl.prototype = {
  initialize : function() {
    this.outOptions = [ "slide", { direction : "right" }, 450 ];
    this.bindListeners();
  },
  bindListeners : function() {
    document.getElementById( "takeMeHome" ).addEventListener("click", this.homeSlideOut.bind( this, this.homeSlideIn.bind( this ) ), false );
    document.getElementById( "takeControl" ).addEventListener("click", this.controlSlideOut.bind( this, this.controlSlideIn.bind( this ) ), false );
    document.getElementById( "anywhereButHere" ).addEventListener("click", this.anywhereSlideOut.bind( this, this.anywhereSlideIn.bind( this ) ), false );
    document.getElementById( "toTheMoon" ).addEventListener("click", this.moonSlideOut.bind( this, this.moonSlideIn.bind( this ) ), false );
  },
  homeSlideOut : function( callback ) {
    $( "#toTheMoon" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#anywhereButHere" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeControl" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeMeHome" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );

      callback();
  },
  homeSlideIn : function() {

  },
  controlSlideOut : function( callback ) {
    $( "#toTheMoon" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#anywhereButHere" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeControl" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeMeHome" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );

      callback();
  },
  controlSlideIn : function() {

  },
  anywhereSlideOut : function( callback ) {
    $( "#toTheMoon" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#anywhereButHere" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeControl" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeMeHome" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );

      callback();
  },
  anywhereSlideIn : function() {

  },
  moonSlideOut : function( callback ) {
    $( "#toTheMoon" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#anywhereButHere" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeControl" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    $( "#takeMeHome" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );

      callback();
  },
  moonSlideIn : function() {

  }
}

var navControl = new NavControl();