const {Router} = require("express");
const router = Router();
const {
	get_all_todos,
	create_todos,
	delete_todos
} = require("../controllers/todos.js")
router.route("/")
.get(get_all_todos)
.post(create_todos)

router.route("/:id")
.delete(delete_todos)


module.exports = router;