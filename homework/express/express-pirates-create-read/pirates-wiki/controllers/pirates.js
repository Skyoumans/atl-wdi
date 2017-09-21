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

router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
        pirates: {
            id: req.params.id,
            name: pirates.allThePirates[req.params.id].name,
            birthplace: pirates.allThePirates[req.params.id].birthplace,
            death_year: pirates.allThePirates[req.params].death_year,
            base: pirates.allThePirates[req.params.id].base,
            nickname: pirates.allThePirates[req.params.id].nickname,
        }
    })
});

router.put('/:id', (req, res) => {
    const pirateToEdit = pirates.allThePirates
    [req.params.id];

    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;

    res.redirect('/pirates');
})

router.delete('/:id', (req, res) => {
    pirates.allThePirates.splice(req.params.id, 1);

    res.redirect('/pirates');
})

module.exports = router;