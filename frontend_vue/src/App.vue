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
