<script setup>
    import {reactive, ref} from 'vue'

    let persona = reactive ({"nombre":"Ana","correo":"ana@example.com","edad":25})

    function cumplirAnnos(){
        persona.edad++
    }
    //Si usas reactive no hace falta poner el .value

</script>

<template>
    <h2>{{persona['nombre']}} ({{ persona['edad'] }})</h2>
    <h3>{{ persona['correo'] }}</h3>
    <button @click="cumplirAnnos">Cumplir años</button>
    <!-- <button @click="persona.edad++">Cumplir años</button> -->

</template>