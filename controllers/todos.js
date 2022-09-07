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

const delete_todos = async (req,res) => {
	const text = "DELETE FROM todos WHERE todo_id = $1 RETURNING *";
	const values = [req.params.id]
	try {
		const response = await Todos.query(text,values);
		res.status(200).json(response.rows)
	} catch(e) {
		// statements
		console.log(e);
	}
}
const update_todo = async(req,res) => {
	// const text = 'UPDATE todos SET todo_name = $1 WHERE todo_id = $2 RETURNING *';
	let text = 'SELECT * FROM todos WHERE todo_id = $1';
	let values = [req.params.id]
	try {
		let response = await Todos.query(text,values);
		if(response.rows.length !== 0){
			text = 'UPDATE todos SET todo_name = $2 WHERE todo_id = $1 RETURNING *';
			if(req.body.todo_name !== ''){
				values.push(req.body.todo_name);
				response = await Todos.query(text,values);
				res.status(200).json(response.rows)
			}
			else{
				throw new Error("Todo Name Cannot be Empty")
			}
		}
		else{
			throw new Error("Value Not Found")
		}
	} catch(e) {
		console.log(e);
	}
}

module.exports = {
	get_all_todos,
	create_todos,
	delete_todos,
	update_todo
}