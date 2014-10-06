function NavView() {
  if (!( this instanceof NavView )) {
    return new NavView();
  }
};

NavView.prototype = {
  hideElemsForHome : function() {
   $( "#giveInstructions" ).hide();
   $( "#paradiseLocation" ).hide();
   $( "#userLocation" ).hide();
  },
  renderHomeElems : function( location ) {
   $( "#userLocation" ).show();
   $( "#userLocation" ).html( "flying you home to " + location );
 },
  hideElemsForControl : function() {
   $( "#userLocation" ).hide();
   $( "#paradiseLocation" ).hide();
   $( "#giveInstructions" ).hide();
 },
  renderControlElems : function() {
   $( "#giveInstructions" ).show();
   $( "#giveInstructions" ).html( "'U' moves up | 'D' moves down | 'L' moves left | 'R' moves right | 'B' moves backward | 'F' moves forward" );
 },
  hideElemsForAnywhere : function() {
   $( "#giveInstructions" ).hide();
   $( "#userLocation" ).hide();
   $( "#paradiseLocation" ).hide();
  },
  renderAnywhereElems : function( content ) {
    $( "#paradiseLocation" ).show();
    $( "#paradiseLocation" ).html( "You are visiting paradise on Earth. Welcome to " + content );
 },
 hideElemsForMoon : function() {
   $( "#paradiseLocation" ).hide();
   $( "#giveInstructions" ).hide();
   $( "#userLocation" ).hide();
 },
  renderMoonElems : function() {
 }
}

var navView = new NavView();