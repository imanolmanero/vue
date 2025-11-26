<script setup>
import { ref } from 'vue';

// Variables reactivas
const titulo = ref('Practica con v-bind');
const mensaje = ref('Este es un ejemplo práctico con v-bind en Vue 3');

// Clase dinámica con v-bind:class
const claseTitulo = ref('titulo-grande');

// Estilos dinámicos con v-bind:style
// reactive
const estilosParrafo = ref({
  color: 'blue',
  fontSize: '20px',
});

// Enlace dinámico con v-bind:href y v-bind:target
const enlace = ref({
  url: 'https://ejemplo.com',
  texto: 'Ir a Ejemplo',
  target: '_blank',
});
</script>

<template>
  <div>
    <h1 :class="claseTitulo">{{ titulo }}</h1>
    <p :style="estilosParrafo">{{ mensaje }}</p>
    <a :href="enlace.url" :target="enlace.target">{{ enlace.texto }}</a>
  </div>
</template>


<style scoped>
/* Estilo dinámico con v-bind:class */
.titulo-grande {
  font-size: 24px;
}
</style>