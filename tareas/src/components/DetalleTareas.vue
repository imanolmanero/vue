<script setup>
const props = defineProps({
    tarea: Object,
})

const emit = defineEmits(["completar","cerrar"]);
</script>

<template>
    <div v-if="tarea">
        <h3>Detalle</h3>
        <p>ID: {{ tarea.id }}</p>
        <p>Titulo: {{ tarea.titulo }}</p>
        <p>Descripcion : {{ tarea.descripcion  }}</p>
        <p>Fecha de inicio : {{ tarea.fechaInicio  }}</p>
        <p>Completada: {{ tarea.completada }}</p>

        <button v-if="!tarea.completada" @click="emit('completar',tarea.id)">
            Marcar como completada
        </button>
        <button @click="emit('cerrar')">Cerrar</button>
    </div>
</template>