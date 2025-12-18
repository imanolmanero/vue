<script>
import ListaProductos from './ListaProductos.vue'
import Carrito from './Carrito.vue'

export default {
  name: 'Tienda',
  components: {
    ListaProductos,
    Carrito
  },
  data() {
    return {
      productos: [
        { id: 1, nombre: 'Teclado', precio: 25 },
        { id: 2, nombre: 'Ratón', precio: 15 },
        { id: 3, nombre: 'Monitor', precio: 180 },
        { id: 4, nombre: 'Webcam', precio: 45 },
        { id: 5, nombre: 'Auriculares', precio: 35 }
      ],
      carrito: []
    }
  },
  methods: {
    agregarAlCarrito(producto) {
      const existe = this.carrito.find(item => item.id === producto.id)
      
      if (existe) {
        existe.cantidad++
      } else {
        this.carrito.push({
          ...producto,
          cantidad: 1
        })
      }
    },
    
    actualizarCantidad(id, cantidad) {
      const item = this.carrito.find(item => item.id === id)
      if (item) {
        item.cantidad = parseInt(cantidad)
      }
    },
    
    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter(item => item.id !== id)
    }
  }
}
</script>

<template>
  <div class="tienda-container">
    <ListaProductos :productos="productos" @agregar="agregarAlCarrito" />
    
    <Carrito :carrito="carrito" @actualizar="actualizarCantidad" @eliminar="eliminarDelCarrito" />
    
  </div>
</template>

<style scoped>
.tienda-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

</style>