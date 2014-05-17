var express = require('express'),
    app = express();

app.set('port', (process.env.PORT || 8080))

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log("Listening on port: " + app.get('port'))
});
