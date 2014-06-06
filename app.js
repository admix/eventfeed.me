var express = require("express"),
    habitat = require("habitat");

habitat.load();

var app = express(),
    env = new habitat(),
    port = Number(env.get("PORT") || 8080);

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next){
  res.send(404, 'Sorry cant find that!');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

app.listen(port, function() {
  console.log("Listening on port: " + port);
});
