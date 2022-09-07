<script setup>
  import {reactive, onMounted} from 'vue';
  import TodoCard from '../components/TodoCard.vue';
  const todos = reactive({data: null})
  onMounted( async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/todos");
      const data = await response.json();
      todos.data = data;
      console.log(todos.data)
    } catch(e) {
      // statements
      console.log(e);
    }
  })
</script>

<template>
<div class="container">
  <div class="todos">
    <TodoCard v-for="(todo) in todos.data.todos" :todo_id="todo.todo_id" :todo_name='todo.todo_name'  />
  </div>
</div>

</template>

<style scoped>
  .container{
    margin: 0 auto;
    width: 1000px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .todos{
    width: 500px;
    height: auto;
  }
</style>