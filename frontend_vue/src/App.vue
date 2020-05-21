<template>
    <router-view></router-view>
</template>

<script>
  import MenuToolbar from './components/parts/MenuToolbar';
  import {mapMutations} from 'vuex';

  export default {
    components: {
      MenuToolbar,
    },
    methods: mapMutations(['cambiarDark']),
  };
</script>

<style>
  .toast-success{
    font-family: Maven Pro;
    font-style: normal;
    font-size: 15px;
  }
  .toast-error{
    font-family: Maven Pro;
    font-style: normal;
    font-size: 15px;
  }
  .toast {
    opacity: .9 !important;
  }
  #toast-container > div {
    opacity: .9 !important; 
  }
</style>