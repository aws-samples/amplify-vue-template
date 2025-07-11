<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import IconTrash from './icons/IconTrash.vue';

const client = generateClient<Schema>();

// create a reactive reference to the array of todos
const todos = ref<Array<Schema['Todo']["type"]>>([]);

function listTodos() {
  client.models.Todo.observeQuery().subscribe({
    next: ({ items, isSynced }) => {
      todos.value = items
     },
  }); 
}

function createTodo() {
  client.models.Todo.create({
    content: window.prompt("Todo content")
  }).then(() => {
    // After creating a new todo, update the list of todos
    listTodos();
  });
}

function deleteTodo(id: string) {
  client.models.Todo.delete({ id }).then(() => {
    listTodos();
  });
}
    
// fetch todos when the component is mounted
 onMounted(() => {
  listTodos();
});

</script>

<template>
  <main>
    <h1>My todos</h1>
    <button @click="createTodo">+ new</button>
    <ul>
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        style="display: flex; align-items: center; gap: 8px;"
      >
        <span style="flex: 1;">{{ todo.content }}</span>
        <button @click="deleteTodo(todo.id)" title="Delete" style="background: none; border: none; cursor: pointer; color: #d00; font-size: 1.2em;">
          <IconTrash />
        </button>
      </li>
    </ul>
    <div>
      🥳 App successfully hosted. Try creating a new todo.
      <br />
      <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
        Review next steps of this tutorial.
      </a>
    </div>
  </main>
</template>
