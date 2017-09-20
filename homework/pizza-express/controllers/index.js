const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("index.hbs", {
        data: ("Welcome to Pizza Express")
    })
});

module.exports = router