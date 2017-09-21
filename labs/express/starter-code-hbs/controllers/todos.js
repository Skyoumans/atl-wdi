const express = require('express');
const router = express.Router();
const data = require('../data.js');

/* INDEX ROUTE */
router.get('/', function(req, res) {
    
      res.render('todos/index', {
        todos: data.seededTodos
      });
    });

/* NEW ROUTE */
router.get('/new', (req, res) => {
    res.render('todos/new');
})

/* SHOW ROUTE */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];

/* SHOW ERROR */
    if (!todo){
        res.render('todos/show', {
            error: "No to-do found with this Id"
        })
    } else {
    res.render('todos/show', {
        todo: todo
    })
}
})

/* POST ROUTE (Dont forget to install body-parser)*/
router.post('/', (req, res) => {
    console.log(req.body)
    const newTodo = req.body
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
});

/* EDIT ROUTE */
router.get('/:id/edit', function(req, res){
    res.render('todos/edit', {
      todo: {
        id: req.params.id,
        description: data.seededTodos[req.params.id].description,
        urgent: data.seededTodos[req.params.id].urgent,
      }
    });
  });

/* UPDATE ROUTE */
router.put('/:id', function(req, res) {
    var todoToEdit = data.seededTodos[req.params.id];
  
    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
  
    res.redirect('/todos');
  });

/* DELETE ROUTE */
router.delete('/:id', function(req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos');  // redirect back to the index route
});

  module.exports = router