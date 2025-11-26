<script setup>
// https://lenguajejs.com/vuejs/directivas-vue/v-for/
import { ref } from 'vue';

const items = ref(['Elemento 1', 'Elemento 2', 'Elemento 3']);
//const items = ref('');
</script>

<template>
  <div>
    <ul v-if="items.length > 0">
      <li v-for="(item, index ) in items" :key="index">{{ item }}</li>
    </ul>
    <p v-else>No hay elementos en la lista.</p>
  </div>
</template>