<script setup>
    import {ref} from 'vue'

    let texto = ref("")
    function actualizar(){
        texto.value = event.target.value
    }

</script>

<template>
    <input type="text" @input="actualizar" placeholder="Escribe algo...">
    <!-- <input type="text" v-model="texto" placeholder="Escribe algo..."> 
    Con v-model hace lo mismo que la funcion mas simple-->
    <h3>Has escrito: {{ texto }}</h3>
</template>