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

// this catches the request that first comes to domain
app.get('/', function (req, res) {
    // 'index' tells to render index.jade file to html
    res.render('index',
        // title is passed as a variable to index.jade file
        { title : 'Etusivu' }
    )
});

app.listen(process.env.PORT || 3000);

