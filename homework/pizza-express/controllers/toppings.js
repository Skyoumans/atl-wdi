const express = require("express");
const router = express.Router();

router.get('/:type', (req, res, next) => {
    res.render("toppings.hbs", {
         message: req.params.type + " pizza! Great Choice!"
    });
});

module.exports = router