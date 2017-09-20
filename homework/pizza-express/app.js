const express = require("express");
const app = express();
const port = 3000;
const hbs = require('hbs');
const indexController = require('./controllers/index.js');
const orderController = require('./controllers/order.js');
const toppingsController = require('./controllers/toppings.js');

app.use('/', indexController);
app.use('/order', orderController);
app.use('/topping', toppingsController);
app.use(express.static(__dirname + '/public'));

app.set("view engine", "hbs");
app.set('views', './views');

app.listen(port, function() {
    console.log("Listening on port " + port);
});
