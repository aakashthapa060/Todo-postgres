const {Router} = require("express");
const router = Router();
const {
	get_all_todos,
	create_todos
} = require("../controllers/todos.js")
router.route("/")
.get(get_all_todos)
.post(create_todos)


module.exports = router;