<script>
import Producto from './Producto.vue'

export default {
  name: 'ListaProductos',
  components: {
    Producto
  },
  props: {
    productos: {
      type: Array,
      required: true
    }
  },
  emits: ['agregar']
}
</script>

<template>
  <div class="productos-card">
    <h2>Productos</h2>
    <div class="productos-lista">
      <Producto 
        v-for="producto in productos" 
        :key="producto.id"
        :producto="producto"
        @agregar="$emit('agregar', producto)"
      />
    </div>
  </div>
</template>

<style scoped>
.productos-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.productos-card h2 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.productos-lista {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>