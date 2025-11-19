<script setup>
    import {ref,computed} from 'vue'

    const nombre = ref("")
    const apellido = ref("")

    const nombreCompleto = computed(() => {
        return nombre.value + " " + apellido.value
    }

    )
</script>

<template>
    <h2>Tu nombre completo es: {{ nombreCompleto }}</h2>
    Nombre: <input type="text" v-model="nombre" placeholder="nombre">
    Apellido:<input type="text" v-model="apellido" placeholder="apellido">
</template>