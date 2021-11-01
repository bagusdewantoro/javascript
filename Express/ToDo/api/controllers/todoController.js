// Controllers are functions that handle incoming HTTP requests and send response back to the caller

// import Todo Model
const Todo = requre('../models/todoModel');

// Get all todos
exports.listAllTodos = (req, res) => {
  Todo.find({}, (err, todo) => {
    if (err) res.status(500).send(err);
    res.status(200).json(todo);
  });
};
