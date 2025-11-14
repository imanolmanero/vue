<script setup>
import { computed, reactive, ref } from 'vue'

let aProductos = reactive([{ "nombre": "Libro", "precio": 15 }, { "nombre": "Cafe", "precio": 3 }, { "nombre": "Boligrafo", "precio": 2 }])
let total = computed(()=>{
    //return aProductos.reduce((acumulado, producto) => acumulado + producto.precio, 0)
    //Forma dificil pero corta con .reduce
    let acumulado = 0
    aProductos.forEach(producto=> {
        acumulado += producto.precio
    })
    return acumulado
    //Esto es la forma facil con el foreach
})

</script>

<template>
    <h2>{{ producto }}</h2>
    <ul>
        <li v-for="producto in aProductos">{{ producto["nombre"] }} - ${{ producto["precio"] }}</li>
    </ul>
    <h3>Total: ${{ total }}</h3>
</template>