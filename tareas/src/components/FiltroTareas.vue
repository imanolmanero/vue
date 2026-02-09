<script setup>
const props = defineProps({
    filtroActual: String,
});

const emit = defineEmits(["cambiar"]);
</script>

<template>
    <div>
        <button @click="emit('cambiar','todas')"
        >
        Todas
        </button>
        <button @click="emit('cambiar','completadas')"
        >
        Completadas
        </button>
        <button @click="emit('cambiar','pendientes')"
        >
        Pendientes
        </button>
    </div>
</template>