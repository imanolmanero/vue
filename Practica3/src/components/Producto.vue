<script>
export default {
  name: 'Producto',
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  emits: ['agregar']
}
</script>

<template>
  <div class="producto-item">
    <div class="producto-info">
      <h3>{{ producto.nombre }}</h3>
      <p class="precio">{{ producto.precio }}€</p>
    </div>
    <button @click="$emit('agregar')" class="btn-agregar">
      Agregar
    </button>
  </div>
</template>

<style scoped>
.producto-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s;
}

.producto-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

.producto-info h3 {
  color: #333;
  font-size: 1.2em;
  margin-bottom: 5px;
}

.precio {
  color: #667eea;
  font-weight: bold;
  font-size: 1.1em;
}

.btn-agregar {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: all 0.3s;
}

.btn-agregar:hover {
  background: #5568d3;
  transform: scale(1.05);
}
</style>