<template>
  <section>
    <h1>BIENVENIDOS A MI APLICACION</h1>
    <button @click="cambiar">Cambiar Auth</button>


    <router-link to='/'>Home</router-link>
    <router-link to='/contacto'>Contacto</router-link>
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    methods: mapMutations(['cambiar']),
  };
</script>
