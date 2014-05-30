var express = require("express"),
    habitat = require("habitat");

habitat.load();

var app = express(),
    env = new habitat(),
    port = Number(env.get("PORT") || 8080);

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
  console.log("Listening on port: " + port);
});
