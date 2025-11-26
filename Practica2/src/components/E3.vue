<script setup>
import { ref, computed } from 'vue';

// Variable reactiva para el mensaje
const nuevoMensaje = ref('');

// Propiedad computada para contar caracteres
const contarCaracteres = computed(() => nuevoMensaje.value.length);

// Mensaje a mostrar
const mensaje = computed(() => {
  if (contarCaracteres.value === 0) {
    return 'Escribe algo...';
  } else {
    return 'Mensaje:' + nuevoMensaje.value;
  }
});
</script>

<template>
  <div>
    <h1>{{ mensaje }}</h1>
    <input v-model="nuevoMensaje" placeholder="Escribe un mensaje" />
    <p>Longitud del mensaje: {{ contarCaracteres }}</p>
  </div>
</template>