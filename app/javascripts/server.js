var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
app.use(express.static("" + (process.cwd()) + "/app/"));
app.listen(port);
console.log("Starting express web server in \"" + (process.cwd()) + "/app/" + "\" on port " + port);
