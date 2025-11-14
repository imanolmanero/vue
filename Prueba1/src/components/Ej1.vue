<script setup>
    import {ref} from 'vue'

    let contador = ref(0)
    function incrementar(){
        contador.value++
    }

</script>

<template>
    <h2>Contador: <span>{{ contador }}</span></h2>
    <button @click="incrementar">Incrementar</button>
    <button @click="contador--">Decrementar</button>
    <button @click="contador = 0">Restablecer</button>
</template>