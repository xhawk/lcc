/**
 * Fire up everything
 * Created using http://clock.co.uk/tech-blogs/a-simple-website-in-nodejs-with-express-jade-and-stylus article
 */
var express = require('express');

var app = express();

// setup jade
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');

// serve those statics from here
app.use(express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/bower_components'));

// this catches the request that first comes to domain
app.get('/', function(req, res){
    res.render('index');
});

// these are the templates that angular app requests
app.get('/templates/:name', function (req, res) {
    var name = req.params.name;
    res.render('templates/' + name);
});

app.listen(process.env.PORT || 3000);

