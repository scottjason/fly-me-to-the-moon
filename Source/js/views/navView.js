function NavView() {
  if (!( this instanceof NavView )) {
    return new NavView();
  }
};

NavView.prototype = {
  hideElemsForHome : function() {
   $( "#giveInstructions" ).hide();
   $( "#paradiseLocation" ).hide();
  },
  renderHomeElems : function( location ) {
   $( "#userLocation" ).show();
   $( "#userLocation" ).html( "flying you home to " + location );
},
  renderControlElems : function() {
   $( "#userLocation" ).hide();
   $( "#paradiseLocation" ).hide();
   $( "#giveInstructions" ).show();
   $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" );
},
  renderAnywhereElems : function() {
   $( "#giveInstructions" ).hide();
   $( "#userLocation" ).hide();
   $( "#paradiseLocation" ).hide();
},
  renderParadiseElems : function( content ) {
   $( "#paradiseLocation" ).html( "You are visiting paradise on Earth. Welcome to " + content );
},
  renderGoodByeElems : function() {
   $( "#paradiseLocation" ).hide();
   $( "#giveInstructions" ).hide();
   $( "#userLocation" ).hide();
 }
}

var navView = new NavView();