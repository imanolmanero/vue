<script>
import Tienda from './components/Tienda.vue'

export default {
  name: 'App',
  components: {
    Tienda
  }
}
</script>

<template>
  <div class="app">
    <h1>Tienda de Informática EGIBIDE-ARRIAGA</h1>
    <Tienda />
  </div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: white;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
</style>