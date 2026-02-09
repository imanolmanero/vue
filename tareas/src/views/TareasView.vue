<script setup>
import { useTareasStore } from '@/stores/tareas';
import FiltroTareas from '@/components/FiltroTareas.vue';
import DetalleTareas from '@/components/DetalleTareas.vue';

const tareasStore = useTareasStore();

function cambiarFiltro(nuevo){
    tareasStore.setFiltro(nuevo)
}

function seleccionar(id){
    tareasStore.seleccionarTarea(id);
}

function completar(id){
    tareasStore.marcarCompletada(id);
}


</script>

<template>
    <div>
        <h1>Lista de Tareas</h1>

        <FiltroTareas :filtro-actual="tareasStore.filtro" @cambiar="cambiarFiltro"></FiltroTareas>

        <ul>
            <li v-for="tarea in tareasStore.tareasFiltradas"
            :key="tarea.id"
            @click="seleccionar(tarea.id)"
            >
            {{ tarea.titulo }} ->
            <span v-if="tarea.completada">Completada</span>
            <span v-else>No completada</span>
            </li>
        </ul>

        <DetalleTareas :tarea="tareasStore.tareaSeleccionada" @completar="completar" @cerrar="tareasStore.cerrar()"></DetalleTareas>

    </div>
</template>