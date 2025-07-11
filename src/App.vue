<script setup lang="ts">
import Todos from './components/Todos.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

