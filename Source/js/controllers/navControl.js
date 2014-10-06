function NavControl() {
    if ( !(this instanceof NavControl) ) {
        return new NavControl();
    }
};

function collectHomeObject() {
    var homeButton = document.getElementsByClassName( "cesium-viewer-toolbar" )
        homeButton[0].addEventListener( "click", NavControl.prototype.slideInAll.bind( new NavControl ), false );
}

NavControl.prototype = {
    initialize : function() {
        this.bindListeners();
    },
    bindListeners : function() {
        document.getElementById( "takeMeHome" ).addEventListener( "click", this.homeSlideOut.bind( this ), false );
        document.getElementById( "takeControl" ).addEventListener( "click", this.controlSlideOut.bind( this ), false );
        document.getElementById( "anywhereButHere" ).addEventListener( "click", this.anywhereSlideOut.bind( this ), false );
        document.getElementById( "toTheMoon" ).addEventListener( "click", this.moonSlideOut.bind( this ), false );
        window.setTimeout( collectHomeObject, 2000 );
    },
    homeSlideOut : function() {
        var outOptions = [ "slide", { direction: "right" }, 450 ];
        $("#toTheMoon").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#anywhereButHere").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#takeControl").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#takeMeHome").toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
    controlSlideOut : function() {
        var outOptions = [ "slide", { direction: "right" }, 450 ];
        $("#toTheMoon").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#anywhereButHere").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#takeControl").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#takeMeHome").toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
    anywhereSlideOut : function() {
        var outOptions = [ "slide", { direction: "right" }, 450 ];
        $("#toTheMoon").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#anywhereButHere").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#takeControl").toggle( outOptions[0], outOptions[1], outOptions[2] );
        $("#takeMeHome").toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
    moonSlideOut : function() {
        var outOptions = [ "slide", { direction: "right" }, 450 ];
        $( "#toTheMoon" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
        $( "#anywhereButHere" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
        $( "#takeControl" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
        $( "#takeMeHome" ).toggle( outOptions[0], outOptions[1], outOptions[2] );
    },
    slideInAll : function() {
        console.log( this );
    }
}

var navControl = new NavControl();