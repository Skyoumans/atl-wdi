/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var methodOverride = require('method-override');
const bodyParser = require('body-parser');

/* Controllers */
const todosController = require("./controllers/todos");


/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
app.use(methodOverride('_method'));
// log
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/todos', todosController);



/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
