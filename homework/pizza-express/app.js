const express = require("express");
const app = express();
const port = 3000;
const hbs = require('hbs');

app.set("view enging", "hbs");
app.set('views', './views');

app.listen(port, function() {
    console.log("Listening on port " + port);
});

app.get('/', (req, res) => {
    res.send("Welcome to Pizza Express!")
});
app.get('/topping/:type', (req, res, next) => {
    res.send(req.params.type + " pizza! Great choice.");
});
app.get('/order/:amount/:size', (req, res, next) => {
    res.send("Your order for " + req.params.amount + " " + req.params.size + " pizzas will be ready in 1 minute.")
});