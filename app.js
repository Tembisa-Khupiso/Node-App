var express= require('express');
var app = express();
var handlebars = require('express-handlebars');
var path = require('path');

// Register Handlebars view engine
app.engine( 'hbs', handlebars({
  extname: 'hbs'
  // defaultView: 'default',
  // layoutsDir: __dirname + '/views/pages/',
  // partialsDir: __dirname + '/views/partials/'
}));

// Use Handlebars view engine
app.set('view engine', 'hbs');

//Set path for static files
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

//Get bowling_game page
app.get('/', (req, res) => {
  res.render('bowling_game');
});

app.listen(8080);