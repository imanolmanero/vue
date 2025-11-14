<script setup>
import contador from './components/Ej1.vue'
import inputTexto from './components/Ej2.vue'
import cumplirAnnos from './components/Ej3.vue'
import agregarTarea from './components/Ej4.vue'
import mostarNombre from './components/Ej5.vue'
import productos from './components/Ej6.vue'
</script>

<template>
  <h1>Ejercicio 1</h1>
  <contador></contador>
  <br></br>
  <br></br>
  <h1>Ejercicio 2</h1>
  <inputTexto></inputTexto>
  <br></br>
  <br></br>
  <h1>Ejercicio 3</h1>
  <cumplirAnnos/>
  <br></br>
  <br></br>
  <h1>Ejercicio 4</h1>
  <agregarTarea></agregarTarea>
  <br></br>
  <br></br>
  <h1>Ejercicio 5</h1>
  <mostarNombre></mostarNombre>
  <br></br>
  <br></br>
  <h1>Ejercicio 6</h1>
  <productos></productos>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
