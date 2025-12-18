<script>
import ItemCarrito from './ItemCarrito.vue'

export default {
  name: 'Carrito',
  components: {
    ItemCarrito
  },
  props: {
    carrito: {
      type: Array,
      required: true
    }
  },
  emits: ['actualizar', 'eliminar'],
  methods: {
    calcularTotal() {
      return this.carrito
        .reduce((total, item) => total + (item.precio * item.cantidad), 0)
        .toFixed(2)
    }
  }
}
</script>

<template>
  <div class="carrito-card">
    <h2>Carrito</h2>
    
    <div v-if="carrito.length === 0" class="carrito-vacio">
      <p>El carrito está vacío</p>
    </div>
    
    <div v-else>
      <div class="carrito-items">
        <ItemCarrito 
          v-for="item in carrito" 
          :key="item.id"
          :item="item"
          @actualizar="$emit('actualizar', item.id, $event)"
          @eliminar="$emit('eliminar', item.id)"
        />
      </div>
      
      <div class="total">
        <h3>Total: {{ calcularTotal() }}€</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carrito-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.carrito-card h2 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.carrito-vacio {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 1.2em;
}

.carrito-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.total {
  border-top: 3px solid #667eea;
  padding-top: 20px;
  text-align: right;
}

.total h3 {
  color: #667eea;
  font-size: 2em;
}
</style>