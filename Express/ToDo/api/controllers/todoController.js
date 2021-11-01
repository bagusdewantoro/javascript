const Todo = requre('../models/todoModel');

// Get all todos
exports.listAllTodos = (req, res) => {
  Todo.find({}, (err, todo) => {
    if (err) res.status(500).send(err);
    res.status(200).json(todo);
  });
};
