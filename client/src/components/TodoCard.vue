<script setup>
	const props = defineProps(['todo_id', 'todo_name'])
	const delete_todo = async (id) => {
		const url = `http://localhost:3001/api/v1/todos/${id}`
		try {
			const todo = await fetch(url, {
				method: "DELETE",
			})
		} catch(e) {
			// statements
			console.log(e);
		}
	}
</script>

<template>
	    <div class="todo-item">
      <div class="content">
        <p>{{todo_name}}</p>
        {{todo_id}}
      </div>
      <div class="buttons">
        <a>Update</a>
        <a @click="delete_todo(todo_id)">Delete</a>
      </div>
    </div>
</template>

<style scoped>
	.todo-item{
    height: 50px;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
  }
   .todo-item .content{
    flex-grow: 8;
  }
   .todo-item .content p{
    font-size: 18px;
    color: #444;

  }
   .todo-item .buttons{
    flex-grow: 2;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
   .todo-item .buttons a{
    background: #6b86ff;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;

  }
   .todo-item .buttons a:last-child{
    background: #ff7c6b;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>