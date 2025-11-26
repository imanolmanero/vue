<script setup>
  import { ref } from 'vue';
  
  const tareas = ref([
    { nombre: 'Hacer la compra', completada: false },
    { nombre: 'Hacer ejercicio', completada: true },
    { nombre: 'Leer un libro', completada: false },
  ]);
  
  const cambiarEstadoTarea = (index) => {
    const tarea = tareas.value[index];
    if (tarea.completada) {
      tareas.value.splice(index, 1); // Elimina la tarea completada del array
    } else {
      tarea.completada = true;
    }
  };
  </script>

<template>
    <div>
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index" @dblclick="cambiarEstadoTarea(index)">
          <span>{{ tarea.nombre }}</span>
          <template v-if="tarea.completada">
            <strong> - Completada</strong>
          </template>
          <template v-else>
            <em> - Pendiente</em>
          </template>
        </li>
      </ul>
      <p v-if="tareas.length === 0">No hay tareas disponibles.</p>
    </div>
  </template>
  
  