'use strict';

// create App function
    module.exports = function(app) {
        var todoList = require('../controllers/todoController');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/todos")
        .get(todoList.listAllTodos)
        .post(todoList.createNewTodo);

// put and delete request for /todos endpoints
        app
        .route("/todo/:id")
        .put(todoList.updateTodo)
        .delete(todoList.deleteTodo);
    };
