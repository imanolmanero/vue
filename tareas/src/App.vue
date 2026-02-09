<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav style="display:flex; gap: 12px; padding: 12px; border-bottom: 1px solid #ccc;">
      <RouterLink to="/">Tareas</RouterLink>
      <RouterLink to="/nueva">Nueva Tarea</RouterLink>
    </nav>
  </header>

  <div>
    <RouterView />
  </div>
</template>
