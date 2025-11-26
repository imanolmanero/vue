<script setup>
import { ref} from 'vue';

const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const decrementar = () => {
  contador.value--;
};
</script>

<template>
  <div>
    <p v-if="contador === 0">El contador es igual a cero. </p>
    <p v-else-if="contador > 0">El contador es positivo. {{ contador }}</p>
    <p v-else>El contador es negativo. {{ contador }}</p>

    <button @click="incrementar">Incrementar contador</button>
    <button @click="decrementar">Decrementar contador</button>
  </div>
</template>