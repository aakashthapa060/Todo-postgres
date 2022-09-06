const Todos = require("../database/connect_database.js");

const get_all_todos = async (req,res) => {
	const text = 'SELECT * FROM todos'
	try {
		const data = await Todos.query(text)
		res.status(200).json({todos:data.rows})
	} catch(e) {
		console.log(e);
	}
}

const create_todos = async(req,res) => {
	const text = "INSERT INTO todos (todo_name) VALUES($1) RETURNING *"
	const values = [req.body.todo_name];
	try {
		const todo = await Todos.query(text,values);
		res.status(201).send(todo.rows)
	} catch(e) {
		// statements
		console.log(e);
	}
}

module.exports = {
	get_all_todos,
	create_todos
}