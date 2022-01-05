const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/test2?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
});

app.post('/todo/new', async (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})
	try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
});

app.delete('/todo/delete/:id', async (req, res) => {
	try {
		const result = await Todo.findByIdAndDelete(req.params.id);
		res.json({result});
	} catch (err) {
		res.json({message: err});
	}
});

app.get('/todo/complete/:id', async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		todo.complete = !todo.complete;
		await todo.save();
		res.json(todo);
	} catch (err) {
		res.json({message: err});
	}
})

app.put('/todo/update/:id', async (req, res) => {
	// const todo = await Todo.findById(req.params.id);
	// todo.text = req.body.text;
	// todo.save();
	// res.json(todo);

	try {
		const todo = await Todo.findById(req.params.id);
		todo.text = req.body.text;
		await todo.save();
		res.json(todo);
	} catch (err) {
		res.json({message: err});
	}
});


app.listen(3001);
