$( document ).ready(function(){
  createGlobe();
});

window.onload = function(){
  $("body").removeClass("preload");
   controller.initialize( takeMeHome, anywhereElse, moonFlyer, moonView );
}
