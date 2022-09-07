const {Router} = require("express");
const router = Router();
const {
	get_all_todos,
	create_todos,
	delete_todos,
	update_todo
} = require("../controllers/todos.js")
router.route("/")
.get(get_all_todos)
.post(create_todos)

router.route("/:id")
.delete(delete_todos)
.patch(update_todo)


module.exports = router;