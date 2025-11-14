<script setup>
import {ref} from 'vue'
let nombre = ref("")
let edad = ref("")
let ciudad = ref("")

</script>

<template>
    <h2>Perfil de usuario</h2>
    <input type="text" v-model="nombre" placeholder="nombre">
    <input type="text" v-model="edad" placeholder="edad">
    <input type="text" v-model="ciudad" placeholder="ciudad">
    <h3>{{nombre}} tiene {{Number(edad)}} años y vive en {{ciudad}}</h3>
</template>