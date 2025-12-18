<script>
export default {
  name: 'ItemCarrito',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['actualizar', 'eliminar']
}
</script>

<template>
  <div class="item-carrito">
    <div class="item-info">
      <h4>{{ item.nombre }}</h4>
      <p class="precio-unitario">{{ item.precio }}€</p>
    </div>
    
    <div class="item-controles">
      <input 
        type="number" 
        :value="item.cantidad" 
        @input="$emit('actualizar', $event.target.value)"
        min="1"
        class="input-cantidad"
      />
      <button @click="$emit('eliminar')" class="btn-eliminar">
        Borrar
      </button>
    </div>
  </div>
</template>

<style scoped>
.item-carrito {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
}

.item-info h4 {
  color: #333;
  margin-bottom: 5px;
}

.precio-unitario {
  color: #666;
  font-size: 0.9em;
}

.item-controles {
  display: flex;
  gap: 10px;
  align-items: center;
}

.input-cantidad {
  width: 60px;
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
}

.btn-eliminar {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.3s;
}

.btn-eliminar:hover {
  background: #c82333;
  transform: scale(1.1);
}
</style>