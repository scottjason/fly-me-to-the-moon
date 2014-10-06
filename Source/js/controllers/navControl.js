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
        this.outOptions = [ "slide", { direction: "right" }, 450 ];
        this.inOptions = [ "slide", { direction: "left" }, 450 ];
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
        $("#toTheMoon").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#anywhereButHere").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#takeControl").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#takeMeHome").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    },
    controlSlideOut : function() {
        $("#toTheMoon").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#anywhereButHere").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#takeControl").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#takeMeHome").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    },
    anywhereSlideOut : function() {
        $("#toTheMoon").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#anywhereButHere").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#takeControl").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $("#takeMeHome").toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    },
    moonSlideOut : function() {
        $( "#toTheMoon" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $( "#anywhereButHere" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $( "#takeControl" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
        $( "#takeMeHome" ).toggle( this.outOptions[0], this.outOptions[1], this.outOptions[2] );
    },
    slideInAll : function() {
        console.log( this );
    }
}

var navControl = new NavControl();