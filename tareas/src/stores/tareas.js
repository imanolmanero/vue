import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import tareasIniciales from "../data/tareas.json"


export const useTareasStore = defineStore('tareas', {
  state() {
    return {
      tareas: tareasIniciales,
      filtro: "todas",
      tareaSeleccionadaId: null,
    };
  },

  getters: {
    tareasFiltradas(state){
      if(state.filtro === "completadas"){
        return state.tareas.filter(function(t){
          return t.completada === true;
        });
      }

      if(state.filtro === "pendientes"){
        return state.tareas.filter(function(t){
          return t.completada === false;
        });
      }

      return state.tareas;
    },

    tareaSeleccionada(state){
      return state.tareas.find(function(t){
        return t.id === state.tareaSeleccionadaId
      });
    }

  },

  actions: {
    setFiltro(nuevoFiltro){
      this.filtro = nuevoFiltro;
    },

    seleccionarTarea(id){
      this.tareaSeleccionadaId = id;
    },

    marcarCompletada(id){
      const tarea = this.tareas.find(function(t){
        return t.id === id;
      })

      if (tarea){
        tarea.completada = true;
      }
    },

    cerrar(){
      this.tareaSeleccionadaId = null
    },

    añadirTarea(titulo,descripcion,fechaInicio){
      const nuevaTarea = {
        id: this.tareas.length + 1,
        titulo: titulo,
        descripcion: descripcion,
        fechaInicio: fechaInicio,
        completada: false,
      };

      this.tareas.push(nuevaTarea)
    }

  }

});
