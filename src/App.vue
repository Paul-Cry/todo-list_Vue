<template>
  <div id="app">
   <h1>To-do list </h1>
   <todoList></todoList>
    </div>
</template>

<script>
import todoList from '@/components/todoList.vue'

export default {
  name: 'App',
  components: {
    todoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
