const express = require('express');
const Todo = require('../models/todo.model');
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  try {
    // Find and sort todos with time
    const todos = await Todo.find().sort([['createdAt', -1]]).limit(4);
    res.send(todos);
  } catch (err) {
    console.log('error');
    console.log(err.message);
  }
});

//Add  new todo
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      name: req.body.name,
      createdAt: Date.now()
    });
    await todo.save();
    res.send(todo);
  } catch (err) {
    console.log('error');
    console.log(err.message);
  }
});


module.exports = router;