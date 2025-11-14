<script setup>
import {ref} from 'vue'

let nombre = ref("")
let edad = ref("")
//let nombreMayus = ref("")

// function mostrar(){
//     nombre.value = event.target.value
//     nombreMayus.value = nombre.value.toUpperCase()
// }

</script>

<template>
    <!-- <input type="text" @input="mostrar" placeholder="Tu nombre"> -->
    <input type="text" v-model="nombre" placeholder="Tu nombre">
    <input type="text" v-model="edad" placeholder="Tu edad">

    <h2>Normal: {{ nombre }}</h2>
    <h2>En mayusculas: {{ nombre.toUpperCase() }}</h2>
    <h3>Edad: {{ Number(edad) }}</h3>
<!-- Para que edad sea un numero y luego hacer calculos tiene que estar el number sino va a ser una cadena     -->
    <button @click="edad++">SumarEdad</button>
</template>