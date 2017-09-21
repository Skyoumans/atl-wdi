const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');


/* Show Pirates Index */
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: allThePirates
    })
})

router.get('/new', (req, res) => {
    res.render('pirates/new')
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates.allThePirates[id];
        res.render('pirates/show', {pirate})
})

router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    pirates.allThePirates.push(newPirate);
    res.redirect('/pirates');
})


// router.post('/', (req, res) => {
//     const newPirate
// })


module.exports = router;