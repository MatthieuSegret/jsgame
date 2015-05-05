var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
app.use(express.static("/generated"));
app.listen(port);
console.log("Starting express web server in \"" + "/generated" + "\" on port " + port);
