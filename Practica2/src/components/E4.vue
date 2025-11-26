
  <script setup>
  import { ref } from 'vue';
  
  const mostrar = ref(false);
  
  const mostrarOcultar = () => {
    mostrar.value = !mostrar.value;
  };
  </script>

<template>
    <div>
      <button @click="mostrarOcultar">Mostrar/Ocultar Mensaje</button>
      <p v-if="mostrar">¡Hola, este es un mensaje!</p>
    </div>
  </template>