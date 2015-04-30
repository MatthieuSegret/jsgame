module.exports = function(grunt) {
  var express = require('express');
  var errorhandler = require('errorhandler');

  grunt.registerTask("server", "static file development server", function() {
    var webPort = grunt.config.get("server.web.port") || 8080;
    var webRoot = grunt.config.get("server.base") || "dist";
    var app = express();

    app.use(express.static("" + (process.cwd()) + "/" + webRoot));
    app.use(errorhandler());
    app.listen(webPort);

    console.log("Starting express web server in \"" + (process.cwd())  + "/" + webRoot + "\" on port " + webPort);
    return app;
  });
};
