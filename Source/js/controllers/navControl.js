function NavControl() {
  if (!( this instanceof NavControl )) {
    return new NavControl();
  }
};

NavControl.prototype = {
  initialize : function() {
    var slideOptions = [ "slide", {direction : "right"}, 450 ];
    this.homeClickEvent( slideOptions );
    this.controlClickEvent( slideOptions );
    this.anywhereClickEvent( slideOptions );
    this.moonClickEvent( slideOptions );
  },
  homeClickEvent : function( slideOptions ) {
    $( "#takeMeHome" ).click(function() {
    $( "#toTheMoon" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#anywhereButHere" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2]);
    $( "#takeControl" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#takeMeHome" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
   });
  },
  controlClickEvent : function( slideOptions ) {
    $( "#takeControl" ).click(function() {
    $( "#toTheMoon" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#anywhereButHere" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2]);
    $( "#takeControl" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#takeMeHome" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
   });
  },
  anywhereClickEvent : function( slideOptions ) {
    $( "#anywhereButHere" ).click(function() {
    $( "#toTheMoon" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#anywhereButHere" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2]);
    $( "#takeControl" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#takeMeHome" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
   });
  },
  moonClickEvent : function( slideOptions ) {
    $( "#toTheMoon" ).click(function() {
    $( "#toTheMoon" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#anywhereButHere" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2]);
    $( "#takeControl" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
    $( "#takeMeHome" ).toggle( slideOptions[0], slideOptions[1], slideOptions[2] );
   });
  }
}

var navControl = new NavControl();