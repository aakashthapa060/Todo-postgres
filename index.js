const express = require("express");
const dotenv = require("dotenv");
const Todos_Route = require("./routes/todos.js")
const app = express();
dotenv.config({});

// Middleware
app.use(express.json())

// Routes
app.use("/api/v1/todos", Todos_Route);

// PORT
const PORT = 3001;
app.listen(PORT, (req,res) => {
	console.log(`PORT: *${PORT}`);
})


