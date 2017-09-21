const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const pirateController = require('./controllers/pirates.js');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');

app.use("/pirates", pirateController);




const port = 3000
app.listen(port, () => {
    console.log("Express is listening on port", port);
})