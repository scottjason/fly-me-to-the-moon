(function() {

  "use strict";

var express = require('express')
  , compression = require('compression')
  , url = require('url')
  , port = process.env.PORT || 3000

var app = express();
  app.use( compression() );
  app.use( express.static(__dirname) );

var server = app.listen(port, function(){
  console.log( "Node server listening on " + port );
});

})();