var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
app.use(express.static("" + (process.cwd()) + "/generated"));
app.listen(port);
console.log("Starting express web server in \"" + (process.cwd())  + "/generated" + "\" on port " + port);
