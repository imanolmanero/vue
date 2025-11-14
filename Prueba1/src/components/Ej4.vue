<script setup>
import {ref} from 'vue'

let aTareas = ref(["Aprender vue","Practicar JavasScript","Meter la pisa al horno"])

function agregarTarea(){
    let tarea = prompt("Escribe una tarea...")
    aTareas.value.push(tarea)
}

</script>

<template>
    <h2>Mis tareas {{ aTareas.length }}</h2>
    <ul>
        <li v-for="tarea in aTareas">{{ tarea }}</li>
    </ul>
    <button @click="agregarTarea">Agregar Tarea</button>
</template>